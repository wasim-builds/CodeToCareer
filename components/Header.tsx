'use client'

import Link from 'next/link'
import { FiUser, FiLogIn, FiBookmark } from 'react-icons/fi'
import { useAuth } from '@/contexts/AuthContext'
import { useBookmark } from '@/contexts/BookmarkContext'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const { user, isLoading } = useAuth()
  const { getBookmarkCount } = useBookmark()
  const bookmarkCount = getBookmarkCount()

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-xl font-bold text-green-600 dark:text-green-400 transition-colors">
            CodeToCareer
          </Link>

          <div className="flex items-center gap-4">
            <ThemeToggle />

            {/* Bookmarks Link */}
            <Link
              href="/bookmarks"
              className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 group"
              title="My Bookmarks"
            >
              <FiBookmark className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              {bookmarkCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {bookmarkCount > 9 ? '9+' : bookmarkCount}
                </span>
              )}
            </Link>

            {/* Achievements Link */}
            <Link
              href="/achievements"
              className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 group"
              title="My Achievements"
            >
              <span className="text-xl">🏆</span>
            </Link>

            {/* Analytics Link */}
            <Link
              href="/analytics"
              className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 group"
              title="Performance Analytics"
            >
              <span className="text-xl">📊</span>
            </Link>

            {!isLoading && (
              <>
                {user ? (
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <FiUser className="w-4 h-4" />
                    <span className="hidden sm:inline">{user.name}</span>
                  </Link>
                ) : (
                  <Link
                    href="/login"
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <FiLogIn className="w-4 h-4" />
                    <span>Login</span>
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
