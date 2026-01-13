'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
    Contest,
    ContestSubmission,
    LeaderboardEntry,
    UserContestStats,
    Achievement,
    calculateContestScore,
    sortLeaderboard
} from '@/types/contest';
import { contests as initialContests } from '@/data/contests';

interface ContestContextType {
    contests: Contest[];
    userSubmissions: ContestSubmission[];
    leaderboards: Map<string, LeaderboardEntry[]>;
    userStats: UserContestStats;
    achievements: Achievement[];

    joinContest: (contestId: string) => void;
    submitSolution: (
        contestId: string,
        problemId: string,
        code: string,
        language: string,
        status: 'accepted' | 'wrong-answer' | 'time-limit' | 'error',
        attempts: number
    ) => void;
    getContestRank: (contestId: string, userId: string) => number;
    getLeaderboard: (contestId: string) => LeaderboardEntry[];
    getUserContests: () => Contest[];
    checkAchievements: () => void;
}

const ContestContext = createContext<ContestContextType | undefined>(undefined);

export function ContestProvider({ children }: { children: ReactNode }) {
    const [contests] = useState<Contest[]>(initialContests);
    const [userSubmissions, setUserSubmissions] = useState<ContestSubmission[]>([]);
    const [leaderboards, setLeaderboards] = useState<Map<string, LeaderboardEntry[]>>(new Map());
    const [userStats, setUserStats] = useState<UserContestStats>({
        contestsParticipated: 0,
        contestsWon: 0,
        top10Finishes: 0,
        top100Finishes: 0,
        totalScore: 0,
        problemsSolved: 0,
        averageRank: 0,
        bestRank: Infinity,
        streak: 0
    });
    const [achievements, setAchievements] = useState<Achievement[]>([
        { id: 'first-place', title: 'First Place', description: 'Win a contest', icon: '🥇' },
        { id: 'top-10', title: 'Top 10', description: 'Finish in top 10', icon: '🥈' },
        { id: 'top-100', title: 'Top 100', description: 'Finish in top 100', icon: '🥉' },
        { id: 'streak-master', title: 'Streak Master', description: 'Participate in 5 contests in a row', icon: '🔥' },
        { id: 'speed-demon', title: 'Speed Demon', description: 'Solve all problems in under 30 minutes', icon: '⚡' },
        { id: 'perfect-score', title: 'Perfect Score', description: 'Get 100% accuracy in a contest', icon: '🎯' },
        { id: 'contest-regular', title: 'Contest Regular', description: 'Participate in 10 contests', icon: '🌟' },
        { id: 'problem-solver', title: 'Problem Solver', description: 'Solve 50+ contest problems', icon: '💪' }
    ]);

    // Load from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('contest-submissions');
        if (saved) {
            setUserSubmissions(JSON.parse(saved));
        }

        const savedStats = localStorage.getItem('contest-stats');
        if (savedStats) {
            setUserStats(JSON.parse(savedStats));
        }

        const savedAchievements = localStorage.getItem('contest-achievements');
        if (savedAchievements) {
            setAchievements(JSON.parse(savedAchievements));
        }
    }, []);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem('contest-submissions', JSON.stringify(userSubmissions));
    }, [userSubmissions]);

    useEffect(() => {
        localStorage.setItem('contest-stats', JSON.stringify(userStats));
    }, [userStats]);

    useEffect(() => {
        localStorage.setItem('contest-achievements', JSON.stringify(achievements));
    }, [achievements]);

    // Generate leaderboards
    useEffect(() => {
        const newLeaderboards = new Map<string, LeaderboardEntry[]>();

        contests.forEach(contest => {
            const contestSubmissions = userSubmissions.filter(s => s.contestId === contest.id);

            // Group by user
            const userMap = new Map<string, ContestSubmission[]>();
            contestSubmissions.forEach(sub => {
                const existing = userMap.get(sub.userId) || [];
                userMap.set(sub.userId, [...existing, sub]);
            });

            // Create leaderboard entries
            const entries: LeaderboardEntry[] = [];
            userMap.forEach((subs, userId) => {
                const acceptedSubs = subs.filter(s => s.status === 'accepted');
                const totalScore = acceptedSubs.reduce((sum, s) => sum + s.score, 0);
                const problemsSolved = new Set(acceptedSubs.map(s => s.problemId)).size;
                const totalTimeTaken = Math.max(...acceptedSubs.map(s => s.timeTaken));
                const lastSubmissionTime = Math.max(...subs.map(s => s.timestamp));

                entries.push({
                    rank: 0,
                    userId,
                    username: subs[0].username,
                    totalScore,
                    problemsSolved,
                    totalTimeTaken,
                    submissions: subs,
                    lastSubmissionTime
                });
            });

            newLeaderboards.set(contest.id, sortLeaderboard(entries));
        });

        setLeaderboards(newLeaderboards);
    }, [userSubmissions, contests]);

    function joinContest(contestId: string) {
        // Mark user as joined (could add to a joined contests list)
        console.log('Joined contest:', contestId);
    }

    function submitSolution(
        contestId: string,
        problemId: string,
        code: string,
        language: string,
        status: 'accepted' | 'wrong-answer' | 'time-limit' | 'error',
        attempts: number
    ) {
        const contest = contests.find(c => c.id === contestId);
        if (!contest) return;

        const problem = contest.problems.find(p => p.problemId === problemId);
        if (!problem) return;

        const timeTaken = Math.floor((Date.now() - contest.startTime) / 1000);

        // Check if this is the first solve
        const existingSolves = userSubmissions.filter(
            s => s.contestId === contestId && s.problemId === problemId && s.status === 'accepted'
        );
        const isFirstSolve = existingSolves.length === 0;

        const score = status === 'accepted'
            ? calculateContestScore(problem.points, timeTaken, contest.duration, attempts, isFirstSolve)
            : 0;

        const submission: ContestSubmission = {
            userId: 'current-user', // Replace with actual user ID
            username: 'User', // Replace with actual username
            contestId,
            problemId,
            timestamp: Date.now(),
            status,
            score,
            timeTaken,
            attempts,
            code,
            language
        };

        setUserSubmissions(prev => [...prev, submission]);

        // Update stats if accepted
        if (status === 'accepted') {
            setUserStats(prev => ({
                ...prev,
                totalScore: prev.totalScore + score,
                problemsSolved: prev.problemsSolved + (isFirstSolve ? 1 : 0)
            }));
        }

        checkAchievements();
    }

    function getContestRank(contestId: string, userId: string): number {
        const leaderboard = leaderboards.get(contestId) || [];
        const entry = leaderboard.find(e => e.userId === userId);
        return entry?.rank || 0;
    }

    function getLeaderboard(contestId: string): LeaderboardEntry[] {
        return leaderboards.get(contestId) || [];
    }

    function getUserContests(): Contest[] {
        const participatedContestIds = new Set(userSubmissions.map(s => s.contestId));
        return contests.filter(c => participatedContestIds.has(c.id));
    }

    function checkAchievements() {
        const newAchievements = [...achievements];

        // Check for unlocked achievements
        const participatedContests = getUserContests().length;

        // Contest Regular
        const contestRegular = newAchievements.find(a => a.id === 'contest-regular');
        if (contestRegular && !contestRegular.unlockedAt && participatedContests >= 10) {
            contestRegular.unlockedAt = Date.now();
        }

        // Problem Solver
        const problemSolver = newAchievements.find(a => a.id === 'problem-solver');
        if (problemSolver && !problemSolver.unlockedAt && userStats.problemsSolved >= 50) {
            problemSolver.unlockedAt = Date.now();
        }

        setAchievements(newAchievements);
    }

    return (
        <ContestContext.Provider
            value={{
                contests,
                userSubmissions,
                leaderboards,
                userStats,
                achievements,
                joinContest,
                submitSolution,
                getContestRank,
                getLeaderboard,
                getUserContests,
                checkAchievements
            }}
        >
            {children}
        </ContestContext.Provider>
    );
}

export function useContest() {
    const context = useContext(ContestContext);
    if (!context) {
        throw new Error('useContest must be used within ContestProvider');
    }
    return context;
}
