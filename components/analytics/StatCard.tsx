'use client';

interface StatCardProps {
    title: string;
    value: string | number;
    icon: string;
    subtitle?: string;
    trend?: {
        value: number;
        isPositive: boolean;
    };
}

export default function StatCard({ title, value, icon, subtitle, trend }: StatCardProps) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow">
            {/* Icon and Title */}
            <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{icon}</span>
                {trend && (
                    <span className={`text-sm font-medium ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                        {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
                    </span>
                )}
            </div>

            {/* Value */}
            <div className="mb-2">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    {value}
                </div>
            </div>

            {/* Title */}
            <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {title}
            </div>

            {/* Subtitle */}
            {subtitle && (
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    {subtitle}
                </div>
            )}
        </div>
    );
}
