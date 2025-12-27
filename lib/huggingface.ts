/**
 * Hugging Face Inference API Integration
 * Free tier available without API key (rate-limited)
 * Fallback to local generation if API fails
 */

export interface GeneratedQuestion {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

// Question templates for local fallback
const questionTemplates: Record<string, any> = {
    python: {
        easy: [
            {
                question: "What is the output of: print(type([]))?",
                options: ["<class 'list'>", "<class 'array'>", "<class 'tuple'>", "<class 'dict'>"],
                correctAnswer: 0,
                explanation: "The type() function returns the class type of an object. [] creates an empty list."
            },
            {
                question: "Which keyword is used to define a function in Python?",
                options: ["function", "def", "func", "define"],
                correctAnswer: 1,
                explanation: "The 'def' keyword is used to define functions in Python."
            },
            {
                question: "What is the correct way to create a comment in Python?",
                options: ["// comment", "/* comment */", "# comment", "<!-- comment -->"],
                correctAnswer: 2,
                explanation: "Python uses the # symbol for single-line comments."
            }
        ],
        medium: [
            {
                question: "What is the difference between a list and a tuple in Python?",
                options: [
                    "Lists are mutable, tuples are immutable",
                    "Lists are immutable, tuples are mutable",
                    "Lists use [], tuples use ()",
                    "Both A and C"
                ],
                correctAnswer: 3,
                explanation: "Lists are mutable (can be changed) and use [], while tuples are immutable and use ()."
            },
            {
                question: "What does the 'with' statement do in Python?",
                options: [
                    "Creates a loop",
                    "Handles exceptions",
                    "Manages context and resources",
                    "Defines a function"
                ],
                correctAnswer: 2,
                explanation: "The 'with' statement is used for context management, ensuring proper resource cleanup."
            }
        ],
        hard: [
            {
                question: "What is a decorator in Python?",
                options: [
                    "A function that modifies another function",
                    "A design pattern",
                    "A type of class",
                    "A module import"
                ],
                correctAnswer: 0,
                explanation: "Decorators are functions that modify the behavior of other functions or methods."
            }
        ]
    },
    javascript: {
        easy: [
            {
                question: "Which symbol is used for single-line comments in JavaScript?",
                options: ["#", "//", "/*", "<!--"],
                correctAnswer: 1,
                explanation: "JavaScript uses // for single-line comments."
            },
            {
                question: "What is the correct way to declare a variable in modern JavaScript?",
                options: ["var x = 5", "let x = 5", "const x = 5", "All of the above"],
                correctAnswer: 3,
                explanation: "var, let, and const are all valid ways to declare variables, though let and const are preferred in modern JavaScript."
            }
        ],
        medium: [
            {
                question: "What is the difference between '==' and '===' in JavaScript?",
                options: [
                    "'==' checks value, '===' checks value and type",
                    "'==' checks type, '===' checks value",
                    "They are the same",
                    "'===' is faster"
                ],
                correctAnswer: 0,
                explanation: "'==' performs type coercion before comparison, while '===' checks both value and type without coercion."
            }
        ],
        hard: [
            {
                question: "What is a closure in JavaScript?",
                options: [
                    "A function that has access to variables in its outer scope",
                    "A way to close files",
                    "A type of loop",
                    "A class method"
                ],
                correctAnswer: 0,
                explanation: "A closure is a function that retains access to variables from its outer (enclosing) scope even after the outer function has finished executing."
            }
        ]
    }
};

/**
 * Generate quiz questions using local templates
 */
function generateLocalQuestions(
    topic: string,
    difficulty: string,
    count: number
): GeneratedQuestion[] {
    const topicKey = topic.toLowerCase();
    const difficultyKey = difficulty.toLowerCase();

    // Get questions from templates
    const templates = questionTemplates[topicKey]?.[difficultyKey] ||
        questionTemplates['python']?.['easy'] || [];

    if (templates.length === 0) {
        // Generate generic questions if no templates found
        return generateGenericQuestions(topic, difficulty, count);
    }

    // Shuffle and return requested count
    const shuffled = [...templates].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(count, shuffled.length));

    // If we need more questions, repeat with variations
    while (selected.length < count && templates.length > 0) {
        const additional = templates[selected.length % templates.length];
        selected.push({ ...additional });
    }

    return selected.slice(0, count);
}

/**
 * Generate generic questions when no templates available
 */
