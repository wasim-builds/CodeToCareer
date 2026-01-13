'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { StudyPlan, UserProgress, Task, calculateProgress, getCurrentDay, getTasksForDay } from '@/types/studyPlan';
import { studyPlans } from '@/data/studyPlans';

interface StudyPlanContextType {
    plans: StudyPlan[];
    enrolledPlans: UserProgress[];
    enrollInPlan: (planId: string) => void;
    completeTask: (planId: string, taskId: string) => void;
    getProgress: (planId: string) => UserProgress | undefined;
    getTodaysTasks: () => Task[];
    isEnrolled: (planId: string) => boolean;
}

const StudyPlanContext = createContext<StudyPlanContextType | undefined>(undefined);

export function StudyPlanProvider({ children }: { children: ReactNode }) {
    const [plans] = useState<StudyPlan[]>(studyPlans);
    const [enrolledPlans, setEnrolledPlans] = useState<UserProgress[]>([]);

    // Load from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('study-plan-progress');
        if (saved) {
            setEnrolledPlans(JSON.parse(saved));
        }
    }, []);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem('study-plan-progress', JSON.stringify(enrolledPlans));
    }, [enrolledPlans]);

    function enrollInPlan(planId: string) {
        const plan = plans.find(p => p.id === planId);
        if (!plan) return;

        const today = new Date().toISOString().split('T')[0];
        const endDate = new Date(Date.now() + plan.duration * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

        const newProgress: UserProgress = {
            planId,
            enrolledAt: Date.now(),
            currentDay: 1,
            completedTasks: [],
            completedDays: [],
            streak: 0,
            longestStreak: 0,
            lastActiveDate: today,
            completionPercentage: 0,
            startDate: today,
            estimatedEndDate: endDate
        };

        setEnrolledPlans(prev => [...prev, newProgress]);
    }

    function completeTask(planId: string, taskId: string) {
        setEnrolledPlans(prev => prev.map(progress => {
            if (progress.planId !== planId) return progress;

            const plan = plans.find(p => p.id === planId);
            if (!plan) return progress;

            const today = new Date().toISOString().split('T')[0];
            const newCompletedTasks = [...progress.completedTasks, taskId];

            // Update streak
            let newStreak = progress.streak;
            if (progress.lastActiveDate === today) {
                // Same day, keep streak
                newStreak = progress.streak;
            } else {
                const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
                if (progress.lastActiveDate === yesterday) {
                    // Consecutive day
                    newStreak = progress.streak + 1;
                } else {
                    // Streak broken
                    newStreak = 1;
                }
            }

            return {
                ...progress,
                completedTasks: newCompletedTasks,
                lastActiveDate: today,
                streak: newStreak,
                longestStreak: Math.max(newStreak, progress.longestStreak),
                completionPercentage: calculateProgress({ ...progress, completedTasks: newCompletedTasks }, plan)
            };
        }));
    }

    function getProgress(planId: string): UserProgress | undefined {
        return enrolledPlans.find(p => p.planId === planId);
    }

    function getTodaysTasks(): Task[] {
        const allTasks: Task[] = [];

        enrolledPlans.forEach(progress => {
            const plan = plans.find(p => p.id === progress.planId);
            if (!plan) return;

            const currentDay = getCurrentDay(progress.enrolledAt);
            const tasks = getTasksForDay(plan, currentDay);

            tasks.forEach(task => {
                task.completed = progress.completedTasks.includes(task.id);
            });

            allTasks.push(...tasks);
        });

        return allTasks;
    }

    function isEnrolled(planId: string): boolean {
        return enrolledPlans.some(p => p.planId === planId);
    }

    return (
        <StudyPlanContext.Provider
            value={{
                plans,
                enrolledPlans,
                enrollInPlan,
                completeTask,
                getProgress,
                getTodaysTasks,
                isEnrolled
            }}
        >
            {children}
        </StudyPlanContext.Provider>
    );
}

export function useStudyPlan() {
    const context = useContext(StudyPlanContext);
    if (!context) {
        throw new Error('useStudyPlan must be used within StudyPlanProvider');
    }
    return context;
}
