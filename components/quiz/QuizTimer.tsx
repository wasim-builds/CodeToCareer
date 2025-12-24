'use client';

import React from 'react';
import { formatTime, getTimerColor } from '@/lib/timerUtils';
import { FiClock, FiAlertCircle } from 'react-icons/fi';

interface QuizTimerProps {
    timeRemaining: number;
    timeLimit: number;
    size?: 'small' | 'medium' | 'large';
    showWarning?: boolean;
}

export default function QuizTimer({
    timeRemaining,
    timeLimit,
    size = 'medium',
    showWarning = false,
}: QuizTimerProps) {
    const percentage = (timeRemaining / timeLimit) * 100;
    const colors = getTimerColor(percentage);

    // Calculate stroke dasharray for circular progress
    const radius = size === 'small' ? 24 : size === 'medium' ? 28 : 38;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    const sizeClasses = {
        small: 'w-16 h-16',
        medium: 'w-20 h-20',
        large: 'w-32 h-32',
    };

    const textSizeClasses = {
        small: 'text-xs',
        medium: 'text-sm',
        large: 'text-xl',
    };

    return (
        <div className="relative">
            {/* Circular Progress */}
            <div className={`${sizeClasses[size]} relative ${showWarning && percentage <= 25 ? 'animate-pulse' : ''}`}>
                <svg className="transform -rotate-90 w-full h-full">
                    {/* Background circle */}
                    <circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth={size === 'small' ? '3' : size === 'medium' ? '4' : '6'}
                        fill="none"
                        className="text-gray-700"
                    />
                    {/* Progress circle */}
                    <circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth={size === 'small' ? '3' : size === 'medium' ? '4' : '6'}
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        className={`${colors.text} transition-all duration-1000 ease-linear`}
                        strokeLinecap="round"
                    />
                </svg>

                {/* Time display */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <FiClock className={`${size === 'small' ? 'w-3 h-3' : size === 'medium' ? 'w-4 h-4' : 'w-6 h-6'} ${colors.text} mb-0.5`} />
                    <span className={`font-mono font-bold ${colors.text} ${textSizeClasses[size]}`}>
                        {formatTime(timeRemaining)}
                    </span>
                </div>
            </div>

            {/* Warning indicator */}
            {showWarning && percentage <= 25 && (
                <div className="absolute -top-1 -right-1">
                    <div className="relative">
                        <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75" />
                        <FiAlertCircle className="relative w-5 h-5 text-red-500 bg-gray-900 rounded-full" />
                    </div>
                </div>
            )}
        </div>
    );
}
