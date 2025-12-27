'use client';

import Link from 'next/link';
import { learningPaths } from '@/data/learningPaths';
import { FiClock, FiTrendingUp, FiAward } from 'react-icons/fi';

export default function LearningPathsPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3 mb-2">
                        <span className="text-4xl">🗺️</span>
                        Learning Paths
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Choose your career path and start your structured learning journey
                    </p>
                </div>

                {/* Info Banner */}
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
                    <div className="flex items-start gap-4">
                        <span className="text-3xl">💡</span>
                        <div>
                            <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-2">
                                Why Learning Paths?
                            </h3>
                            <p className="text-sm text-blue-800 dark:text-blue-400">
                                Our curated learning paths guide you through topics in the right order,
                                track your progress, and help you achieve your career goals faster.
                                Complete all topics to earn a certificate!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Learning Paths Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {learningPaths.map((path) => (
                        <Link
                            key={path.id}
                            href={`/learning-paths/${path.id}`}
                            className="group"
                        >
                            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all hover:scale-105">
                                {/* Icon and Title */}
                                <div className="flex items-start gap-4 mb-4">
                                    <div className={`text-5xl ${path.bgColor} p-3 rounded-xl`}>
                                        {path.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className={`text-xl font-bold ${path.color} mb-1`}>
                                            {path.name}
                                        </h3>
                                        <span className={`text-xs px-2 py-1 rounded-full ${path.difficulty === 'beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                                path.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                                                    'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                            }`}>
                                            {path.difficulty.charAt(0).toUpperCase() + path.difficulty.slice(1)}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                    {path.description}
                                </p>

                                {/* Stats */}
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                        <FiClock className="w-4 h-4" />
                                        <span>{path.estimatedHours} hours estimated</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                        <FiTrendingUp className="w-4 h-4" />
                                        <span>{path.topics.length} topics</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                        <FiAward className="w-4 h-4" />
                                        <span>Certificate on completion</span>
                                    </div>
                                </div>

                                {/* Progress Bar (placeholder for now) */}
                                <div className="mb-4">
                                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
                                        <span>Progress</span>
                                        <span>0%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '0%' }}></div>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <button className="w-full py-2 bg-gray-100 dark:bg-gray-700 group-hover:bg-green-600 group-hover:text-white text-gray-900 dark:text-white font-medium rounded-lg transition-colors">
                                    Start Path →
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-8 text-white">
                        <h2 className="text-2xl font-bold mb-2">Not sure where to start?</h2>
                        <p className="mb-4 opacity-90">
                            Take our quick assessment to find the perfect learning path for you
                        </p>
                        <button className="px-6 py-3 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                            Take Assessment (Coming Soon)
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
