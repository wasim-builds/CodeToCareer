import { DailyChallenge, ChallengeAttempt, ChallengeStreak } from '@/types/dailyChallenge';
import { Question, Difficulty } from '@/types/quiz';
import { topics } from '@/data/quiz/topics';

/**
 * Hash a date string to get a deterministic seed
 */
function hashDate(dateStr: string): number {
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
        const char = dateStr.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
}

/**
 * Get difficulty based on day of week
 */
function getDifficultyForDay(dayOfWeek: number): Difficulty {
    // 0 = Sunday, 1 = Monday, etc.
    switch (dayOfWeek) {
        case 1: // Monday
            return 'easy';
        case 2: // Tuesday
        case 4: // Thursday
            return 'medium';
        case 3: // Wednesday
        case 5: // Friday
            return 'hard';
        default: // Weekend
            return ['easy', 'medium', 'hard'][Math.floor(Math.random() * 3)] as Difficulty;
    }
}

/**
 * Get all questions from all topics
 */
function getAllQuestions(): Question[] {
    const allQuestions: Question[] = [];
    topics.forEach(topic => {
        if (topic.questions) {
            allQuestions.push(...topic.questions);
        }
    });
    return allQuestions;
}

/**
 * Get today's challenge (deterministic based on date)
 */
export function getTodaysChallenge(): DailyChallenge {
    const today = new Date();
    const dateStr = today.toISOString().split('T')[0]; // YYYY-MM-DD
    const seed = hashDate(dateStr);
    const dayOfWeek = today.getDay();

    // Get difficulty for today
    const difficulty = getDifficultyForDay(dayOfWeek);

    // Get all questions and filter by difficulty
    const allQuestions = getAllQuestions();
    const questionsOfDifficulty = allQuestions.filter(q => q.difficulty === difficulty);

    // Select question deterministically
    const index = seed % questionsOfDifficulty.length;
    const question = questionsOfDifficulty[index];

    return {
        id: `challenge-${dateStr}`,
        date: dateStr,
        question,
        bonusXP: 200, // 2x normal XP
        participants: 0, // Will be updated from localStorage
        averageScore: 0, // Will be calculated from attempts
        difficulty,
    };
}

/**
 * Check if user has attempted today's challenge
 */
export function hasAttemptedToday(): boolean {
    if (typeof window === 'undefined') return false;

    const today = new Date().toISOString().split('T')[0];
    const attempts = getChallengeHistory();

    return attempts.some(attempt => {
        const attemptDate = new Date(attempt.timestamp).toISOString().split('T')[0];
        return attemptDate === today;
    });
}

/**
 * Get challenge attempt history from localStorage
 */
export function getChallengeHistory(): ChallengeAttempt[] {
    if (typeof window === 'undefined') return [];

    const history = localStorage.getItem('challengeHistory');
    if (!history) return [];

    try {
        const parsed = JSON.parse(history);
        return parsed.map((attempt: any) => ({
            ...attempt,
            timestamp: new Date(attempt.timestamp),
        }));
    } catch {
        return [];
    }
}

/**
 * Save challenge attempt
 */
export function saveChallengeAttempt(challengeId: string, score: number, timeSpent: number): void {
    if (typeof window === 'undefined') return;

    const attempt: ChallengeAttempt = {
        challengeId,
        score,
        timeSpent,
        timestamp: new Date(),
    };

    const history = getChallengeHistory();
    history.push(attempt);

    localStorage.setItem('challengeHistory', JSON.stringify(history));
}

/**
 * Calculate user's streak
 */
export function calculateStreak(): ChallengeStreak {
    const attempts = getChallengeHistory();

    if (attempts.length === 0) {
        return {
            current: 0,
            longest: 0,
            lastAttempt: null,
            freezeAvailable: true,
            freezeUsedThisWeek: false,
        };
    }

    // Sort by date descending
    const sorted = attempts.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

    let current = 0;
    let longest = 0;
    let lastDate: Date | null = null;

    // Group attempts by date
    const attemptsByDate = new Map<string, ChallengeAttempt>();
    sorted.forEach(attempt => {
        const dateStr = new Date(attempt.timestamp).toISOString().split('T')[0];
        if (!attemptsByDate.has(dateStr)) {
            attemptsByDate.set(dateStr, attempt);
        }
    });

    const dates = Array.from(attemptsByDate.keys()).sort().reverse();

    // Calculate current streak
    const today = new Date().toISOString().split('T')[0];
    let checkDate = new Date(today);

    for (const dateStr of dates) {
        const attemptDate = new Date(dateStr);
        const expectedDate = checkDate.toISOString().split('T')[0];

        if (dateStr === expectedDate) {
            current++;
            checkDate.setDate(checkDate.getDate() - 1);
        } else {
            break;
        }
    }

    // Calculate longest streak
    let tempStreak = 0;
    let prevDate: Date | null = null;

    for (const dateStr of dates) {
        const currentDate = new Date(dateStr);

        if (!prevDate) {
            tempStreak = 1;
        } else {
            const daysDiff = Math.floor((prevDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));
            if (daysDiff === 1) {
                tempStreak++;
            } else {
                longest = Math.max(longest, tempStreak);
                tempStreak = 1;
            }
        }

        prevDate = currentDate;
    }
    longest = Math.max(longest, tempStreak);

    return {
        current,
        longest,
        lastAttempt: sorted[0].timestamp,
        freezeAvailable: true,
        freezeUsedThisWeek: false,
    };
}

/**
 * Get time until next challenge
 */
export function getTimeUntilNextChallenge(): { hours: number; minutes: number; seconds: number } {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const diff = tomorrow.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
}

/**
 * Get today's leaderboard (mock data for now)
 */
export function getTodaysLeaderboard(): ChallengeAttempt[] {
    const attempts = getChallengeHistory();
    const today = new Date().toISOString().split('T')[0];

    const todaysAttempts = attempts.filter(attempt => {
        const attemptDate = new Date(attempt.timestamp).toISOString().split('T')[0];
        return attemptDate === today;
    });

    // Sort by score (desc) then time (asc)
    return todaysAttempts
        .sort((a, b) => {
            if (b.score !== a.score) return b.score - a.score;
            return a.timeSpent - b.timeSpent;
        })
        .map((attempt, index) => ({
            ...attempt,
            rank: index + 1,
        }));
}
