import { useEffect } from 'react';

interface KeyboardShortcutOptions {
    enabled?: boolean;
    preventDefault?: boolean;
}

/**
 * Custom hook for handling keyboard shortcuts
 * @param shortcuts - Object mapping keys to callback functions
 * @param options - Configuration options
 */
export function useKeyboardShortcuts(
    shortcuts: Record<string, () => void>,
    options: KeyboardShortcutOptions = {}
) {
    const { enabled = true, preventDefault = true } = options;

    useEffect(() => {
        if (!enabled) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            // Don't trigger shortcuts when typing in input fields
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA' ||
                target.tagName === 'SELECT' ||
                target.isContentEditable
            ) {
                return;
            }

            // Don't trigger shortcuts when typing in Monaco Editor or other code editors
            // Monaco Editor uses divs with specific classes and data attributes
            if (
                target.closest('.monaco-editor') ||
                target.closest('[class*="editor"]') ||
                target.closest('[role="textbox"]') ||
                target.closest('[contenteditable="true"]')
            ) {
                return;
            }

            // Don't trigger when modifier keys are pressed (except for special combos)
            if (e.ctrlKey || e.metaKey || e.altKey) {
                return;
            }

            const key = e.key.toLowerCase();

            if (shortcuts[key]) {
                if (preventDefault) {
                    e.preventDefault();
                }
                shortcuts[key]();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [shortcuts, enabled, preventDefault]);
}

/**
 * Hook for a single keyboard shortcut
 */
export function useKeyboardShortcut(
    key: string,
    callback: () => void,
    options: KeyboardShortcutOptions = {}
) {
    useKeyboardShortcuts({ [key]: callback }, options);
}
