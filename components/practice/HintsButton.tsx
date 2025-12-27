'use client';

import { useState } from 'react';
import { FiHelpCircle, FiChevronRight } from 'react-icons/fi';

interface HintsButtonProps {
    problemTitle: string;
    problemDescription: string;
    userCode?: string;
    language?: string;
}

export function HintsButton({
    problemTitle,
    problemDescription,
    userCode,
    language
}: HintsButtonProps) {
    const [hints, setHints] = useState<Array<{ level: number; text: string }>>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentLevel, setCurrentLevel] = useState(0);

    const requestHint = async () => {
        if (currentLevel >= 3) {
            return; // Max 3 hints
        }

        setIsLoading(true);
        const nextLevel = currentLevel + 1;

        try {
            const response = await fetch('/api/hints', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    problemTitle,
                    problemDescription,
                    userCode,
                    language,
                    hintLevel: nextLevel,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to get hint');
            }

            const data = await response.json();
            setHints([...hints, { level: nextLevel, text: data.hint }]);
            setCurrentLevel(nextLevel);
        } catch (error) {
            console.error('Hint error:', error);
            // Fallback hint
            const fallbackHints = [
                "Think about what data structure would be most efficient.",
                "Consider the time complexity of your approach.",
                "Break the problem into smaller sub-problems.",
            ];
            setHints([...hints, {
                level: nextLevel,
                text: fallbackHints[nextLevel - 1] || "Keep trying! You're on the right track."
            }]);
            setCurrentLevel(nextLevel);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-3">
            {/* Hints Display */}
            {hints.length > 0 && (
                <div className="space-y-2">
                    {hints.map((hint, index) => (
                        <div
                            key={index}
                            className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3"
                        >
                            <div className="flex items-start gap-2">
                                <FiHelpCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                <div className="flex-1">
                                    <p className="text-xs text-blue-400 font-semibold mb-1">
                                        Hint {hint.level}/3
                                        {hint.level === 1 && ' (Subtle)'}
                                        {hint.level === 2 && ' (Moderate)'}
                                        {hint.level === 3 && ' (Specific)'}
                                    </p>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        {hint.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Hint Button */}
            {currentLevel < 3 && (
                <button
                    onClick={requestHint}
                    disabled={isLoading}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white rounded-lg text-sm transition-colors font-medium"
                >
                    <FiHelpCircle className="w-4 h-4" />
                    {isLoading ? 'Getting hint...' : hints.length === 0 ? 'Get a Hint' : `Get Another Hint (${currentLevel}/3)`}
                    {!isLoading && <FiChevronRight className="w-4 h-4" />}
                </button>
            )}

            {currentLevel === 3 && (
                <p className="text-xs text-gray-500 italic">
                    💡 You've used all 3 hints. Try implementing the solution!
                </p>
            )}
        </div>
    );
}
