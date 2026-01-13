import { useEffect, useCallback, RefObject } from 'react'

interface KeyboardNavigationOptions {
    onEscape?: () => void
    onEnter?: () => void
    onArrowUp?: () => void
    onArrowDown?: () => void
    onArrowLeft?: () => void
    onArrowRight?: () => void
    onTab?: () => void
    enabled?: boolean
}

export function useKeyboardNavigation(options: KeyboardNavigationOptions) {
    const {
        onEscape,
        onEnter,
        onArrowUp,
        onArrowDown,
        onArrowLeft,
        onArrowRight,
        onTab,
        enabled = true
    } = options

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (!enabled) return

        switch (event.key) {
            case 'Escape':
                if (onEscape) {
                    event.preventDefault()
                    onEscape()
                }
                break
            case 'Enter':
                if (onEnter && event.target instanceof HTMLElement &&
                    !['INPUT', 'TEXTAREA', 'SELECT'].includes(event.target.tagName)) {
                    event.preventDefault()
                    onEnter()
                }
                break
            case 'ArrowUp':
                if (onArrowUp) {
                    event.preventDefault()
                    onArrowUp()
                }
                break
            case 'ArrowDown':
                if (onArrowDown) {
                    event.preventDefault()
                    onArrowDown()
                }
                break
            case 'ArrowLeft':
                if (onArrowLeft) {
                    event.preventDefault()
                    onArrowLeft()
                }
                break
            case 'ArrowRight':
                if (onArrowRight) {
                    event.preventDefault()
                    onArrowRight()
                }
                break
            case 'Tab':
                if (onTab) {
                    onTab()
                }
                break
        }
    }, [enabled, onEscape, onEnter, onArrowUp, onArrowDown, onArrowLeft, onArrowRight, onTab])

    useEffect(() => {
        if (enabled) {
            window.addEventListener('keydown', handleKeyDown)
            return () => window.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleKeyDown, enabled])
}

// Focus trap for modals and dialogs
export function useFocusTrap(containerRef: RefObject<HTMLElement>, isActive: boolean = true) {
    useEffect(() => {
        if (!isActive || !containerRef.current) return

        const container = containerRef.current
        const focusableElements = container.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )

        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        const handleTabKey = (e: KeyboardEvent) => {
            if (e.key !== 'Tab') return

            if (e.shiftKey) {
                // Shift + Tab
                if (document.activeElement === firstElement) {
                    e.preventDefault()
                    lastElement?.focus()
                }
            } else {
                // Tab
                if (document.activeElement === lastElement) {
                    e.preventDefault()
                    firstElement?.focus()
                }
            }
        }

        // Focus first element when trap activates
        firstElement?.focus()

        container.addEventListener('keydown', handleTabKey)
        return () => container.removeEventListener('keydown', handleTabKey)
    }, [containerRef, isActive])
}

// Auto-focus management
export function useAutoFocus(ref: RefObject<HTMLElement>, shouldFocus: boolean = true) {
    useEffect(() => {
        if (shouldFocus && ref.current) {
            ref.current.focus()
        }
    }, [ref, shouldFocus])
}

// Announce to screen readers
export function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite') {
    const announcement = document.createElement('div')
    announcement.setAttribute('role', 'status')
    announcement.setAttribute('aria-live', priority)
    announcement.setAttribute('aria-atomic', 'true')
    announcement.className = 'sr-only'
    announcement.textContent = message

    document.body.appendChild(announcement)

    setTimeout(() => {
        document.body.removeChild(announcement)
    }, 1000)
}
