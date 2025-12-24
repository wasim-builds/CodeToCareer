import { Question } from '@/types/quiz';
import { generateQuestionsForTopic } from './questionGenerator';
import { topics } from './topics';

// Cache for generated questions to avoid regenerating on every call
const questionCache: Map<string, Question[]> = new Map();

// Generate questions for all topics
export function getAllQuestions(): Record<string, Question[]> {
  const allQuestions: Record<string, Question[]> = {};

  topics.forEach(topic => {
    allQuestions[topic.id] = getQuestionsForTopic(topic.id);
  });

  return allQuestions;
}

// Load questions for a specific topic (with caching)
export function getQuestionsForTopic(topicId: string): Question[] {
  // Check cache first
  if (questionCache.has(topicId)) {
    return questionCache.get(topicId)!;
  }

  // Find the topic
  const topic = topics.find(t => t.id === topicId);
  if (!topic) {
    console.warn(`Topic not found: ${topicId}`);
    return [];
  }

  // Generate and cache questions
  const questions = generateQuestionsForTopic(topic.id, topic.name, topic.category);
  questionCache.set(topicId, questions);

  return questions;
}

// Get questions by difficulty
export function getQuestionsByDifficulty(
  topicId: string,
  difficulty: 'easy' | 'medium' | 'hard' | 'all'
): Question[] {
  const questions = getQuestionsForTopic(topicId);

  if (difficulty === 'all') {
    return questions;
  }

  return questions.filter(q => q.difficulty === difficulty);
}

// Get random questions for practice mode
export function getRandomQuestions(
  topicId: string,
  count: number,
  difficulty?: 'easy' | 'medium' | 'hard'
): Question[] {
  let questions = getQuestionsForTopic(topicId);

  if (difficulty) {
    questions = questions.filter(q => q.difficulty === difficulty);
  }

  // Shuffle and take first 'count' questions
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Get question count statistics
export function getQuestionStats(topicId: string): {
  easy: number;
  medium: number;
  hard: number;
  total: number;
} {
  const questions = getQuestionsForTopic(topicId);

  return {
    easy: questions.filter(q => q.difficulty === 'easy').length,
    medium: questions.filter(q => q.difficulty === 'medium').length,
    hard: questions.filter(q => q.difficulty === 'hard').length,
    total: questions.length
  };
}

// Clear cache (useful for testing or refreshing)
export function clearQuestionCache(): void {
  questionCache.clear();
}

// Preload questions for better performance (optional)
export function preloadQuestions(topicIds?: string[]): void {
  const idsToLoad = topicIds || topics.map(t => t.id);
  idsToLoad.forEach(id => {
    if (!questionCache.has(id)) {
      getQuestionsForTopic(id);
    }
  });
}
