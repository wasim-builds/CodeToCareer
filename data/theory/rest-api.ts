import { TheoryTopic } from '@/types/theory';

export const restApiTheory: TheoryTopic = {
  topicId: 'rest-api',
  topicName: 'REST API',
  category: 'Full Stack',
  description: 'RESTful API design and implementation',
  sections: [
    {
      id: 'fundamentals',
      title: 'REST Fundamentals',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is REST?', content: 'REST (Representational State Transfer) is architectural style for web services. Principles: stateless, resource-based, HTTP methods, uniform interface. RESTful APIs follow REST. Simple, widely adopted. Standard for web APIs.' },
        { id: 'q2', title: 'What are REST principles?', content: 'REST principles: stateless (no client state on server), resource-based (everything is resource), uniform interface (standard HTTP), cacheable, layered system, code on demand. Follow these for RESTful design.' },
        { id: 'q3', title: 'What is resource?', content: 'Resource is any entity that can be identified. Represented by URI. Examples: /users, /users/123, /orders. Nouns, not verbs. Hierarchical structure. Foundation of REST.' },
        { id: 'q4', title: 'What is URI vs URL?', content: 'URI (Uniform Resource Identifier) identifies resource. URL (Uniform Resource Locator) is type of URI that also provides location. In REST, use URIs to identify resources. URLs are URIs with location.' },
        { id: 'q5', title: 'What are HTTP methods?', content: 'HTTP methods: GET (read), POST (create), PUT (update/replace), PATCH (partial update), DELETE (remove), HEAD (headers only), OPTIONS (allowed methods). Map to CRUD operations. Standard REST usage.' },
        { id: 'q6', title: 'What is idempotent?', content: 'Idempotent: multiple identical requests have same effect. Methods: GET, PUT, DELETE, HEAD, OPTIONS. POST is not idempotent. Important for: retries, reliability. Safe methods are idempotent.' },
        { id: 'q7', title: 'What is safe method?', content: 'Safe method doesn\'t modify server state. Methods: GET, HEAD, OPTIONS. Can be called repeatedly. No side effects. Cacheable. Important property. Distinguishes read from write.' },
        { id: 'q8', title: 'What is stateless?', content: 'Stateless: server doesn\'t store client state. Each request contains all needed information. Enables: scalability, load balancing, caching. Client manages state. Session state in client or token.' },
        { id: 'q9', title: 'What is uniform interface?', content: 'Uniform interface: standard way to interact. HTTP methods, status codes, content types. Consistent across resources. Simplifies clients. Predictable behavior. Key REST principle.' },
        { id: 'q10', title: 'What is HATEOAS?', content: 'HATEOAS (Hypermedia as the Engine of Application State) includes links in responses. Client discovers actions from responses. Self-describing API. Advanced REST. Not always implemented. Increases complexity.' }
      ]
    },
    {
      id: 'design',
      title: 'API Design',
      content: '',
      subsections: [
        { id: 'q11', title: 'What is RESTful URL design?', content: 'RESTful URLs: use nouns, hierarchical, lowercase, hyphens not underscores, no file extensions, version in path or header. Examples: /api/v1/users, /users/123/orders. Clear and consistent. Important for usability.' },
        { id: 'q12', title: 'What is resource naming?', content: 'Resource naming: use nouns (not verbs), plural for collections, consistent naming, clear hierarchy. Examples: /users, /users/123, /users/123/orders. Avoid: /getUsers, /createUser. Follow conventions.' },
        { id: 'q13', title: 'What is HTTP status codes?', content: 'Status codes indicate result. 2xx (success), 3xx (redirect), 4xx (client error), 5xx (server error). Common: 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Internal Server Error. Use appropriately.' },
        { id: 'q14', title: 'What is request/response format?', content: 'Request/response format: typically JSON. Content-Type: application/json. Accept header specifies desired format. Consistent structure. Error responses in same format. Standard practice.' },
        { id: 'q15', title: 'What is pagination?', content: 'Pagination limits large result sets. Methods: offset/limit (?page=1&limit=10), cursor-based. Prevents large responses. Improves performance. Common in list endpoints. Essential for large datasets.' },
        { id: 'q16', title: 'What is filtering?', content: 'Filtering narrows results. Query parameters: ?status=active&category=tech. Flexible filtering. Common pattern. Client specifies filters. Reduces data transfer. Improves performance.' },
        { id: 'q17', title: 'What is sorting?', content: 'Sorting orders results. Query parameter: ?sort=name or ?sort=-created (descending). Multiple fields: ?sort=name,created. Client-controlled. Flexible ordering. Common feature.' },
        { id: 'q18', title: 'What is field selection?', content: 'Field selection returns only requested fields. Query parameter: ?fields=id,name,email. Reduces payload. Improves performance. Client controls. Useful for mobile apps. Optional feature.' },
        { id: 'q19', title: 'What is API versioning?', content: 'API versioning manages changes. Methods: URL path (/v1/, /v2/), headers (Accept: application/vnd.api+json;version=1), query parameter (?version=1). Maintains compatibility. Allows evolution. Critical for APIs.' },
        { id: 'q20', title: 'What is content negotiation?', content: 'Content negotiation: client specifies format. Accept header: application/json, application/xml. Server responds in requested format. Multiple formats supported. Flexible clients. Advanced feature.' }
      ]
    },
    {
      id: 'operations',
      title: 'CRUD Operations',
      content: '',
      subsections: [
        { id: 'q21', title: 'What is GET request?', content: 'GET retrieves resource. Idempotent and safe. Returns resource representation. Use for: reading data. Status: 200 OK, 404 Not Found. Can include query parameters. Most common operation.' },
        { id: 'q22', title: 'What is POST request?', content: 'POST creates resource. Not idempotent. Request body contains data. Returns: 201 Created with Location header, or 200 OK. Creates new resource. Use for: creation, actions.' },
        { id: 'q23', title: 'What is PUT request?', content: 'PUT updates/replaces resource. Idempotent. Request body contains full resource. Creates if not exists. Returns: 200 OK or 201 Created. Full replacement. Use for: updates, idempotent creation.' },
        { id: 'q24', title: 'What is PATCH request?', content: 'PATCH partially updates resource. Idempotent (should be). Request body contains changes only. Returns: 200 OK. Partial update. More efficient than PUT. Use for: partial modifications.' },
        { id: 'q25', title: 'What is DELETE request?', content: 'DELETE removes resource. Idempotent. No request body typically. Returns: 200 OK or 204 No Content. Removes resource. Safe to retry. Use for: deletion.' },
        { id: 'q26', title: 'What is nested resources?', content: 'Nested resources show relationships. Example: /users/123/orders. Represents user\'s orders. Hierarchical structure. Clear relationships. Use when: strong relationship, logical hierarchy.' },
        { id: 'q27', title: 'What is bulk operations?', content: 'Bulk operations handle multiple resources. POST /users/bulk for multiple creates. Request body: array of resources. Efficient for multiple operations. Reduces requests. Use when appropriate.' },
        { id: 'q28', title: 'What is batch requests?', content: 'Batch requests combine multiple operations. Single request, multiple operations. Reduces round trips. Complex to implement. Not standard REST. Consider alternatives: GraphQL, parallel requests.' },
        { id: 'q29', title: 'What is async operations?', content: 'Async operations for long-running tasks. Return: 202 Accepted with job ID. Poll for status. Or webhooks for completion. Use for: processing, background jobs. Prevents timeouts.' },
        { id: 'q30', title: 'What is idempotency keys?', content: 'Idempotency keys ensure idempotent operations. Client sends unique key. Server processes once. Retries safe. Use for: POST, payments, critical operations. Prevents duplicates.' }
      ]
    },
    {
      id: 'security',
      title: 'Security',
      content: '',
      subsections: [
        { id: 'q31', title: 'What is API authentication?', content: 'Authentication verifies identity. Methods: API keys, OAuth 2.0, JWT tokens, Basic Auth. Required for protected endpoints. Verify on each request. Essential for security.' },
        { id: 'q32', title: 'What is API authorization?', content: 'Authorization controls access. After authentication. Check permissions. Role-based access. Resource-level permissions. Protect endpoints. Different from authentication.' },
        { id: 'q33', title: 'What is OAuth 2.0?', content: 'OAuth 2.0 is authorization framework. Flows: authorization code, client credentials, implicit, password. Access tokens. Refresh tokens. Industry standard. Complex but secure. Use for third-party access.' },
        { id: 'q34', title: 'What is JWT?', content: 'JWT (JSON Web Token) is stateless token. Contains: header, payload, signature. Self-contained. Stateless authentication. Verify with secret/key. Store in: headers, cookies. Popular for APIs.' },
        { id: 'q35', title: 'What is API key?', content: 'API key identifies client. Simple authentication. Include in: headers, query params (less secure). Rotate regularly. Different from OAuth. Use for: server-to-server, simple cases.' },
        { id: 'q36', title: 'What is rate limiting?', content: 'Rate limiting restricts request frequency. Prevents abuse. Methods: token bucket, fixed window, sliding window. Return 429 Too Many Requests. Per: IP, user, API key. Essential for APIs.' },
        { id: 'q37', title: 'What is CORS?', content: 'CORS (Cross-Origin Resource Sharing) enables cross-origin requests. Configure: allowed origins, methods, headers. Security consideration. Browser enforcement. Required for web apps. Configure properly.' },
        { id: 'q38', title: 'What is input validation?', content: 'Input validation checks request data. Validate: type, format, range, required. Prevent: injection attacks, bad data. Server-side validation. Return 400 for invalid. Security and integrity.' },
        { id: 'q39', title: 'What is HTTPS?', content: 'HTTPS encrypts communication. TLS/SSL encryption. Required for production. Protects data in transit. Prevents: man-in-the-middle, eavesdropping. Use certificates. Essential for security.' },
        { id: 'q40', title: 'What is API security best practices?', content: 'Security practices: use HTTPS, authenticate requests, validate input, rate limiting, least privilege, secure headers, log security events, keep updated, monitor, handle errors safely, don\'t expose internals, use parameterized queries.' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced Topics',
      content: '',
      subsections: [
        { id: 'q41', title: 'What is API documentation?', content: 'API documentation describes API. Tools: Swagger/OpenAPI, Postman, API Blueprint. Includes: endpoints, parameters, responses, examples, authentication. Critical for adoption. Keep updated. Clear and complete.' },
        { id: 'q42', title: 'What is OpenAPI/Swagger?', content: 'OpenAPI (formerly Swagger) is API specification format. YAML/JSON format. Describes API structure. Generates: documentation, client SDKs, server stubs. Industry standard. Tool ecosystem. Recommended.' },
        { id: 'q43', title: 'What is GraphQL vs REST?', content: 'GraphQL: single endpoint, client specifies data, reduces over/under-fetching, more complex. REST: multiple endpoints, fixed responses, simpler, standard. Choose based on: complexity, team, requirements.' },
        { id: 'q44', title: 'What is gRPC?', content: 'gRPC is RPC framework. HTTP/2, Protocol Buffers. High performance. Type-safe. Streaming support. Binary protocol. More complex than REST. Good for: microservices, performance-critical.' },
        { id: 'q45', title: 'What is webhooks?', content: 'Webhooks are reverse API calls. Server calls client URL. Event-driven. Client provides URL. Server notifies on events. Use for: notifications, integrations. Alternative to polling.' },
        { id: 'q46', title: 'What is API gateway?', content: 'API gateway is single entry point. Functions: routing, authentication, rate limiting, logging, protocol translation. Centralizes concerns. Examples: Kong, AWS API Gateway. Common in microservices.' },
        { id: 'q47', title: 'What is API testing?', content: 'API testing verifies API functionality. Tools: Postman, REST Assured, pytest. Test: endpoints, status codes, responses, errors, performance. Automated testing. Essential for quality.' },
        { id: 'q48', title: 'What is API monitoring?', content: 'API monitoring tracks API health. Metrics: response time, error rate, throughput, availability. Alerts on issues. Tools: APM, logging services. Essential for production. Proactive management.' },
        { id: 'q49', title: 'What is API versioning strategy?', content: 'Versioning strategy: when to version, how to version, deprecation policy, migration path. Major changes require versioning. Maintain old versions. Communicate changes. Plan deprecation.' },
        { id: 'q50', title: 'What are REST API best practices?', content: 'Best practices: follow REST principles, use proper HTTP methods, meaningful URLs, appropriate status codes, consistent responses, version APIs, document thoroughly, secure properly, handle errors, paginate large results, cache appropriately, test thoroughly, monitor performance.' }
      ]
    }
  ]
};
