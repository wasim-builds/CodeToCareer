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
        solution: 'Define tables for Users, Posts, Comments, Likes with foreign keys linking them correctly. Use standard types.',
        solved: false,
        solutions: [
            {
                name: 'Standard Design',
                title: 'Normalized Schema',
                intuition: 'Store each entity in its own table. Use Foreign Keys to establish relationships (1:N for User->Post, Post->Comment, etc.).',
                explanation: 'Users table holds profile info. Posts table has user_id FK. Comments has post_id and user_id FK. Likes is a join table (user_id, post_id).',
                algorithm: [
                    'Define Users table (id, name, email).',
                    'Define Posts table (id, user_id, content).',
                    'Define Comments table (id, post_id, user_id, text).',
                    'Define Likes table (id, post_id, user_id).'
                ],
                code: [
                    {
                        language: 'javascript',
                        code: 'function designSchema() {\n  const schema = {\n    users: { columns: ["id", "username", "email"], pk: "id" },\n    posts: { columns: ["id", "user_id", "content", "created_at"], pk: "id", fk: { user_id: "users.id" } },\n    comments: { columns: ["id", "post_id", "user_id", "text"], pk: "id", fk: { post_id: "posts.id", user_id: "users.id" } },\n    likes: { columns: ["user_id", "post_id"], pk: ["user_id", "post_id"], fk: { user_id: "users.id", post_id: "posts.id" } }\n  };\n  return JSON.stringify(schema, null, 2);\n}',
                        explanation: 'JSON representation of schema'
                    }
                ],
                timeComplexity: 'N/A',
                spaceComplexity: 'N/A',
                pros: ['Normalized', 'Data integrity'],
                cons: ['Many joins needed']
            }
        ]
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
        solution: 'Combine Hash Map (key -> node) and Doubly Linked List (most used -> least used). Move accessed nodes to head.',
        solved: false,
        solutions: [
            {
                name: 'Brute Force',
                title: 'Array w/ Timestamp',
                intuition: 'Store items in an array. On every access, update the timestamp. When full, scan array to find oldest timestamp to evict.',
                explanation: 'Maintenance is easy, but finding the victim to evict takes O(N) because we must look at all items.',
                algorithm: [
                    'Store {key, value, lastAccess}.',
                    'On get/put: update lastAccess.',
                    'On evict: loop through array, find min lastAccess.'
                ],
                code: [
                    {
                        language: 'javascript',
                        code: 'class LRUCache {\n  constructor(capacity) {\n    this.capacity = capacity;\n    this.cache = [];\n  }\n  get(key) {\n    const idx = this.cache.findIndex(item => item.key === key);\n    if (idx === -1) return -1;\n    this.cache[idx].time = Date.now();\n    return this.cache[idx].value;\n  }\n  put(key, value) {\n    const idx = this.cache.findIndex(item => item.key === key);\n    if (idx !== -1) {\n      this.cache[idx].value = value;\n      this.cache[idx].time = Date.now();\n      return;\n    }\n    if (this.cache.length === this.capacity) {\n      // find oldest\n      let oldest = 0;\n      for(let i=1; i<this.cache.length; i++) \n        if(this.cache[i].time < this.cache[oldest].time) oldest = i;\n      this.cache.splice(oldest, 1);\n    }\n    this.cache.push({ key, value, time: Date.now() });\n  }\n}',
                        explanation: 'O(N) search and evict'
                    }
                ],
                timeComplexity: 'O(N)',
                spaceComplexity: 'O(C)',
                pros: ['Simple'],
                cons: ['Slow eviction']
            },
            {
                name: 'Optimal',
                title: 'Hash Map + DLL',
                intuition: 'Use a Hash Map for O(1) access to nodes. Use a Doubly Linked List to maintain order (head=MRU, tail=LRU). Moving a node to head is O(1).',
                explanation: 'Map stores key -> Node. Node has {key, value, prev, next}. On access, detach node and move to head. On eviction, remove tail.',
                algorithm: [
                    'Map: key -> Node.',
                    'DLL: head ... tail.',
                    'Get: map.get(key). Move node to head.',
                    'Put: if exists, update val, move to head. If new, add to head. If full, remove tail, delete from map.'
                ],
                code: [
                    {
                        language: 'javascript',
                        code: 'class Node {\n  constructor(k, v) { this.key = k; this.val = v; this.prev = null; this.next = null; }\n}\n\nclass LRUCache {\n  constructor(capacity) {\n    this.capacity = capacity;\n    this.map = new Map();\n    this.head = new Node(0,0);\n    this.tail = new Node(0,0);\n    this.head.next = this.tail;\n    this.tail.prev = this.head;\n  }\n  _remove(node) {\n    node.prev.next = node.next;\n    node.next.prev = node.prev;\n  }\n  _add(node) {\n    node.prev = this.head;\n    node.next = this.head.next;\n    this.head.next.prev = node;\n    this.head.next = node;\n  }\n  get(key) {\n    if (!this.map.has(key)) return -1;\n    const node = this.map.get(key);\n    this._remove(node); this._add(node);\n    return node.val;\n  }\n  put(key, value) {\n    if (this.map.has(key)) {\n      this._remove(this.map.get(key));\n    }\n    const newNode = new Node(key, value);\n    this._add(newNode);\n    this.map.set(key, newNode);\n    if (this.map.size > this.capacity) {\n      const lru = this.tail.prev;\n      this._remove(lru);\n      this.map.delete(lru.key);\n    }\n  }\n}',
                        explanation: 'O(1) implementation'
                    }
                ],
                timeComplexity: 'O(1)',
                spaceComplexity: 'O(C)',
                pros: ['Fast'],
                cons: ['More code']
            }
        ]
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
        solution: 'Maintain a list of idle connections. If empty and total < max, create new. If total == max, wait/block until release.',
        solved: false,
        solutions: [
            {
                name: 'Optimal',
                title: 'Queue + Counters',
                intuition: 'Keep track of active connections. If we can create more, do so. If not, park the request in a queue until a connection is released.',
                explanation: 'Use an array for `idle` connections. Use a counter `total`. `acquire()`: if idle not empty, pop one. If total < max, create new. Else, push callback to `waitQueue`. `release(conn)`: if `waitQueue` not empty, give to first waiter. Else push to `idle`.',
                algorithm: [
                    'idle = [], waiters = [], total = 0.',
                    'Acquire: if idle.length > 0 -> return pop().',
                    'Else if total < max -> total++, return new Conn().',
                    'Else -> return new Promise(resolve => waiters.push(resolve)).',
                    'Release: if waiters.length > 0 -> waiters.shift()(conn).',
                    'Else -> idle.push(conn).'
                ],
                code: [
                    {
                        language: 'javascript',
                        code: 'class ConnectionPool {\n  constructor(maxSize) {\n    this.maxSize = maxSize;\n    this.total = 0;\n    this.idle = [];\n    this.waiters = [];\n  }\n  async acquire() {\n    if (this.idle.length > 0) return this.idle.pop();\n    if (this.total < this.maxSize) {\n      this.total++;\n      return { id: this.total, query: () => "result" }; // Mock connection\n    }\n    return new Promise(resolve => this.waiters.push(resolve));\n  }\n  release(conn) {\n    if (this.waiters.length > 0) {\n      const resolve = this.waiters.shift();\n      resolve(conn);\n    } else {\n      this.idle.push(conn);\n    }\n  }\n}',
                        explanation: 'Async/Await pattern for blocking'
                    }
                ],
                timeComplexity: 'O(1) overhead',
                spaceComplexity: 'O(N)',
                pros: ['Handles concurrency correctly'],
                cons: ['Complexity in queue management']
            }
        ]
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
        solution: 'Convert integer ID to Base62 string. Save (ID, longURL) in DB.',
        solved: false,
        solutions: [
            {
                name: 'Brute Force',
                title: 'Random String',
                intuition: 'Generate a random 6-char string. Check DB if exists. If yes, retry. If no, save.',
                explanation: 'Simple but collisions become frequent as DB fills up.',
                algorithm: [
                    'Do:',
                    '  key = randomString(6)',
                    '  exists = db.has(key)',
                    'While exists',
                    'db.save(key, url)',
                    'Return key'
                ],
                code: [
                    {
                        language: 'javascript',
                        code: 'function shortenURL(longURL, db) {\n  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";\n  let key = "";\n  do {\n    key = "";\n    for(let i=0; i<6; i++) key += chars[Math.floor(Math.random() * 62)];\n  } while (db.has(key));\n  return key;\n}',
                        explanation: 'Random with retry'
                    }
                ],
                timeComplexity: 'Unbounded (potentially infinite loop)',
                spaceComplexity: 'O(1)',
                pros: ['Easy to code initially'],
                cons: ['Performance degrades with scale']
            },
            {
                name: 'Optimal',
                title: 'Base62 Encoding',
                intuition: 'Use a unique auto-incrementing integer ID from the database (1, 2, 3...). Convert this integer to a Base62 string. This guarantees uniqueness and no collisions.',
                explanation: 'Map 0-61 to a-zA-Z0-9. Convert base-10 ID to base-62. Example: 125 -> "cb".',
                algorithm: [
                    'chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"',
                    'id = getNextId()',
                    'str = ""',
                    'While id > 0:',
                    '  str = chars[id % 62] + str',
                    '  id /= 62',
                    'return str'
                ],
                code: [
                    {
                        language: 'javascript',
                        code: 'function shortenURL(longURL, id) {\n  const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";\n  if (id === 0) return "0";\n  let shortKey = "";\n  while (id > 0) {\n    shortKey = chars[id % 62] + shortKey;\n    id = Math.floor(id / 62);\n  }\n  return shortKey;\n}',
                        explanation: 'Base62 conversion'
                    }
                ],
                timeComplexity: 'O(log_62(id))',
                spaceComplexity: 'O(1)',
                pros: ['Guaranteed unique', 'No lookups needed'],
                cons: ['Predictable (can be a con security-wise)']
            }
        ]
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
        solution: 'Insert key in sorted order. If keys.length >= order, split node into two and promote middle key to parent.',
        solved: false,
        solutions: [
            {
                name: 'Optimal',
                title: 'Sorted Insert with Split',
                intuition: 'B+ Trees maintain sorted keys. When a node exceeds capacity (order), split it into two nodes and promote the middle key upward.',
                explanation: 'Insert key into sorted position. Check if node is full (keys.length >= order). If full, split: left half stays, right half becomes new node, middle key promoted to parent.',
                algorithm: [
                    'Insert key into keys array maintaining sorted order.',
                    'If keys.length < order: done.',
                    'Else: mid = floor(order/2).',
                    '  leftKeys = keys[0..mid-1].',
                    '  rightKeys = keys[mid+1..end].',
                    '  promotedKey = keys[mid].',
                    '  Create rightNode with rightKeys.',
                    '  Return {promotedKey, rightNode}.'
                ],
                code: [
                    {
                        language: 'javascript',
                        code: 'class BPlusTreeNode {\n  constructor(order, isLeaf = false) {\n    this.order = order;\n    this.keys = [];\n    this.children = [];\n    this.isLeaf = isLeaf;\n    this.next = null;\n  }\n\n  insert(key) {\n    let i = 0;\n    while (i < this.keys.length && this.keys[i] < key) i++;\n    this.keys.splice(i, 0, key);\n    if (this.keys.length >= this.order) return this.split();\n    return null;\n  }\n\n  split() {\n    const mid = Math.floor(this.order / 2);\n    const rightNode = new BPlusTreeNode(this.order, this.isLeaf);\n    rightNode.keys = this.keys.splice(mid + 1);\n    const promotedKey = this.keys.pop();\n    if (this.isLeaf) {\n      rightNode.next = this.next;\n      this.next = rightNode;\n    }\n    return { key: promotedKey, right: rightNode };\n  }\n}',
                        explanation: 'B+ Tree node with split logic'
                    }
                ],
                timeComplexity: 'O(m) for insert, O(log n) tree traversal',
                spaceComplexity: 'O(m) per node',
                pros: ['Maintains sorted order', 'Efficient range queries'],
                cons: ['Complex split logic']
            }
        ]
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
        solution: 'Iterate records, verify if email is in Set. If yes, add to duplicates list; else add to Set.',
        solved: false,
        solutions: [
            {
                name: 'Brute Force',
                title: 'Nested Loop',
                intuition: 'Compare each record with every other record to find duplicates.',
                explanation: 'For each record, check all subsequent records. If emails match, add to duplicates.',
                algorithm: [
                    'duplicates = [].',
                    'For i from 0 to n-1:',
                    '  For j from i+1 to n-1:',
                    '    If records[i].email == records[j].email:',
                    '      duplicates.push(records[j]).',
                    'Return duplicates.'
                ],
                code: [
                    {
                        language: 'javascript',
                        code: 'function findDuplicates(records) {\n  const duplicates = [];\n  for (let i = 0; i < records.length; i++) {\n    for (let j = i + 1; j < records.length; j++) {\n      if (records[i].email === records[j].email) {\n        duplicates.push(records[j]);\n      }\n    }\n  }\n  return duplicates;\n}',
                        explanation: 'O(n^2) comparison'
                    }
                ],
                timeComplexity: 'O(n^2)',
                spaceComplexity: 'O(k) for duplicates',
                pros: ['Simple'],
                cons: ['Very slow']
            },
            {
                name: 'Optimal',
                title: 'Hash Set',
                intuition: 'Track seen emails in a Set. If we encounter an email already in the Set, it\'s a duplicate.',
                explanation: 'Iterate once. For each record, check if email exists in Set. If yes, add to duplicates. If no, add email to Set.',
                algorithm: [
                    'seen = new Set(), duplicates = [].',
                    'For record in records:',
                    '  If seen.has(record.email):',
                    '    duplicates.push(record).',
                    '  Else:',
                    '    seen.add(record.email).',
                    'Return duplicates.'
                ],
                code: [
                    {
                        language: 'javascript',
                        code: 'function findDuplicates(records) {\n  const seen = new Set();\n  const duplicates = [];\n  for (const record of records) {\n    if (seen.has(record.email)) {\n      duplicates.push(record);\n    } else {\n      seen.add(record.email);\n    }\n  }\n  return duplicates;\n}',
                        explanation: 'Single pass with Set'
                    }
                ],
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)',
                pros: ['Linear time', 'Efficient'],
                cons: ['Extra space for Set']
            }
        ]
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
        solution: 'Build map from table1 (key=joinKey). Iterate table2, look up joinKey in map. If found, combine and add to result.',
        solved: false,
        solutions: [
            {
                name: 'Brute Force',
                title: 'Nested Loop Join',
                intuition: 'For each row in table1, scan all rows in table2 to find matches.',
                explanation: 'Classic nested loop. For every row in table1, iterate table2. If joinKey matches, combine rows.',
                algorithm: [
                    'result = [].',
                    'For row1 in table1:',
                    '  For row2 in table2:',
                    '    If row1[joinKey] == row2[joinKey]:',
                    '      result.push({...row1, ...row2}).',
                    'Return result.'
                ],
                code: [
                    {
                        language: 'javascript',
                        code: 'function hashJoin(table1, table2, joinKey) {\n  const result = [];\n  for (const r1 of table1) {\n    for (const r2 of table2) {\n      if (r1[joinKey] === r2[joinKey]) {\n        result.push({ ...r1, ...r2 });\n      }\n    }\n  }\n  return result;\n}',
                        explanation: 'Nested loop'
                    }
                ],
                timeComplexity: 'O(m * n)',
                spaceComplexity: 'O(k) for result',
                pros: ['Simple'],
                cons: ['Quadratic time']
            },
            {
                name: 'Optimal',
                title: 'Hash Join',
                intuition: 'Build a hash map from the smaller table. Probe the larger table against this map for O(1) lookups.',
                explanation: 'Phase 1: Build hash map from table1 (key=joinKey, value=row). Phase 2: Iterate table2, lookup each row\'s joinKey in map. If found, combine.',
                algorithm: [
                    'map = new Map().',
                    'For row in table1:',
                    '  map.set(row[joinKey], row).',
                    'result = [].',
                    'For row in table2:',
                    '  If map.has(row[joinKey]):',
                    '    result.push({...map.get(row[joinKey]), ...row}).',
                    'Return result.'
                ],
                code: [
                    {
                        language: 'javascript',
                        code: 'function hashJoin(table1, table2, joinKey) {\n  const map = new Map();\n  for (const row of table1) {\n    map.set(row[joinKey], row);\n  }\n  const result = [];\n  for (const row of table2) {\n    if (map.has(row[joinKey])) {\n      result.push({ ...map.get(row[joinKey]), ...row });\n    }\n  }\n  return result;\n}',
                        explanation: 'Hash join implementation'
                    }
                ],
                timeComplexity: 'O(m + n)',
                spaceComplexity: 'O(m)',
                pros: ['Linear time', 'Scalable'],
                cons: ['Requires memory for hash map']
            }
        ]
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
        solution: 'Parse queries, count column occurrences. Return column with max count.',
        solved: false,
        solutions: [
            {
                name: 'Optimal',
                title: 'Frequency Count',
                intuition: 'The column that appears most frequently in WHERE clauses will benefit most from an index.',
                explanation: 'Count how many times each column appears in queries. Return the column with the highest count.',
                algorithm: [
                    'freq = {}.',
                    'For query in queries:',
                    '  columns = extractColumns(query).',
                    '  For col in columns:',
                    '    freq[col] = (freq[col] || 0) + 1.',
                    'Return column with max freq.'
                ],
                code: [
                    {
                        language: 'javascript',
                        code: 'function selectBestIndex(queries) {\n  const freq = {};\n  for (const query of queries) {\n    freq[query] = (freq[query] || 0) + 1;\n  }\n  let maxCol = "", maxCount = 0;\n  for (const [col, count] of Object.entries(freq)) {\n    if (count > maxCount) {\n      maxCount = count;\n      maxCol = col;\n    }\n  }\n  return maxCol;\n}',
                        explanation: 'Frequency-based selection'
                    }
                ],
                timeComplexity: 'O(n * m) where m is avg query length',
                spaceComplexity: 'O(k) for k unique columns',
                pros: ['Simple heuristic', 'Fast'],
                cons: ['Ignores query complexity']
            }
        ]
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
        solution: 'Calculate start index: (page-1)*size. Slice array from start to start+size.',
        solved: false,
        solutions: [
            {
                name: 'Optimal',
                title: 'Array Slice',
                intuition: 'Calculate the starting index based on page number and size, then slice the array.',
                explanation: 'For 1-based pages: startIndex = (page - 1) * pageSize. endIndex = startIndex + pageSize. Return data.slice(start, end).',
                algorithm: [
                    'start = (page - 1) * pageSize.',
                    'end = start + pageSize.',
                    'Return data.slice(start, end).'
                ],
                code: [
                    {
                        language: 'javascript',
                        code: 'function paginate(data, page, pageSize) {\n  const start = (page - 1) * pageSize;\n  return data.slice(start, start + pageSize);\n}',
                        explanation: 'Simple slice operation'
                    }
                ],
                timeComplexity: 'O(k) where k is pageSize',
                spaceComplexity: 'O(k)',
                pros: ['Simple', 'Efficient'],
                cons: ['None']
            }
        ]
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
        solution: 'Iterate sales. Update map[productId] += amount.',
        solved: false,
        solutions: [
            {
                name: 'Optimal',
                title: 'Hash Map Aggregation',
                intuition: 'Use a hash map to accumulate totals for each productId in a single pass.',
                explanation: 'Iterate through sales. For each transaction, add amount to map[productId]. If productId not in map, initialize to 0 first.',
                algorithm: [
                    'totals = {}.',
                    'For sale in sales:',
                    '  productId = sale.productId (or sale.p).',
                    '  amount = sale.amount (or sale.a).',
                    '  totals[productId] = (totals[productId] || 0) + amount.',
                    'Return totals.'
                ],
                code: [
                    {
                        language: 'javascript',
                        code: 'function aggregateSales(sales) {\n  const totals = {};\n  for (const sale of sales) {\n    const pid = sale.p || sale.productId;\n    const amt = sale.a || sale.amount;\n    totals[pid] = (totals[pid] || 0) + amt;\n  }\n  return totals;\n}',
                        explanation: 'Single pass aggregation'
                    }
                ],
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(k) for k unique products',
                pros: ['Linear time', 'Simple'],
                cons: ['None']
            }
        ]
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
        solution: 'On write: update cache[key], call db.write(key). On read: return cache[key] || db.read(key).',
        solved: false,
        solutions: [
            {
                name: 'Optimal',
                title: 'Synchronous Write-Through',
                intuition: 'Write-through means every write updates both cache and database immediately, ensuring consistency.',
                explanation: 'On write(key, value): update cache[key] = value, then call db.write(key, value). On read(key): check cache first. If hit, return cache[key]. If miss, read from db and optionally populate cache.',
                algorithm: [
                    'write(key, value):',
                    '  cache[key] = value.',
                    '  db.write(key, value).',
                    'read(key):',
                    '  If cache.has(key): return cache[key].',
                    '  Else: val = db.read(key), cache[key] = val, return val.'
                ],
                code: [
                    {
                        language: 'javascript',
                        code: 'class WriteThroughCache {\n  constructor(database) {\n    this.cache = {};\n    this.db = database;\n  }\n\n  write(key, value) {\n    this.cache[key] = value;\n    this.db.write(key, value);\n  }\n\n  read(key) {\n    if (key in this.cache) return this.cache[key];\n    const val = this.db.read(key);\n    if (val !== undefined) this.cache[key] = val;\n    return val;\n  }\n}',
                        explanation: 'Write-through pattern'
                    }
                ],
                timeComplexity: 'O(1) for cache ops, O(1) for DB (assumed)',
                spaceComplexity: 'O(n)',
                pros: ['Data consistency', 'Simple'],
                cons: ['Write latency (must wait for DB)']
            }
        ]
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
        solution: 'Store value with expiration timestamp. In get(key), if Date.now() > timestamp, delete and return null.',
        solved: false,
        solutions: [
            {
                name: 'Optimal',
                title: 'Lazy Expiration',
                intuition: 'Store each value with its expiration timestamp. Check on access if expired.',
                explanation: 'put(key, value, ttl): store {value, expiry: Date.now() + ttl}. get(key): check if Date.now() > expiry. If yes, delete and return null. Else return value.',
                algorithm: [
                    'put(key, value, ttl):',
                    '  store.set(key, {value, expiry: Date.now() + ttl}).',
                    'get(key):',
                    '  If !store.has(key): return null.',
                    '  entry = store.get(key).',
                    '  If Date.now() > entry.expiry:',
                    '    store.delete(key), return null.',
                    '  Return entry.value.'
                ],
                code: [
                    {
                        language: 'javascript',
                        code: 'class TTLCache {\n  constructor() {\n    this.store = new Map();\n  }\n\n  put(key, value, ttlMs) {\n    this.store.set(key, { value, expiry: Date.now() + ttlMs });\n  }\n\n  get(key) {\n    if (!this.store.has(key)) return null;\n    const entry = this.store.get(key);\n    if (Date.now() > entry.expiry) {\n      this.store.delete(key);\n      return null;\n    }\n    return entry.value;\n  }\n}',
                        explanation: 'TTL with lazy expiration'
                    }
                ],
                timeComplexity: 'O(1)',
                spaceComplexity: 'O(n)',
                pros: ['Simple', 'No background cleanup needed'],
                cons: ['Memory not freed until access']
            }
        ]
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
        solution: 'Check cache[queryStr]. If exists, return it. Else, result = dbExecuteFn(), cache[queryStr] = result, return result.',
        solved: false,
        solutions: [
            {
                name: 'Optimal',
                title: 'Simple Query Cache',
                intuition: 'Use query string as key. Cache the result. On repeated query, return cached result.',
                explanation: 'runQuery(queryStr, dbFn): if cache has queryStr, return cache[queryStr]. Else execute dbFn(), store result in cache, return result.',
                algorithm: [
                    'runQuery(queryStr, dbExecuteFn):',
                    '  If cache.has(queryStr): return cache[queryStr].',
                    '  result = dbExecuteFn().',
                    '  cache[queryStr] = result.',
                    '  Return result.'
                ],
                code: [
                    {
                        language: 'javascript',
                        code: 'class QueryCache {\n  constructor() {\n    this.cache = {};\n  }\n\n  runQuery(queryStr, dbExecuteFn) {\n    if (this.cache[queryStr]) return this.cache[queryStr];\n    const result = dbExecuteFn();\n    this.cache[queryStr] = result;\n    return result;\n  }\n}',
                        explanation: 'Memoization pattern'
                    }
                ],
                timeComplexity: 'O(1) cache lookup',
                spaceComplexity: 'O(n)',
                pros: ['Fast repeated queries'],
                cons: ['Invalidation needed on data changes']
            }
        ]
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
        solution: 'Compute k hashes of string (mod size). Set bits at indices. contains returns true only if all k bits are set.',
        solved: false,
        solutions: [
            {
                name: 'Optimal',
                title: 'Bloom Filter',
                intuition: 'Use multiple hash functions to set bits. An item is "possibly in set" if all its hash bits are set.',
                explanation: 'add(str): compute k hash values (h1, h2, ...). Set bitArray[h1 % size] = 1, etc. contains(str): compute same k hashes. Return true only if ALL bits are 1.',
                algorithm: [
                    'add(str):',
                    '  For i in 0..k-1:',
                    '    idx = hash_i(str) % size.',
                    '    bitArray[idx] = 1.',
                    'contains(str):',
                    '  For i in 0..k-1:',
                    '    idx = hash_i(str) % size.',
                    '    If bitArray[idx] == 0: return false.',
                    '  Return true.'
                ],
                code: [
                    {
                        language: 'javascript',
                        code: 'class BloomFilter {\n  constructor(size, k = 3) {\n    this.size = size;\n    this.k = k;\n    this.bitArray = new Array(size).fill(0);\n  }\n\n  _hash(str, seed) {\n    let h = seed;\n    for (let i = 0; i < str.length; i++) {\n      h = (h * 31 + str.charCodeAt(i)) % this.size;\n    }\n    return h;\n  }\n\n  add(str) {\n    for (let i = 0; i < this.k; i++) {\n      const idx = this._hash(str, i);\n      this.bitArray[idx] = 1;\n    }\n  }\n\n  contains(str) {\n    for (let i = 0; i < this.k; i++) {\n      const idx = this._hash(str, i);\n      if (this.bitArray[idx] === 0) return false;\n    }\n    return true;\n  }\n}',
                        explanation: 'Bloom filter with k hash functions'
                    }
                ],
                timeComplexity: 'O(k) per operation',
                spaceComplexity: 'O(m) for bit array',
                pros: ['Space efficient', 'Fast'],
                cons: ['False positives possible']
            }
        ]
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
        solution: 'Hash server IDs, store in sorted list (ring). For a key, hash it, find first serverHash >= keyHash (wrap around if needed).',
        solved: false,
        solutions: [
            {
                name: 'Optimal',
                title: 'Consistent Hash Ring',
                intuition: 'Map servers to points on a ring (0 to MAX). For a key, find the first server clockwise from the key\'s hash position.',
                explanation: 'addServer(s): hash(s), insert into sorted ring. getServer(key): hash(key), binary search for first server >= hash. If none, wrap to first server.',
                algorithm: [
                    'addServer(server):',
                    '  h = hash(server).',
                    '  Insert {h, server} into sorted ring.',
                    'getServer(key):',
                    '  keyHash = hash(key).',
                    '  Binary search ring for first entry with hash >= keyHash.',
                    '  If not found, return ring[0].server.',
                    '  Return found.server.'
                ],
                code: [
                    {
                        language: 'javascript',
                        code: 'class ConsistentHash {\n  constructor() {\n    this.ring = [];\n  }\n\n  _hash(str) {\n    let h = 0;\n    for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;\n    return h;\n  }\n\n  addServer(server) {\n    const h = this._hash(server);\n    this.ring.push({ hash: h, server });\n    this.ring.sort((a, b) => a.hash - b.hash);\n  }\n\n  getServer(key) {\n    if (this.ring.length === 0) return null;\n    const keyHash = this._hash(key);\n    for (const entry of this.ring) {\n      if (entry.hash >= keyHash) return entry.server;\n    }\n    return this.ring[0].server;\n  }\n}',
                        explanation: 'Consistent hashing ring'
                    }
                ],
                timeComplexity: 'O(log N) for getServer with binary search',
                spaceComplexity: 'O(N)',
                pros: ['Minimal remapping on server add/remove'],
                cons: ['Requires sorted structure']
            }
        ]
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
        solution: 'If numeric: id % numShards. If string: compute hash code, take abs, mod numShards.',
        solved: false,
        solutions: [
            {
                name: 'Optimal',
                title: 'Modulo Sharding',
                intuition: 'Use modulo operation to distribute users evenly across shards.',
                explanation: 'If userId is numeric: shardId = userId % numShards. If string: hash userId to number, then mod.',
                algorithm: [
                    'If typeof userId == "number":',
                    '  return userId % numShards.',
                    'Else:',
                    '  h = hash(userId).',
                    '  return abs(h) % numShards.'
                ],
                code: [
                    {
                        language: 'javascript',
                        code: 'function getShardId(userId, numShards) {\n  if (typeof userId === "number") {\n    return userId % numShards;\n  }\n  let h = 0;\n  for (let i = 0; i < userId.length; i++) {\n    h = (h * 31 + userId.charCodeAt(i)) | 0;\n  }\n  return Math.abs(h) % numShards;\n}',
                        explanation: 'Modulo-based sharding'
                    }
                ],
                timeComplexity: 'O(1) for numeric, O(k) for string',
                spaceComplexity: 'O(1)',
                pros: ['Simple', 'Uniform distribution'],
                cons: ['Resharding requires data migration']
            }
        ]
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
        solution: 'Store t0. Compute d1, d2, d3... Then compute D1=d1, D2=d2-d1, D3=d3-d2... Return t0 and list of Ds.',
        solved: false,
        solutions: [
            {
                name: 'Optimal',
                title: 'Delta-of-Delta Encoding',
                intuition: 'Time-series data often has regular intervals. Store first timestamp, then deltas, then delta-of-deltas for better compression.',
                explanation: 'Store t0. Compute deltas: d[i] = ts[i] - ts[i-1]. Compute delta-deltas: dd[i] = d[i] - d[i-1]. Return {start: t0, deltaDeltas: dd}.',
                algorithm: [
                    'If ts.length == 0: return {}.',
                    't0 = ts[0].',
                    'deltas = [ts[1] - ts[0], ts[2] - ts[1], ...].',
                    'deltaDeltas = [deltas[0]].',
                    'For i from 1 to deltas.length-1:',
                    '  deltaDeltas.push(deltas[i] - deltas[i-1]).',
                    'Return {start: t0, dd: deltaDeltas}.'
                ],
                code: [
                    {
                        language: 'javascript',
                        code: 'function compressTimestamps(timestamps) {\n  if (timestamps.length === 0) return {};\n  const start = timestamps[0];\n  const deltas = [];\n  for (let i = 1; i < timestamps.length; i++) {\n    deltas.push(timestamps[i] - timestamps[i - 1]);\n  }\n  const dd = [deltas[0]];\n  for (let i = 1; i < deltas.length; i++) {\n    dd.push(deltas[i] - deltas[i - 1]);\n  }\n  return { start, dd };\n}',
                        explanation: 'Delta-of-delta compression'
                    }
                ],
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)',
                pros: ['Good compression for regular intervals'],
                cons: ['Requires decompression to query']
            }
        ]
    }
];
