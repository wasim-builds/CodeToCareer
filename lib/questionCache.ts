/**
 * Question Cache System
 * Caches AI-generated questions to reduce API calls and improve performance
 */

import { GeneratedQuestion } from './groq';

interface CacheEntry {
    questions: GeneratedQuestion[];
    timestamp: number;
    topic: string;
    difficulty: string;
}

// Cache TTL: 1 hour
const CACHE_TTL = 60 * 60 * 1000;
const CACHE_KEY_PREFIX = 'quiz_cache_';
const MAX_CACHE_SIZE = 50; // Maximum number of cached entries

/**
 * Generate cache key from topic and difficulty
 */
function getCacheKey(topic: string, difficulty: string): string {
    const normalized = `${topic.toLowerCase().trim()}_${difficulty.toLowerCase().trim()}`;
    return `${CACHE_KEY_PREFIX}${normalized}`;
}

/**
 * Get questions from cache
 */
export function getFromCache(
    topic: string,
    difficulty: string,
    count: number
): GeneratedQuestion[] | null {
    try {
        const key = getCacheKey(topic, difficulty);
        const cached = localStorage.getItem(key);

        if (!cached) {
            console.log(`[Cache] Miss for ${topic}/${difficulty}`);
            return null;
        }

        const entry: CacheEntry = JSON.parse(cached);

        // Check if cache is expired
        const age = Date.now() - entry.timestamp;
        if (age > CACHE_TTL) {
            console.log(`[Cache] Expired for ${topic}/${difficulty} (age: ${Math.round(age / 1000 / 60)}min)`);
            localStorage.removeItem(key);
            return null;
        }

        // Check if we have enough questions
        if (entry.questions.length < count) {
            console.log(`[Cache] Insufficient questions for ${topic}/${difficulty} (has ${entry.questions.length}, needs ${count})`);
            return null;
        }

        console.log(`[Cache] Hit for ${topic}/${difficulty} (${entry.questions.length} questions, age: ${Math.round(age / 1000 / 60)}min)`);

        // Return shuffled subset
        const shuffled = [...entry.questions].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);

    } catch (error) {
        console.error('[Cache] Error reading cache:', error);
        return null;
    }
}

/**
 * Save questions to cache
 */
export function saveToCache(
    topic: string,
    difficulty: string,
    questions: GeneratedQuestion[]
): void {
    try {
        const key = getCacheKey(topic, difficulty);
        const entry: CacheEntry = {
            questions,
            timestamp: Date.now(),
            topic,
            difficulty,
        };

        localStorage.setItem(key, JSON.stringify(entry));
        console.log(`[Cache] Saved ${questions.length} questions for ${topic}/${difficulty}`);

        // Clean up old cache entries if needed
        cleanupCache();

    } catch (error) {
        console.error('[Cache] Error saving to cache:', error);
        // If quota exceeded, clear old entries
        if (error instanceof Error && error.name === 'QuotaExceededError') {
            console.log('[Cache] Quota exceeded, clearing old entries');
            clearOldestEntries(10);
            // Try again
            try {
                localStorage.setItem(key, JSON.stringify({ questions, timestamp: Date.now(), topic, difficulty }));
            } catch (retryError) {
                console.error('[Cache] Failed to save even after cleanup:', retryError);
            }
        }
    }
}

/**
 * Clear cache for specific topic/difficulty
 */
export function clearCache(topic?: string, difficulty?: string): void {
    if (topic && difficulty) {
        const key = getCacheKey(topic, difficulty);
        localStorage.removeItem(key);
        console.log(`[Cache] Cleared cache for ${topic}/${difficulty}`);
    } else {
        // Clear all quiz cache
        const keys = Object.keys(localStorage);
        const cacheKeys = keys.filter(k => k.startsWith(CACHE_KEY_PREFIX));
        cacheKeys.forEach(k => localStorage.removeItem(k));
        console.log(`[Cache] Cleared all cache (${cacheKeys.length} entries)`);
    }
}

/**
 * Get cache statistics
 */
export function getCacheStats(): {
    totalEntries: number;
    totalQuestions: number;
    oldestEntry: number | null;
    newestEntry: number | null;
    totalSize: number;
} {
    const keys = Object.keys(localStorage);
    const cacheKeys = keys.filter(k => k.startsWith(CACHE_KEY_PREFIX));

    let totalQuestions = 0;
    let oldestEntry: number | null = null;
    let newestEntry: number | null = null;
    let totalSize = 0;

    cacheKeys.forEach(key => {
        try {
            const value = localStorage.getItem(key);
            if (value) {
                totalSize += value.length;
                const entry: CacheEntry = JSON.parse(value);
                totalQuestions += entry.questions.length;

                if (!oldestEntry || entry.timestamp < oldestEntry) {
                    oldestEntry = entry.timestamp;
                }
                if (!newestEntry || entry.timestamp > newestEntry) {
                    newestEntry = entry.timestamp;
                }
            }
        } catch (error) {
            console.error(`[Cache] Error reading entry ${key}:`, error);
        }
    });

    return {
        totalEntries: cacheKeys.length,
        totalQuestions,
        oldestEntry,
        newestEntry,
        totalSize,
    };
}

/**
 * Clean up expired cache entries
 */
function cleanupCache(): void {
    const keys = Object.keys(localStorage);
    const cacheKeys = keys.filter(k => k.startsWith(CACHE_KEY_PREFIX));

    let removed = 0;
    cacheKeys.forEach(key => {
        try {
            const value = localStorage.getItem(key);
            if (value) {
                const entry: CacheEntry = JSON.parse(value);
                const age = Date.now() - entry.timestamp;

                if (age > CACHE_TTL) {
                    localStorage.removeItem(key);
                    removed++;
                }
            }
        } catch (error) {
            // Remove corrupted entries
            localStorage.removeItem(key);
            removed++;
        }
    });

    if (removed > 0) {
        console.log(`[Cache] Cleaned up ${removed} expired entries`);
    }

    // If still too many entries, remove oldest
    const remaining = cacheKeys.length - removed;
    if (remaining > MAX_CACHE_SIZE) {
        clearOldestEntries(remaining - MAX_CACHE_SIZE);
    }
}

/**
 * Clear oldest cache entries
 */
function clearOldestEntries(count: number): void {
    const keys = Object.keys(localStorage);
    const cacheKeys = keys.filter(k => k.startsWith(CACHE_KEY_PREFIX));

    // Get entries with timestamps
    const entries: Array<{ key: string; timestamp: number }> = [];
    cacheKeys.forEach(key => {
        try {
            const value = localStorage.getItem(key);
            if (value) {
                const entry: CacheEntry = JSON.parse(value);
                entries.push({ key, timestamp: entry.timestamp });
            }
        } catch (error) {
            // Remove corrupted entries
            localStorage.removeItem(key);
        }
    });

    // Sort by timestamp (oldest first)
    entries.sort((a, b) => a.timestamp - b.timestamp);

    // Remove oldest
    const toRemove = entries.slice(0, count);
    toRemove.forEach(({ key }) => localStorage.removeItem(key));

    console.log(`[Cache] Removed ${toRemove.length} oldest entries`);
}
