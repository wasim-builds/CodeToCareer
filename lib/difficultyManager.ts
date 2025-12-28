/**
 * Difficulty Progression Manager
 * Manages adaptive difficulty based on user performance in interview sessions
 */

export type DifficultyLevel = 1 | 2 | 3 | 4 | 5;

export interface PerformanceMetrics {
    answerQuality: number; // 0-100 score from AI evaluation
    responseTime?: number; // seconds (optional)
    followUpSuccess?: boolean; // Did they answer follow-up well?
}

export interface DifficultyState {
    currentLevel: DifficultyLevel;
    questionsAtLevel: number;
    consecutiveSuccesses: number;
    consecutiveFailures: number;
    totalQuestions: number;
    averageScore: number;
    sessionId: string;
    mode: string;
    lastUpdated: number;
}

// Difficulty level configurations
const DIFFICULTY_CONFIG = {
    1: { label: 'Beginner', description: 'Basic concepts and simple problems', color: '#10b981' },
    2: { label: 'Intermediate', description: 'Standard interview questions', color: '#3b82f6' },
    3: { label: 'Advanced', description: 'Complex problems with multiple approaches', color: '#8b5cf6' },
    4: { label: 'Expert', description: 'Challenging edge cases and optimizations', color: '#f59e0b' },
    5: { label: 'Master', description: 'Extremely difficult, creative solutions required', color: '#ef4444' },
} as const;

// Thresholds for difficulty progression
const PROGRESSION_THRESHOLDS = {
    INCREASE_SCORE: 75, // Score needed to potentially increase difficulty
    DECREASE_SCORE: 50, // Score below which difficulty may decrease
    CONSECUTIVE_FOR_INCREASE: 3, // Consecutive good answers needed
    CONSECUTIVE_FOR_DECREASE: 2, // Consecutive poor answers to decrease
    MIN_QUESTIONS_AT_LEVEL: 2, // Minimum questions before allowing change
};

const STORAGE_KEY_PREFIX = 'interview_difficulty_';

/**
 * Get difficulty state for a session
 */
export function getDifficultyState(sessionId: string, mode: string): DifficultyState {
    const key = `${STORAGE_KEY_PREFIX}${sessionId}`;

    try {
        const stored = localStorage.getItem(key);
        if (stored) {
            const state: DifficultyState = JSON.parse(stored);
            // Validate state
            if (state.sessionId === sessionId && state.mode === mode) {
                return state;
            }
        }
    } catch (error) {
        console.error('[DifficultyManager] Error loading state:', error);
    }

    // Return default state
    return {
        currentLevel: 2, // Start at intermediate
        questionsAtLevel: 0,
        consecutiveSuccesses: 0,
        consecutiveFailures: 0,
        totalQuestions: 0,
        averageScore: 0,
        sessionId,
        mode,
        lastUpdated: Date.now(),
    };
}

/**
 * Save difficulty state
 */
function saveDifficultyState(state: DifficultyState): void {
    const key = `${STORAGE_KEY_PREFIX}${state.sessionId}`;
    try {
        state.lastUpdated = Date.now();
        localStorage.setItem(key, JSON.stringify(state));
        console.log(`[DifficultyManager] Saved state - Level: ${state.currentLevel}, Questions: ${state.totalQuestions}`);
    } catch (error) {
        console.error('[DifficultyManager] Error saving state:', error);
    }
}

/**
 * Update difficulty based on performance
 */
export function updateDifficulty(
    sessionId: string,
    mode: string,
    performance: PerformanceMetrics
): DifficultyState {
    const state = getDifficultyState(sessionId, mode);
    const { answerQuality } = performance;

    // Update statistics
    state.totalQuestions++;
    state.questionsAtLevel++;

    // Update running average score
    state.averageScore =
        (state.averageScore * (state.totalQuestions - 1) + answerQuality) / state.totalQuestions;

    // Track consecutive successes/failures
    if (answerQuality >= PROGRESSION_THRESHOLDS.INCREASE_SCORE) {
        state.consecutiveSuccesses++;
        state.consecutiveFailures = 0;
    } else if (answerQuality < PROGRESSION_THRESHOLDS.DECREASE_SCORE) {
        state.consecutiveFailures++;
        state.consecutiveSuccesses = 0;
    } else {
        // Mediocre performance - reset both
        state.consecutiveSuccesses = 0;
        state.consecutiveFailures = 0;
    }

    // Determine if difficulty should change
    const shouldIncrease =
        state.currentLevel < 5 &&
        state.questionsAtLevel >= PROGRESSION_THRESHOLDS.MIN_QUESTIONS_AT_LEVEL &&
        state.consecutiveSuccesses >= PROGRESSION_THRESHOLDS.CONSECUTIVE_FOR_INCREASE;

    const shouldDecrease =
        state.currentLevel > 1 &&
        state.questionsAtLevel >= PROGRESSION_THRESHOLDS.MIN_QUESTIONS_AT_LEVEL &&
        state.consecutiveFailures >= PROGRESSION_THRESHOLDS.CONSECUTIVE_FOR_DECREASE;

    if (shouldIncrease) {
        state.currentLevel = Math.min(5, state.currentLevel + 1) as DifficultyLevel;
        state.questionsAtLevel = 0;
        state.consecutiveSuccesses = 0;
        console.log(`[DifficultyManager] 📈 Difficulty increased to level ${state.currentLevel}`);
    } else if (shouldDecrease) {
        state.currentLevel = Math.max(1, state.currentLevel - 1) as DifficultyLevel;
        state.questionsAtLevel = 0;
        state.consecutiveFailures = 0;
        console.log(`[DifficultyManager] 📉 Difficulty decreased to level ${state.currentLevel}`);
    }

    saveDifficultyState(state);
    return state;
}

