import { TheoryTopic } from '@/types/theory';

export const cppTheory: TheoryTopic = {
  topicId: 'cpp',
  topicName: 'C++',
  category: 'Languages',
  description: 'C++ programming language and system-level programming',
  sections: [
    {
      id: 'basics',
      title: 'C++ Basics',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is C++?', content: 'C++ is general-purpose programming language. Extension of C with OOP features. Compiled language. System-level programming. Features: classes, inheritance, polymorphism, templates, STL. Used for: systems, games, embedded, performance-critical applications.' },
        { id: 'q2', title: 'What are C++ data types?', content: 'Primitive: int, float, double, char, bool, void. Derived: arrays, pointers, references, functions. User-defined: classes, structs, unions, enums. Size depends on system. Use sizeof() to check. Strongly typed language.' },
        { id: 'q3', title: 'What is a pointer?', content: 'Pointer stores memory address. Syntax: int* ptr or int *ptr. Dereference with *. Can point to any type. nullptr (C++11) for null. Dangerous if misused. Essential for: dynamic memory, arrays, function parameters.' },
        { id: 'q4', title: 'What is a reference?', content: 'Reference is alias for variable. Syntax: int& ref = variable. Must be initialized. Cannot be reassigned. Safer than pointers. Used in: function parameters, return values. No null references. Preferred over pointers when possible.' },
        { id: 'q5', title: 'What is the difference between pointer and reference?', content: 'Pointer: can be null, can be reassigned, uses *, can have pointer arithmetic. Reference: must be initialized, cannot be reassigned, uses &, no arithmetic. References are safer. Pointers are more flexible. Choose based on needs.' },
        { id: 'q6', title: 'What is dynamic memory allocation?', content: 'Dynamic allocation uses new/delete. new allocates memory, returns pointer. delete frees memory. Must match new/delete, new[]/delete[]. Memory leaks if not deleted. Use smart pointers (modern C++). Manual memory management.' },
        { id: 'q7', title: 'What are smart pointers?', content: 'Smart pointers manage memory automatically. Types: unique_ptr (exclusive ownership), shared_ptr (shared ownership), weak_ptr (non-owning). RAII principle. Automatic cleanup. Prefer over raw pointers. Modern C++ practice.' },
        { id: 'q8', title: 'What is RAII?', content: 'RAII (Resource Acquisition Is Initialization) ties resource lifetime to object. Constructor acquires, destructor releases. Automatic cleanup. Prevents leaks. C++ idiom. Applies to: memory, files, locks, connections.' },
        { id: 'q9', title: 'What is const?', content: 'const makes variables immutable. const int x = 5; cannot modify. const member functions don\'t modify object. const pointers: const int* (pointer to const), int* const (const pointer). Enforces immutability. Important for safety.' },
        { id: 'q10', title: 'What is namespace?', content: 'Namespace prevents name conflicts. Syntax: namespace Name { code }. Access with :: operator or using. std is standard namespace. Organize code. Avoid global namespace pollution. Essential for large projects.' }
      ]
    },
    {
      id: 'oop',
      title: 'Object-Oriented Programming',
      content: '',
      subsections: [
        { id: 'q11', title: 'What is a class?', content: 'Class defines object blueprint. Contains: data members (variables), member functions (methods). Access specifiers: public, private, protected. Encapsulation. Foundation of OOP. Create objects from classes.' },
        { id: 'q12', title: 'What is a constructor?', content: 'Constructor initializes objects. Same name as class. No return type. Called automatically. Types: default, parameterized, copy, move. Can be overloaded. Initialize members. Essential for object creation.' },
        { id: 'q13', title: 'What is a destructor?', content: 'Destructor cleans up objects. Name: ~ClassName(). No parameters. Called automatically when object destroyed. Release resources. Virtual destructor for base classes. Important for RAII.' },
        { id: 'q14', title: 'What is inheritance?', content: 'Inheritance derives class from base. Syntax: class Derived : public Base. Access: public, protected, private. Reuses code. IS-A relationship. Virtual functions enable polymorphism. Multiple inheritance supported (complex).' },
        { id: 'q15', title: 'What is virtual function?', content: 'Virtual function enables runtime polymorphism. Syntax: virtual returnType function(). Override in derived classes. Calls based on object type, not pointer type. Virtual destructor needed. Pure virtual: = 0 (abstract class).' },
        { id: 'q16', title: 'What is polymorphism?', content: 'Polymorphism: same interface, different implementations. Types: compile-time (overloading, templates), runtime (virtual functions). Enables flexibility. Virtual functions for runtime. Templates for compile-time. Core OOP concept.' },
        { id: 'q17', title: 'What is encapsulation?', content: 'Encapsulation bundles data and methods. Access control: private (class only), protected (class + derived), public (everywhere). Data hiding. Interface vs implementation. Maintains integrity. Foundation of OOP.' },
        { id: 'q18', title: 'What is abstraction?', content: 'Abstraction hides implementation details. Abstract classes with pure virtual functions. Interfaces (all pure virtual). Show only essential. Hide complexity. Enables flexibility. Important design principle.' },
        { id: 'q19', title: 'What is operator overloading?', content: 'Operator overloading defines custom behavior for operators. Syntax: returnType operator+(parameters). Can overload: +, -, *, /, ==, <, [], (), etc. Cannot overload: ::, ., .*, ?:. Makes code intuitive. Use carefully.' },
        { id: 'q20', title: 'What is friend function?', content: 'Friend function accesses private members. Declared with friend keyword. Not member function. Breaks encapsulation (use carefully). Useful for: operator overloading, utility functions. Grant selective access.' }
      ]
    },
    {
      id: 'templates',
      title: 'Templates and STL',
      content: '',
      subsections: [
        { id: 'q21', title: 'What is a template?', content: 'Template enables generic programming. Syntax: template<typename T> or template<class T>. Function templates, class templates. Compile-time polymorphism. Type-safe. Code reuse. STL built on templates.' },
        { id: 'q22', title: 'What is STL?', content: 'STL (Standard Template Library) provides containers, algorithms, iterators. Containers: vector, list, map, set, etc. Algorithms: sort, find, transform, etc. Iterators: access containers. Generic, efficient. Widely used.' },
        { id: 'q23', title: 'What is vector?', content: 'vector is dynamic array. Automatically resizes. Random access O(1). Insert/delete at end O(1) amortized. Contiguous memory. Fast iteration. Use when: need dynamic size, frequent access. Most common container.' },
        { id: 'q24', title: 'What is map?', content: 'map stores key-value pairs. Sorted by key. Unique keys. O(log n) operations. Implemented as red-black tree. Use when: need key-value lookup, sorted order. Unordered_map for O(1) average (hash table).' },
        { id: 'q25', title: 'What is iterator?', content: 'Iterator accesses container elements. Types: input, output, forward, bidirectional, random access. Syntax: container.begin(), container.end(). Range-based for loops use iterators. Generic access pattern. STL foundation.' },
        { id: 'q26', title: 'What is algorithm?', content: 'STL algorithms work on containers. Examples: sort(), find(), count(), transform(), accumulate(). Generic, work with iterators. Efficient implementations. Use instead of writing loops. Powerful library.' },
        { id: 'q27', title: 'What is lambda?', content: 'Lambda (C++11) creates anonymous functions. Syntax: [capture](params) -> returnType { body }. Capture: [], [=], [&], [var]. Used with algorithms. Modern C++ feature. Concise code.' },
        { id: 'q28', title: 'What is auto keyword?', content: 'auto (C++11) deduces type from initializer. Syntax: auto x = value;. Simplifies code. Useful with: templates, iterators, lambdas. Compile-time deduction. Don\'t overuse - can reduce readability.' },
        { id: 'q29', title: 'What is range-based for loop?', content: 'Range-based for (C++11) iterates containers. Syntax: for (auto& item : container). Simpler than iterators. Works with: arrays, containers, initializer lists. Modern C++ feature. Preferred when possible.' },
        { id: 'q30', title: 'What is move semantics?', content: 'Move semantics (C++11) transfers resources. std::move() converts to rvalue reference. Avoids copying. More efficient. Move constructor, move assignment. Enables efficient resource transfer. Important for performance.' }
      ]
    },
    {
      id: 'memory',
      title: 'Memory Management',
      content: '',
      subsections: [
        { id: 'q31', title: 'What is stack vs heap?', content: 'Stack: automatic storage, fast, limited size, local variables. Heap: dynamic allocation, slower, larger, manual management. Stack: function calls, local variables. Heap: new/delete, dynamic objects. Choose appropriately.' },
        { id: 'q32', title: 'What is memory leak?', content: 'Memory leak: allocated memory not freed. Caused by: missing delete, exception before delete, lost pointers. Problem: consumes memory, can crash system. Prevention: smart pointers, RAII, careful management. Use tools to detect.' },
        { id: 'q33', title: 'What is dangling pointer?', content: 'Dangling pointer points to freed memory. Dangerous: undefined behavior. Causes: delete then use, local variable address, stack object address. Prevention: set to nullptr after delete, avoid returning local addresses. Careful pointer management.' },
        { id: 'q34', title: 'What is segmentation fault?', content: 'Segmentation fault: access to invalid memory. Causes: null pointer, uninitialized pointer, out of bounds, freed memory. Common error. Debug with: gdb, valgrind, sanitizers. Prevent with: initialization, bounds checking.' },
        { id: 'q35', title: 'What is buffer overflow?', content: 'Buffer overflow: writing beyond buffer bounds. Security vulnerability. Can corrupt memory, crash program, enable attacks. Prevention: bounds checking, safe functions, modern containers (vector). Critical security issue.' },
        { id: 'q36', title: 'What is copy vs move?', content: 'Copy: duplicates data, expensive for large objects. Move: transfers ownership, efficient, source becomes invalid. Use move for: temporary objects, rvalues, when source not needed. C++11 feature. Performance optimization.' },
        { id: 'q37', title: 'What is shallow vs deep copy?', content: 'Shallow copy: copies pointer, shares data. Deep copy: copies data, independent objects. Default copy is shallow. Implement deep copy: copy constructor, assignment operator. Important for: pointers, resources. Prevent sharing issues.' },
        { id: 'q38', title: 'What is rule of three/five?', content: 'Rule of three: if you define destructor, copy constructor, or assignment operator, define all three. Rule of five (C++11): add move constructor and move assignment. Ensures correct behavior. Prevents bugs. Important guideline.' },
        { id: 'q39', title: 'What is placement new?', content: 'Placement new constructs object at specific memory. Syntax: new(ptr) Type(args). Doesn\'t allocate, uses provided memory. Advanced technique. Used in: custom allocators, memory pools. Requires manual destructor call.' },
        { id: 'q40', title: 'What is memory alignment?', content: 'Memory alignment: data stored at addresses divisible by size. Improves performance. Padding added for alignment. struct alignment can increase size. Use #pragma pack to control. Important for: performance, hardware compatibility.' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced C++',
      content: '',
      subsections: [
        { id: 'q41', title: 'What is exception handling?', content: 'Exception handling manages errors. try: code that might throw. catch: handles exceptions. throw: raises exceptions. Standard exceptions: std::exception and derived. RAII ensures cleanup. Use for error handling.' },
        { id: 'q42', title: 'What is const correctness?', content: 'Const correctness: use const whenever possible. const variables, const functions, const parameters, const return values. Prevents accidental modification. Compiler enforces. Important for safety. Good practice.' },
        { id: 'q43', title: 'What is static?', content: 'static has multiple meanings: static variable (one instance, persists), static function (class-level, no this), static member (shared by all instances). Context-dependent meaning. Important keyword.' },
        { id: 'q44', title: 'What is inline?', content: 'inline suggests function inlining. Compiler may inline function calls. Reduces function call overhead. Header file functions often inline. Compiler decision. Use for: small, frequently called functions. Performance hint.' },
        { id: 'q45', title: 'What is mutable?', content: 'mutable allows modification in const functions. Syntax: mutable type member;. Use when: logical const but physical modification needed (caching, counting). Rarely needed. Use carefully.' },
        { id: 'q46', title: 'What is explicit?', content: 'explicit prevents implicit conversions. Syntax: explicit Constructor(params). Prevents: accidental conversions, unexpected behavior. Use for: single-parameter constructors. Safety feature. Good practice.' },
        { id: 'q47', title: 'What is volatile?', content: 'volatile prevents compiler optimizations. Variable may change outside program control. Used for: hardware registers, shared memory, signal handlers. Rarely needed. Different from const. Advanced use case.' },
        { id: 'q48', title: 'What is RTTI?', content: 'RTTI (Runtime Type Information) provides type information. dynamic_cast, typeid operator. Enables type checking at runtime. Requires virtual functions. Use when: need runtime type checking. Alternative: virtual functions, visitor pattern.' },
        { id: 'q49', title: 'What are C++ best practices?', content: 'Best practices: use smart pointers, const correctness, RAII, modern C++ (C++11+), avoid raw pointers, use STL, meaningful names, avoid macros, handle exceptions, initialize variables, use references when possible, prefer algorithms over loops, write clear code.' },
        { id: 'q50', title: 'What is modern C++?', content: 'Modern C++ (C++11 and later) features: auto, range-based for, lambdas, smart pointers, move semantics, nullptr, constexpr, variadic templates. Prefer modern features. More expressive, safer, efficient. C++ evolves continuously.' }
      ]
    }
  ]
};
