'use client'

import { Contest, getTimeRemaining } from '@/types/contest'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FiClock, FiUsers, FiTrophy, FiCalendar } from 'react-icons/fi'

interface ContestCardProps {
    contest: Contest
}

export function ContestCard({ contest }: ContestCardProps) {
    const [timeLeft, setTimeLeft] = useState(getTimeRemaining(contest.endTime))
    const [timeUntilStart, setTimeUntilStart] = useState(getTimeRemaining(contest.startTime))

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeRemaining(contest.endTime))
            setTimeUntilStart(getTimeRemaining(contest.startTime))
        }, 1000)

        return () => clearInterval(interval)
    }, [contest.endTime, contest.startTime])

    const now = Date.now()
    const isUpcoming = now < contest.startTime
    const isActive = now >= contest.startTime && now <= contest.endTime
    const isCompleted = now > contest.endTime

    const getStatusBadge = () => {
        if (isActive) {
            return (
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full border border-green-500/30">
                    🔴 LIVE
                </span>
            )
        }
        if (isUpcoming) {
            return (
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full border border-blue-500/30">
                    UPCOMING
                </span>
            )
        }
        return (
            <span className="px-3 py-1 bg-gray-500/20 text-gray-400 text-xs font-semibold rounded-full border border-gray-500/30">
                ENDED
            </span>
        )
    }

    const getTypeIcon = () => {
        switch (contest.type) {
            case 'weekly': return '📅'
            case 'monthly': return '🗓️'
            case 'daily': return '⭐'
            case 'topic': return '📚'
            default: return '🏆'
        }
    }

    const formatTime = (time: ReturnType<typeof getTimeRemaining>) => {
        if (time.days > 0) return `${time.days}d ${time.hours}h`
        if (time.hours > 0) return `${time.hours}h ${time.minutes}m`
        if (time.minutes > 0) return `${time.minutes}m ${time.seconds}s`
        return `${time.seconds}s`
    }

    return (
        <Link href={`/contests/${contest.id}`}>
            <div className="bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-gray-600 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">{getTypeIcon()}</span>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">{contest.title}</h3>
                            <p className="text-sm text-gray-400">{contest.description}</p>
                        </div>
                    </div>
                    {getStatusBadge()}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                        <FiClock className="w-4 h-4 text-blue-400" />
                        <span className="text-gray-300">{contest.duration} min</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <FiUsers className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">{contest.participants.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <FiTrophy className="w-4 h-4 text-yellow-400" />
                        <span className="text-gray-300">{contest.problems.length} problems</span>
                    </div>
                    {contest.topic && (
                        <div className="flex items-center gap-2 text-sm">
                            <span className="text-gray-300">📚 {contest.topic}</span>
                        </div>
                    )}
                </div>

                {/* Timer */}
                {isActive && (
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 mb-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-green-400">Time Remaining:</span>
                            <span className="text-lg font-bold text-green-300">{formatTime(timeLeft)}</span>
                        </div>
                    </div>
                )}

                {isUpcoming && (
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 mb-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-blue-400">Starts in:</span>
                            <span className="text-lg font-bold text-blue-300">{formatTime(timeUntilStart)}</span>
                        </div>
                    </div>
                )}

                {/* Prizes */}
                {contest.prizes && contest.prizes.length > 0 && (
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                        <p className="text-xs font-semibold text-yellow-400 mb-2">🎁 PRIZES:</p>
                        <div className="space-y-1">
                            {contest.prizes.map((prize, idx) => (
                                <p key={idx} className="text-xs text-yellow-300">{prize}</p>
                            ))}
                        </div>
                    </div>
                )}

                {/* Action Button */}
                <div className="mt-4">
                    <button className={`w-full py-3 rounded-lg font-semibold transition-all ${isActive
                            ? 'bg-green-600 hover:bg-green-700 text-white'
                            : isUpcoming
                                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                        }`}>
                        {isActive ? '🚀 Join Now' : isUpcoming ? '📅 Register' : '📊 View Results'}
                    </button>
                </div>
            </div>
        </Link>
    )
}
