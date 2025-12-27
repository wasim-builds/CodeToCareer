import { SQLProblem } from '@/types/sqlProblem';

export const intermediateSQLProblems: SQLProblem[] = [
    {
        id: 'sql-101',
        title: 'Customer Orders',
        difficulty: 'medium',
        category: 'JOINs',
        description: 'Select customer name and their order amounts for all orders.',
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
                    { id: 2, customer_id: 2, amount: 200 },
                    { id: 3, customer_id: 1, amount: 50 },
                ],
            },
        ],
        expectedResult: [
            ['Alice', 100],
            ['Bob', 200],
            ['Alice', 50],
        ],
        hints: [
            'Use INNER JOIN to connect tables',
            'Join on customer_id = customers.id',
        ],
        solution: 'SELECT c.name, o.amount FROM customers c JOIN orders o ON c.id = o.customer_id;',
        explanation: 'INNER JOIN returns rows when there is a match in both tables.',
        tags: ['JOIN', 'INNER JOIN'],
        points: 25,
    },

    {
        id: 'sql-102',
        title: 'Customers Without Orders',
        difficulty: 'medium',
        category: 'JOINs',
        description: 'Find customers who have not placed any orders.',
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
                ],
            },
        ],
        expectedResult: [
            ['Bob'],
            ['Charlie'],
        ],
        hints: [
            'Use LEFT JOIN to include all customers',
            'Filter where order_id is NULL',
        ],
        solution: 'SELECT c.name FROM customers c LEFT JOIN orders o ON c.id = o.customer_id WHERE o.id IS NULL;',
        explanation: 'LEFT JOIN gets all rows from left table. WHERE o.id IS NULL filters for non-matches.',
        tags: ['JOIN', 'LEFT JOIN', 'NULL'],
        points: 30,
    },

    {
        id: 'sql-103',
        title: 'Total Spent Per Customer',
        difficulty: 'medium',
        category: 'GROUP BY',
        description: 'Calculate total amount spent by each customer, ordered by amount descending.',
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
                    { name: 'amount', type: 'REAL' },
                ],
                data: [
                    { id: 1, customer_id: 1, amount: 100 },
                    { id: 2, customer_id: 2, amount: 200 },
                    { id: 3, customer_id: 1, amount: 150 },
                ],
            },
        ],
        expectedResult: [
            ['Alice', 250],
            ['Bob', 200],
        ],
        hints: [
            'Use GROUP BY customer',
            'Use SUM() for total amount',
        ],
        solution: 'SELECT c.name, SUM(o.amount) as total FROM customers c JOIN orders o ON c.id = o.customer_id GROUP BY c.name ORDER BY total DESC;',
        explanation: 'GROUP BY aggregates rows by a column. SUM calculates total for each group.',
        tags: ['GROUP BY', 'SUM', 'JOIN'],
        points: 30,
    },

    {
        id: 'sql-104',
        title: 'High Value Customers',
        difficulty: 'medium',
        category: 'HAVING',
        description: 'Find customers who have spent more than 200 in total.',
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
                    { id: 1, customer_id: 1, amount: 150 },
                    { id: 2, customer_id: 1, amount: 100 },
                    { id: 3, customer_id: 2, amount: 150 },
                    { id: 4, customer_id: 3, amount: 50 },
                ],
            },
        ],
        expectedResult: [
            ['Alice'],
        ],
        hints: [
            'GROUP BY customer',
            'Use HAVING to filter aggregated results',
        ],
        solution: 'SELECT c.name FROM customers c JOIN orders o ON c.id = o.customer_id GROUP BY c.name HAVING SUM(o.amount) > 200;',
        explanation: 'HAVING filters groups created by GROUP BY. WHERE filters rows before grouping.',
        tags: ['HAVING', 'GROUP BY'],
        points: 35,
    },

    {
        id: 'sql-105',
        title: 'Order Count By Status',
        difficulty: 'medium',
        category: 'GROUP BY',
        description: 'Count how many orders exist for each status.',
        schema: [
            {
                name: 'orders',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'status', type: 'TEXT' },
                ],
                data: [
                    { id: 1, status: 'shipped' },
                    { id: 2, status: 'pending' },
                    { id: 3, status: 'shipped' },
                    { id: 4, status: 'cancelled' },
                ],
            },
        ],
        expectedResult: [
            ['cancelled', 1],
            ['pending', 1],
            ['shipped', 2],
        ],
        hints: [
            'GROUP BY status',
            'COUNT(*) to count orders',
        ],
        solution: 'SELECT status, COUNT(*) FROM orders GROUP BY status;',
        explanation: 'Groups results by unique status values and counts occurrences.',
        tags: ['GROUP BY', 'COUNT'],
        points: 20,
    },

    {
        id: 'sql-106',
        title: 'Employee Managers',
        difficulty: 'medium',
        category: 'Self Join',
        description: 'Find names of employees and their manager name.',
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
                    { id: 4, name: 'David', manager_id: 2 },
                ],
            },
        ],
        expectedResult: [
            ['Bob', 'Alice'],
            ['Charlie', 'Alice'],
            ['David', 'Bob'],
        ],
        hints: [
            'Join the table with itself',
            'Alias table as e (employee) and m (manager)',
        ],
        solution: 'SELECT e.name, m.name FROM employees e JOIN employees m ON e.manager_id = m.id;',
        explanation: 'Self join allows comparing rows within the same table. e is employee, m is manager.',
        tags: ['JOIN', 'Self Join'],
        points: 40,
    },

    {
        id: 'sql-107',
        title: 'Products Never Ordered',
        difficulty: 'medium',
        category: 'Subquery',
        description: 'Find products that have never been ordered using a subquery.',
        schema: [
            {
                name: 'products',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'name', type: 'TEXT' },
                ],
                data: [
                    { id: 1, name: 'Laptop' },
                    { id: 2, name: 'Mouse' },
                    { id: 3, name: 'Keyboard' },
                ],
            },
            {
                name: 'order_items',
                columns: [
                    { name: 'order_id', type: 'INTEGER' },
                    { name: 'product_id', type: 'INTEGER' },
                ],
                data: [
                    { order_id: 1, product_id: 1 },
                    { order_id: 2, product_id: 2 },
                ],
            },
        ],
        expectedResult: [
            ['Keyboard'],
        ],
        hints: [
            'Use NOT IN or NOT EXISTS',
            'Select product_ids from order_items',
        ],
        solution: 'SELECT name FROM products WHERE id NOT IN (SELECT product_id FROM order_items);',
        explanation: 'Subquery finds ordered product IDs. Outer query filters out those IDs.',
        tags: ['Subquery', 'NOT IN'],
        points: 30,
    },

    {
        id: 'sql-108',
        title: 'Categorize Prices',
        difficulty: 'medium',
        category: 'CASE',
        description: 'Select product name and price category ("Cheap" < 50, "Expensive" >= 50).',
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
                    { id: 2, name: 'Mouse', price: 20 },
                    { id: 3, name: 'Keyboard', price: 60 },
                ],
            },
        ],
        expectedResult: [
            ['Laptop', 'Expensive'],
            ['Mouse', 'Cheap'],
            ['Keyboard', 'Expensive'],
        ],
        hints: [
            'Use CASE WHEN ... THEN ... ELSE ... END',
        ],
        solution: 'SELECT name, CASE WHEN price < 50 THEN "Cheap" ELSE "Expensive" END as category FROM products;',
        explanation: 'CASE statement acts like multiple IF/ELSE checks.',
        tags: ['CASE', 'Logic'],
        points: 25,
    },

    {
        id: 'sql-109',
        title: 'Duplicate Emails',
        difficulty: 'medium',
        category: 'GROUP BY',
        description: 'Find email addresses that appear more than once.',
        schema: [
            {
                name: 'users',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'email', type: 'TEXT' },
                ],
                data: [
                    { id: 1, email: 'a@b.com' },
                    { id: 2, email: 'c@d.com' },
                    { id: 3, email: 'a@b.com' },
                ],
            },
        ],
        expectedResult: [
            ['a@b.com'],
        ],
        hints: [
            'GROUP BY email',
            'HAVING COUNT > 1',
        ],
        solution: 'SELECT email FROM users GROUP BY email HAVING COUNT(email) > 1;',
        explanation: 'Group by email and filter for count greater than 1.',
        tags: ['GROUP BY', 'Duplicates'],
        points: 20,
    },

    {
        id: 'sql-110',
        title: 'Second Highest Salary',
        difficulty: 'medium',
        category: 'LIMIT',
        description: 'Find the second highest salary from employees table.',
        schema: [
            {
                name: 'employees',
                columns: [
                    { name: 'id', type: 'INTEGER', primaryKey: true },
                    { name: 'salary', type: 'REAL' },
                ],
                data: [
                    { id: 1, salary: 100 },
                    { id: 2, salary: 200 },
                    { id: 3, salary: 300 },
                ],
            },
        ],
        expectedResult: [
            [200],
        ],
        hints: [
            'Order by salary desc',
            'Limit 1 Offset 1',
        ],
        solution: 'SELECT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 1;',
        explanation: 'OFFSET skips the first N rows. LIMIT restricts count.',
        tags: ['LIMIT', 'OFFSET'],
        points: 35,
    },
];
