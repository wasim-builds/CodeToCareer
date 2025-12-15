import { TheoryTopic } from '@/types/theory';

export const powerbiTheory: TheoryTopic = {
  topicId: 'powerbi',
  topicName: 'PowerBI',
  category: 'Data & AI',
  description: 'PowerBI business intelligence and data visualization',
  sections: [
    {
      id: 'basics',
      title: 'PowerBI Basics',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is PowerBI?', content: 'PowerBI is Microsoft business intelligence tool. Data visualization and analytics. Connect to data sources, transform data, create reports and dashboards. Self-service BI. Popular tool. Enterprise analytics.' },
        { id: 'q2', title: 'What is PowerBI Desktop?', content: 'PowerBI Desktop: free desktop application. Create reports. Data modeling. Visualization design. Development tool. Authoring environment. Local development.' },
        { id: 'q3', title: 'What is PowerBI Service?', content: 'PowerBI Service: cloud platform. Publish and share reports. Collaboration. Dashboards. Mobile access. Enterprise features. Cloud deployment.' },
        { id: 'q4', title: 'What is data model?', content: 'Data model: tables, relationships, measures, calculated columns. Star schema common. Optimize for performance. Foundation of reports. Data structure.' },
        { id: 'q5', title: 'What is DAX?', content: 'DAX (Data Analysis Expressions): formula language. Calculated columns, measures, calculated tables. Similar to Excel formulas. Powerful calculations. Essential skill.' },
        { id: 'q6', title: 'What is Power Query?', content: 'Power Query: data transformation. ETL tool. Clean, transform, combine data. M language. Data preparation. Important step.' },
        { id: 'q7', title: 'What is visualization?', content: 'Visualization: charts, graphs, tables, maps, cards. Visual representation. Interactive. User exploration. Communication tool. Core feature.' },
        { id: 'q8', title: 'What is report?', content: 'Report: collection of visualizations. Multiple pages. Interactive filters. User exploration. Analysis tool. Primary deliverable.' },
        { id: 'q9', title: 'What is dashboard?', content: 'Dashboard: single page view. Key metrics. Multiple visuals. Overview. Executive summary. High-level view.' },
        { id: 'q10', title: 'What is dataset?', content: 'Dataset: data source definition. Tables, relationships, measures. Reusable. Shared across reports. Data foundation. Centralized data.' }
      ]
    },
    {
      id: 'data',
      title: 'Data Management',
      content: '',
      subsections: [
        { id: 'q11', title: 'What are data sources?', content: 'Data sources: Excel, SQL Server, CSV, APIs, cloud services, files. Connect to various sources. Data integration. Flexible connectivity. Wide support.' },
        { id: 'q12', title: 'What is data transformation?', content: 'Data transformation: clean, reshape, combine data. Power Query Editor. Remove duplicates, change types, merge, pivot. Data preparation. ETL process.' },
        { id: 'q13', title: 'What is relationship?', content: 'Relationship: links tables. One-to-many common. Star schema. Enable cross-table analysis. Data model foundation. Essential for analysis.' },
        { id: 'q14', title: 'What is calculated column?', content: 'Calculated column: DAX formula, stored in table, uses row context. Computed during refresh. Use for: filtering, grouping. Data enhancement.' },
        { id: 'q15', title: 'What is measure?', content: 'Measure: DAX formula, computed on demand, uses filter context. Dynamic calculation. Aggregations. Use for: KPIs, metrics. Analysis calculations.' },
        { id: 'q16', title: 'What is filter context?', content: 'Filter context: active filters. Affects measure calculation. Row, column, visual, page, report filters. DAX understanding. Critical concept.' },
        { id: 'q17', title: 'What is row context?', content: 'Row context: current row in calculation. Used in calculated columns. Iteration. Row-by-row calculation. DAX concept. Column calculations.' },
        { id: 'q18', title: 'What is data refresh?', content: 'Data refresh: update data from source. Scheduled or manual. Keep current. Data currency. Important for accuracy. Automation possible.' },
        { id: 'q19', title: 'What is incremental refresh?', content: 'Incremental refresh: load only new/changed data. Faster refresh. Large datasets. Performance optimization. Efficient updates.' },
        { id: 'q20', title: 'What is data modeling best practices?', content: 'Best practices: star schema, proper relationships, optimize data types, remove unnecessary columns, use measures not columns for calculations, document model, test relationships.' }
      ]
    },
    {
      id: 'dax',
      title: 'DAX Language',
      content: '',
      subsections: [
        { id: 'q21', title: 'What are DAX functions?', content: 'DAX functions: aggregation (SUM, AVERAGE), filter (FILTER, CALCULATE), time intelligence (DATEADD, SAMEPERIODLASTYEAR), text, logical. Powerful calculations. Extensive library.' },
        { id: 'q22', title: 'What is CALCULATE?', content: 'CALCULATE: modifies filter context. Most important function. Change filters. Complex calculations. DAX foundation. Essential function.' },
        { id: 'q23', title: 'What is FILTER?', content: 'FILTER: returns filtered table. Use in CALCULATE. Table expressions. Advanced filtering. DAX function. Table manipulation.' },
        { id: 'q24', title: 'What is time intelligence?', content: 'Time intelligence: time-based calculations. YTD, MTD, previous period, year-over-year. Common in BI. Date functions. Temporal analysis.' },
        { id: 'q25', title: 'What is RELATED?', content: 'RELATED: fetch value from related table. Cross-table lookup. Use in calculated columns. Relationship traversal. Data access.' },
        { id: 'q26', title: 'What is SUMX?', content: 'SUMX: iterates and sums. Row-by-row calculation. More flexible than SUM. Advanced aggregation. DAX iterator function.' },
        { id: 'q27', title: 'What is IF/SWITCH?', content: 'IF/SWITCH: conditional logic. IF for binary, SWITCH for multiple. Conditional calculations. Logic in formulas. Common pattern.' },
        { id: 'q28', title: 'What is ALL/ALLEXCEPT?', content: 'ALL: removes filters, ALLEXCEPT: removes all except specified. Filter manipulation. Advanced calculations. Context modification. DAX functions.' },
        { id: 'q29', title: 'What is DAX best practices?', content: 'Best practices: use measures for aggregations, avoid calculated columns when possible, use variables, optimize performance, test formulas, document complex logic, use time intelligence, understand context.' },
        { id: 'q30', title: 'What is DAX performance?', content: 'DAX performance: avoid row-by-row in measures, use proper relationships, minimize calculated columns, optimize filters, use variables, test and profile. Faster calculations. Important for large data.' }
      ]
    },
    {
      id: 'visualization',
      title: 'Visualization',
      content: '',
      subsections: [
        { id: 'q31', title: 'What are visualization types?', content: 'Visualization types: bar, line, pie, scatter, map, table, matrix, card, gauge, funnel. Choose based on data and message. Effective communication. Visual design.' },
        { id: 'q32', title: 'What is drill-through?', content: 'Drill-through: navigate to detail page. Context passed. Detailed analysis. User exploration. Navigation feature. Interactive reports.' },
        { id: 'q33', title: 'What is drill-down?', content: 'Drill-down: expand hierarchy. Year -> Quarter -> Month. Hierarchical exploration. Data navigation. Analysis feature.' },
        { id: 'q34', title: 'What is cross-filtering?', content: 'Cross-filtering: selecting visual filters others. Interactive exploration. Connected visuals. User interaction. Analysis tool.' },
        { id: 'q35', title: 'What is bookmarks?', content: 'Bookmarks: save visual state. Filters, selections, views. Navigation. Storytelling. Presentation tool. User experience.' },
        { id: 'q36', title: 'What is themes?', content: 'Themes: consistent styling. Colors, fonts, formatting. Brand consistency. Professional appearance. Design system. Visual identity.' },
        { id: 'q37', title: 'What is custom visuals?', content: 'Custom visuals: third-party or custom. Extend capabilities. Marketplace available. Specialized needs. Enhanced functionality.' },
        { id: 'q38', title: 'What is R/Python visuals?', content: 'R/Python visuals: custom code visuals. Advanced analytics. Statistical analysis. Custom calculations. Data science integration.' },
        { id: 'q39', title: 'What is mobile layout?', content: 'Mobile layout: optimize for phones. Responsive design. Touch-friendly. Mobile access. User experience. Important consideration.' },
        { id: 'q40', title: 'What is visualization best practices?', content: 'Best practices: choose right chart type, clear titles, appropriate colors, avoid clutter, use filters, responsive design, test on devices, tell story, focus on insights.' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced PowerBI',
      content: '',
      subsections: [
        { id: 'q41', title: 'What is PowerBI Gateway?', content: 'PowerBI Gateway: on-premises data bridge. Secure connection. Scheduled refresh. Hybrid scenarios. Enterprise feature. Data connectivity.' },
        { id: 'q42', title: 'What is row-level security?', content: 'Row-level security: filter data by user. Role-based access. Data security. User-specific views. Enterprise feature. Important for multi-tenant.' },
        { id: 'q43', title: 'What is PowerBI Premium?', content: 'PowerBI Premium: dedicated capacity. Better performance, larger datasets, more features. Enterprise option. Advanced capabilities. Paid tier.' },
        { id: 'q44', title: 'What is dataflows?', content: 'Dataflows: reusable data preparation. ETL in cloud. Share transformations. Centralized logic. Data preparation. Efficiency tool.' },
        { id: 'q45', title: 'What is paginated reports?', content: 'Paginated reports: pixel-perfect reports. PDF export. Printing. Formal reports. Different from interactive. Report format.' },
        { id: 'q46', title: 'What is AI features?', content: 'AI features: Q&A (natural language), key influencers, decomposition trees, anomaly detection. Built-in AI. Advanced analytics. Modern features.' },
        { id: 'q47', title: 'What is PowerBI API?', content: 'PowerBI API: programmatic access. Embed reports, automate, integrate. REST API. Automation. Integration tool.' },
        { id: 'q48', title: 'What is embedding?', content: 'Embedding: embed reports in apps. Iframe or SDK. Custom applications. White-label. Integration. Deployment option.' },
        { id: 'q49', title: 'What is performance optimization?', content: 'Performance optimization: optimize data model, reduce columns, use aggregations, optimize DAX, incremental refresh, proper relationships. Faster reports. User experience.' },
        { id: 'q50', title: 'What are PowerBI best practices?', content: 'Best practices: proper data modeling, use measures, optimize performance, secure data, document reports, test thoroughly, user training, regular updates, monitor usage, follow design principles.' }
      ]
    }
  ]
};
