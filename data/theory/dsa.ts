import { TheoryTopic } from '@/types/theory';

export const dsaTheory: TheoryTopic = {
  topicId: 'dsa',
  topicName: 'Data Structures & Algorithms',
  category: 'Core Concepts',
  description: 'Data structures and algorithm design',
  sections: [
    {
      id: 'arrays',
      title: 'Arrays and Lists',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is an array?', content: 'Array is collection of elements stored in contiguous memory. Indexed access (O(1)). Fixed or dynamic size. Operations: access O(1), search O(n), insert O(n), delete O(n). Foundation data structure. Used in many algorithms.' },
        { id: 'q2', title: 'What is a linked list?', content: 'Linked list stores elements in nodes with pointers. Types: singly (one pointer), doubly (two pointers), circular. Operations: insert O(1), delete O(1) if node known, search O(n). Dynamic size. No random access. Memory efficient for insertions/deletions.' },
        { id: 'q3', title: 'What is the difference between array and linked list?', content: 'Array: contiguous memory, O(1) access, fixed size (usually), cache-friendly. Linked list: non-contiguous, O(n) access, dynamic size, extra memory for pointers. Use array for random access, linked list for frequent insertions/deletions.' },
        { id: 'q4', title: 'What is a dynamic array?', content: 'Dynamic array (vector, ArrayList) resizes automatically. Grows when full (usually doubles). Amortized O(1) insertion. O(1) access. May need to copy elements when resizing. Combines array benefits with dynamic sizing.' },
        { id: 'q5', title: 'What is a stack?', content: 'Stack is LIFO (Last In First Out) structure. Operations: push (add), pop (remove), peek (view top), isEmpty. O(1) for all operations. Uses: function calls, expression evaluation, undo/redo, backtracking. Can implement with array or linked list.' },
        { id: 'q6', title: 'What is a queue?', content: 'Queue is FIFO (First In First Out) structure. Operations: enqueue (add rear), dequeue (remove front), peek, isEmpty. O(1) for operations. Uses: task scheduling, BFS, buffering. Can implement with array or linked list. Circular queue optimizes space.' },
        { id: 'q7', title: 'What is a deque?', content: 'Deque (double-ended queue) allows insertion/deletion at both ends. Operations: addFront, addRear, removeFront, removeRear. More flexible than queue. Can function as stack or queue. Used in sliding window problems.' },
        { id: 'q8', title: 'What is a hash table?', content: 'Hash table stores key-value pairs using hashing. Average O(1) operations. Hash function maps keys to indices. Handles collisions: chaining, open addressing. Fast lookups, insertions, deletions. Used in: dictionaries, caches, sets.' },
        { id: 'q9', title: 'What is hashing?', content: 'Hashing maps data to fixed-size values (hash codes). Good hash function: uniform distribution, fast computation, deterministic. Collision: two keys map to same hash. Resolution methods: separate chaining, linear probing, quadratic probing, double hashing.' },
        { id: 'q10', title: 'What is collision resolution?', content: 'Collision resolution handles hash collisions. Separate chaining: store collisions in linked list. Open addressing: find next available slot (linear/quadratic/double hashing). Load factor affects performance. Choose method based on use case.' }
      ]
    },
    {
      id: 'trees',
      title: 'Trees',
      content: '',
      subsections: [
        { id: 'q11', title: 'What is a tree?', content: 'Tree is hierarchical data structure. Consists of nodes with parent-child relationships. Root node has no parent. Leaf nodes have no children. Terms: root, parent, child, sibling, leaf, depth, height. Used for: hierarchical data, searching, sorting.' },
        { id: 'q12', title: 'What is a binary tree?', content: 'Binary tree has at most two children per node. Types: full (0 or 2 children), complete (all levels filled except last), perfect (all leaves same level), balanced (height difference ≤ 1). Traversals: inorder, preorder, postorder, level-order.' },
        { id: 'q13', title: 'What is a binary search tree (BST)?', content: 'BST maintains ordering: left < node < right. Enables efficient search O(log n) average. Operations: insert, search, delete O(log n) average, O(n) worst. Inorder traversal gives sorted order. Degenerates to linked list if unbalanced.' },
        { id: 'q14', title: 'What is tree traversal?', content: 'Tree traversal visits all nodes. Inorder (left, root, right) - gives sorted order for BST. Preorder (root, left, right) - copy tree structure. Postorder (left, right, root) - delete tree. Level-order (BFS) - level by level. Implement recursively or iteratively.' },
        { id: 'q15', title: 'What is AVL tree?', content: 'AVL tree is self-balancing BST. Maintains height difference ≤ 1 between subtrees. Rotations: left, right, left-right, right-left. Guarantees O(log n) operations. More balanced than regular BST. Slightly slower due to balancing overhead.' },
        { id: 'q16', title: 'What is a heap?', content: 'Heap is complete binary tree with heap property. Min heap: parent ≤ children. Max heap: parent ≥ children. Operations: insert O(log n), extract-min/max O(log n), peek O(1). Used for: priority queues, heap sort, finding k largest/smallest.' },
        { id: 'q17', title: 'What is a trie?', content: 'Trie (prefix tree) stores strings efficiently. Each node represents character. Path from root to node forms string. Fast prefix searches O(m) where m is string length. Uses: autocomplete, spell check, IP routing. Space efficient for common prefixes.' },
        { id: 'q18', title: 'What is a segment tree?', content: 'Segment tree supports range queries and updates. O(log n) for both. Stores intervals in tree structure. Used for: range sum, range min/max, range updates. Requires O(n) space. Useful for competitive programming.' },
        { id: 'q19', title: 'What is a Fenwick tree?', content: 'Fenwick tree (Binary Indexed Tree) supports prefix sum queries. O(log n) update and query. More memory efficient than segment tree. Uses bit manipulation. Simpler implementation. Used for: prefix sums, inversions count.' },
        { id: 'q20', title: 'What is tree vs graph?', content: 'Tree: connected, acyclic, n-1 edges for n nodes, one path between nodes. Graph: can have cycles, multiple paths, disconnected components. Tree is special case of graph. Both use similar traversal algorithms (DFS, BFS).' }
      ]
    },
    {
      id: 'graphs',
      title: 'Graphs',
      content: '',
      subsections: [
        { id: 'q21', title: 'What is a graph?', content: 'Graph consists of vertices (nodes) and edges. Types: directed (edges have direction), undirected (bidirectional), weighted (edges have weights), unweighted. Representations: adjacency list, adjacency matrix. Used for: networks, social media, routing.' },
        { id: 'q22', title: 'What is graph representation?', content: 'Adjacency list: array of lists, space O(V+E), efficient for sparse graphs. Adjacency matrix: 2D array, space O(V²), efficient for dense graphs, O(1) edge lookup. Choose based on graph density and operations needed.' },
        { id: 'q23', title: 'What is BFS?', content: 'BFS (Breadth-First Search) explores level by level. Uses queue. Finds shortest path in unweighted graphs. Time O(V+E), space O(V). Applications: shortest path, level-order traversal, social networks, web crawling.' },
        { id: 'q24', title: 'What is DFS?', content: 'DFS (Depth-First Search) explores as far as possible before backtracking. Uses stack (recursion). Time O(V+E), space O(V) for recursion. Applications: cycle detection, topological sort, maze solving, connected components.' },
        { id: 'q25', title: 'What is shortest path?', content: 'Shortest path finds minimum distance between nodes. Algorithms: Dijkstra (non-negative weights, O(E log V)), Bellman-Ford (handles negative weights, O(VE)), Floyd-Warshall (all pairs, O(V³)), A* (heuristic search). Choose based on graph properties.' },
        { id: 'q26', title: 'What is minimum spanning tree?', content: 'MST connects all vertices with minimum total edge weight. Algorithms: Kruskal (greedy, O(E log E)), Prim (greedy, O(E log V)). Applications: network design, clustering, approximation algorithms. Guarantees minimum weight spanning tree.' },
        { id: 'q27', title: 'What is topological sort?', content: 'Topological sort orders vertices in directed acyclic graph (DAG). All edges point forward in ordering. Algorithms: DFS-based, Kahn\'s (BFS-based). Applications: task scheduling, build systems, course prerequisites. Only works for DAGs.' },
        { id: 'q28', title: 'What is cycle detection?', content: 'Cycle detection finds cycles in graphs. Methods: DFS with color marking, Union-Find for undirected graphs. Directed graphs: DFS with recursion stack. Undirected graphs: check for back edges. Important for: validating DAGs, detecting infinite loops.' },
        { id: 'q29', title: 'What is strongly connected components?', content: 'SCC: every vertex reachable from every other in component. Algorithms: Kosaraju\'s, Tarjan\'s. Used for: analyzing directed graphs, social networks, compiler optimizations. Decomposes graph into maximal strongly connected subgraphs.' },
        { id: 'q30', title: 'What is graph coloring?', content: 'Graph coloring assigns colors to vertices so adjacent vertices have different colors. Chromatic number: minimum colors needed. Applications: scheduling, register allocation, map coloring. Greedy algorithm works but may not be optimal. NP-hard problem.' }
      ]
    },
    {
      id: 'sorting',
      title: 'Sorting Algorithms',
      content: '',
      subsections: [
        { id: 'q31', title: 'What is bubble sort?', content: 'Bubble sort repeatedly swaps adjacent elements if wrong order. Time: O(n²) worst/average, O(n) best (optimized). Space: O(1). Stable. Simple but inefficient. Good for educational purposes. Rarely used in practice.' },
        { id: 'q32', title: 'What is quicksort?', content: 'Quicksort uses divide-and-conquer with pivot. Average O(n log n), worst O(n²) if pivot bad. Space O(log n) for recursion. Not stable. In-place. Fast in practice. Optimizations: median-of-three, insertion sort for small arrays.' },
        { id: 'q33', title: 'What is mergesort?', content: 'Mergesort divides array, sorts halves, merges. Time O(n log n) worst/average/best. Space O(n). Stable. Not in-place. Predictable performance. Good for linked lists. External sorting. Divide-and-conquer algorithm.' },
        { id: 'q34', title: 'What is heapsort?', content: 'Heapsort builds heap, extracts elements. Time O(n log n) worst/average/best. Space O(1). Not stable. In-place. Guaranteed O(n log n). Slower than quicksort in practice. Useful when worst-case matters.' },
        { id: 'q35', title: 'What is insertion sort?', content: 'Insertion sort builds sorted array one element at a time. Time O(n²) worst/average, O(n) best. Space O(1). Stable. In-place. Efficient for small arrays. Used in hybrid algorithms. Adaptive (fast for nearly sorted).' },
        { id: 'q36', title: 'What is selection sort?', content: 'Selection sort finds minimum, swaps with current position. Time O(n²) worst/average/best. Space O(1). Not stable. In-place. Simple but always O(n²). Rarely used. Good for minimizing swaps.' },
        { id: 'q37', title: 'What is counting sort?', content: 'Counting sort counts occurrences, reconstructs array. Time O(n+k) where k is range. Space O(k). Stable. Not comparison-based. Works only for integers in small range. Linear time when range is small.' },
        { id: 'q38', title: 'What is radix sort?', content: 'Radix sort sorts by digits (LSD or MSD). Time O(d(n+k)) where d is digits, k is base. Space O(n+k). Stable. Not comparison-based. Works for integers/strings. Efficient for fixed-width data.' },
        { id: 'q39', title: 'What is stable vs unstable sort?', content: 'Stable sort maintains relative order of equal elements. Unstable sort may change order. Stability matters when sorting by multiple criteria. Stable: mergesort, insertion sort, bubble sort. Unstable: quicksort, heapsort. Consider stability in choice.' },
        { id: 'q40', title: 'What is time complexity of sorting?', content: 'Comparison-based sorting: Ω(n log n) lower bound. Optimal: O(n log n) average (quicksort, mergesort, heapsort). O(n²) worst for quicksort. Non-comparison: O(n) possible (counting, radix) but with restrictions. Choose based on data characteristics.' }
      ]
    },
    {
      id: 'searching',
      title: 'Searching Algorithms',
      content: '',
      subsections: [
        { id: 'q41', title: 'What is linear search?', content: 'Linear search checks each element sequentially. Time O(n) worst/average, O(1) best. Works on unsorted data. Simple implementation. No additional space. Use when data is unsorted or small.' },
        { id: 'q42', title: 'What is binary search?', content: 'Binary search works on sorted arrays. Divides search space in half. Time O(log n). Space O(1) iterative, O(log n) recursive. Requires sorted data. Very efficient. Foundation for many algorithms.' },
        { id: 'q43', title: 'What is interpolation search?', content: 'Interpolation search estimates position in sorted array. Time O(log log n) average, O(n) worst. Better than binary search for uniformly distributed data. Uses formula to guess position. More complex than binary search.' },
        { id: 'q44', title: 'What is exponential search?', content: 'Exponential search finds range, then binary searches. Time O(log i) where i is position. Useful for unbounded/infinite arrays. Finds range by doubling. Then binary search in range. Efficient for large arrays.' },
        { id: 'q45', title: 'What is hash-based search?', content: 'Hash-based search uses hash table. Average O(1) lookup. Requires hash function and collision handling. Fast but needs extra space. Used in: dictionaries, sets, caches. Trade space for time.' },
        { id: 'q46', title: 'What is string searching?', content: 'String searching finds pattern in text. Algorithms: naive O(nm), KMP O(n+m), Rabin-Karp O(n+m) average, Boyer-Moore (good for long patterns). Applications: text editors, search engines, bioinformatics. Choose based on pattern/text characteristics.' },
        { id: 'q47', title: 'What is KMP algorithm?', content: 'KMP (Knuth-Morris-Pratt) searches pattern in text. Time O(n+m). Uses failure function to avoid re-checking. Preprocesses pattern. Efficient for repeated searches. Avoids backtracking in text.' },
        { id: 'q48', title: 'What is binary search tree search?', content: 'BST search compares with root, goes left/right. Time O(log n) average, O(n) worst (unbalanced). Space O(log n) recursive. Efficient for dynamic data. Degenerates to O(n) if unbalanced. Use balanced BST for guaranteed performance.' },
        { id: 'q49', title: 'What is graph search?', content: 'Graph search finds nodes/paths. BFS finds shortest path (unweighted). DFS explores deeply. Dijkstra finds shortest path (weighted). A* uses heuristics. Choose based on: weighted/unweighted, need shortest path, graph properties.' },
        { id: 'q50', title: 'What are search algorithm trade-offs?', content: 'Trade-offs: time vs space, sorted vs unsorted, static vs dynamic, exact vs approximate. Linear: simple, works on unsorted. Binary: fast, needs sorted. Hash: fastest, needs space. Choose based on: data characteristics, requirements, constraints.' }
      ]
    }
  ]
};
