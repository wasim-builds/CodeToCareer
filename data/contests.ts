import { Contest } from '@/types/contest';

// Helper to create contest dates
function getNextWeekday(dayOfWeek: number, hour: number = 10): number {
    const now = new Date();
    const result = new Date(now);
    result.setDate(now.getDate() + ((dayOfWeek + 7 - now.getDay()) % 7 || 7));
    result.setHours(hour, 0, 0, 0);
    return result.getTime();
}

function getNextMonthDay(day: number, hour: number = 10): number {
    const now = new Date();
    const result = new Date(now.getFullYear(), now.getMonth() + 1, day, hour, 0, 0, 0);
    if (result < now) {
        result.setMonth(result.getMonth() + 1);
    }
    return result.getTime();
}

// Sample contests
export const contests: Contest[] = [
    // Weekly Contest
    {
        id: 'weekly-001',
        title: 'Weekly Contest #1',
        description: 'Test your skills in this week\'s coding challenge! Solve 4 problems in 90 minutes.',
        type: 'weekly',
        status: 'upcoming',
        startTime: getNextWeekday(0, 10), // Sunday 10 AM
        endTime: getNextWeekday(0, 10) + 90 * 60 * 1000,
        duration: 90,
        participants: 1247,
        prizes: ['🥇 Top 3 get special badges', '🎁 Random prize for participants'],
        problems: [
            {
                problemId: 'two-sum',
                title: 'Two Sum',
                points: 100,
                difficulty: 'easy',
                solveCount: 0
            },
            {
                problemId: 'valid-parentheses',
                title: 'Valid Parentheses',
                points: 150,
                difficulty: 'easy',
                solveCount: 0
            },
            {
                problemId: 'merge-intervals',
                title: 'Merge Intervals',
                points: 200,
                difficulty: 'medium',
                solveCount: 0
            },
            {
                problemId: 'longest-palindromic-substring',
                title: 'Longest Palindromic Substring',
                points: 300,
                difficulty: 'hard',
                solveCount: 0
            }
        ]
    },

    // Monthly Contest
    {
        id: 'monthly-001',
        title: 'Monthly Challenge - January',
        description: 'The biggest contest of the month! 5 challenging problems in 120 minutes.',
        type: 'monthly',
        status: 'upcoming',
        startTime: getNextMonthDay(1, 14), // First Saturday 2 PM
        endTime: getNextMonthDay(1, 14) + 120 * 60 * 1000,
        duration: 120,
        participants: 3521,
        prizes: ['🏆 Top 10 get premium badges', '💰 Prize pool for winners', '🎖️ All participants get achievement'],
        problems: [
            {
                problemId: 'two-sum',
                title: 'Two Sum',
                points: 100,
                difficulty: 'easy',
                solveCount: 0
            },
            {
                problemId: 'reverse-linked-list',
                title: 'Reverse Linked List',
                points: 150,
                difficulty: 'easy',
                solveCount: 0
            },
            {
                problemId: 'binary-tree-level-order',
                title: 'Binary Tree Level Order Traversal',
                points: 200,
                difficulty: 'medium',
                solveCount: 0
            },
            {
                problemId: 'word-search',
                title: 'Word Search',
                points: 250,
                difficulty: 'medium',
                solveCount: 0
            },
            {
                problemId: 'trapping-rain-water',
                title: 'Trapping Rain Water',
                points: 400,
                difficulty: 'hard',
                solveCount: 0
            }
        ]
    },

    // Daily Challenge
    {
        id: 'daily-' + new Date().toISOString().split('T')[0],
        title: 'Daily Challenge - ' + new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        description: 'Complete today\'s challenge and maintain your streak!',
        type: 'daily',
        status: 'active',
        startTime: new Date().setHours(0, 0, 0, 0),
        endTime: new Date().setHours(23, 59, 59, 999),
        duration: 1440, // 24 hours
        participants: 892,
        problems: [
            {
                problemId: 'valid-anagram',
                title: 'Valid Anagram',
                points: 100,
                difficulty: 'easy',
                solveCount: 0
            }
        ]
    },

    // Topic Contest - Arrays
    {
        id: 'topic-arrays-001',
        title: 'Array Masters Challenge',
        description: 'Master array manipulation with these carefully selected problems!',
        type: 'topic',
        status: 'upcoming',
        startTime: getNextWeekday(6, 15), // Saturday 3 PM
        endTime: getNextWeekday(6, 15) + 60 * 60 * 1000,
        duration: 60,
        participants: 654,
        topic: 'Arrays',
        problems: [
            {
                problemId: 'two-sum',
                title: 'Two Sum',
                points: 100,
                difficulty: 'easy',
                solveCount: 0
            },
            {
                problemId: 'best-time-to-buy-sell-stock',
                title: 'Best Time to Buy and Sell Stock',
                points: 150,
                difficulty: 'easy',
                solveCount: 0
            },
            {
                problemId: 'container-with-most-water',
                title: 'Container With Most Water',
                points: 200,
                difficulty: 'medium',
                solveCount: 0
            }
        ]
    },

    // Topic Contest - Dynamic Programming
    {
        id: 'topic-dp-001',
        title: 'Dynamic Programming Showdown',
        description: 'Think you can handle DP? Prove it in this intense challenge!',
        type: 'topic',
        status: 'upcoming',
        startTime: getNextWeekday(3, 18), // Wednesday 6 PM
        endTime: getNextWeekday(3, 18) + 90 * 60 * 1000,
        duration: 90,
        participants: 423,
        topic: 'Dynamic Programming',
        problems: [
            {
                problemId: 'climbing-stairs',
                title: 'Climbing Stairs',
                points: 150,
                difficulty: 'easy',
                solveCount: 0
            },
            {
                problemId: 'coin-change',
                title: 'Coin Change',
                points: 250,
                difficulty: 'medium',
                solveCount: 0
            },
            {
                problemId: 'longest-increasing-subsequence',
                title: 'Longest Increasing Subsequence',
                points: 350,
                difficulty: 'hard',
                solveCount: 0
            }
        ]
    },

    // Completed Contest (for testing history)
    {
        id: 'weekly-000',
        title: 'Weekly Contest #0 (Past)',
        description: 'Last week\'s contest - view results!',
        type: 'weekly',
        status: 'completed',
        startTime: Date.now() - 7 * 24 * 60 * 60 * 1000,
        endTime: Date.now() - 7 * 24 * 60 * 60 * 1000 + 90 * 60 * 1000,
        duration: 90,
        participants: 1156,
        problems: [
            {
                problemId: 'reverse-string',
                title: 'Reverse String',
                points: 100,
                difficulty: 'easy',
                solveCount: 892
            },
            {
                problemId: 'palindrome-number',
                title: 'Palindrome Number',
                points: 150,
                difficulty: 'easy',
                solveCount: 734
            },
            {
                problemId: 'group-anagrams',
                title: 'Group Anagrams',
                points: 200,
                difficulty: 'medium',
                solveCount: 456
            },
            {
                problemId: 'median-of-two-sorted-arrays',
                title: 'Median of Two Sorted Arrays',
                points: 300,
                difficulty: 'hard',
                solveCount: 123
            }
        ]
    }
];

// Get contests by status
export function getContestsByStatus(status: 'upcoming' | 'active' | 'completed'): Contest[] {
    return contests.filter(c => {
        const now = Date.now();
        if (status === 'upcoming') return now < c.startTime;
        if (status === 'active') return now >= c.startTime && now <= c.endTime;
        if (status === 'completed') return now > c.endTime;
        return false;
    });
}

// Get contest by ID
export function getContestById(id: string): Contest | undefined {
    return contests.find(c => c.id === id);
}
