/**
 * Answer Evaluator
 * AI-powered evaluation of interview answers with detailed scoring
 */

import { groq } from './groq';

export interface CriteriaScores {
    [criterion: string]: number; // 0-100 for each criterion
}

export interface EvaluationResult {
    overallScore: number; // 0-100
    criteriaScores: CriteriaScores;
    strengths: string[];
    improvements: string[];
    detailedFeedback: string;
    grade: 'Excellent' | 'Good' | 'Fair' | 'Poor';
}

// Evaluation criteria for each interview mode
const EVALUATION_CRITERIA = {
    dsa: {
        correctness: { weight: 0.30, description: 'Correctness of the solution' },
        complexity: { weight: 0.25, description: 'Time and space complexity analysis' },
        edgeCases: { weight: 0.20, description: 'Handling of edge cases' },
        codeQuality: { weight: 0.15, description: 'Code clarity and structure' },
        communication: { weight: 0.10, description: 'Clear explanation of approach' },
    },
    hr: {
        starMethod: { weight: 0.30, description: 'Use of STAR method (Situation, Task, Action, Result)' },
        clarity: { weight: 0.25, description: 'Clarity and coherence of response' },
        selfAwareness: { weight: 0.20, description: 'Self-awareness and reflection' },
        problemSolving: { weight: 0.15, description: 'Problem-solving approach' },
        professionalism: { weight: 0.10, description: 'Professional demeanor' },
    },
    system: {
        architecture: { weight: 0.30, description: 'System architecture and components' },
        scalability: { weight: 0.25, description: 'Scalability considerations' },
        tradeoffs: { weight: 0.20, description: 'Understanding of trade-offs' },
        completeness: { weight: 0.15, description: 'Completeness of design' },
        communication: { weight: 0.10, description: 'Clear communication of ideas' },
    },
};

/**
 * Evaluate an interview answer using AI
 */
export async function evaluateAnswer(
    answer: string,
    question: string,
    mode: 'dsa' | 'hr' | 'system'
): Promise<EvaluationResult> {
    // Check if Groq is available
    if (!groq) {
        return generateFallbackEvaluation(answer, mode);
    }

    try {
        const criteria = EVALUATION_CRITERIA[mode];
        const criteriaList = Object.entries(criteria)
            .map(([key, { description }]) => `- ${key}: ${description}`)
            .join('\n');

        const prompt = `You are an expert technical interviewer evaluating a candidate's answer.

Interview Mode: ${mode.toUpperCase()}
Question: ${question}
Candidate's Answer: ${answer}

Evaluate this answer based on the following criteria (score each 0-100):
${criteriaList}

Provide your evaluation in the following JSON format:
{
  "criteriaScores": {
    ${Object.keys(criteria).map(k => `"${k}": <score 0-100>`).join(',\n    ')}
  },
  "strengths": ["strength 1", "strength 2"],
  "improvements": ["improvement 1", "improvement 2"],
  "detailedFeedback": "A brief paragraph of constructive feedback"
}

Be fair but thorough. Provide specific, actionable feedback.`;

        const chatCompletion = await groq.chat.completions.create({
            messages: [
                {
                    role: 'system',
                    content: 'You are an expert technical interviewer. Evaluate answers fairly and provide constructive feedback. Always respond with valid JSON only.',
                },
                {
                    role: 'user',
                    content: prompt,
                },
            ],
            model: 'llama-3.3-70b-versatile',
            temperature: 0.3, // Lower temperature for more consistent scoring
            max_tokens: 1000,
        });

        const responseText = chatCompletion.choices[0]?.message?.content;

        if (!responseText) {
            throw new Error('Empty response from AI');
        }

        // Clean and parse JSON
        const cleanText = responseText
            .replace(/```json\n?|\n?```/g, '')
            .replace(/```\n?|\n?```/g, '')
            .trim();

        const parsed = JSON.parse(cleanText);

        // Calculate overall score
        const overallScore = calculateOverallScore(parsed.criteriaScores, criteria);

        // Determine grade
        const grade = getGrade(overallScore);

        return {
            overallScore,
            criteriaScores: parsed.criteriaScores,
            strengths: parsed.strengths || [],
            improvements: parsed.improvements || [],
            detailedFeedback: parsed.detailedFeedback || '',
            grade,
        };

    } catch (error) {
        console.error('[AnswerEvaluator] Error evaluating answer:', error);
        return generateFallbackEvaluation(answer, mode);
    }
}

