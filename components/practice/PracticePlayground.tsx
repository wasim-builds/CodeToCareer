"use client";

import { useMemo, useState } from 'react';
import { usePractice } from '@/contexts/PracticeContext';
import { PracticeProblem, PracticeTestCase } from '@/types/practice';

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

export function PracticePlayground({ problem }: PracticePlaygroundProps) {
  const [selectedLanguage, setSelectedLanguage] = useState(problem.starterCode[0].language);
  const [code, setCode] = useState(problem.starterCode[0].code);
  const [results, setResults] = useState<RunResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const { addAttempt, getAttemptsForProblem } = usePractice();

  const currentStarter = useMemo(
    () => problem.starterCode.find((s) => s.language === selectedLanguage) || problem.starterCode[0],
    [problem.starterCode, selectedLanguage]
  );

  const passCount = results.filter((r) => r.pass).length;
  const sampleResults = results.filter((r) => r.type === 'sample');
  const hiddenResults = results.filter((r) => r.type === 'hidden');
  const samplePass = sampleResults.filter((r) => r.pass).length;
  const hiddenPass = hiddenResults.filter((r) => r.pass).length;
  const attempts = getAttemptsForProblem(problem.id).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  const lastSuccessful = attempts.find((a) => a.status === 'passed');

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
          functionName: currentStarter.functionName,
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
        language: selectedLanguage,
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
        language: selectedLanguage,
        code,
        runtimeMs: Math.round(performance.now() - started),
        createdAt: new Date().toISOString(),
      });
    } finally {
      setIsRunning(false);
    }
  }

  function handleLanguageChange(lang: string) {
    setSelectedLanguage(lang as typeof selectedLanguage);
    const starter = problem.starterCode.find((s) => s.language === lang);
    if (starter) {
      setCode(starter.code);
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-4">
        <div className="border border-gray-800 rounded-lg p-4 bg-gray-900">
          <h2 className="text-xl font-semibold text-white mb-2">{problem.title}</h2>
          <p className="text-gray-300 mb-3">{problem.prompt}</p>
          <div className="text-sm text-gray-400 space-y-2 mb-3">
            <div>
              <span className="font-semibold text-gray-200">Constraints:</span>
              <ul className="list-disc list-inside space-y-1 mt-1">
                {problem.constraints.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-semibold text-gray-200">Examples:</span>
              <ul className="space-y-2 mt-1">
                {problem.examples.map((ex, idx) => (
                  <li key={idx} className="bg-gray-800 rounded p-2">
                    <div className="text-gray-200">Input: {ex.input}</div>
                    <div className="text-gray-200">Output: {ex.output}</div>
                    {ex.explanation && <div className="text-gray-400">{ex.explanation}</div>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <button
              className="text-sm px-3 py-2 rounded border border-gray-700 bg-gray-800 hover:border-gray-500"
              onClick={() => setShowHints((v) => !v)}
            >
              {showHints ? 'Hide hints' : 'Show hints'}
            </button>
            <button
              className="text-sm px-3 py-2 rounded border border-gray-700 bg-gray-800 hover:border-gray-500"
              onClick={() => setShowSolution((v) => !v)}
            >
              {showSolution ? 'Hide solution' : 'Show solution'}
            </button>
          </div>
          {showHints && (
            <ul className="mt-3 space-y-2 text-gray-200 text-sm">
              {problem.hints.map((hint, idx) => (
                <li key={idx} className="bg-gray-800 rounded p-2">
                  {hint}
                </li>
              ))}
            </ul>
          )}
          {showSolution && (
            <div className="mt-3 text-sm text-gray-200 bg-gray-800 rounded p-3 whitespace-pre-wrap">
              {problem.solution}
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <div className="border border-gray-800 rounded-lg bg-gray-900 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {problem.starterCode.map((starter) => (
                <button
                  key={starter.language}
                  onClick={() => handleLanguageChange(starter.language)}
                  className={`text-sm px-3 py-2 rounded border ${
                    selectedLanguage === starter.language
                      ? 'border-blue-400 text-blue-200'
                      : 'border-gray-700 text-gray-300 hover:border-gray-500'
                  }`}
                >
                  {starter.language.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              onClick={runTests}
              disabled={isRunning}
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm px-4 py-2 rounded disabled:opacity-60"
            >
              {isRunning ? 'Running...' : 'Run Tests'}
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
            <span>
              Attempts: {attempts.length} • Last status: {attempts[0]?.status ?? 'n/a'}
            </span>
            {lastSuccessful && (
              <button
                className="px-3 py-1 rounded border border-gray-700 hover:border-gray-500 text-gray-200"
                onClick={() => {
                  setSelectedLanguage(lastSuccessful.language);
                  setCode(lastSuccessful.code);
                }}
              >
                Load last success ({lastSuccessful.language})
              </button>
            )}
          </div>
          <textarea
            className="w-full h-64 bg-black text-gray-100 font-mono text-sm p-3 rounded border border-gray-800"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>

        <div className="border border-gray-800 rounded-lg bg-gray-900 p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-white font-semibold">Results</h3>
            {results.length > 0 && (
              <div className="text-xs text-gray-300 space-y-1 text-right">
                <div>{passCount}/{results.length} passed</div>
                <div className="text-[11px] text-gray-400">
                  Samples {samplePass}/{sampleResults.length} • Hidden {hiddenPass}/{hiddenResults.length}
                </div>
              </div>
            )}
          </div>
          {results.length === 0 ? (
            <p className="text-sm text-gray-400">Run tests to see results.</p>
          ) : (
            <ul className="space-y-2">
              {results.map((res) => (
                <li
                  key={res.id}
                  className={`rounded border p-2 text-sm ${
                    res.pass ? 'border-green-700 bg-green-900/20 text-green-100' : 'border-red-700 bg-red-900/30 text-red-100'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold">{res.id}</span>
                    <span
                      className={`uppercase text-[11px] px-2 py-0.5 rounded-full border ${
                        res.type === 'sample'
                          ? 'border-blue-500/60 text-blue-100 bg-blue-900/20'
                          : 'border-indigo-500/60 text-indigo-100 bg-indigo-900/20'
                      }`}
                    >
                      {res.type}
                    </span>
                  </div>
                  {res.error ? (
                    <div className="mt-1">Error: {res.error}</div>
                  ) : (
                    <div className="mt-1 space-y-1">
                      <div>Expected: {JSON.stringify(res.expected)}</div>
                      <div>Received: {JSON.stringify(res.actual)}</div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        {attempts.length > 0 && (
          <div className="border border-gray-800 rounded-lg bg-gray-900 p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-semibold">Recent Attempts</h3>
              <span className="text-xs text-gray-400">Latest {Math.min(5, attempts.length)}</span>
            </div>
            <ul className="space-y-2 text-sm text-gray-200">
              {attempts.slice(0, 5).map((a, idx) => (
                <li key={`${a.createdAt}-${idx}`} className="flex items-center justify-between bg-gray-800 rounded p-2">
                  <div className="flex flex-col">
                    <span className="font-semibold capitalize text-xs">{a.status}</span>
                    <span className="text-[11px] text-gray-400">{new Date(a.createdAt).toLocaleString()}</span>
                  </div>
                  <div className="text-xs text-gray-300 flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded border border-gray-700">{a.language}</span>
                    {a.runtimeMs !== undefined && <span>{a.runtimeMs} ms</span>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
