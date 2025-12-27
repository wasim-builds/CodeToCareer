'use client';

import { FiBookmark } from 'react-icons/fi';
import { useBookmark } from '@/contexts/BookmarkContext';
import { Question } from '@/types/quiz';

interface BookmarkButtonProps {
    question: Question;
    topicId: string;
    topicName: string;
}

export default function BookmarkButton({ question, topicId, topicName }: BookmarkButtonProps) {
    const { addBookmark, removeBookmark, isBookmarked } = useBookmark();

    const questionId = `${topicId}-${question.question.substring(0, 20)}`;
    const bookmarked = isBookmarked(questionId);

    const handleToggle = () => {
        if (bookmarked) {
            removeBookmark(questionId);
        } else {
            addBookmark(question, topicId, topicName);
        }
    };

    return (
        <button
            onClick={handleToggle}
            className={`group relative p-2 rounded-lg transition-all duration-200 ${bookmarked
                    ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400'
                    : 'bg-gray-50 dark:bg-gray-800 text-gray-400 hover:text-green-600 dark:hover:text-green-400'
                }`}
            title={bookmarked ? 'Remove bookmark' : 'Bookmark this question'}
            aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark this question'}
        >
            <FiBookmark
                className={`w-5 h-5 transition-all duration-200 ${bookmarked ? 'fill-current' : ''
                    }`}
            />

            {/* Tooltip */}
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                {bookmarked ? 'Remove bookmark' : 'Bookmark question'}
            </span>
        </button>
    );
}
