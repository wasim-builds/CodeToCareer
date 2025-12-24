import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(request: NextRequest) {
    try {
        const { messages, topicId, topicName, context } = await request.json();

        if (!process.env.GEMINI_API_KEY) {
            return NextResponse.json(
                { error: 'API key not configured' },
                { status: 500 }
            );
        }

        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

        // Build context-aware system prompt
        let systemPrompt = `You are an expert programming tutor helping students prepare for technical interviews. 
You explain concepts clearly, provide practical examples, and encourage learning.

Guidelines:
- Be concise but thorough
- Use code examples when helpful
- Break down complex concepts into simple terms
- Encourage students and build confidence
- If asked about code, provide working examples
- Relate concepts to real-world applications
- For interview prep, mention common patterns and best practices`;

        if (topicName) {
            systemPrompt += `\n\nCurrent Topic: ${topicName}`;
        }

        if (context) {
            systemPrompt += `\n\nContext from theory content:\n${context.substring(0, 1000)}`;
        }

        // Build conversation history
        const conversationHistory = messages.map((msg: any) => ({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.content }]
        }));

        // Add system prompt as first message
        const chat = model.startChat({
            history: [
                {
                    role: 'user',
                    parts: [{ text: systemPrompt }]
                },
                {
                    role: 'model',
                    parts: [{ text: 'I understand. I\'m ready to help you learn and prepare for technical interviews. What would you like to know?' }]
                },
                ...conversationHistory.slice(0, -1) // Exclude the last user message
            ],
            generationConfig: {
                maxOutputTokens: 1000,
                temperature: 0.7,
            },
        });

        // Get the last user message
        const lastMessage = messages[messages.length - 1];
        const result = await chat.sendMessage(lastMessage.content);
        const response = result.response.text();

        return NextResponse.json({ response });
    } catch (error) {
        console.error('AI Tutor Error:', error);
        return NextResponse.json(
            { error: 'Failed to generate response' },
            { status: 500 }
        );
    }
}
