'use client'

import { useState } from 'react'
import { CodeReview } from '@/lib/codeReview'
import { ReviewScoreCard } from './ReviewScoreCard'
import { ImprovementCard } from './ImprovementCard'
import { FiStar, FiAlertCircle, FiCode, FiChevronDown } from 'react-icons/fi'

interface AICodeReviewProps {
    code: string
    language: string
    problemId?: string
    problemContext?: string
    onReviewComplete?: (review: CodeReview) => void
}

export function AICodeReview({
    code,
    language,
    problemId,
    problemContext,
    onReviewComplete
}: AICodeReviewProps) {
    const [review, setReview] = useState<CodeReview | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [rateLimit, setRateLimit] = useState<{ remaining: number; limit: number } | null>(null)
    const [showAlternatives, setShowAlternatives] = useState(false)

    async function requestReview() {
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch('/api/practice/review', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    code,
                    language,
                    problemId,
                    problemContext
                })
            })

            const data = await response.json()

            if (!response.ok) {
                if (data.rateLimitExceeded) {
                    throw new Error(data.error)
                }
                throw new Error(data.error || 'Failed to generate review')
            }

            setReview(data.review)
            setRateLimit(data.rateLimit)
            onReviewComplete?.(data.review)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to generate review')
        } finally {
            setIsLoading(false)
        }
    }

    if (!review && !isLoading && !error) {
        return (
            <div className="bg-gray-900 rounded-lg p-6 text-center">
                <div className="mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto flex items-center justify-center mb-4">
                        <FiStar className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Get AI Code Review</h3>
                    <p className="text-gray-400 text-sm max-w-md mx-auto">
                        Get instant feedback on your code quality, performance, security, and best practices from our AI reviewer.
                    </p>
                </div>

                <button
                    onClick={requestReview}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-medium transition-all transform hover:scale-105"
                >
                    Request AI Review
                </button>

                {rateLimit && (
                    <p className="text-xs text-gray-500 mt-3">
                        {rateLimit.remaining} reviews remaining this hour
                    </p>
                )}
            </div>
        )
    }

    if (isLoading) {
        return (
            <div className="bg-gray-900 rounded-lg p-8 text-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="relative">
                        <div className="w-16 h-16 border-4 border-gray-700 border-t-purple-500 rounded-full animate-spin" />
                        <FiStar className="w-6 h-6 text-purple-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <div>
                        <p className="text-white font-medium mb-1">Analyzing your code...</p>
                        <p className="text-gray-400 text-sm">This may take a few seconds</p>
                    </div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                <div className="flex items-start gap-3">
                    <FiAlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                        <h3 className="text-red-400 font-semibold mb-1">Review Failed</h3>
                        <p className="text-red-300 text-sm mb-3">{error}</p>
                        <button
                            onClick={requestReview}
                            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    if (!review) return null

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold text-white mb-1">AI Code Review</h3>
                    <p className="text-sm text-gray-400">
                        {new Date(review.timestamp).toLocaleString()}
                    </p>
                </div>
                <button
                    onClick={requestReview}
                    disabled={isLoading}
                    className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm font-medium transition-colors"
                >
                    New Review
                </button>
            </div>

            {/* Overall Score */}
            <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-lg p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-400 mb-1">Overall Score</p>
                        <p className="text-4xl font-bold text-white">{review.overallScore.toFixed(1)}</p>
                        <p className="text-sm text-gray-400 mt-1">out of 10</p>
                    </div>
                    <div className="text-6xl">
                        {review.overallScore >= 8 ? '🌟' : review.overallScore >= 6 ? '⭐' : '💫'}
                    </div>
                </div>
            </div>

            {/* Score Breakdown */}
            <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-3">SCORE BREAKDOWN</h4>
                <div className="grid grid-cols-2 gap-3">
                    <ReviewScoreCard label="Quality" score={review.qualityScore} icon="✨" />
                    <ReviewScoreCard label="Readability" score={review.readabilityScore} icon="📖" />
                    <ReviewScoreCard label="Performance" score={review.performanceScore} icon="⚡" />
                    <ReviewScoreCard label="Security" score={review.securityScore} icon="🔒" />
                </div>
            </div>

            {/* Summary */}
            <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">SUMMARY</h4>
                <p className="text-gray-300 leading-relaxed">{review.summary}</p>
            </div>

            {/* Strengths */}
            {review.strengths.length > 0 && (
                <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">✅ STRENGTHS</h4>
                    <div className="space-y-2">
                        {review.strengths.map((strength, idx) => (
                            <div key={idx} className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                                <p className="text-sm text-green-300">{strength}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Improvements */}
            {review.improvements.length > 0 && (
                <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">
                        🔧 IMPROVEMENTS ({review.improvements.length})
                    </h4>
                    <div className="space-y-2">
                        {review.improvements.map((improvement, idx) => (
                            <ImprovementCard key={idx} improvement={improvement} index={idx} />
                        ))}
                    </div>
                </div>
            )}

            {/* Alternative Approaches */}
            {review.alternativeApproaches && review.alternativeApproaches.length > 0 && (
                <div>
                    <button
                        onClick={() => setShowAlternatives(!showAlternatives)}
                        className="w-full flex items-center justify-between p-4 bg-gray-800 hover:bg-gray-750 rounded-lg transition-colors"
                    >
                        <div className="flex items-center gap-2">
                            <FiCode className="w-5 h-5 text-blue-400" />
                            <span className="font-semibold text-white">
                                Alternative Approaches ({review.alternativeApproaches.length})
                            </span>
                        </div>
                        <FiChevronDown
                            className={`w-5 h-5 text-gray-400 transition-transform ${showAlternatives ? 'rotate-180' : ''
                                }`}
                        />
                    </button>

                    {showAlternatives && (
                        <div className="mt-2 space-y-3">
                            {review.alternativeApproaches.map((approach, idx) => (
                                <div key={idx} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                                    <h5 className="font-semibold text-white mb-2">{approach.title}</h5>
                                    <p className="text-sm text-gray-400 mb-3">{approach.description}</p>

                                    <div className="bg-gray-900 rounded p-3 mb-3">
                                        <pre className="text-xs text-gray-300 overflow-x-auto">
                                            <code>{approach.code}</code>
                                        </pre>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 text-xs">
                                        <div>
                                            <p className="font-semibold text-green-400 mb-1">Pros:</p>
                                            <ul className="space-y-1">
                                                {approach.pros.map((pro, i) => (
                                                    <li key={i} className="text-gray-400">• {pro}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-red-400 mb-1">Cons:</p>
                                            <ul className="space-y-1">
                                                {approach.cons.map((con, i) => (
                                                    <li key={i} className="text-gray-400">• {con}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Rate Limit Info */}
            {rateLimit && (
                <div className="text-center text-xs text-gray-500">
                    {rateLimit.remaining} of {rateLimit.limit} reviews remaining this hour
                </div>
            )}
        </div>
    )
}
