'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getQuestionsForTopic } from '@/data/quiz/questions';
import { Question } from '@/types/quiz';
import { FiCheckCircle, FiXCircle, FiArrowLeft, FiBook } from 'react-icons/fi';

export default function ReviewPage() {
    const params = useParams();
    const router = useRouter();
    const topicId = params.topicId as string;

    const [questions, setQuestions] = useState<Question[]>([]);
    const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load quiz results from localStorage
        const resultsKey = `quiz-results-${topicId}`;
        const savedResults = localStorage.getItem(resultsKey);

        if (savedResults) {
            const results = JSON.parse(savedResults);
            setUserAnswers(results.answers || {});
        }

        // Load questions
        const quizQuestions = getQuestionsForTopic(topicId);
        setQuestions(quizQuestions);
        setLoading(false);
    }, [topicId]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="text-white text-xl">Loading review...</div>
            </div>
        );
    }

    if (questions.length === 0) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-white text-xl mb-4">No quiz data found</p>
                    <button
                        onClick={() => router.push(`/quiz/${topicId}`)}
                        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg"
                    >
                        Take Quiz
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-8">
            <div className="max-w-4xl mx-auto px-4">
                {/* Header */}
                <div className="mb-8">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors"
                    >
                        <FiArrowLeft className="w-5 h-5" />
                        Back
                    </button>
                    <div className="flex items-center gap-3 mb-2">
                        <FiBook className="w-8 h-8 text-green-500" />
                        <h1 className="text-3xl font-bold text-white">Question Review</h1>
                    </div>
                    <p className="text-gray-400">Review all questions and their correct answers</p>
                </div>

                {/* Questions List */}
                <div className="space-y-6">
                    {questions.map((question, index) => {
                        const userAnswer = userAnswers[question.id];
                        const isCorrect = userAnswer === question.correctAnswer;
                        const wasAnswered = userAnswer !== undefined;

                        return (
                            <div
                                key={question.id}
                                className={`bg-gray-800 border-2 rounded-xl p-6 ${wasAnswered
                                        ? isCorrect
                                            ? 'border-green-500/30'
                                            : 'border-red-500/30'
                                        : 'border-gray-700'
                                    }`}
                            >
                                {/* Question Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-sm font-semibold text-gray-400">
                                                Question {index + 1}
                                            </span>
                                            <span
                                                className={`text-xs px-2 py-1 rounded-full font-semibold ${question.difficulty === 'easy'
                                                        ? 'bg-green-500/20 text-green-400'
                                                        : question.difficulty === 'medium'
                                                            ? 'bg-yellow-500/20 text-yellow-400'
                                                            : 'bg-red-500/20 text-red-400'
                                                    }`}
                                            >
                                                {question.difficulty.toUpperCase()}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-medium text-white">
                                            {question.question}
                                        </h3>
                                    </div>
                                    {wasAnswered && (
                                        <div className="ml-4">
                                            {isCorrect ? (
                                                <FiCheckCircle className="w-6 h-6 text-green-500" />
                                            ) : (
                                                <FiXCircle className="w-6 h-6 text-red-500" />
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Options */}
                                <div className="space-y-3 mb-4">
                                    {question.options.map((option, optionIndex) => {
                                        const isUserAnswer = userAnswer === optionIndex;
                                        const isCorrectAnswer = optionIndex === question.correctAnswer;

                                        return (
                                            <div
                                                key={optionIndex}
                                                className={`p-4 rounded-lg border-2 ${isCorrectAnswer
                                                        ? 'bg-green-500/10 border-green-500 text-green-400'
                                                        : isUserAnswer
                                                            ? 'bg-red-500/10 border-red-500 text-red-400'
                                                            : 'bg-gray-700/50 border-gray-600 text-gray-300'
                                                    }`}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <span>{option}</span>
                                                    {isCorrectAnswer && (
                                                        <span className="text-xs font-semibold">✓ Correct</span>
                                                    )}
                                                    {isUserAnswer && !isCorrectAnswer && (
                                                        <span className="text-xs font-semibold">Your Answer</span>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Explanation */}
                                {question.explanation && (
                                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                                        <h4 className="text-sm font-semibold text-blue-400 mb-2">
                                            Explanation
                                        </h4>
                                        <p className="text-sm text-gray-300">{question.explanation}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Footer */}
                <div className="mt-8 text-center">
                    <button
                        onClick={() => router.push(`/quiz/${topicId}`)}
                        className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
                    >
                        Take Quiz Again
                    </button>
                </div>
            </div>
        </div>
    );
}
