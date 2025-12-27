'use client';

import { useEffect, useState } from 'react';
import { Achievement, getAchievementColor } from '@/lib/achievements';

interface AchievementNotificationProps {
    achievement: Achievement;
    onClose: () => void;
}

export default function AchievementNotification({ achievement, onClose }: AchievementNotificationProps) {
    const [isVisible, setIsVisible] = useState(false);
    const colors = getAchievementColor(achievement.color);

    useEffect(() => {
        // Slide in
        setTimeout(() => setIsVisible(true), 100);

        // Auto dismiss after 5 seconds
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
        }, 5000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div
            className={`fixed top-20 right-4 z-50 transition-all duration-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
        >
            <div className={`bg-gray-800 border-2 ${colors.border} rounded-xl p-4 shadow-2xl ${colors.glow} max-w-sm`}>
                <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="text-4xl animate-bounce">
                        {achievement.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-yellow-400 text-lg">🎉</span>
                            <span className="text-sm font-semibold text-gray-300">Achievement Unlocked!</span>
                        </div>
                        <h4 className={`font-bold text-lg ${colors.text}`}>
                            {achievement.name}
                        </h4>
                        <p className="text-sm text-gray-400 mt-1">
                            {achievement.description}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="text-xs font-semibold text-green-400">
                                +{achievement.xpReward} XP
                            </span>
                        </div>
                    </div>

                    {/* Close button */}
                    <button
                        onClick={() => {
                            setIsVisible(false);
                            setTimeout(onClose, 300);
                        }}
                        className="text-gray-500 hover:text-white transition-colors"
                    >
                        ✕
                    </button>
                </div>
            </div>
        </div>
    );
}
