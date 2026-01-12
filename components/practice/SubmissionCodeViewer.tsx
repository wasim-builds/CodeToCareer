"use client";

import { useState } from 'react';
import { FiX, FiCopy, FiCheck, FiRotateCw } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface SubmissionCodeViewerProps {
    code: string;
    language: string;
    timestamp: string;
    status: 'passed' | 'failed';
    onRestore: () => void;
    onClose: () => void;
}

export function SubmissionCodeViewer({
    code,
    language,
    timestamp,
    status,
    onRestore,
    onClose,
}: SubmissionCodeViewerProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error('Failed to copy code:', error);
        }
    };

    const languageMap: Record<string, string> = {
        javascript: 'javascript',
        typescript: 'typescript',
        python: 'python',
        java: 'java',
        cpp: 'cpp',
        c: 'c',
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-xl border border-gray-800 max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
                    <div>
                        <h3 className="text-lg font-semibold text-white">Submission Code</h3>
                        <p className="text-sm text-gray-400 mt-1">
                            {new Date(timestamp).toLocaleString()} •{' '}
                            <span className={status === 'passed' ? 'text-green-400' : 'text-red-400'}>
                                {status === 'passed' ? 'Accepted' : 'Failed'}
                            </span>
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-800 text-gray-400 hover:text-white rounded-lg transition-colors"
                    >
                        <FiX className="w-5 h-5" />
                    </button>
                </div>

                {/* Code Display */}
                <div className="flex-1 overflow-auto p-6">
                    <div className="relative">
                        <SyntaxHighlighter
                            language={languageMap[language] || 'javascript'}
                            style={vscDarkPlus}
                            customStyle={{
                                margin: 0,
                                borderRadius: '0.5rem',
                                fontSize: '0.875rem',
                            }}
                            showLineNumbers
                        >
                            {code}
                        </SyntaxHighlighter>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-800">
                    <button
                        onClick={handleCopy}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm transition-colors"
                    >
                        {copied ? (
                            <>
                                <FiCheck className="w-4 h-4 text-green-400" />
                                Copied!
                            </>
                        ) : (
                            <>
                                <FiCopy className="w-4 h-4" />
                                Copy Code
                            </>
                        )}
                    </button>
                    <button
                        onClick={onRestore}
                        className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors"
                    >
                        <FiRotateCw className="w-4 h-4" />
                        Restore This Code
                    </button>
                </div>
            </div>
        </div>
    );
}
