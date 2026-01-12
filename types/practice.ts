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
  solution?: string; // Deprecated: Use solutions array instead
  solutions?: SolutionApproach[]; // Multi-approach solutions with detailed explanations
  /**
   * Optional: Track if the user has solved this problem
   */
  solved?: boolean;
}

export interface CodeSolution {
  language: 'javascript' | 'typescript' | 'python' | 'java' | 'cpp';
  code: string;
  explanation?: string;
}

export interface SolutionApproach {
  name?: string; // e.g., "Brute Force", "Optimal", "Better" (deprecated, use methodName)
  methodName?: string; // Method identifier (e.g., "bruteForce", "hashMap")
  title: string; // e.g., "Hash Map Approach"
  intuition: string; // High-level explanation of the approach
  explanation: string; // Detailed explanation (supports markdown)
  algorithm: string[]; // Step-by-step algorithm
  code: CodeSolution[]; // Code implementations in multiple languages
  // Support both flat and nested complexity formats
  timeComplexity?: string; // e.g., "O(n)" (deprecated, use complexity object)
  spaceComplexity?: string; // e.g., "O(1)" (deprecated, use complexity object)
  complexity?: {
    time: string;
    space: string;
    explanation: string;
  };
  pros: string[]; // Advantages of this approach
  cons: string[]; // Disadvantages of this approach
}

export interface PracticeAttempt {
  problemId: string;
  status: 'passed' | 'failed';
  language: 'javascript' | 'typescript' | 'python' | 'java' | 'cpp';
  code: string;
  runtimeMs?: number;
  testResults: any; // Allow flexible structure to match what is being saved
  passed: boolean;
  timestamp: number; // For consistency with API payload
  createdAt?: string; // Keep for backward compatibility
  // Submission annotations
  notes?: string;
  tags?: string[];
  isFavorite?: boolean;
}
