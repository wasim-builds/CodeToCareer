'use client';

import { useState, useEffect } from 'react';
import { FiTarget, FiTrendingUp, FiCheckCircle, FiClock, FiRefreshCw } from 'react-icons/fi';
import { useQuiz } from '@/contexts/QuizContext';

interface LearningPath {
    assessment: string;
    focusAreas: string[];
    actionItems: string[];
    timeline: string;
    motivation: string;
}

export function LearningPathGenerator() {
    const { results } = useQuiz();
    const [path, setPath] = useState<LearningPath | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const generatePath = async () => {
        if (results.length === 0) {
            setError('Complete some quizzes first to generate a personalized learning path!');
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/learning-path', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    quizHistory: results.map(r => ({
                        topicId: r.topicId,
                        score: r.score,
                        difficulty: r.difficulty,
                        timestamp: r.timestamp,
                    })),
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to generate learning path');
            }

            const data = await response.json();
            setPath(data);
        } catch (err) {
            console.error('Learning path error:', err);
            setError('Failed to generate learning path. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    // Auto-generate on mount if user has quiz history
    useEffect(() => {
        if (results.length >= 5 && !path) {
            generatePath();
        }
    }, [results.length]);

    if (results.length === 0) {
        return (
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 text-center">
                <FiTarget className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                    No Learning Path Yet
                </h3>
                <p className="text-gray-400 text-sm">
                    Complete at least 5 quizzes to get a personalized learning path!
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                        <FiTarget className="text-green-400" />
                        Your Learning Path
                    </h2>
                    <p className="text-gray-400 text-sm mt-1">
                        AI-powered personalized study plan based on your performance
                    </p>
                </div>
                <button
                    onClick={generatePath}
                    disabled={isLoading}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-700 text-white rounded-lg transition-colors"
                >
                    <FiRefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                    {isLoading ? 'Generating...' : 'Regenerate'}
                </button>
            </div>

            {error && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <p className="text-red-400 text-sm">{error}</p>
                </div>
            )}

            {path && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Assessment */}
                    <div className="lg:col-span-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl p-6">
                        <div className="flex items-start gap-3">
                            <FiTrendingUp className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    Overall Assessment
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {path.assessment}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Focus Areas */}
                    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <FiTarget className="text-blue-400" />
                            Focus Areas
                        </h3>
                        {path.focusAreas.length > 0 ? (
                            <ul className="space-y-2">
                                {path.focusAreas.map((area, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2 text-gray-300"
                                    >
                                        <span className="w-6 h-6 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                                            {index + 1}
                                        </span>
                                        <span>{area}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-400 text-sm">
                                Great job! Keep practicing to maintain your skills.
                            </p>
                        )}
                    </div>

                    {/* Action Items */}
                    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <FiCheckCircle className="text-green-400" />
                            Action Items
                        </h3>
                        <ul className="space-y-3">
                            {path.actionItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-2 text-gray-300 text-sm"
                                >
                                    <FiCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Timeline & Motivation */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-2">
                                <FiClock className="w-5 h-5 text-purple-400" />
                                <h4 className="font-semibold text-white">Estimated Timeline</h4>
                            </div>
                            <p className="text-2xl font-bold text-purple-400">{path.timeline}</p>
                            <p className="text-gray-400 text-sm mt-1">
                                With consistent daily practice
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-2xl">💪</span>
                                <h4 className="font-semibold text-white">Motivation</h4>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                {path.motivation}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
