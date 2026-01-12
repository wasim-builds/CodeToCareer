import { NextRequest, NextResponse } from 'next/server';
import { groq } from '@/lib/groq';
import { getDifficultyState, updateDifficulty, getDifficultyPrompt, getDifficultyInfo } from '@/lib/difficultyManager';
import { evaluateAnswer, generateQuickFeedback } from '@/lib/answerEvaluator';
import { saveQuestionScore, getSessionScore } from '@/lib/sessionScoring';

export const runtime = 'nodejs';

interface Message {
    from: 'user' | 'bot';
    text: string;
}

interface SessionStats {
    questionsAsked: number;
    mode: string;
}

interface InterviewChatRequest {
    message: string;
    mode: 'dsa' | 'hr' | 'system';
    conversationHistory?: Message[];
    sessionStats?: SessionStats;
    sessionId?: string; // For tracking difficulty and scoring
}

// Context prompts for each mode
const MODE_CONTEXTS = {
    dsa: `You are an expert technical interviewer conducting a Data Structures & Algorithms interview. 
Your role:
- Ask ONE challenging DSA question at a time (arrays, strings, trees, graphs, DP, etc.)
- When the candidate answers, provide constructive feedback
- Ask relevant follow-up questions about time/space complexity, edge cases, or optimizations
- Be encouraging but thorough
- If they struggle, give hints without revealing the answer
- Evaluate their problem-solving approach, not just the solution`,

    hr: `You are an experienced HR interviewer conducting a behavioral interview.
Your role:
- Ask ONE behavioral question at a time using the STAR method (Situation, Task, Action, Result)
- When the candidate answers, acknowledge their response and probe deeper
- Ask follow-up questions about specific details, outcomes, or lessons learned
- Be warm and encouraging
- Help them structure their answers if needed
- Evaluate communication skills, self-awareness, and problem-solving`,

    system: `You are a senior software architect conducting a system design interview.
Your role:
- Ask ONE system design question at a time (design URL shortener, chat app, etc.)
- When the candidate answers, discuss their architectural choices
- Ask follow-up questions about scalability, fault tolerance, database design, caching, etc.
- Challenge assumptions constructively
- Help them think through trade-offs
- Evaluate their ability to design scalable, reliable systems`,
};

