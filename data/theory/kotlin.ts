import { TheoryTopic } from '@/types/theory';

export const kotlinTheory: TheoryTopic = {
  topicId: 'kotlin',
  topicName: 'Kotlin',
  category: 'Languages',
  description: 'Kotlin for JVM, Android, and multiplatform development with strong null safety and concise syntax.',
  sections: [
    {
      id: 'basics',
      title: 'Kotlin Basics',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is Kotlin?', content: 'Kotlin is a modern, statically typed language by JetBrains for JVM, Android, and multiplatform. It offers concise syntax, null safety, coroutines, and full Java interoperability.' },
        { id: 'q2', title: 'var vs val?', content: 'val is immutable (read-only reference), var is mutable. Prefer val by default to reduce bugs. val objects can still mutate internal state unless properties are immutable.' },
        { id: 'q3', title: 'What is null safety?', content: 'Types are non-null by default. Nullable types use ?: String?. Access requires safe calls (?.), Elvis (?:), or !! (unsafe). Eliminates most NullPointerExceptions.' },
        { id: 'q4', title: 'Type inference?', content: 'The compiler infers obvious types: val x = 3 // Int. Improves brevity while remaining statically typed. Use explicit types for public APIs and clarity.' },
        { id: 'q5', title: 'String templates?', content: 'Embed expressions with $var or ${expr}. Example: "Hello $name" or "Length ${s.length}". Safer and shorter than concatenation.' },
        { id: 'q6', title: 'when expression?', content: 'when replaces switch with expression style. Supports value checks, type checks (is), range/in checks, and else. Returns a value when used as expression.' },
        { id: 'q7', title: 'Ranges and progressions?', content: 'Use 1..5, 5 downTo 1, step 2. Works in loops and containment checks. until excludes end: 1 until 5 => 1..4.' },
        { id: 'q8', title: 'Data types overview?', content: 'Common types: Int, Long, Double, Boolean, String, Char. Collections: List, MutableList, Set, Map. Arrays are Array<T> or primitive arrays like IntArray.' },
        { id: 'q9', title: 'Top-level functions?', content: 'Kotlin allows functions outside classes. Compiled to static methods. Encourages utility functions without heavy wrappers.' },
        { id: 'q10', title: 'Default and named arguments?', content: 'Functions can set default parameter values and be called with named args to improve readability and reduce overloads.' }
      ]
    },
    {
      id: 'oop-functions',
      title: 'OOP and Functions',
      content: '',
      subsections: [
        { id: 'q11', title: 'Classes and primary constructors?', content: 'class User(val name: String, var age: Int). Primary constructor parameters can be properties with val/var. init blocks run after constructor.' },
        { id: 'q12', title: 'Data classes?', content: 'Data classes auto-generate equals, hashCode, toString, copy, and componentN. Require at least one val/var in primary constructor. Ideal for value objects.' },
        { id: 'q13', title: 'Sealed classes?', content: 'Sealed classes restrict inheritance to the same file, enabling exhaustive when for variants. Great for modeling states/results safely.' },
        { id: 'q14', title: 'Companion objects?', content: 'Singleton per class for factory methods or constants. Replaces Java static members. Can implement interfaces. Access via ClassName.Companion or ClassName directly.' },
        { id: 'q15', title: 'Interfaces and multiple inheritance?', content: 'Kotlin supports multiple interfaces. If method conflict arises, override and disambiguate with super<Interface>. Classes have single inheritance.' },
        { id: 'q16', title: 'Extension functions?', content: 'Add functions to existing types without inheritance: fun String.snake() = ... Static dispatch; cannot access private members. Great for utilities.' },
        { id: 'q17', title: 'Higher-order functions and lambdas?', content: 'Functions are first-class. Pass functions as parameters: fun apply(x: Int, f: (Int) -> Int). Lambdas use { x -> x * 2 } and implicit it when single param.' },
        { id: 'q18', title: 'Inline functions?', content: 'inline keyword copies function body at call sites, removing lambda allocation overhead and enabling non-local returns. Use for small HOFs; avoid over-inlining large bodies.' },
        { id: 'q19', title: 'Visibility modifiers?', content: 'public (default), internal (module-wide), protected (class/subclasses), private (file or class). File-private limits to the file scope.' },
        { id: 'q20', title: 'Delegation?', content: 'Class delegation: class Repo(api: Api) : Api by api. Property delegation: val name by lazy { ... }, var state by mutableStateOf(...). Reduces boilerplate and reuses behavior.' }
      ]
    },
    {
      id: 'collections-coroutines',
      title: 'Collections and Coroutines',
      content: '',
      subsections: [
        { id: 'q21', title: 'Immutable vs mutable collections?', content: 'List/Set/Map are read-only views; MutableList/MutableSet/MutableMap allow mutation. Prefer immutable to reduce side effects.' },
        { id: 'q22', title: 'Common collection operations?', content: 'map, filter, reduce, fold, flatMap, groupBy, associateBy, sortedBy. Sequences provide lazy evaluation for large chains.' },
        { id: 'q23', title: 'What are coroutines?', content: 'Lightweight concurrency primitives. Structured, cancellable, suspendable. Implemented via continuations. Cheaper than threads.' },
        { id: 'q24', title: 'suspend functions?', content: 'suspend marks functions that can pause without blocking threads. Can only be called from other suspending contexts or coroutine builders.' },
        { id: 'q25', title: 'Coroutine builders?', content: 'launch (fire-and-forget), async (returns Deferred for result), withContext (switch dispatcher), runBlocking (bridge blocking). Provided by kotlinx.coroutines.' },
        { id: 'q26', title: 'Dispatchers?', content: 'Dispatchers.Default (CPU), IO (blocking IO), Main (UI), Unconfined (advanced). Choose based on workload. withContext switches dispatcher safely.' },
        { id: 'q27', title: 'Structured concurrency?', content: 'Coroutines launched in a scope are canceled together. Use CoroutineScope + Job hierarchy. Avoid GlobalScope except for app-wide tasks.' },
        { id: 'q28', title: 'Channels vs Flow?', content: 'Channels are hot, push-based pipes for coroutines. Flow is cold, lazy async stream with operators. StateFlow/SharedFlow for state and hot streams.' },
        { id: 'q29', title: 'Exception handling in coroutines?', content: 'Use try/catch inside suspend, CoroutineExceptionHandler for uncaught exceptions in launch, supervisorScope for isolating failures. async exceptions surface on await.' },
        { id: 'q30', title: 'Testing coroutines?', content: 'Use kotlinx-coroutines-test with runTest, TestScope, TestDispatcher. Advance virtual time, control dispatchers, ensure structured concurrency in tests.' }
      ]
    },
    {
      id: 'platform',
      title: 'Platform & Interop',
      content: '',
      subsections: [
        { id: 'q31', title: 'Java interoperability?', content: '100% interop: call Java from Kotlin and vice versa. Use @JvmOverloads, @JvmStatic, @file:JvmName to adjust JVM signatures. Nullability annotated via @Nullable/@NotNull.' },
        { id: 'q32', title: 'SAM conversions?', content: 'Single Abstract Method interfaces can be passed lambdas: setOnClickListener { }. Kotlin automatically wraps lambdas into SAM instances for Java interop.' },
        { id: 'q33', title: 'Checked exceptions?', content: 'Kotlin has no checked exceptions. Java methods with checked exceptions can still throw; caller decides handling. Use @Throws to expose checked exceptions to Java.' },
        { id: 'q34', title: 'Kotlin Multiplatform?', content: 'Shared code in commonMain with expect/actual implementations per platform (JVM, JS, Native). Share business logic; platform-specific UIs.' },
        { id: 'q35', title: 'Android-specific extensions?', content: 'KTX libraries provide idiomatic Kotlin APIs: view binding, coroutines with lifecycleScope, LiveData/Flow extensions, concise preferences/datastore access.' },
        { id: 'q36', title: 'Nullability from Java?', content: 'Platform types (String!) come from Java where nullability unknown. Treat carefully; add explicit types or use safe calls to avoid NPEs.' },
        { id: 'q37', title: 'Annotations for interop?', content: 'Use @JvmName, @JvmStatic, @JvmField, @JvmOverloads for Java-friendly APIs. @file:JvmName changes generated class name for top-level members.' },
        { id: 'q38', title: 'Inline/value classes?', content: 'Inline/value classes wrap a single value with zero or minimal overhead: @JvmInline value class Email(val value: String). Enforce type safety without allocations.' },
        { id: 'q39', title: 'Destructuring declarations?', content: 'Data classes generate componentN enabling destructuring: val (name, age) = user. Works in lambdas (mapIndexed) and for loops (for ((k,v) in map)).' },
        { id: 'q40', title: 'Typealiases?', content: 'typealias simplifies long types: typealias UserId = String, typealias Callback = (Result) -> Unit. No new type, just alias.' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced Kotlin',
      content: '',
      subsections: [
        { id: 'q41', title: 'Generics variance?', content: 'Declaration-site variance: out (covariant) for producers, in (contravariant) for consumers. Use-site: star-projection *. Prevents type safety issues.' },
        { id: 'q42', title: 'Reified type parameters?', content: 'inline fun <reified T> printType() lets you access T at runtime, enabling is checks, reflection, and type-based factories without passing KClass.' },
        { id: 'q43', title: 'Operator overloading?', content: 'Provide operator functions (operator fun plus, get, invoke) for custom types. Must remain intuitive. Enables DSLs and collection-like behaviors.' },
        { id: 'q44', title: 'DSL construction?', content: 'Kotlin supports DSLs with lambdas with receiver, infix functions, and named/optional args. Examples: Gradle Kotlin DSL, kotlinx.html.' },
        { id: 'q45', title: 'Lazy and observable properties?', content: 'Delegates: lazy for single-eval, observable/vetoable for change tracking. Example: var state by observable(0) { _, old, new -> ... }.' },
        { id: 'q46', title: 'Equality types?', content: 'Structural equality (==) calls equals. Referential equality (===) compares references. Data classes implement equals based on properties.' },
        { id: 'q47', title: 'Collections null safety patterns?', content: 'Avoid nullable collections when possible. Use emptyList() instead of null. For nullable elements, mapNotNull, filterNotNull aid safety.' },
        { id: 'q48', title: 'Performance considerations?', content: 'Prefer sequences for large chained operations, inline small HOFs, avoid creating many intermediate lists. Use value classes to avoid wrappers.' },
        { id: 'q49', title: 'Testing Kotlin code?', content: 'Use JUnit5/Kotest/MockK. Coroutines: runTest and TestDispatcher. Property-based testing with kotest-check. Prefer pure functions and immutability.' },
        { id: 'q50', title: 'Common pitfalls?', content: 'Misusing !! causing NPEs, leaking coroutines without scope, blocking inside coroutines, ignoring platform types, overusing var instead of val, forgetting exhaustiveness on sealed when.' }
      ]
    }
  ]
};
