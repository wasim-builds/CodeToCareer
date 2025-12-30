'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

export interface User {
  id: string
  name: string
  email: string
  image?: string
  phone?: string
  xp: number
  level: number
  streak: number
  joinedDate?: string
  quizzesTaken?: number
  averageScore?: number
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>
  logout: () => Promise<void>
  updateProfile: (updates: Partial<User>) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  const isAuthenticated = user !== null

  // Fetch current user session on mount
  useEffect(() => {
    fetchSession()
  }, [])

  const fetchSession = async () => {
    try {
      const response = await fetch('/api/auth/me', {
        credentials: 'include', // Include cookies
      })

      if (response.ok) {
        const data = await response.json()
        if (data.success && data.user) {
          setUser({
            id: data.user.id,
            name: data.user.name || '',
            email: data.user.email,
            image: data.user.image || undefined,
            xp: data.user.xp || 0,
            level: data.user.level || 1,
            streak: data.user.streak || 0,
            quizzesTaken: 0,
            averageScore: 0,
            joinedDate: data.user.createdAt || new Date().toISOString()
          })
        }
      }
    } catch (error) {
      console.error('Failed to fetch session:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setUser({
          id: data.user.id,
          name: data.user.name || '',
          email: data.user.email,
          image: data.user.image || undefined,
          xp: data.user.xp || 0,
          level: data.user.level || 1,
          streak: data.user.streak || 0,
          quizzesTaken: 0,
          averageScore: 0,
          joinedDate: data.user.createdAt || new Date().toISOString()
        })
        return true
      }

      return false
    } catch (error) {
      console.error('Login error:', error)
      return false
    }
  }

  const register = async (name: string, email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        return { success: false, error: data.error || 'Registration failed' }
      }

      return { success: true }
    } catch (error) {
      return { success: false, error: 'Something went wrong' }
    }
  }

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      })
      setUser(null)
      router.push('/')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const updateProfile = async (updates: Partial<User>) => {
    try {
      // Optimistic update
      if (user) {
        setUser({ ...user, ...updates })
      }

      // API call to update profile
      const response = await fetch('/api/user/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(updates),
      })

      if (!response.ok) {
        // Revert optimistic update on failure
        await fetchSession()
      }
    } catch (error) {
      console.error('Failed to update profile:', error)
      // Revert optimistic update
      await fetchSession()
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      isAuthenticated,
      login,
      register,
      logout,
      updateProfile
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
