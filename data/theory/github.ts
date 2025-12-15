import { TheoryTopic } from '@/types/theory';

export const githubTheory: TheoryTopic = {
  topicId: 'github',
  topicName: 'GitHub',
  category: 'Tools & Cloud',
  description: 'GitHub platform and collaboration',
  sections: [
    {
      id: 'basics',
      title: 'GitHub Basics',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is GitHub?', content: 'GitHub is web-based Git repository hosting. Features: code hosting, collaboration, pull requests, issues, wikis, CI/CD. Largest code host. Social coding. Essential for developers.' },
        { id: 'q2', title: 'What is repository?', content: 'Repository (repo) contains project code. Public (visible to all) or private (restricted). Contains: code, README, .gitignore, license. Project storage. Version controlled.' },
        { id: 'q3', title: 'What is README?', content: 'README.md describes project. Markdown format. Contains: description, installation, usage, examples. First thing users see. Important documentation. Project overview.' },
        { id: 'q4', title: 'What is .gitignore?', content: '.gitignore excludes files from Git. Patterns: node_modules/, *.log, .env. Prevents committing unwanted files. Repository-specific or global. Essential for clean repos.' },
        { id: 'q5', title: 'What is clone?', content: 'Clone creates local copy. git clone <url>. Downloads entire history. Creates remote tracking. Sets up local repository. One-time operation. Getting started.' },
        { id: 'q6', title: 'What is fork?', content: 'Fork creates copy in your account. Your own copy. Can modify independently. Contribute back via pull request. Common for open source. Different from clone.' },
        { id: 'q7', title: 'What is pull request?', content: 'Pull request (PR) proposes changes. Compares branches. Code review process. Discussion and approval. Merges into target branch. Collaboration workflow. Not Git command.' },
        { id: 'q8', title: 'What is issue?', content: 'Issue tracks: bugs, features, tasks, questions. Discussion thread. Assignees, labels, milestones. Project management. Collaboration tool. Track work.' },
        { id: 'q9', title: 'What is branch?', content: 'Branch is parallel version. Create for features. Switch between branches. Merge branches. Isolate work. Enable collaboration. Git feature used on GitHub.' },
        { id: 'q10', title: 'What is commit?', content: 'Commit saves changes. Message describes change. Forms history. Viewable on GitHub. Atomic changes. Version control. Project history.' }
      ]
    },
    {
      id: 'collaboration',
      title: 'Collaboration',
      content: '',
      subsections: [
        { id: 'q11', title: 'What is code review?', content: 'Code review examines code before merge. Pull request enables review. Benefits: quality, knowledge sharing, catching bugs. Review: logic, style, tests. Important for team quality.' },
        { id: 'q12', title: 'What is merge conflict?', content: 'Merge conflict: conflicting changes in same lines. GitHub shows conflicts. Resolve manually. Edit files, remove markers. Mark as resolved. Complete merge. Common in collaboration.' },
        { id: 'q13', title: 'What is rebase vs merge?', content: 'Rebase: linear history, cleaner, rewrites history. Merge: preserves history, merge commit, safer. GitHub supports both. Choose based on: team preference, history needs. Different strategies.' },
        { id: 'q14', title: 'What is protected branch?', content: 'Protected branch enforces rules. Require: PR reviews, status checks, no force push. Prevents direct pushes. Enforces workflow. Team safety. Production branches.' },
        { id: 'q15', title: 'What is branch protection?', content: 'Branch protection: require reviews, require status checks, restrict who can push, require linear history. Enforce policies. Team standards. Quality control.' },
        { id: 'q16', title: 'What is code owners?', content: 'CODEOWNERS file specifies reviewers. Automatic review requests. Code ownership. Team organization. Ensure expertise reviews. Collaboration feature.' },
        { id: 'q17', title: 'What is GitHub Discussions?', content: 'GitHub Discussions: Q&A, announcements, general discussion. Separate from issues. Community engagement. Knowledge sharing. Project communication.' },
        { id: 'q18', title: 'What is GitHub Wiki?', content: 'GitHub Wiki: project documentation. Markdown pages. Version controlled. Collaborative editing. Project knowledge base. Documentation tool.' },
        { id: 'q19', title: 'What is GitHub Projects?', content: 'GitHub Projects: kanban boards, project management, track issues/PRs, organize work. Visual boards. Team coordination. Project planning.' },
        { id: 'q20', title: 'What is GitHub Teams?', content: 'GitHub Teams: organize members, permissions, repositories. Team management. Access control. Organization structure. Collaboration groups.' }
      ]
    },
    {
      id: 'features',
      title: 'GitHub Features',
      content: '',
      subsections: [
        { id: 'q21', title: 'What is GitHub Actions?', content: 'GitHub Actions: CI/CD automation. Workflows in YAML. Triggers: push, PR, schedule. Run: tests, builds, deployments. Automated processes. Powerful automation.' },
        { id: 'q22', title: 'What is GitHub Pages?', content: 'GitHub Pages: static website hosting. From repository. Free hosting. Custom domain. Jekyll support. Deploy automatically. Simple hosting.' },
        { id: 'q23', title: 'What is GitHub Releases?', content: 'GitHub Releases: package software versions. Tagged commits. Release notes. Download assets. Version management. Software distribution.' },
        { id: 'q24', title: 'What is GitHub Gists?', content: 'GitHub Gists: share code snippets. Public or secret. Version controlled. Quick sharing. Code snippets. Simple sharing.' },
        { id: 'q25', title: 'What is GitHub Marketplace?', content: 'GitHub Marketplace: apps and actions. Extend GitHub. Integrations. Tools and services. Ecosystem. Enhance workflow.' },
        { id: 'q26', title: 'What is GitHub CLI?', content: 'GitHub CLI (gh): command-line interface. Manage repositories, issues, PRs from terminal. Automation. Scripting. Developer tool.' },
        { id: 'q27', title: 'What is GitHub API?', content: 'GitHub API: programmatic access. REST and GraphQL. Automate operations. Integrate with tools. Build applications. Powerful interface.' },
        { id: 'q28', title: 'What is GitHub Security?', content: 'GitHub Security: Dependabot (dependency updates), security advisories, secret scanning, code scanning. Security features. Vulnerability management. Important for production.' },
        { id: 'q29', title: 'What is GitHub Insights?', content: 'GitHub Insights: repository analytics. Contributions, traffic, community. Project metrics. Understanding activity. Analytics tool.' },
        { id: 'q30', title: 'What is GitHub Sponsors?', content: 'GitHub Sponsors: support open source. Monthly payments. Support developers. Open source funding. Community support.' }
      ]
    },
    {
      id: 'workflow',
      title: 'Workflows',
      content: '',
      subsections: [
        { id: 'q31', title: 'What is GitHub Flow?', content: 'GitHub Flow: main always deployable, create feature branch, work and commit, open PR, review and merge, deploy. Simple workflow. Continuous deployment. Popular approach.' },
        { id: 'q32', title: 'What is Git Flow on GitHub?', content: 'Git Flow: main (production), develop (integration), feature/*, release/*, hotfix/*. Structured workflow. More complex. Good for releases. Team coordination.' },
        { id: 'q33', title: 'What is fork workflow?', content: 'Fork workflow: fork repository, clone fork, create branch, make changes, push to fork, open PR to original. Open source contribution. External contributions. Common pattern.' },
        { id: 'q34', title: 'What is feature branch workflow?', content: 'Feature branch: create branch for feature, work independently, open PR when done, merge after review. Isolate work. Team collaboration. Standard practice.' },
        { id: 'q35', title: 'What is continuous integration?', content: 'CI automatically tests on commits. GitHub Actions. Runs tests, linting, builds. Catches issues early. Prevents broken main. Essential for quality.' },
        { id: 'q36', title: 'What is continuous deployment?', content: 'CD automatically deploys after merge. GitHub Actions. Deploy to: staging, production. Automated deployment. Fast delivery. Modern practice.' },
        { id: 'q37', title: 'What is semantic versioning?', content: 'Semantic versioning: MAJOR.MINOR.PATCH. Tags releases. Clear version meaning. GitHub Releases. Standard practice. Dependency management.' },
        { id: 'q38', title: 'What is changelog?', content: 'Changelog documents changes. Version history. What changed, when, why. CHANGELOG.md file. Release notes. Project documentation. User communication.' },
        { id: 'q39', title: 'What is contribution graph?', content: 'Contribution graph shows activity. Green squares for commits. Visual representation. Activity tracking. Motivation tool. Public profile.' },
        { id: 'q40', title: 'What is GitHub best practices?', content: 'Best practices: meaningful commit messages, small PRs, code review, use issues, document, follow conventions, use branches, protect main, automate, secure, collaborate, maintain clean history.' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced GitHub',
      content: '',
      subsections: [
        { id: 'q41', title: 'What is GitHub Organizations?', content: 'GitHub Organizations: manage multiple repositories, teams, permissions, billing. Company/team structure. Centralized management. Enterprise features. Team organization.' },
        { id: 'q42', title: 'What is GitHub Enterprise?', content: 'GitHub Enterprise: self-hosted or cloud. Advanced features, SSO, audit logs, compliance. Enterprise needs. Security and compliance. Large organizations.' },
        { id: 'q43', title: 'What is GitHub Copilot?', content: 'GitHub Copilot: AI pair programmer. Code suggestions. Autocomplete. Productivity tool. AI-powered. Code generation assistance.' },
        { id: 'q44', title: 'What is GitHub Codespaces?', content: 'GitHub Codespaces: cloud development environment. VS Code in browser. Pre-configured. Remote development. No local setup. Cloud IDE.' },
        { id: 'q45', title: 'What is GitHub Packages?', content: 'GitHub Packages: package registry. npm, Maven, Docker, etc. Integrated with GitHub. Private packages. Software distribution. Package management.' },
        { id: 'q46', title: 'What is GitHub Environments?', content: 'GitHub Environments: deployment targets. Staging, production. Environment-specific secrets. Deployment protection. Controlled deployments. Production safety.' },
        { id: 'q47', title: 'What is GitHub Secrets?', content: 'GitHub Secrets: encrypted variables. Store: API keys, passwords, tokens. Use in Actions. Secure storage. Don\'t commit secrets. Security best practice.' },
        { id: 'q48', title: 'What is GitHub webhooks?', content: 'GitHub webhooks: event notifications. HTTP POST on events. Integrate with external services. Event-driven. Automation. External integrations.' },
        { id: 'q49', title: 'What is GitHub templates?', content: 'GitHub templates: issue templates, PR templates, repository templates. Standardize format. Better communication. Consistency. Team efficiency.' },
        { id: 'q50', title: 'What is GitHub vs GitLab vs Bitbucket?', content: 'GitHub: largest community, most integrations, popular. GitLab: built-in CI/CD, self-hosted option. Bitbucket: Jira integration, free private repos. Choose based on: needs, team, preferences.' }
      ]
    }
  ]
};
