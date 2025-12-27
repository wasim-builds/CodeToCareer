'use client';

import { getSQLProblemById } from '@/data/practice/sqlProblems';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FiArrowLeft, FiInfo, FiCheckCircle } from 'react-icons/fi';
import SQLEditor from '@/components/practice/SQLEditor';

export default function SQLProblemPage() {
    const params = useParams();
    const problemId = params.problemId as string;
    const problem = getSQLProblemById(problemId);

    if (!problem) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Problem Not Found
                    </h1>
                    <Link
                        href="/practice/database"
                        className="text-blue-600 hover:text-blue-700"
                    >
                        ← Back to Problems
                    </Link>
                </div>
            </div>
        );
    }

    const difficultyColors = {
        easy: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
        medium: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
        hard: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-6xl mx-auto px-4">
                {/* Back Button */}
                <Link
                    href="/practice/database"
                    className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6"
                >
                    <FiArrowLeft />
                    Back to Problems
                </Link>

                {/* Problem Header */}
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                {problem.title}
                            </h1>
                            <div className="flex items-center gap-3">
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[problem.difficulty]}`}>
                                    {problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)}
                                </span>
                                <span className="text-gray-600 dark:text-gray-400">
                                    {problem.category}
                                </span>
                                <span className="text-gray-600 dark:text-gray-400">
                                    {problem.points} XP
                                </span>
                            </div>
                        </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300">
                        {problem.description}
                    </p>
                </div>

                {/* Schema */}
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                        Database Schema
                    </h2>
                    {problem.schema.map((table) => (
                        <div key={table.name} className="mb-4">
                            <h3 className="font-mono text-blue-600 dark:text-blue-400 mb-2">
                                {table.name}
                            </h3>
                            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <table className="min-w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-gray-200 dark:border-gray-700">
                                            {table.columns.map((col) => (
                                                <th key={col.name} className="text-left py-2 px-4 font-medium text-gray-700 dark:text-gray-300">
                                                    {col.name} ({col.type})
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {table.data.slice(0, 3).map((row, idx) => (
                                            <tr key={idx} className="border-b border-gray-100 dark:border-gray-800">
                                                {table.columns.map((col) => (
                                                    <td key={col.name} className="py-2 px-4 text-gray-600 dark:text-gray-400">
                                                        {row[col.name]}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                </div>

                {/* SQL Editor */}
                <div className="mb-6">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                        SQL Editor
                    </h2>
                    <SQLEditor problem={problem} />
                </div>


            </div>
        </div>
    );
}
