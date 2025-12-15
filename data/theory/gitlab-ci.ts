import { TheoryTopic } from '@/types/theory';

export const gitlabCiTheory: TheoryTopic = {
  topicId: 'gitlab-ci',
  topicName: 'GitLab CI',
  category: 'Tools & Cloud',
  description: 'GitLab CI/CD pipelines, runners, caching, deployments, and troubleshooting.',
  sections: [
    {
      id: 'basics',
      title: 'Pipeline Basics',
      content: '',
      subsections: [
        { id: 'q1', title: 'Pipeline config file?', content: '.gitlab-ci.yml in repo root defines stages, jobs, variables, rules, artifacts, services, and includes.' },
        { id: 'q2', title: 'Stages and jobs?', content: 'Stages execute in order; jobs within a stage run in parallel. Keep stages few and meaningful (build/test/deploy).' },
        { id: 'q3', title: 'Rules vs only/except?', content: 'rules: is the modern conditional syntax; supports if clauses, file changes, variables, and workflow rules.' },
        { id: 'q4', title: 'Default keywords?', content: 'Use default: to set shared settings (image, before_script, tags) inherited by jobs unless overridden.' },
        { id: 'q5', title: 'Images and services?', content: 'image sets the container for job execution; services spin up sidecars (DB/Redis) accessible during the job.' },
        { id: 'q6', title: 'Variables?', content: 'CI/CD variables parametrize jobs; can be masked/protected; set in UI, group, project, or in YAML with default values.' },
        { id: 'q7', title: 'Artifacts?', content: 'Files persisted after a job for later stages or download. Configure expire_in, paths, reports (junit, cobertura, sbom).' },
        { id: 'q8', title: 'Cache?', content: 'Speeds repeated work (deps). Use key (with prefix/branch) and paths; avoid caching build outputs that differ per job.' },
        { id: 'q9', title: 'Dependencies between jobs?', content: 'needs: enables DAG parallelism by specifying job dependencies; artifacts:download to fetch specific outputs.' },
        { id: 'q10', title: 'When to use workflow rules?', content: 'Control pipeline creation (skip docs-only commits, run on tags, MR-only pipelines) before jobs are evaluated.' }
      ]
    },
    {
      id: 'runners',
      title: 'Runners and Execution',
      content: '',
      subsections: [
        { id: 'q11', title: 'Runner types?', content: 'Shared runners (GitLab-managed) and specific/group/project runners. Executors: shell, Docker, Kubernetes, custom.' },
        { id: 'q12', title: 'Tags?', content: 'Jobs require runner tags to match; use tags to route workloads by OS, arch, size, or network access.' },
        { id: 'q13', title: 'Autoscaling runners?', content: 'Use Docker Machine or K8s executor to scale runners on demand; configure limits, idle time, and spot/preemptible instances.' },
        { id: 'q14', title: 'Service containers?', content: 'Sidecars share a network with the job container; expose ports via aliases; good for DBs/queues in tests.' },
        { id: 'q15', title: 'Artifacts on runners?', content: 'Stored remotely (object storage) not on runner disk; ensures jobs are stateless and scalable.' },
        { id: 'q16', title: 'Concurrency controls?', content: 'Use resource_group to serialize jobs touching same resource; use interruptible and auto-cancel redundant pipelines.' },
        { id: 'q17', title: 'Timeouts?', content: 'Set job-level timeout or project default; prevents stuck jobs. Increase for long builds; balance runner cost.' },
        { id: 'q18', title: 'Docker-in-Docker vs host Docker?', content: 'DinD uses privileged service; consider Kaniko/BuildKit with registry auth; host Docker requires mounted socket with care.' },
        { id: 'q19', title: 'Runner isolation?', content: 'Prefer Docker/K8s executors for clean environments; avoid leaking cache/credentials; rotate tokens often.' },
        { id: 'q20', title: 'Debugging jobs?', content: 'Enable debug trace (CI_DEBUG_TRACE), use artifacts: when: on_failure, and run jobs in interactive web terminal.' }
      ]
    },
    {
      id: 'pipelines',
      title: 'Pipeline Design',
      content: '',
      subsections: [
        { id: 'q21', title: 'DAG pipelines?', content: 'Use needs: to express dependency graph enabling parallel jobs earlier; reduces total pipeline time.' },
        { id: 'q22', title: 'Parent-child pipelines?', content: 'Parent pipeline triggers child YAMLs for modularity; good for monorepos and large teams with shared logic.' },
        { id: 'q23', title: 'Multi-project pipelines?', content: 'trigger keyword can start pipelines in downstream projects for coordinated releases or infra changes.' },
        { id: 'q24', title: 'Includes and templates?', content: 'Reuse config via include: templates, remote URLs, project files; extends to override/merge definitions.' },
        { id: 'q25', title: 'Review apps?', content: 'Create ephemeral environments per MR using dynamic review app URLs; auto-stop on close to save cost.' },
        { id: 'q26', title: 'Feature flags?', content: 'Manage rollout with flags tied to environments; integrate with CI to toggle features per deploy.' },
        { id: 'q27', title: 'Testing strategies?', content: 'Split tests by type; parallelize by test shards; use junit reports; fail fast; cache deps not build outputs.' },
        { id: 'q28', title: 'Compliance jobs?', content: 'Organization can append required jobs to pipelines to enforce scans/policies regardless of project config.' },
        { id: 'q29', title: 'Secret management?', content: 'Use masked/protected variables, HashiCorp Vault integration, and avoid echoing secrets. CI_JOB_TOKEN for internal auth.' },
        { id: 'q30', title: 'Manual and timed actions?', content: 'when: manual for gated deploys; schedules for cron jobs; allow_failure for non-blocking checks.' }
      ]
    },
    {
      id: 'deploy',
      title: 'Deployments and Ops',
      content: '',
      subsections: [
        { id: 'q31', title: 'Environments and locks?', content: 'Define environments with URL; use protected environments and approvals; use environment: action: stop for teardown.' },
        { id: 'q32', title: 'Kubernetes integration?', content: 'Connect cluster to project/group; use deploy tokens; Auto DevOps deploys; can use Helm/Kustomize in CI jobs.' },
        { id: 'q33', title: 'Blue/green vs canary?', content: 'Blue/green swaps traffic after validation; canary gradually shifts traffic; both supported via Kubernetes/feature flags.' },
        { id: 'q34', title: 'Package/Container registries?', content: 'Publish artifacts to built-in package and container registries with CI_JOB_TOKEN; use immutable tags for releases.' },
        { id: 'q35', title: 'Observability?', content: 'Capture JUnit/coverage reports, performance metrics, tracing via OpenTelemetry exporters, and error tracking integrations.' },
        { id: 'q36', title: 'Rollbacks?', content: 'Maintain previous deploy artifacts/images; use tags; scripts to redeploy last stable version; keep DB migration strategies.' },
        { id: 'q37', title: 'Secrets for deploy?', content: 'Use masked variables, Vault, or K8s secrets; scope per environment; avoid writing to repo or logs.' },
        { id: 'q38', title: 'Deploy approvals?', content: 'Protected environments can require approvers; tie to change management and audit trails.' },
        { id: 'q39', title: 'Handling migrations?', content: 'Use phased deploys: deploy code with backward-compatible schema, run migrations, then clean-up after rollout.' },
        { id: 'q40', title: 'Cost/performance tuning?', content: 'Cache deps, use parallel matrix jobs, use lightweight images, prune artifacts, and use auto-cancel redundant pipelines.' }
      ]
    },
    {
      id: 'troubleshoot',
      title: 'Troubleshooting and Best Practices',
      content: '',
      subsections: [
        { id: 'q41', title: 'Common YAML errors?', content: 'Indentation mistakes, missing anchors, wrong stage names. Validate with CI Lint in GitLab UI.' },
        { id: 'q42', title: 'Stuck jobs?', content: 'Runner offline or tags mismatch; exceeded concurrency; no capacity; check runner logs and project settings.' },
        { id: 'q43', title: 'Flaky tests?', content: 'Isolate flakiness, retry failing jobs, capture artifacts/logs, quarantine flaky suites, stabilize timing and mocks.' },
        { id: 'q44', title: 'Large artifacts?', content: 'Use expire_in, switch to package/container registries, avoid storing huge build outputs as artifacts.' },
        { id: 'q45', title: 'Cache not working?', content: 'Check keys per branch, avoid checksum changes, ensure paths exist, and separate caches by executor/arch.' },
        { id: 'q46', title: 'Runner permissions?', content: 'Protected variables only available on protected branches/tags; ensure runner is not locked to another project.' },
        { id: 'q47', title: 'Debugging failed deploys?', content: 'Review job trace, enable debug, inspect environment logs, and verify kube context/credentials.' },
        { id: 'q48', title: 'Security pitfalls?', content: 'Avoid untrusted code running on shared runners with secrets; use protected branches; sanitize variables; minimal permissions.' },
        { id: 'q49', title: 'Pipeline duration too long?', content: 'Increase parallelism, split jobs, leverage needs:, reuse caches, and run tests selectively with rules/changes.' },
        { id: 'q50', title: 'Version pinning?', content: 'Pin images and tool versions to avoid drift; track .tool-versions; document upgrades and lockfiles.' }
      ]
    }
  ]
};
