"use client";

import { useMemo, useState } from 'react';
import { PracticeFilters } from '@/components/practice/PracticeFilters';
import { PracticeList } from '@/components/practice/PracticeList';
import { practiceProblems } from '@/data/practice/problems';

const topics = Array.from(new Set(practiceProblems.flatMap((p) => p.topics))).sort();

export default function PracticePage() {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  const filtered = useMemo(() => {
    return practiceProblems.filter((problem) => {
      const topicOk = !selectedTopic || problem.topics.includes(selectedTopic);
      const difficultyOk = !selectedDifficulty || problem.difficulty === selectedDifficulty;
      return topicOk && difficultyOk;
    });
  }, [selectedDifficulty, selectedTopic]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-green-400 font-semibold">Coding Practice</p>
        <h1 className="text-3xl font-bold text-white">Ace interviews with hands-on problems</h1>
        <p className="text-gray-400 max-w-3xl">
          Filter by topic and difficulty, open a problem, and run tests in the built-in playground.
        </p>
      </div>

      <div className="flex items-center justify-between gap-4 flex-wrap">
        <PracticeFilters
          topics={topics}
          selectedTopic={selectedTopic}
          onTopicChange={setSelectedTopic}
          selectedDifficulty={selectedDifficulty}
          onDifficultyChange={setSelectedDifficulty}
        />
        <div className="text-sm text-gray-400">
          Showing {filtered.length} of {practiceProblems.length} problems
        </div>
      </div>

      <PracticeList problems={filtered} />
    </div>
  );
}
