"use client";

import { useState, useMemo } from 'react';
import { getAllRoadmaps } from '@/data/roadmaps';
import { RoadmapCard } from '@/components/roadmap/RoadmapCard';
import { FiMap, FiSearch, FiFilter } from 'react-icons/fi';

export default function RoadmapPage() {
    const roadmaps = getAllRoadmaps();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const categories = Array.from(new Set(roadmaps.map(r => r.category))).sort();

    const filtered = useMemo(() => {
        return roadmaps.filter(roadmap => {
            const searchOk = !searchQuery ||
                roadmap.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                roadmap.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                roadmap.category.toLowerCase().includes(searchQuery.toLowerCase());

            const difficultyOk = !selectedDifficulty || roadmap.difficulty === selectedDifficulty;
            const categoryOk = !selectedCategory || roadmap.category === selectedCategory;

            return searchOk && difficultyOk && categoryOk;
        });
    }, [roadmaps, searchQuery, selectedDifficulty, selectedCategory]);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
            {/* Header */}
            <div className="space-y-3">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                        <FiMap className="w-5 h-5 text-green-400" />
                    </div>
                    <p className="text-sm text-green-400 font-semibold uppercase tracking-wide">Career Roadmaps</p>
                </div>
                <h1 className="text-4xl font-bold text-white bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Your Path to Tech Success
                </h1>
                <p className="text-gray-400 max-w-3xl text-lg">
                    Comprehensive, step-by-step learning paths for various tech careers. From beginner to expert, we've got you covered.
                </p>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4">
                <div className="flex flex-wrap items-center gap-3 flex-1">
                    {/* Category Filter */}
                    <div className="relative">
                        <select
                            className="bg-gray-800/50 border border-gray-700 hover:border-gray-600 rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-200 appearance-none cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 min-w-[180px]"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="">All Categories</option>
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                        <FiFilter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>

                    {/* Difficulty Filter */}
                    <div className="relative">
                        <select
                            className="bg-gray-800/50 border border-gray-700 hover:border-gray-600 rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-200 appearance-none cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 min-w-[160px]"
                            value={selectedDifficulty}
                            onChange={(e) => setSelectedDifficulty(e.target.value)}
                        >
                            <option value="">All Levels</option>
                            <option value="beginner-friendly">Beginner Friendly</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>
                        <FiFilter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>

                    {/* Search Bar */}
                    <div className="relative flex-1 min-w-[200px] max-w-md">
                        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        <input
                            type="text"
                            placeholder="Search roadmaps..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-gray-800/50 border border-gray-700 hover:border-gray-600 focus:border-green-500 rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-200 placeholder-gray-500 transition-all focus:outline-none focus:ring-2 focus:ring-green-500/50"
                        />
                    </div>
                </div>

                {/* Results Count */}
                <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-400">Showing</span>
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded-md font-semibold">
                        {filtered.length}
                    </span>
                    <span className="text-gray-400">of {roadmaps.length}</span>
                </div>
            </div>

            {/* Roadmap Grid */}
            {filtered.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                    {filtered.map((roadmap) => (
                        <RoadmapCard key={roadmap.id} roadmap={roadmap} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800/50 mb-4">
                        <FiMap className="w-8 h-8 text-gray-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-300 mb-2">No roadmaps found</h3>
                    <p className="text-gray-500">Try adjusting your filters to see more roadmaps</p>
                </div>
            )}
        </div>
    );
}
