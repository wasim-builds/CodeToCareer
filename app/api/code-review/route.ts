import { NextRequest, NextResponse } from 'next/server';
import { groq } from '@/lib/groq';

export const runtime = 'nodejs';

interface CodeReviewRequest {
    code: string;
    language: string;
    problemTitle?: string;
    context?: string;
}

export async function POST(req: NextRequest) {
    try {
        const { code, language, problemTitle, context }: CodeReviewRequest = await req.json();

        if (!code || !language) {
            return NextResponse.json(
                { error: 'Code and language are required' },
                { status: 400 }
            );
        }

        // Check if Groq is available
        if (!groq) {
            return NextResponse.json(
                { error: 'AI service not configured' },
                { status: 503 }
            );
        }

        const systemPrompt = `You are an expert code reviewer and programming mentor. Analyze the provided code and provide constructive feedback.

Your review should include:
1. **Correctness**: Does the code work as intended? Any bugs or logical errors?
2. **Code Quality**: Is it clean, readable, and well-structured?
3. **Performance**: Time and space complexity analysis. Any optimization opportunities?
4. **Best Practices**: Does it follow language-specific conventions and best practices?
5. **Edge Cases**: Are all edge cases handled properly?
6. **Suggestions**: Specific, actionable improvements

Be encouraging but thorough. Provide code examples for suggestions when helpful.`;

        const userPrompt = `Language: ${language}
${problemTitle ? `Problem: ${problemTitle}` : ''}
${context ? `Context: ${context}` : ''}

Code to review:
\`\`\`${language}
${code}
\`\`\`

Please provide a comprehensive code review.`;

        const completion = await groq.chat.completions.create({
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userPrompt }
            ] as any[],
            model: 'llama-3.3-70b-versatile',
            temperature: 0.6,
            max_tokens: 1500,
        });

        const review = completion.choices[0]?.message?.content ||
            'Unable to generate review. Please try again.';

        // Parse the review into sections (if AI formatted it well)
        const sections = parseReview(review);

        return NextResponse.json({
            review,
            sections,
            provider: 'groq',
            language,
        });

    } catch (error: any) {
        console.error('Code Review Error:', error);
        return NextResponse.json(
            { error: 'Failed to generate code review', details: error.message },
            { status: 500 }
        );
    }
}

// Helper to parse review into structured sections
function parseReview(review: string) {
    const sections: Record<string, string> = {};

    // Try to extract common sections
    const patterns = [
        { key: 'correctness', regex: /\*\*Correctness\*\*:?\s*([^\n]+(?:\n(?!\*\*)[^\n]+)*)/i },
        { key: 'quality', regex: /\*\*Code Quality\*\*:?\s*([^\n]+(?:\n(?!\*\*)[^\n]+)*)/i },
        { key: 'performance', regex: /\*\*Performance\*\*:?\s*([^\n]+(?:\n(?!\*\*)[^\n]+)*)/i },
        { key: 'bestPractices', regex: /\*\*Best Practices\*\*:?\s*([^\n]+(?:\n(?!\*\*)[^\n]+)*)/i },
        { key: 'edgeCases', regex: /\*\*Edge Cases\*\*:?\s*([^\n]+(?:\n(?!\*\*)[^\n]+)*)/i },
        { key: 'suggestions', regex: /\*\*Suggestions\*\*:?\s*([^\n]+(?:\n(?!\*\*)[^\n]+)*)/i },
    ];

    patterns.forEach(({ key, regex }) => {
        const match = review.match(regex);
        if (match) {
            sections[key] = match[1].trim();
        }
    });

    return sections;
}