/**
 * Get difficulty level information
 */
export function getDifficultyInfo(level: DifficultyLevel) {
    return DIFFICULTY_CONFIG[level];
}

/**
 * Get difficulty description for AI prompt
 */
export function getDifficultyPrompt(level: DifficultyLevel, mode: string): string {
    const info = DIFFICULTY_CONFIG[level];

    const modeSpecific = {
        dsa: {
            1: 'Ask basic array/string manipulation questions suitable for beginners.',
            2: 'Ask standard interview questions (two pointers, hash maps, basic recursion).',
            3: 'Ask complex problems requiring dynamic programming, graph algorithms, or advanced data structures.',
            4: 'Ask challenging problems with multiple edge cases and optimization requirements.',
            5: 'Ask extremely difficult problems requiring creative insights and advanced algorithmic techniques.',
        },
        hr: {
            1: 'Ask simple behavioral questions about teamwork and communication.',
            2: 'Ask standard STAR method questions about problem-solving and conflict resolution.',
            3: 'Ask complex questions about leadership, difficult decisions, and handling failure.',
            4: 'Ask challenging questions about navigating ambiguity and driving organizational change.',
            5: 'Ask expert-level questions about strategic thinking and high-stakes decision making.',
        },
        system: {
            1: 'Ask about designing simple systems like a basic URL shortener or cache.',
            2: 'Ask about standard systems like notification services or rate limiters.',
            3: 'Ask about complex distributed systems with scalability requirements.',
            4: 'Ask about challenging systems requiring advanced trade-off analysis and fault tolerance.',
            5: 'Ask about extremely complex systems like global-scale platforms with strict SLAs.',
        },
    };

    const specific = modeSpecific[mode as keyof typeof modeSpecific]?.[level] ||
        `Ask ${info.label.toLowerCase()} level questions.`;

    return `Difficulty Level: ${level}/5 (${info.label})\n${specific}`;
}

/**
 * Reset difficulty for a session
 */
export function resetDifficulty(sessionId: string): void {
    const key = `${STORAGE_KEY_PREFIX}${sessionId}`;
    try {
        localStorage.removeItem(key);
        console.log(`[DifficultyManager] Reset difficulty for session ${sessionId}`);
    } catch (error) {
        console.error('[DifficultyManager] Error resetting difficulty:', error);
    }
}

/**
 * Get all session difficulties (for analytics)
 */
export function getAllSessionDifficulties(): DifficultyState[] {
    const sessions: DifficultyState[] = [];

    try {
        const keys = Object.keys(localStorage);
        const difficultyKeys = keys.filter(k => k.startsWith(STORAGE_KEY_PREFIX));

        difficultyKeys.forEach(key => {
            try {
                const state = JSON.parse(localStorage.getItem(key) || '');
                sessions.push(state);
            } catch (error) {
                console.error(`[DifficultyManager] Error parsing session ${key}:`, error);
            }
        });
    } catch (error) {
        console.error('[DifficultyManager] Error loading sessions:', error);
    }

    return sessions.sort((a, b) => b.lastUpdated - a.lastUpdated);
}

/**
 * Clean up old sessions (keep last 20)
 */
export function cleanupOldSessions(): void {
    const sessions = getAllSessionDifficulties();

    if (sessions.length > 20) {
        const toRemove = sessions.slice(20);
        toRemove.forEach(session => {
            const key = `${STORAGE_KEY_PREFIX}${session.sessionId}`;
            localStorage.removeItem(key);
        });
        console.log(`[DifficultyManager] Cleaned up ${toRemove.length} old sessions`);
    }
}
