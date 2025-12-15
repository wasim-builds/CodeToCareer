import { TheoryTopic } from '@/types/theory';

export const firebaseTheory: TheoryTopic = {
  topicId: 'firebase',
  topicName: 'Firebase',
  category: 'Full Stack',
  description: 'Firebase backend-as-a-service for auth, databases, storage, hosting, and serverless functions.',
  sections: [
    {
      id: 'platform',
      title: 'Platform Overview',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is Firebase?', content: 'Google BaaS offering auth, databases (Firestore/RTDB), storage, hosting, functions, messaging, analytics, and more.' },
        { id: 'q2', title: 'Core products?', content: 'Auth, Firestore, Realtime Database, Cloud Storage, Cloud Functions, Hosting, Cloud Messaging (FCM), Remote Config, Analytics.' },
        { id: 'q3', title: 'Firestore vs Realtime Database?', content: 'Firestore: document/collection model, strong consistency, richer queries, better scaling. RTDB: JSON tree, low latency, limited queries.' },
        { id: 'q4', title: 'Client SDKs?', content: 'Web/JS, iOS, Android, Admin SDKs. Provide auth, database access, storage, messaging. Follow security rules for client-side access.' },
        { id: 'q5', title: 'Pricing?', content: 'Spark (free tier limits), Blaze (pay-as-you-go). Costs driven by document reads/writes/storage/egress. Set budgets/alerts.' },
        { id: 'q6', title: 'Project structure?', content: 'Firebase project ties resources. Use environments (dev/stage/prod) as separate projects. Service accounts per project.' },
        { id: 'q7', title: 'Emulators?', content: 'Local emulator suite for Auth, Firestore, RTDB, Functions, Hosting, Storage, FCM, Pub/Sub. Use for local dev/testing.' },
        { id: 'q8', title: 'Security rules?', content: 'Rules for Firestore/RTDB/Storage to authorize and validate data. Evaluated on every read/write. Should enforce auth and schema constraints.' },
        { id: 'q9', title: 'Admin SDK?', content: 'Server-side privileged access with service account. Bypasses security rules; use only in trusted environments (Cloud Functions, servers).' },
        { id: 'q10', title: 'Multi-tenancy?', content: 'Use separate projects or collections per tenant. Carefully scope rules. Avoid mixing tenant data without filters in rules.' }
      ]
    },
    {
      id: 'auth',
      title: 'Authentication',
      content: '',
      subsections: [
        { id: 'q11', title: 'Auth providers?', content: 'Email/password, phone, Google, Facebook, Apple, GitHub, Microsoft, anonymous, custom tokens. Use Firebase Console to enable.' },
        { id: 'q12', title: 'Email/password flow?', content: 'createUserWithEmailAndPassword, signInWithEmailAndPassword. Email verification optional. Password reset via sendPasswordResetEmail.' },
        { id: 'q13', title: 'Custom claims?', content: 'Set with Admin SDK to add roles (admin/premium). Accessible in ID token; use for authorization in rules/servers.' },
        { id: 'q14', title: 'Session management?', content: 'Client SDK manages ID tokens; refresh tokens rotate. For web, use onAuthStateChanged. For server sessions, use session cookies with Admin SDK.' },
        { id: 'q15', title: 'Security rules with auth?', content: 'Use request.auth.uid to enforce ownership. Validate fields to prevent privilege escalation. Deny by default.' },
        { id: 'q16', title: 'Phone auth?', content: 'Uses reCAPTCHA/recaptcha verifier on web. Verify SMS code to sign in. Handle quotas/abuse protections.' },
        { id: 'q17', title: 'Anonymous auth?', content: 'Allows temp sessions; can be upgraded to permanent accounts linking credentials. Good for trials/guest users.' },
        { id: 'q18', title: 'Auth in SSR?', content: 'Use Admin SDK on server to verify tokens; set cookies for SSR frameworks. Avoid exposing service account keys to clients.' },
        { id: 'q19', title: 'Multi-factor auth?', content: 'Supports MFA (TOTP/SMS) with compatible providers. Configure in console and SDK flows.' },
        { id: 'q20', title: 'Common pitfalls?', content: 'Leaking service account, weak rules, missing email verification, not handling token expiration, poor error handling.' }
      ]
    },
    {
      id: 'firestore',
      title: 'Firestore Data Modeling and Rules',
      content: '',
      subsections: [
        { id: 'q21', title: 'Data model?', content: 'Documents (up to 1MB) grouped into collections/subcollections. Schemaless but structured. Each doc has fields; nested maps/arrays allowed.' },
        { id: 'q22', title: 'Reads/writes billing?', content: 'Billed per document read/write/delete. Query returns count of docs read. Avoid chatty queries; use pagination and cache.' },
        { id: 'q23', title: 'Queries?', content: 'Compound queries require indexes; filters and orderBy must align. Use where, orderBy, limit, startAfter for pagination. No OR without in/array-contains-any.' },
        { id: 'q24', title: 'Indexes?', content: 'Single-field indexes auto. Composite indexes defined as needed; console prompts to create. Monitor index usage to control costs.' },
        { id: 'q25', title: 'Security rules tips?', content: 'Validate ownership: allow read/write: if request.auth.uid == resource.data.userId. Validate types/lengths. Deny by default.' },
        { id: 'q26', title: 'Offline support?', content: 'SDK caches data locally and syncs when online. Beware stale reads and write conflicts; handle listeners accordingly.' },
        { id: 'q27', title: 'Batched writes and transactions?', content: 'Batch writes up to 500 operations; atomic per batch. Transactions read/write atomically; re-run on conflicts.' },
        { id: 'q28', title: 'Data modeling best practices?', content: 'Denormalize for queries; duplicate small fields; avoid deeply nested arrays. Use subcollections for related sets (e.g., users/{id}/posts).' },
        { id: 'q29', title: 'Hotspotting?', content: 'Avoid too many writes to the same doc/collection path. Spread keys, add random suffixes for high-write workloads.' },
        { id: 'q30', title: 'Exports/backups?', content: 'Use gcloud firestore export to GCS. Schedule via Cloud Scheduler + Functions. For small data, use firestore:copy or manual export.' }
      ]
    },
    {
      id: 'functions-hosting',
      title: 'Functions, Hosting, and Storage',
      content: '',
      subsections: [
        { id: 'q31', title: 'Cloud Functions?', content: 'Serverless functions triggered by HTTP, Auth, Firestore, RTDB, Storage, Pub/Sub, Schedules. Node.js runtime. Use Admin SDK inside.' },
        { id: 'q32', title: 'Cold starts?', content: 'First request after idle may be slower. Use min instances or Cloud Run for steady latency. Keep dependencies lean.' },
        { id: 'q33', title: 'HTTP vs callable?', content: 'HTTP functions use standard HTTP request/response. Callable functions integrate with SDK, handle auth automatically, and return structured errors.' },
        { id: 'q34', title: 'Deployment?', content: 'Use firebase deploy (or targeted deploy). Use env config via firebase functions:config:set. Consider multiple projects for envs.' },
        { id: 'q35', title: 'Hosting?', content: 'Static hosting with global CDN/SSL. Supports rewrites to SPAs or functions. Configure in firebase.json (public dir, rewrites, headers).' },
        { id: 'q36', title: 'Cloud Storage?', content: 'Object storage for files. Access via SDK. Secure with Storage rules using request.auth and path-based validation.' },
        { id: 'q37', title: 'File security?', content: 'Validate uploads, limit MIME/size in Storage rules, generate signed URLs for controlled access, scan for malware if needed.' },
        { id: 'q38', title: 'Scheduling?', content: 'Use scheduled functions via Pub/Sub with cron syntax. Great for maintenance, cleanup, notifications.' },
        { id: 'q39', title: 'Env separation?', content: 'Use multiple Firebase projects (dev/stage/prod). Don’t mix credentials. Use different Google Cloud projects or aliases for CLI.' },
        { id: 'q40', title: 'Monitoring?', content: 'Use Firebase console, Cloud Logging/Monitoring. Track function errors, latency, Firestore/RTDB metrics, Storage egress.' }
      ]
    },
    {
      id: 'ops',
      title: 'Operations, Security, and Best Practices',
      content: '',
      subsections: [
        { id: 'q41', title: 'Security practices?', content: 'Write least-privilege rules, validate schema, use custom claims for roles, never expose service account keys to client, restrict API keys in Google Cloud.' },
        { id: 'q42', title: 'Cost control?', content: 'Use Firestore limits, paginate, cache on client, avoid chatty listeners, set budgets/alerts, monitor Cloud Functions invocations/egress.' },
        { id: 'q43', title: 'Data migration?', content: 'Use scripts with Admin SDK, or functions to backfill. For schema changes, write rules to handle old/new fields during transition.' },
        { id: 'q44', title: 'Performance tips?', content: 'Use indexed queries, avoid unbounded listeners, batch writes, keep functions small and region-appropriate, prefer callable for auth-integrated APIs.' },
        { id: 'q45', title: 'Compliance/PII?', content: 'Store minimal PII, encrypt at rest (default) and in transit, restrict exports, use region selection for data residency, log access carefully.' },
        { id: 'q46', title: 'Testing?', content: 'Use emulator suite for integration tests, mock auth/users, assert security rules with unit tests, and run CI against emulators.' },
        { id: 'q47', title: 'Logging and tracing?', content: 'Use console.log in functions (goes to Cloud Logging). For tracing, integrate OpenTelemetry/Cloud Trace where applicable.' },
        { id: 'q48', title: 'Multi-region choices?', content: 'Select Firestore multi-region for durability; RTDB single-region. Choose closest region to users; avoid cross-region latency costs.' },
        { id: 'q49', title: 'Offline and sync?', content: 'Leverage Firestore offline cache; design conflict resolution. For RTDB, handle onDisconnect for presence/cleanup.' },
        { id: 'q50', title: 'Common pitfalls?', content: 'Weak rules, excessive reads, hot documents, storing large blobs in Firestore, not using emulators, deploying secrets in code.' }
      ]
    }
  ]
};
