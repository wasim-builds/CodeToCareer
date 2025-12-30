'use client';

import React, { useState } from 'react';
import { TheorySection } from '@/types/theory';
import {
    FiChevronDown,
    FiChevronRight,
    FiCheck,
    FiBookOpen,
    FiHome
} from 'react-icons/fi';
import Link from 'next/link';

interface TheorySidebarProps {
    topicId: string;
    topicName: string;
    sections: TheorySection[];
    activeSection: string;
    completedSections: Set<string>;
    onSectionClick: (sectionId: string) => void;
    readProgress: number;
}

interface CategoryGroup {
    name: string;
    sections: TheorySection[];
}

export function TheorySidebar({
    topicId,
    topicName,
    sections,
    activeSection,
    completedSections,
    onSectionClick,
    readProgress
}: TheorySidebarProps) {
    // Group sections by category
    const categoryGroups: CategoryGroup[] = React.useMemo(() => {
        const groups: Record<string, TheorySection[]> = {};

        sections.forEach(section => {
            const category = section.category || 'General';
            if (!groups[category]) {
                groups[category] = [];
            }
            groups[category].push(section);
        });

        // Sort sections within each category by order
        Object.keys(groups).forEach(category => {
            groups[category].sort((a, b) => (a.order || 0) - (b.order || 0));
        });

        return Object.entries(groups).map(([name, sections]) => ({
            name,
            sections
        }));
    }, [sections]);

    const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
        new Set(categoryGroups.map(g => g.name))
    );

    const toggleCategory = (categoryName: string) => {
        const newExpanded = new Set(expandedCategories);
        if (newExpanded.has(categoryName)) {
            newExpanded.delete(categoryName);
        } else {
            newExpanded.add(categoryName);
        }
        setExpandedCategories(newExpanded);
    };

    const getCategoryProgress = (category: CategoryGroup) => {
        const completed = category.sections.filter(s => completedSections.has(s.id)).length;
        return (completed / category.sections.length) * 100;
    };

    return (
        <div className="h-full flex flex-col bg-gray-900 border-r border-gray-800">
            {/* Header */}
            <div className="p-4 border-b border-gray-800">
                <Link
                    href="/quiz"
                    className="flex items-center gap-2 text-gray-400 hover:text-green-400 mb-4 text-sm transition-colors"
                >
                    <FiHome className="w-4 h-4" />
                    <span>Back to Dashboard</span>
                </Link>

                <div className="mb-3">
                    <h2 className="text-lg font-bold text-white mb-1">{topicName}</h2>
                    <p className="text-xs text-gray-500">Tutorial</p>
                </div>

                {/* Overall Progress */}
                <div className="bg-gray-800 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-400">Overall Progress</span>
                        <span className="text-xs font-bold text-green-400">{Math.round(readProgress)}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-green-500 to-green-400 transition-all duration-500"
                            style={{ width: `${readProgress}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto">
                <nav className="p-2">
                    {categoryGroups.map((category) => {
                        const isExpanded = expandedCategories.has(category.name);
                        const categoryProgress = getCategoryProgress(category);
                        const allCompleted = categoryProgress === 100;

                        return (
                            <div key={category.name} className="mb-2">
                                {/* Category Header */}
                                <button
                                    onClick={() => toggleCategory(category.name)}
                                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors group"
                                >
                                    <div className="flex items-center gap-2 flex-1 min-w-0">
                                        <span className="text-gray-400 group-hover:text-green-400 transition-colors flex-shrink-0">
                                            {isExpanded ? (
                                                <FiChevronDown className="w-4 h-4" />
                                            ) : (
                                                <FiChevronRight className="w-4 h-4" />
                                            )}
                                        </span>
                                        <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors truncate">
                                            {category.name}
                                        </span>
                                    </div>
                                    {allCompleted && (
                                        <FiCheck className="w-4 h-4 text-green-400 flex-shrink-0" />
                                    )}
                                </button>

                                {/* Category Progress Bar */}
                                {isExpanded && categoryProgress > 0 && categoryProgress < 100 && (
                                    <div className="mx-3 mt-1 mb-2">
                                        <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-green-500 transition-all duration-300"
                                                style={{ width: `${categoryProgress}%` }}
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Sections */}
                                {isExpanded && (
                                    <div className="ml-2 mt-1 space-y-0.5">
                                        {category.sections.map((section, index) => {
                                            const isActive = activeSection === section.id;
                                            const isCompleted = completedSections.has(section.id);
                                            const hasSubsections = section.subsections && section.subsections.length > 0;

                                            return (
                                                <button
                                                    key={section.id}
                                                    onClick={() => onSectionClick(section.id)}
                                                    className={`w-full text-left flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${isActive
                                                            ? 'bg-green-500/20 text-green-400 font-medium'
                                                            : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                                                        }`}
                                                >
                                                    {/* Status Indicator */}
                                                    <span className={`w-5 h-5 rounded-md flex items-center justify-center text-xs flex-shrink-0 ${isCompleted
                                                            ? 'bg-green-500 text-white'
                                                            : isActive
                                                                ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                                                                : 'bg-gray-800 text-gray-500'
                                                        }`}>
                                                        {isCompleted ? (
                                                            <FiCheck className="w-3 h-3" />
                                                        ) : (
                                                            <span>{index + 1}</span>
                                                        )}
                                                    </span>

                                                    {/* Section Title */}
                                                    <span className="flex-1 truncate">{section.title}</span>

                                                    {/* Subsection Count */}
                                                    {hasSubsections && (
                                                        <span className="text-xs text-gray-500 flex-shrink-0">
                                                            {section.subsections!.length}
                                                        </span>
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </nav>
            </div>

            {/* Footer - Quick Links */}
            <div className="p-4 border-t border-gray-800 bg-gray-900">
                <Link
                    href={`/quiz/${topicId}`}
                    className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
                >
                    <FiBookOpen className="w-4 h-4" />
                    <span>Take Quiz</span>
                </Link>
            </div>
        </div>
    );
}
