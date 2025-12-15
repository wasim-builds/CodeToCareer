import { Question } from '@/types/quiz';
import { generateQuestionsForTopic } from './questionGenerator';
import { topics } from './topics';

// Generate questions for all topics
export function getAllQuestions(): Record<string, Question[]> {
  const allQuestions: Record<string, Question[]> = {};
  
  topics.forEach(topic => {
    allQuestions[topic.id] = generateQuestionsForTopic(
      topic.id,
      topic.name,
      topic.category
    );
  });
  
  return allQuestions;
}

// Load questions for a specific topic
export function getQuestionsForTopic(topicId: string): Question[] {
  const allQuestions = getAllQuestions();
  return allQuestions[topicId] || [];
}

// Get questions by difficulty
export function getQuestionsByDifficulty(
  topicId: string,
  difficulty: 'easy' | 'medium' | 'hard'
): Question[] {
  const questions = getQuestionsForTopic(topicId);
  return questions.filter(q => q.difficulty === difficulty);
}
