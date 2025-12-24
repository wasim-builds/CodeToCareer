"use client";

import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { PracticeFilters } from '@/components/practice/PracticeFilters';
import { PracticeList } from '@/components/practice/PracticeList';
import { practiceProblems } from '@/data/practice/problems';
import { FiSearch, FiCode } from 'react-icons/fi';

const topics = Array.from(new Set(practiceProblems.flatMap((p) => p.topics))).sort();

export default function PracticePage() {
  const searchParams = useSearchParams();
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Set filters from URL params on mount
  useEffect(() => {
    const difficultyParam = searchParams.get('difficulty');
    const topicParam = searchParams.get('topic');
    if (difficultyParam) setSelectedDifficulty(difficultyParam);
    if (topicParam) setSelectedTopic(topicParam);
  }, [searchParams]);

  const filtered = useMemo(() => {
    return practiceProblems.filter((problem) => {
      const topicOk = !selectedTopic || problem.topics.includes(selectedTopic);
      const difficultyOk = !selectedDifficulty || problem.difficulty === selectedDifficulty;
      const searchOk = !searchQuery ||
        problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        problem.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        problem.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return topicOk && difficultyOk && searchOk;
    });
  }, [selectedDifficulty, selectedTopic, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-green-500/10 rounded-lg">
            <FiCode className="w-5 h-5 text-green-400" />
          </div>
          <p className="text-sm text-green-400 font-semibold uppercase tracking-wide">Coding Practice</p>
        </div>
        <h1 className="text-4xl font-bold text-white bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Ace interviews with hands-on problems
        </h1>
        <p className="text-gray-400 max-w-3xl text-lg">
          Filter by topic and difficulty, open a problem, and run tests in the built-in playground.
        </p>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4">
        <div className="flex flex-wrap items-center gap-3 flex-1">
          <PracticeFilters
            topics={topics}
            selectedTopic={selectedTopic}
            onTopicChange={setSelectedTopic}
            selectedDifficulty={selectedDifficulty}
            onDifficultyChange={setSelectedDifficulty}
          />

          {/* Search Bar */}
          <div className="relative flex-1 min-w-[200px] max-w-md">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <FiSearch className="w-4 h-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search problems..."
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
          <span className="text-gray-400">of {practiceProblems.length}</span>
        </div>
      </div>

      {/* Problem List */}
      <PracticeList problems={filtered} />
    </div>
  );
}
