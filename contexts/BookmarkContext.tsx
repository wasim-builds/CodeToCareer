'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Question } from '@/types/quiz';

export interface BookmarkedQuestion {
    id: string;
    topicId: string;
    topicName: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    difficulty: 'easy' | 'medium' | 'hard';
    bookmarkedAt: string;
}

interface BookmarkContextType {
    bookmarks: BookmarkedQuestion[];
    addBookmark: (question: Question, topicId: string, topicName: string) => void;
    removeBookmark: (questionId: string) => void;
    isBookmarked: (questionId: string) => boolean;
    clearBookmarks: () => void;
    getBookmarksByTopic: (topicId: string) => BookmarkedQuestion[];
    getBookmarkCount: () => number;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export function BookmarkProvider({ children }: { children: ReactNode }) {
    const [bookmarks, setBookmarks] = useState<BookmarkedQuestion[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Load bookmarks from localStorage
        const savedBookmarks = localStorage.getItem('quiz-bookmarks');
        if (savedBookmarks) {
            try {
                const parsed = JSON.parse(savedBookmarks);
                setBookmarks(parsed);
            } catch (e) {
                console.error('Error loading bookmarks:', e);
            }
        }
    }, []);

    useEffect(() => {
        if (mounted) {
            // Save bookmarks to localStorage whenever they change
            localStorage.setItem('quiz-bookmarks', JSON.stringify(bookmarks));
        }
    }, [bookmarks, mounted]);

    const addBookmark = (question: Question, topicId: string, topicName: string) => {
        const bookmarkedQuestion: BookmarkedQuestion = {
            id: `${topicId}-${question.question.substring(0, 20)}`, // Simple ID generation
            topicId,
            topicName,
            question: question.question,
            options: question.options,
            correctAnswer: question.correctAnswer,
            explanation: question.explanation || 'No explanation available',
            difficulty: question.difficulty,
            bookmarkedAt: new Date().toISOString(),
        };

        setBookmarks((prev) => {
            // Check if already bookmarked
            const exists = prev.find((b) => b.id === bookmarkedQuestion.id);
            if (exists) {
                return prev; // Already bookmarked
            }
            return [...prev, bookmarkedQuestion];
        });
    };

    const removeBookmark = (questionId: string) => {
        setBookmarks((prev) => prev.filter((b) => b.id !== questionId));
    };

    const isBookmarked = (questionId: string): boolean => {
        return bookmarks.some((b) => b.id === questionId);
    };

    const clearBookmarks = () => {
        if (confirm('Are you sure you want to clear all bookmarks?')) {
            setBookmarks([]);
        }
    };

    const getBookmarksByTopic = (topicId: string): BookmarkedQuestion[] => {
        return bookmarks.filter((b) => b.topicId === topicId);
    };

    const getBookmarkCount = (): number => {
        return bookmarks.length;
    };

    return (
        <BookmarkContext.Provider
            value={{
                bookmarks,
                addBookmark,
                removeBookmark,
                isBookmarked,
                clearBookmarks,
                getBookmarksByTopic,
                getBookmarkCount,
            }}
        >
            {children}
        </BookmarkContext.Provider>
    );
}

export function useBookmark() {
    const context = useContext(BookmarkContext);
    if (context === undefined) {
        throw new Error('useBookmark must be used within a BookmarkProvider');
    }
    return context;
}
