import { TheoryTopic } from '@/types/theory';

export const dbmsTheory: TheoryTopic = {
  topicId: 'dbms',
  topicName: 'DBMS',
  category: 'Core Concepts',
  description: 'Database Management Systems concepts',
  sections: [
    {
      id: 'fundamentals',
      title: 'DBMS Fundamentals',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is DBMS?', content: 'DBMS (Database Management System) is software managing databases. Provides: data storage, retrieval, manipulation, security, concurrency control. Examples: MySQL, PostgreSQL, Oracle, SQL Server. Enables efficient data management. Foundation of data-driven applications.' },
        { id: 'q2', title: 'What is a database?', content: 'Database is organized collection of data. RDBMS stores in tables (rows/columns). Relationships between tables. Persistent storage. ACID properties. Supports transactions. Centralized data management. Efficient querying.' },
        { id: 'q3', title: 'What is RDBMS?', content: 'RDBMS (Relational DBMS) uses relational model. Data in tables. Relationships via foreign keys. SQL for queries. ACID transactions. Normalized structure. Examples: MySQL, PostgreSQL, Oracle. Most common type.' },
        { id: 'q4', title: 'What is ACID?', content: 'ACID ensures reliable transactions: Atomicity (all or nothing), Consistency (valid state), Isolation (concurrent transactions), Durability (committed persists). RDBMS guarantee. Essential for data integrity. Critical for financial systems.' },
        { id: 'q5', title: 'What is a transaction?', content: 'Transaction is sequence of operations as single unit. BEGIN starts, COMMIT saves, ROLLBACK undoes. All succeed or all fail. Ensures data integrity. Handles concurrent access. Foundation of reliable systems.' },
        { id: 'q6', title: 'What is normalization?', content: 'Normalization organizes database to reduce redundancy. Normal forms: 1NF (atomic values), 2NF (no partial dependencies), 3NF (no transitive dependencies). Reduces duplication. Improves integrity. May require more JOINs.' },
        { id: 'q7', title: 'What is denormalization?', content: 'Denormalization adds redundancy intentionally. Trade consistency for performance. Reduces JOINs. Improves read performance. Use for: read-heavy workloads, reporting, analytics. Balance with normalization.' },
        { id: 'q8', title: 'What is a schema?', content: 'Schema defines database structure. Tables, columns, relationships, constraints. Blueprint of database. Separate from data. Can have multiple schemas. Defines organization. Important for design.' },
        { id: 'q9', title: 'What is a view?', content: 'View is virtual table from query. Doesn\'t store data. Simplifies queries. Security (hide columns). Abstraction layer. Can be updatable. Useful for: complex queries, access control.' },
        { id: 'q10', title: 'What is an index?', content: 'Index improves query performance. Data structure for fast lookups. Speeds up SELECT, WHERE, JOIN. Slows down INSERT/UPDATE/DELETE. Types: B-tree, hash, bitmap. Choose on frequently queried columns.' }
      ]
    },
    {
      id: 'design',
      title: 'Database Design',
      content: '',
      subsections: [
        { id: 'q11', title: 'What is ER model?', content: 'ER (Entity-Relationship) model designs databases. Entities (tables), Attributes (columns), Relationships (foreign keys). Visual representation. ER diagrams. Foundation of database design. Helps understand structure.' },
        { id: 'q12', title: 'What is primary key?', content: 'Primary key uniquely identifies rows. Must be unique and NOT NULL. One per table. Can be composite. Often auto-increment. Used for relationships. Automatically indexed. Enforces uniqueness.' },
        { id: 'q13', title: 'What is foreign key?', content: 'Foreign key references primary key. Establishes relationships. Enforces referential integrity. Can be NULL. Cascade options: CASCADE, SET NULL, RESTRICT. Defines table relationships. Prevents orphaned records.' },
        { id: 'q14', title: 'What is candidate key?', content: 'Candidate key can be primary key. Uniquely identifies rows. Multiple candidates possible. Choose one as primary. Others become unique constraints. All are valid identifiers.' },
        { id: 'q15', title: 'What is composite key?', content: 'Composite key uses multiple columns. Together form unique identifier. Individual columns not unique. Used when single column insufficient. Common in junction tables. Part of primary key.' },
        { id: 'q16', title: 'What is relationship types?', content: 'Relationship types: One-to-One (1:1), One-to-Many (1:N), Many-to-Many (M:N). 1:1: rare, can merge tables. 1:N: foreign key in many side. M:N: junction table required. Design based on business rules.' },
        { id: 'q17', title: 'What is cardinality?', content: 'Cardinality describes relationship participation. Types: One (1), Many (N), Optional (0..1), Mandatory (1..1). ER diagram notation. Defines relationship constraints. Important for design. Affects implementation.' },
        { id: 'q18', title: 'What is data integrity?', content: 'Data integrity ensures data accuracy. Types: Entity (unique rows), Referential (valid relationships), Domain (valid values), User-defined (business rules). Enforced by constraints. Critical for reliability.' },
        { id: 'q19', title: 'What is constraint?', content: 'Constraint enforces data rules. Types: PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK, DEFAULT. Defined in CREATE TABLE or ALTER TABLE. Prevents invalid data. Enforces integrity.' },
        { id: 'q20', title: 'What is database design process?', content: 'Design process: requirements analysis, conceptual design (ER model), logical design (tables), physical design (indexes, storage). Iterative process. Consider: queries, performance, scalability. Document design. Review and refine.' }
      ]
    },
    {
      id: 'queries',
      title: 'Query Processing',
      content: '',
      subsections: [
        { id: 'q21', title: 'What is query optimization?', content: 'Query optimization improves performance. Techniques: use indexes, avoid SELECT *, limit results, efficient JOINs, avoid functions in WHERE. Database optimizes automatically. EXPLAIN shows plan. Manual optimization when needed.' },
        { id: 'q22', title: 'What is query execution plan?', content: 'Execution plan shows how query executes. Generated by optimizer. Shows: indexes used, JOIN order, operations. EXPLAIN displays plan. Helps identify bottlenecks. Database-specific. Essential for optimization.' },
        { id: 'q23', title: 'What is cost-based optimization?', content: 'Cost-based optimization chooses best plan. Estimates cost of operations. Considers: indexes, table sizes, statistics. Chooses lowest cost plan. Automatic optimization. Statistics important for accuracy.' },
        { id: 'q24', title: 'What is query caching?', content: 'Query caching stores query results. Reuses results for identical queries. Improves performance. Invalidated on data changes. Memory efficient. Database-specific feature. Useful for read-heavy workloads.' },
        { id: 'q25', title: 'What is materialized view?', content: 'Materialized view stores query results. Unlike view, stores data. Refreshed periodically. Improves performance. Trade storage for speed. Use for: complex queries, reporting. Refresh strategy important.' },
        { id: 'q26', title: 'What is query hint?', content: 'Query hint suggests execution to optimizer. Database-specific syntax. Override optimizer decisions. Use carefully - may hurt performance. Last resort. Examples: USE INDEX, FORCE INDEX. Advanced optimization.' },
        { id: 'q27', title: 'What is full table scan?', content: 'Full table scan reads all rows. Occurs when: no index, index not used, small table. Can be slow for large tables. Avoid with indexes. Sometimes necessary. Check EXPLAIN plan.' },
        { id: 'q28', title: 'What is index scan vs table scan?', content: 'Index scan uses index to find rows. Faster for selective queries. Table scan reads all rows. Slower but sometimes necessary. Index scan preferred. Choose indexes wisely.' },
        { id: 'q29', title: 'What is covering index?', content: 'Covering index contains all needed columns. Query uses only index. No table access needed. Very fast. Ideal performance. Design indexes for coverage. Reduces I/O.' },
        { id: 'q30', title: 'What is query performance tuning?', content: 'Performance tuning improves query speed. Analyze slow queries. Use EXPLAIN. Add indexes. Optimize JOINs. Limit results. Use appropriate data types. Profile and measure. Iterative process.' }
      ]
    },
    {
      id: 'concurrency',
      title: 'Concurrency Control',
      content: '',
      subsections: [
        { id: 'q31', title: 'What is concurrency control?', content: 'Concurrency control manages simultaneous transactions. Prevents conflicts. Ensures consistency. Methods: locking, timestamping, optimistic. Handles: lost updates, dirty reads, inconsistent analysis. Critical for multi-user systems.' },
        { id: 'q32', title: 'What is locking?', content: 'Locking prevents concurrent access conflicts. Types: shared (read), exclusive (write). Granularity: row, page, table. Two-phase locking protocol. Prevents conflicts. Can cause deadlocks.' },
        { id: 'q33', title: 'What is deadlock?', content: 'Deadlock: transactions waiting for each other. Circular wait condition. Detection and resolution. Prevention: lock ordering, timeouts. Database detects and resolves. Can abort transactions. Important to prevent.' },
        { id: 'q34', title: 'What is isolation level?', content: 'Isolation level controls transaction isolation. Levels: READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE. Trade-off: consistency vs performance. Higher level: more isolation, less concurrency. Choose appropriately.' },
        { id: 'q35', title: 'What is dirty read?', content: 'Dirty read reads uncommitted data. Problem: data may be rolled back. Prevented by: READ COMMITTED or higher. Isolation issue. Can cause incorrect results. Higher isolation prevents.' },
        { id: 'q36', title: 'What is phantom read?', content: 'Phantom read: new rows appear during transaction. Occurs in: REPEATABLE READ. Prevented by: SERIALIZABLE. Isolation issue. Can affect query results. Higher isolation prevents.' },
        { id: 'q37', title: 'What is lost update?', content: 'Lost update: concurrent updates overwrite each other. Problem: last write wins, loses other changes. Prevented by: locking, optimistic concurrency. Critical issue. Must handle properly.' },
        { id: 'q38', title: 'What is optimistic locking?', content: 'Optimistic locking assumes few conflicts. Check version/timestamp before update. Fail if changed. Retry if needed. No locks during read. Good for: low contention. Requires conflict handling.' },
        { id: 'q39', title: 'What is pessimistic locking?', content: 'Pessimistic locking assumes conflicts. Lock during read. Prevents concurrent modifications. More overhead. Guarantees consistency. Use for: high contention. Database default often.' },
        { id: 'q40', title: 'What is MVCC?', content: 'MVCC (Multi-Version Concurrency Control) uses versioning. Each transaction sees snapshot. No blocking reads. Writes create new versions. Cleanup old versions. Used by: PostgreSQL, Oracle. Enables high concurrency.' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced DBMS',
      content: '',
      subsections: [
        { id: 'q41', title: 'What is stored procedure?', content: 'Stored procedure is precompiled SQL code. Stored in database. Can accept parameters. Can return results. Improves performance. Centralizes logic. Database-specific. Security benefits.' },
        { id: 'q42', title: 'What is trigger?', content: 'Trigger automatically executes on events. Events: INSERT, UPDATE, DELETE. Timing: BEFORE, AFTER. Can enforce rules, audit, cascade. Use carefully - can cause side effects. Database-specific syntax.' },
        { id: 'q43', title: 'What is database backup?', content: 'Backup creates copy of database. Types: full, incremental, differential. Schedule regular backups. Test restore procedures. Store securely. Critical for disaster recovery. RTO and RPO important.' },
        { id: 'q44', title: 'What is replication?', content: 'Replication copies data to multiple servers. Types: master-slave, master-master. Benefits: availability, read scaling, backups. Challenges: consistency, lag. Use for: high availability, geographic distribution.' },
        { id: 'q45', title: 'What is sharding?', content: 'Sharding partitions database across servers. Horizontal partitioning. By key (user_id, region). Benefits: scalability, performance. Challenges: cross-shard queries, rebalancing. Critical for large databases.' },
        { id: 'q46', title: 'What is database security?', content: 'Database security protects data. Measures: authentication, authorization, encryption, auditing, access control. Prevent: SQL injection, unauthorized access, data breaches. Critical for sensitive data. Multiple layers.' },
        { id: 'q47', title: 'What is SQL injection?', content: 'SQL injection is security vulnerability. Malicious SQL in user input. Can: read data, modify data, delete data. Prevention: parameterized queries, input validation, least privilege. Critical security issue.' },
        { id: 'q48', title: 'What is database monitoring?', content: 'Monitoring tracks database health. Metrics: performance, connections, queries, errors, resources. Tools: database-specific, third-party. Alerts on issues. Essential for production. Proactive management.' },
        { id: 'q49', title: 'What is database tuning?', content: 'Tuning optimizes database performance. Areas: queries, indexes, configuration, hardware. Analyze bottlenecks. Measure improvements. Iterative process. Balance: performance vs resources. Ongoing activity.' },
        { id: 'q50', title: 'What are DBMS best practices?', content: 'Best practices: normalize appropriately, use indexes, parameterized queries, transactions, backups, security, monitoring, documentation, testing, performance tuning, proper data types, constraints, connection pooling, regular maintenance, keep updated.' }
      ]
    }
  ]
};
