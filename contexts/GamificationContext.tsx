'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
  requirement: number;
  type: 'quizzes' | 'streak' | 'score' | 'topic';
}

export interface GamificationData {
  currentStreak: number;
  longestStreak: number;
  lastActivityDate: string | null;
  totalXP: number;
  level: number;
  badges: Badge[];
  quizzesCompletedToday: number;
  activityDates: string[]; // Array of date strings with activity
}

interface GamificationContextType {
  data: GamificationData;
  addXP: (amount: number) => void;
  updateStreak: () => void;
  checkBadges: (totalQuizzes: number, averageScore: number, topicsCompleted: number) => void;
  getUnlockedBadges: () => Badge[];
  getLockedBadges: () => Badge[];
}

const defaultBadges: Badge[] = [
  // Quiz completion badges
  { id: 'first-quiz', name: 'First Steps', description: 'Complete your first quiz', icon: '🎯', requirement: 1, type: 'quizzes' },
  { id: 'quiz-5', name: 'Getting Started', description: 'Complete 5 quizzes', icon: '📝', requirement: 5, type: 'quizzes' },
  { id: 'quiz-10', name: 'Quiz Enthusiast', description: 'Complete 10 quizzes', icon: '🌟', requirement: 10, type: 'quizzes' },
  { id: 'quiz-25', name: 'Quiz Master', description: 'Complete 25 quizzes', icon: '🏅', requirement: 25, type: 'quizzes' },
  { id: 'quiz-50', name: 'Quiz Champion', description: 'Complete 50 quizzes', icon: '🏆', requirement: 50, type: 'quizzes' },
  { id: 'quiz-100', name: 'Quiz Legend', description: 'Complete 100 quizzes', icon: '👑', requirement: 100, type: 'quizzes' },
  
  // Streak badges
  { id: 'streak-3', name: 'On Fire', description: '3 day streak', icon: '🔥', requirement: 3, type: 'streak' },
  { id: 'streak-7', name: 'Week Warrior', description: '7 day streak', icon: '💪', requirement: 7, type: 'streak' },
  { id: 'streak-14', name: 'Dedicated Learner', description: '14 day streak', icon: '⚡', requirement: 14, type: 'streak' },
  { id: 'streak-30', name: 'Monthly Master', description: '30 day streak', icon: '🌙', requirement: 30, type: 'streak' },
  
  // Score badges
  { id: 'perfect-score', name: 'Perfect!', description: 'Score 100% on any quiz', icon: '💯', requirement: 100, type: 'score' },
  { id: 'avg-80', name: 'High Achiever', description: 'Maintain 80%+ average', icon: '⭐', requirement: 80, type: 'score' },
  { id: 'avg-90', name: 'Excellence', description: 'Maintain 90%+ average', icon: '🌟', requirement: 90, type: 'score' },
  
  // Topic badges
  { id: 'topic-5', name: 'Explorer', description: 'Try 5 different topics', icon: '🧭', requirement: 5, type: 'topic' },
  { id: 'topic-10', name: 'Adventurer', description: 'Try 10 different topics', icon: '🗺️', requirement: 10, type: 'topic' },
  { id: 'topic-20', name: 'Knowledge Seeker', description: 'Try 20 different topics', icon: '📚', requirement: 20, type: 'topic' },
];

const initialData: GamificationData = {
  currentStreak: 0,
  longestStreak: 0,
  lastActivityDate: null,
  totalXP: 0,
  level: 1,
  badges: defaultBadges,
  quizzesCompletedToday: 0,
  activityDates: [],
};

const GamificationContext = createContext<GamificationContextType | undefined>(undefined);

export function GamificationProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<GamificationData>(initialData);

  useEffect(() => {
    const saved = localStorage.getItem('gamification-data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setData({
          ...initialData,
          ...parsed,
          badges: defaultBadges.map(badge => {
            const savedBadge = parsed.badges?.find((b: Badge) => b.id === badge.id);
            return savedBadge ? { ...badge, unlockedAt: savedBadge.unlockedAt ? new Date(savedBadge.unlockedAt) : undefined } : badge;
          })
        });
      } catch (e) {
        console.error('Error loading gamification data:', e);
      }
    }
  }, []);

  const saveData = (newData: GamificationData) => {
    setData(newData);
    localStorage.setItem('gamification-data', JSON.stringify(newData));
  };

  const addXP = (amount: number) => {
    const newXP = data.totalXP + amount;
    const newLevel = Math.floor(newXP / 500) + 1; // Level up every 500 XP
    saveData({ ...data, totalXP: newXP, level: newLevel });
  };

  const updateStreak = () => {
    const today = new Date().toDateString();
    const lastActivity = data.lastActivityDate;

    // Add today to activity dates if not already there
    const activityDates = data.activityDates.includes(today) 
      ? data.activityDates 
      : [...data.activityDates, today];

    if (lastActivity === today) {
      // Already counted today
      saveData({ ...data, quizzesCompletedToday: data.quizzesCompletedToday + 1, activityDates });
      return;
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toDateString();

    let newStreak = data.currentStreak;
    if (lastActivity === yesterdayStr) {
      // Consecutive day
      newStreak = data.currentStreak + 1;
    } else if (lastActivity !== today) {
      // Streak broken
      newStreak = 1;
    }

    const newLongest = Math.max(newStreak, data.longestStreak);

    saveData({
      ...data,
      currentStreak: newStreak,
      longestStreak: newLongest,
      lastActivityDate: today,
      quizzesCompletedToday: 1,
      activityDates,
    });
  };

  const checkBadges = (totalQuizzes: number, averageScore: number, topicsCompleted: number) => {
    const updatedBadges = data.badges.map(badge => {
      if (badge.unlockedAt) return badge; // Already unlocked

      let shouldUnlock = false;
      switch (badge.type) {
        case 'quizzes':
          shouldUnlock = totalQuizzes >= badge.requirement;
          break;
        case 'streak':
          shouldUnlock = data.currentStreak >= badge.requirement;
          break;
        case 'score':
          shouldUnlock = averageScore >= badge.requirement;
          break;
        case 'topic':
          shouldUnlock = topicsCompleted >= badge.requirement;
          break;
      }

      if (shouldUnlock) {
        return { ...badge, unlockedAt: new Date() };
      }
      return badge;
    });

    saveData({ ...data, badges: updatedBadges });
  };

  const getUnlockedBadges = () => data.badges.filter(b => b.unlockedAt);
  const getLockedBadges = () => data.badges.filter(b => !b.unlockedAt);

  return (
    <GamificationContext.Provider value={{ 
      data, 
      addXP, 
      updateStreak, 
      checkBadges, 
      getUnlockedBadges, 
      getLockedBadges 
    }}>
      {children}
    </GamificationContext.Provider>
  );
}

export function useGamification() {
  const context = useContext(GamificationContext);
  if (context === undefined) {
    throw new Error('useGamification must be used within a GamificationProvider');
  }
  return context;
}
