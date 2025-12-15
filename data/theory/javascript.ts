import { TheoryTopic } from '@/types/theory';

export const javascriptTheory: TheoryTopic = {
  topicId: 'javascript',
  topicName: 'JavaScript (ES6+)',
  category: 'Languages',
  description: 'Modern JavaScript including ES6+ features and async programming',
  sections: [
    {
      id: 'basics',
      title: 'JavaScript Basics',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is JavaScript and its key features?', content: 'JavaScript is a dynamic, interpreted programming language for web development. Key features: prototype-based OOP, first-class functions, closures, dynamic typing, event-driven, asynchronous programming. Runs in browsers (client-side) and Node.js (server-side). ECMAScript is the standard specification.' },
        { id: 'q2', title: 'What are JavaScript data types?', content: 'Primitives: undefined, null, boolean, number, string, symbol (ES6), bigint (ES2020). Objects: Object, Array, Function, Date, RegExp, etc. typeof operator returns type. null returns "object" (historical bug). Use === for strict equality, == for type coercion.' },
        { id: 'q3', title: 'What is the difference between var, let, and const?', content: 'var: function-scoped, hoisted, can be redeclared. let: block-scoped, hoisted but in TDZ, cannot be redeclared, can be reassigned. const: block-scoped, must be initialized, cannot be reassigned (but object properties can change). Prefer const, use let when reassignment needed, avoid var.' },
        { id: 'q4', title: 'What is hoisting?', content: 'Hoisting moves variable and function declarations to the top of their scope. var declarations are hoisted and initialized with undefined. let/const are hoisted but in Temporal Dead Zone (TDZ) until initialization. Function declarations are fully hoisted. Function expressions are not hoisted.' },
        { id: 'q5', title: 'What is closure?', content: 'Closure is when a function has access to variables in its outer (enclosing) scope even after the outer function has returned. Functions "remember" their lexical environment. Enables data privacy, function factories, and module patterns. Common in callbacks and event handlers.' },
        { id: 'q6', title: 'What is the difference between == and ===?', content: '== performs type coercion (converts types before comparison). === is strict equality (no coercion, compares type and value). Always prefer === to avoid unexpected type conversions. == can lead to bugs: 0 == false is true, but 0 === false is false.' },
        { id: 'q7', title: 'What is this keyword?', content: 'this refers to the execution context. In global scope: window (browser) or global (Node). In methods: the object calling the method. In arrow functions: lexical this (from enclosing scope). Can be bound using call(), apply(), bind(). Behavior depends on how function is called.' },
        { id: 'q8', title: 'What is scope in JavaScript?', content: 'Scope determines variable accessibility. Global scope: accessible everywhere. Function scope: variables accessible within function. Block scope (ES6): variables accessible within {} blocks (let/const). Lexical scoping: inner functions access outer scope. Scope chain: JavaScript searches up the chain for variables.' },
        { id: 'q9', title: 'What is the difference between null and undefined?', content: 'undefined: variable declared but not assigned, missing function parameters, missing object properties. null: explicitly assigned empty value, represents intentional absence. typeof undefined is "undefined", typeof null is "object" (bug). Use null for intentional empty values, undefined for uninitialized.' },
        { id: 'q10', title: 'What are truthy and falsy values?', content: 'Falsy values: false, 0, -0, 0n, "", null, undefined, NaN. Everything else is truthy. Used in conditionals: if (value) checks truthiness. Use Boolean() or !! to convert. Be careful with 0, "", and [] in conditionals. Use === for explicit checks when needed.' }
      ]
    },
    {
      id: 'es6',
      title: 'ES6+ Features',
      content: '',
      subsections: [
        { id: 'q11', title: 'What are arrow functions?', content: 'Arrow functions (=>) provide concise syntax. Differences: lexical this binding, no arguments object, cannot be used as constructors, no prototype property. Syntax: (params) => expression or (params) => { statements }. Useful for callbacks and maintaining this context.' },
        { id: 'q12', title: 'What is destructuring?', content: 'Destructuring extracts values from arrays/objects into variables. Array: const [a, b] = [1, 2]. Object: const {name, age} = person. Can use default values, rest operator, nested destructuring. Useful for function parameters, swapping variables, extracting API responses.' },
        { id: 'q13', title: 'What are template literals?', content: 'Template literals use backticks (`) and allow embedded expressions with ${}. Support multi-line strings, expression interpolation, tagged templates. More readable than string concatenation. Example: `Hello ${name}, you are ${age} years old`' },
        { id: 'q14', title: 'What are default parameters?', content: 'Default parameters provide fallback values when arguments are undefined. Syntax: function greet(name = "Guest"). Only undefined triggers default, not null or other falsy values. Can use expressions and previous parameters. Improves function flexibility and reduces conditional checks.' },
        { id: 'q15', title: 'What is the spread operator?', content: 'Spread operator (...) expands iterables. Array: [...arr1, ...arr2] combines arrays. Object: {...obj1, ...obj2} merges objects. Function calls: Math.max(...numbers). Creates shallow copies. Useful for cloning, merging, passing array elements as arguments.' },
        { id: 'q16', title: 'What is the rest parameter?', content: 'Rest parameter (...) collects remaining arguments into an array. Syntax: function sum(...numbers). Must be last parameter. Replaces arguments object. Provides true array with array methods. Useful for variadic functions and collecting remaining elements.' },
        { id: 'q17', title: 'What are classes in ES6?', content: 'Classes provide syntactic sugar over prototype-based inheritance. Syntax: class MyClass { constructor() {}, methods() {} }. Supports extends for inheritance, super for parent access, static methods, getters/setters. Still prototype-based under the hood. More familiar syntax for OOP developers.' },
        { id: 'q18', title: 'What are modules (ES6)?', content: 'ES6 modules provide import/export for code organization. export: named exports, default export. import: import { name } from "./module", import defaultName from "./module". Modules are in strict mode, have own scope, are hoisted. Enables tree-shaking and better dependency management.' },
        { id: 'q19', title: 'What are Promises?', content: 'Promises represent eventual completion of async operations. States: pending, fulfilled, rejected. Methods: then() (success), catch() (error), finally() (always). Chaining enables sequential async operations. Avoids callback hell. Promise.all() waits for all, Promise.race() for first.' },
        { id: 'q20', title: 'What is async/await?', content: 'async/await provides synchronous-looking syntax for Promises. async function returns Promise. await pauses execution until Promise resolves. try/catch handles errors. More readable than Promise chains. await can only be used in async functions. Enables sequential async code flow.' }
      ]
    },
    {
      id: 'objects',
      title: 'Objects and Arrays',
      content: '',
      subsections: [
        { id: 'q21', title: 'What are objects in JavaScript?', content: 'Objects are collections of key-value pairs. Keys are strings (or Symbols). Values can be any type. Created with {} or new Object(). Properties accessed with dot notation or bracket notation. Objects are mutable. Can add/remove properties dynamically. Prototype chain enables inheritance.' },
        { id: 'q22', title: 'What is object destructuring?', content: 'Object destructuring extracts properties into variables. Basic: const {name, age} = person. Renaming: const {name: fullName}. Default values: const {name = "Unknown"}. Nested: const {address: {city}}. Rest: const {name, ...rest}. Useful for function parameters and extracting data.' },
        { id: 'q23', title: 'What are array methods?', content: 'Common methods: map() (transform), filter() (select), reduce() (accumulate), forEach() (iterate), find() (search), some()/every() (test), sort() (order), slice() (copy), splice() (modify). Most return new arrays (immutable style). Chainable for functional programming.' },
        { id: 'q24', title: 'What is the difference between map() and forEach()?', content: 'map() returns new array with transformed elements, doesn\'t mutate original. forEach() executes function for each element, returns undefined, may mutate original. Use map() when you need transformed array, forEach() for side effects. map() is chainable, forEach() is not.' },
        { id: 'q25', title: 'What is reduce()?', content: 'reduce() accumulates array into single value. Syntax: array.reduce((accumulator, current) => {}, initialValue). Accumulator carries result between iterations. Can sum numbers, flatten arrays, group objects, transform data structures. Powerful for complex transformations.' },
        { id: 'q26', title: 'What is the difference between slice() and splice()?', content: 'slice() returns new array with selected elements, doesn\'t modify original. Syntax: array.slice(start, end). splice() modifies array by removing/adding elements, returns removed elements. Syntax: array.splice(start, deleteCount, ...items). slice() for copying, splice() for modifying.' },
        { id: 'q27', title: 'What are Set and Map?', content: 'Set stores unique values, no duplicates. Methods: add(), delete(), has(), size. Map stores key-value pairs, keys can be any type (not just strings). Methods: set(), get(), delete(), has(), size. Both are iterable. Use Set for unique collections, Map for key-value storage with non-string keys.' },
        { id: 'q28', title: 'What is JSON?', content: 'JSON (JavaScript Object Notation) is data format. JSON.stringify() converts object to JSON string. JSON.parse() converts JSON string to object. Used for data exchange. Supports: strings, numbers, booleans, null, objects, arrays. Doesn\'t support: functions, undefined, Symbols, dates (converted to strings).' },
        { id: 'q29', title: 'What is object cloning?', content: 'Shallow copy: Object.assign({}, obj) or {...obj} copies top-level properties. Deep copy: JSON.parse(JSON.stringify(obj)) (limitations with functions/dates), or structuredClone() (modern browsers). Shallow copy shares nested objects. Deep copy creates independent copies. Choose based on needs.' },
        { id: 'q30', title: 'What is the prototype chain?', content: 'Prototype chain enables inheritance. Each object has __proto__ pointing to prototype. When property not found, JavaScript searches up the chain. Object.prototype is root. Functions have prototype property for instances. Prototype-based inheritance is JavaScript\'s inheritance model. Can modify prototypes (carefully).' }
      ]
    },
    {
      id: 'async',
      title: 'Asynchronous Programming',
      content: '',
      subsections: [
        { id: 'q31', title: 'What is the event loop?', content: 'Event loop manages async operations. Single-threaded JavaScript uses event loop for concurrency. Call stack executes synchronous code. Callback queue holds async callbacks. Event loop moves callbacks from queue to stack when stack is empty. Enables non-blocking I/O operations.' },
        { id: 'q32', title: 'What are callbacks?', content: 'Callbacks are functions passed as arguments, executed later. Used for async operations: setTimeout(), event handlers, API calls. Callback hell: nested callbacks become hard to read. Promises and async/await solve this. Still used in many APIs and libraries.' },
        { id: 'q33', title: 'What is Promise.all()?', content: 'Promise.all() waits for all Promises to resolve, returns array of results. If any Promise rejects, entire Promise.all() rejects. Useful for parallel async operations. All Promises execute concurrently. Fails fast on first rejection. Use when all operations must succeed.' },
        { id: 'q34', title: 'What is Promise.race()?', content: 'Promise.race() returns first settled Promise (resolve or reject). Useful for timeouts and first-to-complete scenarios. Other Promises continue but results are ignored. First to settle wins. Can be used to implement request timeouts.' },
        { id: 'q35', title: 'What is Promise.allSettled()?', content: 'Promise.allSettled() waits for all Promises to settle (resolve or reject). Returns array with status and value/reason for each. Never rejects. Useful when you need results from all operations regardless of failures. Each result has status: "fulfilled" or "rejected".' },
        { id: 'q36', title: 'What are async generators?', content: 'Async generators combine generators with async. Syntax: async function* gen() { yield await promise }. Can yield Promises. Use for...await...of to iterate. Useful for streaming data, pagination, processing async sequences. Enables async iteration patterns.' },
        { id: 'q37', title: 'What is fetch API?', content: 'fetch() provides modern way to make HTTP requests. Returns Promise resolving to Response. Methods: json(), text(), blob(). Supports options: method, headers, body. Doesn\'t reject on HTTP errors (only network errors). Use .then() or async/await. More modern than XMLHttpRequest.' },
        { id: 'q38', title: 'What is error handling in async code?', content: 'Use try/catch with async/await. Use .catch() with Promises. Handle both sync and async errors. Don\'t forget error handling - unhandled rejections are problematic. Use Promise.all() with error handling. Consider error boundaries in frameworks. Log errors appropriately.' },
        { id: 'q39', title: 'What is debouncing and throttling?', content: 'Debouncing delays function execution until after specified time since last call (e.g., search input). Throttling limits function execution to once per time period (e.g., scroll events). Both optimize performance. Use debounce for input, throttle for scroll/resize. Libraries like Lodash provide implementations.' },
        { id: 'q40', title: 'What is Web Workers?', content: 'Web Workers run scripts in background threads. Don\'t block main thread. Communicate via postMessage(). Useful for CPU-intensive tasks. No DOM access. Can use SharedArrayBuffer for shared memory. Service Workers are special type for offline/PWA functionality. Enables true parallelism in browsers.' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced JavaScript',
      content: '',
      subsections: [
        { id: 'q41', title: 'What is strict mode?', content: 'Strict mode enables stricter parsing and error handling. Enable with "use strict". Prevents: undeclared variables, duplicate parameters, this coercion, deleting properties. Makes debugging easier. Modules and classes are automatically in strict mode. Recommended for all new code.' },
        { id: 'q42', title: 'What are Symbols?', content: 'Symbols (ES6) are unique, immutable primitive values. Created with Symbol() or Symbol.for(). Use as object keys for privacy. Each Symbol is unique. Symbol.for() creates global symbols. Useful for: private properties, well-known symbols (Symbol.iterator), avoiding property name conflicts.' },
        { id: 'q43', title: 'What are iterators and generators?', content: 'Iterators are objects with next() method returning {value, done}. Generators are functions with yield that return iterators. Syntax: function* gen() { yield value }. Enable lazy evaluation and custom iteration. for...of uses iterators. Can create infinite sequences. Useful for data processing.' },
        { id: 'q44', title: 'What is memoization?', content: 'Memoization caches function results for same inputs. Avoids redundant calculations. Implement with Map or object cache. Check cache before computing. Store results after computing. Useful for expensive computations, recursive functions. Libraries provide memoization utilities.' },
        { id: 'q45', title: 'What is currying?', content: 'Currying transforms function with multiple arguments into sequence of functions with single arguments. f(a,b,c) becomes f(a)(b)(c). Enables partial application. Useful for function composition and reusability. Common in functional programming. Can implement with closures or arrow functions.' },
        { id: 'q46', title: 'What is the module pattern?', content: 'Module pattern uses closures to create private scope. IIFE (Immediately Invoked Function Expression) creates module. Returns public API. Private variables and functions stay hidden. Before ES6 modules, this was main way to organize code. Still useful for legacy code and specific use cases.' },
        { id: 'q47', title: 'What is the difference between function declaration and expression?', content: 'Declaration: function name() {} - hoisted, can be called before definition. Expression: const name = function() {} - not hoisted, must be defined before use. Arrow functions are expressions. Declarations are hoisted, expressions are not. Choose based on hoisting needs.' },
        { id: 'q48', title: 'What is the call stack?', content: 'Call stack tracks function calls. LIFO structure. When function is called, it\'s pushed. When it returns, it\'s popped. Stack overflow occurs with infinite recursion. Browser DevTools show stack traces. Understanding stack helps with debugging and recursion.' },
        { id: 'q49', title: 'What is memory management?', content: 'JavaScript uses automatic garbage collection. Mark-and-sweep algorithm. Objects unreachable are collected. Memory leaks: global variables, closures holding references, event listeners, timers. Use weak references (WeakMap, WeakSet) when appropriate. Monitor memory in DevTools.' },
        { id: 'q50', title: 'What are JavaScript best practices?', content: 'Use const/let, avoid var. Use === instead of ==. Handle errors properly. Use async/await for async code. Follow naming conventions. Keep functions small and focused. Use meaningful variable names. Avoid global variables. Use modules for organization. Write readable, maintainable code. Use linters (ESLint).' }
      ]
    }
  ]
};