/**
 * Calculate overall score from criteria scores
 */
export function calculateOverallScore(
    criteriaScores: CriteriaScores,
    criteria: Record<string, { weight: number; description: string }>
): number {
    let totalScore = 0;
    let totalWeight = 0;

    Object.entries(criteriaScores).forEach(([key, score]) => {
        const weight = criteria[key]?.weight || 0;
        totalScore += score * weight;
        totalWeight += weight;
    });

    return totalWeight > 0 ? Math.round(totalScore / totalWeight) : 0;
}

/**
 * Get grade based on score
 */
function getGrade(score: number): 'Excellent' | 'Good' | 'Fair' | 'Poor' {
    if (score >= 85) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Fair';
    return 'Poor';
}

/**
 * Generate fallback evaluation when AI is unavailable
 */
function generateFallbackEvaluation(
    answer: string,
    mode: 'dsa' | 'hr' | 'system'
): EvaluationResult {
    const answerLength = answer.length;
    const criteria = EVALUATION_CRITERIA[mode];

    // Simple heuristic-based scoring
    let baseScore = 50; // Start at 50

    // Adjust based on length
    if (answerLength > 300) baseScore += 20;
    else if (answerLength > 150) baseScore += 10;
    else if (answerLength < 50) baseScore -= 20;

    // Generate criteria scores (slight variation around base score)
    const criteriaScores: CriteriaScores = {};
    Object.keys(criteria).forEach((key, index) => {
        const variation = (index % 2 === 0 ? 5 : -5);
        criteriaScores[key] = Math.max(0, Math.min(100, baseScore + variation));
    });

    const overallScore = calculateOverallScore(criteriaScores, criteria);
    const grade = getGrade(overallScore);

    return {
        overallScore,
        criteriaScores,
        strengths: [
            'You provided a response to the question',
            answerLength > 150 ? 'Good level of detail in your answer' : 'Concise response',
        ],
        improvements: [
            answerLength < 100 ? 'Try to provide more detailed explanations' : 'Consider addressing edge cases',
            'Practice articulating your thought process more clearly',
        ],
        detailedFeedback: `Your answer shows ${grade.toLowerCase()} understanding. ${answerLength < 100
            ? 'Try to elaborate more on your approach and reasoning.'
            : 'Good detail, but consider discussing trade-offs and alternatives.'
            }`,
        grade,
    };
}

/**
 * Generate quick feedback without full evaluation (for faster responses)
 */
export function generateQuickFeedback(answer: string, mode: string): string {
    const length = answer.length;

    if (mode === 'dsa') {
        if (length < 50) {
            return "Good start! Can you elaborate on your approach? What data structures would you use?";
        } else if (length < 150) {
            return "Nice explanation! Now, what's the time and space complexity? Any edge cases to consider?";
        } else {
            return "Excellent detailed answer! Let's discuss optimization. Can you improve the solution further?";
        }
    } else if (mode === 'hr') {
        if (length < 100) {
            return "Thank you for sharing. Can you provide more details using the STAR method (Situation, Task, Action, Result)?";
        } else if (length < 250) {
            return "Good example! What specific lessons did you learn from this experience?";
        } else {
            return "Great comprehensive answer! Your self-awareness and reflection are evident.";
        }
    } else { // system design
        if (length < 100) {
            return "Good start! Can you dive deeper into the architecture? What about data storage and caching?";
        } else if (length < 250) {
            return "Solid design! How would you handle 10x more traffic? What are the bottlenecks?";
        } else {
            return "Excellent comprehensive design! Let's discuss failure scenarios and monitoring.";
        }
    }
}
