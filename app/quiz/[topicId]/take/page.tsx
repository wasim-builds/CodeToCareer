'use client';

import React, { useMemo } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { topics } from '@/data/quiz/topics';
import { getQuestionsForTopic, getQuestionsByDifficulty } from '@/data/quiz/questions';
import { Difficulty } from '@/types/quiz';
import QuizComponent from '@/components/quiz/QuizComponent';
import { useQuiz } from '@/contexts/QuizContext';

export const dynamic = 'force-dynamic';

export default function TakeQuizPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const topicId = params.topicId as string;
  const difficultyParam = searchParams.get('difficulty') as Difficulty | null;
  const timedMode = searchParams.get('timed') === 'true';
  const timeLimit = parseInt(searchParams.get('timeLimit') || '0', 10);

  const topic = useMemo(() => {
    return topics.find(t => t.id === topicId);
  }, [topicId]);

  const { generatedQuestions } = useQuiz();
  const mode = searchParams.get('mode');

  console.log('[Take Quiz] Mode:', mode);
  console.log('[Take Quiz] Generated questions count:', generatedQuestions?.length || 0);

  const questions = useMemo(() => {
    if (mode === 'endless') {
      console.log('[Take Quiz] Using ENDLESS mode with', generatedQuestions?.length || 0, 'AI-generated questions');
      return generatedQuestions;
    }
    if (difficultyParam && ['easy', 'medium', 'hard'].includes(difficultyParam)) {
      const qs = getQuestionsByDifficulty(topicId, difficultyParam);
      console.log('[Take Quiz] Using difficulty filter:', difficultyParam, '- Questions:', qs.length);
      return qs;
    }
    const qs = getQuestionsForTopic(topicId);
    console.log('[Take Quiz] Using all questions for topic:', topicId, '- Questions:', qs.length);
    return qs;
  }, [topicId, difficultyParam, mode, generatedQuestions]);

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
      timedMode={timedMode}
      timeLimit={timeLimit}
    />
  );
}
