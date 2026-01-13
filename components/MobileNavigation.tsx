'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import Link from 'next/link'
import { FiHome, FiBook, FiCode, FiMap, FiAward } from 'react-icons/fi'
import { usePathname } from 'next/navigation'

export default function MobileNavigation() {
    const { isMobile } = useMediaQuery()
    const pathname = usePathname()

    if (!isMobile) return null

    const navItems = [
        { href: '/', icon: FiHome, label: 'Home' },
        { href: '/theory', icon: FiBook, label: 'Theory' },
        { href: '/practice', icon: FiCode, label: 'Practice' },
        { href: '/roadmap', icon: FiMap, label: 'Roadmap' },
        { href: '/quiz', icon: FiAward, label: 'Quiz' },
    ]

    return (
        <nav
            className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg md:hidden"
            role="navigation"
            aria-label="Mobile navigation"
        >
            <div className="flex items-center justify-around px-2 py-2">
                {navItems.map(({ href, icon: Icon, label }) => {
                    const isActive = pathname === href || pathname?.startsWith(href + '/')

                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 ${isActive
                                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                                }`}
                            aria-label={label}
                            aria-current={isActive ? 'page' : undefined}
                        >
                            <Icon className="w-6 h-6" aria-hidden="true" />
                            <span className="text-xs font-medium">{label}</span>
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}
