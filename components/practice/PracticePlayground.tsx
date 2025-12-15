"use client";

import { useMemo, useState } from 'react';
import { usePractice } from '@/contexts/PracticeContext';
import { PracticeProblem, PracticeTestCase } from '@/types/practice';
import { FiPlay, FiCheck, FiX, FiChevronDown, FiCode } from 'react-icons/fi';

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
];

export function PracticePlayground({ problem }: PracticePlaygroundProps) {
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const [code, setCode] = useState(getStarterCode('python'));
  const [results, setResults] = useState<RunResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState<'description' | 'submissions'>('description');
  const [showTestCase, setShowTestCase] = useState(true);
  const { addAttempt, getAttemptsForProblem } = usePractice();

  function getStarterCode(lang: string): string {
    const templates: Record<string, string> = {
      python: `def ${problem.starterCode[0]?.functionName || 'solution'}(nums, target):\n    # Write your code here\n    pass`,
      javascript: `function ${problem.starterCode[0]?.functionName || 'solution'}(nums, target) {\n    // Write your code here\n}\n\nmodule.exports = ${problem.starterCode[0]?.functionName || 'solution'};`,
      typescript: `function ${problem.starterCode[0]?.functionName || 'solution'}(nums: number[], target: number): number[] {\n    // Write your code here\n    return [];\n}\n\nexport default ${problem.starterCode[0]?.functionName || 'solution'};`,
      java: `class Solution {\n    public int[] ${problem.starterCode[0]?.functionName || 'solution'}(int[] nums, int target) {\n        // Write your code here\n        return new int[]{};\n    }\n}`,
      cpp: `#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> ${problem.starterCode[0]?.functionName || 'solution'}(vector<int>& nums, int target) {\n        // Write your code here\n        return {};\n    }\n};`,
      c: `#include <stdlib.h>\n\nint* ${problem.starterCode[0]?.functionName || 'solution'}(int* nums, int numsSize, int target, int* returnSize) {\n    // Write your code here\n    *returnSize = 0;\n    return NULL;\n}`,
      csharp: `public class Solution {\n    public int[] ${problem.starterCode[0]?.functionName || 'Solution'}(int[] nums, int target) {\n        // Write your code here\n        return new int[]{};\n    }\n}`,
    };
    return templates[lang] || templates.python;
  }

  const passCount = results.filter((r) => r.pass).length;
  const sampleResults = results.filter((r) => r.type === 'sample');
  const allPassed = results.length > 0 && results.every((r) => r.pass);
  const attempts = getAttemptsForProblem(problem.id).sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  async function runTests() {
    const started = performance.now();
    setIsRunning(true);
    setResults([]);
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
      setResults(runResults);

      const allPass = runResults.length > 0 && runResults.every((r: RunResult) => r.pass);
      addAttempt({
        problemId: problem.id,
        status: allPass ? 'passed' : 'failed',
        language: selectedLanguage as 'javascript' | 'typescript',
        code,
        runtimeMs: Math.round(performance.now() - started),
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
        createdAt: new Date().toISOString(),
      });
    } finally {
      setIsRunning(false);
    }
  }

  function handleLanguageChange(lang: string) {
    setSelectedLanguage(lang);
    setCode(getStarterCode(lang));
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
        {/* Left Panel - Problem Description */}
        <div className="w-1/2 border-r border-gray-800 flex flex-col">
          {/* Tabs */}
          <div className="flex border-b border-gray-800 bg-gray-900">
            <button
              onClick={() => setActiveTab('description')}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'description'
                  ? 'border-green-500 text-green-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('submissions')}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'submissions'
                  ? 'border-green-500 text-green-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              Submissions
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
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        problem.difficulty === 'easy'
                          ? 'bg-green-500/20 text-green-400'
                          : problem.difficulty === 'medium'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}
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
              </div>
            ) : (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white mb-4">Your Submissions</h3>
                {attempts.length === 0 ? (
                  <p className="text-gray-400 text-sm">No submissions yet. Run your code to see results!</p>
                ) : (
                  <div className="space-y-2">
                    {attempts.slice(0, 10).map((attempt, idx) => (
                      <div
                        key={`${attempt.createdAt}-${idx}`}
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
                              className={`font-semibold ${
                                attempt.status === 'passed' ? 'text-green-400' : 'text-red-400'
                              }`}
                            >
                              {attempt.status === 'passed' ? 'Accepted' : 'Wrong Answer'}
                            </span>
                          </div>
                          <span className="text-xs text-gray-400">
                            {new Date(attempt.createdAt).toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-gray-400">
                          <span className="px-2 py-1 bg-gray-700 rounded">
                            {SUPPORTED_LANGUAGES.find((l) => l.value === attempt.language)?.label || attempt.language}
                          </span>
                          {attempt.runtimeMs !== undefined && <span>Runtime: {attempt.runtimeMs}ms</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Code Editor */}
        <div className="w-1/2 flex flex-col bg-gray-950">
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
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg flex items-center gap-2 ${
                      selectedLanguage === lang.value ? 'bg-gray-700 text-green-400' : 'text-gray-300'
                    }`}
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
            </div>
          </div>

          {/* Code Editor */}
          <div className="flex-1 overflow-hidden">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full h-full bg-gray-950 text-gray-100 font-mono text-sm p-4 resize-none focus:outline-none"
              spellCheck={false}
              style={{ 
                tabSize: 4,
                lineHeight: '1.6'
              }}
            />
          </div>

          {/* Test Cases Section */}
          <div className="border-t border-gray-800 bg-gray-900">
            <button
              onClick={() => setShowTestCase(!showTestCase)}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-300 hover:bg-gray-800 transition-colors"
            >
              <span>Testcase</span>
              <FiChevronDown className={`w-4 h-4 transition-transform ${showTestCase ? 'rotate-180' : ''}`} />
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
                        className={`rounded-lg border p-3 ${
                          result.pass
                            ? 'bg-green-500/10 border-green-500/30'
                            : 'bg-red-500/10 border-red-500/30'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-white">Test Case {idx + 1}</span>
                          <span
                            className={`text-xs px-2 py-1 rounded ${
                              result.pass ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                            }`}
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
                              <div className={`mt-1 rounded px-3 py-2 ${
                                result.pass ? 'bg-gray-800 text-gray-300' : 'bg-red-900/20 text-red-300'
                              }`}>
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
    </div>
  );
}
