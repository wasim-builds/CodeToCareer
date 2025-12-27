'use client';

import { useState } from 'react';
import { FiCode, FiX, FiLoader, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

interface CodeReviewPanelProps {
    code: string;
    language: string;
    problemTitle?: string;
}

interface ReviewSection {
    correctness?: string;
    quality?: string;
    performance?: string;
    bestPractices?: string;
    edgeCases?: string;
    suggestions?: string;
}

export function CodeReviewPanel({ code, language, problemTitle }: CodeReviewPanelProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [review, setReview] = useState<string>('');
    const [sections, setSections] = useState<ReviewSection>({});

    const requestReview = async () => {
        if (!code.trim()) {
            alert('Please write some code first!');
            return;
        }

        setIsLoading(true);
        setIsOpen(true);

        try {
            const response = await fetch('/api/code-review', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    code,
                    language,
                    problemTitle,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to get code review');
            }

            const data = await response.json();
            setReview(data.review);
            setSections(data.sections || {});
        } catch (error) {
            console.error('Code review error:', error);
            setReview('❌ Failed to generate code review. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Trigger Button */}
            <button
                onClick={requestReview}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm transition-colors font-medium"
                title="Get AI code review"
            >
                <FiCode className="w-4 h-4" />
                AI Review
            </button>

            {/* Review Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-gray-900 rounded-2xl border border-gray-700 max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-700">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                    <FiCode className="w-5 h-5 text-purple-400" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-white">AI Code Review</h2>
                                    <p className="text-sm text-gray-400">
                                        {problemTitle || `${language} code analysis`}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-8 h-8 hover:bg-gray-800 rounded-lg flex items-center justify-center transition-colors"
                            >
                                <FiX className="w-5 h-5 text-gray-400" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6">
                            {isLoading ? (
                                <div className="flex flex-col items-center justify-center py-12">
                                    <FiLoader className="w-12 h-12 text-purple-400 animate-spin mb-4" />
                                    <p className="text-gray-400">Analyzing your code...</p>
                                    <p className="text-sm text-gray-500 mt-2">This may take a few seconds</p>
                                </div>
                            ) : review ? (
                                <div className="space-y-6">
                                    {/* Structured Sections */}
                                    {Object.keys(sections).length > 0 ? (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {sections.correctness && (
                                                <ReviewCard
                                                    title="Correctness"
                                                    content={sections.correctness}
                                                    icon={<FiCheckCircle className="w-5 h-5 text-green-400" />}
                                                    color="green"
                                                />
                                            )}
                                            {sections.quality && (
                                                <ReviewCard
                                                    title="Code Quality"
                                                    content={sections.quality}
                                                    icon={<FiCode className="w-5 h-5 text-blue-400" />}
                                                    color="blue"
                                                />
                                            )}
                                            {sections.performance && (
                                                <ReviewCard
                                                    title="Performance"
                                                    content={sections.performance}
                                                    icon={<FiAlertCircle className="w-5 h-5 text-yellow-400" />}
                                                    color="yellow"
                                                />
                                            )}
                                            {sections.bestPractices && (
                                                <ReviewCard
                                                    title="Best Practices"
                                                    content={sections.bestPractices}
                                                    icon={<FiCheckCircle className="w-5 h-5 text-purple-400" />}
                                                    color="purple"
                                                />
                                            )}
                                            {sections.edgeCases && (
                                                <ReviewCard
                                                    title="Edge Cases"
                                                    content={sections.edgeCases}
                                                    icon={<FiAlertCircle className="w-5 h-5 text-orange-400" />}
                                                    color="orange"
                                                />
                                            )}
                                            {sections.suggestions && (
                                                <ReviewCard
                                                    title="Suggestions"
                                                    content={sections.suggestions}
                                                    icon={<FiCode className="w-5 h-5 text-cyan-400" />}
                                                    color="cyan"
                                                />
                                            )}
                                        </div>
                                    ) : null}

                                    {/* Full Review Text */}
                                    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                                        <h3 className="text-lg font-semibold text-white mb-4">Full Review</h3>
                                        <div className="prose prose-invert max-w-none">
                                            <pre className="whitespace-pre-wrap text-sm text-gray-300 leading-relaxed font-sans">
                                                {review}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center py-12 text-gray-400">
                                    No review available
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="p-4 border-t border-gray-700 bg-gray-800/50">
                            <p className="text-xs text-gray-500 text-center">
                                💡 AI reviews are suggestions. Always verify and test your code thoroughly.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

// Helper component for review cards
function ReviewCard({
    title,
    content,
    icon,
    color,
}: {
    title: string;
    content: string;
    icon: React.ReactNode;
    color: string;
}) {
    const colorClasses = {
        green: 'bg-green-500/10 border-green-500/30',
        blue: 'bg-blue-500/10 border-blue-500/30',
        yellow: 'bg-yellow-500/10 border-yellow-500/30',
        purple: 'bg-purple-500/10 border-purple-500/30',
        orange: 'bg-orange-500/10 border-orange-500/30',
        cyan: 'bg-cyan-500/10 border-cyan-500/30',
    };

    return (
        <div className={`rounded-xl border p-4 ${colorClasses[color as keyof typeof colorClasses]}`}>
            <div className="flex items-center gap-2 mb-3">
                {icon}
                <h4 className="font-semibold text-white">{title}</h4>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">{content}</p>
        </div>
    );
}
