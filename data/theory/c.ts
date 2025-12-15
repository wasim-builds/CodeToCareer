import { TheoryTopic } from '@/types/theory';

export const cTheory: TheoryTopic = {
  topicId: 'c',
  topicName: 'C',
  category: 'Languages',
  description: 'C programming language fundamentals and system programming',
  sections: [
    {
      id: 'basics',
      title: 'C Basics',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is C programming language?', content: 'C is a general-purpose, procedural programming language developed by Dennis Ritchie at Bell Labs in 1972. It provides low-level access to memory, efficient mapping to machine instructions, and is the foundation for many modern languages like C++, Java, and Python. C is widely used for system programming, embedded systems, and OS development.' },
        { id: 'q2', title: 'What are the basic data types in C?', content: 'C has four basic data types: int (integers, typically 4 bytes), char (characters, 1 byte), float (single precision decimal, 4 bytes), double (double precision decimal, 8 bytes). Modifiers include: short, long, signed, unsigned. Size varies by platform. Use sizeof() to check actual size.' },
        { id: 'q3', title: 'What is a variable in C?', content: 'A variable is a named memory location that stores data. Declaration syntax: type name; Example: int age; Variables must be declared before use. Naming rules: start with letter/underscore, can contain letters, digits, underscores. Case-sensitive. Initialize before use to avoid garbage values.' },
        { id: 'q4', title: 'What are operators in C?', content: 'C operators: Arithmetic (+, -, *, /, %), Relational (==, !=, <, >, <=, >=), Logical (&&, ||, !), Bitwise (&, |, ^, ~, <<, >>), Assignment (=, +=, -=, etc.), Increment/Decrement (++, --), Conditional (?:), sizeof, comma (,). Operators have precedence and associativity rules.' },
        { id: 'q5', title: 'What are control statements in C?', content: 'Control statements alter program flow. Conditional: if, if-else, else-if ladder, switch-case. Loops: for, while, do-while. Jump: break (exit loop), continue (skip iteration), goto (jump to label), return (exit function). Use break in switch to prevent fall-through.' },
        { id: 'q6', title: 'What is the difference between while and do-while?', content: 'while checks condition first, may not execute body. do-while executes body first, then checks condition - always executes at least once. while: while(condition) { body } do-while: do { body } while(condition); Use do-while when body must execute at least once, like menu-driven programs.' },
        { id: 'q7', title: 'What is a function in C?', content: 'A function is a reusable block of code that performs specific task. Syntax: return_type name(parameters) { body; return value; } Functions promote modularity and code reuse. main() is entry point. Declaration (prototype) before use. Definition provides implementation. Can be recursive.' },
        { id: 'q8', title: 'What is the difference between call by value and call by reference?', content: 'Call by value: copies argument value to parameter, changes don\'t affect original. Call by reference: passes address using pointers, changes affect original. C only supports call by value but can simulate call by reference using pointers. Example: void swap(int *a, int *b) { int t=*a; *a=*b; *b=t; }' },
        { id: 'q9', title: 'What are header files in C?', content: 'Header files (.h) contain function declarations, macros, and type definitions. Include with #include <file.h> for system headers, #include "file.h" for user headers. Common headers: stdio.h (I/O), stdlib.h (memory, utilities), string.h (strings), math.h (math functions). Prevent multiple inclusion with include guards.' },
        { id: 'q10', title: 'What is printf and scanf?', content: 'printf() outputs formatted text to console. scanf() reads formatted input from console. Format specifiers: %d (int), %f (float), %lf (double), %c (char), %s (string), %p (pointer), %x (hex). printf("Age: %d", age); scanf("%d", &age); Note & for address in scanf (except strings).' }
      ]
    },
    {
      id: 'pointers',
      title: 'Pointers',
      content: '',
      subsections: [
        { id: 'q11', title: 'What is a pointer in C?', content: 'A pointer is a variable that stores memory address of another variable. Declaration: int *ptr; Operators: & (address-of), * (dereference). Pointer size is typically 4/8 bytes (32/64-bit). Pointers enable dynamic memory, efficient array handling, and call by reference. Always initialize pointers.' },
        { id: 'q12', title: 'What is pointer arithmetic?', content: 'Pointer arithmetic involves adding/subtracting integers to/from pointers. ptr + 1 moves to next element (adds sizeof(type) bytes). Works with arrays: arr[i] equals *(arr + i). Pointer subtraction gives number of elements between. Can compare pointers with relational operators. Only valid within same array.' },
        { id: 'q13', title: 'What is a NULL pointer?', content: 'NULL pointer points to address 0, indicating "no valid address". Defined in stdio.h. Use to initialize pointers without valid address. Check for NULL before dereferencing to avoid crashes. malloc() returns NULL on failure. Set pointer to NULL after free() to avoid dangling pointer.' },
        { id: 'q14', title: 'What is a dangling pointer?', content: 'A dangling pointer points to memory that has been freed or gone out of scope. Causes: freeing memory and not updating pointer, returning address of local variable. Dereferencing causes undefined behavior. Prevent by setting pointer to NULL after free(). Avoid returning local variable addresses.' },
        { id: 'q15', title: 'What is a void pointer?', content: 'A void pointer (void *) is a generic pointer that can hold any type\'s address. Must cast before dereferencing. Cannot do pointer arithmetic directly. Used by malloc() for generic memory allocation. Useful for generic functions. Cast to specific type: int *p = (int *)voidPtr;' },
        { id: 'q16', title: 'What is pointer to pointer?', content: 'Pointer to pointer stores address of another pointer. Declaration: int **pptr; Used for: 2D dynamic arrays, modifying pointer in function. Example: int a=5, *p=&a, **pp=&p; **pp gives 5. Common in dynamic 2D arrays: int **arr = malloc(rows * sizeof(int*));' },
        { id: 'q17', title: 'What is the relationship between arrays and pointers?', content: 'Array name is a constant pointer to first element. arr equals &arr[0]. Array elements: arr[i] equals *(arr + i). Arrays can be accessed with pointer notation. Key difference: array name cannot be reassigned, pointer can. Arrays have fixed size, pointers can point to dynamic memory.' },
        { id: 'q18', title: 'What is a function pointer?', content: 'Function pointer stores address of a function. Declaration: return_type (*ptr)(parameters); Usage: ptr = &function; or ptr = function; Call: (*ptr)(args) or ptr(args). Used for callbacks, dynamic function selection, implementing jump tables. Common in event-driven programming.' },
        { id: 'q19', title: 'What is const with pointers?', content: 'const with pointers has different meanings: const int *p (pointer to constant - value cannot change), int *const p (constant pointer - pointer cannot change), const int *const p (both constant). Read right-to-left to understand. Use for read-only parameters and safety.' },
        { id: 'q20', title: 'What is wild pointer?', content: 'A wild pointer is uninitialized, pointing to random memory location. Dereferencing causes undefined behavior (crash, data corruption). Always initialize pointers: int *p = NULL; or int *p = &x; Compiler may not warn about wild pointers. Common source of bugs in C programs.' }
      ]
    },
    {
      id: 'memory',
      title: 'Memory Management',
      content: '',
      subsections: [
        { id: 'q21', title: 'What are the memory segments in C?', content: 'C memory segments: Text/Code (machine instructions, read-only), Data (initialized global/static variables), BSS (uninitialized global/static, zero-filled), Heap (dynamic memory, grows upward), Stack (local variables, function calls, grows downward). Understanding helps optimize and debug programs.' },
        { id: 'q22', title: 'What is dynamic memory allocation?', content: 'Dynamic memory allocation allocates memory at runtime from heap. Functions (stdlib.h): malloc(size), calloc(n, size), realloc(ptr, size), free(ptr). Returns void* (cast to type). Returns NULL on failure. Always check return value and free when done to prevent memory leaks.' },
        { id: 'q23', title: 'What is the difference between malloc and calloc?', content: 'malloc(size): allocates size bytes, doesn\'t initialize (contains garbage). calloc(n, size): allocates n*size bytes, initializes to zero. calloc slightly slower due to initialization. malloc: int *p = malloc(5 * sizeof(int)); calloc: int *p = calloc(5, sizeof(int)); Both return NULL on failure.' },
        { id: 'q24', title: 'What is realloc?', content: 'realloc(ptr, size) resizes previously allocated memory. If size is larger, may move to new location, preserves old data. If size is 0, frees memory. Returns NULL on failure (original still valid). Example: arr = realloc(arr, newSize * sizeof(int)); Always assign to temp first to handle failure.' },
        { id: 'q25', title: 'What is a memory leak?', content: 'Memory leak occurs when allocated memory is not freed, gradually consuming available memory. Causes: losing pointer to allocated memory, not freeing before program ends. Detect with tools like Valgrind. Prevent by: tracking allocations, freeing in reverse order of allocation, using cleanup functions.' },
        { id: 'q26', title: 'What is the stack in C?', content: 'Stack is memory region for local variables and function calls. LIFO structure. Automatic allocation/deallocation. Limited size (typically 1-8 MB). Stack overflow occurs if exceeded (deep recursion). Faster than heap. Variables exist only during function execution. No fragmentation.' },
        { id: 'q27', title: 'What is the heap in C?', content: 'Heap is memory region for dynamic allocation. Managed manually with malloc/free. Larger than stack but slower access. Can lead to fragmentation. Memory persists until explicitly freed. Suitable for large data, data that outlives function scope. Use pointers to access heap memory.' },
        { id: 'q28', title: 'What is sizeof operator?', content: 'sizeof returns size in bytes of type or variable. Compile-time operator (except VLAs). sizeof(int), sizeof(arr). For arrays: total bytes (sizeof(arr)/sizeof(arr[0]) gives count). For pointers: pointer size, not pointed data. Portable way to determine sizes.' },
        { id: 'q29', title: 'What is static memory allocation?', content: 'Static allocation occurs at compile time with fixed size. Examples: global variables, static variables, fixed-size arrays. Memory exists throughout program execution. Size cannot change at runtime. Stored in data/BSS segment. Simpler but less flexible than dynamic allocation.' },
        { id: 'q30', title: 'What is buffer overflow?', content: 'Buffer overflow occurs when data exceeds buffer boundaries, overwriting adjacent memory. Security vulnerability (can execute malicious code). Causes: strcpy without length check, array index out of bounds. Prevent with: bounds checking, strncpy, array size validation. Use tools to detect.' }
      ]
    },
    {
      id: 'structures',
      title: 'Structures and Unions',
      content: '',
      subsections: [
        { id: 'q31', title: 'What is a structure in C?', content: 'Structure is user-defined type that groups related variables of different types. Syntax: struct name { members; }; Access members with dot (.) operator. Useful for representing complex entities. Members stored contiguously with possible padding. Can contain any type including other structures.' },
        { id: 'q32', title: 'How to access structure members?', content: 'Dot operator (.) for structure variable: struct_var.member. Arrow operator (->) for structure pointer: ptr->member (equivalent to (*ptr).member). Example: struct Point p; p.x = 10; struct Point *ptr = &p; ptr->y = 20; Arrow is shorthand for dereferencing and accessing.' },
        { id: 'q33', title: 'What is structure padding?', content: 'Structure padding adds unused bytes between members for memory alignment. Improves performance but increases size. Compiler aligns to largest member\'s size. Use #pragma pack(1) to disable padding (slower access). Order members large to small to minimize padding. sizeof shows actual size with padding.' },
        { id: 'q34', title: 'What is a union in C?', content: 'Union is type where all members share same memory location. Size equals largest member. Only one member valid at a time. Syntax: union name { members; }; Useful for memory saving, type punning. Access like structure with dot/arrow. Changing one member affects all members.' },
        { id: 'q35', title: 'What is the difference between structure and union?', content: 'Structure: each member has own memory, size is sum of all (plus padding). Union: members share memory, size is largest member. Structure: all members accessible simultaneously. Union: only one member valid at a time. Use structure for records, union for variants/memory saving.' },
        { id: 'q36', title: 'What is typedef?', content: 'typedef creates alias for existing types. Syntax: typedef existing_type new_name; Common uses: typedef struct {...} Name; (avoids writing struct repeatedly), typedef int* IntPtr; Improves readability and portability. Often used with structures and function pointers.' },
        { id: 'q37', title: 'What is enum in C?', content: 'Enum defines named integer constants. Syntax: enum name { CONST1, CONST2 }; By default, values start at 0 and increment. Can specify values: enum { A=1, B=5, C }; (C=6). Improves code readability. Underlying type is int. Use for states, options, fixed sets.' },
        { id: 'q38', title: 'What is bit field?', content: 'Bit fields specify exact bit width for structure members. Syntax: struct { unsigned int flag : 1; int value : 5; }; Saves memory for flags and small values. Cannot take address of bit field. Implementation-defined ordering. Use for hardware registers, protocol headers, compact data.' },
        { id: 'q39', title: 'What is self-referential structure?', content: 'Self-referential structure contains pointer to same structure type. Used for linked lists, trees, graphs. Example: struct Node { int data; struct Node *next; }; Cannot contain structure itself (infinite size). Common in dynamic data structures. Initialize pointer to NULL.' },
        { id: 'q40', title: 'What is nested structure?', content: 'Nested structure is structure containing another structure as member. Access with multiple dots: outer.inner.member. Useful for hierarchical data. Example: struct Address { char city[50]; }; struct Person { char name[50]; struct Address addr; }; Can use anonymous structures in C11.' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced C',
      content: '',
      subsections: [
        { id: 'q41', title: 'What is preprocessor in C?', content: 'Preprocessor processes source code before compilation. Directives start with #. #include (include files), #define (macros), #ifdef/#ifndef (conditional compilation), #pragma (compiler instructions). Preprocessor does text substitution. Output can be seen with gcc -E. Macros are powerful but error-prone.' },
        { id: 'q42', title: 'What are macros in C?', content: 'Macros are preprocessor directives that define constants or code substitution. #define PI 3.14159 (object-like). #define MAX(a,b) ((a)>(b)?(a):(b)) (function-like). No type checking, can cause side effects. Use parentheses around parameters. Prefer inline functions for type safety.' },
        { id: 'q43', title: 'What is file handling in C?', content: 'File operations use FILE pointer from stdio.h. fopen(name, mode) opens file. Modes: "r" read, "w" write, "a" append, "rb" binary read. fclose() closes. fscanf/fprintf for formatted I/O. fgetc/fputc for characters. fread/fwrite for binary. Always check fopen return (NULL on failure).' },
        { id: 'q44', title: 'What is the difference between fgets and gets?', content: 'gets() reads line without length limit (deprecated, unsafe - buffer overflow). fgets(str, n, stream) reads at most n-1 characters, includes newline, safer. Never use gets(). fgets example: fgets(buffer, sizeof(buffer), stdin); Remove trailing newline if needed with buffer[strcspn(buffer, "\\n")] = 0;' },
        { id: 'q45', title: 'What is volatile keyword?', content: 'volatile tells compiler variable may change unexpectedly (hardware, interrupt, other thread). Prevents optimization that assumes value doesn\'t change. Used in: embedded systems (hardware registers), signal handlers, multi-threaded code. volatile int flag; Compiler always reads from memory, not register cache.' },
        { id: 'q46', title: 'What is static keyword in C?', content: 'static has different meanings: Static local variable: persists between function calls, initialized once. Static global/function: limits scope to current file (internal linkage). Static functions are "private" to file. Use for encapsulation and persistent local state.' },
        { id: 'q47', title: 'What is extern keyword?', content: 'extern declares variable/function defined elsewhere. Used to share global variables across files. Declaration: extern int count; (in header or file that uses it). Definition: int count = 0; (in one source file). Functions are extern by default. Enables modular programming.' },
        { id: 'q48', title: 'What is recursion in C?', content: 'Recursion is function calling itself. Must have base case to stop. Uses stack for each call (can overflow with deep recursion). Examples: factorial, Fibonacci, tree traversal. Can be converted to iteration (usually more efficient). Tail recursion can be optimized by some compilers.' },
        { id: 'q49', title: 'What is command line arguments?', content: 'main() can receive arguments: int main(int argc, char *argv[]). argc: count of arguments (including program name). argv: array of strings. argv[0]: program name. argv[1] to argv[argc-1]: arguments. Convert with atoi(), atof() for numbers. Check argc before accessing argv.' },
        { id: 'q50', title: 'What is inline function?', content: 'inline suggests compiler to expand function code at call site. Reduces function call overhead. inline int max(int a, int b) { return a > b ? a : b; } Compiler may ignore suggestion. Best for small, frequently called functions. Increases code size if overused. Safer than macros.' }
      ]
    }
  ]
};
