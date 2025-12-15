import { TheoryTopic } from '@/types/theory';

export const nextjsTheory: TheoryTopic = {
  topicId: 'nextjs',
  topicName: 'Next.js',
  category: 'Full Stack',
  description: 'Next.js React framework for hybrid static/SSR apps with file-based routing.',
  sections: [
    {
      id: 'basics',
      title: 'Basics and Routing',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is Next.js?', content: 'A React framework that provides file-based routing, server-side rendering (SSR), static site generation (SSG), API routes, and optimizations like image/font handling.' },
        { id: 'q2', title: 'File-based routing?', content: 'Pages in app/ or pages/ become routes. Nested folders create nested routes. Dynamic routes use [param], catch-all with [...slug]. Layouts wrap segments.' },
        { id: 'q3', title: 'App Router vs Pages Router?', content: 'App Router (app/) uses React Server Components, nested layouts, Server Actions. Pages Router (pages/) uses getStaticProps/getServerSideProps. App Router is modern default.' },
        { id: 'q4', title: 'Server Components?', content: 'Default in app/. Rendered on server, no client bundle. Great for data fetching and heavy logic. Use "use client" to opt into Client Components for interactivity.' },
        { id: 'q5', title: 'Layouts and templates?', content: 'layout.tsx wraps routes in a segment; shared UI (header/nav). template.tsx re-renders on navigation; layout persists. Root layout defines HTML shell.' },
        { id: 'q6', title: 'Dynamic routes?', content: '[id]/page.tsx gets params.id. Catch-all [...slug] handles variable depth. Optional catch-all [[...slug]].' },
        { id: 'q7', title: 'Link vs a?', content: 'Use Link from next/link for client-side navigation and prefetch. Plain <a> triggers full reload. In app/, Link is dynamic; can use scroll/prefetch props.' },
        { id: 'q8', title: 'Static vs dynamic rendering?', content: 'Static (SSG) renders at build or ISR; dynamic renders per request. In app/, caching hints (fetch cache: "force-cache"/"no-store"), dynamic = "force-dynamic".' },
        { id: 'q9', title: 'What is ISR?', content: 'Incremental Static Regeneration. Rebuilds a static page on-demand after revalidate time. In app/, use fetch with next: { revalidate }. In pages/, getStaticProps revalidate.' },
        { id: 'q10', title: 'Metadata handling?', content: 'Use metadata export or generateMetadata in app/. Supports title, description, OpenGraph, Twitter, icons, viewport. Automatic metadata extraction for static routes.' }
      ]
    },
    {
      id: 'data-fetch',
      title: 'Data Fetching and Caching',
      content: '',
      subsections: [
        { id: 'q11', title: 'Data fetching in app router?', content: 'Use async Server Components with fetch; caching controlled via fetch options: cache, next.revalidate, revalidatePath. Can use server actions with form actions.' },
        { id: 'q12', title: 'Server Actions?', content: 'Async functions marked with "use server" that can be passed to forms or called from client via serialized reference. Run on server, avoid API boilerplate.' },
        { id: 'q13', title: 'Client data fetching?', content: 'Use SWR/React Query in Client Components. Or fetch in client when user-specific data needed. Client Components marked with "use client".' },
        { id: 'q14', title: 'Cache invalidation?', content: 'Use revalidatePath or revalidateTag (Next 13.4+) to refresh cached routes. Tags let fine-grained invalidation across pages using the same tag.' },
        { id: 'q15', title: 'Streaming and Suspense?', content: 'App Router supports streaming Server Components with Suspense boundaries. Allows partial rendering and progressive loading.' },
        { id: 'q16', title: 'Parallel and intercepting routes?', content: 'Parallel routes render multiple slots in one layout (e.g., @modal). Intercepting (.., .) let showing different content for a segment while keeping layout state.' },
        { id: 'q17', title: 'API routes vs Route Handlers?', content: 'Pages router uses pages/api. App Router uses route.ts in folders. Supports GET/POST/etc, Request/Response Web API. Great for lightweight backend.' },
        { id: 'q18', title: 'Edge vs Node runtimes?', content: 'Route handlers can run in Edge runtime for low latency; limited APIs. Default Node runtime supports more packages. Specify export const runtime = "edge".' },
        { id: 'q19', title: 'Env variables?', content: 'NEXT_PUBLIC_ prefix exposes to client. Others server-only. In app router, server components can read process.env directly. Use .env.local for secrets.' },
        { id: 'q20', title: 'Incremental adoption?', content: 'App and pages routers can coexist. Migrate gradually by adding app/ while keeping pages/ working. Routes resolved with priority: app/ then pages/.' }
      ]
    },
    {
      id: 'styling-assets',
      title: 'Styling, Assets, and Optimizations',
      content: '',
      subsections: [
        { id: 'q21', title: 'Styling options?', content: 'CSS Modules, global CSS, Tailwind, styled-components, Emotion. App Router supports CSS-in-JS with streaming. Avoid global leaks; prefer modules.' },
        { id: 'q22', title: 'next/image?', content: 'Image optimization with responsive sizes, lazy-loading, formats (AVIF/WebP). Requires domains config for remote images. In app/, use <Image> with fill/priority props.' },
        { id: 'q23', title: 'next/font?', content: 'Built-in font optimization. Import Google/local fonts in layout. Eliminates FOUT/FOIT via automatic preloading and CSS generation.' },
        { id: 'q24', title: 'Static assets?', content: 'public/ folder serves at root: /logo.png. Use for static files, robots.txt, sitemap, favicon. No import needed.' },
        { id: 'q25', title: 'Middleware?', content: 'middleware.ts runs before requests, can rewrite/redirect/authenticate. Uses Edge runtime. Returns NextResponse. Good for A/B, locale detection, auth guards.' },
        { id: 'q26', title: 'Headers and revalidation?', content: 'Route handlers/pages can set Cache-Control. In app/, fetch next.revalidate sets ISR behavior. Static files immutable by default (hashed).'},
        { id: 'q27', title: 'Bundling and tree-shaking?', content: 'Next uses SWC for transpile/minify. App Router with RSC reduces client bundle by keeping logic server-side. Avoid unnecessary "use client".' },
        { id: 'q28', title: 'Internationalization?', content: 'Built-in i18n routing in next.config.js (pages). For app/, use middleware and locale segments. Libraries: next-intl, next-i18next for translations.' },
        { id: 'q29', title: 'Image/CDN deployment?', content: 'On Vercel, Image Optimization uses Vercel infra. Else configure loader or use custom domains. Set next.config images.loader/path if self-hosting.' },
        { id: 'q30', title: 'Performance tips?', content: 'Keep components server-side when possible, reduce client JS, use dynamic import for heavy client code, enable ISR, use caching headers, measure with Lighthouse/Next Analytics.' }
      ]
    },
    {
      id: 'auth-forms',
      title: 'Auth, Forms, and APIs',
      content: '',
      subsections: [
        { id: 'q31', title: 'Handling auth?', content: 'Use middleware for protected routes, JWT/cookies for sessions. NextAuth.js for providers; app router supports server-side session via getServerSession.' },
        { id: 'q32', title: 'Forms in App Router?', content: 'Use server actions as form actions for mutation without client handlers. For client forms, handle submit in Client Components or use libraries like React Hook Form.' },
        { id: 'q33', title: 'API route handlers?', content: 'app/api/foo/route.ts exports HTTP methods (GET, POST...). Use Request/Response Web APIs. Validate input, return JSON, set headers.' },
        { id: 'q34', title: 'Error handling?', content: 'error.tsx for segment-level errors; global error boundary. not-found.tsx for 404. Route handlers use try/catch and return Response with status.' },
        { id: 'q35', title: 'Redirects and rewrites?', content: 'Use redirect() in server components/actions. Rewrites in middleware or next.config. Permanent/temporary redirects configure in next.config.' },
        { id: 'q36', title: 'CORS?', content: 'Set headers in route handlers or middleware. On Vercel, domains same-site; for cross-site API, configure Access-Control-Allow-Origin properly.' },
        { id: 'q37', title: 'File uploads?', content: 'Use route handlers with formidable/busboy, or edge-compatible alternatives. For app router, consider UploadThing, S3 direct uploads, or client presigned URLs.' },
        { id: 'q38', title: 'CSR pages?', content: 'In app router, mark page as client ("use client") and fetch data client-side if needed (user-specific or highly interactive dashboards).' },
        { id: 'q39', title: 'Middleware auth guard?', content: 'Check cookies/session in middleware.ts; redirect to login if unauthenticated. Keep middleware light for performance.' },
        { id: 'q40', title: 'Rate limiting?', content: 'Implement in route handlers using in-memory stores, Redis, or edge key-value. Set headers (Retry-After). Keep stateless when possible.' }
      ]
    },
    {
      id: 'deployment',
      title: 'Deployment and Testing',
      content: '',
      subsections: [
        { id: 'q41', title: 'Deploy targets?', content: 'Vercel (first-class), self-host Node server, Docker, platforms like Fly/Render. Static export for pure SSG (limited App Router support).' },
        { id: 'q42', title: 'Build output?', content: '.next/ contains server, client, and prerendered assets. next build then next start. For app router, server output uses bundled handlers.' },
        { id: 'q43', title: 'Environment configs?', content: '.env.local for local secrets, .env.production for prod. NEXT_PUBLIC_ for client. Use process.env in server components.' },
        { id: 'q44', title: 'Testing?', content: 'Use Jest/RTL for unit, Playwright/Cypress for e2e. Mock next/navigation, next/router (pages). For RSC, test server logic separately.' },
        { id: 'q45', title: 'Monitoring?', content: 'Use Vercel Analytics, OpenTelemetry instrumentation, or third-party APM (Datadog, New Relic) via custom server/edge handlers.' },
        { id: 'q46', title: 'Security best practices?', content: 'Use HTTPS, secure cookies (httpOnly, sameSite), validate input in APIs, sanitize HTML, set CSP/headers via next.config or middleware.' },
        { id: 'q47', title: 'Incremental migration from CRA?', content: 'Move pages into app/pages, adapt routing, replace CRA features with Next equivalents (Image/Font). Gradually convert to server components where possible.' },
        { id: 'q48', title: 'ESLint/TypeScript setup?', content: 'Use next lint, built-in config. tsconfig with paths. Consider absolute imports via baseUrl/paths. Keep strict true for type safety.' },
        { id: 'q49', title: 'Common pitfalls?', content: 'Overusing "use client", fetching in client unnecessarily, missing revalidate tags, forgetting dynamic = "force-dynamic" for request-bound data.' },
        { id: 'q50', title: 'Sitemaps and robots?', content: 'Add app/robots.ts and app/sitemap.ts for dynamic generation. In pages router, static files in public/robots.txt sitemap.xml.' }
      ]
    }
  ]
};
