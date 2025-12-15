'use client';

import React, { useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { topics } from '@/data/quiz/topics';
import { getQuestionsForTopic } from '@/data/quiz/questions';
import { Difficulty } from '@/types/quiz';
import Link from 'next/link';
import { useQuiz } from '@/contexts/QuizContext';
import { getTopicIcon } from '@/data/topicIcons';
import { FiArrowLeft, FiPlay, FiClock, FiTarget, FiAward, FiTrendingUp, FiBook, FiZap } from 'react-icons/fi';

export const dynamic = 'force-dynamic';

export default function TopicPage() {
  const params = useParams();
  const router = useRouter();
  const topicId = params.topicId as string;
  const { results } = useQuiz();

  const topic = useMemo(() => {
    return topics.find(t => t.id === topicId);
  }, [topicId]);

  const questions = useMemo(() => {
    return getQuestionsForTopic(topicId);
  }, [topicId]);

  const questionCounts = useMemo(() => {
    return {
      easy: questions.filter(q => q.difficulty === 'easy').length,
      medium: questions.filter(q => q.difficulty === 'medium').length,
      hard: questions.filter(q => q.difficulty === 'hard').length,
    };
  }, [questions]);

  // Get topic stats
  const topicResults = results.filter(r => r.topicId === topicId);
  const bestScore = topicResults.length > 0 ? Math.max(...topicResults.map(r => r.score)) : 0;
  const avgScore = topicResults.length > 0 
    ? topicResults.reduce((sum, r) => sum + r.score, 0) / topicResults.length 
    : 0;
  const totalAttempts = topicResults.length;

  if (!topic) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Topic not found
          </h1>
          <Link href="/quiz" className="text-green-400 hover:text-green-300">
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const { icon: TopicIcon, color, bgColor } = getTopicIcon(topicId);

  const handleStartQuiz = (difficulty: Difficulty | 'all') => {
    if (difficulty === 'all') {
      router.push(`/quiz/${topicId}/take`);
    } else {
      router.push(`/quiz/${topicId}/take?difficulty=${difficulty}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Link
          href="/quiz"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <FiArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden mb-8">
          <div className="p-8">
            <div className="flex items-start gap-6 mb-6">
              <div className={`w-20 h-20 ${bgColor} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                <TopicIcon className={`w-10 h-10 ${color}`} />
              </div>
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-white mb-2">
                  {topic.name}
                </h1>
                <p className="text-gray-400 text-lg mb-4">
                  {topic.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                    <FiBook className="w-4 h-4" />
                    {topic.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                    <FiTarget className="w-4 h-4" />
                    {questions.length} Questions
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                    <FiClock className="w-4 h-4" />
                    ~{Math.round(questions.length * 0.5)} mins
                  </span>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            {totalAttempts > 0 && (
              <div className="grid grid-cols-3 gap-4 p-4 bg-gray-900/50 rounded-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{bestScore.toFixed(0)}%</div>
                  <div className="text-xs text-gray-500">Best Score</div>
                </div>
                <div className="text-center border-x border-gray-700">
                  <div className="text-2xl font-bold text-blue-400">{avgScore.toFixed(0)}%</div>
                  <div className="text-xs text-gray-500">Avg Score</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{totalAttempts}</div>
                  <div className="text-xs text-gray-500">Attempts</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Difficulty Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div 
            onClick={() => handleStartQuiz('easy')}
            className="group cursor-pointer bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-green-500/50 rounded-xl p-6 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🌱</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Easy</h3>
                <p className="text-sm text-gray-400">{questionCounts.easy} questions</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-4">Perfect for beginners. Build your foundation.</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-green-400">~{Math.round(questionCounts.easy * 0.4)} mins</span>
              <span className="text-green-500 group-hover:translate-x-1 transition-transform">Start →</span>
            </div>
          </div>

          <div 
            onClick={() => handleStartQuiz('medium')}
            className="group cursor-pointer bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-yellow-500/50 rounded-xl p-6 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Medium</h3>
                <p className="text-sm text-gray-400">{questionCounts.medium} questions</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-4">Intermediate level. Test your knowledge.</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-yellow-400">~{Math.round(questionCounts.medium * 0.5)} mins</span>
              <span className="text-yellow-500 group-hover:translate-x-1 transition-transform">Start →</span>
            </div>
          </div>

          <div 
            onClick={() => handleStartQuiz('hard')}
            className="group cursor-pointer bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-red-500/50 rounded-xl p-6 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🔥</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Hard</h3>
                <p className="text-sm text-gray-400">{questionCounts.hard} questions</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-4">Advanced challenges. Interview ready.</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-red-400">~{Math.round(questionCounts.hard * 0.6)} mins</span>
              <span className="text-red-500 group-hover:translate-x-1 transition-transform">Start →</span>
            </div>
          </div>
        </div>

        {/* All Questions Button */}
        <button
          onClick={() => handleStartQuiz('all')}
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold py-5 px-8 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg shadow-green-500/20 flex items-center justify-center gap-3"
        >
          <FiPlay className="w-6 h-6" />
          <span className="text-xl">Start Full Quiz</span>
          <span className="text-sm bg-white/20 px-3 py-1 rounded-full ml-2">{questions.length} Questions</span>
        </button>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <Link
            href={`/theory/${topicId}`}
            className="flex items-center justify-center gap-2 py-4 px-6 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl text-gray-300 hover:text-white transition-colors"
          >
            <FiBook className="w-5 h-5" />
            Read Theory First
          </Link>
          <button
            onClick={() => handleStartQuiz('easy')}
            className="flex items-center justify-center gap-2 py-4 px-6 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl text-gray-300 hover:text-white transition-colors"
          >
            <FiZap className="w-5 h-5" />
            Quick Practice (10 Qs)
          </button>
        </div>
      </div>
    </div>
  );
}
