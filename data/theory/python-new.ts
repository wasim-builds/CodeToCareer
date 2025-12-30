import { TheoryTopic } from '@/types/theory';

export const pythonTheoryNew: TheoryTopic = {
    topicId: 'python',
    topicName: 'Python',
    category: 'Languages',
    description: 'Learn Python programming from basics to advanced concepts',
    sections: [
        // Getting Started Category
        {
            id: 'intro',
            title: 'Python Introduction',
            category: 'Getting Started',
            order: 1,
            content: '',
            subsections: [
                {
                    id: 'what-is-python',
                    title: 'What is Python?',
                    content: 'Python is a high-level, interpreted programming language created by Guido van Rossum in 1991. It emphasizes code readability and simplicity, making it an excellent choice for beginners and professionals alike.\n\nKey Features:\n• Easy to learn and read\n• Interpreted language (no compilation needed)\n• Dynamically typed\n• Extensive standard library\n• Cross-platform compatibility\n• Supports multiple programming paradigms (OOP, functional, procedural)',
                },
                {
                    id: 'why-python',
                    title: 'Why Learn Python?',
                    content: 'Python is one of the most popular programming languages in the world, used by companies like Google, Netflix, Instagram, and NASA.\n\nCommon Uses:\n• Web Development (Django, Flask)\n• Data Science and Machine Learning\n• Automation and Scripting\n• Scientific Computing\n• Game Development\n• Desktop Applications',
                },
                {
                    id: 'installation',
                    title: 'Installing Python',
                    content: 'To start programming in Python, you need to install it on your computer.\n\nSteps:\n1. Visit python.org\n2. Download the latest version for your OS\n3. Run the installer\n4. Check "Add Python to PATH"\n5. Verify installation by running `python --version` in terminal',
                }
            ]
        },
        {
            id: 'first-program',
            title: 'Your First Program',
            category: 'Getting Started',
            order: 2,
            content: '',
            subsections: [
                {
                    id: 'hello-world',
                    title: 'Hello World',
                    content: 'Let\'s write your first Python program!\n\n```python\nprint("Hello, World!")\n```\n\nThis simple program uses the `print()` function to display text on the screen.',
                    codeExample: {
                        code: 'print("Hello, World!")',
                        language: 'python',
                        output: 'Hello, World!',
                        explanation: 'The print() function outputs text to the console'
                    }
                },
                {
                    id: 'running-python',
                    title: 'Running Python Code',
                    content: 'There are several ways to run Python code:\n\n1. **Interactive Mode**: Type `python` in terminal and enter commands directly\n2. **Script Mode**: Save code in a .py file and run with `python filename.py`\n3. **IDE**: Use editors like VS Code, PyCharm, or Jupyter Notebook',
                }
            ]
        },

        // Basics Category
        {
            id: 'syntax',
            title: 'Python Syntax',
            category: 'Basics',
            order: 1,
            content: '',
            subsections: [
                {
                    id: 'indentation',
                    title: 'Indentation',
                    content: 'Python uses indentation to define code blocks. This is different from languages that use curly braces {}.\n\n```python\n# Correct indentation\nif 5 > 2:\n    print("Five is greater than two")\n\n# Wrong indentation (will cause error)\nif 5 > 2:\nprint("Five is greater than two")  # IndentationError\n```\n\nUse 4 spaces for each indentation level (PEP 8 standard).',
                },
                {
                    id: 'comments',
                    title: 'Comments',
                    content: 'Comments explain code and are ignored by Python.\n\n```python\n# This is a single-line comment\n\n\'\'\'\nThis is a\nmulti-line comment\n(also called docstring)\n\'\'\'\n\n"""\nYou can also use\ndouble quotes for\nmulti-line comments\n"""\n\nprint("Hello")  # Inline comment\n```',
                },
                {
                    id: 'variables',
                    title: 'Variables',
                    content: 'Variables store data values. Python has no command for declaring variables.\n\n```python\n# Creating variables\nx = 5\nname = "Alice"\nis_student = True\n\n# Multiple assignment\na, b, c = 1, 2, 3\n\n# Same value to multiple variables\nx = y = z = 0\n\nprint(x)     # 5\nprint(name)  # Alice\n```\n\nVariable names must start with a letter or underscore, and can contain letters, numbers, and underscores.',
                }
            ]
        },
        {
            id: 'data-types',
            title: 'Data Types',
            category: 'Basics',
            order: 2,
            content: '',
            relatedTopics: ['strings', 'numbers', 'lists'],
            subsections: [
                {
                    id: 'data-types-overview',
                    title: 'Overview',
                    content: 'Python has several built-in data types:\n\n**Text Type**: str\n**Numeric Types**: int, float, complex\n**Sequence Types**: list, tuple, range\n**Mapping Type**: dict\n**Set Types**: set, frozenset\n**Boolean Type**: bool\n**Binary Types**: bytes, bytearray, memoryview\n**None Type**: NoneType',
                },
                {
                    id: 'checking-types',
                    title: 'Checking Data Types',
                    content: 'Use the `type()` function to check a variable\'s data type.\n\n```python\nx = 5\ny = "Hello"\nz = [1, 2, 3]\n\nprint(type(x))  # <class \'int\'>\nprint(type(y))  # <class \'str\'>\nprint(type(z))  # <class \'list\'>\n```',
                }
            ]
        },
        {
            id: 'strings',
            title: 'Strings',
            category: 'Basics',
            order: 3,
            content: '',
            subsections: [
                {
                    id: 'string-basics',
                    title: 'String Basics',
                    content: 'Strings are sequences of characters enclosed in quotes.\n\n```python\n# Single or double quotes\nname = "Alice"\ngreeting = \'Hello\'\n\n# Multi-line strings\nmessage = """This is a\nmulti-line\nstring"""\n\n# String concatenation\nfull_name = "John" + " " + "Doe"\nprint(full_name)  # John Doe\n```',
                },
                {
                    id: 'string-methods',
                    title: 'String Methods',
                    content: 'Python provides many built-in string methods.\n\n```python\ntext = "Hello World"\n\nprint(text.upper())      # HELLO WORLD\nprint(text.lower())      # hello world\nprint(text.replace("H", "J"))  # Jello World\nprint(text.split())      # [\'Hello\', \'World\']\nprint(len(text))         # 11\n```',
                },
                {
                    id: 'string-formatting',
                    title: 'String Formatting',
                    content: 'Format strings using f-strings (Python 3.6+).\n\n```python\nname = "Alice"\nage = 25\n\n# f-string (recommended)\nmessage = f"My name is {name} and I am {age} years old"\n\n# .format() method\nmessage = "My name is {} and I am {} years old".format(name, age)\n\n# % operator (old style)\nmessage = "My name is %s and I am %d years old" % (name, age)\n\nprint(message)\n```',
                }
            ]
        },
        {
            id: 'numbers',
            title: 'Numbers',
            category: 'Basics',
            order: 4,
            content: '',
            subsections: [
                {
                    id: 'number-types',
                    title: 'Number Types',
                    content: 'Python has three numeric types: int, float, and complex.\n\n```python\n# Integer\nx = 10\n\n# Float\ny = 3.14\n\n# Complex\nz = 1 + 2j\n\nprint(type(x))  # <class \'int\'>\nprint(type(y))  # <class \'float\'>\nprint(type(z))  # <class \'complex\'>\n```',
                },
                {
                    id: 'arithmetic-operators',
                    title: 'Arithmetic Operators',
                    content: 'Python supports standard arithmetic operations.\n\n```python\na = 10\nb = 3\n\nprint(a + b)   # Addition: 13\nprint(a - b)   # Subtraction: 7\nprint(a * b)   # Multiplication: 30\nprint(a / b)   # Division: 3.333...\nprint(a // b)  # Floor division: 3\nprint(a % b)   # Modulus: 1\nprint(a ** b)  # Exponentiation: 1000\n```',
                }
            ]
        },

        // Control Structures Category
        {
            id: 'conditions',
            title: 'If...Else Statements',
            category: 'Control Structures',
            order: 1,
            content: '',
            subsections: [
                {
                    id: 'if-statement',
                    title: 'If Statement',
                    content: 'Execute code only if a condition is true.\n\n```python\nage = 18\n\nif age >= 18:\n    print("You are an adult")\n```',
                },
                {
                    id: 'if-else',
                    title: 'If...Else',
                    content: 'Execute different code based on a condition.\n\n```python\nage = 16\n\nif age >= 18:\n    print("You are an adult")\nelse:\n    print("You are a minor")\n```',
                },
                {
                    id: 'elif',
                    title: 'Elif (Else If)',
                    content: 'Check multiple conditions.\n\n```python\nscore = 85\n\nif score >= 90:\n    print("Grade: A")\nelif score >= 80:\n    print("Grade: B")\nelif score >= 70:\n    print("Grade: C")\nelse:\n    print("Grade: F")\n```',
                },
                {
                    id: 'comparison-operators',
                    title: 'Comparison Operators',
                    content: 'Operators used in conditions:\n\n```python\n# Equal to\nif x == y:\n    pass\n\n# Not equal to\nif x != y:\n    pass\n\n# Greater than\nif x > y:\n    pass\n\n# Less than\nif x < y:\n    pass\n\n# Greater than or equal to\nif x >= y:\n    pass\n\n# Less than or equal to\nif x <= y:\n    pass\n```',
                }
            ]
        },
        {
            id: 'loops',
            title: 'Loops',
            category: 'Control Structures',
            order: 2,
            content: '',
            subsections: [
                {
                    id: 'while-loop',
                    title: 'While Loop',
                    content: 'Repeat code while a condition is true.\n\n```python\ncount = 0\n\nwhile count < 5:\n    print(count)\n    count += 1\n\n# Output: 0, 1, 2, 3, 4\n```',
                },
                {
                    id: 'for-loop',
                    title: 'For Loop',
                    content: 'Iterate over a sequence (list, tuple, string, etc.).\n\n```python\n# Loop through a list\nfruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(fruit)\n\n# Loop through a range\nfor i in range(5):\n    print(i)  # 0, 1, 2, 3, 4\n\n# Loop through a string\nfor char in "Python":\n    print(char)\n```',
                },
                {
                    id: 'break-continue',
                    title: 'Break and Continue',
                    content: 'Control loop execution.\n\n```python\n# Break - exit the loop\nfor i in range(10):\n    if i == 5:\n        break\n    print(i)  # 0, 1, 2, 3, 4\n\n# Continue - skip to next iteration\nfor i in range(5):\n    if i == 2:\n        continue\n    print(i)  # 0, 1, 3, 4\n```',
                },
                {
                    id: 'nested-loops',
                    title: 'Nested Loops',
                    content: 'Loops inside loops.\n\n```python\n# Multiplication table\nfor i in range(1, 4):\n    for j in range(1, 4):\n        print(f"{i} x {j} = {i*j}")\n    print()  # Empty line\n```',
                }
            ]
        },

        // Data Structures Category
        {
            id: 'lists',
            title: 'Lists',
            category: 'Data Structures',
            order: 1,
            content: '',
            subsections: [
                {
                    id: 'list-basics',
                    title: 'List Basics',
                    content: 'Lists are ordered, mutable collections.\n\n```python\n# Creating lists\nfruits = ["apple", "banana", "cherry"]\nnumbers = [1, 2, 3, 4, 5]\nmixed = [1, "hello", 3.14, True]\n\n# Accessing elements (0-indexed)\nprint(fruits[0])   # apple\nprint(fruits[-1])  # cherry (last item)\n\n# List length\nprint(len(fruits))  # 3\n```',
                },
                {
                    id: 'list-methods',
                    title: 'List Methods',
                    content: 'Common list operations.\n\n```python\nfruits = ["apple", "banana"]\n\n# Add items\nfruits.append("cherry")      # Add to end\nfruits.insert(1, "orange")   # Insert at index\n\n# Remove items\nfruits.remove("banana")      # Remove by value\npopped = fruits.pop()        # Remove last item\nfruits.pop(0)                # Remove at index\n\n# Other operations\nfruits.sort()                # Sort list\nfruits.reverse()             # Reverse list\nfruits.clear()               # Remove all items\n```',
                }
            ]
        },
        {
            id: 'tuples',
            title: 'Tuples',
            category: 'Data Structures',
            order: 2,
            content: '',
            subsections: [
                {
                    id: 'tuple-basics',
                    title: 'Tuple Basics',
                    content: 'Tuples are ordered, immutable collections.\n\n```python\n# Creating tuples\ncoordinates = (10, 20)\ncolors = ("red", "green", "blue")\n\n# Accessing elements\nprint(coordinates[0])  # 10\n\n# Tuples are immutable\n# coordinates[0] = 15  # TypeError!\n\n# Tuple unpacking\nx, y = coordinates\nprint(x, y)  # 10 20\n```',
                }
            ]
        },
        {
            id: 'dictionaries',
            title: 'Dictionaries',
            category: 'Data Structures',
            order: 3,
            content: '',
            subsections: [
                {
                    id: 'dict-basics',
                    title: 'Dictionary Basics',
                    content: 'Dictionaries store key-value pairs.\n\n```python\n# Creating dictionaries\nperson = {\n    "name": "Alice",\n    "age": 25,\n    "city": "New York"\n}\n\n# Accessing values\nprint(person["name"])        # Alice\nprint(person.get("age"))     # 25\n\n# Adding/updating items\nperson["email"] = "alice@example.com"\nperson["age"] = 26\n\n# Removing items\ndel person["city"]\npopped = person.pop("email")\n```',
                },
                {
                    id: 'dict-methods',
                    title: 'Dictionary Methods',
                    content: 'Common dictionary operations.\n\n```python\nperson = {"name": "Alice", "age": 25}\n\n# Get all keys\nkeys = person.keys()\n\n# Get all values\nvalues = person.values()\n\n# Get all items (key-value pairs)\nitems = person.items()\n\n# Loop through dictionary\nfor key, value in person.items():\n    print(f"{key}: {value}")\n```',
                }
            ]
        },
        {
            id: 'sets',
            title: 'Sets',
            category: 'Data Structures',
            order: 4,
            content: '',
            subsections: [
                {
                    id: 'set-basics',
                    title: 'Set Basics',
                    content: 'Sets are unordered collections of unique items.\n\n```python\n# Creating sets\nfruits = {"apple", "banana", "cherry"}\nnumbers = {1, 2, 3, 3, 4}  # Duplicates removed\n\nprint(numbers)  # {1, 2, 3, 4}\n\n# Add items\nfruits.add("orange")\n\n# Remove items\nfruits.remove("banana")\nfruits.discard("grape")  # No error if not found\n\n# Set operations\nset1 = {1, 2, 3}\nset2 = {3, 4, 5}\n\nprint(set1.union(set2))         # {1, 2, 3, 4, 5}\nprint(set1.intersection(set2))  # {3}\nprint(set1.difference(set2))    # {1, 2}\n```',
                }
            ]
        }
    ]
};
