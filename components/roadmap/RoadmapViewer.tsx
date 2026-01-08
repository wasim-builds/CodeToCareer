"use client";

import { RoadmapPhase, RoadmapStep } from '@/types/roadmap';
import { useState } from 'react';
import { FiClock, FiCheckCircle, FiChevronDown, FiExternalLink, FiBook, FiVideo, FiFileText } from 'react-icons/fi';

interface RoadmapViewerProps {
    phases: RoadmapPhase[];
}

export function RoadmapViewer({ phases }: RoadmapViewerProps) {
    const [expandedPhases, setExpandedPhases] = useState<string[]>([phases[0]?.id]);
    const [expandedSteps, setExpandedSteps] = useState<string[]>([]);

    const togglePhase = (phaseId: string) => {
        setExpandedPhases(prev =>
            prev.includes(phaseId)
                ? prev.filter(id => id !== phaseId)
                : [...prev, phaseId]
        );
    };

    const toggleStep = (stepId: string) => {
        setExpandedSteps(prev =>
            prev.includes(stepId)
                ? prev.filter(id => id !== stepId)
                : [...prev, stepId]
        );
    };

    const levelColors = {
        beginner: 'from-green-500/20 to-green-500/5 border-green-500/30',
        intermediate: 'from-yellow-500/20 to-yellow-500/5 border-yellow-500/30',
        advanced: 'from-orange-500/20 to-orange-500/5 border-orange-500/30',
        expert: 'from-red-500/20 to-red-500/5 border-red-500/30'
    };

    const getResourceIcon = (type: string) => {
        switch (type) {
            case 'video': return <FiVideo className="w-4 h-4" />;
            case 'book': return <FiBook className="w-4 h-4" />;
            case 'course': return <FiFileText className="w-4 h-4" />;
            default: return <FiExternalLink className="w-4 h-4" />;
        }
    };

    return (
        <div className="space-y-6">
            {phases.map((phase, phaseIndex) => {
                const isExpanded = expandedPhases.includes(phase.id);

                return (
                    <div
                        key={phase.id}
                        className={`relative border rounded-xl bg-gradient-to-br ${levelColors[phase.level]} overflow-hidden`}
                    >
                        {/* Phase Header */}
                        <button
                            onClick={() => togglePhase(phase.id)}
                            className="w-full p-6 text-left hover:bg-white/5 transition-colors"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-3xl font-bold text-white/30">
                                            {String(phaseIndex + 1).padStart(2, '0')}
                                        </span>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-1">{phase.title}</h3>
                                            <p className="text-gray-400 text-sm capitalize">{phase.level} Level</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed">{phase.description}</p>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <FiClock className="w-4 h-4" />
                                        <span>{phase.estimatedWeeks} weeks</span>
                                    </div>
                                    <FiChevronDown
                                        className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                                    />
                                </div>
                            </div>
                        </button>

                        {/* Phase Content */}
                        {isExpanded && (
                            <div className="px-6 pb-6 space-y-4">
                                {phase.steps.map((step, stepIndex) => {
                                    const isStepExpanded = expandedSteps.includes(step.id);

                                    return (
                                        <div
                                            key={step.id}
                                            className="bg-gray-900/50 rounded-lg border border-gray-800 overflow-hidden"
                                        >
                                            {/* Step Header */}
                                            <button
                                                onClick={() => toggleStep(step.id)}
                                                className="w-full p-4 text-left hover:bg-white/5 transition-colors"
                                            >
                                                <div className="flex items-start justify-between gap-4">
                                                    <div className="flex items-start gap-3 flex-1">
                                                        <div className="mt-1 w-6 h-6 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                                                            <span className="text-xs font-bold text-green-400">
                                                                {stepIndex + 1}
                                                            </span>
                                                        </div>
                                                        <div className="flex-1">
                                                            <h4 className="text-lg font-semibold text-white mb-1">
                                                                {step.title}
                                                            </h4>
                                                            <p className="text-sm text-gray-400">{step.description}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col items-end gap-2">
                                                        <div className="flex items-center gap-2 text-sm text-gray-400">
                                                            <FiClock className="w-4 h-4" />
                                                            <span>{step.estimatedHours}h</span>
                                                        </div>
                                                        <FiChevronDown
                                                            className={`w-4 h-4 text-gray-400 transition-transform ${isStepExpanded ? 'rotate-180' : ''}`}
                                                        />
                                                    </div>
                                                </div>
                                            </button>

                                            {/* Step Details */}
                                            {isStepExpanded && (
                                                <div className="px-4 pb-4 space-y-4 border-t border-gray-800">
                                                    {/* Skills */}
                                                    <div>
                                                        <h5 className="text-sm font-semibold text-gray-300 mb-2 mt-4">
                                                            Skills You'll Learn
                                                        </h5>
                                                        <div className="flex flex-wrap gap-2">
                                                            {step.skills.map((skill) => (
                                                                <span
                                                                    key={skill}
                                                                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-medium"
                                                                >
                                                                    {skill}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Resources */}
                                                    <div>
                                                        <h5 className="text-sm font-semibold text-gray-300 mb-2">
                                                            Learning Resources
                                                        </h5>
                                                        <div className="space-y-2">
                                                            {step.resources.map((resource, idx) => (
                                                                <a
                                                                    key={idx}
                                                                    href={resource.url}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="flex items-center gap-3 p-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all group"
                                                                >
                                                                    <div className="text-gray-400 group-hover:text-green-400 transition-colors">
                                                                        {getResourceIcon(resource.type)}
                                                                    </div>
                                                                    <div className="flex-1">
                                                                        <p className="text-sm font-medium text-gray-200 group-hover:text-green-400 transition-colors">
                                                                            {resource.title}
                                                                        </p>
                                                                        <p className="text-xs text-gray-500 capitalize">{resource.type}</p>
                                                                    </div>
                                                                    <FiExternalLink className="w-4 h-4 text-gray-500 group-hover:text-green-400 transition-colors" />
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Projects */}
                                                    {step.projects && step.projects.length > 0 && (
                                                        <div>
                                                            <h5 className="text-sm font-semibold text-gray-300 mb-2">
                                                                Practice Projects
                                                            </h5>
                                                            <ul className="space-y-2">
                                                                {step.projects.map((project, idx) => (
                                                                    <li
                                                                        key={idx}
                                                                        className="flex items-start gap-2 text-sm text-gray-300"
                                                                    >
                                                                        <FiCheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                                                        <span>{project}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}

                                                    {/* Prerequisites */}
                                                    {step.prerequisites && step.prerequisites.length > 0 && (
                                                        <div className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                                                            <p className="text-xs font-semibold text-yellow-400 mb-1">
                                                                Prerequisites
                                                            </p>
                                                            <p className="text-xs text-gray-300">
                                                                Complete: {step.prerequisites.join(', ')}
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
