"use client";

import { useMemo } from 'react';
import { FiCheckCircle, FiXCircle, FiClock, FiCode, FiTrendingUp, FiCalendar } from 'react-icons/fi';

interface PracticeAttempt {
    problemId: string;
    status: 'passed' | 'failed';
    language: string;
    code: string;
    runtimeMs?: number;
    testResults: any[];
    passed: boolean;
    timestamp: number;
    createdAt?: string;
}

interface SubmissionStatsProps {
    submissions: PracticeAttempt[];
}

export function SubmissionStats({ submissions }: SubmissionStatsProps) {
    const stats = useMemo(() => {
        if (submissions.length === 0) {
            return {
                total: 0,
                acceptanceRate: 0,
                bestRuntime: null,
                avgRuntime: null,
                languageBreakdown: {},
                recentActivity: 0,
            };
        }

        const total = submissions.length;
        const passed = submissions.filter(s => s.status === 'passed').length;
        const acceptanceRate = (passed / total) * 100;

        const runtimes = submissions.filter(s => s.runtimeMs !== undefined).map(s => s.runtimeMs!);
        const bestRuntime = runtimes.length > 0 ? Math.min(...runtimes) : null;
        const avgRuntime = runtimes.length > 0
            ? Math.round(runtimes.reduce((a, b) => a + b, 0) / runtimes.length)
            : null;

        const languageBreakdown = submissions.reduce((acc, s) => {
            acc[s.language] = (acc[s.language] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);

        const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
        const recentActivity = submissions.filter(s => {
            const date = new Date(s.createdAt || s.timestamp).getTime();
            return date > weekAgo;
        }).length;

        return {
            total,
            acceptanceRate,
            bestRuntime,
            avgRuntime,
            languageBreakdown,
            recentActivity,
        };
    }, [submissions]);

    const topLanguage = useMemo(() => {
        const entries = Object.entries(stats.languageBreakdown);
        if (entries.length === 0) return null;
        return entries.reduce((a, b) => a[1] > b[1] ? a : b)[0];
    }, [stats.languageBreakdown]);

    if (submissions.length === 0) {
        return (
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 text-center">
                <p className="text-gray-400">No submissions yet. Submit your code to see statistics!</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            {/* Total Submissions */}
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                    <FiCode className="w-4 h-4 text-blue-400" />
                    <span className="text-xs text-gray-400">Total</span>
                </div>
                <div className="text-2xl font-bold text-white">{stats.total}</div>
                <div className="text-xs text-gray-500 mt-1">Submissions</div>
            </div>

            {/* Acceptance Rate */}
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                    <FiCheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-xs text-gray-400">Acceptance</span>
                </div>
                <div className="text-2xl font-bold text-green-400">
                    {stats.acceptanceRate.toFixed(0)}%
                </div>
                <div className="text-xs text-gray-500 mt-1">
                    {submissions.filter(s => s.status === 'passed').length}/{stats.total} passed
                </div>
            </div>

            {/* Best Runtime */}
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                    <FiTrendingUp className="w-4 h-4 text-purple-400" />
                    <span className="text-xs text-gray-400">Best Time</span>
                </div>
                <div className="text-2xl font-bold text-purple-400">
                    {stats.bestRuntime !== null ? `${stats.bestRuntime}ms` : 'N/A'}
                </div>
                <div className="text-xs text-gray-500 mt-1">Fastest run</div>
            </div>

            {/* Average Runtime */}
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                    <FiClock className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs text-gray-400">Avg Time</span>
                </div>
                <div className="text-2xl font-bold text-yellow-400">
                    {stats.avgRuntime !== null ? `${stats.avgRuntime}ms` : 'N/A'}
                </div>
                <div className="text-xs text-gray-500 mt-1">Average run</div>
            </div>

            {/* Top Language */}
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                    <FiCode className="w-4 h-4 text-orange-400" />
                    <span className="text-xs text-gray-400">Top Lang</span>
                </div>
                <div className="text-2xl font-bold text-orange-400 capitalize">
                    {topLanguage || 'N/A'}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                    {topLanguage ? `${stats.languageBreakdown[topLanguage]} uses` : 'No data'}
                </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                    <FiCalendar className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs text-gray-400">Last 7 Days</span>
                </div>
                <div className="text-2xl font-bold text-cyan-400">{stats.recentActivity}</div>
                <div className="text-xs text-gray-500 mt-1">Submissions</div>
            </div>
        </div>
    );
}
