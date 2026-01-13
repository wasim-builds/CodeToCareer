'use client'

import { CodeReview } from '@/lib/codeReview'

interface ReviewScoreCardProps {
    label: string
    score: number
    icon: string
}

export function ReviewScoreCard({ label, score, icon }: ReviewScoreCardProps) {
    const getScoreColor = (score: number) => {
        if (score >= 8) return 'text-green-400'
        if (score >= 6) return 'text-yellow-400'
        return 'text-red-400'
    }

    const getScoreBgColor = (score: number) => {
        if (score >= 8) return 'bg-green-500/20'
        if (score >= 6) return 'bg-yellow-500/20'
        return 'bg-red-500/20'
    }

    const percentage = (score / 10) * 100

    return (
        <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <span className="text-2xl">{icon}</span>
                    <span className="text-sm font-medium text-gray-300">{label}</span>
                </div>
                <span className={`text-2xl font-bold ${getScoreColor(score)}`}>
                    {score.toFixed(1)}
                </span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                <div
                    className={`h-full ${getScoreBgColor(score)} transition-all duration-500`}
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    )
}
