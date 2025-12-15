import { TheoryTopic } from '@/types/theory';

export const nodejsTheory: TheoryTopic = {
  topicId: 'nodejs',
  topicName: 'Node.js',
  category: 'Full Stack',
  description: 'Node.js runtime and server-side JavaScript',
  sections: [
    {
      id: 'basics',
      title: 'Node.js Basics',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is Node.js?', content: 'Node.js is JavaScript runtime built on Chrome\'s V8 engine. Enables JavaScript on server-side. Event-driven, non-blocking I/O. Single-threaded with event loop. Package ecosystem via npm. Used for: web servers, APIs, real-time applications, microservices, CLI tools. Popular for full-stack JavaScript development.' },
        { id: 'q2', title: 'What is npm?', content: 'npm (Node Package Manager) is package manager for Node.js. Largest software registry. Commands: npm install (add packages), npm init (create package.json), npm start (run scripts), npm publish (publish packages). Manages dependencies. package.json defines project metadata and dependencies.' },
        { id: 'q3', title: 'What is package.json?', content: 'package.json is project configuration file. Contains: name, version, dependencies, scripts, metadata. Defines project dependencies (dependencies and devDependencies). Scripts section defines runnable commands. Required for Node.js projects. Used by npm for package management.' },
        { id: 'q4', title: 'What is the event loop?', content: 'Event loop enables Node.js non-blocking I/O. Single-threaded but handles concurrency. Phases: timers, pending callbacks, idle/prepare, poll, check, close callbacks. Processes callbacks from queue. Enables handling thousands of connections. Key to Node.js performance.' },
        { id: 'q5', title: 'What is callback?', content: 'Callback is function passed as argument, executed after async operation completes. Node.js uses callbacks for async operations. Pattern: function(err, data). First parameter is error (Node.js convention). Callback hell: nested callbacks become hard to read. Promises/async-await solve this.' },
        { id: 'q6', title: 'What is require()?', content: 'require() loads modules in Node.js. CommonJS module system. Syntax: const module = require("./module"). Loads: built-in modules, local files, node_modules packages. Returns module.exports. Cached after first load. Synchronous operation. Use for importing modules.' },
        { id: 'q7', title: 'What is module.exports?', content: 'module.exports defines what module exports. CommonJS pattern. Can export: functions, objects, primitives. Syntax: module.exports = value or module.exports.property = value. Alternative: exports.property (shorthand). Imported via require(). Enables code modularity.' },
        { id: 'q8', title: 'What is global object?', content: 'global is Node.js global object (like window in browser). Contains: process, Buffer, console, setTimeout, setInterval, etc. Variables declared without var/let/const become global (bad practice). Use module.exports instead. Avoid polluting global scope.' },
        { id: 'q9', title: 'What is process object?', content: 'process provides information about Node.js process. Properties: process.env (environment variables), process.argv (command-line arguments), process.cwd() (current directory), process.exit() (exit process). Methods for process control. Access to system information.' },
        { id: 'q10', title: 'What is Buffer?', content: 'Buffer handles binary data in Node.js. Fixed-size memory allocation. Created with Buffer.alloc(), Buffer.from(). Methods: toString(), slice(), copy(). Used for: file I/O, network operations, crypto. Replaced by TypedArray in modern code. Essential for binary data handling.' }
      ]
    },
    {
      id: 'async',
      title: 'Asynchronous Programming',
      content: '',
      subsections: [
        { id: 'q11', title: 'What is asynchronous programming?', content: 'Asynchronous programming doesn\'t block execution. Operations run in background. Callbacks, Promises, async/await handle async code. Enables handling multiple operations concurrently. Key to Node.js performance. Non-blocking I/O operations.' },
        { id: 'q12', title: 'What are Promises in Node.js?', content: 'Promises represent eventual async operation result. States: pending, fulfilled, rejected. Methods: then(), catch(), finally(). Avoids callback hell. Chainable. Use with async operations. Native Promise support in Node.js. Better error handling than callbacks.' },
        { id: 'q13', title: 'What is async/await?', content: 'async/await provides synchronous-looking async code. async function returns Promise. await pauses until Promise resolves. try/catch handles errors. More readable than Promise chains. Can only use await in async functions. Modern approach to async programming.' },
        { id: 'q14', title: 'What is callback hell?', content: 'Callback hell is deeply nested callbacks. Hard to read and maintain. Occurs with multiple async operations. Solutions: Promises, async/await, control flow libraries. Flatten callback structure. Use named functions. Modern approaches avoid callback hell.' },
        { id: 'q15', title: 'What is error-first callback?', content: 'Error-first callback is Node.js convention. First parameter is error (null if success). Second parameter is data. Pattern: function(err, data). Enables consistent error handling. Used throughout Node.js APIs. Check error before using data.' },
        { id: 'q16', title: 'What is setImmediate()?', content: 'setImmediate() executes callback in next event loop iteration. Similar to setTimeout(fn, 0) but more efficient. Executes after current phase completes. Use for deferring execution. Part of event loop timing functions.' },
        { id: 'q17', title: 'What is process.nextTick()?', content: 'process.nextTick() executes callback before event loop continues. Higher priority than setImmediate(). Can cause infinite loops if misused. Use for: ensuring callback runs before other code, breaking up long operations. Be careful with recursion.' },
        { id: 'q18', title: 'What is EventEmitter?', content: 'EventEmitter enables event-driven programming. Many Node.js classes extend EventEmitter. Methods: on() (listen), emit() (trigger), once() (listen once), removeListener(). Custom events. Observer pattern. Used for: streams, HTTP server, custom event systems.' },
        { id: 'q19', title: 'What is stream?', content: 'Stream handles data in chunks. Types: Readable, Writable, Duplex, Transform. Benefits: memory efficient, can process large data, composable. Methods: pipe() (chain streams), on("data"), on("end"). Used for: file I/O, HTTP requests, data processing. Backpressure handling.' },
        { id: 'q20', title: 'What is pipe()?', content: 'pipe() chains streams together. Syntax: readable.pipe(writable). Automatically handles backpressure. Returns destination stream (chainable). Common pattern: fs.createReadStream().pipe(res). Efficient data flow. Used extensively in Node.js.' }
      ]
    },
    {
      id: 'modules',
      title: 'Modules and File System',
      content: '',
      subsections: [
        { id: 'q21', title: 'What is fs module?', content: 'fs (file system) module handles file operations. Methods: readFile(), writeFile(), readFileSync(), writeFileSync(), mkdir(), unlink(), stat(). Async and sync versions. Use async for non-blocking. Handles: reading/writing files, directories, file metadata. Essential for file operations.' },
        { id: 'q22', title: 'What is path module?', content: 'path module handles file/directory paths. Methods: join() (combine paths), resolve() (absolute path), dirname() (directory), basename() (filename), extname() (extension). Cross-platform path handling. Avoids path separator issues. Use for path manipulation.' },
        { id: 'q23', title: 'What is http module?', content: 'http module creates HTTP server/client. createServer() creates server. Methods: listen() (start server), req (request object), res (response object). Handles HTTP requests. Lower-level than Express. Used by frameworks. Understand for advanced usage.' },
        { id: 'q24', title: 'What is url module?', content: 'url module parses URLs. Methods: parse() (parse URL), format() (create URL), resolve() (resolve relative URL). Returns URL object with: protocol, host, pathname, query, etc. Useful for routing and URL manipulation. Modern: use URL constructor.' },
        { id: 'q25', title: 'What is querystring module?', content: 'querystring module parses/stringifies query strings. Methods: parse() (parse query string), stringify() (create query string). Converts between object and query string format. Used with URL parsing. Useful for handling query parameters.' },
        { id: 'q26', title: 'What is crypto module?', content: 'crypto module provides cryptographic functionality. Methods: createHash() (hashing), createCipher() (encryption), randomBytes() (random data), pbkdf2() (key derivation). Used for: password hashing, encryption, tokens, security. Essential for secure applications.' },
        { id: 'q27', title: 'What is os module?', content: 'os module provides operating system information. Methods: platform(), arch(), cpus(), totalmem(), freemem(), hostname(). Returns system information. Useful for: system monitoring, platform detection, resource information. Cross-platform information.' },
        { id: 'q28', title: 'What is util module?', content: 'util module provides utility functions. Methods: promisify() (convert callback to Promise), inherits() (inheritance), inspect() (object inspection), format() (string formatting). Helpful utilities. Commonly used functions.' },
        { id: 'q29', title: 'What is cluster module?', content: 'cluster module enables multi-core processing. Creates worker processes. Shares server ports. Improves performance on multi-core systems. Master process manages workers. Workers handle requests. Use for CPU-intensive applications. Load balancing.' },
        { id: 'q30', title: 'What is child_process?', content: 'child_process spawns child processes. Methods: spawn() (streaming), exec() (buffer output), execFile() (execute file), fork() (Node.js process). Enables running system commands. Can communicate with child. Use for: system commands, parallel processing.' }
      ]
    },
    {
      id: 'express',
      title: 'Express.js Basics',
      content: '',
      subsections: [
        { id: 'q31', title: 'What is Express.js?', content: 'Express is minimal web framework for Node.js. Simplifies HTTP server creation. Features: routing, middleware, templating, static files. Most popular Node.js framework. Minimal and flexible. Large ecosystem. Foundation for many frameworks.' },
        { id: 'q32', title: 'What is middleware?', content: 'Middleware functions execute during request-response cycle. Access: req, res, next. Can: modify req/res, end request, call next(). Order matters. Types: application-level, router-level, error-handling, built-in, third-party. Enables: logging, authentication, parsing, etc.' },
        { id: 'q33', title: 'What is routing?', content: 'Routing defines how app responds to requests. Methods: app.get(), app.post(), app.put(), app.delete(). Path patterns and parameters. Route handlers process requests. Can chain multiple handlers. Organize with Router. Foundation of web applications.' },
        { id: 'q34', title: 'What is req object?', content: 'req (request) contains request data. Properties: req.params (route parameters), req.query (query string), req.body (request body), req.headers (HTTP headers), req.cookies (cookies). Modified by middleware. Access request information. Essential for handling requests.' },
        { id: 'q35', title: 'What is res object?', content: 'res (response) sends response to client. Methods: res.send() (send response), res.json() (send JSON), res.status() (set status), res.redirect() (redirect), res.render() (render template). Controls HTTP response. End response with send/end/render.' },
        { id: 'q36', title: 'What is next()?', content: 'next() passes control to next middleware. Call next() to continue. next(err) passes error to error handler. Required in middleware. Enables middleware chain. Without next(), request hangs. Essential for middleware flow.' },
        { id: 'q37', title: 'What is body-parser?', content: 'body-parser parses request bodies. Handles: JSON, URL-encoded, text, raw. Middleware: app.use(bodyParser.json()). Makes req.body available. Now built into Express (express.json()). Essential for POST/PUT requests. Parse different content types.' },
        { id: 'q38', title: 'What is CORS?', content: 'CORS (Cross-Origin Resource Sharing) allows cross-origin requests. Browsers enforce same-origin policy. CORS middleware enables cross-origin access. Configure: origins, methods, headers. Security consideration. Use cors package. Configure appropriately for production.' },
        { id: 'q39', title: 'What is static file serving?', content: 'Static files are served directly (CSS, JS, images). Middleware: app.use(express.static("public")). Serves files from directory. No processing needed. Efficient for assets. Configure public directory. Common in web applications.' },
        { id: 'q40', title: 'What is error handling middleware?', content: 'Error handling middleware has 4 parameters: (err, req, res, next). Define after routes. Catches errors from routes/middleware. Can send error responses. Log errors appropriately. Don\'t expose sensitive information. Centralized error handling.' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced Node.js',
      content: '',
      subsections: [
        { id: 'q41', title: 'What is environment variables?', content: 'Environment variables configure applications. Access via process.env. Use .env file with dotenv package. Store: API keys, database URLs, configuration. Don\'t commit .env to git. Different values for dev/prod. Secure configuration management.' },
        { id: 'q42', title: 'What is RESTful API?', content: 'REST (Representational State Transfer) is architectural style. Principles: stateless, resource-based, HTTP methods (GET, POST, PUT, DELETE), JSON data. RESTful APIs follow REST principles. Common API design pattern. Used with Express routes.' },
        { id: 'q43', title: 'What is JWT?', content: 'JWT (JSON Web Token) is authentication token. Contains: header, payload, signature. Stateless authentication. Verify with secret/key. Store in: cookies, localStorage, headers. Use jsonwebtoken package. Secure token-based authentication.' },
        { id: 'q44', title: 'What is database connection?', content: 'Database connections use drivers/ORMs. Popular: mongoose (MongoDB), sequelize (SQL), pg (PostgreSQL). Connection pooling for performance. Handle connection errors. Close connections properly. Use environment variables for connection strings.' },
        { id: 'q45', title: 'What is testing in Node.js?', content: 'Testing frameworks: Jest, Mocha, Jasmine. Test types: unit, integration, e2e. Use assertions. Mock dependencies. Test async code properly. Aim for high coverage. Write tests before/with code. Essential for quality.' },
        { id: 'q46', title: 'What is logging?', content: 'Logging records application events. Libraries: Winston, Pino, Morgan. Levels: error, warn, info, debug. Log to: console, files, services. Structured logging (JSON). Don\'t log sensitive data. Useful for debugging and monitoring.' },
        { id: 'q47', title: 'What is process management?', content: 'Process managers keep Node.js running. Tools: PM2, Forever, nodemon (dev). Features: auto-restart, clustering, monitoring, logging. PM2 is popular. Handles crashes. Production deployment. Essential for production.' },
        { id: 'q48', title: 'What is security best practices?', content: 'Security practices: validate input, use parameterized queries, sanitize data, HTTPS, secure headers, rate limiting, authentication/authorization, keep dependencies updated, handle errors safely, log security events. Critical for production applications.' },
        { id: 'q49', title: 'What is performance optimization?', content: 'Optimization: use clustering, connection pooling, caching, compression, CDN, load balancing, async operations, avoid blocking, profile code, optimize database queries. Measure before optimizing. Identify bottlenecks. Production monitoring.' },
        { id: 'q50', title: 'What are Node.js best practices?', content: 'Best practices: use async/await, handle errors, use environment variables, structure code properly, use middleware, validate input, secure applications, log appropriately, test code, use process managers, monitor performance, keep dependencies updated, follow conventions, document code.' }
      ]
    }
  ]
};
