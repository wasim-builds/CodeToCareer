"use client";

import Link from 'next/link';
import { PracticeProblem } from '@/types/practice';
import { FiCode, FiTrendingUp, FiCheckCircle } from 'react-icons/fi';

interface PracticeListProps {
  problems: PracticeProblem[];
}

function difficultyConfig(difficulty: PracticeProblem['difficulty']) {
  switch (difficulty) {
    case 'easy':
      return {
        color: 'text-green-400',
        bg: 'bg-green-400/10',
        border: 'border-green-400/30',
        icon: '🟢',
      };
    case 'medium':
      return {
        color: 'text-yellow-400',
        bg: 'bg-yellow-400/10',
        border: 'border-yellow-400/30',
        icon: '🟡',
      };
    case 'hard':
      return {
        color: 'text-red-400',
        bg: 'bg-red-400/10',
        border: 'border-red-400/30',
        icon: '🔴',
      };
    default:
      return {
        color: 'text-gray-300',
        bg: 'bg-gray-700/40',
        border: 'border-gray-600',
        icon: '⚪',
      };
  }
}

export function PracticeList({ problems }: PracticeListProps) {
  if (problems.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800/50 mb-4">
          <FiCode className="w-8 h-8 text-gray-500" />
        </div>
        <h3 className="text-xl font-semibold text-gray-300 mb-2">No problems found</h3>
        <p className="text-gray-500">Try adjusting your filters to see more problems</p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2">
      {problems.map((problem) => {
        const config = difficultyConfig(problem.difficulty);
        return (
          <Link
            key={problem.id}
            href={`/practice/${problem.slug}`}
            className="group relative border border-gray-800 rounded-xl p-5 bg-gradient-to-br from-gray-900 to-gray-900/50 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Difficulty Badge */}
            <div className="flex items-center justify-between mb-3">
              <span
                className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-semibold ${config.bg} ${config.color} border ${config.border}`}
              >
                <span>{config.icon}</span>
                {problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)}
              </span>

              {/* Hover indicator */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <FiTrendingUp className="w-4 h-4 text-green-400" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors line-clamp-1">
              {problem.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-400 line-clamp-2 mb-4 leading-relaxed">
              {problem.prompt}
            </p>

            {/* Topics */}
            <div className="flex flex-wrap gap-2 mb-3">
              {problem.topics.slice(0, 3).map((topic) => (
                <span
                  key={topic}
                  className="px-2.5 py-1 rounded-md bg-gray-800/70 text-gray-300 text-xs font-medium hover:bg-gray-700 transition-colors"
                >
                  {topic}
                </span>
              ))}
              {problem.topics.length > 3 && (
                <span className="px-2.5 py-1 rounded-md bg-gray-800/70 text-gray-400 text-xs font-medium">
                  +{problem.topics.length - 3}
                </span>
              )}
            </div>

            {/* Footer Stats */}
            <div className="flex items-center gap-4 text-xs text-gray-500 pt-3 border-t border-gray-800">
              <div className="flex items-center gap-1">
                <FiCheckCircle className="w-3.5 h-3.5" />
                <span>Acceptance: {Math.floor(Math.random() * 30 + 40)}%</span>
              </div>
              <div className="flex items-center gap-1">
                <FiCode className="w-3.5 h-3.5" />
                <span>{problem.starterCode.length} languages</span>
              </div>
            </div>

            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
          </Link>
        );
      })}
    </div>
  );
}
