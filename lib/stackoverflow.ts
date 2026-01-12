// Stack Overflow API Integration Examples
// API Documentation: https://api.stackexchange.com/docs

export interface StackOverflowQuestion {
    question_id: number;
    title: string;
    link: string;
    score: number;
    answer_count: number;
    view_count: number;
    tags: string[];
    is_answered: boolean;
    creation_date: number;
    owner: {
        display_name: string;
        reputation: number;
        profile_image?: string;
    };
    body_markdown?: string;
}

export interface StackOverflowAnswer {
    answer_id: number;
    question_id: number;
    score: number;
    is_accepted: boolean;
    body_markdown: string;
    creation_date: number;
    owner: {
        display_name: string;
        reputation: number;
    };
}

export interface StackOverflowResponse {
    items: StackOverflowQuestion[];
    has_more: boolean;
    quota_max: number;
    quota_remaining: number;
}

const STACKOVERFLOW_API_BASE = 'https://api.stackexchange.com/2.3';
const CACHE_DURATION = 1000 * 60 * 60 * 24; // 24 hours

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

    const { data, timestamp }: CachedData<T> = JSON.parse(cached);

    // Check if cache is still valid
    if (Date.now() - timestamp > CACHE_DURATION) {
        localStorage.removeItem(key);
        return null;
    }

    return data;
}

// Save to cache
function saveToCache<T>(key: string, data: T): void {
    if (typeof window === 'undefined') return;

    const cacheData: CachedData<T> = {
        data,
        timestamp: Date.now(),
    };

    localStorage.setItem(key, JSON.stringify(cacheData));
}

/**
 * Fetch top questions by tag
 * @param tag - Programming language or topic (e.g., 'javascript', 'python')
 * @param limit - Number of questions to fetch (default: 10)
 */
export async function getQuestionsByTag(
    tag: string,
    limit: number = 10
): Promise<StackOverflowQuestion[]> {
    const cacheKey = `stackoverflow_tag_${tag}_${limit}`;

    // Check cache first
    const cached = getFromCache<StackOverflowQuestion[]>(cacheKey);
    if (cached) {
        console.log('📦 Using cached Stack Overflow data for tag:', tag);
        return cached;
    }

    try {
        const params = new URLSearchParams({
            order: 'desc',
            sort: 'votes',
            tagged: tag,
            site: 'stackoverflow',
            pagesize: limit.toString(),
            filter: 'withbody', // Include question body
        });

        const response = await fetch(`${STACKOVERFLOW_API_BASE}/questions?${params}`);

        if (!response.ok) {
            throw new Error(`Stack Overflow API error: ${response.status}`);
        }

        const data: StackOverflowResponse = await response.json();

        console.log('📊 Stack Overflow API quota remaining:', data.quota_remaining);

        // Save to cache
        saveToCache(cacheKey, data.items);

        return data.items;
    } catch (error) {
        console.error('Error fetching Stack Overflow questions:', error);
        return [];
    }
}

/**
 * Search questions by keyword
 * @param query - Search query
 * @param tag - Optional tag filter
 * @param limit - Number of results (default: 10)
 */
export async function searchQuestions(
    query: string,
    tag?: string,
    limit: number = 10
): Promise<StackOverflowQuestion[]> {
    const cacheKey = `stackoverflow_search_${query}_${tag || 'all'}_${limit}`;

    // Check cache
    const cached = getFromCache<StackOverflowQuestion[]>(cacheKey);
    if (cached) {
        console.log('📦 Using cached Stack Overflow search:', query);
        return cached;
    }

    try {
        const params = new URLSearchParams({
            order: 'desc',
            sort: 'relevance',
            intitle: query,
            site: 'stackoverflow',
            pagesize: limit.toString(),
            filter: 'withbody',
        });

        if (tag) {
            params.append('tagged', tag);
        }

        const response = await fetch(`${STACKOVERFLOW_API_BASE}/search/advanced?${params}`);

        if (!response.ok) {
            throw new Error(`Stack Overflow API error: ${response.status}`);
        }

        const data: StackOverflowResponse = await response.json();

        // Save to cache
        saveToCache(cacheKey, data.items);

        return data.items;
    } catch (error) {
        console.error('Error searching Stack Overflow:', error);
        return [];
    }
}

/**
 * Get answers for a specific question
 * @param questionId - Stack Overflow question ID
 */
export async function getAnswers(questionId: number): Promise<StackOverflowAnswer[]> {
    const cacheKey = `stackoverflow_answers_${questionId}`;

    // Check cache
    const cached = getFromCache<StackOverflowAnswer[]>(cacheKey);
    if (cached) {
        return cached;
    }

    try {
        const params = new URLSearchParams({
            order: 'desc',
            sort: 'votes',
            site: 'stackoverflow',
            filter: 'withbody',
        });

        const response = await fetch(
            `${STACKOVERFLOW_API_BASE}/questions/${questionId}/answers?${params}`
        );

        if (!response.ok) {
            throw new Error(`Stack Overflow API error: ${response.status}`);
        }

        const data = await response.json();

        // Save to cache
        saveToCache(cacheKey, data.items);

        return data.items;
    } catch (error) {
        console.error('Error fetching answers:', error);
        return [];
    }
}

/**
 * Map topic IDs to Stack Overflow tags
 */
export function getTagForTopic(topicId: string): string {
    const tagMap: Record<string, string> = {
        'python': 'python',
        'javascript': 'javascript',
        'java': 'java',
        'cpp': 'c++',
        'react': 'reactjs',
        'nodejs': 'node.js',
        'sql': 'sql',
        'mongodb': 'mongodb',
        'dsa': 'algorithm',
        'system-design': 'system-design',
        'git': 'git',
        'docker': 'docker',
        'aws': 'amazon-web-services',
        // Add more mappings as needed
    };

    return tagMap[topicId] || topicId;
}
