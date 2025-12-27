'use client';

import { useState } from 'react';
import { useKeyboardShortcut } from '@/hooks/useKeyboardShortcuts';

interface Shortcut {
    key: string;
    description: string;
    category: 'quiz' | 'navigation' | 'other';
}

const SHORTCUTS: Shortcut[] = [
    // Quiz shortcuts
    { key: '1-4', description: 'Select answer A-D', category: 'quiz' },
    { key: 'Enter', description: 'Next question', category: 'quiz' },
    { key: 'N', description: 'Next question', category: 'quiz' },
    { key: 'P', description: 'Previous question', category: 'quiz' },
    { key: 'F', description: 'Flag for review', category: 'quiz' },
    { key: 'B', description: 'Bookmark question', category: 'quiz' },

    // Navigation shortcuts
    { key: 'H', description: 'Home', category: 'navigation' },
    { key: 'Q', description: 'Quizzes', category: 'navigation' },
    { key: 'A', description: 'Analytics', category: 'navigation' },
    { key: 'T', description: 'Achievements', category: 'navigation' },
    { key: 'K', description: 'Bookmarks', category: 'navigation' },

    // Other shortcuts
    { key: 'D', description: 'Toggle dark/light theme', category: 'other' },
    { key: '?', description: 'Show this help', category: 'other' },
    { key: 'Esc', description: 'Close modal', category: 'other' },
];

interface KeyboardShortcutsHelpProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function KeyboardShortcutsHelp({ isOpen, onClose }: KeyboardShortcutsHelpProps) {
    // Close on Escape
    useKeyboardShortcut('escape', onClose, { enabled: isOpen });

    if (!isOpen) return null;

    const quizShortcuts = SHORTCUTS.filter(s => s.category === 'quiz');
    const navShortcuts = SHORTCUTS.filter(s => s.category === 'navigation');
    const otherShortcuts = SHORTCUTS.filter(s => s.category === 'other');

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl">
                {/* Header */}
                <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-2xl">⌨️</span>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Keyboard Shortcuts
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        aria-label="Close"
                    >
                        <span className="text-gray-500 dark:text-gray-400 text-xl">✕</span>
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    {/* Quiz Shortcuts */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Quiz Navigation
                        </h3>
                        <div className="space-y-2">
                            {quizShortcuts.map((shortcut, index) => (
                                <div key={index} className="flex items-center justify-between py-2">
                                    <span className="text-gray-700 dark:text-gray-300">
                                        {shortcut.description}
                                    </span>
                                    <kbd className="px-3 py-1.5 text-sm font-mono bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white">
                                        {shortcut.key}
                                    </kbd>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Shortcuts */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Global Navigation
                        </h3>
                        <div className="space-y-2">
                            {navShortcuts.map((shortcut, index) => (
                                <div key={index} className="flex items-center justify-between py-2">
                                    <span className="text-gray-700 dark:text-gray-300">
                                        {shortcut.description}
                                    </span>
                                    <kbd className="px-3 py-1.5 text-sm font-mono bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white">
                                        {shortcut.key}
                                    </kbd>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Other Shortcuts */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Other
                        </h3>
                        <div className="space-y-2">
                            {otherShortcuts.map((shortcut, index) => (
                                <div key={index} className="flex items-center justify-between py-2">
                                    <span className="text-gray-700 dark:text-gray-300">
                                        {shortcut.description}
                                    </span>
                                    <kbd className="px-3 py-1.5 text-sm font-mono bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white">
                                        {shortcut.key}
                                    </kbd>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tip */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                        <p className="text-sm text-blue-900 dark:text-blue-300">
                            <strong>💡 Tip:</strong> Press <kbd className="px-2 py-1 text-xs bg-white dark:bg-gray-800 border border-blue-300 dark:border-blue-700 rounded">?</kbd> anytime to view this help menu.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Export hook to toggle help modal
export function useKeyboardHelp() {
    const [isOpen, setIsOpen] = useState(false);

    useKeyboardShortcut('?', () => setIsOpen(true));

    return {
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
        toggle: () => setIsOpen(prev => !prev),
    };
}
