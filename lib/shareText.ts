import { QuizResult } from '@/types/quiz';

/**
 * Generate share text for quiz results
 */
export function generateQuizShareText(result: QuizResult, topicName: string): string {
    const emoji = result.score >= 90 ? '🎯' : result.score >= 70 ? '⭐' : '📚';

    return `${emoji} I just scored ${result.score}% on the ${topicName} quiz (${result.difficulty}) on CodeToCareer!\n\nCan you beat my score? Try it now! 🚀`;
}

/**
 * Generate share text for achievements
 */
export function generateAchievementShareText(achievementName: string, achievementIcon: string): string {
    return `🏆 Achievement Unlocked: ${achievementName}! ${achievementIcon}\n\nJoin me on my learning journey at CodeToCareer! 💪`;
}

/**
 * Generate share text for progress stats
 */
export function generateProgressShareText(stats: {
    totalQuizzes: number;
    averageScore: number;
    currentStreak: number;
    level: number;
}): string {
    return `📊 My CodeToCareer Progress:\n✅ ${stats.totalQuizzes} quizzes completed\n⭐ ${stats.averageScore}% average score\n🔥 ${stats.currentStreak}-day streak\n⚡ Level ${stats.level}\n\nLevel up your skills with me! 🚀`;
}

/**
 * Generate share text for perfect score
 */
export function generatePerfectScoreText(topicName: string, difficulty: string): string {
    return `💯 Perfect Score! I just aced the ${topicName} quiz (${difficulty}) on CodeToCareer!\n\nThink you can do the same? Challenge yourself! 🎯`;
}

/**
 * Generate share text for streak milestone
 */
export function generateStreakMilestoneText(streak: number): string {
    const emoji = streak >= 30 ? '🔥🔥🔥' : streak >= 7 ? '🔥🔥' : '🔥';
    return `${emoji} ${streak}-Day Streak on CodeToCareer!\n\nConsistency is key to mastering new skills. Join me! 💪`;
}

/**
 * Get app URL for sharing
 */
export function getAppUrl(): string {
    if (typeof window !== 'undefined') {
        return window.location.origin;
    }
    return 'https://codetocareer.com'; // Replace with your actual domain
}

/**
 * Generate shareable link with UTM parameters
 */
export function generateShareLink(source: 'twitter' | 'facebook' | 'linkedin' | 'whatsapp' | 'copy'): string {
    const baseUrl = getAppUrl();
    const url = new URL(baseUrl);
    url.searchParams.set('utm_source', source);
    url.searchParams.set('utm_medium', 'social');
    url.searchParams.set('utm_campaign', 'user_share');
    return url.toString();
}