export async function POST(req: NextRequest) {
    try {
        const body: InterviewChatRequest = await req.json();
        const { message, mode, conversationHistory = [], sessionStats, sessionId } = body;

        if (!message || !mode) {
            return NextResponse.json(
                { error: 'Message and mode are required' },
                { status: 400 }
            );
        }

        // Generate session ID if not provided
        const currentSessionId = sessionId || `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

        // Check if Groq is available
        if (!groq) {
            return getFallbackResponse(message, mode, currentSessionId);
        }

        // Get current difficulty state
        const difficultyState = getDifficultyState(currentSessionId, mode);
        const difficultyInfo = getDifficultyInfo(difficultyState.currentLevel);

        // Determine if user is asking for a new question
        const isAskingForQuestion =
            message.toLowerCase().includes('question') ||
            message.toLowerCase().includes('next') ||
            message.toLowerCase().includes('another') ||
            message.toLowerCase().includes('start') ||
            message.toLowerCase().includes('begin') ||
            message.length < 30;

        // Build messages for Groq
        const messages: any[] = [
            {
                role: 'system',
                content: MODE_CONTEXTS[mode],
            },
        ];

        // Add conversation history for context (last 3 exchanges)
        conversationHistory.slice(-6).forEach((msg) => {
            messages.push({
                role: msg.from === 'user' ? 'user' : 'assistant',
                content: msg.text,
            });
        });

        let evaluation = null;
        let lastQuestion = '';

        // If user is providing an answer (not asking for a question)
        if (!isAskingForQuestion && conversationHistory.length > 0) {
            // Get the last bot message (the question)
            const lastBotMessage = conversationHistory.slice().reverse().find(m => m.from === 'bot');
            lastQuestion = lastBotMessage?.text || '';

            // Evaluate the answer
            try {
                evaluation = await evaluateAnswer(message, lastQuestion, mode);
                console.log(`[InterviewChat] Answer evaluated - Score: ${evaluation.overallScore}`);

                // Update difficulty based on performance
                const updatedDifficultyState = updateDifficulty(currentSessionId, mode, {
                    answerQuality: evaluation.overallScore,
                });

                // Save question score to session
                if (typeof window !== 'undefined') {
                    try {
                        saveQuestionScore(currentSessionId, mode, {
                            question: lastQuestion,
                            answer: message,
                            evaluation,
                            difficulty: difficultyState.currentLevel,
                            timestamp: Date.now(),
                        });
                    } catch (error) {
                        console.log('[InterviewChat] Could not save score (server-side)');
                    }
                }
            } catch (error) {
                console.error('[InterviewChat] Evaluation error:', error);
                // Continue without evaluation
            }
        }

        // Add current message with context
        if (isAskingForQuestion) {
            const difficultyPrompt = getDifficultyPrompt(difficultyState.currentLevel, mode);
            messages.push({
                role: 'user',
                content: `Please ask me a ${mode.toUpperCase()} interview question.\n\n${difficultyPrompt}`,
            });
        } else {
            messages.push({
                role: 'user',
                content: message,
            });
        }

        // Call Groq API
        const chatCompletion = await groq.chat.completions.create({
            messages,
            model: 'llama-3.3-70b-versatile',
            temperature: 0.7,
            max_tokens: 800,
        });

        const reply = chatCompletion.choices[0]?.message?.content ||
            'I apologize, but I need a moment to think. Could you please try again?';

        // Determine if we should ask a follow-up
        let followUp: string | undefined;

        if (!isAskingForQuestion && reply.length > 100) {
            // Generate a follow-up question
            try {
                const followUpCompletion = await groq.chat.completions.create({
                    messages: [
                        {
                            role: 'system',
                            content: `Based on the candidate's answer, generate ONE brief follow-up question to dig deeper. Keep it under 100 characters. Be specific and relevant.`,
                        },
                        {
                            role: 'user',
                            content: `Candidate said: "${message}"\n\nMy response: "${reply}"\n\nWhat's a good follow-up question?`,
                        },
                    ],
                    model: 'llama-3.3-70b-versatile',
                    temperature: 0.8,
                    max_tokens: 100,
                });

                const generatedFollowUp = followUpCompletion.choices[0]?.message?.content?.trim();

                // Only include if it's actually a question
                if (generatedFollowUp && generatedFollowUp.includes('?')) {
                    followUp = generatedFollowUp;
                }
            } catch (error) {
                console.error('[InterviewChat] Follow-up generation error:', error);
            }
        }

        // Get current session score
        let sessionScore = undefined;
        if (typeof window !== 'undefined') {
            try {
                const session = getSessionScore(currentSessionId, mode);
                sessionScore = session.averageScore;
            } catch (error) {
                console.log('[InterviewChat] Could not get session score (server-side)');
            }
        }

        return NextResponse.json({
            reply,
            followUp,
            isNewQuestion: isAskingForQuestion,
            provider: 'groq',
            sessionId: currentSessionId,
            currentDifficulty: difficultyState.currentLevel,
            difficultyLabel: difficultyInfo.label,
            difficultyColor: difficultyInfo.color,
            evaluation: evaluation || undefined,
            sessionScore,
        });

    } catch (error: any) {
        console.error('Interview Chat Error:', error);

        // Fallback to basic response
        return getFallbackResponse(
            (error as any).message || 'Error',
            'dsa',
            `session_${Date.now()}`
        );
    }
}

// Fallback when Groq is unavailable
function getFallbackResponse(message: string, mode: string, sessionId: string) {
    const fallbackQuestions = {
        dsa: [
            'Given an array of integers, find two numbers that add up to a target sum. What approach would you use?',
            'How would you detect a cycle in a linked list? Explain your approach.',
            'Implement a function to reverse a binary tree. What\'s the time complexity?',
        ],
        hr: [
            'Tell me about a time you faced a challenging technical problem. How did you approach it?',
            'Describe a situation where you had to work with a difficult team member.',
            'How do you handle tight deadlines and pressure?',
        ],
        system: [
            'Design a URL shortening service like bit.ly. What components would you need?',
            'How would you design a rate limiter for an API?',
            'Design a notification system that can handle millions of users.',
        ],
    };

    const questions = fallbackQuestions[mode as keyof typeof fallbackQuestions] || fallbackQuestions.dsa;
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];

    return NextResponse.json({
        reply: randomQuestion,
        followUp: 'Can you explain your thought process?',
        isNewQuestion: true,
        provider: 'fallback',
        message: 'Using fallback - Groq API not available',
        sessionId,
        currentDifficulty: 2,
        difficultyLabel: 'Intermediate',
        difficultyColor: '#3b82f6',
    });
}
