// YouTube Data API v3 Integration
// API Documentation: https://developers.google.com/youtube/v3/docs

export interface YouTubeVideo {
    videoId: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    channelTitle: string;
    publishedAt: string;
    viewCount?: string;
    likeCount?: string;
    duration?: string;
    url: string;
}

export interface YouTubeSearchResponse {
    items: YouTubeVideo[];
    totalResults: number;
    quotaUsed: number;
}

const YOUTUBE_API_BASE = 'https://www.googleapis.com/youtube/v3';
const CACHE_DURATION = 1000 * 60 * 60 * 24 * 7; // 7 days (longer than Stack Overflow)

// Cache interface
interface CachedData<T> {
    data: T;
    timestamp: number;
}

// Get from cache
function getFromCache<T>(key: string): T | null {
    if (typeof window === 'undefined') return null;

    const cached = localStorage.getItem(key);
    if (!cached) return null;

    try {
        const { data, timestamp }: CachedData<T> = JSON.parse(cached);

        // Check if cache is still valid
        if (Date.now() - timestamp > CACHE_DURATION) {
            localStorage.removeItem(key);
            return null;
        }

        return data;
    } catch (error) {
        console.error('Error parsing cached YouTube data:', error);
        localStorage.removeItem(key);
        return null;
    }
}

// Save to cache
function saveToCache<T>(key: string, data: T): void {
    if (typeof window === 'undefined') return;

    const cacheData: CachedData<T> = {
        data,
        timestamp: Date.now(),
    };

    try {
        localStorage.setItem(key, JSON.stringify(cacheData));
    } catch (error) {
        console.error('Error saving YouTube data to cache:', error);
    }
}

/**
 * Search for YouTube videos by query
 * @param query - Search query
 * @param limit - Number of videos to fetch (default: 5)
 */
export async function searchVideos(
    query: string,
    limit: number = 5
): Promise<YouTubeVideo[]> {
    const cacheKey = `youtube_search_${query}_${limit}`;

    // Check cache first
    const cached = getFromCache<YouTubeVideo[]>(cacheKey);
    if (cached) {
        console.log('📦 Using cached YouTube data for query:', query);
        return cached;
    }

    const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

    if (!apiKey) {
        console.warn('YouTube API key not configured');
        return [];
    }

    try {
        // Search for videos
        const searchParams = new URLSearchParams({
            part: 'snippet',
            q: query,
            type: 'video',
            maxResults: limit.toString(),
            order: 'relevance',
            videoCategoryId: '28', // Science & Technology category
            key: apiKey,
        });

        const searchResponse = await fetch(
            `${YOUTUBE_API_BASE}/search?${searchParams}`
        );

        if (!searchResponse.ok) {
            const errorData = await searchResponse.json();
            console.error('YouTube API search error:', errorData);

            // Check for quota exceeded
            if (errorData.error?.errors?.[0]?.reason === 'quotaExceeded') {
                console.warn('⚠️ YouTube API quota exceeded');
            }

            return [];
        }

        const searchData = await searchResponse.json();
        const videoIds = searchData.items?.map((item: any) => item.id.videoId) || [];

        if (videoIds.length === 0) {
            return [];
        }

        // Get video statistics and details
        const videoParams = new URLSearchParams({
            part: 'snippet,statistics,contentDetails',
            id: videoIds.join(','),
            key: apiKey,
        });

        const videoResponse = await fetch(
            `${YOUTUBE_API_BASE}/videos?${videoParams}`
        );

        if (!videoResponse.ok) {
            console.error('YouTube API video details error:', await videoResponse.text());
            // Return basic data without statistics
            return searchData.items.map((item: any) => ({
                videoId: item.id.videoId,
                title: item.snippet.title,
                description: item.snippet.description,
                thumbnailUrl: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default.url,
                channelTitle: item.snippet.channelTitle,
                publishedAt: item.snippet.publishedAt,
                url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            }));
        }

        const videoData = await videoResponse.json();

        const videos: YouTubeVideo[] = videoData.items?.map((item: any) => ({
            videoId: item.id,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default.url,
            channelTitle: item.snippet.channelTitle,
            publishedAt: item.snippet.publishedAt,
            viewCount: item.statistics?.viewCount,
            likeCount: item.statistics?.likeCount,
            duration: item.contentDetails?.duration,
            url: `https://www.youtube.com/watch?v=${item.id}`,
        })) || [];

        console.log(`📺 Fetched ${videos.length} YouTube videos for query: "${query}"`);

        // Save to cache
        saveToCache(cacheKey, videos);

        return videos;
    } catch (error) {
        console.error('Error fetching YouTube videos:', error);
        return [];
    }
}

