/**
 * Session Scoring System
 * Tracks and persists interview session scores and performance metrics
 */

import { EvaluationResult } from './answerEvaluator';
import { DifficultyLevel } from './difficultyManager';

export interface QuestionScore {
    question: string;
    answer: string;
    evaluation: EvaluationResult;
    difficulty: DifficultyLevel;
    timestamp: number;
}

export interface SessionScore {
    sessionId: string;
    mode: 'dsa' | 'hr' | 'system';
    startTime: number;
    endTime?: number;
    questions: QuestionScore[];
    averageScore: number;
    finalDifficulty: DifficultyLevel;
    totalQuestions: number;
    duration?: number; // in seconds
}

export interface PerformanceStats {
    totalSessions: number;
    averageScore: number;
    bestScore: number;
    worstScore: number;
    totalQuestions: number;
    scoresByMode: {
        dsa?: number;
        hr?: number;
        system?: number;
    };
    recentTrend: 'improving' | 'declining' | 'stable';
}

export interface SessionSummary {
    sessionScore: SessionScore;
    highlights: string[];
    areasForImprovement: string[];
    performanceComparison: string; // vs previous sessions
    recommendation: string;
}

const STORAGE_KEY_PREFIX = 'interview_session_';
const MAX_STORED_SESSIONS = 50;

/**
 * Save a question score to the current session
 */
export function saveQuestionScore(
    sessionId: string,
    mode: 'dsa' | 'hr' | 'system',
    questionScore: QuestionScore
): SessionScore {
    const session = getSessionScore(sessionId, mode);

    session.questions.push(questionScore);
    session.totalQuestions = session.questions.length;

    // Recalculate average score
    const totalScore = session.questions.reduce((sum, q) => sum + q.evaluation.overallScore, 0);
    session.averageScore = Math.round(totalScore / session.totalQuestions);

    // Update final difficulty
    session.finalDifficulty = questionScore.difficulty;

    saveSessionScore(session);
    return session;
}

/**
 * Get session score
 */
export function getSessionScore(sessionId: string, mode: 'dsa' | 'hr' | 'system'): SessionScore {
    const key = `${STORAGE_KEY_PREFIX}${sessionId}`;

    try {
        const stored = localStorage.getItem(key);
        if (stored) {
            const session: SessionScore = JSON.parse(stored);
            if (session.sessionId === sessionId) {
                return session;
            }
        }
    } catch (error) {
        console.error('[SessionScoring] Error loading session:', error);
    }

    // Return new session
    return {
        sessionId,
        mode,
        startTime: Date.now(),
        questions: [],
        averageScore: 0,
        finalDifficulty: 2,
        totalQuestions: 0,
    };
}

/**
 * Save session score to localStorage
 */
function saveSessionScore(session: SessionScore): void {
    const key = `${STORAGE_KEY_PREFIX}${session.sessionId}`;

    try {
        localStorage.setItem(key, JSON.stringify(session));
        console.log(`[SessionScoring] Saved session ${session.sessionId} - Avg: ${session.averageScore}`);
    } catch (error) {
        console.error('[SessionScoring] Error saving session:', error);

        // If quota exceeded, clean up old sessions
        if (error instanceof Error && error.name === 'QuotaExceededError') {
            cleanupOldSessions();
            // Try again
            try {
                localStorage.setItem(key, JSON.stringify(session));
            } catch (retryError) {
                console.error('[SessionScoring] Failed to save even after cleanup:', retryError);
            }
        }
    }
}

/**
 * End a session
 */
export function endSession(sessionId: string): SessionScore | null {
    const key = `${STORAGE_KEY_PREFIX}${sessionId}`;

    try {
        const stored = localStorage.getItem(key);
        if (stored) {
            const session: SessionScore = JSON.parse(stored);
            session.endTime = Date.now();
            session.duration = Math.round((session.endTime - session.startTime) / 1000);
            localStorage.setItem(key, JSON.stringify(session));
            return session;
        }
    } catch (error) {
        console.error('[SessionScoring] Error ending session:', error);
    }

    return null;
}

