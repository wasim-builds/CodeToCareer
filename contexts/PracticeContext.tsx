'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { PracticeAttempt } from '@/types/practice';

interface PracticeContextType {
  attempts: PracticeAttempt[];
  addAttempt: (attempt: PracticeAttempt) => void;
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

  const addAttempt = (attempt: PracticeAttempt) => {
    persist([...attempts, attempt]);
  };

  const clearAttempts = () => {
    persist([]);
  };

  const getAttemptsForProblem = (problemId: string) => attempts.filter((a) => a.problemId === problemId);

  return (
    <PracticeContext.Provider value={{ attempts, addAttempt, clearAttempts, getAttemptsForProblem }}>
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
