import { TheoryTopic } from '@/types/theory';

export const swiftTheory: TheoryTopic = {
  topicId: 'swift',
  topicName: 'Swift',
  category: 'Languages',
  description: 'Swift language for iOS, macOS, watchOS, and server-side development.',
  sections: [
    {
      id: 'basics',
      title: 'Basics and Syntax',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is Swift?', content: 'A safe, fast, modern programming language by Apple for iOS/macOS/watchOS/tvOS and server-side. Type-safe with optionals and value semantics.' },
        { id: 'q2', title: 'Constants vs variables?', content: 'let defines constants (immutable), var defines mutable variables. Prefer let for safety and clarity.' },
        { id: 'q3', title: 'Optionals?', content: 'Represent presence or absence: String? can be nil. Unwrap with if let/guard let, optional chaining, nil-coalescing (??).' },
        { id: 'q4', title: 'Type inference?', content: 'Swift infers types from context: let x = 5 -> Int. Use explicit types for clarity in APIs and complex cases.' },
        { id: 'q5', title: 'String interpolation?', content: 'Use \(expr) inside strings to embed values. Preferred over concatenation for readability.' },
        { id: 'q6', title: 'Collections?', content: 'Array, Dictionary, Set. Value types. Use generics: [Int], [String: User]. Mutating requires var.' },
        { id: 'q7', title: 'Control flow?', content: 'if/else, switch with pattern matching, for-in, while, repeat-while, guard for early exits, defer for cleanup.' },
        { id: 'q8', title: 'Functions?', content: 'Use func; external/internal parameter names; default values; inout for references; return tuples; supports variadics.' },
        { id: 'q9', title: 'Error handling?', content: 'Throws/try/catch. Define Error enums. Use try?, try! as variants; prefer do-catch and proper propagation.' },
        { id: 'q10', title: 'Access control?', content: 'open, public, internal (default), fileprivate, private. Controls visibility across modules/files/types.' }
      ]
    },
    {
      id: 'types',
      title: 'Types, Structs, and Enums',
      content: '',
      subsections: [
        { id: 'q11', title: 'Struct vs class?', content: 'Structs are value types (copied on assign), classes are reference types (shared). Structs have no inheritance; classes support inheritance and deinit.' },
        { id: 'q12', title: 'Protocols?', content: 'Define requirements (methods/properties). Types conform to protocols. Enable polymorphism and composition over inheritance.' },
        { id: 'q13', title: 'Extensions?', content: 'Add functionality to existing types (methods, computed props, protocol conformance). Cannot add stored properties.' },
        { id: 'q14', title: 'Enumerations?', content: 'Enums are first-class with associated values and methods. Support pattern matching and switch exhaustiveness.' },
        { id: 'q15', title: 'Pattern matching?', content: 'Switch supports patterns, value binding, where clauses. if case / guard case for selective matches.' },
        { id: 'q16', title: 'Generics?', content: 'Functions and types parameterized by type: func swap<T>(...). Add constraints with where clauses. Promotes reuse and safety.' },
        { id: 'q17', title: 'Opaque types?', content: 'some Keyword hides concrete return type that conforms to a protocol. Keeps abstraction while returning a single concrete type.' },
        { id: 'q18', title: 'Type erasure?', content: 'Wrap concrete generics to hide type parameters (AnySequence, AnyPublisher). Useful for APIs exposing protocols with associated types.' },
        { id: 'q19', title: 'Value semantics benefits?', content: 'Copy-on-write structs reduce accidental shared mutable state. Easier reasoning about data flow.' },
        { id: 'q20', title: 'Memory management?', content: 'ARC manages reference types. Avoid retain cycles with weak/unowned. Value types not ARC-managed (except captured boxes).' }
      ]
    },
    {
      id: 'concurrency',
      title: 'Concurrency and Async',
      content: '',
      subsections: [
        { id: 'q21', title: 'Grand Central Dispatch?', content: 'GCD provides queues for async tasks. DispatchQueue.main for UI, global for background. QoS levels for priority.' },
        { id: 'q22', title: 'Operations?', content: 'Operation/OperationQueue for cancellable, composable tasks. Supports dependencies and KVO.' },
        { id: 'q23', title: 'Swift Concurrency?', content: 'async/await, Tasks, TaskGroups, actors introduced in Swift 5.5. Structured concurrency with child tasks managed by parents.' },
        { id: 'q24', title: 'Actors?', content: 'Reference types that protect mutable state with isolated access. Prevent data races by serializing access.' },
        { id: 'q25', title: 'Async sequences?', content: 'AsyncSequence/AsyncIterator for streaming async values. for await loops consume them. AsyncStream bridges callbacks.' },
        { id: 'q26', title: 'Task cancellation?', content: 'Check Task.isCancelled or try Task.checkCancellation(). Propagate cancellation in long-running work.' },
        { id: 'q27', title: 'Main actor?', content: '@MainActor isolates UI-related code to main thread. Use await MainActor.run for UI mutations.' },
        { id: 'q28', title: 'Bridging with Combine?', content: 'Combine publishers can bridge to async sequences (.values). async/await interoperates with callback-based APIs via continuations.' },
        { id: 'q29', title: 'Thread safety?', content: 'Use actors or serial queues for shared mutable state. Avoid manual locks where possible. Value types reduce shared state issues.' },
        { id: 'q30', title: 'Common pitfalls?', content: 'Forgetting await, blocking main thread, retain cycles in closures, capturing self strongly, not handling cancellation.' }
      ]
    },
    {
      id: 'ios',
      title: 'iOS App Patterns',
      content: '',
      subsections: [
        { id: 'q31', title: 'UIKit vs SwiftUI?', content: 'UIKit is imperative UI framework; SwiftUI is declarative. SwiftUI integrates with Combine/Concurrency. Both can interop via representables.' },
        { id: 'q32', title: 'MVVM in SwiftUI?', content: 'Use ObservableObject view models with @Published state. Views bind using @StateObject/@ObservedObject. Business logic stays in VM.' },
        { id: 'q33', title: 'Dependency injection?', content: 'Pass dependencies in initializers, use protocol abstractions, property wrappers like @EnvironmentObject for shared services.' },
        { id: 'q34', title: 'Navigation?', content: 'SwiftUI NavigationStack/Path for type-safe navigation. UIKit uses UINavigationController/segues.' },
        { id: 'q35', title: 'Data persistence?', content: 'Use UserDefaults for small settings, Keychain for secrets, Core Data/Realm/SQLite for structured data. FileManager for files.' },
        { id: 'q36', title: 'Networking?', content: 'URLSession with async/await or Combine. Decode JSON with Codable. Handle errors/retries and background tasks.' },
        { id: 'q37', title: 'Testing?', content: 'Unit tests with XCTest. UI tests with XCTest UI. Dependency inversion for mocks. Use async tests for concurrency.' },
        { id: 'q38', title: 'App lifecycle?', content: 'SwiftUI App protocol vs UIApplicationDelegate. Scene phase handling for foreground/background. Manage resources accordingly.' },
        { id: 'q39', title: 'Accessibility?', content: 'Use accessibilityLabel/hint/value, Dynamic Type, VoiceOver testing, sufficient contrast. Ensure hit targets and focus order.' },
        { id: 'q40', title: 'Packages?', content: 'Use Swift Package Manager for dependencies. Prefer SPM over CocoaPods/Carthage in modern projects.' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced and Best Practices',
      content: '',
      subsections: [
        { id: 'q41', title: 'Protocol-oriented programming?', content: 'Emphasizes protocols and extensions for reuse. Favor composition over inheritance. Default implementations reduce duplication.' },
        { id: 'q42', title: 'Memory leaks and ARC?', content: 'Avoid retain cycles with [weak self] in closures, weak/unowned for delegates. Instruments/Leaks to detect. ARC manages references automatically.' },
        { id: 'q43', title: 'Performance tips?', content: 'Use value types, avoid unnecessary copying, leverage lazy properties, measure with Instruments (Time Profiler/Allocations).' },
        { id: 'q44', title: 'Error design?', content: 'Define clear Error enums, avoid using NSError directly in pure Swift layers. Propagate with throws; convert to user-friendly messages at boundaries.' },
        { id: 'q45', title: 'Codable nuances?', content: 'Custom CodingKeys for snake_case, handle missing/nullable fields, use decodeIfPresent. Date encoding strategies.' },
        { id: 'q46', title: 'Package layout?', content: 'Use modularization via Swift packages or Xcode projects. Separate core logic, networking, UI. Keep interfaces small.' },
        { id: 'q47', title: 'Interoperability with Objective-C?', content: 'Use @objc for exposure, dynamic dispatch, and bridging headers. Not all Swift features (generics/structs/enums with assoc values) bridge directly.' },
        { id: 'q48', title: 'Security practices?', content: 'Store secrets in Keychain, use ATS/HTTPS, validate certificates if pinning, avoid storing tokens in UserDefaults, protect PII.' },
        { id: 'q49', title: 'Concurrency testing?', content: 'Use XCTest async tests, expectations, and Task APIs. Verify actor isolation and race conditions with Thread Sanitizer.' },
        { id: 'q50', title: 'Common pitfalls?', content: 'Force unwraps, retain cycles, blocking main thread, misuse of ! with optionals, not handling errors, overusing singletons.' }
      ]
    }
  ]
};
