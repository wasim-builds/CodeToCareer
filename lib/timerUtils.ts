import { Question, Difficulty } from '@/types/quiz';

export type TimerMode = 'relaxed' | 'standard' | 'challenge';

// Base time per question in seconds based on difficulty
const BASE_TIME_PER_QUESTION: Record<Difficulty, number> = {
    easy: 30,
    medium: 45,
    hard: 60,
};

// Time multipliers for different modes
const TIME_MULTIPLIERS: Record<TimerMode, number> = {
    relaxed: 1.5,
    standard: 1.0,
    challenge: 0.75,
};

/**
 * Calculate total time limit for a quiz
 */
export function calculateTimeLimit(
    questions: Question[],
    mode: TimerMode = 'standard'
): number {
    const multiplier = TIME_MULTIPLIERS[mode];

    const totalTime = questions.reduce((total, question) => {
        const baseTime = BASE_TIME_PER_QUESTION[question.difficulty];
        return total + baseTime;
    }, 0);

    return Math.round(totalTime * multiplier);
}

/**
 * Get base time per question for a specific difficulty
 */
export function getTimePerQuestion(
    difficulty: Difficulty,
    mode: TimerMode = 'standard'
): number {
    const baseTime = BASE_TIME_PER_QUESTION[difficulty];
    const multiplier = TIME_MULTIPLIERS[mode];
    return Math.round(baseTime * multiplier);
}

/**
 * Format seconds as MM:SS
 */
export function formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Get timer color based on percentage of time remaining
 */
export function getTimerColor(percentage: number): {
    text: string;
    bg: string;
    ring: string;
} {
    if (percentage > 50) {
        return {
            text: 'text-green-400',
            bg: 'bg-green-500',
            ring: 'ring-green-500',
        };
    } else if (percentage > 25) {
        return {
            text: 'text-yellow-400',
            bg: 'bg-yellow-500',
            ring: 'ring-yellow-500',
        };
    } else {
        return {
            text: 'text-red-400',
            bg: 'bg-red-500',
            ring: 'ring-red-500',
        };
    }
}

/**
 * Calculate bonus XP for completing quiz quickly
 */
export function calculateTimeBonus(timeUsed: number, timeLimit: number): number {
    if (timeUsed >= timeLimit) return 0;

    const timeEfficiency = (timeLimit - timeUsed) / timeLimit;

    // Award up to 50 bonus XP based on time efficiency
    return Math.round(timeEfficiency * 50);
}

/**
 * Get time efficiency percentage
 */
export function getTimeEfficiency(timeUsed: number, timeLimit: number): number {
    return Math.round((timeUsed / timeLimit) * 100);
}

/**
 * Get time efficiency label
 */
export function getTimeEfficiencyLabel(efficiency: number): string {
    if (efficiency <= 50) return 'Lightning Fast ⚡';
    if (efficiency <= 75) return 'Excellent 🎯';
    if (efficiency <= 90) return 'Good 👍';
    if (efficiency <= 100) return 'Completed ✓';
    return 'Overtime ⏱️';
}

/**
 * Check if time warning should be shown
 */
export function shouldShowTimeWarning(
    timeRemaining: number,
    timeLimit: number,
    lastWarningAt: number | null
): { show: boolean; type: '50%' | '25%' | null } {
    const percentage = (timeRemaining / timeLimit) * 100;

    if (percentage <= 25 && (lastWarningAt === null || lastWarningAt > 25)) {
        return { show: true, type: '25%' };
    }

    if (percentage <= 50 && (lastWarningAt === null || lastWarningAt > 50)) {
        return { show: true, type: '50%' };
    }

    return { show: false, type: null };
}
