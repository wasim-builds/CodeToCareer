"use client";

import Link from 'next/link';
import { PracticeProblem } from '@/types/practice';

interface PracticeListProps {
  problems: PracticeProblem[];
}

function difficultyColor(difficulty: PracticeProblem['difficulty']) {
  switch (difficulty) {
    case 'easy':
      return 'text-green-400 bg-green-400/10';
    case 'medium':
      return 'text-yellow-400 bg-yellow-400/10';
    case 'hard':
      return 'text-red-400 bg-red-400/10';
    default:
      return 'text-gray-300 bg-gray-700/40';
  }
}

export function PracticeList({ problems }: PracticeListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {problems.map((problem) => (
        <Link
          key={problem.id}
          href={`/practice/${problem.slug}`}
          className="border border-gray-800 rounded-lg p-4 bg-gray-900 hover:border-gray-600 transition"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-white">{problem.title}</h3>
            <span
              className={`text-xs px-2 py-1 rounded-full font-semibold ${difficultyColor(problem.difficulty)}`}
            >
              {problem.difficulty.toUpperCase()}
            </span>
          </div>
          <p className="text-sm text-gray-400 line-clamp-2 mb-3">{problem.prompt}</p>
          <div className="flex flex-wrap gap-2 text-xs text-gray-300">
            {problem.topics.map((topic) => (
              <span key={topic} className="px-2 py-1 rounded bg-gray-800">
                {topic}
              </span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}
