'use client';

import { useState, useCallback } from 'react';
import { FiUpload, FiFile, FiX, FiCheck } from 'react-icons/fi';

interface ResumeData {
    text: string;
    projects: string[];
    skills: string[];
    experience: string[];
}

interface ResumeUploadProps {
    onResumeUploaded: (data: ResumeData) => void;
}

export default function ResumeUpload({ onResumeUploaded }: ResumeUploadProps) {
    const [file, setFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [resumeData, setResumeData] = useState<ResumeData | null>(null);

    const parseResume = async (file: File): Promise<ResumeData> => {
        // For now, we'll use a simple text extraction
        // In production, you'd use pdf-parse or similar
        const text = await file.text();

        // Simple parsing logic (can be enhanced)
        const projects = extractProjects(text);
        const skills = extractSkills(text);
        const experience = extractExperience(text);

        return { text, projects, skills, experience };
    };

    const extractProjects = (text: string): string[] => {
        // Look for project sections
        const projectKeywords = ['project', 'built', 'developed', 'created'];
        const lines = text.split('\n');
        const projects: string[] = [];

        lines.forEach(line => {
            if (projectKeywords.some(keyword => line.toLowerCase().includes(keyword))) {
                projects.push(line.trim());
            }
        });

        return projects.slice(0, 5); // Top 5 projects
    };

    const extractSkills = (text: string): string[] => {
        const commonSkills = [
            'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java',
            'SQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'Next.js', 'Express'
        ];

        return commonSkills.filter(skill =>
            text.toLowerCase().includes(skill.toLowerCase())
        );
    };

    const extractExperience = (text: string): string[] => {
        // Simple experience extraction
        const lines = text.split('\n');
        const experience: string[] = [];

        lines.forEach(line => {
            if (line.match(/\d{4}\s*-\s*\d{4}/) || line.match(/\d{4}\s*-\s*present/i)) {
                experience.push(line.trim());
            }
        });

        return experience.slice(0, 3);
    };

    const handleFileSelect = useCallback(async (selectedFile: File) => {
        setError(null);

        // Validate file
        if (!selectedFile.type.includes('pdf') && !selectedFile.type.includes('text')) {
            setError('Please upload a PDF or text file');
            return;
        }

        if (selectedFile.size > 5 * 1024 * 1024) {
            setError('File size must be less than 5MB');
            return;
        }

        setFile(selectedFile);
        setIsUploading(true);

        try {
            const data = await parseResume(selectedFile);
            setResumeData(data);
            onResumeUploaded(data);
        } catch (err) {
            setError('Failed to parse resume. Please try again.');
            console.error(err);
        } finally {
            setIsUploading(false);
        }
    }, [onResumeUploaded]);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) {
            handleFileSelect(droppedFile);
        }
    }, [handleFileSelect]);

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
    }, []);

    const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            handleFileSelect(selectedFile);
        }
    }, [handleFileSelect]);

    const handleRemove = () => {
        setFile(null);
        setResumeData(null);
        setError(null);
    };

    return (
        <div className="space-y-6">
            {/* Upload Area */}
            {!file ? (
                <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    className="border-2 border-dashed border-gray-600 rounded-xl p-12 text-center hover:border-green-500 transition-colors cursor-pointer bg-gray-800/50"
                >
                    <input
                        type="file"
                        id="resume-upload"
                        accept=".pdf,.txt"
                        onChange={handleFileInput}
                        className="hidden"
                    />
                    <label htmlFor="resume-upload" className="cursor-pointer">
                        <FiUpload className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                        <h3 className="text-xl font-semibold text-white mb-2">
                            Upload Your Resume
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Drag and drop or click to browse
                        </p>
                        <p className="text-sm text-gray-500">
                            PDF or TXT • Max 5MB
                        </p>
                    </label>
                </div>
            ) : (
                <div className="border border-gray-700 rounded-xl p-6 bg-gray-800">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center">
                                <FiFile className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-white">{file.name}</h4>
                                <p className="text-sm text-gray-400">
                                    {(file.size / 1024).toFixed(1)} KB
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={handleRemove}
                            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                        >
                            <FiX className="w-5 h-5 text-gray-400" />
                        </button>
                    </div>

                    {isUploading && (
                        <div className="text-center py-4">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500 mx-auto"></div>
                            <p className="text-gray-400 mt-2">Analyzing resume...</p>
                        </div>
                    )}

                    {resumeData && !isUploading && (
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-green-400">
                                <FiCheck className="w-5 h-5" />
                                <span className="font-medium">Resume analyzed successfully!</span>
                            </div>

                            {/* Projects Found */}
                            {resumeData.projects.length > 0 && (
                                <div>
                                    <h5 className="text-sm font-semibold text-gray-300 mb-2">
                                        Projects Found ({resumeData.projects.length})
                                    </h5>
                                    <ul className="space-y-1">
                                        {resumeData.projects.map((project, i) => (
                                            <li key={i} className="text-sm text-gray-400 pl-4 border-l-2 border-green-600">
                                                {project}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Skills Found */}
                            {resumeData.skills.length > 0 && (
                                <div>
                                    <h5 className="text-sm font-semibold text-gray-300 mb-2">
                                        Skills Identified
                                    </h5>
                                    <div className="flex flex-wrap gap-2">
                                        {resumeData.skills.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}

            {/* Error Message */}
            {error && (
                <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
                    <p className="text-red-400 text-sm">{error}</p>
                </div>
            )}
        </div>
    );
}
