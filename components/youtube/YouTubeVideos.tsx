"use client";

import { useEffect, useState } from 'react';
import { getVideosByTopic, parseDuration, formatViewCount, formatPublishedDate } from '@/lib/youtube';
import type { YouTubeVideo } from '@/lib/youtube';
import { FiExternalLink, FiPlay, FiEye, FiClock, FiYoutube } from 'react-icons/fi';

interface YouTubeVideosProps {
    topicId: string;
    limit?: number;
    showPlayer?: boolean;
}

export function YouTubeVideos({ topicId, limit = 3, showPlayer = false }: YouTubeVideosProps) {
    const [videos, setVideos] = useState<YouTubeVideo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchVideos() {
            setLoading(true);
            setError(null);

            try {
                const data = await getVideosByTopic(topicId, limit);
                setVideos(data);
            } catch (err) {
                setError('Failed to load YouTube videos');
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        fetchVideos();
    }, [topicId, limit]);

    if (loading) {
        return (
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <FiYoutube className="w-5 h-5 text-red-500" />
                    <h3 className="text-xl font-bold text-white">Video Tutorials</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="bg-gray-800/50 rounded-lg overflow-hidden animate-pulse">
                            <div className="aspect-video bg-gray-700"></div>
                            <div className="p-4 space-y-2">
                                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                                <div className="h-3 bg-gray-700 rounded w-1/2"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <p className="text-red-400 text-sm">{error}</p>
            </div>
        );
    }

    if (videos.length === 0) {
        return null;
    }

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2">
                <FiYoutube className="w-5 h-5 text-red-500" />
                <h3 className="text-xl font-bold text-white">Video Tutorials</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {videos.map((video) => (
                    <VideoCard key={video.videoId} video={video} showPlayer={showPlayer} />
                ))}
            </div>

            <p className="text-xs text-gray-500 text-center">
                Videos from YouTube • Updated weekly
            </p>
        </div>
    );
}

function VideoCard({ video, showPlayer }: { video: YouTubeVideo; showPlayer: boolean }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-red-500/50 rounded-lg overflow-hidden transition-all"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Thumbnail */}
            <div className="relative aspect-video bg-gray-900 overflow-hidden">
                <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />

                {/* Play overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 group-hover:bg-red-500 rounded-full flex items-center justify-center transition-all transform group-hover:scale-110">
                        <FiPlay className="w-8 h-8 text-white ml-1" />
                    </div>
                </div>

                {/* Duration badge */}
                {video.duration && (
                    <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 rounded text-xs text-white font-semibold">
                        {parseDuration(video.duration)}
                    </div>
                )}

                {/* External link icon */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <FiExternalLink className="w-5 h-5 text-white drop-shadow-lg" />
                </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
                {/* Title */}
                <h4 className="text-white font-medium group-hover:text-red-400 transition-colors line-clamp-2 leading-snug">
                    {video.title}
                </h4>

                {/* Channel */}
                <p className="text-sm text-gray-400 line-clamp-1">
                    {video.channelTitle}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 text-xs text-gray-500">
                    {video.viewCount && (
                        <div className="flex items-center gap-1">
                            <FiEye className="w-3.5 h-3.5" />
                            <span>{formatViewCount(video.viewCount)} views</span>
                        </div>
                    )}

                    <div className="flex items-center gap-1">
                        <FiClock className="w-3.5 h-3.5" />
                        <span>{formatPublishedDate(video.publishedAt)}</span>
                    </div>
                </div>
            </div>
        </a>
    );
}
