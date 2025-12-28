import Skeleton from './Skeleton';

export default function ChartSkeleton({ height = 300 }: { height?: number }) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            {/* Title */}
            <Skeleton className="h-6 w-48 mb-4" />

            {/* Chart area */}
            <div style={{ height: `${height}px` }}>
                <Skeleton className="w-full h-full rounded-lg" />
            </div>
        </div>
    );
}

export function StatCardSkeleton() {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
                <Skeleton className="w-8 h-8" />
                <Skeleton className="w-16 h-4" />
            </div>
            <Skeleton className="h-10 w-24 mb-2" />
            <Skeleton className="h-4 w-32" />
        </div>
    );
}
