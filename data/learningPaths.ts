import { LearningPath } from '@/types/learningPath';

export const learningPaths: LearningPath[] = [
    {
        id: 'frontend-developer',
        name: 'Frontend Developer',
        description: 'Master modern web development with HTML, CSS, JavaScript, and React',
        icon: '💻',
        color: 'text-blue-600',
        bgColor: 'bg-blue-50 dark:bg-blue-900/20',
        estimatedHours: 40,
        difficulty: 'beginner',
        topics: [
            { topicId: 'html', order: 1, required: true, estimatedMinutes: 180 },
            { topicId: 'css', order: 2, required: true, estimatedMinutes: 240 },
            { topicId: 'javascript', order: 3, required: true, estimatedMinutes: 360 },
            { topicId: 'react', order: 4, required: true, estimatedMinutes: 300 },
            { topicId: 'typescript', order: 5, required: false, estimatedMinutes: 240 },
            { topicId: 'nextjs', order: 6, required: false, estimatedMinutes: 180 },
        ],
    },
    {
        id: 'backend-developer',
        name: 'Backend Developer',
        description: 'Build scalable server applications with Node.js, databases, and APIs',
        icon: '⚙️',
        color: 'text-green-600',
        bgColor: 'bg-green-50 dark:bg-green-900/20',
        estimatedHours: 45,
        difficulty: 'intermediate',
        topics: [
            { topicId: 'javascript', order: 1, required: true, estimatedMinutes: 240 },
            { topicId: 'nodejs', order: 2, required: true, estimatedMinutes: 300 },
            { topicId: 'databases', order: 3, required: true, estimatedMinutes: 360 },
            { topicId: 'api-design', order: 4, required: true, estimatedMinutes: 240 },
            { topicId: 'authentication', order: 5, required: true, estimatedMinutes: 180 },
            { topicId: 'deployment', order: 6, required: false, estimatedMinutes: 120 },
        ],
    },
    {
        id: 'fullstack-developer',
        name: 'Full Stack Developer',
        description: 'Become a complete developer with both frontend and backend skills',
        icon: '🚀',
        color: 'text-purple-600',
        bgColor: 'bg-purple-50 dark:bg-purple-900/20',
        estimatedHours: 60,
        difficulty: 'advanced',
        topics: [
            { topicId: 'html', order: 1, required: true, estimatedMinutes: 120 },
            { topicId: 'css', order: 2, required: true, estimatedMinutes: 180 },
            { topicId: 'javascript', order: 3, required: true, estimatedMinutes: 360 },
            { topicId: 'react', order: 4, required: true, estimatedMinutes: 300 },
            { topicId: 'nodejs', order: 5, required: true, estimatedMinutes: 300 },
            { topicId: 'databases', order: 6, required: true, estimatedMinutes: 360 },
            { topicId: 'api-design', order: 7, required: true, estimatedMinutes: 240 },
            { topicId: 'deployment', order: 8, required: true, estimatedMinutes: 180 },
        ],
    },
    {
        id: 'dsa-mastery',
        name: 'Data Structures & Algorithms',
        description: 'Master DSA for coding interviews and competitive programming',
        icon: '📊',
        color: 'text-orange-600',
        bgColor: 'bg-orange-50 dark:bg-orange-900/20',
        estimatedHours: 50,
        difficulty: 'intermediate',
        topics: [
            { topicId: 'arrays', order: 1, required: true, estimatedMinutes: 240 },
            { topicId: 'strings', order: 2, required: true, estimatedMinutes: 180 },
            { topicId: 'linked-lists', order: 3, required: true, estimatedMinutes: 240 },
            { topicId: 'stacks-queues', order: 4, required: true, estimatedMinutes: 180 },
            { topicId: 'trees', order: 5, required: true, estimatedMinutes: 360 },
            { topicId: 'graphs', order: 6, required: true, estimatedMinutes: 360 },
            { topicId: 'sorting', order: 7, required: true, estimatedMinutes: 240 },
            { topicId: 'dynamic-programming', order: 8, required: true, estimatedMinutes: 480 },
        ],
    },
    {
        id: 'interview-prep',
        name: 'Interview Preparation',
        description: 'Ace your technical interviews with focused practice',
        icon: '🎯',
        color: 'text-red-600',
        bgColor: 'bg-red-50 dark:bg-red-900/20',
        estimatedHours: 30,
        difficulty: 'intermediate',
        topics: [
            { topicId: 'javascript', order: 1, required: true, estimatedMinutes: 180 },
            { topicId: 'arrays', order: 2, required: true, estimatedMinutes: 180 },
            { topicId: 'strings', order: 3, required: true, estimatedMinutes: 120 },
            { topicId: 'trees', order: 4, required: true, estimatedMinutes: 240 },
            { topicId: 'dynamic-programming', order: 5, required: true, estimatedMinutes: 300 },
            { topicId: 'system-design', order: 6, required: false, estimatedMinutes: 240 },
        ],
    },
];

/**
 * Get a learning path by ID
 */
export function getPathById(pathId: string): LearningPath | undefined {
    return learningPaths.find(path => path.id === pathId);
}

/**
 * Get all learning paths
 */
export function getAllPaths(): LearningPath[] {
    return learningPaths;
}
