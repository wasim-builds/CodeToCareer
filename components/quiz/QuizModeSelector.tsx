'use client';

import React, { useState } from 'react';
import { Question } from '@/types/quiz';
import { TimerMode, calculateTimeLimit, formatTime, getTimePerQuestion } from '@/lib/timerUtils';
import { FiClock, FiZap, FiTarget, FiX } from 'react-icons/fi';

interface QuizModeSelectorProps {
    questions: Question[];
    onStart: (settings: { timedMode: boolean; timerMode: TimerMode }) => void;
    onStartEndless?: () => void;
    onClose: () => void;
}

export default function QuizModeSelector({
    questions,
    onStart,
    onStartEndless,
    onClose,
}: QuizModeSelectorProps) {
    const [timedMode, setTimedMode] = useState(true);
    const [timerMode, setTimerMode] = useState<TimerMode>('standard');
    const [isGenerating, setIsGenerating] = useState(false);

    const timeLimit = calculateTimeLimit(questions, timerMode);

    const modes: { id: TimerMode; name: string; icon: string; description: string; color: string }[] = [
        {
            id: 'relaxed',
            name: 'Relaxed',
            icon: '🌱',
            description: '1.5x time - Perfect for learning',
            color: 'green',
        },
        {
            id: 'standard',
            name: 'Standard',
            icon: '⚡',
            description: '1x time - Balanced challenge',
            color: 'blue',
        },
        {
            id: 'challenge',
            name: 'Challenge',
            icon: '🔥',
            description: '0.75x time - Interview pressure',
            color: 'red',
        },
    ];

    const handleStart = () => {
        onStart({ timedMode, timerMode });
    };

    const handleEndlessStart = async () => {
        if (onStartEndless) {
            setIsGenerating(true);
            try {
                await onStartEndless();
            } finally {
                setIsGenerating(false);
            }
        }
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-2xl border border-gray-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-gray-800 border-b border-gray-700 p-6 flex items-center justify-between z-10">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-1">Configure Quiz</h2>
                        <p className="text-gray-400 text-sm">Choose your quiz settings</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-700 rounded-lg transition-colors text-gray-400 hover:text-white"
                    >
                        <FiX className="w-6 h-6" />
                    </button>
                </div>

                <div className="p-6 space-y-6">
                    {/* Endless Mode Promo */}
                    {onStartEndless && (
                        <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 rounded-xl p-1 border border-purple-500/30">
                            <button
                                onClick={handleEndlessStart}
                                disabled={isGenerating}
                                className="w-full bg-gray-900/60 hover:bg-gray-900/40 p-4 rounded-lg transition-all flex items-center justify-between group"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                        {isGenerating ? (
                                            <div className="w-5 h-5 border-2 border-purple-400 border-t-transparent rounded-full animate-spin" />
                                        ) : (
                                            <FiZap className="w-5 h-5 text-purple-400" />
                                        )}
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-base font-bold text-white flex items-center gap-2">
                                            AI Endless Mode <span className="px-2 py-0.5 rounded text-[10px] bg-purple-500 text-white uppercase tracking-wider">Beta</span>
                                        </h3>
                                        <p className="text-xs text-gray-400">Generate unique questions instantly using AI</p>
                                    </div>
                                </div>
                                <div className="text-purple-400 group-hover:translate-x-1 transition-transform">
                                    <FiTarget className="w-5 h-5" />
                                </div>
                            </button>
                        </div>
                    )}

                    {/* Timed Mode Toggle */}
                    <div className="bg-gray-900/50 rounded-xl p-5 border border-gray-700">
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <FiClock className="w-5 h-5 text-blue-400" />
                                    <h3 className="text-lg font-semibold text-white">Timed Mode</h3>
                                </div>
                                <p className="text-sm text-gray-400">
                                    Add a countdown timer to simulate real interview conditions
                                </p>
                            </div>
                            <button
                                onClick={() => setTimedMode(!timedMode)}
                                className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors ${timedMode ? 'bg-green-600' : 'bg-gray-600'
                                    }`}
                            >
                                <span
                                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${timedMode ? 'translate-x-8' : 'translate-x-1'
                                        }`}
                                />
                            </button>
                        </div>
                    </div>

                    {/* Timer Mode Selection */}
                    {timedMode && (
                        <div className="space-y-3">
                            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                                Select Time Mode
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {modes.map((mode) => (
                                    <button
                                        key={mode.id}
                                        onClick={() => setTimerMode(mode.id)}
                                        className={`p-4 rounded-xl border-2 transition-all text-left ${timerMode === mode.id
                                            ? `border-${mode.color}-500 bg-${mode.color}-500/10`
                                            : 'border-gray-700 hover:border-gray-600 bg-gray-900/50'
                                            }`}
                                    >
                                        <div className="text-2xl mb-2">{mode.icon}</div>
                                        <div className="font-semibold text-white mb-1">{mode.name}</div>
                                        <div className="text-xs text-gray-400">{mode.description}</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Time Preview */}
                    {timedMode && (
                        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-5 border border-blue-500/30">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                    <FiTarget className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-blue-400">Time Allocation</h3>
                                    <p className="text-xs text-gray-400">Based on question difficulty</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="bg-gray-900/50 rounded-lg p-3">
                                    <div className="text-2xl font-bold text-white mb-1">{formatTime(timeLimit)}</div>
                                    <div className="text-xs text-gray-400">Total Time</div>
                                </div>
                                <div className="bg-gray-900/50 rounded-lg p-3">
                                    <div className="text-2xl font-bold text-white mb-1">{questions.length}</div>
                                    <div className="text-xs text-gray-400">Questions</div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-400">🌱 Easy</span>
                                    <span className="text-green-400 font-mono">{getTimePerQuestion('easy', timerMode)}s</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-400">⚡ Medium</span>
                                    <span className="text-yellow-400 font-mono">{getTimePerQuestion('medium', timerMode)}s</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-400">🔥 Hard</span>
                                    <span className="text-red-400 font-mono">{getTimePerQuestion('hard', timerMode)}s</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Untimed Mode Info */}
                    {!timedMode && (
                        <div className="bg-gray-900/50 rounded-xl p-5 border border-gray-700">
                            <div className="flex items-start gap-3">
                                <FiZap className="w-5 h-5 text-gray-400 mt-0.5" />
                                <div>
                                    <h3 className="text-sm font-semibold text-white mb-1">Untimed Practice</h3>
                                    <p className="text-sm text-gray-400">
                                        Take your time to learn and understand each question. Perfect for studying and concept review.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Start Button */}
                    <button
                        onClick={handleStart}
                        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg shadow-green-500/20 flex items-center justify-center gap-3"
                    >
                        <FiZap className="w-6 h-6" />
                        <span className="text-lg">Start Quiz</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
