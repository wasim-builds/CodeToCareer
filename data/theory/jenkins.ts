import { TheoryTopic } from '@/types/theory';

export const jenkinsTheory: TheoryTopic = {
  topicId: 'jenkins',
  topicName: 'Jenkins',
  category: 'Tools & Cloud',
  description: 'Jenkins CI/CD fundamentals, pipelines, agents, plugins, security, and operations.',
  sections: [
    {
      id: 'overview',
      title: 'Overview and Setup',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is Jenkins?', content: 'An open-source automation server for CI/CD, extensible via plugins, supporting pipelines and freestyle jobs.' },
        { id: 'q2', title: 'Installation options?', content: 'Run as WAR, Docker container, Linux packages, or on Kubernetes; manage via systemd/helm for reliability.' },
        { id: 'q3', title: 'Master/agent model?', content: 'Controller schedules and orchestrates jobs; agents execute builds. Use labels to target capabilities.' },
        { id: 'q4', title: 'Agents types?', content: 'Static agents, SSH agents, JNLP agents, Docker/Pod templates on K8s via Jenkins Kubernetes plugin.' },
        { id: 'q5', title: 'Credentials management?', content: 'Store secrets in Credentials store; scope to folders; types: username/password, SSH keys, tokens, secret text/files.' },
        { id: 'q6', title: 'SCM integration?', content: 'Git, GitHub/GitLab/Bitbucket; webhooks or polling; multibranch pipelines discover branches/PRs.' },
        { id: 'q7', title: 'Plugins?', content: 'Plugins add SCM, pipeline steps, credentials, notifications, cloud agents. Manage versions carefully to avoid breakage.' },
        { id: 'q8', title: 'Folder organization?', content: 'Use folders for RBAC and credential scoping; structure by team/project; reduces clutter.' },
        { id: 'q9', title: 'Backup/restore?', content: 'Backup JENKINS_HOME (jobs, config.xml, credentials, plugins); test restores; use thinBackup or external tools.' },
        { id: 'q10', title: 'Upgrades?', content: 'Check LTS vs weekly; test in staging; backup first; update plugins with compatibility checks.' }
      ]
    },
    {
      id: 'pipelines',
      title: 'Pipelines and Jobs',
      content: '',
      subsections: [
        { id: 'q11', title: 'Freestyle vs Pipeline?', content: 'Freestyle uses UI steps; Pipeline as code (Jenkinsfile) with scripted or declarative syntax; prefer declarative for structure.' },
        { id: 'q12', title: 'Declarative pipeline basics?', content: 'pipeline { agent any; stages { stage("Build"){...} } post { ... } } with steps for checkout, sh, etc.' },
        { id: 'q13', title: 'Scripted vs declarative?', content: 'Scripted offers full Groovy flexibility; declarative is opinionated/safer. Both support shared libraries.' },
        { id: 'q14', title: 'Shared libraries?', content: 'Reusable pipeline code in SCM; loaded via @Library; provides vars/steps to DRY pipelines.' },
        { id: 'q15', title: 'Multibranch pipelines?', content: 'Automatically discover branches/PRs with Jenkinsfile; creates jobs per branch; integrates with webhooks.' },
        { id: 'q16', title: 'Post actions?', content: 'post { success/failure/always { steps } } to handle notifications, cleanup, archiving.' },
        { id: 'q17', title: 'Environment and tools?', content: 'environment { VAR=value }; tools for JDK/Maven. withEnv/wrap steps to scope variables.' },
        { id: 'q18', title: 'Credentials in pipelines?', content: 'withCredentials binds secrets to env vars/files; use credentialsId; avoid echoing; prefer secret text/userpass.' },
        { id: 'q19', title: 'Parallel stages?', content: 'Use parallel for concurrent work; ensure agent capacity; handle shared resources with locks (Lockable Resources plugin).' },
        { id: 'q20', title: 'Artifacts?', content: 'archiveArtifacts to save build outputs; fingerprinting; stash/unstash to move files between stages.' }
      ]
    },
    {
      id: 'ci',
      title: 'CI/CD, Testing, and Deployment',
      content: '',
      subsections: [
        { id: 'q21', title: 'Triggers?', content: 'SCM webhooks, cron, manual, upstream/downstream jobs, GitHub/GitLab PR triggers, build after other builds.' },
        { id: 'q22', title: 'Testing integration?', content: 'Run unit/integration/e2e; publish JUnit/Cobertura/JaCoCo reports; mark unstable vs failed appropriately.' },
        { id: 'q23', title: 'Build tools?', content: 'Maven/Gradle/npm/yarn/pip; configure agents with toolchains; cache dependencies to speed builds.' },
        { id: 'q24', title: 'Docker builds?', content: 'Use docker agent or docker.build; withRegistry for auth; push images with tags; clean workspace and dangles.' },
        { id: 'q25', title: 'Deployments?', content: 'Use pipeline steps or plugins to deploy to servers/K8s/cloud; manage credentials; support blue/green/canary via scripts.' },
        { id: 'q26', title: 'Quality gates?', content: 'Integrate SonarQube for code quality/security; fail builds on gate failure; upload coverage reports.' },
        { id: 'q27', title: 'Approvals?', content: 'Use input steps for manual approvals; integrate change management; role-based permissions for deploy stages.' },
        { id: 'q28', title: 'Notifications?', content: 'Slack/email/MS Teams/IRC; notify on state changes; include build URL and diff summary.' },
        { id: 'q29', title: 'Pipeline libraries versioning?', content: 'Pin library versions (branches/tags); avoid using master latest without control; test changes safely.' },
        { id: 'q30', title: 'Caching builds?', content: 'Use cache plugins or workspace reuse; beware stale state; prefer clean checkout plus dependency caches.' }
      ]
    },
    {
      id: 'security',
      title: 'Security, Access, and Compliance',
      content: '',
      subsections: [
        { id: 'q31', title: 'User management?', content: 'Internal user database, LDAP/AD, SSO; matrix/project-based security for fine-grained permissions.' },
        { id: 'q32', title: 'Credentials hygiene?', content: 'Use folder-scoped credentials, rotate secrets, avoid hardcoding in Jenkinsfile, mask output, and restrict access.' },
        { id: 'q33', title: 'Script approval?', content: 'Sandboxed Groovy in declarative; scripted/unsafe steps may require admin approval. Review for security risks.' },
        { id: 'q34', title: 'Agent security?', content: 'Run agents with least privilege; isolate sensitive jobs; avoid exposing controller; use firewalls and TLS.' },
        { id: 'q35', title: 'Auditability?', content: 'Enable audit logs; track who ran jobs and config changes; store build logs; integrate with SIEM.' },
        { id: 'q36', title: 'Supply chain?', content: 'Pin plugin versions, verify checksums, restrict external downloads, scan dependencies and containers.' },
        { id: 'q37', title: 'Secrets in environment?', content: 'Mask withCredentials, avoid echo; clean workspace; avoid writing secrets to artifacts.' },
        { id: 'q38', title: 'RBAC best practices?', content: 'Principle of least privilege; separate admin from developers; use folders for scoped permissions.' },
        { id: 'q39', title: 'Network security?', content: 'Run behind TLS proxy; restrict inbound ports; limit agent connectivity; restrict CLI/Remoting where possible.' },
        { id: 'q40', title: 'Compliance?', content: 'Document pipelines, approvals, change logs; integrate SAST/DAST; maintain evidence for audits.' }
      ]
    },
    {
      id: 'operations',
      title: 'Operations and Reliability',
      content: '',
      subsections: [
        { id: 'q41', title: 'Scaling Jenkins?', content: 'Use multiple agents, cloud auto-scaling (K8s plugin), and split heavy workloads. Controllers should avoid heavy builds.' },
        { id: 'q42', title: 'Performance tuning?', content: 'Allocate sufficient heap, limit heavy plugins, optimize disk I/O, rotate logs, and clean workspaces.' },
        { id: 'q43', title: 'Disaster recovery?', content: 'Regular backups of JENKINS_HOME and credentials; test restores; maintain infra-as-code for config.' },
        { id: 'q44', title: 'Monitoring?', content: 'Use Prometheus/JMX exporters; alerts on queue length, build failures, disk usage, and agent availability.' },
        { id: 'q45', title: 'Upgrading plugins safely?', content: 'Stagger updates, read changelogs, snapshot before upgrade, roll back if regressions occur.' },
        { id: 'q46', title: 'Log management?', content: 'Centralize logs; rotate build logs; use pipeline log steps sparingly; avoid leaking secrets in logs.' },
        { id: 'q47', title: 'Housekeeping?', content: 'Prune old builds/artifacts, clear workspace after builds, clean orphaned credentials/nodes, maintain plugin hygiene.' },
        { id: 'q48', title: 'Job reliability?', content: 'Use retry/backoff in steps, timeouts, lock resources, and fail fast. Make builds reproducible and idempotent.' },
        { id: 'q49', title: 'Kubernetes integration?', content: 'Use Jenkins K8s plugin to provision ephemeral agents; define pod templates; mount secrets/config maps securely.' },
        { id: 'q50', title: 'Migration?', content: 'Plan migration to new controllers or cloud; export jobs via Job DSL/Configuration as Code; test in staging.' }
      ]
    }
  ]
};
