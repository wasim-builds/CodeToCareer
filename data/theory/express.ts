import { TheoryTopic } from '@/types/theory';

export const expressTheory: TheoryTopic = {
  topicId: 'express',
  topicName: 'Express.js',
  category: 'Full Stack',
  description: 'Express.js web application framework',
  sections: [
    {
      id: 'basics',
      title: 'Express Basics',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is Express.js?', content: 'Express is minimal, flexible Node.js web framework. Simplifies HTTP server creation. Features: routing, middleware, templating, static files. Most popular Node.js framework. Built on Node.js http module. Foundation for many applications.' },
        { id: 'q2', title: 'How to create Express app?', content: 'Create Express app: const express = require("express"); const app = express();. Install: npm install express. Basic server: app.listen(3000). Minimal setup. Start building routes immediately.' },
        { id: 'q3', title: 'What is app.listen()?', content: 'app.listen() starts HTTP server. Syntax: app.listen(port, callback). Listens on specified port. Callback runs when server starts. Returns server instance. Essential for running Express app.' },
        { id: 'q4', title: 'What is routing?', content: 'Routing defines how app responds to requests. Methods: app.get(), app.post(), app.put(), app.delete(), app.patch(). Path patterns and handlers. Foundation of web applications. Organize with Router.' },
        { id: 'q5', title: 'What is req object?', content: 'req (request) contains request data. Properties: req.params (route parameters), req.query (query string), req.body (request body), req.headers (HTTP headers), req.cookies (cookies). Modified by middleware. Access request information.' },
        { id: 'q6', title: 'What is res object?', content: 'res (response) sends response to client. Methods: res.send() (send response), res.json() (send JSON), res.status() (set status), res.redirect() (redirect), res.render() (render template). Controls HTTP response.' },
        { id: 'q7', title: 'What is middleware?', content: 'Middleware functions execute during request-response cycle. Access: req, res, next. Can: modify req/res, end request, call next(). Order matters. Types: application-level, router-level, error-handling, built-in, third-party.' },
        { id: 'q8', title: 'What is app.use()?', content: 'app.use() mounts middleware. Syntax: app.use(path, middleware). Applies to all routes if no path. Executes in order. Can mount at specific paths. Essential for middleware setup.' },
        { id: 'q9', title: 'What is next()?', content: 'next() passes control to next middleware. Call next() to continue. next(err) passes error to error handler. Required in middleware. Enables middleware chain. Without next(), request hangs.' },
        { id: 'q10', title: 'What is Router?', content: 'Router creates modular route handlers. const router = express.Router(). Define routes on router. Mount with app.use("/path", router). Organizes routes. Enables route modules. Better code organization.' }
      ]
    },
    {
      id: 'middleware',
      title: 'Middleware',
      content: '',
      subsections: [
        { id: 'q11', title: 'What is body-parser?', content: 'body-parser parses request bodies. Handles: JSON, URL-encoded, text, raw. Middleware: app.use(bodyParser.json()). Makes req.body available. Now built into Express: express.json(). Essential for POST/PUT requests.' },
        { id: 'q12', title: 'What is CORS middleware?', content: 'CORS enables cross-origin requests. Install: npm install cors. Use: app.use(cors()). Configure: origins, methods, headers. Security consideration. Use cors package. Configure appropriately for production.' },
        { id: 'q13', title: 'What is static file middleware?', content: 'Static files served directly (CSS, JS, images). Middleware: app.use(express.static("public")). Serves files from directory. No processing needed. Efficient for assets. Configure public directory.' },
        { id: 'q14', title: 'What is cookie-parser?', content: 'cookie-parser parses cookies. Install: npm install cookie-parser. Use: app.use(cookieParser()). Makes req.cookies available. Handles signed cookies. Useful for session management.' },
        { id: 'q15', title: 'What is morgan?', content: 'morgan is HTTP request logger. Install: npm install morgan. Use: app.use(morgan("combined")). Logs requests. Formats: combined, common, dev, short, tiny. Useful for debugging and monitoring.' },
        { id: 'q16', title: 'What is helmet?', content: 'helmet sets security HTTP headers. Install: npm install helmet. Use: app.use(helmet()). Protects against common vulnerabilities. Sets various security headers. Important for production. Easy security improvement.' },
        { id: 'q17', title: 'What is compression?', content: 'compression compresses responses. Install: npm install compression. Use: app.use(compression()). Reduces response size. Improves performance. Client handles decompression. Transparent to application code.' },
        { id: 'q18', title: 'What is error-handling middleware?', content: 'Error-handling middleware has 4 parameters: (err, req, res, next). Define after routes. Catches errors from routes/middleware. Can send error responses. Log errors appropriately. Centralized error handling.' },
        { id: 'q19', title: 'What is custom middleware?', content: 'Custom middleware is user-defined functions. Function signature: (req, res, next) => {}. Can modify req/res. Call next() to continue. Use for: logging, authentication, validation, custom logic. Reusable across routes.' },
        { id: 'q20', title: 'What is middleware order?', content: 'Middleware executes in order defined. Order matters. Define: error-handling last, specific routes before general, body-parser before routes. Careful ordering prevents bugs. Test middleware order.' }
      ]
    },
    {
      id: 'routing',
      title: 'Routing',
      content: '',
      subsections: [
        { id: 'q21', title: 'What are route parameters?', content: 'Route parameters capture URL segments. Syntax: app.get("/users/:id", handler). Access via req.params.id. Named parameters. Useful for: RESTful APIs, dynamic routes. Common pattern.' },
        { id: 'q22', title: 'What are query parameters?', content: 'Query parameters are URL query string. Syntax: ?key=value&key2=value2. Access via req.query. Object with key-value pairs. Use for: filtering, pagination, optional parameters. Common in APIs.' },
        { id: 'q23', title: 'What is route chaining?', content: 'Route chaining defines multiple handlers. Syntax: app.get("/path", handler1, handler2, handler3). Executes in order. Each can modify req/res. Call next() to continue. Useful for: validation, authentication, processing.' },
        { id: 'q24', title: 'What is app.all()?', content: 'app.all() matches all HTTP methods. Syntax: app.all("/path", handler). Useful for: middleware on all methods, catch-all routes. Less common than specific methods. Use when needed for all methods.' },
        { id: 'q25', title: 'What is route patterns?', content: 'Route patterns match URLs. Wildcards: * (matches anything), ? (optional), + (one or more). Examples: "/users/*", "/files/:id?" Useful for: flexible routing, catch-all. Pattern matching capabilities.' },
        { id: 'q26', title: 'What is route organization?', content: 'Route organization structures routes. Methods: separate files, Router modules, route handlers. Organize by: feature, resource, functionality. Improves maintainability. Common pattern: routes/ directory.' },
        { id: 'q27', title: 'What is RESTful routing?', content: 'RESTful routing follows REST principles. Resources as routes. Methods: GET (read), POST (create), PUT (update), DELETE (remove). Standard pattern. Example: GET /users, POST /users, GET /users/:id. Common API design.' },
        { id: 'q28', title: 'What is nested routing?', content: 'Nested routing creates route hierarchies. Use Router for nested routes. Mount routers. Example: /api/users, /api/posts. Organizes related routes. Common in APIs. Better structure.' },
        { id: 'q29', title: 'What is route middleware?', content: 'Route middleware applies to specific routes. Syntax: app.get("/path", middleware, handler). Can have multiple middleware. Applies only to that route. More specific than app.use(). Selective middleware application.' },
        { id: 'q30', title: 'What is 404 handling?', content: '404 handling catches unmatched routes. Define after all routes: app.use((req, res) => res.status(404).send("Not Found")). Catches all unmatched requests. Important for user experience. Custom 404 pages.' }
      ]
    },
    {
      id: 'templates',
      title: 'Templating and Views',
      content: '',
      subsections: [
        { id: 'q31', title: 'What is view engine?', content: 'View engine renders templates. Set: app.set("view engine", "ejs"). Popular: EJS, Pug, Handlebars. Renders server-side templates. Generates HTML. Useful for: server-rendered pages, dynamic content.' },
        { id: 'q32', title: 'What is res.render()?', content: 'res.render() renders template. Syntax: res.render("template", {data}). Renders view with data. Sends HTML response. Requires view engine. Passes data to template. Server-side rendering.' },
        { id: 'q33', title: 'What is EJS?', content: 'EJS (Embedded JavaScript) is templating engine. Install: npm install ejs. Syntax: <%= variable %>, <% code %>, <%- html %>. JavaScript in templates. Popular choice. Easy to learn.' },
        { id: 'q34', title: 'What is Pug?', content: 'Pug (formerly Jade) is templating engine. Whitespace-sensitive syntax. Install: npm install pug. Cleaner syntax. Less HTML. Different paradigm. Popular alternative.' },
        { id: 'q35', title: 'What is Handlebars?', content: 'Handlebars is templating engine. Mustache-compatible. Install: npm install express-handlebars. Syntax: {{variable}}, {{#if}}, {{#each}}. Logic-less templates. Popular choice. Good separation of concerns.' },
        { id: 'q36', title: 'What is partials?', content: 'Partials are reusable template components. Include in templates. DRY principle. Common: headers, footers, navigation. Reduces duplication. Maintainable templates. Supported by most engines.' },
        { id: 'q37', title: 'What is layout?', content: 'Layout is base template structure. Wraps content. Common structure. Content inserted into layout. Reduces duplication. Standard pattern. Supported by view engines.' },
        { id: 'q38', title: 'What is locals?', content: 'locals are template variables. Set: res.locals.property = value. Available in all templates. Useful for: global data, user info, settings. Applies to all renders. Template context.' },
        { id: 'q39', title: 'What is static vs dynamic content?', content: 'Static: served as-is (CSS, JS, images). Dynamic: generated server-side (templates). Use static() for static files. Use render() for dynamic. Choose based on needs. Modern: often use SPA with API.' },
        { id: 'q40', title: 'What is SPA vs SSR?', content: 'SPA (Single Page App): client-side rendering, API backend. SSR (Server-Side Rendering): server renders HTML, traditional. Express supports both. Choose based on: SEO needs, complexity, team skills. Modern trend: SPA with React/Vue.' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced Express',
      content: '',
      subsections: [
        { id: 'q41', title: 'What is authentication?', content: 'Authentication verifies user identity. Methods: sessions, JWT tokens, OAuth. Libraries: Passport.js, express-session, jsonwebtoken. Secure user access. Essential for protected routes. Implement carefully.' },
        { id: 'q42', title: 'What is authorization?', content: 'Authorization controls access to resources. After authentication. Check permissions. Middleware: check roles, permissions. Protect routes. Different from authentication. Both needed for security.' },
        { id: 'q43', title: 'What is session management?', content: 'Session management maintains user state. Use express-session. Stores session data. Options: memory (dev), Redis (production), database. Secure session cookies. Session middleware. Stateful authentication.' },
        { id: 'q44', title: 'What is JWT in Express?', content: 'JWT (JSON Web Token) for stateless authentication. Install: npm install jsonwebtoken. Generate tokens. Verify tokens. Store in: headers, cookies. Stateless. Popular for APIs. Use with express-jwt middleware.' },
        { id: 'q45', title: 'What is file upload?', content: 'File upload handles file submissions. Use: multer middleware. Install: npm install multer. Configure storage. Handle multipart/form-data. Validate files. Secure file handling. Common requirement.' },
        { id: 'q46', title: 'What is API versioning?', content: 'API versioning manages API changes. Methods: URL path (/v1/, /v2/), headers, query parameter. Maintains backward compatibility. Allows gradual migration. Critical for API evolution. Common pattern.' },
        { id: 'q47', title: 'What is rate limiting?', content: 'Rate limiting restricts request frequency. Libraries: express-rate-limit. Prevents abuse. Configurable limits. Per IP or user. Return 429 status. Essential for API protection. Production requirement.' },
        { id: 'q48', title: 'What is validation?', content: 'Validation checks input data. Libraries: express-validator, joi, yup. Validate: body, params, query. Return errors if invalid. Prevent bad data. Security and data integrity. Essential middleware.' },
        { id: 'q49', title: 'What is testing Express apps?', content: 'Testing uses: Jest, Mocha, Supertest. Test: routes, middleware, integration. Mock dependencies. Test async code. Aim for coverage. Write tests. Essential for quality.' },
        { id: 'q50', title: 'What are Express best practices?', content: 'Best practices: use environment variables, structure code properly, use middleware appropriately, handle errors, validate input, secure applications, use HTTPS, log appropriately, test code, use process managers, monitor performance, keep dependencies updated, follow conventions, document APIs.' }
      ]
    }
  ]
};
