'use client';

import { useMemo } from 'react';
import { useGamification } from '@/contexts/GamificationContext';

interface ActivityDay {
  date: Date;
  count: number;
  isToday: boolean;
  isCurrentMonth: boolean;
}

export function ActivityCalendar() {
  const { data } = useGamification();

  const { days, currentMonth, currentYear, streakDays } = useMemo(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    
    // Get first day of month
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    // Get days to show (including padding)
    const startDay = firstDay.getDay(); // 0 = Sunday
    const totalDays = lastDay.getDate();
    
    const days: ActivityDay[] = [];
    
    // Add padding days from previous month
    const prevMonth = new Date(year, month, 0);
    const prevMonthDays = prevMonth.getDate();
    for (let i = startDay - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, prevMonthDays - i),
        count: 0,
        isToday: false,
        isCurrentMonth: false,
      });
    }
    
    // Add current month days
    const today = now.toDateString();
    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(year, month, i);
      days.push({
        date,
        count: 0,
        isToday: date.toDateString() === today,
        isCurrentMonth: true,
      });
    }
    
    // Add padding days from next month
    const remainingDays = 42 - days.length; // 6 rows × 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        count: 0,
        isToday: false,
        isCurrentMonth: false,
      });
    }
    
    // Calculate streak days (mark days with activity)
    const streakDays = new Set<string>();
    if (data.lastActivityDate) {
      // Mark today if there's activity
      const lastActivity = new Date(data.lastActivityDate);
      streakDays.add(lastActivity.toDateString());
      
      // Mark previous streak days
      for (let i = 1; i < data.currentStreak; i++) {
        const day = new Date(lastActivity);
        day.setDate(day.getDate() - i);
        streakDays.add(day.toDateString());
      }
    }
    
    return {
      days,
      currentMonth: now.toLocaleString('default', { month: 'long' }),
      currentYear: year,
      streakDays,
    };
  }, [data.lastActivityDate, data.currentStreak]);

  const getActivityLevel = (day: ActivityDay) => {
    if (!day.isCurrentMonth) return 'opacity-30';
    
    const dateStr = day.date.toDateString();
    const hasActivity = streakDays.has(dateStr);
    
    if (day.isToday) {
      return hasActivity 
        ? 'bg-green-500 dark:bg-green-400 text-white ring-2 ring-green-600 dark:ring-green-300' 
        : 'bg-gray-300 dark:bg-gray-600 ring-2 ring-gray-400 dark:ring-gray-500';
    }
    
    if (hasActivity) {
      return 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300';
    }
    
    return 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Activity Calendar</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {currentMonth} {currentYear}
          </p>
        </div>
        <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-lg">
          <span className="text-2xl">🔥</span>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Current Streak</p>
            <p className="text-lg font-bold text-green-600 dark:text-green-400">{data.currentStreak} days</p>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="space-y-2">
        {/* Weekday Headers */}
        <div className="grid grid-cols-7 gap-2 mb-2">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
            <div key={i} className="text-center text-xs font-medium text-gray-500 dark:text-gray-400">
              {day}
            </div>
          ))}
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-7 gap-2">
          {days.map((day, i) => (
            <div
              key={i}
              className={`
                aspect-square flex items-center justify-center rounded-lg text-sm font-medium
                transition-all duration-200 hover:scale-110
                ${getActivityLevel(day)}
              `}
              title={`${day.date.toLocaleDateString()} ${streakDays.has(day.date.toDateString()) ? '✓ Active' : ''}`}
            >
              {day.date.getDate()}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500 dark:text-gray-400">Less</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 rounded bg-gray-100 dark:bg-gray-700"></div>
            <div className="w-4 h-4 rounded bg-green-100 dark:bg-green-900/40"></div>
            <div className="w-4 h-4 rounded bg-green-300 dark:bg-green-700"></div>
            <div className="w-4 h-4 rounded bg-green-500 dark:bg-green-500"></div>
          </div>
          <span className="text-gray-500 dark:text-gray-400">More</span>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
          <p className="text-xs text-gray-500 dark:text-gray-400">Longest Streak</p>
          <p className="text-xl font-bold text-gray-900 dark:text-white">{data.longestStreak} days</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
          <p className="text-xs text-gray-500 dark:text-gray-400">Total Level</p>
          <p className="text-xl font-bold text-gray-900 dark:text-white">Level {data.level}</p>
        </div>
      </div>
    </div>
  );
}
