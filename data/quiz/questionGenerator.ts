import { Question, Difficulty } from '@/types/quiz';

// Comprehensive question templates for each topic
const topicQuestions: Record<string, {
  easy: string[];
  medium: string[];
  hard: string[];
  options: Record<string, string[][]>;
}> = {
  python: {
    easy: [
      'What is the correct way to create a list in Python?',
      'Which keyword is used to define a function in Python?',
      'What does the len() function return?',
      'Which operator is used for exponentiation in Python?',
      'What is the output of: print(3 * "hello")?',
    ],
    medium: [
      'What is the difference between a list and a tuple in Python?',
      'How do you handle exceptions in Python?',
      'What is a Python decorator?',
      'Explain the difference between __str__ and __repr__ methods.',
      'What is the Global Interpreter Lock (GIL) in Python?',
    ],
    hard: [
      'How does Python manage memory for large data structures?',
      'Explain the difference between multiprocessing and multithreading in Python.',
      'What are metaclasses in Python and when would you use them?',
      'How does Python\'s garbage collection work?',
      'Explain the MRO (Method Resolution Order) in Python multiple inheritance.',
    ],
    options: {
      easy: [
        ['list = []', 'list = new List()', 'list = List()', 'list = {}'],
        ['function', 'def', 'func', 'define'],
        ['The length of a string', 'The length of a list', 'The length of any sequence', 'All of the above'],
        ['^', '**', '^^', 'pow()'],
        ['hellohellohello', '3hello', 'Error', 'hello 3'],
      ],
      medium: [
        ['Lists are mutable, tuples are immutable', 'Tuples are mutable, lists are immutable', 'No difference', 'Lists are faster'],
        ['try-except', 'catch', 'error', 'exception'],
        ['A function that modifies another function', 'A class method', 'A built-in function', 'A variable'],
        ['__str__ is for users, __repr__ is for developers', '__repr__ is for users, __str__ is for developers', 'No difference', 'Both are the same'],
        ['A lock that prevents multiple threads from executing Python bytecode', 'A database lock', 'A file lock', 'A network lock'],
      ],
      hard: [
        ['Uses reference counting and garbage collection', 'Uses only reference counting', 'Uses only garbage collection', 'Manual memory management'],
        ['multiprocessing uses separate processes, multithreading uses threads', 'No difference', 'multithreading is faster', 'multiprocessing is simpler'],
        ['Classes that create classes', 'Base classes', 'Abstract classes', 'Interface classes'],
        ['Reference counting and cyclic garbage collector', 'Only reference counting', 'Only mark and sweep', 'Manual deallocation'],
        ['The order in which base classes are searched for a method', 'A sorting algorithm', 'A data structure', 'A design pattern'],
      ],
    }
  },
  // Add more topics with similar structure...
};

export function generateQuestionsForTopic(
  topicId: string,
  topicName: string,
  category: string
): Question[] {
  const questions: Question[] = [];
  const difficulties: Difficulty[] = ['easy', 'medium', 'hard'];
  
  // Check if we have predefined questions for this topic
  const topicData = topicQuestions[topicId];
  
  if (topicData) {
    // Use predefined questions
    difficulties.forEach((difficulty) => {
      const questionTemplates = topicData[difficulty];
      const optionSets = topicData.options[difficulty];
      
      // Generate 50 questions per difficulty by cycling through templates
      for (let i = 0; i < 50; i++) {
        const templateIndex = i % questionTemplates.length;
        const optionIndex = i % optionSets.length;
        
        questions.push({
          id: `${topicId}-${difficulty}-${i + 1}`,
          question: questionTemplates[templateIndex],
          options: [...optionSets[optionIndex]],
          correctAnswer: 0, // First option is correct (can be randomized)
          explanation: `This question tests your understanding of ${topicName} concepts at the ${difficulty} level.`,
          difficulty
        });
      }
    });
  } else {
    // Fallback to generic question generation
    difficulties.forEach((difficulty, diffIndex) => {
      for (let i = 1; i <= 50; i++) {
        const questionNum = diffIndex * 50 + i;
        questions.push({
          id: `${topicId}-${difficulty}-${questionNum}`,
          question: generateQuestionText(topicId, topicName, difficulty, questionNum),
          options: generateOptions(topicId, topicName, difficulty, questionNum),
          correctAnswer: Math.floor(Math.random() * 4),
          explanation: `This question tests your understanding of ${topicName} concepts at the ${difficulty} level.`,
          difficulty
        });
      }
    });
  }
  
  return questions;
}

