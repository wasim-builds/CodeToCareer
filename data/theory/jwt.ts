import { TheoryTopic } from '@/types/theory';

export const jwtTheory: TheoryTopic = {
  topicId: 'jwt',
  topicName: 'JWT Auth',
  category: 'Full Stack',
  description: 'JSON Web Token authentication and authorization',
  sections: [
    {
      id: 'basics',
      title: 'JWT Basics',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is JWT?', content: 'JWT (JSON Web Token) is compact, URL-safe token format. Self-contained. Contains claims. Stateless authentication. Three parts: header, payload, signature. Base64URL encoded. Used for: authentication, authorization, information exchange.' },
        { id: 'q2', title: 'What is JWT structure?', content: 'JWT has three parts separated by dots: header.payload.signature. Header: algorithm and type. Payload: claims (data). Signature: verifies token. Format: xxxxx.yyyyy.zzzzz. Each part Base64URL encoded.' },
        { id: 'q3', title: 'What is JWT header?', content: 'Header contains token metadata. Fields: typ (type, "JWT"), alg (algorithm, HS256, RS256, etc.). Specifies signing algorithm. Base64URL encoded. First part of token.' },
        { id: 'q4', title: 'What is JWT payload?', content: 'Payload contains claims (statements about entity). Types: registered (iss, exp, sub, aud), public (custom names), private (agreed upon). Can contain: user ID, roles, permissions, expiration. Second part of token.' },
        { id: 'q5', title: 'What is JWT signature?', content: 'Signature verifies token integrity. Created: base64UrlEncode(header) + "." + base64UrlEncode(payload), then sign with secret/key using algorithm. Prevents tampering. Verifies authenticity. Third part of token.' },
        { id: 'q6', title: 'What are registered claims?', content: 'Registered claims are standard claims. iss (issuer), exp (expiration), sub (subject), aud (audience), iat (issued at), nbf (not before), jti (JWT ID). Optional but recommended. Standardized names. Common claims.' },
        { id: 'q7', title: 'What is token expiration?', content: 'Token expiration limits token lifetime. exp claim: Unix timestamp. Token invalid after expiration. Reduces risk if stolen. Refresh tokens for new access tokens. Security best practice. Common: 15 minutes to 1 hour.' },
        { id: 'q8', title: 'What is token signing?', content: 'Token signing creates signature. Algorithms: HS256 (HMAC with SHA-256, symmetric), RS256 (RSA with SHA-256, asymmetric). Secret/key used. Verifies on each request. Prevents modification. Security critical.' },
        { id: 'q9', title: 'What is symmetric vs asymmetric?', content: 'Symmetric (HS256): same secret for sign/verify, simpler, secret must be shared securely. Asymmetric (RS256): public/private key pair, more secure, public key can be shared. Choose based on security needs.' },
        { id: 'q10', title: 'What is Base64URL?', content: 'Base64URL is URL-safe Base64 encoding. Replaces: + with -, / with _, removes padding =. Safe for URLs. Used in JWT encoding. Different from standard Base64. URL-friendly format.' }
      ]
    },
    {
      id: 'authentication',
      title: 'Authentication Flow',
      content: '',
      subsections: [
        { id: 'q11', title: 'What is JWT authentication flow?', content: 'Flow: 1) User logs in with credentials, 2) Server validates, 3) Server creates JWT, 4) Server returns JWT, 5) Client stores JWT, 6) Client sends JWT in requests, 7) Server validates JWT. Stateless process.' },
        { id: 'q12', title: 'How to store JWT?', content: 'Storage options: localStorage (XSS risk), sessionStorage (tab-scoped), httpOnly cookies (XSS safe, CSRF risk), memory (most secure, lost on refresh). Choose based on: security needs, use case. httpOnly cookies recommended.' },
        { id: 'q13', title: 'What is Authorization header?', content: 'Authorization header sends JWT. Format: Authorization: Bearer <token>. Standard HTTP header. Server extracts token. Common pattern. Works with any HTTP client. Standard practice.' },
        { id: 'q14', title: 'What is token validation?', content: 'Token validation checks: signature (valid), expiration (not expired), issuer (correct), audience (correct), structure (valid format). Validate on each request. Reject invalid tokens. Security critical.' },
        { id: 'q15', title: 'What is refresh token?', content: 'Refresh token obtains new access tokens. Longer-lived than access token. Stored securely. Exchanged for new access token. Access token short-lived. Refresh token long-lived. Reduces exposure risk.' },
        { id: 'q16', title: 'What is access token vs refresh token?', content: 'Access token: short-lived (minutes), used for API calls, contains user info. Refresh token: long-lived (days/weeks), used to get new access tokens, stored securely. Two-token system. Security best practice.' },
        { id: 'q17', title: 'What is token revocation?', content: 'Token revocation invalidates tokens. Challenge with stateless JWTs. Solutions: token blacklist, short expiration, refresh token rotation. Logout requires revocation. Stateless limitation. Consider trade-offs.' },
        { id: 'q18', title: 'What is token refresh flow?', content: 'Refresh flow: 1) Access token expires, 2) Client sends refresh token, 3) Server validates refresh token, 4) Server issues new access token, 5) Optionally new refresh token. Seamless user experience.' },
        { id: 'q19', title: 'What is silent refresh?', content: 'Silent refresh refreshes token before expiration. Automatic process. User doesn\'t notice. Prevents interruption. Implement in client. Background operation. Better UX.' },
        { id: 'q20', title: 'What is token rotation?', content: 'Token rotation issues new refresh token on use. Old refresh token invalidated. Reduces risk if stolen. One-time use refresh tokens. Security enhancement. Prevents token reuse.' }
      ]
    },
    {
      id: 'security',
      title: 'Security',
      content: '',
      subsections: [
        { id: 'q21', title: 'What are JWT security risks?', content: 'Security risks: XSS (if in localStorage), CSRF (if in cookies), token theft, replay attacks, weak secrets, algorithm confusion. Mitigate with: httpOnly cookies, CSRF tokens, short expiration, strong secrets, algorithm specification.' },
        { id: 'q22', title: 'What is XSS attack?', content: 'XSS (Cross-Site Scripting) injects malicious scripts. Can steal tokens from localStorage. Prevention: httpOnly cookies, input sanitization, CSP headers. Store tokens securely. Critical security issue.' },
        { id: 'q23', title: 'What is CSRF attack?', content: 'CSRF (Cross-Site Request Forgery) makes unauthorized requests. Risk with cookie-based tokens. Prevention: SameSite cookies, CSRF tokens, double-submit cookies. Protect against unauthorized actions.' },
        { id: 'q24', title: 'What is algorithm confusion?', content: 'Algorithm confusion: attacker changes algorithm to "none". Server accepts unsigned token. Prevention: always specify algorithm in verification. Never accept "none". Critical security issue.' },
        { id: 'q25', title: 'What is secret management?', content: 'Secret management: store secrets securely, use environment variables, rotate regularly, different for dev/prod, never commit to code, use key management services. Critical for security. Protect secrets.' },
        { id: 'q26', title: 'What is token size?', content: 'Token size: JWTs can be large. Header + payload + signature. Large payloads increase size. Consider: cookie size limits (4KB), header size limits. Keep payload minimal. Balance: data vs size.' },
        { id: 'q27', title: 'What is token encryption?', content: 'Token encryption: JWT can be encrypted (JWE). Encrypts payload. Additional security layer. Use when: sensitive data in token. More complex. JWS (signed) vs JWE (encrypted).' },
        { id: 'q28', title: 'What is token blacklist?', content: 'Token blacklist stores invalidated tokens. Check on each request. Enables logout. Challenge: stateless nature. Solutions: Redis, database, in-memory cache. Trade-off: state vs revocation.' },
        { id: 'q29', title: 'What is secure token storage?', content: 'Secure storage: httpOnly cookies (best for web), secure flag, SameSite attribute, HTTPS only. Avoid: localStorage (XSS), query parameters (logs), visible storage. Choose based on security needs.' },
        { id: 'q30', title: 'What is token best practices?', content: 'Best practices: short expiration, use refresh tokens, httpOnly cookies, HTTPS, strong secrets, validate properly, don\'t store sensitive data, rotate secrets, monitor usage, handle errors, use appropriate algorithms.' }
      ]
    },
    {
      id: 'implementation',
      title: 'Implementation',
      content: '',
      subsections: [
        { id: 'q31', title: 'What libraries support JWT?', content: 'JWT libraries: jsonwebtoken (Node.js), PyJWT (Python), java-jwt (Java), jose (JavaScript), jwt-go (Go). Handle: creation, signing, verification, decoding. Use established libraries. Don\'t implement yourself.' },
        { id: 'q32', title: 'How to create JWT?', content: 'Create JWT: specify payload, choose algorithm, sign with secret/key. Library handles encoding. Returns token string. Include: user ID, expiration, other claims. Store securely. Return to client.' },
        { id: 'q33', title: 'How to verify JWT?', content: 'Verify JWT: extract token, decode header, verify signature, check expiration, validate claims. Library handles verification. Reject if invalid. Critical security step. Do on every request.' },
        { id: 'q34', title: 'What is middleware for JWT?', content: 'JWT middleware: extracts token from request, verifies token, adds user info to request, handles errors. Reusable across routes. Protects endpoints. Common pattern. Framework-specific implementations.' },
        { id: 'q35', title: 'What is token decoding?', content: 'Token decoding reads token without verification. Shows payload content. Don\'t trust decoded data without verification. Useful for: debugging, inspection. Always verify before trusting. Decode ≠ verify.' },
        { id: 'q36', title: 'What is error handling?', content: 'Error handling: invalid token (401 Unauthorized), expired token (401), missing token (401), malformed token (401). Clear error messages. Don\'t expose internals. Proper HTTP status codes.' },
        { id: 'q37', title: 'What is role-based access?', content: 'Role-based access: include roles in token payload. Check roles in middleware. Grant/deny access. Fine-grained permissions. Common pattern. Extend JWT with claims.' },
        { id: 'q38', title: 'What is multi-tenant JWT?', content: 'Multi-tenant: include tenant ID in token. Isolate data by tenant. Check tenant in middleware. Prevent cross-tenant access. Important for SaaS. Security consideration.' },
        { id: 'q39', title: 'What is JWT in microservices?', content: 'JWT in microservices: stateless, passed between services, verifiable without shared state, enables service-to-service auth. Each service verifies. No session store needed. Good for distributed systems.' },
        { id: 'q40', title: 'What is token claims strategy?', content: 'Claims strategy: balance data vs size, include: user ID, roles, expiration, avoid: sensitive data, large objects. Keep minimal. Can query database for additional data. Design carefully.' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced Topics',
      content: '',
      subsections: [
        { id: 'q41', title: 'What is JWT vs session?', content: 'JWT: stateless, scalable, works across domains, can\'t revoke easily, larger size. Session: stateful, requires storage, domain-specific, easy revocation, smaller. Choose based on: scale, revocation needs, architecture.' },
        { id: 'q42', title: 'What is OAuth 2.0 with JWT?', content: 'OAuth 2.0 can use JWT for access tokens. JWT as access token format. Self-contained tokens. OAuth flow with JWT tokens. Industry standard. Common combination.' },
        { id: 'q43', title: 'What is OpenID Connect?', content: 'OpenID Connect (OIDC) extends OAuth 2.0. Uses JWT (ID token). Authentication layer. Standard claims. Identity information. Industry standard. Use for: authentication, user info.' },
        { id: 'q44', title: 'What is token introspection?', content: 'Token introspection: query token validity from authorization server. OAuth 2.0 extension. Returns token metadata. Enables revocation checking. Requires network call. Trade-off: state vs performance.' },
        { id: 'q45', title: 'What is JWT performance?', content: 'JWT performance: fast verification (cryptographic operation), no database lookup, stateless, larger than session ID, CPU cost for verification. Generally fast. Consider: verification cost, token size.' },
        { id: 'q46', title: 'What is distributed JWT?', content: 'Distributed JWT: works across services, no shared state, each service verifies independently, enables microservices, stateless architecture. Good for: distributed systems, scalability.' },
        { id: 'q47', title: 'What is JWT debugging?', content: 'JWT debugging: decode token (jwt.io), check expiration, verify signature, inspect claims, check algorithm, validate structure. Use tools: jwt.io, libraries, logs. Common issues: expiration, signature, format.' },
        { id: 'q48', title: 'What is token lifecycle?', content: 'Token lifecycle: creation (login), usage (API calls), refresh (before expiration), revocation (logout), expiration (automatic). Manage each stage. Handle transitions. User experience important.' },
        { id: 'q49', title: 'What is JWT limitations?', content: 'JWT limitations: can\'t revoke easily, size limits, payload visible (if not encrypted), stateless trade-offs, algorithm security. Understand limitations. Choose appropriately. Not perfect solution.' },
        { id: 'q50', title: 'What are JWT best practices?', content: 'Best practices: short expiration, refresh tokens, httpOnly cookies, HTTPS, strong secrets, validate properly, minimal payload, appropriate algorithms, error handling, monitor usage, rotate secrets, secure storage, don\'t store sensitive data, use established libraries.' }
      ]
    }
  ]
};
