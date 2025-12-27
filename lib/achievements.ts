// Achievement definitions with comprehensive categories
export interface Achievement {
    id: string;
    name: string;
    description: string;
    icon: string;
    category: 'getting-started' | 'consistency' | 'excellence' | 'mastery' | 'practice' | 'special';
    requirement: {
        type: 'quiz_count' | 'perfect_score' | 'streak' | 'topic_count' | 'question_count' | 'average_score' | 'bookmark_count' | 'time_based' | 'score_improvement';
        value: number;
        metadata?: any;
    };
    xpReward: number;
    color: string; // Tailwind color class
}

export const ACHIEVEMENTS: Achievement[] = [
    // Getting Started (Blue)
    {
        id: 'first-quiz',
        name: 'First Quiz',
        description: 'Complete your first quiz',
        icon: '🎯',
        category: 'getting-started',
        requirement: { type: 'quiz_count', value: 1 },
        xpReward: 50,
        color: 'blue'
    },
    {
        id: 'quick-learner',
        name: 'Quick Learner',
        description: 'Complete a quiz in under 5 minutes',
        icon: '⚡',
        category: 'getting-started',
        requirement: { type: 'time_based', value: 300 }, // 5 minutes in seconds
        xpReward: 75,
        color: 'blue'
    },
    {
        id: 'perfect-start',
        name: 'Perfect Start',
        description: 'Get 100% on your first quiz',
        icon: '🌟',
        category: 'getting-started',
        requirement: { type: 'perfect_score', value: 1, metadata: { firstQuiz: true } },
        xpReward: 100,
        color: 'blue'
    },

    // Consistency (Orange)
    {
        id: '3-day-streak',
        name: '3-Day Streak',
        description: 'Study for 3 days in a row',
        icon: '🔥',
        category: 'consistency',
        requirement: { type: 'streak', value: 3 },
        xpReward: 100,
        color: 'orange'
    },
    {
        id: 'week-warrior',
        name: 'Week Warrior',
        description: 'Study for 7 days in a row',
        icon: '💪',
        category: 'consistency',
        requirement: { type: 'streak', value: 7 },
        xpReward: 200,
        color: 'orange'
    },
    {
        id: 'month-master',
        name: 'Month Master',
        description: 'Study for 30 days in a row',
        icon: '🌙',
        category: 'consistency',
        requirement: { type: 'streak', value: 30 },
        xpReward: 500,
        color: 'orange'
    },
    {
        id: 'dedicated-learner',
        name: 'Dedicated Learner',
        description: 'Complete 10 quizzes',
        icon: '📚',
        category: 'consistency',
        requirement: { type: 'quiz_count', value: 10 },
        xpReward: 150,
        color: 'orange'
    },

    // Excellence (Yellow)
    {
        id: 'perfect-score',
        name: 'Perfect Score',
        description: 'Get 100% on any quiz',
        icon: '💯',
        category: 'excellence',
        requirement: { type: 'perfect_score', value: 1 },
        xpReward: 150,
        color: 'yellow'
    },
    {
        id: 'ace-student',
        name: 'Ace Student',
        description: 'Get 90%+ on 5 quizzes',
        icon: '⭐',
        category: 'excellence',
        requirement: { type: 'average_score', value: 90, metadata: { count: 5 } },
        xpReward: 200,
        color: 'yellow'
    },
    {
        id: 'master-mind',
        name: 'Master Mind',
        description: 'Get 100% on 10 quizzes',
        icon: '🧠',
        category: 'excellence',
        requirement: { type: 'perfect_score', value: 10 },
        xpReward: 300,
        color: 'yellow'
    },
    {
        id: 'speed-demon',
        name: 'Speed Demon',
        description: 'Complete quiz under time limit with 80%+',
        icon: '🏃',
        category: 'excellence',
        requirement: { type: 'time_based', value: 1, metadata: { minScore: 80, underTimeLimit: true } },
        xpReward: 175,
        color: 'yellow'
    },

    // Topic Mastery (Purple)
    {
        id: 'topic-explorer',
        name: 'Topic Explorer',
        description: 'Try 5 different topics',
        icon: '🧭',
        category: 'mastery',
        requirement: { type: 'topic_count', value: 5 },
        xpReward: 100,
        color: 'purple'
    },
    {
        id: 'polyglot',
        name: 'Polyglot',
        description: 'Complete quizzes in 10 different topics',
        icon: '🗺️',
        category: 'mastery',
        requirement: { type: 'topic_count', value: 10 },
        xpReward: 250,
        color: 'purple'
    },
    {
        id: 'topic-master',
        name: 'Topic Master',
        description: 'Get 90%+ on all difficulties in one topic',
        icon: '🎓',
        category: 'mastery',
        requirement: { type: 'average_score', value: 90, metadata: { allDifficulties: true } },
        xpReward: 300,
        color: 'purple'
    },
    {
        id: 'full-stack-pro',
        name: 'Full Stack Pro',
        description: 'Complete all Full Stack topics',
        icon: '💻',
        category: 'mastery',
        requirement: { type: 'topic_count', value: 7, metadata: { category: 'Full Stack' } },
        xpReward: 400,
        color: 'purple'
    },

    // Practice (Green)
    {
        id: 'practice-50',
        name: 'Practice Makes Perfect',
        description: 'Complete 50 questions',
        icon: '✍️',
        category: 'practice',
        requirement: { type: 'question_count', value: 50 },
        xpReward: 100,
        color: 'green'
    },
    {
        id: 'question-crusher',
        name: 'Question Crusher',
        description: 'Complete 100 questions',
        icon: '💪',
        category: 'practice',
        requirement: { type: 'question_count', value: 100 },
        xpReward: 200,
        color: 'green'
    },
    {
        id: 'quiz-marathon',
        name: 'Quiz Marathon',
        description: 'Complete 500 questions',
        icon: '🏃‍♂️',
        category: 'practice',
        requirement: { type: 'question_count', value: 500 },
        xpReward: 500,
        color: 'green'
    },
    {
        id: 'bookworm',
        name: 'Bookworm',
        description: 'Bookmark 10 questions',
        icon: '🔖',
        category: 'practice',
        requirement: { type: 'bookmark_count', value: 10 },
        xpReward: 75,
        color: 'green'
    },

    // Special (Pink)
    {
        id: 'early-bird',
        name: 'Early Bird',
        description: 'Complete quiz before 8 AM',
        icon: '🌅',
        category: 'special',
        requirement: { type: 'time_based', value: 1, metadata: { hourBefore: 8 } },
        xpReward: 100,
        color: 'pink'
    },
    {
        id: 'night-owl',
        name: 'Night Owl',
        description: 'Complete quiz after 10 PM',
        icon: '🦉',
        category: 'special',
        requirement: { type: 'time_based', value: 1, metadata: { hourAfter: 22 } },
        xpReward: 100,
        color: 'pink'
    },
    {
        id: 'weekend-warrior',
        name: 'Weekend Warrior',
        description: 'Complete 5 quizzes on weekend',
        icon: '🎉',
        category: 'special',
        requirement: { type: 'quiz_count', value: 5, metadata: { weekend: true } },
        xpReward: 150,
        color: 'pink'
    },
    {
        id: 'comeback-kid',
        name: 'Comeback Kid',
        description: 'Improve score by 20%+ on retake',
        icon: '📈',
        category: 'special',
        requirement: { type: 'score_improvement', value: 20 },
        xpReward: 200,
        color: 'pink'
    },
    {
        id: 'quiz-champion',
        name: 'Quiz Champion',
        description: 'Complete 50 quizzes',
        icon: '🏆',
        category: 'special',
        requirement: { type: 'quiz_count', value: 50 },
        xpReward: 500,
        color: 'pink'
    },
];

