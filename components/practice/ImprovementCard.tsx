'use client'

import { useState } from 'react'
import { CodeReviewImprovement } from '@/lib/codeReview'
import { FiAlertCircle, FiZap, FiShield, FiCode, FiCheckCircle, FiChevronDown } from 'react-icons/fi'

interface ImprovementCardProps {
    improvement: CodeReviewImprovement
    index: number
}

export function ImprovementCard({ improvement, index }: ImprovementCardProps) {
    const [isExpanded, setIsExpanded] = useState(false)

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'bug': return <FiAlertCircle className="w-5 h-5" />
            case 'performance': return <FiZap className="w-5 h-5" />
            case 'security': return <FiShield className="w-5 h-5" />
            case 'style': return <FiCode className="w-5 h-5" />
            case 'best-practice': return <FiCheckCircle className="w-5 h-5" />
            default: return <FiCode className="w-5 h-5" />
        }
    }

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'bug': return 'text-red-400 bg-red-500/20'
            case 'performance': return 'text-yellow-400 bg-yellow-500/20'
            case 'security': return 'text-orange-400 bg-orange-500/20'
            case 'style': return 'text-blue-400 bg-blue-500/20'
            case 'best-practice': return 'text-green-400 bg-green-500/20'
            default: return 'text-gray-400 bg-gray-500/20'
        }
    }

    const getSeverityColor = (severity: string) => {
        switch (severity) {
            case 'high': return 'bg-red-500/20 text-red-400 border-red-500/30'
            case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
            case 'low': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
            default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
        }
    }

    return (
        <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full px-4 py-3 flex items-start gap-3 hover:bg-gray-750 transition-colors text-left"
            >
                <div className={`p-2 rounded-lg ${getCategoryColor(improvement.category)}`}>
                    {getCategoryIcon(improvement.category)}
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-white capitalize">
                            {improvement.category.replace('-', ' ')}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full border ${getSeverityColor(improvement.severity)}`}>
                            {improvement.severity}
                        </span>
                        {improvement.line && (
                            <span className="text-xs text-gray-500">
                                Line {improvement.line}
                            </span>
                        )}
                    </div>
                    <p className="text-sm text-gray-300">
                        {improvement.description}
                    </p>
                </div>

                <FiChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${isExpanded ? 'rotate-180' : ''
                        }`}
                />
            </button>

            {isExpanded && (
                <div className="px-4 pb-4 border-t border-gray-700 bg-gray-900/50">
                    <div className="pt-3">
                        <p className="text-xs font-semibold text-green-400 mb-2">💡 Suggestion:</p>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            {improvement.suggestion}
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}
