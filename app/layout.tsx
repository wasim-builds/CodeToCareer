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

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "CodeToCareer - Master Technical Skills for Your Dream Job",
  description: 'Your journey from code to career. Master 35+ technical topics with 5000+ interview questions. Learn theory, take quizzes, and land your dream tech job.',
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
                        <GlobalKeyboardShortcuts />
                        <Header />
                        <main className="min-h-screen">
                          {children}
                        </main>
                        <Footer />
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