function generateQuestionText(
  topicId: string,
  topicName: string,
  difficulty: Difficulty,
  num: number
): string {
  const questionTemplates = {
    easy: [
      `What is the primary purpose of ${topicName}?`,
      `Which of the following is a key feature of ${topicName}?`,
      `In ${topicName}, what does the term "${getTopicSpecificTerm(topicId)}" typically refer to?`,
      `What is the basic syntax for ${topicName}?`,
      `Which statement about ${topicName} is correct?`,
      `What is a common use case for ${topicName}?`,
      `Which data type is commonly used with ${topicName}?`,
      `What is the main advantage of using ${topicName}?`,
    ],
    medium: [
      `How does ${topicName} handle asynchronous operations?`,
      `What is the best practice for implementing ${topicName} in production?`,
      `Which design pattern is commonly used with ${topicName}?`,
      `How would you optimize ${topicName} for performance?`,
      `What are the security considerations when using ${topicName}?`,
      `How does ${topicName} manage state?`,
      `What is the difference between ${topicName} and similar technologies?`,
      `How would you debug issues in ${topicName}?`,
    ],
    hard: [
      `Explain the internal architecture of ${topicName} and how it handles edge cases.`,
      `How would you design a scalable system using ${topicName}?`,
      `What are the trade-offs between different implementations of ${topicName}?`,
      `How does ${topicName} handle concurrency and race conditions?`,
      `What advanced techniques can be used to extend ${topicName} functionality?`,
      `How would you implement a distributed system with ${topicName}?`,
      `What are the performance bottlenecks in ${topicName} and how to address them?`,
      `Explain the memory management model of ${topicName}.`,
    ]
  };
  
  const templates = questionTemplates[difficulty];
  return templates[num % templates.length];
}

function getTopicSpecificTerm(topicId: string): string {
  const terms: Record<string, string> = {
    c: 'pointer',
    python: 'list comprehension',
    java: 'JVM',
    cpp: 'pointer',
    javascript: 'closure',
    php: 'variable',
    typescript: 'interface',
    kotlin: 'null safety',
    swift: 'optional',
    go: 'goroutine',
    rust: 'ownership',
    ruby: 'block',
    react: 'component',
    nextjs: 'page',
    angular: 'module',
    vuejs: 'reactive data',
    django: 'model',
    'spring-boot': 'bean',
    nodejs: 'event loop',
    express: 'middleware',
    fastapi: 'endpoint',
    dotnet: 'assembly',
    wordpress: 'theme',
    sql: 'JOIN',
    mysql: 'query',
    mongodb: 'document',
    firebase: 'realtime database',
    docker: 'container',
    kubernetes: 'pod',
    jenkins: 'pipeline',
    terraform: 'resource',
    git: 'commit',
    github: 'repository',
    gitlab: 'pipeline',
    'gitlab-ci': 'job',
    aws: 'instance',
    azure: 'resource group',
    gcloud: 'project',
    oracle: 'tablespace',
    tensorflow: 'tensor',
    pytorch: 'tensor',
    opencv: 'matrix',
    pandas: 'DataFrame',
    numpy: 'array',
    matplotlib: 'plot',
    anaconda: 'environment',
    'scikit-learn': 'estimator',
    figma: 'frame',
    adobe: 'layer',
    canva: 'template',
    'testing-library': 'query',
    arduino: 'sketch',
    'raspberry-pi': 'GPIO',
    'react-native': 'component',
    flutter: 'widget',
    android: 'activity',
    flask: 'route',
    'rest-api': 'endpoint',
    jwt: 'token',
    linux: 'kernel',
    meta: 'API',
  };
  return terms[topicId] || 'concept';
}

function generateOptions(
  topicId: string,
  topicName: string,
  difficulty: Difficulty,
  num: number
): string[] {
  const optionSets = {
    easy: [
      ['To solve specific programming problems', 'To create user interfaces', 'To manage databases', 'To handle networking'],
      ['Performance optimization', 'Ease of use', 'Memory efficiency', 'All of the above'],
      ['A data structure', 'A function', 'A class', 'A module'],
      ['Simple and readable', 'Complex and powerful', 'Fast execution', 'Cross-platform'],
    ],
    medium: [
      ['Using callbacks and promises', 'Using threads', 'Using processes', 'Using queues'],
      ['Follow best practices and patterns', 'Use the latest features', 'Minimize code', 'Maximize performance'],
      ['MVC pattern', 'Singleton pattern', 'Observer pattern', 'Factory pattern'],
      ['Caching and optimization', 'Adding more features', 'Using more resources', 'Simplifying code'],
    ],
    hard: [
      ['Microservices with load balancing', 'Monolithic with scaling', 'Serverless functions', 'Hybrid approach'],
      ['Performance vs maintainability', 'Speed vs memory', 'Complexity vs simplicity', 'All of the above'],
      ['Locks and synchronization', 'Event loops', 'Message queues', 'All of the above'],
      ['Plugin architecture', 'Extension APIs', 'Custom implementations', 'All of the above'],
    ]
  };
  
  const sets = optionSets[difficulty];
  return sets[num % sets.length];
}