/**
 * Get videos for a specific topic
 * @param topicId - Topic ID from the app
 * @param limit - Number of videos to fetch (default: 5)
 */
export async function getVideosByTopic(
    topicId: string,
    limit: number = 5
): Promise<YouTubeVideo[]> {
    const searchQuery = getTopicSearchQuery(topicId);
    return searchVideos(searchQuery, limit);
}

/**
 * Map topic IDs to YouTube search queries
 */
export function getTopicSearchQuery(topicId: string): string {
    const queryMap: Record<string, string> = {
        // Programming Languages
        'python': 'Python programming tutorial',
        'javascript': 'JavaScript tutorial',
        'java': 'Java programming tutorial',
        'cpp': 'C++ programming tutorial',
        'c': 'C programming tutorial',
        'csharp': 'C# programming tutorial',
        'go': 'Golang programming tutorial',
        'rust': 'Rust programming tutorial',
        'typescript': 'TypeScript tutorial',
        'php': 'PHP programming tutorial',
        'ruby': 'Ruby programming tutorial',
        'swift': 'Swift programming tutorial',
        'kotlin': 'Kotlin programming tutorial',

        // Web Development
        'react': 'React.js tutorial',
        'reactjs': 'React.js tutorial',
        'angular': 'Angular tutorial',
        'vue': 'Vue.js tutorial',
        'nodejs': 'Node.js tutorial',
        'express': 'Express.js tutorial',
        'nextjs': 'Next.js tutorial',
        'html': 'HTML tutorial',
        'css': 'CSS tutorial',

        // Databases
        'sql': 'SQL tutorial',
        'mysql': 'MySQL tutorial',
        'postgresql': 'PostgreSQL tutorial',
        'mongodb': 'MongoDB tutorial',
        'redis': 'Redis tutorial',

        // Data Structures & Algorithms - General
        'dsa': 'Data Structures and Algorithms tutorial',
        'algorithms': 'Algorithm tutorial',
        'data-structures': 'Data Structures tutorial',

        // DSA - Specific Topics
        'arrays': 'Array data structure tutorial',
        'array': 'Array data structure tutorial',
        'strings': 'String algorithms tutorial',
        'string': 'String algorithms tutorial',
        'linked-lists': 'Linked List data structure tutorial',
        'linked-list': 'Linked List data structure tutorial',
        'stacks': 'Stack data structure tutorial',
        'stack': 'Stack data structure tutorial',
        'queues': 'Queue data structure tutorial',
        'queue': 'Queue data structure tutorial',
        'trees': 'Tree data structure tutorial',
        'tree': 'Tree data structure tutorial',
        'binary-trees': 'Binary Tree tutorial',
        'binary-tree': 'Binary Tree tutorial',
        'bst': 'Binary Search Tree tutorial',
        'graphs': 'Graph algorithms tutorial',
        'graph': 'Graph algorithms tutorial',
        'heaps': 'Heap data structure tutorial',
        'heap': 'Heap data structure tutorial',
        'hashing': 'Hash table tutorial',
        'hash-table': 'Hash table tutorial',
        'hash-map': 'HashMap tutorial',
        'tries': 'Trie data structure tutorial',
        'trie': 'Trie data structure tutorial',
        'dynamic-programming': 'Dynamic Programming tutorial',
        'dp': 'Dynamic Programming tutorial',
        'greedy': 'Greedy algorithms tutorial',
        'backtracking': 'Backtracking algorithms tutorial',
        'recursion': 'Recursion tutorial',
        'sorting': 'Sorting algorithms tutorial',
        'searching': 'Searching algorithms tutorial',
        'binary-search': 'Binary Search algorithm tutorial',
        'two-pointers': 'Two Pointers technique tutorial',
        'sliding-window': 'Sliding Window technique tutorial',
        'divide-and-conquer': 'Divide and Conquer tutorial',
        'bit-manipulation': 'Bit Manipulation tutorial',
        'math': 'Mathematical algorithms tutorial',
        'matrix': 'Matrix algorithms tutorial',

        // System Design & Architecture
        'system-design': 'System Design tutorial',
        'microservices': 'Microservices architecture tutorial',
        'api-design': 'API design tutorial',

        // DevOps & Tools
        'git': 'Git tutorial',
        'docker': 'Docker tutorial',
        'kubernetes': 'Kubernetes tutorial',
        'aws': 'AWS tutorial',
        'azure': 'Azure tutorial',
        'gcp': 'Google Cloud Platform tutorial',
        'ci-cd': 'CI/CD tutorial',

        // Testing
        'testing': 'Software testing tutorial',
        'unit-testing': 'Unit testing tutorial',

        // Mobile Development
        'android': 'Android development tutorial',
        'ios': 'iOS development tutorial',
        'react-native': 'React Native tutorial',
        'flutter': 'Flutter tutorial',

        // Machine Learning & AI
        'machine-learning': 'Machine Learning tutorial',
        'deep-learning': 'Deep Learning tutorial',
        'ai': 'Artificial Intelligence tutorial',

        // Roadmap Slugs
        'frontend-developer': 'Frontend Developer roadmap tutorial',
        'backend-developer': 'Backend Developer roadmap tutorial',
        'full-stack-developer': 'Full Stack Developer roadmap tutorial',
        'devops-engineer': 'DevOps Engineer roadmap tutorial',
        'data-scientist': 'Data Science career path tutorial',
        'machine-learning-engineer': 'Machine Learning Engineer roadmap tutorial',
        'mobile-developer': 'Mobile App Development tutorial',
        'game-developer': 'Game Development tutorial',
        'blockchain-developer': 'Blockchain Development tutorial',
        'cloud-engineer': 'Cloud Engineering tutorial',
        'cybersecurity-specialist': 'Cybersecurity career path tutorial',
        'ai-engineer': 'AI Engineering tutorial',
        'data-engineer': 'Data Engineering tutorial',
        'software-architect': 'Software Architecture tutorial',
        'qa-engineer': 'QA Engineering tutorial',
        'ui-ux-designer': 'UI/UX Design tutorial',

        // Other
        'security': 'Cybersecurity tutorial',
        'networking': 'Computer networking tutorial',
        'oop': 'Object Oriented Programming tutorial',
        'functional-programming': 'Functional Programming tutorial',
    };

    return queryMap[topicId] || `${topicId} programming tutorial`;
}

/**
 * Parse ISO 8601 duration to human-readable format
 * @param duration - ISO 8601 duration (e.g., "PT15M33S")
 */
export function parseDuration(duration?: string): string {
    if (!duration) return '';

    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return '';

    const hours = parseInt(match[1] || '0');
    const minutes = parseInt(match[2] || '0');
    const seconds = parseInt(match[3] || '0');

    if (hours > 0) {
        return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

/**
 * Format view count to human-readable format
 * @param count - View count as string
 */
export function formatViewCount(count?: string): string {
    if (!count) return '';

    const num = parseInt(count);
    if (num >= 1000000) {
        return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
        return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
}

/**
 * Format published date to relative time
 * @param publishedAt - ISO 8601 date string
 */
export function formatPublishedDate(publishedAt: string): string {
    const date = new Date(publishedAt);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
}
