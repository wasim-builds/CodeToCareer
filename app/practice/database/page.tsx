'use client';

import { getAllSQLProblems } from '@/data/practice/sqlProblems';
import Link from 'next/link';
import { FiDatabase, FiAward } from 'react-icons/fi';

export default function DatabasePracticePage() {
    const problems = getAllSQLProblems();

    const difficultyColors = {
        easy: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
        medium: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
        hard: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3 mb-2">
                        <FiDatabase className="text-blue-600" />
                        SQL Practice
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Master database queries with interactive SQL problems
                    </p>
                </div>

                {/* Info Banner */}
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
                    <div className="flex items-start gap-4">
                        <span className="text-3xl">💡</span>
                        <div>
                            <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-2">
                                Interactive SQL Learning
                            </h3>
                            <p className="text-sm text-blue-800 dark:text-blue-400">
                                Write SQL queries directly in your browser. Each problem includes sample data,
                                hints, and instant validation. No database setup required!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">{problems.length}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Total Problems</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                        <div className="text-2xl font-bold text-green-600">0</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Completed</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                        <div className="text-2xl font-bold text-blue-600">0</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">XP Earned</div>
                    </div>
                </div>

                {/* Problem List */}
                <div className="space-y-4">
                    {problems.map((problem) => (
                        <div
                            key={problem.id}
                            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                            {problem.title}
                                        </h3>
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[problem.difficulty]}`}>
                                            {problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                                        {problem.description}
                                    </p>
                                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="flex items-center gap-1">
                                            📁 {problem.category}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FiAward className="w-4 h-4" />
                                            {problem.points} XP
                                        </span>
                                        <span>
                                            {problem.tags.join(', ')}
                                        </span>
                                    </div>
                                </div>
                                <Link
                                    href={`/practice/database/${problem.id}`}
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium whitespace-nowrap"
                                >
                                    Solve Problem →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Coming Soon */}
                <div className="mt-12 text-center bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl p-8 text-white">
                    <h2 className="text-2xl font-bold mb-2">More Problems Coming Soon!</h2>
                    <p className="opacity-90">
                        We&apos;re adding JOINs, GROUP BY, subqueries, and advanced SQL topics
                    </p>
                </div>
            </div>
        </div>
    );
}
