import { TheoryTopic } from '@/types/theory';

export const awsTheory: TheoryTopic = {
  topicId: 'aws',
  topicName: 'AWS',
  category: 'Tools & Cloud',
  description: 'Amazon Web Services cloud platform',
  sections: [
    {
      id: 'basics',
      title: 'AWS Basics',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is AWS?', content: 'AWS (Amazon Web Services) is cloud computing platform. Provides: computing, storage, databases, networking, analytics, AI/ML, security. On-demand services. Pay-as-you-go pricing. Global infrastructure. Market leader in cloud.' },
        { id: 'q2', title: 'What is cloud computing?', content: 'Cloud computing delivers services over internet. Models: IaaS (Infrastructure), PaaS (Platform), SaaS (Software). Benefits: scalability, cost-effective, no upfront investment, managed services. AWS provides IaaS and PaaS.' },
        { id: 'q3', title: 'What are AWS regions?', content: 'AWS regions are geographic areas. Each region: multiple Availability Zones, isolated data centers. Choose region for: latency, compliance, data residency. Global infrastructure. 30+ regions worldwide.' },
        { id: 'q4', title: 'What are Availability Zones?', content: 'Availability Zones (AZs) are isolated data centers within region. Multiple AZs per region. Fault isolation. Deploy across AZs for high availability. Redundancy. Critical for reliability.' },
        { id: 'q5', title: 'What is EC2?', content: 'EC2 (Elastic Compute Cloud) provides virtual servers. Configurable: instance types, OS, storage, networking. On-demand, reserved, spot instances. Scalable compute. Foundation of AWS compute.' },
        { id: 'q6', title: 'What is S3?', content: 'S3 (Simple Storage Service) is object storage. Stores files as objects. Highly scalable, durable. Use cases: backups, static websites, data lakes, media storage. Pay for storage and requests.' },
        { id: 'q7', title: 'What is IAM?', content: 'IAM (Identity and Access Management) manages access. Users, groups, roles, policies. Fine-grained permissions. Principle of least privilege. Root account security. Foundation of AWS security.' },
        { id: 'q8', title: 'What is VPC?', content: 'VPC (Virtual Private Cloud) is isolated network. Custom IP ranges, subnets, route tables. Network isolation. Connect to on-premises. Control network traffic. Foundation of networking.' },
        { id: 'q9', title: 'What is RDS?', content: 'RDS (Relational Database Service) manages databases. Supports: MySQL, PostgreSQL, Oracle, SQL Server, MariaDB. Automated backups, patching, scaling. Managed service. Simplifies database operations.' },
        { id: 'q10', title: 'What is Lambda?', content: 'Lambda is serverless compute. Run code without servers. Event-driven. Pay per execution. Auto-scaling. Use for: APIs, event processing, automation. No server management.' }
      ]
    },
    {
      id: 'compute',
      title: 'Compute Services',
      content: '',
      subsections: [
        { id: 'q11', title: 'What are EC2 instance types?', content: 'Instance types: General purpose (balanced), Compute optimized (CPU), Memory optimized (RAM), Storage optimized (I/O), GPU instances. Choose based on workload. Right-sizing important. Cost optimization.' },
        { id: 'q12', title: 'What is Auto Scaling?', content: 'Auto Scaling adjusts capacity automatically. Scale based on: demand, schedules, metrics. Maintains availability. Cost optimization. Groups instances. Configure min/max/desired. Essential for production.' },
        { id: 'q13', title: 'What is Load Balancer?', content: 'Load Balancer distributes traffic. Types: Application (ALB), Network (NLB), Classic (CLB), Gateway (GLB). Health checks. High availability. SSL termination. Route to healthy instances.' },
        { id: 'q14', title: 'What is ECS?', content: 'ECS (Elastic Container Service) runs containers. Orchestrates Docker containers. Managed service. Integrates with other AWS services. Alternatives: EKS (Kubernetes), Fargate (serverless). Container platform.' },
        { id: 'q15', title: 'What is EKS?', content: 'EKS (Elastic Kubernetes Service) is managed Kubernetes. Kubernetes on AWS. Container orchestration. Compatible with Kubernetes. Managed control plane. Use for: complex container workloads.' },
        { id: 'q16', title: 'What is Fargate?', content: 'Fargate is serverless containers. No EC2 management. Pay for resources used. Works with ECS/EKS. Simplifies containers. No server management. Cost-effective for variable workloads.' },
        { id: 'q17', title: 'What is Elastic Beanstalk?', content: 'Elastic Beanstalk deploys applications. Platform as a Service. Supports: Java, .NET, Node.js, Python, etc. Handles: deployment, scaling, monitoring. Simplifies operations. Good for getting started.' },
        { id: 'q18', title: 'What is Batch?', content: 'Batch processes large workloads. Job scheduling. Auto-scaling compute. Cost-effective. Use for: data processing, ETL, scientific computing. Pay only for compute used.' },
        { id: 'q19', title: 'What is Lightsail?', content: 'Lightsail is simplified VPS. Fixed pricing. Pre-configured stacks. Easy setup. Good for: simple applications, learning, small projects. Less flexible than EC2. Simpler alternative.' },
        { id: 'q20', title: 'What is serverless?', content: 'Serverless: no server management. Auto-scaling. Pay per use. Event-driven. Examples: Lambda, API Gateway, DynamoDB. Focus on code. Reduces operational overhead. Modern architecture.' }
      ]
    },
    {
      id: 'storage',
      title: 'Storage Services',
      content: '',
      subsections: [
        { id: 'q21', title: 'What is S3 storage classes?', content: 'S3 storage classes: Standard (frequent access), IA (Infrequent Access), Glacier (archive), Intelligent-Tiering (auto-optimizes). Choose based on: access patterns, cost. Optimize storage costs.' },
        { id: 'q22', title: 'What is EBS?', content: 'EBS (Elastic Block Store) provides block storage. Attached to EC2. Persistent volumes. Types: gp3, io1, st1, sc1. Snapshots for backup. High performance. EC2 storage.' },
        { id: 'q23', title: 'What is EFS?', content: 'EFS (Elastic File System) is managed NFS. Shared file storage. Multiple EC2 access. Scalable. Use for: shared data, content management. Network file system.' },
        { id: 'q24', title: 'What is Glacier?', content: 'Glacier is archive storage. Low cost. Long-term retention. Retrieval: Expedited, Standard, Bulk. Use for: backups, archives, compliance. Cheapest storage. Retrieval time varies.' },
        { id: 'q25', title: 'What is S3 versioning?', content: 'S3 versioning keeps multiple versions. Protects against deletion. Can restore previous versions. Lifecycle policies. Storage cost consideration. Data protection feature.' },
        { id: 'q26', title: 'What is S3 lifecycle?', content: 'S3 lifecycle automates transitions. Move between storage classes. Delete old objects. Cost optimization. Rules based on: age, prefix, tags. Automatic management.' },
        { id: 'q27', title: 'What is S3 encryption?', content: 'S3 encryption protects data. Types: SSE-S3 (AWS managed), SSE-KMS (customer managed), SSE-C (customer provided), client-side. Encrypt at rest. Security best practice. Required for sensitive data.' },
        { id: 'q28', title: 'What is S3 CORS?', content: 'S3 CORS enables cross-origin access. Configure allowed origins, methods, headers. Required for web apps. Browser security. Configure properly. Use for static websites.' },
        { id: 'q29', title: 'What is S3 static website?', content: 'S3 can host static websites. Enable website hosting. Configure index/error documents. Use with CloudFront. Cost-effective hosting. Good for: static sites, SPAs. Simple deployment.' },
        { id: 'q30', title: 'What is storage gateway?', content: 'Storage Gateway connects on-premises to cloud. Types: File, Volume, Tape. Hybrid cloud. Seamless integration. Backup to cloud. Bridge on-premises and cloud.' }
      ]
    },
    {
      id: 'database',
      title: 'Database Services',
      content: '',
      subsections: [
        { id: 'q31', title: 'What is DynamoDB?', content: 'DynamoDB is NoSQL database. Fully managed. Serverless. Auto-scaling. Key-value and document. High performance. Pay per request. Good for: scale, performance, serverless.' },
        { id: 'q32', title: 'What is RDS vs DynamoDB?', content: 'RDS: SQL, relational, complex queries, ACID, managed. DynamoDB: NoSQL, key-value, simple queries, eventually consistent, serverless. Choose RDS for: relational data, complex queries. Choose DynamoDB for: scale, performance, simple access patterns.' },
        { id: 'q33', title: 'What is Aurora?', content: 'Aurora is MySQL/PostgreSQL compatible. High performance. Auto-scaling. Multi-AZ replication. Fast failover. Managed service. More expensive than RDS. High-performance option.' },
        { id: 'q34', title: 'What is Redshift?', content: 'Redshift is data warehouse. Columnar storage. Analytics workloads. Petabyte scale. SQL interface. Use for: BI, analytics, reporting. OLAP database.' },
        { id: 'q35', title: 'What is ElastiCache?', content: 'ElastiCache provides in-memory caching. Redis or Memcached. Reduces database load. Improves performance. Managed service. Use for: session storage, caching. Performance optimization.' },
        { id: 'q36', title: 'What is DocumentDB?', content: 'DocumentDB is MongoDB compatible. Managed document database. High availability. Auto-scaling. Use for: MongoDB workloads, document storage. Managed MongoDB alternative.' },
        { id: 'q37', title: 'What is Neptune?', content: 'Neptune is graph database. Managed graph database. Relationships and connections. Use for: social networks, recommendations, fraud detection. Specialized use case.' },
        { id: 'q38', title: 'What is database migration?', content: 'Database migration moves databases to AWS. DMS (Database Migration Service). Minimal downtime. Supports various sources. Replication. Use for: cloud migration, hybrid setups.' },
        { id: 'q39', title: 'What is RDS Multi-AZ?', content: 'RDS Multi-AZ provides high availability. Standby replica in different AZ. Automatic failover. Synchronous replication. Zero data loss. Use for: production, high availability.' },
        { id: 'q40', title: 'What is RDS read replica?', content: 'RDS read replica is read-only copy. Asynchronous replication. Read scaling. Can promote to primary. Use for: read-heavy workloads, reporting. Offloads reads from primary.' }
      ]
    },
    {
      id: 'networking',
      title: 'Networking and Security',
      content: '',
      subsections: [
        { id: 'q41', title: 'What is CloudFront?', content: 'CloudFront is CDN. Caches content at edge locations. Reduces latency. Offloads origin. Global distribution. SSL/TLS. Use for: static assets, media, global apps. Performance improvement.' },
        { id: 'q42', title: 'What is Route 53?', content: 'Route 53 is DNS service. Domain registration. DNS routing. Health checks. Failover. Global. Use for: domain management, routing, high availability.' },
        { id: 'q43', title: 'What is API Gateway?', content: 'API Gateway creates/manages APIs. REST and WebSocket. Authentication, throttling, caching. Serverless. Pay per request. Use for: APIs, microservices. API management.' },
        { id: 'q44', title: 'What is Security Groups?', content: 'Security Groups are virtual firewalls. Control inbound/outbound traffic. Stateful. Attached to resources. Default deny. Whitelist approach. Essential security.' },
        { id: 'q45', title: 'What is NACL?', content: 'NACL (Network ACL) is subnet-level firewall. Stateless. Rules evaluated in order. Default allow. More granular than Security Groups. Subnet protection.' },
        { id: 'q46', title: 'What is WAF?', content: 'WAF (Web Application Firewall) protects web apps. Filters HTTP requests. Protects against: SQL injection, XSS, DDoS. Layer 7 protection. Use with CloudFront/ALB. Security layer.' },
        { id: 'q47', title: 'What is CloudWatch?', content: 'CloudWatch monitors AWS resources. Metrics, logs, alarms. Centralized monitoring. Dashboards. Alerts. Use for: monitoring, troubleshooting, automation. Essential for operations.' },
        { id: 'q48', title: 'What is CloudFormation?', content: 'CloudFormation is Infrastructure as Code. Templates define infrastructure. Version controlled. Repeatable deployments. Manages resources. Use for: automation, consistency. Infrastructure management.' },
        { id: 'q49', title: 'What is cost optimization?', content: 'Cost optimization: right-size resources, use reserved instances, spot instances, S3 lifecycle, delete unused resources, monitor costs, use cost explorer, set budgets. Ongoing process. Reduce waste.' },
        { id: 'q50', title: 'What are AWS best practices?', content: 'Best practices: use IAM properly, enable MFA, use VPC, encrypt data, enable logging, use CloudWatch, implement backups, use multiple AZs, follow security guidelines, cost optimization, monitor resources, use Infrastructure as Code, document architecture, test disaster recovery.' }
      ]
    }
  ]
};
