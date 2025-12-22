export type PracticeDifficulty = 'easy' | 'medium' | 'hard';

export interface PracticeExample {
  input: string;
  output: string;
  explanation?: string;
}

export interface PracticeTestCase {
  id: string;
  type: 'sample' | 'hidden';
  input: unknown;
  output: unknown;
}

export interface PracticeStarterCode {
  language: 'javascript' | 'typescript' | 'python' | 'java' | 'cpp';
  code: string;
  functionName: string;
}

export interface PracticeProblem {
  id: string;
  slug: string;
  title: string;
  difficulty: PracticeDifficulty;
  topics: string[];
  prompt: string;
  constraints: string[];
  examples: PracticeExample[];
  hints: string[];
  starterCode: PracticeStarterCode[];
  tests: PracticeTestCase[];
  solution: string;
  /**
   * Optional: Track if the user has solved this problem
   */
  solved?: boolean;
}

export interface PracticeAttempt {
  problemId: string;
  status: 'passed' | 'failed';
  language: 'javascript' | 'typescript' | 'python' | 'java' | 'cpp';
  code: string;
  runtimeMs?: number;
  createdAt: string;
}
