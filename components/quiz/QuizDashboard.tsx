'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { Topic } from '@/types/quiz';
import TopicCard from './TopicCard';
import { useQuiz } from '@/contexts/QuizContext';
import { useGamification } from '@/contexts/GamificationContext';
import { FiBook, FiSearch, FiFilter, FiAward, FiZap, FiTrendingUp } from 'react-icons/fi';

interface QuizDashboardProps {
  topics: Topic[];
}

export default function QuizDashboard({ topics }: QuizDashboardProps) {
  const { progress } = useQuiz();
  const { data: gamificationData, getUnlockedBadges } = useGamification();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = useMemo(() => {
    const cats = new Set(topics.map(t => t.category));
    return ['all', ...Array.from(cats)];
  }, [topics]);

  const filteredTopics = useMemo(() => {
    return topics.filter(topic => {
      const matchesSearch = !searchQuery || 
        topic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || topic.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [topics, searchQuery, selectedCategory]);

  const topicsByCategory = useMemo(() => {
    const grouped: Record<string, Topic[]> = {};
    filteredTopics.forEach(topic => {
      if (!grouped[topic.category]) {
        grouped[topic.category] = [];
      }
      grouped[topic.category].push(topic);
    });
    return grouped;
  }, [filteredTopics]);

  const unlockedBadges = getUnlockedBadges();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                Quiz Dashboard
              </h1>
              <p className="text-gray-400">
                Master {topics.length} topics with 5000+ interview questions
              </p>
            </div>
            <Link
              href="/theory"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors w-fit"
            >
              <FiBook className="w-5 h-5" />
              Theory Learning
            </Link>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics..."
                className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <FiFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-12 pr-8 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none cursor-pointer min-w-[180px]"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'All Categories' : cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Stats & Gamification */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <FiBook className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{topics.length}</div>
                <div className="text-xs text-gray-400">Topics</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <FiTrendingUp className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{progress.totalQuizzes}</div>
                <div className="text-xs text-gray-400">Quizzes Done</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <span className="text-lg">📊</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">
                  {progress.averageScore > 0 ? `${progress.averageScore.toFixed(0)}%` : '0%'}
                </div>
                <div className="text-xs text-gray-400">Avg Score</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <span className="text-lg">🔥</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{gamificationData.currentStreak}</div>
                <div className="text-xs text-gray-400">Day Streak</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                <FiAward className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{unlockedBadges.length}</div>
                <div className="text-xs text-gray-400">Badges</div>
              </div>
            </div>
          </div>
        </div>

        {/* Badges Preview */}
        {unlockedBadges.length > 0 && (
          <div className="mb-8 bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                <FiAward className="text-yellow-400" />
                Your Badges
              </h2>
              <Link href="/profile" className="text-sm text-green-400 hover:text-green-300">
                View All →
              </Link>
            </div>
            <div className="flex flex-wrap gap-3">
              {unlockedBadges.slice(0, 8).map(badge => (
                <div 
                  key={badge.id}
                  className="flex items-center gap-2 bg-gray-700 rounded-full px-4 py-2"
                  title={badge.description}
                >
                  <span className="text-xl">{badge.icon}</span>
                  <span className="text-sm text-white">{badge.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Topics by Category */}
        {Object.keys(topicsByCategory).length > 0 ? (
          Object.entries(topicsByCategory).map(([category, categoryTopics]) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700 flex items-center gap-3">
                <span className="w-2 h-8 bg-green-500 rounded-full"></span>
                {category}
                <span className="text-sm font-normal text-gray-400">({categoryTopics.length} topics)</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryTopics.map(topic => (
                  <TopicCard key={topic.id} topic={topic} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No topics found matching your search.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-4 text-green-400 hover:text-green-300"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
