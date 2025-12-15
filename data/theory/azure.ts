import { TheoryTopic } from '@/types/theory';

export const azureTheory: TheoryTopic = {
  topicId: 'azure',
  topicName: 'Azure',
  category: 'Tools & Cloud',
  description: 'Microsoft Azure cloud fundamentals, compute, networking, data, security, and operations.',
  sections: [
    {
      id: 'core',
      title: 'Core Concepts and Accounts',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is Azure?', content: 'A public cloud offering compute, storage, networking, data, AI, and developer services with global regions.' },
        { id: 'q2', title: 'Tenants and subscriptions?', content: 'Tenant = Azure AD directory; subscription = billing and resource container. Multiple subs under one tenant.' },
        { id: 'q3', title: 'Resource groups?', content: 'Logical containers for resources; same lifecycle; metadata for RBAC, cost, and deployment scope.' },
        { id: 'q4', title: 'Regions and availability zones?', content: 'Regions are geo locations; AZs are isolated datacenters within a region for high availability.' },
        { id: 'q5', title: 'ARM vs Bicep vs Terraform?', content: 'ARM is native JSON; Bicep is Azure DSL compiled to ARM; Terraform is multi-cloud IaC.' },
        { id: 'q6', title: 'Management tools?', content: 'Portal, CLI (az), PowerShell, REST, SDKs, Cloud Shell, and Azure Mobile app.' },
        { id: 'q7', title: 'Tags and naming?', content: 'Tags add metadata for cost and governance; consistent naming improves automation and discovery.' },
        { id: 'q8', title: 'Azure Policy?', content: 'Governance engine to enforce/deny/modify resource configurations (SKUs, locations, tags, encryption).' },
        { id: 'q9', title: 'Blueprints?', content: 'Packages of policies, RBAC, templates for compliant landing zones; now superseded by Azure Landing Zone guidance.' },
        { id: 'q10', title: 'Cost management?', content: 'Use budgets, alerts, reservation savings, spot VMs, auto-shutdown, and cost analysis by tags.' }
      ]
    },
    {
      id: 'compute',
      title: 'Compute, Storage, and Networking',
      content: '',
      subsections: [
        { id: 'q11', title: 'Compute options?', content: 'VMs, VM Scale Sets, App Service, AKS, Azure Functions, Container Apps, Batch.' },
        { id: 'q12', title: 'VMs vs App Service?', content: 'VMs give full control; App Service is PaaS for web apps with scaling, slots, SSL, and managed runtime.' },
        { id: 'q13', title: 'AKS basics?', content: 'Managed Kubernetes control plane; user-managed nodes or VMSS; integrates with ACR, identities, CNI.' },
        { id: 'q14', title: 'Storage options?', content: 'Blob (objects), Files (SMB/NFS), Tables (NoSQL), Queues (messaging), Disks (block). Choose by access pattern.' },
        { id: 'q15', title: 'Networking building blocks?', content: 'VNets, subnets, NSGs, route tables, VPN gateways, ExpressRoute, Azure Firewall, Application Gateway, Front Door.' },
        { id: 'q16', title: 'Load balancing choices?', content: 'Azure Load Balancer (L4), Application Gateway (L7 + WAF), Front Door (global L7), Traffic Manager (DNS-based).' },
        { id: 'q17', title: 'ACR?', content: 'Azure Container Registry stores OCI images; integrates with AKS and identities; supports tasks/builds.' },
        { id: 'q18', title: 'Availability sets vs zones?', content: 'Sets spread VMs across fault/update domains; zones spread across datacenters for stronger SLA.' },
        { id: 'q19', title: 'Autoscaling options?', content: 'VMSS autoscale, App Service autoscale, AKS HPA/KEDA, Functions consumption/elastic plans.' },
        { id: 'q20', title: 'Backup and DR?', content: 'Azure Backup for VMs/files/DBs; Site Recovery for DR replication; use paired regions for resiliency.' }
      ]
    },
    {
      id: 'data-ai',
      title: 'Data, Analytics, and AI',
      content: '',
      subsections: [
        { id: 'q21', title: 'Databases?', content: 'Azure SQL (PaaS), SQL MI, Cosmos DB (NoSQL/multi-model), PostgreSQL, MySQL, MariaDB, Managed Redis.' },
        { id: 'q22', title: 'Data Lake and analytics?', content: 'ADLS Gen2 for lake storage; Synapse for analytics/SQL/Spark; Databricks for unified analytics/ML; HDInsight legacy.' },
        { id: 'q23', title: 'Messaging?', content: 'Service Bus (enterprise messaging), Event Hubs (telemetry), Event Grid (event routing), Storage Queues (simple).' },
        { id: 'q24', title: 'Integration services?', content: 'Logic Apps, Data Factory, API Management, Functions for serverless integration and ETL/ELT.' },
        { id: 'q25', title: 'AI services?', content: 'Azure OpenAI, Cognitive Services (Vision/Speech/Language), Machine Learning studio/SDK for training and deployment.' },
        { id: 'q26', title: 'Cosmos DB consistency?', content: 'Five levels: strong, bounded-staleness, session, consistent-prefix, eventual; choose per workload and latency needs.' },
        { id: 'q27', title: 'SQL elasticity?', content: 'DTU/vCore models, serverless compute, elastic pools for multi-tenant cost efficiency.' },
        { id: 'q28', title: 'Data governance?', content: 'Azure Purview/Microsoft Purview for catalog and lineage; integrates with data sources and RBAC.' },
        { id: 'q29', title: 'Caching options?', content: 'Azure Cache for Redis for low-latency caching; CDN/Front Door for edge caching of static assets.' },
        { id: 'q30', title: 'Streaming pipelines?', content: 'Use Event Hubs + Stream Analytics or Spark Structured Streaming for real-time processing and dashboards.' }
      ]
    },
    {
      id: 'security',
      title: 'Identity, Security, and Governance',
      content: '',
      subsections: [
        { id: 'q31', title: 'Identity models?', content: 'Azure AD (Entra ID) for users/apps/service principals/managed identities; supports RBAC and conditional access.' },
        { id: 'q32', title: 'Managed identities?', content: 'System/user-assigned identities for Azure resources to access other services without secrets.' },
        { id: 'q33', title: 'RBAC?', content: 'Role assignments at management group/subscription/resource group/resource; least privilege; custom roles if needed.' },
        { id: 'q34', title: 'Key management?', content: 'Azure Key Vault for secrets/keys/certs; integrate with App Service, Functions, AKS CSI driver, and client SDKs.' },
        { id: 'q35', title: 'Network security?', content: 'NSGs for traffic rules, Azure Firewall/WAF, Private Endpoints for PaaS, Service Endpoints, DDoS protection plans.' },
        { id: 'q36', title: 'Security posture?', content: 'Defender for Cloud with recommendations, secure score, just-in-time VM access, vulnerability scanning.' },
        { id: 'q37', title: 'Policy compliance?', content: 'Azure Policy for deny/modify/audit; initiatives for groups of policies; remediation tasks for drift.' },
        { id: 'q38', title: 'Logging and monitoring?', content: 'Azure Monitor, Log Analytics, Application Insights, Activity Logs; alerts and action groups.' },
        { id: 'q39', title: 'Data protection?', content: 'Encryption at rest by default; customer-managed keys optional; soft delete and immutability for storage.' },
        { id: 'q40', title: 'Zero trust basics?', content: 'Verify explicitly via Conditional Access/MFA, least privilege RBAC, microsegmentation with NSG/PE, continuous monitoring.' }
      ]
    },
    {
      id: 'operations',
      title: 'Operations, Reliability, and Cost',
      content: '',
      subsections: [
        { id: 'q41', title: 'Scaling strategies?', content: 'Vertical vs horizontal scaling; use autoscale rules; design stateless services; use queues for buffering.' },
        { id: 'q42', title: 'Resiliency patterns?', content: 'Multi-AZ, paired regions, retry with backoff, circuit breakers, health probes, chaos testing.' },
        { id: 'q43', title: 'Deployment approaches?', content: 'Blue/green, canary with Front Door/Traffic Manager, deployment slots (App Service/Functions), AKS rolling.' },
        { id: 'q44', title: 'Monitoring SLAs?', content: 'Track availability SLOs, set alerts on error rates/latency, use App Insights and log queries for diagnostics.' },
        { id: 'q45', title: 'Cost optimization?', content: 'Reservations, spot VMs, right-size SKUs, shut down dev at night, storage lifecycle policies, CDN caching.' },
        { id: 'q46', title: 'Backups?', content: 'Enable Azure Backup for VMs/DBs, geo-redundant storage, test restores, retention policies for compliance.' },
        { id: 'q47', title: 'IaC pipelines?', content: 'Use Bicep/Terraform in CI/CD with approvals; lint/validate/plan before apply; store state securely.' },
        { id: 'q48', title: 'Incident response?', content: 'Runbooks in Automation, Logic Apps for alerts routing, postmortems, and playbooks for common failures.' },
        { id: 'q49', title: 'Hybrid connectivity?', content: 'Site-to-Site VPN, ExpressRoute, Azure Arc for hybrid management, private endpoints for on-prem access.' },
        { id: 'q50', title: 'Migration tools?', content: 'Azure Migrate for servers/databases/apps; Database Migration Service; cost calculators and readiness assessments.' }
      ]
    }
  ]
};
