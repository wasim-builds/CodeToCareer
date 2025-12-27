import { NextRequest, NextResponse } from 'next/server';
import { groq } from '@/lib/groq';
import { generateAITutorResponse } from '@/lib/ai';

export async function POST(request: NextRequest) {
    try {
        const { messages, topicId, topicName, context } = await request.json();

        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            return NextResponse.json(
                { error: 'Messages array is required' },
                { status: 400 }
            );
        }

        // Try Groq first for better quality responses
        if (groq) {
            try {
                // Build enhanced context string
                let systemPrompt = `You are an expert programming tutor helping students master technical concepts for interviews and real-world development.

Your teaching style:
- Explain concepts clearly with analogies and examples
- Provide working code snippets when helpful
- Break down complex topics into digestible parts
- Encourage critical thinking with follow-up questions
- Reference best practices and common pitfalls
- Be encouraging and supportive`;

                if (topicName) {
                    systemPrompt += `\n\nCurrent topic: ${topicName}`;
                }

                if (context) {
                    systemPrompt += `\n\nAdditional context: ${context.substring(0, 500)}`;
                }

                // Convert messages to Groq format
                const groqMessages: any[] = [
                    { role: 'system', content: systemPrompt },
                    ...messages.map((msg: any) => ({
                        role: msg.role === 'user' ? 'user' : 'assistant',
                        content: msg.content
                    }))
                ];

                const completion = await groq.chat.completions.create({
                    messages: groqMessages,
                    model: 'llama-3.3-70b-versatile',
                    temperature: 0.7,
                    max_tokens: 1000,
                });

                const response = completion.choices[0]?.message?.content ||
                    "I'm here to help! Could you please rephrase your question?";

                return NextResponse.json({
                    response,
                    provider: 'groq',
                    message: 'Using Groq AI for enhanced tutoring'
                });

            } catch (groqError) {
                console.error('Groq AI Tutor Error:', groqError);
                // Fall through to Hugging Face fallback
            }
        }

        // Fallback to Hugging Face
        let fullContext = `You are an expert programming tutor helping students prepare for technical interviews.`;

        if (topicName) {
            fullContext += ` Current topic: ${topicName}.`;
        }

        if (context) {
            fullContext += ` Context: ${context.substring(0, 500)}`;
        }

        const response = await generateAITutorResponse(messages, fullContext);

        return NextResponse.json({
            response,
            provider: 'huggingface',
            message: 'Using free AI service'
        });
    } catch (error) {
        console.error('AI Tutor Error:', error);

        // Return a helpful fallback response instead of error
        return NextResponse.json({
            response: "I'm here to help you learn! Could you please rephrase your question? I can explain programming concepts, provide code examples, and help you prepare for technical interviews.",
            provider: 'local',
            fallback: true
        });
    }
}
