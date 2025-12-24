import { GoogleGenerativeAI } from '@google/generative-ai';

// Try to load from environment variable, fallback to hardcoded value
const apiKey = process.env.GOOGLE_API_KEY || 'AIzaSyDfVYwx3Fpm1QZwJmCh1BeRHEHCgMPpnfTE';

console.log('[DEBUG] GOOGLE_API_KEY loaded:', apiKey ? `YES (${apiKey.substring(0, 10)}...)` : 'NO');

export const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

export interface GeneratedQuestion {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

export async function generateQuizQuestions(
    topic: string,
    difficulty: string,
    count: number = 5
): Promise<GeneratedQuestion[]> {
    if (!genAI) {
        throw new Error('GOOGLE_API_KEY is not configured');
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `Generate ${count} unique ${difficulty} level multiple choice questions about "${topic}" for a coding quiz app.
  
  Requirements:
  1. Questions should be technical and accurate.
  2. Provide exactly 4 options for each question.
  3. Return ONLY a valid JSON array of objects.
  4. Do not wrap the output in markdown code blocks.
  
  JSON Structure:
  [
    {
      "question": "Question text",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": 0, // index of correct option (0-3)
      "explanation": "Brief explanation of why this is correct"
    }
  ]`;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // robust cleanup just in case
        const cleanText = text.replace(/```json\n?|\n?```/g, '').trim();

        const questions = JSON.parse(cleanText);

        // Validate structure
        if (!Array.isArray(questions)) {
            throw new Error('Invalid response format: Not an array');
        }

        return questions;
    } catch (error) {
        console.error('Gemini API Error:', error);
        throw new Error('Failed to generate questions. Please try again later.');
    }
}
