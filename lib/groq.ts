import Groq from 'groq-sdk';

// Initialize Groq client
const groqApiKey = process.env.GROQ_API_KEY;
export const groq = groqApiKey ? new Groq({ apiKey: groqApiKey }) : null;

export interface GeneratedQuestion {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

// Retry configuration
const MAX_RETRIES = 3;
const INITIAL_RETRY_DELAY = 1000; // 1 second

/**
 * Sleep utility for retry delays
 */
function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Retry wrapper with exponential backoff
 */
async function retryWithBackoff<T>(
    fn: () => Promise<T>,
    maxRetries: number = MAX_RETRIES,
    initialDelay: number = INITIAL_RETRY_DELAY
): Promise<T> {
    let lastError: Error | null = null;

    for (let attempt = 0; attempt < maxRetries; attempt++) {
        try {
            return await fn();
        } catch (error) {
            lastError = error as Error;

            // Don't retry on certain errors
            if (error instanceof Error) {
                const errorMessage = error.message.toLowerCase();
                if (errorMessage.includes('api key') ||
                    errorMessage.includes('authentication') ||
                    errorMessage.includes('not configured')) {
                    throw error; // Don't retry auth errors
                }
            }

            // Calculate delay with exponential backoff
            const delay = initialDelay * Math.pow(2, attempt);
            console.log(`[Groq] Attempt ${attempt + 1}/${maxRetries} failed. Retrying in ${delay}ms...`);

            if (attempt < maxRetries - 1) {
                await sleep(delay);
            }
        }
    }

    throw lastError || new Error('Max retries exceeded');
}

/**
 * Validate question structure
 */
function validateQuestion(q: any): q is GeneratedQuestion {
    return (
        typeof q.question === 'string' &&
        Array.isArray(q.options) &&
        q.options.length === 4 &&
        q.options.every((opt: any) => typeof opt === 'string') &&
        typeof q.correctAnswer === 'number' &&
        q.correctAnswer >= 0 &&
        q.correctAnswer < 4 &&
        typeof q.explanation === 'string'
    );
}

/**
 * Generate quiz questions with Groq AI
 * Includes retry logic, validation, and comprehensive error handling
 */
export async function generateQuestionsWithGroq(
    topic: string,
    difficulty: string,
    count: number = 5
): Promise<GeneratedQuestion[]> {
    if (!groq) {
        throw new Error('GROQ_API_KEY is not configured. Please add it to your .env.local file.');
    }

    console.log(`[Groq] Generating ${count} ${difficulty} questions for topic: ${topic}`);

    const prompt = `Generate ${count} unique ${difficulty} level multiple choice questions about "${topic}" for a coding quiz app.
  
Requirements:
1. Questions should be technical, accurate, and relevant to ${topic}.
2. Provide exactly 4 options for each question.
3. Only ONE option should be correct.
4. Options should be plausible and not obviously wrong.
5. Explanations should be clear and educational.
6. Return ONLY a valid JSON array of objects.
7. Do not wrap the output in markdown code blocks.

JSON Structure:
[
  {
    "question": "Question text",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correctAnswer": 0,
    "explanation": "Brief explanation of why this is correct"
  }
]`;

    try {
        const questions = await retryWithBackoff(async () => {
            const startTime = Date.now();

            const chatCompletion = await groq.chat.completions.create({
                messages: [
                    {
                        role: 'system',
                        content: 'You are an expert programming instructor creating quiz questions. Always respond with valid JSON only, no markdown formatting.'
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                model: 'llama-3.3-70b-versatile',
                temperature: 0.7,
                max_tokens: 2048,
            });

            const responseTime = Date.now() - startTime;
            console.log(`[Groq] Response received in ${responseTime}ms`);

            const responseText = chatCompletion.choices[0]?.message?.content;

            if (!responseText) {
                throw new Error('Empty response from Groq API');
            }

            // Clean up response - remove markdown code blocks
            const cleanText = responseText
                .replace(/```json\n?|\n?```/g, '')
                .replace(/```\n?|\n?```/g, '')
                .trim();

            // Parse JSON
            let parsedQuestions;
            try {
                parsedQuestions = JSON.parse(cleanText);
            } catch (parseError) {
                console.error('[Groq] JSON parse error:', parseError);
                console.error('[Groq] Raw response:', responseText);
                throw new Error('Failed to parse JSON response from Groq');
            }

            // Validate structure
            if (!Array.isArray(parsedQuestions)) {
                throw new Error('Invalid response format: Expected an array of questions');
            }

            if (parsedQuestions.length === 0) {
                throw new Error('No questions generated');
            }

            // Validate each question
            const validQuestions = parsedQuestions.filter((q, index) => {
                const isValid = validateQuestion(q);
                if (!isValid) {
                    console.warn(`[Groq] Question ${index + 1} failed validation:`, q);
                }
                return isValid;
            });

            if (validQuestions.length === 0) {
                throw new Error('No valid questions in response');
            }

            console.log(`[Groq] Successfully generated ${validQuestions.length}/${parsedQuestions.length} valid questions`);

            return validQuestions;
        });

        return questions;

    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error('[Groq] Final error after retries:', errorMessage);

        // Provide helpful error messages
        if (errorMessage.includes('API key')) {
            throw new Error('Groq API key is invalid or missing. Please check your .env.local file.');
        } else if (errorMessage.includes('rate limit')) {
            throw new Error('Groq API rate limit exceeded. Please try again in a few moments.');
        } else if (errorMessage.includes('parse')) {
            throw new Error('Failed to parse AI response. The AI may be overloaded. Please try again.');
        } else {
            throw new Error(`Failed to generate questions: ${errorMessage}`);
        }
    }
}
