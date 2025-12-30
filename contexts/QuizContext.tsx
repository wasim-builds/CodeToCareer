'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { QuizResult, UserProgress } from '@/types/quiz';

interface QuizContextType {
  results: QuizResult[];
  progress: UserProgress;
  addResult: (result: QuizResult) => void;
  clearResults: () => void;
  generatedQuestions: any[];
  setGeneratedQuestions: (questions: any[]) => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [results, setResults] = useState<QuizResult[]>([]);

  useEffect(() => {
    // Load results from localStorage
    const savedResults = localStorage.getItem('quiz-results');
    if (savedResults) {
      try {
        const parsed = JSON.parse(savedResults);
        setResults(parsed.map((r: any) => ({
          ...r,
          timestamp: new Date(r.timestamp)
        })));
      } catch (e) {
        console.error('Error loading quiz results:', e);
      }
    }
  }, []);


  const addResult = async (result: QuizResult) => {
    // 1. Update local state immediately (optimistic UI)
    const newResults = [...results, result];
    setResults(newResults);
    localStorage.setItem('quiz-results', JSON.stringify(newResults));

    // 2. Save to database if user is logged in
    try {
      const response = await fetch('/api/quiz/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topicId: result.topicId,
          difficulty: result.difficulty,
          mode: result.mode,
          timerMode: result.settings?.timerMode || 'standard',
          score: result.score,
          totalQuestions: result.totalQuestions,
          correctAnswers: result.correctAnswers,
          timeSpent: result.timeSpent,
          xpEarned: result.xpEarned || 0,
          answers: result.answers
        }),
      });

      if (!response.ok) {
        console.error('Failed to save quiz session to database');
      }
    } catch (error) {
      console.error('Error saving quiz result:', error);
    }
  };

  const clearResults = () => {
    setResults([]);
    localStorage.removeItem('quiz-results');
  };

  // State for AI-generated questions
  const [generatedQuestions, setGeneratedQuestions] = useState<any[]>([]);

  const progress: UserProgress = {
    results,
    totalQuizzes: results.length,
    averageScore: results.length > 0
      ? results.reduce((sum, r) => sum + r.score, 0) / results.length
      : 0
  };

  return (
    <QuizContext.Provider value={{ results, progress, addResult, clearResults, generatedQuestions, setGeneratedQuestions }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}