/**
 * Get session history
 */
export function getSessionHistory(mode?: 'dsa' | 'hr' | 'system', limit: number = 20): SessionScore[] {
    const sessions: SessionScore[] = [];

    try {
        const keys = Object.keys(localStorage);
        const sessionKeys = keys.filter(k => k.startsWith(STORAGE_KEY_PREFIX));

        sessionKeys.forEach(key => {
            try {
                const session: SessionScore = JSON.parse(localStorage.getItem(key) || '');
                if (!mode || session.mode === mode) {
                    sessions.push(session);
                }
            } catch (error) {
                console.error(`[SessionScoring] Error parsing session ${key}:`, error);
            }
        });
    } catch (error) {
        console.error('[SessionScoring] Error loading session history:', error);
    }

    // Sort by start time (most recent first)
    return sessions
        .sort((a, b) => b.startTime - a.startTime)
        .slice(0, limit);
}

/**
 * Get performance statistics
 */
export function getPerformanceStats(): PerformanceStats {
    const sessions = getSessionHistory();

    if (sessions.length === 0) {
        return {
            totalSessions: 0,
            averageScore: 0,
            bestScore: 0,
            worstScore: 0,
            totalQuestions: 0,
            scoresByMode: {},
            recentTrend: 'stable',
        };
    }

    const totalQuestions = sessions.reduce((sum, s) => sum + s.totalQuestions, 0);
    const totalScore = sessions.reduce((sum, s) => sum + s.averageScore * s.totalQuestions, 0);
    const averageScore = Math.round(totalScore / totalQuestions);

    const scores = sessions.map(s => s.averageScore);
    const bestScore = Math.max(...scores);
    const worstScore = Math.min(...scores);

    // Calculate scores by mode
    const scoresByMode: PerformanceStats['scoresByMode'] = {};
    ['dsa', 'hr', 'system'].forEach(mode => {
        const modeSessions = sessions.filter(s => s.mode === mode);
        if (modeSessions.length > 0) {
            const modeTotal = modeSessions.reduce((sum, s) => sum + s.averageScore * s.totalQuestions, 0);
            const modeQuestions = modeSessions.reduce((sum, s) => sum + s.totalQuestions, 0);
            scoresByMode[mode as keyof typeof scoresByMode] = Math.round(modeTotal / modeQuestions);
        }
    });

    // Determine trend (compare recent 5 vs previous 5)
    let recentTrend: 'improving' | 'declining' | 'stable' = 'stable';
    if (sessions.length >= 10) {
        const recent5 = sessions.slice(0, 5);
        const previous5 = sessions.slice(5, 10);

        const recentAvg = recent5.reduce((sum, s) => sum + s.averageScore, 0) / 5;
        const previousAvg = previous5.reduce((sum, s) => sum + s.averageScore, 0) / 5;

        if (recentAvg > previousAvg + 5) recentTrend = 'improving';
        else if (recentAvg < previousAvg - 5) recentTrend = 'declining';
    }

    return {
        totalSessions: sessions.length,
        averageScore,
        bestScore,
        worstScore,
        totalQuestions,
        scoresByMode,
        recentTrend,
    };
}

/**
 * Generate session summary
 */
