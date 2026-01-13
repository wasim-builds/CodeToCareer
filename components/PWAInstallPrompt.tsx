'use client'

import { useEffect, useState } from 'react'
import { FiDownload, FiX } from 'react-icons/fi'

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export default function PWAInstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
    const [showPrompt, setShowPrompt] = useState(false)
    const [isInstalled, setIsInstalled] = useState(false)

    useEffect(() => {
        // Check if already installed
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setIsInstalled(true)
            return
        }

        // Check if user dismissed the prompt before
        const dismissed = localStorage.getItem('pwa-install-dismissed')
        if (dismissed) {
            const dismissedDate = new Date(dismissed)
            const daysSinceDismissed = (Date.now() - dismissedDate.getTime()) / (1000 * 60 * 60 * 24)

            // Show again after 7 days
            if (daysSinceDismissed < 7) {
                return
            }
        }

        const handler = (e: Event) => {
            e.preventDefault()
            setDeferredPrompt(e as BeforeInstallPromptEvent)

            // Show prompt after 30 seconds of usage
            setTimeout(() => {
                setShowPrompt(true)
            }, 30000)
        }

        window.addEventListener('beforeinstallprompt', handler)

        return () => {
            window.removeEventListener('beforeinstallprompt', handler)
        }
    }, [])

    const handleInstall = async () => {
        if (!deferredPrompt) return

        deferredPrompt.prompt()
        const { outcome } = await deferredPrompt.userChoice

        if (outcome === 'accepted') {
            console.log('User accepted the install prompt')
            setIsInstalled(true)
        }

        setDeferredPrompt(null)
        setShowPrompt(false)
    }

    const handleDismiss = () => {
        setShowPrompt(false)
        localStorage.setItem('pwa-install-dismissed', new Date().toISOString())
    }

    if (isInstalled || !showPrompt || !deferredPrompt) {
        return null
    }

    return (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-slide-up">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-2xl p-4 relative">
                <button
                    onClick={handleDismiss}
                    className="absolute top-2 right-2 p-1 hover:bg-white/20 rounded-full transition-colors"
                    aria-label="Dismiss install prompt"
                >
                    <FiX className="w-5 h-5" />
                </button>

                <div className="flex items-start gap-3 pr-6">
                    <div className="bg-white/20 p-2 rounded-lg">
                        <FiDownload className="w-6 h-6" />
                    </div>

                    <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">Install CodeToCareer</h3>
                        <p className="text-sm text-white/90 mb-3">
                            Get quick access and work offline. Install our app for the best experience!
                        </p>

                        <div className="flex gap-2">
                            <button
                                onClick={handleInstall}
                                className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors"
                            >
                                Install Now
                            </button>
                            <button
                                onClick={handleDismiss}
                                className="bg-white/20 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-white/30 transition-colors"
                            >
                                Maybe Later
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
