import { TheoryTopic } from '@/types/theory';

export const adobeTheory: TheoryTopic = {
  topicId: 'adobe',
  topicName: 'Adobe Creative Suite',
  category: 'Design Tools',
  description: 'Adobe Photoshop, Illustrator, XD, and related apps for design, illustration, and prototyping.',
  sections: [
    {
      id: 'photoshop',
      title: 'Photoshop Essentials',
      content: '',
      subsections: [
        { id: 'q1', title: 'Photoshop use cases?', content: 'Raster image editing: retouching, compositing, color correction, UI mockups, social graphics, web assets.' },
        { id: 'q2', title: 'Layers and masks?', content: 'Layers stack content; masks hide/reveal non-destructively. Use layer masks for composites, adjustment masks for targeted edits.' },
        { id: 'q3', title: 'Smart Objects?', content: 'Embedded/linked layers that preserve source data; enable non-destructive transforms/filters. Useful for reusable components and mockups.' },
        { id: 'q4', title: 'Adjustment layers?', content: 'Non-destructive edits (Levels, Curves, Hue/Sat). Stackable and maskable. Better than direct pixel edits.' },
        { id: 'q5', title: 'Selections and channels?', content: 'Use marquee/lasso/Quick Selection/Object Selection; refine edges; save selections as alpha channels for reuse and masking.' },
        { id: 'q6', title: 'Blend modes?', content: 'Control how layers combine: Multiply (darken), Screen (lighten), Overlay (contrast). Use for lighting, shadows, textures.' },
        { id: 'q7', title: 'Smart Filters?', content: 'Filters applied non-destructively to Smart Objects; can be re-ordered/masked. Good for blur, sharpening, effects.' },
        { id: 'q8', title: 'Exporting assets?', content: 'Use Export As or Generate for web (PNG/JPG/SVG). Use slices or artboards for multiple assets. Control color profile and compression.' },
        { id: 'q9', title: 'Color management?', content: 'Work in sRGB for web. Use soft proofing for print. Embed profiles on export if needed. Calibrate monitors for accuracy.' },
        { id: 'q10', title: 'Non-destructive workflow?', content: 'Use adjustment layers, masks, Smart Objects, separate layers, and avoid direct pixel edits. Keep originals intact.' }
      ]
    },
    {
      id: 'illustrator',
      title: 'Illustrator Vector Design',
      content: '',
      subsections: [
        { id: 'q11', title: 'When to use Illustrator?', content: 'Vector graphics: logos, icons, illustrations, typography. Scales infinitely without quality loss, unlike raster.' },
        { id: 'q12', title: 'Paths and anchors?', content: 'Vector shapes built from anchor points and handles. Pen tool creates precise paths; Direct Selection edits anchors/handles.' },
        { id: 'q13', title: 'Shape Builder and Pathfinder?', content: 'Combine, subtract, intersect shapes to craft complex vectors. Shape Builder is interactive; Pathfinder offers preset boolean ops.' },
        { id: 'q14', title: 'Artboards?', content: 'Multiple canvases in one file; ideal for icon sets/variants. Export selected artboards to PNG/SVG/PDF.' },
        { id: 'q15', title: 'Typography controls?', content: 'Use character/paragraph panels, tracking/leading/kerning. Convert to outlines for final delivery when fonts unavailable.' },
        { id: 'q16', title: 'Appearance panel?', content: 'Stack multiple fills/strokes/effects on one object. Enables reusable styles without duplicating shapes.' },
        { id: 'q17', title: 'Symbols and libraries?', content: 'Symbols create reusable instances; edit master to update all. Libraries sync assets via Creative Cloud for team reuse.' },
        { id: 'q18', title: 'Gradients and meshes?', content: 'Linear/radial gradients for smooth transitions; gradient mesh for complex shading; gradient maps for stylized looks.' },
        { id: 'q19', title: 'SVG export?', content: 'Use SVG for web/icons. Simplify paths, remove unnecessary metadata, set responsive sizing. Check precision to reduce file size.' },
        { id: 'q20', title: 'Pixel-perfect tips?', content: 'Use pixel preview, align to pixel grid for crisp icons. Set stroke alignment to inside for sharp edges at small sizes.' }
      ]
    },
    {
      id: 'xd',
      title: 'Adobe XD / UI Prototyping',
      content: '',
      subsections: [
        { id: 'q21', title: 'Why XD?', content: 'UI/UX design and interactive prototyping with components, states, responsive resize, and sharing links for stakeholders.' },
        { id: 'q22', title: 'Components and states?', content: 'Create components for reusable UI; states for variants (hover/active). Overrides propagate unless detached. Speeds design systems.' },
        { id: 'q23', title: 'Responsive resize?', content: 'Auto-resizes elements based on constraints/pins, reducing manual layout work across screen sizes.' },
        { id: 'q24', title: 'Prototyping links?', content: 'Wire interactions between artboards; set triggers (tap, hover, keys) and animations (auto-animate, transition). Share prototypes via links.' },
        { id: 'q25', title: 'Design systems?', content: 'Use assets panel for colors, character styles, components. Share via cloud documents/libraries. Enforce consistency across teams.' },
        { id: 'q26', title: 'Plugins?', content: 'Plugins add data fill, icons, accessibility checks, handoff utilities. Extend XD capabilities for workflows.' },
        { id: 'q27', title: 'Collaboration?', content: 'Coediting for real-time collaboration. Comments on shared prototypes. Version history to restore changes.' },
        { id: 'q28', title: 'Handoff to devs?', content: 'Share design specs link with measurements, assets, and CSS snippets. Export assets as PNG/SVG/PDF.' },
        { id: 'q29', title: 'Auto-animate?', content: 'Creates smooth transitions by matching layer names across artboards. Great for microinteractions and motion prototypes.' },
        { id: 'q30', title: 'Accessibility in XD?', content: 'Use color contrast plugins, logical tab order, clear focus states. Document accessibility requirements in specs.' }
      ]
    },
    {
      id: 'workflow',
      title: 'Color, Assets, and Workflow',
      content: '',
      subsections: [
        { id: 'q31', title: 'Color modes?', content: 'Use RGB for screens, CMYK for print. Convert appropriately to maintain accuracy. Pantone for brand spot colors.' },
        { id: 'q32', title: 'Asset organization?', content: 'Use libraries, consistent naming, and folders. Keep source files layered and labeled. Separate exports and templates.' },
        { id: 'q33', title: 'File formats?', content: 'PSD/PSB for raster, AI for vector, XD for prototypes. Export to PNG/JPG for web, SVG for icons, PDF for print/share.' },
        { id: 'q34', title: 'Shortcuts and efficiency?', content: 'Learn core shortcuts (V/M/L/pen in PS/AI), use actions, batch processing, and templates to speed repetitive tasks.' },
        { id: 'q35', title: 'Non-destructive editing principle?', content: 'Always prefer masks, adjustment layers, Smart Objects, and vector shapes to preserve editability and avoid quality loss.' },
        { id: 'q36', title: 'Linked assets?', content: 'Link images/Smart Objects for external updates. Update once to refresh across documents. Good for shared brand assets.' },
        { id: 'q37', title: 'Grids and layout?', content: 'Use guides/grids for alignment. For UI, use 8px/4px spacing systems. Ensure consistent margins/padding across components.' },
        { id: 'q38', title: 'Typography pairing?', content: 'Pair complementary fonts (contrast in weight/serif vs sans). Limit to 2-3 families. Maintain hierarchy with size/weight/spacing.' },
        { id: 'q39', title: 'Export for web performance?', content: 'Optimize images (compression, proper dimensions), prefer SVG for simple vectors, use 2x assets for retina when needed.' },
        { id: 'q40', title: 'Collaboration etiquette?', content: 'Name layers/artboards, document changes, use versioning, share libraries, and annotate complex interactions for developers.' }
      ]
    },
    {
      id: 'printing',
      title: 'Print, Accessibility, and Handoff',
      content: '',
      subsections: [
        { id: 'q41', title: 'Print setup basics?', content: 'Set correct size, bleed, margins, CMYK mode, and resolution (300 DPI). Use printer specs and preflight checks.' },
        { id: 'q42', title: 'Preflight and packaging?', content: 'In Illustrator, package files to include fonts/links. Check missing links, color profiles, overprint, and transparency flattening.' },
        { id: 'q43', title: 'Accessibility for digital?', content: 'Ensure sufficient contrast, readable fonts, clear focus states, alt text for images. Avoid text in images when possible.' },
        { id: 'q44', title: 'Brand consistency?', content: 'Use shared libraries for colors, logos, typography. Document usage rules. Lock assets that shouldn’t change.' },
        { id: 'q45', title: 'Handoff formats?', content: 'Provide source files plus exports. For dev handoff, include specs, grids, and component states. Provide SVG for icons, PNG/WebP for bitmaps.' },
        { id: 'q46', title: 'Color proofing?', content: 'Soft-proof with printer ICC profiles; request hard proofs for critical prints. Avoid pure black text in CMYK (use rich black appropriately).' },
        { id: 'q47', title: 'Copyright and licensing?', content: 'Use licensed fonts/assets. Avoid embedding unlicensed stock. Track licenses and usage rights for delivered files.' },
        { id: 'q48', title: 'Backup/versioning?', content: 'Use cloud versions, Git/LFS for design assets if code-adjacent, or CC libraries. Keep incremental versions for major revisions.' },
        { id: 'q49', title: 'Common pitfalls?', content: 'Rasterizing too early, wrong color mode, missing bleed, unembedded fonts, oversized exports, inconsistent spacing/alignments.' },
        { id: 'q50', title: 'Learning path?', content: 'Start with layers/masks (PS), vectors/paths (AI), components/prototypes (XD). Practice real projects, follow design systems, review accessibility.' }
      ]
    }
  ]
};
