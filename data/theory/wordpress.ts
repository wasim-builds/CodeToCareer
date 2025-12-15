import { TheoryTopic } from '@/types/theory';

export const wordpressTheory: TheoryTopic = {
  topicId: 'wordpress',
  topicName: 'WordPress',
  category: 'Full Stack',
  description: 'WordPress CMS for building and customizing websites with themes, plugins, and custom code.',
  sections: [
    {
      id: 'basics',
      title: 'Basics and Setup',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is WordPress?', content: 'An open-source CMS written in PHP with MySQL database, powering blogs, websites, and e-commerce via themes and plugins.' },
        { id: 'q2', title: 'WordPress.org vs .com?', content: '.org is self-hosted, full control over code/plugins/themes. .com is hosted SaaS with plan-based limitations and less control.' },
        { id: 'q3', title: 'Requirements?', content: 'PHP (8+ recommended), MySQL/MariaDB, web server (Apache/Nginx), HTTPS. PHP extensions: json, mbstring, curl, gd.' },
        { id: 'q4', title: 'Installation steps?', content: 'Download WP, create DB/user, configure wp-config.php (DB creds, salts), run install script, choose admin user/password, set permalinks.' },
        { id: 'q5', title: 'File structure?', content: 'wp-admin (admin UI), wp-includes (core), wp-content (themes, plugins, uploads). Only edit wp-content; core files managed by updates.' },
        { id: 'q6', title: 'Permalinks?', content: 'SEO-friendly URLs via Settings > Permalinks. Use post name. Requires mod_rewrite/htaccess or Nginx rules.' },
        { id: 'q7', title: 'Themes vs plugins?', content: 'Themes control presentation/templates; plugins add functionality. Child themes preserve customizations. Avoid editing parent theme directly.' },
        { id: 'q8', title: 'Users and roles?', content: 'Roles: Administrator, Editor, Author, Contributor, Subscriber. Capabilities determine permissions. Use least privilege.' },
        { id: 'q9', title: 'Multisite?', content: 'Enables network of sites from one install. Requires wp-config define WP_ALLOW_MULTISITE, then network setup. Shared plugins/themes, separate sites.' },
        { id: 'q10', title: 'Updates?', content: 'Keep core, themes, plugins updated. Enable auto-updates where safe. Test major updates in staging to avoid breakage.' }
      ]
    },
    {
      id: 'theme-dev',
      title: 'Themes and Templates',
      content: '',
      subsections: [
        { id: 'q11', title: 'Theme files?', content: 'style.css (headers), functions.php (hooks), template files (index.php, single.php, page.php, archive.php), template hierarchy resolves based on context.' },
        { id: 'q12', title: 'Template hierarchy?', content: 'WordPress picks most specific template: single-{post_type}.php, category-{slug}.php, page-{slug}.php, fallback index.php. Child themes override.' },
        { id: 'q13', title: 'Hooks (actions/filters)?', content: 'Actions run at events; filters modify data. add_action and add_filter to extend without editing core. Example: add_filter("the_content", fn($c)=>$c."...").' },
        { id: 'q14', title: 'Enqueue scripts/styles?', content: 'Use wp_enqueue_script/style in wp_enqueue_scripts/admin_enqueue_scripts. Avoid hardcoding in templates. Handle dependencies and versions.' },
        { id: 'q15', title: 'Custom post types (CPT)?', content: 'Register via register_post_type in functions.php or plugin. Enables structured content beyond posts/pages (e.g., portfolio, products).' },
        { id: 'q16', title: 'Taxonomies?', content: 'Categories/tags built-in. register_taxonomy to add custom taxonomies for CPTs. Hierarchical or flat. Improves content organization.' },
        { id: 'q17', title: 'Custom fields?', content: 'Meta fields per post/user/term/comment. Use get_post_meta/update_post_meta. ACF plugin offers UI for structured fields.' },
        { id: 'q18', title: 'Template parts and blocks?', content: 'get_template_part to reuse snippets. With block themes, use block templates/parts (HTML + block markup) and theme.json for style tokens.' },
        { id: 'q19', title: 'Theme.json?', content: 'Configuration for block themes controlling colors, typography, spacing, layout, and global styles. Reduces custom CSS and improves consistency.' },
        { id: 'q20', title: 'Child themes?', content: 'Create child theme with style.css header Template: parenttheme. Enqueue parent styles. Safest way to customize without losing updates.' }
      ]
    },
    {
      id: 'plugins',
      title: 'Plugins, APIs, and Extensibility',
      content: '',
      subsections: [
        { id: 'q21', title: 'Plugin basics?', content: 'Plugins are PHP packages extending WP via hooks, shortcodes, custom post types, blocks, REST endpoints. Stored in wp-content/plugins.' },
        { id: 'q22', title: 'Creating a plugin?', content: 'Create folder/file with header comment, register hooks, enqueue assets. Avoid direct output on load; bootstrap via hooks. Prefix functions to avoid collisions.' },
        { id: 'q23', title: 'Shortcodes?', content: 'add_shortcode("tag", callback) to insert dynamic content in posts/pages. Should return string, not echo. Use sparingly with blocks era.' },
        { id: 'q24', title: 'REST API?', content: 'WP REST API exposes content at /wp-json/wp/v2. Register custom routes via register_rest_route. Authenticate via cookies, app passwords, OAuth/JWT plugins.' },
        { id: 'q25', title: 'Block development?', content: 'Gutenberg blocks built with React/JSX using @wordpress/scripts. registerBlockType to define edit/save. Dynamic blocks render via PHP render callback.' },
        { id: 'q26', title: 'Security in plugins?', content: 'Sanitize/escape input/output, use nonces for forms, check capabilities, validate file uploads, avoid eval/unsafe unserialize.' },
        { id: 'q27', title: 'Database access?', content: 'Use $wpdb with prepared statements ($wpdb->prepare) to avoid SQL injection. Prefer WP APIs (WP_Query, meta functions) when possible.' },
        { id: 'q28', title: 'Caching layers?', content: 'Use transients API for short-term cached data. Page/object caching via plugins (e.g., WP Super Cache, W3TC) and server-level caching.' },
        { id: 'q29', title: 'Localization?', content: '__(), _e(), _x() functions with text domains. Provide .pot for translators. Load text domain in plugin/theme init.' },
        { id: 'q30', title: 'E-commerce?', content: 'WooCommerce adds products, carts, checkout, orders. Extensible via hooks. Requires SSL and proper hosting for performance.' }
      ]
    },
    {
      id: 'security-perf',
      title: 'Security, Performance, and SEO',
      content: '',
      subsections: [
        { id: 'q31', title: 'Hardening steps?', content: 'Strong admin creds, limit login attempts/2FA, least privilege, disable file editing, secure wp-config, move it above web root if allowed, restrict xmlrpc if unused.' },
        { id: 'q32', title: 'Backups?', content: 'Regular backups of files + DB. Store offsite (S3/Drive). Test restores. Use plugins or cron scripts with mysqldump/rsync.' },
        { id: 'q33', title: 'Performance basics?', content: 'Use caching (page/object/opcode), optimize images (WebP), minify assets, limit heavy plugins, use CDN, enable HTTP/2/3, good hosting.' },
        { id: 'q34', title: 'Database optimization?', content: 'Clean revisions/spam/transients, optimize tables, use indexed queries. Avoid heavy queries in loops; cache expensive operations.' },
        { id: 'q35', title: 'SEO essentials?', content: 'Permalinks, XML sitemaps (plugins/core), meta tags, structured data, clean headings, fast load, mobile-friendly, alt text on images.' },
        { id: 'q36', title: 'Image handling?', content: 'Use appropriate sizes/srcset, lazy loading (core), convert to WebP/AVIF where supported. Avoid gigantic hero images.' },
        { id: 'q37', title: 'CDN usage?', content: 'Serve static assets via CDN for global performance. Ensure cache purging on content updates. Configure CORS for fonts.' },
        { id: 'q38', title: 'HTTPS and cookies?', content: 'Force HTTPS, set secure cookies, HSTS, proper SameSite. Update site/home URLs to https to avoid mixed content.' },
        { id: 'q39', title: 'Spam protection?', content: 'Use Akismet/reCAPTCHA/honeypot for forms/comments. Disable comments where unnecessary. Moderate first-time commenters.' },
        { id: 'q40', title: 'Vulnerabilities to watch?', content: 'Outdated plugins/themes, exposed debug logs, weak passwords, unescaped output (XSS), unsanitized input (SQLi), insecure file uploads.' }
      ]
    },
    {
      id: 'ops',
      title: 'Operations and Best Practices',
      content: '',
      subsections: [
        { id: 'q41', title: 'Staging vs production?', content: 'Use staging for updates/testing. Sync DB/uploads carefully. Avoid editing on production. Use version control for themes/plugins.' },
        { id: 'q42', title: 'Config management?', content: 'Use wp-config for environment constants (WP_DEBUG, WP_ENVIRONMENT_TYPE, SCRIPT_DEBUG). Move salts/keys to env. Disable file edits.' },
        { id: 'q43', title: 'Multilingual?', content: 'Use plugins (WPML/Polylang). Ensure SEO-friendly hreflang, translated slugs, separate sitemaps. Consider headless for complex needs.' },
        { id: 'q44', title: 'Headless WordPress?', content: 'Use WP as CMS, deliver via REST/GraphQL to React/Next.js frontends (e.g., WPGraphQL). Benefits: decoupled scaling, modern UI.' },
        { id: 'q45', title: 'Cron and scheduling?', content: 'WP-Cron triggers on traffic; for reliability use real cron hitting wp-cron.php or DISABLE_WP_CRON with external scheduler.' },
        { id: 'q46', title: 'Logging/debugging?', content: 'Enable WP_DEBUG/LOG on non-prod. Use Query Monitor plugin, error logs. Disable display_errors in production.' },
        { id: 'q47', title: 'Compliance and privacy?', content: 'Cookie notices, consent management, privacy policy, data export/erase (GDPR tools). Secure PII, minimize plugins handling sensitive data.' },
        { id: 'q48', title: 'Hosting considerations?', content: 'Choose hosts with PHP opcache, HTTP/2, good I/O, backups, and security. For WooCommerce, need stronger CPU/RAM and object cache.' },
        { id: 'q49', title: 'Deployment workflow?', content: 'Version control custom code, use CI to lint/test, deploy via SSH/FTP/git hooks. Run DB migrations carefully; use maintenance mode on big changes.' },
        { id: 'q50', title: 'Common pitfalls?', content: 'Editing parent themes, too many plugins, ignoring updates/backups, no caching, weak security, mixing dev code on production.' }
      ]
    }
  ]
};
