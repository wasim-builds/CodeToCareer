import { StudyPlan } from '@/types/studyPlan';

export const studyPlans: StudyPlan[] = [
    // 30-Day Beginner Plan
    {
        id: '30-day-beginner',
        title: '30-Day Beginner Bootcamp',
        description: 'Perfect for coding beginners. Build a strong foundation in data structures and algorithms with 1-2 hours of daily practice.',
        duration: 30,
        difficulty: 'beginner',
        hoursPerDay: 1.5,
        targetAudience: 'Complete beginners or those refreshing fundamentals',
        prerequisites: ['Basic programming knowledge in any language'],
        goals: [
            'Master fundamental data structures',
            'Solve 50+ easy problems',
            'Build problem-solving confidence',
            'Prepare for coding interviews'
        ],
        outcomes: [
            'Solid understanding of arrays, strings, and hash tables',
            'Ability to solve easy LeetCode problems',
            'Foundation for advanced topics'
        ],
        totalProblems: 60,
        totalTheoryTopics: 15,
        weeks: [
            {
                weekNumber: 1,
                theme: 'Arrays & Strings Fundamentals',
                description: 'Master the basics of arrays and string manipulation',
                days: [
                    {
                        dayNumber: 1,
                        title: 'Introduction to Arrays',
                        estimatedTime: 90,
                        tasks: [
                            {
                                id: 'day1-theory1',
                                type: 'theory',
                                title: 'Array Basics',
                                description: 'Learn about arrays, indexing, and basic operations',
                                resourceId: 'arrays',
                                duration: 30
                            },
                            {
                                id: 'day1-practice1',
                                type: 'practice',
                                title: 'Two Sum',
                                description: 'Find two numbers that add up to a target',
                                resourceId: 'two-sum',
                                duration: 45,
                                difficulty: 'easy'
                            },
                            {
                                id: 'day1-review1',
                                type: 'review',
                                title: 'Daily Review',
                                description: 'Review what you learned today',
                                duration: 15
                            }
                        ]
                    },
                    {
                        dayNumber: 2,
                        title: 'Array Traversal',
                        estimatedTime: 90,
                        tasks: [
                            {
                                id: 'day2-practice1',
                                type: 'practice',
                                title: 'Best Time to Buy and Sell Stock',
                                description: 'Find the maximum profit from stock prices',
                                resourceId: 'best-time-to-buy-sell-stock',
                                duration: 45,
                                difficulty: 'easy'
                            },
                            {
                                id: 'day2-practice2',
                                type: 'practice',
                                title: 'Contains Duplicate',
                                description: 'Check if array contains duplicates',
                                resourceId: 'contains-duplicate',
                                duration: 30,
                                difficulty: 'easy'
                            },
                            {
                                id: 'day2-review1',
                                type: 'review',
                                title: 'Daily Review',
                                description: 'Review array traversal patterns',
                                duration: 15
                            }
                        ]
                    },
                    {
                        dayNumber: 3,
                        title: 'String Basics',
                        estimatedTime: 90,
                        tasks: [
                            {
                                id: 'day3-theory1',
                                type: 'theory',
                                title: 'String Manipulation',
                                description: 'Learn string operations and methods',
                                resourceId: 'strings',
                                duration: 30
                            },
                            {
                                id: 'day3-practice1',
                                type: 'practice',
                                title: 'Valid Anagram',
                                description: 'Check if two strings are anagrams',
                                resourceId: 'valid-anagram',
                                duration: 45,
                                difficulty: 'easy'
                            },
                            {
                                id: 'day3-review1',
                                type: 'review',
                                title: 'Daily Review',
                                description: 'Review string concepts',
                                duration: 15
                            }
                        ]
                    },
                    {
                        dayNumber: 4,
                        title: 'String Patterns',
                        estimatedTime: 90,
                        tasks: [
                            {
                                id: 'day4-practice1',
                                type: 'practice',
                                title: 'Valid Palindrome',
                                description: 'Check if a string is a palindrome',
                                resourceId: 'valid-palindrome',
                                duration: 45,
                                difficulty: 'easy'
                            },
                            {
                                id: 'day4-practice2',
                                type: 'practice',
                                title: 'Reverse String',
                                description: 'Reverse a string in-place',
                                resourceId: 'reverse-string',
                                duration: 30,
                                difficulty: 'easy'
                            },
                            {
                                id: 'day4-review1',
                                type: 'review',
                                title: 'Daily Review',
                                description: 'Review palindrome and reversal patterns',
                                duration: 15
                            }
                        ]
                    },
                    {
                        dayNumber: 5,
                        title: 'Two Pointers Technique',
                        estimatedTime: 90,
                        tasks: [
                            {
                                id: 'day5-theory1',
                                type: 'theory',
                                title: 'Two Pointers Pattern',
                                description: 'Learn the two pointers technique',
                                resourceId: 'two-pointers',
                                duration: 30
                            },
                            {
                                id: 'day5-practice1',
                                type: 'practice',
                                title: 'Valid Parentheses',
                                description: 'Check if parentheses are balanced',
                                resourceId: 'valid-parentheses',
                                duration: 45,
                                difficulty: 'easy'
                            },
                            {
                                id: 'day5-review1',
                                type: 'review',
                                title: 'Daily Review',
                                description: 'Review two pointers technique',
                                duration: 15
                            }
                        ]
                    },
                    {
                        dayNumber: 6,
                        title: 'Practice Day',
                        estimatedTime: 90,
                        tasks: [
                            {
                                id: 'day6-practice1',
                                type: 'practice',
                                title: 'Merge Sorted Array',
                                description: 'Merge two sorted arrays',
                                resourceId: 'merge-sorted-array',
                                duration: 45,
                                difficulty: 'easy'
                            },
                            {
                                id: 'day6-practice2',
                                type: 'practice',
                                title: 'Remove Duplicates',
                                description: 'Remove duplicates from sorted array',
                                resourceId: 'remove-duplicates',
                                duration: 30,
                                difficulty: 'easy'
                            },
                            {
                                id: 'day6-review1',
                                type: 'review',
                                title: 'Week 1 Review',
                                description: 'Review all Week 1 concepts',
                                duration: 15
                            }
                        ]
                    },
                    {
                        dayNumber: 7,
                        title: 'Week 1 Quiz',
                        estimatedTime: 60,
                        tasks: [
                            {
                                id: 'day7-quiz1',
                                type: 'quiz',
                                title: 'Arrays & Strings Quiz',
                                description: 'Test your knowledge of Week 1 topics',
                                resourceId: 'arrays-strings-quiz',
                                duration: 45
                            },
                            {
                                id: 'day7-review1',
                                type: 'review',
                                title: 'Weekly Reflection',
                                description: 'Reflect on your progress',
                                duration: 15
                            }
                        ]
                    }
                ]
            },
            {
                weekNumber: 2,
                theme: 'Hash Tables & Sets',
                description: 'Learn efficient lookup and storage with hash-based data structures',
                days: [
                    {
                        dayNumber: 8,
                        title: 'Hash Table Basics',
                        estimatedTime: 90,
                        tasks: [
                            {
                                id: 'day8-theory1',
                                type: 'theory',
                                title: 'Hash Tables',
                                description: 'Understanding hash tables and hash maps',
                                resourceId: 'hash-tables',
                                duration: 30
                            },
                            {
                                id: 'day8-practice1',
                                type: 'practice',
                                title: 'Two Sum (Hash Map)',
                                description: 'Solve Two Sum using hash map',
                                resourceId: 'two-sum',
                                duration: 45,
                                difficulty: 'easy'
                            },
                            {
                                id: 'day8-review1',
                                type: 'review',
                                title: 'Daily Review',
                                description: 'Review hash table concepts',
                                duration: 15
                            }
                        ]
                    }
                    // ... more days for weeks 2-4
                ]
            }
            // ... weeks 3-4 would be added here
        ]
    },

    // 60-Day Interview Prep
    {
        id: '60-day-interview-prep',
        title: '60-Day Interview Preparation',
        description: 'Comprehensive interview prep covering all major topics. Perfect for upcoming interviews with 2-3 hours daily commitment.',
        duration: 60,
        difficulty: 'intermediate',
        hoursPerDay: 2.5,
        targetAudience: 'Developers preparing for technical interviews',
        prerequisites: ['Comfortable with basic data structures', 'Solved 20+ easy problems'],
        goals: [
            'Master all common interview patterns',
            'Solve 150+ problems (easy to hard)',
            'Practice system design basics',
            'Complete mock interviews'
        ],
        outcomes: [
            'Ready for FAANG interviews',
            'Strong problem-solving skills',
            'Confidence in technical discussions'
        ],
        totalProblems: 150,
        totalTheoryTopics: 30,
        weeks: [
            {
                weekNumber: 1,
                theme: 'Data Structures Review',
                description: 'Quick review of fundamental data structures',
                days: [
                    {
                        dayNumber: 1,
                        title: 'Arrays & Strings Review',
                        estimatedTime: 150,
                        tasks: [
                            {
                                id: '60day-day1-practice1',
                                type: 'practice',
                                title: 'Product of Array Except Self',
                                description: 'Array manipulation without division',
                                resourceId: 'product-except-self',
                                duration: 60,
                                difficulty: 'medium'
                            },
                            {
                                id: '60day-day1-practice2',
                                type: 'practice',
                                title: 'Longest Substring Without Repeating',
                                description: 'Sliding window technique',
                                resourceId: 'longest-substring',
                                duration: 60,
                                difficulty: 'medium'
                            },
                            {
                                id: '60day-day1-review1',
                                type: 'review',
                                title: 'Daily Review',
                                description: 'Review solutions and patterns',
                                duration: 30
                            }
                        ]
                    }
                ]
            }
        ]
    },

    // 90-Day FAANG Prep
    {
        id: '90-day-faang-prep',
        title: '90-Day FAANG Preparation',
        description: 'Intensive preparation for top-tier tech companies. Covers everything from basics to advanced algorithms with 3-4 hours daily.',
        duration: 90,
        difficulty: 'advanced',
        hoursPerDay: 3.5,
        targetAudience: 'Experienced developers targeting FAANG companies',
        prerequisites: ['Strong foundation in DSA', 'Solved 50+ problems', '1+ years programming experience'],
        goals: [
            'Master advanced algorithms',
            'Solve 250+ problems',
            'System design proficiency',
            'Behavioral interview prep'
        ],
        outcomes: [
            'FAANG interview ready',
            'Expert problem solver',
            'System design knowledge'
        ],
        totalProblems: 250,
        totalTheoryTopics: 45,
        weeks: [
            {
                weekNumber: 1,
                theme: 'Foundation Building',
                description: 'Solidify fundamentals before advanced topics',
                days: [
                    {
                        dayNumber: 1,
                        title: 'Advanced Array Techniques',
                        estimatedTime: 210,
                        tasks: [
                            {
                                id: '90day-day1-theory1',
                                type: 'theory',
                                title: 'Advanced Array Patterns',
                                description: 'Kadane\'s algorithm, prefix sums, etc.',
                                resourceId: 'advanced-arrays',
                                duration: 45
                            },
                            {
                                id: '90day-day1-practice1',
                                type: 'practice',
                                title: 'Maximum Subarray',
                                description: 'Kadane\'s algorithm',
                                resourceId: 'maximum-subarray',
                                duration: 60,
                                difficulty: 'medium'
                            },
                            {
                                id: '90day-day1-practice2',
                                type: 'practice',
                                title: 'Container With Most Water',
                                description: 'Two pointers optimization',
                                resourceId: 'container-most-water',
                                duration: 60,
                                difficulty: 'medium'
                            },
                            {
                                id: '90day-day1-review1',
                                type: 'review',
                                title: 'Daily Review',
                                description: 'Deep dive into solutions',
                                duration: 45
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

// Get plan by ID
export function getPlanById(id: string): StudyPlan | undefined {
    return studyPlans.find(plan => plan.id === id);
}

// Get plans by difficulty
export function getPlansByDifficulty(difficulty: string): StudyPlan[] {
    return studyPlans.filter(plan => plan.difficulty === difficulty);
}
