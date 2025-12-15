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
}

export interface UserProgress {
  results: QuizResult[];
  totalQuizzes: number;
  averageScore: number;
}
