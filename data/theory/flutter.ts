import { TheoryTopic } from '@/types/theory';

export const flutterTheory: TheoryTopic = {
  topicId: 'flutter',
  topicName: 'Flutter',
  category: 'Mobile',
  description: 'Flutter and Dart fundamentals, widgets, state management, platform integration, performance, and deployment.',
  sections: [
    {
      id: 'basics',
      title: 'Basics and Rendering',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is Flutter?', content: 'UI toolkit by Google to build natively compiled apps for mobile, web, and desktop using Dart and a reactive framework.' },
        { id: 'q2', title: 'Rendering model?', content: 'Skia renders widgets to a canvas; Flutter controls every pixel, not native UI widgets; consistent UI across platforms.' },
        { id: 'q3', title: 'Dart language highlights?', content: 'Sound null safety, async/await, isolates, ahead-of-time (AOT) and just-in-time (JIT) compilation.' },
        { id: 'q4', title: 'Widget types?', content: 'StatelessWidget for immutable UI; StatefulWidget with State for mutable UI; InheritedWidget for propagation.' },
        { id: 'q5', title: 'Hot reload vs hot restart?', content: 'Hot reload injects code, preserving state; hot restart restarts app and state. Dev tools enable fast iteration.' },
        { id: 'q6', title: 'Material vs Cupertino?', content: 'Material widgets for Android/web; Cupertino for iOS look. Can mix; choose per platform or design spec.' },
        { id: 'q7', title: 'Project structure?', content: 'lib/ for Dart code; android/ios/windows/linux/macos platform dirs; pubspec.yaml manages deps and assets.' },
        { id: 'q8', title: 'Layout basics?', content: 'Use widgets like Row, Column, Stack, Expanded, Flex; constraints flow down, sizes go up, parent sets position.' },
        { id: 'q9', title: 'Navigation?', content: 'Navigator 1.0 imperative push/pop; Navigator 2.0/router for declarative navigation; go_router simplifies routing.' },
        { id: 'q10', title: 'Assets and fonts?', content: 'Declare assets/fonts in pubspec; access via AssetImage/FontFamily; flutter pub get to update bundles.' }
      ]
    },
    {
      id: 'state',
      title: 'State Management and Data',
      content: '',
      subsections: [
        { id: 'q11', title: 'setState?', content: 'Calls markNeedsBuild to rebuild widget subtree. Keep builds fast; avoid heavy work in build().' },
        { id: 'q12', title: 'InheritedWidget/InheritedNotifier?', content: 'Propagate data efficiently; basis for Provider and other state libs.' },
        { id: 'q13', title: 'Popular state libraries?', content: 'Provider, Riverpod, Bloc/Cubit, MobX, GetX, Redux. Choose based on app complexity and preference.' },
        { id: 'q14', title: 'Async in Flutter?', content: 'Use Future and Stream; FutureBuilder/StreamBuilder to render async data; handle loading/error states.' },
        { id: 'q15', title: 'Form handling?', content: 'Use Form and TextFormField with validators; controllers manage text; focus nodes handle focus/keyboard.' },
        { id: 'q16', title: 'Networking?', content: 'http/dio packages; interceptors for auth/logging; handle retries; json_serializable/freezed for models.' },
        { id: 'q17', title: 'Persistence?', content: 'SharedPreferences for simple key-value, sqflite/Drift for relational, Hive/ObjectBox for NoSQL/local storage.' },
        { id: 'q18', title: 'Localization?', content: 'Use intl package and ARB files; flutter gen-l10n; support RTL; test with different locales.' },
        { id: 'q19', title: 'Dependency injection?', content: 'Use get_it or Riverpod providers; keep constructors simple; inject services for testability.' },
        { id: 'q20', title: 'Error handling?', content: 'Use try/catch around async; FlutterError.onError for framework errors; PlatformDispatcher.onError for uncaught async.' }
      ]
    },
    {
      id: 'platform',
      title: 'Platform Integration and UI',
      content: '',
      subsections: [
        { id: 'q21', title: 'Platform channels?', content: 'MethodChannel/EventChannel for calling native code (Kotlin/Swift). Use Pigeon for typed codegen.' },
        { id: 'q22', title: 'Permissions?', content: 'Handle per platform using permission_handler; update AndroidManifest and Info.plist; request at runtime.' },
        { id: 'q23', title: 'Theming?', content: 'ThemeData for colors/typography/shapes; use darkTheme and ThemeMode; prefer ColorScheme-based theming.' },
        { id: 'q24', title: 'Layouts and responsiveness?', content: 'MediaQuery for screen sizes; LayoutBuilder; use flexible widgets; responsive breakpoints for web/desktop.' },
        { id: 'q25', title: 'Animations?', content: 'Implicit animations (AnimatedContainer), explicit controllers (AnimationController), Hero transitions, Rive/Lottie.' },
        { id: 'q26', title: 'Accessibility?', content: 'Semantics widget, proper labels, focus order, large fonts, contrast. Test with screen readers.' },
        { id: 'q27', title: 'Rendering performance?', content: 'Minimize rebuilds, use const widgets, RepaintBoundary for isolation, avoid overly deep trees.' },
        { id: 'q28', title: 'Text and fonts?', content: 'Use Text widgets with styles; manage overflow; load custom fonts via pubspec; consider font fallbacks.' },
        { id: 'q29', title: 'Navigation stacks?', content: 'Use Navigator/Router or go_router/auto_route for declarative routing; manage deep links and web URLs.' },
        { id: 'q30', title: 'Web support?', content: 'Uses CanvasKit/HTML renderers; watch bundle size and performance; handle keyboard/mouse differences.' }
      ]
    },
    {
      id: 'performance',
      title: 'Performance, Testing, and Build',
      content: '',
      subsections: [
        { id: 'q31', title: 'Performance profiling?', content: 'Use DevTools for timeline, memory, and CPU profiling; track jank (frame budget 16ms); use tracing and logs.' },
        { id: 'q32', title: 'List performance?', content: 'Use ListView.builder/SliverList; cacheExtent; use keys wisely; avoid expensive work in item builders.' },
        { id: 'q33', title: 'Image optimization?', content: 'Cache images, use ResizeImage, precacheImage, appropriate resolution, and webp/avif when supported.' },
        { id: 'q34', title: 'Testing stack?', content: 'Unit tests (dart test), widget tests (flutter test), integration tests (flutter test --integration-test) or flutter_driver/Patrol.' },
        { id: 'q35', title: 'CI/CD?', content: 'Use fastlane/GitHub Actions/CodeMagic; automate tests, codegen, signing, and store uploads.' },
        { id: 'q36', title: 'Code generation?', content: 'Build runner for json_serializable/freezed; keep generated files committed or generated in CI.' },
        { id: 'q37', title: 'Isolates?', content: 'Use isolates for heavy compute; SendPort/ReceivePort for messages; prefer compute helper for simple cases.' },
        { id: 'q38', title: 'Caching/state?', content: 'Use memoization, local caches, or state libs; avoid rebuilding expensive widgets; debounce text input.' },
        { id: 'q39', title: 'Logging/analytics?', content: 'Use logger packages; integrate Crashlytics/Sentry; respect privacy/consent; test in release builds.' },
        { id: 'q40', title: 'App size and obfuscation?', content: 'Use split per ABI, tree-shake icons, remove unused resources, enable obfuscate/split-debug-info for Dart.' }
      ]
    },
    {
      id: 'release',
      title: 'Release and Store Readiness',
      content: '',
      subsections: [
        { id: 'q41', title: 'Build modes?', content: 'Debug/profile/release; profile for perf testing; release for stores. Use flutter build apk/ipa/appbundle.' },
        { id: 'q42', title: 'Signing?', content: 'Android keystore configs in gradle; iOS certificates/profiles. Store keys securely; automate with fastlane.' },
        { id: 'q43', title: 'Flavors?', content: 'Configure productFlavors (Android) and schemes (iOS) for dev/stage/prod; set bundle IDs and app names per flavor.' },
        { id: 'q44', title: 'Environment config?', content: 'Use --dart-define or env files; avoid bundling secrets; use per-flavor endpoints.' },
        { id: 'q45', title: 'App Store/Play requirements?', content: 'Privacy policies, tracking disclosures, screenshots, icons, content ratings, and permission justifications.' },
        { id: 'q46', title: 'OTA/CodePush?', content: 'Flutter not officially supporting JS OTA; use app updates via stores; some 3rd-party solutions exist with caution.' },
        { id: 'q47', title: 'Beta distribution?', content: 'Use TestFlight/Internal testing/Closed tracks; gather feedback and crash reports before wide rollout.' },
        { id: 'q48', title: 'Localization QA?', content: 'Test all locales, RTL layouts, text expansion; verify date/number formats and fonts.' },
        { id: 'q49', title: 'Performance gates?', content: 'Set budgets for start time, jank %, size; block release if regressions; automate checks in CI.' },
        { id: 'q50', title: 'Post-release monitoring?', content: 'Track crashes, ANR rates, performance, and analytics; stage rollouts; be ready to hotfix via store updates.' }
      ]
    }
  ]
};
