import { TheoryTopic } from '@/types/theory';

export const numpyTheory: TheoryTopic = {
  topicId: 'numpy',
  topicName: 'NumPy',
  category: 'Data & AI',
  description: 'NumPy numerical computing library',
  sections: [
    {
      id: 'basics',
      title: 'NumPy Basics',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is NumPy?', content: 'NumPy (Numerical Python) is library for numerical computing. Provides: arrays, mathematical functions, linear algebra, random numbers. Foundation for: Pandas, SciPy, scikit-learn. High performance. Essential for data science.' },
        { id: 'q2', title: 'What is ndarray?', content: 'ndarray (N-dimensional array) is NumPy\'s core. Homogeneous data type. Fixed size. Efficient operations. Vectorized computations. Foundation structure. Fast operations.' },
        { id: 'q3', title: 'How to create array?', content: 'Create array: np.array([1,2,3]), np.zeros(shape), np.ones(shape), np.arange(start, stop, step), np.linspace(start, stop, num), np.random.rand(shape). Multiple ways. Flexible creation.' },
        { id: 'q4', title: 'What is array attributes?', content: 'Array attributes: shape (dimensions), dtype (data type), size (total elements), ndim (number of dimensions), itemsize (bytes per element). Understand array structure. Essential properties.' },
        { id: 'q5', title: 'What is array indexing?', content: 'Array indexing: arr[0] (first element), arr[0,1] (2D), arr[start:stop] (slicing), arr[condition] (boolean indexing). Access elements. Flexible selection. Data access.' },
        { id: 'q6', title: 'What is array slicing?', content: 'Array slicing: arr[start:stop:step]. Creates view (not copy). Negative indices. Multi-dimensional slicing. Efficient. No data copying. Important feature.' },
        { id: 'q7', title: 'What is broadcasting?', content: 'Broadcasting applies operations to arrays of different shapes. Automatic dimension expansion. Efficient computation. No explicit loops. Powerful feature. NumPy strength.' },
        { id: 'q8', title: 'What is vectorization?', content: 'Vectorization applies operations to entire arrays. Element-wise operations. Much faster than loops. Use NumPy operations. Performance critical. Best practice.' },
        { id: 'q9', title: 'What are data types?', content: 'Data types: int8/16/32/64, uint8/16/32/64, float16/32/64, complex64/128, bool, object. Specify with dtype. Memory efficient. Choose appropriately. Performance impact.' },
        { id: 'q10', title: 'What is array reshaping?', content: 'Reshaping: reshape() changes shape, flatten() makes 1D, ravel() returns view. Change dimensions. Keep same data. Flexible structure. Data manipulation.' }
      ]
    },
    {
      id: 'operations',
      title: 'Array Operations',
      content: '',
      subsections: [
        { id: 'q11', title: 'What are arithmetic operations?', content: 'Arithmetic: +, -, *, /, ** (element-wise), np.add(), np.multiply(). Vectorized. Fast. Element-wise by default. Matrix multiplication: @ or np.dot(). Mathematical operations.' },
        { id: 'q12', title: 'What is dot product?', content: 'Dot product: np.dot(a, b) or a @ b. Matrix multiplication. Linear algebra. Important operation. Used extensively. Mathematical foundation.' },
        { id: 'q13', title: 'What are aggregate functions?', content: 'Aggregate functions: np.sum(), np.mean(), np.std(), np.min(), np.max(), np.median(). Can specify axis. Array-wide or axis-wise. Statistical operations. Data analysis.' },
        { id: 'q14', title: 'What is axis parameter?', content: 'Axis parameter: 0 (rows/down), 1 (columns/across), None (entire array). Direction of operation. Important for multi-dimensional. Understand dimensions. Critical concept.' },
        { id: 'q15', title: 'What are comparison operations?', content: 'Comparison: ==, !=, <, >, <=, >=. Returns boolean array. np.all(), np.any() for boolean arrays. Element-wise comparison. Conditional operations.' },
        { id: 'q16', title: 'What is boolean indexing?', content: 'Boolean indexing: arr[arr > 5]. Filters elements. Conditional selection. Powerful feature. Data filtering. Common pattern.' },
        { id: 'q17', title: 'What is fancy indexing?', content: 'Fancy indexing uses array of indices. arr[[0, 2, 4]]. Select specific elements. Flexible selection. Advanced indexing. Data access.' },
        { id: 'q18', title: 'What is array concatenation?', content: 'Concatenation: np.concatenate(), np.vstack() (vertical), np.hstack() (horizontal), np.column_stack(). Combine arrays. Data integration. Common operation.' },
        { id: 'q19', title: 'What is array splitting?', content: 'Splitting: np.split(), np.vsplit(), np.hsplit(). Divide arrays. Data separation. Opposite of concatenation. Useful operation.' },
        { id: 'q20', title: 'What are universal functions?', content: 'Universal functions (ufuncs): np.sin(), np.cos(), np.exp(), np.log(), np.sqrt(). Element-wise. Vectorized. Fast. Mathematical functions. NumPy strength.' }
      ]
    },
    {
      id: 'linear-algebra',
      title: 'Linear Algebra',
      content: '',
      subsections: [
        { id: 'q21', title: 'What is matrix operations?', content: 'Matrix operations: np.dot() (multiplication), np.transpose() (transpose), np.linalg.inv() (inverse), np.linalg.det() (determinant). Linear algebra. Mathematical operations.' },
        { id: 'q22', title: 'What is eigenvalues/eigenvectors?', content: 'Eigenvalues/eigenvectors: np.linalg.eig(). Matrix decomposition. Linear algebra. Used in: PCA, transformations. Advanced mathematics.' },
        { id: 'q23', title: 'What is matrix decomposition?', content: 'Matrix decomposition: SVD (np.linalg.svd()), QR, Cholesky. Factor matrices. Used in: dimensionality reduction, solving systems. Advanced operations.' },
        { id: 'q24', title: 'What is solving linear systems?', content: 'Solving systems: np.linalg.solve(A, b). Ax = b. Linear equations. Mathematical computation. Common problem.' },
        { id: 'q25', title: 'What is matrix rank?', content: 'Matrix rank: np.linalg.matrix_rank(). Number of linearly independent rows/columns. Matrix properties. Linear algebra concept. Important property.' },
        { id: 'q26', title: 'What is norm?', content: 'Norm: np.linalg.norm(). Vector/matrix norm. Measures magnitude. Types: L1, L2, Frobenius. Mathematical measure. Used in optimization.' },
        { id: 'q27', title: 'What is trace?', content: 'Trace: np.trace(). Sum of diagonal elements. Matrix property. Linear algebra. Simple operation.' },
        { id: 'q28', title: 'What is outer product?', content: 'Outer product: np.outer(a, b). Vector operations. Matrix creation. Linear algebra. Mathematical operation.' },
        { id: 'q29', title: 'What is cross product?', content: 'Cross product: np.cross(a, b). 3D vectors. Vector product. Linear algebra. Geometric operation.' },
        { id: 'q30', title: 'What is linear algebra use cases?', content: 'Use cases: machine learning, data analysis, scientific computing, image processing, signal processing. Foundation for many algorithms. Essential mathematics.' }
      ]
    },
    {
      id: 'random',
      title: 'Random and Statistics',
      content: '',
      subsections: [
        { id: 'q31', title: 'What is random number generation?', content: 'Random generation: np.random.rand() (uniform), np.random.randn() (normal), np.random.randint() (integers), np.random.choice() (from array). Statistical simulation. Reproducible with seed.' },
        { id: 'q32', title: 'What is random seed?', content: 'Random seed: np.random.seed(n). Makes random reproducible. Same seed = same sequence. Important for: testing, reproducibility. Set seed for consistency.' },
        { id: 'q33', title: 'What are statistical functions?', content: 'Statistical functions: np.mean(), np.median(), np.std(), np.var(), np.percentile(), np.corrcoef(). Data analysis. Statistical measures. Essential operations.' },
        { id: 'q34', title: 'What is histogram?', content: 'Histogram: np.histogram(). Data distribution. Binning. Visualization preparation. Statistical analysis. Understand data shape.' },
        { id: 'q35', title: 'What is percentile?', content: 'Percentile: np.percentile(). Value below which percentage falls. Quantiles. Statistical measure. Data analysis. Understanding distribution.' },
        { id: 'q36', title: 'What is correlation?', content: 'Correlation: np.corrcoef(). Relationship between variables. -1 to 1. Statistical measure. Data analysis. Understand relationships.' },
        { id: 'q37', title: 'What is covariance?', content: 'Covariance: np.cov(). Measure of joint variability. Related to correlation. Statistical measure. Data analysis.' },
        { id: 'q38', title: 'What is sampling?', content: 'Sampling: np.random.choice(). Random selection. With/without replacement. Statistical sampling. Data selection. Common operation.' },
        { id: 'q39', title: 'What is shuffling?', content: 'Shuffling: np.random.shuffle() (in-place), np.random.permutation() (returns copy). Randomize order. Data randomization. Important for: machine learning, testing.' },
        { id: 'q40', title: 'What is probability distributions?', content: 'Probability distributions: normal, uniform, binomial, poisson, etc. np.random functions. Statistical simulation. Modeling. Important for data science.' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced NumPy',
      content: '',
      subsections: [
        { id: 'q41', title: 'What is array views vs copies?', content: 'Views share data (no copy), copies are independent. Slicing creates views. copy() creates copy. Memory efficient. Understand when copying occurs. Performance consideration.' },
        { id: 'q42', title: 'What is memory layout?', content: 'Memory layout: C-contiguous (row-major), F-contiguous (column-major). Affects performance. np.ascontiguousarray(). Memory efficiency. Advanced optimization.' },
        { id: 'q43', title: 'What is structured arrays?', content: 'Structured arrays have named fields. Like records. Complex data types. Advanced feature. Specialized use case.' },
        { id: 'q44', title: 'What is masked arrays?', content: 'Masked arrays handle missing/invalid data. np.ma module. Mask invalid values. Data with gaps. Specialized arrays.' },
        { id: 'q45', title: 'What is performance optimization?', content: 'Performance: use vectorization, avoid Python loops, use appropriate dtypes, use NumPy functions, profile code, use numba for speed. Faster execution. Critical for large data.' },
        { id: 'q46', title: 'What is NumPy with C extensions?', content: 'NumPy integrates with C. Cython, ctypes, cffi. Extend NumPy. Custom operations. Performance critical code. Advanced usage.' },
        { id: 'q47', title: 'What is array file I/O?', content: 'File I/O: np.save()/np.load() (binary), np.savetxt()/np.loadtxt() (text), np.savez() (multiple arrays). Persist arrays. Data storage. Common operation.' },
        { id: 'q48', title: 'What is NumPy with Pandas?', content: 'NumPy with Pandas: Pandas built on NumPy, convert with .values, share underlying arrays, NumPy operations on Pandas. Integration. Foundation relationship.' },
        { id: 'q49', title: 'What is NumPy best practices?', content: 'Best practices: use vectorization, appropriate dtypes, avoid loops, use NumPy functions, understand broadcasting, memory efficient, profile code, use modern NumPy, document, test, optimize performance.' },
        { id: 'q50', title: 'What is NumPy limitations?', content: 'Limitations: homogeneous data types, fixed size, memory for large arrays, not for all data types. Understand when to use. Choose appropriate tool. Not always best choice.' }
      ]
    }
  ]
};
