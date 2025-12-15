import { TheoryTopic } from '@/types/theory';

export const htmlCssTheory: TheoryTopic = {
  topicId: 'html-css',
  topicName: 'HTML5/CSS3',
  category: 'Languages',
  description: 'Web markup and styling with HTML5 and CSS3',
  sections: [
    {
      id: 'html',
      title: 'HTML5',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is HTML?', content: 'HTML (HyperText Markup Language) is markup language for web pages. Defines structure and content. Uses tags/elements. Browsers render HTML. Foundation of web. HTML5 is latest version with new features.' },
        { id: 'q2', title: 'What is HTML5?', content: 'HTML5 is latest HTML standard. New features: semantic elements, audio/video, canvas, local storage, geolocation, web workers. Better structure. Enhanced capabilities. Modern web standard.' },
        { id: 'q3', title: 'What are semantic elements?', content: 'Semantic elements describe meaning. Examples: <header>, <nav>, <article>, <section>, <aside>, <footer>. Better than <div>. Improves: SEO, accessibility, maintainability. HTML5 feature.' },
        { id: 'q4', title: 'What is document structure?', content: 'HTML document structure: <!DOCTYPE html>, <html>, <head> (metadata), <body> (content). DOCTYPE declares HTML5. Head contains: title, meta, links, scripts. Body contains visible content.' },
        { id: 'q5', title: 'What are HTML attributes?', content: 'HTML attributes provide additional information. Syntax: <tag attribute="value">. Common: id, class, src, href, alt, title. Modify element behavior. Important for functionality and styling.' },
        { id: 'q6', title: 'What is form element?', content: 'Form element collects user input. Contains: input fields, buttons, labels. Attributes: action (submit URL), method (GET/POST). Submit data to server. Essential for user interaction.' },
        { id: 'q7', title: 'What are input types?', content: 'Input types: text, email, password, number, date, checkbox, radio, file, submit, button. HTML5 adds: email, url, tel, search, range, color. Browser validation. Better UX.' },
        { id: 'q8', title: 'What is accessibility?', content: 'Accessibility (a11y) makes web usable for all. Use: semantic HTML, alt text, ARIA labels, proper headings, keyboard navigation. Screen reader support. Legal requirement. Good practice.' },
        { id: 'q9', title: 'What is meta tags?', content: 'Meta tags provide metadata. Examples: charset, viewport, description, keywords, author. In <head> section. SEO important. Browser behavior. Not visible to users.' },
        { id: 'q10', title: 'What is HTML validation?', content: 'HTML validation checks syntax. Validators: W3C validator. Ensures: correct syntax, standards compliance, cross-browser compatibility. Fix errors. Important for quality.' }
      ]
    },
    {
      id: 'css-basics',
      title: 'CSS Basics',
      content: '',
      subsections: [
        { id: 'q11', title: 'What is CSS?', content: 'CSS (Cascading Style Sheets) styles HTML. Controls: colors, fonts, layout, spacing, animations. Separates content from presentation. Multiple ways to include: inline, internal, external. Essential for styling.' },
        { id: 'q12', title: 'What is CSS selector?', content: 'CSS selector targets elements. Types: element (p), class (.class), ID (#id), attribute ([attr]), pseudo-class (:hover), descendant (div p). Specificity determines which rule applies. Foundation of CSS.' },
        { id: 'q13', title: 'What is CSS specificity?', content: 'CSS specificity determines which rule applies. Order: inline (1000), ID (100), class (10), element (1). Higher specificity wins. !important overrides. Calculate to understand conflicts.' },
        { id: 'q14', title: 'What is box model?', content: 'Box model: content, padding, border, margin. Total width = content + padding + border + margin. box-sizing: content-box (default) or border-box. Understanding essential for layout.' },
        { id: 'q15', title: 'What is display property?', content: 'Display property controls layout. Values: block, inline, inline-block, flex, grid, none. Block: full width, new line. Inline: flow with text. Flex/Grid: modern layouts. Fundamental property.' },
        { id: 'q16', title: 'What is position property?', content: 'Position property: static (default), relative (offset from normal), absolute (relative to parent), fixed (viewport), sticky (scroll-based). Removes from flow (absolute/fixed). Layout control.' },
        { id: 'q17', title: 'What is float?', content: 'Float positions elements. Values: left, right, none. Wraps text around. Legacy layout method. Replaced by Flexbox/Grid. Still used for: images in text, legacy support.' },
        { id: 'q18', title: 'What is z-index?', content: 'z-index controls stacking order. Higher values on top. Only works with positioned elements. Creates stacking context. Resolve overlaps. Layering control.' },
        { id: 'q19', title: 'What is CSS units?', content: 'CSS units: px (pixels), em (relative to font), rem (root em), % (percentage), vw/vh (viewport), pt, cm. Choose based on: responsive needs, context. Modern: rem, %, viewport units.' },
        { id: 'q20', title: 'What is CSS cascade?', content: 'CSS cascade determines which styles apply. Order: importance, specificity, source order. Later rules override earlier (same specificity). Understanding cascade resolves conflicts.' }
      ]
    },
    {
      id: 'css3',
      title: 'CSS3 Features',
      content: '',
      subsections: [
        { id: 'q21', title: 'What is Flexbox?', content: 'Flexbox is one-dimensional layout. Container: display: flex. Properties: flex-direction, justify-content, align-items, flex-wrap. Easy alignment. Responsive layouts. Modern standard.' },
        { id: 'q22', title: 'What is CSS Grid?', content: 'CSS Grid is two-dimensional layout. Container: display: grid. Define: grid-template-columns, grid-template-rows. Place items: grid-column, grid-row. Powerful layout system. Modern standard.' },
        { id: 'q23', title: 'What is media queries?', content: 'Media queries apply styles based on conditions. Syntax: @media (condition) { styles }. Conditions: width, height, orientation, device-type. Responsive design. Mobile-first approach. Essential for responsive.' },
        { id: 'q24', title: 'What is CSS animations?', content: 'CSS animations create motion. @keyframes define animation. animation property applies. Properties: duration, timing-function, delay, iteration-count. Smooth transitions. Performance optimized.' },
        { id: 'q25', title: 'What is CSS transitions?', content: 'CSS transitions animate property changes. Syntax: transition: property duration timing-function. Smooth changes. Hover effects. Simpler than animations. Common use case.' },
        { id: 'q26', title: 'What is CSS transforms?', content: 'CSS transforms modify elements. Functions: translate, rotate, scale, skew. 2D and 3D. GPU accelerated. Performance efficient. Visual effects. Animation support.' },
        { id: 'q27', title: 'What are CSS variables?', content: 'CSS variables (custom properties) store values. Syntax: --variable-name: value; var(--variable-name). Scoped or global. Dynamic theming. Reusable values. Modern feature.' },
        { id: 'q28', title: 'What is pseudo-classes?', content: 'Pseudo-classes style element states. Examples: :hover, :focus, :active, :visited, :first-child, :nth-child(). Dynamic styling. User interaction. State-based styles.' },
        { id: 'q29', title: 'What is pseudo-elements?', content: 'Pseudo-elements style parts of elements. Examples: ::before, ::after, ::first-line, ::first-letter. Create content. Decorative elements. No HTML needed. Useful for styling.' },
        { id: 'q30', title: 'What is CSS preprocessors?', content: 'CSS preprocessors extend CSS. Examples: Sass, Less, Stylus. Features: variables, nesting, mixins, functions. Compile to CSS. Better organization. Popular tools.' }
      ]
    },
    {
      id: 'responsive',
      title: 'Responsive Design',
      content: '',
      subsections: [
        { id: 'q31', title: 'What is responsive design?', content: 'Responsive design adapts to screen sizes. Techniques: fluid layouts, flexible images, media queries, mobile-first. Works on all devices. Essential for modern web. User experience.' },
        { id: 'q32', title: 'What is mobile-first?', content: 'Mobile-first: design for mobile first, then enhance for larger screens. Progressive enhancement. Better performance. Easier scaling up. Modern approach. Recommended strategy.' },
        { id: 'q33', title: 'What is viewport?', content: 'Viewport is visible area. Meta tag: <meta name="viewport" content="width=device-width, initial-scale=1">. Controls mobile rendering. Essential for responsive. Prevents zoom issues.' },
        { id: 'q34', title: 'What is breakpoints?', content: 'Breakpoints are screen size thresholds. Common: mobile (320px), tablet (768px), desktop (1024px), large (1440px). Media query conditions. Design decisions. Responsive strategy.' },
        { id: 'q35', title: 'What is fluid typography?', content: 'Fluid typography scales with viewport. Use: clamp(), calc(), viewport units. Responsive text. Better readability. Modern technique. Improves UX.' },
        { id: 'q36', title: 'What is flexible images?', content: 'Flexible images adapt to container. CSS: img { max-width: 100%; height: auto; }. Prevents overflow. Responsive images. Essential for responsive. Modern standard.' },
        { id: 'q37', title: 'What is CSS frameworks?', content: 'CSS frameworks provide pre-built styles. Examples: Bootstrap, Tailwind, Foundation. Components, grid systems, utilities. Faster development. Consistent design. Choose based on needs.' },
        { id: 'q38', title: 'What is Bootstrap?', content: 'Bootstrap is popular CSS framework. Components, grid system, utilities. Responsive by default. Large ecosystem. Easy to use. Good for rapid development.' },
        { id: 'q39', title: 'What is Tailwind CSS?', content: 'Tailwind CSS is utility-first framework. Utility classes instead of components. Highly customizable. Build custom designs. Different philosophy. Popular modern choice.' },
        { id: 'q40', title: 'What is CSS methodology?', content: 'CSS methodology organizes styles. Examples: BEM (Block Element Modifier), OOCSS, SMACSS. Naming conventions. Maintainability. Scalable CSS. Team standards.' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced HTML/CSS',
      content: '',
      subsections: [
        { id: 'q41', title: 'What is HTML5 APIs?', content: 'HTML5 APIs: Geolocation, Local Storage, Session Storage, Web Workers, WebSockets, Canvas, SVG, Drag and Drop. Enhanced capabilities. Modern web features. Browser APIs.' },
        { id: 'q42', title: 'What is local storage?', content: 'Local Storage persists data in browser. localStorage.setItem(), getItem(), removeItem(). 5-10MB limit. Survives browser restart. Use for: preferences, cache. Client-side storage.' },
        { id: 'q43', title: 'What is Canvas?', content: 'Canvas element draws graphics. JavaScript API. 2D and WebGL. Use for: games, charts, animations, image manipulation. Programmatic drawing. Powerful graphics.' },
        { id: 'q44', title: 'What is SVG?', content: 'SVG (Scalable Vector Graphics) is vector graphics. XML-based. Scalable without quality loss. Stylable with CSS. Use for: icons, logos, illustrations. Resolution independent.' },
        { id: 'q45', title: 'What is Web Components?', content: 'Web Components create reusable elements. Technologies: Custom Elements, Shadow DOM, HTML Templates. Encapsulation. Reusable across projects. Modern standard. Framework-agnostic.' },
        { id: 'q46', title: 'What is CSS architecture?', content: 'CSS architecture organizes styles. Structure: base, components, layouts, utilities. Separation of concerns. Maintainable. Scalable. Team collaboration. Important for large projects.' },
        { id: 'q47', title: 'What is CSS performance?', content: 'CSS performance: minimize CSS, use efficient selectors, avoid expensive properties, use will-change, critical CSS, remove unused CSS. Faster rendering. Better UX. Optimization important.' },
        { id: 'q48', title: 'What is browser compatibility?', content: 'Browser compatibility: test in multiple browsers, use prefixes, polyfills, feature detection, progressive enhancement. Cross-browser support. User experience. Essential consideration.' },
        { id: 'q49', title: 'What is CSS-in-JS?', content: 'CSS-in-JS writes CSS in JavaScript. Libraries: styled-components, Emotion, CSS Modules. Scoped styles. Dynamic styling. Component-based. Popular in React. Modern approach.' },
        { id: 'q50', title: 'What are HTML/CSS best practices?', content: 'Best practices: semantic HTML, accessible, responsive, validate code, optimize performance, organize CSS, use modern features, test browsers, mobile-first, progressive enhancement, maintainable code, follow standards, document, version control.' }
      ]
    }
  ]
};
