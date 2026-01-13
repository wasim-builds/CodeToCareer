import { NextRequest, NextResponse } from 'next/server';
import { reviewCode, checkRateLimit } from '@/lib/codeReview';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { code, language, problemId, problemContext } = body;

        // Validation
        if (!code || !language) {
            return NextResponse.json(
                { error: 'Code and language are required' },
                { status: 400 }
            );
        }

        // Get user ID (use IP address as simple identifier)
        const userId = request.headers.get('x-forwarded-for') ||
            request.headers.get('x-real-ip') ||
            'anonymous';

        // Check rate limit before processing
        const rateLimit = checkRateLimit(userId);
        if (!rateLimit.allowed) {
            const minutesUntilReset = Math.ceil((rateLimit.resetTime! - Date.now()) / 60000);
            return NextResponse.json(
                {
                    error: `Rate limit exceeded. You can request ${5} reviews per hour. Please try again in ${minutesUntilReset} minutes.`,
                    rateLimitExceeded: true,
                    resetTime: rateLimit.resetTime
                },
                { status: 429 }
            );
        }

        // Generate review
        const review = await reviewCode(code, language, problemId, problemContext, userId);

        // Return review with rate limit info
        return NextResponse.json({
            review,
            rateLimit: {
                remaining: rateLimit.remaining - 1,
                limit: 5,
                resetTime: Date.now() + (60 * 60 * 1000)
            }
        });

    } catch (error) {
        console.error('Review API error:', error);

        if (error instanceof Error && error.message.includes('Rate limit')) {
            return NextResponse.json(
                { error: error.message, rateLimitExceeded: true },
                { status: 429 }
            );
        }

        return NextResponse.json(
            { error: error instanceof Error ? error.message : 'Failed to generate review' },
            { status: 500 }
        );
    }
}
