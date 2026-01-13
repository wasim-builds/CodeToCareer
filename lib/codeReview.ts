import { genAI } from './gemini';

export interface CodeReviewImprovement {
    category: 'bug' | 'performance' | 'security' | 'style' | 'best-practice';
    severity: 'low' | 'medium' | 'high';
    line?: number;
    description: string;
    suggestion: string;
}

export interface AlternativeApproach {
    title: string;
    description: string;
    code: string;
    pros: string[];
    cons: string[];
}

export interface CodeReview {
    overallScore: number; // 1-10
    qualityScore: number; // 1-10
    readabilityScore: number; // 1-10
    performanceScore: number; // 1-10
    securityScore: number; // 1-10

    strengths: string[];
    improvements: CodeReviewImprovement[];
    alternativeApproaches?: AlternativeApproach[];
    summary: string;

    timestamp: number;
    cacheKey: string;
}

// Simple in-memory cache for code reviews
const reviewCache = new Map<string, CodeReview>();

// Rate limiting: track review counts per user (using IP or session)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // reviews per hour
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

function generateCacheKey(code: string, language: string, problemId?: string): string {
    // Simple hash function for cache key
    const content = `${code}|${language}|${problemId || ''}`;
    let hash = 0;
    for (let i = 0; i < content.length; i++) {
        const char = content.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return `review_${Math.abs(hash)}`;
}

export function checkRateLimit(userId: string): { allowed: boolean; remaining: number; resetTime?: number } {
    const now = Date.now();
    const userLimit = rateLimitMap.get(userId);

    if (!userLimit || now > userLimit.resetTime) {
        // Reset or create new limit
        rateLimitMap.set(userId, { count: 0, resetTime: now + RATE_LIMIT_WINDOW });
        return { allowed: true, remaining: RATE_LIMIT };
    }

    if (userLimit.count >= RATE_LIMIT) {
        return {
            allowed: false,
            remaining: 0,
            resetTime: userLimit.resetTime
        };
    }

    return {
        allowed: true,
        remaining: RATE_LIMIT - userLimit.count
    };
}

function incrementRateLimit(userId: string): void {
    const userLimit = rateLimitMap.get(userId);
    if (userLimit) {
        userLimit.count++;
    }
}

export async function reviewCode(
    code: string,
    language: string,
    problemId?: string,
    problemContext?: string,
    userId: string = 'anonymous'
): Promise<CodeReview> {
    // Check rate limit
    const rateLimit = checkRateLimit(userId);
    if (!rateLimit.allowed) {
        const minutesUntilReset = Math.ceil((rateLimit.resetTime! - Date.now()) / 60000);
        throw new Error(`Rate limit exceeded. Please try again in ${minutesUntilReset} minutes.`);
    }

    // Check cache
    const cacheKey = generateCacheKey(code, language, problemId);
    const cached = reviewCache.get(cacheKey);
    if (cached) {
        console.log('Returning cached review');
        return cached;
    }

    if (!genAI) {
        throw new Error('Gemini AI is not configured');
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `You are an expert code reviewer. Analyze the following ${language} code and provide a comprehensive review.

${problemContext ? `Problem Context: ${problemContext}\n` : ''}

Code to review:
\`\`\`${language}
${code}
\`\`\`

Provide a detailed code review in the following JSON format (return ONLY valid JSON, no markdown):

{
  "overallScore": <number 1-10>,
  "qualityScore": <number 1-10>,
  "readabilityScore": <number 1-10>,
  "performanceScore": <number 1-10>,
  "securityScore": <number 1-10>,
  "strengths": [<array of strings highlighting what's good>],
  "improvements": [
    {
      "category": "<bug|performance|security|style|best-practice>",
      "severity": "<low|medium|high>",
      "line": <optional line number>,
      "description": "<what's wrong>",
      "suggestion": "<how to fix it>"
    }
  ],
  "alternativeApproaches": [
    {
      "title": "<approach name>",
      "description": "<brief description>",
      "code": "<alternative code snippet>",
      "pros": [<advantages>],
      "cons": [<disadvantages>]
    }
  ],
  "summary": "<2-3 sentence overall assessment>"
}

Focus on:
1. Code correctness and potential bugs
2. Performance and time/space complexity
3. Security vulnerabilities
4. Code readability and maintainability
5. Best practices for ${language}
6. Edge cases and error handling

Be constructive and specific in your feedback.`;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Clean up response
        const cleanText = text.replace(/```json\n?|\n?```/g, '').trim();
        const reviewData = JSON.parse(cleanText);

        const review: CodeReview = {
            ...reviewData,
            timestamp: Date.now(),
            cacheKey
        };

        // Cache the review
        reviewCache.set(cacheKey, review);

        // Increment rate limit
        incrementRateLimit(userId);

        return review;
    } catch (error) {
        console.error('Code review error:', error);
        throw new Error('Failed to generate code review. Please try again.');
    }
}

// Clear old cache entries periodically (keep last 100)
setInterval(() => {
    if (reviewCache.size > 100) {
        const entries = Array.from(reviewCache.entries());
        entries.sort((a, b) => b[1].timestamp - a[1].timestamp);
        reviewCache.clear();
        entries.slice(0, 100).forEach(([key, value]) => {
            reviewCache.set(key, value);
        });
    }
}, 5 * 60 * 1000); // Every 5 minutes
