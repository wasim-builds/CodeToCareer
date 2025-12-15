import { TheoryTopic } from '@/types/theory';

export const edaTheory: TheoryTopic = {
  topicId: 'eda',
  topicName: 'EDA',
  category: 'Data & AI',
  description: 'Exploratory Data Analysis methods',
  sections: [
    {
      id: 'basics',
      title: 'EDA Basics',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is EDA?', content: 'EDA (Exploratory Data Analysis) is initial data investigation. Understand data, discover patterns, identify anomalies, generate hypotheses. Before modeling. Data understanding. Essential step.' },
        { id: 'q2', title: 'What are EDA goals?', content: 'EDA goals: understand data structure, detect outliers, find patterns, identify relationships, generate hypotheses, assess data quality, inform modeling. Exploration phase. Data science foundation.' },
        { id: 'q3', title: 'What is data profiling?', content: 'Data profiling: shape, types, missing values, unique values, ranges, distributions. Quick overview. Data summary. First step. Understanding data.' },
        { id: 'q4', title: 'What is univariate analysis?', content: 'Univariate analysis: one variable at a time. Distributions, central tendency, spread, outliers. Individual variables. Basic analysis. Foundation.' },
        { id: 'q5', title: 'What is bivariate analysis?', content: 'Bivariate analysis: two variables. Relationships, correlations, associations. Pairwise analysis. Relationship discovery. Important step.' },
        { id: 'q6', title: 'What is multivariate analysis?', content: 'Multivariate analysis: multiple variables. Complex relationships, interactions, patterns. Advanced analysis. Comprehensive understanding. Data exploration.' },
        { id: 'q7', title: 'What is descriptive statistics?', content: 'Descriptive statistics: mean, median, mode, std, min, max, quartiles. Summarize data. Central tendency, dispersion. Basic measures. Data summary.' },
        { id: 'q8', title: 'What is data distribution?', content: 'Data distribution: shape of data. Normal, skewed, uniform, bimodal. Histograms, density plots. Understand patterns. Statistical analysis.' },
        { id: 'q9', title: 'What is outlier detection?', content: 'Outlier detection: identify unusual values. Statistical methods, visualization, domain knowledge. IQR method, z-scores. Data quality. Important step.' },
        { id: 'q10', title: 'What is missing data analysis?', content: 'Missing data analysis: identify missing patterns, assess impact, decide handling strategy. MCAR, MAR, MNAR. Data quality. Preprocessing decision.' }
      ]
    },
    {
      id: 'techniques',
      title: 'EDA Techniques',
      content: '',
      subsections: [
        { id: 'q11', title: 'What is summary statistics?', content: 'Summary statistics: describe(), info(), value_counts(). Quick overview. Data understanding. First exploration. Essential step.' },
        { id: 'q12', title: 'What is visualization in EDA?', content: 'Visualization: histograms, box plots, scatter plots, heatmaps, pair plots. Visual exploration. Pattern identification. Essential tool. Data understanding.' },
        { id: 'q13', title: 'What is correlation analysis?', content: 'Correlation analysis: relationships between variables. Pearson, Spearman, Kendall. Correlation matrix, heatmap. Understand dependencies. Important analysis.' },
        { id: 'q14', title: 'What is distribution analysis?', content: 'Distribution analysis: shape, skewness, kurtosis, normality tests. Understand data shape. Statistical properties. Model assumptions. Important step.' },
        { id: 'q15', title: 'What is categorical analysis?', content: 'Categorical analysis: frequency tables, bar charts, proportions, chi-square tests. Categorical variables. Distribution understanding. Category analysis.' },
        { id: 'q16', title: 'What is numerical analysis?', content: 'Numerical analysis: histograms, box plots, summary stats, normality tests. Continuous variables. Distribution understanding. Statistical analysis.' },
        { id: 'q17', title: 'What is time series EDA?', content: 'Time series EDA: trends, seasonality, cycles, stationarity. Temporal patterns. Time-based analysis. Specialized EDA. Temporal data.' },
        { id: 'q18', title: 'What is feature relationships?', content: 'Feature relationships: correlations, associations, interactions, dependencies. Understand connections. Feature engineering insights. Model preparation.' },
        { id: 'q19', title: 'What is data quality assessment?', content: 'Data quality: completeness, accuracy, consistency, validity, timeliness. Assess quality. Data issues. Preprocessing needs. Important evaluation.' },
        { id: 'q20', title: 'What is hypothesis generation?', content: 'Hypothesis generation: form questions, patterns suggest hypotheses, testable statements. Guide analysis. Research direction. EDA outcome.' }
      ]
    },
    {
      id: 'visualization',
      title: 'EDA Visualization',
      content: '',
      subsections: [
        { id: 'q21', title: 'What is histogram?', content: 'Histogram: distribution of numerical data. Bins, frequency. Shape visualization. Univariate analysis. Common plot. Distribution understanding.' },
        { id: 'q22', title: 'What is box plot?', content: 'Box plot: distribution summary. Quartiles, median, outliers. Compare distributions. Statistical summary. Outlier detection. Useful plot.' },
        { id: 'q23', title: 'What is scatter plot?', content: 'Scatter plot: relationship between two variables. Correlation visualization. Outlier detection. Bivariate analysis. Relationship discovery.' },
        { id: 'q24', title: 'What is pair plot?', content: 'Pair plot: all variable pairs. Correlation matrix visual. Comprehensive view. Multivariate analysis. Pattern identification. EDA tool.' },
        { id: 'q25', title: 'What is heatmap?', content: 'Heatmap: correlation matrix, missing data patterns, intensity mapping. Dense information. Pattern identification. Useful visualization.' },
        { id: 'q26', title: 'What is violin plot?', content: 'Violin plot: distribution shape. Combines box plot and density. Rich information. Distribution detail. Advanced visualization.' },
        { id: 'q27', title: 'What is Q-Q plot?', content: 'Q-Q plot: normality check. Compare to theoretical distribution. Statistical test. Normality assessment. Model assumptions.' },
        { id: 'q28', title: 'What is residual plot?', content: 'Residual plot: model diagnostics. Check assumptions. Pattern detection. Model validation. Regression analysis.' },
        { id: 'q29', title: 'What is facet plots?', content: 'Facet plots: multiple subplots. Group by category. Comparative analysis. Multi-dimensional. Comprehensive view. Advanced visualization.' },
        { id: 'q30', title: 'What is interactive EDA?', content: 'Interactive EDA: Jupyter notebooks, Plotly, Bokeh. Dynamic exploration. User interaction. Modern tools. Enhanced exploration.' }
      ]
    },
    {
      id: 'analysis',
      title: 'Statistical Analysis',
      content: '',
      subsections: [
        { id: 'q31', title: 'What is statistical tests?', content: 'Statistical tests: normality (Shapiro-Wilk), correlation (Pearson), independence (chi-square). Validate assumptions. Hypothesis testing. Statistical rigor.' },
        { id: 'q32', title: 'What is normality testing?', content: 'Normality testing: Shapiro-Wilk, Kolmogorov-Smirnov, Q-Q plots. Check distribution. Model assumptions. Statistical requirement. Important test.' },
        { id: 'q33', title: 'What is correlation testing?', content: 'Correlation testing: Pearson (linear), Spearman (monotonic), Kendall (rank). Statistical significance. Relationship strength. Hypothesis testing.' },
        { id: 'q34', title: 'What is outlier statistical methods?', content: 'Outlier methods: IQR (1.5*IQR rule), z-scores (>3), modified z-scores. Statistical detection. Objective methods. Data quality.' },
        { id: 'q35', title: 'What is feature importance?', content: 'Feature importance: which features matter. Correlation, mutual information, tree-based importance. Feature selection. Model insights. EDA outcome.' },
        { id: 'q36', title: 'What is data transformation?', content: 'Data transformation: log, sqrt, Box-Cox. Normalize distributions. Meet assumptions. Preprocessing. Statistical requirement.' },
        { id: 'q37', title: 'What is sampling?', content: 'Sampling: random, stratified, systematic. Large datasets. Representative samples. Efficient analysis. Statistical sampling.' },
        { id: 'q38', title: 'What is data profiling tools?', content: 'Profiling tools: pandas-profiling, sweetviz, dataprep. Automated EDA. Quick insights. Time saving. Comprehensive reports.' },
        { id: 'q39', title: 'What is EDA documentation?', content: 'EDA documentation: findings, patterns, issues, decisions, visualizations. Record insights. Reproducible. Team knowledge. Important practice.' },
        { id: 'q40', title: 'What is EDA workflow?', content: 'EDA workflow: load data, profile, visualize, analyze, document, iterate. Systematic approach. Comprehensive exploration. Best practice.' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced EDA',
      content: '',
      subsections: [
        { id: 'q41', title: 'What is automated EDA?', content: 'Automated EDA: tools generate reports. pandas-profiling, dataprep, sweetviz. Quick overview. Time saving. Comprehensive analysis. Modern tools.' },
        { id: 'q42', title: 'What is multivariate techniques?', content: 'Multivariate techniques: PCA, factor analysis, cluster analysis. Dimensionality reduction. Pattern discovery. Advanced analysis. Complex relationships.' },
        { id: 'q43', title: 'What is text EDA?', content: 'Text EDA: word frequency, n-grams, sentiment, topic modeling. Text analysis. NLP preparation. Specialized EDA. Text data.' },
        { id: 'q44', title: 'What is geospatial EDA?', content: 'Geospatial EDA: maps, spatial patterns, geographic distributions. Location analysis. Spatial data. Specialized EDA. Geographic insights.' },
        { id: 'q45', title: 'What is time series EDA?', content: 'Time series EDA: trends, seasonality, autocorrelation, stationarity. Temporal patterns. Time-based analysis. Specialized techniques. Time data.' },
        { id: 'q46', title: 'What is big data EDA?', content: 'Big data EDA: sampling, aggregation, distributed computing, visualization challenges. Handle scale. Efficient methods. Large datasets.' },
        { id: 'q47', title: 'What is EDA for ML?', content: 'EDA for ML: feature engineering insights, model assumptions, data quality, preprocessing needs. Model preparation. ML pipeline. Important step.' },
        { id: 'q48', title: 'What is iterative EDA?', content: 'Iterative EDA: explore, analyze, refine, repeat. Deep dive. Progressive understanding. Continuous exploration. Analysis process.' },
        { id: 'q49', title: 'What is EDA tools?', content: 'EDA tools: Python (pandas, matplotlib, seaborn), R (ggplot2, dplyr), Jupyter, Tableau, PowerBI. Various tools. Choose based on needs. Tool ecosystem.' },
        { id: 'q50', title: 'What are EDA best practices?', content: 'Best practices: start simple, visualize early, document findings, iterate, use multiple techniques, validate assumptions, understand domain, clean data, test hypotheses, communicate insights, be thorough, question data.' }
      ]
    }
  ]
};
