import { TheoryTopic } from '@/types/theory';

export const tensorflowTheory: TheoryTopic = {
  topicId: 'tensorflow',
  topicName: 'TensorFlow',
  category: 'Data & AI',
  description: 'TensorFlow machine learning framework',
  sections: [
    {
      id: 'basics',
      title: 'TensorFlow Basics',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is TensorFlow?', content: 'TensorFlow is open-source ML framework by Google. Build and train ML models. Supports: neural networks, deep learning, various algorithms. Production-ready. Large ecosystem. Industry standard.' },
        { id: 'q2', title: 'What is a tensor?', content: 'Tensor is multi-dimensional array. 0D (scalar), 1D (vector), 2D (matrix), 3D+ (higher dimensions). Fundamental data structure. All data in tensors. Core concept.' },
        { id: 'q3', title: 'What is computational graph?', content: 'Computational graph represents operations. Nodes are operations, edges are tensors. Define-then-run (TF 1.x) or eager execution (TF 2.x). Graph optimization. Efficient execution.' },
        { id: 'q4', title: 'What is eager execution?', content: 'Eager execution runs immediately. TF 2.x default. Python-like. Easier debugging. Interactive development. More intuitive. Modern TensorFlow.' },
        { id: 'q5', title: 'What is Keras?', content: 'Keras is high-level API. Built into TensorFlow. Simplifies model building. User-friendly. Rapid prototyping. Most common interface. TF 2.x standard.' },
        { id: 'q6', title: 'What is model?', content: 'Model represents ML algorithm. Sequential or Functional API. Layers stacked. Trained on data. Makes predictions. Core component.' },
        { id: 'q7', title: 'What are layers?', content: 'Layers are building blocks. Types: Dense (fully connected), Conv2D (convolutional), LSTM (recurrent), Dropout (regularization). Stack to build models. Neural network components.' },
        { id: 'q8', title: 'What is Sequential model?', content: 'Sequential model: linear stack of layers. Simple architecture. One input, one output. Easy to use. Good for: simple models, learning. Common pattern.' },
        { id: 'q9', title: 'What is Functional API?', content: 'Functional API: complex architectures. Multiple inputs/outputs, shared layers, residual connections. More flexible. Advanced models. Production use.' },
        { id: 'q10', title: 'What is model compilation?', content: 'Model compilation: specify optimizer, loss function, metrics. Prepares for training. Required before fit(). Configuration step. Training setup.' }
      ]
    },
    {
      id: 'training',
      title: 'Model Training',
      content: '',
      subsections: [
        { id: 'q11', title: 'What is model training?', content: 'Model training: fit() method. Provide data, epochs, batch size, validation data. Learn from data. Adjust weights. Iterative process. Core operation.' },
        { id: 'q12', title: 'What is loss function?', content: 'Loss function measures error. Examples: mean_squared_error, categorical_crossentropy, binary_crossentropy. Minimize during training. Choose based on problem. Critical component.' },
        { id: 'q13', title: 'What is optimizer?', content: 'Optimizer updates weights. Examples: SGD, Adam, RMSprop, Adagrad. Different algorithms. Adam popular default. Learning rate important. Training mechanism.' },
        { id: 'q14', title: 'What is learning rate?', content: 'Learning rate controls step size. Too high: overshoot, too low: slow convergence. Hyperparameter. Tune carefully. Important for training. Affects convergence.' },
        { id: 'q15', title: 'What is batch size?', content: 'Batch size: samples per update. Larger: stable, more memory. Smaller: noisy, less memory. Tune based on: data size, memory, stability. Training parameter.' },
        { id: 'q16', title: 'What is epoch?', content: 'Epoch: one pass through entire dataset. Multiple epochs needed. Monitor for overfitting. Training duration. Iteration control.' },
        { id: 'q17', title: 'What is validation?', content: 'Validation: evaluate on held-out data. Monitor generalization. Detect overfitting. Separate from training. Model evaluation. Important practice.' },
        { id: 'q18', title: 'What is overfitting?', content: 'Overfitting: model memorizes training data. Poor generalization. High training accuracy, low validation accuracy. Solutions: regularization, dropout, more data. Common problem.' },
        { id: 'q19', title: 'What is callbacks?', content: 'Callbacks: functions called during training. Examples: EarlyStopping, ModelCheckpoint, ReduceLROnPlateau. Monitor training. Automate actions. Training control.' },
        { id: 'q20', title: 'What is model evaluation?', content: 'Model evaluation: evaluate() on test data. Metrics: accuracy, precision, recall, F1. Assess performance. Final assessment. Production readiness.' }
      ]
    },
    {
      id: 'neural-networks',
      title: 'Neural Networks',
      content: '',
      subsections: [
        { id: 'q21', title: 'What is neural network?', content: 'Neural network: layers of neurons. Input, hidden, output layers. Learn patterns. Universal approximators. Foundation of deep learning. Powerful models.' },
        { id: 'q22', title: 'What is activation function?', content: 'Activation function: introduces non-linearity. Examples: ReLU, sigmoid, tanh, softmax. Different for output vs hidden. Critical for learning. Model capability.' },
        { id: 'q23', title: 'What is backpropagation?', content: 'Backpropagation: computes gradients. Chain rule. Updates weights. Training algorithm. Automatic in TensorFlow. Core learning mechanism.' },
        { id: 'q24', title: 'What is CNN?', content: 'CNN (Convolutional Neural Network): for images. Conv2D layers. Feature extraction. Spatial patterns. Image classification. Computer vision.' },
        { id: 'q25', title: 'What is RNN?', content: 'RNN (Recurrent Neural Network): for sequences. LSTM, GRU layers. Temporal patterns. Sequence data. Natural language, time series.' },
        { id: 'q26', title: 'What is transfer learning?', content: 'Transfer learning: use pre-trained models. Fine-tune on new data. Faster training. Less data needed. Common practice. Leverage existing models.' },
        { id: 'q27', title: 'What is regularization?', content: 'Regularization: prevent overfitting. L1/L2 regularization, dropout, early stopping. Improve generalization. Training technique. Important practice.' },
        { id: 'q28', title: 'What is dropout?', content: 'Dropout: randomly disable neurons during training. Prevents co-adaptation. Reduces overfitting. Regularization technique. Common layer.' },
        { id: 'q29', title: 'What is batch normalization?', content: 'Batch normalization: normalize layer inputs. Stabilizes training. Faster convergence. Regularization effect. Common technique. Training improvement.' },
        { id: 'q30', title: 'What is model architecture?', content: 'Model architecture: layer types, sizes, connections. Design decisions. Affects performance. Experiment and iterate. Critical for success.' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced TensorFlow',
      content: '',
      subsections: [
        { id: 'q31', title: 'What is TensorFlow Serving?', content: 'TensorFlow Serving: production deployment. Serve models via API. High performance. Scalable. Production tool. Model serving.' },
        { id: 'q32', title: 'What is TensorFlow Lite?', content: 'TensorFlow Lite: mobile/edge deployment. Optimized models. Smaller size. Faster inference. Mobile devices. Edge computing.' },
        { id: 'q33', title: 'What is TensorFlow.js?', content: 'TensorFlow.js: JavaScript version. Run in browser. Client-side ML. Web applications. Browser-based. Modern deployment.' },
        { id: 'q34', title: 'What is data pipeline?', content: 'Data pipeline: tf.data API. Efficient data loading. Preprocessing, batching, caching. Performance optimization. Scalable data handling.' },
        { id: 'q35', title: 'What is GPU acceleration?', content: 'GPU acceleration: faster training. CUDA support. Automatic if available. Significant speedup. Deep learning benefit. Hardware utilization.' },
        { id: 'q36', title: 'What is distributed training?', content: 'Distributed training: multiple devices. Data or model parallelism. Scale training. Large models. Production requirement. Performance scaling.' },
        { id: 'q37', title: 'What is model saving?', content: 'Model saving: save() saves entire model, save_weights() saves weights only. HDF5 or SavedModel format. Persist models. Deployment preparation.' },
        { id: 'q38', title: 'What is model deployment?', content: 'Model deployment: TensorFlow Serving, cloud platforms, mobile apps, edge devices. Production use. Make predictions. Real-world application.' },
        { id: 'q39', title: 'What is TensorBoard?', content: 'TensorBoard: visualization tool. Training metrics, graphs, histograms. Monitor training. Debug models. Essential tool. Development aid.' },
        { id: 'q40', title: 'What is TensorFlow best practices?', content: 'Best practices: use Keras API, validate data, monitor training, use callbacks, save models, optimize performance, test thoroughly, document, version models, production deployment.' }
      ]
    },
    {
      id: 'applications',
      title: 'Applications',
      content: '',
      subsections: [
        { id: 'q41', title: 'What is image classification?', content: 'Image classification: CNNs. Categorize images. Transfer learning common. Pre-trained models. Computer vision. Common application.' },
        { id: 'q42', title: 'What is NLP with TensorFlow?', content: 'NLP: text classification, sentiment, translation. Embeddings, RNNs, Transformers. Natural language. Text processing. Language models.' },
        { id: 'q43', title: 'What is time series?', content: 'Time series: RNNs, LSTMs. Sequence prediction. Temporal patterns. Forecasting. Sequential data. Specialized models.' },
        { id: 'q44', title: 'What is reinforcement learning?', content: 'Reinforcement learning: agents learn from environment. Rewards and penalties. Game playing, robotics. Advanced ML. Specialized area.' },
        { id: 'q45', title: 'What is GAN?', content: 'GAN (Generative Adversarial Network): generator and discriminator. Generate new data. Images, text. Creative AI. Advanced technique.' },
        { id: 'q46', title: 'What is autoencoder?', content: 'Autoencoder: encode-decode architecture. Dimensionality reduction, denoising, anomaly detection. Unsupervised learning. Feature learning.' },
        { id: 'q47', title: 'What is hyperparameter tuning?', content: 'Hyperparameter tuning: learning rate, batch size, architecture. Grid search, random search, Bayesian optimization. Find best parameters. Model optimization.' },
        { id: 'q48', title: 'What is model interpretation?', content: 'Model interpretation: understand predictions. SHAP, LIME, attention visualization. Explainable AI. Trust and debugging. Important for production.' },
        { id: 'q49', title: 'What is MLOps?', content: 'MLOps: ML operations. Version control, CI/CD, monitoring, retraining. Production ML. DevOps for ML. Essential for scale.' },
        { id: 'q50', title: 'What is TensorFlow ecosystem?', content: 'TensorFlow ecosystem: Keras, TensorFlow Hub, TensorFlow Extended, TensorFlow.js, TensorFlow Lite. Rich ecosystem. Tools and libraries. Complete platform.' }
      ]
    }
  ]
};
