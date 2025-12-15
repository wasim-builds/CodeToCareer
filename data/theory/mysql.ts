import { TheoryTopic } from '@/types/theory';

export const mysqlTheory: TheoryTopic = {
  topicId: 'mysql',
  topicName: 'MySQL',
  category: 'Full Stack',
  description: 'MySQL relational database fundamentals, SQL queries, optimization, and operations.',
  sections: [
    {
      id: 'basics',
      title: 'Basics and Modeling',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is MySQL?', content: 'An open-source relational database management system using SQL for querying and managing data.' },
        { id: 'q2', title: 'Schemas and tables?', content: 'Databases (schemas) contain tables. Tables have rows/columns with data types, constraints, indexes.' },
        { id: 'q3', title: 'Data types?', content: 'Numeric (INT, BIGINT, DECIMAL), strings (VARCHAR, TEXT), date/time (DATE, DATETIME, TIMESTAMP), JSON, spatial. Choose types for accuracy and size.' },
        { id: 'q4', title: 'Primary and foreign keys?', content: 'Primary key uniquely identifies rows; often AUTO_INCREMENT. Foreign key enforces referential integrity between tables.' },
        { id: 'q5', title: 'Normalization?', content: 'Organize data to reduce redundancy: 1NF (atomic), 2NF (no partial dependency), 3NF (no transitive dependency). Balance with performance.' },
        { id: 'q6', title: 'Indexes?', content: 'B-tree indexes speed lookups and sorting. Unique indexes enforce uniqueness. Over-indexing slows writes. Use EXPLAIN to verify usage.' },
        { id: 'q7', title: 'Constraints?', content: 'NOT NULL, UNIQUE, CHECK (8.0+), DEFAULT, FOREIGN KEY. Enforce data integrity at DB layer.' },
        { id: 'q8', title: 'Character sets and collation?', content: 'Use utf8mb4 for full Unicode. Collation defines sorting/comparison rules. Set at DB/table/column levels consistently.' },
        { id: 'q9', title: 'Engine choices?', content: 'InnoDB is default (transactions, row-level locking, FK). MyISAM is legacy (no FK, table locks). Prefer InnoDB for most workloads.' },
        { id: 'q10', title: 'Auto-increment considerations?', content: 'AUTO_INCREMENT for surrogate keys. Beware gaps from rollbacks/deletes. Use BIGINT for very large tables if needed.' }
      ]
    },
    {
      id: 'queries',
      title: 'SQL Queries',
      content: '',
      subsections: [
        { id: 'q11', title: 'SELECT basics?', content: 'SELECT columns FROM table WHERE conditions ORDER BY ... LIMIT ...; Use DISTINCT to remove duplicates.' },
        { id: 'q12', title: 'Joins?', content: 'INNER joins matching rows, LEFT joins keep left even if no match, RIGHT rarely used, CROSS for Cartesian. Use ON for join conditions.' },
        { id: 'q13', title: 'Aggregations?', content: 'COUNT, SUM, AVG, MIN, MAX with GROUP BY. HAVING filters groups. Use appropriate indexes for grouping/sorting.' },
        { id: 'q14', title: 'Subqueries vs joins?', content: 'Subqueries nest queries; joins often faster/clearer. Use EXISTS for existence checks; IN for lists (beware large lists).' },
        { id: 'q15', title: 'Window functions?', content: 'MySQL 8 supports window functions: ROW_NUMBER, RANK, LAG/LEAD, SUM() OVER(PARTITION BY ...). Great for analytics without grouping.' },
        { id: 'q16', title: 'Views?', content: 'Virtual tables based on queries. Simplify complex queries and security. Beware performance; indexes on underlying tables only.' },
        { id: 'q17', title: 'Stored routines?', content: 'Procedures/functions in SQL for logic near data. Use parameterized routines; limit business logic to keep maintainability.' },
        { id: 'q18', title: 'Prepared statements?', content: 'Parametrized queries prevent SQL injection and allow plan reuse. Use placeholders (?) and parameter binding.' },
        { id: 'q19', title: 'Transactions?', content: 'BEGIN/COMMIT/ROLLBACK to group statements atomically. Requires InnoDB. Use proper isolation level for consistency vs concurrency.' },
        { id: 'q20', title: 'Isolation levels?', content: 'Read Uncommitted, Read Committed, Repeatable Read (default), Serializable. Choose based on anomaly tolerance and performance.' }
      ]
    },
    {
      id: 'optimization',
      title: 'Performance and Indexing',
      content: '',
      subsections: [
        { id: 'q21', title: 'EXPLAIN usage?', content: 'EXPLAIN shows query plan: indexes used, rows examined, possible_keys, type (range/ref/eq_ref). Optimize based on plan insights.' },
        { id: 'q22', title: 'Composite indexes?', content: 'Order matters (leftmost prefix). Index columns used in WHERE/ORDER BY/JOIN. Avoid redundant indexes overlapping heavily.' },
        { id: 'q23', title: 'Covering indexes?', content: 'Indexes that contain all selected columns avoid table lookups (Extra: Using index). Improves read performance.' },
        { id: 'q24', title: 'LIKE and patterns?', content: 'Leading wildcard disables index ("%x"). Use full-text indexes for text search or reverse index techniques. Case sensitivity depends on collation.' },
        { id: 'q25', title: 'Pagination performance?', content: 'LIMIT offset, count can be slow for large offsets. Use keyset pagination (WHERE id > last_id ORDER BY id LIMIT n).' },
        { id: 'q26', title: 'Query cache?', content: 'Deprecated/removed in MySQL 8. Use app-level caching/Redis, or result caching in ORM layer. Rely on buffer pool for data caching.' },
        { id: 'q27', title: 'Buffer pool?', content: 'InnoDB buffer pool caches data/index pages. Size to ~50-75% of RAM (server dependent). Monitor hit ratio and dirty pages.' },
        { id: 'q28', title: 'Locking?', content: 'InnoDB uses row-level locks. Avoid long transactions. Proper indexes reduce lock contention by narrowing scanned rows.' },
        { id: 'q29', title: 'Foreign key performance?', content: 'FKs add overhead on writes but ensure integrity. Ensure indexed FK columns to avoid full scans on delete/update checks.' },
        { id: 'q30', title: 'Slow query log?', content: 'Enable slow_query_log to capture slow statements. Analyze with pt-query-digest. Optimize queries and indexes accordingly.' }
      ]
    },
    {
      id: 'operations',
      title: 'Operations and Maintenance',
      content: '',
      subsections: [
        { id: 'q31', title: 'Backups?', content: 'Logical backups with mysqldump/mydumper for portability. Physical backups with Percona XtraBackup for speed/consistency. Test restores.' },
        { id: 'q32', title: 'Replication?', content: 'Primary-replica via binary logs (row-based common). Async by default; semi-sync for durability. Use GTID for easier failover.' },
        { id: 'q33', title: 'High availability?', content: 'Use replicas, orchestrator for failover, ProxySQL/HAProxy for routing. Consider InnoDB cluster or Galera for multi-primary.' },
        { id: 'q34', title: 'Migrations?', content: 'Use migration tools (Liquibase/Flyway) or online schema change (gh-ost/pt-osc) to avoid downtime on large tables.' },
        { id: 'q35', title: 'Security?', content: 'Use strong passwords, least privilege, TLS for connections, restrict network access, no anonymous users, keep MySQL updated.' },
        { id: 'q36', title: 'User management?', content: 'CREATE USER, GRANT with least privilege. Avoid using root. Rotate credentials. Use roles (MySQL 8) to group privileges.' },
        { id: 'q37', title: 'Monitoring?', content: 'Track CPU, disk, connections, replication lag, buffer pool, slow queries. Use PMM/Grafana or cloud monitors.' },
        { id: 'q38', title: 'Data import/export?', content: 'LOAD DATA INFILE for bulk load, SELECT INTO OUTFILE for export. Ensure secure-file-priv path and permissions.' },
        { id: 'q39', title: 'Character set upgrades?', content: 'Migrate to utf8mb4; ensure collations consistent. Check index length limits (InnoDB supports large prefixes with innodb_large_prefix).' },
        { id: 'q40', title: 'Time zones and dates?', content: 'Store in UTC (TIMESTAMP auto-converts, DATETIME does not). Load time zone tables for conversions if needed.' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced and Troubleshooting',
      content: '',
      subsections: [
        { id: 'q41', title: 'JSON support?', content: 'MySQL 8 JSON type with functions (JSON_EXTRACT, JSON_SET). Use indexes via generated columns for performance.' },
        { id: 'q42', title: 'Generated columns?', content: 'Virtual or stored columns computed from expressions. Can be indexed. Useful for partial JSON indexing or derived values.' },
        { id: 'q43', title: 'Partitioning?', content: 'Table partitioning by RANGE/LIST/HASH/KEY. Helps maintenance and some queries. Not a replacement for sharding.' },
        { id: 'q44', title: 'Deadlocks?', content: 'Detect via SHOW ENGINE INNODB STATUS. Avoid long transactions, access tables in consistent order, keep transactions short, index properly.' },
        { id: 'q45', title: 'Isolation anomalies?', content: 'Repeatable Read uses MVCC and gap locks; beware phantom rows. Use appropriate isolation or SELECT ... LOCK IN SHARE/UPDATE for control.' },
        { id: 'q46', title: 'Temp tables and disk?', content: 'Large sorts/aggregations may spill to disk. Optimize queries/indexes; adjust tmp_table_size/max_heap_table_size.' },
        { id: 'q47', title: 'Optimizer hints?', content: 'USE INDEX / FORCE INDEX, optimizer hints (/*+ */) as last resort. Better to fix schema/indexes than rely on hints.' },
        { id: 'q48', title: 'Sharding?', content: 'Scale out by splitting data across servers. Application-managed routing. Keep schemas consistent; handle cross-shard queries carefully.' },
        { id: 'q49', title: 'Compliance and audits?', content: 'Enable general/slow logs cautiously, use audit plugins for compliance. Secure logs and PII. Follow retention policies.' },
        { id: 'q50', title: 'Common pitfalls?', content: 'Using utf8 (3-byte) instead of utf8mb4, missing indexes, OR without parentheses, SELECT *, long transactions, ignoring backups/tests.' }
      ]
    }
  ]
};
