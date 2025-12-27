'use client';

import { useState, useMemo } from 'react';
import { useBookmark } from '@/contexts/BookmarkContext';
import { FiBookmark, FiTrash2, FiFilter, FiSearch } from 'react-icons/fi';
import Link from 'next/link';

export default function BookmarksPage() {
    const { bookmarks, removeBookmark, clearBookmarks } = useBookmark();
    const [selectedTopic, setSelectedTopic] = useState<string>('all');
    const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState('');

    // Get unique topics from bookmarks
    const topics = useMemo(() => {
        const uniqueTopics = Array.from(new Set(bookmarks.map(b => b.topicId)));
        return uniqueTopics.map(id => ({
            id,
            name: bookmarks.find(b => b.topicId === id)?.topicName || id
        }));
    }, [bookmarks]);

    // Filter bookmarks
    const filteredBookmarks = useMemo(() => {
        return bookmarks.filter(bookmark => {
            const matchesTopic = selectedTopic === 'all' || bookmark.topicId === selectedTopic;
            const matchesDifficulty = selectedDifficulty === 'all' || bookmark.difficulty === selectedDifficulty;
            const matchesSearch = searchQuery === '' ||
                bookmark.question.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesTopic && matchesDifficulty && matchesSearch;
        });
    }, [bookmarks, selectedTopic, selectedDifficulty, searchQuery]);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - date.getTime());
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return 'Today';
        if (diffDays === 1) return 'Yesterday';
        if (diffDays < 7) return `${diffDays} days ago`;
        if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
        return `${Math.floor(diffDays / 30)} months ago`;
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                                <FiBookmark className="w-8 h-8 text-green-600" />
                                My Bookmarks
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">
                                {bookmarks.length} {bookmarks.length === 1 ? 'question' : 'questions'} saved for review
                            </p>
                        </div>
                        {bookmarks.length > 0 && (
                            <button
                                onClick={clearBookmarks}
                                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                            >
                                <FiTrash2 className="w-4 h-4" />
                                Clear All
                            </button>
                        )}
                    </div>

                    {/* Filters */}
                    {bookmarks.length > 0 && (
                        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                            <div className="flex items-center gap-2 mb-4">
                                <FiFilter className="w-4 h-4 text-gray-500" />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filters</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {/* Search */}
                                <div className="relative">
                                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search questions..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    />
                                </div>

                                {/* Topic Filter */}
                                <select
                                    value={selectedTopic}
                                    onChange={(e) => setSelectedTopic(e.target.value)}
                                    className="px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                >
                                    <option value="all">All Topics ({bookmarks.length})</option>
                                    {topics.map(topic => (
                                        <option key={topic.id} value={topic.id}>
                                            {topic.name} ({bookmarks.filter(b => b.topicId === topic.id).length})
                                        </option>
                                    ))}
                                </select>

                                {/* Difficulty Filter */}
                                <select
                                    value={selectedDifficulty}
                                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                                    className="px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                >
                                    <option value="all">All Difficulties</option>
                                    <option value="easy">Easy ({bookmarks.filter(b => b.difficulty === 'easy').length})</option>
                                    <option value="medium">Medium ({bookmarks.filter(b => b.difficulty === 'medium').length})</option>
                                    <option value="hard">Hard ({bookmarks.filter(b => b.difficulty === 'hard').length})</option>
                                </select>
                            </div>
                        </div>
                    )}
                </div>

                {/* Bookmarks List */}
                {filteredBookmarks.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FiBookmark className="w-12 h-12 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            {bookmarks.length === 0 ? 'No bookmarks yet' : 'No bookmarks match your filters'}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            {bookmarks.length === 0
                                ? 'Start bookmarking questions while taking quizzes to review them later!'
                                : 'Try adjusting your filters to see more bookmarks'}
                        </p>
                        {bookmarks.length === 0 && (
                            <Link
                                href="/quiz"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                            >
                                Browse Quizzes
                            </Link>
                        )}
                    </div>
                ) : (
                    <div className="space-y-4">
                        {filteredBookmarks.map((bookmark) => (
                            <div
                                key={bookmark.id}
                                className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        {/* Topic and Difficulty */}
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-sm font-medium text-green-600 dark:text-green-400">
                                                {bookmark.topicName}
                                            </span>
                                            <span className="text-gray-300 dark:text-gray-600">•</span>
                                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${bookmark.difficulty === 'easy'
                                                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                                                    : bookmark.difficulty === 'medium'
                                                        ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                                                        : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                                                }`}>
                                                {bookmark.difficulty.charAt(0).toUpperCase() + bookmark.difficulty.slice(1)}
                                            </span>
                                            <span className="text-gray-300 dark:text-gray-600">•</span>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                                {formatDate(bookmark.bookmarkedAt)}
                                            </span>
                                        </div>

                                        {/* Question */}
                                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                                            {bookmark.question}
                                        </h3>

                                        {/* Options Preview */}
                                        <div className="space-y-2 mb-4">
                                            {bookmark.options.slice(0, 2).map((option, index) => (
                                                <div key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                    <span className="font-medium">{String.fromCharCode(65 + index)}.</span>
                                                    <span>{option}</span>
                                                </div>
                                            ))}
                                            {bookmark.options.length > 2 && (
                                                <div className="text-sm text-gray-500 dark:text-gray-500">
                                                    +{bookmark.options.length - 2} more options
                                                </div>
                                            )}
                                        </div>

                                        {/* Explanation Preview */}
                                        {bookmark.explanation && (
                                            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 mb-4">
                                                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                                    <span className="font-medium text-gray-700 dark:text-gray-300">Explanation: </span>
                                                    {bookmark.explanation}
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Actions */}
                                    <div className="flex flex-col gap-2">
                                        <button
                                            onClick={() => removeBookmark(bookmark.id)}
                                            className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                            title="Remove bookmark"
                                        >
                                            <FiTrash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
