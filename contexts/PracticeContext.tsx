'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { PracticeAttempt } from '@/types/practice';

interface PracticeContextType {
  attempts: PracticeAttempt[];
  addAttempt: (attempt: PracticeAttempt) => void;
  updateAttempt: (problemId: string, timestamp: number, updates: Partial<PracticeAttempt>) => void;
  clearAttempts: () => void;
  getAttemptsForProblem: (problemId: string) => PracticeAttempt[];
}

const PracticeContext = createContext<PracticeContextType | undefined>(undefined);

export function PracticeProvider({ children }: { children: ReactNode }) {
  const [attempts, setAttempts] = useState<PracticeAttempt[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('practice-attempts');
    if (stored) {
      try {
        setAttempts(JSON.parse(stored));
      } catch (error) {
        console.error('Failed to parse practice attempts', error);
      }
    }
  }, []);

  const persist = (next: PracticeAttempt[]) => {
    setAttempts(next);
    localStorage.setItem('practice-attempts', JSON.stringify(next));
  };

  const addAttempt = async (attempt: PracticeAttempt) => {
    // 1. Optimistic update
    const newAttempts = [...attempts, attempt];
    persist(newAttempts);

    // 2. Save to database
    try {
      const response = await fetch('/api/practice/attempt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          problemId: attempt.problemId,
          language: attempt.language,
          code: attempt.code,
          passed: attempt.passed,
          testResults: attempt.testResults,
          timeSpent: attempt.timestamp ? 0 : 0 // Add timestamp tracking if available
        }),
      });

      if (!response.ok) {
        console.error('Failed to save practice attempt to database');
      }
    } catch (error) {
      console.error('Error saving practice attempt:', error);
    }
  };

  const clearAttempts = () => {
    persist([]);
  };

  const updateAttempt = (problemId: string, timestamp: number, updates: Partial<PracticeAttempt>) => {
    const updated = attempts.map(attempt => {
      if (attempt.problemId === problemId && attempt.timestamp === timestamp) {
        return { ...attempt, ...updates };
      }
      return attempt;
    });
    persist(updated);
  };

  const getAttemptsForProblem = (problemId: string) => attempts.filter((a) => a.problemId === problemId);

  return (
    <PracticeContext.Provider value={{ attempts, addAttempt, updateAttempt, clearAttempts, getAttemptsForProblem }}>
      {children}
    </PracticeContext.Provider>
  );
}

export function usePractice() {
  const ctx = useContext(PracticeContext);
  if (!ctx) {
    throw new Error('usePractice must be used within a PracticeProvider');
  }
  return ctx;
}
