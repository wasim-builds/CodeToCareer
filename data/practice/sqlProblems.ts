import { SQLProblem } from '@/types/sqlProblem';
import { intermediateSQLProblems } from './sqlProblemsIntermediate';
import { advancedSQLProblems } from './sqlProblemsAdvanced';

const beginnerProblems: SQLProblem[] = [
    // BEGINNER PROBLEMS
    {
        id: 'sql-001',
        title: 'Select All Users',
        difficulty: 'easy',
        category: 'SELECT Basics',
        description: 'Write a query to select all columns from the users table.',
        schema: [
            {
                name: 'users',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'name', type: 'TEXT', notNull: true },
                    { name: 'email', type: 'TEXT', notNull: true },
                    { name: 'age', type: 'INTEGER' },
                ],
                data: [
                    { id: 1, name: 'Alice', email: 'alice@example.com', age: 25 },
                    { id: 2, name: 'Bob', email: 'bob@example.com', age: 30 },
                    { id: 3, name: 'Charlie', email: 'charlie@example.com', age: 35 },
                ],
            },
        ],
        expectedResult: [
            [1, 'Alice', 'alice@example.com', 25],
            [2, 'Bob', 'bob@example.com', 30],
            [3, 'Charlie', 'charlie@example.com', 35],
        ],
        hints: [
            'Use SELECT * to select all columns',
            'FROM clause specifies the table name',
        ],
        solution: 'SELECT * FROM users;',
        explanation: 'SELECT * retrieves all columns from the specified table.',
        tags: ['SELECT', 'basics'],
        points: 10,
    },

    {
        id: 'sql-002',
        title: 'Filter Active Users',
        difficulty: 'easy',
        category: 'WHERE Clause',
        description: 'Select all users where status is "active".',
        schema: [
            {
                name: 'users',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'name', type: 'TEXT' },
                    { name: 'status', type: 'TEXT' },
                ],
                data: [
                    { id: 1, name: 'Alice', status: 'active' },
                    { id: 2, name: 'Bob', status: 'inactive' },
                    { id: 3, name: 'Charlie', status: 'active' },
                    { id: 4, name: 'David', status: 'inactive' },
                ],
            },
        ],
        expectedResult: [
            [1, 'Alice', 'active'],
            [3, 'Charlie', 'active'],
        ],
        hints: [
            'Use WHERE clause to filter rows',
            'Compare status column with "active"',
        ],
        solution: 'SELECT * FROM users WHERE status = "active";',
        explanation: 'WHERE clause filters rows based on a condition.',
        tags: ['WHERE', 'filtering'],
        points: 15,
    },

    {
        id: 'sql-003',
        title: 'Count Total Products',
        difficulty: 'easy',
        category: 'Aggregate Functions',
        description: 'Count the total number of products in the products table.',
        schema: [
            {
                name: 'products',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'name', type: 'TEXT' },
                    { name: 'price', type: 'REAL' },
                ],
                data: [
                    { id: 1, name: 'Laptop', price: 999.99 },
                    { id: 2, name: 'Mouse', price: 29.99 },
                    { id: 3, name: 'Keyboard', price: 79.99 },
                    { id: 4, name: 'Monitor', price: 299.99 },
                ],
            },
        ],
        expectedResult: [[4]],
        hints: [
            'Use COUNT(*) to count all rows',
            'No WHERE clause needed for total count',
        ],
        solution: 'SELECT COUNT(*) FROM products;',
        explanation: 'COUNT(*) returns the total number of rows in a table.',
        tags: ['COUNT', 'aggregate'],
        points: 15,
    },

    {
        id: 'sql-004',
        title: 'Order by Price',
        difficulty: 'easy',
        category: 'ORDER BY',
        description: 'Select all products ordered by price in descending order.',
        schema: [
            {
                name: 'products',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'name', type: 'TEXT' },
                    { name: 'price', type: 'REAL' },
                ],
                data: [
                    { id: 1, name: 'Laptop', price: 999.99 },
                    { id: 2, name: 'Mouse', price: 29.99 },
                    { id: 3, name: 'Keyboard', price: 79.99 },
                ],
            },
        ],
        expectedResult: [
            [1, 'Laptop', 999.99],
            [3, 'Keyboard', 79.99],
            [2, 'Mouse', 29.99],
        ],
        hints: [
            'Use ORDER BY clause',
            'DESC keyword for descending order',
        ],
        solution: 'SELECT * FROM products ORDER BY price DESC;',
        explanation: 'ORDER BY sorts results. DESC means descending order.',
        tags: ['ORDER BY', 'sorting'],
        points: 15,
    },

    {
        id: 'sql-005',
        title: 'Limit Results',
        difficulty: 'easy',
        category: 'LIMIT',
        description: 'Select the top 2 highest-paid employees.',
        schema: [
            {
                name: 'employees',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'name', type: 'TEXT' },
                    { name: 'salary', type: 'REAL' },
                ],
                data: [
                    { id: 1, name: 'Alice', salary: 75000 },
                    { id: 2, name: 'Bob', salary: 85000 },
                    { id: 3, name: 'Charlie', salary: 95000 },
                    { id: 4, name: 'David', salary: 65000 },
                ],
            },
        ],
        expectedResult: [
            [3, 'Charlie', 95000],
            [2, 'Bob', 85000],
        ],
        hints: [
            'Order by salary descending',
            'Use LIMIT to restrict number of rows',
        ],
        solution: 'SELECT * FROM employees ORDER BY salary DESC LIMIT 2;',
        explanation: 'LIMIT restricts the number of rows returned.',
        tags: ['LIMIT', 'ORDER BY'],
        points: 20,
    },

    {
        id: 'sql-006',
        title: 'Calculate Average',
        difficulty: 'easy',
        category: 'Aggregate Functions',
        description: 'Calculate the average price of all products.',
        schema: [
            {
                name: 'products',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'name', type: 'TEXT' },
                    { name: 'price', type: 'REAL' },
                ],
                data: [
                    { id: 1, name: 'Laptop', price: 1000 },
                    { id: 2, name: 'Mouse', price: 30 },
                    { id: 3, name: 'Keyboard', price: 70 },
                ],
            },
        ],
        expectedResult: [[366.6666666666667]],
        hints: [
            'Use AVG() function',
            'Apply to price column',
        ],
        solution: 'SELECT AVG(price) FROM products;',
        explanation: 'AVG() calculates the average of numeric values.',
        tags: ['AVG', 'aggregate'],
        points: 15,
    },

    {
        id: 'sql-007',
        title: 'Find Maximum Value',
        difficulty: 'easy',
        category: 'Aggregate Functions',
        description: 'Find the highest salary in the employees table.',
        schema: [
            {
                name: 'employees',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'name', type: 'TEXT' },
                    { name: 'salary', type: 'REAL' },
                ],
                data: [
                    { id: 1, name: 'Alice', salary: 75000 },
                    { id: 2, name: 'Bob', salary: 85000 },
                    { id: 3, name: 'Charlie', salary: 95000 },
                ],
            },
        ],
        expectedResult: [[95000]],
        hints: [
            'Use MAX() function',
            'Apply to salary column',
        ],
        solution: 'SELECT MAX(salary) FROM employees;',
        explanation: 'MAX() returns the maximum value in a column.',
        tags: ['MAX', 'aggregate'],
        points: 15,
    },

    {
        id: 'sql-008',
        title: 'Select Specific Columns',
        difficulty: 'easy',
        category: 'SELECT Basics',
        description: 'Select only the name and email columns from users.',
        schema: [
            {
                name: 'users',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'name', type: 'TEXT' },
                    { name: 'email', type: 'TEXT' },
                    { name: 'age', type: 'INTEGER' },
                ],
                data: [
                    { id: 1, name: 'Alice', email: 'alice@example.com', age: 25 },
                    { id: 2, name: 'Bob', email: 'bob@example.com', age: 30 },
                ],
            },
        ],
        expectedResult: [
            ['Alice', 'alice@example.com'],
            ['Bob', 'bob@example.com'],
        ],
        hints: [
            'List specific column names after SELECT',
            'Separate column names with commas',
        ],
        solution: 'SELECT name, email FROM users;',
        explanation: 'You can select specific columns by listing their names.',
        tags: ['SELECT', 'columns'],
        points: 10,
    },

    {
        id: 'sql-009',
        title: 'Filter with Multiple Conditions',
        difficulty: 'easy',
        category: 'WHERE Clause',
        description: 'Find all products with price greater than 50 AND in stock.',
        schema: [
            {
                name: 'products',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'name', type: 'TEXT' },
                    { name: 'price', type: 'REAL' },
                    { name: 'in_stock', type: 'INTEGER' },
                ],
                data: [
                    { id: 1, name: 'Laptop', price: 999, in_stock: 1 },
                    { id: 2, name: 'Mouse', price: 29, in_stock: 1 },
                    { id: 3, name: 'Keyboard', price: 79, in_stock: 0 },
                    { id: 4, name: 'Monitor', price: 299, in_stock: 1 },
                ],
            },
        ],
        expectedResult: [
            [1, 'Laptop', 999, 1],
            [4, 'Monitor', 299, 1],
        ],
        hints: [
            'Use AND to combine conditions',
            'in_stock = 1 means in stock',
        ],
        solution: 'SELECT * FROM products WHERE price > 50 AND in_stock = 1;',
        explanation: 'AND combines multiple conditions - all must be true.',
        tags: ['WHERE', 'AND', 'multiple conditions'],
        points: 20,
    },

    {
        id: 'sql-010',
        title: 'Sum Total Sales',
        difficulty: 'easy',
        category: 'Aggregate Functions',
        description: 'Calculate the total sum of all order amounts.',
        schema: [
            {
                name: 'orders',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'customer_id', type: 'INTEGER' },
                    { name: 'amount', type: 'REAL' },
                ],
                data: [
                    { id: 1, customer_id: 1, amount: 150.00 },
                    { id: 2, customer_id: 2, amount: 200.00 },
                    { id: 3, customer_id: 1, amount: 75.50 },
                    { id: 4, customer_id: 3, amount: 300.00 },
                ],
            },
        ],
        expectedResult: [[725.5]],
        hints: [
            'Use SUM() function',
            'Apply to amount column',
        ],
        solution: 'SELECT SUM(amount) FROM orders;',
        explanation: 'SUM() adds up all values in a numeric column.',
        tags: ['SUM', 'aggregate'],
        points: 15,
    },
];

export const sqlProblems: SQLProblem[] = [
    ...beginnerProblems,
    ...intermediateSQLProblems,
    ...advancedSQLProblems
];

/**
 * Get all SQL problems
 */
export function getAllSQLProblems(): SQLProblem[] {
    return sqlProblems;
}

/**
 * Get SQL problem by ID
 */
export function getSQLProblemById(id: string): SQLProblem | undefined {
    return sqlProblems.find(p => p.id === id);
}

/**
 * Get SQL problems by difficulty
 */
export function getSQLProblemsByDifficulty(difficulty: 'easy' | 'medium' | 'hard'): SQLProblem[] {
    return sqlProblems.filter(p => p.difficulty === difficulty);
}

/**
 * Get SQL problems by category
 */
export function getSQLProblemsByCategory(category: string): SQLProblem[] {
    return sqlProblems.filter(p => p.category === category);
}
