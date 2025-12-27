'use client';

import React from 'react';
import { Topic } from '@/types/quiz';
import Link from 'next/link';
import { useQuiz } from '@/contexts/QuizContext';
import { getTopicIcon } from '@/data/topicIcons';
import { FiBook } from 'react-icons/fi';

interface TopicCardProps {
  topic: Topic;
}

export default function TopicCard({ topic }: TopicCardProps) {
  const { results } = useQuiz();

  // Calculate progress for this topic
  const topicResults = results.filter(r => r.topicId === topic.id);

  // Progress is based on the best score achieved
  const progressPercent = topicResults.length > 0
    ? Math.max(...topicResults.map(r => r.score))
    : 0;

  const bestScore = topicResults.length > 0
    ? Math.max(...topicResults.map(r => r.score))
    : 0;

  const questionCounts = {
    easy: topic.questions.filter(q => q.difficulty === 'easy').length,
    medium: topic.questions.filter(q => q.difficulty === 'medium').length,
    hard: topic.questions.filter(q => q.difficulty === 'hard').length,
  };

  const { icon: Icon, color, bgColor } = getTopicIcon(topic.id);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700 group">
      <Link href={`/quiz/${topic.id}`} className="block">
        <div className="flex items-start gap-4 mb-4">
          {/* Topic Icon */}
          <div className={`w-14 h-14 ${bgColor} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
            <Icon className={`w-7 h-7 ${color}`} />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors truncate">
              {topic.name}
            </h3>
            <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
              {topic.category}
            </span>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {topic.description}
        </p>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-gray-500 dark:text-gray-400">Progress</span>
            <span className="text-green-600 dark:text-green-400 font-medium">{progressPercent.toFixed(0)}%</span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Best Score Badge */}
        {bestScore > 0 && (
          <div className="mb-4 flex items-center gap-2">
            <span className="text-xs text-gray-500 dark:text-gray-400">Best Score:</span>
            <span className={`text-sm font-bold ${bestScore >= 80 ? 'text-green-500' :
              bestScore >= 60 ? 'text-yellow-500' : 'text-red-500'
              }`}>
              {bestScore.toFixed(0)}%
            </span>
          </div>
        )}

        {/* Difficulty Distribution */}
        <div className="flex gap-3 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-gray-500 dark:text-gray-400">Easy: {questionCounts.easy}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            <span className="text-gray-500 dark:text-gray-400">Med: {questionCounts.medium}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="text-gray-500 dark:text-gray-400">Hard: {questionCounts.hard}</span>
          </div>
        </div>
      </Link>

      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <Link
          href={`/quiz/${topic.id}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
        >
          Start Quiz →
        </Link>
        <Link
          href={`/theory/${topic.id}`}
          className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <FiBook className="w-3 h-3" />
          Theory
        </Link>
      </div>
    </div>
  );
}
