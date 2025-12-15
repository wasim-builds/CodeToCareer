import { TheoryTopic } from '@/types/theory';

export const androidTheory: TheoryTopic = {
  topicId: 'android',
  topicName: 'Android Development',
  category: 'Mobile',
  description: 'Android app fundamentals, components, UI, data, performance, testing, and publishing.',
  sections: [
    {
      id: 'fundamentals',
      title: 'Fundamentals and Components',
      content: '',
      subsections: [
        { id: 'q1', title: 'App components?', content: 'Activities, Fragments, Services, Broadcast Receivers, Content Providers; defined in manifest with intents/filters.' },
        { id: 'q2', title: 'Activity lifecycle?', content: 'onCreate → onStart → onResume → (running) → onPause → onStop → onDestroy. Handle state and releases accordingly.' },
        { id: 'q3', title: 'Fragment lifecycle?', content: 'onAttach → onCreate → onCreateView → onViewCreated → onStart → onResume; teardown onPause/onStop/onDestroyView/onDestroy.' },
        { id: 'q4', title: 'Intents?', content: 'Messages for component actions; explicit vs implicit; include extras; startActivity or startActivityForResult (Activity Result API).' },
        { id: 'q5', title: 'Permissions?', content: 'Declare in manifest; request dangerous perms at runtime; handle denial and rationale; background permission rules.' },
        { id: 'q6', title: 'Process death?', content: 'System may kill app; save UI state (onSaveInstanceState), persist data, design for restoration without crashes.' },
        { id: 'q7', title: 'Services types?', content: 'Foreground, background (restricted), bound services; WorkManager/JobScheduler for deferrable background tasks.' },
        { id: 'q8', title: 'Broadcast receivers?', content: 'Respond to system/app broadcasts; prefer explicit/local broadcasts; register in manifest or dynamically.' },
        { id: 'q9', title: 'Content providers?', content: 'Share data via URIs; used by Contacts/MediaStore; implement CRUD with permissions.' },
        { id: 'q10', title: 'App manifest?', content: 'AndroidManifest declares components, permissions, intent filters, application settings, and exported components.' }
      ]
    },
    {
      id: 'ui',
      title: 'UI, Layouts, and Navigation',
      content: '',
      subsections: [
        { id: 'q11', title: 'Layouts?', content: 'XML layouts with ConstraintLayout, LinearLayout, FrameLayout; Compose for declarative UI; use themes/styles.' },
        { id: 'q12', title: 'RecyclerView?', content: 'Efficient lists with adapters/view holders; DiffUtil for updates; LayoutManagers for layout types.' },
        { id: 'q13', title: 'Navigation component?', content: 'Handles navigation graphs, safe args, back stack, deep links. Works with fragments/activities.' },
        { id: 'q14', title: 'Jetpack Compose?', content: 'Declarative UI toolkit; composable functions, state hoisting, remember, side-effect APIs; interop with Views.' },
        { id: 'q15', title: 'Theming?', content: 'Material components, themes, styles, colors, typography; dark mode support via themes and resource qualifiers.' },
        { id: 'q16', title: 'Resource qualifiers?', content: 'Provide resources per density/locale/orientation/night; qualifiers in res/values-*/layout-* etc.' },
        { id: 'q17', title: 'Animations?', content: 'View animations/transition framework; MotionLayout; Compose animation APIs for transitions and gestures.' },
        { id: 'q18', title: 'Accessibility?', content: 'Content descriptions, touch target sizes, TalkBack testing, focus order, contrast, and dynamic font sizes.' },
        { id: 'q19', title: 'Input/keyboard?', content: 'Handle soft keyboard with windowAdjustResize; use inputType; manage focus; avoid layout jumps.' },
        { id: 'q20', title: 'Localization?', content: 'String resources per locale; use plurals/formatting; test RTL; avoid hardcoded text.' }
      ]
    },
    {
      id: 'data',
      title: 'Data, Networking, and Background',
      content: '',
      subsections: [
        { id: 'q21', title: 'Data storage options?', content: 'SharedPreferences/DataStore for key-value, Room/SQLite for relational, files for blobs, Proto DataStore for typed prefs.' },
        { id: 'q22', title: 'Room?', content: 'ORM over SQLite with DAO interfaces, entities, migrations, Flow/LiveData support, compile-time SQL checks.' },
        { id: 'q23', title: 'Networking stack?', content: 'OkHttp/Retrofit for HTTP; Moshi/Gson for JSON; interceptors for auth/logging; handle TLS and timeouts.' },
        { id: 'q24', title: 'Coroutines/Flow?', content: 'Structured concurrency for async; Flow for streams; use ViewModelScope and lifecycle-aware collectors.' },
        { id: 'q25', title: 'Dependency injection?', content: 'Hilt/Dagger/Koin; inject ViewModels, repositories, retrofit clients; improve testability.' },
        { id: 'q26', title: 'WorkManager?', content: 'Deferrable background work with constraints/retries; survives reboots; respects Doze/battery optimizations.' },
        { id: 'q27', title: 'Push notifications?', content: 'FCM for messaging; notification channels, priorities, foreground service requirements on Android 8+.' },
        { id: 'q28', title: 'Security of data?', content: 'Use EncryptedSharedPreferences, SQLCipher/Room + crypto, Keystore for keys, network security config for pinning.' },
        { id: 'q29', title: 'Offline-first?', content: 'Cache data locally, sync with WorkManager, conflict resolution, and consistent UI states.' },
        { id: 'q30', title: 'Testing data/network?', content: 'Use MockWebServer, in-memory Room, fakes; instrumented tests for integration; leak detection with LeakCanary.' }
      ]
    },
    {
      id: 'quality',
      title: 'Performance and Quality',
      content: '',
      subsections: [
        { id: 'q31', title: 'Performance profiling?', content: 'Android Studio profiler for CPU/memory/network; StrictMode for detecting bad patterns; ANR watchdog.' },
        { id: 'q32', title: 'App size optimization?', content: 'R8 shrinking/obfuscation, resource shrinking, split APK/ABI, remove unused locales/drawables.' },
        { id: 'q33', title: 'Battery considerations?', content: 'Avoid wake locks unless necessary; batch work; use JobScheduler/WorkManager; respect Doze/app standby.' },
        { id: 'q34', title: 'Threading?', content: 'Use coroutines/Executors; avoid blocking main thread; leverage Dispatchers.IO/Main/Default.' },
        { id: 'q35', title: 'Crash reporting?', content: 'Crashlytics/Sentry; handle uncaught exceptions; add breadcrumbs; monitor ANR rates in Play Console.' },
        { id: 'q36', title: 'Testing levels?', content: 'Unit tests (JVM), instrumented UI tests (Espresso/Compose UI), snapshot tests; CI to run suites.' },
        { id: 'q37', title: 'Modularization?', content: 'Feature modules/libraries to speed builds, enable dynamic delivery, and improve isolation.' },
        { id: 'q38', title: 'Compose best practices?', content: 'Use immutable state, remember, derivedStateOf; hoist state; avoid recomposition storms; preview UI.' },
        { id: 'q39', title: 'Permissions UX?', content: 'Request in-context, explain rationale, handle denial/permanent denial, and provide settings deep link.' },
        { id: 'q40', title: 'Security hygiene?', content: 'Network Security Config, pinning, obfuscation, avoid storing secrets, secure WebView settings, validate intents.' }
      ]
    },
    {
      id: 'release',
      title: 'Publishing and Distribution',
      content: '',
      subsections: [
        { id: 'q41', title: 'Signing keys?', content: 'Use upload key + Play App Signing; keep keystores secure; backups; rotate if compromised.' },
        { id: 'q42', title: 'Build variants?', content: 'Debug/release; productFlavors for envs; configure appIdSuffix/applicationId per flavor.' },
        { id: 'q43', title: 'Play Console requirements?', content: 'Privacy policy, data safety form, target SDK, 64-bit, content ratings, screenshots, icons, feature graphics.' },
        { id: 'q44', title: 'App bundles?', content: 'Use .aab for Play; enables dynamic delivery; reduces download size; test with bundletool.' },
        { id: 'q45', title: 'In-app updates/billing?', content: 'Use Play Core libraries for updates and billing; handle purchases, acknowledgements, server validation.' },
        { id: 'q46', title: 'Testing tracks?', content: 'Internal, closed, open testing tracks; staged rollouts; monitor vitals (ANR/Crash) before 100% rollout.' },
        { id: 'q47', title: 'Privacy and data safety?', content: 'Fill data safety section accurately; handle user data with consent; comply with GDPR/CCPA where applicable.' },
        { id: 'q48', title: 'CI/CD?', content: 'Use Gradle tasks, fastlane, GitHub Actions; automate signing, versioning, changelog, uploads.' },
        { id: 'q49', title: 'Deeplinks/app links?', content: 'Configure intent filters for http/https app links and custom schemes; verify app links for auto-verify.' },
        { id: 'q50', title: 'Post-release monitoring?', content: 'Track Play Vitals, ANR/crash rates, performance, reviews; plan hotfixes and updates accordingly.' }
      ]
    }
  ]
};
