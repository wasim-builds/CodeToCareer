"use client";

import Link from 'next/link';
import { Roadmap } from '@/types/roadmap';
import { FiClock, FiTrendingUp, FiUsers, FiArrowRight } from 'react-icons/fi';

interface RoadmapCardProps {
    roadmap: Roadmap;
}

export function RoadmapCard({ roadmap }: RoadmapCardProps) {
    const difficultyConfig = {
        'beginner-friendly': { color: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/30', label: 'Beginner Friendly' },
        'intermediate': { color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/30', label: 'Intermediate' },
        'advanced': { color: 'text-red-400', bg: 'bg-red-400/10', border: 'border-red-400/30', label: 'Advanced' }
    };

    const config = difficultyConfig[roadmap.difficulty];
    const colorClasses = {
        purple: 'from-purple-500/20 to-purple-500/5 border-purple-500/30 hover:border-purple-500/50',
        blue: 'from-blue-500/20 to-blue-500/5 border-blue-500/30 hover:border-blue-500/50',
        green: 'from-green-500/20 to-green-500/5 border-green-500/30 hover:border-green-500/50',
        orange: 'from-orange-500/20 to-orange-500/5 border-orange-500/30 hover:border-orange-500/50',
        red: 'from-red-500/20 to-red-500/5 border-red-500/30 hover:border-red-500/50',
        pink: 'from-pink-500/20 to-pink-500/5 border-pink-500/30 hover:border-pink-500/50',
    };

    return (
        <Link
            href={`/roadmap/${roadmap.slug}`}
            className={`group relative block p-6 rounded-xl border bg-gradient-to-br ${colorClasses[roadmap.color as keyof typeof colorClasses] || colorClasses.blue} transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
        >
            {/* Icon & Title */}
            <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl">{roadmap.icon}</div>
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors">
                        {roadmap.title}
                    </h3>
                    <p className="text-sm text-gray-400">{roadmap.category}</p>
                </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">
                {roadmap.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex items-center gap-2 text-sm">
                    <FiClock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300">{roadmap.totalDuration}</span>
                </div>
                <div className={`flex items-center gap-2 text-sm px-2 py-1 rounded-md ${config.bg} ${config.border} border`}>
                    <span className={`${config.color} font-medium`}>{config.label}</span>
                </div>
            </div>

            {/* Career Info */}
            <div className="space-y-2 mb-4 p-3 bg-gray-900/50 rounded-lg border border-gray-800">
                <div className="flex items-center gap-2 text-sm">
                    <FiTrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-gray-400">Salary:</span>
                    <span className="text-green-400 font-semibold">{roadmap.careerOutlook.averageSalary}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                    <FiUsers className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-400">Growth:</span>
                    <span className="text-blue-400 font-semibold">{roadmap.careerOutlook.jobGrowth}</span>
                </div>
            </div>

            {/* Phases Count */}
            <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">
                    {roadmap.phases.length} Learning Phases
                </span>
                <div className="flex items-center gap-2 text-green-400 font-medium group-hover:gap-3 transition-all">
                    <span className="text-sm">View Roadmap</span>
                    <FiArrowRight className="w-4 h-4" />
                </div>
            </div>

            {/* Hover Gradient */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
        </Link>
    );
}
