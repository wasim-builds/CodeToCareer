interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
    fullPage?: boolean;
}

export default function LoadingSpinner({ size = 'md', className = '', fullPage = false }: LoadingSpinnerProps) {
    const sizeClasses = {
        sm: 'w-4 h-4 border-2',
        md: 'w-8 h-8 border-2',
        lg: 'w-12 h-12 border-3',
        xl: 'w-16 h-16 border-4',
    };

    const spinner = (
        <div
            className={`${sizeClasses[size]} border-gray-300 dark:border-gray-600 border-t-green-600 rounded-full animate-spin ${className}`}
            role="status"
            aria-label="Loading"
        />
    );

    if (fullPage) {
        return (
            <div className="fixed inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="text-center">
                    {spinner}
                    <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
                </div>
            </div>
        );
    }

    return spinner;
}

// Inline loading with text
export function LoadingInline({ text = 'Loading...' }: { text?: string }) {
    return (
        <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
            <LoadingSpinner size="sm" />
            <span>{text}</span>
        </div>
    );
}

// Loading overlay for sections
export function LoadingOverlay({ text = 'Loading...' }: { text?: string }) {
    return (
        <div className="absolute inset-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm flex items-center justify-center rounded-xl">
            <div className="text-center">
                <LoadingSpinner size="lg" />
                <p className="mt-4 text-gray-600 dark:text-gray-400">{text}</p>
            </div>
        </div>
    );
}
