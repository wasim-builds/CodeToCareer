import { GeneratedQuestion, generateQuestionsWithHuggingFace, generateChatResponse } from './huggingface';
import { generateQuestionsWithGroq } from './groq';

export type AIProvider = 'groq' | 'huggingface' | 'local';

export interface GenerateOptions {
    topic: string;
    difficulty: string;
    count?: number;
    provider?: AIProvider;
}

/**
 * Unified AI service with smart fallback chain and caching:
 * 1. Check cache first
 * 2. Groq (if API key available - fastest & best quality)
 * 3. Hugging Face (free, no auth)
 * 4. Local templates (always works)
 * 5. Save to cache on success
 */
export async function generateQuizQuestions(
    options: GenerateOptions
): Promise<GeneratedQuestion[]> {
    const { topic, difficulty, count = 5, provider } = options;

    // If local provider specifically requested, skip APIs and cache
    if (provider === 'local') {
        console.log('[AI Service] Using local generation (as requested)');
        return await generateQuestionsWithHuggingFace(topic, difficulty, count);
    }

    // Try cache first (only in browser environment)
    if (typeof window !== 'undefined') {
        try {
            const { getFromCache, saveToCache } = await import('./questionCache');
            const cached = getFromCache(topic, difficulty, count);
            if (cached) {
                console.log('[AI Service] ✓ Returning cached questions');
                return cached;
            }
        } catch (error) {
            console.log('[AI Service] Cache not available:', error);
        }
    }

    let generatedQuestions: GeneratedQuestion[] | null = null;

    // If specific provider requested, use only that
    if (provider === 'groq') {
        generatedQuestions = await generateQuestionsWithGroq(topic, difficulty, count);
    } else if (provider === 'huggingface') {
        generatedQuestions = await generateQuestionsWithHuggingFace(topic, difficulty, count);
    } else {
        // Auto fallback chain: Try Groq first (if available), then Hugging Face
        const errors: string[] = [];

        // Try Groq first if API key is available
        if (process.env.GROQ_API_KEY) {
            try {
                console.log('[AI Service] Attempting Groq (primary)...');
                generatedQuestions = await generateQuestionsWithGroq(topic, difficulty, count);
                console.log('[AI Service] ✓ Groq succeeded');
            } catch (error: any) {
                console.log('[AI Service] ✗ Groq failed:', error.message);
                errors.push(`Groq: ${error.message}`);
            }
        }

        // Fallback to Hugging Face + local if Groq failed
        if (!generatedQuestions) {
            console.log('[AI Service] Attempting Hugging Face with local fallback...');
            generatedQuestions = await generateQuestionsWithHuggingFace(topic, difficulty, count);
        }
    }

    // Save to cache (only in browser environment)
    if (generatedQuestions && typeof window !== 'undefined') {
        try {
            const { saveToCache } = await import('./questionCache');
            saveToCache(topic, difficulty, generatedQuestions);
        } catch (error) {
            console.log('[AI Service] Failed to save to cache:', error);
        }
    }

    return generatedQuestions;
}

/**
 * Generate AI tutor chat response
 */
export async function generateAITutorResponse(
    messages: Array<{ role: string; content: string }>,
    context?: string
): Promise<string> {
    console.log('[AI Service] Generating tutor response...');
    return await generateChatResponse(messages, context);
}

/**
 * Check which AI providers are available
 */
export function getAvailableProviders(): AIProvider[] {
    const providers: AIProvider[] = [];

    if (process.env.GROQ_API_KEY) {
        providers.push('groq');
    }
    providers.push('huggingface');
    providers.push('local');

    return providers;
}

export type { GeneratedQuestion };
