'use client';

import { useRouter } from 'next/navigation';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';
import { useTheme } from '@/contexts/ThemeContext';
import KeyboardShortcutsHelp, { useKeyboardHelp } from '@/components/KeyboardShortcutsHelp';

export default function GlobalKeyboardShortcuts() {
    const router = useRouter();
    const { toggleTheme } = useTheme();
    const keyboardHelp = useKeyboardHelp();

    // Global navigation shortcuts
    useKeyboardShortcuts({
        'h': () => router.push('/'),
        'q': () => router.push('/quiz'),
        'a': () => router.push('/analytics'),
        't': () => router.push('/achievements'),
        'k': () => router.push('/bookmarks'),
        'd': () => toggleTheme(),
    });

    return <KeyboardShortcutsHelp isOpen={keyboardHelp.isOpen} onClose={keyboardHelp.close} />;
}
