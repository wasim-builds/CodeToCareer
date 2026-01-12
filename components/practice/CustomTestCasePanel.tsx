"use client";

import { useState } from 'react';
import { FiPlus, FiTrash2, FiEdit2, FiPlay, FiChevronDown, FiChevronUp } from 'react-icons/fi';

export interface CustomTestCase {
    id: string;
    input: Record<string, unknown>;
    expected: unknown;
    description?: string;
    createdAt: string;
}

interface CustomTestCasePanelProps {
    problemId: string;
    testCases: CustomTestCase[];
    onAdd: (testCase: Omit<CustomTestCase, 'id' | 'createdAt'>) => void;
    onDelete: (id: string) => void;
    onUpdate: (testCase: CustomTestCase) => void;
    onRunCustomTests?: () => void;
}

export function CustomTestCasePanel({
    problemId,
    testCases,
    onAdd,
    onDelete,
    onUpdate,
    onRunCustomTests,
}: CustomTestCasePanelProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        input: '{}',
        expected: '',
        description: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const parsedInput = JSON.parse(formData.input);
            const parsedExpected = JSON.parse(formData.expected);

            if (editingId) {
                const existingCase = testCases.find(tc => tc.id === editingId);
                if (existingCase) {
                    onUpdate({
                        ...existingCase,
                        input: parsedInput,
                        expected: parsedExpected,
                        description: formData.description,
                    });
                }
                setEditingId(null);
            } else {
                onAdd({
                    input: parsedInput,
                    expected: parsedExpected,
                    description: formData.description,
                });
            }

            setFormData({ input: '{}', expected: '', description: '' });
            setIsAdding(false);
        } catch (error) {
            alert('Invalid JSON format. Please check your input.');
        }
    };

    const handleEdit = (testCase: CustomTestCase) => {
        setFormData({
            input: JSON.stringify(testCase.input, null, 2),
            expected: JSON.stringify(testCase.expected, null, 2),
            description: testCase.description || '',
        });
        setEditingId(testCase.id);
        setIsAdding(true);
    };

    const handleCancel = () => {
        setFormData({ input: '{}', expected: '', description: '' });
        setIsAdding(false);
        setEditingId(null);
    };

    return (
        <div className="border-t border-gray-800 bg-gray-900">
            {/* Header */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-300 hover:bg-gray-800 transition-colors"
            >
                <div className="flex items-center gap-2">
                    <span>Custom Test Cases</span>
                    {testCases.length > 0 && (
                        <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded text-xs font-semibold">
                            {testCases.length}
                        </span>
                    )}
                </div>
                {isExpanded ? (
                    <FiChevronUp className="w-4 h-4" />
                ) : (
                    <FiChevronDown className="w-4 h-4" />
                )}
            </button>

            {/* Content */}
            {isExpanded && (
                <div className="px-4 pb-4 space-y-3 max-h-96 overflow-y-auto">
                    {/* Add/Edit Form */}
                    {isAdding ? (
                        <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg p-4 space-y-3">
                            <h4 className="text-sm font-semibold text-white">
                                {editingId ? 'Edit Test Case' : 'Add Custom Test Case'}
                            </h4>

                            <div>
                                <label className="block text-xs text-gray-400 mb-1">
                                    Description (optional)
                                </label>
                                <input
                                    type="text"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    placeholder="e.g., Edge case: empty array"
                                    className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                            <div>
                                <label className="block text-xs text-gray-400 mb-1">
                                    Input (JSON format)
                                </label>
                                <textarea
                                    value={formData.input}
                                    onChange={(e) => setFormData({ ...formData, input: e.target.value })}
                                    placeholder='{"nums": [1, 2, 3], "target": 5}'
                                    rows={3}
                                    className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-sm text-gray-300 font-mono focus:outline-none focus:ring-2 focus:ring-green-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs text-gray-400 mb-1">
                                    Expected Output (JSON format)
                                </label>
                                <textarea
                                    value={formData.expected}
                                    onChange={(e) => setFormData({ ...formData, expected: e.target.value })}
                                    placeholder='[0, 1]'
                                    rows={2}
                                    className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-sm text-gray-300 font-mono focus:outline-none focus:ring-2 focus:ring-green-500"
                                    required
                                />
                            </div>

                            <div className="flex gap-2">
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded text-sm font-medium transition-colors"
                                >
                                    {editingId ? 'Update' : 'Add'} Test Case
                                </button>
                                <button
                                    type="button"
                                    onClick={handleCancel}
                                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded text-sm transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    ) : (
                        <button
                            onClick={() => setIsAdding(true)}
                            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm font-medium transition-colors border border-dashed border-gray-700"
                        >
                            <FiPlus className="w-4 h-4" />
                            Add Custom Test Case
                        </button>
                    )}

                    {/* Test Cases List */}
                    {testCases.length > 0 && (
                        <div className="space-y-2">
                            {testCases.map((testCase, idx) => (
                                <div
                                    key={testCase.id}
                                    className="bg-gray-800 rounded-lg p-3 hover:bg-gray-750 transition-colors"
                                >
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-sm font-medium text-white">
                                                    Test Case {idx + 1}
                                                </span>
                                                {testCase.description && (
                                                    <span className="text-xs text-gray-400">
                                                        - {testCase.description}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <button
                                                onClick={() => handleEdit(testCase)}
                                                className="p-1.5 hover:bg-gray-700 text-gray-400 hover:text-blue-400 rounded transition-colors"
                                                title="Edit"
                                            >
                                                <FiEdit2 className="w-3.5 h-3.5" />
                                            </button>
                                            <button
                                                onClick={() => onDelete(testCase.id)}
                                                className="p-1.5 hover:bg-gray-700 text-gray-400 hover:text-red-400 rounded transition-colors"
                                                title="Delete"
                                            >
                                                <FiTrash2 className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="space-y-1 text-xs font-mono">
                                        <div>
                                            <span className="text-gray-400">Input:</span>
                                            <div className="mt-1 bg-gray-900 rounded px-2 py-1.5 text-gray-300">
                                                {JSON.stringify(testCase.input)}
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-gray-400">Expected:</span>
                                            <div className="mt-1 bg-gray-900 rounded px-2 py-1.5 text-gray-300">
                                                {JSON.stringify(testCase.expected)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Run Custom Tests Button */}
                    {testCases.length > 0 && onRunCustomTests && (
                        <button
                            onClick={onRunCustomTests}
                            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded text-sm font-medium transition-colors"
                        >
                            <FiPlay className="w-4 h-4" />
                            Run Custom Tests Only
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
