'use client';

import { QuizResult } from '@/types/quiz';

interface QuizShareCardProps {
    result: QuizResult;
    topicName: string;
}

export default function QuizShareCard({ result, topicName }: QuizShareCardProps) {
    const getScoreColor = (score: number) => {
        if (score >= 90) return 'from-green-500 to-emerald-600';
        if (score >= 70) return 'from-blue-500 to-cyan-600';
        if (score >= 50) return 'from-yellow-500 to-orange-600';
        return 'from-red-500 to-pink-600';
    };

    const getStars = (score: number) => {
        if (score >= 90) return '⭐⭐⭐⭐⭐';
        if (score >= 70) return '⭐⭐⭐⭐';
        if (score >= 50) return '⭐⭐⭐';
        if (score >= 30) return '⭐⭐';
        return '⭐';
    };

    return (
        <div className={`bg-gradient-to-br ${getScoreColor(result.score)} p-8 text-white`}>
            {/* Header */}
            <div className="text-center mb-6">
                <div className="text-sm font-medium opacity-90 mb-2">CodeToCareer</div>
                <div className="text-2xl font-bold mb-1">🎯 {topicName}</div>
                <div className="text-sm opacity-75 capitalize">{result.difficulty} Level</div>
            </div>

            {/* Score */}
            <div className="text-center mb-6">
                <div className="text-6xl font-bold mb-2">{result.score}%</div>
                <div className="text-2xl mb-2">{getStars(result.score)}</div>
                <div className="text-sm opacity-90">
                    {result.correctAnswers} / {result.totalQuestions} correct
                </div>
            </div>

            {/* Stats */}
            <div className="flex justify-center gap-6 mb-6 text-sm">
                <div className="text-center">
                    <div className="font-semibold">{result.totalQuestions}</div>
                    <div className="opacity-75">Questions</div>
                </div>
                <div className="text-center">
                    <div className="font-semibold">{Math.floor(result.timeSpent / 60)}m</div>
                    <div className="opacity-75">Time</div>
                </div>
            </div>

            {/* CTA */}
            <div className="text-center text-sm opacity-90">
                Join me on CodeToCareer! 🚀
            </div>
        </div>
    );
}

// Achievement Share Card
interface AchievementShareCardProps {
    achievementName: string;
    achievementIcon: string;
    achievementDescription: string;
    color: string;
}

export function AchievementShareCard({ achievementName, achievementIcon, achievementDescription, color }: AchievementShareCardProps) {
    const colorClasses = {
        blue: 'from-blue-500 to-cyan-600',
        orange: 'from-orange-500 to-red-600',
        yellow: 'from-yellow-500 to-orange-600',
        purple: 'from-purple-500 to-pink-600',
        green: 'from-green-500 to-emerald-600',
        pink: 'from-pink-500 to-rose-600',
    };

    return (
        <div className={`bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue} p-8 text-white`}>
            {/* Header */}
            <div className="text-center mb-6">
                <div className="text-sm font-medium opacity-90 mb-4">CodeToCareer</div>
                <div className="text-6xl mb-4">{achievementIcon}</div>
                <div className="text-2xl font-bold mb-2">🏆 Achievement Unlocked!</div>
            </div>

            {/* Achievement */}
            <div className="text-center mb-6">
                <div className="text-3xl font-bold mb-2">{achievementName}</div>
                <div className="text-sm opacity-90">{achievementDescription}</div>
            </div>

            {/* CTA */}
            <div className="text-center text-sm opacity-90">
                Join me on my learning journey! 💪
            </div>
        </div>
    );
}

// Progress Share Card
interface ProgressShareCardProps {
    totalQuizzes: number;
    averageScore: number;
    currentStreak: number;
    level: number;
    totalXP: number;
}

export function ProgressShareCard({ totalQuizzes, averageScore, currentStreak, level, totalXP }: ProgressShareCardProps) {
    return (
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 text-white">
            {/* Header */}
            <div className="text-center mb-6">
                <div className="text-sm font-medium opacity-90 mb-2">CodeToCareer</div>
                <div className="text-2xl font-bold mb-1">📊 My Progress</div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold mb-1">{totalQuizzes}</div>
                    <div className="text-sm opacity-90">Quizzes</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold mb-1">{averageScore}%</div>
                    <div className="text-sm opacity-90">Avg Score</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold mb-1">🔥 {currentStreak}</div>
                    <div className="text-sm opacity-90">Day Streak</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold mb-1">⚡ {level}</div>
                    <div className="text-sm opacity-90">Level</div>
                </div>
            </div>

            {/* XP */}
            <div className="text-center mb-4">
                <div className="text-lg font-semibold">{totalXP.toLocaleString()} XP Earned</div>
            </div>

            {/* CTA */}
            <div className="text-center text-sm opacity-90">
                Level up your skills with me! 🚀
            </div>
        </div>
    );
}
