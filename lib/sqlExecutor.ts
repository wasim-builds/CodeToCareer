import initSqlJs, { Database, QueryExecResult } from 'sql.js';
import { SQLProblem } from '@/types/sqlProblem';

let SQL: any;

export class SQLExecutor {
    private db: Database | null = null;
    private problem: SQLProblem;

    constructor(problem: SQLProblem) {
        this.problem = problem;
    }

    /**
     * Initialize the database and load schema/data
     */
    async init(): Promise<void> {
        if (!SQL) {
            SQL = await initSqlJs({
                // The wasm file is usually copied to public folder or loaded from CDN
                // We'll use a CDN for simplicity in this MVP
                locateFile: (file: string) => `https://sql.js.org/dist/${file}`
            });
        }

        this.db = new SQL.Database();
        this.setupDatabase();
    }

    /**
     * Create tables and insert sample data
     */
    private setupDatabase() {
        if (!this.db) return;

        try {
            // For each table in schema
            this.problem.schema.forEach(table => {
                // 1. Create Table
                const columns = table.columns
                    .map(col => `${col.name} ${col.type} ${col.primaryKey ? 'PRIMARY KEY' : ''} ${col.notNull ? 'NOT NULL' : ''}`)
                    .join(', ');

                this.db?.run(`CREATE TABLE ${table.name} (${columns});`);

                // 2. Insert Data
                if (table.data.length > 0) {
                    const placeholders = table.columns.map(() => '?').join(', ');
                    const insertStmt = this.db?.prepare(`INSERT INTO ${table.name} VALUES (${placeholders})`);

                    table.data.forEach(row => {
                        const values = table.columns.map(col => row[col.name]);
                        insertStmt?.run(values);
                    });

                    insertStmt?.free();
                }
            });
        } catch (error) {
            console.error('Error setting up database:', error);
            throw new Error('Failed to initialize problem data');
        }
    }

    /**
     * Execute a user query
     */
    execute(query: string): { results: QueryExecResult[] | null; error: string | null } {
        if (!this.db) {
            return { results: null, error: 'Database not initialized' };
        }

        try {
            const results = this.db.exec(query);
            return { results, error: null };
        } catch (err: any) {
            return { results: null, error: err.message };
        }
    }

    /**
     * Validate user query result against expected result
     */
    validate(userResults: QueryExecResult[]): { correct: boolean; message: string } {
        if (!userResults || userResults.length === 0) {
            return { correct: false, message: 'No results returned' };
        }

        // We compare the first result set
        const userResult = userResults[0];
        const expected = this.problem.expectedResult;

        // 1. Check row count
        if (userResult.values.length !== expected.length) {
            return {
                correct: false,
                message: `Expected ${expected.length} rows, but got ${userResult.values.length}`
            };
        }

        // 2. Check values deep equality
        // We sort both to ensure order doesn't matter unless specified
        // For simplicity in MVP, we might assume order matters if problem says ORDER BY
        const isOrdered = this.problem.solution.toUpperCase().includes('ORDER BY');

        const userRows = isOrdered ? userResult.values : [...userResult.values].sort();
        const expectedRows = isOrdered ? expected : [...expected].sort();

        const isEqual = JSON.stringify(userRows) === JSON.stringify(expectedRows);

        if (isEqual) {
            return { correct: true, message: 'Correct!' };
        } else {
            return { correct: false, message: 'Result values do not match expected output' };
        }
    }

    /**
     * Get formatted results for display
     */
    static formatResults(results: QueryExecResult[]) {
        if (!results.length) return null;
        return results[0];
    }

    /**
     * Clean up resources
     */
    close() {
        if (this.db) {
            this.db.close();
            this.db = null;
        }
    }
}
