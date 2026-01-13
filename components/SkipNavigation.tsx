'use client'

import Link from 'next/link'

export default function SkipNavigation() {
    return (
        <div className="sr-only focus-within:not-sr-only">
            <Link
                href="#main-content"
                className="fixed top-4 left-4 z-[9999] px-4 py-2 bg-blue-600 text-white rounded-lg font-medium shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
                Skip to main content
            </Link>
            <Link
                href="#navigation"
                className="fixed top-4 left-40 z-[9999] px-4 py-2 bg-blue-600 text-white rounded-lg font-medium shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
                Skip to navigation
            </Link>
        </div>
    )
}
