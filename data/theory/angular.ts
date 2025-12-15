import { TheoryTopic } from '@/types/theory';

export const angularTheory: TheoryTopic = {
  topicId: 'angular',
  topicName: 'Angular',
  category: 'Full Stack',
  description: 'Angular framework for building SPAs with TypeScript, RxJS, and component-driven architecture.',
  sections: [
    {
      id: 'fundamentals',
      title: 'Fundamentals and Architecture',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is Angular?', content: 'A TypeScript-based front-end framework by Google for building single-page applications with strong tooling and opinionated patterns.' },
        { id: 'q2', title: 'Key building blocks?', content: 'Modules, components, templates, services, dependency injection, directives, pipes, routing, RxJS for async streams.' },
        { id: 'q3', title: 'Angular CLI?', content: 'ng new/build/serve/test/generate/lint. Provides scaffolding, webpack config, dev server, testing setup. Central to workflow.' },
        { id: 'q4', title: 'Modules?', content: 'NgModules group components/services and declare imports/exports. AppModule bootstraps root component. Feature modules for domains.' },
        { id: 'q5', title: 'Components?', content: '@Component with template, styles, selector. Encapsulates UI + logic. Uses change detection to update view from state.' },
        { id: 'q6', title: 'Templates and bindings?', content: 'Interpolation {{ }}, property binding [prop], event binding (event), two-way binding [(ngModel)], structural directives (*ngIf/*ngFor).' },
        { id: 'q7', title: 'Dependency Injection?', content: 'Hierarchical DI provides services. @Injectable providedIn root or module. Scopes services per module/component tree.' },
        { id: 'q8', title: 'Change detection?', content: 'Default strategy checks component tree; OnPush checks on input changes/observable emissions. Optimize with immutable data and async pipe.' },
        { id: 'q9', title: 'Pipes?', content: 'Transform data in templates (date, currency). Custom pipes implement PipeTransform. Pure pipes cached; impure run each change detection.' },
        { id: 'q10', title: 'Directives?', content: 'Attribute directives change appearance/behavior (ngClass). Structural directives alter DOM (ngIf/ngFor/ngSwitch). Custom directives via @Directive.' }
      ]
    },
    {
      id: 'routing',
      title: 'Routing and Navigation',
      content: '',
      subsections: [
        { id: 'q11', title: 'Router basics?', content: 'Define routes array with path/component, import RouterModule.forRoot/forChild. RouterOutlet renders active component. RouterLink for navigation.' },
        { id: 'q12', title: 'Route parameters?', content: 'Use :id in path. Access via ActivatedRoute paramMap/snapshot. For query params, use queryParamMap.' },
        { id: 'q13', title: 'Guards?', content: 'canActivate, canActivateChild, canDeactivate, canLoad, resolve. Implement to control access, preload data, handle unsaved changes.' },
        { id: 'q14', title: 'Lazy loading?', content: 'Load feature modules on demand with loadChildren and dynamic imports. Reduces initial bundle size.' },
        { id: 'q15', title: 'Preloading?', content: 'PreloadAllModules or custom strategies to load lazily in background. Balance startup vs navigation speed.' },
        { id: 'q16', title: 'Nested routes?', content: 'Children routes for nested views. Multiple router outlets for auxiliary routes. Use named outlets for side panels/modals.' },
        { id: 'q17', title: 'Navigation extras?', content: 'Preserve query params, fragment, replaceUrl, state for navigation extras. Scroll position restoration settings in RouterModule.' },
        { id: 'q18', title: 'Route data and resolve?', content: 'data property for static metadata. Resolve guards fetch data before activation; convenient for SEO/critical content.' },
        { id: 'q19', title: '404 handling?', content: '** wildcard route last. Redirect or show not-found component. Ensure ordering to avoid unexpected matches.' },
        { id: 'q20', title: 'Common routing pitfalls?', content: 'Incorrect module imports, missing RouterModule in feature modules, guard return types wrong, not unsubscribing on manual subscriptions.' }
      ]
    },
    {
      id: 'forms-http',
      title: 'Forms and HTTP',
      content: '',
      subsections: [
        { id: 'q21', title: 'Template-driven vs reactive forms?', content: 'Template-driven uses ngModel and directives; good for simple forms. Reactive uses FormControl/Group with explicit model, better for complex validation.' },
        { id: 'q22', title: 'Reactive forms setup?', content: 'Import ReactiveFormsModule. Build forms with FormBuilder. Access controls, set validators, listen to valueChanges/statusChanges.' },
        { id: 'q23', title: 'Validation?', content: 'Built-in validators (required, minLength). Custom validators as functions or directives. Async validators for server checks. Show errors via control states.' },
        { id: 'q24', title: 'HTTPClient?', content: 'HttpClient returns Observables. Supports interceptors, typed responses, params, headers. Handles JSON by default.' },
        { id: 'q25', title: 'Interceptors?', content: 'Modify requests/responses globally (auth tokens, logging, caching, error handling). Provide multi: true.' },
        { id: 'q26', title: 'Error handling?', content: 'Use catchError in RxJS, global error handler, or interceptors. Provide user-friendly messages and retry logic when appropriate.' },
        { id: 'q27', title: 'File uploads?', content: 'Use FormData with HttpClient. Track progress via reportProgress/observe events. Set proper headers (let browser set multipart boundary).' },
        { id: 'q28', title: 'Observables vs Promises?', content: 'Observables are lazy, cancellable, support streams. Use async pipe to auto-subscribe/unsubscribe in templates.' },
        { id: 'q29', title: 'State management options?', content: 'Use RxJS services with Subjects/BehaviorSubjects, or NgRx/Akita for larger apps. Keep state in services, use OnPush + async pipe.' },
        { id: 'q30', title: 'Security for HTTP?', content: 'Use HTTPS, sanitize inputs, handle JWT securely, set HttpOnly cookies when possible. Avoid XSS by trusting Angular template sanitization.' }
      ]
    },
    {
      id: 'rxjs',
      title: 'RxJS and Performance',
      content: '',
      subsections: [
        { id: 'q31', title: 'Why RxJS in Angular?', content: 'Angular APIs use Observables. RxJS provides operators for async streams, composition, and cancellation, fitting Angular change detection.' },
        { id: 'q32', title: 'Common operators?', content: 'map, switchMap, mergeMap, concatMap, exhaustMap, filter, tap, catchError, debounceTime, takeUntil, shareReplay.' },
        { id: 'q33', title: 'Choosing flattening operator?', content: 'switchMap cancels previous, mergeMap concurrent, concatMap serial, exhaustMap ignores while active. Choose based on UX/side effects.' },
        { id: 'q34', title: 'Memory leaks?', content: 'Unsubscribe from manual subscriptions (takeUntil/async pipe). Avoid subscribing in templates without async pipe.' },
        { id: 'q35', title: 'Change detection optimization?', content: 'Use OnPush, immutable data, async pipe, trackBy on ngFor, avoid heavy work in templates. Lazy-load modules.' },
        { id: 'q36', title: 'CDK and Material?', content: 'CDK provides a11y, overlays, drag-drop, scrolling. Angular Material offers UI components with themes; import modules per need.' },
        { id: 'q37', title: 'SSR and hydration?', content: 'Angular Universal for server-side rendering. Improves SEO and FCP. Hydration reuses server DOM to reduce work on client.' },
        { id: 'q38', title: 'i18n?', content: 'Built-in i18n with extraction and locale-specific builds. Or use ngx-translate for runtime translations. Manage pluralization/rtl carefully.' },
        { id: 'q39', title: 'Testing?', content: 'Jasmine/Karma default. TestBed for components, HttpTestingController for HTTP. Cypress/Playwright for e2e. Jest often preferred for speed.' },
        { id: 'q40', title: 'Linting/build?', content: 'Use ESLint configs, strict templates, strict mode in tsconfig. Optimize builds with differential loading, budgets, lazy chunks.' }
      ]
    },
    {
      id: 'security',
      title: 'Security and Best Practices',
      content: '',
      subsections: [
        { id: 'q41', title: 'XSS protection?', content: 'Angular templates escape by default. Bypass only with DomSanitizer when safe. Avoid innerHTML with untrusted content.' },
        { id: 'q42', title: 'CSRF?', content: 'Use HttpOnly/sameSite cookies; include XSRF-TOKEN cookie + header via HttpClient XSRF support. For token auth, protect refresh endpoints.' },
        { id: 'q43', title: 'Content Security Policy?', content: 'Set CSP headers to block inline scripts; use hashed scripts if needed. Avoid eval. Configure for analytics/fonts/CDN domains.' },
        { id: 'q44', title: 'Access control on client?', content: 'Client checks are UX only. Enforce authorization on server. Hide UI conditionally but secure APIs with proper auth.' },
        { id: 'q45', title: 'Performance pitfalls?', content: 'Too many change detections, missing trackBy, large bundles, heavy polyfills, unoptimized images, blocking scripts.' },
        { id: 'q46', title: 'Error handling UX?', content: 'Provide global error handler, toast/snackbar for errors, fallback UI for failed data loads, retry where appropriate.' },
        { id: 'q47', title: 'Forms security?', content: 'Validate on client and server. Avoid exposing secrets. Rate-limit sensitive actions. Sanitize user-generated HTML.' },
        { id: 'q48', title: 'Version and deps?', content: 'Stay current with Angular CLI/TS/RxJS. Use ng update. Watch breaking changes in major releases. Lock deps and run audits.' },
        { id: 'q49', title: 'Architecture tips?', content: 'Use feature modules, core/shared modules, smart/dumb components, services for data, pure pipes, OnPush, and typed models.' },
        { id: 'q50', title: 'Common pitfalls?', content: 'Subscribing in templates, not unsubscribing, circular deps, dumping logic in components instead of services, overusing two-way binding.' }
      ]
    }
  ]
};
