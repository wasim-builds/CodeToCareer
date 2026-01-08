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
                    .map(col => {
                        const parts = [col.name, col.type];
                        if (col.primaryKey) parts.push('PRIMARY KEY');
                        if (col.notNull) parts.push('NOT NULL');
                        return parts.join(' ');
                    })
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
        const isOrdered = this.problem.solution.toUpperCase().includes('ORDER BY');

        const userRows = isOrdered ? userResult.values : [...userResult.values].sort();
        const expectedRows = isOrdered ? expected : [...expected].sort();

        // Compare with tolerance for floating-point numbers
        const isEqual = this.compareResults(userRows, expectedRows);

        if (isEqual) {
            return { correct: true, message: 'Correct!' };
        } else {
            return {
                correct: false,
                message: 'Result values do not match expected output.\nExpected: ' +
                    JSON.stringify(expectedRows.slice(0, 3)) +
                    (expectedRows.length > 3 ? '...' : '') +
                    '\nGot: ' +
                    JSON.stringify(userRows.slice(0, 3)) +
                    (userRows.length > 3 ? '...' : '')
            };
        }
    }

    /**
     * Compare two result sets with tolerance for floating-point numbers
     */
    private compareResults(userRows: any[][], expectedRows: any[][]): boolean {
        if (userRows.length !== expectedRows.length) return false;

        const EPSILON = 0.0001; // Tolerance for floating-point comparison

        for (let i = 0; i < userRows.length; i++) {
            const userRow = userRows[i];
            const expectedRow = expectedRows[i];

            if (userRow.length !== expectedRow.length) return false;

            for (let j = 0; j < userRow.length; j++) {
                const userVal = userRow[j];
                const expectedVal = expectedRow[j];

                // Handle null values
                if (userVal === null && expectedVal === null) continue;
                if (userVal === null || expectedVal === null) return false;

                // Handle floating-point numbers
                if (typeof userVal === 'number' && typeof expectedVal === 'number') {
                    if (Math.abs(userVal - expectedVal) > EPSILON) return false;
                } else {
                    // Handle other types (string, boolean, etc.)
                    if (userVal !== expectedVal) return false;
                }
            }
        }

        return true;
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
