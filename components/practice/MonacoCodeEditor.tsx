"use client";

import { Editor, OnMount } from '@monaco-editor/react';
import { editor } from 'monaco-editor';
import { useState, useRef } from 'react';
import { FiLoader } from 'react-icons/fi';

interface MonacoCodeEditorProps {
    value: string;
    onChange: (value: string) => void;
    language: string;
    onRun?: () => void;
    fontSize?: number;
    theme?: string;
    onEditorReady?: (editor: editor.IStandaloneCodeEditor) => void;
}

// Map our language names to Monaco's language IDs
const LANGUAGE_MAP: Record<string, string> = {
    javascript: 'javascript',
    typescript: 'typescript',
    python: 'python',
    java: 'java',
    cpp: 'cpp',
    c: 'c',
    csharp: 'csharp',
    rust: 'rust',
    go: 'go',
};

export function MonacoCodeEditor({ value, onChange, language, onRun, fontSize = 14, theme = 'vs-dark', onEditorReady }: MonacoCodeEditorProps) {
    const [isEditorReady, setIsEditorReady] = useState(false);
    const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

    const handleEditorDidMount: OnMount = (editor, monaco) => {
        editorRef.current = editor;
        setIsEditorReady(true);

        // Notify parent component that editor is ready
        if (onEditorReady) {
            onEditorReady(editor);
        }

        // Add keyboard shortcuts
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
            // Prevent default save behavior
            if (onRun) {
                onRun();
            }
        });

        // Add format shortcut (Ctrl/Cmd + Shift + F)
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyF, () => {
            editor.getAction('editor.action.formatDocument')?.run();
        });

        // Format on paste
        editor.onDidPaste(() => {
            editor.getAction('editor.action.formatDocument')?.run();
        });
    };

    const handleEditorChange = (value: string | undefined) => {
        onChange(value || '');
    };

    const monacoLanguage = LANGUAGE_MAP[language] || 'javascript';

    return (
        <div className="relative w-full h-full">
            {!isEditorReady && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-950 z-10">
                    <div className="flex flex-col items-center gap-3">
                        <FiLoader className="w-8 h-8 text-green-400 animate-spin" />
                        <p className="text-sm text-gray-400">Loading editor...</p>
                    </div>
                </div>
            )}
            <Editor
                height="100%"
                language={monacoLanguage}
                value={value}
                onChange={handleEditorChange}
                onMount={handleEditorDidMount}
                theme={theme}
                options={{
                    minimap: {
                        enabled: true,
                        scale: 1,
                    },
                    fontSize: fontSize,
                    fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', monospace",
                    lineNumbers: 'on',
                    roundedSelection: true,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    tabSize: 4,
                    insertSpaces: true,
                    wordWrap: 'on',
                    formatOnPaste: true,
                    formatOnType: true,
                    suggestOnTriggerCharacters: true,
                    acceptSuggestionOnEnter: 'on',
                    quickSuggestions: true,
                    padding: {
                        top: 16,
                        bottom: 16,
                    },
                    scrollbar: {
                        vertical: 'auto',
                        horizontal: 'auto',
                        verticalScrollbarSize: 10,
                        horizontalScrollbarSize: 10,
                    },
                    overviewRulerBorder: false,
                    renderLineHighlight: 'all',
                    cursorBlinking: 'smooth',
                    cursorSmoothCaretAnimation: 'on',
                    smoothScrolling: true,
                    contextmenu: true,
                    mouseWheelZoom: true,
                }}
                loading={
                    <div className="flex items-center justify-center h-full bg-gray-950">
                        <FiLoader className="w-8 h-8 text-green-400 animate-spin" />
                    </div>
                }
            />
        </div>
    );
}
