'use client';

import React, { useMemo } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { topics } from '@/data/quiz/topics';
import { getQuestionsForTopic, getQuestionsByDifficulty } from '@/data/quiz/questions';
import { Difficulty } from '@/types/quiz';
import QuizComponent from '@/components/quiz/QuizComponent';

export const dynamic = 'force-dynamic';

export default function TakeQuizPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const topicId = params.topicId as string;
  const difficultyParam = searchParams.get('difficulty') as Difficulty | null;

  const topic = useMemo(() => {
    return topics.find(t => t.id === topicId);
  }, [topicId]);

  const questions = useMemo(() => {
    if (difficultyParam && ['easy', 'medium', 'hard'].includes(difficultyParam)) {
      return getQuestionsByDifficulty(topicId, difficultyParam);
    }
    return getQuestionsForTopic(topicId);
  }, [topicId, difficultyParam]);

  if (!topic) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Topic not found
          </h1>
        </div>
      </div>
    );
  }

  return (
    <QuizComponent
      questions={questions}
      topicId={topicId}
      topicName={topic.name}
      difficulty={difficultyParam || undefined}
    />
  );
}
