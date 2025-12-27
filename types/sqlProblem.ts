export interface SQLProblem {
    id: string;
    title: string;
    difficulty: 'easy' | 'medium' | 'hard';
    description: string;
    category: string;

    // Database schema
    schema: SQLTable[];

    // Expected result
    expectedResult: any[];

    // Hints and solution
    hints: string[];
    solution: string;
    explanation: string;

    // Metadata
    tags: string[];
    points: number;
}

export interface SQLTable {
    name: string;
    columns: SQLColumn[];
    data: Record<string, any>[];
}

export interface SQLColumn {
    name: string;
    type: 'INTEGER' | 'TEXT' | 'REAL' | 'BLOB';
    primaryKey?: boolean;
    notNull?: boolean;
}

export interface SQLResult {
    columns: string[];
    values: any[][];
}

export interface SQLSubmission {
    problemId: string;
    query: string;
    correct: boolean;
    executionTime: number;
    timestamp: Date;
}
