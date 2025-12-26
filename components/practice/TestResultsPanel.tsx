"use client";

import { FiCheck, FiX, FiClock } from 'react-icons/fi';

interface RunResult {
    id: string;
    pass: boolean;
    expected: unknown;
    actual: unknown;
    type: 'sample' | 'hidden';
    error?: string;
}

interface TestResultsPanelProps {
    results: RunResult[];
    isRunning: boolean;
    executionTime?: number;
}

export function TestResultsPanel({ results, isRunning, executionTime }: TestResultsPanelProps) {
    const passCount = results.filter((r) => r.pass).length;
    const allPassed = results.length > 0 && results.every((r) => r.pass);

    if (isRunning) {
        return (
            <div className="space-y-3 animate-pulse">
                <div className="flex items-center gap-2 text-blue-400">
                    <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                    <span className="font-semibold">Running tests...</span>
                </div>
                <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-gray-800 rounded-lg p-3 h-20" />
                    ))}
                </div>
            </div>
        );
    }

    if (results.length === 0) {
        return null;
    }

    return (
        <div className="space-y-3">
            {/* Results Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {allPassed ? (
                        <div className="flex items-center gap-2 text-green-400 animate-fade-in">
                            <div className="p-1 bg-green-500/20 rounded-full">
                                <FiCheck className="w-5 h-5" />
                            </div>
                            <span className="font-semibold text-lg">All Tests Passed!</span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 text-red-400 animate-fade-in">
                            <div className="p-1 bg-red-500/20 rounded-full">
                                <FiX className="w-5 h-5" />
                            </div>
                            <span className="font-semibold text-lg">
                                {passCount}/{results.length} Tests Passed
                            </span>
                        </div>
                    )}
                </div>
                {executionTime !== undefined && (
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                        <FiClock className="w-3 h-3" />
                        <span>{executionTime}ms</span>
                    </div>
                )}
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <div
                    className={`h-full transition-all duration-500 ease-out ${allPassed ? 'bg-green-500' : 'bg-red-500'
                        }`}
                    style={{ width: `${(passCount / results.length) * 100}%` }}
                />
            </div>

            {/* Test Results */}
            <div className="space-y-2">
                {results.map((result, idx) => (
                    <div
                        key={result.id}
                        className={`rounded-lg border p-4 transition-all duration-300 animate-slide-up ${result.pass
                                ? 'bg-green-500/10 border-green-500/30 hover:bg-green-500/15'
                                : 'bg-red-500/10 border-red-500/30 hover:bg-red-500/15'
                            }`}
                        style={{ animationDelay: `${idx * 50}ms` }}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-white">Test Case {idx + 1}</span>
                            <span
                                className={`text-xs px-2 py-1 rounded font-medium ${result.pass
                                        ? 'bg-green-500/20 text-green-400'
                                        : 'bg-red-500/20 text-red-400'
                                    }`}
                            >
                                {result.pass ? '✓ Passed' : '✗ Failed'}
                            </span>
                        </div>

                        {result.error ? (
                            <div className="text-sm text-red-400 font-mono bg-red-900/20 rounded p-2 mt-2">
                                {result.error}
                            </div>
                        ) : (
                            <div className="space-y-2 text-sm font-mono">
                                <div>
                                    <span className="text-gray-400">Expected:</span>
                                    <div className="mt-1 bg-gray-800 rounded px-3 py-2 text-gray-300">
                                        {JSON.stringify(result.expected, null, 2)}
                                    </div>
                                </div>
                                <div>
                                    <span className="text-gray-400">Output:</span>
                                    <div
                                        className={`mt-1 rounded px-3 py-2 ${result.pass
                                                ? 'bg-gray-800 text-gray-300'
                                                : 'bg-red-900/20 text-red-300'
                                            }`}
                                    >
                                        {JSON.stringify(result.actual, null, 2)}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
