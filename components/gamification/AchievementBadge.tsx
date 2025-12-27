'use client';

import { Achievement, getAchievementColor } from '@/lib/achievements';

interface AchievementBadgeProps {
    achievement: Achievement;
    unlocked: boolean;
    unlockedAt?: Date;
    progress?: number; // 0-100
}

export default function AchievementBadge({ achievement, unlocked, unlockedAt, progress = 0 }: AchievementBadgeProps) {
    const colors = getAchievementColor(achievement.color);

    return (
        <div
            className={`relative rounded-xl border-2 p-4 transition-all duration-300 ${unlocked
                    ? `${colors.border} ${colors.bg} hover:shadow-lg ${colors.glow}`
                    : 'border-gray-700 bg-gray-800/50 opacity-60'
                }`}
        >
            {/* Icon */}
            <div className={`text-4xl mb-3 ${unlocked ? 'animate-bounce' : 'grayscale'}`}>
                {achievement.icon}
            </div>

            {/* Name */}
            <h3 className={`font-bold text-lg mb-1 ${unlocked ? colors.text : 'text-gray-500'}`}>
                {achievement.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                {achievement.description}
            </p>

            {/* Status */}
            {unlocked ? (
                <div className="space-y-1">
                    <div className={`flex items-center gap-2 text-sm ${colors.text}`}>
                        <span>✓ Unlocked</span>
                    </div>
                    {unlockedAt && (
                        <div className="text-xs text-gray-500">
                            {new Date(unlockedAt).toLocaleDateString()}
                        </div>
                    )}
                    <div className="text-xs text-gray-400">
                        +{achievement.xpReward} XP
                    </div>
                </div>
            ) : (
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>🔒 Locked</span>
                    </div>
                    {progress > 0 && (
                        <>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                                <div
                                    className={`h-2 rounded-full transition-all duration-500 ${colors.bg.replace('/20', '')}`}
                                    style={{ width: `${Math.min(progress, 100)}%` }}
                                />
                            </div>
                            <div className="text-xs text-gray-500">
                                {Math.round(progress)}% complete
                            </div>
                        </>
                    )}
                </div>
            )}

            {/* Lock overlay for locked achievements */}
            {!unlocked && (
                <div className="absolute inset-0 bg-gray-900/20 rounded-xl pointer-events-none" />
            )}
        </div>
    );
}
