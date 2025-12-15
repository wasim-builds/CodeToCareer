import { TheoryTopic } from '@/types/theory';

export const gcloudTheory: TheoryTopic = {
  topicId: 'gcloud',
  topicName: 'Google Cloud',
  category: 'Tools & Cloud',
  description: 'Google Cloud Platform services for compute, storage, networking, data, security, and operations.',
  sections: [
    {
      id: 'foundations',
      title: 'Foundations and Accounts',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is GCP?', content: 'Public cloud from Google with compute, storage, networking, data, ML, and developer services across global regions.' },
        { id: 'q2', title: 'Projects and billing?', content: 'Projects are isolated resource containers with their own IAM and APIs; billing accounts pay for one or more projects.' },
        { id: 'q3', title: 'Folders and org?', content: 'Organization node at top; folders group projects; IAM and policies can inherit down the hierarchy.' },
        { id: 'q4', title: 'Resource locations?', content: 'Regions and zones; some services multi-region (e.g., BigQuery US/EU). Choose close to users/data with redundancy.' },
        { id: 'q5', title: 'Identity options?', content: 'Google accounts, service accounts for workloads, workload identity federation for external IdPs, Cloud Identity.' },
        { id: 'q6', title: 'APIs enablement?', content: 'Most services need API enabled per project; controls access and billing; check quotas and service usage.' },
        { id: 'q7', title: 'Tags and labels?', content: 'Labels for metadata and cost allocation; tags for policy conditions (firewalls/IAM conditions).' },
        { id: 'q8', title: 'Deployment tools?', content: 'gcloud CLI, Cloud Console, Terraform, Deployment Manager, Cloud Shell, client libraries.' },
        { id: 'q9', title: 'Quotas and limits?', content: 'Per-project quotas for APIs/resources; request increases; monitor to avoid throttling.' },
        { id: 'q10', title: 'Pricing model?', content: 'Per-use billing, sustained-use discounts, committed-use discounts, preemptible VMs, per-second billing for many services.' }
      ]
    },
    {
      id: 'compute-network',
      title: 'Compute, Storage, and Networking',
      content: '',
      subsections: [
        { id: 'q11', title: 'Compute options?', content: 'Compute Engine VMs/managed instance groups, GKE (Kubernetes), Cloud Run, App Engine, Batch.' },
        { id: 'q12', title: 'When Cloud Run vs GKE?', content: 'Cloud Run for containerized stateless HTTP, autoscale to zero; GKE for full Kubernetes control/custom workloads.' },
        { id: 'q13', title: 'Storage choices?', content: 'Cloud Storage (object), Persistent Disks/SSDs, Filestore (NFS), Local SSD, Backup/DR, Transfer Service.' },
        { id: 'q14', title: 'Networking basics?', content: 'VPCs are global; subnets are regional; use firewall rules, routes, Cloud NAT, VPC peering, shared VPC.' },
        { id: 'q15', title: 'Load balancing?', content: 'Global HTTPS/L7, external/internal TCP/UDP, SSL proxy, TCP proxy, network LB, internal LB; Cloud CDN for caching.' },
        { id: 'q16', title: 'IAM for compute?', content: 'Grant roles to service accounts; attach SA to GCE/GKE/Cloud Run; principle of least privilege.' },
        { id: 'q17', title: 'Artifact storage?', content: 'Artifact Registry for container and language packages; regional; supports repo types (docker, npm, maven).' },
        { id: 'q18', title: 'Hybrid connectivity?', content: 'Cloud VPN, Interconnect/Partner, Cloud Router, private service access for managed services.' },
        { id: 'q19', title: 'Autoscaling?', content: 'Managed instance groups scale by metrics; Cloud Run scales to zero; GKE HPA/cluster autoscaler.' },
        { id: 'q20', title: 'Backups?', content: 'Snapshots for disks, bucket versioning/retention for GCS, Backup for GKE, manage RPO/RTO by service.' }
      ]
    },
    {
      id: 'data-ml',
      title: 'Data, Analytics, and ML',
      content: '',
      subsections: [
        { id: 'q21', title: 'BigQuery?', content: 'Serverless data warehouse with SQL; columnar storage; separation of storage/compute; slots for capacity.' },
        { id: 'q22', title: 'Operational databases?', content: 'Cloud SQL (MySQL/Postgres/SQL Server), AlloyDB, Firestore/Datastore, Cloud Spanner (global relational), Memorystore.' },
        { id: 'q23', title: 'Data pipelines?', content: 'Dataflow (Apache Beam), Dataproc (managed Hadoop/Spark), Composer (Airflow), Pub/Sub for messaging.' },
        { id: 'q24', title: 'ML services?', content: 'Vertex AI for training, AutoML, pipelines, model registry, endpoints, monitoring, and feature store.' },
        { id: 'q25', title: 'Data governance?', content: 'Dataplex for lakes/governance, Data Catalog for metadata, DLP for classification/redaction, Cloud KMS for encryption.' },
        { id: 'q26', title: 'Streaming vs batch?', content: 'Pub/Sub + Dataflow for streaming; Dataflow/Dataproc for batch; BigQuery streaming inserts for near-real-time.' },
        { id: 'q27', title: 'Firestore vs Realtime DB?', content: 'Firestore is newer, scalable, strong consistency for document reads; RTDB is legacy, single-region, eventually consistent.' },
        { id: 'q28', title: 'Spanner strengths?', content: 'Global scale, strongly consistent SQL, automatic sharding/replication, high availability SLA.' },
        { id: 'q29', title: 'BigQuery cost control?', content: 'Use slot reservations, table partitions/clusters, cost controls, preview queries, and materialized views.' },
        { id: 'q30', title: 'Data movement?', content: 'Transfer Service, Storage Transfer, BigQuery Data Transfer, and Pub/Sub/DirectPath for ingest from on-prem/cloud.' }
      ]
    },
    {
      id: 'security',
      title: 'Security and IAM',
      content: '',
      subsections: [
        { id: 'q31', title: 'IAM roles?', content: 'Primitive (owner/editor/viewer), predefined roles per service, and custom roles. Grant to users, groups, or service accounts.' },
        { id: 'q32', title: 'Service accounts?', content: 'Identities for workloads; use keyless auth; avoid long-lived keys; use Workload Identity Federation for external.' },
        { id: 'q33', title: 'Organization policies?', content: 'Constraints enforced at org/folder/project (e.g., allowed regions, disable service account key creation).' },
        { id: 'q34', title: 'Network security?', content: 'Firewall rules, private Google access, VPC SC for data exfil protection, Cloud Armor WAF/DDOS, IAP for app access.' },
        { id: 'q35', title: 'Encryption?', content: 'Default encryption at rest; CMEK and CSEK options; integrate with Cloud KMS and HSMs.' },
        { id: 'q36', title: 'Logging and monitoring?', content: 'Cloud Logging, Monitoring (Metrics Explorer), Alerting, Error Reporting, Trace, Profiler; integrate with BigQuery/SIEM.' },
        { id: 'q37', title: 'Secret management?', content: 'Secret Manager for secrets/versions; IAM-controlled; automatic rotation via Cloud Functions/Workflows.' },
        { id: 'q38', title: 'Identity-Aware Proxy?', content: 'IAP secures web apps/HTTPS resources with Google Identity, offloading auth and enforcing context-aware access.' },
        { id: 'q39', title: 'Assured Workloads?', content: 'Controls for data residency and compliance (FedRAMP, CJIS, etc.); enforces restricted resources and locations.' },
        { id: 'q40', title: 'VPC Service Controls?', content: 'Perimeter to reduce data exfiltration from Google-managed services; restricts access outside defined networks.' }
      ]
    },
    {
      id: 'operations',
      title: 'Operations, Reliability, and Cost',
      content: '',
      subsections: [
        { id: 'q41', title: 'SRE principles?', content: 'Error budgets, SLOs/SLIs, blameless postmortems, automation-first; align with Google SRE practices.' },
        { id: 'q42', title: 'Resilience patterns?', content: 'Multi-zone, regional, multi-regional deployments; retries with backoff; circuit breakers; health checks.' },
        { id: 'q43', title: 'CI/CD on GCP?', content: 'Cloud Build, Cloud Deploy, GitHub/GitLab integrations, Artifact Registry, Cloud Run/GKE deploys.' },
        { id: 'q44', title: 'Observability stack?', content: 'Cloud Monitoring/Logging/Trace/Error Reporting/Profiler; exporters for OpenTelemetry; dashboards and alerts.' },
        { id: 'q45', title: 'Cost optimization?', content: 'Committed use discounts, sustained use, preemptible VMs, rightsizing, storage lifecycle, Cloud Run scale-to-zero.' },
        { id: 'q46', title: 'Backups and DR?', content: 'Snapshots for GCE, multi-region buckets, managed backups for Cloud SQL/Spanner/Firestore, PITR where supported.' },
        { id: 'q47', title: 'Deployment strategies?', content: 'Blue/green, canary via Traffic Director/Ingress, rollout configs in GKE, revisions in Cloud Run.' },
        { id: 'q48', title: 'Infrastructure as code?', content: 'Use Terraform with remote state (GCS + locking), validate/plan in CI, policy checks with Config Validator.' },
        { id: 'q49', title: 'Incident response?', content: 'Alerting channels, on-call rotations, runbooks, Cloud Functions/Workflows for remediation, post-incident reviews.' },
        { id: 'q50', title: 'Data residency/compliance?', content: 'Choose regions, VPC SC, CMEK, retention policies, and audit logs to meet compliance requirements.' }
      ]
    }
  ]
};
