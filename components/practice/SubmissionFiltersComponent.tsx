"use client";

import { FiFilter, FiChevronDown } from 'react-icons/fi';

export interface SubmissionFilters {
    status: 'all' | 'passed' | 'failed';
    language: string;
    dateRange: 'all' | '24h' | 'week' | 'month';
    showFavoritesOnly: boolean;
}

export type SubmissionSort = 'newest' | 'oldest' | 'fastest' | 'slowest' | 'language';

interface SubmissionFiltersProps {
    filters: SubmissionFilters;
    sort: SubmissionSort;
    onFilterChange: (filters: SubmissionFilters) => void;
    onSortChange: (sort: SubmissionSort) => void;
    availableLanguages: string[];
}

export function SubmissionFiltersComponent({
    filters,
    sort,
    onFilterChange,
    onSortChange,
    availableLanguages,
}: SubmissionFiltersProps) {
    return (
        <div className="flex flex-wrap items-center gap-3 mb-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
            <div className="flex items-center gap-2 text-sm text-gray-400">
                <FiFilter className="w-4 h-4" />
                <span className="font-medium">Filters:</span>
            </div>

            {/* Status Filter */}
            <div className="relative">
                <select
                    value={filters.status}
                    onChange={(e) => onFilterChange({ ...filters, status: e.target.value as any })}
                    className="bg-gray-800 border border-gray-700 hover:border-gray-600 rounded-lg px-3 py-2 pr-8 text-sm text-gray-200 appearance-none cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-green-500/50"
                >
                    <option value="all">All Status</option>
                    <option value="passed">✓ Accepted</option>
                    <option value="failed">✗ Failed</option>
                </select>
                <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            {/* Language Filter */}
            <div className="relative">
                <select
                    value={filters.language}
                    onChange={(e) => onFilterChange({ ...filters, language: e.target.value })}
                    className="bg-gray-800 border border-gray-700 hover:border-gray-600 rounded-lg px-3 py-2 pr-8 text-sm text-gray-200 appearance-none cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-green-500/50"
                >
                    <option value="">All Languages</option>
                    {availableLanguages.map(lang => (
                        <option key={lang} value={lang} className="capitalize">
                            {lang.charAt(0).toUpperCase() + lang.slice(1)}
                        </option>
                    ))}
                </select>
                <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            {/* Date Range Filter */}
            <div className="relative">
                <select
                    value={filters.dateRange}
                    onChange={(e) => onFilterChange({ ...filters, dateRange: e.target.value as any })}
                    className="bg-gray-800 border border-gray-700 hover:border-gray-600 rounded-lg px-3 py-2 pr-8 text-sm text-gray-200 appearance-none cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-green-500/50"
                >
                    <option value="all">All Time</option>
                    <option value="24h">Last 24 Hours</option>
                    <option value="week">Last Week</option>
                    <option value="month">Last Month</option>
                </select>
                <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-gray-700" />

            {/* Favorites Only Toggle */}
            <label className="flex items-center gap-2 cursor-pointer">
                <input
                    type="checkbox"
                    checked={filters.showFavoritesOnly}
                    onChange={(e) => onFilterChange({ ...filters, showFavoritesOnly: e.target.checked })}
                    className="w-4 h-4 rounded border-gray-700 bg-gray-800 text-green-600 focus:ring-2 focus:ring-green-500/50 cursor-pointer"
                />
                <span className="text-sm text-gray-300">⭐ Favorites Only</span>
            </label>

            {/* Divider */}
            <div className="h-6 w-px bg-gray-700" />

            {/* Sort */}
            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400 font-medium">Sort:</span>
                <div className="relative">
                    <select
                        value={sort}
                        onChange={(e) => onSortChange(e.target.value as SubmissionSort)}
                        className="bg-gray-800 border border-gray-700 hover:border-gray-600 rounded-lg px-3 py-2 pr-8 text-sm text-gray-200 appearance-none cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-green-500/50"
                    >
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                        <option value="fastest">Fastest Runtime</option>
                        <option value="slowest">Slowest Runtime</option>
                        <option value="language">By Language</option>
                    </select>
                    <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
            </div>
        </div>
    );
}
