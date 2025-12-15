'use client';

import React, { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { topics } from '@/data/quiz/topics';
import { useQuiz } from '@/contexts/QuizContext';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function QuizResultsPage() {
  const params = useParams();
  const topicId = params.topicId as string;
  const { results } = useQuiz();

  const topic = useMemo(() => {
    return topics.find(t => t.id === topicId);
  }, [topicId]);

  const topicResults = useMemo(() => {
    return results.filter(r => r.topicId === topicId).sort((a, b) => 
      b.timestamp.getTime() - a.timestamp.getTime()
    );
  }, [results, topicId]);

  const latestResult = topicResults[0];

  if (!topic) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Topic not found
          </h1>
          <Link href="/quiz" className="text-blue-600 hover:underline">
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  if (!latestResult) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            No Results Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            You haven't completed any quizzes for {topic.name} yet.
          </p>
          <Link
            href={`/quiz/${topicId}`}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Start Quiz
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link
        href="/quiz"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 mb-6"
      >
        ← Back to Main Dashboard
      </Link>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Quiz Results: {topic.name}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Latest attempt results
        </p>

        {/* Latest Result */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
              {latestResult.score}%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Score</div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
              {latestResult.correctAnswers}/{latestResult.totalQuestions}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Correct</div>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
            <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-1">
              {latestResult.incorrectAnswers}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Incorrect</div>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
              {Math.floor(latestResult.timeSpent / 60)}:{(latestResult.timeSpent % 60).toString().padStart(2, '0')}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Time</div>
          </div>
        </div>

        <div className="mb-4">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
            latestResult.difficulty === 'easy' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
            latestResult.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
            'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
          }`}>
            {latestResult.difficulty.toUpperCase()}
          </span>
          <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
            Completed on {latestResult.timestamp.toLocaleDateString()} at {latestResult.timestamp.toLocaleTimeString()}
          </span>
        </div>

        {/* All Results History */}
        {topicResults.length > 1 && (
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Previous Attempts
            </h2>
            <div className="space-y-3">
              {topicResults.slice(1).map((result, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {result.score}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {result.correctAnswers}/{result.totalQuestions} correct • {result.difficulty}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {result.timestamp.toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 flex gap-4">
          <Link
            href={`/quiz/${topicId}`}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
          >
            Take Quiz Again
          </Link>
          <Link
            href="/quiz"
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
