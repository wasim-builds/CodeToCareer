'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

export type Theme =
  | 'light'
  | 'dark'
  | 'ocean'
  | 'forest'
  | 'sunset'
  | 'midnight'
  | 'high-contrast'
  | 'auto'

export interface ThemeColors {
  primary: string
  secondary: string
  background: string
  surface: string
  text: string
  textSecondary: string
}

export interface ThemeMetadata {
  name: string
  displayName: string
  colors: ThemeColors
  isDark: boolean
}

const themeMetadata: Record<Exclude<Theme, 'auto'>, ThemeMetadata> = {
  light: {
    name: 'light',
    displayName: 'Light',
    isDark: false,
    colors: {
      primary: '#3B82F6',
      secondary: '#8B5CF6',
      background: '#FFFFFF',
      surface: '#F9FAFB',
      text: '#111827',
      textSecondary: '#6B7280'
    }
  },
  dark: {
    name: 'dark',
    displayName: 'Dark',
    isDark: true,
    colors: {
      primary: '#60A5FA',
      secondary: '#A78BFA',
      background: '#111827',
      surface: '#1F2937',
      text: '#F9FAFB',
      textSecondary: '#9CA3AF'
    }
  },
  ocean: {
    name: 'ocean',
    displayName: 'Ocean',
    isDark: true,
    colors: {
      primary: '#06B6D4',
      secondary: '#0EA5E9',
      background: '#0C4A6E',
      surface: '#075985',
      text: '#F0F9FF',
      textSecondary: '#BAE6FD'
    }
  },
  forest: {
    name: 'forest',
    displayName: 'Forest',
    isDark: true,
    colors: {
      primary: '#10B981',
      secondary: '#34D399',
      background: '#064E3B',
      surface: '#065F46',
      text: '#ECFDF5',
      textSecondary: '#A7F3D0'
    }
  },
  sunset: {
    name: 'sunset',
    displayName: 'Sunset',
    isDark: false,
    colors: {
      primary: '#F59E0B',
      secondary: '#F97316',
      background: '#FFF7ED',
      surface: '#FFEDD5',
      text: '#78350F',
      textSecondary: '#92400E'
    }
  },
  midnight: {
    name: 'midnight',
    displayName: 'Midnight',
    isDark: true,
    colors: {
      primary: '#818CF8',
      secondary: '#A78BFA',
      background: '#0F172A',
      surface: '#1E293B',
      text: '#F1F5F9',
      textSecondary: '#CBD5E1'
    }
  },
  'high-contrast': {
    name: 'high-contrast',
    displayName: 'High Contrast',
    isDark: true,
    colors: {
      primary: '#FFFFFF',
      secondary: '#FFFF00',
      background: '#000000',
      surface: '#1A1A1A',
      text: '#FFFFFF',
      textSecondary: '#CCCCCC'
    }
  }
}

interface ThemeContextType {
  theme: Theme
  actualTheme: Exclude<Theme, 'auto'>
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  themeMetadata: ThemeMetadata
  allThemes: ThemeMetadata[]
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('auto')
  const [actualTheme, setActualTheme] = useState<Exclude<Theme, 'auto'>>('light')
  const [mounted, setMounted] = useState(false)

  // Determine actual theme from 'auto' setting
  const resolveAutoTheme = (): Exclude<Theme, 'auto'> => {
    if (typeof window === 'undefined') return 'light'
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  }

  useEffect(() => {
    setMounted(true)

    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme) {
      setThemeState(savedTheme)
      if (savedTheme === 'auto') {
        setActualTheme(resolveAutoTheme())
      } else {
        setActualTheme(savedTheme)
      }
    } else {
      // Default to auto
      setThemeState('auto')
      setActualTheme(resolveAutoTheme())
    }
  }, [])

  // Listen for system theme changes when in auto mode
  useEffect(() => {
    if (!mounted || theme !== 'auto') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => {
      setActualTheme(e.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [theme, mounted])

  // Apply theme to document
  useEffect(() => {
    if (!mounted) return

    const root = document.documentElement
    const metadata = themeMetadata[actualTheme]

    // Remove all theme classes
    root.classList.remove('dark', 'light', 'ocean', 'forest', 'sunset', 'midnight', 'high-contrast')

    // Add current theme class
    root.classList.add(actualTheme)

    // Add dark class for dark themes (for Tailwind compatibility)
    if (metadata.isDark) {
      root.classList.add('dark')
    }

    // Set CSS custom properties
    root.style.setProperty('--color-primary', metadata.colors.primary)
    root.style.setProperty('--color-secondary', metadata.colors.secondary)
    root.style.setProperty('--color-background', metadata.colors.background)
    root.style.setProperty('--color-surface', metadata.colors.surface)
    root.style.setProperty('--color-text', metadata.colors.text)
    root.style.setProperty('--color-text-secondary', metadata.colors.textSecondary)

    // Save to localStorage
    localStorage.setItem('theme', theme)
  }, [theme, actualTheme, mounted])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    if (newTheme === 'auto') {
      setActualTheme(resolveAutoTheme())
    } else {
      setActualTheme(newTheme)
    }
  }

  const toggleTheme = () => {
    // Simple toggle between light and dark
    if (actualTheme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  const allThemes = Object.values(themeMetadata)

  return (
    <ThemeContext.Provider
      value={{
        theme,
        actualTheme,
        setTheme,
        toggleTheme,
        themeMetadata: themeMetadata[actualTheme],
        allThemes
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
