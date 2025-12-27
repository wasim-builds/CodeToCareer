'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface DifficultyChartProps {
    data: {
        name: string;
        value: number;
        avgScore: number;
    }[];
}

const COLORS = {
    Easy: '#10b981',
    Medium: '#f59e0b',
    Hard: '#ef4444',
};

export default function DifficultyChart({ data }: DifficultyChartProps) {
    const total = data.reduce((sum, item) => sum + item.value, 0);

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Difficulty Breakdown
            </h3>

            {total === 0 ? (
                <div className="h-64 flex items-center justify-center text-gray-500">
                    No difficulty data available yet.
                </div>
            ) : (
                <>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[entry.name as keyof typeof COLORS]} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#1f2937',
                                    border: '1px solid #374151',
                                    borderRadius: '8px',
                                    color: '#fff'
                                }}
                                formatter={(value: number, name: string, props: any) => [
                                    `${value} quizzes (Avg: ${props.payload.avgScore}%)`,
                                    name
                                ]}
                            />
                        </PieChart>
                    </ResponsiveContainer>

                    {/* Stats */}
                    <div className="mt-4 space-y-2">
                        {data.map((item) => (
                            <div key={item.name} className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2">
                                    <div
                                        className="w-3 h-3 rounded-full"
                                        style={{ backgroundColor: COLORS[item.name as keyof typeof COLORS] }}
                                    />
                                    <span className="text-gray-700 dark:text-gray-300">{item.name}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-gray-600 dark:text-gray-400">{item.value} quizzes</span>
                                    <span className="font-medium text-gray-900 dark:text-white">{item.avgScore}% avg</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
