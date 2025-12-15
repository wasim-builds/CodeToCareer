'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface User {
  id: string
  name: string
  email: string
  phone?: string
  avatar?: string
  joinedDate: string
  quizzesTaken: number
  averageScore: number
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  updateProfile: (updates: Partial<User>) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing session on mount
    const storedUser = localStorage.getItem('quizAppUser')
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (e) {
        localStorage.removeItem('quizAppUser')
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        // Check if user exists in localStorage (registered users)
        const registeredUsers = JSON.parse(localStorage.getItem('quizAppUsers') || '[]')
        const existingUser = registeredUsers.find((u: any) => u.email === email)
        
        if (existingUser && existingUser.password === password) {
          const userData: User = {
            id: existingUser.id,
            name: existingUser.name,
            email: existingUser.email,
            phone: existingUser.phone || '',
            joinedDate: existingUser.joinedDate,
            quizzesTaken: existingUser.quizzesTaken || 0,
            averageScore: existingUser.averageScore || 0,
          }
          setUser(userData)
          localStorage.setItem('quizAppUser', JSON.stringify(userData))
          resolve(true)
        } else if (!existingUser) {
          // For demo: create user if doesn't exist
          const newUser: User = {
            id: Date.now().toString(),
            name: email.split('@')[0],
            email,
            phone: '',
            joinedDate: new Date().toISOString(),
            quizzesTaken: 0,
            averageScore: 0,
          }
          setUser(newUser)
          localStorage.setItem('quizAppUser', JSON.stringify(newUser))
          resolve(true)
        } else {
          resolve(false)
        }
      }, 1000)
    })
  }

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const registeredUsers = JSON.parse(localStorage.getItem('quizAppUsers') || '[]')
        
        // Check if email already exists
        if (registeredUsers.some((u: any) => u.email === email)) {
          resolve(false)
          return
        }

        const newUser = {
          id: Date.now().toString(),
          name,
          email,
          password, // In production, this would be hashed
          phone: '',
          joinedDate: new Date().toISOString(),
          quizzesTaken: 0,
          averageScore: 0,
        }

        registeredUsers.push(newUser)
        localStorage.setItem('quizAppUsers', JSON.stringify(registeredUsers))

        const userData: User = {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          phone: '',
          joinedDate: newUser.joinedDate,
          quizzesTaken: 0,
          averageScore: 0,
        }
        setUser(userData)
        localStorage.setItem('quizAppUser', JSON.stringify(userData))
        resolve(true)
      }, 1000)
    })
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('quizAppUser')
  }

  const updateProfile = (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates }
      setUser(updatedUser)
      localStorage.setItem('quizAppUser', JSON.stringify(updatedUser))

      // Also update in registered users list
      const registeredUsers = JSON.parse(localStorage.getItem('quizAppUsers') || '[]')
      const userIndex = registeredUsers.findIndex((u: any) => u.id === user.id)
      if (userIndex !== -1) {
        registeredUsers[userIndex] = { ...registeredUsers[userIndex], ...updates }
        localStorage.setItem('quizAppUsers', JSON.stringify(registeredUsers))
      }
    }
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout, updateProfile }}>
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
