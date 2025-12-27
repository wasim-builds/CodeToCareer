'use client';

import React, { useState, useEffect } from 'react';
import { Question, Difficulty, QuizResult } from '@/types/quiz';
import { useQuiz } from '@/contexts/QuizContext';
import { useGamification } from '@/contexts/GamificationContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getTopicIcon } from '@/data/topicIcons';
import { FiArrowLeft, FiClock, FiCheckCircle, FiXCircle, FiAward, FiZap, FiChevronLeft, FiChevronRight, FiFlag, FiAlertCircle } from 'react-icons/fi';
import QuizTimer from './QuizTimer';
import { formatTime, calculateTimeBonus, getTimeEfficiency } from '@/lib/timerUtils';
import BookmarkButton from './BookmarkButton';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';
import KeyboardShortcutsHelp, { useKeyboardHelp } from '@/components/KeyboardShortcutsHelp';

interface QuizComponentProps {
  questions: Question[];
  topicId: string;
  topicName: string;
  difficulty?: Difficulty;
  timedMode?: boolean;
  timeLimit?: number;
}

export default function QuizComponent({
  questions,
  topicId,
  topicName,
  difficulty,
  timedMode = false,
  timeLimit = 0
}: QuizComponentProps) {
  const router = useRouter();
  const { addResult } = useQuiz();
  const { addXP, updateStreak, checkBadges } = useGamification();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [startTime] = useState(Date.now());
  const [timeSpent, setTimeSpent] = useState(0);
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());
  const [timeRemaining, setTimeRemaining] = useState(timeLimit);
  const [showTimeUpModal, setShowTimeUpModal] = useState(false);
  const [lastWarningPercentage, setLastWarningPercentage] = useState<number | null>(null);

  const filteredQuestions = difficulty
    ? questions.filter(q => q.difficulty === difficulty)
    : questions;

  const currentQuestion = filteredQuestions[currentQuestionIndex];
  const { icon: TopicIcon, color, bgColor } = getTopicIcon(topicId);

  // Keyboard shortcuts help
  const keyboardHelp = useKeyboardHelp();

  // Keyboard shortcuts for quiz navigation
  useKeyboardShortcuts({
    '1': () => !showResult && currentQuestion && handleAnswerSelect(0),
    '2': () => !showResult && currentQuestion && handleAnswerSelect(1),
    '3': () => !showResult && currentQuestion && handleAnswerSelect(2),
    '4': () => !showResult && currentQuestion && handleAnswerSelect(3),
    'enter': () => !showResult && handleNext(),
    'n': () => !showResult && handleNext(),
    'p': () => !showResult && handlePrevious(),
    'f': () => !showResult && toggleFlag(),
    'b': () => !showResult && currentQuestion && toggleBookmark(),
  }, { enabled: !showResult && !showTimeUpModal });

  // Helper for bookmark toggle
  const toggleBookmark = () => {
    // This will be handled by the BookmarkButton component
    // We'll just trigger a click on it
    const bookmarkButton = document.querySelector('[title="My Bookmarks"]') as HTMLButtonElement;
    if (bookmarkButton) {
      bookmarkButton.click();
    }
  };

  useEffect(() => {
    if (showResult) return;

    const timer = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      setTimeSpent(elapsed);

      if (timedMode && timeLimit > 0) {
        const remaining = Math.max(0, timeLimit - elapsed);
        setTimeRemaining(remaining);

        // Auto-submit when time runs out
        if (remaining === 0 && !showTimeUpModal) {
          setShowTimeUpModal(true);
        }

        // Show warnings at 50% and 25%
        const percentage = (remaining / timeLimit) * 100;
        if (percentage <= 25 && (lastWarningPercentage === null || lastWarningPercentage > 25)) {
          setLastWarningPercentage(25);
        } else if (percentage <= 50 && (lastWarningPercentage === null || lastWarningPercentage > 50)) {
          setLastWarningPercentage(50);
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [startTime, timedMode, timeLimit, showTimeUpModal, lastWarningPercentage, showResult]);

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    // Auto-save answer
    setAnswers(prev => ({ ...prev, [currentQuestionIndex]: index }));
  };

  const toggleFlag = () => {
    setFlaggedQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(currentQuestionIndex)) {
        newSet.delete(currentQuestionIndex);
      } else {
        newSet.add(currentQuestionIndex);
      }
      return newSet;
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(answers[currentQuestionIndex + 1] ?? null);
    } else {
      // Quiz completed
      const finalTime = Math.floor((Date.now() - startTime) / 1000);
      setTimeSpent(finalTime);
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(answers[currentQuestionIndex - 1] ?? null);
    }
  };

  const jumpToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
    setSelectedAnswer(answers[index] ?? null);
  };

  const calculateScore = () => {
    let correct = 0;
    filteredQuestions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        correct++;
      }
    });
    return {
      correct,
      total: filteredQuestions.length,
      score: filteredQuestions.length > 0 ? Math.round((correct / filteredQuestions.length) * 100) : 0
    };
  };

  const handleFinish = () => {
    const scoreData = calculateScore();
    const timeBonus = timedMode && timeLimit > 0 ? calculateTimeBonus(timeSpent, timeLimit) : 0;

    const result: QuizResult = {
      topicId,
      difficulty: difficulty || 'medium',
      score: scoreData.score,
      totalQuestions: scoreData.total,
      correctAnswers: scoreData.correct,
      incorrectAnswers: scoreData.total - scoreData.correct,
      timeSpent,
      timestamp: new Date(),
      timedMode,
      timeLimit: timedMode ? timeLimit : undefined,
      timeBonus
    };
    addResult(result);

    // Add XP based on score + time bonus
    const xpEarned = Math.round(scoreData.score * 0.5) + 10 + timeBonus;
    addXP(xpEarned);
    updateStreak();

    router.push(`/quiz/${topicId}/results`);
  };

  const handleTimeUp = () => {
    setShowTimeUpModal(false);
    setShowResult(true);
  };

  const handleContinueUntimed = () => {
    setShowTimeUpModal(false);
    // Continue in untimed mode
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (showResult) {
    const scoreData = calculateScore();
    const grade = scoreData.score >= 90 ? 'A+' : scoreData.score >= 80 ? 'A' : scoreData.score >= 70 ? 'B' : scoreData.score >= 60 ? 'C' : scoreData.score >= 50 ? 'D' : 'F';
    const gradeColor = scoreData.score >= 80 ? 'text-green-400' : scoreData.score >= 60 ? 'text-yellow-400' : 'text-red-400';

    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-8">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-8 text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Quiz Completed!</h2>
              <p className="text-green-100">{topicName}</p>
            </div>

            {/* Score Display */}
            <div className="p-8">
              <div className="text-center mb-8">
                <div className={`text-7xl font-bold ${gradeColor} mb-2`}>{grade}</div>
                <div className="text-4xl font-bold text-white">{scoreData.score}%</div>
                <p className="text-gray-400 mt-2">
                  {scoreData.score >= 80 ? 'Excellent work! 🎉' : scoreData.score >= 60 ? 'Good job! Keep practicing 👍' : 'Keep learning! You got this 💪'}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-gray-700/50 rounded-xl p-4 text-center">
                  <FiCheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{scoreData.correct}</div>
                  <div className="text-xs text-gray-400">Correct</div>
                </div>
                <div className="bg-gray-700/50 rounded-xl p-4 text-center">
                  <FiXCircle className="w-6 h-6 text-red-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{scoreData.total - scoreData.correct}</div>
                  <div className="text-xs text-gray-400">Wrong</div>
                </div>
                <div className="bg-gray-700/50 rounded-xl p-4 text-center">
                  <FiClock className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{formatTime(timeSpent)}</div>
                  <div className="text-xs text-gray-400">Time</div>
                </div>
                <div className="bg-gray-700/50 rounded-xl p-4 text-center">
                  <FiZap className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">+{Math.round(scoreData.score * 0.5) + 10}</div>
                  <div className="text-xs text-gray-400">XP Earned</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleFinish}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <FiAward className="w-5 h-5" />
                  Save & View Details
                </button>
                <button
                  onClick={() => router.push('/quiz')}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors"
                >
                  Back to Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400">No questions available for this topic.</p>
          <Link href="/quiz" className="text-green-400 hover:text-green-300 mt-4 inline-block">
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const answeredCount = Object.keys(answers).length;
  const progress = ((currentQuestionIndex + 1) / filteredQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Keyboard Shortcuts Help */}
      <KeyboardShortcutsHelp isOpen={keyboardHelp.isOpen} onClose={keyboardHelp.close} />

      {/* Time's Up Modal */}
      {showTimeUpModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-2xl border-2 border-red-500 max-w-md w-full p-8 text-center animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiAlertCircle className="w-10 h-10 text-red-500" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Time's Up!</h2>
            <p className="text-gray-400 mb-6">
              The quiz timer has expired. You can submit your answers now or continue without a timer.
            </p>
            <div className="space-y-3">
              <button
                onClick={handleTimeUp}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
              >
                Submit Quiz
              </button>
              <button
                onClick={handleContinueUntimed}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
              >
                Continue Untimed
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Bar */}
      <div className="sticky top-0 z-40 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link
              href={`/quiz/${topicId}`}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <FiArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Exit Quiz</span>
            </Link>

            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 ${bgColor} rounded-lg flex items-center justify-center`}>
                <TopicIcon className={`w-4 h-4 ${color}`} />
              </div>
              <span className="font-semibold text-white hidden sm:inline">{topicName}</span>
            </div>

            <div className="flex items-center gap-4">
              {timedMode && timeLimit > 0 ? (
                <QuizTimer
                  timeRemaining={timeRemaining}
                  timeLimit={timeLimit}
                  size="small"
                  showWarning={true}
                />
              ) : (
                <div className="flex items-center gap-2 text-gray-400">
                  <FiClock className="w-4 h-4" />
                  <span className="font-mono">{formatTime(timeSpent)}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <div className="flex-1">
            {/* Progress */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">
                  Question <span className="text-white font-semibold">{currentQuestionIndex + 1}</span> of {filteredQuestions.length}
                </span>
                <span className="text-sm text-gray-400">
                  {answeredCount} answered
                </span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden mb-6">
              {/* Question Header */}
              <div className="px-6 py-4 border-b border-gray-700 flex items-center justify-between">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${currentQuestion.difficulty === 'easy' ? 'bg-green-500/20 text-green-400' :
                  currentQuestion.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                  {currentQuestion.difficulty === 'easy' ? '🌱' : currentQuestion.difficulty === 'medium' ? '⚡' : '🔥'}
                  {currentQuestion.difficulty.charAt(0).toUpperCase() + currentQuestion.difficulty.slice(1)}
                </span>
                <div className="flex items-center gap-2">
                  <BookmarkButton
                    question={currentQuestion}
                    topicId={topicId}
                    topicName={topicName}
                  />
                  <button
                    onClick={toggleFlag}
                    className={`p-2 rounded-lg transition-colors ${flaggedQuestions.has(currentQuestionIndex)
                      ? 'bg-orange-500/20 text-orange-400'
                      : 'text-gray-500 hover:text-gray-300 hover:bg-gray-700'
                      }`}
                    title="Flag for review"
                  >
                    <FiFlag className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Question */}
              <div className="p-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-white mb-8 leading-relaxed">
                  {currentQuestion.question}
                </h2>

                {/* Options */}
                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 group ${selectedAnswer === index
                        ? 'border-blue-500 bg-blue-500/10'
                        : 'border-gray-700 hover:border-gray-500 hover:bg-gray-700/50'
                        }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-semibold text-sm transition-colors ${selectedAnswer === index
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-700 text-gray-400 group-hover:bg-gray-600'
                          }`}>
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className={`flex-1 ${selectedAnswer === index ? 'text-white' : 'text-gray-300'}`}>
                          {option}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors border border-gray-700"
              >
                <FiChevronLeft className="w-5 h-5" />
                Previous
              </button>
              <button
                onClick={handleNext}
                className={`flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-colors ${currentQuestionIndex === filteredQuestions.length - 1
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
              >
                {currentQuestionIndex === filteredQuestions.length - 1 ? 'Finish Quiz' : 'Next'}
                <FiChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Question Navigator Sidebar */}
          <div className="lg:w-64">
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 sticky top-20">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Question Navigator</h3>
              <div className="grid grid-cols-5 gap-2">
                {filteredQuestions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => jumpToQuestion(index)}
                    className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${index === currentQuestionIndex
                      ? 'bg-green-500 text-white ring-2 ring-green-400 ring-offset-2 ring-offset-gray-800'
                      : answers[index] !== undefined
                        ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border border-blue-500/50'
                        : flaggedQuestions.has(index)
                          ? 'bg-orange-500/20 text-orange-400 hover:bg-orange-500/30'
                          : index < currentQuestionIndex
                            ? 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                            : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                      }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700 space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded ring-1 ring-green-400"></div>
                  <span className="text-gray-400">Current</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500/30 rounded border border-blue-500/50"></div>
                  <span className="text-gray-400">Answered ({answeredCount})</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-600 rounded"></div>
                  <span className="text-gray-400">Viewed ({Math.max(0, currentQuestionIndex - answeredCount)})</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-700 rounded"></div>
                  <span className="text-gray-400">Not Visited ({filteredQuestions.length - currentQuestionIndex - 1})</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
