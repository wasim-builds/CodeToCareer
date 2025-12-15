import { TheoryTopic } from '@/types/theory';

export const matplotlibTheory: TheoryTopic = {
  topicId: 'matplotlib',
  topicName: 'Matplotlib',
  category: 'Data & AI',
  description: 'Matplotlib plotting fundamentals, customization, subplots, styles, performance, and best practices.',
  sections: [
    {
      id: 'basics',
      title: 'Basics and Plotting',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is Matplotlib?', content: 'A Python plotting library for static/animated/interactive visualizations; base for many other libs (seaborn, pandas plotting).' },
        { id: 'q2', title: 'Interfaces?', content: 'Pyplot (stateful, MATLAB-like) vs object-oriented API (Figure/Axes). Prefer OO for complex plots.' },
        { id: 'q3', title: 'Creating a figure?', content: 'Use plt.figure or plt.subplots to get Figure and Axes. plt.subplots(nrows, ncols) for grids.' },
        { id: 'q4', title: 'Basic plots?', content: 'plot for lines, scatter, bar/barh, hist, imshow for images, pie, stem. Choose per data type.' },
        { id: 'q5', title: 'Labels and titles?', content: 'set_title, set_xlabel, set_ylabel; plt.title/xlabel/ylabel in pyplot. Use tight_layout to reduce overlap.' },
        { id: 'q6', title: 'Legends?', content: 'Call ax.legend() or plt.legend(); use labels on plotted artists; loc, bbox_to_anchor for position.' },
        { id: 'q7', title: 'Axis limits and scales?', content: 'set_xlim/set_ylim; log scales with set_xscale/loglog/semilogx; invert_yaxis; autoscale().' },
        { id: 'q8', title: 'Ticks and grids?', content: 'set_xticks/yticks; Formatter/Locator classes; grid(True); rotation for tick labels to avoid overlap.' },
        { id: 'q9', title: 'Saving figures?', content: 'plt.savefig with dpi, bbox_inches="tight", formats (png, pdf, svg). Save before plt.show in scripts.' },
        { id: 'q10', title: 'Interactive use?', content: 'Use %matplotlib inline/notebook/widget in Jupyter; interactive backends (Qt5Agg); plt.show() for scripts.' }
      ]
    },
    {
      id: 'custom',
      title: 'Customization and Styles',
      content: '',
      subsections: [
        { id: 'q11', title: 'Colors and colormaps?', content: 'Use named colors/hex; cmaps like viridis/plasma; set via cmap argument; colorbar for scale reference.' },
        { id: 'q12', title: 'Line and marker styles?', content: 'linestyle (--,-,none), linewidth, markers (o, s, ^), markerfacecolor, alpha for transparency.' },
        { id: 'q13', title: 'Fonts and text?', content: 'set font family/size globally via rcParams; annotate with ax.text/annotate; use bbox for callouts.' },
        { id: 'q14', title: 'Subplot spacing?', content: 'tight_layout or constrained_layout; adjust wspace/hspace; use gridspec for precise control.' },
        { id: 'q15', title: 'Stylesheets?', content: 'plt.style.use("seaborn-v0_8", "ggplot", etc.) or custom .mplstyle files for consistent theming.' },
        { id: 'q16', title: 'Multiple axes?', content: 'twinx/twiny for secondary axes; inset_axes for zoomed regions; sharex/sharey for aligned scales.' },
        { id: 'q17', title: 'Layout with GridSpec?', content: 'GridSpec allows non-uniform subplot sizes; combine cells for complex dashboards.' },
        { id: 'q18', title: 'Annotations?', content: 'annotate with arrows, xytext, arrowprops; highlight ranges with axvspan/axhspan/axvline/axhline.' },
        { id: 'q19', title: 'Custom ticks?', content: 'Formatters (FuncFormatter) for currency/percent/dates; Locators (MaxNLocator, LogLocator) to control tick positions.' },
        { id: 'q20', title: 'Themes via rcParams?', content: 'Update rcParams for defaults (font, figure size, dpi, lines). Use context managers to scope changes.' }
      ]
    },
    {
      id: 'specialized',
      title: 'Specialized Plots',
      content: '',
      subsections: [
        { id: 'q21', title: 'Histograms and density?', content: 'hist for counts; bins control; density=True for PDFs; KDE via seaborn or scipy for smooth estimates.' },
        { id: 'q22', title: 'Time series?', content: 'Plot datetime on x-axis; use AutoDateLocator/Formatter; rotate labels; fill_between for ranges.' },
        { id: 'q23', title: 'Categorical plots?', content: 'bar/barh, boxplot, violinplot; use positions/ticks for categories; consider seaborn for nicer defaults.' },
        { id: 'q24', title: 'Images and heatmaps?', content: 'imshow for 2D arrays; extent/aspect for axes scaling; colorbar; interpolation options.' },
        { id: 'q25', title: '3D plots?', content: 'mpl_toolkits.mplot3d for scatter3D, plot_surface; watch performance and readability.' },
        { id: 'q26', title: 'Polar plots?', content: 'projection="polar" for polar axes; plot angles/radius; useful for directionality/rose charts.' },
        { id: 'q27', title: 'Error bars and confidence?', content: 'errorbar, fill_between for bands; show uncertainty; capsize and alpha to improve readability.' },
        { id: 'q28', title: 'Annotations for peaks?', content: 'Use argmax to find peaks and annotate; use arrows/markers; label significant points.' },
        { id: 'q29', title: 'Geospatial?', content: 'Use Cartopy/GeoPandas with Matplotlib for projections and map plots; set CRS and extents.' },
        { id: 'q30', title: 'Animation?', content: 'FuncAnimation/ArtistAnimation for animated plots; save as mp4/gif; blitting for performance.' }
      ]
    },
    {
      id: 'performance',
      title: 'Performance and Large Data',
      content: '',
      subsections: [
        { id: 'q31', title: 'Large scatter plots?', content: 'Use alpha blending, downsample, rasterization, or datashader; avoid millions of points on-screen.' },
        { id: 'q32', title: 'Rendering backends?', content: 'Agg for raster, PDF/SVG for vector, interactive backends for GUIs; choose appropriate backend for output.' },
        { id: 'q33', title: 'Rasterization?', content: 'Set rasterized=True on heavy artists to keep vectors light while preserving text/vector elsewhere.' },
        { id: 'q34', title: 'Incremental updates?', content: 'Update artists instead of replotting; use set_data and canvas draw for interactive dashboards.' },
        { id: 'q35', title: 'Memory management?', content: 'Close figures with plt.close; reuse axes; limit number of open figures in notebooks.' },
        { id: 'q36', title: 'Interactivity?', content: 'Use event handlers (mpl_connect) for clicks/hover; widgets like sliders/buttons; ipywidgets for Jupyter.' },
        { id: 'q37', title: 'Date performance?', content: 'Convert datetimes to numbers for plotting; limit tick count; use fast converters if needed.' },
        { id: 'q38', title: 'Legibility with many series?', content: 'Use small multiples (subplots), color palettes, line styles, and clear legends to avoid clutter.' },
        { id: 'q39', title: 'Export quality?', content: 'Use higher dpi for print, vector formats for line art, and embed fonts when exporting to PDF/SVG.' },
        { id: 'q40', title: 'Testing plots?', content: 'Use image comparison tests (pytest-mpl) with baselines to catch regressions; seed randomness.' }
      ]
    },
    {
      id: 'best',
      title: 'Best Practices and Troubleshooting',
      content: '',
      subsections: [
        { id: 'q41', title: 'Choosing chart types?', content: 'Match chart to data/task; avoid 3D when unnecessary; use clear labels and units; avoid misleading scales.' },
        { id: 'q42', title: 'Color choices?', content: 'Use perceptually uniform cmaps (viridis); avoid rainbow for quantitative data; ensure contrast and colorblind safety.' },
        { id: 'q43', title: 'Aspect ratios?', content: 'Keep meaningful aspect (e.g., equal for maps); avoid distortion; use aspect="equal" when needed.' },
        { id: 'q44', title: 'Handling NaNs?', content: 'Matplotlib breaks lines on NaNs; clean data or use masked arrays; indicate missing data appropriately.' },
        { id: 'q45', title: 'Dates/timezones?', content: 'Be explicit with timezones; format ticks; avoid naive datetime ambiguities; use pandas for preprocessing.' },
        { id: 'q46', title: 'Fonts not found?', content: 'Clear font cache (~/.cache/matplotlib); ensure fonts installed; specify fallback families.' },
        { id: 'q47', title: 'Layout overlap?', content: 'Use tight_layout/constrained_layout; rotate labels; adjust margins; reduce text length.' },
        { id: 'q48', title: 'Seaborn/pandas interop?', content: 'Seaborn returns Axes/FacetGrid; combine with Matplotlib customization; set style before plotting.' },
        { id: 'q49', title: 'Notebook vs script differences?', content: 'Interactive backends differ; ensure plt.show in scripts; manage figure closing to prevent memory leaks.' },
        { id: 'q50', title: 'Reproducibility?', content: 'Pin Matplotlib version, set rcParams, seed randomness, and include code to regenerate figures.' }
      ]
    }
  ]
};