export function generateSessionSummary(sessionId: string): SessionSummary | null {
    const key = `${STORAGE_KEY_PREFIX}${sessionId}`;

    try {
        const stored = localStorage.getItem(key);
        if (!stored) return null;

        const sessionScore: SessionScore = JSON.parse(stored);
        const stats = getPerformanceStats();

        // Extract highlights
        const highlights: string[] = [];
        const excellentAnswers = sessionScore.questions.filter(q => q.evaluation.grade === 'Excellent');
        if (excellentAnswers.length > 0) {
            highlights.push(`${excellentAnswers.length} excellent answer${excellentAnswers.length > 1 ? 's' : ''}!`);
        }
        if (sessionScore.averageScore >= 80) {
            highlights.push('Outstanding overall performance');
        }
        if (sessionScore.finalDifficulty >= 4) {
            highlights.push(`Reached ${sessionScore.finalDifficulty === 5 ? 'Master' : 'Expert'} difficulty level`);
        }

        // Extract areas for improvement
        const areasForImprovement: string[] = [];
        const poorAnswers = sessionScore.questions.filter(q => q.evaluation.grade === 'Poor');
        if (poorAnswers.length > 0) {
            areasForImprovement.push(`Focus on improving ${poorAnswers.length} weaker area${poorAnswers.length > 1 ? 's' : ''}`);
        }

        // Collect common improvement suggestions
        const allImprovements = sessionScore.questions.flatMap(q => q.evaluation.improvements);
        const improvementCounts = new Map<string, number>();
        allImprovements.forEach(imp => {
            const count = improvementCounts.get(imp) || 0;
            improvementCounts.set(imp, count + 1);
        });

        // Add top 2 most common improvements
        const topImprovements = Array.from(improvementCounts.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(0, 2)
            .map(([imp]) => imp);
        areasForImprovement.push(...topImprovements);

        // Performance comparison
        let performanceComparison = 'This is your first session!';
        if (stats.totalSessions > 1) {
            const diff = sessionScore.averageScore - stats.averageScore;
            if (diff > 5) {
                performanceComparison = `${Math.abs(diff)} points above your average!`;
            } else if (diff < -5) {
                performanceComparison = `${Math.abs(diff)} points below your average`;
            } else {
                performanceComparison = 'Consistent with your average performance';
            }
        }

        // Recommendation
        let recommendation = '';
        if (sessionScore.averageScore >= 85) {
            recommendation = 'Excellent work! Try tackling more advanced topics or higher difficulty levels.';
        } else if (sessionScore.averageScore >= 70) {
            recommendation = 'Good progress! Focus on the improvement areas to reach excellence.';
        } else if (sessionScore.averageScore >= 50) {
            recommendation = 'Keep practicing! Review the feedback and try similar questions again.';
        } else {
            recommendation = 'Don\'t give up! Consider reviewing fundamentals and practicing with easier questions first.';
        }

        return {
            sessionScore,
            highlights,
            areasForImprovement,
            performanceComparison,
            recommendation,
        };

    } catch (error) {
        console.error('[SessionScoring] Error generating summary:', error);
        return null;
    }
}

/**
 * Clean up old sessions (keep last MAX_STORED_SESSIONS)
 */
function cleanupOldSessions(): void {
    const sessions = getSessionHistory(undefined, 1000); // Get all

    if (sessions.length > MAX_STORED_SESSIONS) {
        const toRemove = sessions.slice(MAX_STORED_SESSIONS);
        toRemove.forEach(session => {
            const key = `${STORAGE_KEY_PREFIX}${session.sessionId}`;
            localStorage.removeItem(key);
        });
        console.log(`[SessionScoring] Cleaned up ${toRemove.length} old sessions`);
    }
}

/**
 * Delete a specific session
 */
export function deleteSession(sessionId: string): void {
    const key = `${STORAGE_KEY_PREFIX}${sessionId}`;
    localStorage.removeItem(key);
    console.log(`[SessionScoring] Deleted session ${sessionId}`);
}

/**
 * Clear all session data
 */
export function clearAllSessions(): void {
    const keys = Object.keys(localStorage);
    const sessionKeys = keys.filter(k => k.startsWith(STORAGE_KEY_PREFIX));
    sessionKeys.forEach(k => localStorage.removeItem(k));
    console.log(`[SessionScoring] Cleared all ${sessionKeys.length} sessions`);
}
