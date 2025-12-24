"use client";

import { FiFilter, FiLayers } from 'react-icons/fi';

interface PracticeFiltersProps {
  topics: string[];
  selectedTopic: string;
  onTopicChange: (value: string) => void;
  selectedDifficulty: string;
  onDifficultyChange: (value: string) => void;
}

export function PracticeFilters({
  topics,
  selectedTopic,
  onTopicChange,
  selectedDifficulty,
  onDifficultyChange,
}: PracticeFiltersProps) {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      {/* Topic Filter */}
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <FiLayers className="w-4 h-4 text-gray-400" />
        </div>
        <select
          className="bg-gray-800/50 border border-gray-700 hover:border-gray-600 rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-200 appearance-none cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 min-w-[180px]"
          value={selectedTopic}
          onChange={(e) => onTopicChange(e.target.value)}
        >
          <option value="">All Topics</option>
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Difficulty Filter */}
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <FiFilter className="w-4 h-4 text-gray-400" />
        </div>
        <select
          className="bg-gray-800/50 border border-gray-700 hover:border-gray-600 rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-200 appearance-none cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 min-w-[160px]"
          value={selectedDifficulty}
          onChange={(e) => onDifficultyChange(e.target.value)}
        >
          <option value="">All Levels</option>
          <option value="easy">🟢 Easy</option>
          <option value="medium">🟡 Medium</option>
          <option value="hard">🔴 Hard</option>
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
