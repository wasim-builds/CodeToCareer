'use client';

import { useState, useMemo } from 'react';
import { ACHIEVEMENTS, CATEGORY_NAMES, Achievement } from '@/lib/achievements';
import { useGamification } from '@/contexts/GamificationContext';
import AchievementBadge from '@/components/gamification/AchievementBadge';
import { FiAward, FiFilter } from 'react-icons/fi';
import Link from 'next/link';

type Category = 'all' | 'getting-started' | 'consistency' | 'excellence' | 'mastery' | 'practice' | 'special';

export default function AchievementsPage() {
    const { data } = useGamification();
    const [selectedCategory, setSelectedCategory] = useState<Category>('all');

    // Mock unlocked achievements for now - will integrate with real data
    const unlockedAchievementIds = new Set(['first-quiz', 'perfect-score', '3-day-streak']);

    const filteredAchievements = useMemo(() => {
        return ACHIEVEMENTS.filter(achievement =>
            selectedCategory === 'all' || achievement.category === selectedCategory
        );
    }, [selectedCategory]);

    const unlockedAchievements = filteredAchievements.filter(a => unlockedAchievementIds.has(a.id));
    const lockedAchievements = filteredAchievements.filter(a => !unlockedAchievementIds.has(a.id));

    const totalUnlocked = ACHIEVEMENTS.filter(a => unlockedAchievementIds.has(a.id)).length;
    const progressPercentage = Math.round((totalUnlocked / ACHIEVEMENTS.length) * 100);

    // Mock progress calculation
    const getProgress = (achievement: Achievement) => {
        // This will be replaced with real progress calculation
        return Math.random() * 80;
    };

    const categories: { id: Category; name: string }[] = [
        { id: 'all', name: 'All' },
        { id: 'getting-started', name: 'Getting Started' },
        { id: 'consistency', name: 'Consistency' },
        { id: 'excellence', name: 'Excellence' },
        { id: 'mastery', name: 'Mastery' },
        { id: 'practice', name: 'Practice' },
        { id: 'special', name: 'Special' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                                <FiAward className="w-8 h-8 text-yellow-500" />
                                My Achievements
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">
                                {totalUnlocked} of {ACHIEVEMENTS.length} unlocked ({progressPercentage}%)
                            </p>
                        </div>
                        <Link
                            href="/quiz"
                            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                        >
                            Take Quiz
                        </Link>
                    </div>

                    {/* Progress Bar */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Overall Progress</span>
                            <span className="text-sm font-bold text-green-600">{progressPercentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                            <div
                                className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all duration-500"
                                style={{ width: `${progressPercentage}%` }}
                            />
                        </div>
                    </div>
                </div>

                {/* Category Filters */}
                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                        <FiFilter className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Categories</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedCategory === category.id
                                    ? 'bg-green-600 text-white'
                                    : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Unlocked Achievements */}
                {unlockedAchievements.length > 0 && (
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Unlocked ({unlockedAchievements.length})
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {unlockedAchievements.map(achievement => (
                                <AchievementBadge
                                    key={achievement.id}
                                    achievement={achievement}
                                    unlocked={true}
                                    unlockedAt={new Date()}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Locked Achievements */}
                {lockedAchievements.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Locked ({lockedAchievements.length})
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {lockedAchievements.map(achievement => (
                                <AchievementBadge
                                    key={achievement.id}
                                    achievement={achievement}
                                    unlocked={false}
                                    progress={getProgress(achievement)}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Empty State */}
                {filteredAchievements.length === 0 && (
                    <div className="text-center py-16">
                        <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FiAward className="w-12 h-12 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            No achievements in this category
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Try selecting a different category
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
