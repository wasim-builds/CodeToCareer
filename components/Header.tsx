'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FiUser, FiLogIn, FiBookmark, FiMenu, FiX, FiMap } from 'react-icons/fi'
import { useAuth } from '@/contexts/AuthContext'
import { useBookmark } from '@/contexts/BookmarkContext'
import ThemeSelector from './ThemeSelector'

export default function Header() {
  const { user, isLoading } = useAuth()
  const { getBookmarkCount } = useBookmark()
  const bookmarkCount = getBookmarkCount()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-xl font-bold text-green-600 dark:text-green-400 transition-colors">
            CodeToCareer
          </Link>

          {/* Desktop Navigation */}
          <nav id="navigation" className="hidden md:flex items-center gap-6" role="navigation" aria-label="Main navigation">
            <Link
              href="/contests"
              className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors"
              aria-label="View coding contests"
            >
              🏆 Contests
            </Link>
            <Link
              href="/roadmap"
              className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors"
              aria-label="View career roadmaps"
            >
              Career Roadmaps
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <FiX className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <FiMenu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>

            <ThemeSelector />

            {/* Bookmarks Link */}
            <Link
              href="/bookmarks"
              className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 group"
              aria-label={`My Bookmarks${bookmarkCount > 0 ? ` (${bookmarkCount} items)` : ''}`}
            >
              <FiBookmark className="w-5 h-5 text-gray-700 dark:text-gray-300" aria-hidden="true" />
              {bookmarkCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-600 text-white text-xs font-bold rounded-full flex items-center justify-center" aria-hidden="true">
                  {bookmarkCount > 9 ? '9+' : bookmarkCount}
                </span>
              )}
            </Link>

            {/* Achievements Link */}
            <Link
              href="/achievements"
              className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 group"
              aria-label="My Achievements"
            >
              <span className="text-xl" role="img" aria-label="Trophy">🏆</span>
            </Link>

            {/* Analytics Link */}
            <Link
              href="/analytics"
              className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 group"
              aria-label="Performance Analytics"
            >
              <span className="text-xl" role="img" aria-label="Chart">📊</span>
            </Link>

            {!isLoading && (
              <>
                {user ? (
                  <Link
                    href="/profile"
                    className="hidden sm:flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <FiUser className="w-4 h-4" />
                    <span className="hidden sm:inline">{user.name}</span>
                  </Link>
                ) : (
                  <Link
                    href="/login"
                    className="hidden sm:flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <FiLogIn className="w-4 h-4" />
                    <span>Sign In</span>
                  </Link>
                )}
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 py-4 space-y-3">
            <Link
              href="/roadmap"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <FiMap className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="font-medium text-gray-700 dark:text-gray-300">Career Roadmaps</span>
            </Link>

            {!isLoading && (
              <>
                {user ? (
                  <Link
                    href="/profile"
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
                  >
                    <FiUser className="w-5 h-5" />
                    <span className="font-medium">{user.name}</span>
                  </Link>
                ) : (
                  <Link
                    href="/login"
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
                  >
                    <FiLogIn className="w-5 h-5" />
                    <span className="font-medium">Sign In</span>
                  </Link>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </header>
  )
}
