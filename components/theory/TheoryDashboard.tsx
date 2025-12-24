'use client';

import React, { useMemo, useState, useEffect } from 'react';
import Link from 'next/link';
import {
  FiBook,
  FiBookOpen,
  FiSearch,
  FiFilter,
  FiClock,
  FiLayers,
  FiArrowRight,
  FiTrendingUp,
  FiAward,
  FiCheckCircle
} from 'react-icons/fi';
import { getTheoryTopicsWithPlaceholders } from '@/data/theory';
import { getTopicIcon } from '@/data/topicIcons';

export default function TheoryDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [theoryProgress, setTheoryProgress] = useState<Record<string, number>>({});
  const [recentlyStudied, setRecentlyStudied] = useState<Array<{ topicId: string, lastStudied: Date, progress: number }>>([]);

  const theoryTopics = useMemo(() => {
    return getTheoryTopicsWithPlaceholders();
  }, []);

  // Load theory progress and recently studied from localStorage
  useEffect(() => {
    const progress: Record<string, number> = {};
    const recent: Array<{ topicId: string, lastStudied: Date, progress: number }> = [];

    theoryTopics.forEach((topic) => {
      const topicId = 'topicId' in topic ? topic.topicId : '';
      const saved = localStorage.getItem(`theory_progress_${topicId}`);
      const lastStudiedStr = localStorage.getItem(`theory_last_studied_${topicId}`);

      if (saved) {
        const completed = JSON.parse(saved);
        // Estimate progress as percentage based on typical 5 sections
        const progressPercent = Math.min(100, (completed.length / 5) * 100);
        progress[topicId] = progressPercent;

        if (lastStudiedStr) {
          recent.push({
            topicId,
            lastStudied: new Date(lastStudiedStr),
            progress: progressPercent
          });
        }
      }
    });

    // Sort by most recent and take top 5
    recent.sort((a, b) => b.lastStudied.getTime() - a.lastStudied.getTime());
    setRecentlyStudied(recent.slice(0, 5));
    setTheoryProgress(progress);
  }, [theoryTopics]);

  const categories = useMemo(() => {
    const cats = new Set<string>();
    cats.add('All');
    theoryTopics.forEach((topic) => {
      const category = 'category' in topic ? topic.category : 'Uncategorized';
      cats.add(category);
    });
    return Array.from(cats);
  }, [theoryTopics]);

  const filteredTopics = useMemo(() => {
    return theoryTopics.filter((topic) => {
      const topicName = 'topicName' in topic ? topic.topicName : '';
      const category = 'category' in topic ? topic.category : 'Uncategorized';

      const matchesSearch = topicName.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [theoryTopics, searchQuery, selectedCategory]);

  const topicsByCategory = useMemo(() => {
    const grouped: Record<string, typeof filteredTopics> = {};
    filteredTopics.forEach((topic) => {
      const category = 'category' in topic ? topic.category : 'Uncategorized';
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(topic);
    });
    return grouped;
  }, [filteredTopics]);

  const hasTheory = (topic: typeof theoryTopics[0]): boolean => {
    return !('hasTheory' in topic && topic.hasTheory === false);
  };

  const stats = useMemo(() => {
    const total = theoryTopics.length;
    const available = theoryTopics.filter(hasTheory).length;
    const started = Object.keys(theoryProgress).length;
    const completed = Object.values(theoryProgress).filter(p => p === 100).length;
    return { total, available, started, completed };
  }, [theoryTopics, theoryProgress]);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 border-b border-gray-700">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-sm font-medium mb-4">
              <FiBookOpen className="w-4 h-4" />
              <span>Study Materials</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Theory Learning Center
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Master core concepts and theory for technical interviews. Study before taking quizzes to maximize your learning.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stats.available}</div>
              <div className="text-sm text-gray-400">Topics Available</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">{stats.started}</div>
              <div className="text-sm text-gray-400">In Progress</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">{stats.completed}</div>
              <div className="text-sm text-gray-400">Completed</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1">
                {stats.started > 0 ? Math.round((stats.completed / stats.started) * 100) : 0}%
              </div>
              <div className="text-sm text-gray-400">Completion Rate</div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <FiFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full sm:w-48 pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white appearance-none focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors cursor-pointer"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recently Studied Section */}
      {recentlyStudied.length > 0 && (
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <FiClock className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Recently Studied</h2>
                  <p className="text-sm text-gray-400">Continue where you left off</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recentlyStudied.map((item) => {
                const topic = theoryTopics.find(t => 'topicId' in t && t.topicId === item.topicId);
                if (!topic || !('topicId' in topic)) return null;

                const topicIconData = getTopicIcon(topic.topicId);
                const TopicIcon = topicIconData.icon;
                const timeSince = Math.floor((Date.now() - item.lastStudied.getTime()) / (1000 * 60 * 60));
                const timeText = timeSince < 1 ? 'Just now' :
                  timeSince < 24 ? `${timeSince}h ago` :
                    `${Math.floor(timeSince / 24)}d ago`;

                return (
                  <Link
                    key={item.topicId}
                    href={`/theory/${item.topicId}`}
                    className="group bg-gray-800/50 border border-gray-700 hover:border-green-500/50 rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-12 h-12 rounded-xl ${topicIconData.bgColor} flex items-center justify-center flex-shrink-0`}>
                        <TopicIcon className={`w-6 h-6 ${topicIconData.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-white mb-1 group-hover:text-green-400 transition-colors truncate">
                          {topic.topicName}
                        </h3>
                        <p className="text-xs text-gray-500 mb-2">{timeText}</p>

                        <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                          <div
                            className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                        <p className="text-xs text-gray-400">{Math.round(item.progress)}% complete</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {Object.keys(topicsByCategory).length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-white mb-2">No topics found</h3>
            <p className="text-gray-400">Try adjusting your search or filter</p>
          </div>
        ) : (
          Object.entries(topicsByCategory).map(([category, categoryTopics]) => (
            <div key={category} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {category}
                </h2>
                <span className="px-2 py-0.5 bg-gray-800 text-gray-400 text-sm rounded-full">
                  {categoryTopics.length}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {categoryTopics.map((topic) => {
                  const topicId = 'topicId' in topic ? topic.topicId : '';
                  const topicName = 'topicName' in topic ? topic.topicName : '';
                  const hasTheoryContent = hasTheory(topic);
                  const iconData = getTopicIcon(topicId);
                  const IconComponent = iconData.icon;
                  const progress = theoryProgress[topicId] || 0;

                  return (
                    <div
                      key={topicId}
                      className={`group bg-gray-800 rounded-xl border transition-all duration-300 overflow-hidden ${hasTheoryContent
                        ? 'border-gray-700 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10 cursor-pointer'
                        : 'border-gray-700/50 opacity-50'
                        }`}
                    >
                      {hasTheoryContent ? (
                        <Link href={`/theory/${topicId}`} className="block">
                          {/* Progress Bar */}
                          {progress > 0 && (
                            <div className="h-1 bg-gray-700">
                              <div
                                className="h-full bg-gradient-to-r from-green-500 to-green-400 transition-all"
                                style={{ width: `${progress}%` }}
                              />
                            </div>
                          )}

                          <div className="p-5">
                            <div className="flex items-start gap-4">
                              {/* Topic Icon */}
                              <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                                style={{ backgroundColor: iconData.bgColor }}
                              >
                                <IconComponent
                                  className="w-6 h-6"
                                  style={{ color: iconData.color }}
                                />
                              </div>

                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <h3 className="font-bold text-white text-lg group-hover:text-green-400 transition-colors truncate">
                                    {topicName}
                                  </h3>
                                  {progress === 100 && (
                                    <FiCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                  )}
                                </div>
                                <p className="text-gray-400 text-sm line-clamp-2">
                                  {'description' in topic ? topic.description : 'Learn core concepts and theory'}
                                </p>
                              </div>
                            </div>

                            {/* Stats and CTA */}
                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                              <div className="flex items-center gap-3 text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                  <FiClock className="w-3.5 h-3.5" />
                                  ~10 min
                                </span>
                                <span className="flex items-center gap-1">
                                  <FiLayers className="w-3.5 h-3.5" />
                                  5+ sections
                                </span>
                              </div>
                              <span className="flex items-center gap-1 text-sm font-medium text-green-400 group-hover:gap-2 transition-all">
                                {progress > 0 ? 'Continue' : 'Start'}
                                <FiArrowRight className="w-4 h-4" />
                              </span>
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <div className="p-5">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gray-700/50 flex items-center justify-center flex-shrink-0">
                              <FiBook className="w-6 h-6 text-gray-500" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold text-gray-500 text-lg mb-1">
                                {topicName}
                              </h3>
                              <p className="text-gray-600 text-sm">
                                Theory content coming soon
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700/50">
                            <span className="text-sm text-gray-600">Not available yet</span>
                            <span className="px-2 py-1 bg-gray-700/50 text-gray-500 text-xs rounded-full">
                              Coming Soon
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}

        {/* Quick Tips Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-6 sm:p-8 border border-blue-500/30">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <FiTrendingUp className="text-blue-400" />
            Study Tips for Success
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800/50 rounded-xl p-4">
              <div className="text-2xl mb-2">📚</div>
              <h4 className="font-semibold text-white mb-1">Read Thoroughly</h4>
              <p className="text-gray-400 text-sm">Take your time to understand each concept before moving on.</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4">
              <div className="text-2xl mb-2">✍️</div>
              <h4 className="font-semibold text-white mb-1">Take Notes</h4>
              <p className="text-gray-400 text-sm">Writing helps reinforce memory. Jot down key points.</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4">
              <div className="text-2xl mb-2">🧪</div>
              <h4 className="font-semibold text-white mb-1">Test Yourself</h4>
              <p className="text-gray-400 text-sm">After reading, take the quiz to check your understanding.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
