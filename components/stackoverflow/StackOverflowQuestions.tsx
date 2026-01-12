"use client";

import { useEffect, useState } from 'react';
import { getQuestionsByTag, getTagForTopic } from '@/lib/stackoverflow';
import type { StackOverflowQuestion } from '@/lib/stackoverflow';
import { FiExternalLink, FiCheckCircle, FiMessageSquare, FiEye, FiTrendingUp } from 'react-icons/fi';

interface StackOverflowQuestionsProps {
    topicId: string;
    limit?: number;
}

export function StackOverflowQuestions({ topicId, limit = 5 }: StackOverflowQuestionsProps) {
    const [questions, setQuestions] = useState<StackOverflowQuestion[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchQuestions() {
            setLoading(true);
            setError(null);

            try {
                const tag = getTagForTopic(topicId);
                const data = await getQuestionsByTag(tag, limit);
                setQuestions(data);
            } catch (err) {
                setError('Failed to load Stack Overflow questions');
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        fetchQuestions();
    }, [topicId, limit]);

    if (loading) {
        return (
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <FiMessageSquare className="w-5 h-5 text-orange-500" />
                    <h3 className="text-xl font-bold text-white">Community Q&A</h3>
                </div>
                <div className="space-y-3">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="bg-gray-800/50 rounded-lg p-4 animate-pulse">
                            <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
                            <div className="h-3 bg-gray-700 rounded w-1/2"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <p className="text-red-400 text-sm">{error}</p>
            </div>
        );
    }

    if (questions.length === 0) {
        return null;
    }

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2">
                <FiMessageSquare className="w-5 h-5 text-orange-500" />
                <h3 className="text-xl font-bold text-white">Community Q&A from Stack Overflow</h3>
            </div>

            <div className="space-y-3">
                {questions.map((question) => (
                    <QuestionCard key={question.question_id} question={question} />
                ))}
            </div>

            <p className="text-xs text-gray-500 text-center">
                Questions sourced from Stack Overflow • Updated daily
            </p>
        </div>
    );
}

function QuestionCard({ question }: { question: StackOverflowQuestion }) {
    const formatNumber = (num: number) => {
        if (num >= 1000) return `${(num / 1000).toFixed(1)}k`;
        return num.toString();
    };

    const formatDate = (timestamp: number) => {
        const date = new Date(timestamp * 1000);
        const now = new Date();
        const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return 'Today';
        if (diffDays === 1) return 'Yesterday';
        if (diffDays < 30) return `${diffDays} days ago`;
        if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
        return `${Math.floor(diffDays / 365)} years ago`;
    };

    return (
        <a
            href={question.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-orange-500/50 rounded-lg p-4 transition-all group"
        >
            {/* Title */}
            <div className="flex items-start gap-3 mb-3">
                <div className="flex-1">
                    <h4 className="text-white font-medium group-hover:text-orange-400 transition-colors line-clamp-2">
                        {question.title}
                    </h4>
                </div>
                <FiExternalLink className="w-4 h-4 text-gray-500 group-hover:text-orange-400 flex-shrink-0 mt-1" />
            </div>

            {/* Stats */}
            <div className="flex items-center gap-4 text-sm mb-3">
                <div className="flex items-center gap-1.5">
                    <FiTrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 font-semibold">{question.score}</span>
                    <span className="text-gray-500">votes</span>
                </div>

                <div className="flex items-center gap-1.5">
                    {question.is_answered ? (
                        <FiCheckCircle className="w-4 h-4 text-green-400" />
                    ) : (
                        <FiMessageSquare className="w-4 h-4 text-gray-500" />
                    )}
                    <span className={question.is_answered ? 'text-green-400 font-semibold' : 'text-gray-400'}>
                        {question.answer_count}
                    </span>
                    <span className="text-gray-500">answers</span>
                </div>

                <div className="flex items-center gap-1.5">
                    <FiEye className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-400">{formatNumber(question.view_count)}</span>
                    <span className="text-gray-500">views</span>
                </div>
            </div>

            {/* Tags */}
            <div className="flex items-center gap-2 flex-wrap mb-2">
                {question.tags.slice(0, 4).map((tag) => (
                    <span
                        key={tag}
                        className="px-2 py-0.5 bg-orange-500/10 text-orange-400 text-xs rounded border border-orange-500/20"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Asked by {question.owner.display_name}</span>
                <span>{formatDate(question.creation_date)}</span>
            </div>
        </a>
    );
}
