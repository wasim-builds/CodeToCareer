import { TheoryTopic } from '@/types/theory';

export const systemDesignTheory: TheoryTopic = {
  topicId: 'system-design',
  topicName: 'System Design',
  category: 'Core Concepts',
  description: 'System architecture and design principles',
  sections: [
    {
      id: 'fundamentals',
      title: 'System Design Fundamentals',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is system design?', content: 'System design is process of defining architecture, components, modules, interfaces, and data for a system. Involves: requirements analysis, scalability planning, reliability, performance, security. Balances trade-offs. Critical for large-scale systems. Interview topic for senior engineers.' },
        { id: 'q2', title: 'What are system design principles?', content: 'Principles: scalability (handle growth), reliability (fault tolerance), availability (uptime), performance (speed), maintainability (easy to modify), security (protect data), cost-effectiveness. Balance these based on requirements. No perfect system - trade-offs always exist.' },
        { id: 'q3', title: 'What is scalability?', content: 'Scalability is system\'s ability to handle increased load. Types: vertical (scale up - bigger server), horizontal (scale out - more servers). Horizontal is preferred. Design for scale from start. Consider: stateless design, load balancing, database scaling, caching.' },
        { id: 'q4', title: 'What is availability?', content: 'Availability is percentage of time system is operational. Measured as uptime (99.9% = 8.76 hours downtime/year). High availability: 99.99% (52.6 min/year). Achieved through: redundancy, failover, monitoring, health checks. SLA defines availability requirements.' },
        { id: 'q5', title: 'What is reliability?', content: 'Reliability is system\'s ability to function correctly under failures. Fault tolerance: system continues operating despite failures. Techniques: redundancy, replication, error handling, graceful degradation. Design for failure - failures are inevitable. Test failure scenarios.' },
        { id: 'q6', title: 'What is performance?', content: 'Performance measures system speed and efficiency. Metrics: latency (response time), throughput (requests/second), resource utilization. Optimize: algorithms, caching, database queries, network, code. Profile to find bottlenecks. Set performance targets (p50, p95, p99).' },
        { id: 'q7', title: 'What is consistency?', content: 'Consistency ensures all nodes see same data. Types: strong (all reads see latest write), eventual (converges over time), weak (no guarantees). CAP theorem: can\'t have all three (Consistency, Availability, Partition tolerance). Choose based on use case.' },
        { id: 'q8', title: 'What is CAP theorem?', content: 'CAP theorem: distributed system can guarantee only two of three: Consistency (all nodes see same data), Availability (every request gets response), Partition tolerance (system works despite network failures). Must choose which to sacrifice. Most choose AP or CP.' },
        { id: 'q9', title: 'What is load balancing?', content: 'Load balancing distributes traffic across multiple servers. Types: round-robin, least connections, IP hash, weighted. Benefits: high availability, scalability, performance. Can be: hardware (F5), software (NGINX, HAProxy), cloud (AWS ELB). Health checks remove unhealthy servers.' },
        { id: 'q10', title: 'What is caching?', content: 'Caching stores frequently accessed data in fast storage. Reduces database load, improves latency. Levels: browser, CDN, application, database. Strategies: write-through, write-back, cache-aside. Eviction: LRU, LFU, TTL. Invalidate on updates. Critical for performance.' }
      ]
    },
    {
      id: 'architecture',
      title: 'System Architecture',
      content: '',
      subsections: [
        { id: 'q11', title: 'What is monolithic architecture?', content: 'Monolithic: single deployable unit. All components in one codebase. Simple to develop/deploy initially. Becomes complex at scale. Hard to scale individual components. All-or-nothing deployment. Good for: small teams, simple systems, rapid prototyping.' },
        { id: 'q12', title: 'What is microservices architecture?', content: 'Microservices: system as collection of small, independent services. Each service: own database, deployable independently, communicates via APIs. Benefits: scalability, technology diversity, fault isolation. Challenges: complexity, network latency, data consistency, deployment.' },
        { id: 'q13', title: 'What is service-oriented architecture?', content: 'SOA: services communicate over network. Services are reusable, loosely coupled. Enterprise pattern. More heavyweight than microservices. Uses ESB (Enterprise Service Bus). Older pattern, microservices evolved from it. Good for enterprise integration.' },
        { id: 'q14', title: 'What is client-server architecture?', content: 'Client-server: clients request, servers respond. Two-tier: client and server. Three-tier: client, application server, database. N-tier: multiple layers. Separation of concerns. Scalable. Foundation of web applications.' },
        { id: 'q15', title: 'What is event-driven architecture?', content: 'Event-driven: components communicate via events. Producers emit events, consumers react. Decoupled components. Scalable. Patterns: pub/sub, event streaming. Technologies: Kafka, RabbitMQ, SNS. Good for: real-time systems, microservices communication.' },
        { id: 'q16', title: 'What is database sharding?', content: 'Sharding partitions database across multiple servers. Horizontal partitioning by key (user_id, region). Benefits: scalability, performance. Challenges: cross-shard queries, rebalancing, complexity. Strategies: range-based, hash-based, directory-based. Critical for large databases.' },
        { id: 'q17', title: 'What is database replication?', content: 'Replication copies data to multiple servers. Types: master-slave (read scaling), master-master (write scaling, complex). Benefits: availability, read performance, backups. Challenges: consistency, lag. Use for: high availability, geographic distribution, read scaling.' },
        { id: 'q18', title: 'What is CDN?', content: 'CDN (Content Delivery Network) caches content at edge locations. Reduces latency, offloads origin server. Good for: static assets, media, global distribution. Providers: CloudFlare, AWS CloudFront, Akamai. Cache invalidation important. Improves user experience globally.' },
        { id: 'q19', title: 'What is message queue?', content: 'Message queue enables asynchronous communication. Producers send messages, consumers process. Benefits: decoupling, buffering, reliability. Patterns: point-to-point, pub/sub. Technologies: RabbitMQ, Kafka, SQS. Use for: async processing, event-driven systems, load leveling.' },
        { id: 'q20', title: 'What is API gateway?', content: 'API gateway is single entry point for clients. Functions: routing, authentication, rate limiting, logging, protocol translation. Benefits: centralization, security, monitoring. Examples: Kong, AWS API Gateway, Zuul. Common in microservices architecture.' }
      ]
    },
    {
      id: 'storage',
      title: 'Storage Systems',
      content: '',
      subsections: [
        { id: 'q21', title: 'What is SQL vs NoSQL?', content: 'SQL: relational, ACID, structured schema, complex queries, vertical scaling. NoSQL: non-relational, flexible schema, horizontal scaling, various models. Choose SQL for: transactions, complex queries, consistency. Choose NoSQL for: scale, flexibility, speed.' },
        { id: 'q22', title: 'What is ACID?', content: 'ACID guarantees for transactions: Atomicity (all or nothing), Consistency (valid state), Isolation (concurrent transactions don\'t interfere), Durability (committed changes persist). SQL databases provide ACID. Ensures data integrity. May limit performance.' },
        { id: 'q23', title: 'What is BASE?', content: 'BASE: Basically Available, Soft state, Eventual consistency. NoSQL philosophy. Trades consistency for availability. Eventually consistent: data converges over time. Acceptable for many use cases. Enables high availability and scale.' },
        { id: 'q24', title: 'What is database indexing?', content: 'Indexing creates data structure for fast lookups. Types: B-tree (default), hash, bitmap, full-text. Speeds up SELECT, WHERE, JOIN. Slows down INSERT/UPDATE/DELETE. Choose indexes on frequently queried columns. Monitor and optimize.' },
        { id: 'q25', title: 'What is object storage?', content: 'Object storage stores data as objects (not files/blocks). Scalable, durable. Good for: media files, backups, archives. Examples: S3, Azure Blob, Google Cloud Storage. REST API access. Pay for what you use. High durability.' },
        { id: 'q26', title: 'What is in-memory database?', content: 'In-memory database stores data in RAM. Very fast (microseconds). Examples: Redis, Memcached. Use for: caching, session storage, real-time analytics. Volatile (data lost on restart). Often combined with persistent storage.' },
        { id: 'q27', title: 'What is data warehouse?', content: 'Data warehouse stores historical data for analytics. OLAP (Online Analytical Processing). Optimized for reads, complex queries. Examples: Redshift, BigQuery, Snowflake. ETL processes load data. Used for business intelligence, reporting.' },
        { id: 'q28', title: 'What is data lake?', content: 'Data lake stores raw data in native format. Structured, semi-structured, unstructured. Schema-on-read (not schema-on-write). Examples: S3, Azure Data Lake. Flexible, scalable. Good for: big data, analytics, machine learning.' },
        { id: 'q29', title: 'What is backup and recovery?', content: 'Backup creates copies of data. Types: full, incremental, differential. Recovery restores from backup. RTO (Recovery Time Objective): max downtime. RPO (Recovery Point Objective): max data loss. Test recovery procedures. Critical for disaster recovery.' },
        { id: 'q30', title: 'What is data partitioning?', content: 'Partitioning divides data into smaller parts. Types: horizontal (rows), vertical (columns). Benefits: performance, manageability. Strategies: range, hash, list, composite. Used in: databases, file systems, distributed systems. Enables parallel processing.' }
      ]
    },
    {
      id: 'communication',
      title: 'Communication Protocols',
      content: '',
      subsections: [
        { id: 'q31', title: 'What is REST?', content: 'REST (Representational State Transfer) is architectural style. Principles: stateless, resource-based, HTTP methods, JSON data. RESTful APIs follow REST. Simple, widely adopted. Uses: GET (read), POST (create), PUT (update), DELETE (remove). Standard for web APIs.' },
        { id: 'q32', title: 'What is GraphQL?', content: 'GraphQL is query language for APIs. Single endpoint. Clients specify needed data. Reduces over/under-fetching. Strongly typed schema. Introspection. More complex than REST. Good for: mobile apps, complex data requirements. Trade-off: complexity vs flexibility.' },
        { id: 'q33', title: 'What is gRPC?', content: 'gRPC is RPC framework using HTTP/2 and Protocol Buffers. High performance, type-safe. Supports streaming. Language agnostic. Binary protocol (efficient). Good for: microservices, real-time systems. More complex than REST. Requires code generation.' },
        { id: 'q34', title: 'What is WebSocket?', content: 'WebSocket provides full-duplex communication over TCP. Persistent connection. Low latency. Real-time bidirectional communication. Use for: chat, gaming, live updates, notifications. More complex than HTTP. Requires connection management.' },
        { id: 'q35', title: 'What is HTTP/2?', content: 'HTTP/2 improves HTTP/1.1. Features: multiplexing (multiple requests on one connection), header compression, server push, binary protocol. Reduces latency. Backward compatible. Widely supported. Improves web performance.' },
        { id: 'q36', title: 'What is API versioning?', content: 'API versioning manages API changes. Methods: URL path (/v1/, /v2/), headers (Accept: application/vnd.api+json;version=1), query parameter (?version=1). Maintains backward compatibility. Allows gradual migration. Critical for API evolution.' },
        { id: 'q37', title: 'What is rate limiting?', content: 'Rate limiting restricts request frequency. Prevents abuse, ensures fairness. Algorithms: token bucket, leaky bucket, fixed window, sliding window. Implement at: API gateway, application, per-user. Return 429 Too Many Requests. Essential for API protection.' },
        { id: 'q38', title: 'What is API authentication?', content: 'Authentication verifies user identity. Methods: API keys, OAuth 2.0, JWT tokens, Basic Auth. OAuth 2.0: authorization framework, access tokens. JWT: stateless tokens, self-contained. Choose based on: security needs, use case, complexity.' },
        { id: 'q39', title: 'What is API documentation?', content: 'API documentation describes API usage. Includes: endpoints, parameters, responses, examples, authentication. Tools: Swagger/OpenAPI, Postman, API Blueprint. Good documentation: clear, complete, with examples. Critical for API adoption.' },
        { id: 'q40', title: 'What is service mesh?', content: 'Service mesh handles service-to-service communication. Features: load balancing, service discovery, security, observability. Sidecar pattern. Examples: Istio, Linkerd, Consul. Reduces application complexity. Adds infrastructure complexity. Good for microservices.' }
      ]
    },
    {
      id: 'scalability',
      title: 'Scalability Patterns',
      content: '',
      subsections: [
        { id: 'q41', title: 'What is horizontal vs vertical scaling?', content: 'Vertical scaling: add resources to existing server (CPU, RAM). Limited by hardware. Simpler but expensive. Horizontal scaling: add more servers. More complex but cost-effective. Preferred for cloud. Design for horizontal scaling from start.' },
        { id: 'q42', title: 'What is stateless design?', content: 'Stateless design: servers don\'t store client state. Each request contains all needed information. Enables horizontal scaling, load balancing. Store state in: database, cache, client. Required for auto-scaling. Simplifies architecture.' },
        { id: 'q43', title: 'What is database connection pooling?', content: 'Connection pooling reuses database connections. Reduces connection overhead. Improves performance. Manages connection lifecycle. Prevents connection exhaustion. Configure pool size. Balance: connections vs resources. Essential for production.' },
        { id: 'q44', title: 'What is caching strategy?', content: 'Caching strategies: cache-aside (app manages), write-through (write to cache and DB), write-back (write to cache, async to DB), refresh-ahead (prefetch). Choose based on: read/write ratio, consistency needs, failure tolerance. Invalidate appropriately.' },
        { id: 'q45', title: 'What is database read replica?', content: 'Read replica is copy of database for reads. Master handles writes, replicas handle reads. Improves read performance, offloads master. Eventual consistency (replication lag). Use for: read-heavy workloads, geographic distribution. Common pattern.' },
        { id: 'q46', title: 'What is circuit breaker pattern?', content: 'Circuit breaker prevents cascading failures. States: closed (normal), open (failing, reject requests), half-open (testing). Fails fast when service is down. Prevents resource exhaustion. Examples: Hystrix, Resilience4j. Critical for microservices.' },
        { id: 'q47', title: 'What is bulkhead pattern?', content: 'Bulkhead isolates resources to prevent total failure. Like ship bulkheads. Isolate: thread pools, connections, resources. Failure in one area doesn\'t affect others. Improves resilience. Use for: critical vs non-critical operations.' },
        { id: 'q48', title: 'What is database partitioning?', content: 'Partitioning divides table into smaller parts. Types: range, hash, list. Benefits: performance, manageability. Enables parallel processing. Challenges: cross-partition queries, rebalancing. Used in: large tables, distributed databases.' },
        { id: 'q49', title: 'What is eventual consistency?', content: 'Eventual consistency: system becomes consistent over time. No immediate consistency guarantee. Acceptable for many use cases. Enables: high availability, scale, performance. Use when: strong consistency not required, can handle temporary inconsistency.' },
        { id: 'q50', title: 'What are system design trade-offs?', content: 'Trade-offs always exist: consistency vs availability, latency vs throughput, cost vs performance, simplicity vs features, speed vs correctness. Understand requirements. Make informed decisions. Document trade-offs. Revisit as requirements change. No perfect solution.' }
      ]
    }
  ]
};
