export type ContestType = 'weekly' | 'monthly' | 'daily' | 'topic';
export type ContestStatus = 'upcoming' | 'active' | 'completed';
export type SubmissionStatus = 'accepted' | 'wrong-answer' | 'time-limit' | 'error';

export interface ContestProblem {
    problemId: string;
    title: string;
    points: number;
    difficulty: 'easy' | 'medium' | 'hard';
    solveCount: number;
}

export interface Contest {
    id: string;
    title: string;
    description: string;
    type: ContestType;
    status: ContestStatus;
    startTime: number;
    endTime: number;
    duration: number; // in minutes
    problems: ContestProblem[];
    participants: number;
    prizes?: string[];
    topic?: string;
}

export interface ContestSubmission {
    userId: string;
    username: string;
    contestId: string;
    problemId: string;
    timestamp: number;
    status: SubmissionStatus;
    score: number;
    timeTaken: number; // seconds from contest start
    attempts: number;
    code: string;
    language: string;
}

export interface LeaderboardEntry {
    rank: number;
    userId: string;
    username: string;
    totalScore: number;
    problemsSolved: number;
    totalTimeTaken: number; // total time in seconds
    submissions: ContestSubmission[];
    lastSubmissionTime: number;
}

export interface UserContestStats {
    contestsParticipated: number;
    contestsWon: number;
    top10Finishes: number;
    top100Finishes: number;
    totalScore: number;
    problemsSolved: number;
    averageRank: number;
    bestRank: number;
    streak: number;
}

export interface Achievement {
    id: string;
    title: string;
    description: string;
    icon: string;
    unlockedAt?: number;
    progress?: number;
    target?: number;
}

// Scoring calculation
export function calculateContestScore(
    basePoints: number,
    timeTaken: number,
    contestDuration: number,
    attempts: number,
    isFirstSolve: boolean = false
): number {
    // Base points for the problem
    let score = basePoints;

    // Time bonus (faster = more points, up to 30% bonus)
    const timeRatio = timeTaken / (contestDuration * 60);
    const timeBonus = Math.floor(basePoints * (1 - timeRatio) * 0.3);
    score += timeBonus;

    // Penalty for wrong attempts (-50 points per failed attempt)
    const penalty = (attempts - 1) * 50;
    score -= penalty;

    // First solve bonus
    if (isFirstSolve) {
        score += 100;
    }

    return Math.max(0, score);
}

// Sort leaderboard entries
export function sortLeaderboard(entries: LeaderboardEntry[]): LeaderboardEntry[] {
    return entries.sort((a, b) => {
        // First by total score (descending)
        if (b.totalScore !== a.totalScore) {
            return b.totalScore - a.totalScore;
        }
        // Then by problems solved (descending)
        if (b.problemsSolved !== a.problemsSolved) {
            return b.problemsSolved - a.problemsSolved;
        }
        // Then by total time taken (ascending - faster is better)
        return a.totalTimeTaken - b.totalTimeTaken;
    }).map((entry, index) => ({
        ...entry,
        rank: index + 1
    }));
}

// Get contest status
export function getContestStatus(contest: Contest): ContestStatus {
    const now = Date.now();
    if (now < contest.startTime) return 'upcoming';
    if (now > contest.endTime) return 'completed';
    return 'active';
}

// Get time remaining
export function getTimeRemaining(endTime: number): {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    total: number;
} {
    const total = Math.max(0, endTime - Date.now());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds, total };
}
