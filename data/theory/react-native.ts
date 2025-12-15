import { TheoryTopic } from '@/types/theory';

export const reactNativeTheory: TheoryTopic = {
  topicId: 'react-native',
  topicName: 'React Native',
  category: 'Mobile',
  description: 'React Native fundamentals, navigation, state management, native modules, performance, and deployment.',
  sections: [
    {
      id: 'basics',
      title: 'Basics and Architecture',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is React Native?', content: 'A framework to build native iOS/Android apps using React and JavaScript/TypeScript, rendering to native components.' },
        { id: 'q2', title: 'Architecture?', content: 'JS thread communicates with native via bridge (or the new JSI/Fabric). UI thread handles rendering; avoid blocking JS thread.' },
        { id: 'q3', title: 'Core components?', content: 'View, Text, Image, ScrollView, FlatList, Pressable/Touchable, TextInput, SafeAreaView, Modal.' },
        { id: 'q4', title: 'Style system?', content: 'Uses Flexbox-based styling with inline JS objects; supports StyleSheet.create for perf; no CSS cascade.' },
        { id: 'q5', title: 'TypeScript support?', content: 'First-class with type defs; use React.FC/props interfaces; prefer typed navigation params.' },
        { id: 'q6', title: 'Platform-specific code?', content: '.ios.tsx/.android.tsx file extensions, Platform module checks, or platform-specific components/permissions.' },
        { id: 'q7', title: 'Debugging?', content: 'Use Flipper, React DevTools, Hermes inspector, LogBox, console.log; attach native logs via Xcode/Android Studio.' },
        { id: 'q8', title: 'Hermes?', content: 'Optimized JS engine for RN; improves startup/memory. Enable per platform; watch compatibility and bytecode builds.' },
        { id: 'q9', title: 'App entry?', content: 'App.tsx registered via AppRegistry.registerComponent; Metro bundler serves JS bundle in dev; uses Fast Refresh.' },
        { id: 'q10', title: 'Expo vs bare?', content: 'Expo managed provides batteries-included tooling; bare gives full native control. Eject when needing custom native modules.' }
      ]
    },
    {
      id: 'navigation',
      title: 'Navigation and State',
      content: '',
      subsections: [
        { id: 'q11', title: 'Navigation options?', content: 'React Navigation (stack/tab/drawer), Expo Router, or native solutions (React Native Navigation). Pick per needs.' },
        { id: 'q12', title: 'State management?', content: 'Use React state/hooks, Context, Redux Toolkit, Zustand, Jotai, or Recoil. Keep JS thread light and predictable.' },
        { id: 'q13', title: 'Deep linking?', content: 'Configure schemes/hosts; navigation linking config; handle initialURL and subscribe to link events.' },
        { id: 'q14', title: 'Safe areas and layout?', content: 'Use SafeAreaView/Insets to avoid notches; measure with onLayout; use flex layouts for responsive design.' },
        { id: 'q15', title: 'Forms?', content: 'Use controlled inputs; libraries like Formik/React Hook Form with yup/zod; handle keyboard avoiding view.' },
        { id: 'q16', title: 'Offline/async storage?', content: 'AsyncStorage for small key-value; MMKV/WatermelonDB/Realm for performance and sync.' },
        { id: 'q17', title: 'Networking?', content: 'Fetch/axios; handle connectivity with NetInfo; retry/backoff; secure storage for tokens; TLS pinning via native modules if needed.' },
        { id: 'q18', title: 'Push notifications?', content: 'Use FCM/APNS via Firebase packages or Expo Notifications; handle permissions and device tokens per platform.' },
        { id: 'q19', title: 'Navigation performance?', content: 'Use native stack where possible; enable gesture/animation drivers; avoid heavy work in screen focus events.' },
        { id: 'q20', title: 'Global theming?', content: 'Use Context or libraries (styled-components, Tamagui); support dark mode via Appearance/Theme provider.' }
      ]
    },
    {
      id: 'native',
      title: 'Native Modules and Platform APIs',
      content: '',
      subsections: [
        { id: 'q21', title: 'Accessing device features?', content: 'Use community/native modules for camera, sensors, location, biometrics. Handle permissions via react-native-permissions.' },
        { id: 'q22', title: 'Native modules?', content: 'Bridge native code (Java/Kotlin/ObjC/Swift) to JS using TurboModules/JSI; expose methods/constants/events.' },
        { id: 'q23', title: 'Native UI components?', content: 'Create Fabric components for custom views; map props/commands/events; ensure layout/measure implemented.' },
        { id: 'q24', title: 'Permissions?', content: 'Declare in AndroidManifest and iOS Info.plist; request at runtime; handle denied/blocked states gracefully.' },
        { id: 'q25', title: 'Linking libraries?', content: 'Autolinking via RN CLI; for older libs manual linking required. After linking, rebuild native apps.' },
        { id: 'q26', title: 'Asset handling?', content: 'Use require() for static images; metro bundles assets; for large media consider CDN/download + caching.' },
        { id: 'q27', title: 'Background tasks?', content: 'Use Headless JS or native background services; iOS has strict background modes; schedule minimal work.' },
        { id: 'q28', title: 'Animations?', content: 'Use Reanimated or Animated API; prefer native-driven animations to avoid JS thread jank.' },
        { id: 'q29', title: 'Internationalization?', content: 'Use i18n libraries; load locale strings; consider RTL layout via I18nManager; test on device.' },
        { id: 'q30', title: 'Security?', content: 'Secure storage for secrets (Keychain/Keystore), avoid embedding keys, enable HTTPS/TLS, validate server certs.' }
      ]
    },
    {
      id: 'performance',
      title: 'Performance and Reliability',
      content: '',
      subsections: [
        { id: 'q31', title: 'Reducing jank?', content: 'Minimize work on JS thread, offload heavy tasks to native/worker threads, batch state updates, avoid synchronous bridges.' },
        { id: 'q32', title: 'List performance?', content: 'Use FlatList/SectionList with keyExtractor, getItemLayout, windowing; avoid inline functions; memoize item renderers.' },
        { id: 'q33', title: 'App size?', content: 'Enable Hermes, Proguard/R8, app thinning, remove unused architectures, split APK/ABI, tree-shake JS.' },
        { id: 'q34', title: 'Startup time?', content: 'Lazy load screens, prefetch critical data, reduce bundle size, use code push sparingly, enable Hermes.' },
        { id: 'q35', title: 'Memory usage?', content: 'Avoid large images in memory; cache/rescale; cleanup subscriptions; profile with Xcode/Android Studio tools.' },
        { id: 'q36', title: 'Error handling?', content: 'Global error boundaries, log crashes (Sentry/Firebase), handle unhandled promise rejections, graceful fallbacks.' },
        { id: 'q37', title: 'Testing?', content: 'Use Jest + Testing Library for unit/UI, Detox/Appium for e2e; mock native modules; run on devices/CI.' },
        { id: 'q38', title: 'CodePush/OTA?', content: 'Microsoft CodePush/Expo Updates for OTA; use for JS/assets only; follow store policies; keep rollback plan.' },
        { id: 'q39', title: 'Accessibility?', content: 'Set accessibilityLabel/role, support screen readers, larger text, proper focus order; test on devices.' },
        { id: 'q40', title: 'CI/CD?', content: 'Use EAS/fastlane/GitHub Actions for builds, tests, signing; manage keystores/provisioning securely.' }
      ]
    },
    {
      id: 'release',
      title: 'Deployment and Store Readiness',
      content: '',
      subsections: [
        { id: 'q41', title: 'App signing?', content: 'Android keystore (upload/signing keys), iOS certificates/profiles; store securely; automate with fastlane/EAS.' },
        { id: 'q42', title: 'Build types?', content: 'Debug vs release; Android build variants/flavors; iOS schemes/configs; ensure release builds tested on device.' },
        { id: 'q43', title: 'Store requirements?', content: 'Privacy policies, tracking disclosures, permissions rationale, accurate metadata, screenshots, and icons.' },
        { id: 'q44', title: 'OTA update limits?', content: 'Store policies restrict executable changes; OTA should fix minor issues; major features go through store review.' },
        { id: 'q45', title: 'Crash/analytics?', content: 'Integrate Crashlytics/Sentry and analytics (GA/Firebase/Segment); respect privacy/consent.' },
        { id: 'q46', title: 'Localization?', content: 'Bundle translations, set locale detection, test RTL and multi-byte scripts; adjust layout for text expansion.' },
        { id: 'q47', title: 'Backward compatibility?', content: 'Support minimum OS levels; test on low-end devices; handle permission changes and API deprecations.' },
        { id: 'q48', title: 'Security audits?', content: 'Check for secret leaks, enable TLS pinning if needed, secure storage, jailbreak/root detection when relevant.' },
        { id: 'q49', title: 'Performance budgets?', content: 'Set targets for TTI, FPS, bundle size, memory; monitor with perf tools; block release if regressions detected.' },
        { id: 'q50', title: 'Release process?', content: 'Tag versions, generate changelog, run full test suite, stage rollout, monitor crashes, rollback if needed.' }
      ]
    }
  ]
};
