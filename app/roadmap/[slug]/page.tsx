import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllRoadmaps, getRoadmapBySlug } from '@/data/roadmaps';
import { RoadmapViewer } from '@/components/roadmap/RoadmapViewer';
import { FiArrowLeft, FiClock, FiTrendingUp, FiUsers, FiAward } from 'react-icons/fi';

interface RoadmapDetailPageProps {
    params: {
        slug: string;
    };
}

export function generateStaticParams() {
    return getAllRoadmaps().map((roadmap) => ({ slug: roadmap.slug }));
}

export default function RoadmapDetailPage({ params }: RoadmapDetailPageProps) {
    const roadmap = getRoadmapBySlug(params.slug);

    if (!roadmap) {
        return notFound();
    }

    const difficultyConfig = {
        'beginner-friendly': { color: 'text-green-400', bg: 'bg-green-400/10', label: 'Beginner Friendly' },
        'intermediate': { color: 'text-yellow-400', bg: 'bg-yellow-400/10', label: 'Intermediate' },
        'advanced': { color: 'text-red-400', bg: 'bg-red-400/10', label: 'Advanced' }
    };

    const config = difficultyConfig[roadmap.difficulty];

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Header */}
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 border-b border-gray-800">
                <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
                    {/* Back Button */}
                    <Link
                        href="/roadmap"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors"
                    >
                        <FiArrowLeft className="w-4 h-4" />
                        <span className="text-sm">Back to Roadmaps</span>
                    </Link>

                    {/* Title Section */}
                    <div className="flex items-start gap-6">
                        <div className="text-6xl">{roadmap.icon}</div>
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                                <h1 className="text-4xl font-bold text-white">{roadmap.title}</h1>
                                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${config.bg} ${config.color}`}>
                                    {config.label}
                                </span>
                            </div>
                            <p className="text-xl text-gray-300 mb-4">{roadmap.description}</p>
                            <p className="text-sm text-gray-400">{roadmap.category}</p>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                            <div className="flex items-center gap-2 text-gray-400 mb-1">
                                <FiClock className="w-4 h-4" />
                                <span className="text-xs">Duration</span>
                            </div>
                            <p className="text-lg font-semibold text-white">{roadmap.totalDuration}</p>
                        </div>
                        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                            <div className="flex items-center gap-2 text-gray-400 mb-1">
                                <FiTrendingUp className="w-4 h-4" />
                                <span className="text-xs">Avg Salary</span>
                            </div>
                            <p className="text-lg font-semibold text-green-400">{roadmap.careerOutlook.averageSalary}</p>
                        </div>
                        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                            <div className="flex items-center gap-2 text-gray-400 mb-1">
                                <FiUsers className="w-4 h-4" />
                                <span className="text-xs">Job Growth</span>
                            </div>
                            <p className="text-lg font-semibold text-blue-400">{roadmap.careerOutlook.jobGrowth}</p>
                        </div>
                        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                            <div className="flex items-center gap-2 text-gray-400 mb-1">
                                <FiAward className="w-4 h-4" />
                                <span className="text-xs">Phases</span>
                            </div>
                            <p className="text-lg font-semibold text-white">{roadmap.phases.length} Levels</p>
                        </div>
                    </div>

                    {/* Prerequisites */}
                    {roadmap.prerequisites && roadmap.prerequisites.length > 0 && (
                        <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                            <h3 className="text-sm font-semibold text-yellow-400 mb-2">Prerequisites</h3>
                            <ul className="space-y-1">
                                {roadmap.prerequisites.map((prereq, idx) => (
                                    <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                                        {prereq}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Top Companies */}
                    <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                        <h3 className="text-sm font-semibold text-gray-300 mb-3">Top Hiring Companies</h3>
                        <div className="flex flex-wrap gap-2">
                            {roadmap.careerOutlook.topCompanies.map((company) => (
                                <span
                                    key={company}
                                    className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm font-medium"
                                >
                                    {company}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Roadmap Content */}
            <div className="max-w-5xl mx-auto px-4 py-8">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white mb-2">Learning Path</h2>
                    <p className="text-gray-400">
                        Follow this structured path from beginner to expert. Click on each phase to expand and see detailed steps.
                    </p>
                </div>

                <RoadmapViewer phases={roadmap.phases} />
            </div>
        </div>
    );
}
