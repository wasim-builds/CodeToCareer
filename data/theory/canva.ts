import { TheoryTopic } from '@/types/theory';

export const canvaTheory: TheoryTopic = {
  topicId: 'canva',
  topicName: 'Canva',
  category: 'Design Tools',
  description: 'Canva for quick graphic design, branding assets, presentations, and social media content.',
  sections: [
    {
      id: 'getting-started',
      title: 'Getting Started and Canvas',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is Canva?', content: 'A web-based design tool offering templates, drag-and-drop editing, and asset libraries for non-designers and teams.' },
        { id: 'q2', title: 'Templates?', content: 'Pre-built layouts for social posts, presentations, posters, resumes. Choose correct dimensions to avoid resizing issues.' },
        { id: 'q3', title: 'Brand kit?', content: 'Stores brand colors, logos, and fonts for consistency. Available in paid plans; enforces brand palette across designs.' },
        { id: 'q4', title: 'Canvas basics?', content: 'Drag elements, position with align/spacing tools, use grids and rulers, lock elements to prevent shifts. Use layers panel to reorder.' },
        { id: 'q5', title: 'Uploads?', content: 'Upload images, videos, audio, fonts (with license). Supports PNG/JPG/SVG/MP4. Keep assets organized in folders.' },
        { id: 'q6', title: 'Elements and graphics?', content: 'Use shapes, icons, stock photos/videos, charts. Check license (free/pro). Swap colors for brand consistency.' },
        { id: 'q7', title: 'Text handling?', content: 'Use text styles (heading/subheading/body). Adjust line/letter spacing. Apply effects (shadow, lift) sparingly. Maintain hierarchy.' },
        { id: 'q8', title: 'Color and backgrounds?', content: 'Use brand palette, gradients, or images. Ensure contrast for readability. Apply filters to harmonize assets.' },
        { id: 'q9', title: 'Layer management?', content: 'Arrange forward/backward, group related elements, lock backgrounds. Use transparency for overlays. Keep consistent margins.' },
        { id: 'q10', title: 'Guides and grids?', content: 'Enable rulers/guides; use alignment snapping. For carousels, duplicate pages to keep consistent layout.' }
      ]
    },
    {
      id: 'media',
      title: 'Media, Effects, and Editing',
      content: '',
      subsections: [
        { id: 'q11', title: 'Image adjustments?', content: 'Use Adjust/Filters for brightness, contrast, saturation. Background Remover (Pro) cuts subjects; fine-tune with erase/restore.' },
        { id: 'q12', title: 'Video editing?', content: 'Trim clips, split timeline, add transitions, music, and animations. Export as MP4 or GIF. Keep short for social platforms.' },
        { id: 'q13', title: 'Animations?', content: 'Apply page or element animations (fade, rise). Use subtly to avoid distraction. Prefer consistent animation style across pages.' },
        { id: 'q14', title: 'Charts and data?', content: 'Insert charts and input data or paste from CSV. Customize colors and labels to match brand and improve readability.' },
        { id: 'q15', title: 'Frames and masks?', content: 'Drop images/videos into frames to auto-crop. Use grids for collages. Maintain consistent aspect ratios.' },
        { id: 'q16', title: 'Audio and timing?', content: 'Add music/voiceover; adjust track timing and volume. Ensure licensing for commercial use. Keep narration aligned with visuals.' },
        { id: 'q17', title: 'Background remover uses?', content: 'Ideal for product shots/portraits. Combine with shadows/gradients for polished look. Check edges and refine manually.' },
        { id: 'q18', title: 'Filters vs manual adjust?', content: 'Filters are quick presets; manual adjust offers control. Save custom filter settings for consistency across assets.' },
        { id: 'q19', title: 'AI features?', content: 'Magic Write for copy, text-to-image, magic edit. Review outputs for accuracy and licensing. Keep AI edits aligned with brand tone.' },
        { id: 'q20', title: 'Accessibility basics?', content: 'Ensure contrast, readable fonts, alt text on exports where platforms support. Avoid text-heavy images; keep font sizes legible.' }
      ]
    },
    {
      id: 'collaboration',
      title: 'Collaboration and Workflow',
      content: '',
      subsections: [
        { id: 'q21', title: 'Sharing and permissions?', content: 'Share links with view/comment/edit roles. Restrict template editing to maintain brand consistency. Use link expiration where available.' },
        { id: 'q22', title: 'Comments and feedback?', content: 'Comment on elements/pages. Tag teammates. Resolve threads to track decisions. Use versions for checkpoints.' },
        { id: 'q23', title: 'Version history?', content: 'Revert to previous saves if changes break design. Save named versions for milestones and approvals.' },
        { id: 'q24', title: 'Templates for teams?', content: 'Create brand-approved templates for repeatable formats (social posts, pitch decks). Lock critical elements.' },
        { id: 'q25', title: 'Folders and organization?', content: 'Use folders for campaigns/clients. Name files clearly (date-channel-purpose). Archive old assets to reduce clutter.' },
        { id: 'q26', title: 'Content planner?', content: 'Schedule social posts from Canva to connected accounts. Keep content calendar aligned with campaigns.' },
        { id: 'q27', title: 'Approvals workflow?', content: 'Set commenting-only for reviewers; gather feedback; finalize and export. Maintain single source of truth for approved assets.' },
        { id: 'q28', title: 'Collab pitfalls?', content: 'Overwriting changes, inconsistent fonts/colors, missing attributions. Use brand kit, locked templates, and roles to prevent drift.' },
        { id: 'q29', title: 'Integrations?', content: 'Connect Drive, Dropbox, social platforms, Slack for import/export and notifications. Ensure permissions are scoped properly.' },
        { id: 'q30', title: 'File safety?', content: 'Use team-owned brand assets. Keep licensed stock within account. Remove unused uploads to reduce confusion and risk.' }
      ]
    },
    {
      id: 'export',
      title: 'Export and Platforms',
      content: '',
      subsections: [
        { id: 'q31', title: 'Export formats?', content: 'PNG for transparency, JPG for photos (smaller), PDF for print/share, MP4/GIF for motion, SVG for vector logos/icons (Pro).' },
        { id: 'q32', title: 'Sizing and DPI?', content: 'Canva uses pixels for digital; export PDF Print for 300 DPI. Choose correct dimensions at start to avoid quality loss.' },
        { id: 'q33', title: 'Compression tips?', content: 'Use JPG quality sliders, reduce image dimensions, avoid unnecessary effects. For web, prefer smaller exports for faster load.' },
        { id: 'q34', title: 'Bleed and print?', content: 'Enable bleed guides for print designs. Keep text inside safe margins. Export PDF with crop marks if printer requests.' },
        { id: 'q35', title: 'Social platform presets?', content: 'Use platform-specific templates (IG post/story, LinkedIn, Twitter). Avoid text near edges to prevent cropping.' },
        { id: 'q36', title: 'Transparent background?', content: 'PNG with transparency (Pro) for logos/stickers. Ensure no unintended artifacts; check edges after background removal.' },
        { id: 'q37', title: 'Presentation export?', content: 'Present directly or export PDF/MP4. Use speaker notes. Keep font sizes large for readability on screens.' },
        { id: 'q38', title: 'Brand consistency on export?', content: 'Verify colors match brand palette, typography consistent, logos intact. Use brand kit and locked templates to avoid drift.' },
        { id: 'q39', title: 'Rights and licensing?', content: 'Check license for stock assets (free vs Pro). Some assets require attribution or cannot be used in merchandise. Review terms before commercial use.' },
        { id: 'q40', title: 'Handoff to devs?', content: 'Export SVG/PNG for icons, WebP for web images. Provide spacing and color references. Keep text editable when possible.' }
      ]
    },
    {
      id: 'best-practices',
      title: 'Design Best Practices',
      content: '',
      subsections: [
        { id: 'q41', title: 'Hierarchy and layout?', content: 'Use clear visual hierarchy with size/weight/color. Align elements, maintain consistent spacing, and limit fonts/colors for cohesion.' },
        { id: 'q42', title: 'Typography choices?', content: 'Pick legible fonts, maintain contrast, set proper line-height, and avoid stretching text. Use styles for consistency.' },
        { id: 'q43', title: 'Color choices?', content: 'Use brand palette, ensure contrast, avoid overly saturated combinations. Consider color blindness; test with simulators if possible.' },
        { id: 'q44', title: 'Imagery guidelines?', content: 'Use high-quality, relevant images. Maintain consistent tone and lighting. Avoid clutter; use whitespace to focus attention.' },
        { id: 'q45', title: 'Consistency across pages?', content: 'Duplicate pages for carousels; keep margins, fonts, and button styles consistent. Reuse components for speed and uniformity.' },
        { id: 'q46', title: 'Accessibility reminders?', content: 'Keep sufficient contrast, large tap targets in interactive mocks, clear focus states, and avoid text baked into images when possible.' },
        { id: 'q47', title: 'Data visualization?', content: 'Keep charts simple, label clearly, avoid 3D clutter. Use brand colors consistently; highlight key data with contrast.' },
        { id: 'q48', title: 'Social media specifics?', content: 'Mind safe zones, platform compression, and text limits. Keep file sizes small; ensure legibility on mobile screens.' },
        { id: 'q49', title: 'Common mistakes?', content: 'Too many fonts/colors, low contrast, misaligned elements, stretched images, crowded layouts, ignoring bleed for print.' },
        { id: 'q50', title: 'Improvement path?', content: 'Practice redesigning real assets, study good templates, get feedback, learn basic design principles (contrast, alignment, repetition, proximity).' }
      ]
    }
  ]
};
