import { Roadmap } from '@/types/roadmap';

export const roadmaps: Roadmap[] = [
    {
        id: 'ai-engineering',
        slug: 'ai-engineering',
        title: 'AI Engineering',
        description: 'Master AI development, LLMs, prompt engineering, and building AI-powered applications',
        category: 'Artificial Intelligence',
        difficulty: 'intermediate',
        totalDuration: '8-12 months',
        icon: '🤖',
        color: 'purple',
        prerequisites: ['Basic programming knowledge', 'Understanding of Python'],
        careerOutlook: {
            averageSalary: '$120k - $180k',
            jobGrowth: '35% (Much faster than average)',
            topCompanies: ['OpenAI', 'Google', 'Microsoft', 'Anthropic', 'Meta']
        },
        relatedRoadmaps: ['machine-learning', 'data-science'],
        phases: [
            {
                id: 'beginner',
                title: 'Foundation',
                description: 'Build strong fundamentals in Python, ML basics, and AI concepts',
                level: 'beginner',
                estimatedWeeks: 8,
                steps: [
                    {
                        id: 'python-mastery',
                        title: 'Python Programming Mastery',
                        description: 'Master Python for AI development including OOP, data structures, and libraries',
                        skills: ['Python', 'NumPy', 'Pandas', 'Data Structures'],
                        estimatedHours: 60,
                        resources: [
                            { title: 'Python for Everybody', url: 'https://www.py4e.com/', type: 'course' },
                            { title: 'Python Documentation', url: 'https://docs.python.org/', type: 'documentation' }
                        ],
                        projects: ['Build a data analysis tool', 'Create a web scraper']
                    },
                    {
                        id: 'ml-basics',
                        title: 'Machine Learning Fundamentals',
                        description: 'Learn core ML concepts, algorithms, and scikit-learn',
                        skills: ['Supervised Learning', 'Unsupervised Learning', 'Scikit-learn'],
                        estimatedHours: 80,
                        prerequisites: ['python-mastery'],
                        resources: [
                            { title: 'Andrew Ng ML Course', url: 'https://www.coursera.org/learn/machine-learning', type: 'course' },
                            { title: 'Scikit-learn Docs', url: 'https://scikit-learn.org/', type: 'documentation' }
                        ],
                        projects: ['Build a classification model', 'Create a recommendation system']
                    }
                ]
            },
            {
                id: 'intermediate',
                title: 'AI & LLM Development',
                description: 'Deep dive into neural networks, LLMs, and prompt engineering',
                level: 'intermediate',
                estimatedWeeks: 12,
                steps: [
                    {
                        id: 'deep-learning',
                        title: 'Deep Learning & Neural Networks',
                        description: 'Master neural networks, CNNs, RNNs using TensorFlow/PyTorch',
                        skills: ['Neural Networks', 'TensorFlow', 'PyTorch', 'CNNs', 'RNNs'],
                        estimatedHours: 100,
                        resources: [
                            { title: 'Deep Learning Specialization', url: 'https://www.deeplearning.ai/', type: 'course' },
                            { title: 'PyTorch Tutorials', url: 'https://pytorch.org/tutorials/', type: 'documentation' }
                        ],
                        projects: ['Image classification model', 'Text generation model']
                    },
                    {
                        id: 'llm-fundamentals',
                        title: 'Large Language Models',
                        description: 'Understanding transformers, attention mechanisms, and LLM architectures',
                        skills: ['Transformers', 'Attention Mechanisms', 'BERT', 'GPT'],
                        estimatedHours: 80,
                        prerequisites: ['deep-learning'],
                        resources: [
                            { title: 'Hugging Face Course', url: 'https://huggingface.co/course', type: 'course' },
                            { title: 'Attention Is All You Need', url: 'https://arxiv.org/abs/1706.03762', type: 'article' }
                        ],
                        projects: ['Fine-tune a pre-trained model', 'Build a chatbot']
                    },
                    {
                        id: 'prompt-engineering',
                        title: 'Prompt Engineering & AI APIs',
                        description: 'Master prompt design, OpenAI API, LangChain, and AI orchestration',
                        skills: ['Prompt Engineering', 'OpenAI API', 'LangChain', 'Vector Databases'],
                        estimatedHours: 60,
                        resources: [
                            { title: 'OpenAI Cookbook', url: 'https://cookbook.openai.com/', type: 'documentation' },
                            { title: 'LangChain Docs', url: 'https://python.langchain.com/', type: 'documentation' }
                        ],
                        projects: ['Build an AI assistant', 'Create a RAG application']
                    }
                ]
            },
            {
                id: 'advanced',
                title: 'Production AI Systems',
                description: 'Deploy, scale, and optimize AI applications in production',
                level: 'advanced',
                estimatedWeeks: 10,
                steps: [
                    {
                        id: 'ai-deployment',
                        title: 'AI Model Deployment',
                        description: 'Deploy models using FastAPI, Docker, and cloud platforms',
                        skills: ['FastAPI', 'Docker', 'AWS/GCP', 'Model Serving'],
                        estimatedHours: 70,
                        resources: [
                            { title: 'FastAPI Documentation', url: 'https://fastapi.tiangolo.com/', type: 'documentation' },
                            { title: 'Docker for ML', url: 'https://docs.docker.com/', type: 'documentation' }
                        ],
                        projects: ['Deploy ML model as API', 'Containerize AI application']
                    },
                    {
                        id: 'ai-agents',
                        title: 'AI Agents & Autonomous Systems',
                        description: 'Build autonomous AI agents with memory, tools, and reasoning',
                        skills: ['AI Agents', 'Tool Use', 'Memory Systems', 'Multi-Agent Systems'],
                        estimatedHours: 80,
                        prerequisites: ['prompt-engineering'],
                        resources: [
                            { title: 'LangGraph Documentation', url: 'https://langchain-ai.github.io/langgraph/', type: 'documentation' },
                            { title: 'AutoGPT', url: 'https://github.com/Significant-Gravitas/AutoGPT', type: 'article' }
                        ],
                        projects: ['Build an autonomous research agent', 'Create a multi-agent system']
                    }
                ]
            }
        ]
    },
    {
        id: 'data-science',
        slug: 'data-science',
        title: 'Data Science',
        description: 'Become a data scientist: analytics, machine learning, and data visualization',
        category: 'Data & Analytics',
        difficulty: 'beginner-friendly',
        totalDuration: '6-10 months',
        icon: '📊',
        color: 'blue',
        prerequisites: ['Basic math and statistics'],
        careerOutlook: {
            averageSalary: '$100k - $150k',
            jobGrowth: '36% (Much faster than average)',
            topCompanies: ['Google', 'Meta', 'Amazon', 'Netflix', 'Airbnb']
        },
        relatedRoadmaps: ['ai-engineering', 'machine-learning'],
        phases: [
            {
                id: 'beginner',
                title: 'Data Foundations',
                description: 'Learn Python, statistics, and data manipulation',
                level: 'beginner',
                estimatedWeeks: 8,
                steps: [
                    {
                        id: 'python-data',
                        title: 'Python for Data Science',
                        description: 'Master Python, NumPy, Pandas for data analysis',
                        skills: ['Python', 'NumPy', 'Pandas', 'Jupyter'],
                        estimatedHours: 60,
                        resources: [
                            { title: 'Python Data Science Handbook', url: 'https://jakevdp.github.io/PythonDataScienceHandbook/', type: 'book' },
                            { title: 'Pandas Documentation', url: 'https://pandas.pydata.org/', type: 'documentation' }
                        ],
                        projects: ['Analyze a dataset', 'Clean and transform data']
                    },
                    {
                        id: 'statistics',
                        title: 'Statistics & Probability',
                        description: 'Learn statistical concepts essential for data science',
                        skills: ['Descriptive Statistics', 'Probability', 'Hypothesis Testing', 'A/B Testing'],
                        estimatedHours: 70,
                        resources: [
                            { title: 'Statistics for Data Science', url: 'https://www.coursera.org/learn/statistics', type: 'course' },
                            { title: 'Think Stats', url: 'https://greenteapress.com/thinkstats/', type: 'book' }
                        ],
                        projects: ['Perform statistical analysis', 'Design and analyze A/B test']
                    }
                ]
            },
            {
                id: 'intermediate',
                title: 'Machine Learning & Visualization',
                description: 'Build ML models and create compelling data visualizations',
                level: 'intermediate',
                estimatedWeeks: 10,
                steps: [
                    {
                        id: 'data-viz',
                        title: 'Data Visualization',
                        description: 'Create insightful visualizations with Matplotlib, Seaborn, Plotly',
                        skills: ['Matplotlib', 'Seaborn', 'Plotly', 'Tableau'],
                        estimatedHours: 50,
                        resources: [
                            { title: 'Data Visualization Guide', url: 'https://www.storytellingwithdata.com/', type: 'book' },
                            { title: 'Plotly Documentation', url: 'https://plotly.com/python/', type: 'documentation' }
                        ],
                        projects: ['Create an interactive dashboard', 'Build a data story']
                    },
                    {
                        id: 'ml-models',
                        title: 'Machine Learning Models',
                        description: 'Build and evaluate ML models for prediction and classification',
                        skills: ['Scikit-learn', 'Model Selection', 'Feature Engineering', 'Model Evaluation'],
                        estimatedHours: 90,
                        prerequisites: ['statistics'],
                        resources: [
                            { title: 'Hands-On Machine Learning', url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/', type: 'book' },
                            { title: 'Scikit-learn Course', url: 'https://inria.github.io/scikit-learn-mooc/', type: 'course' }
                        ],
                        projects: ['Predict house prices', 'Build a fraud detection system']
                    }
                ]
            },
            {
                id: 'advanced',
                title: 'Advanced Analytics & Big Data',
                description: 'Work with big data, deep learning, and production systems',
                level: 'advanced',
                estimatedWeeks: 8,
                steps: [
                    {
                        id: 'big-data',
                        title: 'Big Data Technologies',
                        description: 'Learn Spark, SQL, and distributed computing',
                        skills: ['PySpark', 'SQL', 'Hadoop', 'Data Warehousing'],
                        estimatedHours: 80,
                        resources: [
                            { title: 'Learning Spark', url: 'https://spark.apache.org/docs/latest/', type: 'documentation' },
                            { title: 'SQL for Data Science', url: 'https://mode.com/sql-tutorial/', type: 'course' }
                        ],
                        projects: ['Process large datasets with Spark', 'Build a data pipeline']
                    },
                    {
                        id: 'deep-learning-ds',
                        title: 'Deep Learning for Data Science',
                        description: 'Apply neural networks to complex data problems',
                        skills: ['TensorFlow', 'Keras', 'Neural Networks', 'Time Series'],
                        estimatedHours: 70,
                        resources: [
                            { title: 'Deep Learning Specialization', url: 'https://www.deeplearning.ai/', type: 'course' },
                            { title: 'TensorFlow Tutorials', url: 'https://www.tensorflow.org/tutorials', type: 'documentation' }
                        ],
                        projects: ['Time series forecasting', 'Image classification for business']
                    }
                ]
            }
        ]
    },
    {
        id: 'full-stack-development',
        slug: 'full-stack-development',
        title: 'Full Stack Development',
        description: 'Build complete web applications from frontend to backend and deployment',
        category: 'Web Development',
        difficulty: 'beginner-friendly',
        totalDuration: '6-9 months',
        icon: '💻',
        color: 'green',
        prerequisites: ['Basic HTML/CSS knowledge'],
        careerOutlook: {
            averageSalary: '$90k - $140k',
            jobGrowth: '23% (Much faster than average)',
            topCompanies: ['Google', 'Meta', 'Amazon', 'Stripe', 'Vercel']
        },
        relatedRoadmaps: ['frontend-development', 'backend-development'],
        phases: [
            {
                id: 'beginner',
                title: 'Web Fundamentals',
                description: 'Master HTML, CSS, JavaScript, and responsive design',
                level: 'beginner',
                estimatedWeeks: 8,
                steps: [
                    {
                        id: 'html-css',
                        title: 'HTML & CSS Mastery',
                        description: 'Build responsive, accessible websites with modern CSS',
                        skills: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'Responsive Design'],
                        estimatedHours: 60,
                        resources: [
                            { title: 'MDN Web Docs', url: 'https://developer.mozilla.org/', type: 'documentation' },
                            { title: 'CSS Tricks', url: 'https://css-tricks.com/', type: 'article' }
                        ],
                        projects: ['Build a portfolio website', 'Create a landing page']
                    },
                    {
                        id: 'javascript',
                        title: 'JavaScript Fundamentals',
                        description: 'Learn modern JavaScript, ES6+, DOM manipulation, and async programming',
                        skills: ['JavaScript', 'ES6+', 'DOM', 'Async/Await', 'Fetch API'],
                        estimatedHours: 80,
                        resources: [
                            { title: 'JavaScript.info', url: 'https://javascript.info/', type: 'documentation' },
                            { title: 'You Don\\'t Know JS', url: 'https://github.com/getify/You-Dont-Know-JS', type: 'book' }
            ],
                        projects: ['Build a todo app', 'Create an API client']
                    }
                ]
            },
            {
                id: 'intermediate',
                title: 'Modern Stack Development',
                description: 'Learn React, Node.js, databases, and build full applications',
                level: 'intermediate',
                estimatedWeeks: 12,
                steps: [
                    {
                        id: 'react',
                        title: 'React & Frontend Frameworks',
                        description: 'Build interactive UIs with React, hooks, and state management',
                        skills: ['React', 'Hooks', 'Context API', 'React Router', 'Next.js'],
                        estimatedHours: 90,
                        prerequisites: ['javascript'],
                        resources: [
                            { title: 'React Documentation', url: 'https://react.dev/', type: 'documentation' },
                            { title: 'Next.js Learn', url: 'https://nextjs.org/learn', type: 'course' }
                        ],
                        projects: ['Build a social media dashboard', 'Create an e-commerce site']
                    },
                    {
                        id: 'backend',
                        title: 'Backend Development with Node.js',
                        description: 'Build REST APIs, work with databases, and handle authentication',
                        skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'JWT'],
                        estimatedHours: 100,
                        resources: [
                            { title: 'Node.js Documentation', url: 'https://nodejs.org/docs/', type: 'documentation' },
                            { title: 'Express.js Guide', url: 'https://expressjs.com/', type: 'documentation' }
                        ],
                        projects: ['Build a REST API', 'Create a blog backend']
                    },
                    {
                        id: 'databases',
                        title: 'Database Design & Management',
                        description: 'Design schemas, write queries, and optimize database performance',
                        skills: ['SQL', 'MongoDB', 'Database Design', 'Indexing', 'Transactions'],
                        estimatedHours: 70,
                        resources: [
                            { title: 'PostgreSQL Tutorial', url: 'https://www.postgresqltutorial.com/', type: 'course' },
                            { title: 'MongoDB University', url: 'https://university.mongodb.com/', type: 'course' }
                        ],
                        projects: ['Design a database schema', 'Optimize query performance']
                    }
                ]
            },
            {
                id: 'advanced',
                title: 'Production & DevOps',
                description: 'Deploy, scale, and maintain production applications',
                level: 'advanced',
                estimatedWeeks: 8,
                steps: [
                    {
                        id: 'deployment',
                        title: 'Deployment & Cloud Services',
                        description: 'Deploy applications to cloud platforms and manage infrastructure',
                        skills: ['Docker', 'AWS/Vercel', 'CI/CD', 'Nginx', 'Environment Management'],
                        estimatedHours: 80,
                        resources: [
                            { title: 'Docker Documentation', url: 'https://docs.docker.com/', type: 'documentation' },
                            { title: 'AWS for Developers', url: 'https://aws.amazon.com/developer/', type: 'documentation' }
                        ],
                        projects: ['Containerize an application', 'Set up CI/CD pipeline']
                    },
                    {
                        id: 'testing-security',
                        title: 'Testing & Security',
                        description: 'Write tests, implement security best practices, and monitor applications',
                        skills: ['Jest', 'Testing Library', 'Security', 'OWASP', 'Monitoring'],
                        estimatedHours: 60,
                        resources: [
                            { title: 'Testing JavaScript', url: 'https://testingjavascript.com/', type: 'course' },
                            { title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/', type: 'documentation' }
                        ],
                        projects: ['Add comprehensive tests', 'Implement security measures']
                    }
                ]
            }
        ]
    },
    {
        id: 'devops-engineering',
        slug: 'devops-engineering',
        title: 'DevOps Engineering',
        description: 'Master CI/CD, containers, orchestration, and cloud infrastructure',
        category: 'Infrastructure & Operations',
        difficulty: 'intermediate',
        totalDuration: '7-10 months',
        icon: '⚙️',
        color: 'orange',
        prerequisites: ['Linux basics', 'Basic programming knowledge'],
        careerOutlook: {
            averageSalary: '$110k - $160k',
            jobGrowth: '25% (Much faster than average)',
            topCompanies: ['AWS', 'Google Cloud', 'Microsoft Azure', 'HashiCorp', 'Docker']
        },
        relatedRoadmaps: ['cloud-engineering', 'full-stack-development'],
        phases: [
            {
                id: 'beginner',
                title: 'Linux & Scripting',
                description: 'Master Linux, shell scripting, and version control',
                level: 'beginner',
                estimatedWeeks: 6,
                steps: [
                    {
                        id: 'linux',
                        title: 'Linux System Administration',
                        description: 'Learn Linux commands, file systems, processes, and networking',
                        skills: ['Linux', 'Bash', 'File Systems', 'Networking', 'System Administration'],
                        estimatedHours: 70,
                        resources: [
                            { title: 'Linux Journey', url: 'https://linuxjourney.com/', type: 'course' },
                            { title: 'The Linux Command Line', url: 'http://linuxcommand.org/tlcl.php', type: 'book' }
                        ],
                        projects: ['Set up a Linux server', 'Write automation scripts']
                    },
                    {
                        id: 'git-github',
                        title: 'Git & Version Control',
                        description: 'Master Git workflows, branching strategies, and collaboration',
                        skills: ['Git', 'GitHub', 'GitLab', 'Branching', 'Code Review'],
                        estimatedHours: 40,
                        resources: [
                            { title: 'Pro Git Book', url: 'https://git-scm.com/book/en/v2', type: 'book' },
                            { title: 'GitHub Learning Lab', url: 'https://lab.github.com/', type: 'course' }
                        ],
                        projects: ['Contribute to open source', 'Set up Git workflows']
                    }
                ]
            },
            {
                id: 'intermediate',
                title: 'Containers & CI/CD',
                description: 'Learn Docker, Kubernetes, and continuous integration/deployment',
                level: 'intermediate',
                estimatedWeeks: 12,
                steps: [
                    {
                        id: 'docker',
                        title: 'Docker & Containerization',
                        description: 'Build, ship, and run applications in containers',
                        skills: ['Docker', 'Docker Compose', 'Container Networking', 'Image Optimization'],
                        estimatedHours: 80,
                        prerequisites: ['linux'],
                        resources: [
                            { title: 'Docker Documentation', url: 'https://docs.docker.com/', type: 'documentation' },
                            { title: 'Docker Deep Dive', url: 'https://www.oreilly.com/library/view/docker-deep-dive/9781800565135/', type: 'book' }
                        ],
                        projects: ['Containerize applications', 'Build multi-container apps']
                    },
                    {
                        id: 'kubernetes',
                        title: 'Kubernetes Orchestration',
                        description: 'Deploy and manage containerized applications at scale',
                        skills: ['Kubernetes', 'Pods', 'Services', 'Deployments', 'Helm'],
                        estimatedHours: 100,
                        prerequisites: ['docker'],
                        resources: [
                            { title: 'Kubernetes Documentation', url: 'https://kubernetes.io/docs/', type: 'documentation' },
                            { title: 'Kubernetes Up & Running', url: 'https://www.oreilly.com/library/view/kubernetes-up-and/9781492046523/', type: 'book' }
                        ],
                        projects: ['Deploy apps to Kubernetes', 'Set up auto-scaling']
                    },
                    {
                        id: 'cicd',
                        title: 'CI/CD Pipelines',
                        description: 'Automate testing, building, and deployment processes',
                        skills: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'ArgoCD', 'Pipeline Design'],
                        estimatedHours: 70,
                        resources: [
                            { title: 'GitHub Actions Docs', url: 'https://docs.github.com/en/actions', type: 'documentation' },
                            { title: 'Jenkins User Handbook', url: 'https://www.jenkins.io/doc/book/', type: 'documentation' }
                        ],
                        projects: ['Build a CI/CD pipeline', 'Automate deployments']
                    }
                ]
            },
            {
                id: 'advanced',
                title: 'Cloud & Infrastructure as Code',
                description: 'Master cloud platforms and infrastructure automation',
                level: 'advanced',
                estimatedWeeks: 10,
                steps: [
                    {
                        id: 'cloud-platforms',
                        title: 'Cloud Platforms (AWS/Azure/GCP)',
                        description: 'Deploy and manage infrastructure on major cloud providers',
                        skills: ['AWS', 'Azure', 'GCP', 'Cloud Networking', 'IAM', 'Cloud Storage'],
                        estimatedHours: 90,
                        resources: [
                            { title: 'AWS Well-Architected', url: 'https://aws.amazon.com/architecture/well-architected/', type: 'documentation' },
                            { title: 'Cloud Practitioner', url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/', type: 'course' }
                        ],
                        projects: ['Deploy multi-tier application', 'Set up cloud infrastructure']
                    },
                    {
                        id: 'iac',
                        title: 'Infrastructure as Code',
                        description: 'Automate infrastructure with Terraform, Ansible, and CloudFormation',
                        skills: ['Terraform', 'Ansible', 'CloudFormation', 'Infrastructure Automation'],
                        estimatedHours: 80,
                        prerequisites: ['cloud-platforms'],
                        resources: [
                            { title: 'Terraform Documentation', url: 'https://www.terraform.io/docs', type: 'documentation' },
                            { title: 'Ansible for DevOps', url: 'https://www.ansiblefordevops.com/', type: 'book' }
                        ],
                        projects: ['Provision infrastructure with Terraform', 'Automate configuration with Ansible']
                    },
                    {
                        id: 'monitoring',
                        title: 'Monitoring & Observability',
                        description: 'Implement monitoring, logging, and alerting systems',
                        skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'Alerting'],
                        estimatedHours: 60,
                        resources: [
                            { title: 'Prometheus Documentation', url: 'https://prometheus.io/docs/', type: 'documentation' },
                            { title: 'Observability Engineering', url: 'https://www.oreilly.com/library/view/observability-engineering/9781492076438/', type: 'book' }
                        ],
                        projects: ['Set up monitoring stack', 'Create dashboards and alerts']
                    }
                ]
            }
        ]
    }
];

export function getAllRoadmaps(): Roadmap[] {
    return roadmaps;
}

export function getRoadmapBySlug(slug: string): Roadmap | undefined {
    return roadmaps.find(r => r.slug === slug);
}

export function getRoadmapsByCategory(category: string): Roadmap[] {
    return roadmaps.filter(r => r.category === category);
}
