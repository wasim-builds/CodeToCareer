'use client';

import { useState, useEffect } from 'react';
import { getTodaysChallenge, hasAttemptedToday, saveChallengeAttempt, calculateStreak, getTimeUntilNextChallenge, getTodaysLeaderboard } from '@/lib/dailyChallenge';
import { DailyChallenge } from '@/types/dailyChallenge';
import { useGamification } from '@/contexts/GamificationContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FiClock, FiTrendingUp, FiAward, FiCalendar } from 'react-icons/fi';

export default function DailyChallengePage() {
    const [challenge, setChallenge] = useState<DailyChallenge | null>(null);
    const [attempted, setAttempted] = useState(false);
    const [streak, setStreak] = useState(calculateStreak());
    const [timeRemaining, setTimeRemaining] = useState(getTimeUntilNextChallenge());
    const { addXP } = useGamification();
    const router = useRouter();

    useEffect(() => {
        const todaysChallenge = getTodaysChallenge();
        setChallenge(todaysChallenge);
        setAttempted(hasAttemptedToday());
        setStreak(calculateStreak());

        // Update countdown every second
        const interval = setInterval(() => {
            setTimeRemaining(getTimeUntilNextChallenge());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleStartChallenge = () => {
        if (challenge) {
            // Navigate to quiz with challenge question
            router.push(`/quiz/daily-challenge/take`);
        }
    };

    const leaderboard = getTodaysLeaderboard();

    if (!challenge) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400">Loading today&apos;s challenge...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3 mb-2">
                        <span className="text-4xl">🎯</span>
                        Daily Challenge
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Complete today&apos;s challenge to earn bonus XP and climb the leaderboard!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Challenge Area */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Challenge Info Card */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                                        Challenge #{challenge.id.split('-')[1]}
                                    </h2>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {new Date(challenge.date).toLocaleDateString('en-US', {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-1">
                                        <FiClock className="w-4 h-4" />
                                        <span>
                                            {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-500">until next challenge</p>
                                </div>
                            </div>

                            {/* Challenge Question */}
                            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-6 text-white mb-4">
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${challenge.difficulty === 'easy' ? 'bg-green-400/30' :
                                        challenge.difficulty === 'medium' ? 'bg-yellow-400/30' :
                                            'bg-red-400/30'
                                        }`}>
                                        {challenge.difficulty.charAt(0).toUpperCase() + challenge.difficulty.slice(1)}
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <FiAward className="w-5 h-5" />
                                        <span className="font-bold">{challenge.bonusXP} XP</span>
                                        <span className="text-sm opacity-75">(2x Bonus!)</span>
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{challenge.question.question}</h3>
                                <p className="text-sm opacity-90">
                                    {challenge.question.options.length} options • Test your knowledge!
                                </p>
                            </div>

                            {/* Action Button */}
                            {attempted ? (
                                <div className="text-center py-4">
                                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg">
                                        <span className="text-2xl">✅</span>
                                        <span className="font-medium">Challenge Completed!</span>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                        Come back tomorrow for a new challenge
                                    </p>
                                </div>
                            ) : (
                                <button
                                    onClick={handleStartChallenge}
                                    className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors text-lg"
                                >
                                    Start Challenge →
                                </button>
                            )}
                        </div>

                        {/* Leaderboard */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <FiTrendingUp className="w-5 h-5 text-yellow-500" />
                                Today&apos;s Leaderboard
                            </h3>

                            {leaderboard.length > 0 ? (
                                <div className="space-y-2">
                                    {leaderboard.slice(0, 10).map((attempt, index) => (
                                        <div
                                            key={index}
                                            className={`flex items-center justify-between p-3 rounded-lg ${index < 3 ? 'bg-yellow-50 dark:bg-yellow-900/20' : 'bg-gray-50 dark:bg-gray-700/50'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className={`text-lg font-bold ${index === 0 ? 'text-yellow-500' :
                                                    index === 1 ? 'text-gray-400' :
                                                        index === 2 ? 'text-orange-600' :
                                                            'text-gray-600 dark:text-gray-400'
                                                    }`}>
                                                    {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`}
                                                </span>
                                                <span className="font-medium text-gray-900 dark:text-white">
                                                    You
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-4 text-sm">
                                                <span className="font-bold text-green-600">{attempt.score}%</span>
                                                <span className="text-gray-600 dark:text-gray-400">
                                                    {Math.floor(attempt.timeSpent / 60)}m {attempt.timeSpent % 60}s
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                                    <p>No attempts yet today.</p>
                                    <p className="text-sm mt-1">Be the first to complete the challenge!</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Streak Card */}
                        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 text-white">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-3xl">🔥</span>
                                <h3 className="text-lg font-bold">Your Streak</h3>
                            </div>
                            <div className="text-center mb-4">
                                <div className="text-5xl font-bold mb-2">{streak.current}</div>
                                <div className="text-sm opacity-90">day{streak.current !== 1 ? 's' : ''} in a row</div>
                            </div>
                            <div className="bg-white/20 rounded-lg p-3 text-sm">
                                <div className="flex justify-between mb-1">
                                    <span>Longest Streak:</span>
                                    <span className="font-bold">{streak.longest} days</span>
                                </div>
                                {streak.lastAttempt && (
                                    <div className="flex justify-between">
                                        <span>Last Attempt:</span>
                                        <span className="font-bold">
                                            {new Date(streak.lastAttempt).toLocaleDateString()}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Stats Card */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <FiCalendar className="w-5 h-5" />
                                Your Stats
                            </h3>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Completed:</span>
                                    <span className="font-bold text-gray-900 dark:text-white">
                                        {getTodaysLeaderboard().length}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Current Streak:</span>
                                    <span className="font-bold text-orange-600">
                                        🔥 {streak.current} days
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Best Streak:</span>
                                    <span className="font-bold text-gray-900 dark:text-white">
                                        {streak.longest} days
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Info Card */}
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                            <p className="text-sm text-blue-900 dark:text-blue-300">
                                <strong>💡 Tip:</strong> Complete challenges daily to build your streak and earn bonus XP!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
