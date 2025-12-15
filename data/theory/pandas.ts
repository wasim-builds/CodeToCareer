import { TheoryTopic } from '@/types/theory';

export const pandasTheory: TheoryTopic = {
  topicId: 'pandas',
  topicName: 'Pandas',
  category: 'Data & AI',
  description: 'Pandas data manipulation and analysis',
  sections: [
    {
      id: 'basics',
      title: 'Pandas Basics',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is Pandas?', content: 'Pandas is Python library for data manipulation. Provides: DataFrame, Series, data structures. Handles: CSV, Excel, SQL, JSON. Data analysis tool. Built on NumPy. Essential for data science.' },
        { id: 'q2', title: 'What is DataFrame?', content: 'DataFrame is 2D labeled data structure. Rows and columns. Like spreadsheet or SQL table. Flexible indexing. Powerful operations. Primary data structure. Core of Pandas.' },
        { id: 'q3', title: 'What is Series?', content: 'Series is 1D labeled array. Single column of DataFrame. Index and values. Vectorized operations. Efficient. Building block. Used throughout Pandas.' },
        { id: 'q4', title: 'How to create DataFrame?', content: 'Create DataFrame: pd.DataFrame(data), from dict, from list of dicts, from CSV, from SQL. Multiple ways. Flexible creation. Common: pd.read_csv(). Data loading.' },
        { id: 'q5', title: 'What is read_csv()?', content: 'read_csv() reads CSV files. Syntax: pd.read_csv("file.csv"). Options: sep, header, index_col, usecols, na_values. Most common data loading. Handles various formats.' },
        { id: 'q6', title: 'What is indexing?', content: 'Indexing accesses data. loc (label-based), iloc (integer-based), at (single value), iat (single integer). df.loc[row, col], df.iloc[row_idx, col_idx]. Data access. Essential operation.' },
        { id: 'q7', title: 'What is boolean indexing?', content: 'Boolean indexing filters data. Syntax: df[df["column"] > value]. Creates boolean mask. Filters rows. Powerful selection. Common pattern. Data filtering.' },
        { id: 'q8', title: 'What is head() and tail()?', content: 'head() shows first rows, tail() shows last rows. Default: 5 rows. Quick inspection. View data. Common first step. Data exploration.' },
        { id: 'q9', title: 'What is info() and describe()?', content: 'info() shows data types and memory. describe() shows statistics. Data overview. Quick analysis. Understanding data. First exploration steps.' },
        { id: 'q10', title: 'What is shape and dtypes?', content: 'shape returns (rows, columns). dtypes shows column types. Data dimensions. Type information. Quick checks. Essential properties.' }
      ]
    },
    {
      id: 'data-manipulation',
      title: 'Data Manipulation',
      content: '',
      subsections: [
        { id: 'q11', title: 'What is drop()?', content: 'drop() removes rows/columns. Syntax: df.drop(labels, axis=0/1). axis=0 (rows), axis=1 (columns). inplace=True modifies DataFrame. Data cleaning. Remove unwanted data.' },
        { id: 'q12', title: 'What is fillna()?', content: 'fillna() fills missing values. Methods: value, method (ffill, bfill), limit. Handle missing data. Data cleaning. Important preprocessing step.' },
        { id: 'q13', title: 'What is dropna()?', content: 'dropna() removes rows/columns with NaN. Options: how (any/all), axis, subset. Handle missing data. Data cleaning. Remove incomplete rows.' },
        { id: 'q14', title: 'What is groupby()?', content: 'groupby() groups data. Syntax: df.groupby("column"). Aggregations: sum(), mean(), count(), etc. Similar to SQL GROUP BY. Powerful operation. Data aggregation.' },
        { id: 'q15', title: 'What is merge()?', content: 'merge() joins DataFrames. Types: inner, left, right, outer. Similar to SQL JOIN. Combine data. Key operation. Data integration.' },
        { id: 'q16', title: 'What is concat()?', content: 'concat() combines DataFrames. Stack vertically or horizontally. axis=0 (vertical), axis=1 (horizontal). Combine data. Simple joining. Common operation.' },
        { id: 'q17', title: 'What is pivot_table()?', content: 'pivot_table() creates pivot table. Reshapes data. Aggregates values. Similar to Excel pivot. Data transformation. Analysis tool.' },
        { id: 'q18', title: 'What is apply()?', content: 'apply() applies function. Row or column wise. Custom transformations. Flexible operation. Powerful feature. Data processing.' },
        { id: 'q19', title: 'What is map() and applymap()?', content: 'map() applies function to Series. applymap() applies to all elements. Element-wise operations. Transformations. Data manipulation.' },
        { id: 'q20', title: 'What is sort_values()?', content: 'sort_values() sorts DataFrame. By column(s). ascending parameter. Multiple columns. Data ordering. Common operation. Analysis preparation.' }
      ]
    },
    {
      id: 'data-cleaning',
      title: 'Data Cleaning',
      content: '',
      subsections: [
        { id: 'q21', title: 'What is duplicate handling?', content: 'Duplicate handling: duplicated() finds duplicates, drop_duplicates() removes. Keep parameter: first, last, False. Data quality. Remove duplicates. Clean data.' },
        { id: 'q22', title: 'What is data type conversion?', content: 'Type conversion: astype() converts types, to_numeric() converts to numeric, to_datetime() converts to datetime. Data type management. Important preprocessing. Correct types.' },
        { id: 'q23', title: 'What is string operations?', content: 'String operations: .str accessor. Methods: .str.upper(), .str.lower(), .str.contains(), .str.replace(). Vectorized string operations. Text processing. Powerful feature.' },
        { id: 'q24', title: 'What is value_counts()?', content: 'value_counts() counts value frequencies. Shows distribution. Useful for: categorical data, data exploration. Quick analysis. Understanding data.' },
        { id: 'q25', title: 'What is isna() and notna()?', content: 'isna() checks for missing values, notna() checks for non-missing. Boolean DataFrame. Identify missing data. Data quality checks. Important step.' },
        { id: 'q26', title: 'What is replace()?', content: 'replace() replaces values. Syntax: df.replace(old, new). Can use dict for multiple. Value substitution. Data cleaning. Common operation.' },
        { id: 'q27', title: 'What is rename()?', content: 'rename() renames columns/index. Use dict for mapping. Clean names. Better readability. Data organization. Common preprocessing.' },
        { id: 'q28', title: 'What is set_index() and reset_index()?', content: 'set_index() sets column as index, reset_index() converts index to column. Index management. Data organization. Flexible indexing. Important operations.' },
        { id: 'q29', title: 'What is query()?', content: 'query() filters using string expression. Syntax: df.query("column > value"). Readable queries. Alternative to boolean indexing. Convenient filtering.' },
        { id: 'q30', title: 'What is data validation?', content: 'Data validation: check types, ranges, formats, completeness. Ensure data quality. Prevent errors. Important preprocessing. Data integrity.' }
      ]
    },
    {
      id: 'aggregation',
      title: 'Aggregation and Analysis',
      content: '',
      subsections: [
        { id: 'q31', title: 'What are aggregation functions?', content: 'Aggregation functions: sum(), mean(), median(), std(), min(), max(), count(). Group operations. Statistical analysis. Data summarization. Essential operations.' },
        { id: 'q32', title: 'What is agg()?', content: 'agg() applies multiple aggregations. Syntax: df.agg({"col": ["sum", "mean"]}). Multiple functions. Flexible aggregation. Powerful feature. Analysis tool.' },
        { id: 'q33', title: 'What is transform()?', content: 'transform() applies function but returns same shape. Group-wise transformations. Normalize within groups. Keep original structure. Useful operation.' },
        { id: 'q34', title: 'What is rolling()?', content: 'rolling() creates rolling window. Time series operations. Moving averages. Window functions. Smoothing data. Analysis tool.' },
        { id: 'q35', title: 'What is resample()?', content: 'resample() resamples time series. Change frequency. Downsample or upsample. Time-based grouping. Time series analysis. Important for temporal data.' },
        { id: 'q36', title: 'What is crosstab()?', content: 'crosstab() creates cross-tabulation. Frequency table. Two variables. Analysis tool. Understand relationships. Data exploration.' },
        { id: 'q37', title: 'What is cut() and qcut()?', content: 'cut() bins continuous data into categories, qcut() uses quantiles. Data discretization. Create categories. Analysis preparation. Useful transformation.' },
        { id: 'q38', title: 'What is get_dummies()?', content: 'get_dummies() creates dummy variables. One-hot encoding. Categorical to numeric. Machine learning preparation. Common preprocessing. Important transformation.' },
        { id: 'q39', title: 'What is correlation?', content: 'corr() calculates correlation matrix. Relationships between variables. -1 to 1 range. Data analysis. Understand dependencies. Statistical measure.' },
        { id: 'q40', title: 'What is pivot vs melt?', content: 'pivot() widens data (long to wide), melt() lengthens data (wide to long). Data reshaping. Different formats. Analysis needs. Flexible transformation.' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced Pandas',
      content: '',
      subsections: [
        { id: 'q41', title: 'What is MultiIndex?', content: 'MultiIndex has multiple index levels. Hierarchical indexing. Complex data organization. Access with tuples. Advanced indexing. Powerful feature.' },
        { id: 'q42', title: 'What is time series?', content: 'Time series: datetime index, time-based operations, resampling, shifting, rolling windows. Temporal data. Specialized operations. Important for time data.' },
        { id: 'q43', title: 'What is performance optimization?', content: 'Performance: use vectorized operations, avoid loops, use appropriate dtypes, use categorical, chunk large files, use numba, profile code. Faster execution. Important for large data.' },
        { id: 'q44', title: 'What is memory optimization?', content: 'Memory optimization: use appropriate dtypes, categorical for strings, downcast numeric types, chunk processing, delete unused columns. Reduce memory usage. Handle large datasets.' },
        { id: 'q45', title: 'What is chunking?', content: 'Chunking processes data in chunks. read_csv(chunksize=n). Iterate over chunks. Handle large files. Memory efficient. Process big data.' },
        { id: 'q46', title: 'What is categorical data?', content: 'Categorical data: limited unique values. Memory efficient. Faster operations. Use for: strings with few values. Optimization technique. Data type choice.' },
        { id: 'q47', title: 'What is vectorization?', content: 'Vectorization applies operations to entire arrays. NumPy/Pandas operations. Much faster than loops. Use vectorized operations. Performance critical. Best practice.' },
        { id: 'q48', title: 'What is pandas with SQL?', content: 'Pandas with SQL: read_sql() reads from database, to_sql() writes to database. Database integration. Data pipelines. Common pattern. Data workflows.' },
        { id: 'q49', title: 'What is pandas with Excel?', content: 'Pandas with Excel: read_excel() reads, to_excel() writes. Excel integration. Business data. Common format. Data exchange.' },
        { id: 'q50', title: 'What are Pandas best practices?', content: 'Best practices: use vectorized operations, appropriate dtypes, handle missing data, validate data, use functions, document code, test operations, optimize performance, clean code, follow conventions, use modern Pandas, understand data, efficient operations.' }
      ]
    }
  ]
};
