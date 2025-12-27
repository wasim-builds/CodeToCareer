import { NextRequest, NextResponse } from 'next/server';
import { groq } from '@/lib/groq';

export const runtime = 'nodejs';

interface HintRequest {
    problemTitle: string;
    problemDescription: string;
    userCode?: string;
    language?: string;
    hintLevel?: number; // 1 = subtle, 2 = moderate, 3 = specific
}

export async function POST(req: NextRequest) {
    try {
        const {
            problemTitle,
            problemDescription,
            userCode,
            language,
            hintLevel = 1
        }: HintRequest = await req.json();

        if (!problemTitle || !problemDescription) {
            return NextResponse.json(
                { error: 'Problem title and description are required' },
                { status: 400 }
            );
        }

        // Check if Groq is available
        if (!groq) {
            return useFallbackHint(hintLevel);
        }

        const hintLevelDescriptions = {
            1: 'subtle - point them in the right direction without giving away the approach',
            2: 'moderate - suggest a specific approach or data structure',
            3: 'specific - provide detailed steps but not the complete solution'
        };

        const systemPrompt = `You are a helpful coding mentor providing hints for programming problems. 
Your goal is to guide students toward the solution without giving it away completely.

Hint Level: ${hintLevelDescriptions[hintLevel as keyof typeof hintLevelDescriptions]}

Guidelines:
- Be encouraging and supportive
- Ask guiding questions when appropriate
- Reference relevant concepts or patterns
- Don't provide complete code solutions
- Keep hints concise (2-3 sentences max)
- If user has code, acknowledge their progress`;

        let userPrompt = `Problem: ${problemTitle}\n\nDescription: ${problemDescription}`;

        if (userCode) {
            userPrompt += `\n\nUser's current code (${language}):\n\`\`\`${language}\n${userCode}\n\`\`\``;
        }

        userPrompt += `\n\nProvide a level ${hintLevel} hint.`;

        const completion = await groq.chat.completions.create({
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userPrompt }
            ] as any[],
            model: 'llama-3.3-70b-versatile',
            temperature: 0.7,
            max_tokens: 300,
        });

        const hint = completion.choices[0]?.message?.content ||
            'Think about the problem step by step. What data structure might help here?';

        return NextResponse.json({
            hint,
            level: hintLevel,
            provider: 'groq',
        });

    } catch (error: any) {
        console.error('Hints API Error:', error);
        return useFallbackHint(1);
    }
}

// Fallback hints when Groq is unavailable
function useFallbackHint(level: number) {
    const fallbackHints = {
        1: [
            "Think about what data structure would be most efficient for this problem.",
            "Consider the time complexity of different approaches.",
            "What's the simplest solution you can think of? Can you optimize it?",
            "Break the problem down into smaller sub-problems.",
        ],
        2: [
            "A hash map might be useful for tracking elements you've seen.",
            "Consider using two pointers to solve this efficiently.",
            "Think about how sorting the data first might help.",
            "Dynamic programming could help avoid redundant calculations.",
        ],
        3: [
            "Try iterating through the array while maintaining a hash map of values to indices.",
            "Use a sliding window approach: expand the window when valid, contract when invalid.",
            "Build a DP table where dp[i] represents the solution for the first i elements.",
            "Use a stack to keep track of elements in a specific order as you iterate.",
        ],
    };

    const hints = fallbackHints[level as keyof typeof fallbackHints] || fallbackHints[1];
    const randomHint = hints[Math.floor(Math.random() * hints.length)];

    return NextResponse.json({
        hint: randomHint,
        level,
        provider: 'fallback',
        message: 'Using fallback hints - Groq API not available',
    });
}
