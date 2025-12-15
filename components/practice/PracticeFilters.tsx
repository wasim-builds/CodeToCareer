"use client";

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
    <div className="flex flex-wrap gap-4 items-center">
      <div className="flex flex-col text-sm gap-1">
        <label className="text-gray-400">Topic</label>
        <select
          className="bg-gray-900 border border-gray-700 rounded px-3 py-2 text-sm"
          value={selectedTopic}
          onChange={(e) => onTopicChange(e.target.value)}
        >
          <option value="">All</option>
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col text-sm gap-1">
        <label className="text-gray-400">Difficulty</label>
        <select
          className="bg-gray-900 border border-gray-700 rounded px-3 py-2 text-sm"
          value={selectedDifficulty}
          onChange={(e) => onDifficultyChange(e.target.value)}
        >
          <option value="">All</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
    </div>
  );
}
