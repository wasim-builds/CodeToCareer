import { Question, Difficulty } from './quiz';

export interface DailyChallenge {
    id: string;
    date: string; // YYYY-MM-DD
    question: Question;
    bonusXP: number;
    participants: number;
    averageScore: number;
    difficulty: Difficulty;
}

export interface ChallengeAttempt {
    challengeId: string;
    userId?: string;
    score: number;
    timeSpent: number;
    timestamp: Date;
    rank?: number;
}

export interface ChallengeStreak {
    current: number;
    longest: number;
    lastAttempt: Date | null;
    freezeAvailable: boolean;
    freezeUsedThisWeek: boolean;
}

export interface ChallengeStats {
    totalCompleted: number;
    averageScore: number;
    bestScore: number;
    currentStreak: number;
    longestStreak: number;
}
