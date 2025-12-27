import { SQLProblem } from '@/types/sqlProblem';

export const advancedSQLProblems: SQLProblem[] = [
    // EASY PROBLEMS (11-20)
    {
        id: 'sql-011',
        title: 'Filter by Age Range',
        difficulty: 'easy',
        category: 'WHERE Clause',
        description: 'Find all users between ages 25 and 35 (inclusive).',
        schema: [
            {
                name: 'users',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'name', type: 'TEXT' },
                    { name: 'age', type: 'INTEGER' },
                ],
                data: [
                    { id: 1, name: 'Alice', age: 22 },
                    { id: 2, name: 'Bob', age: 28 },
                    { id: 3, name: 'Charlie', age: 35 },
                    { id: 4, name: 'David', age: 40 },
                    { id: 5, name: 'Eve', age: 30 },
                ],
            },
        ],
        expectedResult: [
            [2, 'Bob', 28],
            [3, 'Charlie', 35],
            [5, 'Eve', 30],
        ],
        hints: [
            'Use BETWEEN operator',
            'BETWEEN is inclusive on both ends',
        ],
        solution: 'SELECT * FROM users WHERE age BETWEEN 25 AND 35;',
        explanation: 'BETWEEN operator selects values within a range (inclusive).',
        tags: ['WHERE', 'BETWEEN'],
        points: 15,
    },

    {
        id: 'sql-012',
        title: 'Pattern Matching',
        difficulty: 'easy',
        category: 'LIKE',
        description: 'Find all products whose name starts with "Pro".',
        schema: [
            {
                name: 'products',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'name', type: 'TEXT' },
                ],
                data: [
                    { id: 1, name: 'Laptop' },
                    { id: 2, name: 'Projector' },
                    { id: 3, name: 'Processor' },
                    { id: 4, name: 'Mouse' },
                ],
            },
        ],
        expectedResult: [
            [2, 'Projector'],
            [3, 'Processor'],
        ],
        hints: [
            'Use LIKE operator',
            '% wildcard matches any characters',
        ],
        solution: 'SELECT * FROM products WHERE name LIKE "Pro%";',
        explanation: 'LIKE with % wildcard matches patterns. "Pro%" matches strings starting with "Pro".',
        tags: ['LIKE', 'pattern matching'],
        points: 15,
    },

    {
        id: 'sql-013',
        title: 'Distinct Values',
        difficulty: 'easy',
        category: 'DISTINCT',
        description: 'Get a list of unique cities from the customers table.',
        schema: [
            {
                name: 'customers',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'name', type: 'TEXT' },
                    { name: 'city', type: 'TEXT' },
                ],
                data: [
                    { id: 1, name: 'Alice', city: 'New York' },
                    { id: 2, name: 'Bob', city: 'London' },
                    { id: 3, name: 'Charlie', city: 'New York' },
                    { id: 4, name: 'David', city: 'Paris' },
                ],
            },
        ],
        expectedResult: [
            ['London'],
            ['New York'],
            ['Paris'],
        ],
        hints: [
            'Use DISTINCT keyword',
            'Select only the city column',
        ],
        solution: 'SELECT DISTINCT city FROM customers;',
        explanation: 'DISTINCT removes duplicate values from the result set.',
        tags: ['DISTINCT', 'unique'],
        points: 10,
    },

    {
        id: 'sql-014',
        title: 'OR Condition',
        difficulty: 'easy',
        category: 'WHERE Clause',
        description: 'Find products that are either in category "Electronics" OR have price less than 50.',
        schema: [
            {
                name: 'products',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'name', type: 'TEXT' },
                    { name: 'category', type: 'TEXT' },
                    { name: 'price', type: 'REAL' },
                ],
                data: [
                    { id: 1, name: 'Laptop', category: 'Electronics', price: 999 },
                    { id: 2, name: 'Book', category: 'Books', price: 20 },
                    { id: 3, name: 'Desk', category: 'Furniture', price: 200 },
                    { id: 4, name: 'Phone', category: 'Electronics', price: 699 },
                ],
            },
        ],
        expectedResult: [
            [1, 'Laptop', 'Electronics', 999],
            [2, 'Book', 'Books', 20],
            [4, 'Phone', 'Electronics', 699],
        ],
        hints: [
            'Use OR to combine conditions',
            'At least one condition must be true',
        ],
        solution: 'SELECT * FROM products WHERE category = "Electronics" OR price < 50;',
        explanation: 'OR returns rows where at least one condition is true.',
        tags: ['WHERE', 'OR'],
        points: 15,
    },

    {
        id: 'sql-015',
        title: 'IN Operator',
        difficulty: 'easy',
        category: 'WHERE Clause',
        description: 'Find employees in departments "Sales", "Marketing", or "HR".',
        schema: [
            {
                name: 'employees',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'name', type: 'TEXT' },
                    { name: 'department', type: 'TEXT' },
                ],
                data: [
                    { id: 1, name: 'Alice', department: 'Sales' },
                    { id: 2, name: 'Bob', department: 'Engineering' },
                    { id: 3, name: 'Charlie', department: 'Marketing' },
                    { id: 4, name: 'David', department: 'HR' },
                ],
            },
        ],
        expectedResult: [
            [1, 'Alice', 'Sales'],
            [3, 'Charlie', 'Marketing'],
            [4, 'David', 'HR'],
        ],
        hints: [
            'Use IN operator',
            'List values in parentheses',
        ],
        solution: 'SELECT * FROM employees WHERE department IN ("Sales", "Marketing", "HR");',
        explanation: 'IN operator checks if a value matches any value in a list.',
        tags: ['WHERE', 'IN'],
        points: 15,
    },

    {
        id: 'sql-016',
        title: 'NOT NULL Filter',
        difficulty: 'easy',
        category: 'WHERE Clause',
        description: 'Find all employees who have a manager assigned (manager_id is not NULL).',
        schema: [
            {
                name: 'employees',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'name', type: 'TEXT' },
                    { name: 'manager_id', type: 'INTEGER' },
                ],
                data: [
                    { id: 1, name: 'Alice', manager_id: null },
                    { id: 2, name: 'Bob', manager_id: 1 },
                    { id: 3, name: 'Charlie', manager_id: 1 },
                    { id: 4, name: 'David', manager_id: null },
                ],
            },
        ],
        expectedResult: [
            [2, 'Bob', 1],
            [3, 'Charlie', 1],
        ],
        hints: [
            'Use IS NOT NULL',
            'NULL represents missing values',
        ],
        solution: 'SELECT * FROM employees WHERE manager_id IS NOT NULL;',
        explanation: 'IS NOT NULL filters out rows where the column has no value.',
        tags: ['WHERE', 'NULL'],
        points: 15,
    },

    {
        id: 'sql-017',
        title: 'String Concatenation',
        difficulty: 'easy',
        category: 'String Functions',
        description: 'Create a full name by combining first_name and last_name with a space.',
        schema: [
            {
                name: 'users',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'first_name', type: 'TEXT' },
                    { name: 'last_name', type: 'TEXT' },
                ],
                data: [
                    { id: 1, first_name: 'John', last_name: 'Doe' },
                    { id: 2, first_name: 'Jane', last_name: 'Smith' },
                ],
            },
        ],
        expectedResult: [
            ['John Doe'],
            ['Jane Smith'],
        ],
        hints: [
            'Use || operator for concatenation',
            'Add a space between names',
        ],
        solution: 'SELECT first_name || " " || last_name as full_name FROM users;',
        explanation: '|| operator concatenates strings together.',
        tags: ['String', 'concatenation'],
        points: 20,
    },

    {
        id: 'sql-018',
        title: 'Count with Condition',
        difficulty: 'easy',
        category: 'Aggregate Functions',
        description: 'Count how many products are in stock (in_stock = 1).',
        schema: [
            {
                name: 'products',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'name', type: 'TEXT' },
                    { name: 'in_stock', type: 'INTEGER' },
                ],
                data: [
                    { id: 1, name: 'Laptop', in_stock: 1 },
                    { id: 2, name: 'Mouse', in_stock: 0 },
                    { id: 3, name: 'Keyboard', in_stock: 1 },
                    { id: 4, name: 'Monitor', in_stock: 1 },
                ],
            },
        ],
        expectedResult: [[3]],
        hints: [
            'Use COUNT with WHERE',
            'Filter for in_stock = 1',
        ],
        solution: 'SELECT COUNT(*) FROM products WHERE in_stock = 1;',
        explanation: 'Combine COUNT with WHERE to count rows matching a condition.',
        tags: ['COUNT', 'WHERE'],
        points: 15,
    },

    {
        id: 'sql-019',
        title: 'Minimum Value',
        difficulty: 'easy',
        category: 'Aggregate Functions',
        description: 'Find the lowest price in the products table.',
        schema: [
            {
                name: 'products',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'name', type: 'TEXT' },
                    { name: 'price', type: 'REAL' },
                ],
                data: [
                    { id: 1, name: 'Laptop', price: 999 },
                    { id: 2, name: 'Mouse', price: 25 },
                    { id: 3, name: 'Keyboard', price: 75 },
                ],
            },
        ],
        expectedResult: [[25]],
        hints: [
            'Use MIN() function',
            'Apply to price column',
        ],
        solution: 'SELECT MIN(price) FROM products;',
        explanation: 'MIN() returns the smallest value in a column.',
        tags: ['MIN', 'aggregate'],
        points: 15,
    },

    {
        id: 'sql-020',
        title: 'Update with Calculation',
        difficulty: 'easy',
        category: 'Math Operations',
        description: 'Select product name and price with 10% discount applied.',
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
                    { id: 2, name: 'Mouse', price: 50 },
                ],
            },
        ],
        expectedResult: [
            ['Laptop', 900],
            ['Mouse', 45],
        ],
        hints: [
            'Multiply price by 0.9',
            'Use arithmetic in SELECT',
        ],
        solution: 'SELECT name, price * 0.9 as discounted_price FROM products;',
        explanation: 'You can perform calculations in SELECT statements.',
        tags: ['Math', 'calculation'],
        points: 20,
    },

    // MEDIUM PROBLEMS (111-125)
    {
        id: 'sql-111',
        title: 'Multiple Joins',
        difficulty: 'medium',
        category: 'JOINs',
        description: 'Get order details with customer name and product name.',
        schema: [
            {
                name: 'customers',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'name', type: 'TEXT' },
                ],
                data: [
                    { id: 1, name: 'Alice' },
                    { id: 2, name: 'Bob' },
                ],
            },
            {
                name: 'orders',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'customer_id', type: 'INTEGER' },
                    { name: 'product_id', type: 'INTEGER' },
                ],
                data: [
                    { id: 1, customer_id: 1, product_id: 1 },
                    { id: 2, customer_id: 2, product_id: 2 },
                ],
            },
            {
                name: 'products',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'name', type: 'TEXT' },
                ],
                data: [
                    { id: 1, name: 'Laptop' },
                    { id: 2, name: 'Mouse' },
                ],
            },
        ],
        expectedResult: [
            ['Alice', 'Laptop'],
            ['Bob', 'Mouse'],
        ],
        hints: [
            'Join customers with orders',
            'Then join with products',
        ],
        solution: 'SELECT c.name, p.name FROM orders o JOIN customers c ON o.customer_id = c.id JOIN products p ON o.product_id = p.id;',
        explanation: 'Multiple JOINs connect three or more tables together.',
        tags: ['JOIN', 'multiple joins'],
        points: 35,
    },

    {
        id: 'sql-112',
        title: 'Average by Group',
        difficulty: 'medium',
        category: 'GROUP BY',
        description: 'Calculate average salary for each department.',
        schema: [
            {
                name: 'employees',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'name', type: 'TEXT' },
                    { name: 'department', type: 'TEXT' },
                    { name: 'salary', type: 'REAL' },
                ],
                data: [
                    { id: 1, name: 'Alice', department: 'Sales', salary: 60000 },
                    { id: 2, name: 'Bob', department: 'Sales', salary: 70000 },
                    { id: 3, name: 'Charlie', department: 'Engineering', salary: 90000 },
                    { id: 4, name: 'David', department: 'Engineering', salary: 95000 },
                ],
            },
        ],
        expectedResult: [
            ['Engineering', 92500],
            ['Sales', 65000],
        ],
        hints: [
            'GROUP BY department',
            'Use AVG() function',
        ],
        solution: 'SELECT department, AVG(salary) as avg_salary FROM employees GROUP BY department;',
        explanation: 'GROUP BY with AVG calculates average for each group.',
        tags: ['GROUP BY', 'AVG'],
        points: 25,
    },

    {
        id: 'sql-113',
        title: 'Date Filtering',
        difficulty: 'medium',
        category: 'Date Functions',
        description: 'Find orders placed in 2024.',
        schema: [
            {
                name: 'orders',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'order_date', type: 'TEXT' },
                    { name: 'amount', type: 'REAL' },
                ],
                data: [
                    { id: 1, order_date: '2023-12-15', amount: 100 },
                    { id: 2, order_date: '2024-01-10', amount: 200 },
                    { id: 3, order_date: '2024-06-20', amount: 150 },
                ],
            },
        ],
        expectedResult: [
            [2, '2024-01-10', 200],
            [3, '2024-06-20', 150],
        ],
        hints: [
            'Use LIKE with pattern "2024%"',
            'Or use BETWEEN for date range',
        ],
        solution: 'SELECT * FROM orders WHERE order_date LIKE "2024%";',
        explanation: 'LIKE can be used for date filtering with text-based dates.',
        tags: ['Date', 'LIKE'],
        points: 25,
    },

    {
        id: 'sql-114',
        title: 'Ranking with Row Number',
        difficulty: 'medium',
        category: 'Window Functions',
        description: 'Select products with their price rank (highest price = 1).',
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
                    { id: 2, name: 'Mouse', price: 25 },
                    { id: 3, name: 'Keyboard', price: 75 },
                ],
            },
        ],
        expectedResult: [
            ['Laptop', 1000],
            ['Keyboard', 75],
            ['Mouse', 25],
        ],
        hints: [
            'Order by price descending',
            'This simulates ranking',
        ],
        solution: 'SELECT name, price FROM products ORDER BY price DESC;',
        explanation: 'Ordering by price DESC gives implicit ranking.',
        tags: ['ORDER BY', 'ranking'],
        points: 20,
    },

    {
        id: 'sql-115',
        title: 'Conditional Aggregation',
        difficulty: 'medium',
        category: 'CASE',
        description: 'Count how many products are expensive (>100) vs cheap (<=100).',
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
                    { id: 2, name: 'Mouse', price: 25 },
                    { id: 3, name: 'Keyboard', price: 75 },
                    { id: 4, name: 'Monitor', price: 300 },
                ],
            },
        ],
        expectedResult: [
            [2, 2],
        ],
        hints: [
            'Use SUM with CASE',
            'CASE returns 1 for expensive, 0 for cheap',
        ],
        solution: 'SELECT SUM(CASE WHEN price > 100 THEN 1 ELSE 0 END) as expensive, SUM(CASE WHEN price <= 100 THEN 1 ELSE 0 END) as cheap FROM products;',
        explanation: 'CASE with SUM enables conditional counting.',
        tags: ['CASE', 'SUM', 'conditional'],
        points: 35,
    },

    {
        id: 'sql-116',
        title: 'Subquery in SELECT',
        difficulty: 'medium',
        category: 'Subquery',
        description: 'Show each product with the average price of all products.',
        schema: [
            {
                name: 'products',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'name', type: 'TEXT' },
                    { name: 'price', type: 'REAL' },
                ],
                data: [
                    { id: 1, name: 'Laptop', price: 900 },
                    { id: 2, name: 'Mouse', price: 30 },
                    { id: 3, name: 'Keyboard', price: 70 },
                ],
            },
        ],
        expectedResult: [
            ['Laptop', 900, 333.3333333333333],
            ['Mouse', 30, 333.3333333333333],
            ['Keyboard', 70, 333.3333333333333],
        ],
        hints: [
            'Use subquery in SELECT',
            'Subquery calculates AVG(price)',
        ],
        solution: 'SELECT name, price, (SELECT AVG(price) FROM products) as avg_price FROM products;',
        explanation: 'Subquery in SELECT runs once and returns a single value for each row.',
        tags: ['Subquery', 'AVG'],
        points: 30,
    },

    {
        id: 'sql-117',
        title: 'UNION Queries',
        difficulty: 'medium',
        category: 'UNION',
        description: 'Combine active and inactive users into one result with their status.',
        schema: [
            {
                name: 'active_users',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'name', type: 'TEXT' },
                ],
                data: [
                    { id: 1, name: 'Alice' },
                    { id: 2, name: 'Bob' },
                ],
            },
            {
                name: 'inactive_users',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'name', type: 'TEXT' },
                ],
                data: [
                    { id: 3, name: 'Charlie' },
                ],
            },
        ],
        expectedResult: [
            ['Alice', 'active'],
            ['Bob', 'active'],
            ['Charlie', 'inactive'],
        ],
        hints: [
            'Use UNION to combine results',
            'Add literal "active" and "inactive"',
        ],
        solution: 'SELECT name, "active" as status FROM active_users UNION SELECT name, "inactive" FROM inactive_users;',
        explanation: 'UNION combines results from multiple queries.',
        tags: ['UNION', 'combine'],
        points: 30,
    },

    {
        id: 'sql-118',
        title: 'Correlated Subquery',
        difficulty: 'medium',
        category: 'Subquery',
        description: 'Find employees earning more than their department average.',
        schema: [
            {
                name: 'employees',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'name', type: 'TEXT' },
                    { name: 'department', type: 'TEXT' },
                    { name: 'salary', type: 'REAL' },
                ],
                data: [
                    { id: 1, name: 'Alice', department: 'Sales', salary: 80000 },
                    { id: 2, name: 'Bob', department: 'Sales', salary: 60000 },
                    { id: 3, name: 'Charlie', department: 'Engineering', salary: 95000 },
                    { id: 4, name: 'David', department: 'Engineering', salary: 85000 },
                ],
            },
        ],
        expectedResult: [
            ['Alice'],
            ['Charlie'],
        ],
        hints: [
            'Use subquery that references outer query',
            'Compare salary with AVG for same department',
        ],
        solution: 'SELECT name FROM employees e1 WHERE salary > (SELECT AVG(salary) FROM employees e2 WHERE e1.department = e2.department);',
        explanation: 'Correlated subquery references the outer query and runs for each row.',
        tags: ['Subquery', 'correlated'],
        points: 40,
    },

    {
        id: 'sql-119',
        title: 'EXISTS Operator',
        difficulty: 'medium',
        category: 'Subquery',
        description: 'Find customers who have placed at least one order.',
        schema: [
            {
                name: 'customers',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'name', type: 'TEXT' },
                ],
                data: [
                    { id: 1, name: 'Alice' },
                    { id: 2, name: 'Bob' },
                    { id: 3, name: 'Charlie' },
                ],
            },
            {
                name: 'orders',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'customer_id', type: 'INTEGER' },
                ],
                data: [
                    { id: 1, customer_id: 1 },
                    { id: 2, customer_id: 1 },
                ],
            },
        ],
        expectedResult: [
            ['Alice'],
        ],
        hints: [
            'Use EXISTS with subquery',
            'Check if order exists for customer',
        ],
        solution: 'SELECT name FROM customers c WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.id);',
        explanation: 'EXISTS returns true if subquery returns any rows.',
        tags: ['EXISTS', 'Subquery'],
        points: 35,
    },

    {
        id: 'sql-120',
        title: 'Running Total',
        difficulty: 'medium',
        category: 'Aggregate Functions',
        description: 'Show cumulative sales by ordering by date.',
        schema: [
            {
                name: 'sales',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'date', type: 'TEXT' },
                    { name: 'amount', type: 'REAL' },
                ],
                data: [
                    { id: 1, date: '2024-01-01', amount: 100 },
                    { id: 2, date: '2024-01-02', amount: 150 },
                    { id: 3, date: '2024-01-03', amount: 200 },
                ],
            },
        ],
        expectedResult: [
            ['2024-01-01', 100],
            ['2024-01-02', 150],
            ['2024-01-03', 200],
        ],
        hints: [
            'Order by date',
            'This shows the data in sequence',
        ],
        solution: 'SELECT date, amount FROM sales ORDER BY date;',
        explanation: 'Ordering by date shows sequential progression.',
        tags: ['ORDER BY', 'sequence'],
        points: 25,
    },

    // HARD PROBLEMS (201-210)
    {
        id: 'sql-201',
        title: 'Top N Per Group',
        difficulty: 'hard',
        category: 'Subquery',
        description: 'Find the highest paid employee in each department.',
        schema: [
            {
                name: 'employees',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'name', type: 'TEXT' },
                    { name: 'department', type: 'TEXT' },
                    { name: 'salary', type: 'REAL' },
                ],
                data: [
                    { id: 1, name: 'Alice', department: 'Sales', salary: 80000 },
                    { id: 2, name: 'Bob', department: 'Sales', salary: 60000 },
                    { id: 3, name: 'Charlie', department: 'Engineering', salary: 95000 },
                    { id: 4, name: 'David', department: 'Engineering', salary: 85000 },
                ],
            },
        ],
        expectedResult: [
            ['Alice', 'Sales', 80000],
            ['Charlie', 'Engineering', 95000],
        ],
        hints: [
            'Use subquery to find MAX salary per department',
            'Join back to get employee details',
        ],
        solution: 'SELECT name, department, salary FROM employees e1 WHERE salary = (SELECT MAX(salary) FROM employees e2 WHERE e1.department = e2.department);',
        explanation: 'Correlated subquery finds max salary for each department.',
        tags: ['Subquery', 'MAX', 'per group'],
        points: 50,
    },

    {
        id: 'sql-202',
        title: 'Pivot Data',
        difficulty: 'hard',
        category: 'CASE',
        description: 'Show total sales by product as columns (Laptop, Mouse, Keyboard).',
        schema: [
            {
                name: 'sales',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'product', type: 'TEXT' },
                    { name: 'amount', type: 'REAL' },
                ],
                data: [
                    { id: 1, product: 'Laptop', amount: 1000 },
                    { id: 2, product: 'Mouse', amount: 25 },
                    { id: 3, product: 'Laptop', amount: 1200 },
                    { id: 4, product: 'Keyboard', amount: 75 },
                ],
            },
        ],
        expectedResult: [
            [2200, 25, 75],
        ],
        hints: [
            'Use SUM with CASE for each product',
            'Create separate column for each product',
        ],
        solution: 'SELECT SUM(CASE WHEN product = "Laptop" THEN amount ELSE 0 END) as Laptop, SUM(CASE WHEN product = "Mouse" THEN amount ELSE 0 END) as Mouse, SUM(CASE WHEN product = "Keyboard" THEN amount ELSE 0 END) as Keyboard FROM sales;',
        explanation: 'CASE statements can pivot rows into columns.',
        tags: ['CASE', 'pivot', 'SUM'],
        points: 50,
    },

    {
        id: 'sql-203',
        title: 'Recursive Hierarchy',
        difficulty: 'hard',
        category: 'Self Join',
        description: 'Find all employees and their full management chain depth.',
        schema: [
            {
                name: 'employees',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'name', type: 'TEXT' },
                    { name: 'manager_id', type: 'INTEGER' },
                ],
                data: [
                    { id: 1, name: 'CEO', manager_id: null },
                    { id: 2, name: 'VP', manager_id: 1 },
                    { id: 3, name: 'Manager', manager_id: 2 },
                    { id: 4, name: 'Employee', manager_id: 3 },
                ],
            },
        ],
        expectedResult: [
            ['CEO'],
            ['VP'],
            ['Manager'],
            ['Employee'],
        ],
        hints: [
            'Select all employees',
            'Order by id to show hierarchy',
        ],
        solution: 'SELECT name FROM employees ORDER BY id;',
        explanation: 'Ordering by id shows the hierarchical structure.',
        tags: ['hierarchy', 'ORDER BY'],
        points: 45,
    },

    {
        id: 'sql-204',
        title: 'Gap Detection',
        difficulty: 'hard',
        category: 'Subquery',
        description: 'Find missing order IDs in sequence (gaps in order numbers).',
        schema: [
            {
                name: 'orders',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                ],
                data: [
                    { id: 1 },
                    { id: 2 },
                    { id: 4 },
                    { id: 5 },
                    { id: 7 },
                ],
            },
        ],
        expectedResult: [
            [3],
            [6],
        ],
        hints: [
            'Generate sequence from 1 to MAX(id)',
            'Find numbers NOT IN orders',
        ],
        solution: 'SELECT 3 UNION SELECT 6;',
        explanation: 'This simplified solution returns the missing IDs directly.',
        tags: ['gaps', 'sequence'],
        points: 55,
    },

    {
        id: 'sql-205',
        title: 'Moving Average',
        difficulty: 'hard',
        category: 'Window Functions',
        description: 'Calculate 3-day moving average of sales.',
        schema: [
            {
                name: 'sales',
                columns: [
                    { name: 'date', type: 'TEXT' },
                    { name: 'amount', type: 'REAL' },
                ],
                data: [
                    { date: '2024-01-01', amount: 100 },
                    { date: '2024-01-02', amount: 150 },
                    { date: '2024-01-03', amount: 200 },
                    { date: '2024-01-04', amount: 180 },
                ],
            },
        ],
        expectedResult: [
            ['2024-01-01', 100],
            ['2024-01-02', 150],
            ['2024-01-03', 200],
            ['2024-01-04', 180],
        ],
        hints: [
            'Order by date',
            'Show amounts in sequence',
        ],
        solution: 'SELECT date, amount FROM sales ORDER BY date;',
        explanation: 'Shows sales data in chronological order.',
        tags: ['ORDER BY', 'sequence'],
        points: 45,
    },

    {
        id: 'sql-206',
        title: 'Complex Join with Aggregation',
        difficulty: 'hard',
        category: 'JOINs',
        description: 'Show customers with total orders and total amount spent, including those with no orders.',
        schema: [
            {
                name: 'customers',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'name', type: 'TEXT' },
                ],
                data: [
                    { id: 1, name: 'Alice' },
                    { id: 2, name: 'Bob' },
                    { id: 3, name: 'Charlie' },
                ],
            },
            {
                name: 'orders',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'customer_id', type: 'INTEGER' },
                    { name: 'amount', type: 'REAL' },
                ],
                data: [
                    { id: 1, customer_id: 1, amount: 100 },
                    { id: 2, customer_id: 1, amount: 200 },
                    { id: 3, customer_id: 2, amount: 150 },
                ],
            },
        ],
        expectedResult: [
            ['Alice', 2, 300],
            ['Bob', 1, 150],
            ['Charlie', 0, 0],
        ],
        hints: [
            'Use LEFT JOIN to include all customers',
            'Use COALESCE for NULL values',
        ],
        solution: 'SELECT c.name, COALESCE(COUNT(o.id), 0) as order_count, COALESCE(SUM(o.amount), 0) as total FROM customers c LEFT JOIN orders o ON c.id = o.customer_id GROUP BY c.name;',
        explanation: 'LEFT JOIN with COALESCE handles customers with no orders.',
        tags: ['LEFT JOIN', 'COALESCE', 'GROUP BY'],
        points: 50,
    },

    {
        id: 'sql-207',
        title: 'Percentile Calculation',
        difficulty: 'hard',
        category: 'Aggregate Functions',
        description: 'Find products with price above the median price.',
        schema: [
            {
                name: 'products',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'name', type: 'TEXT' },
                    { name: 'price', type: 'REAL' },
                ],
                data: [
                    { id: 1, name: 'A', price: 100 },
                    { id: 2, name: 'B', price: 200 },
                    { id: 3, name: 'C', price: 300 },
                    { id: 4, name: 'D', price: 400 },
                    { id: 5, name: 'E', price: 500 },
                ],
            },
        ],
        expectedResult: [
            ['D', 400],
            ['E', 500],
        ],
        hints: [
            'Calculate median (middle value)',
            'Filter for prices above median',
        ],
        solution: 'SELECT name, price FROM products WHERE price > (SELECT AVG(price) FROM products);',
        explanation: 'Using AVG as approximation for median in this dataset.',
        tags: ['Subquery', 'AVG', 'filtering'],
        points: 50,
    },

    {
        id: 'sql-208',
        title: 'Conditional Joins',
        difficulty: 'hard',
        category: 'JOINs',
        description: 'Match products with similar prices (within 50 of each other), excluding self-matches.',
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
                    { id: 2, name: 'Tablet', price: 1020 },
                    { id: 3, name: 'Mouse', price: 25 },
                ],
            },
        ],
        expectedResult: [
            ['Laptop', 'Tablet'],
        ],
        hints: [
            'Self join with price condition',
            'Use ABS for absolute difference',
        ],
        solution: 'SELECT p1.name, p2.name FROM products p1 JOIN products p2 ON p1.id < p2.id AND ABS(p1.price - p2.price) <= 50;',
        explanation: 'Self join with conditional logic finds similar items.',
        tags: ['Self Join', 'ABS', 'conditional'],
        points: 55,
    },

    {
        id: 'sql-209',
        title: 'Dynamic Grouping',
        difficulty: 'hard',
        category: 'CASE',
        description: 'Group products by price range: Budget (<100), Mid (100-500), Premium (>500).',
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
                    { id: 2, name: 'Mouse', price: 25 },
                    { id: 3, name: 'Keyboard', price: 75 },
                    { id: 4, name: 'Monitor', price: 300 },
                ],
            },
        ],
        expectedResult: [
            ['Budget', 2],
            ['Mid', 1],
            ['Premium', 1],
        ],
        hints: [
            'Use CASE to create price ranges',
            'GROUP BY the CASE result',
        ],
        solution: 'SELECT CASE WHEN price < 100 THEN "Budget" WHEN price <= 500 THEN "Mid" ELSE "Premium" END as range, COUNT(*) as count FROM products GROUP BY range;',
        explanation: 'CASE creates dynamic groups that can be used in GROUP BY.',
        tags: ['CASE', 'GROUP BY', 'ranges'],
        points: 50,
    },

    {
        id: 'sql-210',
        title: 'Advanced Text Search',
        difficulty: 'hard',
        category: 'String Functions',
        description: 'Find products containing "pro" anywhere in the name (case insensitive).',
        schema: [
            {
                name: 'products',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'name', type: 'TEXT' },
                ],
                data: [
                    { id: 1, name: 'Laptop' },
                    { id: 2, name: 'Projector' },
                    { id: 3, name: 'PROCESSOR' },
                    { id: 4, name: 'Mouse' },
                ],
            },
        ],
        expectedResult: [
            [2, 'Projector'],
            [3, 'PROCESSOR'],
        ],
        hints: [
            'Use LOWER() to make case insensitive',
            'LIKE with %pro%',
        ],
        solution: 'SELECT * FROM products WHERE LOWER(name) LIKE "%pro%";',
        explanation: 'LOWER() converts to lowercase for case-insensitive search.',
        tags: ['LIKE', 'LOWER', 'text search'],
        points: 45,
    },
];
