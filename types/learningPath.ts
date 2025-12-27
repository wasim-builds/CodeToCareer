export interface LearningPath {
    id: string;
    name: string;
    description: string;
    icon: string;
    color: string;
    bgColor: string;
    estimatedHours: number;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    topics: PathTopic[];
    prerequisites?: string[];
}

export interface PathTopic {
    topicId: string;
    order: number;
    required: boolean;
    estimatedMinutes: number;
}

export interface PathProgress {
    pathId: string;
    completedTopics: string[];
    currentTopic: string | null;
    startedAt: Date;
    lastAccessedAt: Date;
    timeSpent: number;
    completed: boolean;
    completedAt?: Date;
}
