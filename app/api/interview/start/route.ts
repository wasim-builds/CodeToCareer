import { NextRequest, NextResponse } from 'next/server';
import { groq } from '@/lib/groq';

// Fallback questions when AI is unavailable
const FALLBACK_QUESTIONS = {
    technical: [
        "Can you walk me through your most technically challenging project? What technologies did you use and what problems did you solve?",
        "Describe a time when you had to debug a complex issue. What was your approach and what tools did you use?",
        "How do you stay updated with new technologies and best practices in software development?",
        "Tell me about a technical decision you made that you're particularly proud of. What was the context and outcome?"
    ],
    behavioral: [
        "Tell me about a time when you had to work with a difficult team member. How did you handle the situation?",
        "Describe a situation where you had to meet a tight deadline. How did you prioritize and manage your time?",
        "Can you share an example of when you received constructive criticism? How did you respond?",
        "Tell me about a project where you took initiative beyond your assigned responsibilities."
    ],
    coding: [
        "Can you explain your approach to writing clean, maintainable code? What principles do you follow?",
        "Describe your testing strategy. How do you ensure code quality?",
        "Walk me through how you would approach designing a scalable system for [a feature from your resume].",
        "Tell me about a time when you had to refactor legacy code. What was your strategy?"
    ]
};

export async function POST(req: NextRequest) {
    try {
        const { resumeText, interviewType } = await req.json();

        console.log('[Interview Start] Request received:', {
            interviewType,
            resumeLength: resumeText?.length || 0,
            hasGroq: !!groq
        });

        if (!resumeText) {
            return NextResponse.json(
                { error: 'Resume text is required' },
                { status: 400 }
            );
        }

        let firstQuestion: string;
        let usingFallback = false;

        // Try to use Groq AI if available
        if (groq) {
            try {
                console.log('[Interview Start] Attempting to generate question with Groq AI...');

                const prompt = `You are an expert interviewer. Based on the following resume, generate the first ${interviewType} interview question.

Resume:
${resumeText.substring(0, 2000)}

Interview Type: ${interviewType}

Generate a thoughtful, relevant question that:
1. Is specific to the candidate's experience
2. Is appropriate for a ${interviewType} interview
3. Encourages detailed responses
4. Tests both knowledge and practical experience

Provide only the question, no additional commentary.`;

                const completion = await groq.chat.completions.create({
                    model: 'llama-3.1-70b-versatile',
                    messages: [
                        {
                            role: 'system',
                            content: 'You are an expert technical interviewer who asks insightful, relevant questions based on candidates\' resumes.'
                        },
                        {
                            role: 'user',
                            content: prompt
                        }
                    ],
                    temperature: 0.7,
                    max_tokens: 500,
                });

                firstQuestion = completion.choices[0]?.message?.content || '';

                if (!firstQuestion) {
                    throw new Error('Empty response from AI');
                }

                console.log('[Interview Start] Successfully generated AI question');

            } catch (aiError: any) {
                console.error('[Interview Start] AI generation failed:', aiError.message);
                console.log('[Interview Start] Falling back to predefined questions');
                usingFallback = true;

                // Use fallback question
                const questions = FALLBACK_QUESTIONS[interviewType as keyof typeof FALLBACK_QUESTIONS] || FALLBACK_QUESTIONS.technical;
                firstQuestion = questions[Math.floor(Math.random() * questions.length)];
            }
        } else {
            console.log('[Interview Start] Groq API not configured, using fallback questions');
            usingFallback = true;

            // Use fallback question
            const questions = FALLBACK_QUESTIONS[interviewType as keyof typeof FALLBACK_QUESTIONS] || FALLBACK_QUESTIONS.technical;
            firstQuestion = questions[Math.floor(Math.random() * questions.length)];
        }

        console.log('[Interview Start] Returning question:', {
            interviewType,
            usingFallback,
            questionLength: firstQuestion.length
        });

        return NextResponse.json({
            firstQuestion,
            interviewType,
            usingFallback,
            message: usingFallback ? 'Using standard interview questions (AI service unavailable)' : undefined
        });

    } catch (error: any) {
        console.error('[Interview Start] Error:', error);
        console.error('[Interview Start] Error stack:', error.stack);

        return NextResponse.json(
            {
                error: error.message || 'Failed to start interview',
                details: process.env.NODE_ENV === 'development' ? error.stack : undefined
            },
            { status: 500 }
        );
    }
}
