'use client';

import { useMemo } from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import { useGamification } from '@/contexts/GamificationContext';
import { calculateStats, generateInsights, formatTime } from '@/lib/analytics';
import StatCard from '@/components/analytics/StatCard';
import PerformanceChart from '@/components/analytics/PerformanceChart';
import TopicChart from '@/components/analytics/TopicChart';
import DifficultyChart from '@/components/analytics/DifficultyChart';
import Link from 'next/link';
import { FiTrendingUp, FiClock, FiAward, FiZap } from 'react-icons/fi';

export default function AnalyticsPage() {
    const { results } = useQuiz();
    const { data: gamificationData } = useGamification();

    const stats = useMemo(() => {
        return calculateStats(results, gamificationData.currentStreak, gamificationData.totalXP);
    }, [results, gamificationData]);

    const insights = useMemo(() => {
        return generateInsights(stats);
    }, [stats]);

    // Prepare chart data
    const performanceData = stats.performance.scores.map((score, index) => ({
        name: stats.performance.dates[index],
        score,
    }));

    const topicData = Object.entries(stats.topics)
        .map(([topic, data]) => ({
            topic: topic.length > 15 ? topic.substring(0, 12) + '...' : topic,
            score: data.averageScore,
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 10); // Top 10 topics

    const difficultyData = [
        { name: 'Easy', value: stats.difficulty.easy.count, avgScore: stats.difficulty.easy.avgScore },
        { name: 'Medium', value: stats.difficulty.medium.count, avgScore: stats.difficulty.medium.avgScore },
        { name: 'Hard', value: stats.difficulty.hard.count, avgScore: stats.difficulty.hard.avgScore },
    ].filter(d => d.value > 0);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                                <FiTrendingUp className="w-8 h-8 text-green-600" />
                                Performance Analytics
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">
                                Track your progress and identify areas for improvement
                            </p>
                        </div>
                        <Link
                            href="/quiz"
                            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                        >
                            Take Quiz
                        </Link>
                    </div>
                </div>

                {stats.overview.totalQuizzes === 0 ? (
                    /* Empty State */
                    <div className="text-center py-16">
                        <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FiTrendingUp className="w-12 h-12 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            No quiz data yet
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Start taking quizzes to see your performance analytics!
                        </p>
                        <Link
                            href="/quiz"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                        >
                            Browse Quizzes
                        </Link>
                    </div>
                ) : (
                    <>
                        {/* Overview Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                            <StatCard
                                title="Total Quizzes"
                                value={stats.overview.totalQuizzes}
                                icon="📊"
                                subtitle={`+${stats.overview.quizzesThisWeek} this week`}
                            />
                            <StatCard
                                title="Average Score"
                                value={`${stats.overview.averageScore}%`}
                                icon="⭐"
                                trend={
                                    stats.performance.trend !== 'stable'
                                        ? {
                                            value: Math.abs(stats.performance.trendPercentage),
                                            isPositive: stats.performance.trend === 'improving',
                                        }
                                        : undefined
                                }
                            />
                            <StatCard
                                title="Current Streak"
                                value={`${stats.overview.currentStreak} days`}
                                icon="🔥"
                                subtitle={stats.overview.currentStreak >= 7 ? 'Amazing!' : 'Keep it up!'}
                            />
                            <StatCard
                                title="Total XP"
                                value={stats.overview.totalXP.toLocaleString()}
                                icon="⚡"
                                subtitle={`Level ${gamificationData.level}`}
                            />
                        </div>

                        {/* Performance Chart */}
                        <div className="mb-8">
                            <PerformanceChart data={performanceData} />
                        </div>

                        {/* Topic and Difficulty Charts */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                            <TopicChart data={topicData} />
                            <DifficultyChart data={difficultyData} />
                        </div>

                        {/* Insights & Recommendations */}
                        {insights.length > 0 && (
                            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                    <span>💡</span>
                                    Insights & Recommendations
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {insights.map((insight, index) => (
                                        <div
                                            key={index}
                                            className={`p-4 rounded-lg border-l-4 ${insight.type === 'strength'
                                                    ? 'bg-green-50 dark:bg-green-900/20 border-green-500'
                                                    : insight.type === 'weakness'
                                                        ? 'bg-red-50 dark:bg-red-900/20 border-red-500'
                                                        : insight.type === 'achievement'
                                                            ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500'
                                                            : 'bg-blue-50 dark:bg-blue-900/20 border-blue-500'
                                                }`}
                                        >
                                            <div className="flex items-start gap-3">
                                                <span className="text-2xl">{insight.icon}</span>
                                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                                    {insight.message}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Recent Activity */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                                Recent Activity
                            </h3>
                            <div className="space-y-3">
                                {stats.recentQuizzes.map((quiz, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                    >
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3">
                                                <span className="font-medium text-gray-900 dark:text-white">
                                                    {quiz.topicId}
                                                </span>
                                                <span
                                                    className={`text-xs px-2 py-1 rounded-full ${quiz.difficulty === 'easy'
                                                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                                                            : quiz.difficulty === 'medium'
                                                                ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                                                                : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                                                        }`}
                                                >
                                                    {quiz.difficulty}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-4 mt-1 text-sm text-gray-600 dark:text-gray-400">
                                                <span>{new Date(quiz.timestamp).toLocaleDateString()}</span>
                                                <span className="flex items-center gap-1">
                                                    <FiClock className="w-3 h-3" />
                                                    {formatTime(quiz.timeSpent)}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div
                                                className={`text-2xl font-bold ${quiz.score >= 80
                                                        ? 'text-green-600'
                                                        : quiz.score >= 60
                                                            ? 'text-yellow-600'
                                                            : 'text-red-600'
                                                    }`}
                                            >
                                                {quiz.score}%
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                {quiz.correctAnswers}/{quiz.totalQuestions}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
