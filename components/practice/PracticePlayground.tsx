"use client";

import { useMemo, useState, useEffect } from 'react';
import { usePractice } from '@/contexts/PracticeContext';
import { PracticeProblem, PracticeTestCase } from '@/types/practice';
import { FiPlay, FiCheck, FiX, FiChevronDown, FiCode } from 'react-icons/fi';
import { EditorToolbar } from './EditorToolbar';
import { MonacoCodeEditor } from './MonacoCodeEditor';
import { TestResultsPanel } from './TestResultsPanel';
import { SuccessConfetti } from './SuccessConfetti';
import { SolutionViewer } from './SolutionViewer';
import { YouTubeVideos } from '@/components/youtube/YouTubeVideos';
import { AICodeReview } from './AICodeReview';

interface RunResult {
  id: string;
  pass: boolean;
  expected: unknown;
  actual: unknown;
  type: PracticeTestCase['type'];
  error?: string;
}

interface PracticePlaygroundProps {
  problem: PracticeProblem;
}

const SUPPORTED_LANGUAGES = [
  { value: 'python', label: 'Python', icon: '🐍' },
  { value: 'javascript', label: 'JavaScript', icon: '📜' },
  { value: 'typescript', label: 'TypeScript', icon: '📘' },
  { value: 'java', label: 'Java', icon: '☕' },
  { value: 'cpp', label: 'C++', icon: '⚙️' },
  { value: 'c', label: 'C', icon: '🔧' },
  { value: 'csharp', label: 'C#', icon: '💜' },
  { value: 'rust', label: 'Rust', icon: '🦀' },
  { value: 'go', label: 'Go', icon: '🐹' },
];

