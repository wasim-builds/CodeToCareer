import { TheoryTopic } from '@/types/theory';

export const scikitLearnTheory: TheoryTopic = {
  topicId: 'scikit-learn',
  topicName: 'Scikit-learn',
  category: 'Data & AI',
  description: 'Scikit-learn machine learning library',
  sections: [
    {
      id: 'basics',
      title: 'Scikit-learn Basics',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is scikit-learn?', content: 'Scikit-learn is Python ML library. Built on NumPy, SciPy, matplotlib. Algorithms: classification, regression, clustering, dimensionality reduction. Easy to use. Industry standard. Essential for ML.' },
        { id: 'q2', title: 'What is estimator API?', content: 'Estimator API: consistent interface. fit() trains, predict() predicts, transform() transforms, score() evaluates. Unified interface. Easy to use. Consistent pattern.' },
        { id: 'q3', title: 'What is fit-predict pattern?', content: 'Fit-predict pattern: model.fit(X_train, y_train), model.predict(X_test). Train then predict. Standard workflow. Core pattern. Essential understanding.' },
        { id: 'q4', title: 'What is train-test split?', content: 'Train-test split: separate data. train_test_split() function. Training set (learn), test set (evaluate). Prevent overfitting. Essential practice. Model evaluation.' },
        { id: 'q5', title: 'What is preprocessing?', content: 'Preprocessing: StandardScaler (normalize), MinMaxScaler (scale), LabelEncoder (encode), OneHotEncoder (categorical). Prepare data. Important step. Data preparation.' },
        { id: 'q6', title: 'What is pipeline?', content: 'Pipeline: chain preprocessing and model. Sequential steps. Clean workflow. Prevents data leakage. Convenient. Best practice.' },
        { id: 'q7', title: 'What is cross-validation?', content: 'Cross-validation: k-fold, stratified, leave-one-out. Robust evaluation. Multiple train-test splits. Better estimate. Model validation. Essential technique.' },
        { id: 'q8', title: 'What is GridSearchCV?', content: 'GridSearchCV: hyperparameter tuning. Try parameter combinations. Cross-validation. Find best parameters. Automated tuning. Model optimization.' },
        { id: 'q9', title: 'What is metrics?', content: 'Metrics: accuracy, precision, recall, F1, ROC-AUC, MSE, MAE. Evaluate models. Classification and regression. Performance measurement. Model assessment.' },
        { id: 'q10', title: 'What is model persistence?', content: 'Model persistence: joblib.dump() saves, joblib.load() loads. Save trained models. Reuse later. Deployment. Model storage.' }
      ]
    },
    {
      id: 'supervised',
      title: 'Supervised Learning',
      content: '',
      subsections: [
        { id: 'q11', title: 'What is classification?', content: 'Classification: predict categories. Algorithms: LogisticRegression, SVM, RandomForest, KNN, NaiveBayes. Categorical targets. Common problem type.' },
        { id: 'q12', title: 'What is regression?', content: 'Regression: predict continuous values. Algorithms: LinearRegression, Ridge, Lasso, RandomForestRegressor. Numeric targets. Prediction task.' },
        { id: 'q13', title: 'What is Logistic Regression?', content: 'Logistic Regression: binary classification. Probabilistic. Sigmoid function. Interpretable. Baseline model. Common algorithm.' },
        { id: 'q14', title: 'What is SVM?', content: 'SVM (Support Vector Machine): finds optimal boundary. Kernel trick. Can handle non-linear. Effective classifier. Powerful algorithm.' },
        { id: 'q15', title: 'What is Random Forest?', content: 'Random Forest: ensemble of trees. Bagging. Reduces overfitting. Feature importance. Robust. Popular algorithm. Good default.' },
        { id: 'q16', title: 'What is KNN?', content: 'KNN (K-Nearest Neighbors): instance-based. No training. Predict from neighbors. Simple. Lazy learning. Distance-based.' },
        { id: 'q17', title: 'What is Naive Bayes?', content: 'Naive Bayes: probabilistic classifier. Bayes theorem. Independence assumption. Fast. Good for text. Simple algorithm.' },
        { id: 'q18', title: 'What is Gradient Boosting?', content: 'Gradient Boosting: ensemble method. Sequential trees. Corrects errors. XGBoost, LightGBM variants. Powerful. Competition winner.' },
        { id: 'q19', title: 'What is decision tree?', content: 'Decision Tree: rule-based. Interpretable. Can overfit. Foundation for Random Forest. Simple to understand. Basic algorithm.' },
        { id: 'q20', title: 'What is model selection?', content: 'Model selection: try multiple algorithms. Compare performance. Choose best. Cross-validation. Systematic approach. Important practice.' }
      ]
    },
    {
      id: 'unsupervised',
      title: 'Unsupervised Learning',
      content: '',
      subsections: [
        { id: 'q21', title: 'What is clustering?', content: 'Clustering: group similar data. No labels. Algorithms: KMeans, DBSCAN, Hierarchical. Find patterns. Unsupervised learning. Data exploration.' },
        { id: 'q22', title: 'What is KMeans?', content: 'KMeans: partition into k clusters. Centroid-based. Simple. Fast. Choose k. Common algorithm. Clustering standard.' },
        { id: 'q23', title: 'What is DBSCAN?', content: 'DBSCAN: density-based clustering. Finds arbitrary shapes. Handles noise. No need to specify clusters. Advanced algorithm. Flexible clustering.' },
        { id: 'q24', title: 'What is dimensionality reduction?', content: 'Dimensionality reduction: reduce features. PCA (linear), t-SNE (non-linear). Visualization, noise reduction. Feature engineering. Important technique.' },
        { id: 'q25', title: 'What is PCA?', content: 'PCA (Principal Component Analysis): linear reduction. Maximizes variance. Orthogonal components. Common technique. Dimensionality reduction.' },
        { id: 'q26', title: 'What is feature selection?', content: 'Feature selection: choose important features. Reduce dimensionality. Improve performance. Remove noise. SelectKBest, RFE. Feature engineering.' },
        { id: 'q27', title: 'What is anomaly detection?', content: 'Anomaly detection: find outliers. IsolationForest, OneClassSVM. Unusual patterns. Fraud detection, quality control. Specialized task.' },
        { id: 'q28', title: 'What is manifold learning?', content: 'Manifold learning: non-linear reduction. t-SNE, UMAP. Visualization. Complex structures. Advanced technique. Data exploration.' },
        { id: 'q29', title: 'What is hierarchical clustering?', content: 'Hierarchical clustering: tree of clusters. Agglomerative or divisive. Dendrogram visualization. No need to specify k. Flexible. Clustering method.' },
        { id: 'q30', title: 'What is unsupervised evaluation?', content: 'Unsupervised evaluation: silhouette score, inertia, adjusted rand index. Harder than supervised. No ground truth. Quality measures. Clustering assessment.' }
      ]
    },
    {
      id: 'preprocessing',
      title: 'Data Preprocessing',
      content: '',
      subsections: [
        { id: 'q31', title: 'What is feature scaling?', content: 'Feature scaling: StandardScaler (mean 0, std 1), MinMaxScaler (0-1 range). Important for distance-based algorithms. Normalize features. Preprocessing step.' },
        { id: 'q32', title: 'What is encoding?', content: 'Encoding: LabelEncoder (ordinal), OneHotEncoder (categorical), TargetEncoder. Convert categories to numbers. Required for ML. Data preparation.' },
        { id: 'q33', title: 'What is imputation?', content: 'Imputation: fill missing values. SimpleImputer (mean, median, mode), KNNImputer. Handle missing data. Preprocessing. Data quality.' },
        { id: 'q34', title: 'What is feature engineering?', content: 'Feature engineering: create new features. PolynomialFeatures, interaction terms, domain knowledge. Improve performance. Art of ML. Important skill.' },
        { id: 'q35', title: 'What is feature selection?', content: 'Feature selection: choose relevant features. SelectKBest, RFE, feature importance. Reduce dimensionality. Improve performance. Model optimization.' },
        { id: 'q36', title: 'What is data leakage?', content: 'Data leakage: information from future/test in training. Prevents proper evaluation. Use pipelines. Careful preprocessing. Critical issue.' },
        { id: 'q37', title: 'What is train-validation-test?', content: 'Train-validation-test: three splits. Train (learn), validation (tune), test (final evaluation). Proper evaluation. Best practice. Model development.' },
        { id: 'q38', title: 'What is stratified split?', content: 'Stratified split: maintains class distribution. Important for imbalanced data. Representative splits. Better evaluation. Classification best practice.' },
        { id: 'q39', title: 'What is data transformation?', content: 'Data transformation: fit on train, transform on test. Prevents leakage. Pipeline handles. Proper workflow. Important practice.' },
        { id: 'q40', title: 'What is preprocessing best practices?', content: 'Best practices: fit on train only, use pipelines, handle missing data, scale features, encode categories, validate transformations, avoid leakage, document steps.' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced Topics',
      content: '',
      subsections: [
        { id: 'q41', title: 'What is ensemble methods?', content: 'Ensemble methods: combine multiple models. Voting, Bagging, Boosting, Stacking. Better performance. Reduce overfitting. Powerful technique. Competition winners.' },
        { id: 'q42', title: 'What is hyperparameter tuning?', content: 'Hyperparameter tuning: GridSearchCV, RandomizedSearchCV, Bayesian optimization. Find best parameters. Model optimization. Important step. Performance improvement.' },
        { id: 'q43', title: 'What is model evaluation?', content: 'Model evaluation: accuracy, precision, recall, F1, ROC-AUC, confusion matrix. Classification metrics. Understand performance. Model assessment. Essential skill.' },
        { id: 'q44', title: 'What is overfitting?', content: 'Overfitting: model memorizes training. Poor generalization. Solutions: regularization, cross-validation, more data, simpler models. Common problem. Training challenge.' },
        { id: 'q45', title: 'What is regularization?', content: 'Regularization: prevent overfitting. L1 (Lasso), L2 (Ridge), ElasticNet. Penalize complexity. Improve generalization. Training technique.' },
        { id: 'q46', title: 'What is learning curves?', content: 'Learning curves: plot performance vs data size. Diagnose: underfitting, overfitting, sufficient data. Model diagnosis. Understanding behavior. Diagnostic tool.' },
        { id: 'q47', title: 'What is model interpretation?', content: 'Model interpretation: feature importance, SHAP values, partial dependence. Understand predictions. Explainable AI. Trust and debugging. Important for production.' },
        { id: 'q48', title: 'What is imbalanced data?', content: 'Imbalanced data: unequal class distribution. Solutions: SMOTE, class weights, stratified sampling, different metrics. Handle imbalance. Common problem. Special techniques.' },
        { id: 'q49', title: 'What is scikit-learn best practices?', content: 'Best practices: use pipelines, cross-validate, tune hyperparameters, evaluate properly, avoid leakage, scale features, handle missing data, document, test, production deployment.' },
        { id: 'q50', title: 'What is scikit-learn vs deep learning?', content: 'Scikit-learn: traditional ML, tabular data, interpretable, fast training. Deep learning: complex patterns, images/text, less interpretable, more data needed. Choose based on problem.' }
      ]
    }
  ]
};
