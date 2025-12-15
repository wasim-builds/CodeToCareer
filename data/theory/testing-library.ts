import { TheoryTopic } from '@/types/theory';

export const testingLibraryTheory: TheoryTopic = {
  topicId: 'testing-library',
  topicName: 'Testing Library',
  category: 'Testing',
  description: 'React Testing Library fundamentals, queries, user interactions, mocking, and best practices.',
  sections: [
    {
      id: 'principles',
      title: 'Principles and Setup',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is Testing Library?', content: 'Family of libraries for testing UI behavior through accessible queries; encourages tests resembling user interactions.' },
        { id: 'q2', title: 'Core philosophy?', content: 'Test the app like a user would: focus on rendered output, accessible roles/text, not implementation details.' },
        { id: 'q3', title: 'Render helper?', content: 'render() mounts a component into a JSDOM container and returns utilities (queries, rerender, unmount).' },
        { id: 'q4', title: 'Cleanup?', content: 'Automatic via jest environment; cleanup removes mounted trees between tests to avoid leakage.' },
        { id: 'q5', title: 'Custom render?', content: 'Wrap render with providers (Router, Redux, Theme). Export a test-utils render to keep tests concise.' },
        { id: 'q6', title: 'Jest vs Vitest?', content: 'Library-agnostic; works with both. Needs proper environment (jsdom) and transformers for TS/JSX.' },
        { id: 'q7', title: 'Accessibility importance?', content: 'Queries prefer roles/labels which align with a11y; improves test robustness and product accessibility.' },
        { id: 'q8', title: 'Async environment?', content: 'Use fake timers carefully; prefer real timers for userEvent; advance timers when testing debounce/polling.' },
        { id: 'q9', title: 'Snapshots?', content: 'Possible but overused; prefer focused assertions on visible behavior rather than large snapshots.' },
        { id: 'q10', title: 'TypeScript support?', content: 'Types provided; extend expect with jest-dom for richer matchers. Configure ts-jest/esbuild for TS projects.' }
      ]
    },
    {
      id: 'queries',
      title: 'Queries and Accessibility',
      content: '',
      subsections: [
        { id: 'q11', title: 'Query priority?', content: 'ByRole > ByLabelText > ByPlaceholderText > ByText > ByDisplayValue > ByAltText > ByTitle > ByTestId.' },
        { id: 'q12', title: 'getBy vs queryBy vs findBy?', content: 'getBy throws if missing; queryBy returns null; findBy is async (waits). Plural forms for multiple matches.' },
        { id: 'q13', title: 'Roles?', content: 'Use getByRole with name option for accessible names; ensures proper semantics (button, textbox, heading).' },
        { id: 'q14', title: 'Labels and forms?', content: 'getByLabelText links <label> to controls via for/id or aria-label/aria-labelledby; preferred for inputs.' },
        { id: 'q15', title: 'Text matching?', content: 'Text queries match visible text; support string, regex, or function; exact default true except text/label defaults.' },
        { id: 'q16', title: 'Within?', content: 'within(element) scopes queries to subtree for disambiguation (tables, lists).' },
        { id: 'q17', title: 'Multiple matches?', content: 'Use getAllBy* if expecting multiples; otherwise narrow with name/level or use within.' },
        { id: 'q18', title: 'Hidden elements?', content: 'Queries ignore hidden elements by default; use { hidden: true } for elements with aria-hidden or CSS hidden.' },
        { id: 'q19', title: 'Test IDs?', content: 'data-testid as last resort; prefer semantic queries. Useful when no accessible text/role exists.' },
        { id: 'q20', title: 'Debugging?', content: 'screen.debug() prints DOM; logRoles() shows elements/roles to refine queries.' }
      ]
    },
    {
      id: 'interactions',
      title: 'User Events and Async',
      content: '',
      subsections: [
        { id: 'q21', title: 'userEvent vs fireEvent?', content: 'userEvent simulates real interactions (events + timing); fireEvent is low-level; prefer userEvent for realism.' },
        { id: 'q22', title: 'Typing and clicks?', content: 'userEvent.type and .click return promises; await them. Use pointer events for mouse interactions.' },
        { id: 'q23', title: 'Async updates?', content: 'Use findBy or waitFor when state updates asynchronously (fetch, timers, promises).' },
        { id: 'q24', title: 'waitFor usage?', content: 'Polls until expectation passes or timeout; avoid testing implementation; include expectation inside waitFor callback.' },
        { id: 'q25', title: 'act warnings?', content: 'Await userEvent/setup; ensure state updates wrapped; Testing Library handles most act calls automatically.' },
        { id: 'q26', title: 'Timers and debounce?', content: 'Use fake timers for debounce/throttle; advance timers; restore afterward to avoid leaks.' },
        { id: 'q27', title: 'Clipboard/keyboard?', content: 'userEvent supports keyboard shortcuts, tab/shift+tab navigation, and clipboard via paste/cut.' },
        { id: 'q28', title: 'File uploads?', content: 'Use userEvent.upload with File objects; ensure input type=file; assert file names and callbacks.' },
        { id: 'q29', title: 'Drag and drop?', content: 'userEvent.dragAndDrop for basic flows; complex custom DnD may need fireEvent with dataTransfer mocks.' },
        { id: 'q30', title: 'Asserting loading states?', content: 'Check for spinners/disabled buttons; use findBy queries to wait for final UI; avoid arbitrary setTimeouts.' }
      ]
    },
    {
      id: 'mocking',
      title: 'Mocking and Environment',
      content: '',
      subsections: [
        { id: 'q31', title: 'Network mocking?', content: 'Use jest-fetch-mock, MSW (preferred), or axios mocks; assert on requests and rendered results, not internal calls.' },
        { id: 'q32', title: 'Module mocking?', content: 'jest.mock to stub modules; mock hooks/services; keep focused on observable UI; reset mocks between tests.' },
        { id: 'q33', title: 'Router mocking?', content: 'Wrap with MemoryRouter/NextRouter mocks; assert navigation via rendered content/URL changes.' },
        { id: 'q34', title: 'Redux/query clients?', content: 'Provide store/query client via custom render; seed state; use msw for server responses instead of deep mocks.' },
        { id: 'q35', title: 'Portals and modals?', content: 'Render portals in test DOM (set app root); query by role/dialog; handle focus traps with userEvent.tab.' },
        { id: 'q36', title: 'Console noise?', content: 'Fail tests on unexpected console.error by spying; ensure act warnings resolved; silence expected warnings explicitly.' },
        { id: 'q37', title: 'Intl and i18n?', content: 'Wrap with i18n provider; assert translated text; avoid snapshotting translations that change.' },
        { id: 'q38', title: 'Date/time?', content: 'Use fake timers/frozen dates; inject clock; avoid timezone flakiness by using UTC expectations.' },
        { id: 'q39', title: 'Accessibility checks?', content: 'Pair with jest-axe or axe-core to lint rendered output for a11y regressions.' },
        { id: 'q40', title: 'Environment setup?', content: 'Configure testEnvironment=jsdom; include @testing-library/jest-dom for matchers; reset modules and mocks.' }
      ]
    },
    {
      id: 'best',
      title: 'Best Practices and Antipatterns',
      content: '',
      subsections: [
        { id: 'q41', title: 'Avoid implementation details?', content: 'Do not assert internal state, props, or mocks calls when UI behavior suffices; prefer user-visible outcomes.' },
        { id: 'q42', title: 'Reliable selectors?', content: 'Use roles/names; avoid brittle text (e.g., dynamic counts); consider regex/startsWith when appropriate.' },
        { id: 'q43', title: 'Arrange/Act/Assert?', content: 'Keep tests readable; arrange data, act with userEvent, assert visible results.' },
        { id: 'q44', title: 'Test data shape?', content: 'Use realistic data fixtures; avoid oversimplified mocks that miss edge cases.' },
        { id: 'q45', title: 'Performance of test suite?', content: 'Parallelize, reuse custom render, share MSW server, avoid unnecessary rerenders, and clean up timers.' },
        { id: 'q46', title: 'Coverage vs quality?', content: 'Aim for meaningful scenarios; code coverage is a signal, not the goal; focus on critical user flows.' },
        { id: 'q47', title: 'Flake reduction?', content: 'Prefer findBy/waitFor over setTimeout, stable selectors, deterministic seeds, and avoid shared mutable state.' },
        { id: 'q48', title: 'Component contracts?', content: 'Assert public contract (props/events/ARIA) rather than internal functions; helps refactoring safety.' },
        { id: 'q49', title: 'Snapshot cautions?', content: 'Use sparingly for small, stable components; large snapshots hide regressions; prefer semantic assertions.' },
        { id: 'q50', title: 'Refactoring tests?', content: 'Extract helpers for repeated flows, keep tests isolated, and update custom render/providers as app evolves.' }
      ]
    }
  ]
};
