import { TheoryTopic } from '@/types/theory';

export const dataVizTheory: TheoryTopic = {
  topicId: 'data-viz',
  topicName: 'Data Visualization',
  category: 'Data & AI',
  description: 'Data visualization techniques and tools',
  sections: [
    {
      id: 'principles',
      title: 'Visualization Principles',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is data visualization?', content: 'Data visualization represents data visually. Charts, graphs, maps, dashboards. Human perception. Pattern recognition. Communication tool. Essential for analysis.' },
        { id: 'q2', title: 'What are visualization goals?', content: 'Visualization goals: explore data, communicate findings, support decisions, tell stories, identify patterns, detect anomalies. Different purposes. Choose appropriately.' },
        { id: 'q3', title: 'What is chart selection?', content: 'Chart selection: match data to chart type. Categorical: bar, pie. Numerical: line, scatter. Time: line, area. Relationships: scatter, bubble. Choose wisely. Effective communication.' },
        { id: 'q4', title: 'What is color theory?', content: 'Color theory: use color meaningfully. Sequential (ordered data), diverging (deviation), categorical (distinct groups). Colorblind-friendly. Consistent palette. Visual design.' },
        { id: 'q5', title: 'What is visual hierarchy?', content: 'Visual hierarchy: guide eye. Size, color, position. Emphasize important. Clear structure. Design principle. User attention.' },
        { id: 'q6', title: 'What is data-ink ratio?', content: 'Data-ink ratio: maximize data, minimize decoration. Remove chartjunk. Focus on information. Tufte principle. Effective design.' },
        { id: 'q7', title: 'What is lie factor?', content: 'Lie factor: visual size vs data size ratio. Should be 1:1. Avoid distortion. Accurate representation. Honest visualization.' },
        { id: 'q8', title: 'What is chartjunk?', content: 'Chartjunk: unnecessary decoration. 3D effects, excessive colors, patterns. Distracts from data. Remove clutter. Clean design. Best practice.' },
        { id: 'q9', title: 'What is pre-attentive attributes?', content: 'Pre-attentive attributes: color, size, position, shape. Instant perception. Use for highlighting. Visual design. Attention guidance.' },
        { id: 'q10', title: 'What is storytelling?', content: 'Storytelling: narrative with data. Context, flow, insights. Engage audience. Communication. Effective presentation. Data journalism.' }
      ]
    },
    {
      id: 'chart-types',
      title: 'Chart Types',
      content: '',
      subsections: [
        { id: 'q11', title: 'What is bar chart?', content: 'Bar chart: compare categories. Horizontal or vertical. Easy to read. Common chart. Categorical data. Effective visualization.' },
        { id: 'q12', title: 'What is line chart?', content: 'Line chart: trends over time. Continuous data. Multiple series. Time series. Trend visualization. Common use.' },
        { id: 'q13', title: 'What is scatter plot?', content: 'Scatter plot: relationship between variables. Two numerical axes. Correlation visualization. Outlier detection. Relationship analysis.' },
        { id: 'q14', title: 'What is pie chart?', content: 'Pie chart: parts of whole. Proportions. Limited categories. Controversial (hard to compare). Use carefully. Proportion visualization.' },
        { id: 'q15', title: 'What is histogram?', content: 'Histogram: distribution of numerical data. Bins. Frequency. Shape of distribution. Statistical visualization. Data exploration.' },
        { id: 'q16', title: 'What is heatmap?', content: 'Heatmap: matrix with colors. Intensity mapping. Correlation matrices, geographic data. Pattern identification. Dense information.' },
        { id: 'q17', title: 'What is box plot?', content: 'Box plot: distribution summary. Quartiles, median, outliers. Statistical summary. Compare distributions. Statistical visualization.' },
        { id: 'q18', title: 'What is treemap?', content: 'Treemap: hierarchical data. Nested rectangles. Size and color. Hierarchical visualization. Space-efficient. Tree structure.' },
        { id: 'q19', title: 'What is network graph?', content: 'Network graph: nodes and edges. Relationships, connections. Social networks, dependencies. Graph visualization. Relationship mapping.' },
        { id: 'q20', title: 'What is geographic visualization?', content: 'Geographic visualization: maps, choropleth, bubble maps. Spatial data. Location patterns. Geographic analysis. Spatial insights.' }
      ]
    },
    {
      id: 'tools',
      title: 'Visualization Tools',
      content: '',
      subsections: [
        { id: 'q21', title: 'What is Tableau?', content: 'Tableau: powerful BI tool. Drag-and-drop. Interactive dashboards. Enterprise features. Popular tool. Business intelligence.' },
        { id: 'q22', title: 'What is PowerBI?', content: 'PowerBI: Microsoft BI tool. Integration with Microsoft stack. Self-service BI. Cloud and desktop. Enterprise tool. Popular platform.' },
        { id: 'q23', title: 'What is matplotlib?', content: 'matplotlib: Python plotting library. Publication-quality. Customizable. Programmatic. Data science standard. Python visualization.' },
        { id: 'q24', title: 'What is seaborn?', content: 'seaborn: statistical visualization. Built on matplotlib. Beautiful defaults. Statistical plots. Python library. Data science tool.' },
        { id: 'q25', title: 'What is D3.js?', content: 'D3.js: JavaScript visualization library. Web-based. Highly customizable. Interactive. Powerful. Web visualization.' },
        { id: 'q26', title: 'What is Plotly?', content: 'Plotly: interactive visualizations. Web-based. Multiple languages. Interactive charts. Modern tool. Data science.' },
        { id: 'q27', title: 'What is ggplot2?', content: 'ggplot2: R visualization. Grammar of graphics. Layered approach. Publication-quality. R standard. Statistical visualization.' },
        { id: 'q28', title: 'What is Excel charts?', content: 'Excel charts: basic visualization. Accessible. Common tool. Limited customization. Quick charts. Business standard.' },
        { id: 'q29', title: 'What is dashboard tools?', content: 'Dashboard tools: Tableau, PowerBI, Looker, Metabase, Grafana. Interactive dashboards. Real-time data. Business intelligence. Modern BI.' },
        { id: 'q30', title: 'What is tool selection?', content: 'Tool selection: consider audience, data size, interactivity needs, budget, team skills, integration. Choose appropriately. Right tool for job.' }
      ]
    },
    {
      id: 'design',
      title: 'Design Principles',
      content: '',
      subsections: [
        { id: 'q31', title: 'What is effective design?', content: 'Effective design: clear message, appropriate chart, readable, accurate, engaging. User-focused. Communication goal. Design principles.' },
        { id: 'q32', title: 'What is accessibility?', content: 'Accessibility: colorblind-friendly, alt text, clear labels, readable fonts. Inclusive design. Reach all users. Important consideration.' },
        { id: 'q33', title: 'What is responsive design?', content: 'Responsive design: works on all devices. Mobile, tablet, desktop. Flexible layouts. User experience. Modern requirement.' },
        { id: 'q34', title: 'What is interactivity?', content: 'Interactivity: filters, drill-down, tooltips, selection. User exploration. Engagement. Dynamic visualization. Modern standard.' },
        { id: 'q35', title: 'What is animation?', content: 'Animation: transitions, reveals, morphing. Guide attention. Smooth changes. Use sparingly. Visual polish. Modern feature.' },
        { id: 'q36', title: 'What is dashboard design?', content: 'Dashboard design: key metrics, logical layout, consistent styling, responsive, fast loading. Executive view. Information architecture.' },
        { id: 'q37', title: 'What is report design?', content: 'Report design: narrative flow, clear sections, supporting visuals, conclusions. Story structure. Communication. Effective reporting.' },
        { id: 'q38', title: 'What is data storytelling?', content: 'Data storytelling: narrative with data. Context, insights, actions. Engage audience. Persuasive. Communication skill. Effective presentation.' },
        { id: 'q39', title: 'What is visual analytics?', content: 'Visual analytics: interactive exploration. Discover patterns. Hypothesis testing. Analysis tool. Data exploration. Interactive investigation.' },
        { id: 'q40', title: 'What is design best practices?', content: 'Best practices: know audience, clear message, appropriate charts, remove clutter, use color wisely, test with users, iterate, document, accessibility, performance.' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced Topics',
      content: '',
      subsections: [
        { id: 'q41', title: 'What is real-time visualization?', content: 'Real-time visualization: streaming data, live updates, dashboards. Monitoring. Operational intelligence. Time-sensitive data. Modern requirement.' },
        { id: 'q42', title: 'What is big data visualization?', content: 'Big data visualization: sampling, aggregation, pre-processing, performance optimization. Handle scale. Efficient rendering. Large datasets. Technical challenge.' },
        { id: 'q43', title: 'What is 3D visualization?', content: '3D visualization: three dimensions. Spatial data, scientific visualization. Use carefully. Can be misleading. Specialized use. Advanced technique.' },
        { id: 'q44', title: 'What is interactive visualization?', content: 'Interactive visualization: user controls, filters, selections, drill-down. Exploration tool. Engagement. Modern standard. Web-based.' },
        { id: 'q45', title: 'What is data art?', content: 'Data art: aesthetic visualization. Creative expression. Artistic interpretation. Beyond analysis. Creative field. Visualization as art.' },
        { id: 'q46', title: 'What is infographics?', content: 'Infographics: information graphics. Combine data and design. Storytelling. Static format. Communication tool. Popular format.' },
        { id: 'q47', title: 'What is visualization evaluation?', content: 'Visualization evaluation: user testing, effectiveness, usability, accuracy. Measure success. Improve design. User feedback. Quality assurance.' },
        { id: 'q48', title: 'What is performance?', content: 'Performance: rendering speed, data size, optimization, caching, efficient queries. Fast loading. User experience. Technical consideration.' },
        { id: 'q49', title: 'What is visualization ethics?', content: 'Visualization ethics: accurate representation, avoid manipulation, disclose methods, honest scales, context. Ethical practice. Trust. Responsible visualization.' },
        { id: 'q50', title: 'What are visualization best practices?', content: 'Best practices: know your data, know your audience, choose right chart, remove clutter, use color wisely, test and iterate, tell story, be accurate, accessible, performant, document, follow principles.' }
      ]
    }
  ]
};
