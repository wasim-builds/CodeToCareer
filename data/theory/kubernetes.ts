import { TheoryTopic } from '@/types/theory';

export const kubernetesTheory: TheoryTopic = {
  topicId: 'kubernetes',
  topicName: 'Kubernetes',
  category: 'Tools & Cloud',
  description: 'Kubernetes fundamentals, objects, networking, workloads, security, operations, and best practices.',
  sections: [
    {
      id: 'core',
      title: 'Core Concepts and Objects',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is Kubernetes?', content: 'An open-source container orchestration system for deploying, scaling, and managing containerized applications.' },
        { id: 'q2', title: 'Cluster architecture?', content: 'Control plane (API server, etcd, scheduler, controller manager) and worker nodes (kubelet, kube-proxy, CRI runtime).' },
        { id: 'q3', title: 'Pods?', content: 'Smallest deployable unit; one or more containers sharing network/storage; ephemeral by design.' },
        { id: 'q4', title: 'Deployments vs StatefulSets?', content: 'Deployments manage stateless replicas with rolling updates; StatefulSets manage stable identities/storage for stateful apps.' },
        { id: 'q5', title: 'Services?', content: 'Stable virtual IP and DNS for pods. Types: ClusterIP (default), NodePort, LoadBalancer, ExternalName.' },
        { id: 'q6', title: 'Labels and selectors?', content: 'Key-value pairs to group resources; selectors attach Services/Deployments to Pods; basis for organization.' },
        { id: 'q7', title: 'ConfigMap vs Secret?', content: 'ConfigMap for non-sensitive config; Secret for sensitive data (base64-encoded). Mount as env or files.' },
        { id: 'q8', title: 'Namespaces?', content: 'Logical isolation within a cluster; scope for names, RBAC, quotas, and policies.' },
        { id: 'q9', title: 'etcd role?', content: 'Stores cluster state; requires backups, encryption, quorum; low latency critical for control plane health.' },
        { id: 'q10', title: 'Resource quotas and limits?', content: 'Quotas restrict aggregate usage; limits/requests per container inform scheduling and prevent noisy neighbors.' }
      ]
    },
    {
      id: 'networking',
      title: 'Networking and Ingress',
      content: '',
      subsections: [
        { id: 'q11', title: 'Pod networking?', content: 'Each pod gets an IP; CNI plugin provides pod-to-pod networking without NAT; policies may restrict traffic.' },
        { id: 'q12', title: 'CNI plugins?', content: 'Calico, Cilium, Flannel, Weave. Choose based on performance, network policy support, and environment.' },
        { id: 'q13', title: 'Services and kube-proxy?', content: 'kube-proxy programs iptables/ipvs for service VIP load-balancing to pod endpoints.' },
        { id: 'q14', title: 'Ingress?', content: 'Ingress resources define HTTP routing; requires ingress controller (nginx, traefik, istio gateway).' },
        { id: 'q15', title: 'DNS?', content: 'CoreDNS provides service/pod DNS; ensures service discovery by name; configure stub domains if needed.' },
        { id: 'q16', title: 'Network policies?', content: 'Control traffic between pods/namespaces; enforce zero trust; requires policy-capable CNI (e.g., Calico/Cilium).' },
        { id: 'q17', title: 'Load balancers?', content: 'Cloud LBs provisioned for Service type=LoadBalancer; on-prem use MetalLB or ingress with NodePort.' },
        { id: 'q18', title: 'Service mesh?', content: 'Istio/Linkerd add mTLS, traffic management, telemetry, retries. Adds sidecars and complexity; weigh cost/benefit.' },
        { id: 'q19', title: 'Port-forwarding?', content: 'kubectl port-forward for local debugging to pods/services; temporary and dev-only.' },
        { id: 'q20', title: 'External access?', content: 'Use Ingress/LoadBalancer; for TCP/UDP use LoadBalancer/NodePort; consider auth, TLS termination, and WAF.' }
      ]
    },
    {
      id: 'workloads',
      title: 'Workloads and Scheduling',
      content: '',
      subsections: [
        { id: 'q21', title: 'ReplicaSets and Deployments?', content: 'Deployments manage ReplicaSets for declarative updates/rollbacks; ensure desired replica count and rollout strategy.' },
        { id: 'q22', title: 'DaemonSets?', content: 'Ensure a pod copy runs on each (or selected) node; used for agents like logging/monitoring/networking.' },
        { id: 'q23', title: 'Jobs and CronJobs?', content: 'Jobs run tasks to completion; CronJobs schedule Jobs; tune concurrencyPolicy and history limits.' },
        { id: 'q24', title: 'Scheduling controls?', content: 'affinity/anti-affinity, nodeSelector/nodeName, taints/tolerations, topology spread constraints for distribution.' },
        { id: 'q25', title: 'Horizontal Pod Autoscaler?', content: 'Scales pod replicas based on metrics (CPU/memory/custom). Requires metrics server or external metrics provider.' },
        { id: 'q26', title: 'Vertical Pod Autoscaler?', content: 'Recommends or sets requests/limits based on usage; can evict pods to apply new resources.' },
        { id: 'q27', title: 'PodDisruptionBudget?', content: 'Limits concurrent voluntary disruptions to maintain availability during drains/updates.' },
        { id: 'q28', title: 'Init containers?', content: 'Run before app containers to set up environment (migrations, waiting on deps). Run sequentially.' },
        { id: 'q29', title: 'Resource requests/limits?', content: 'Requests inform scheduling; limits cap usage; set sensibly to avoid throttling or bin packing issues.' },
        { id: 'q30', title: 'Rollouts and rollbacks?', content: 'Deployment strategies: rolling update, canary via labels/selectors, blue/green with services; kubectl rollout undo for rollback.' }
      ]
    },
    {
      id: 'storage',
      title: 'Storage, Security, and Config',
      content: '',
      subsections: [
        { id: 'q31', title: 'Volumes?', content: 'Ephemeral volumes (emptyDir, configMap, secret) and persistent volumes (PV/PVC). PVC binds to PV via StorageClass.' },
        { id: 'q32', title: 'Storage classes?', content: 'Define dynamic provisioning for PVs; parameters depend on cloud storage (EBS, PD, Azure Disk, Ceph, etc.).' },
        { id: 'q33', title: 'Secrets handling?', content: 'Base64-encoded; mount as files or env; use encryption at rest, RBAC, and external secret managers when possible.' },
        { id: 'q34', title: 'RBAC?', content: 'Role/ClusterRole with RoleBinding/ClusterRoleBinding; principle of least privilege; service accounts for workloads.' },
        { id: 'q35', title: 'Admission controllers?', content: 'Mutating/validating webhooks enforce policies, defaults, and security (PodSecurity, OPA/Gatekeeper, Kyverno).' },
        { id: 'q36', title: 'Pod security?', content: 'Use Pod Security Standards or PSP replacements; run as non-root, drop capabilities, use seccomp/apparmor.' },
        { id: 'q37', title: 'Image security?', content: 'Use private registries, signed images (cosign), scan for vulnerabilities, avoid :latest, enforce pull policies.' },
        { id: 'q38', title: 'Service accounts and tokens?', content: 'Mount projected service account tokens; limit token automount; use IRSA/Workload Identity on cloud for least privilege.' },
        { id: 'q39', title: 'Config rollouts?', content: 'Mount ConfigMaps/Secrets; use checksum annotations to trigger rollouts; manage versioning of configs.' },
        { id: 'q40', title: 'Multi-tenancy?', content: 'Use namespaces, quotas, network policies, RBAC boundaries, and separate clusters for strong isolation.' }
      ]
    },
    {
      id: 'operations',
      title: 'Operations and Troubleshooting',
      content: '',
      subsections: [
        { id: 'q41', title: 'Observability?', content: 'Use metrics-server, Prometheus/Grafana, logging stacks (ELK/Loki), tracing (Jaeger/Tempo), and events inspection.' },
        { id: 'q42', title: 'Health checks?', content: 'Liveness/readiness/startup probes to manage restarts and traffic routing; tune timeouts for stability.' },
        { id: 'q43', title: 'Upgrades?', content: 'Upgrade control plane then nodes; respect version skew; cordon/drain nodes; test in staging first.' },
        { id: 'q44', title: 'Node management?', content: 'Cordon/drain for maintenance; autoscaling groups; monitor node pressure (memory/disk/CPU).' },
        { id: 'q45', title: 'Backup/disaster recovery?', content: 'Back up etcd and critical manifests; store cluster state; document restore steps; test regularly.' },
        { id: 'q46', title: 'Troubleshooting pods?', content: 'kubectl describe/logs/exec/port-forward; check events; inspect readiness; look at resource usage and restarts.' },
        { id: 'q47', title: 'Cost optimization?', content: 'Right-size requests/limits, autoscale, use spot/preemptible nodes for suitable workloads, clean unused resources.' },
        { id: 'q48', title: 'Multi-cluster?', content: 'Use federation, GitOps, or service mesh gateways; consider latency, identity, and policy consistency.' },
        { id: 'q49', title: 'GitOps?', content: 'Manage manifests via Argo CD/Flux with declarative repos; enable drift detection and automated sync.' },
        { id: 'q50', title: 'Security posture?', content: 'Regular scans, policy enforcement, image signing, secret management, minimal RBAC, audit logs, and compliance checks.' }
      ]
    }
  ]
};
