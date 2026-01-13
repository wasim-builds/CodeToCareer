'use client'

import { useState } from 'react'
import { useTheme, Theme } from '@/contexts/ThemeContext'
import { FiCheck, FiMonitor } from 'react-icons/fi'

export default function ThemeSelector() {
    const { theme, actualTheme, setTheme, allThemes } = useTheme()
    const [isOpen, setIsOpen] = useState(false)

    const themeOptions: { value: Theme; label: string; icon?: React.ReactNode }[] = [
        { value: 'auto', label: 'Auto', icon: <FiMonitor className="w-4 h-4" /> },
        ...allThemes.map(t => ({ value: t.name as Theme, label: t.displayName }))
    ]

    const handleThemeSelect = (selectedTheme: Theme) => {
        setTheme(selectedTheme)
        setIsOpen(false)
    }

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Select theme"
                aria-expanded={isOpen}
            >
                <div className="flex items-center gap-2">
                    {theme === 'auto' ? (
                        <FiMonitor className="w-4 h-4" />
                    ) : (
                        <div
                            className="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-600"
                            style={{ backgroundColor: allThemes.find(t => t.name === actualTheme)?.colors.primary }}
                        />
                    )}
                    <span className="text-sm font-medium">
                        {theme === 'auto' ? 'Auto' : allThemes.find(t => t.name === theme)?.displayName}
                    </span>
                </div>
                <svg
                    className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                        aria-hidden="true"
                    />

                    {/* Dropdown */}
                    <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 overflow-hidden">
                        <div className="p-2">
                            <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 px-3 py-2">
                                SELECT THEME
                            </div>

                            {themeOptions.map((option) => {
                                const isSelected = theme === option.value
                                const themeData = option.value === 'auto'
                                    ? null
                                    : allThemes.find(t => t.name === option.value)

                                return (
                                    <button
                                        key={option.value}
                                        onClick={() => handleThemeSelect(option.value)}
                                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${isSelected
                                                ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                                            }`}
                                    >
                                        {/* Theme preview */}
                                        <div className="flex items-center gap-2 flex-1">
                                            {option.icon || (
                                                <div className="flex gap-1">
                                                    <div
                                                        className="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600"
                                                        style={{ backgroundColor: themeData?.colors.primary }}
                                                    />
                                                    <div
                                                        className="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600"
                                                        style={{ backgroundColor: themeData?.colors.secondary }}
                                                    />
                                                </div>
                                            )}
                                            <span className="text-sm font-medium">{option.label}</span>
                                        </div>

                                        {/* Check mark */}
                                        {isSelected && (
                                            <FiCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                        )}
                                    </button>
                                )
                            })}
                        </div>

                        {/* Preview section */}
                        <div className="border-t border-gray-200 dark:border-gray-700 p-3 bg-gray-50 dark:bg-gray-900/50">
                            <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                                Current: {theme === 'auto' ? `Auto (${actualTheme})` : allThemes.find(t => t.name === theme)?.displayName}
                            </div>
                            <div className="flex gap-2">
                                {['primary', 'secondary', 'background', 'surface'].map((colorKey) => {
                                    const color = allThemes.find(t => t.name === actualTheme)?.colors[colorKey as keyof typeof allThemes[0]['colors']]
                                    return (
                                        <div
                                            key={colorKey}
                                            className="flex-1 h-8 rounded border border-gray-300 dark:border-gray-600"
                                            style={{ backgroundColor: color }}
                                            title={colorKey}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
