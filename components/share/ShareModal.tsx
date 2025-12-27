'use client';

import { useState } from 'react';
import { shareOnTwitter, shareOnFacebook, shareOnLinkedIn, shareOnWhatsApp, copyToClipboard, nativeShare, isNativeShareSupported } from '@/lib/socialShare';
import { FiTwitter, FiCopy, FiCheck, FiShare2 } from 'react-icons/fi';
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

interface ShareModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    shareText: string;
    shareUrl?: string;
    children?: React.ReactNode; // For preview card
}

export default function ShareModal({ isOpen, onClose, title, shareText, shareUrl, children }: ShareModalProps) {
    const [copied, setCopied] = useState(false);
    const url = shareUrl || (typeof window !== 'undefined' ? window.location.href : '');

    if (!isOpen) return null;

    const handleCopy = async () => {
        const textToCopy = shareUrl ? `${shareText}\n\n${shareUrl}` : shareText;
        const success = await copyToClipboard(textToCopy);
        if (success) {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleNativeShare = async () => {
        await nativeShare({
            title: 'CodeToCareer',
            text: shareText,
            url: shareUrl,
        });
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                {/* Header */}
                <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-2xl">🎉</span>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                            {title}
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        aria-label="Close"
                    >
                        <span className="text-gray-500 dark:text-gray-400 text-xl">✕</span>
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    {/* Preview Card */}
                    {children && (
                        <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                            {children}
                        </div>
                    )}

                    {/* Share Text Preview */}
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                        <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">
                            {shareText}
                        </p>
                        {shareUrl && (
                            <p className="text-xs text-green-600 dark:text-green-400 mt-2 break-all">
                                {shareUrl}
                            </p>
                        )}
                    </div>

                    {/* Native Share (Mobile) */}
                    {isNativeShareSupported() && (
                        <button
                            onClick={handleNativeShare}
                            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium"
                        >
                            <FiShare2 className="w-5 h-5" />
                            Share
                        </button>
                    )}

                    {/* Social Media Buttons */}
                    <div>
                        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                            Share on:
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => shareOnTwitter(shareText, shareUrl)}
                                className="flex items-center justify-center gap-2 px-4 py-3 bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white rounded-lg transition-colors"
                            >
                                <FiTwitter className="w-5 h-5" />
                                Twitter
                            </button>

                            <button
                                onClick={() => shareOnFacebook(url)}
                                className="flex items-center justify-center gap-2 px-4 py-3 bg-[#1877F2] hover:bg-[#166fe5] text-white rounded-lg transition-colors"
                            >
                                <FaFacebook className="w-5 h-5" />
                                Facebook
                            </button>

                            <button
                                onClick={() => shareOnLinkedIn(url)}
                                className="flex items-center justify-center gap-2 px-4 py-3 bg-[#0A66C2] hover:bg-[#095196] text-white rounded-lg transition-colors"
                            >
                                <FaLinkedin className="w-5 h-5" />
                                LinkedIn
                            </button>

                            <button
                                onClick={() => shareOnWhatsApp(shareText)}
                                className="flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg transition-colors"
                            >
                                <FaWhatsapp className="w-5 h-5" />
                                WhatsApp
                            </button>
                        </div>
                    </div>

                    {/* Copy Link */}
                    <button
                        onClick={handleCopy}
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-colors font-medium"
                    >
                        {copied ? (
                            <>
                                <FiCheck className="w-5 h-5 text-green-600" />
                                Copied!
                            </>
                        ) : (
                            <>
                                <FiCopy className="w-5 h-5" />
                                Copy to Clipboard
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
