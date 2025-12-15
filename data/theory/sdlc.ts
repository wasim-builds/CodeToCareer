import { TheoryTopic } from '@/types/theory';

export const sdlcTheory: TheoryTopic = {
  topicId: 'sdlc',
  topicName: 'SDLC',
  category: 'Core Concepts',
  description: 'Software Development Life Cycle',
  sections: [
    {
      id: 'phases',
      title: 'SDLC Phases',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is SDLC?', content: 'SDLC (Software Development Life Cycle) is process for developing software. Phases: planning, analysis, design, implementation, testing, deployment, maintenance. Structured approach. Quality software. Project management.' },
        { id: 'q2', title: 'What is planning phase?', content: 'Planning phase: project scope, resources, timeline, risks, budget. Feasibility study. Project charter. Initial planning. Foundation phase. Project kickoff.' },
        { id: 'q3', title: 'What is requirements analysis?', content: 'Requirements analysis: gather requirements, functional and non-functional, stakeholder needs, document specifications. Understand what to build. Critical phase. Foundation for design.' },
        { id: 'q4', title: 'What is design phase?', content: 'Design phase: system architecture, database design, UI/UX, interfaces, technical specifications. How to build. Blueprint creation. Implementation guide.' },
        { id: 'q5', title: 'What is implementation phase?', content: 'Implementation phase: coding, unit development, integration, code reviews. Build software. Development work. Core phase. Writing code.' },
        { id: 'q6', title: 'What is testing phase?', content: 'Testing phase: unit tests, integration tests, system tests, user acceptance. Verify functionality. Quality assurance. Bug finding. Essential phase.' },
        { id: 'q7', title: 'What is deployment phase?', content: 'Deployment phase: release to production, environment setup, data migration, go-live. Make available. Production launch. Critical phase. Real users.' },
        { id: 'q8', title: 'What is maintenance phase?', content: 'Maintenance phase: bug fixes, updates, enhancements, support. Ongoing work. Longest phase. Keep running. Evolution.' },
        { id: 'q9', title: 'What is SDLC models?', content: 'SDLC models: Waterfall (sequential), Agile (iterative), Spiral (risk-driven), V-Model (verification), DevOps (continuous). Different approaches. Choose based on project.' },
        { id: 'q10', title: 'What is Waterfall model?', content: 'Waterfall model: sequential phases. One phase completes before next. Document-heavy. Predictable. Good for: stable requirements, clear scope. Traditional approach.' }
      ]
    },
    {
      id: 'agile',
      title: 'Agile Methodology',
      content: '',
      subsections: [
        { id: 'q11', title: 'What is Agile?', content: 'Agile is iterative approach. Values: individuals, working software, collaboration, responding to change. Manifesto principles. Flexible. Modern standard. Popular methodology.' },
        { id: 'q12', title: 'What is Scrum?', content: 'Scrum: Agile framework. Roles: Product Owner, Scrum Master, Team. Artifacts: Product Backlog, Sprint Backlog. Events: Sprint, Daily Standup, Retrospective. Popular framework.' },
        { id: 'q13', title: 'What is Sprint?', content: 'Sprint: time-boxed iteration. Usually 2-4 weeks. Deliver increment. Plan, execute, review, retrospect. Working software. Iterative delivery.' },
        { id: 'q14', title: 'What is user stories?', content: 'User stories: requirements format. "As a [user], I want [feature], so that [benefit]". User perspective. Simple format. Requirements communication.' },
        { id: 'q15', title: 'What is backlog?', content: 'Backlog: prioritized list. Product backlog (all items), Sprint backlog (Sprint items). Requirements management. Prioritization. Planning tool.' },
        { id: 'q16', title: 'What is Kanban?', content: 'Kanban: visualize work. Columns: To Do, In Progress, Done. Limit work in progress. Continuous flow. Lean methodology. Process improvement.' },
        { id: 'q17', title: 'What is daily standup?', content: 'Daily standup: brief meeting. What did I do, what will I do, any blockers. Team sync. Communication. Scrum event.' },
        { id: 'q18', title: 'What is retrospective?', content: 'Retrospective: reflect on Sprint. What went well, what to improve, action items. Continuous improvement. Team learning. Scrum event.' },
        { id: 'q19', title: 'What is velocity?', content: 'Velocity: work completed per Sprint. Story points or tasks. Predict future. Team capacity. Planning tool. Scrum metric.' },
        { id: 'q20', title: 'What is Agile vs Waterfall?', content: 'Agile: iterative, flexible, customer collaboration, working software. Waterfall: sequential, rigid, documentation, phases. Choose based on: requirements stability, team, project type.' }
      ]
    },
    {
      id: 'testing',
      title: 'Testing',
      content: '',
      subsections: [
        { id: 'q21', title: 'What is testing levels?', content: 'Testing levels: unit (components), integration (modules), system (entire system), acceptance (user requirements). Different scopes. Comprehensive testing. Quality assurance.' },
        { id: 'q22', title: 'What is test types?', content: 'Test types: functional (features), non-functional (performance, security), regression (existing features), smoke (critical paths). Different purposes. Comprehensive coverage.' },
        { id: 'q23', title: 'What is TDD?', content: 'TDD (Test-Driven Development): write tests first, then code. Red-Green-Refactor cycle. Ensures testability. Quality code. Development practice.' },
        { id: 'q24', title: 'What is BDD?', content: 'BDD (Behavior-Driven Development): tests in natural language. Given-When-Then format. Business-readable. Collaboration. Requirements as tests.' },
        { id: 'q25', title: 'What is CI/CD?', content: 'CI/CD: Continuous Integration (test on commit), Continuous Deployment (auto deploy). Automated pipeline. Fast feedback. Modern practice. DevOps.' },
        { id: 'q26', title: 'What is test automation?', content: 'Test automation: automated test execution. Faster, repeatable, comprehensive. Unit, integration, E2E tests. Essential for CI/CD. Quality assurance.' },
        { id: 'q27', title: 'What is code coverage?', content: 'Code coverage: percentage of code tested. Measure test completeness. Aim for high coverage. Quality metric. Not perfect measure. Testing indicator.' },
        { id: 'q28', title: 'What is test pyramid?', content: 'Test pyramid: many unit tests, fewer integration tests, few E2E tests. Fast, cheap, comprehensive. Testing strategy. Best practice.' },
        { id: 'q29', title: 'What is bug tracking?', content: 'Bug tracking: record, prioritize, assign, resolve bugs. Tools: Jira, Bugzilla, GitHub Issues. Issue management. Quality control. Project management.' },
        { id: 'q30', title: 'What is testing best practices?', content: 'Best practices: test early, automate, comprehensive coverage, test edge cases, maintain tests, fast tests, isolate tests, clear test names, CI/CD integration.' }
      ]
    },
    {
      id: 'deployment',
      title: 'Deployment and DevOps',
      content: '',
      subsections: [
        { id: 'q31', title: 'What is deployment?', content: 'Deployment: release software to users. Environments: dev, staging, production. Process: build, test, deploy, verify. Make available. Critical phase.' },
        { id: 'q32', title: 'What is DevOps?', content: 'DevOps: development + operations. Collaboration, automation, CI/CD, monitoring. Faster delivery. Culture and practices. Modern approach.' },
        { id: 'q33', title: 'What is CI?', content: 'CI (Continuous Integration): merge code frequently, automated tests, fast feedback. Detect issues early. Quality assurance. Development practice.' },
        { id: 'q34', title: 'What is CD?', content: 'CD (Continuous Deployment/Delivery): automated deployment, frequent releases, reduce risk. Fast delivery. Modern practice. Production automation.' },
        { id: 'q35', title: 'What is version control?', content: 'Version control: track changes, Git, collaboration, branching, merging. Code management. Essential tool. Team collaboration.' },
        { id: 'q36', title: 'What is infrastructure as code?', content: 'Infrastructure as Code: define infrastructure in code, Terraform, CloudFormation, version controlled, reproducible. Automation. Modern practice.' },
        { id: 'q37', title: 'What is containerization?', content: 'Containerization: Docker, consistent environments, portable, scalable. Deployment technology. Modern standard. Cloud native.' },
        { id: 'q38', title: 'What is orchestration?', content: 'Orchestration: Kubernetes, manage containers, scaling, health checks. Production deployment. Container management. Cloud native.' },
        { id: 'q39', title: 'What is monitoring?', content: 'Monitoring: track performance, errors, usage, resources. Production visibility. Proactive management. Essential for operations.' },
        { id: 'q40', title: 'What is rollback?', content: 'Rollback: revert to previous version. Deployment safety. Quick recovery. Risk mitigation. Production safety. Essential capability.' }
      ]
    },
    {
      id: 'management',
      title: 'Project Management',
      content: '',
      subsections: [
        { id: 'q41', title: 'What is project management?', content: 'Project management: plan, execute, monitor, control projects. Scope, time, cost, quality. Deliver successfully. Leadership. Essential skill.' },
        { id: 'q42', title: 'What is risk management?', content: 'Risk management: identify, assess, mitigate risks. Technical, schedule, resource risks. Proactive approach. Project safety. Important practice.' },
        { id: 'q43', title: 'What is change management?', content: 'Change management: handle requirement changes. Change requests, impact analysis, approval process. Controlled changes. Project stability.' },
        { id: 'q44', title: 'What is quality assurance?', content: 'Quality assurance: processes to ensure quality. Testing, reviews, standards, metrics. Prevent defects. Quality focus. Important practice.' },
        { id: 'q45', title: 'What is documentation?', content: 'Documentation: requirements, design, API, user guides, code comments. Knowledge preservation. Communication. Maintenance aid. Important practice.' },
        { id: 'q46', title: 'What is code review?', content: 'Code review: examine code before merge. Quality, standards, bugs, knowledge sharing. Team practice. Quality control. Collaboration.' },
        { id: 'q47', title: 'What is technical debt?', content: 'Technical debt: shortcuts, quick fixes, technical compromises. Accumulates over time. Refactor to pay down. Balance speed vs quality. Management challenge.' },
        { id: 'q48', title: 'What is software metrics?', content: 'Software metrics: code coverage, complexity, velocity, defect rate. Measure progress. Quality indicators. Project tracking. Management tool.' },
        { id: 'q49', title: 'What is stakeholder management?', content: 'Stakeholder management: identify, communicate, manage expectations, get buy-in. Project success. Communication. Important skill.' },
        { id: 'q50', title: 'What are SDLC best practices?', content: 'Best practices: clear requirements, proper planning, regular communication, testing throughout, version control, documentation, code reviews, CI/CD, monitoring, continuous improvement, team collaboration, risk management.' }
      ]
    }
  ]
};
