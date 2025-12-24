import { NextRequest, NextResponse } from 'next/server';

interface ChatRequest {
    message: string;
    context: string;
    history?: Array<{ role: 'user' | 'assistant'; content: string }>;
}

interface ChatResponse {
    reply: string;
    followUp?: string;
}

// Enhanced mock responses for different interview modes
const interviewQuestions = {
    dsa: [
        'Given an array of integers, find the length of the longest subarray with sum equal to K. Can you explain your approach?',
        'Implement a function to detect a cycle in a linked list. What is the time and space complexity?',
        'How would you find the kth largest element in an unsorted array? Discuss multiple approaches.',
        'Explain how you would implement a LRU cache. What data structures would you use?',
        'Given a binary tree, write a function to serialize and deserialize it.',
        'How would you find all anagrams in a string? What is the optimal solution?',
        'Implement a function to merge k sorted linked lists. What is the time complexity?',
        'Design an algorithm to find the longest palindromic substring in a string.',
        'How would you implement a min stack that supports getMin() in O(1) time?',
        'Given a matrix, find the shortest path from top-left to bottom-right.',
    ],
    hr: [
        'Tell me about a time you faced a conflict in a team and how you resolved it.',
        'Describe a situation where you had to meet a tight deadline. How did you handle it?',
        'Can you share an example of when you had to learn a new technology quickly?',
        'Tell me about a project you\'re most proud of and why.',
        'Describe a time when you received critical feedback. How did you respond?',
        'How do you prioritize tasks when working on multiple projects?',
        'Tell me about a time you failed. What did you learn from it?',
        'Describe a situation where you had to convince others to adopt your approach.',
        'How do you handle disagreements with your manager or team lead?',
        'Tell me about a time you went above and beyond your job responsibilities.',
    ],
    system: [
        'Design a URL shortener service like bit.ly. What components and database schema would you use?',
        'How would you design a rate limiting system for an API?',
        'Design a distributed cache system. How would you handle cache invalidation?',
        'How would you design a notification system that can send millions of notifications?',
        'Design a real-time chat application. What technologies and architecture would you use?',
        'How would you design a file storage system like Dropbox or Google Drive?',
        'Design a search autocomplete system. How would you handle millions of queries?',
        'How would you design a social media feed like Twitter or Facebook?',
        'Design a video streaming platform. How would you handle different video qualities?',
        'How would you design a distributed task scheduler?',
    ]
};

const followUpQuestions = {
    dsa: [
        'Can you optimize this further?',
        'What if the input size is very large?',
        'How would you handle edge cases?',
        'Can you explain the space-time tradeoff here?',
    ],
    hr: [
        'What would you do differently if you faced that situation again?',
        'How did this experience shape your approach to similar situations?',
        'What did your team members think about your approach?',
    ],
    system: [
        'How would you handle scaling to millions of users?',
        'What about fault tolerance and disaster recovery?',
        'How would you monitor and debug this system in production?',
        'What are the potential bottlenecks in your design?',
    ]
};

let questionIndex = {
    dsa: 0,
    hr: 0,
    system: 0
};

export async function POST(request: NextRequest) {
    try {
        const body: ChatRequest = await request.json();
        const { message, context } = body;

        // Determine mode from context
        let mode: 'dsa' | 'hr' | 'system' = 'dsa';
        if (context.toLowerCase().includes('behavioral') || context.toLowerCase().includes('hr')) {
            mode = 'hr';
        } else if (context.toLowerCase().includes('system design')) {
            mode = 'system';
        }

        // Generate response based on user message
        let reply: string;
        let followUp: string | undefined;

        // Check if user is asking for a new question
        if (
            message.toLowerCase().includes('next') ||
            message.toLowerCase().includes('another') ||
            message.toLowerCase().includes('new question') ||
            message.length < 20 // Short responses likely asking for next question
        ) {
            // Get next question
            const questions = interviewQuestions[mode];
            reply = questions[questionIndex[mode] % questions.length];
            questionIndex[mode]++;
        } else {
            // User provided an answer, give feedback
            reply = generateFeedback(message, mode);

            // Add follow-up question
            const followUps = followUpQuestions[mode];
            followUp = followUps[Math.floor(Math.random() * followUps.length)];
        }

        return NextResponse.json({
            reply,
            followUp
        });
    } catch (error) {
        console.error('Chat API error:', error);
        return NextResponse.json(
            {
                reply: 'Sorry, I encountered an error. Please try again.',
                error: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}

function generateFeedback(answer: string, mode: 'dsa' | 'hr' | 'system'): string {
    const answerLength = answer.length;

    if (mode === 'dsa') {
        if (answerLength < 50) {
            return 'That\'s a start, but can you elaborate more on your approach? What data structures would you use and why?';
        } else if (answerLength < 150) {
            return 'Good thinking! Now, can you analyze the time and space complexity of your solution? Is there a way to optimize it further?';
        } else {
            return 'Excellent detailed explanation! Let\'s discuss edge cases. How would your solution handle empty inputs or very large datasets?';
        }
    } else if (mode === 'hr') {
        if (answerLength < 100) {
            return 'Thank you for sharing. Can you provide more specific details about the situation, your actions, and the results? Try using the STAR method.';
        } else if (answerLength < 250) {
            return 'Good example! I appreciate the details. What specific skills or lessons did you take away from this experience?';
        } else {
            return 'That\'s a comprehensive answer with great detail. It shows strong self-awareness and problem-solving skills. Let\'s move to the next question.';
        }
    } else { // system design
        if (answerLength < 100) {
            return 'That\'s a good start. Can you dive deeper into the architecture? What about data storage, caching, and load balancing?';
        } else if (answerLength < 250) {
            return 'Good architectural thinking! Now let\'s discuss scalability. How would you handle 10x or 100x more traffic?';
        } else {
            return 'Excellent comprehensive design! You\'ve covered the key components well. Let\'s discuss potential failure scenarios and how your system would handle them.';
        }
    }
}
