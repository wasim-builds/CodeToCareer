import { TheoryTopic } from '@/types/theory';

export const flaskTheory: TheoryTopic = {
  topicId: 'flask',
  topicName: 'Flask',
  category: 'Full Stack',
  description: 'Flask Python web framework',
  sections: [
    {
      id: 'basics',
      title: 'Flask Basics',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is Flask?', content: 'Flask is lightweight Python web framework. Minimal and flexible. "Micro" framework - core functionality only. Extensible via extensions. Simple to learn. Good for: small to medium apps, APIs, rapid prototyping. Popular Python framework.' },
        { id: 'q2', title: 'How to create Flask app?', content: 'Create Flask app: from flask import Flask; app = Flask(__name__). Install: pip install flask. Run: app.run(). Minimal setup. Start building routes immediately. Simple and quick.' },
        { id: 'q3', title: 'What is @app.route()?', content: '@app.route() decorator defines URL route. Syntax: @app.route("/path"). Maps URL to function. Function returns response. Can specify methods: methods=["GET", "POST"]. Foundation of Flask routing.' },
        { id: 'q4', title: 'What is request object?', content: 'request contains request data. Properties: request.method (HTTP method), request.args (query params), request.form (form data), request.json (JSON), request.headers. Import from flask. Access request information.' },
        { id: 'q5', title: 'What is response?', content: 'Response can be: string (HTML), dict (JSON), tuple (response, status), Response object. Flask auto-converts. Use jsonify() for JSON. Set status codes. Control response format.' },
        { id: 'q6', title: 'What is jsonify()?', content: 'jsonify() converts to JSON response. Syntax: return jsonify({"key": "value"}). Sets Content-Type: application/json. Convenient for APIs. Returns Response object. Common in REST APIs.' },
        { id: 'q7', title: 'What is template rendering?', content: 'Template rendering generates HTML. Use render_template(). Syntax: render_template("template.html", data=data). Jinja2 templating engine. Pass data to templates. Server-side rendering.' },
        { id: 'q8', title: 'What is Jinja2?', content: 'Jinja2 is Flask\'s templating engine. Syntax: {{ variable }}, {% for %}, {% if %}. Template inheritance. Filters and macros. Powerful templating. Separates logic from presentation.' },
        { id: 'q9', title: 'What is static files?', content: 'Static files: CSS, JS, images. Store in static/ folder. Access via /static/filename. Served directly. No processing. Efficient for assets. Organize in static directory.' },
        { id: 'q10', title: 'What is Flask context?', content: 'Flask context provides request/application context. request, g (application context), session available. Context locals. Thread-local storage. Enables global access to context. Important for Flask internals.' }
      ]
    },
    {
      id: 'routing',
      title: 'Routing and URLs',
      content: '',
      subsections: [
        { id: 'q11', title: 'What are URL parameters?', content: 'URL parameters capture path segments. Syntax: @app.route("/users/<int:id>"). Types: string (default), int, float, path. Access via function parameter. Dynamic routes. Type conversion automatic.' },
        { id: 'q12', title: 'What is url_for()?', content: 'url_for() generates URLs from function names. Syntax: url_for("function_name", param=value). Avoids hardcoding URLs. Updates automatically if routes change. Use in templates and code. Best practice.' },
        { id: 'q13', title: 'What is Blueprint?', content: 'Blueprint organizes routes into modules. Syntax: blueprint = Blueprint("name", __name__). Register with app.register_blueprint(). Modular structure. Organize large applications. Reusable components.' },
        { id: 'q14', title: 'What is redirect()?', content: 'redirect() sends redirect response. Syntax: redirect(url) or redirect(url_for("route")). Returns 302 status. Browser follows redirect. Use for: after form submission, authentication. Common pattern.' },
        { id: 'q15', title: 'What is abort()?', content: 'abort() raises HTTP exception. Syntax: abort(404) or abort(400, "message"). Stops execution. Returns error response. Use for: validation errors, not found. Handled by error handlers.' },
        { id: 'q16', title: 'What is error handler?', content: 'Error handler handles HTTP errors. Decorator: @app.errorhandler(404). Function receives error. Return custom error page. Handle: 404, 500, etc. Improve user experience. Custom error responses.' },
        { id: 'q17', title: 'What is before_request?', content: 'before_request runs before each request. Decorator: @app.before_request. Can modify request. Can abort request. Use for: authentication, setup. Runs for all routes. Useful for common logic.' },
        { id: 'q18', title: 'What is after_request?', content: 'after_request runs after each request. Decorator: @app.after_request. Receives response. Can modify response. Must return response. Use for: logging, headers. Runs after route handler.' },
        { id: 'q19', title: 'What is teardown_request?', content: 'teardown_request runs after response sent. Decorator: @app.teardown_request. Cleanup operations. Runs even if error. Use for: closing connections, cleanup. Guaranteed execution.' },
        { id: 'q20', title: 'What is route methods?', content: 'Route methods specify HTTP methods. Syntax: @app.route("/path", methods=["GET", "POST"]). Default: GET only. Specify allowed methods. Handle different methods in same function. RESTful routing.' }
      ]
    },
    {
      id: 'data',
      title: 'Data Handling',
      content: '',
      subsections: [
        { id: 'q21', title: 'What is request.form?', content: 'request.form contains form data. POST request data. Dictionary-like. Access: request.form["key"] or request.form.get("key"). Use get() for safety. Form submissions. HTML forms.' },
        { id: 'q22', title: 'What is request.json?', content: 'request.json contains parsed JSON. POST/PUT with JSON. Returns dict or None. Requires Content-Type: application/json. Use for APIs. Modern approach. JSON payloads.' },
        { id: 'q23', title: 'What is request.files?', content: 'request.files contains uploaded files. File uploads. Access: request.files["key"]. Save with .save(). Validate files. Secure file handling. Common requirement.' },
        { id: 'q24', title: 'What is session?', content: 'session stores user data. Dictionary-like. Persists across requests. Requires secret key. Stored in cookies (signed). Use for: user state, authentication. Temporary storage.' },
        { id: 'q25', title: 'What is g object?', content: 'g is application context object. Stores data per request. Available in views. Cleared after request. Use for: database connections, user data. Request-scoped storage. Thread-local.' },
        { id: 'q26', title: 'What is Flask-WTF?', content: 'Flask-WTF handles forms. CSRF protection. Form validation. File uploads. Integrates with Flask. Security features. Popular extension. Simplifies form handling.' },
        { id: 'q27', title: 'What is CSRF protection?', content: 'CSRF (Cross-Site Request Forgery) protection prevents attacks. Flask-WTF provides. Token in forms. Validates on submission. Security feature. Essential for forms. Prevents unauthorized actions.' },
        { id: 'q28', title: 'What is validation?', content: 'Validation checks input data. Flask-WTF validators. Custom validation. Prevent bad data. Security and integrity. Validate: type, range, format, required. Essential for safety.' },
        { id: 'q29', title: 'What is database integration?', content: 'Database integration uses ORMs. Popular: SQLAlchemy, Flask-SQLAlchemy. Connect to databases. Models represent tables. Query interface. Simplifies database operations.' },
        { id: 'q30', title: 'What is Flask-SQLAlchemy?', content: 'Flask-SQLAlchemy integrates SQLAlchemy with Flask. Models as classes. Database operations. Migrations support. Simplifies database. Popular choice. ORM benefits.' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced Flask',
      content: '',
      subsections: [
        { id: 'q31', title: 'What is Flask extensions?', content: 'Flask extensions add functionality. Examples: Flask-SQLAlchemy, Flask-Login, Flask-Mail, Flask-RESTful. Install separately. Extend Flask. Large ecosystem. Choose based on needs.' },
        { id: 'q32', title: 'What is Flask-Login?', content: 'Flask-Login handles user sessions. User authentication. Login/logout. Remember me. Session management. Popular extension. Simplifies authentication. Secure user management.' },
        { id: 'q33', title: 'What is decorator pattern?', content: 'Decorator pattern wraps functions. @login_required decorator. Protects routes. Reusable logic. Common pattern. Apply to multiple routes. Clean code organization.' },
        { id: 'q34', title: 'What is Flask-RESTful?', content: 'Flask-RESTful builds REST APIs. Resource-based. Class-based views. Request parsing. Response formatting. Simplifies API development. Good for APIs.' },
        { id: 'q35', title: 'What is Flask-Mail?', content: 'Flask-Mail sends emails. Configure SMTP. Send emails from app. Templates support. Notifications. Email functionality. Useful extension.' },
        { id: 'q36', title: 'What is application factory?', content: 'Application factory creates app in function. Pattern: create_app() function. Enables: testing, multiple instances, configuration. Better organization. Recommended for larger apps.' },
        { id: 'q37', title: 'What is configuration?', content: 'Configuration manages settings. Development, production, testing. Use config files. Environment variables. Flask config object. Separate configs. Secure sensitive data.' },
        { id: 'q38', title: 'What is Flask CLI?', content: 'Flask CLI provides commands. flask run (development server). flask shell (Python shell). Custom commands with @app.cli.command(). Useful for: management, migrations. Command-line interface.' },
        { id: 'q39', title: 'What is testing?', content: 'Testing uses: pytest, unittest. Test client: app.test_client(). Test routes, responses. Mock dependencies. Test coverage. Essential for quality. Write tests.' },
        { id: 'q40', title: 'What is deployment?', content: 'Deployment options: Gunicorn, uWSGI, mod_wsgi. Production WSGI server. Not Flask dev server. Use with: Nginx, reverse proxy. Environment variables. Secure configuration. Production setup.' }
      ]
    },
    {
      id: 'best-practices',
      title: 'Best Practices',
      content: '',
      subsections: [
        { id: 'q41', title: 'What is project structure?', content: 'Project structure organizes code. Separate: routes, models, templates, static, config. Use Blueprints. Application factory. Modular organization. Scalable structure. Maintainable code.' },
        { id: 'q42', title: 'What is environment variables?', content: 'Environment variables configure app. Use python-dotenv. .env file (not committed). Store: secrets, database URLs, API keys. Different for dev/prod. Secure configuration. Best practice.' },
        { id: 'q43', title: 'What is error handling?', content: 'Error handling manages exceptions. Try/except blocks. Error handlers. Log errors. User-friendly messages. Don\'t expose internals. Proper error responses. Important for production.' },
        { id: 'q44', title: 'What is logging?', content: 'Logging records application events. Flask logging. Levels: DEBUG, INFO, WARNING, ERROR. Log to files, services. Structured logging. Useful for debugging. Production monitoring.' },
        { id: 'q45', title: 'What is security?', content: 'Security practices: validate input, use parameterized queries, HTTPS, secure cookies, CSRF protection, XSS prevention, SQL injection prevention, authentication, authorization. Critical for production.' },
        { id: 'q46', title: 'What is performance?', content: 'Performance optimization: use caching, database optimization, connection pooling, async operations, CDN for static files, gzip compression, query optimization. Measure and profile. Identify bottlenecks.' },
        { id: 'q47', title: 'What is caching?', content: 'Caching stores frequently accessed data. Flask-Caching extension. Reduce database load. Improve response time. Strategies: time-based, key-based. Invalidate appropriately. Performance improvement.' },
        { id: 'q48', title: 'What is API design?', content: 'API design principles: RESTful, versioning, consistent responses, error handling, documentation, authentication, rate limiting. Clear endpoints. Follow conventions. Good API design.' },
        { id: 'q49', title: 'What is Flask vs Django?', content: 'Flask: minimal, flexible, learn quickly, choose components. Django: full-featured, batteries included, ORM included, admin panel. Choose Flask for: flexibility, learning, APIs. Choose Django for: rapid development, built-in features.' },
        { id: 'q50', title: 'What are Flask best practices?', content: 'Best practices: use Blueprints, application factory, environment variables, error handling, logging, security, testing, documentation, code organization, follow conventions, keep dependencies updated, use production server, monitor performance.' }
      ]
    }
  ]
};
