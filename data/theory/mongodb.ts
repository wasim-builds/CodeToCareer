import { TheoryTopic } from '@/types/theory';

export const mongodbTheory: TheoryTopic = {
  topicId: 'mongodb',
  topicName: 'MongoDB',
  category: 'Full Stack',
  description: 'MongoDB NoSQL database operations',
  sections: [
    {
      id: 'basics',
      title: 'MongoDB Basics',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is MongoDB?', content: 'MongoDB is NoSQL document database. Stores data as BSON (Binary JSON) documents. Schema-less, flexible. Horizontal scaling. High performance. Features: indexing, replication, sharding. Good for: unstructured data, rapid development, scale.' },
        { id: 'q2', title: 'What is a document?', content: 'Document is MongoDB\'s data unit. Similar to JSON object. Stored in BSON format. Can contain: strings, numbers, arrays, nested objects, dates. Flexible structure. No fixed schema. Documents in collection can have different structures.' },
        { id: 'q3', title: 'What is a collection?', content: 'Collection is group of documents. Similar to table in SQL. No enforced schema. Documents can vary. Organized by purpose. Can have indexes. Collections in database. Flexible organization.' },
        { id: 'q4', title: 'What is a database?', content: 'Database contains collections. Multiple databases per MongoDB instance. Isolated namespaces. Use for: multi-tenant apps, separation of concerns. Switch with use command. Contains collections and users.' },
        { id: 'q5', title: 'What is _id field?', content: '_id is unique identifier for documents. Automatically created if not provided. ObjectId type (12-byte identifier). Guaranteed unique. Indexed automatically. Can use custom _id. Required field.' },
        { id: 'q6', title: 'What is ObjectId?', content: 'ObjectId is 12-byte unique identifier. Structure: timestamp (4 bytes), machine ID (3 bytes), process ID (2 bytes), counter (3 bytes). Sortable by creation time. Generated automatically. Can extract timestamp. Globally unique.' },
        { id: 'q7', title: 'What is BSON?', content: 'BSON (Binary JSON) is MongoDB\'s data format. Binary encoding of JSON. More efficient than JSON. Supports: dates, binary data, more types. Used internally. JSON-like but binary. Extended data types.' },
        { id: 'q8', title: 'What is MongoDB shell?', content: 'MongoDB shell (mongosh) is interactive JavaScript interface. Run queries, admin commands. Connect with: mongosh or mongo (legacy). Execute JavaScript. Useful for: testing, administration, learning. Command-line tool.' },
        { id: 'q9', title: 'What is MongoDB Compass?', content: 'MongoDB Compass is GUI tool. Visual interface for MongoDB. Features: browse data, run queries, visualize schema, performance metrics. Easier than shell for beginners. Official MongoDB tool. Free and paid versions.' },
        { id: 'q10', title: 'What is MongoDB Atlas?', content: 'MongoDB Atlas is cloud MongoDB service. Managed database. Features: automatic backups, scaling, monitoring, security. Pay-as-you-go. Global clusters. Simplifies operations. Popular for production.' }
      ]
    },
    {
      id: 'crud',
      title: 'CRUD Operations',
      content: '',
      subsections: [
        { id: 'q11', title: 'What is insertOne()?', content: 'insertOne() inserts single document. Syntax: db.collection.insertOne({field: value}). Returns InsertOneResult. Creates _id if not provided. Atomic operation. Use for: single document insertion.' },
        { id: 'q12', title: 'What is insertMany()?', content: 'insertMany() inserts multiple documents. Syntax: db.collection.insertMany([{doc1}, {doc2}]). Returns InsertManyResult. Can be ordered or unordered. Bulk operation. Efficient for multiple inserts.' },
        { id: 'q13', title: 'What is find()?', content: 'find() queries documents. Syntax: db.collection.find({filter}). Returns cursor. Can chain: .limit(), .sort(), .skip(). Empty filter returns all. Use .pretty() for formatted output. Basic query operation.' },
        { id: 'q14', title: 'What is findOne()?', content: 'findOne() returns single document. Syntax: db.collection.findOne({filter}). Returns document or null. Stops after first match. Useful when expecting one result. Faster than find().limit(1).' },
        { id: 'q15', title: 'What is updateOne()?', content: 'updateOne() updates first matching document. Syntax: db.collection.updateOne({filter}, {$set: {field: value}}). Uses update operators. Returns UpdateResult. Atomic operation. Updates one document only.' },
        { id: 'q16', title: 'What is updateMany()?', content: 'updateMany() updates all matching documents. Syntax: db.collection.updateMany({filter}, {$set: {field: value}}). Updates multiple documents. Returns count. Use carefully - affects all matches. Bulk update operation.' },
        { id: 'q17', title: 'What is deleteOne()?', content: 'deleteOne() deletes first matching document. Syntax: db.collection.deleteOne({filter}). Returns DeleteResult. Deletes one document. Use filter carefully. Permanent operation. Returns deletion count.' },
        { id: 'q18', title: 'What is deleteMany()?', content: 'deleteMany() deletes all matching documents. Syntax: db.collection.deleteMany({filter}). Deletes multiple documents. Returns count. Use very carefully. Permanent operation. Can delete all if filter matches all.' },
        { id: 'q19', title: 'What are update operators?', content: 'Update operators modify documents. $set (set field), $unset (remove field), $inc (increment), $push (add to array), $pull (remove from array), $addToSet (add unique to array). Use in update operations. Powerful modification capabilities.' },
        { id: 'q20', title: 'What is replaceOne()?', content: 'replaceOne() replaces entire document. Syntax: db.collection.replaceOne({filter}, {newDocument}). Replaces matching document completely. Loses fields not in replacement. Different from update. Use when replacing whole document.' }
      ]
    },
    {
      id: 'queries',
      title: 'Querying',
      content: '',
      subsections: [
        { id: 'q21', title: 'What are query operators?', content: 'Query operators filter documents. Comparison: $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin. Logical: $and, $or, $not, $nor. Array: $all, $elemMatch, $size. Use in find() filter. Powerful querying capabilities.' },
        { id: 'q22', title: 'What is projection?', content: 'Projection selects which fields to return. Syntax: db.collection.find({filter}, {field1: 1, field2: 0}). 1 includes, 0 excludes. Reduces data transfer. Can\'t mix inclusion/exclusion (except _id). Improves performance.' },
        { id: 'q23', title: 'What is sort()?', content: 'sort() orders results. Syntax: .sort({field: 1}) ascending, {field: -1} descending. Can sort by multiple fields. Uses indexes when possible. Memory limit for large sorts. Important for ordered results.' },
        { id: 'q24', title: 'What is limit()?', content: 'limit() restricts number of results. Syntax: .limit(number). Returns specified number. Useful for pagination. Combine with skip(). Reduces data transfer. Common query pattern.' },
        { id: 'q25', title: 'What is skip()?', content: 'skip() skips specified number of documents. Syntax: .skip(number). Used with limit() for pagination. Can be slow on large collections. Consider cursor-based pagination. Offset-based pagination.' },
        { id: 'q26', title: 'What is aggregation?', content: 'Aggregation processes documents through pipeline. Stages: $match (filter), $group (group), $project (reshape), $sort, $limit, $unwind (array), $lookup (join). Powerful data processing. Similar to SQL GROUP BY. Complex transformations.' },
        { id: 'q27', title: 'What is $lookup?', content: '$lookup performs left outer join. Joins documents from another collection. Syntax: {$lookup: {from: "collection", localField: "field", foreignField: "field", as: "output"}}. Similar to SQL JOIN. Enables relationships between collections.' },
        { id: 'q28', title: 'What is text search?', content: 'Text search enables full-text search. Requires text index. Syntax: {$text: {$search: "query"}}. Scores results by relevance. Language-specific. Useful for: search functionality, content discovery.' },
        { id: 'q29', title: 'What is regex query?', content: 'Regex enables pattern matching. Syntax: {field: /pattern/}. Case-insensitive: /pattern/i. Flexible pattern matching. Can be slow - use indexes when possible. Useful for: partial matches, pattern searches.' },
        { id: 'q30', title: 'What is cursor?', content: 'Cursor is pointer to query results. find() returns cursor. Iterate with: .forEach(), .toArray(), .next(). Handles large result sets efficiently. Lazy evaluation. Can be closed. Memory efficient.' }
      ]
    },
    {
      id: 'indexing',
      title: 'Indexing and Performance',
      content: '',
      subsections: [
        { id: 'q31', title: 'What is an index?', content: 'Index improves query performance. Creates data structure for fast lookups. Types: single field, compound, text, geospatial, hashed. Speeds up queries. Slows down writes. Balance based on use case.' },
        { id: 'q32', title: 'What is createIndex()?', content: 'createIndex() creates index. Syntax: db.collection.createIndex({field: 1}). Options: unique, sparse, TTL, partial. Can create compound indexes. Improves query speed. Monitor index usage.' },
        { id: 'q33', title: 'What is compound index?', content: 'Compound index indexes multiple fields. Syntax: db.collection.createIndex({field1: 1, field2: -1}). Order matters (left-prefix rule). Efficient for multi-field queries. Can\'t use all fields in any order.' },
        { id: 'q34', title: 'What is explain()?', content: 'explain() shows query execution plan. Syntax: db.collection.find().explain(). Shows: indexes used, execution time, documents examined. Helps optimize queries. Identify slow queries. Essential for performance tuning.' },
        { id: 'q35', title: 'What is query optimization?', content: 'Optimization improves query performance. Techniques: use indexes, limit results, use projection, avoid large sorts, use covered queries, analyze explain(). Profile slow queries. Measure improvements.' },
        { id: 'q36', title: 'What is covered query?', content: 'Covered query uses only index, no documents. All fields in query and projection are indexed. Very fast. No document reads. Ideal performance. Design indexes for covered queries when possible.' },
        { id: 'q37', title: 'What is index intersection?', content: 'Index intersection uses multiple indexes. MongoDB can combine indexes. Not always optimal. Prefer compound index. May use multiple single-field indexes. Check explain() to verify.' },
        { id: 'q38', title: 'What is index selectivity?', content: 'Selectivity is uniqueness of index values. High selectivity: many unique values. Low selectivity: few unique values. High selectivity indexes are more useful. Consider when creating indexes.' },
        { id: 'q39', title: 'What is query profiling?', content: 'Query profiling logs slow operations. db.setProfilingLevel(level). Levels: 0 (off), 1 (slow), 2 (all). Analyze slow queries. Identify bottlenecks. Use for optimization. Monitor production carefully.' },
        { id: 'q40', title: 'What are performance best practices?', content: 'Best practices: use indexes appropriately, limit results, use projection, avoid large documents, use appropriate data types, monitor performance, optimize queries, use connection pooling, consider sharding for scale, regular maintenance.' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced MongoDB',
      content: '',
      subsections: [
        { id: 'q41', title: 'What is replication?', content: 'Replication creates copies of data. Replica set: primary (writes) and secondaries (reads). High availability. Automatic failover. Data redundancy. Read scaling. Configure replica sets for production.' },
        { id: 'q42', title: 'What is sharding?', content: 'Sharding partitions data across servers. Horizontal scaling. Shard key determines distribution. Components: shards, mongos (router), config servers. Enables massive scale. Complex to manage. Use when single server insufficient.' },
        { id: 'q43', title: 'What is transactions?', content: 'Transactions ensure ACID properties. Multi-document transactions. Start with startSession(). Commit or abort. Requires replica set. Ensures data consistency. Use for: financial operations, critical updates.' },
        { id: 'q44', title: 'What is change streams?', content: 'Change streams watch for data changes. Real-time notifications. Syntax: db.collection.watch(). Returns change events. Useful for: real-time applications, event-driven systems, replication. Similar to database triggers.' },
        { id: 'q45', title: 'What is GridFS?', content: 'GridFS stores large files. Splits files into chunks. Stores in two collections: chunks and files. Handles files > 16MB. Useful for: media files, large documents. Alternative to file system.' },
        { id: 'q46', title: 'What is MongoDB Atlas?', content: 'MongoDB Atlas is managed cloud service. Features: automatic backups, scaling, monitoring, security, global clusters. Simplifies operations. Pay-as-you-go. Popular for production. Reduces operational overhead.' },
        { id: 'q47', title: 'What is Mongoose?', content: 'Mongoose is MongoDB ODM for Node.js. Provides schema, validation, middleware. Models represent collections. Simplifies MongoDB usage. Type safety. Useful for Node.js applications. Popular library.' },
        { id: 'q48', title: 'What is schema design?', content: 'Schema design organizes data structure. Considerations: embedding vs referencing, one-to-many, many-to-many. Embedding: fast reads, limited size. Referencing: flexible, requires joins. Choose based on access patterns.' },
        { id: 'q49', title: 'What is data modeling?', content: 'Data modeling designs document structure. Patterns: embedded documents, references, arrays. Consider: query patterns, relationships, growth. No fixed rules - flexible. Optimize for reads or writes. Iterate based on needs.' },
        { id: 'q50', title: 'What are MongoDB best practices?', content: 'Best practices: design schema for queries, use indexes, limit document size, use appropriate data types, implement replication, monitor performance, secure database, regular backups, use connection pooling, optimize queries, handle errors, use transactions when needed, keep drivers updated.' }
      ]
    }
  ]
};
