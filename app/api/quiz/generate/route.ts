import { NextRequest, NextResponse } from 'next/server';
import { generateQuizQuestions } from '@/lib/gemini';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { topic, difficulty = 'medium', count = 5 } = body;

        if (!topic) {
            return NextResponse.json(
                { error: 'Topic is required' },
                { status: 400 }
            );
        }

        const questions = await generateQuizQuestions(topic, difficulty, count);

        return NextResponse.json({ questions });
    } catch (error: any) {
        console.error('Quiz Generation Error:', error);

        // Handle specific API key error
        if (error.message.includes('GOOGLE_API_KEY')) {
            return NextResponse.json(
                { error: 'AI integration is not configured (missing API Key)' },
                { status: 503 }
            );
        }

        return NextResponse.json(
            { error: error.message || 'Failed to generate questions' },
            { status: 500 }
        );
    }
}
