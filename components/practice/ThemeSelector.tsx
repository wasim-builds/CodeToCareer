"use client";

import { useState, useEffect } from 'react';
import { FiChevronDown, FiSun, FiMoon, FiEye } from 'react-icons/fi';

export interface EditorTheme {
    id: string;
    label: string;
    monacoTheme: string;
    icon: React.ReactNode;
    preview: {
        background: string;
        foreground: string;
        accent: string;
    };
}

export const EDITOR_THEMES: EditorTheme[] = [
    {
        id: 'vs-dark',
        label: 'VS Dark',
        monacoTheme: 'vs-dark',
        icon: <FiMoon className="w-4 h-4" />,
        preview: {
            background: '#1e1e1e',
            foreground: '#d4d4d4',
            accent: '#007acc',
        },
    },
    {
        id: 'vs-light',
        label: 'VS Light',
        monacoTheme: 'vs',
        icon: <FiSun className="w-4 h-4" />,
        preview: {
            background: '#ffffff',
            foreground: '#000000',
            accent: '#0066bf',
        },
    },
    {
        id: 'hc-black',
        label: 'High Contrast',
        monacoTheme: 'hc-black',
        icon: <FiEye className="w-4 h-4" />,
        preview: {
            background: '#000000',
            foreground: '#ffffff',
            accent: '#ffff00',
        },
    },
];

interface ThemeSelectorProps {
    selectedTheme: string;
    onThemeChange: (themeId: string) => void;
}

export function ThemeSelector({ selectedTheme, onThemeChange }: ThemeSelectorProps) {
    const currentTheme = EDITOR_THEMES.find(t => t.id === selectedTheme) || EDITOR_THEMES[0];

    return (
        <div className="relative group">
            <button className="flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded text-sm transition-colors">
                {currentTheme.icon}
                <span className="hidden sm:inline">{currentTheme.label}</span>
                <FiChevronDown className="w-4 h-4" />
            </button>

            {/* Dropdown */}
            <div className="absolute top-full right-0 mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 min-w-[200px]">
                {EDITOR_THEMES.map((theme) => (
                    <button
                        key={theme.id}
                        onClick={() => onThemeChange(theme.id)}
                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg flex items-center gap-3 ${selectedTheme === theme.id ? 'bg-gray-700 text-green-400' : 'text-gray-300'
                            }`}
                    >
                        <div className="flex items-center gap-2 flex-1">
                            {theme.icon}
                            <span>{theme.label}</span>
                        </div>
                        {/* Theme Preview */}
                        <div className="flex gap-1">
                            <div
                                className="w-3 h-3 rounded-sm border border-gray-600"
                                style={{ backgroundColor: theme.preview.background }}
                                title="Background"
                            />
                            <div
                                className="w-3 h-3 rounded-sm border border-gray-600"
                                style={{ backgroundColor: theme.preview.foreground }}
                                title="Foreground"
                            />
                            <div
                                className="w-3 h-3 rounded-sm border border-gray-600"
                                style={{ backgroundColor: theme.preview.accent }}
                                title="Accent"
                            />
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
