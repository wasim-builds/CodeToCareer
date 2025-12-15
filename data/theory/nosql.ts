import { TheoryTopic } from '@/types/theory';

export const nosqlTheory: TheoryTopic = {
  topicId: 'nosql',
  topicName: 'NoSQL',
  category: 'Languages',
  description: 'NoSQL databases including MongoDB, Cassandra, and Redis',
  sections: [
    {
      id: 'basics',
      title: 'NoSQL Basics',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is NoSQL?', content: 'NoSQL (Not Only SQL) is non-relational databases. Types: document, key-value, column-family, graph. Flexible schema. Horizontal scaling. High performance. Use for: big data, real-time, flexible data.' },
        { id: 'q2', title: 'What is NoSQL vs SQL?', content: 'NoSQL: flexible schema, horizontal scale, simple queries, eventual consistency, various models. SQL: fixed schema, vertical scale, complex queries, ACID, relational. Choose based on: data structure, scale, consistency needs.' },
        { id: 'q3', title: 'What are NoSQL types?', content: 'NoSQL types: Document (MongoDB - JSON-like), Key-Value (Redis - simple pairs), Column-family (Cassandra - wide columns), Graph (Neo4j - relationships). Different models for different needs. Choose based on use case.' },
        { id: 'q4', title: 'What is document database?', content: 'Document database stores documents (JSON-like). Examples: MongoDB, CouchDB. Flexible schema. Nested data. Good for: content management, catalogs, user profiles. Natural data representation.' },
        { id: 'q5', title: 'What is key-value database?', content: 'Key-value database stores simple pairs. Examples: Redis, DynamoDB, Riak. Fast lookups. Simple model. Use for: caching, sessions, counters, queues. High performance.' },
        { id: 'q6', title: 'What is column-family database?', content: 'Column-family database stores columns together. Examples: Cassandra, HBase. Wide tables. Good for: time-series, analytics, large datasets. Efficient for columnar access.' },
        { id: 'q7', title: 'What is graph database?', content: 'Graph database stores nodes and edges. Examples: Neo4j, Amazon Neptune. Relationships as first-class. Use for: social networks, recommendations, fraud detection. Relationship-focused.' },
        { id: 'q8', title: 'What is CAP theorem?', content: 'CAP theorem: can guarantee only two of three. Consistency (all see same data), Availability (every request gets response), Partition tolerance (works despite network failures). NoSQL often chooses AP. Trade-off decision.' },
        { id: 'q9', title: 'What is BASE?', content: 'BASE: Basically Available, Soft state, Eventual consistency. NoSQL philosophy. Trades consistency for availability. Eventually consistent: data converges. Acceptable for many use cases. Enables scale.' },
        { id: 'q10', title: 'What is schema flexibility?', content: 'Schema flexibility: no fixed schema. Documents can vary. Add fields without migration. Rapid development. Trade-off: less structure. Choose based on: data variability, development speed.' }
      ]
    },
    {
      id: 'mongodb',
      title: 'MongoDB',
      content: '',
      subsections: [
        { id: 'q11', title: 'What is MongoDB?', content: 'MongoDB is document database. Stores BSON documents. Flexible schema. Rich queries. Indexing. Aggregation. Popular NoSQL. Good for: content, catalogs, real-time analytics.' },
        { id: 'q12', title: 'What is MongoDB document?', content: 'MongoDB document is BSON object. Similar to JSON. Can nest. Flexible structure. Stored in collections. No fixed schema. Natural data representation.' },
        { id: 'q13', title: 'What is MongoDB collection?', content: 'MongoDB collection groups documents. Similar to table. No enforced schema. Documents can vary. Organized by purpose. Can have indexes.' },
        { id: 'q14', title: 'What is MongoDB query?', content: 'MongoDB query finds documents. Syntax: db.collection.find({filter}). Rich query language. Supports: filters, projections, sorting, limits. Powerful queries. Flexible filtering.' },
        { id: 'q15', title: 'What is MongoDB aggregation?', content: 'MongoDB aggregation processes documents. Pipeline stages: $match, $group, $project, $sort. Complex transformations. Similar to SQL GROUP BY. Powerful data processing.' },
        { id: 'q16', title: 'What is MongoDB indexing?', content: 'MongoDB indexing improves queries. Types: single field, compound, text, geospatial. Speeds up queries. Slows down writes. Choose indexes wisely. Essential for performance.' },
        { id: 'q17', title: 'What is MongoDB replication?', content: 'MongoDB replication creates copies. Replica set: primary and secondaries. High availability. Automatic failover. Read scaling. Data redundancy. Production requirement.' },
        { id: 'q18', title: 'What is MongoDB sharding?', content: 'MongoDB sharding partitions data. Horizontal scaling. Shard key determines distribution. Enables massive scale. Complex to manage. Use when single server insufficient.' },
        { id: 'q19', title: 'What is MongoDB transactions?', content: 'MongoDB transactions ensure ACID. Multi-document transactions. Requires replica set. Ensures consistency. Use for: financial operations, critical updates. ACID guarantees.' },
        { id: 'q20', title: 'What is Mongoose?', content: 'Mongoose is MongoDB ODM for Node.js. Provides schema, validation, middleware. Models represent collections. Simplifies MongoDB. Type safety. Popular library.' }
      ]
    },
    {
      id: 'redis',
      title: 'Redis',
      content: '',
      subsections: [
        { id: 'q21', title: 'What is Redis?', content: 'Redis is in-memory key-value store. Data structures: strings, lists, sets, hashes, sorted sets. Very fast. Use for: caching, sessions, queues, real-time. High performance.' },
        { id: 'q22', title: 'What are Redis data types?', content: 'Redis data types: String (simple values), List (ordered), Set (unique), Hash (objects), Sorted Set (ordered with scores), Bitmaps, HyperLogLog, Streams. Rich data structures. Powerful operations.' },
        { id: 'q23', title: 'What is Redis persistence?', content: 'Redis persistence: RDB (snapshots), AOF (append-only file), both, none. RDB: periodic snapshots. AOF: logs every write. Trade-off: performance vs durability. Configure based on needs.' },
        { id: 'q24', title: 'What is Redis replication?', content: 'Redis replication creates copies. Master-slave. Async replication. Read scaling. High availability. Can promote slave. Replication lag possible.' },
        { id: 'q25', title: 'What is Redis cluster?', content: 'Redis cluster shards data. Automatic sharding. High availability. No single point of failure. Horizontal scaling. Complex setup. Production scaling.' },
        { id: 'q26', title: 'What is Redis pub/sub?', content: 'Redis pub/sub enables messaging. Publishers send messages. Subscribers receive. Channels for topics. Real-time messaging. Event-driven systems. Decoupled communication.' },
        { id: 'q27', title: 'What is Redis caching?', content: 'Redis caching stores frequently accessed data. Reduces database load. Improves response time. TTL for expiration. Invalidate on updates. Common use case. Performance optimization.' },
        { id: 'q28', title: 'What is Redis transactions?', content: 'Redis transactions group commands. MULTI, EXEC, DISCARD. Atomic execution. No rollback. Watch for optimistic locking. Simple transactions. Not ACID.' },
        { id: 'q29', title: 'What is Redis Lua scripting?', content: 'Redis Lua scripting executes server-side. Atomic operations. Complex logic. EVAL command. Reduce round trips. Performance optimization. Advanced feature.' },
        { id: 'q30', title: 'What is Redis use cases?', content: 'Use cases: caching, session storage, real-time analytics, leaderboards, queues, pub/sub, rate limiting, geospatial queries. Versatile tool. High performance. Many applications.' }
      ]
    },
    {
      id: 'cassandra',
      title: 'Cassandra',
      content: '',
      subsections: [
        { id: 'q31', title: 'What is Cassandra?', content: 'Cassandra is column-family database. Distributed, decentralized. High availability. Linear scalability. No single point of failure. Use for: time-series, large scale, high availability.' },
        { id: 'q32', title: 'What is Cassandra architecture?', content: 'Cassandra architecture: peer-to-peer, no master, ring topology, consistent hashing. All nodes equal. Automatic partitioning. Fault tolerant. Designed for scale.' },
        { id: 'q33', title: 'What is Cassandra consistency?', content: 'Cassandra consistency levels: ONE, QUORUM, ALL, LOCAL_QUORUM. Trade-off: consistency vs availability. Tunable consistency. Choose per operation. Flexible consistency model.' },
        { id: 'q34', title: 'What is Cassandra CQL?', content: 'CQL (Cassandra Query Language) is SQL-like interface. Familiar syntax. CREATE TABLE, INSERT, SELECT. Different from SQL internally. Easier than Thrift API. Standard interface.' },
        { id: 'q35', title: 'What is partition key?', content: 'Partition key determines data distribution. Part of primary key. Data partitioned by key. Choose carefully. Affects performance. Critical design decision.' },
        { id: 'q36', title: 'What is clustering key?', content: 'Clustering key orders data within partition. Part of primary key. Determines sort order. Efficient range queries. Important for queries. Design for access patterns.' },
        { id: 'q37', title: 'What is Cassandra replication?', content: 'Cassandra replication copies data. Replication factor: copies per data center. Strategy: SimpleStrategy, NetworkTopologyStrategy. High availability. Data redundancy. Configure appropriately.' },
        { id: 'q38', title: 'What is Cassandra compaction?', content: 'Cassandra compaction merges SSTables. Types: SizeTiered, Leveled, TimeWindow. Maintains performance. Reduces disk usage. Background process. Important for operations.' },
        { id: 'q39', title: 'What is Cassandra use cases?', content: 'Use cases: time-series data, IoT, messaging, large scale, high write throughput, multi-region, high availability. Good for: write-heavy, distributed, fault-tolerant applications.' },
        { id: 'q40', title: 'What is Cassandra vs MongoDB?', content: 'Cassandra: column-family, eventual consistency, high write throughput, multi-region. MongoDB: document, stronger consistency options, rich queries, single region focus. Choose based on: consistency needs, write patterns, scale.' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced NoSQL',
      content: '',
      subsections: [
        { id: 'q41', title: 'What is eventual consistency?', content: 'Eventual consistency: data becomes consistent over time. No immediate guarantee. Acceptable for many use cases. Enables: high availability, scale, performance. Trade-off for consistency.' },
        { id: 'q42', title: 'What is sharding in NoSQL?', content: 'Sharding partitions data across servers. Horizontal scaling. Shard key determines distribution. Challenges: cross-shard queries, rebalancing. Critical for large databases. Enables scale.' },
        { id: 'q43', title: 'What is NoSQL data modeling?', content: 'NoSQL data modeling: design for queries, denormalize for reads, embed vs reference, consider access patterns, optimize for scale. Different from relational. Query-driven design.' },
        { id: 'q44', title: 'What is embedding vs referencing?', content: 'Embedding: store related data together, fast reads, limited size, data duplication. Referencing: store IDs, flexible, requires joins, no duplication. Choose based on: access patterns, data size, relationships.' },
        { id: 'q45', title: 'What is NoSQL indexing?', content: 'NoSQL indexing: improves queries, various types (B-tree, hash, text, geospatial), slows writes, choose wisely, monitor usage. Similar to SQL but database-specific. Essential for performance.' },
        { id: 'q46', title: 'What is NoSQL transactions?', content: 'NoSQL transactions: limited support, MongoDB has multi-document, Redis has simple, Cassandra has lightweight, not always ACID. Understand limitations. Use when needed. Not universal.' },
        { id: 'q47', title: 'What is NoSQL security?', content: 'NoSQL security: authentication, authorization, encryption, network security, access control, audit logging. Similar to SQL concerns. Database-specific features. Critical for production.' },
        { id: 'q48', title: 'What is NoSQL backup?', content: 'NoSQL backup: database-specific methods, snapshots, replication, point-in-time recovery. Important for disaster recovery. Test restore procedures. Critical for production.' },
        { id: 'q49', title: 'What is NoSQL monitoring?', content: 'NoSQL monitoring: performance metrics, query performance, replication lag, disk usage, connections, errors. Database-specific tools. Essential for production. Proactive management.' },
        { id: 'q50', title: 'What are NoSQL best practices?', content: 'Best practices: choose right database, design for queries, use indexes, understand consistency, plan for scale, secure properly, monitor performance, backup regularly, test thoroughly, optimize queries, use connection pooling, handle errors, document schema, version data models.' }
      ]
    }
  ]
};
