import { TheoryTopic } from '@/types/theory';

export const metaTheory: TheoryTopic = {
  topicId: 'meta',
  topicName: 'Meta (Facebook)',
  category: 'Tech Companies',
  description: 'Meta/Facebook interview and platform knowledge: products, systems, coding/interview prep, and culture.',
  sections: [
    {
      id: 'company',
      title: 'Company and Products',
      content: '',
      subsections: [
        { id: 'q1', title: 'Products?', content: 'Facebook, Instagram, WhatsApp, Messenger, Threads, Quest/VR, Reels, Ads/Business Suite, Marketplace.' },
        { id: 'q2', title: 'Mission?', content: 'Give people the power to build community and bring the world closer together; focus on social connection and metaverse.' },
        { id: 'q3', title: 'Business model?', content: 'Primarily advertising revenue; commerce tools; VR hardware/software; subscription experiments; creator monetization.' },
        { id: 'q4', title: 'Engineering culture?', content: 'Move fast, strong ownership, data-driven decisions, code reviews, large-scale experimentation (A/B), and infra leverage.' },
        { id: 'q5', title: 'Scale characteristics?', content: 'Billions of users, low-latency feeds/messaging, global edge caches, large ML workloads, strict privacy and integrity controls.' },
        { id: 'q6', title: 'Tech stack highlights?', content: 'React, React Native, GraphQL (Relay), HHVM/Hack legacy, C++/Java services, Python, RocksDB, Presto/Trino, Spark.' },
        { id: 'q7', title: 'Infra platforms?', content: 'TAO for social graph, Scuba for analytics, FBLearner Flow/AI, logging/tracing systems, ZippyDB, memcache tiers.' },
        { id: 'q8', title: 'Privacy and integrity?', content: 'Data minimization, access controls, abuse/fraud/spam detection, content integrity, and regulatory compliance (GDPR/CCPA).' },
        { id: 'q9', title: 'Metaverse efforts?', content: 'Reality Labs, Quest devices, Horizon platforms; focus on VR/AR presence and spatial computing.' },
        { id: 'q10', title: 'Open source?', content: 'React, PyTorch, GraphQL, RocksDB, Buck2, Infer, Hermes, Folly; active in open-source community.' }
      ]
    },
    {
      id: 'interview',
      title: 'Interview Expectations',
      content: '',
      subsections: [
        { id: 'q11', title: 'Interview format?', content: 'Coding (DSA), design (system/product), behavioral; sometimes mixed coding+design; onsite/virtual loops.' },
        { id: 'q12', title: 'Coding focus?', content: 'Strong on algorithms/data structures: arrays, strings, trees, graphs, DP, greedy, intervals, sorting, searching.' },
        { id: 'q13', title: 'Complexity discussion?', content: 'Expect to articulate time/space complexity, trade-offs, and edge cases; optimize and justify choices.' },
        { id: 'q14', title: 'System design?', content: 'Design scalable, reliable systems: news feed, messaging, stories, ads delivery, notifications; cover APIs, storage, cache, consistency, scaling.' },
        { id: 'q15', title: 'Behavioral (Jedi)?', content: 'Assesses ownership, collaboration, conflict resolution, impact orientation. Use STAR and emphasize impact.' },
        { id: 'q16', title: 'Language choice?', content: 'Pick one strong language (often Python/Java/C++/JS). Clean code, tests, readable variable names, small helpers.' },
        { id: 'q17', title: 'Signal boosters?', content: 'Proactive clarifications, examples, testing your solution, handling edge cases, communicating trade-offs.' },
        { id: 'q18', title: 'Evaluation rubrics?', content: 'Data structures choice, correctness, efficiency, communication, pace, testing, handling feedback.' },
        { id: 'q19', title: 'Common pitfalls?', content: 'Jumping to code, poor complexity, missing edge cases, not testing, weak communication, over-engineering.' },
        { id: 'q20', title: 'Preparation tips?', content: 'Practice LeetCode/FB-tagged problems, mock interviews, system design drills, review past projects, and metrics-driven stories.' }
      ]
    },
    {
      id: 'systems',
      title: 'Systems Knowledge',
      content: '',
      subsections: [
        { id: 'q21', title: 'Caching tiers?', content: 'Client caches, CDN/edge, regional memcache tiers, DB cache; strategies for invalidation and consistency.' },
        { id: 'q22', title: 'Storage systems?', content: 'TAO/ZippyDB for graph and key-value; MySQL sharding; RocksDB; cold storage; replication and failover strategies.' },
        { id: 'q23', title: 'Messaging patterns?', content: 'Real-time chat uses fanout-on-write/read, inbox services, delivery receipts, presence; pub/sub and push notifications.' },
        { id: 'q24', title: 'Feed ranking?', content: 'Candidate generation, ML ranking, personalization signals, freshness, integrity filters, diversity, and downranking.' },
        { id: 'q25', title: 'Ads delivery?', content: 'Auction-based, pacing, targeting, budget control, creative selection, click/conversion tracking, privacy constraints.' },
        { id: 'q26', title: 'Consistency models?', content: 'Eventual vs strong; read-your-write; use of leases/locks; handling replication lag and out-of-order events.' },
        { id: 'q27', title: 'Observability?', content: 'Logs, metrics, traces; automated canaries; dashboards; alerting on SLIs; blackbox/whitebox monitoring.' },
        { id: 'q28', title: 'CDN/edge?', content: 'Global PoPs, request routing, TLS termination, caching strategies, AB testing at edge, load balancing.' },
        { id: 'q29', title: 'Data pipelines?', content: 'Kafka-style logs, stream processing, batch via Spark/Presto; ETL/feature pipelines feeding ML models.' },
        { id: 'q30', title: 'Security/integrity?', content: 'Auth (OAuth/OpenID), rate limiting, abuse detection, spam/fake account defenses, privacy controls.' }
      ]
    },
    {
      id: 'coding',
      title: 'Coding and Best Practices',
      content: '',
      subsections: [
        { id: 'q31', title: 'Code quality?', content: 'Readable code, clear naming, helper functions, tests. Handle errors gracefully and check inputs.' },
        { id: 'q32', title: 'Testing approach?', content: 'Unit tests for core logic; edge cases; property-based tests; simple assertions in interviews to show correctness.' },
        { id: 'q33', title: 'Data structure fluency?', content: 'Know arrays, hash maps, heaps, trees, tries, graphs, stacks/queues, union-find, segment trees when relevant.' },
        { id: 'q34', title: 'Algorithm patterns?', content: 'Sliding window, two pointers, binary search, recursion/DFS/BFS, DP, greedy, backtracking, topological sort.' },
        { id: 'q35', title: 'Complexity trade-offs?', content: 'Balance time vs space; precomputation vs on-demand; consider constraints; articulate trade-offs to interviewer.' },
        { id: 'q36', title: 'Edge cases?', content: 'Empty/null inputs, single elements, duplicates, large sizes, negative numbers, Unicode, overflow, sorting stability.' },
        { id: 'q37', title: 'Examples/tests in interview?', content: 'Walk through examples, dry-run, test extremes; adjust code promptly when issues found.' },
        { id: 'q38', title: 'Communication?', content: 'Narrate thinking, verify requirements, propose alternatives, and explain optimizations clearly.' },
        { id: 'q39', title: 'Time management?', content: 'Budget time: clarify 2-3m, design 5-7m, code 15-20m, test/improve 5m; keep pace.' },
        { id: 'q40', title: 'After-coding checks?', content: 'Re-read code, confirm complexity, handle errors, and ensure no off-by-one or uninitialized vars.' }
      ]
    },
    {
      id: 'culture',
      title: 'Culture, Values, and Success',
      content: '',
      subsections: [
        { id: 'q41', title: 'Core values?', content: 'Move fast, focus on long-term impact, build awesome things, live in the future, be direct and respect your colleagues.' },
        { id: 'q42', title: 'Ownership?', content: 'Engineers own features end-to-end; quick iteration; willingness to fix and improve infra/tools.' },
        { id: 'q43', title: 'Collaboration?', content: 'Cross-functional with product/design/data; async communication; design docs; rigorous code reviews.' },
        { id: 'q44', title: 'Metrics mindset?', content: 'Define success metrics, experiment, analyze results, and ship improvements; guard against metric gaming.' },
        { id: 'q45', title: 'Integrity and safety?', content: 'Prioritize safety, privacy, and integrity; balance growth with user trust; consider abuse vectors.' },
        { id: 'q46', title: 'Growth and feedback?', content: 'Regular performance reviews; actionable feedback; mentoring; career levels and expectations transparent.' },
        { id: 'q47', title: 'Remote/hybrid work?', content: 'Teams distributed; strong async culture; heavy use of internal tools for collaboration and experimentation.' },
        { id: 'q48', title: 'Documentation?', content: 'Design docs, RFCs, runbooks; experimentation write-ups; onboarding guides for large systems.' },
        { id: 'q49', title: 'Success in interviews?', content: 'Signal impact, collaboration, and learning speed; demonstrate rigorous thinking and user focus.' },
        { id: 'q50', title: 'Post-offer expectations?', content: 'Ship early, iterate, measure; align with team priorities; maintain quality and reliability at scale.' }
      ]
    }
  ]
};
