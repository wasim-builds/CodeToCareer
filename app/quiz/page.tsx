'use client';

import React, { useMemo } from 'react';
import { topics } from '@/data/quiz/topics';
import { getAllQuestions } from '@/data/quiz/questions';
import QuizDashboard from '@/components/quiz/QuizDashboard';

export const dynamic = 'force-dynamic';

export default function QuizPage() {
  // Load questions and attach to topics
  const topicsWithQuestions = useMemo(() => {
    const allQuestions = getAllQuestions();
    return topics.map(topic => ({
      ...topic,
      questions: allQuestions[topic.id] || []
    }));
  }, []);

  return <QuizDashboard topics={topicsWithQuestions} />;
}
