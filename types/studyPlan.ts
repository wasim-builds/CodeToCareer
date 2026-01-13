export type TaskType = 'theory' | 'practice' | 'quiz' | 'review' | 'contest';
export type PlanDifficulty = 'beginner' | 'intermediate' | 'advanced';

export interface Task {
    id: string;
    type: TaskType;
    title: string;
    description: string;
    resourceId?: string; // problem ID, theory topic ID, etc.
    duration: number; // minutes
    difficulty?: string;
    completed?: boolean;
}

export interface Day {
    dayNumber: number;
    title: string;
    tasks: Task[];
    estimatedTime: number; // minutes
}

export interface Week {
    weekNumber: number;
    theme: string;
    description: string;
    days: Day[];
}

export interface StudyPlan {
    id: string;
    title: string;
    description: string;
    duration: number; // days
    difficulty: PlanDifficulty;
    hoursPerDay: number;
    goals: string[];
    weeks: Week[];
    totalProblems: number;
    totalTheoryTopics: number;
    targetAudience: string;
    prerequisites?: string[];
    outcomes: string[];
}

export interface UserProgress {
    planId: string;
    enrolledAt: number;
    currentDay: number;
    completedTasks: string[];
    completedDays: number[];
    streak: number;
    longestStreak: number;
    lastActiveDate: string;
    completionPercentage: number;
    startDate: string;
    estimatedEndDate: string;
}

export interface DailyRecommendation {
    date: string;
    tasks: Task[];
    motivationalQuote: string;
    tip: string;
}

// Calculate completion percentage
export function calculateProgress(progress: UserProgress, plan: StudyPlan): number {
    const totalTasks = plan.weeks.reduce((sum, week) =>
        sum + week.days.reduce((daySum, day) => daySum + day.tasks.length, 0), 0
    );
    return totalTasks > 0 ? (progress.completedTasks.length / totalTasks) * 100 : 0;
}

// Calculate streak
export function calculateStreak(lastActiveDate: string): number {
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

    if (lastActiveDate === today) {
        return 1; // Continue current streak
    } else if (lastActiveDate === yesterday) {
        return 1; // Streak continues
    } else {
        return 0; // Streak broken
    }
}

// Get current day based on enrollment date
export function getCurrentDay(enrolledAt: number): number {
    const daysSinceEnrollment = Math.floor((Date.now() - enrolledAt) / (1000 * 60 * 60 * 24));
    return daysSinceEnrollment + 1;
}

// Get tasks for a specific day
export function getTasksForDay(plan: StudyPlan, dayNumber: number): Task[] {
    for (const week of plan.weeks) {
        for (const day of week.days) {
            if (day.dayNumber === dayNumber) {
                return day.tasks;
            }
        }
    }
    return [];
}
