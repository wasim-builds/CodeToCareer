import { TheoryTopic } from '@/types/theory';

export const terraformTheory: TheoryTopic = {
  topicId: 'terraform',
  topicName: 'Terraform',
  category: 'Tools & Cloud',
  description: 'Terraform infrastructure as code for provisioning and managing cloud resources declaratively.',
  sections: [
    {
      id: 'basics',
      title: 'Basics and Workflow',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is Terraform?', content: 'Terraform is an open-source infrastructure as code tool that provisions and manages resources across providers using declarative configuration.' },
        { id: 'q2', title: 'Key workflow steps?', content: 'Write .tf files, terraform init to download providers, terraform plan to preview changes, terraform apply to execute, terraform destroy to tear down.' },
        { id: 'q3', title: 'What is state?', content: 'Terraform state tracks real infrastructure and maps it to config. Stored locally or remotely; required for planning and apply operations.' },
        { id: 'q4', title: 'Local vs remote state?', content: 'Local state stored on disk (default). Remote state stored in backends (S3, GCS, Azure Blob, Terraform Cloud) for collaboration and locking.' },
        { id: 'q5', title: 'What is a provider?', content: 'Provider is a plugin that manages resources for a platform (AWS, Azure, GCP, Kubernetes). Declared with required_providers and configured with credentials.' },
        { id: 'q6', title: 'Resource vs data source?', content: 'resource creates or manages an object; data source reads existing information without managing lifecycle. Both available per provider.' },
        { id: 'q7', title: 'Variables?', content: 'Input variables parameterize configs. Defined with variable blocks, set via tfvars, env TF_VAR_*, or CLI -var/-var-file. Support type, default, validation.' },
        { id: 'q8', title: 'Outputs?', content: 'Outputs expose values after apply (IDs, endpoints). Defined with output blocks. Can be consumed by remote state or displayed in CLI.' },
        { id: 'q9', title: 'What is plan?', content: 'terraform plan creates an execution plan showing additions/changes/destroys. Helps review before apply. Option -out saves plan file for apply.' },
        { id: 'q10', title: 'How to import existing resources?', content: 'Use terraform import to map existing resource to state, then ensure config matches. Newer versions support import block with generate config guidance.' }
      ]
    },
    {
      id: 'modules',
      title: 'Modules and Reuse',
      content: '',
      subsections: [
        { id: 'q11', title: 'What is a module?', content: 'A module is a container of resources used together. Root module is current config; child modules can be local or remote to encapsulate patterns.' },
        { id: 'q12', title: 'Using modules?', content: 'module "vpc" { source = "./vpc"; variables... }. Source can be local path, git, registry. Pass inputs, receive outputs.' },
        { id: 'q13', title: 'Registry modules?', content: 'Terraform Registry hosts verified/community modules. Reference with source = "registry-namespace/name/provider" and version constraints.' },
        { id: 'q14', title: 'Version pinning?', content: 'Pin providers/modules with required_providers version and module version constraints (e.g., >= 4.0, < 5.0) to ensure reproducibility.' },
        { id: 'q15', title: 'Composition vs abstraction?', content: 'Modules encapsulate repeated patterns (networks, ASG, DB). Keep interfaces small, expose only needed outputs, avoid deep nesting when possible.' },
        { id: 'q16', title: 'Count and for_each?', content: 'count creates multiple instances indexed by count.index. for_each maps keys to instances for stable addressing. Use for_each for named objects to reduce churn.' },
        { id: 'q17', title: 'Locals?', content: 'locals define named expressions reused across config. Improve readability and DRY patterns without exposing variables to callers.' },
        { id: 'q18', title: 'File structure best practices?', content: 'Separate variables.tf, outputs.tf, main.tf, providers.tf. Keep modules in modules/ folder. Use README and examples for modules.' },
        { id: 'q19', title: 'Private module sources?', content: 'Use git (SSH/HTTPS), private registries, or Terraform Cloud/Enterprise. Provide credentials via environment or netrc.' },
        { id: 'q20', title: 'Module testing?', content: 'Use terraform validate, terraform plan in CI, and tools like terratest or kitchen-terraform for integration tests.' }
      ]
    },
    {
      id: 'state',
      title: 'State, Locking, and Workspaces',
      content: '',
      subsections: [
        { id: 'q21', title: 'Why state locking?', content: 'Prevents concurrent applies from corrupting state. Supported by remote backends (S3+DynamoDB lock, GCS, Azure). Terraform Cloud has built-in locking.' },
        { id: 'q22', title: 'State backends?', content: 'Configure backend in terraform block (s3, gcs, azurerm, remote, consul). Enables remote storage, locking, encryption, and team access.' },
        { id: 'q23', title: 'Workspaces?', content: 'Workspaces provide multiple state instances from same config (e.g., dev/stage/prod). Use terraform workspace new/select/list. Prefer separate backends/repos for strict isolation.' },
        { id: 'q24', title: 'State drift?', content: 'Drift occurs when real infra differs from state/config. terraform plan detects drift; fix via apply or import/taint/replace.' },
        { id: 'q25', title: 'Sensitive data in state?', content: 'State may contain secrets (passwords, keys). Use remote encrypted storage, limit access, enable state encryption at rest, avoid storing unnecessary secrets.' },
        { id: 'q26', title: 'State file operations?', content: 'terraform state mv/rm/show/list to manipulate state mappings. Use cautiously and commit to VCS? No—state should not be committed to git.' },
        { id: 'q27', title: 'Replacing resources?', content: 'Use -replace=addr in plan/apply to force recreation. Useful for immutable updates or drift. Also use taint/untaint in older versions.' },
        { id: 'q28', title: 'Partial applies?', content: 'Use -target cautiously to focus apply on specific resources. Can help phased rollout but risks drift; remove when stable.' },
        { id: 'q29', title: 'Outputs consumption?', content: 'Remote state data source can read outputs from another workspace/state. Keep outputs minimal and non-secret when shared.' },
        { id: 'q30', title: 'Locks failing?', content: 'If lock persists, release from backend (e.g., DynamoDB lock item). Avoid manual unlock unless certain no apply is running.' }
      ]
    },
    {
      id: 'language',
      title: 'HCL Language and Expressions',
      content: '',
      subsections: [
        { id: 'q31', title: 'HCL syntax basics?', content: 'Block-based: resource "aws_instance" "web" { ... }. Attributes as key = value. Strings support interpolation ${}. Collections: list [ ], map { key = val }.' },
        { id: 'q32', title: 'Functions?', content: 'Built-in functions for string (upper), numeric (ceil), collection (merge, concat), crypto (filemd5), CIDR (cidrsubnet), time, encoding (jsonencode).' },
        { id: 'q33', title: 'Conditionals and loops?', content: 'Conditionals: condition ? true : false. for expressions to transform collections. dynamic blocks for repeated nested blocks.' },
        { id: 'q34', title: 'Depends_on?', content: 'depends_on enforces explicit dependency when not inferred from references. Prevents ordering issues for provisioners or side-resources.' },
        { id: 'q35', title: 'Provisioners?', content: 'last-resort for running scripts (remote-exec, local-exec). Use sparingly; prefer user_data, cloud-init, config management. Not recommended for critical logic.' },
        { id: 'q36', title: 'Lifecycle meta-arguments?', content: 'create_before_destroy, prevent_destroy, ignore_changes control resource lifecycle and diff handling. Use carefully to avoid orphaned resources.' },
        { id: 'q37', title: 'for_each vs count differences?', content: 'for_each provides stable keys and easier diffs for maps/sets; count uses numeric index and can reorder on list changes.' },
        { id: 'q38', title: 'Templates?', content: 'templatefile("file.tpl", {vars}) renders templates. Useful for user_data or config files. Replaces older template provider.' },
        { id: 'q39', title: 'Conditional resources?', content: 'Use count = condition ? 1 : 0 or for_each = condition ? toset([...]) : {} to create/destroy resources based on flags.' },
        { id: 'q40', title: 'Validation rules?', content: 'variable blocks support validation { condition = ... error_message = ... }. Ensures inputs meet constraints before plan/apply.' }
      ]
    },
    {
      id: 'teams',
      title: 'Teams, Security, and CI/CD',
      content: '',
      subsections: [
        { id: 'q41', title: 'CI/CD best practices?', content: 'Run fmt, validate, plan in PR; require plan review; apply via protected branch or manual approval. Use remote state and locks.' },
        { id: 'q42', title: 'terraform fmt/validate?', content: 'fmt enforces canonical formatting. validate checks syntax and internal consistency. Run both in CI to catch issues early.' },
        { id: 'q43', title: 'Policy as code?', content: 'Use Sentinel/OPA with Terraform Cloud/Enterprise or Conftest to enforce rules (naming, tags, encryption). Fails plan/apply if policies violated.' },
        { id: 'q44', title: 'Secrets management?', content: 'Pass credentials via env vars or vault integrations. Avoid hardcoding. Use workspace variables (sensitive) in Terraform Cloud.' },
        { id: 'q45', title: 'Drift detection in teams?', content: 'Schedule terraform plan or use Terraform Cloud drift detection. Alert when drift occurs; remediate via apply or manual fix/import.' },
        { id: 'q46', title: 'Cost controls?', content: 'Use tags/labels, quotas, and policies. Pre-plan reviews to avoid large resource creation. Use estimations with infracost in CI.' },
        { id: 'q47', title: 'Environments strategy?', content: 'Separate state/workspaces per environment. Optionally separate repos. Use variable sets per env. Avoid shared credentials across envs.' },
        { id: 'q48', title: 'Upgrades and provider breaking changes?', content: 'Review changelogs, pin versions, run terraform state replace-provider when providers change source. Use test environments before production.' },
        { id: 'q49', title: 'Troubleshooting apply failures?', content: 'Check plan, logs, provider debug (TF_LOG), cloud provider console. Fix underlying issue and re-run apply; state remains partially applied.' },
        { id: 'q50', title: 'Common pitfalls?', content: 'Not using remote state/locks, overusing provisioners, unpinned versions, running apply from multiple laptops, ignoring plan warnings, exposing secrets in outputs.' }
      ]
    }
  ]
};
