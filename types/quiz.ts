export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  difficulty: Difficulty;
}

export interface Topic {
  id: string;
  name: string;
  category: string;
  description: string;
  questions: Question[];
  tags?: string[]; // Search aliases for better discoverability
}

export interface QuizResult {
  topicId: string;
  difficulty: Difficulty;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  timeSpent: number;
  timestamp: Date;
  timedMode?: boolean;
  timeLimit?: number;
  timeBonus?: number;
  // New fields for database sync
  mode?: string;
  settings?: QuizSettings;
  xpEarned?: number;
  answers?: Record<number, number>;
}

export interface QuizSettings {
  timedMode: boolean;
  timerMode: 'relaxed' | 'standard' | 'challenge';
  timeLimit?: number;
}

export interface UserProgress {
  results: QuizResult[];
  totalQuizzes: number;
  averageScore: number;
}
