import { TheoryTopic } from '@/types/theory';

export const gitlabTheory: TheoryTopic = {
  topicId: 'gitlab',
  topicName: 'GitLab',
  category: 'Tools & Cloud',
  description: 'GitLab platform covering repos, merge requests, issues, and DevOps lifecycle.',
  sections: [
    {
      id: 'fundamentals',
      title: 'Fundamentals and Projects',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is GitLab?', content: 'A DevOps platform combining git hosting, CI/CD, security scanning, and project management in one application.' },
        { id: 'q2', title: 'Groups vs projects?', content: 'Groups organize multiple projects and inherit membership/permissions; projects hold code, issues, pipelines, and releases.' },
        { id: 'q3', title: 'Visibility levels?', content: 'Private (members only), Internal (authenticated users), Public (everyone). Controls access to code, issues, pipelines, packages.' },
        { id: 'q4', title: 'Authentication options?', content: 'Username/password with 2FA, SAML/SSO, LDAP, OAuth providers, personal access tokens, deploy tokens, CI job tokens.' },
        { id: 'q5', title: 'Default branch protection?', content: 'Protected branches restrict who can push or merge and enforce approvals/pipelines. Often main/master is protected.' },
        { id: 'q6', title: 'Labels and milestones?', content: 'Labels categorize issues/MRs; milestones track due dates across issues/MRs; both help planning and burndown charts.' },
        { id: 'q7', title: 'Issue boards?', content: 'Kanban-style boards using labels to visualize workflow columns and track progress with drag-and-drop.' },
        { id: 'q8', title: 'Epics and roadmaps?', content: 'Epics group issues across projects; roadmaps show epic timelines for portfolio planning (premium/ultimate tiers).' },
        { id: 'q9', title: 'Web IDE vs VS Code Web?', content: 'Web IDE enables quick edits/commits; VS Code Web integration offers richer editing and extensions in-browser.' },
        { id: 'q10', title: 'Project templates?', content: 'Starter templates for common stacks set up CI config, .gitignore, licenses. Speeds initial project scaffolding.' }
      ]
    },
    {
      id: 'workflow',
      title: 'Source Control and Collaboration',
      content: '',
      subsections: [
        { id: 'q11', title: 'Merge requests?', content: 'Propose changes, trigger pipelines, collect reviews/approvals, resolve conflicts, and squash/merge with policies.' },
        { id: 'q12', title: 'Approval rules?', content: 'Require reviewers/groups, code owners by path, minimum approvals, blocking by failing pipeline or unresolved threads.' },
        { id: 'q13', title: 'Code owners?', content: 'CODEOWNERS file maps paths to owners; auto-request reviews and require approvals for protected areas.' },
        { id: 'q14', title: 'Draft WIP MRs?', content: 'Mark as Draft to block merging until ready, keeping pipelines and review feedback early.' },
        { id: 'q15', title: 'Branch naming policies?', content: 'Enforce prefixes (feature/, bugfix/, hotfix/) and protections per branch; required for environments or release flows.' },
        { id: 'q16', title: 'Cherry-pick and revert?', content: 'GitLab UI supports cherry-picking commits to other branches and reverting merges/commits with auto-MR creation.' },
        { id: 'q17', title: 'Snippets?', content: 'Share code snippets privately or publicly; supports versioning and access control for small code shares.' },
        { id: 'q18', title: 'Discussions and threads?', content: 'Start threads on lines/files; must resolve before merge if required; keeps context and review history.' },
        { id: 'q19', title: 'Suggestions in review?', content: 'Inline suggested changes allow one-click apply/commit within MR to speed review feedback.' },
        { id: 'q20', title: 'Release management?', content: 'Create releases with tags, notes, assets, and evidence; attach build artifacts like binaries or SBOMs.' }
      ]
    },
    {
      id: 'ci-cd',
      title: 'CI/CD Pipelines',
      content: '',
      subsections: [
        { id: 'q21', title: 'Where is pipeline config?', content: '.gitlab-ci.yml defines stages, jobs, rules, artifacts, cache, services, and variables for pipelines.' },
        { id: 'q22', title: 'Stages vs jobs?', content: 'Stages run sequentially; jobs in the same stage run in parallel. Typical flow: build, test, deploy.' },
        { id: 'q23', title: 'Runners?', content: 'Agents that execute jobs. Shared or project/group-specific; can be shell, Docker, Kubernetes, or custom executors.' },
        { id: 'q24', title: 'Caching vs artifacts?', content: 'Cache speeds subsequent jobs/pipelines (e.g., dependencies); artifacts persist job outputs for later stages or download.' },
        { id: 'q25', title: 'Pipeline triggers?', content: 'Triggers from commits, MRs, schedules, webhooks, API, parent/child pipelines, and multi-project pipelines.' },
        { id: 'q26', title: 'Rules vs only/except?', content: 'rules: is preferred, supports complex conditions (branches, variables, changes). only/except is legacy gating.' },
        { id: 'q27', title: 'Environments and deployments?', content: 'Define environments (review, staging, prod), track deployments, supports stop actions and approvals for protected envs.' },
        { id: 'q28', title: 'Auto DevOps?', content: 'Opinionated pipelines that auto-detect languages, build, test, containerize, security scan, and deploy to K8s.' },
        { id: 'q29', title: 'CI variables and secrets?', content: 'Mask/protect variables; scope by env; use CI_JOB_TOKEN for internal auth; integrate with Vault for secrets.' },
        { id: 'q30', title: 'Parent/child pipelines?', content: 'Split monolithic pipelines into child configs for modularity; improves caching, reusability, and parallelism.' }
      ]
    },
    {
      id: 'security',
      title: 'Security and Compliance',
      content: '',
      subsections: [
        { id: 'q31', title: 'Secure scans?', content: 'SAST, DAST, Dependency Scanning, Container Scanning, License Compliance; results surface as MR security findings.' },
        { id: 'q32', title: 'SBOMs?', content: 'Generate SBOM artifacts via CI; track dependencies and vulnerabilities across releases.' },
        { id: 'q33', title: 'Secret detection?', content: 'Built-in regex/entropy scanners to block committing secrets; can fail pipelines or require approvals.' },
        { id: 'q34', title: 'Compliance pipelines?', content: 'Enforce organization-wide templates appended to project pipelines to guarantee mandated jobs run.' },
        { id: 'q35', title: 'Approval policies?', content: 'Require approvals for protected branches/environments; code owner rules; security approvers for critical paths.' },
        { id: 'q36', title: 'Audit events?', content: 'Logs for changes to users, groups, projects, settings. Exportable for compliance and monitoring.' },
        { id: 'q37', title: 'Package and container registries?', content: 'Built-in registries with access control; supports npm, PyPI, Maven, NuGet, Conan, Helm, OCI images.' },
        { id: 'q38', title: 'Dependency proxies?', content: 'Caching proxy for upstream container registries to reduce egress and increase build reliability.' },
        { id: 'q39', title: 'Protected tags?', content: 'Restrict who can create tags (especially release tags) to prevent unauthorized releases.' },
        { id: 'q40', title: 'PII and secrets handling?', content: 'Mask CI logs, avoid secrets in repo, rotate tokens, use Vault/CI variables, restrict artifacts visibility.' }
      ]
    },
    {
      id: 'operations',
      title: 'Operations and Administration',
      content: '',
      subsections: [
        { id: 'q41', title: 'Self-managed vs SaaS?', content: 'SaaS GitLab.com is managed by GitLab; self-managed installed on your infra with your backups, HA, and updates.' },
        { id: 'q42', title: 'Backups and restore?', content: 'Use gitlab-backup for repos/db/uploads; verify restores; snapshot config files; plan RPO/RTO.' },
        { id: 'q43', title: 'High availability?', content: 'Use Patroni/PG for HA database, Gitaly cluster for repos, object storage for artifacts, load-balanced web/API nodes.' },
        { id: 'q44', title: 'Monitoring?', content: 'Prometheus and Grafana built-in; logs via ELK/Elastic; health checks for liveness/readiness; audit logs.' },
        { id: 'q45', title: 'Upgrades?', content: 'Follow upgrade paths; avoid skipping majors; test in staging; backup before upgrading.' },
        { id: 'q46', title: 'Runner scaling?', content: 'Autoscale runners on Kubernetes/VMs using spot/preemptible; use concurrency limits and resource classes.' },
        { id: 'q47', title: 'Performance tips?', content: 'Use object storage for artifacts/packages, Gitaly for repo access, reduce monorepo pipeline bottlenecks via child pipelines.' },
        { id: 'q48', title: 'Geo replication?', content: 'Geo secondary sites replicate repos, artifacts, and container registry for disaster recovery and regional performance.' },
        { id: 'q49', title: 'Integrations?', content: 'Webhooks, Slack/MS Teams, Jira, VS Code, Kubernetes clusters, Vault, external issue trackers.' },
        { id: 'q50', title: 'Cost control?', content: 'Optimize runner minutes with caching and parallelism, prune artifacts, use dependency proxy, schedule idle runner shutdown.' }
      ]
    }
  ]
};
