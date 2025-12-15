import { TheoryTopic } from '@/types/theory';

export const sqlTheory: TheoryTopic = {
  topicId: 'sql',
  topicName: 'SQL',
  category: 'Languages',
  description: 'Structured Query Language and database operations',
  sections: [
    {
      id: 'basics',
      title: 'SQL Basics',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is SQL?', content: 'SQL (Structured Query Language) is standard language for managing relational databases. Used for: querying data, inserting/updating/deleting records, creating/modifying database structures, managing access. SQL is declarative - specify what you want, not how to get it. Works with RDBMS like MySQL, PostgreSQL, Oracle.' },
        { id: 'q2', title: 'What is a database?', content: 'Database is organized collection of data. RDBMS stores data in tables with rows and columns. Tables have relationships (foreign keys). ACID properties ensure reliability. Supports transactions, constraints, indexes. Examples: MySQL, PostgreSQL, SQL Server, Oracle, SQLite.' },
        { id: 'q3', title: 'What is a table?', content: 'Table is collection of related data organized in rows (records) and columns (fields). Each row represents one record. Each column has data type. Tables have primary keys (unique identifiers). Tables can relate via foreign keys. Schema defines table structure.' },
        { id: 'q4', title: 'What is SELECT statement?', content: 'SELECT retrieves data from tables. Syntax: SELECT columns FROM table WHERE conditions. Can select specific columns or * for all. WHERE filters rows. ORDER BY sorts results. LIMIT restricts rows. Basic query operation. Foundation of SQL queries.' },
        { id: 'q5', title: 'What is WHERE clause?', content: 'WHERE filters rows based on conditions. Operators: =, !=, <, >, <=, >=, BETWEEN, IN, LIKE, IS NULL. Combine with AND, OR, NOT. Applied before grouping/aggregation. Enables data filtering. Essential for querying specific data.' },
        { id: 'q6', title: 'What are SQL data types?', content: 'Common types: INT/INTEGER (whole numbers), VARCHAR/TEXT (strings), DATE/DATETIME (dates), DECIMAL/FLOAT (decimals), BOOLEAN (true/false), BLOB (binary). Varies by database. Choose appropriate types for data. Affects storage and performance.' },
        { id: 'q7', title: 'What is INSERT statement?', content: 'INSERT adds new rows to table. Syntax: INSERT INTO table (columns) VALUES (values). Can insert single or multiple rows. Must match column count and types. Can use SELECT to insert from another table. Returns number of affected rows.' },
        { id: 'q8', title: 'What is UPDATE statement?', content: 'UPDATE modifies existing rows. Syntax: UPDATE table SET column = value WHERE condition. WHERE clause is critical - without it updates all rows. Can update multiple columns. Returns number of affected rows. Use transactions for safety.' },
        { id: 'q9', title: 'What is DELETE statement?', content: 'DELETE removes rows from table. Syntax: DELETE FROM table WHERE condition. WHERE clause is critical - without it deletes all rows. Returns number of affected rows. Use TRUNCATE for deleting all rows faster. Use transactions for safety.' },
        { id: 'q10', title: 'What is CREATE TABLE?', content: 'CREATE TABLE defines new table structure. Syntax: CREATE TABLE name (column type constraints, ...). Specify columns, data types, constraints (PRIMARY KEY, FOREIGN KEY, NOT NULL, UNIQUE). Defines schema. Use ALTER TABLE to modify. Use DROP TABLE to remove.' }
      ]
    },
    {
      id: 'joins',
      title: 'JOINs and Relationships',
      content: '',
      subsections: [
        { id: 'q11', title: 'What is a JOIN?', content: 'JOIN combines rows from multiple tables based on related columns. Enables querying related data. Types: INNER (matching rows), LEFT (all left + matching right), RIGHT (all right + matching left), FULL OUTER (all from both). Essential for relational databases.' },
        { id: 'q12', title: 'What is INNER JOIN?', content: 'INNER JOIN returns rows with matching values in both tables. Syntax: SELECT * FROM table1 INNER JOIN table2 ON table1.id = table2.id. Only matching rows included. Most common JOIN type. Use when you need data from both tables.' },
        { id: 'q13', title: 'What is LEFT JOIN?', content: 'LEFT JOIN returns all rows from left table plus matching rows from right. Non-matching right rows are NULL. Syntax: SELECT * FROM table1 LEFT JOIN table2 ON condition. Preserves all left table data. Use when you need all left records regardless of match.' },
        { id: 'q14', title: 'What is RIGHT JOIN?', content: 'RIGHT JOIN returns all rows from right table plus matching rows from left. Non-matching left rows are NULL. Less common than LEFT JOIN. Can be replaced with LEFT JOIN by swapping tables. Use when you need all right records.' },
        { id: 'q15', title: 'What is FULL OUTER JOIN?', content: 'FULL OUTER JOIN returns all rows from both tables. Non-matching rows have NULLs. Syntax varies by database (MySQL doesn\'t support, use UNION). Combines LEFT and RIGHT JOIN results. Use when you need all data from both tables.' },
        { id: 'q16', title: 'What is a self JOIN?', content: 'Self JOIN joins table to itself. Uses table aliases to distinguish. Useful for hierarchical data, comparing rows in same table. Example: employee-manager relationships. Syntax: SELECT * FROM table t1 JOIN table t2 ON t1.id = t2.manager_id.' },
        { id: 'q17', title: 'What is CROSS JOIN?', content: 'CROSS JOIN returns Cartesian product - all combinations of rows. No ON condition needed. Result size = rows1 × rows2. Rarely used intentionally. Can be expensive. Use for generating combinations or testing.' },
        { id: 'q18', title: 'What is a primary key?', content: 'Primary key uniquely identifies each row. Must be unique and NOT NULL. One per table. Can be single column or composite (multiple columns). Often auto-incrementing integer. Used for relationships and indexing. Enforces data integrity.' },
        { id: 'q19', title: 'What is a foreign key?', content: 'Foreign key references primary key in another table. Establishes relationship. Enforces referential integrity. Can be NULL (optional relationship). Prevents orphaned records. Cascade options: CASCADE, SET NULL, RESTRICT. Defines table relationships.' },
        { id: 'q20', title: 'What is normalization?', content: 'Normalization organizes database to reduce redundancy. Normal forms: 1NF (atomic values), 2NF (no partial dependencies), 3NF (no transitive dependencies). Reduces data duplication. Improves data integrity. May require more JOINs. Balance with denormalization for performance.' }
      ]
    },
    {
      id: 'aggregation',
      title: 'Aggregation and Grouping',
      content: '',
      subsections: [
        { id: 'q21', title: 'What are aggregate functions?', content: 'Aggregate functions perform calculations on groups. Common: COUNT (count rows), SUM (sum values), AVG (average), MIN (minimum), MAX (maximum). Used with GROUP BY. Return single value per group. NULL values are ignored (except COUNT(*)).' },
        { id: 'q22', title: 'What is GROUP BY?', content: 'GROUP BY groups rows with same values. Used with aggregate functions. Syntax: SELECT column, COUNT(*) FROM table GROUP BY column. Groups data for aggregation. Can group by multiple columns. HAVING filters groups (WHERE filters rows).' },
        { id: 'q23', title: 'What is HAVING clause?', content: 'HAVING filters groups after GROUP BY. Similar to WHERE but for groups. Can use aggregate functions in conditions. WHERE filters rows, HAVING filters groups. Syntax: SELECT ... GROUP BY ... HAVING condition. Use for group-level filtering.' },
        { id: 'q24', title: 'What is ORDER BY?', content: 'ORDER BY sorts result set. Syntax: ORDER BY column ASC/DESC. Can sort by multiple columns. ASC is default (ascending). Applied after all other operations. Use for presenting ordered data. Can use column names or positions.' },
        { id: 'q25', title: 'What is DISTINCT?', content: 'DISTINCT removes duplicate rows from result. Syntax: SELECT DISTINCT column FROM table. Returns unique values. Can use with multiple columns (unique combinations). NULL is considered distinct. Use for getting unique values.' },
        { id: 'q26', title: 'What is COUNT()?', content: 'COUNT() counts rows. COUNT(*) counts all rows including NULLs. COUNT(column) counts non-NULL values. COUNT(DISTINCT column) counts unique non-NULL values. Returns integer. Common aggregate function. Use for counting records.' },
        { id: 'q27', title: 'What is SUM()?', content: 'SUM() adds up numeric values. Ignores NULL values. Returns NULL if all values are NULL. Works with numeric columns. Use with GROUP BY for group sums. Common for financial calculations.' },
        { id: 'q28', title: 'What is AVG()?', content: 'AVG() calculates average of numeric values. Ignores NULL values. Returns NULL if all values are NULL. Works with numeric columns. Use with GROUP BY for group averages. Common for statistical calculations.' },
        { id: 'q29', title: 'What is MIN() and MAX()?', content: 'MIN() returns minimum value, MAX() returns maximum value. Works with numeric, date, and string types. Ignores NULL values. Returns NULL if all values are NULL. Use with GROUP BY for group min/max. Common for finding extremes.' },
        { id: 'q30', title: 'What is subquery?', content: 'Subquery is query nested inside another query. Can be in SELECT, FROM, WHERE, HAVING. Types: scalar (returns single value), row (returns single row), table (returns table). Correlated subquery references outer query. Can impact performance - optimize carefully.' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced SQL',
      content: '',
      subsections: [
        { id: 'q31', title: 'What is a view?', content: 'View is virtual table based on query result. Doesn\'t store data, stores query definition. Syntax: CREATE VIEW name AS SELECT ... Use for: simplifying queries, security (hide columns), abstraction. Can query views like tables. Updatable views can modify underlying data.' },
        { id: 'q32', title: 'What is an index?', content: 'Index improves query performance by creating data structure for fast lookups. Syntax: CREATE INDEX name ON table (column). Speeds up SELECT, WHERE, JOIN. Slows down INSERT/UPDATE/DELETE. Types: B-tree (default), hash, full-text. Use on frequently queried columns.' },
        { id: 'q33', title: 'What is a stored procedure?', content: 'Stored procedure is precompiled SQL code stored in database. Syntax: CREATE PROCEDURE name AS ... Can accept parameters. Can return results. Improves performance (precompiled). Centralizes business logic. Security benefits. Database-specific syntax.' },
        { id: 'q34', title: 'What is a trigger?', content: 'Trigger automatically executes SQL code on events (INSERT, UPDATE, DELETE). Syntax: CREATE TRIGGER name BEFORE/AFTER event ON table. Can execute before or after event. Use for: auditing, validation, automatic calculations. Can cause cascading effects. Use carefully.' },
        { id: 'q35', title: 'What is a transaction?', content: 'Transaction is sequence of operations executed as single unit. ACID properties: Atomicity (all or nothing), Consistency (valid state), Isolation (concurrent transactions), Durability (committed changes persist). BEGIN, COMMIT, ROLLBACK. Ensures data integrity.' },
        { id: 'q36', title: 'What is ACID?', content: 'ACID ensures reliable transactions. Atomicity: all operations succeed or all fail. Consistency: database remains valid. Isolation: concurrent transactions don\'t interfere. Durability: committed changes persist. RDBMS guarantee ACID. Essential for data integrity.' },
        { id: 'q37', title: 'What is a constraint?', content: 'Constraint enforces data rules. Types: PRIMARY KEY (unique identifier), FOREIGN KEY (relationship), UNIQUE (unique values), NOT NULL (required), CHECK (condition), DEFAULT (default value). Enforces data integrity. Prevents invalid data. Defined in CREATE TABLE or ALTER TABLE.' },
        { id: 'q38', title: 'What is UNION?', content: 'UNION combines results from multiple SELECT statements. Removes duplicates. UNION ALL keeps duplicates (faster). All SELECTs must have same number of columns and compatible types. Use for combining similar data from different sources. Alternative to multiple queries.' },
        { id: 'q39', title: 'What is CASE statement?', content: 'CASE provides conditional logic in SQL. Syntax: CASE WHEN condition THEN value ELSE value END. Can be used in SELECT, WHERE, ORDER BY. Similar to if-else. Two forms: simple (CASE value WHEN) and searched (CASE WHEN condition). Useful for data transformation.' },
        { id: 'q40', title: 'What is window functions?', content: 'Window functions perform calculations across rows without grouping. Syntax: function() OVER (PARTITION BY ... ORDER BY ...). Functions: ROW_NUMBER(), RANK(), DENSE_RANK(), LAG(), LEAD(), SUM() OVER(). Don\'t collapse rows like GROUP BY. Powerful for analytics.' }
      ]
    },
    {
      id: 'optimization',
      title: 'SQL Optimization',
      content: '',
      subsections: [
        { id: 'q41', title: 'What is query optimization?', content: 'Query optimization improves query performance. Techniques: use indexes, avoid SELECT *, limit results, use appropriate JOINs, avoid functions in WHERE, use EXPLAIN to analyze, normalize/denormalize appropriately, use connection pooling, optimize subqueries. Measure before and after.' },
        { id: 'q42', title: 'What is EXPLAIN?', content: 'EXPLAIN shows query execution plan. Syntax: EXPLAIN SELECT ... Shows how database executes query. Reveals: indexes used, JOIN order, table scans. Helps identify performance issues. Database-specific output. Use to optimize slow queries.' },
        { id: 'q43', title: 'What is query performance?', content: 'Performance factors: indexes, table size, JOIN complexity, WHERE conditions, data types, hardware. Slow queries: missing indexes, full table scans, complex subqueries, functions in WHERE. Fast queries: indexed columns, simple WHERE, appropriate JOINs. Profile and optimize.' },
        { id: 'q44', title: 'What is connection pooling?', content: 'Connection pooling reuses database connections. Reduces connection overhead. Improves performance. Manages connection lifecycle. Prevents connection exhaustion. Common in application servers. Configure pool size appropriately. Balance between connections and resources.' },
        { id: 'q45', title: 'What is database normalization vs denormalization?', content: 'Normalization reduces redundancy, improves integrity, may require more JOINs. Denormalization adds redundancy, reduces JOINs, improves read performance. Balance based on use case. OLTP favors normalization, OLAP may favor denormalization. Consider read vs write patterns.' },
        { id: 'q46', title: 'What is a database index strategy?', content: 'Index strategy: index frequently queried columns, index foreign keys, composite indexes for multi-column queries, avoid over-indexing (slows writes), monitor index usage, rebuild/optimize indexes periodically. Primary keys are automatically indexed. Unique constraints create indexes.' },
        { id: 'q47', title: 'What is SQL injection?', content: 'SQL injection is security vulnerability from unsanitized user input. Attacker injects malicious SQL. Prevention: use parameterized queries/prepared statements, validate input, escape special characters, use ORM, least privilege database users. Critical security concern.' },
        { id: 'q48', title: 'What are prepared statements?', content: 'Prepared statements precompile SQL with placeholders. Syntax: PREPARE stmt FROM "SELECT * FROM users WHERE id = ?". Execute with parameters. Prevents SQL injection. Improves performance (reusable). Use for repeated queries. Best practice for dynamic queries.' },
        { id: 'q49', title: 'What is database backup?', content: 'Backup creates copy of database for recovery. Types: full (entire database), incremental (changes since last backup), differential (changes since full backup). Schedule regular backups. Test restore procedures. Store backups securely. Critical for disaster recovery.' },
        { id: 'q50', title: 'What are SQL best practices?', content: 'Best practices: use parameterized queries, index appropriately, avoid SELECT *, use transactions, normalize properly, use meaningful names, document complex queries, handle NULLs properly, use appropriate data types, optimize queries, secure database access, regular backups, monitor performance.' }
      ]
    }
  ]
};
