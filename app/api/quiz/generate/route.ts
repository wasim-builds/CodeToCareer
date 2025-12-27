import { NextRequest, NextResponse } from 'next/server';
import { generateQuizQuestions, getAvailableProviders } from '@/lib/ai';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { topic, topicId, difficulty = 'medium', count = 5, provider } = body;

        const topicName = topic || topicId;
        if (!topicName) {
            return NextResponse.json(
                { error: 'Topic or topicId is required' },
                { status: 400 }
            );
        }

        // Get available providers
        const availableProviders = getAvailableProviders();

        console.log(`[Quiz API] Generating ${count} ${difficulty} questions for ${topicName}`);
        console.log(`[Quiz API] Available providers:`, availableProviders);

        const rawQuestions = await generateQuizQuestions({
            topic: topicName,
            difficulty,
            count,
            provider
        });

        // Enhance questions with required fields
        const questions = rawQuestions.map((q, index) => ({
            ...q,
            id: `ai-${topicId || topicName}-${difficulty}-${Date.now()}-${index}`,
            topicId: topicId || topicName,
            difficulty: difficulty as 'easy' | 'medium' | 'hard'
        }));

        // Determine which provider was likely used
        const usedProvider = process.env.GROQ_API_KEY ? 'groq' : 'huggingface';

        return NextResponse.json({
            questions,
            provider: usedProvider,
            availableProviders,
            message: `Questions generated successfully using ${usedProvider.toUpperCase()} AI`
        });
    } catch (error: any) {
        console.error('Quiz Generation Error:', error);

        return NextResponse.json(
            {
                error: error.message || 'Failed to generate questions',
                fallback: 'Using local question templates'
            },
            { status: 200 } // Return 200 since we have local fallback
        );
    }
}
