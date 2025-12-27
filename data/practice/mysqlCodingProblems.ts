import { PracticeProblem } from '@/types/practice';

export const mysqlCodingProblems: PracticeProblem[] = [
    // Database Design & Schema
    {
        id: 'design-database-schema',
        slug: 'design-database-schema',
        title: 'Design Database Schema for Social Media',
        difficulty: 'medium',
        topics: ['Database Design', 'Schema'],
        prompt: 'Design a normalized database schema for a social media platform. The platform should support users, posts, comments, and likes. Return a JSON string representing the schema with tables, columns, and relationships.',
        constraints: ['Result must be valid JSON', 'Include table names and column types'],
        examples: [
            { input: 'No input needed', output: 'JSON schema definition' }
        ],
        hints: ['Identify entities: User, Post, Comment, Like', 'Define one-to-many relationships'],
        starterCode: [
            {
                language: 'javascript',
                functionName: 'designSchema',
                code: 'function designSchema() {\n  // Return JSON string of schema\n  return JSON.stringify({});\n}\n\nmodule.exports = designSchema;'
            },
            {
                language: 'python',
                functionName: 'designSchema',
                code: 'import json\n\ndef designSchema():\n    # Return JSON string of schema\n    return json.dumps({})'
            }
        ],
        tests: [
            { id: 's1', type: 'sample', input: {}, output: 'Valid Schema' }
        ],
        solution: 'Define tables for Users, Posts, Comments, Likes with foreign keys linking them correctly. Use standard types.'
    },
    {
        id: 'lru-cache-implementation',
        slug: 'lru-cache-implementation',
        title: 'Implement LRU Cache',
        difficulty: 'medium',
        topics: ['Hash Table', 'Linked List', 'Caching'],
        prompt: 'Design and implement a Least Recently Used (LRU) cache. It should support get and put operations in O(1) time complexity.',
        constraints: ['Capacity >= 1', 'O(1) time for get and put'],
        examples: [
            { input: '["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]\n[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]', output: '[null, null, null, 1, null, -1, null, -1, 3, 4]' }
        ],
        hints: ['Use a hash map for O(1) access', 'Use a doubly linked list to maintain order'],
        starterCode: [
            {
                language: 'javascript',
                functionName: 'LRUCache',
                code: '/**\n * @param {number} capacity\n */\nvar LRUCache = function(capacity) {\n    \n};\n\n/** \n * @param {number} key\n * @return {number}\n */\nLRUCache.prototype.get = function(key) {\n    \n};\n\n/** \n * @param {number} key \n * @param {number} value\n * @return {void}\n */\nLRUCache.prototype.put = function(key, value) {\n    \n};\n\nmodule.exports = LRUCache;'
            },
            {
                language: 'python',
                functionName: 'LRUCache',
                code: 'class LRUCache:\n\n    def __init__(self, capacity: int):\n        pass\n\n    def get(self, key: int) -> int:\n        pass\n\n    def put(self, key: int, value: int) -> None:\n        pass'
            }
        ],
        tests: [
            { id: 's1', type: 'sample', input: { commands: ["put", "put", "get"], args: [[1, 1], [2, 2], [1]] }, output: [null, null, 1] }
        ],
        solution: 'Combine Hash Map (key -> node) and Doubly Linked List (most used -> least used). Move accessed nodes to head.'
    },
    {
        id: 'database-connection-pool',
        slug: 'database-connection-pool',
        title: 'Database Connection Pool',
        difficulty: 'hard',
        topics: ['System Design', 'Concurrency'],
        prompt: 'Implement a simulated database connection pool. It should manage a set of connections, allowing clients to acquire and release them. Enforce a maximum pool size.',
        constraints: ['Wait if no connection available (simulated)', 'Max connections limit'],
        examples: [
            { input: 'pool = new ConnectionPool(2); c1 = pool.acquire(); c2 = pool.acquire(); c3 = pool.acquire() // blocks', output: 'Connections managed' }
        ],
        hints: ['Use a queue for available connections', 'Use a counter for active connections'],
        starterCode: [
            {
                language: 'javascript',
                functionName: 'ConnectionPool',
                code: 'class ConnectionPool {\n  constructor(maxSize) {\n    this.maxSize = maxSize;\n  }\n\n  acquire() {\n    // Return a connection or wait\n  }\n\n  release(connection) {\n    // Return connection to pool\n  }\n}\n\nmodule.exports = ConnectionPool;'
            }
        ],
        tests: [
            { id: 's1', type: 'sample', input: { size: 2, ops: ['acquire', 'acquire'] }, output: 'Success' }
        ],
        solution: 'Maintain a list of idle connections. If empty and total < max, create new. If total == max, wait/block until release.'
    },
    {
        id: 'design-url-shortener-db',
        slug: 'design-url-shortener-db',
        title: 'Design URL Shortener Database',
        difficulty: 'medium',
        topics: ['Database Design', 'Hashing'],
        prompt: 'Design a database schema and logic for a URL shortener. Keys should be 6 characters long.',
        constraints: ['Unique short keys', 'Efficient lookup'],
        examples: [
            { input: 'url = "https://example.com"', output: 'shortKey: "aX9_z1"' }
        ],
        hints: ['Base62 encoding of an auto-increment ID', 'Store mapping in DB'],
        starterCode: [
            {
                language: 'javascript',
                functionName: 'shortenURL',
                code: 'function shortenURL(longURL, id) {\n  // Return short key based on ID\n  return "";\n}\n\nmodule.exports = shortenURL;'
            }
        ],
        tests: [
            { id: 's1', type: 'sample', input: { url: 'https://ex.com', id: 1000 }, output: 'encoded_string' }
        ],
        solution: 'Convert integer ID to Base62 string. Save (ID, longURL) in DB.'
    },
    {
        id: 'implement-b-plus-tree-node',
        slug: 'implement-b-plus-tree-node',
        title: 'Implement B+ Tree Node',
        difficulty: 'hard',
        topics: ['Tree', 'Indexing'],
        prompt: 'Implement a B+ Tree node class with insert and split functionality. Focus on leaf node logic.',
        constraints: ['Order m', 'Keep keys sorted'],
        examples: [
            { input: 'Node(order=3), insert(1), insert(2), insert(3)', output: 'Node splits' }
        ],
        hints: ['Node has keys and pointers', 'Leaf nodes link to next leaf'],
        starterCode: [
            {
                language: 'javascript',
                functionName: 'BPlusTreeNode',
                code: 'class BPlusTreeNode {\n  constructor(order, isLeaf = false) {\n    this.order = order;\n    this.keys = [];\n    this.isLeaf = isLeaf;\n  }\n\n  insert(key) {\n    // Insert and split if full\n  }\n}\n\nmodule.exports = BPlusTreeNode;'
            }
        ],
        tests: [
            { id: 's1', type: 'sample', input: { keys: [1, 2] }, output: 'Node keys: [1, 2]' }
        ],
        solution: 'Insert key in sorted order. If keys.length >= order, split node into two and promote middle key to parent.'
    },

    // Query Optimization
    {
        id: 'find-duplicate-records',
        slug: 'find-duplicate-records',
        title: 'Find Duplicate Records',
        difficulty: 'easy',
        topics: ['Hash Table', 'Array'],
        prompt: 'Given a list of database records (objects), identify and return duplicate records based on a specific field "email".',
        constraints: ['O(n) time', 'Records have unique IDs but duplicates share email'],
        examples: [
            { input: 'records = [{id:1, email:"a@a.com"}, {id:2, email:"b@b.com"}, {id:3, email:"a@a.com"}]', output: '[{id:3, email:"a@a.com"}]' }
        ],
        hints: ['Use a Set or Hash Map to track seen emails'],
        starterCode: [
            {
                language: 'javascript',
                functionName: 'findDuplicates',
                code: 'function findDuplicates(records) {\n  // Return array of duplicate records\n  return [];\n}\n\nmodule.exports = findDuplicates;'
            }
        ],
        tests: [
            { id: 's1', type: 'sample', input: { records: [{ id: 1, email: "a" }, { id: 2, email: "a" }] }, output: [{ id: 2, email: "a" }] }
        ],
        solution: 'Iterate records, verify if email is in Set. If yes, add to duplicates list; else add to Set.'
    },
    {
        id: 'optimize-join-operation',
        slug: 'optimize-join-operation',
        title: 'Optimize JOIN Operation',
        difficulty: 'medium',
        topics: ['Hash Table', 'Join Algorithms'],
        prompt: 'Implement a Hash Join algorithm to join two lists of objects on a specific key "userId". Accessing one list is cheaper than the other.',
        constraints: ['Assume list1 is smaller', 'O(m+n) time'],
        examples: [
            { input: 'users = [{id:1, name:"A"}], orders = [{userId:1, item:"book"}]', output: '[{userId:1, name:"A", item:"book"}]' }
        ],
        hints: ['Build hash map of smaller table', 'Probe larger table against map'],
        starterCode: [
            {
                language: 'javascript',
                functionName: 'hashJoin',
                code: 'function hashJoin(table1, table2, joinKey) {\n  // Perform hash join\n  return [];\n}\n\nmodule.exports = hashJoin;'
            }
        ],
        tests: [
            { id: 's1', type: 'sample', input: { t1: [{ id: 1 }], t2: [{ id: 1 }] }, output: [{ id: 1 }] }
        ],
        solution: 'Build map from table1 (key=joinKey). Iterate table2, look up joinKey in map. If found, combine and add to result.'
    },
    {
        id: 'index-selection-strategy',
        slug: 'index-selection-strategy',
        title: 'Index Selection Strategy',
        difficulty: 'medium',
        topics: ['Indexing', 'Optimization'],
        prompt: 'Given a list of queries and column usage stats, determine the best single column to index to maximize total query performance improvement.',
        constraints: ['Simple heuristic: frequency of use in WHERE clauses'],
        examples: [
            { input: 'queries = ["WHERE a=1", "WHERE b=2", "WHERE a=3"]', output: '"a"' }
        ],
        hints: ['Count frequency of each column in WHERE clauses'],
        starterCode: [
            {
                language: 'javascript',
                functionName: 'selectBestIndex',
                code: 'function selectBestIndex(queries) {\n  // Return column name\n  return "";\n}\n\nmodule.exports = selectBestIndex;'
            }
        ],
        tests: [
            { id: 's1', type: 'sample', input: { queries: ["a", "a", "b"] }, output: "a" }
        ],
        solution: 'Parse queries, count column occurrences. Return column with max count.'
    },
    {
        id: 'query-result-pagination',
        slug: 'query-result-pagination',
        title: 'Query Result Pagination',
        difficulty: 'easy',
        topics: ['Array', 'Pagination'],
        prompt: 'Implement a pagination function for a dataset. Given page number and page size, return the correct slice of data.',
        constraints: ['1-based indexing for pages'],
        examples: [
            { input: 'data = [1,2,3,4,5], page = 2, size = 2', output: '[3,4]' }
        ],
        hints: ['startIndex = (page - 1) * size'],
        starterCode: [
            {
                language: 'javascript',
                functionName: 'paginate',
                code: 'function paginate(data, page, pageSize) {\n  // Return page slice\n  return [];\n}\n\nmodule.exports = paginate;'
            }
        ],
        tests: [
            { id: 's1', type: 'sample', input: { data: [1, 2, 3], page: 1, size: 2 }, output: [1, 2] }
        ],
        solution: 'Calculate start index: (page-1)*size. Slice array from start to start+size.'
    },
    {
        id: 'aggregate-data-efficiently',
        slug: 'aggregate-data-efficiently',
        title: 'Aggregate Data Efficiently',
        difficulty: 'medium',
        topics: ['Hash Table', 'Aggregation'],
        prompt: 'Given a list of sales transactions, group them by "productId" and calculate total sales amount for each product.',
        constraints: ['O(n) time'],
        examples: [
            { input: 'sales = [{prod:1, amt:10}, {prod:1, amt:20}, {prod:2, amt:5}]', output: '{1: 30, 2: 5}' }
        ],
        hints: ['Use map to store productId -> running total'],
        starterCode: [
            {
                language: 'javascript',
                functionName: 'aggregateSales',
                code: 'function aggregateSales(sales) {\n  // Return object { productId: totalAmount }\n  return {};\n}\n\nmodule.exports = aggregateSales;'
            }
        ],
        tests: [
            { id: 's1', type: 'sample', input: { sales: [{ p: 1, a: 10 }, { p: 1, a: 10 }] }, output: { 1: 20 } }
        ],
        solution: 'Iterate sales. Update map[productId] += amount.'
    },

    // Caching & Performance
    {
        id: 'write-through-cache',
        slug: 'write-through-cache',
        title: 'Write-Through Cache Implementation',
        difficulty: 'medium',
        topics: ['Caching', 'Design'],
        prompt: 'Implement a Write-Through Cache simulator. When writing data, it should update both cache and "database" (a separate object). When reading, return from cache if present.',
        constraints: ['Maintain data consistency'],
        examples: [
            { input: 'write("k", "v"); read("k")', output: '"v" (and check DB)' }
        ],
        hints: ['Update cache and DB in the write method'],
        starterCode: [
            {
                language: 'javascript',
                functionName: 'WriteThroughCache',
                code: 'class WriteThroughCache {\n  constructor(database) {\n    this.cache = {};\n    this.db = database;\n  }\n\n  write(key, value) {\n    // Implementation\n  }\n\n  read(key) {\n    // Implementation\n  }\n}\n\nmodule.exports = WriteThroughCache;'
            }
        ],
        tests: [
            { id: 's1', type: 'sample', input: { op: 'write', k: 'a', v: 1 }, output: 'DB updated' }
        ],
        solution: 'On write: update cache[key], call db.write(key). On read: return cache[key] || db.read(key).'
    },
    {
        id: 'cache-invalidation',
        slug: 'cache-invalidation',
        title: 'Cache Invalidation with TTL',
        difficulty: 'hard',
        topics: ['Caching', 'Time'],
        prompt: 'Implement a cache that supports Time-To-Live (TTL) for each entry. get() should return null if the entry has expired.',
        constraints: ['Lazy expiration allowed (check on get)'],
        examples: [
            { input: 'put("k", "v", 100ms); sleep(200ms); get("k")', output: 'null' }
        ],
        hints: ['Store {value, expiryTime} in map', 'Check expiryTime against Date.now() on get'],
        starterCode: [
            {
                language: 'javascript',
                functionName: 'TTLCache',
                code: 'class TTLCache {\n  constructor() {\n    this.store = new Map();\n  }\n\n  put(key, value, ttlMs) {\n    // Impl\n  }\n\n  get(key) {\n    // Impl\n  }\n}\n\nmodule.exports = TTLCache;'
            }
        ],
        tests: [
            { id: 's1', type: 'sample', input: { k: 'a', ttl: 100 }, output: 'expires' }
        ],
        solution: 'Store value with expiration timestamp. In get(key), if Date.now() > timestamp, delete and return null.'
    },
    {
        id: 'query-result-cache',
        slug: 'query-result-cache',
        title: 'Query Result Cache',
        difficulty: 'medium',
        topics: ['Caching', 'Hashing'],
        prompt: 'Implement a system that caches results of SQL queries. The key should be the query string. If a query is repeated, return cached result.',
        constraints: ['Exact string match'],
        examples: [
            { input: 'run("SELECT *"); run("SELECT *")', output: 'Second call hits cache' }
        ],
        hints: ['Map query string to result object'],
        starterCode: [
            {
                language: 'javascript',
                functionName: 'QueryCache',
                code: 'class QueryCache {\n  constructor() {\n    this.cache = {};\n  }\n\n  runQuery(queryStr, dbExecuteFn) {\n    // Check cache, else execute\n  }\n}\n\nmodule.exports = QueryCache;'
            }
        ],
        tests: [
            { id: 's1', type: 'sample', input: { q: 'abc' }, output: 'Cached' }
        ],
        solution: 'Check cache[queryStr]. If exists, return it. Else, result = dbExecuteFn(), cache[queryStr] = result, return result.'
    },
    {
        id: 'bloom-filter-queries',
        slug: 'bloom-filter-queries',
        title: 'Bloom Filter for Queries',
        difficulty: 'hard',
        topics: ['Bit Manipulation', 'Hashing'],
        prompt: 'Implement a simple Bloom Filter to quickly check if a record *might* exist in a large dataset before querying the DB. Support add() and contains().',
        constraints: ['Use simple hash functions', 'Simulate bit array'],
        examples: [
            { input: 'add("user1"); contains("user1") -> true; contains("user2") -> false', output: 'Probabilistic check' }
        ],
        hints: ['Bit array of size m', 'Multiple hash functions'],
        starterCode: [
            {
                language: 'javascript',
                functionName: 'BloomFilter',
                code: 'class BloomFilter {\n  constructor(size) {\n    this.size = size;\n    this.bitArray = new Array(size).fill(0);\n  }\n\n  add(str) {\n    // Hash and set bits\n  }\n\n  contains(str) {\n    // Hash and check bits\n  }\n}\n\nmodule.exports = BloomFilter;'
            }
        ],
        tests: [
            { id: 's1', type: 'sample', input: { item: 'a' }, output: true }
        ],
        solution: 'Compute k hashes of string (mod size). Set bits at indices. contains returns true only if all k bits are set.'
    },
    {
        id: 'consistent-hashing',
        slug: 'consistent-hashing',
        title: 'Consistent Hashing',
        difficulty: 'hard',
        topics: ['Hashing', 'System Design'],
        prompt: 'Implement consistent hashing to map keys to a set of N servers. Support adding/removing servers and finding which server a key maps to.',
        constraints: ['Minimize remapping', 'Use ring topology'],
        examples: [
            { input: 'addServer("S1"); addServer("S2"); getServer("k1")', output: '"S1" or "S2"' }
        ],
        hints: ['Map servers and keys to ring (0-360 or int max)', 'Find first server > key hash'],
        starterCode: [
            {
                language: 'javascript',
                functionName: 'ConsistentHash',
                code: 'class ConsistentHash {\n  constructor() {\n    this.ring = []; // Sorted list of {hash, server}\n  }\n\n  addServer(server) {\n    // Add to ring\n  }\n\n  getServer(key) {\n    // Find server\n  }\n}\n\nmodule.exports = ConsistentHash;'
            }
        ],
        tests: [
            { id: 's1', type: 'sample', input: { servers: ['A'] }, output: 'A' }
        ],
        solution: 'Hash server IDs, store in sorted list (ring). For a key, hash it, find first serverHash >= keyHash (wrap around if needed).'
    },

    // System Design
    {
        id: 'database-sharding-strategy',
        slug: 'database-sharding-strategy',
        title: 'Database Sharding Strategy',
        difficulty: 'hard',
        topics: ['System Design', 'Hashing'],
        prompt: 'Implement a sharding function. Given a userId and number of shards, determine which shard ID (0 to N-1) the user data belongs to.',
        constraints: ['Uniform distribution preferred'],
        examples: [
            { input: 'userId = 123, shards = 4', output: '3' }
        ],
        hints: ['userId % shards for numeric', 'Hash(userId) % shards for string'],
        starterCode: [
            {
                language: 'javascript',
                functionName: 'getShardId',
                code: 'function getShardId(userId, numShards) {\n  // Return shard index\n  return 0;\n}\n\nmodule.exports = getShardId;'
            }
        ],
        tests: [
            { id: 's1', type: 'sample', input: { id: 10, n: 5 }, output: 0 }
        ],
        solution: 'If numeric: id % numShards. If string: compute hash code, take abs, mod numShards.'
    },
    {
        id: 'read-replica-load-balancer',
        slug: 'read-replica-load-balancer',
        title: 'Read Replica Load Balancer',
        difficulty: 'medium',
        topics: ['Design', 'Round Robin'],
        prompt: 'Implement a Round-Robin Load Balancer for database read replicas. Given a list of replica IPs, return the next one to use for each request.',
        constraints: ['Cycle through list'],
        examples: [
            { input: 'replicas = ["IP1", "IP2"]; getNext(); getNext()', output: '"IP1", "IP2", "IP1"...' }
        ],
        hints: ['Keep index state', 'Increment and mod length'],
        starterCode: [
            {
                language: 'javascript',
                functionName: 'LoadBalancer',
                code: 'class LoadBalancer {\n  constructor(replicas) {\n    this.replicas = replicas;\n    this.index = 0;\n  }\n\n  getNext() {\n    // Return next replica\n  }\n}\n\nmodule.exports = LoadBalancer;'
            }
        ],
        tests: [
            { id: 's1', type: 'sample', input: { r: ['A', 'B'] }, output: 'A then B' }
        ],
        solution: 'Return replicas[index]; index = (index + 1) % replicas.length.'
    },
    {
        id: 'transaction-log-parser',
        slug: 'transaction-log-parser',
        title: 'Transaction Log Parser',
        difficulty: 'medium',
        topics: ['String', 'Parsing'],
        prompt: 'Parse a database transaction log string. Log format: "START 1; UPDATE A 10; COMMIT 1; START 2; ROLLBACK 2;". identifying successful transactions IDs.',
        constraints: ['Return array of committed transaction IDs'],
        examples: [
            { input: 'log = "START 1; COMMIT 1; START 2; ROLLBACK 2;"', output: '[1]' }
        ],
        hints: ['Split by semicolon', 'Track status of each transaction ID'],
        starterCode: [
            {
                language: 'javascript',
                functionName: 'parseLog',
                code: 'function parseLog(logStr) {\n  // Return committed IDs\n  return [];\n}\n\nmodule.exports = parseLog;'
            }
        ],
        tests: [
            { id: 's1', type: 'sample', input: { log: 'START 1; COMMIT 1' }, output: [1] }
        ],
        solution: 'Split log. Track encountered IDs and their final state (COMMIT/ROLLBACK). Return list of COMMITted IDs.'
    },
    {
        id: 'deadlock-detection',
        slug: 'deadlock-detection',
        title: 'Deadlock Detection',
        difficulty: 'hard',
        topics: ['Graph', 'DFS'],
        prompt: 'Given a wait-for graph represented as an adjacency list (transaction A waiting for B), detect if there is a deadlock (cycle).',
        constraints: ['Return true if cycle exists'],
        examples: [
            { input: 'graph = {1: [2], 2: [1]}', output: 'true' }
        ],
        hints: ['DFS cycle detection', 'Use visited and recursion stack sets'],
        starterCode: [
            {
                language: 'javascript',
                functionName: 'hasDeadlock',
                code: 'function hasDeadlock(graph) {\n  // Return boolean\n  return false;\n}\n\nmodule.exports = hasDeadlock;'
            }
        ],
        tests: [
            { id: 's1', type: 'sample', input: { g: { 1: [2], 2: [1] } }, output: true }
        ],
        solution: 'Standard cycle detection in directed graph using DFS. Keep track of current recursion path.'
    },
    {
        id: 'time-series-compression',
        slug: 'time-series-compression',
        title: 'Time-Series Data Compression',
        difficulty: 'hard',
        topics: ['Array', 'Compression'],
        prompt: 'Implement "Delta-of-Delta" compression for timestamps. Given a sorted list of timestamps, store the first value, then first differences, then store differences of differences.',
        constraints: ['Lossless compression'],
        examples: [
            { input: 'ts = [100, 110, 120, 131]', output: 'start:100, deltas:[10, 10, 11] -> delta-deltas:[10, 0, 1]' }
        ],
        hints: ['Calculate delta[i] = ts[i] - ts[i-1]', 'Calculate deltaOfDelta[i] = delta[i] - delta[i-1]'],
        starterCode: [
            {
                language: 'javascript',
                functionName: 'compressTimestamps',
                code: 'function compressTimestamps(timestamps) {\n  // Return structure with compressed data\n  return {};\n}\n\nmodule.exports = compressTimestamps;'
            }
        ],
        tests: [
            { id: 's1', type: 'sample', input: { ts: [100, 110, 120] }, output: { start: 100, dd: [10, 0] } }
        ],
        solution: 'Store t0. Compute d1, d2, d3... Then compute D1=d1, D2=d2-d1, D3=d3-d2... Return t0 and list of Ds.'
    }
];