export function PracticePlayground({ problem }: PracticePlaygroundProps) {
  // Language icons mapping
  const LANGUAGE_CONFIG: Record<string, { label: string; icon: string }> = {
    python: { label: 'Python', icon: '🐍' },
    javascript: { label: 'JavaScript', icon: '📜' },
    typescript: { label: 'TypeScript', icon: '📘' },
    java: { label: 'Java', icon: '☕' },
    cpp: { label: 'C++', icon: '⚙️' },
    c: { label: 'C', icon: '🔧' },
    csharp: { label: 'C#', icon: '💜' },
    rust: { label: 'Rust', icon: '🦀' },
    go: { label: 'Go', icon: '🐹' },
  };

  // Get available languages from problem's starter code
  const availableLanguages = useMemo(() =>
    problem.starterCode.map(sc => ({
      value: sc.language,
      label: LANGUAGE_CONFIG[sc.language]?.label || sc.language,
      icon: LANGUAGE_CONFIG[sc.language]?.icon || '📝'
    })),
    [problem.starterCode]
  );

  // Initialize with first available language from problem
  const initialLanguage = problem.starterCode[0]?.language || 'javascript';
  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);
  const [code, setCode] = useState(() => {
    const starterCode = problem.starterCode.find(s => s.language === initialLanguage);
    return starterCode?.code || '';
  });
  const [results, setResults] = useState<RunResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState<'description' | 'submissions' | 'solution' | 'review'>('description');
  const [solutionUnlocked, setSolutionUnlocked] = useState(false);
  const [showTestCase, setShowTestCase] = useState(true);
  const [fontSize, setFontSize] = useState(14);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [executionTime, setExecutionTime] = useState<number | undefined>();
  const { addAttempt, getAttemptsForProblem } = usePractice();

  // Load font size from localStorage
  useEffect(() => {
    const savedFontSize = localStorage.getItem('editor-font-size');
    if (savedFontSize) {
      setFontSize(parseInt(savedFontSize, 10));
    }
  }, []);

  // Handle ESC key to exit full-screen
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullScreen) {
        setIsFullScreen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isFullScreen]);


  function getStarterCode(lang: string): string {
    // Try to find the starter code for the selected language
    const starterForLang = problem.starterCode.find(s => s.language === lang);
    if (starterForLang) {
      return starterForLang.code;
    }

    // Get function name from existing starter code (fallback to 'solution')
    const funcName = problem.starterCode[0]?.functionName || 'solution';

    // Default templates if missing from problem data
    if (lang === 'rust') {
      return `// Write your solution here
fn ${funcName}() {
    // Implementation
}

fn main() {
    // Test your code
}`;
    }

    if (lang === 'go') {
      return `package main
import "fmt"

// Write your solution here
func ${funcName}() {
    // Implementation
}

func main() {
    // Test your code
}`;
    }

    // Fallback to first available language if selected language not found
    if (problem.starterCode.length > 0) {
      return problem.starterCode[0].code;
    }

    // Ultimate fallback
    return `// No starter code available for ${lang}`;
  }

  const passCount = results.filter((r) => r.pass).length;
  const sampleResults = results.filter((r) => r.type === 'sample');
  const allPassed = results.length > 0 && results.every((r) => r.pass);
  const attempts = getAttemptsForProblem(problem.id).sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));

  async function runTests() {
    const started = performance.now();
    setIsRunning(true);
    setResults([]);
    setShowConfetti(false); // Reset confetti
    try {
      const res = await fetch('/api/practice/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language: selectedLanguage,
          code,
          functionName: problem.starterCode[0]?.functionName || 'solution',
          tests: problem.tests,
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || 'Failed to run tests');
      }

      const data = await res.json();
      const runResults = data.results as RunResult[];
      const execTime = Math.round(performance.now() - started);
      setResults(runResults);
      setExecutionTime(execTime);

      const allPass = runResults.length > 0 && runResults.every((r: RunResult) => r.pass);

      // Trigger confetti if all tests pass
      if (allPass) {
        setShowConfetti(true);
      }
      addAttempt({
        problemId: problem.id,
        status: allPass ? 'passed' : 'failed',
        language: selectedLanguage as 'javascript' | 'typescript',
        code,
        runtimeMs: execTime,
        testResults: runResults,
        passed: allPass,
        timestamp: Date.now(),
        createdAt: new Date().toISOString(),
      });
    } catch (error) {
      setResults([
        {
          id: 'error',
          pass: false,
          expected: null,
          actual: null,
          type: 'sample',
          error: error instanceof Error ? error.message : 'Unknown error',
        },
      ]);

      addAttempt({
        problemId: problem.id,
        status: 'failed',
        language: selectedLanguage as 'javascript' | 'typescript',
        code,
        runtimeMs: Math.round(performance.now() - started),
        testResults: [],
        passed: false,
        timestamp: Date.now(),
        createdAt: new Date().toISOString(),
      });
    } finally {
      setIsRunning(false);
    }
  }

  function handleLanguageChange(lang: string) {
    setSelectedLanguage(lang as any);
    setCode(getStarterCode(lang));
  }

  function handleFontSizeChange(delta: number) {
    const newSize = Math.max(12, Math.min(20, fontSize + delta));
    setFontSize(newSize);
    localStorage.setItem('editor-font-size', newSize.toString());
  }

  function handleResetCode() {
    if (confirm('Are you sure you want to reset your code? This will discard all your changes.')) {
      setCode(getStarterCode(selectedLanguage));
    }
  }

  function toggleFullScreen() {
    setIsFullScreen(!isFullScreen);
  }


  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    const textarea = e.currentTarget;
    const { selectionStart, selectionEnd, value } = textarea;

    // Handle Tab key
    if (e.key === 'Tab') {
      e.preventDefault();
      const spaces = '    '; // 4 spaces
      const newValue = value.substring(0, selectionStart) + spaces + value.substring(selectionEnd);
      setCode(newValue);

      // Set cursor position after the inserted spaces
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = selectionStart + spaces.length;
      }, 0);
    }

    // Handle Enter key with auto-indentation
    if (e.key === 'Enter') {
      e.preventDefault();

      // Get the current line
      const lineStart = value.lastIndexOf('\n', selectionStart - 1) + 1;
      const lineEnd = value.indexOf('\n', selectionStart);
      const currentLine = value.substring(lineStart, lineEnd === -1 ? value.length : lineEnd);

      // Calculate indentation of current line
      const indentMatch = currentLine.match(/^\s*/);
      const currentIndent = indentMatch ? indentMatch[0] : '';

      // Check if current line ends with { or : (for languages that use these for blocks)
      const trimmedLine = currentLine.trim();
      const needsExtraIndent = trimmedLine.endsWith('{') || trimmedLine.endsWith(':');
      const extraIndent = needsExtraIndent ? '    ' : '';

      // Insert newline with proper indentation
      const newValue = value.substring(0, selectionStart) + '\n' + currentIndent + extraIndent + value.substring(selectionEnd);
      setCode(newValue);

      // Set cursor position
      setTimeout(() => {
        const newPosition = selectionStart + 1 + currentIndent.length + extraIndent.length;
        textarea.selectionStart = textarea.selectionEnd = newPosition;
      }, 0);
    }
  }

  return (
    <div className="flex flex-col h-[calc(100vh-200px)] bg-gray-900">
      {/* Split Pane Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel - Problem Description (Hidden in full-screen) */}
        {!isFullScreen && (
          <div className="w-1/2 border-r border-gray-800 flex flex-col">
            {/* Tabs */}

            <div className="flex items-center gap-2 p-1.5 mx-4 mt-4 mb-2 bg-gray-800/50 rounded-xl border border-gray-800">
              <button
                onClick={() => setActiveTab('description')}
                className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${activeTab === 'description'
                  ? 'bg-gray-700 text-white shadow-sm ring-1 ring-inset ring-gray-600'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
                  }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('submissions')}
                className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${activeTab === 'submissions'
                  ? 'bg-gray-700 text-white shadow-sm ring-1 ring-inset ring-gray-600'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
                  }`}
              >
                Submissions
              </button>
              <button
                onClick={() => setActiveTab('review')}
                className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${activeTab === 'review'
                  ? 'bg-gray-700 text-white shadow-sm ring-1 ring-inset ring-gray-600'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
                  }`}
              >
                <span>AI Review</span>
                <span className="text-xs">✨</span>
              </button>
              <button
                onClick={() => setActiveTab('solution')}
                className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${activeTab === 'solution'
                  ? 'bg-gray-700 text-white shadow-sm ring-1 ring-inset ring-gray-600'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
                  }`}
              >
                <span>Solution</span>
                {problem.solutions && problem.solutions.length > 0 && (
                  <span className="text-xs">🔓</span>
                )}
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-900">
              {activeTab === 'description' ? (
                <div className="space-y-4 text-gray-300">
                  {/* Title */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h2 className="text-2xl font-bold text-white">1. {problem.title}</h2>
                      <span
                        className={`px - 2 py - 1 rounded text - xs font - semibold ${problem.difficulty === 'easy'
                          ? 'bg-green-500/20 text-green-400'
                          : problem.difficulty === 'medium'
                            ? 'bg-yellow-500/20 text-yellow-400'
                            : 'bg-red-500/20 text-red-400'
                          } `}
                      >
                        {problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>⭐ 8</span>
                      <span>•</span>
                      <span>💬 1</span>
                    </div>
                  </div>

                  {/* Problem Description */}
                  <div>
                    <p className="text-gray-300 leading-relaxed">{problem.prompt}</p>
                  </div>

                  {/* Examples */}
                  <div className="space-y-3">
                    {problem.examples.map((ex, idx) => (
                      <div key={idx} className="bg-gray-800/50 rounded-lg p-4">
                        <p className="font-semibold text-white mb-2">Example {idx + 1}:</p>
                        <div className="space-y-1 font-mono text-sm">
                          <div>
                            <span className="text-gray-400">Input:</span>{' '}
                            <span className="text-white">{ex.input}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Output:</span>{' '}
                            <span className="text-white">{ex.output}</span>
                          </div>
                          {ex.explanation && (
                            <div>
                              <span className="text-gray-400">Explanation:</span>{' '}
                              <span className="text-gray-300">{ex.explanation}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Constraints */}
                  <div>
                    <p className="font-semibold text-white mb-2">Constraints:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                      {problem.constraints.map((constraint, idx) => (
                        <li key={idx} className="font-mono">{constraint}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Topics */}
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Topics:</p>
                    <div className="flex flex-wrap gap-2">
                      {problem.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs hover:bg-gray-700 cursor-pointer"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hints */}
                  {problem.hints && problem.hints.length > 0 && (
                    <div>
                      <details className="group">
                        <summary className="cursor-pointer font-semibold text-white hover:text-green-400">
                          💡 Hints ({problem.hints.length})
                        </summary>
                        <ul className="mt-2 space-y-2">
                          {problem.hints.map((hint, idx) => (
                            <li key={idx} className="bg-gray-800/50 rounded p-3 text-sm">
                              <span className="font-semibold text-green-400">Hint {idx + 1}:</span>{' '}
                              {hint}
                            </li>
                          ))}
                        </ul>
                      </details>
                    </div>
                  )}

                  {/* Video Tutorials */}
                  {problem.topics && problem.topics.length > 0 && (
                    <div>
                      <details className="group">
                        <summary className="cursor-pointer font-semibold text-white hover:text-red-400 flex items-center gap-2">
                          🎥 Video Tutorials
                        </summary>
                        <div className="mt-4">
                          <YouTubeVideos topicId={problem.topics[0]} limit={2} />
                        </div>
                      </details>
                    </div>
                  )}
                </div>
              ) : activeTab === 'submissions' ? (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white mb-4">Your Submissions</h3>
                  {attempts.length === 0 ? (
                    <p className="text-gray-400 text-sm">No submissions yet. Run your code to see results!</p>
                  ) : (
                    <div className="space-y-2">
                      {attempts.slice(0, 10).map((attempt, idx) => (
                        <div
                          key={`${attempt.createdAt} -${idx} `}
                          className="bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-colors"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              {attempt.status === 'passed' ? (
                                <FiCheck className="w-5 h-5 text-green-400" />
                              ) : (
                                <FiX className="w-5 h-5 text-red-400" />
                              )}
                              <span
                                className={`font - semibold ${attempt.status === 'passed' ? 'text-green-400' : 'text-red-400'
                                  } `}
                              >
                                {attempt.status === 'passed' ? 'Accepted' : 'Wrong Answer'}
                              </span>
                            </div>
                            <span className="text-xs text-gray-400">
                              {new Date(attempt.createdAt || Date.now()).toLocaleString()}
                            </span>
                          </div>
                          <div className="flex items-center gap-4 text-xs text-gray-400">
                            <span className="px-2 py-1 bg-gray-700 rounded">
                              {availableLanguages.find((l) => l.value === attempt.language)?.label || attempt.language}
                            </span>
                            {attempt.runtimeMs !== undefined && <span>Runtime: {attempt.runtimeMs}ms</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : activeTab === 'review' ? (
                <div className="h-full overflow-y-auto">
                  <AICodeReview
                    code={code}
                    language={selectedLanguage}
                    problemId={problem.id}
                    problemContext={problem.prompt}
                  />
                </div>
              ) : (
                <div className="h-full">
                  {problem.solutions && problem.solutions.length > 0 ? (
                    <SolutionViewer solutions={problem.solutions} />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-64 text-center px-4">
                      <div className="text-6xl mb-4">🔒</div>
                      <h3 className="text-xl font-semibold text-white mb-2">Solution Not Available</h3>
                      <p className="text-gray-400 max-w-md">
                        This problem doesn&apos;t have a detailed solution yet. Try solving it yourself or check back later!
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Right Panel - Code Editor */}
        <div className={`flex flex-col bg-gray-950 ${isFullScreen ? 'w-full' : 'w-1/2'}`}>
          {/* Language Selector & Actions */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800 bg-gray-900">
            <div className="relative group">
              <button className="flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded text-sm transition-colors">
                <FiCode className="w-4 h-4" />
                <span>{SUPPORTED_LANGUAGES.find((l) => l.value === selectedLanguage)?.label || 'Select Language'}</span>
                <FiChevronDown className="w-4 h-4" />
              </button>

              {/* Dropdown */}
              <div className="absolute top-full left-0 mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 min-w-[180px]">
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <button
                    key={lang.value}
                    onClick={() => handleLanguageChange(lang.value)}
                    className={`w - full text - left px - 4 py - 2 text - sm hover: bg - gray - 700 transition - colors first: rounded - t - lg last: rounded - b - lg flex items - center gap - 2 ${selectedLanguage === lang.value ? 'bg-gray-700 text-green-400' : 'text-gray-300'
                      } `}
                  >
                    <span>{lang.icon}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={runTests}
                disabled={isRunning}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded text-sm transition-colors disabled:opacity-50"
              >
                <FiPlay className="w-4 h-4" />
                {isRunning ? 'Running...' : 'Run'}
              </button>
              <button
                onClick={runTests}
                disabled={isRunning}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded text-sm transition-colors disabled:opacity-50 font-medium"
              >
                {isRunning ? 'Submitting...' : 'Submit'}
              </button>

              {/* Editor Toolbar Controls */}
              <EditorToolbar
                fontSize={fontSize}
                onFontSizeChange={handleFontSizeChange}
                onReset={handleResetCode}
                isFullScreen={isFullScreen}
                onToggleFullScreen={toggleFullScreen}
              />
            </div>
          </div>

          {/* Code Editor */}
          <div className="flex-1 overflow-hidden">
            <MonacoCodeEditor
              value={code}
              onChange={setCode}
              language={selectedLanguage}
              onRun={runTests}
              fontSize={fontSize}
            />
          </div>

          {/* Test Cases Section */}
          <div className="border-t border-gray-800 bg-gray-900">
            <button
              onClick={() => setShowTestCase(!showTestCase)}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-300 hover:bg-gray-800 transition-colors"
            >
              <span>Testcase</span>
              <FiChevronDown className={`w - 4 h - 4 transition - transform ${showTestCase ? 'rotate-180' : ''} `} />
            </button>

            {showTestCase && (
              <div className="px-4 pb-4 max-h-64 overflow-y-auto">
                {results.length === 0 ? (
                  <div className="space-y-3">
                    {problem.tests.filter(t => t.type === 'sample').slice(0, 2).map((test, idx) => (
                      <div key={test.id} className="bg-gray-800 rounded p-3">
                        <p className="text-xs text-gray-400 mb-2">Case {idx + 1}</p>
                        <div className="space-y-1 text-sm font-mono">
                          {Object.entries(test.input as Record<string, unknown>).map(([key, value]) => (
                            <div key={key}>
                              <span className="text-gray-400">{key} =</span>
                              <div className="mt-1 bg-gray-900 rounded px-3 py-2 text-gray-300">
                                {JSON.stringify(value)}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-2">
                    {/* Results Header */}
                    <div className="flex items-center gap-2 mb-2">
                      {allPassed ? (
                        <div className="flex items-center gap-2 text-green-400">
                          <FiCheck className="w-5 h-5" />
                          <span className="font-semibold">Accepted</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-red-400">
                          <FiX className="w-5 h-5" />
                          <span className="font-semibold">{passCount}/{results.length} Test Cases Passed</span>
                        </div>
                      )}
                    </div>

                    {/* Test Results */}
                    {results.map((result, idx) => (
                      <div
                        key={result.id}
                        className={`rounded - lg border p - 3 ${result.pass
                          ? 'bg-green-500/10 border-green-500/30'
                          : 'bg-red-500/10 border-red-500/30'
                          } `}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-white">Test Case {idx + 1}</span>
                          <span
                            className={`text - xs px - 2 py - 1 rounded ${result.pass ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                              } `}
                          >
                            {result.pass ? 'Passed' : 'Failed'}
                          </span>
                        </div>
                        {result.error ? (
                          <div className="text-sm text-red-400 font-mono">{result.error}</div>
                        ) : (
                          <div className="space-y-2 text-sm font-mono">
                            <div>
                              <span className="text-gray-400">Expected:</span>
                              <div className="mt-1 bg-gray-800 rounded px-3 py-2 text-gray-300">
                                {JSON.stringify(result.expected)}
                              </div>
                            </div>
                            <div>
                              <span className="text-gray-400">Output:</span>
                              <div className={`mt - 1 rounded px - 3 py - 2 ${result.pass ? 'bg-gray-800 text-gray-300' : 'bg-red-900/20 text-red-300'
                                } `}>
                                {JSON.stringify(result.actual)}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Success Confetti */}
      <SuccessConfetti trigger={showConfetti} />
    </div>
  );
}