// Helper function to get color classes
export const getAchievementColor = (color: string) => {
    const colors = {
        blue: {
            bg: 'bg-blue-500/20',
            text: 'text-blue-400',
            border: 'border-blue-500/50',
            glow: 'shadow-blue-500/50'
        },
        orange: {
            bg: 'bg-orange-500/20',
            text: 'text-orange-400',
            border: 'border-orange-500/50',
            glow: 'shadow-orange-500/50'
        },
        yellow: {
            bg: 'bg-yellow-500/20',
            text: 'text-yellow-400',
            border: 'border-yellow-500/50',
            glow: 'shadow-yellow-500/50'
        },
        purple: {
            bg: 'bg-purple-500/20',
            text: 'text-purple-400',
            border: 'border-purple-500/50',
            glow: 'shadow-purple-500/50'
        },
        green: {
            bg: 'bg-green-500/20',
            text: 'text-green-400',
            border: 'border-green-500/50',
            glow: 'shadow-green-500/50'
        },
        pink: {
            bg: 'bg-pink-500/20',
            text: 'text-pink-400',
            border: 'border-pink-500/50',
            glow: 'shadow-pink-500/50'
        },
    };
    return colors[color as keyof typeof colors] || colors.blue;
};

// Category display names
export const CATEGORY_NAMES = {
    'getting-started': 'Getting Started',
    'consistency': 'Consistency',
    'excellence': 'Excellence',
    'mastery': 'Topic Mastery',
    'practice': 'Practice',
    'special': 'Special'
};
