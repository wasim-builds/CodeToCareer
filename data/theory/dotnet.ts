import { TheoryTopic } from '@/types/theory';

export const dotnetTheory: TheoryTopic = {
  topicId: 'dotnet',
  topicName: '.NET',
  category: 'Full Stack',
  description: '.NET platform for building applications on Windows, web, cloud, and cross-platform with C# and CLR.',
  sections: [
    {
      id: 'platform',
      title: 'Platform Basics',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is .NET?', content: '.NET is a developer platform from Microsoft with CLR runtime, BCL libraries, and languages like C#. Runs on Windows, Linux, macOS via .NET 6/7/8 (Core lineage).' },
        { id: 'q2', title: 'CLR and CTS?', content: 'CLR (Common Language Runtime) executes IL, manages memory/GC, JIT, security. CTS (Common Type System) defines types and rules across languages for interoperability.' },
        { id: 'q3', title: 'CLS compliance?', content: 'Common Language Specification defines a subset of CTS ensuring cross-language compatibility. CLS-compliant libraries expose only CLS-safe features.' },
        { id: 'q4', title: 'BCL vs FCL?', content: 'BCL (Base Class Library) provides core types (System.*). FCL broader set including ASP.NET, WinForms, WPF. Modern .NET ships unified base libraries via NuGet.' },
        { id: 'q5', title: 'SDK-style projects?', content: '.csproj SDK-style simplifies project files, implicit references to framework, PackageReference for NuGet, multi-targeting via TargetFrameworks.' },
        { id: 'q6', title: '.NET Standard?', content: 'A set of APIs for library compatibility across .NET Framework/Core/Xamarin. New projects target net6.0+; .NET Standard mainly for older compatibility.' },
        { id: 'q7', title: 'JIT vs AOT?', content: 'JIT compiles IL to native at runtime; ReadyToRun and Native AOT precompile for faster startup and smaller footprint (with trade-offs).' },
        { id: 'q8', title: 'Garbage collection?', content: 'Generational GC with server/workstation modes. Manages memory automatically; IDisposable for unmanaged resources. GC.Collect rarely needed.' },
        { id: 'q9', title: 'Value vs reference types?', content: 'Structs (value) live on stack/inline, copied by value. Classes (reference) on heap, copied by reference. Nullable value types with T? (Nullable<T>).' },
        { id: 'q10', title: 'Nullable reference types?', content: 'C# 8 feature: enables compiler warnings for potential null. Annotate with ? for nullable refs. Promotes safer APIs.' }
      ]
    },
    {
      id: 'csharp',
      title: 'C# Language Features',
      content: '',
      subsections: [
        { id: 'q11', title: 'Async/await?', content: 'Task-based async model. async methods return Task/Task<T>. await yields until completion. Avoid blocking with .Result/.Wait to prevent deadlocks.' },
        { id: 'q12', title: 'LINQ?', content: 'Language Integrated Query for collections and IQueryable. Supports filtering, projection, grouping. Deferred execution. Providers include LINQ to Objects/Entities.' },
        { id: 'q13', title: 'Delegates and events?', content: 'Delegates are type-safe function pointers. Events expose delegates with restricted invocation. Used for callbacks and observer patterns.' },
        { id: 'q14', title: 'Generics?', content: 'Type-safe reusable code: List<T>, Dictionary<K,V>. Constraints (where T : class/struct/new()/Base/Interface). No runtime reification (uses IL generic instantiation).' },
        { id: 'q15', title: 'Records?', content: 'Reference or value types for immutable data with value-based equality and with-expressions. Ideal for DTOs. Introduced in C# 9; record struct in C# 10.' },
        { id: 'q16', title: 'Pattern matching?', content: 'switch expressions, relational/logical patterns, type patterns: obj is Person { Age: > 18 }. Concise branching over shapes/values.' },
        { id: 'q17', title: 'Span and memory safety?', content: 'Span<T>/ReadOnlySpan<T> provide safe stack-only slices over memory to reduce allocations. Useful for parsing, buffers, performance-sensitive code.' },
        { id: 'q18', title: 'Attributes?', content: 'Metadata attached to code elements (e.g., [Serializable], [HttpGet]). Consumed via reflection or frameworks. Custom attributes derive from Attribute.' },
        { id: 'q19', title: 'Dynamic and reflection?', content: 'dynamic bypasses compile-time type checks (DLR). Reflection inspects types at runtime (Assembly.GetTypes). Use sparingly for performance and safety.' },
        { id: 'q20', title: 'Unsafe code?', content: 'Allows pointer operations (unsafe blocks). Requires /unsafe flag. Use only when necessary for interop/performance; ensure bounds and lifetime correctness.' }
      ]
    },
    {
      id: 'aspnet',
      title: 'ASP.NET Core',
      content: '',
      subsections: [
        { id: 'q21', title: 'Minimal APIs?', content: 'Lightweight HTTP APIs using top-level statements: var app = WebApplication.CreateBuilder(); app.MapGet("/", () => "Hi"); Simplifies small services.' },
        { id: 'q22', title: 'MVC vs Razor Pages?', content: 'MVC separates controllers/views; Razor Pages is page-focused with page model. Choose MVC for complex routing/APIs, Razor Pages for page-centric apps.' },
        { id: 'q23', title: 'Dependency Injection?', content: 'Built-in DI container. Register services with AddSingleton/Scoped/Transient. Constructor injection preferred. Scoped aligns with HTTP request.' },
        { id: 'q24', title: 'Middleware pipeline?', content: 'Request flows through middleware in order: UseRouting, auth, UseEndpoints. Custom middleware via RequestDelegate next pattern.' },
        { id: 'q25', title: 'Configuration?', content: 'Unified config with appsettings.json, env vars, user secrets, command-line. Options pattern binds sections to POCOs with IOptions<T>.' },
        { id: 'q26', title: 'Entity Framework Core?', content: 'ORM for .NET. Supports migrations, LINQ queries, change tracking. Providers: SQL Server, PostgreSQL, MySQL, Sqlite, Cosmos. Use DbContext.' },
        { id: 'q27', title: 'Authentication/Authorization?', content: 'Middleware supports cookies, JWT bearer, OAuth2/OpenID Connect (Microsoft.Identity/Web). Policy-based auth with requirements and handlers.' },
        { id: 'q28', title: 'Logging and monitoring?', content: 'ILogger abstraction with providers (Console, Seq, App Insights). Health checks via AddHealthChecks/UseHealthChecks. Metrics via OpenTelemetry.' },
        { id: 'q29', title: 'Static files and hosting?', content: 'UseStaticFiles serves wwwroot. Kestrel web server hosts ASP.NET Core; can reverse-proxy with Nginx/IIS/Apache. Configure HTTPS and certificates.' },
        { id: 'q30', title: 'API versioning and OpenAPI?', content: 'Use Swashbuckle/NSwag for OpenAPI docs. ApiVersioning package adds version headers/routes. Use filters to document auth, responses.' }
      ]
    },
    {
      id: 'desktop-cloud',
      title: 'Desktop, Cloud, and Cross-Platform',
      content: '',
      subsections: [
        { id: 'q31', title: 'Desktop UI options?', content: 'WinForms/WPF (Windows), MAUI for cross-platform native UI, Uno Platform alternative. WinUI 3 with Windows App SDK for modern Windows apps.' },
        { id: 'q32', title: 'MAUI overview?', content: '.NET MAUI builds cross-platform apps (iOS/Android/macOS/Windows) using XAML/C#. Shared UI with platform renderers and single project.' },
        { id: 'q33', title: 'Blazor?', content: 'Web UI with C#/Razor. Blazor Server (signalR to server), Blazor WebAssembly (runs in browser). Reuse components, share models.' },
        { id: 'q34', title: 'gRPC and SignalR?', content: 'gRPC for high-performance RPC with protobuf. SignalR for real-time WebSockets. Both integrated in ASP.NET Core with DI and middleware.' },
        { id: 'q35', title: 'Cloud deployment?', content: 'Deploy to Azure App Service, Azure Container Apps, AKS, AWS ECS/EKS, or on-prem via Docker/K8s. CI/CD with GitHub Actions/Azure DevOps.' },
        { id: 'q36', title: 'Configuration per environment?', content: 'Use appsettings.{Environment}.json overrides. Environment variables set DOTNET_ENVIRONMENT. Options pattern reads per-environment config.' },
        { id: 'q37', title: 'Localization?', content: 'Use IStringLocalizer with resource files (.resx). Middleware negotiates culture via headers/query. Provide localized content/UI.' },
        { id: 'q38', title: 'Background services?', content: 'IHostedService/BackgroundService for recurring tasks. Use Quartz/Hangfire for scheduled jobs with persistence and dashboards.' },
        { id: 'q39', title: 'Interoperability?', content: 'Call native code via P/Invoke, COM interop, or .NET 7 NativeAOT restrictions. Use HttpClient/gRPC for service communication.' },
        { id: 'q40', title: 'Packaging?', content: 'Self-contained publish includes runtime; framework-dependent relies on installed runtime. Single-file publish bundles into one executable.' }
      ]
    },
    {
      id: 'security-testing',
      title: 'Security, Performance, and Testing',
      content: '',
      subsections: [
        { id: 'q41', title: 'Security best practices?', content: 'Use HTTPS, validate input, parameterize SQL, store secrets in Key Vault/Secret Manager, enforce authentication/authorization, enable CSP/headers.' },
        { id: 'q42', title: 'DI lifetimes pitfalls?', content: 'Avoid capturing scoped services in singletons, dispose IDisposable correctly, beware of service resolution in middleware constructors (use factories).' },
        { id: 'q43', title: 'Performance profiling?', content: 'Use dotnet-trace, dotnet-counters, PerfView, Application Insights. Measure allocations, GC, CPU hotspots. Enable ResponseCompression when appropriate.' },
        { id: 'q44', title: 'Memory management tips?', content: 'Prefer structs for small immutable data, avoid large object heap churn, pool arrays/buffers (ArrayPool). Dispose IAsyncDisposable resources.' },
        { id: 'q45', title: 'Testing approaches?', content: 'xUnit/NUnit/MSTest for unit tests. Integration tests with WebApplicationFactory and TestServer. Use Moq/NSubstitute/FakeItEasy for mocking.' },
        { id: 'q46', title: 'Configuration secrets?', content: 'Use dotnet user-secrets for dev, Azure Key Vault/Parameter Store for prod. Avoid checking secrets into source control.' },
        { id: 'q47', title: 'Observability?', content: 'Structured logging, correlation IDs, OpenTelemetry tracing/metrics/logs. Health checks and readiness/liveness for containers. Centralize logs.' },
        { id: 'q48', title: 'Common pitfalls?', content: 'Blocking async calls, forgetting await, misconfigured DI scopes, not disposing HttpClient handlers (use IHttpClientFactory), excessive reflection.' },
        { id: 'q49', title: 'Versioning and packages?', content: 'Manage NuGet via PackageReference. Semantic versioning for libraries. Multi-target to support older frameworks. Use Dependabot/renovate to update.' },
        { id: 'q50', title: 'Tooling?', content: 'dotnet CLI for builds/publish, analyzers (StyleCop/Roslyn), nullable contexts, code analyzers for security, formatter via dotnet format.' }
      ]
    }
  ]
};
