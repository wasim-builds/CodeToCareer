"use client";

import { useState } from 'react';
import { SolutionApproach } from '@/types/practice';
import { FiCode, FiClock, FiDatabase, FiCheckCircle, FiXCircle, FiChevronDown, FiCopy, FiCheck } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface SolutionViewerProps {
    solutions: SolutionApproach[];
}

const LANGUAGE_CONFIG: Record<string, { label: string; icon: string; prismLang: string }> = {
    python: { label: 'Python', icon: '🐍', prismLang: 'python' },
    javascript: { label: 'JavaScript', icon: '📜', prismLang: 'javascript' },
    typescript: { label: 'TypeScript', icon: '📘', prismLang: 'typescript' },
    java: { label: 'Java', icon: '☕', prismLang: 'java' },
    cpp: { label: 'C++', icon: '⚙️', prismLang: 'cpp' },
};

export function SolutionViewer({ solutions }: SolutionViewerProps) {
    const [selectedApproach, setSelectedApproach] = useState(0);
    const [selectedLanguage, setSelectedLanguage] = useState(0);
    const [copiedCode, setCopiedCode] = useState(false);
    const [showAlgorithm, setShowAlgorithm] = useState(true);
    const [showProsConsSection, setShowProsConsSection] = useState(true);

    if (!solutions || solutions.length === 0) {
        return (
            <div className="flex items-center justify-center h-64 text-gray-400">
                <p>No solutions available for this problem yet.</p>
            </div>
        );
    }

    const currentSolution = solutions[selectedApproach];
    const currentCode = currentSolution.code[selectedLanguage];

    const handleCopyCode = async () => {
        if (currentCode) {
            await navigator.clipboard.writeText(currentCode.code);
            setCopiedCode(true);
            setTimeout(() => setCopiedCode(false), 2000);
        }
    };

    // Get approach badge color
    const getApproachColor = (name?: string) => {
        if (!name) return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
        const lowerName = name.toLowerCase();
        if (lowerName.includes('brute') || lowerName.includes('naive')) {
            return 'bg-red-500/20 text-red-400 border-red-500/30';
        }
        if (lowerName.includes('better') || lowerName.includes('improved')) {
            return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
        }
        if (lowerName.includes('optimal') || lowerName.includes('best')) {
            return 'bg-green-500/20 text-green-400 border-green-500/30';
        }
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    };

    return (
        <div className="flex flex-col h-full bg-gray-900">
            {/* Approach Tabs */}
            <div className="flex border-b border-gray-800 bg-gray-900 overflow-x-auto">
                {solutions.map((solution, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setSelectedApproach(idx);
                            setSelectedLanguage(0); // Reset language selection
                        }}
                        className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${selectedApproach === idx
                            ? 'border-green-500 text-green-400 bg-gray-800/50'
                            : 'border-transparent text-gray-400 hover:text-gray-300 hover:bg-gray-800/30'
                            }`}
                    >
                        <div className="flex items-center gap-2">
                            <span>{solution.name || solution.methodName || `Approach ${idx + 1}`}</span>
                            {(solution.name || solution.title).toLowerCase().includes('optimal') && (
                                <span className="text-xs">⭐</span>
                            )}
                        </div>
                    </button>
                ))}
            </div>

            {/* Solution Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Header */}
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-white">{currentSolution.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getApproachColor(currentSolution.name || currentSolution.methodName)}`}>
                            {currentSolution.name || currentSolution.methodName || 'Solution'}
                        </span>
                    </div>
                </div>

                {/* Complexity Analysis */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                        <div className="flex items-center gap-2 mb-2">
                            <FiClock className="w-5 h-5 text-blue-400" />
                            <span className="font-semibold text-white">Time Complexity</span>
                        </div>
                        <p className="text-2xl font-mono font-bold text-blue-400">{currentSolution.complexity?.time || currentSolution.timeComplexity || 'N/A'}</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                        <div className="flex items-center gap-2 mb-2">
                            <FiDatabase className="w-5 h-5 text-purple-400" />
                            <span className="font-semibold text-white">Space Complexity</span>
                        </div>
                        <p className="text-2xl font-mono font-bold text-purple-400">{currentSolution.complexity?.space || currentSolution.spaceComplexity || 'N/A'}</p>
                    </div>
                </div>

                {/* Intuition */}
                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-5 border border-green-500/20">
                    <h4 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
                        💡 Intuition
                    </h4>
                    <p className="text-gray-300 leading-relaxed">{currentSolution.intuition}</p>
                </div>

                {/* Detailed Explanation */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Explanation</h4>
                    <div className="prose prose-invert max-w-none">
                        <p className="text-gray-300 leading-relaxed whitespace-pre-line">{currentSolution.explanation}</p>
                    </div>
                </div>

                {/* Algorithm Steps */}
                <div>
                    <button
                        onClick={() => setShowAlgorithm(!showAlgorithm)}
                        className="flex items-center justify-between w-full text-lg font-semibold text-white mb-3 hover:text-green-400 transition-colors"
                    >
                        <span>Algorithm Steps</span>
                        <FiChevronDown className={`w-5 h-5 transition-transform ${showAlgorithm ? 'rotate-180' : ''}`} />
                    </button>
                    {showAlgorithm && (
                        <ol className="space-y-3">
                            {currentSolution.algorithm.map((step, idx) => (
                                <li key={idx} className="flex gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-semibold text-sm">
                                        {idx + 1}
                                    </span>
                                    <p className="text-gray-300 leading-relaxed pt-1">{step}</p>
                                </li>
                            ))}
                        </ol>
                    )}
                </div>

                {/* Code Implementation */}
                <div>
                    <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                            <FiCode className="w-5 h-5" />
                            Implementation
                        </h4>
                        <div className="flex items-center gap-2">
                            {/* Language Selector */}
                            <div className="relative group">
                                <button className="flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded text-sm transition-colors">
                                    <span>{LANGUAGE_CONFIG[currentCode?.language]?.icon || '📝'}</span>
                                    <span>{LANGUAGE_CONFIG[currentCode?.language]?.label || 'Code'}</span>
                                    <FiChevronDown className="w-4 h-4" />
                                </button>

                                {/* Language Dropdown */}
                                <div className="absolute top-full right-0 mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 min-w-[160px]">
                                    {currentSolution.code.map((codeItem, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setSelectedLanguage(idx)}
                                            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg flex items-center gap-2 ${selectedLanguage === idx ? 'bg-gray-700 text-green-400' : 'text-gray-300'
                                                }`}
                                        >
                                            <span>{LANGUAGE_CONFIG[codeItem.language]?.icon}</span>
                                            <span>{LANGUAGE_CONFIG[codeItem.language]?.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Copy Button */}
                            <button
                                onClick={handleCopyCode}
                                className="flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded text-sm transition-colors"
                                title="Copy code"
                            >
                                {copiedCode ? (
                                    <>
                                        <FiCheck className="w-4 h-4 text-green-400" />
                                        <span className="text-green-400">Copied!</span>
                                    </>
                                ) : (
                                    <>
                                        <FiCopy className="w-4 h-4" />
                                        <span>Copy</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Code Display */}
                    {currentCode && (
                        <div className="rounded-lg overflow-hidden border border-gray-700">
                            <SyntaxHighlighter
                                language={LANGUAGE_CONFIG[currentCode.language]?.prismLang || 'javascript'}
                                style={vscDarkPlus}
                                customStyle={{
                                    margin: 0,
                                    padding: '1.5rem',
                                    fontSize: '0.875rem',
                                    background: '#1a1a1a',
                                }}
                                showLineNumbers
                            >
                                {currentCode.code}
                            </SyntaxHighlighter>
                            {currentCode.explanation && (
                                <div className="bg-gray-800/50 px-4 py-3 border-t border-gray-700">
                                    <p className="text-sm text-gray-400">
                                        <span className="font-semibold text-gray-300">Note:</span> {currentCode.explanation}
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Pros & Cons */}
                <div>
                    <button
                        onClick={() => setShowProsConsSection(!showProsConsSection)}
                        className="flex items-center justify-between w-full text-lg font-semibold text-white mb-3 hover:text-green-400 transition-colors"
                    >
                        <span>Pros & Cons</span>
                        <FiChevronDown className={`w-5 h-5 transition-transform ${showProsConsSection ? 'rotate-180' : ''}`} />
                    </button>
                    {showProsConsSection && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Pros */}
                            <div className="bg-green-500/5 rounded-lg p-4 border border-green-500/20">
                                <h5 className="font-semibold text-green-400 mb-3 flex items-center gap-2">
                                    <FiCheckCircle className="w-5 h-5" />
                                    Advantages
                                </h5>
                                <ul className="space-y-2">
                                    {currentSolution.pros.map((pro, idx) => (
                                        <li key={idx} className="flex gap-2 text-sm text-gray-300">
                                            <span className="text-green-400 flex-shrink-0">✓</span>
                                            <span>{pro}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Cons */}
                            <div className="bg-red-500/5 rounded-lg p-4 border border-red-500/20">
                                <h5 className="font-semibold text-red-400 mb-3 flex items-center gap-2">
                                    <FiXCircle className="w-5 h-5" />
                                    Disadvantages
                                </h5>
                                <ul className="space-y-2">
                                    {currentSolution.cons.map((con, idx) => (
                                        <li key={idx} className="flex gap-2 text-sm text-gray-300">
                                            <span className="text-red-400 flex-shrink-0">✗</span>
                                            <span>{con}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