function generateGenericQuestions(
    topic: string,
    difficulty: string,
    count: number
): GeneratedQuestion[] {
    const questions: GeneratedQuestion[] = [];

    for (let i = 0; i < count; i++) {
        questions.push({
            question: `What is an important concept in ${topic}? (Question ${i + 1})`,
            options: [
                `Correct answer about ${topic}`,
                `Incorrect option A`,
                `Incorrect option B`,
                `Incorrect option C`
            ],
            correctAnswer: 0,
            explanation: `This question tests your understanding of ${topic} at ${difficulty} level.`
        });
    }

    return questions;
}

/**
 * Try to generate questions using Hugging Face API (free, no auth)
 * Falls back to local generation if API fails
 */
export async function generateQuestionsWithHuggingFace(
    topic: string,
    difficulty: string,
    count: number = 5
): Promise<GeneratedQuestion[]> {
    try {
        // Try Hugging Face Inference API (free tier, no key required)
        const response = await fetch(
            'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    inputs: `Generate ${count} multiple choice questions about ${topic} at ${difficulty} level. Return ONLY valid JSON array with this structure: [{"question":"text","options":["A","B","C","D"],"correctAnswer":0,"explanation":"text"}]`,
                    parameters: {
                        max_new_tokens: 1000,
                        temperature: 0.7,
                        return_full_text: false
                    }
                })
            }
        );

        if (response.ok) {
            const data = await response.json();
            const text = Array.isArray(data) ? data[0]?.generated_text : data.generated_text;

            if (text) {
                // Try to parse JSON from response
                const jsonMatch = text.match(/\[[\s\S]*\]/);
                if (jsonMatch) {
                    const questions = JSON.parse(jsonMatch[0]);
                    if (Array.isArray(questions) && questions.length > 0) {
                        console.log('[HuggingFace] Successfully generated questions via API');
                        return questions.slice(0, count);
                    }
                }
            }
        }
    } catch (error) {
        console.log('[HuggingFace] API failed, using local generation:', error);
    }

    // Fallback to local generation
    console.log('[HuggingFace] Using local question templates');
    return generateLocalQuestions(topic, difficulty, count);
}

/**
 * Generate chat response using Hugging Face or local fallback
 */
export async function generateChatResponse(
    messages: Array<{ role: string; content: string }>,
    context?: string
): Promise<string> {
    try {
        const lastMessage = messages[messages.length - 1]?.content || '';

        // Try Hugging Face API
        const response = await fetch(
            'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    inputs: `You are a helpful programming tutor. ${context ? `Context: ${context}. ` : ''}User question: ${lastMessage}`,
                    parameters: {
                        max_new_tokens: 500,
                        temperature: 0.7,
                        return_full_text: false
                    }
                })
            }
        );

        if (response.ok) {
            const data = await response.json();
            const text = Array.isArray(data) ? data[0]?.generated_text : data.generated_text;
            if (text && text.length > 20) {
                return text;
            }
        }
    } catch (error) {
        console.log('[HuggingFace] Chat API failed, using local response');
    }

    // Local fallback response
    return generateLocalChatResponse(messages, context);
}

/**
 * Generate local chat response
 */
function generateLocalChatResponse(
    messages: Array<{ role: string; content: string }>,
    context?: string
): string {
    const lastMessage = messages[messages.length - 1]?.content.toLowerCase() || '';

    // Simple keyword-based responses
    if (lastMessage.includes('list') || lastMessage.includes('array')) {
        return "Lists (or arrays in some languages) are ordered collections of items. In Python, you create them with square brackets: `my_list = [1, 2, 3]`. They're mutable, meaning you can change their contents after creation. Common operations include append(), remove(), and indexing with [].";
    }

    if (lastMessage.includes('function') || lastMessage.includes('def')) {
        return "Functions are reusable blocks of code that perform specific tasks. In Python, you define them with the `def` keyword:\n\n```python\ndef greet(name):\n    return f'Hello, {name}!'\n```\n\nFunctions help organize code, make it reusable, and easier to test.";
    }

    if (lastMessage.includes('loop') || lastMessage.includes('for') || lastMessage.includes('while')) {
        return "Loops allow you to repeat code multiple times. Python has two main types:\n\n1. **for loop**: Iterates over sequences\n```python\nfor i in range(5):\n    print(i)\n```\n\n2. **while loop**: Repeats while condition is true\n```python\nwhile x < 10:\n    x += 1\n```";
    }

    // Generic helpful response
    return `That's a great question! ${context ? `Based on the topic, ` : ''}I'd recommend breaking this down into smaller concepts. Try practicing with simple examples first, then gradually increase complexity. Would you like me to explain any specific part in more detail?`;
}
