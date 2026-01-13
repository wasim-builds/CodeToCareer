'use client'

import { useContest } from '@/contexts/ContestContext'
import { ContestCard } from '@/components/contest/ContestCard'
import { useState } from 'react'
import { FiTrophy, FiClock, FiCalendar, FiCheckCircle } from 'react-icons/fi'

export default function ContestsPage() {
    const { contests } = useContest()
    const [filter, setFilter] = useState<'all' | 'active' | 'upcoming' | 'completed'>('all')

    const now = Date.now()
    const filteredContests = contests.filter(contest => {
        if (filter === 'all') return true
        if (filter === 'active') return now >= contest.startTime && now <= contest.endTime
        if (filter === 'upcoming') return now < contest.startTime
        if (filter === 'completed') return now > contest.endTime
        return true
    })

    const activeContests = contests.filter(c => now >= c.startTime && now <= c.endTime)
    const upcomingContests = contests.filter(c => now < c.startTime)
    const completedContests = contests.filter(c => now > c.endTime)

    return (
        <div className="min-h-screen bg-gray-900 py-8">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <FiTrophy className="w-10 h-10 text-yellow-400" />
                        <h1 className="text-4xl font-bold text-white">Coding Contests</h1>
                    </div>
                    <p className="text-gray-400 text-lg">
                        Compete with developers worldwide and climb the leaderboard!
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                                <FiClock className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white">{activeContests.length}</p>
                                <p className="text-sm text-gray-400">Active Now</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                <FiCalendar className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white">{upcomingContests.length}</p>
                                <p className="text-sm text-gray-400">Upcoming</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                <FiCheckCircle className="w-6 h-6 text-purple-400" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white">{completedContests.length}</p>
                                <p className="text-sm text-gray-400">Completed</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-2">
                    <button
                        onClick={() => setFilter('all')}
                        className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${filter === 'all'
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                            }`}
                    >
                        All Contests
                    </button>
                    <button
                        onClick={() => setFilter('active')}
                        className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${filter === 'active'
                                ? 'bg-green-600 text-white'
                                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                            }`}
                    >
                        🔴 Active ({activeContests.length})
                    </button>
                    <button
                        onClick={() => setFilter('upcoming')}
                        className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${filter === 'upcoming'
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                            }`}
                    >
                        📅 Upcoming ({upcomingContests.length})
                    </button>
                    <button
                        onClick={() => setFilter('completed')}
                        className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${filter === 'completed'
                                ? 'bg-purple-600 text-white'
                                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                            }`}
                    >
                        ✅ Completed ({completedContests.length})
                    </button>
                </div>

                {/* Contest List */}
                {filteredContests.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">🏆</div>
                        <h3 className="text-xl font-semibold text-white mb-2">No contests found</h3>
                        <p className="text-gray-400">Check back later for new contests!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {filteredContests.map(contest => (
                            <ContestCard key={contest.id} contest={contest} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
