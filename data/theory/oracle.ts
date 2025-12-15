import { TheoryTopic } from '@/types/theory';

export const oracleTheory: TheoryTopic = {
  topicId: 'oracle',
  topicName: 'Oracle',
  category: 'Tools & Cloud',
  description: 'Oracle database and Oracle Cloud Infrastructure concepts for data, performance, security, and operations.',
  sections: [
    {
      id: 'db-architecture',
      title: 'Database Architecture and Basics',
      content: '',
      subsections: [
        { id: 'q1', title: 'Oracle DB architecture?', content: 'Instance (SGA + background processes) + database files (data, redo, control). Uses tablespaces and segments.' },
        { id: 'q2', title: 'Tablespaces?', content: 'Logical storage units grouping datafiles; SYSTEM, SYSAUX, UNDO, TEMP, USERS; manage space and IO.' },
        { id: 'q3', title: 'Redo and archive logs?', content: 'Redo logs capture changes for recovery; archivelog mode retains redo for backups and PITR.' },
        { id: 'q4', title: 'Oracle vs ANSI SQL?', content: 'Oracle adds PL/SQL, proprietary functions, hierarchical queries, analytic functions, sequences, packages.' },
        { id: 'q5', title: 'PL/SQL basics?', content: 'Block-structured language with declarations, executable, and exception sections; supports procedures, functions, packages.' },
        { id: 'q6', title: 'Data types?', content: 'NUMBER, VARCHAR2, DATE, TIMESTAMP, CLOB/BLOB, RAW, collections; choose for precision and storage.' },
        { id: 'q7', title: 'Constraints?', content: 'PK, FK, UNIQUE, CHECK, NOT NULL; enforce integrity; enable/disable and defer where needed.' },
        { id: 'q8', title: 'Sequences and identity?', content: 'Sequences generate unique numbers; identity columns auto-increment; cache for performance.' },
        { id: 'q9', title: 'Indexes?', content: 'B-tree default; bitmap for low-cardinality; function-based; partitioned indexes for large tables.' },
        { id: 'q10', title: 'Partitioning?', content: 'Range/hash/list/composite partitioning for manageability and performance; pruning reduces scanned data.' }
      ]
    },
    {
      id: 'performance',
      title: 'Performance and Tuning',
      content: '',
      subsections: [
        { id: 'q11', title: 'Explain plans?', content: 'Use EXPLAIN PLAN/DBMS_XPLAN; see join order, access paths, full scans vs index usage; gather stats regularly.' },
        { id: 'q12', title: 'Optimizer statistics?', content: 'Gather table/index stats; histograms for skew; stale stats can cause suboptimal plans.' },
        { id: 'q13', title: 'Wait events?', content: 'AWR/ASH reports show waits (IO, locks, CPU); target top waits; tune SQL and configuration.' },
        { id: 'q14', title: 'Connection pooling?', content: 'Use DRCP or app server pools; reduce login overhead; improves scalability.' },
        { id: 'q15', title: 'Parallel query?', content: 'Enable degree of parallelism for large scans/ETL; balance against system resources.' },
        { id: 'q16', title: 'Materialized views?', content: 'Precompute results; fast refresh; support query rewrite to speed analytics.' },
        { id: 'q17', title: 'Locking and concurrency?', content: 'Row-level locking; MVCC with UNDO; avoid hotspots; monitor blocking sessions and deadlocks.' },
        { id: 'q18', title: 'Memory structures?', content: 'SGA (buffer cache, shared pool), PGA (sort/workarea); size appropriately; use Automatic Memory Management.' },
        { id: 'q19', title: 'IO optimization?', content: 'Separate redo/temp/datafiles on disks; use ASM or engineered systems; monitor IO latency.' },
        { id: 'q20', title: 'SQL best practices?', content: 'Bind variables, avoid implicit conversions, limit SELECT *, prefer set-based operations, index selective predicates.' }
      ]
    },
    {
      id: 'reliability',
      title: 'Backup, Recovery, and HA',
      content: '',
      subsections: [
        { id: 'q21', title: 'Backup tools?', content: 'RMAN for backups/restore; supports full, incremental, block change tracking; validate backups regularly.' },
        { id: 'q22', title: 'Point-in-time recovery?', content: 'Requires archivelog mode; use backups + archived redo to recover to SCN/time.' },
        { id: 'q23', title: 'Data Guard?', content: 'Physical/logical standby for HA/DR; redo transport; fast-start failover with observer; apply lag considerations.' },
        { id: 'q24', title: 'Flashback?', content: 'Flashback Query, Table, or Database to recover from logical errors quickly without full restore.' },
        { id: 'q25', title: 'RAC?', content: 'Real Application Clusters scale DB across nodes with shared storage; provides HA and workload distribution.' },
        { id: 'q26', title: 'Transportable tablespaces?', content: 'Move large datasets between databases quickly; useful for migrations and clones.' },
        { id: 'q27', title: 'Backup retention?', content: 'Define retention policies; catalog backups; consider offsite/object storage; test restores for confidence.' },
        { id: 'q28', title: 'Undo/redo sizing?', content: 'Proper sizing prevents ORA-1555 snapshot too old; redo sizing affects checkpointing and recovery.' },
        { id: 'q29', title: 'Security backups?', content: 'Protect backups with encryption, secure storage, and access controls; track keys separately.' },
        { id: 'q30', title: 'Patching strategy?', content: 'Apply PSU/RU regularly; use out-of-place patching; test in lower env; consider rolling updates for RAC.' }
      ]
    },
    {
      id: 'oci',
      title: 'Oracle Cloud Infrastructure (OCI)',
      content: '',
      subsections: [
        { id: 'q31', title: 'OCI regions and ADs?', content: 'Regions contain availability domains; fault domains provide rack-level isolation; choose for redundancy.' },
        { id: 'q32', title: 'Compartments?', content: 'Logical containers for resources and IAM; support segregation, quotas, and policy scoping.' },
        { id: 'q33', title: 'Compute and networking?', content: 'Compute instances, autoscaling, VCNs/subnets, security lists/NSGs, load balancers, FastConnect/VPN.' },
        { id: 'q34', title: 'Storage options?', content: 'Object storage (standard/archive), Block volumes, File storage (NFS), Local NVMe, Backup service.' },
        { id: 'q35', title: 'Databases on OCI?', content: 'Autonomous Database (ATP/ADW), Exadata Cloud Service/CS@Customer, Oracle Base Database Service, MySQL HeatWave.' },
        { id: 'q36', title: 'Identity and access?', content: 'IAM with users/groups/dynamic groups; policies written in simple syntax; compartments scope access.' },
        { id: 'q37', title: 'Observability?', content: 'OCI Monitoring, Logging, Alarms, APM; integrates with OKE (Kubernetes) and Functions.' },
        { id: 'q38', title: 'OKE?', content: 'Oracle Kubernetes Engine managed control plane; integrates with Load Balancer, OKE Cloud Shell, and OCI IAM.' },
        { id: 'q39', title: 'Cost control?', content: 'Budgets/alerts, object lifecycle policies, right-size shapes, preemptible instances, autoscaling, data egress awareness.' },
        { id: 'q40', title: 'DR patterns?', content: 'Multi-AD deployments, cross-region replication (Object/Block), Data Guard to another region, traffic steering.' }
      ]
    },
    {
      id: 'security',
      title: 'Security and Compliance',
      content: '',
      subsections: [
        { id: 'q41', title: 'Encryption?', content: 'TDE for database at rest; network encryption; OCI KMS for customer-managed keys; wallet management for clients.' },
        { id: 'q42', title: 'Least privilege?', content: 'Grant minimal roles; use compartments; separate duties for DBA and security; audit trail for changes.' },
        { id: 'q43', title: 'Data masking and redaction?', content: 'Use Data Redaction for runtime masking; Data Masking pack for cloning non-prod datasets safely.' },
        { id: 'q44', title: 'Auditing?', content: 'Unified Audit Trail captures logins, DDL/DML; ship to SIEM; monitor failed logins and privilege use.' },
        { id: 'q45', title: 'Database Vault?', content: 'Adds realm-based controls to block DBA access to sensitive objects; separation of duties enforcement.' },
        { id: 'q46', title: 'SQL injection defense?', content: 'Use bind variables, least privilege, input validation, and DB Firewall where available.' },
        { id: 'q47', title: 'Patching and hardening?', content: 'Regular patching, disable unused features, secure listener, enforce TLS, rotate passwords/keys.' },
        { id: 'q48', title: 'Backup security?', content: 'Encrypt backups, store offsite/object, restrict access, test restore; consider WORM/immutability options.' },
        { id: 'q49', title: 'Compliance?', content: 'Map controls to standards (PCI, HIPAA, GDPR); use auditing, encryption, and data governance tooling.' },
        { id: 'q50', title: 'Integration best practices?', content: 'Use managed drivers with wallet, connection pools, app-side retries, and proper transaction boundaries.' }
      ]
    }
  ]
};
