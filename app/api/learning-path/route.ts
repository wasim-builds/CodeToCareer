import { NextRequest, NextResponse } from 'next/server';
import { groq } from '@/lib/groq';

export const runtime = 'nodejs';

interface LearningPathRequest {
    quizHistory: Array<{
        topicId: string;
        score: number;
        difficulty: string;
        timestamp: string;
    }>;
    practiceHistory?: Array<{
        problemId: string;
        status: 'passed' | 'failed';
        topics: string[];
    }>;
    goals?: string[];
}

export async function POST(req: NextRequest) {
    try {
        const { quizHistory, practiceHistory, goals }: LearningPathRequest = await req.json();

        if (!quizHistory || quizHistory.length === 0) {
            return NextResponse.json(
                { error: 'Quiz history is required' },
                { status: 400 }
            );
        }

        // Analyze performance
        const analysis = analyzePerformance(quizHistory, practiceHistory);

        // Generate learning path with AI if available
        if (groq) {
            try {
                const aiPath = await generateAILearningPath(analysis, goals);
                return NextResponse.json({
                    ...aiPath,
                    analysis,
                    provider: 'groq',
                });
            } catch (error) {
                console.error('AI Learning Path Error:', error);
                // Fall through to rule-based
            }
        }

        // Fallback to rule-based learning path
        const rulePath = generateRuleBasedPath(analysis, goals);
        return NextResponse.json({
            ...rulePath,
            analysis,
            provider: 'rules',
        });

    } catch (error: any) {
        console.error('Learning Path API Error:', error);
        return NextResponse.json(
            { error: 'Failed to generate learning path', details: error.message },
            { status: 500 }
        );
    }
}

// Analyze user performance
function analyzePerformance(quizHistory: any[], practiceHistory?: any[]) {
    const topicScores: Record<string, { total: number; count: number; avgScore: number }> = {};

    // Analyze quiz performance
    quizHistory.forEach(quiz => {
        if (!topicScores[quiz.topicId]) {
            topicScores[quiz.topicId] = { total: 0, count: 0, avgScore: 0 };
        }
        topicScores[quiz.topicId].total += quiz.score;
        topicScores[quiz.topicId].count++;
    });

    // Calculate averages
    Object.keys(topicScores).forEach(topic => {
        topicScores[topic].avgScore = Math.round(
            topicScores[topic].total / topicScores[topic].count
        );
    });

    // Identify strengths and weaknesses
    const strengths = Object.entries(topicScores)
        .filter(([_, data]) => data.avgScore >= 80)
        .map(([topic, data]) => ({ topic, score: data.avgScore }))
        .sort((a, b) => b.score - a.score);

    const weaknesses = Object.entries(topicScores)
        .filter(([_, data]) => data.avgScore < 60)
        .map(([topic, data]) => ({ topic, score: data.avgScore }))
        .sort((a, b) => a.score - b.score);

    const needsImprovement = Object.entries(topicScores)
        .filter(([_, data]) => data.avgScore >= 60 && data.avgScore < 80)
        .map(([topic, data]) => ({ topic, score: data.avgScore }))
        .sort((a, b) => a.score - b.score);

    return {
        topicScores,
        strengths,
        weaknesses,
        needsImprovement,
        totalQuizzes: quizHistory.length,
        averageScore: Math.round(
            quizHistory.reduce((sum, q) => sum + q.score, 0) / quizHistory.length
        ),
    };
}

// Generate AI-powered learning path
async function generateAILearningPath(analysis: any, goals?: string[]) {
    const systemPrompt = `You are an expert learning advisor for technical interview preparation. 
Analyze the user's performance and create a personalized learning path.

Provide:
1. Overall assessment (2-3 sentences)
2. Recommended focus areas (prioritized list)
3. Specific action items (concrete steps)
4. Estimated timeline
5. Motivational message

Be encouraging and specific. Format as JSON.`;

    const userPrompt = `User Performance Analysis:
- Total Quizzes: ${analysis.totalQuizzes}
- Average Score: ${analysis.averageScore}%
- Strengths: ${analysis.strengths.map((s: any) => `${s.topic} (${s.score}%)`).join(', ') || 'None yet'}
- Weaknesses: ${analysis.weaknesses.map((w: any) => `${w.topic} (${w.score}%)`).join(', ') || 'None'}
- Needs Improvement: ${analysis.needsImprovement.map((n: any) => `${n.topic} (${n.score}%)`).join(', ') || 'None'}
${goals ? `\nUser Goals: ${goals.join(', ')}` : ''}

Generate a personalized learning path.`;

    const completion = await groq!.chat.completions.create({
        messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt }
        ] as any[],
        model: 'llama-3.3-70b-versatile',
        temperature: 0.7,
        max_tokens: 1000,
    });

    const response = completion.choices[0]?.message?.content || '';

    // Try to parse as JSON, fallback to text
    try {
        return JSON.parse(response);
    } catch {
        return {
            assessment: response,
            focusAreas: analysis.weaknesses.map((w: any) => w.topic),
            actionItems: ['Review weak topics', 'Practice daily', 'Take more quizzes'],
            timeline: '2-4 weeks',
            motivation: 'Keep practicing! Consistency is key.',
        };
    }
}

// Rule-based learning path generation
function generateRuleBasedPath(analysis: any, goals?: string[]) {
    const focusAreas: string[] = [];
    const actionItems: string[] = [];

    // Prioritize weaknesses
    if (analysis.weaknesses.length > 0) {
        focusAreas.push(...analysis.weaknesses.slice(0, 3).map((w: any) => w.topic));
        actionItems.push(
            `Focus on ${analysis.weaknesses[0].topic} - your weakest area (${analysis.weaknesses[0].score}%)`
        );
        actionItems.push('Complete at least 5 quizzes on weak topics this week');
    }

    // Then areas needing improvement
    if (analysis.needsImprovement.length > 0) {
        focusAreas.push(...analysis.needsImprovement.slice(0, 2).map((n: any) => n.topic));
        actionItems.push('Practice medium difficulty questions to build confidence');
    }

    // Maintain strengths
    if (analysis.strengths.length > 0) {
        actionItems.push(`Maintain your strength in ${analysis.strengths[0].topic} with weekly practice`);
    }

    // General recommendations
    if (analysis.averageScore < 60) {
        actionItems.push('Start with easy difficulty to build fundamentals');
        actionItems.push('Review theory materials before taking quizzes');
    } else if (analysis.averageScore < 80) {
        actionItems.push('Mix easy and medium difficulty questions');
        actionItems.push('Focus on understanding concepts, not just memorizing');
    } else {
        actionItems.push('Challenge yourself with hard difficulty questions');
        actionItems.push('Try the AI interview practice to simulate real interviews');
    }

    const timeline = analysis.weaknesses.length > 3 ? '4-6 weeks' : '2-4 weeks';

    return {
        assessment: `Based on ${analysis.totalQuizzes} quizzes with an average score of ${analysis.averageScore}%, you have ${analysis.strengths.length} strong areas and ${analysis.weaknesses.length} areas needing focus.`,
        focusAreas,
        actionItems,
        timeline,
        motivation: analysis.averageScore >= 70
            ? "You're doing great! Keep up the momentum!"
            : "Every expert was once a beginner. Keep practicing!",
    };
}
