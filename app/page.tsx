'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { topics } from '@/data/quiz/topics';
import { useAuth } from '@/contexts/AuthContext';
import { useQuiz } from '@/contexts/QuizContext';
import { FiSearch, FiPlay, FiBook, FiAward, FiTrendingUp, FiZap, FiTarget } from 'react-icons/fi';
import { topicIcons } from '@/data/topicIcons';

export default function Home() {
  const { user } = useAuth();
  const { progress } = useQuiz();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTopics = useMemo(() => {
    if (!searchQuery.trim()) return topics.slice(0, 6);
    return topics.filter(topic =>
      topic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const popularTopics = useMemo(() => {
    return topics.filter(t => ['python', 'javascript', 'react', 'sql', 'dsa', 'java'].includes(t.id));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Hello, {user ? user.name.split(' ')[0] : 'What Do You Want'} 
              <span className="text-green-400"> To Learn?</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Master technical skills with 35+ topics and 5000+ interview questions. 
              Practice, learn, and ace your next tech interview!
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search topics... (Python, React, DSA, SQL...)"
                  className="w-full pl-14 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                />
              </div>
            </div>

            {/* Quick Tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {['DSA', 'Python', 'JavaScript', 'React', 'SQL', 'System Design'].map(tag => (
                <button
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="px-4 py-2 bg-gray-800 hover:bg-green-600 text-gray-300 hover:text-white rounded-full text-sm font-medium transition-colors border border-gray-700 hover:border-green-600"
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quiz"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg text-lg transition-colors"
              >
                <FiPlay className="w-5 h-5" />
                Start Quiz
              </Link>
              <Link
                href="/theory"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg text-lg transition-colors border border-gray-600"
              >
                <FiBook className="w-5 h-5" />
                Learn Theory
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">35+</div>
              <div className="text-gray-400">Topics</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">5000+</div>
              <div className="text-gray-400">Questions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">{progress.totalQuizzes}</div>
              <div className="text-gray-400">Quizzes Taken</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">
                {progress.averageScore > 0 ? `${progress.averageScore.toFixed(0)}%` : '0%'}
              </div>
              <div className="text-gray-400">Your Avg Score</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Results or Popular Topics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8">
            {searchQuery ? `Results for "${searchQuery}"` : '🔥 Popular Topics'}
          </h2>
          
          {filteredTopics.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(searchQuery ? filteredTopics : popularTopics).map(topic => {
                const Icon = topicIcons[topic.id]?.icon || FiBook;
                const color = topicIcons[topic.id]?.color || 'text-gray-400';
                const bgColor = topicIcons[topic.id]?.bgColor || 'bg-gray-800';
                
                return (
                  <Link
                    key={topic.id}
                    href={`/quiz/${topic.id}`}
                    className="group bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-green-500/50 rounded-xl p-6 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">
                          {topic.name}
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">{topic.category}</p>
                        <p className="text-sm text-gray-500 mt-2 line-clamp-2">{topic.description}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-gray-500">150 Questions</span>
                      <span className="text-green-500 text-sm font-medium group-hover:translate-x-1 transition-transform">
                        Start →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400">No topics found matching "{searchQuery}"</p>
            </div>
          )}

          {!searchQuery && (
            <div className="text-center mt-8">
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 font-medium"
              >
                View all {topics.length} topics →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-center mb-12">Why Students Love Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiTarget className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Interview Ready</h3>
              <p className="text-gray-400">Curated questions from actual tech interviews at top companies</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiTrendingUp className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Track Progress</h3>
              <p className="text-gray-400">Monitor your learning journey with detailed analytics</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiAward className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Earn Badges</h3>
              <p className="text-gray-400">Stay motivated with streaks, badges, and achievements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to start learning?</h2>
          <p className="text-gray-400 mb-8">Join thousands of students preparing for their dream tech jobs</p>
          <Link
            href={user ? '/quiz' : '/register'}
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg text-lg transition-colors"
          >
            <FiZap className="w-5 h-5" />
            {user ? 'Continue Learning' : 'Get Started Free'}
          </Link>
        </div>
      </section>
    </div>
  );
}

