import { TheoryTopic } from '@/types/theory';

export const rubyTheory: TheoryTopic = {
  topicId: 'ruby',
  topicName: 'Ruby',
  category: 'Languages',
  description: 'Ruby dynamic, object-oriented language known for developer happiness and Rails ecosystem.',
  sections: [
    {
      id: 'basics',
      title: 'Basics and Syntax',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is Ruby?', content: 'A dynamic, interpreted, object-oriented language focused on simplicity and productivity. Everything is an object.' },
        { id: 'q2', title: 'Variables and types?', content: 'Dynamic typing. Local (lowercase), instance @var, class @@var, global $var, constants Capitalized. Duck typing used.' },
        { id: 'q3', title: 'Control flow?', content: 'if/elsif/else, unless, case/when, while/until, for/range, loop, iterators each/map/select. Postfix if/unless allowed.' },
        { id: 'q4', title: 'Blocks, procs, lambdas?', content: 'Blocks are anonymous code chunks passed to methods. Procs/lambdas are objects wrapping blocks. Lambdas check arity; return semantics differ.' },
        { id: 'q5', title: 'Methods?', content: 'Defined with def. Default args, splat (*args), keyword args, return implicit last expression. Methods are public by default.' },
        { id: 'q6', title: 'Symbols vs strings?', content: 'Symbols are immutable interned identifiers (:id). Strings mutable by default (freeze to make immutable).' },
        { id: 'q7', title: 'Collections?', content: 'Array (ordered), Hash (key-value), Range. Enumerable module adds iteration methods map/reduce/select.' },
        { id: 'q8', title: 'String interpolation?', content: 'Use "Hello #{name}". Single quotes do not interpolate. Heredocs support multiline.' },
        { id: 'q9', title: 'Regular expressions?', content: 'Literal /pattern/ with =~ match operator. Capture groups via parentheses. Use anchors, flags like /i, /m.' },
        { id: 'q10', title: 'Exception handling?', content: 'begin/rescue/else/ensure. raise to throw exceptions. Rescue specific classes. Ensure runs always for cleanup.' }
      ]
    },
    {
      id: 'oop',
      title: 'OOP and Modules',
      content: '',
      subsections: [
        { id: 'q11', title: 'Classes and objects?', content: 'Define with class; initialize via initialize constructor. All values objects. Inheritance single; Object is root.' },
        { id: 'q12', title: 'Modules and mixins?', content: 'Modules group methods/constants. Include to mix in instance methods; extend to add class methods. Prevents diamond issues vs multiple inheritance.' },
        { id: 'q13', title: 'Method visibility?', content: 'public default, private (no explicit receiver), protected (invocable by instances of same class). Set via keywords.' },
        { id: 'q14', title: 'Singleton methods?', content: 'Define methods on single objects: def obj.method; end. Used for class methods (on eigenclass) and DSLs.' },
        { id: 'q15', title: 'Metaprogramming?', content: 'Define methods dynamically (define_method), method_missing hooks, send to call by name, eval (use carefully). Powerful but can reduce clarity.' },
        { id: 'q16', title: 'Constants and freezing?', content: 'Constants intended not to change; warnings on reassignment. freeze makes objects immutable (shallow). String literals frozen by default in modern Ruby with magic comment.' },
        { id: 'q17', title: 'Open classes?', content: 'Classes can be reopened/monkey-patched. Use sparingly; prefer refinements for scoped changes.' },
        { id: 'q18', title: 'Refinements?', content: 'Scoped monkey patches activated via using. Avoids global side effects compared to open classes.' },
        { id: 'q19', title: 'DSLs?', content: 'Ruby syntax flexibility enables internal DSLs (RSpec, Rails routes). Use blocks, method_missing, instance_eval carefully.' },
        { id: 'q20', title: 'Common patterns?', content: 'Composition over inheritance, modules for mixins, POROs for business logic, service objects, decorators.' }
      ]
    },
    {
      id: 'rails',
      title: 'Rails Highlights (for context)',
      content: '',
      subsections: [
        { id: 'q21', title: 'Rails MVC?', content: 'Model-View-Controller web framework. Convention over configuration. Generators scaffold resources quickly.' },
        { id: 'q22', title: 'Active Record?', content: 'ORM mapping tables to models. Provides validations, callbacks, associations (belongs_to/has_many), migrations, scopes.' },
        { id: 'q23', title: 'Routing?', content: 'config/routes.rb defines resources, nested routes, concerns. RESTful routes by default for controllers.' },
        { id: 'q24', title: 'Views and templates?', content: 'ERB/HTML, partials, layouts. Helpers for forms/links. View components/gems for reusable UI chunks.' },
        { id: 'q25', title: 'Background jobs?', content: 'Active Job abstraction over Sidekiq/Resque/etc. queue_adapter config selects backend. Use for async tasks.' },
        { id: 'q26', title: 'Security defaults?', content: 'CSRF protection, strong parameters, authenticity tokens, escaping by default, secure cookies, parameter filtering in logs.' },
        { id: 'q27', title: 'Asset pipeline?', content: 'Sprockets or Webpacker/Importmaps for JS/CSS bundling. Modern Rails supports ESBuild/Vite options.' },
        { id: 'q28', title: 'Migrations?', content: 'Versioned schema changes. reversible, change/add/remove_column. Run via rails db:migrate/rollback.' },
        { id: 'q29', title: 'Environments?', content: 'development/test/production configs. Secrets via credentials or env vars. Different caching/logging levels.' },
        { id: 'q30', title: 'Testing in Rails?', content: 'Minitest default; RSpec popular. Fixtures/factories for data. System tests with Capybara. Use CI to run suites.' }
      ]
    },
    {
      id: 'tooling',
      title: 'Tooling and Ecosystem',
      content: '',
      subsections: [
        { id: 'q31', title: 'RubyGems and Bundler?', content: 'RubyGems is package manager; Bundler manages Gemfile dependencies and lockfile for reproducible installs.' },
        { id: 'q32', title: 'Version management?', content: 'Use rbenv/rvm/asdf to manage Ruby versions. Keep .ruby-version per project.' },
        { id: 'q33', title: 'Testing?', content: 'RSpec/Minitest common. Use factories (factory_bot), fixtures, VCR/WebMock for HTTP stubbing. RuboCop for linting/style.' },
        { id: 'q34', title: 'Performance profiling?', content: 'rack-mini-profiler, benchmark/ips, stackprof, memory_profiler. Identify N+1 queries, heavy allocations, slow endpoints.' },
        { id: 'q35', title: 'Documentation?', content: 'RDoc/YARD for docs. Comment public APIs. Maintain CHANGELOG. Use semantic versioning for gems.' },
        { id: 'q36', title: 'Packaging gems?', content: 'Create gem with bundle gem. Provide gemspec metadata, versioning, tests. Push to RubyGems. Signed releases optional.' },
        { id: 'q37', title: 'Concurrency model?', content: 'MRI has GIL; IO-bound concurrency via threads/fibers, CPU-bound via processes or JRuby/TruffleRuby.' },
        { id: 'q38', title: 'Fibers and async?', content: 'Fibers for lightweight concurrency. Ruby 3 adds Ractors for parallelism and Async ecosystem (async gem) for structured concurrency.' },
        { id: 'q39', title: 'Static typing?', content: 'Ruby is dynamic but tools like Sorbet/RBS/Steep add optional typing. Use for large codebases to catch errors early.' },
        { id: 'q40', title: 'Common pitfalls?', content: 'Monkey patch conflicts, silent nils, mutation of shared objects, performance surprises from GIL, version mismatches in gems.' }
      ]
    },
    {
      id: 'best',
      title: 'Best Practices',
      content: '',
      subsections: [
        { id: 'q41', title: 'Code style?', content: 'Follow community style (Rubocop defaults). Favor small methods, clear names, immutability where possible, avoid deep metaprogramming.' },
        { id: 'q42', title: 'Error handling?', content: 'Rescue only what you handle, avoid rescuing StandardError globally. Use custom exception classes. Provide meaningful messages and logging.' },
        { id: 'q43', title: 'Security?', content: 'Validate inputs, escape output, use secure defaults, protect secrets, avoid eval/untrusted code, patch gems promptly.' },
        { id: 'q44', title: 'Performance tips?', content: 'Avoid unnecessary allocations, freeze constants, batch DB queries, memoize expensive calls, profile before optimizing.' },
        { id: 'q45', title: 'Testing discipline?', content: 'Unit + integration tests, factories over fixtures as needed, avoid global state, use CI. Keep tests fast and deterministic.' },
        { id: 'q46', title: 'Dependency hygiene?', content: 'Pin versions, audit gems, remove unused deps, keep Ruby and bundler updated. Separate dev/test/prod groups.' },
        { id: 'q47', title: 'Design practices?', content: 'Favor composition, POROs, service objects, presenters, clear boundaries. Avoid fat controllers/models.' },
        { id: 'q48', title: 'Logging/monitoring?', content: 'Structured logs, request IDs, error tracking (Sentry), metrics for throughput/latency. Avoid logging sensitive data.' },
        { id: 'q49', title: 'Refactoring?', content: 'Use small steps, tests, extraction patterns (method/class). Keep public API stable for gems. Document breaking changes.' },
        { id: 'q50', title: 'Learning path?', content: 'Ruby basics -> blocks/enumerables -> OOP/modules -> Rails ecosystem -> testing/profiling -> optional typing.' }
      ]
    }
  ]
};
