import { TheoryTopic } from '@/types/theory';

export const reactTheory: TheoryTopic = {
  topicId: 'react',
  topicName: 'React.js',
  category: 'Full Stack',
  description: 'React library for building user interfaces',
  sections: [
    {
      id: 'basics',
      title: 'React Basics',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is React?', content: 'React is a JavaScript library for building user interfaces, developed by Facebook. It uses component-based architecture, virtual DOM for performance, and one-way data flow. React is declarative, component-based, and learn once, write anywhere (web, mobile with React Native).' },
        { id: 'q2', title: 'What is JSX?', content: 'JSX is JavaScript XML syntax extension. Allows writing HTML-like code in JavaScript. JSX is transpiled to React.createElement() calls. Must return single root element (or Fragment). Use className instead of class, htmlFor instead of for. Embed expressions with {}. Makes code more readable.' },
        { id: 'q3', title: 'What is a component?', content: 'Components are reusable UI building blocks. Two types: Function components (modern, hooks-based) and Class components (legacy, lifecycle methods). Components are like JavaScript functions that return JSX. Can accept props and manage state. Encapsulate UI logic and presentation.' },
        { id: 'q4', title: 'What are props?', content: 'Props (properties) are data passed from parent to child components. Props are read-only (immutable). Pass data down the component tree. Use props to customize components. Access via function parameter or this.props in classes. Props enable component reusability and composition.' },
        { id: 'q5', title: 'What is state?', content: 'State is component\'s internal data that can change over time. State changes trigger re-renders. In function components, use useState hook. In class components, use this.state. State is local to component. Lift state up when multiple components need it. State updates are asynchronous.' },
        { id: 'q6', title: 'What is the difference between props and state?', content: 'Props are passed from parent, immutable, used for configuration. State is internal, mutable, used for dynamic data. Props flow down, state is local. Props change triggers re-render, state change triggers re-render. Use props for static data, state for interactive data.' },
        { id: 'q7', title: 'What is the Virtual DOM?', content: 'Virtual DOM is in-memory representation of real DOM. React creates virtual DOM tree, compares with previous (diffing), updates only changed nodes (reconciliation). More efficient than direct DOM manipulation. Enables declarative programming. React Fiber improves reconciliation algorithm.' },
        { id: 'q8', title: 'What is React.createElement()?', content: 'React.createElement() creates React elements. JSX is syntactic sugar for createElement(). Syntax: React.createElement(type, props, children). Rarely used directly with JSX. Understanding it helps understand JSX compilation. Used internally by React.' },
        { id: 'q9', title: 'What is React.Fragment?', content: 'Fragment allows grouping elements without adding DOM node. Syntax: <React.Fragment> or <>. Useful when component must return multiple elements. Avoids wrapper divs. Key prop can be used with Fragment. Cleaner DOM structure.' },
        { id: 'q10', title: 'What is conditional rendering?', content: 'Conditional rendering displays different UI based on conditions. Methods: if/else, ternary operator (condition ? true : false), logical && (condition && element), switch statements. Use for dynamic UI based on state/props. Keep conditions readable and maintainable.' }
      ]
    },
    {
      id: 'hooks',
      title: 'React Hooks',
      content: '',
      subsections: [
        { id: 'q11', title: 'What are React Hooks?', content: 'Hooks are functions that let you use state and lifecycle features in function components. Introduced in React 16.8. Rules: only call at top level, only in function components or custom hooks. Common hooks: useState, useEffect, useContext, useReducer, useMemo, useCallback.' },
        { id: 'q12', title: 'What is useState?', content: 'useState hook adds state to function components. Returns [state, setState]. setState updates state and triggers re-render. Can pass function to setState for previous state. State updates are batched. Initialize with initial value or function. Use for component-level state.' },
        { id: 'q13', title: 'What is useEffect?', content: 'useEffect handles side effects in function components. Runs after render. Replaces componentDidMount, componentDidUpdate, componentWillUnmount. Syntax: useEffect(() => {}, [dependencies]). Empty array [] runs once. No array runs every render. Return cleanup function. Handles subscriptions, API calls, DOM manipulation.' },
        { id: 'q14', title: 'What is useContext?', content: 'useContext accesses React context values. Avoids prop drilling. Syntax: const value = useContext(MyContext). Must be within Provider. Re-renders when context value changes. Use for global state (theme, user, language). Combine with useReducer for complex state.' },
        { id: 'q15', title: 'What is useReducer?', content: 'useReducer manages complex state logic. Alternative to useState. Syntax: const [state, dispatch] = useReducer(reducer, initialState). Reducer function: (state, action) => newState. Dispatch actions to update state. Useful for complex state, multiple sub-values, predictable updates. Similar to Redux pattern.' },
        { id: 'q16', title: 'What is useMemo?', content: 'useMemo memoizes expensive computations. Syntax: const memoized = useMemo(() => compute(), [dependencies]). Only recomputes when dependencies change. Prevents unnecessary recalculations. Use for expensive operations. Don\'t overuse - has overhead. Similar to useCallback but for values.' },
        { id: 'q17', title: 'What is useCallback?', content: 'useCallback memoizes functions. Syntax: const memoized = useMemo(() => compute(), [dependencies]). Returns same function reference if dependencies unchanged. Prevents unnecessary re-renders of child components. Use when passing functions to memoized children. Don\'t overuse - has overhead.' },
        { id: 'q18', title: 'What is useRef?', content: 'useRef creates mutable reference that persists across renders. Doesn\'t trigger re-render when changed. Syntax: const ref = useRef(initialValue). Access via ref.current. Use for: DOM references, storing previous values, mutable values that don\'t need re-render. Not for state that affects UI.' },
        { id: 'q19', title: 'What are custom hooks?', content: 'Custom hooks are functions starting with "use" that use other hooks. Extract component logic into reusable functions. Share stateful logic between components. Must follow hook rules. Can return values, functions, or both. Examples: useFetch, useLocalStorage, useAuth.' },
        { id: 'q20', title: 'What are the Rules of Hooks?', content: 'Only call hooks at top level (not in loops, conditions, nested functions). Only call from React function components or custom hooks. Ensures hooks are called in same order every render. ESLint plugin enforces rules. Violations cause bugs and unpredictable behavior.' }
      ]
    },
    {
      id: 'lifecycle',
      title: 'Component Lifecycle',
      content: '',
      subsections: [
        { id: 'q21', title: 'What is component lifecycle?', content: 'Lifecycle is sequence of methods called during component existence. Phases: Mounting (creation), Updating (re-renders), Unmounting (removal). Class components have lifecycle methods. Function components use useEffect for lifecycle. Understanding lifecycle helps with side effects and optimization.' },
        { id: 'q22', title: 'What is componentDidMount?', content: 'componentDidMount runs after component is mounted (inserted into DOM). Runs once after initial render. Good for: API calls, subscriptions, DOM manipulation, timers. In function components, use useEffect with empty dependency array []. Equivalent to "on mount" behavior.' },
        { id: 'q23', title: 'What is componentDidUpdate?', content: 'componentDidUpdate runs after component updates (re-renders). Receives prevProps and prevState. Good for: API calls based on prop/state changes, DOM updates. In function components, use useEffect with dependencies. Be careful of infinite loops. Compare prev and current values.' },
        { id: 'q24', title: 'What is componentWillUnmount?', content: 'componentWillUnmount runs before component is removed from DOM. Cleanup phase. Good for: canceling API requests, clearing timers, removing event listeners, cleaning subscriptions. In function components, return cleanup function from useEffect. Prevents memory leaks.' },
        { id: 'q25', title: 'What is getDerivedStateFromProps?', content: 'getDerivedStateFromProps is static method called before render. Returns object to update state or null. Rarely needed. Use cases: state depends on props. Often indicates design issue. Prefer lifting state up or memoization. In function components, compute during render or use useEffect.' },
        { id: 'q26', title: 'What is shouldComponentUpdate?', content: 'shouldComponentUpdate controls if component should re-render. Returns boolean. Receives nextProps and nextState. Used for performance optimization. Return false to prevent re-render. In function components, use React.memo for similar optimization. Don\'t overuse - can cause bugs.' },
        { id: 'q27', title: 'What is React.memo?', content: 'React.memo is higher-order component that memoizes function components. Prevents re-render if props haven\'t changed. Shallow comparison by default. Can provide custom comparison function. Use for expensive components. Similar to PureComponent for classes. Don\'t overuse - has overhead.' },
        { id: 'q28', title: 'What is PureComponent?', content: 'PureComponent is class component that implements shouldComponentUpdate with shallow prop/state comparison. Prevents unnecessary re-renders. Extend PureComponent instead of Component. Shallow comparison means nested objects/arrays aren\'t deeply compared. Use for performance optimization.' },
        { id: 'q29', title: 'What is render method?', content: 'render() is required method in class components. Returns JSX (or null). Should be pure (no side effects). Called during mount and updates. Can return: JSX elements, arrays, fragments, strings, numbers, booleans, null. Function components are render functions themselves.' },
        { id: 'q30', title: 'What is key prop?', content: 'key prop helps React identify which items changed. Required in lists. Should be unique and stable. Use IDs when possible, not index (unless list is static). Helps React efficiently update DOM. Missing keys cause warnings and performance issues. Keys should be in parent element, not child.' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced React',
      content: '',
      subsections: [
        { id: 'q31', title: 'What is Context API?', content: 'Context provides way to pass data through component tree without prop drilling. Create with createContext(). Provide with <Context.Provider>. Consume with useContext() or <Context.Consumer>. Use for global data (theme, user, language). Avoid overuse - makes components less reusable.' },
        { id: 'q32', title: 'What is React Router?', content: 'React Router enables client-side routing. Components: BrowserRouter, Routes, Route, Link, Navigate. Declarative routing with JSX. Supports nested routes, route parameters, query strings. useNavigate, useParams, useLocation hooks. Enables single-page application navigation.' },
        { id: 'q33', title: 'What is code splitting?', content: 'Code splitting splits bundle into smaller chunks. Load code on demand. React.lazy() for component-level splitting. Suspense for loading states. Reduces initial bundle size. Improves load time. Use for routes and heavy components. Webpack handles chunking automatically.' },
        { id: 'q34', title: 'What is React.lazy()?', content: 'React.lazy() enables code splitting for components. Syntax: const Component = React.lazy(() => import("./Component")). Must be used with Suspense. Loads component when needed. Reduces initial bundle. Use for route components and heavy features. Improves performance.' },
        { id: 'q35', title: 'What is Suspense?', content: 'Suspense shows fallback UI while waiting for lazy components. Syntax: <Suspense fallback={<Loading />}><LazyComponent /></Suspense>. Wraps lazy-loaded components. Can wrap multiple components. Future: will support data fetching. Currently for code splitting.' },
        { id: 'q36', title: 'What is error boundary?', content: 'Error boundaries catch JavaScript errors in child components. Class component with componentDidCatch or getDerivedStateFromError. Prevents entire app crash. Shows fallback UI. Doesn\'t catch: event handlers, async code, SSR errors, errors in boundary itself. Use for graceful error handling.' },
        { id: 'q37', title: 'What is Higher-Order Component (HOC)?', content: 'HOC is function that takes component and returns enhanced component. Pattern for reusing component logic. Examples: withRouter, connect (Redux). Add props, wrap with providers, add logic. Can cause prop drilling. Hooks often replace HOCs. Still useful for certain patterns.' },
        { id: 'q38', title: 'What is render props?', content: 'Render props pattern passes function as prop that returns JSX. Component calls function with data. Enables sharing logic between components. Flexible and composable. Can cause nesting. Hooks often replace render props. Still useful for certain use cases.' },
        { id: 'q39', title: 'What is React Portal?', content: 'Portal renders children into DOM node outside parent hierarchy. Syntax: createPortal(children, container). Useful for modals, tooltips, overlays. Events bubble to React tree (not DOM tree). Maintains React context. Enables rendering outside parent DOM structure.' },
        { id: 'q40', title: 'What is React performance optimization?', content: 'Optimization techniques: React.memo for components, useMemo for values, useCallback for functions, code splitting, lazy loading, virtualizing long lists, avoiding inline functions/objects in render, key prop in lists, shouldComponentUpdate/PureComponent. Profile with React DevTools. Measure before optimizing.' }
      ]
    },
    {
      id: 'patterns',
      title: 'React Patterns',
      content: '',
      subsections: [
        { id: 'q41', title: 'What is controlled vs uncontrolled component?', content: 'Controlled: React controls form input via state. Value prop and onChange handler. Single source of truth. Uncontrolled: DOM controls input. Use ref to access value. Controlled is preferred. Enables validation, formatting, conditional disabling. Uncontrolled for simple forms or third-party libraries.' },
        { id: 'q42', title: 'What is lifting state up?', content: 'Lifting state up moves state to common ancestor. Enables sharing state between siblings. Single source of truth. Data flows down via props, events flow up via callbacks. Pattern for component communication. Avoids prop drilling when appropriate. Use Context for deeper trees.' },
        { id: 'q43', title: 'What is composition vs inheritance?', content: 'React favors composition over inheritance. Compose components by nesting and passing children. Use props.children or render props. More flexible than inheritance. Avoids deep hierarchies. Enables code reuse through composition. Inheritance rarely needed in React.' },
        { id: 'q44', title: 'What is prop drilling?', content: 'Prop drilling is passing props through multiple levels. Can become tedious. Solutions: Context API, state management (Redux), component composition. Not always bad - explicit data flow. Use Context when drilling becomes excessive. Balance between explicitness and convenience.' },
        { id: 'q45', title: 'What is state management?', content: 'State management handles application state. Options: Local state (useState), Context API, Redux, Zustand, Jotai, Recoil. Choose based on complexity. Local state for component-level. Context for app-wide simple state. Redux for complex state. Don\'t over-engineer - start simple.' },
        { id: 'q46', title: 'What is Redux?', content: 'Redux is predictable state container. Principles: single source of truth, state is read-only, changes via pure functions (reducers). Components dispatch actions, reducers update state, components subscribe. Useful for complex state. Can be overkill for simple apps. Redux Toolkit simplifies usage.' },
        { id: 'q47', title: 'What is React testing?', content: 'Testing React: Jest for unit tests, React Testing Library for component tests, Enzyme (legacy). Test user behavior, not implementation. Test accessibility. Use data-testid for stable selectors. Mock API calls. Test edge cases. Aim for high coverage of critical paths.' },
        { id: 'q48', title: 'What is React best practices?', content: 'Best practices: use function components and hooks, keep components small, single responsibility, extract custom hooks, use TypeScript, proper error handling, accessibility, performance optimization, code splitting, proper folder structure, consistent naming, prop validation, avoid premature optimization.' },
        { id: 'q49', title: 'What is React Server Components?', content: 'React Server Components (RSC) run on server. Reduce client bundle. Can access databases directly. Streaming and progressive enhancement. Mix with Client Components. Use "use client" directive. Future of React. Enables better performance and SEO. Still evolving.' },
        { id: 'q50', title: 'What is Next.js?', content: 'Next.js is React framework with SSR, SSG, routing, API routes. Features: file-based routing, automatic code splitting, image optimization, API routes, middleware. Improves SEO and performance. Simplifies React development. Production-ready framework. Popular for full-stack React apps.' }
      ]
    }
  ]
};
