import { TheoryTopic } from '@/types/theory';

export const springBootTheory: TheoryTopic = {
  topicId: 'spring-boot',
  topicName: 'Spring Boot',
  category: 'Full Stack',
  description: 'Spring Boot for rapid Java microservices with auto-configuration, starters, and production-ready features.',
  sections: [
    {
      id: 'basics',
      title: 'Basics and Auto-Configuration',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is Spring Boot?', content: 'Opinionated Spring framework extension that reduces setup via auto-configuration, starters, and embedded servers (Tomcat/Jetty/Undertow).' },
        { id: 'q2', title: 'Starters?', content: 'spring-boot-starter-* dependencies bundle common libraries (web, data-jpa, security, test) to simplify dependency management.' },
        { id: 'q3', title: 'Auto-configuration?', content: 'Spring Boot auto-configures beans based on classpath and properties. Can override via @Bean or exclude specific auto-config classes.' },
        { id: 'q4', title: 'Application entry?', content: '@SpringBootApplication combines @Configuration, @EnableAutoConfiguration, and @ComponentScan. main runs SpringApplication.run.' },
        { id: 'q5', title: 'Properties and YAML?', content: 'Use application.properties/yaml for config. Profiles (spring.profiles.active) enable env-specific overrides. externalized configuration supported.' },
        { id: 'q6', title: 'Embedded servers?', content: 'Default Tomcat. Switch to Jetty/Undertow by changing starter. Run with mvn spring-boot:run or java -jar build artifact.' },
        { id: 'q7', title: 'Actuator?', content: 'spring-boot-starter-actuator exposes health, metrics, info, env, mappings. Secure endpoints and enable only needed ones.' },
        { id: 'q8', title: 'Logging?', content: 'Uses Logback by default. Configure via properties or logback-spring.xml. Supports log levels per package and JSON appenders.' },
        { id: 'q9', title: 'Devtools?', content: 'spring-boot-devtools enables auto-restart and live reload for faster dev cycles. Disable in production builds.' },
        { id: 'q10', title: 'Profile-specific beans?', content: 'Use @Profile or @Conditional to load beans based on environment or conditions (class presence, property value).' }
      ]
    },
    {
      id: 'web',
      title: 'Web, REST, and Validation',
      content: '',
      subsections: [
        { id: 'q11', title: 'REST controllers?', content: 'Use @RestController and @RequestMapping. Methods with @GetMapping/@PostMapping etc. Return JSON via Jackson. Path variables and request params mapped.' },
        { id: 'q12', title: 'Validation?', content: 'Use Bean Validation (Jakarta Validation). Annotate DTOs with @NotNull/@Size/etc. Add @Valid on method params. Handle errors via @ExceptionHandler.' },
        { id: 'q13', title: 'Error handling?', content: 'ControllerAdvice with @ExceptionHandler for global errors. Customize ResponseEntity with status and body. Use Problem Details if desired.' },
        { id: 'q14', title: 'CORS?', content: 'Configure via @CrossOrigin on controllers or WebMvcConfigurer addCorsMappings. For security, restrict origins/methods/headers.' },
        { id: 'q15', title: 'File uploads?', content: 'Multipart enabled via spring.servlet.multipart. Use MultipartFile in controllers. Limit size and validate content type.' },
        { id: 'q16', title: 'HATEOAS?', content: 'Add links to resources with spring-hateoas. Useful for discoverability. Not mandatory for simple APIs.' },
        { id: 'q17', title: 'WebFlux vs MVC?', content: 'Spring MVC is servlet, blocking. WebFlux is reactive (Netty) for high concurrency IO-bound. Choose based on workload and team expertise.' },
        { id: 'q18', title: 'Message converters?', content: 'HttpMessageConverters serialize/deserialize JSON/XML/etc. Customize by adding converters or configuring ObjectMapper.' },
        { id: 'q19', title: 'Rate limiting?', content: 'Implement via filters, interceptors, or API gateways. Use Resilience4j/RateLimiter or gateway-level policies.' },
        { id: 'q20', title: 'Common pitfalls?', content: 'Mixing blocking and reactive, forgetting validation, not handling exceptions, open CORS, overusing controllers for business logic.' }
      ]
    },
    {
      id: 'data',
      title: 'Data Access and Persistence',
      content: '',
      subsections: [
        { id: 'q21', title: 'Spring Data JPA?', content: 'Repository interfaces (CrudRepository/JpaRepository) for CRUD. Query methods by naming, @Query for custom JPQL/native SQL.' },
        { id: 'q22', title: 'Transactions?', content: 'Use @Transactional at service methods. Choose propagation/isolation as needed. Keep transactions short; avoid opening in controllers unnecessarily.' },
        { id: 'q23', title: 'Entity mapping?', content: 'Use @Entity, @Id, @GeneratedValue. Map relations with @OneToMany/@ManyToOne/@ManyToMany, cascade types, fetch types (LAZY/EAGER).' },
        { id: 'q24', title: 'Migrations?', content: 'Use Flyway/Liquibase for schema changes. Place migration scripts in resources/db/migration. Run automatically on startup.' },
        { id: 'q25', title: 'DTOs vs entities?', content: 'Expose DTOs to API to avoid leaking entities, control serialization, and shape responses. Map with MapStruct or manual mapping.' },
        { id: 'q26', title: 'Pagination and sorting?', content: 'Use Pageable/Page in repository methods. Sort and page results server-side to avoid large payloads.' },
        { id: 'q27', title: 'Caching?', content: 'Enable @EnableCaching. Use cache annotations @Cacheable/@CacheEvict. Backed by caffeine/redis/etc. Pick correct eviction/TTL.' },
        { id: 'q28', title: 'Connection pooling?', content: 'HikariCP default. Configure pool size, timeouts. Monitor metrics via Actuator. Avoid blocking long-running queries.' },
        { id: 'q29', title: 'NoSQL options?', content: 'Spring Data supports MongoDB, Redis, Cassandra. Choose based on workload. Patterns similar to JPA repositories.' },
        { id: 'q30', title: 'Performance tips?', content: 'Use fetch joins or projections to avoid N+1, index DB columns, batch operations, and profile with SQL logs.' }
      ]
    },
    {
      id: 'security',
      title: 'Security, Testing, and Ops',
      content: '',
      subsections: [
        { id: 'q31', title: 'Spring Security basics?', content: 'Configure HttpSecurity for authz. Use UsernamePasswordAuthenticationFilter or JWT filters. Define UserDetailsService and PasswordEncoder.' },
        { id: 'q32', title: 'JWT auth?', content: 'Stateless sessions with JWT in Authorization header. Filter validates token, sets SecurityContext. Refresh tokens handled separately.' },
        { id: 'q33', title: 'Method security?', content: 'Enable @EnableMethodSecurity and use @PreAuthorize/@PostAuthorize. Evaluate SpEL expressions for roles/permissions.' },
        { id: 'q34', title: 'CSRF?', content: 'Enable/disable based on cookie/session strategy. For stateless APIs, usually disable CSRF and rely on JWT. For forms, keep CSRF enabled.' },
        { id: 'q35', title: 'Testing?', content: 'Use @SpringBootTest for integration, @WebMvcTest for controllers, @DataJpaTest for JPA slice. MockMvc for HTTP layer. Testcontainers for DBs.' },
        { id: 'q36', title: 'Configuration management?', content: 'Use profiles, environment variables, config files. Avoid secrets in repo; use Vault/Secrets Manager. Externalize configs for environments.' },
        { id: 'q37', title: 'Actuator security?', content: 'Protect actuator endpoints; expose only needed (health/metrics). Hide env/config props in prod. Put behind auth/firewall.' },
        { id: 'q38', title: 'Resilience?', content: 'Use Resilience4j for retries/circuit breakers/bulkheads/timeouts. Handle downstream failures gracefully.' },
        { id: 'q39', title: 'Observability?', content: 'Micrometer + Actuator for metrics/tracing/logging. Export to Prometheus/Tempo/Zipkin. Correlate logs with trace IDs.' },
        { id: 'q40', title: 'Common security pitfalls?', content: 'Exposing actuator openly, weak password encoders, missing validation, logging secrets, broad CORS, lacking TLS, running dev defaults in prod.' }
      ]
    },
    {
      id: 'deployment',
      title: 'Deployment and Best Practices',
      content: '',
      subsections: [
        { id: 'q41', title: 'Packaging?', content: 'Executable jar/war. Jar with embedded server most common. Use layers for Docker images to cache deps. Set JAVA_OPTS for memory.' },
        { id: 'q42', title: 'Config for environments?', content: 'Use profiles and external config (env vars, config server). Avoid committing secrets. Use Spring Cloud Config for centralized config.' },
        { id: 'q43', title: 'Dockerization?', content: 'Use multi-stage builds (mvn package then slim JRE). Set proper heap (Xmx) and container-aware flags. Health endpoints for orchestrators.' },
        { id: 'q44', title: 'Kubernetes?', content: 'Deploy with readiness/liveness probes hitting health. Config via ConfigMaps/Secrets. Horizontal Pod Autoscaler using metrics.' },
        { id: 'q45', title: 'Performance tuning?', content: 'Tune DB pool, JVM (G1), HTTP thread pool, gzip, caching. Measure with profilers and APM. Avoid excessive reflection.' },
        { id: 'q46', title: 'Migrations in pipelines?', content: 'Run Flyway/Liquibase migrations during deploy with safety checks/backups. Coordinate rollouts for backward compatibility.' },
        { id: 'q47', title: 'Scheduling?', content: 'Use @EnableScheduling for cron tasks. For clustered setups, ensure single execution using locks or external schedulers.' },
        { id: 'q48', title: 'File handling?', content: 'Store files in object storage not local disk. Stream large responses. Set proper content types and caching headers.' },
        { id: 'q49', title: 'Hot reload vs prod stability?', content: 'Use Devtools only locally. Disable in prod. Keep build reproducible and immutable.' },
        { id: 'q50', title: 'Common pitfalls?', content: 'Fat controllers, leaking entities, forgetting transactions, misconfigured CORS/CSRF, not sizing thread pools, ignoring observability.' }
      ]
    }
  ]
};
