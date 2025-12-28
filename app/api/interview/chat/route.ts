import { NextRequest, NextResponse } from 'next/server';
import { groq } from '@/lib/groq';

export async function POST(req: NextRequest) {
    try {
        const { messages, resumeText, interviewType, currentQuestion } = await req.json();

        if (!messages || messages.length === 0) {
            return NextResponse.json(
                { error: 'Messages are required' },
                { status: 400 }
            );
        }

        // Check if Groq is available
        if (!groq) {
            return NextResponse.json(
                { error: 'AI service not configured. Please add GROQ_API_KEY to .env.local' },
                { status: 503 }
            );
        }

        // Get the last user message
        const lastUserMessage = messages[messages.length - 1];

        // Build context for the AI
        const systemPrompt = `You are an expert ${interviewType} interviewer conducting an interview.

Resume Summary:
${resumeText ? resumeText.substring(0, 1000) : 'No resume provided'}

Interview Type: ${interviewType}
Current Question Number: ${currentQuestion + 1}

Your role:
1. Evaluate the candidate's answer
2. Provide constructive feedback
3. Ask a relevant follow-up question or move to the next topic
4. Be encouraging but professional
5. Focus on ${interviewType === 'technical' ? 'technical skills and problem-solving' :
                interviewType === 'behavioral' ? 'soft skills and past experiences' :
                    'coding ability and algorithmic thinking'}

Format your response as:
[Brief feedback on their answer]

[Next question or follow-up]`;

        // Prepare messages for Groq
        const groqMessages = [
            {
                role: 'system' as const,
                content: systemPrompt
            },
            ...messages.slice(-5).map((msg: any) => ({
                role: msg.role === 'user' ? 'user' as const : 'assistant' as const,
                content: msg.content
            }))
        ];

        const completion = await groq.chat.completions.create({
            model: 'llama-3.1-70b-versatile',
            messages: groqMessages,
            temperature: 0.7,
            max_tokens: 800,
        });

        const response = completion.choices[0]?.message?.content ||
            'Thank you for your answer. Let\'s move on to the next question.';

        console.log('[Interview Chat] Processed message', currentQuestion + 1);

        return NextResponse.json({
            response,
            questionNumber: currentQuestion + 1,
        });

    } catch (error: any) {
        console.error('[Interview Chat] Error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to process message' },
            { status: 500 }
        );
    }
}
