import { TheoryTopic } from '@/types/theory';

export const rustTheory: TheoryTopic = {
  topicId: 'rust',
  topicName: 'Rust',
  category: 'Languages',
  description: 'Rust systems language focusing on memory safety without GC, ownership, and fearless concurrency.',
  sections: [
    {
      id: 'ownership',
      title: 'Ownership and Borrowing',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is ownership?', content: 'Each value has one owner; when owner goes out of scope, value is dropped. Prevents use-after-free and double free.' },
        { id: 'q2', title: 'Moves vs copies?', content: 'Types implementing Copy are bitwise-copied; others move on assignment/passing. After move, original binding invalid.' },
        { id: 'q3', title: 'Borrowing?', content: 'References (&T immutable, &mut T mutable) temporarily access data without taking ownership. Rules enforced at compile time.' },
        { id: 'q4', title: 'Borrow checker rules?', content: 'At most one mutable reference or many immutable references at a time. References must not outlive borrowed value.' },
        { id: 'q5', title: 'Lifetimes?', content: 'Annotations describe how long references are valid. Usually inferred. Needed when multiple refs and compiler cannot deduce.' },
        { id: 'q6', title: 'Slices?', content: 'Views into collections (&[T], &str). Borrow data without owning. String literals are &str with static lifetime.' },
        { id: 'q7', title: 'Drop?', content: 'Drop trait runs when value goes out of scope. RAII ensures resources (files/locks) released deterministically.' },
        { id: 'q8', title: 'Smart pointers?', content: 'Box for heap allocation, Rc for shared ownership (single-thread), Arc for atomic shared ownership (multi-thread), RefCell for interior mutability.' },
        { id: 'q9', title: 'Interior mutability?', content: 'RefCell/Mutex allow mutation through shared references with runtime checks/locks. Use sparingly and document invariants.' },
        { id: 'q10', title: 'Common pitfalls?', content: 'Dangling references prevented by compiler; main friction is lifetime annotations and borrow checker errors—fix by adjusting scopes/ownership.' }
      ]
    },
    {
      id: 'types',
      title: 'Types, Traits, and Modules',
      content: '',
      subsections: [
        { id: 'q11', title: 'Enums and pattern matching?', content: 'Enums can carry data (algebraic data types). match exhaustively handles variants. if let/while let for concise matching.' },
        { id: 'q12', title: 'Traits?', content: 'Traits define shared behavior (similar to interfaces). Implement on types. Trait bounds constrain generics.' },
        { id: 'q13', title: 'Generics?', content: 'Parametric types/functions with trait bounds: fn foo<T: Display>(t: T). Monomorphized at compile time for performance.' },
        { id: 'q14', title: 'Associated types?', content: 'Traits can define placeholder types to be specified by implementers. Reduces generic noise (e.g., Iterator::Item).' },
        { id: 'q15', title: 'Modules and privacy?', content: 'mod organizes code. pub makes items public. crate root (lib.rs/main.rs). use to bring paths into scope. pub(crate)/pub(super) for scoping.' },
        { id: 'q16', title: 'Error handling?', content: 'Result<T, E> for recoverable errors; ? operator propagates. unwrap/expect panics—avoid in production paths.' },
        { id: 'q17', title: 'Option type?', content: 'Option<T> represents presence/absence. match or combinators (map, and_then, unwrap_or) to handle safely.' },
        { id: 'q18', title: 'Type inference?', content: 'Rust infers many types but not all. Annotate when ambiguous. let x: i32 = 5; helps clarity.' },
        { id: 'q19', title: 'Trait objects?', content: 'dyn Trait for dynamic dispatch when size unknown or heterogeneous collections. Requires object-safe traits (no generic methods returning Self).' },
        { id: 'q20', title: 'Common std traits?', content: 'Debug, Display, Clone, Copy, Eq/Ord, Hash, Send/Sync, Iterator. Derive when possible.' }
      ]
    },
    {
      id: 'concurrency',
      title: 'Concurrency and Async',
      content: '',
      subsections: [
        { id: 'q21', title: 'Threads?', content: 'std::thread::spawn to create OS threads. Move captured data into closure. Join handles to wait for completion.' },
        { id: 'q22', title: 'Send and Sync?', content: 'Auto-derived marker traits ensuring thread safety. Types must be Send to move across threads, Sync to share refs across threads.' },
        { id: 'q23', title: 'Channels?', content: 'std::sync::mpsc channels for message passing. Many crates (crossbeam) offer faster multi-producer channels.' },
        { id: 'q24', title: 'Mutex and RwLock?', content: 'Mutual exclusion primitives. Lock returns guard implementing Deref. Beware deadlocks; lock ordering and scoping matter.' },
        { id: 'q25', title: 'Atomics?', content: 'Atomic types for lock-free flags/counters. Memory orderings control visibility; use Relaxed/Acquire/Release/SeqCst carefully.' },
        { id: 'q26', title: 'Async/await?', content: 'Rust async uses Futures and poll-based executors (Tokio/async-std). async fn returns Future; .await drives it on executor.' },
        { id: 'q27', title: 'Pinning?', content: 'Futures must not move after polling when self-referential. Pin ensures memory stability. Usually handled by async/await.' },
        { id: 'q28', title: 'Select and streams?', content: 'Futures crate select! or tokio::select! to await multiple futures. Streams represent async sequences.' },
        { id: 'q29', title: 'Cancellation?', content: 'Dropping a future cancels it. Use timeouts (tokio::time::timeout) and cooperative checks to stop tasks.' },
        { id: 'q30', title: 'Common pitfalls?', content: 'Blocking in async tasks, holding locks across .await causing deadlocks, forgetting Send on futures, moving non-Send into async tasks.' }
      ]
    },
    {
      id: 'tooling',
      title: 'Tooling and Ecosystem',
      content: '',
      subsections: [
        { id: 'q31', title: 'Cargo?', content: 'Build/test/dependency manager. Cargo.toml defines package and deps. cargo build/run/test/doc/clippy/fmt common commands.' },
        { id: 'q32', title: 'Crates.io?', content: 'Public package registry. Use semantic versions. Lockfile Cargo.lock ensures reproducible builds.' },
        { id: 'q33', title: 'Clippy and fmt?', content: 'cargo fmt enforces style. cargo clippy lints for idioms and potential bugs. Run in CI.' },
        { id: 'q34', title: 'Testing?', content: 'cargo test runs unit/integration tests. #[test] attribute for functions. Doc tests inside /// comments.' },
        { id: 'q35', title: 'Workspaces?', content: 'Manage multiple packages together. Shared Cargo.lock, easier inter-package deps. Useful for monorepos.' },
        { id: 'q36', title: 'Build profiles?', content: 'dev vs release; release enables optimizations. Customize profiles for lto, opt-level, debug info.' },
        { id: 'q37', title: 'Unsafe Rust?', content: 'unsafe blocks allow actions compiler can’t guarantee (raw pointers, FFI). Minimize surface; encapsulate behind safe APIs.' },
        { id: 'q38', title: 'FFI?', content: 'extern "C" for interoperability. Use bindgen for headers. Be careful with lifetimes, ownership across boundaries.' },
        { id: 'q39', title: 'Logging and tracing?', content: 'log facade with env_logger, tracing crate for structured spans/events. Configure subscribers for output.' },
        { id: 'q40', title: 'Common crates?', content: 'serde for serialization, tokio/async-std for async, reqwest for HTTP, clap for CLI, anyhow/thiserror for errors.' }
      ]
    },
    {
      id: 'best',
      title: 'Best Practices',
      content: '',
      subsections: [
        { id: 'q41', title: 'Error handling?', content: 'Prefer Result with thiserror/anyhow for ergonomics. Use ? to propagate. Avoid panics except for unrecoverable bugs.' },
        { id: 'q42', title: 'API design?', content: 'Expose minimal surface, return iterators, avoid exposing concrete types when trait objects suffice, document lifetimes/ownership.' },
        { id: 'q43', title: 'Performance?', content: 'Use release builds, minimize allocations, leverage iterators, avoid clone, profile with perf/flamegraph, use borrowing over owning.' },
        { id: 'q44', title: 'Concurrency safety?', content: 'Prefer channels or scoped tasks, minimize lock scope, avoid blocking in async, ensure Send/Sync for shared types as needed.' },
        { id: 'q45', title: 'Documentation?', content: 'Doc comments /// with examples, doc tests, clear semantics about ownership and errors.' },
        { id: 'q46', title: 'Security?', content: 'Validate inputs, handle integer overflows where relevant, be careful with unsafe and FFI, update deps for vulns.' },
        { id: 'q47', title: 'Refactoring with lifetimes?', content: 'Reduce lifetimes by owning where reasonable, use Arc for sharing, break functions to simplify borrow checker constraints.' },
        { id: 'q48', title: 'Common pitfalls?', content: 'Fight borrow checker with large scopes; fix by tightening scopes. Overusing clone. Holding locks across awaits. Ignoring Send/Sync.' },
        { id: 'q49', title: 'Learning path?', content: 'Master ownership/borrowing, enums/pattern matching, Result/Option, iterators, traits, then async and unsafe when needed.' },
        { id: 'q50', title: 'Debugging?', content: 'Use RUST_BACKTRACE, dbg!, tracing/logging, cargo expand for macros, clippy for hints, miri for UB checks.' }
      ]
    }
  ]
};
