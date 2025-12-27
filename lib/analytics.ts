import { QuizResult, Difficulty } from '@/types/quiz';

export interface AnalyticsStats {
    overview: {
        totalQuizzes: number;
        averageScore: number;
        currentStreak: number;
        totalXP: number;
        totalTimeSpent: number;
        quizzesThisWeek: number;
    };
    performance: {
        scores: number[];
        dates: string[];
        topics: string[];
        trend: 'improving' | 'stable' | 'declining';
        trendPercentage: number;
    };
    topics: Record<string, {
        quizCount: number;
        averageScore: number;
        totalQuestions: number;
        correctAnswers: number;
    }>;
    difficulty: {
        easy: { count: number; avgScore: number; totalQuestions: number };
        medium: { count: number; avgScore: number; totalQuestions: number };
        hard: { count: number; avgScore: number; totalQuestions: number };
    };
    recentQuizzes: QuizResult[];
}

export interface Insight {
    type: 'strength' | 'weakness' | 'recommendation' | 'achievement';
    message: string;
    icon: string;
}

export function calculateStats(results: QuizResult[], currentStreak: number, totalXP: number): AnalyticsStats {
    if (results.length === 0) {
        return {
            overview: {
                totalQuizzes: 0,
                averageScore: 0,
                currentStreak: 0,
                totalXP: 0,
                totalTimeSpent: 0,
                quizzesThisWeek: 0,
            },
            performance: {
                scores: [],
                dates: [],
                topics: [],
                trend: 'stable',
                trendPercentage: 0,
            },
            topics: {},
            difficulty: {
                easy: { count: 0, avgScore: 0, totalQuestions: 0 },
                medium: { count: 0, avgScore: 0, totalQuestions: 0 },
                hard: { count: 0, avgScore: 0, totalQuestions: 0 },
            },
            recentQuizzes: [],
        };
    }

    // Calculate overview stats
    const totalQuizzes = results.length;
    const totalScore = results.reduce((sum, r) => sum + r.score, 0);
    const averageScore = Math.round(totalScore / totalQuizzes);
    const totalTimeSpent = results.reduce((sum, r) => sum + r.timeSpent, 0);

    // Quizzes this week
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const quizzesThisWeek = results.filter(r => new Date(r.timestamp) >= oneWeekAgo).length;

    // Performance over time (last 20 quizzes)
    const recentResults = results.slice(-20);
    const scores = recentResults.map(r => r.score);
    const dates = recentResults.map(r => new Date(r.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
    const topics = recentResults.map(r => r.topicId);

    // Calculate trend
    const { trend, trendPercentage } = calculateTrend(results);

    // Topic performance
    const topicStats: Record<string, {
        quizCount: number;
        averageScore: number;
        totalQuestions: number;
        correctAnswers: number;
    }> = {};

    results.forEach(result => {
        if (!topicStats[result.topicId]) {
            topicStats[result.topicId] = {
                quizCount: 0,
                averageScore: 0,
                totalQuestions: 0,
                correctAnswers: 0,
            };
        }
        topicStats[result.topicId].quizCount++;
        topicStats[result.topicId].totalQuestions += result.totalQuestions;
        topicStats[result.topicId].correctAnswers += result.correctAnswers;
    });

    // Calculate average scores for topics
    Object.keys(topicStats).forEach(topicId => {
        const topicResults = results.filter(r => r.topicId === topicId);
        const avgScore = topicResults.reduce((sum, r) => sum + r.score, 0) / topicResults.length;
        topicStats[topicId].averageScore = Math.round(avgScore);
    });

    // Difficulty breakdown
    const difficultyStats = {
        easy: { count: 0, avgScore: 0, totalQuestions: 0 },
        medium: { count: 0, avgScore: 0, totalQuestions: 0 },
        hard: { count: 0, avgScore: 0, totalQuestions: 0 },
    };

    results.forEach(result => {
        const diff = result.difficulty;
        difficultyStats[diff].count++;
        difficultyStats[diff].totalQuestions += result.totalQuestions;
    });

    // Calculate average scores for each difficulty
    (['easy', 'medium', 'hard'] as Difficulty[]).forEach(diff => {
        const diffResults = results.filter(r => r.difficulty === diff);
        if (diffResults.length > 0) {
            const avgScore = diffResults.reduce((sum, r) => sum + r.score, 0) / diffResults.length;
            difficultyStats[diff].avgScore = Math.round(avgScore);
        }
    });

    // Recent quizzes (last 5)
    const recentQuizzes = results.slice(-5).reverse();

    return {
        overview: {
            totalQuizzes,
            averageScore,
            currentStreak,
            totalXP,
            totalTimeSpent,
            quizzesThisWeek,
        },
        performance: {
            scores,
            dates,
            topics,
            trend,
            trendPercentage,
        },
        topics: topicStats,
        difficulty: difficultyStats,
        recentQuizzes,
    };
}

function calculateTrend(results: QuizResult[]): { trend: 'improving' | 'stable' | 'declining'; trendPercentage: number } {
    if (results.length < 5) {
        return { trend: 'stable', trendPercentage: 0 };
    }

    // Compare last 5 quizzes to previous 5
    const recent = results.slice(-5);
    const previous = results.slice(-10, -5);

    if (previous.length === 0) {
        return { trend: 'stable', trendPercentage: 0 };
    }

    const recentAvg = recent.reduce((sum, r) => sum + r.score, 0) / recent.length;
    const previousAvg = previous.reduce((sum, r) => sum + r.score, 0) / previous.length;

    const difference = recentAvg - previousAvg;
    const percentageChange = Math.round((difference / previousAvg) * 100);

    if (difference > 5) {
        return { trend: 'improving', trendPercentage: percentageChange };
    } else if (difference < -5) {
        return { trend: 'declining', trendPercentage: percentageChange };
    } else {
        return { trend: 'stable', trendPercentage: percentageChange };
    }
}

export function generateInsights(stats: AnalyticsStats): Insight[] {
    const insights: Insight[] = [];

    // Identify strengths (topics with >80% avg)
    const strengths = Object.entries(stats.topics)
        .filter(([_, data]) => data.averageScore >= 80)
        .sort((a, b) => b[1].averageScore - a[1].averageScore)
        .slice(0, 3);

    if (strengths.length > 0) {
        const topicNames = strengths.map(([topic]) => topic).join(', ');
        insights.push({
            type: 'strength',
            message: `You're excelling in: ${topicNames}`,
            icon: '🌟',
        });
    }

    // Identify weaknesses (topics with <60% avg)
    const weaknesses = Object.entries(stats.topics)
        .filter(([_, data]) => data.averageScore < 60)
        .sort((a, b) => a[1].averageScore - b[1].averageScore)
        .slice(0, 3);

    if (weaknesses.length > 0) {
        const topicNames = weaknesses.map(([topic]) => topic).join(', ');
        insights.push({
            type: 'weakness',
            message: `Focus on improving: ${topicNames}`,
            icon: '📚',
        });
    }

    // Difficulty recommendations
    if (stats.difficulty.easy.avgScore >= 90 && stats.difficulty.medium.count < 5) {
        insights.push({
            type: 'recommendation',
            message: 'You\'re mastering easy questions! Try medium difficulty for a challenge.',
            icon: '🎯',
        });
    }

    if (stats.difficulty.medium.avgScore >= 85 && stats.difficulty.hard.count < 3) {
        insights.push({
            type: 'recommendation',
            message: 'Great performance on medium! Ready for hard difficulty?',
            icon: '🚀',
        });
    }

    // Trend insights
    if (stats.performance.trend === 'improving') {
        insights.push({
            type: 'achievement',
            message: `Your scores are improving by ${stats.performance.trendPercentage}%! Keep it up!`,
            icon: '📈',
        });
    } else if (stats.performance.trend === 'declining') {
        insights.push({
            type: 'recommendation',
            message: 'Scores have dipped recently. Try reviewing your weak topics.',
            icon: '💡',
        });
    }

    // Streak insights
    if (stats.overview.currentStreak >= 7) {
        insights.push({
            type: 'achievement',
            message: `Amazing ${stats.overview.currentStreak}-day streak! You're on fire! 🔥`,
            icon: '🔥',
        });
    }

    // Activity insights
    if (stats.overview.quizzesThisWeek === 0 && stats.overview.totalQuizzes > 0) {
        insights.push({
            type: 'recommendation',
            message: 'No quizzes this week. Stay consistent to maintain your progress!',
            icon: '⏰',
        });
    }

    return insights;
}

export function formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    if (hours > 0) {
        return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
}
