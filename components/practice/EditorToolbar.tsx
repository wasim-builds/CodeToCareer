"use client";

import { FiZoomIn, FiZoomOut, FiRotateCcw, FiMaximize2, FiMinimize2, FiCopy, FiCheck, FiAlignLeft } from 'react-icons/fi';
import { useState } from 'react';

interface EditorToolbarProps {
    fontSize: number;
    onFontSizeChange: (delta: number) => void;
    onReset: () => void;
    isFullScreen: boolean;
    onToggleFullScreen: () => void;
    onFormat?: () => void;
    onCopy?: () => void;
}

export function EditorToolbar({
    fontSize,
    onFontSizeChange,
    onReset,
    isFullScreen,
    onToggleFullScreen,
    onFormat,
    onCopy,
}: EditorToolbarProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (onCopy) {
            onCopy();
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };
    return (
        <div className="flex items-center gap-1 border-l border-gray-700 pl-2 ml-2">
            {/* Font Size Controls */}
            <div className="flex items-center gap-1 px-2 py-1 bg-gray-800/50 rounded">
                <button
                    onClick={() => onFontSizeChange(-1)}
                    disabled={fontSize <= 12}
                    className="p-1 hover:bg-gray-700 rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    title="Decrease font size"
                >
                    <FiZoomOut className="w-4 h-4 text-gray-300" />
                </button>
                <span className="text-xs text-gray-400 min-w-[2rem] text-center">{fontSize}px</span>
                <button
                    onClick={() => onFontSizeChange(1)}
                    disabled={fontSize >= 20}
                    className="p-1 hover:bg-gray-700 rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    title="Increase font size"
                >
                    <FiZoomIn className="w-4 h-4 text-gray-300" />
                </button>
            </div>

            {/* Format Code Button */}
            {onFormat && (
                <button
                    onClick={onFormat}
                    className="p-2 hover:bg-gray-700 text-gray-300 rounded transition-colors"
                    title="Format code (Ctrl+Shift+F)"
                >
                    <FiAlignLeft className="w-4 h-4" />
                </button>
            )}

            {/* Copy Code Button */}
            {onCopy && (
                <button
                    onClick={handleCopy}
                    className="p-2 hover:bg-gray-700 text-gray-300 rounded transition-colors relative"
                    title="Copy code to clipboard"
                >
                    {copied ? (
                        <FiCheck className="w-4 h-4 text-green-400" />
                    ) : (
                        <FiCopy className="w-4 h-4" />
                    )}
                </button>
            )}

            {/* Reset Code Button */}
            <button
                onClick={onReset}
                className="p-2 hover:bg-gray-700 text-gray-300 rounded transition-colors"
                title="Reset to starter code"
            >
                <FiRotateCcw className="w-4 h-4" />
            </button>

            {/* Full Screen Toggle */}
            <button
                onClick={onToggleFullScreen}
                className="p-2 hover:bg-gray-700 text-gray-300 rounded transition-colors"
                title={isFullScreen ? "Exit full screen (ESC)" : "Enter full screen"}
            >
                {isFullScreen ? (
                    <FiMinimize2 className="w-4 h-4" />
                ) : (
                    <FiMaximize2 className="w-4 h-4" />
                )}
            </button>
        </div>
    );
}
