"use client";

import { useState } from 'react';
import { FiEdit2, FiCheck, FiX, FiStar, FiTag, FiPlus } from 'react-icons/fi';

interface SubmissionAnnotationsProps {
    notes?: string;
    tags?: string[];
    isFavorite?: boolean;
    onNotesChange: (notes: string) => void;
    onTagsChange: (tags: string[]) => void;
    onFavoriteToggle: () => void;
}

export function SubmissionAnnotations({
    notes = '',
    tags = [],
    isFavorite = false,
    onNotesChange,
    onTagsChange,
    onFavoriteToggle,
}: SubmissionAnnotationsProps) {
    const [isEditingNotes, setIsEditingNotes] = useState(false);
    const [notesInput, setNotesInput] = useState(notes);
    const [isAddingTag, setIsAddingTag] = useState(false);
    const [tagInput, setTagInput] = useState('');

    const handleSaveNotes = () => {
        onNotesChange(notesInput);
        setIsEditingNotes(false);
    };

    const handleCancelNotes = () => {
        setNotesInput(notes);
        setIsEditingNotes(false);
    };

    const handleAddTag = () => {
        const trimmed = tagInput.trim().toLowerCase();
        if (trimmed && !tags.includes(trimmed)) {
            onTagsChange([...tags, trimmed]);
        }
        setTagInput('');
        setIsAddingTag(false);
    };

    const handleRemoveTag = (tagToRemove: string) => {
        onTagsChange(tags.filter(t => t !== tagToRemove));
    };

    return (
        <div className="mt-3 space-y-2 border-t border-gray-700 pt-3">
            {/* Favorite Star */}
            <div className="flex items-center gap-2">
                <button
                    onClick={onFavoriteToggle}
                    className={`p-1 rounded transition-colors ${isFavorite
                            ? 'text-yellow-400 hover:text-yellow-500'
                            : 'text-gray-500 hover:text-yellow-400'
                        }`}
                    title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                    <FiStar className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
                </button>
                {isFavorite && <span className="text-xs text-yellow-400">Favorite</span>}
            </div>

            {/* Notes */}
            <div>
                {isEditingNotes ? (
                    <div className="space-y-2">
                        <textarea
                            value={notesInput}
                            onChange={(e) => setNotesInput(e.target.value)}
                            placeholder="Add notes about this submission..."
                            rows={2}
                            className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                            autoFocus
                        />
                        <div className="flex gap-2">
                            <button
                                onClick={handleSaveNotes}
                                className="flex items-center gap-1 px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded text-xs transition-colors"
                            >
                                <FiCheck className="w-3 h-3" />
                                Save
                            </button>
                            <button
                                onClick={handleCancelNotes}
                                className="flex items-center gap-1 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded text-xs transition-colors"
                            >
                                <FiX className="w-3 h-3" />
                                Cancel
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-start gap-2">
                        {notes ? (
                            <div className="flex-1 bg-gray-900/50 rounded px-3 py-2 border border-gray-700">
                                <p className="text-xs text-gray-300 whitespace-pre-wrap">{notes}</p>
                            </div>
                        ) : (
                            <p className="text-xs text-gray-500 italic">No notes</p>
                        )}
                        <button
                            onClick={() => setIsEditingNotes(true)}
                            className="p-1 text-gray-400 hover:text-green-400 transition-colors"
                            title="Edit notes"
                        >
                            <FiEdit2 className="w-3 h-3" />
                        </button>
                    </div>
                )}
            </div>

            {/* Tags */}
            <div>
                <div className="flex items-center gap-2 flex-wrap">
                    <FiTag className="w-3 h-3 text-gray-500" />
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded-full text-xs"
                        >
                            {tag}
                            <button
                                onClick={() => handleRemoveTag(tag)}
                                className="hover:text-blue-300 transition-colors"
                            >
                                <FiX className="w-3 h-3" />
                            </button>
                        </span>
                    ))}

                    {isAddingTag ? (
                        <div className="flex items-center gap-1">
                            <input
                                type="text"
                                value={tagInput}
                                onChange={(e) => setTagInput(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') handleAddTag();
                                    if (e.key === 'Escape') {
                                        setTagInput('');
                                        setIsAddingTag(false);
                                    }
                                }}
                                placeholder="Tag name..."
                                className="w-24 px-2 py-0.5 bg-gray-900 border border-gray-700 rounded text-xs text-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
                                autoFocus
                            />
                            <button
                                onClick={handleAddTag}
                                className="p-0.5 text-green-400 hover:text-green-300"
                            >
                                <FiCheck className="w-3 h-3" />
                            </button>
                            <button
                                onClick={() => {
                                    setTagInput('');
                                    setIsAddingTag(false);
                                }}
                                className="p-0.5 text-gray-400 hover:text-gray-300"
                            >
                                <FiX className="w-3 h-3" />
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={() => setIsAddingTag(true)}
                            className="inline-flex items-center gap-1 px-2 py-0.5 border border-dashed border-gray-600 hover:border-gray-500 text-gray-500 hover:text-gray-400 rounded-full text-xs transition-colors"
                        >
                            <FiPlus className="w-3 h-3" />
                            Add tag
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
