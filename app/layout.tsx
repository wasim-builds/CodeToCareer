import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CartProvider } from '@/contexts/CartContext'
import { WishlistProvider } from '@/contexts/WishlistContext'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { QuizProvider } from '@/contexts/QuizContext'
import { AuthProvider } from '@/contexts/AuthContext'
import { GamificationProvider } from '@/contexts/GamificationContext'
import { PracticeProvider } from '@/contexts/PracticeContext'
import { BookmarkProvider } from '@/contexts/BookmarkContext'
import GlobalKeyboardShortcuts from '@/components/GlobalKeyboardShortcuts'
import PWAInstallPrompt from '@/components/PWAInstallPrompt'
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration'
import SkipNavigation from '@/components/SkipNavigation'
import MobileNavigation from '@/components/MobileNavigation'
import { ContestProvider } from '@/contexts/ContestContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "CodeToCareer - Master Technical Skills for Your Dream Job",
  description: 'Your journey from code to career. Master 35+ technical topics with 5000+ interview questions. Learn theory, take quizzes, and land your dream tech job.',
  manifest: '/manifest.json',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3B82F6' },
    { media: '(prefers-color-scheme: dark)', color: '#1E40AF' }
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'CodeToCareer'
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors`}>
        <AuthProvider>
          <GamificationProvider>
            <ThemeProvider>
              <CartProvider>
                <WishlistProvider>
                  <QuizProvider>
                    <BookmarkProvider>
                      <PracticeProvider>
                        <ContestProvider>
                          <SkipNavigation />
                          <GlobalKeyboardShortcuts />
                          <ServiceWorkerRegistration />
                          <PWAInstallPrompt />
                          <Header />
                          <main id="main-content" className="min-h-screen pb-20 md:pb-0" role="main">
                            {children}
                          </main>
                          <Footer />
                          <MobileNavigation />
                        </ContestProvider>
                      </PracticeProvider>
                    </BookmarkProvider>
                  </QuizProvider>
                </WishlistProvider>
              </CartProvider>
            </ThemeProvider>
          </GamificationProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

