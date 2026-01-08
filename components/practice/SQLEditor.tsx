'use client';

import { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { SQLProblem } from '@/types/sqlProblem';
import { SQLExecutor } from '@/lib/sqlExecutor';
import { FiPlay, FiRefreshCw, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import LoadingSpinner from '@/components/LoadingSpinner';

interface SQLEditorProps {
    problem: SQLProblem;
}

export default function SQLEditor({ problem }: SQLEditorProps) {
    const [query, setQuery] = useState('-- Write your query here\n');
    const [results, setResults] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [isRunning, setIsRunning] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [executor, setExecutor] = useState<SQLExecutor | null>(null);
    const [isInitializing, setIsInitializing] = useState(true);
    const [showSolution, setShowSolution] = useState(false);

    // Initialize SQL Executor
    useEffect(() => {
        let mounted = true;
        const initSQL = async () => {
            setIsInitializing(true);
            try {
                const sqlExecutor = new SQLExecutor(problem);
                await sqlExecutor.init();
                if (mounted) {
                    setExecutor(sqlExecutor);
                    setIsInitializing(false);
                    // Set default query if provided
                    setQuery(`-- ${problem.description}\n-- Write your SQL query below\n\n`);
                }
            } catch (err: any) {
                if (mounted) {
                    setError(`Failed to initialize database: ${err.message}`);
                    setIsInitializing(false);
                }
            }
        };

        initSQL();

        return () => {
            mounted = false;
            // executor?.close(); // Cleanup if needed
        };
    }, [problem]);

    const handleRun = () => {
        if (!executor) return;

        setIsRunning(true);
        setError(null);
        setResults(null);
        setIsCorrect(null);

        // Small delay to allow UI to update
        setTimeout(() => {
            const { results: execResults, error: execError } = executor.execute(query);

            if (execError) {
                setError(execError);
            } else if (execResults && execResults.length > 0) {
                setResults(execResults[0]);
                // Validate
                const validation = executor.validate(execResults);
                setIsCorrect(validation.correct);
                if (!validation.correct) {
                    setError(validation.message);
                }
            } else {
                setResults({ columns: [], values: [] });
            }

            setIsRunning(false);
        }, 100);
    };

    const handleReset = () => {
        setQuery(`-- ${problem.description}\n-- Write your SQL query below\n\n`);
        setResults(null);
        setError(null);
        setIsCorrect(null);
        setShowSolution(false);
    };

    if (isInitializing) {
        return (
            <div className="flex items-center justify-center p-12 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 h-[400px]">
                <div className="text-center">
                    <LoadingSpinner size="lg" className="mx-auto mb-4" />
                    <p className="text-gray-500">Initializing Database Engine...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {/* Editor Container */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
                {/* Toolbar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">SQL Editor</span>
                        {isCorrect === true && (
                            <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-bold flex items-center gap-1">
                                <FiCheckCircle /> Solved
                            </span>
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleReset}
                            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                            title="Reset Query"
                        >
                            <FiRefreshCw />
                        </button>
                        <button
                            onClick={() => {
                                if (showSolution) {
                                    setQuery(`-- ${problem.description}\n-- Write your SQL query below\n\n`);
                                    setShowSolution(false);
                                } else {
                                    setQuery(`-- Solution:\n${problem.solution}`);
                                    setShowSolution(true);
                                }
                            }}
                            className="px-3 py-1.5 rounded-lg text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                        >
                            {showSolution ? 'Hide Solution' : 'Show Solution'}
                        </button>
                        <button
                            onClick={handleRun}
                            disabled={isRunning}
                            className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${isRunning
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : 'bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg'
                                }`}
                        >
                            {isRunning ? (
                                <>
                                    <LoadingSpinner size="sm" /> Running...
                                </>
                            ) : (
                                <>
                                    <FiPlay /> Run Query
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Monaco Editor */}
                <div className="h-[300px] w-full">
                    <Editor
                        height="100%"
                        defaultLanguage="sql"
                        value={query}
                        onChange={(value) => setQuery(value || '')}
                        theme="vs-dark"
                        options={{
                            minimap: { enabled: false },
                            fontSize: 14,
                            scrollBeyondLastLine: false,
                            automaticLayout: true,
                            padding: { top: 16, bottom: 16 },
                        }}
                    />
                </div>
            </div>

            {/* Error Message */}
            {error && (
                <div className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 p-4 rounded-lg border border-red-200 dark:border-red-800 flex items-start gap-3">
                    <FiAlertCircle className="shrink-0 mt-0.5" />
                    <div className="font-mono text-sm whitespace-pre-wrap">{error}</div>
                </div>
            )}

            {/* Results Table */}
            {results && (
                <div className={`bg-white dark:bg-gray-800 rounded-xl border overflow-hidden transition-all ${isCorrect
                    ? 'border-green-500 shadow-[0_0_0_1px_rgba(34,197,94,0.5)]'
                    : 'border-gray-200 dark:border-gray-700'
                    }`}>
                    <div className={`px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between ${isCorrect ? 'bg-green-50 dark:bg-green-900/20' : 'bg-gray-50 dark:bg-gray-900/50'
                        }`}>
                        <h3 className={`font-semibold ${isCorrect ? 'text-green-700 dark:text-green-400' : 'text-gray-900 dark:text-white'}`}>
                            Query Results
                        </h3>
                        <span className="text-xs text-gray-500">
                            {results.values?.length || 0} rows
                        </span>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                                <tr>
                                    {results.columns.map((col: string) => (
                                        <th key={col} className="px-6 py-3 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                                            {col}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {results.values.map((row: any[], i: number) => (
                                    <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                        {row.map((cell: any, j: number) => (
                                            <td key={j} className="px-6 py-3 text-gray-600 dark:text-gray-300 whitespace-nowrap font-mono text-xs">
                                                {cell === null ? <span className="text-gray-400 italic">NULL</span> : String(cell)}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                                {results.values.length === 0 && (
                                    <tr>
                                        <td colSpan={results.columns.length} className="px-6 py-8 text-center text-gray-500 dark:text-gray-400 italic">
                                            No results returned
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Success Message */}
                    {isCorrect && (
                        <div className="bg-green-50 dark:bg-green-900/20 p-3 text-center border-t border-green-100 dark:border-green-800/30">
                            <p className="text-green-700 dark:text-green-400 font-medium flex items-center justify-center gap-2">
                                <FiCheckCircle /> Correct Answer! +{problem.points} XP
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
