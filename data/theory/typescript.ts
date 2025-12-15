import { TheoryTopic } from '@/types/theory';

export const typescriptTheory: TheoryTopic = {
  topicId: 'typescript',
  topicName: 'TypeScript',
  category: 'Languages',
  description: 'TypeScript typed superset of JavaScript',
  sections: [
    {
      id: 'basics',
      title: 'TypeScript Basics',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is TypeScript?', content: 'TypeScript is a typed superset of JavaScript developed by Microsoft. Adds static typing, interfaces, generics, and other features. Compiles to JavaScript. Catches errors at compile time. Improves IDE support with autocompletion. Used in Angular, React, Vue, Node.js. File extension: .ts, .tsx for JSX.' },
        { id: 'q2', title: 'What are basic types in TypeScript?', content: 'Basic types: string, number, boolean, null, undefined, void, never, any, unknown. Arrays: number[] or Array<number>. Tuples: [string, number]. Enum: enum Color { Red, Green }. Object types: { name: string }. Literal types: "hello" | "world". Type annotation: let x: number = 5;' },
        { id: 'q3', title: 'What is type inference?', content: 'TypeScript infers types from values: let x = 5; // x is number. Works for variables, return types, array elements. Reduces annotation need. Best common type for arrays. Contextual typing for callbacks. Hover in IDE shows inferred type. Explicit annotations when inference isn\'t sufficient.' },
        { id: 'q4', title: 'What is the difference between any and unknown?', content: 'any: disables type checking, any operation allowed. unknown: type-safe any, must narrow before use. Prefer unknown for external data. any: let x: any; x.foo(); // OK. unknown: let x: unknown; x.foo(); // Error. Type guard required for unknown: if (typeof x === "string").' },
        { id: 'q5', title: 'What are union types?', content: 'Union types allow multiple types: let x: string | number. Use | operator. Type narrowing needed for type-specific operations. Common with null: string | null. Discriminated unions: { type: "a" } | { type: "b" }. Useful for flexible parameters and return types.' },
        { id: 'q6', title: 'What are intersection types?', content: 'Intersection types combine multiple types: Type1 & Type2. Object has all properties of both. Used for mixins: Person & Serializable. Different from union (| - one or other). Intersecting primitives: never (no value can be both). Useful for extending types.' },
        { id: 'q7', title: 'What is type assertion?', content: 'Type assertion tells compiler to treat value as specific type. Syntax: value as Type or <Type>value (not in JSX). Doesn\'t change runtime value. Use when you know more than TypeScript. Example: (document.getElementById("id") as HTMLInputElement).value. Use carefully, bypasses type checking.' },
        { id: 'q8', title: 'What is type narrowing?', content: 'Type narrowing refines types within conditional blocks. Type guards: typeof, instanceof, in, custom predicates. if (typeof x === "string") - x is string inside. Discriminated unions use common property. Truthiness narrows out null/undefined. Essential for working with union types.' },
        { id: 'q9', title: 'What is never type?', content: 'never represents values that never occur. Functions that never return (throw, infinite loop). Exhaustiveness checking in switch. Empty union after narrowing. Never is subtype of all types, nothing is subtype of never. Useful for impossible states: function fail(): never { throw new Error(); }' },
        { id: 'q10', title: 'What are type aliases?', content: 'Type aliases create new names for types: type Point = { x: number; y: number }. Can alias any type: primitives, unions, functions. type ID = string | number. Use for complex types, self-referencing types. Difference from interface: can\'t be extended, can alias primitives.' }
      ]
    },
    {
      id: 'interfaces',
      title: 'Interfaces and Classes',
      content: '',
      subsections: [
        { id: 'q11', title: 'What is an interface?', content: 'Interface defines object structure: interface User { name: string; age: number }. Objects must match shape. Optional properties: age?: number. Readonly: readonly id: number. Methods: greet(): string. Interfaces can extend others. Used for type checking, not compiled to JS.' },
        { id: 'q12', title: 'What is the difference between interface and type?', content: 'Interface: extendable (extends), mergeable (declaration merging), objects only. Type: aliases any type, unions/intersections, no merging. Use interface for objects (especially APIs), type for unions, primitives. Preference varies by team. Modern TS: mostly interchangeable for objects.' },
        { id: 'q13', title: 'What is declaration merging?', content: 'Declaration merging combines multiple declarations with same name. Interfaces merge: interface A { x: number } interface A { y: number } // A has x and y. Useful for extending third-party types. Namespaces, enums also merge. Types don\'t merge (error on duplicate).' },
        { id: 'q14', title: 'What are classes in TypeScript?', content: 'Classes with types: class User { name: string; constructor(name: string) { this.name = name; } }. Access modifiers: public, private, protected. Parameter properties: constructor(public name: string). Implements interface: class User implements IUser. Extends: class Admin extends User.' },
        { id: 'q15', title: 'What are access modifiers?', content: 'public: accessible everywhere (default). private: class only (# prefix in ES2022). protected: class and subclasses. readonly: can\'t reassign after initialization. Access modifiers checked at compile time. Private with # is runtime private. TypeScript private isn\'t truly private at runtime.' },
        { id: 'q16', title: 'What is abstract class?', content: 'Abstract classes can\'t be instantiated: abstract class Animal { abstract speak(): void; move() { } }. Abstract methods have no body. Subclasses must implement abstract methods. Can have concrete methods. Use for base classes. Different from interface: can have implementation.' },
        { id: 'q17', title: 'What is implements keyword?', content: 'implements makes class conform to interface: class Dog implements Animal { speak() { } }. Class must have all interface members. Can implement multiple: implements A, B. Errors if methods missing. Implements checks structure, not inheritance. Interface as contract.' },
        { id: 'q18', title: 'What are index signatures?', content: 'Index signatures type dynamic keys: interface Dict { [key: string]: number }. Access: dict["any"] returns number. Can combine with known properties. Key must be string or number. Useful for dictionaries, maps. Example: { [id: number]: User } for ID to user mapping.' },
        { id: 'q19', title: 'What is optional chaining?', content: 'Optional chaining accesses nested properties safely: obj?.prop, obj?.[expr], func?.(). Returns undefined if null/undefined encountered. Short-circuits: a?.b?.c. Works with arrays, function calls. Compiles to longer conditional. ES2020 feature, supported in TypeScript.' },
        { id: 'q20', title: 'What is nullish coalescing?', content: 'Nullish coalescing (??) returns right side for null/undefined: x ?? "default". Different from ||: 0 || "default" returns "default", 0 ?? "default" returns 0. Only nullish (null, undefined), not falsy. Combine with optional chaining: obj?.prop ?? "default".' }
      ]
    },
    {
      id: 'generics',
      title: 'Generics',
      content: '',
      subsections: [
        { id: 'q21', title: 'What are generics?', content: 'Generics create reusable components for any type: function identity<T>(arg: T): T { return arg; }. T is type parameter. Call: identity<string>("hello") or identity("hello") (inferred). Provides type safety with flexibility. Used in arrays, promises, collections.' },
        { id: 'q22', title: 'What are generic constraints?', content: 'Constraints limit generic types: <T extends SomeType>. function getLength<T extends { length: number }>(arg: T): number. T must have length property. extends for interface, keyof for keys. Multiple constraints: T extends A & B. Prevents operations on incompatible types.' },
        { id: 'q23', title: 'What is keyof operator?', content: 'keyof gets union of object\'s keys: type Keys = keyof User; // "name" | "age". Used in generic constraints: <K extends keyof T>. Dynamic property access: function getProp<T, K extends keyof T>(obj: T, key: K): T[K]. Type-safe object operations.' },
        { id: 'q24', title: 'What is typeof operator in TypeScript?', content: 'typeof in type context gets type of variable: const user = { name: "John" }; type User = typeof user;. Different from runtime typeof. Use with ReturnType: type Result = ReturnType<typeof myFunction>. Useful for deriving types from values.' },
        { id: 'q25', title: 'What are generic interfaces?', content: 'Interfaces with type parameters: interface Box<T> { value: T }. Use: Box<string>, Box<number>. Methods can use T. Can have defaults: interface Box<T = string>. Generic interfaces for containers, responses: interface Response<T> { data: T; status: number }.' },
        { id: 'q26', title: 'What are generic classes?', content: 'Classes with type parameters: class Queue<T> { items: T[] = []; push(item: T) { } pop(): T | undefined { } }. Use: new Queue<string>(). Type parameter in properties and methods. Static members can\'t use class type parameter.' },
        { id: 'q27', title: 'What is infer keyword?', content: 'infer declares type variable in conditional type: type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never. R is inferred return type. Used in utility types. Infers type from pattern matching. Complex but powerful for type manipulation.' },
        { id: 'q28', title: 'What are conditional types?', content: 'Conditional types select type based on condition: T extends U ? X : Y. If T assignable to U, result is X, else Y. With generics: type NonNull<T> = T extends null | undefined ? never : T. Distributed over unions. Powerful for type transformations.' },
        { id: 'q29', title: 'What are mapped types?', content: 'Mapped types transform properties: type Readonly<T> = { readonly [P in keyof T]: T[P] }. Iterate over keys with in. Modifiers: readonly, ?. Remove with -: -readonly. Built-in: Partial, Required, Readonly, Record. Create new types from existing.' },
        { id: 'q30', title: 'What are utility types?', content: 'Built-in type helpers: Partial<T> (all optional), Required<T> (all required), Readonly<T>, Pick<T, K> (subset), Omit<T, K> (exclude), Record<K, T> (object type), Extract, Exclude, NonNullable, ReturnType, Parameters. Simplify common transformations.' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced TypeScript',
      content: '',
      subsections: [
        { id: 'q31', title: 'What is strict mode?', content: 'strict: true enables all strict checks in tsconfig.json. Includes: strictNullChecks, strictFunctionTypes, strictPropertyInitialization, noImplicitAny, noImplicitThis. Catches more errors. Recommended for new projects. Can enable individually. Makes TypeScript much safer.' },
        { id: 'q32', title: 'What is strictNullChecks?', content: 'strictNullChecks makes null/undefined explicit. Without: string can be null. With: must use string | null. Errors on possible null access. Forces handling null cases. Use ! for non-null assertion (careful). Essential for catching null errors at compile time.' },
        { id: 'q33', title: 'What are type guards?', content: 'Type guards narrow types at runtime. typeof: typeof x === "string". instanceof: x instanceof Date. in: "prop" in obj. Custom: function isString(x: unknown): x is string { return typeof x === "string"; }. Type predicate (is) enables custom narrowing.' },
        { id: 'q34', title: 'What is discriminated union?', content: 'Discriminated unions have common literal property: type Shape = { kind: "circle"; r: number } | { kind: "square"; s: number }. Switch on kind for narrowing. TypeScript knows properties available. Exhaustiveness checking with never. Pattern for state machines, variants.' },
        { id: 'q35', title: 'What are template literal types?', content: 'Template literal types create string literal types: type Greeting = `Hello ${string}`. Combine types: type Event = `${"mouse" | "key"}${"up" | "down"}`. Creates "mouseup" | "mousedown" | "keyup" | "keydown". Useful for string patterns, event names.' },
        { id: 'q36', title: 'What is declaration file (.d.ts)?', content: 'Declaration files describe shape of JS libraries. Type definitions without implementation. DefinitelyTyped (@types/*) provides definitions. Create: declare module "lib" { }. Generate with tsc --declaration. Enables TypeScript use of JS libraries. declare for ambient declarations.' },
        { id: 'q37', title: 'What is module augmentation?', content: 'Module augmentation extends existing modules: declare module "express" { interface Request { user: User } }. Add properties to third-party types. Must be in module (has import/export). Merges with original declaration. Useful for middleware additions.' },
        { id: 'q38', title: 'What is namespace?', content: 'Namespaces organize code: namespace Utils { export function log() { } }. Access: Utils.log(). Older pattern, prefer modules. Can be nested. Merge with classes/functions. Triple-slash for dependencies: /// <reference path="" />. Used in global scripts, declaration files.' },
        { id: 'q39', title: 'What is const assertion?', content: 'as const makes literals readonly and literal types: const colors = ["red", "blue"] as const; // readonly ["red", "blue"]. Object properties become literal types. Array becomes readonly tuple. No widening. Useful for configuration objects, fixed values.' },
        { id: 'q40', title: 'What is satisfies operator?', content: 'satisfies (TS 4.9) validates type while keeping inference: const config = { port: 3000 } satisfies Config. Type checked against Config but inferred type preserved. Different from as: as changes type, satisfies validates. Best of both worlds for type safety with narrow types.' }
      ]
    },
    {
      id: 'ecosystem',
      title: 'TypeScript Ecosystem',
      content: '',
      subsections: [
        { id: 'q41', title: 'What is tsconfig.json?', content: 'tsconfig.json configures TypeScript compiler. compilerOptions: target, module, strict, outDir, rootDir. include/exclude files. extends for base configs. Key options: strict, esModuleInterop, skipLibCheck, forceConsistentCasingInFileNames. Generate with tsc --init.' },
        { id: 'q42', title: 'What are common compiler options?', content: 'target: JS version (ES2020). module: module system (commonjs, esnext). strict: enable all strict checks. outDir: output directory. rootDir: source root. declaration: generate .d.ts. sourceMap: debugging maps. lib: included type definitions. paths: module aliases.' },
        { id: 'q43', title: 'How to use TypeScript with React?', content: 'React types from @types/react. Components: function Component(props: Props): JSX.Element or React.FC<Props>. useState<Type>(), useRef<Type>(null). Event types: React.ChangeEvent<HTMLInputElement>. .tsx extension. Generic components. Typed context, reducers.' },
        { id: 'q44', title: 'How to use TypeScript with Node.js?', content: 'Install: npm i -D typescript @types/node ts-node. Configure tsconfig.json: module commonjs. Run: ts-node or compile then node. Types for Express: @types/express. Request typing: Request<Params, ResBody, ReqBody, Query>. Type environment variables.' },
        { id: 'q45', title: 'What is ESLint with TypeScript?', content: '@typescript-eslint/parser and @typescript-eslint/eslint-plugin. Configure .eslintrc: parser, parserOptions.project. Type-aware rules check types. Replaces TSLint (deprecated). Combine with Prettier. Rules for any, explicit types, naming conventions.' },
        { id: 'q46', title: 'What is enums vs const enums?', content: 'Enum: enum Color { Red } compiles to object. Const enum: const enum Color { Red } inlines values (no object). Const enums smaller but can\'t reverse map. String enums: Color.Red = "red". Prefer const enum or union types for bundle size.' },
        { id: 'q47', title: 'What is type-only imports?', content: 'import type { User } from "./types" imports only type, removed in JS. Explicit about type imports. import { type User } for mixed imports. Helps bundlers with tree shaking. Required with isolatedModules. Good practice for clarity.' },
        { id: 'q48', title: 'What is project references?', content: 'Project references split codebase into smaller projects. tsconfig references array. Enables incremental builds. Build with tsc --build. Faster for monorepos. Composite projects: composite: true. Dependencies built automatically. Good for shared libraries.' },
        { id: 'q49', title: 'How to migrate from JavaScript?', content: 'Gradual migration: allowJs, checkJs in tsconfig. Rename .js to .ts file by file. Add types incrementally. Use any initially, narrow over time. Start with strict: false, enable gradually. Declaration files for JS modules. @ts-ignore for temporary suppressions.' },
        { id: 'q50', title: 'What are decorators?', content: 'Decorators add metadata/behavior: @decorator class MyClass { }. Experimental feature: experimentalDecorators. Types: class, method, property, parameter. Used by Angular, NestJS. Stage 3 proposal with different syntax. Enable in tsconfig. Common: @Injectable, @Component.' }
      ]
    }
  ]
};
