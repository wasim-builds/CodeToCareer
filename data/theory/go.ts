import { TheoryTopic } from '@/types/theory';

export const goTheory: TheoryTopic = {
  topicId: 'go',
  topicName: 'Go (Golang)',
  category: 'Languages',
  description: 'Go language for concurrent systems programming with simplicity and fast compilation.',
  sections: [
    {
      id: 'basics',
      title: 'Basics and Syntax',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is Go?', content: 'A statically typed compiled language by Google focused on simplicity, concurrency, and fast builds.' },
        { id: 'q2', title: 'Packages and modules?', content: 'Code organized in packages; modules manage dependencies via go.mod. main package produces executables with func main().' },
        { id: 'q3', title: 'Variables and types?', content: 'Use var or := for inference. Basic types: string, bool, int, float64, rune, byte. Zero values default initialization.' },
        { id: 'q4', title: 'Functions?', content: 'Declared with func. Multiple returns supported (val, err). Named returns optional. First-class functions supported.' },
        { id: 'q5', title: 'Pointers?', content: 'Pointers refer to memory addresses; no pointer arithmetic. & to take address, * to dereference. Methods can have pointer receivers.' },
        { id: 'q6', title: 'Control flow?', content: 'if without parentheses, for is only loop (for init; cond; post / while-style / range). switch without fallthrough by default.' },
        { id: 'q7', title: 'Arrays and slices?', content: 'Arrays fixed length [N]T; slices dynamic views over arrays with len/cap. make allocates slices/maps/channels.' },
        { id: 'q8', title: 'Maps?', content: 'map[key]value with dynamic sizing. Access returns value and bool ok. Delete with delete(map, key). Not thread-safe by default.' },
        { id: 'q9', title: 'Structs and embedding?', content: 'Structs group fields. Embedding composes behavior (anonymous fields). Provides promoted methods/fields akin to mixins.' },
        { id: 'q10', title: 'Error handling idiom?', content: 'Errors are values (error interface). Functions return (T, error); caller handles. Use fmt.Errorf with %w for wrapping; errors.Is/As to inspect.' }
      ]
    },
    {
      id: 'interfaces',
      title: 'Interfaces and Methods',
      content: '',
      subsections: [
        { id: 'q11', title: 'Interfaces in Go?', content: 'Implicit satisfaction: any type implementing methods matches the interface. Encourages small, focused interfaces (io.Reader).' },
        { id: 'q12', title: 'Method receivers?', content: 'Methods bind to types via value or pointer receivers. Pointer receivers allow mutation and avoid copying large structs.' },
        { id: 'q13', title: 'Empty interface?', content: 'interface{} (any) accepts any type. Use sparingly; prefer concrete or typed interfaces. Type assertions or switches to extract.' },
        { id: 'q14', title: 'Type assertion?', content: 'x.(T) asserts dynamic type from interface. Returns value or panics. Use two-value form (v, ok) to avoid panic.' },
        { id: 'q15', title: 'Type switch?', content: 'switch x.(type) to branch by dynamic type of interface. Useful for polymorphic handling without if/else chains.' },
        { id: 'q16', title: 'Composition over inheritance?', content: 'Go lacks inheritance; use embedding and interfaces for reuse. Favor small interfaces like io.Closer, fmt.Stringer.' },
        { id: 'q17', title: 'Nil interface gotchas?', content: 'Interface holds type + value. An interface with nil concrete value is not nil if the type slot is set. Compare to nil carefully.' },
        { id: 'q18', title: 'Stringer?', content: 'fmt.Stringer interface defines String() string. Implement for better logging/debugging.' },
        { id: 'q19', title: 'Error interface?', content: 'Built-in error has Error() string. Custom error types carry context; wrap and inspect with errors package.' },
        { id: 'q20', title: 'Generics?', content: 'Go 1.18 added parametric polymorphism: type parameters with constraints (interfaces). Enables reusable data structures and functions.' }
      ]
    },
    {
      id: 'concurrency',
      title: 'Concurrency',
      content: '',
      subsections: [
        { id: 'q21', title: 'Goroutines?', content: 'Lightweight concurrent functions launched with go keyword. Scheduled by Go runtime; cheap vs OS threads.' },
        { id: 'q22', title: 'Channels?', content: 'Typed conduits for communication. Make with make(chan T). Send <-, receive <-chan. Can be buffered or unbuffered.' },
        { id: 'q23', title: 'Select?', content: 'select waits on multiple channel operations. Enables timeouts, multiplexing, cancellation. Default case for non-blocking checks.' },
        { id: 'q24', title: 'Context?', content: 'context.Context carries cancellation, deadlines, and values. Pass as first param. Use context.WithCancel/Timeout/Deadline.' },
        { id: 'q25', title: 'Worker pools?', content: 'Create fixed goroutines consuming jobs from channels. Helps bound concurrency and resource use.' },
        { id: 'q26', title: 'Avoiding data races?', content: 'Communicate via channels or protect shared data with sync.Mutex/RWMutex. Run go test -race to detect races.' },
        { id: 'q27', title: 'sync primitives?', content: 'WaitGroup for waiting goroutines, Once for one-time init, Cond for signaling, Atomic for lock-free counters/flags.' },
        { id: 'q28', title: 'Cancellation patterns?', content: 'Propagate context; select on ctx.Done(). Close channels to signal completion. Avoid leaking goroutines.' },
        { id: 'q29', title: 'Timers and tickers?', content: 'time.After, time.NewTimer, time.Ticker for scheduling. Stop tickers to avoid leaks.' },
        { id: 'q30', title: 'Common pitfalls?', content: 'Leaking goroutines, sending/receiving on closed channels, unbounded concurrency, ignoring context cancellation.' }
      ]
    },
    {
      id: 'tooling',
      title: 'Tooling and Ecosystem',
      content: '',
      subsections: [
        { id: 'q31', title: 'Go modules?', content: 'go mod init to start. go get to add deps. Versioned modules with semantic import versioning (v2+ in path). GOPROXY controls fetching.' },
        { id: 'q32', title: 'Build and test?', content: 'go build, go run, go test. go test -bench for benchmarks. go test -race for race detection. go list for package info.' },
        { id: 'q33', title: 'Formatting and linting?', content: 'gofmt enforces style. golint deprecated; use staticcheck, govet, golangci-lint for checks.' },
        { id: 'q34', title: 'Dependency management?', content: 'Minimal version selection; reproducible builds with go.sum. Vendor with go mod vendor if needed.' },
        { id: 'q35', title: 'Cross compilation?', content: 'Set GOOS/GOARCH to cross-compile. Go toolchain embeds cross-compiler support for many targets.' },
        { id: 'q36', title: 'CGO?', content: 'Interface with C via cgo. Enables calling C libraries but impacts portability/build speed. Prefer pure Go when possible.' },
        { id: 'q37', title: 'Testing patterns?', content: 'Table-driven tests, golden files, testify for assertions/mocks. Use interfaces to mock dependencies.' },
        { id: 'q38', title: 'Profiling?', content: 'Use pprof (cpu, mem, block). go test -cpuprofile/-memprofile. Visualize with go tool pprof.' },
        { id: 'q39', title: 'Modules proxy and sumdb?', content: 'Default proxy https://proxy.golang.org caches modules; sumdb verifies module checksums for security.' },
        { id: 'q40', title: 'Common project layout?', content: 'cmd/ for binaries, pkg/ for libraries, internal/ for private code, api/ for contracts, configs/deploy scripts as needed.' }
      ]
    },
    {
      id: 'best',
      title: 'Best Practices',
      content: '',
      subsections: [
        { id: 'q41', title: 'Error handling best practices?', content: 'Check errors immediately, wrap with context (fmt.Errorf("msg: %w", err)), avoid panics in libraries, return sentinel errors when needed.' },
        { id: 'q42', title: 'API design?', content: 'Prefer small interfaces, accept interfaces return structs, keep nil-safe types, document exported items, avoid global state.' },
        { id: 'q43', title: 'Performance tips?', content: 'Avoid unnecessary allocations, preallocate slices, reuse buffers (sync.Pool), benchmark changes. Use profiling to guide.' },
        { id: 'q44', title: 'Concurrency patterns?', content: 'Use context for cancellation, select for coordination, bounded worker pools, avoid sharing mutable state, prefer channel ownership.' },
        { id: 'q45', title: 'Logging?', content: 'Use structured logging (zap/zerolog). Avoid logging secrets. Provide context (request IDs). Keep logs parseable.' },
        { id: 'q46', title: 'Configuration?', content: 'Use env vars/flags; avoid hardcoding. Provide sensible defaults. Validate config at startup.' },
        { id: 'q47', title: 'Security?', content: 'Validate input, avoid command injection, set proper file perms, use HTTPS/TLS, handle JWT securely, keep deps updated.' },
        { id: 'q48', title: 'Modules versioning?', content: 'Follow semver. Tag releases. For breaking changes v2+, update module path. Keep backward compatibility when possible.' },
        { id: 'q49', title: 'Common pitfalls?', content: 'Ignoring errors, sharing slices/maps across goroutines unsafely, closing closed channels, nil interface traps, runaway goroutines.' },
        { id: 'q50', title: 'Learning path?', content: 'Master basics, concurrency, interfaces, testing, profiling. Build small services/CLI, read standard library code, run go tour.' }
      ]
    }
  ]
};
