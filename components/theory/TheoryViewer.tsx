'use client';

import React, { useState, useEffect, useRef } from 'react';
import { TheoryTopic, TheorySection } from '@/types/theory';
import Link from 'next/link';
import { 
  FiChevronDown, 
  FiChevronRight, 
  FiArrowLeft,
  FiBookmark,
  FiClock,
  FiLayers,
  FiCheck,
  FiPlay,
  FiMenu,
  FiX,
  FiBookOpen,
  FiAward
} from 'react-icons/fi';
import { getTopicIcon } from '@/data/topicIcons';

interface TheoryViewerProps {
  theory: TheoryTopic;
}

export default function TheoryViewer({ theory }: TheoryViewerProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set([theory.sections[0]?.id]));
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set());
  const [activeSection, setActiveSection] = useState<string>(theory.sections[0]?.id || '');
  const [showToc, setShowToc] = useState(false);
  const [readProgress, setReadProgress] = useState(0);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const topicIconData = getTopicIcon(theory.topicId);
  const TopicIcon = topicIconData.icon;

  // Calculate reading time (approx 200 words per minute)
  const totalContent = theory.sections.reduce((acc, section) => {
    const sectionContent = section.content || '';
    const subsectionContent = section.subsections?.reduce((s, sub) => s + (sub.content || ''), '') || '';
    return acc + sectionContent + subsectionContent;
  }, '');
  const wordCount = totalContent.split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  // Load completed sections from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`theory_progress_${theory.topicId}`);
    if (saved) {
      setCompletedSections(new Set(JSON.parse(saved)));
    }
  }, [theory.topicId]);

  // Save progress and update read percentage
  useEffect(() => {
    if (completedSections.size > 0) {
      localStorage.setItem(`theory_progress_${theory.topicId}`, JSON.stringify([...completedSections]));
    }
    const progress = (completedSections.size / theory.sections.length) * 100;
    setReadProgress(progress);
  }, [completedSections, theory.sections.length, theory.topicId]);

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
    setActiveSection(sectionId);
  };

  const markSectionComplete = (sectionId: string) => {
    const newCompleted = new Set(completedSections);
    if (newCompleted.has(sectionId)) {
      newCompleted.delete(sectionId);
    } else {
      newCompleted.add(sectionId);
    }
    setCompletedSections(newCompleted);
  };

  const scrollToSection = (sectionId: string) => {
    setShowToc(false);
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (!expandedSections.has(sectionId)) {
      toggleSection(sectionId);
    }
  };

  const renderSection = (section: TheorySection, index: number) => {
    const isExpanded = expandedSections.has(section.id);
    const hasSubsections = section.subsections && section.subsections.length > 0;
    const isCompleted = completedSections.has(section.id);

    return (
      <div 
        key={section.id} 
        ref={(el) => { sectionRefs.current[section.id] = el; }}
        className="mb-6"
      >
        {/* Section Header */}
        <button
          onClick={() => toggleSection(section.id)}
          className={`w-full text-left flex items-center gap-3 p-4 rounded-xl transition-all duration-300 group ${
            isExpanded 
              ? 'bg-gradient-to-r from-green-600/20 to-green-500/10 border-2 border-green-500/50' 
              : 'bg-gray-800/50 border-2 border-gray-700 hover:border-gray-600'
          }`}
        >
          {/* Section Number */}
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold ${
            isCompleted 
              ? 'bg-green-500 text-white' 
              : isExpanded 
                ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                : 'bg-gray-700 text-gray-400'
          }`}>
            {isCompleted ? <FiCheck className="w-5 h-5" /> : index + 1}
          </div>

          {/* Section Title */}
          <div className="flex-1">
            <h3 className={`font-bold text-lg ${
              isExpanded ? 'text-green-400' : 'text-white group-hover:text-green-400'
            } transition-colors`}>
              {section.title}
            </h3>
            {hasSubsections && (
              <p className="text-sm text-gray-500 mt-0.5">
                {section.subsections?.length} topics
              </p>
            )}
          </div>

          {/* Expand Icon */}
          <span className={`text-xl transition-transform duration-300 ${
            isExpanded ? 'text-green-400 rotate-180' : 'text-gray-500'
          }`}>
            <FiChevronDown />
          </span>
        </button>

        {/* Section Content */}
        {isExpanded && (
          <div className="mt-4 space-y-4 animate-fadeIn">
            {hasSubsections && section.subsections?.map((subsection, subIndex) => (
              <div
                key={subsection.id}
                className="bg-gray-800/80 rounded-xl p-5 border border-gray-700 hover:border-gray-600 transition-colors ml-4"
              >
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-400 mt-0.5">
                    {index + 1}.{subIndex + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-base mb-3">
                      {subsection.title}
                    </h4>
                    <div className="text-gray-300 leading-relaxed text-[15px] whitespace-pre-line">
                      {subsection.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {!hasSubsections && section.content && (
              <div className="bg-gray-800/80 rounded-xl p-5 border border-gray-700 ml-4">
                <p className="text-gray-300 leading-relaxed text-[15px] whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            )}

            {/* Mark as Complete Button */}
            <div className="flex justify-end ml-4">
              <button
                onClick={() => markSectionComplete(section.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isCompleted
                    ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                <FiCheck className="w-4 h-4" />
                {isCompleted ? 'Completed' : 'Mark as Complete'}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Progress Bar - Fixed at top */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-green-500 to-green-400 transition-all duration-500"
          style={{ width: `${readProgress}%` }}
        />
      </div>

      {/* Mobile TOC Toggle */}
      <button
        onClick={() => setShowToc(!showToc)}
        className="lg:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full shadow-lg flex items-center justify-center text-white"
      >
        {showToc ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
      </button>

      {/* Table of Contents - Sidebar */}
      <div className={`fixed lg:fixed inset-y-0 left-0 w-72 bg-gray-850 border-r border-gray-700 z-40 transform transition-transform duration-300 lg:translate-x-0 ${
        showToc ? 'translate-x-0' : '-translate-x-full'
      }`} style={{ top: '4px' }}>
        <div className="p-4 h-full overflow-y-auto">
          <Link
            href="/quiz"
            className="flex items-center gap-2 text-gray-400 hover:text-green-400 mb-6 text-sm transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>

          <div className="mb-6">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
              Table of Contents
            </h3>
            <nav className="space-y-1">
              {theory.sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${
                    activeSection === section.id
                      ? 'bg-green-500/20 text-green-400'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-md flex items-center justify-center text-xs ${
                    completedSections.has(section.id)
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-700 text-gray-500'
                  }`}>
                    {completedSections.has(section.id) ? <FiCheck className="w-3 h-3" /> : index + 1}
                  </span>
                  <span className="truncate">{section.title}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Progress Stats */}
          <div className="bg-gray-800 rounded-xl p-4 mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Progress</span>
              <span className="text-sm font-bold text-green-400">{Math.round(readProgress)}%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-500 to-green-400 transition-all duration-500"
                style={{ width: `${readProgress}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              {completedSections.size} of {theory.sections.length} sections
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-72 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {/* Back Button - Mobile */}
          <Link
            href="/quiz"
            className="lg:hidden inline-flex items-center gap-2 text-gray-400 hover:text-green-400 mb-6 text-sm"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>

          {/* Hero Section */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-800/50 rounded-2xl p-6 sm:p-8 mb-8 border border-gray-700">
            <div className="flex items-start gap-4 sm:gap-6">
              {/* Topic Icon */}
              <div 
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: topicIconData.bgColor }}
              >
                <TopicIcon className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: topicIconData.color }} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                    📖 Theory
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {theory.topicName}
                </h1>
                <p className="text-gray-400 text-sm sm:text-base">
                  {theory.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap items-center gap-4 mt-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <FiClock className="w-4 h-4 text-blue-400" />
                    <span>{readingTime} min read</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <FiLayers className="w-4 h-4 text-purple-400" />
                    <span>{theory.sections.length} sections</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <FiAward className="w-4 h-4 text-yellow-400" />
                    <span>{Math.round(readProgress)}% complete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-4">
            {theory.sections.map((section, index) => renderSection(section, index))}
          </div>

          {/* Quiz CTA */}
          <div className="mt-10 bg-gradient-to-r from-green-600/20 to-green-500/10 rounded-2xl p-6 sm:p-8 border border-green-500/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <FiPlay className="w-7 h-7 text-green-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white text-lg mb-1">
                  Ready to test your knowledge?
                </h3>
                <p className="text-gray-400 text-sm">
                  Take a quiz on {theory.topicName} to practice what you've learned and earn XP!
                </p>
              </div>
              <Link
                href={`/quiz/${theory.topicId}`}
                className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <FiPlay className="w-4 h-4" />
                Take Quiz
              </Link>
            </div>
          </div>

          {/* Completion Badge */}
          {readProgress === 100 && (
            <div className="mt-6 bg-gradient-to-r from-yellow-600/20 to-yellow-500/10 rounded-2xl p-6 border border-yellow-500/30 text-center">
              <div className="text-5xl mb-3">🎉</div>
              <h3 className="font-bold text-white text-xl mb-2">
                Congratulations!
              </h3>
              <p className="text-gray-400">
                You've completed all sections of {theory.topicName}. Now test your knowledge with a quiz!
              </p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
