import { TheoryTopic } from '@/types/theory';

export const vuejsTheory: TheoryTopic = {
  topicId: 'vuejs',
  topicName: 'Vue.js',
  category: 'Full Stack',
  description: 'Vue.js progressive framework for building UIs with reactive data binding and component composition.',
  sections: [
    {
      id: 'core',
      title: 'Core Concepts',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is Vue.js?', content: 'A progressive JavaScript framework for building user interfaces. Focuses on the view layer, supports incremental adoption, and offers a full ecosystem.' },
        { id: 'q2', title: 'Reactivity?', content: 'Vue tracks dependencies via proxies (Vue 3) or getters/setters (Vue 2). When reactive state changes, components re-render efficiently.' },
        { id: 'q3', title: 'Single File Components (SFC)?', content: '.vue files containing template, script, and style sections. Support <script setup> composition API, scoped styles, and tooling via Vite.' },
        { id: 'q4', title: 'Template syntax?', content: 'Interpolation {{ }}, directives like v-bind (:), v-on (@), v-if/v-else, v-for, v-model for two-way binding, v-show for toggling display.' },
        { id: 'q5', title: 'Lifecycle hooks?', content: 'setup (composition), onMounted, onUpdated, onUnmounted, onBeforeUnmount, onErrorCaptured. Options API hooks: created, mounted, updated, destroyed.' },
        { id: 'q6', title: 'Computed vs methods?', content: 'Computed properties are cached based on dependencies; methods run each call. Use computed for derived state; methods for actions.' },
        { id: 'q7', title: 'Watch and watchEffect?', content: 'watch observes specific sources with callbacks; watchEffect runs reactively tracking dependencies automatically. Useful for side effects.' },
        { id: 'q8', title: 'Props and emits?', content: 'Props pass data down; emits defines events up. Validate props (type/default/required). Use defineProps/defineEmits in <script setup>.' },
        { id: 'q9', title: 'Slots?', content: 'Placeholders for child content; named slots and scoped slots for passing data from child to slot content. Enables composition and reuse.' },
        { id: 'q10', title: 'Style scoping?', content: 'Use <style scoped> or CSS modules to scope styles. Scoped styles add attribute selectors to target component DOM only.' }
      ]
    },
    {
      id: 'composition',
      title: 'Composition API and State',
      content: '',
      subsections: [
        { id: 'q11', title: 'Composition API basics?', content: 'Use setup() with reactive(), ref(), computed(), watch(), and lifecycle hooks. Encourages logic reuse via composables.' },
        { id: 'q12', title: 'ref vs reactive?', content: 'ref wraps primitive/object and exposes .value. reactive makes an object deeply reactive. Use toRefs to avoid destructuring loss.' },
        { id: 'q13', title: 'Provide/inject?', content: 'Provide values in ancestor, inject in descendants without prop drilling. Good for global-ish dependencies (themes, services).' },
        { id: 'q14', title: 'Composables?', content: 'Reusable logic functions (useX) returning reactive state/functions. Keep side effects contained; document expected usage.' },
        { id: 'q15', title: 'State management options?', content: 'Small apps: composables + provide/inject. Larger: Pinia (Vuex successor) with typed stores, devtools integration.' },
        { id: 'q16', title: 'Async data handling?', content: 'Use onMounted + async/await or composables wrapping fetch. Suspense for async components. Handle loading/error states explicitly.' },
        { id: 'q17', title: 'Template refs?', content: 'Use ref on elements/components and get via const el = ref(null); onMounted access el.value. Useful for DOM APIs.' },
        { id: 'q18', title: 'Error handling?', content: 'onErrorCaptured hook to catch child errors; return false to stop propagation. Provide fallback UI.' },
        { id: 'q19', title: 'TypeScript with Vue?', content: 'Use defineComponent or <script setup lang="ts">. Volar for IDE support. Define props/emits with types. Pinia works well with TS.' },
        { id: 'q20', title: 'SSR and hydration?', content: 'Use Nuxt or Vite SSR for server rendering. Hydration reuses server DOM. Watch for mismatch warnings if template differs on client.' }
      ]
    },
    {
      id: 'routing-tooling',
      title: 'Routing and Tooling',
      content: '',
      subsections: [
        { id: 'q21', title: 'Vue Router basics?', content: 'Create router with createRouter/createWebHistory. Define routes with path/component. Use <RouterView> and <RouterLink>. Params via useRoute/useRouter.' },
        { id: 'q22', title: 'Navigation guards?', content: 'Global/per-route guards to check auth, fetch data, or redirect. beforeEach/afterEach and in-component guards.' },
        { id: 'q23', title: 'Lazy loading?', content: 'Use dynamic import in route component: component: () => import("./views/Page.vue"). Reduces initial bundle size.' },
        { id: 'q24', title: 'State with Pinia?', content: 'Define stores with defineStore. Supports devtools, hot reload, plugins. Mutations via direct assignment; actions for logic. Works with SSR.' },
        { id: 'q25', title: 'Build tooling?', content: 'Use Vite for fast dev/build. Vue CLI legacy with webpack. Configure aliases, env vars (import.meta.env), and CSS preprocessors.' },
        { id: 'q26', title: 'Testing?', content: 'Unit test with Vitest/Jest + Vue Test Utils. E2E with Cypress/Playwright. Mock router/store as needed.' },
        { id: 'q27', title: 'Devtools?', content: 'Vue Devtools inspect component tree, state, events, Pinia stores. Helpful for debugging reactivity and performance.' },
        { id: 'q28', title: 'Env variables?', content: '.env files with VITE_ prefix for client. Access via import.meta.env. Avoid secrets in client bundles.' },
        { id: 'q29', title: 'CSS and UI libs?', content: 'Use scoped styles, CSS vars, Tailwind, or libraries like Vuetify/Naive UI/Element Plus. Tree-shake unused components.' },
        { id: 'q30', title: 'Common routing pitfalls?', content: 'Forgetting to await lazy load errors, not handling 404, mixing hash/history modes incorrectly, not cleaning up guards in tests.' }
      ]
    },
    {
      id: 'performance',
      title: 'Performance and Patterns',
      content: '',
      subsections: [
        { id: 'q31', title: 'Reactivity caveats?', content: 'In Vue 2, limitations with array/object mutation (set/splice needed). Vue 3 proxies solve most. Avoid replacing reactive objects incorrectly.' },
        { id: 'q32', title: 'Computed caching?', content: 'Computed caches until dependencies change. Avoid heavy computed chains; consider watchEffect for side effects instead.' },
        { id: 'q33', title: 'v-for performance?', content: 'Always provide :key stable IDs. Avoid v-if and v-for on same element; separate to prevent render thrashing.' },
        { id: 'q34', title: 'Code splitting?', content: 'Use dynamic imports and async components for heavy views. Keep vendor bundles manageable. Analyze with rollup/webpack stats.' },
        { id: 'q35', title: 'Debouncing and throttling?', content: 'Use debounce for search inputs, throttle for scroll events. Reduces unnecessary renders and network calls.' },
        { id: 'q36', title: 'KeepAlive?', content: 'Wrap router-view or components in <KeepAlive> to cache component state between navigations. Use include/exclude props to control.' },
        { id: 'q37', title: 'Suspense?', content: 'Handle async components with fallback UI. Great for data fetching in setup with async/await. Works with SSR.' },
        { id: 'q38', title: 'Accessibility?', content: 'Use semantic HTML, aria-* attributes, focus management, and proper keyboard interactions. Avoid custom controls without a11y support.' },
        { id: 'q39', title: 'Internationalization?', content: 'Use vue-i18n for translations, pluralization, locale switching. Lazy-load locale messages to cut bundle size.' },
        { id: 'q40', title: 'Common performance pitfalls?', content: 'Large reactive objects, unnecessary watchers, unkeyed lists, excessive global event listeners, not using async components for heavy views.' }
      ]
    },
    {
      id: 'security-best',
      title: 'Security and Best Practices',
      content: '',
      subsections: [
        { id: 'q41', title: 'XSS protection?', content: 'Vue escapes interpolations by default. Avoid v-html with untrusted content; sanitize if needed. Don’t interpolate raw user HTML.' },
        { id: 'q42', title: 'Auth patterns?', content: 'Use router guards for protected routes, store tokens securely (HttpOnly cookies preferred), refresh tokens server-side, and handle logout flows.' },
        { id: 'q43', title: 'CSRF considerations?', content: 'If using cookies, implement server-side CSRF tokens. For token auth, protect refresh endpoints and use sameSite/lax cookies when possible.' },
        { id: 'q44', title: 'API error handling?', content: 'Centralize HTTP client with interceptors, show user-friendly errors, handle retries/backoff, and log unexpected failures.' },
        { id: 'q45', title: 'Form security?', content: 'Validate on client and server. Prevent HTML injection, rate limit sensitive actions, and strip dangerous tags if accepting rich text.' },
        { id: 'q46', title: 'TypeScript usage?', content: 'Prefer <script setup lang="ts">, type props/emits, and composables. Volar provides type checking and template inference.' },
        { id: 'q47', title: 'Testing best practices?', content: 'Test components with VTU, mock router/store, test composables separately, use Cypress/Playwright for flows. Keep tests deterministic.' },
        { id: 'q48', title: 'State organization?', content: 'Keep state close to use, avoid global singletons unnecessarily, use Pinia for shared state, and derive state via computed where possible.' },
        { id: 'q49', title: 'Deployment considerations?', content: 'Build with Vite/webpack, serve static assets over CDN, set proper cache headers, handle env via VITE_ variables at build time.' },
        { id: 'q50', title: 'Common pitfalls?', content: 'Using v-html unsafely, not keying lists, mixing Options/Composition inconsistently, massive global stores, leaking subscriptions on manual watch.' }
      ]
    }
  ]
};
