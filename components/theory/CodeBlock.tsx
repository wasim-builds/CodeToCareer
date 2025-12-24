'use client';

import { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';

interface CodeBlockProps {
    code: string;
    language?: string;
    showLineNumbers?: boolean;
}

export function CodeBlock({ code, language = 'javascript', showLineNumbers = false }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group my-4">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border border-gray-700 border-b-0 rounded-t-lg">
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                    {language}
                </span>
                <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-2 py-1 text-xs text-gray-400 hover:text-white bg-gray-700 hover:bg-gray-600 rounded transition-colors"
                >
                    {copied ? (
                        <>
                            <FiCheck className="w-3.5 h-3.5" />
                            Copied!
                        </>
                    ) : (
                        <>
                            <FiCopy className="w-3.5 h-3.5" />
                            Copy
                        </>
                    )}
                </button>
            </div>

            {/* Code Content */}
            <div className="relative overflow-x-auto bg-gray-900 border border-gray-700 rounded-b-lg">
                <pre className="p-4">
                    <code className="text-sm font-mono text-gray-300 leading-relaxed whitespace-pre">
                        {code}
                    </code>
                </pre>
            </div>
        </div>
    );
}
