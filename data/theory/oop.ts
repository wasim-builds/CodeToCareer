import { TheoryTopic } from '@/types/theory';

export const oopTheory: TheoryTopic = {
  topicId: 'oop',
  topicName: 'OOP',
  category: 'Core Concepts',
  description: 'Object-Oriented Programming principles and concepts',
  sections: [
    {
      id: 'core-concepts',
      title: 'Core OOP Concepts',
      content: '',
      subsections: [
        {
          id: 'four-pillars',
          title: 'What are the four pillars of OOP?',
          content: 'Encapsulation (hiding data behind methods), abstraction (exposing only essential features), inheritance (deriving new classes from existing ones), and polymorphism (same interface, different implementations).'
        },
        {
          id: 'abstraction-vs-encapsulation',
          title: 'What is the difference between abstraction and encapsulation?',
          content: 'Abstraction focuses on *what* an object does (interface/behavior), while encapsulation focuses on *how* it hides its internal data and implementation details using access modifiers and methods.'
        },
        {
          id: 'class-vs-object',
          title: 'What is a class and what is an object?',
          content: 'A class is a blueprint that defines properties and behaviors; an object is a concrete instance of a class created at runtime.'
        },
        {
          id: 'constructor',
          title: 'What is a constructor?',
          content: 'A special method used to initialize an object when it is created, often setting default values or required dependencies.'
        },
        {
          id: 'constructor-vs-method',
          title: 'What is the difference between a constructor and a method?',
          content: 'A constructor has no return type and is called once when creating the object, while methods have a return type and can be called multiple times on an existing object.'
        }
      ]
    },
    {
      id: 'encapsulation',
      title: 'Encapsulation and Access Control',
      content: '',
      subsections: [
        {
          id: 'achieve-encapsulation',
          title: 'How do you achieve encapsulation?',
          content: 'By making fields private (or protected) and exposing controlled access via public getters/setters or methods that enforce invariants.'
        },
        {
          id: 'encapsulation-importance',
          title: 'Why is encapsulation important?',
          content: 'It protects object integrity, reduces coupling, and allows changing internal implementation without breaking external code.'
        },
        {
          id: 'access-modifiers',
          title: 'What are access modifiers (e.g., in Java/C++)?',
          content: '`public` (accessible everywhere), `private` (only inside the class), `protected` (class + subclasses + same package in Java), and package/default-level (Java).'
        },
        {
          id: 'data-hiding',
          title: 'What is data hiding?',
          content: 'Restricting direct access to internal data so consumers interact only through a defined interface, preventing invalid states.'
        },
        {
          id: 'property-vs-field',
          title: 'What is a property versus a field?',
          content: 'A field stores data; a property (common in C#/Kotlin) wraps that field with getter/setter logic, allowing validation and side effects.'
        }
      ]
    },
    {
      id: 'inheritance',
      title: 'Inheritance and Composition',
      content: '',
      subsections: [
        {
          id: 'what-is-inheritance',
          title: 'What is inheritance?',
          content: 'A mechanism where a subclass derives from a base class, reusing and extending its behavior and state.'
        },
        {
          id: 'is-a-relationship',
          title: 'What is the "is‑a" relationship?',
          content: 'It describes inheritance: a `Dog` is an `Animal`; the subclass must logically be a specialized form of the base type.'
        },
        {
          id: 'inheritance-vs-composition',
          title: 'What is the difference between inheritance and composition?',
          content: 'Inheritance reuses behavior via "is‑a", while composition reuses via "has‑a" (an object holds other objects and delegates work).'
        },
        {
          id: 'composition-preferred',
          title: 'Why is composition often preferred over inheritance?',
          content: 'Composition leads to looser coupling, easier changes, and avoids deep inheritance hierarchies and fragile base class problems.'
        },
        {
          id: 'deep-inheritance-drawbacks',
          title: 'What are the drawbacks of deep inheritance hierarchies?',
          content: 'Harder to understand, more coupling, subtle bugs when base changes, and difficulty in testing and reuse.'
        }
      ]
    },
    {
      id: 'polymorphism',
      title: 'Polymorphism',
      content: '',
      subsections: [
        {
          id: 'what-is-polymorphism',
          title: 'What is polymorphism?',
          content: 'The ability to treat different objects through the same interface or base type, with the correct implementation chosen at runtime.'
        },
        {
          id: 'static-vs-dynamic',
          title: 'What is static (compile-time) vs dynamic (runtime) polymorphism?',
          content: 'Static polymorphism uses overloading or templates/generics and is resolved at compile time; dynamic polymorphism uses virtual/overridden methods resolved at runtime.'
        },
        {
          id: 'method-overloading',
          title: 'What is method overloading?',
          content: 'Multiple methods with the same name but different parameter lists in the same class; the compiler chooses which one to call.'
        },
        {
          id: 'method-overriding',
          title: 'What is method overriding?',
          content: 'A subclass redefining a method from its base class with the same signature to provide specialized behavior.'
        },
        {
          id: 'virtual-function',
          title: 'What is a virtual function (C++) or `override` (Java/C# conceptually)?',
          content: 'A method designed to be overridden; calls through a base pointer/reference invoke the subclass implementation at runtime.'
        }
      ]
    },
    {
      id: 'abstraction-interfaces',
      title: 'Abstraction and Interfaces',
      content: '',
      subsections: [
        {
          id: 'what-is-abstraction',
          title: 'What is abstraction?',
          content: 'Exposing only essential behavior and hiding unnecessary implementation details using abstract classes or interfaces.'
        },
        {
          id: 'abstract-class',
          title: 'What is an abstract class?',
          content: 'A class that cannot be instantiated directly and can contain both abstract (unimplemented) and concrete methods.'
        },
        {
          id: 'interface',
          title: 'What is an interface (Java/C# sense)?',
          content: 'A pure contract listing methods (and sometimes properties/default methods) that implementing classes must provide.'
        },
        {
          id: 'abstract-vs-interface',
          title: 'When to use abstract class vs interface?',
          content: 'Use an abstract class when you want shared state/implementation; use an interface when you only need a contract that multiple unrelated classes can implement.'
        },
        {
          id: 'multiple-inheritance',
          title: 'What is multiple inheritance and what problems can it cause?',
          content: 'A class inheriting from more than one base class; it can lead to ambiguity (diamond problem) and complexity, which is why some languages restrict it to interfaces only.'
        }
      ]
    },
    {
      id: 'object-lifecycle',
      title: 'Object Lifecycle and Memory',
      content: '',
      subsections: [
        {
          id: 'memory-management',
          title: 'How is memory managed for objects (stack vs heap)?',
          content: 'Objects typically live on the heap and are referenced from stack variables; some languages use value types on the stack for small, simple data.'
        },
        {
          id: 'destructor',
          title: 'What is a destructor or finalizer?',
          content: 'A special method that runs when an object is destroyed or collected, used to release resources like files or network connections.'
        },
        {
          id: 'garbage-collection',
          title: 'What is garbage collection?',
          content: 'Automatic memory management where the runtime identifies unused objects and frees them without manual `delete`/`free`.'
        },
        {
          id: 'raii',
          title: 'What is RAII (in C++)?',
          content: '"Resource Acquisition Is Initialization": tying resource lifetime to object lifetime so constructors acquire and destructors release resources.'
        },
        {
          id: 'shallow-deep-copy',
          title: 'What are shallow copy and deep copy?',
          content: 'Shallow copy duplicates only top-level fields (sharing referenced objects), while deep copy recursively clones nested objects to avoid shared mutable state.'
        }
      ]
    },
    {
      id: 'design-principles',
      title: 'Design Principles and Patterns',
      content: '',
      subsections: [
        {
          id: 'solid',
          title: 'What is SOLID in OOP?',
          content: 'Five principles: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion, guiding maintainable OO design.'
        },
        {
          id: 'single-responsibility',
          title: 'Explain the Single Responsibility Principle.',
          content: 'Each class should have only one reason to change—one clear responsibility—reducing complexity and side effects.'
        },
        {
          id: 'liskov-substitution',
          title: 'What is the Liskov Substitution Principle?',
          content: 'Subtypes must be usable anywhere their base type is expected without breaking correctness.'
        },
        {
          id: 'open-closed',
          title: 'What is the Open/Closed Principle?',
          content: 'Software entities should be open for extension but closed for modification, typically via interfaces, inheritance, and composition.'
        },
        {
          id: 'dependency-injection',
          title: 'What is dependency injection?',
          content: 'Supplying an object\'s dependencies from outside instead of creating them internally, making code more testable and loosely coupled.'
        }
      ]
    },
    {
      id: 'practical-scenarios',
      title: 'Practical OOP Scenarios',
      content: '',
      subsections: [
        {
          id: 'shapes-hierarchy',
          title: 'How would you design a class hierarchy for shapes?',
          content: 'Define an abstract `Shape` with methods like `area()` and `perimeter()`, then subclasses like `Circle`, `Rectangle`, etc., each providing concrete implementations.'
        },
        {
          id: 'avoid-god-objects',
          title: 'How do you avoid "God objects"?',
          content: 'Split responsibilities into multiple focused classes, use interfaces and composition, and follow SRP and good module boundaries.'
        },
        {
          id: 'user-permissions',
          title: 'How would you model a user and permissions system with OOP?',
          content: 'Use classes like `User`, `Role`, `Permission`, with composition (user has roles, roles have permissions), and encapsulate permission checks in methods or services.'
        },
        {
          id: 'test-oop',
          title: 'How do you test OOP code effectively?',
          content: 'Design with interfaces and dependency injection so implementations can be mocked; test behaviors through public APIs, not internal state.'
        },
        {
          id: 'handle-change',
          title: 'How do you handle change in requirements in OOP?',
          content: 'Use abstraction and interfaces to plug in new behaviors, prefer composition over inheritance, and keep classes small and focused.'
        }
      ]
    }
  ]
};
