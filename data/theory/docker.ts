import { TheoryTopic } from '@/types/theory';

export const dockerTheory: TheoryTopic = {
  topicId: 'docker',
  topicName: 'Docker',
  category: 'Tools & Cloud',
  description: 'Docker containerization platform',
  sections: [
    {
      id: 'basics',
      title: 'Docker Basics',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is Docker?', content: 'Docker is containerization platform. Packages applications with dependencies. Isolated environments. Lightweight virtualization. Runs on any OS with Docker. Consistent across environments. Simplifies deployment.' },
        { id: 'q2', title: 'What is a container?', content: 'Container is isolated environment. Contains: application, dependencies, runtime. Shares host OS kernel. Lightweight. Fast startup. Portable. Similar to VM but lighter.' },
        { id: 'q3', title: 'What is container vs VM?', content: 'Container: shares OS kernel, lightweight, fast startup, less isolation. VM: full OS, heavier, slower startup, more isolation. Containers more efficient. VMs more isolated. Choose based on needs.' },
        { id: 'q4', title: 'What is an image?', content: 'Image is read-only template. Contains: application, dependencies, configuration. Used to create containers. Layered file system. Immutable. Build from Dockerfile. Base for containers.' },
        { id: 'q5', title: 'What is Dockerfile?', content: 'Dockerfile defines image. Instructions: FROM (base image), RUN (commands), COPY (files), WORKDIR (directory), EXPOSE (ports), CMD (default command). Builds image. Version controlled. Reproducible builds.' },
        { id: 'q6', title: 'What is docker build?', content: 'docker build creates image from Dockerfile. Syntax: docker build -t name:tag . Builds layers. Caches layers. Tag with name:version. Creates image. First step in containerization.' },
        { id: 'q7', title: 'What is docker run?', content: 'docker run creates and starts container. Syntax: docker run [options] image. Options: -d (detached), -p (ports), -v (volumes), -e (environment). Creates container from image. Runs application.' },
        { id: 'q8', title: 'What is docker ps?', content: 'docker ps lists running containers. Shows: container ID, image, status, ports, names. docker ps -a shows all (including stopped). Monitor containers. Essential command.' },
        { id: 'q9', title: 'What is docker stop?', content: 'docker stop stops running container. Graceful shutdown. Sends SIGTERM. Waits then SIGKILL. Preserves state. Container can be restarted. Stops container.' },
        { id: 'q10', title: 'What is docker rm?', content: 'docker rm removes container. Must be stopped first. docker rm -f forces removal. Frees resources. Cleanup command. Remove unused containers regularly.' }
      ]
    },
    {
      id: 'images',
      title: 'Images and Layers',
      content: '',
      subsections: [
        { id: 'q11', title: 'What are image layers?', content: 'Image layers are filesystem layers. Each instruction creates layer. Cached layers speed builds. Shared layers save space. Immutable layers. Union filesystem. Efficient storage.' },
        { id: 'q12', title: 'What is base image?', content: 'Base image is foundation. FROM instruction specifies. Examples: alpine, ubuntu, node, python. Minimal or full OS. Choose based on needs. Smaller is better. Security consideration.' },
        { id: 'q13', title: 'What is image tag?', content: 'Image tag identifies version. Format: name:tag. Examples: app:latest, app:v1.0. latest is default. Use semantic versioning. Tag appropriately. Important for versioning.' },
        { id: 'q14', title: 'What is docker pull?', content: 'docker pull downloads image. From registry (Docker Hub). Syntax: docker pull image:tag. Gets image locally. Prepares for running. Common operation.' },
        { id: 'q15', title: 'What is docker push?', content: 'docker push uploads image. To registry. Syntax: docker push image:tag. Share images. Make available. Requires authentication. Publishing images.' },
        { id: 'q16', title: 'What is Docker Hub?', content: 'Docker Hub is image registry. Public and private images. Official images. Community images. Store and share. Default registry. Popular platform.' },
        { id: 'q17', title: 'What is image optimization?', content: 'Image optimization: use .dockerignore, multi-stage builds, minimal base images, combine RUN commands, order instructions (cache), remove unnecessary files. Smaller images. Faster builds. Better performance.' },
        { id: 'q18', title: 'What is multi-stage build?', content: 'Multi-stage build uses multiple FROM statements. Build in one stage, copy artifacts to final. Reduces final image size. Removes build tools. Production images. Optimization technique.' },
        { id: 'q19', title: 'What is .dockerignore?', content: '.dockerignore excludes files from build. Similar to .gitignore. Reduces build context. Faster builds. Smaller images. Exclude: node_modules, .git, docs. Best practice.' },
        { id: 'q20', title: 'What is image scanning?', content: 'Image scanning checks for vulnerabilities. Security analysis. Find known vulnerabilities. Tools: Docker Scout, Trivy, Clair. Important for security. Scan before deployment.' }
      ]
    },
    {
      id: 'containers',
      title: 'Container Management',
      content: '',
      subsections: [
        { id: 'q21', title: 'What is container lifecycle?', content: 'Container lifecycle: create (docker create), start (docker start), run (docker run), stop (docker stop), remove (docker rm). States: created, running, stopped, removed. Manage lifecycle.' },
        { id: 'q22', title: 'What is docker exec?', content: 'docker exec runs command in running container. Syntax: docker exec [options] container command. Interactive: docker exec -it container bash. Debug containers. Execute commands. Useful for troubleshooting.' },
        { id: 'q23', title: 'What is docker logs?', content: 'docker logs shows container output. Syntax: docker logs [options] container. Options: -f (follow), --tail (lines), --since (time). View application logs. Debugging tool. Monitor output.' },
        { id: 'q24', title: 'What is docker inspect?', content: 'docker inspect shows container/image details. JSON output. Configuration, network, mounts, etc. Detailed information. Debugging tool. Understand container state.' },
        { id: 'q25', title: 'What is container networking?', content: 'Container networking: bridge (default), host, none, overlay. Bridge: isolated network. Host: uses host network. None: no network. Overlay: multi-host. Choose based on needs.' },
        { id: 'q26', title: 'What is port mapping?', content: 'Port mapping exposes container ports. Syntax: -p host:container. Example: -p 8080:80. Maps host port to container port. Access from host. Required for external access.' },
        { id: 'q27', title: 'What is docker network?', content: 'docker network manages networks. Create custom networks. Connect containers. Isolated networks. Communication between containers. Network isolation. Organize containers.' },
        { id: 'q28', title: 'What is volume?', content: 'Volume persists data. Survives container removal. Types: named volumes, bind mounts, tmpfs. Syntax: -v host:container. Data persistence. Share data. Important for stateful apps.' },
        { id: 'q29', title: 'What is bind mount?', content: 'Bind mount mounts host directory. Syntax: -v /host/path:/container/path. Direct access to host files. Development use. Production: use volumes. Two-way sync.' },
        { id: 'q30', title: 'What is named volume?', content: 'Named volume is managed storage. Docker manages location. Persistent data. Isolated from host. Better for production. Use docker volume create. Recommended for data.' }
      ]
    },
    {
      id: 'dockerfile',
      title: 'Dockerfile Best Practices',
      content: '',
      subsections: [
        { id: 'q31', title: 'What are Dockerfile instructions?', content: 'Dockerfile instructions: FROM (base), RUN (execute), COPY (copy files), ADD (copy with extraction), WORKDIR (set directory), EXPOSE (ports), ENV (environment), CMD (default command), ENTRYPOINT (entry command), USER (user). Build image.' },
        { id: 'q32', title: 'What is CMD vs ENTRYPOINT?', content: 'CMD: default command, can be overridden, parameters appended. ENTRYPOINT: always executed, parameters passed. Use CMD for defaults. Use ENTRYPOINT for fixed commands. Can combine both.' },
        { id: 'q33', title: 'What is layer caching?', content: 'Layer caching reuses unchanged layers. Speeds up builds. Order matters. Put frequently changing layers last. Optimize Dockerfile order. Faster rebuilds. Important for CI/CD.' },
        { id: 'q34', title: 'What is health check?', content: 'Health check monitors container health. HEALTHCHECK instruction. Docker checks periodically. Unhealthy containers can be replaced. Use for: orchestration, monitoring. Container health.' },
        { id: 'q35', title: 'What is user in container?', content: 'USER instruction sets user. Don\'t run as root. Security best practice. Create non-root user. Reduce attack surface. Security hardening. Important for production.' },
        { id: 'q36', title: 'What is environment variables?', content: 'Environment variables configure containers. ENV in Dockerfile. -e flag in docker run. Configuration. Secrets management. 12-factor app. Flexible configuration.' },
        { id: 'q37', title: 'What is docker-compose?', content: 'docker-compose orchestrates multi-container apps. YAML file defines services. docker-compose up starts all. Simplifies multi-container. Development tool. Define: services, networks, volumes.' },
        { id: 'q38', title: 'What is docker-compose.yml?', content: 'docker-compose.yml defines services. Services: containers to run. Networks: container networks. Volumes: data storage. Configuration in one file. Declarative. Easy management.' },
        { id: 'q39', title: 'What is Docker best practices?', content: 'Best practices: use .dockerignore, multi-stage builds, minimal base images, don\'t run as root, use specific tags, combine RUN commands, order for caching, health checks, security scanning, document Dockerfile, keep images small, use volumes for data.' },
        { id: 'q40', title: 'What is container security?', content: 'Container security: scan images, don\'t run as root, use minimal images, keep updated, limit capabilities, use secrets management, network isolation, resource limits, read-only filesystems, security policies. Critical for production.' }
      ]
    },
    {
      id: 'orchestration',
      title: 'Orchestration',
      content: '',
      subsections: [
        { id: 'q41', title: 'What is container orchestration?', content: 'Orchestration manages containers. Features: scheduling, scaling, health checks, service discovery, load balancing. Tools: Kubernetes, Docker Swarm, ECS. Production requirement. Complex workloads.' },
        { id: 'q42', title: 'What is Kubernetes?', content: 'Kubernetes orchestrates containers. Manages: pods, services, deployments. Auto-scaling. Self-healing. Service discovery. Industry standard. Complex but powerful. Production-grade.' },
        { id: 'q43', title: 'What is Docker Swarm?', content: 'Docker Swarm is Docker\'s orchestration. Native Docker. Simpler than Kubernetes. Good for: smaller deployments, Docker-focused teams. Less features than Kubernetes. Docker-native solution.' },
        { id: 'q44', title: 'What is service discovery?', content: 'Service discovery finds services. Containers find each other. DNS-based. Automatic. Orchestration handles. Essential for microservices. Enables communication.' },
        { id: 'q45', title: 'What is container registry?', content: 'Container registry stores images. Examples: Docker Hub, AWS ECR, Google GCR, Azure ACR. Private or public. Store and distribute. Version control. Essential for CI/CD.' },
        { id: 'q46', title: 'What is CI/CD with Docker?', content: 'CI/CD with Docker: build image in CI, test in container, push to registry, deploy from registry. Consistent environments. Reproducible builds. Modern deployment. Standard practice.' },
        { id: 'q47', title: 'What is container monitoring?', content: 'Container monitoring tracks health. Metrics: CPU, memory, network, logs. Tools: Prometheus, Grafana, CloudWatch. Monitor containers. Alert on issues. Essential for production.' },
        { id: 'q48', title: 'What is resource limits?', content: 'Resource limits constrain containers. CPU, memory limits. Prevent resource exhaustion. Fair sharing. Set in docker run or compose. Important for stability. Production requirement.' },
        { id: 'q49', title: 'What is container logging?', content: 'Container logging captures output. stdout/stderr. Docker logs command. Log drivers: json-file, syslog, fluentd. Centralized logging. Important for debugging. Production monitoring.' },
        { id: 'q50', title: 'What are Docker use cases?', content: 'Use cases: application deployment, microservices, CI/CD, development environments, testing, cloud migration, hybrid cloud, edge computing. Versatile platform. Industry standard. Modern development.' }
      ]
    }
  ]
};
