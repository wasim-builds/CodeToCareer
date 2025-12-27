import { PracticeProblem } from '@/types/practice';
import { mysqlCodingProblems } from './mysqlCodingProblems';

const baseProblems: PracticeProblem[] = [
  {
    id: 'two-sum',
    slug: 'two-sum',
    title: 'Two Sum',
    difficulty: 'easy',
    topics: ['Array', 'Hash Table'],
    prompt: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. Assume exactly one solution and you may not use the same element twice.',
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9'
    ],
    examples: [
      { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]' },
      { input: 'nums = [3,2,4], target = 6', output: '[1,2]' }
    ],
    hints: [
      'Use a hash map to store value -> index while iterating.',
      'For each number, check if target - number exists in the map.'
    ],
    starterCode: [
      {
        language: 'javascript',
        functionName: 'twoSum',
        code: 'function twoSum(nums, target) {\n  // Write your code here\n  return [];\n}\n\nmodule.exports = twoSum;'
      },
      {
        language: 'typescript',
        functionName: 'twoSum',
        code: 'function twoSum(nums: number[], target: number): number[] {\n  // Write your code here\n  return [];\n}\n\nexport default twoSum;'
      },
      {
        language: 'python',
        functionName: 'twoSum',
        code: 'def twoSum(nums, target):\n    # Write your code here\n    return []'
      },
      {
        language: 'java',
        functionName: 'twoSum',
        code: 'class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your code here\n        return new int[]{};\n    }\n}'
      },
      {
        language: 'cpp',
        functionName: 'twoSum',
        code: '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        // Write your code here\n        return {};\n    }\n};'
      }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { nums: [2, 7, 11, 15], target: 9 }, output: [0, 1] },
      { id: 's2', type: 'sample', input: { nums: [3, 2, 4], target: 6 }, output: [1, 2] },
      { id: 'h1', type: 'hidden', input: { nums: [3, 3], target: 6 }, output: [0, 1] }
    ],
    solution: 'Use a map from value to index. Iterate nums, for each num check if target - num is in map, return the pair; otherwise store num with its index. O(n) time, O(n) space.'
    , solved: false
  },
  {
    id: 'valid-anagram',
    slug: 'valid-anagram',
    title: 'Valid Anagram',
    difficulty: 'easy',
    topics: ['String', 'Hash Table'],
    prompt: 'Given two strings s and t, return true if t is an anagram of s, and false otherwise.',
    constraints: [
      '1 <= s.length, t.length <= 5 * 10^4',
      's and t consist of lowercase English letters.'
    ],
    examples: [
      { input: 's = "anagram", t = "nagaram"', output: 'true' },
      { input: 's = "rat", t = "car"', output: 'false' }
    ],
    hints: [
      'Count character frequencies in one string and subtract using the other.',
      'If all counts end at zero, the strings are anagrams.'
    ],
    starterCode: [
      {
        language: 'javascript',
        functionName: 'isAnagram',
        code: 'function isAnagram(s, t) {\n  // Write your code here\n  return false;\n}\n\nmodule.exports = isAnagram;'
      },
      {
        language: 'typescript',
        functionName: 'isAnagram',
        code: 'function isAnagram(s: string, t: string): boolean {\n  // Write your code here\n  return false;\n}\n\nexport default isAnagram;'
      },
      {
        language: 'python',
        functionName: 'isAnagram',
        code: 'def isAnagram(s, t):\n    # Write your code here\n    return False'
      },
      {
        language: 'java',
        functionName: 'isAnagram',
        code: 'class Solution {\n    public boolean isAnagram(String s, String t) {\n        // Write your code here\n        return false;\n    }\n}'
      },
      {
        language: 'cpp',
        functionName: 'isAnagram',
        code: '#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool isAnagram(string s, string t) {\n        // Write your code here\n        return false;\n    }\n};'
      }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { s: 'anagram', t: 'nagaram' }, output: true },
      { id: 's2', type: 'sample', input: { s: 'rat', t: 'car' }, output: false },
      { id: 'h1', type: 'hidden', input: { s: 'aacc', t: 'ccac' }, output: false }
    ],
    solution: 'Use a frequency map of characters; increment for s, decrement for t. If lengths differ or any count is nonzero, return false. O(n) time, O(1) space for lowercase letters.'
  },
  {
    id: 'longest-substring-without-repeat',
    slug: 'longest-substring-without-repeat',
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'medium',
    topics: ['String', 'Sliding Window'],
    prompt: 'Given a string s, find the length of the longest substring without repeating characters.',
    constraints: [
      '0 <= s.length <= 5 * 10^4',
      's consists of English letters, digits, symbols, and spaces.'
    ],
    examples: [
      { input: 's = "abcabcbb"', output: '3' },
      { input: 's = "bbbbb"', output: '1' }
    ],
    hints: [
      'Use a sliding window with a map of last seen indices.',
      'Move the left pointer past the duplicate character when found.'
    ],
    starterCode: [
      {
        language: 'javascript',
        functionName: 'lengthOfLongestSubstring',
        code: 'function lengthOfLongestSubstring(s) {\n  // Write your code here\n  return 0;\n}\n\nmodule.exports = lengthOfLongestSubstring;'
      },
      {
        language: 'typescript',
        functionName: 'lengthOfLongestSubstring',
        code: 'function lengthOfLongestSubstring(s: string): number {\n  // Write your code here\n  return 0;\n}\n\nexport default lengthOfLongestSubstring;'
      },
      {
        language: 'python',
        functionName: 'lengthOfLongestSubstring',
        code: 'def lengthOfLongestSubstring(s):\n    # Write your code here\n    return 0'
      },
      {
        language: 'java',
        functionName: 'lengthOfLongestSubstring',
        code: 'class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        // Write your code here\n        return 0;\n    }\n}'
      },
      {
        language: 'cpp',
        functionName: 'lengthOfLongestSubstring',
        code: '#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n        // Write your code here\n        return 0;\n    }\n};'
      }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { s: 'abcabcbb' }, output: 3 },
      { id: 's2', type: 'sample', input: { s: 'bbbbb' }, output: 1 },
      { id: 'h1', type: 'hidden', input: { s: 'pwwkew' }, output: 3 }
    ],
    solution: 'Sliding window: track last seen index per char. Maintain left pointer; when a repeat appears, move left to max(left, lastIndex+1). Update answer with window length. O(n) time.'
  },
  {
    id: 'maximum-subarray',
    slug: 'maximum-subarray',
    title: 'Maximum Subarray',
    difficulty: 'medium',
    topics: ['Array', 'Dynamic Programming'],
    prompt: 'Given an integer array nums, find the contiguous subarray with the largest sum and return its sum.',
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^4 <= nums[i] <= 10^4'
    ],
    examples: [
      { input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]', output: '6' }
    ],
    hints: [
      'Kadane’s algorithm: track current best ending here and global best.',
      'current = max(num, current + num); best = max(best, current).'
    ],
    starterCode: [
      {
        language: 'javascript',
        functionName: 'maxSubArray',
        code: 'function maxSubArray(nums) {\n  // Write your code here\n  return 0;\n}\n\nmodule.exports = maxSubArray;'
      },
      {
        language: 'typescript',
        functionName: 'maxSubArray',
        code: 'function maxSubArray(nums: number[]): number {\n  // Write your code here\n  return 0;\n}\n\nexport default maxSubArray;'
      },
      {
        language: 'python',
        functionName: 'maxSubArray',
        code: 'def maxSubArray(nums):\n    # Write your code here\n    return 0'
      },
      {
        language: 'java',
        functionName: 'maxSubArray',
        code: 'class Solution {\n    public int maxSubArray(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}'
      },
      {
        language: 'cpp',
        functionName: 'maxSubArray',
        code: '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        // Write your code here\n        return 0;\n    }\n};'
      }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4] }, output: 6 },
      { id: 'h1', type: 'hidden', input: { nums: [1] }, output: 1 },
      { id: 'h2', type: 'hidden', input: { nums: [5, 4, -1, 7, 8] }, output: 23 }
    ],
    solution: 'Kadane: iterate nums, keep current = max(num, current + num), best = max(best, current). O(n) time, O(1) space.'
  },
  {
    id: 'merge-intervals',
    slug: 'merge-intervals',
    title: 'Merge Intervals',
    difficulty: 'medium',
    topics: ['Array', 'Sorting'],
    prompt: 'Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals and return an array of the non-overlapping intervals that cover all the intervals in the input.',
    constraints: [
      '1 <= intervals.length <= 10^4',
      'intervals[i].length == 2',
      '0 <= start <= end <= 10^4'
    ],
    examples: [
      { input: '[[1,3],[2,6],[8,10],[15,18]]', output: '[[1,6],[8,10],[15,18]]' }
    ],
    hints: [
      'Sort intervals by start.',
      'Merge when current start <= last end.'
    ],
    starterCode: [
      {
        language: 'javascript',
        functionName: 'merge',
        code: 'function merge(intervals) {\n  // Write your code here\n  return [];\n}\n\nmodule.exports = merge;'
      },
      {
        language: 'typescript',
        functionName: 'merge',
        code: 'function merge(intervals: number[][]): number[][] {\n  // Write your code here\n  return [];\n}\n\nexport default merge;'
      },
      {
        language: 'python',
        functionName: 'merge',
        code: 'def merge(intervals):\n    # Write your code here\n    return []'
      },
      {
        language: 'java',
        functionName: 'merge',
        code: 'class Solution {\n    public int[][] merge(int[][] intervals) {\n        // Write your code here\n        return new int[][]{};\n    }\n}'
      },
      {
        language: 'cpp',
        functionName: 'merge',
        code: '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<vector<int>> merge(vector<vector<int>>& intervals) {\n        // Write your code here\n        return {};\n    }\n};'
      }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { intervals: [[1, 3], [2, 6], [8, 10], [15, 18]] }, output: [[1, 6], [8, 10], [15, 18]] },
      { id: 'h1', type: 'hidden', input: { intervals: [[1, 4], [4, 5]] }, output: [[1, 5]] }
    ],
    solution: 'Sort by start. Initialize merged with first interval; for each next interval, if it overlaps (start <= last end) merge; else push new interval. O(n log n) time.'
  },
  {
    id: 'binary-search',
    slug: 'binary-search',
    title: 'Binary Search',
    difficulty: 'easy',
    topics: ['Binary Search', 'Array'],
    prompt: 'Given a sorted array of integers nums and an integer target, return the index if the target is found. If not, return -1.',
    constraints: [
      '1 <= nums.length <= 10^4',
      '-10^4 < nums[i], target < 10^4',
      'nums is sorted in ascending order.'
    ],
    examples: [
      { input: 'nums = [-1,0,3,5,9,12], target = 9', output: '4' }
    ],
    hints: [
      'Use iterative binary search with two pointers (lo/hi).',
      'Avoid overflow with mid = lo + Math.floor((hi - lo) / 2).'
    ],
    starterCode: [
      {
        language: 'javascript',
        functionName: 'search',
        code: 'function search(nums, target) {\n  // Write your code here\n  return -1;\n}\n\nmodule.exports = search;'
      },
      {
        language: 'typescript',
        functionName: 'search',
        code: 'function search(nums: number[], target: number): number {\n  // Write your code here\n  return -1;\n}\n\nexport default search;'
      },
      {
        language: 'python',
        functionName: 'search',
        code: 'def search(nums, target):\n    # Write your code here\n    return -1'
      },
      {
        language: 'java',
        functionName: 'search',
        code: 'class Solution {\n    public int search(int[] nums, int target) {\n        // Write your code here\n        return -1;\n    }\n}'
      },
      {
        language: 'cpp',
        functionName: 'search',
        code: '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        // Write your code here\n        return -1;\n    }\n};'
      }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { nums: [-1, 0, 3, 5, 9, 12], target: 9 }, output: 4 },
      { id: 'h1', type: 'hidden', input: { nums: [-1, 0, 3, 5, 9, 12], target: 2 }, output: -1 }
    ],
    solution: 'Iterative binary search: while (lo <= hi) compute mid, compare nums[mid] with target, move bounds accordingly. O(log n) time.'
  },
  {
    id: 'level-order-traversal',
    slug: 'binary-tree-level-order',
    title: 'Binary Tree Level Order Traversal',
    difficulty: 'medium',
    topics: ['Tree', 'Breadth-First Search'],
    prompt: 'Given the root of a binary tree, return the level order traversal of its nodes’ values (from left to right, level by level).',
    constraints: [
      'Number of nodes in the tree is in the range [0, 10^4].'
    ],
    examples: [
      { input: 'root = [3,9,20,null,17,15,7]', output: '[[3],[9,20],[17,15,7]]' }
    ],
    hints: [
      'Use a queue and process nodes level by level.',
      'Push children when visiting each node.'
    ],
    starterCode: [
      {
        language: 'javascript',
        functionName: 'levelOrder',
        code: 'function levelOrder(root) {\n  // Write your code here\n  return [];\n}\n\nmodule.exports = levelOrder;'
      },
      {
        language: 'typescript',
        functionName: 'levelOrder',
        code: 'function levelOrder(root: TreeNode | null): number[][] {\n  // Write your code here\n  return [];\n}\n\nexport default levelOrder;'
      },
      {
        language: 'python',
        functionName: 'levelOrder',
        code: 'def levelOrder(root):\n    # Write your code here\n    return []'
      },
      {
        language: 'java',
        functionName: 'levelOrder',
        code: 'class Solution {\n    public List<List<Integer>> levelOrder(TreeNode root) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n}'
      },
      {
        language: 'cpp',
        functionName: 'levelOrder',
        code: '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<vector<int>> levelOrder(TreeNode* root) {\n        // Write your code here\n        return {};\n    }\n};'
      }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { root: { val: 3, left: { val: 9, left: null, right: { val: 17, left: null, right: null } }, right: { val: 20, left: { val: 15, left: null, right: null }, right: { val: 7, left: null, right: null } } } }, output: [[3], [9, 20], [17, 15, 7]] },
      { id: 'h1', type: 'hidden', input: { root: null }, output: [] }
    ],
    solution: 'Use a queue initialized with root. While queue not empty, iterate current size to collect a level, enqueue children. O(n) time, O(n) space.'
  },
  {
    id: 'sliding-window-maximum',
    slug: 'sliding-window-maximum',
    title: 'Sliding Window Maximum',
    difficulty: 'hard',
    topics: ['Array', 'Sliding Window', 'Deque'],
    prompt: 'You are given an array nums and an integer k. There is a sliding window of size k moving from the left to the right across the array. Return the maximum for each window.',
    constraints: [
      '1 <= k <= nums.length <= 10^5',
      '-10^4 <= nums[i] <= 10^4'
    ],
    examples: [
      { input: 'nums = [1,3,-1,-3,5,3,6,7], k = 3', output: '[3,3,5,5,6,7]' }
    ],
    hints: [
      'Use a deque storing indices with values in decreasing order.',
      'Pop from front when out of window; pop from back while current value is larger.'
    ],
    starterCode: [
      {
        language: 'javascript',
        functionName: 'maxSlidingWindow',
        code: 'function maxSlidingWindow(nums, k) {\n  // Write your code here\n  return [];\n}\n\nmodule.exports = maxSlidingWindow;'
      },
      {
        language: 'typescript',
        functionName: 'maxSlidingWindow',
        code: 'function maxSlidingWindow(nums: number[], k: number): number[] {\n  // Write your code here\n  return [];\n}\n\nexport default maxSlidingWindow;'
      },
      {
        language: 'python',
        functionName: 'maxSlidingWindow',
        code: 'def maxSlidingWindow(nums, k):\n    # Write your code here\n    return []'
      },
      {
        language: 'java',
        functionName: 'maxSlidingWindow',
        code: 'class Solution {\n    public int[] maxSlidingWindow(int[] nums, int k) {\n        // Write your code here\n        return new int[]{};\n    }\n}'
      },
      {
        language: 'cpp',
        functionName: 'maxSlidingWindow',
        code: '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> maxSlidingWindow(vector<int>& nums, int k) {\n        // Write your code here\n        return {};\n    }\n};'
      }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { nums: [1, 3, -1, -3, 5, 3, 6, 7], k: 3 }, output: [3, 3, 5, 5, 6, 7] },
      { id: 'h1', type: 'hidden', input: { nums: [1], k: 1 }, output: [1] }
    ],
    solution: 'Maintain deque of indices with decreasing values. Remove out-of-window indices from front; before pushing new index, pop smaller values from back. Front holds max. O(n) time, O(k) space.'
  },
  // Array / String Problems
  {
    id: 'merge-sorted-array',
    slug: 'merge-sorted-array',
    title: 'Merge Sorted Array',
    difficulty: 'easy',
    topics: ['Array', 'Two Pointers'],
    prompt: 'You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. Merge nums1 and nums2 into a single array sorted in non-decreasing order.',
    constraints: ['nums1.length == m + n', '0 <= m, n <= 200'],
    examples: [
      { input: 'nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3', output: '[1,2,2,3,5,6]' }
    ],
    hints: ['Merge from the end to avoid overwriting elements', 'Use three pointers for nums1[m-1], nums2[n-1], and nums1[m+n-1]'],
    starterCode: [
      {
        language: 'javascript',
        functionName: 'merge',
        code: 'function merge(nums1, m, nums2, n) {\n  // Write your code here\n}\n\nmodule.exports = merge;'
      },
      {
        language: 'typescript',
        functionName: 'merge',
        code: 'function merge(nums1: number[], m: number, nums2: number[], n: number): void {\n  // Write your code here\n}\n\nexport default merge;'
      },
      {
        language: 'python',
        functionName: 'merge',
        code: 'def merge(nums1, m, nums2, n):\n    # Write your code here\n    pass'
      },
      {
        language: 'java',
        functionName: 'merge',
        code: 'class Solution {\n    public void merge(int[] nums1, int m, int[] nums2, int n) {\n        // Write your code here\n    }\n}'
      },
      {
        language: 'cpp',
        functionName: 'merge',
        code: '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {\n        // Write your code here\n    }\n};'
      }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { nums1: [1, 2, 3, 0, 0, 0], m: 3, nums2: [2, 5, 6], n: 3 }, output: [1, 2, 2, 3, 5, 6] }
    ],
    solution: 'Merge from the end using three pointers. Compare elements and place larger one at the end of nums1.'
  },
  {
    id: 'remove-element',
    slug: 'remove-element',
    title: 'Remove Element',
    difficulty: 'easy',
    topics: ['Array', 'Two Pointers'],
    prompt: 'Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. Return the number of elements in nums which are not equal to val.',
    constraints: ['0 <= nums.length <= 100', '0 <= nums[i] <= 50'],
    examples: [
      { input: 'nums = [3,2,2,3], val = 3', output: '2' }
    ],
    hints: ['Use two pointers: one for reading, one for writing'],
    starterCode: [
      {
        language: 'javascript',
        functionName: 'removeElement',
        code: 'function removeElement(nums, val) {\n  // Write your code here\n  return 0;\n}\n\nmodule.exports = removeElement;'
      },
      {
        language: 'typescript',
        functionName: 'removeElement',
        code: 'function removeElement(nums: number[], val: number): number {\n  // Write your code here\n  return 0;\n}\n\nexport default removeElement;'
      },
      {
        language: 'python',
        functionName: 'removeElement',
        code: 'def removeElement(nums, val):\n    # Write your code here\n    return 0'
      },
      {
        language: 'java',
        functionName: 'removeElement',
        code: 'class Solution {\n    public int removeElement(int[] nums, int val) {\n        // Write your code here\n        return 0;\n    }\n}'
      },
      {
        language: 'cpp',
        functionName: 'removeElement',
        code: '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int removeElement(vector<int>& nums, int val) {\n        // Write your code here\n        return 0;\n    }\n};'
      }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { nums: [3, 2, 2, 3], val: 3 }, output: 2 }
    ],
    solution: 'Use two pointers. When nums[i] != val, copy to nums[k++]. Return k.'
  },
  {
    id: 'remove-duplicates-from-sorted-array',
    slug: 'remove-duplicates-from-sorted-array',
    title: 'Remove Duplicates from Sorted Array',
    difficulty: 'easy',
    topics: ['Array', 'Two Pointers'],
    prompt: 'Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. Return the number of unique elements.',
    constraints: ['1 <= nums.length <= 3 * 10^4'],
    examples: [
      { input: 'nums = [1,1,2]', output: '2' }
    ],
    hints: ['Use two pointers to track unique elements'],
    starterCode: [
      { language: 'javascript', functionName: 'removeDuplicates', code: 'function removeDuplicates(nums) {\n  // Write your code here\n}\n\nmodule.exports = removeDuplicates;' },
      { language: 'typescript', functionName: 'removeDuplicates', code: 'function removeDuplicates(nums) {\n  // Write your code here\n}\n\nmodule.exports = removeDuplicates;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { nums: [1, 1, 2] }, output: 2 }
    ],
    solution: 'Keep pointer k for unique position. If nums[i] != nums[k-1], nums[k++] = nums[i].'
  },
  {
    id: 'majority-element',
    slug: 'majority-element',
    title: 'Majority Element',
    difficulty: 'easy',
    topics: ['Array', 'Hash Table'],
    prompt: 'Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times.',
    constraints: ['n == nums.length', '1 <= n <= 5 * 10^4'],
    examples: [
      { input: 'nums = [3,2,3]', output: '3' }
    ],
    hints: ['Boyer-Moore Voting Algorithm', 'Count frequency or use sorting'],
    starterCode: [
      {
        language: 'javascript',
        functionName: 'majorityElement',
        code: 'function majorityElement(nums) {\n  // Write your code here\n  return 0;\n}\n\nmodule.exports = majorityElement;'
      },
      {
        language: 'typescript',
        functionName: 'majorityElement',
        code: 'function majorityElement(nums: number[]): number {\n  // Write your code here\n  return 0;\n}\n\nexport default majorityElement;'
      },
      {
        language: 'python',
        functionName: 'majorityElement',
        code: 'def majorityElement(nums):\n    # Write your code here\n    return 0'
      },
      {
        language: 'java',
        functionName: 'majorityElement',
        code: 'class Solution {\n    public int majorityElement(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}'
      },
      {
        language: 'cpp',
        functionName: 'majorityElement',
        code: '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int majorityElement(vector<int>& nums) {\n        // Write your code here\n        return 0;\n    }\n};'
      }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { nums: [3, 2, 3] }, output: 3 }
    ],
    solution: 'Use Boyer-Moore voting: track candidate and count. When count=0, pick new candidate.'
  },
  {
    id: 'best-time-to-buy-sell-stock',
    slug: 'best-time-to-buy-sell-stock',
    title: 'Best Time to Buy and Sell Stock',
    difficulty: 'easy',
    topics: ['Array', 'Dynamic Programming'],
    prompt: 'You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy and different day in the future to sell. Return the maximum profit.',
    constraints: ['1 <= prices.length <= 10^5'],
    examples: [
      { input: 'prices = [7,1,5,3,6,4]', output: '5' }
    ],
    hints: ['Track minimum price and maximum profit while iterating'],
    starterCode: [
      { language: 'javascript', functionName: 'maxProfit', code: 'function maxProfit(prices) {\n  // Write your code here\n}\n\nmodule.exports = maxProfit;' },
      { language: 'typescript', functionName: 'maxProfit', code: 'function maxProfit(prices) {\n  // Write your code here\n}\n\nmodule.exports = maxProfit;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { prices: [7, 1, 5, 3, 6, 4] }, output: 5 }
    ],
    solution: 'Track minPrice and maxProfit. For each price, update maxProfit = max(maxProfit, price - minPrice).'
  },
  {
    id: 'roman-to-integer',
    slug: 'roman-to-integer',
    title: 'Roman to Integer',
    difficulty: 'easy',
    topics: ['String', 'Hash Table'],
    prompt: 'Given a roman numeral, convert it to an integer.',
    constraints: ['1 <= s.length <= 15', 's contains only characters I, V, X, L, C, D, M'],
    examples: [
      { input: 's = "III"', output: '3' },
      { input: 's = "LVIII"', output: '58' }
    ],
    hints: ['Use a map for roman values', 'If current < next, subtract it'],
    starterCode: [
      {
        language: 'javascript',
        functionName: 'romanToInt',
        code: 'function romanToInt(s) {\n  // Write your code here\n  return 0;\n}\n\nmodule.exports = romanToInt;'
      },
      {
        language: 'typescript',
        functionName: 'romanToInt',
        code: 'function romanToInt(s: string): number {\n  // Write your code here\n  return 0;\n}\n\nexport default romanToInt;'
      },
      {
        language: 'python',
        functionName: 'romanToInt',
        code: 'def romanToInt(s):\n    # Write your code here\n    return 0'
      },
      {
        language: 'java',
        functionName: 'romanToInt',
        code: 'class Solution {\n    public int romanToInt(String s) {\n        // Write your code here\n        return 0;\n    }\n}'
      },
      {
        language: 'cpp',
        functionName: 'romanToInt',
        code: '#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    int romanToInt(string s) {\n        // Write your code here\n        return 0;\n    }\n};'
      }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { s: 'III' }, output: 3 },
      { id: 's2', type: 'sample', input: { s: 'LVIII' }, output: 58 }
    ],
    solution: 'Map roman chars to values. Iterate string, if val[i] < val[i+1], subtract else add.'
  },
  {
    id: 'length-of-last-word',
    slug: 'length-of-last-word',
    title: 'Length of Last Word',
    difficulty: 'easy',
    topics: ['String'],
    prompt: 'Given a string s consisting of words and spaces, return the length of the last word in the string.',
    constraints: ['1 <= s.length <= 10^4'],
    examples: [
      { input: 's = "Hello World"', output: '5' }
    ],
    hints: ['Trim spaces and split by space', 'Or iterate from end'],
    starterCode: [
      {
        language: 'javascript',
        functionName: 'lengthOfLastWord',
        code: 'function lengthOfLastWord(s) {\n  // Write your code here\n  return 0;\n}\n\nmodule.exports = lengthOfLastWord;'
      },
      {
        language: 'typescript',
        functionName: 'lengthOfLastWord',
        code: 'function lengthOfLastWord(s: string): number {\n  // Write your code here\n  return 0;\n}\n\nexport default lengthOfLastWord;'
      },
      {
        language: 'python',
        functionName: 'lengthOfLastWord',
        code: 'def lengthOfLastWord(s):\n    # Write your code here\n    return 0'
      },
      {
        language: 'java',
        functionName: 'lengthOfLastWord',
        code: 'class Solution {\n    public int lengthOfLastWord(String s) {\n        // Write your code here\n        return 0;\n    }\n}'
      },
      {
        language: 'cpp',
        functionName: 'lengthOfLastWord',
        code: '#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    int lengthOfLastWord(string s) {\n        // Write your code here\n        return 0;\n    }\n};'
      }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { s: 'Hello World' }, output: 5 }
    ],
    solution: 'Trim string, split by space, return length of last element.'
  },
  {
    id: 'longest-common-prefix',
    slug: 'longest-common-prefix',
    title: 'Longest Common Prefix',
    difficulty: 'easy',
    topics: ['String'],
    prompt: 'Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string.',
    constraints: ['1 <= strs.length <= 200'],
    examples: [
      { input: 'strs = ["flower","flow","flight"]', output: '"fl"' }
    ],
    hints: ['Compare characters at same position across all strings'],
    starterCode: [
      {
        language: 'javascript',
        functionName: 'longestCommonPrefix',
        code: 'function longestCommonPrefix(strs) {\n  // Write your code here\n  return "";\n}\n\nmodule.exports = longestCommonPrefix;'
      },
      {
        language: 'typescript',
        functionName: 'longestCommonPrefix',
        code: 'function longestCommonPrefix(strs: string[]): string {\n  // Write your code here\n  return "";\n}\n\nexport default longestCommonPrefix;'
      },
      {
        language: 'python',
        functionName: 'longestCommonPrefix',
        code: 'def longestCommonPrefix(strs):\n    # Write your code here\n    return ""'
      },
      {
        language: 'java',
        functionName: 'longestCommonPrefix',
        code: 'class Solution {\n    public String longestCommonPrefix(String[] strs) {\n        // Write your code here\n        return "";\n    }\n}'
      },
      {
        language: 'cpp',
        functionName: 'longestCommonPrefix',
        code: '#include <vector>\n#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    string longestCommonPrefix(vector<string>& strs) {\n        // Write your code here\n        return "";\n    }\n};'
      }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { strs: ['flower', 'flow', 'flight'] }, output: 'fl' }
    ],
    solution: 'Use first string as prefix. Compare with each string, trim prefix until match.'
  },
  {
    id: 'remove-duplicates-from-sorted-array-ii',
    slug: 'remove-duplicates-from-sorted-array-ii',
    title: 'Remove Duplicates from Sorted Array II',
    difficulty: 'medium',
    topics: ['Array', 'Two Pointers'],
    prompt: 'Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. Return the number of elements in nums which are kept.',
    constraints: ['1 <= nums.length <= 3 * 10^4', '-10^4 <= nums[i] <= 10^4', 'nums is sorted in non-decreasing order'],
    examples: [
      { input: 'nums = [1,1,1,2,2,3]', output: '5' }
    ],
    hints: ['Track write index and allow at most two occurrences', 'Compare nums[i] with nums[k-2] to decide keeping'],
    starterCode: [
      {
        language: 'javascript',
        functionName: 'removeDuplicates',
        code: 'function removeDuplicates(nums) {\n  // Write your code here\n  return 0;\n}\n\nmodule.exports = removeDuplicates;'
      },
      {
        language: 'typescript',
        functionName: 'removeDuplicates',
        code: 'function removeDuplicates(nums: number[]): number {\n  // Write your code here\n  return 0;\n}\n\nexport default removeDuplicates;'
      },
      {
        language: 'python',
        functionName: 'removeDuplicates',
        code: 'def removeDuplicates(nums):\n    # Write your code here\n    return 0'
      },
      {
        language: 'java',
        functionName: 'removeDuplicates',
        code: 'class Solution {\n    public int removeDuplicates(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}'
      },
      {
        language: 'cpp',
        functionName: 'removeDuplicates',
        code: '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int removeDuplicates(vector<int>& nums) {\n        // Write your code here\n        return 0;\n    }\n};'
      }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { nums: [1, 1, 1, 2, 2, 3] }, output: 5 },
      { id: 'h1', type: 'hidden', input: { nums: [0, 0, 1, 1, 1, 1, 2, 3, 3] }, output: 7 }
    ],
    solution: 'Maintain write index k. For each nums[i], keep it if k < 2 or nums[i] != nums[k-2]. O(n) time, O(1) space.'
  },
  {
    id: 'best-time-to-buy-and-sell-stock-ii',
    slug: 'best-time-to-buy-and-sell-stock-ii',
    title: 'Best Time to Buy and Sell Stock II',
    difficulty: 'medium',
    topics: ['Array', 'Greedy'],
    prompt: 'You are given an integer array prices where prices[i] is the price on the ith day. You may complete as many transactions as you like (buy then sell) but cannot hold multiple shares simultaneously. Return the maximum profit.',
    constraints: ['1 <= prices.length <= 3 * 10^4', '0 <= prices[i] <= 10^4'],
    examples: [
      { input: 'prices = [7,1,5,3,6,4]', output: '7' }
    ],
    hints: ['Profit from every ascending pair prices[i+1] > prices[i]', 'Sum positive daily differences'],
    starterCode: [
      {
        language: 'javascript',
        functionName: 'maxProfit',
        code: 'function maxProfit(prices) {\n  // Write your code here\n  return 0;\n}\n\nmodule.exports = maxProfit;'
      },
      {
        language: 'typescript',
        functionName: 'maxProfit',
        code: 'function maxProfit(prices: number[]): number {\n  // Write your code here\n  return 0;\n}\n\nexport default maxProfit;'
      },
      {
        language: 'python',
        functionName: 'maxProfit',
        code: 'def maxProfit(prices):\n    # Write your code here\n    return 0'
      },
      {
        language: 'java',
        functionName: 'maxProfit',
        code: 'class Solution {\n    public int maxProfit(int[] prices) {\n        // Write your code here\n        return 0;\n    }\n}'
      },
      {
        language: 'cpp',
        functionName: 'maxProfit',
        code: '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        // Write your code here\n        return 0;\n    }\n};'
      }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { prices: [7, 1, 5, 3, 6, 4] }, output: 7 },
      { id: 'h1', type: 'hidden', input: { prices: [1, 2, 3, 4, 5] }, output: 4 }
    ],
    solution: 'Greedy: add prices[i+1] - prices[i] whenever positive. O(n) time, O(1) space.'
  },
  {
    id: 'jump-game',
    slug: 'jump-game',
    title: 'Jump Game',
    difficulty: 'medium',
    topics: ['Array', 'Greedy'],
    prompt: 'You are given an integer array nums where nums[i] is the maximum jump length from index i. Return true if you can reach the last index, or false otherwise.',
    constraints: ['1 <= nums.length <= 10^5', '0 <= nums[i] <= 10^5'],
    examples: [
      { input: 'nums = [2,3,1,1,4]', output: 'true' }
    ],
    hints: ['Track the furthest reachable index while iterating', 'If current index exceeds reach, return false'],
    starterCode: [
      {
        language: 'javascript',
        functionName: 'canJump',
        code: 'function canJump(nums) {\n  // Write your code here\n  return false;\n}\n\nmodule.exports = canJump;'
      },
      {
        language: 'typescript',
        functionName: 'canJump',
        code: 'function canJump(nums: number[]): boolean {\n  // Write your code here\n  return false;\n}\n\nexport default canJump;'
      },
      {
        language: 'python',
        functionName: 'canJump',
        code: 'def canJump(nums):\n    # Write your code here\n    return False'
      },
      {
        language: 'java',
        functionName: 'canJump',
        code: 'class Solution {\n    public boolean canJump(int[] nums) {\n        // Write your code here\n        return false;\n    }\n}'
      },
      {
        language: 'cpp',
        functionName: 'canJump',
        code: '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool canJump(vector<int>& nums) {\n        // Write your code here\n        return false;\n    }\n};'
      }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { nums: [2, 3, 1, 1, 4] }, output: true },
      { id: 'h1', type: 'hidden', input: { nums: [3, 2, 1, 0, 4] }, output: false }
    ],
    solution: 'Maintain maxReach; if i > maxReach return false; update maxReach = max(maxReach, i + nums[i]). True if loop ends.'
  },
  {
    id: 'jump-game-ii',
    slug: 'jump-game-ii',
    title: 'Jump Game II',
    difficulty: 'medium',
    topics: ['Array', 'Greedy'],
    prompt: 'Given an array of non-negative integers nums where nums[i] represents maximum jump length from i, return the minimum number of jumps needed to reach the last index. Assume you can always reach the end.',
    constraints: ['1 <= nums.length <= 10^4', '0 <= nums[i] <= 1000'],
    examples: [
      { input: 'nums = [2,3,1,1,4]', output: '2' }
    ],
    hints: ['Greedy layer expansion: track current range and next farthest', 'Increment jumps when you finish current range'],
    starterCode: [
      {
        language: 'javascript',
        functionName: 'jump',
        code: 'function jump(nums) {\n  // Write your code here\n  return 0;\n}\n\nmodule.exports = jump;'
      },
      {
        language: 'typescript',
        functionName: 'jump',
        code: 'function jump(nums: number[]): number {\n  // Write your code here\n  return 0;\n}\n\nexport default jump;'
      },
      {
        language: 'python',
        functionName: 'jump',
        code: 'def jump(nums):\n    # Write your code here\n    return 0'
      },
      {
        language: 'java',
        functionName: 'jump',
        code: 'class Solution {\n    public int jump(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}'
      },
      {
        language: 'cpp',
        functionName: 'jump',
        code: '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int jump(vector<int>& nums) {\n        // Write your code here\n        return 0;\n    }\n};'
      }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { nums: [2, 3, 1, 1, 4] }, output: 2 },
      { id: 'h1', type: 'hidden', input: { nums: [2, 3, 0, 1, 4] }, output: 2 }
    ],
    solution: 'Greedy BFS over indices: maintain currentEnd and farthest; when i reaches currentEnd, increment jumps and set currentEnd = farthest.'
  },
  {
    id: 'h-index',
    slug: 'h-index',
    title: 'H-Index',
    difficulty: 'medium',
    topics: ['Array', 'Sorting', 'Counting'],
    prompt: 'Given an array of integers citations where citations[i] is the number of citations for a researcher, compute their h-index.',
    constraints: ['n == citations.length', '1 <= n <= 5000', '0 <= citations[i] <= 1000'],
    examples: [
      { input: 'citations = [3,0,6,1,5]', output: '3' }
    ],
    hints: ['Sort descending and find max i where citations[i] >= i+1', 'Or counting bucket by citation counts clipped at n'],
    starterCode: [
      {
        language: 'javascript',
        functionName: 'hIndex',
        code: 'function hIndex(citations) {\n  // Write your code here\n  return 0;\n}\n\nmodule.exports = hIndex;'
      },
      {
        language: 'typescript',
        functionName: 'hIndex',
        code: 'function hIndex(citations: number[]): number {\n  // Write your code here\n  return 0;\n}\n\nexport default hIndex;'
      },
      {
        language: 'python',
        functionName: 'hIndex',
        code: 'def hIndex(citations):\n    # Write your code here\n    return 0'
      },
      {
        language: 'java',
        functionName: 'hIndex',
        code: 'class Solution {\n    public int hIndex(int[] citations) {\n        // Write your code here\n        return 0;\n    }\n}'
      },
      {
        language: 'cpp',
        functionName: 'hIndex',
        code: '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int hIndex(vector<int>& citations) {\n        // Write your code here\n        return 0;\n    }\n};'
      }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { citations: [3, 0, 6, 1, 5] }, output: 3 },
      { id: 'h1', type: 'hidden', input: { citations: [1, 3, 1] }, output: 1 }
    ],
    solution: 'Either sort descending and find first index where citations[i] < i+1, or use counting buckets to run in O(n).'
  },
  {
    id: 'insert-delete-getrandom-o1',
    slug: 'insert-delete-getrandom-o1',
    title: 'Insert Delete GetRandom O(1)',
    difficulty: 'medium',
    topics: ['Design', 'Hash Table'],
    prompt: 'Implement the RandomizedSet class supporting insert, remove, and getRandom, each with average O(1) time complexity.',
    constraints: ['-2^31 <= val <= 2^31 - 1', 'At most 2 * 10^5 operations'],
    examples: [
      { input: 'RandomizedSet, insert(1), remove(2), insert(2), getRandom()', output: '[null,true,false,true,2]' }
    ],
    hints: ['Use array for values and map from value to index', 'On remove, swap with last element before popping to keep O(1)'],
    starterCode: [
      {
        language: 'javascript',
        functionName: 'RandomizedSet',
        code: 'class RandomizedSet {\n  constructor() {}\n  insert(val) { return false; }\n  remove(val) { return false; }\n  getRandom() { return 0; }\n}\n\nmodule.exports = RandomizedSet;'
      },
      {
        language: 'typescript',
        functionName: 'RandomizedSet',
        code: 'class RandomizedSet {\n  constructor() {}\n  insert(val: number): boolean { return false; }\n  remove(val: number): boolean { return false; }\n  getRandom(): number { return 0; }\n}\n\nexport default RandomizedSet;'
      },
      {
        language: 'python',
        functionName: 'RandomizedSet',
        code: 'class RandomizedSet:\n    def __init__(self):\n        pass\n    def insert(self, val):\n        return False\n    def remove(self, val):\n        return False\n    def getRandom(self):\n        return 0'
      },
      {
        language: 'java',
        functionName: 'RandomizedSet',
        code: 'class RandomizedSet {\n    public RandomizedSet() {}\n    public boolean insert(int val) { return false; }\n    public boolean remove(int val) { return false; }\n    public int getRandom() { return 0; }\n}'
      },
      {
        language: 'cpp',
        functionName: 'RandomizedSet',
        code: '#include <vector>\n#include <unordered_map>\nusing namespace std;\n\nclass RandomizedSet {\npublic:\n    RandomizedSet() {}\n    bool insert(int val) { return false; }\n    bool remove(int val) { return false; }\n    int getRandom() { return 0; }\n};'
      }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { operations: ['RandomizedSet', 'insert', 'remove', 'insert', 'getRandom'], args: [[], [1], [2], [2], []] }, output: [null, true, false, true, 2] }
    ],
    solution: 'Store values in array and map value->index. Remove by swapping with last element then pop. getRandom picks random index.'
  },
  {
    id: 'gas-station',
    slug: 'gas-station',
    title: 'Gas Station',
    difficulty: 'medium',
    topics: ['Greedy', 'Array'],
    prompt: 'There are n gas stations arranged in a circle. gas[i] is the gas at station i and cost[i] is the cost to travel to i+1. Return the starting station index if you can travel around once, otherwise -1.',
    constraints: ['n == gas.length == cost.length', '1 <= n <= 10^5', '0 <= gas[i], cost[i] <= 10^4'],
    examples: [
      { input: 'gas = [1,2,3,4,5], cost = [3,4,5,1,2]', output: '3' }
    ],
    hints: ['If total gas < total cost, impossible', 'Greedy reset start when current tank drops below 0'],
    starterCode: [
      {
        language: 'javascript',
        functionName: 'canCompleteCircuit',
        code: 'function canCompleteCircuit(gas, cost) {\n  // Write your code here\n  return -1;\n}\n\nmodule.exports = canCompleteCircuit;'
      },
      {
        language: 'typescript',
        functionName: 'canCompleteCircuit',
        code: 'function canCompleteCircuit(gas: number[], cost: number[]): number {\n  // Write your code here\n  return -1;\n}\n\nexport default canCompleteCircuit;'
      },
      {
        language: 'python',
        functionName: 'canCompleteCircuit',
        code: 'def canCompleteCircuit(gas, cost):\n    # Write your code here\n    return -1'
      },
      {
        language: 'java',
        functionName: 'canCompleteCircuit',
        code: 'class Solution {\n    public int canCompleteCircuit(int[] gas, int[] cost) {\n        // Write your code here\n        return -1;\n    }\n}'
      },
      {
        language: 'cpp',
        functionName: 'canCompleteCircuit',
        code: '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {\n        // Write your code here\n        return -1;\n    }\n};'
      }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { gas: [1, 2, 3, 4, 5], cost: [3, 4, 5, 1, 2] }, output: 3 },
      { id: 'h1', type: 'hidden', input: { gas: [2, 3, 4], cost: [3, 4, 3] }, output: -1 }
    ],
    solution: 'If total gas < total cost return -1. Track tank and start; when tank < 0 reset start = i+1 and tank = 0.'
  },
  {
    id: 'candy',
    slug: 'candy',
    title: 'Candy',
    difficulty: 'hard',
    topics: ['Greedy', 'Array'],
    prompt: 'There are n children standing in a line. Each child is assigned a rating value. You give candies to these children following two rules: each child must have at least one candy; children with a higher rating get more candies than their neighbors. Return the minimum candies you must give.',
    constraints: ['n == ratings.length', '1 <= n <= 2 * 10^5', '0 <= ratings[i] <= 2 * 10^4'],
    examples: [
      { input: 'ratings = [1,0,2]', output: '5' }
    ],
    hints: ['Two-pass greedy: left-to-right then right-to-left', 'Use arrays or rolling values to keep max of both directions'],
    starterCode: [
      {
        language: 'javascript',
        functionName: 'candy',
        code: 'function candy(ratings) {\n  // Write your code here\n  return 0;\n}\n\nmodule.exports = candy;'
      },
      {
        language: 'typescript',
        functionName: 'candy',
        code: 'function candy(ratings: number[]): number {\n  // Write your code here\n  return 0;\n}\n\nexport default candy;'
      },
      {
        language: 'python',
        functionName: 'candy',
        code: 'def candy(ratings):\n    # Write your code here\n    return 0'
      },
      {
        language: 'java',
        functionName: 'candy',
        code: 'class Solution {\n    public int candy(int[] ratings) {\n        // Write your code here\n        return 0;\n    }\n}'
      },
      {
        language: 'cpp',
        functionName: 'candy',
        code: '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int candy(vector<int>& ratings) {\n        // Write your code here\n        return 0;\n    }\n};'
      }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { ratings: [1, 0, 2] }, output: 5 },
      { id: 'h1', type: 'hidden', input: { ratings: [1, 2, 2] }, output: 4 }
    ],
    solution: 'Left pass ensure higher than left; right pass ensure higher than right; take max of both directions per child and sum.'
  },
  {
    id: 'trapping-rain-water',
    slug: 'trapping-rain-water',
    title: 'Trapping Rain Water',
    difficulty: 'hard',
    topics: ['Array', 'Two Pointers', 'Stack'],
    prompt: 'Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.',
    constraints: ['1 <= height.length <= 2 * 10^5', '0 <= height[i] <= 10^5'],
    examples: [
      { input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]', output: '6' }
    ],
    hints: ['Two-pointer solution using leftMax/rightMax', 'Alternative: monotonic stack to find bounded water'],
    starterCode: [
      {
        language: 'javascript',
        functionName: 'trap',
        code: 'function trap(height) {\n  // Write your code here\n  return 0;\n}\n\nmodule.exports = trap;'
      },
      {
        language: 'typescript',
        functionName: 'trap',
        code: 'function trap(height: number[]): number {\n  // Write your code here\n  return 0;\n}\n\nexport default trap;'
      },
      {
        language: 'python',
        functionName: 'trap',
        code: 'def trap(height):\n    # Write your code here\n    return 0'
      },
      {
        language: 'java',
        functionName: 'trap',
        code: 'class Solution {\n    public int trap(int[] height) {\n        // Write your code here\n        return 0;\n    }\n}'
      },
      {
        language: 'cpp',
        functionName: 'trap',
        code: '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int trap(vector<int>& height) {\n        // Write your code here\n        return 0;\n    }\n};'
      }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { height: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1] }, output: 6 },
      { id: 'h1', type: 'hidden', input: { height: [4, 2, 0, 3, 2, 5] }, output: 9 }
    ],
    solution: 'Two pointers with leftMax/rightMax; move side with smaller max and accumulate trapped water. O(n) time, O(1) space.'
  },
  {
    id: 'integer-to-roman',
    slug: 'integer-to-roman',
    title: 'Integer to Roman',
    difficulty: 'medium',
    topics: ['String', 'Math'],
    prompt: 'Convert an integer to a Roman numeral.',
    constraints: ['1 <= num <= 3999'],
    examples: [
      { input: 'num = 58', output: '"LVIII"' }
    ],
    hints: ['Greedy over value-symbol pairs from largest to smallest', 'Handle subtractive pairs like 900, 400, 90'],
    starterCode: [
      {
        language: 'javascript',
        functionName: 'intToRoman',
        code: 'function intToRoman(num) {\n  // Write your code here\n  return "";\n}\n\nmodule.exports = intToRoman;'
      },
      {
        language: 'typescript',
        functionName: 'intToRoman',
        code: 'function intToRoman(num: number): string {\n  // Write your code here\n  return "";\n}\n\nexport default intToRoman;'
      },
      {
        language: 'python',
        functionName: 'intToRoman',
        code: 'def intToRoman(num):\n    # Write your code here\n    return ""'
      },
      {
        language: 'java',
        functionName: 'intToRoman',
        code: 'class Solution {\n    public String intToRoman(int num) {\n        // Write your code here\n        return "";\n    }\n}'
      },
      {
        language: 'cpp',
        functionName: 'intToRoman',
        code: '#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    string intToRoman(int num) {\n        // Write your code here\n        return "";\n    }\n};'
      }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { num: 58 }, output: 'LVIII' },
      { id: 'h1', type: 'hidden', input: { num: 1994 }, output: 'MCMXCIV' }
    ],
    solution: 'Iterate ordered value-symbol pairs subtracting as many as possible, append symbols. Covers subtractive cases.'
  },
  {
    id: 'reverse-words-in-a-string',
    slug: 'reverse-words-in-a-string',
    title: 'Reverse Words in a String',
    difficulty: 'medium',
    topics: ['String', 'Two Pointers'],
    prompt: 'Given a string s, reverse the order of the words. A word is a sequence of non-space characters. Return a string with words in reverse order separated by a single space.',
    constraints: ['1 <= s.length <= 10^4'],
    examples: [
      { input: '"the sky is blue"', output: '"blue is sky the"' }
    ],
    hints: ['Trim extra spaces then split/reverse/join', 'In-place two-pointer approach is also possible'],
    starterCode: [
      {
        language: 'javascript',
        functionName: 'reverseWords',
        code: 'function reverseWords(s) {\n  // Write your code here\n  return "";\n}\n\nmodule.exports = reverseWords;'
      },
      {
        language: 'typescript',
        functionName: 'reverseWords',
        code: 'function reverseWords(s: string): string {\n  // Write your code here\n  return "";\n}\n\nexport default reverseWords;'
      },
      {
        language: 'python',
        functionName: 'reverseWords',
        code: 'def reverseWords(s):\n    # Write your code here\n    return ""'
      },
      {
        language: 'java',
        functionName: 'reverseWords',
        code: 'class Solution {\n    public String reverseWords(String s) {\n        // Write your code here\n        return "";\n    }\n}'
      },
      {
        language: 'cpp',
        functionName: 'reverseWords',
        code: '#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    string reverseWords(string s) {\n        // Write your code here\n        return "";\n    }\n};'
      }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { s: 'the sky is blue' }, output: 'blue is sky the' },
      { id: 'h1', type: 'hidden', input: { s: '  hello world  ' }, output: 'world hello' }
    ],
    solution: 'Trim, split by spaces filtering empties, reverse array, join with single space. O(n) time, O(n) space.'
  },
  {
    id: 'zigzag-conversion',
    slug: 'zigzag-conversion',
    title: 'Zigzag Conversion',
    difficulty: 'medium',
    topics: ['String'],
    prompt: 'Convert a string s into a zigzag pattern on numRows and read line by line.',
    constraints: ['1 <= s.length <= 10^4', '1 <= numRows <= 1000'],
    examples: [
      { input: 's = "PAYPALISHIRING", numRows = 3', output: '"PAHNAPLSIIGYIR"' }
    ],
    hints: ['Simulate rows with direction toggle', 'Or compute cycle length 2*(numRows-1) and pick indices'],
    starterCode: [
      {
        language: 'javascript',
        functionName: 'convert',
        code: 'function convert(s, numRows) {\n  // Write your code here\n  return "";\n}\n\nmodule.exports = convert;'
      },
      {
        language: 'typescript',
        functionName: 'convert',
        code: 'function convert(s: string, numRows: number): string {\n  // Write your code here\n  return "";\n}\n\nexport default convert;'
      },
      {
        language: 'python',
        functionName: 'convert',
        code: 'def convert(s, numRows):\n    # Write your code here\n    return ""'
      },
      {
        language: 'java',
        functionName: 'convert',
        code: 'class Solution {\n    public String convert(String s, int numRows) {\n        // Write your code here\n        return "";\n    }\n}'
      },
      {
        language: 'cpp',
        functionName: 'convert',
        code: '#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    string convert(string s, int numRows) {\n        // Write your code here\n        return "";\n    }\n};'
      }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { s: 'PAYPALISHIRING', numRows: 3 }, output: 'PAHNAPLSIIGYIR' },
      { id: 'h1', type: 'hidden', input: { s: 'PAYPALISHIRING', numRows: 4 }, output: 'PINALSIGYAHRPI' }
    ],
    solution: 'Use string builders per row and move a pointer down/up toggling at bounds; concatenate rows at end.'
  },
  {
    id: 'find-first-occurrence',
    slug: 'find-first-occurrence',
    title: 'Find the Index of the First Occurrence in a String',
    difficulty: 'easy',
    topics: ['String', 'Two Pointers'],
    prompt: 'Given two strings haystack and needle, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.',
    constraints: ['1 <= haystack.length, needle.length <= 10^4'],
    examples: [
      { input: 'haystack = "sadbutsad", needle = "sad"', output: '0' }
    ],
    hints: ['Brute force substring compare', 'Optimizations include KMP or built-in search'],
    starterCode: [
      { language: 'javascript', functionName: 'strStr', code: 'function strStr(haystack, needle) {\n  // Write your code here\n}\n\nmodule.exports = strStr;' },
      { language: 'typescript', functionName: 'strStr', code: 'function strStr(haystack, needle) {\n  // Write your code here\n}\n\nmodule.exports = strStr;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { haystack: 'sadbutsad', needle: 'sad' }, output: 0 },
      { id: 'h1', type: 'hidden', input: { haystack: 'leetcode', needle: 'leeto' }, output: -1 }
    ],
    solution: 'Scan haystack and compare slices; stop at n-m. Advanced: build prefix function (KMP) for O(n+m).'
  },
  {
    id: 'text-justification',
    slug: 'text-justification',
    title: 'Text Justification',
    difficulty: 'hard',
    topics: ['String'],
    prompt: 'Given an array of words and a width maxWidth, format the text so that each line has exactly maxWidth characters and is fully justified.',
    constraints: ['1 <= words.length <= 300', '1 <= words[i].length <= 10', 'words[i] contains English letters and symbols', '1 <= maxWidth <= 100'],
    examples: [
      { input: 'words = ["This","is","an","example","of","text","justification."], maxWidth = 16', output: '["This    is    an","example  of text","justification.  "]' }
    ],
    hints: ['Greedy line packing then distribute spaces', 'Last line is left-justified with single spaces'],
    starterCode: [
      { language: 'javascript', functionName: 'fullJustify', code: 'function fullJustify(words, maxWidth) {\n  // Write your code here\n}\n\nmodule.exports = fullJustify;' },
      { language: 'typescript', functionName: 'fullJustify', code: 'function fullJustify(words, maxWidth) {\n  // Write your code here\n}\n\nmodule.exports = fullJustify;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { words: ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'], maxWidth: 16 }, output: ['This    is    an', 'example  of text', 'justification.  '] }
    ],
    solution: 'Pack words greedily per line; distribute extra spaces between gaps; for single-word or last line, left-justify and pad right.'
  },
  // Two Pointers
  {
    id: 'valid-palindrome',
    slug: 'valid-palindrome',
    title: 'Valid Palindrome',
    difficulty: 'easy',
    topics: ['String', 'Two Pointers'],
    prompt: 'A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.',
    constraints: ['1 <= s.length <= 2 * 10^5'],
    examples: [
      { input: 's = "A man, a plan, a canal: Panama"', output: 'true' }
    ],
    hints: ['Use two pointers from start and end', 'Skip non-alphanumeric characters'],
    starterCode: [
      { language: 'javascript', functionName: 'isPalindrome', code: 'function isPalindrome(s) {\n  // Write your code here\n}\n\nmodule.exports = isPalindrome;' },
      { language: 'typescript', functionName: 'isPalindrome', code: 'function isPalindrome(s) {\n  // Write your code here\n}\n\nmodule.exports = isPalindrome;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { s: 'A man, a plan, a canal: Panama' }, output: true }
    ],
    solution: 'Two pointers: skip non-alphanumeric, compare lowercase chars from both ends.'
  },
  {
    id: 'is-subsequence',
    slug: 'is-subsequence',
    title: 'Is Subsequence',
    difficulty: 'easy',
    topics: ['String', 'Two Pointers'],
    prompt: 'Given two strings s and t, return true if s is a subsequence of t, or false otherwise.',
    constraints: ['0 <= s.length <= 100', '0 <= t.length <= 10^4'],
    examples: [
      { input: 's = "abc", t = "ahbgdc"', output: 'true' }
    ],
    hints: ['Use two pointers, one for each string'],
    starterCode: [
      { language: 'javascript', functionName: 'isSubsequence', code: 'function isSubsequence(s, t) {\n  // Write your code here\n}\n\nmodule.exports = isSubsequence;' },
      { language: 'typescript', functionName: 'isSubsequence', code: 'function isSubsequence(s, t) {\n  // Write your code here\n}\n\nmodule.exports = isSubsequence;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { s: 'abc', t: 'ahbgdc' }, output: true }
    ],
    solution: 'Use pointer i for s, j for t. When s[i]==t[j], i++. Always j++. Return i==s.length.'
  },
  {
    id: 'container-with-most-water',
    slug: 'container-with-most-water',
    title: 'Container With Most Water',
    difficulty: 'medium',
    topics: ['Array', 'Two Pointers'],
    prompt: 'You are given an integer array height of length n. Find two lines that together with the x-axis form a container that contains the most water.',
    constraints: ['n >= 2', '0 <= height[i] <= 3 * 10^4'],
    examples: [
      { input: 'height = [1,8,6,2,5,4,8,3,7]', output: '49' }
    ],
    hints: ['Use two pointers at start and end', 'Move pointer with smaller height'],
    starterCode: [
      { language: 'javascript', functionName: 'maxArea', code: 'function maxArea(height) {\n  // Write your code here\n}\n\nmodule.exports = maxArea;' },
      { language: 'typescript', functionName: 'maxArea', code: 'function maxArea(height) {\n  // Write your code here\n}\n\nmodule.exports = maxArea;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { height: [1, 8, 6, 2, 5, 4, 8, 3, 7] }, output: 49 }
    ],
    solution: 'Two pointers: l=0, r=n-1. Calculate area, move pointer with smaller height inward.'
  },
  // Linked List
  {
    id: 'reverse-linked-list',
    slug: 'reverse-linked-list',
    title: 'Reverse Linked List',
    difficulty: 'easy',
    topics: ['Linked List'],
    prompt: 'Given the head of a singly linked list, reverse the list, and return the reversed list.',
    constraints: ['The number of nodes in the list is the range [0, 5000]'],
    examples: [
      { input: 'head = [1,2,3,4,5]', output: '[5,4,3,2,1]' }
    ],
    hints: ['Use three pointers: prev, curr, next'],
    starterCode: [
      { language: 'javascript', functionName: 'reverseList', code: 'function reverseList(head) {\n  // Write your code here\n}\n\nmodule.exports = reverseList;' },
      { language: 'typescript', functionName: 'reverseList', code: 'function reverseList(head) {\n  // Write your code here\n}\n\nmodule.exports = reverseList;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { head: { val: 1, next: { val: 2, next: { val: 3, next: null } } } }, output: { val: 3, next: { val: 2, next: { val: 1, next: null } } } }
    ],
    solution: 'Iterate with prev=null, curr=head. Save next, point curr.next to prev, move pointers.'
  },
  {
    id: 'linked-list-cycle',
    slug: 'linked-list-cycle',
    title: 'Linked List Cycle',
    difficulty: 'easy',
    topics: ['Linked List', 'Two Pointers'],
    prompt: 'Given head of a linked list, determine if the linked list has a cycle in it.',
    constraints: ['The number of nodes in the list is in the range [0, 10^4]'],
    examples: [
      { input: 'head = [3,2,0,-4], pos = 1', output: 'true' }
    ],
    hints: ['Floyd\'s cycle detection: fast and slow pointers'],
    starterCode: [
      { language: 'javascript', functionName: 'hasCycle', code: 'function hasCycle(head) {\n  // Write your code here\n}\n\nmodule.exports = hasCycle;' },
      { language: 'typescript', functionName: 'hasCycle', code: 'function hasCycle(head) {\n  // Write your code here\n}\n\nmodule.exports = hasCycle;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { head: null }, output: false }
    ],
    solution: 'Use slow/fast pointers. If they meet, there\'s a cycle. If fast reaches null, no cycle.'
  },
  {
    id: 'merge-two-sorted-lists',
    slug: 'merge-two-sorted-lists',
    title: 'Merge Two Sorted Lists',
    difficulty: 'easy',
    topics: ['Linked List'],
    prompt: 'Merge two sorted linked lists and return it as a sorted list.',
    constraints: ['The number of nodes in both lists is in the range [0, 50]'],
    examples: [
      { input: 'list1 = [1,2,4], list2 = [1,3,4]', output: '[1,1,2,3,4,4]' }
    ],
    hints: ['Use a dummy node', 'Compare values and link nodes'],
    starterCode: [
      { language: 'javascript', functionName: 'mergeTwoLists', code: 'function mergeTwoLists(list1, list2) {\n  // Write your code here\n}\n\nmodule.exports = mergeTwoLists;' },
      { language: 'typescript', functionName: 'mergeTwoLists', code: 'function mergeTwoLists(list1, list2) {\n  // Write your code here\n}\n\nmodule.exports = mergeTwoLists;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { list1: null, list2: null }, output: null }
    ],
    solution: 'Create dummy node. Compare values, link smaller node, advance pointer. Return dummy.next.'
  },
  // Stack
  {
    id: 'valid-parentheses',
    slug: 'valid-parentheses',
    title: 'Valid Parentheses',
    difficulty: 'easy',
    topics: ['String', 'Stack'],
    prompt: 'Given a string s containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid.',
    constraints: ['1 <= s.length <= 10^4'],
    examples: [
      { input: 's = "()"', output: 'true' },
      { input: 's = "()[]{}"', output: 'true' }
    ],
    hints: ['Use a stack to track opening brackets'],
    starterCode: [
      { language: 'javascript', functionName: 'isValid', code: 'function isValid(s) {\n  // Write your code here\n}\n\nmodule.exports = isValid;' },
      { language: 'typescript', functionName: 'isValid', code: 'function isValid(s) {\n  // Write your code here\n}\n\nmodule.exports = isValid;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { s: '()' }, output: true },
      { id: 's2', type: 'sample', input: { s: '()[]{}' }, output: true }
    ],
    solution: 'Use stack. Push opening brackets, pop and match closing brackets. Stack empty at end.'
  },
  // Binary Tree
  {
    id: 'maximum-depth-binary-tree',
    slug: 'maximum-depth-binary-tree',
    title: 'Maximum Depth of Binary Tree',
    difficulty: 'easy',
    topics: ['Tree', 'Depth-First Search'],
    prompt: 'Given the root of a binary tree, return its maximum depth.',
    constraints: ['The number of nodes in the tree is in the range [0, 10^4]'],
    examples: [
      { input: 'root = [3,9,20,null,null,15,7]', output: '3' }
    ],
    hints: ['Use recursion: 1 + max(left depth, right depth)'],
    starterCode: [
      { language: 'javascript', functionName: 'maxDepth', code: 'function maxDepth(root) {\n  // Write your code here\n}\n\nmodule.exports = maxDepth;' },
      { language: 'typescript', functionName: 'maxDepth', code: 'function maxDepth(root) {\n  // Write your code here\n}\n\nmodule.exports = maxDepth;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { root: null }, output: 0 }
    ],
    solution: 'Recursion: if !root return 0. Return 1 + max(maxDepth(left), maxDepth(right)).'
  },
  {
    id: 'invert-binary-tree',
    slug: 'invert-binary-tree',
    title: 'Invert Binary Tree',
    difficulty: 'easy',
    topics: ['Tree', 'Depth-First Search'],
    prompt: 'Given the root of a binary tree, invert the tree, and return its root.',
    constraints: ['The number of nodes in the tree is in the range [0, 100]'],
    examples: [
      { input: 'root = [4,2,7,1,3,6,9]', output: '[4,7,2,9,6,3,1]' }
    ],
    hints: ['Swap left and right children recursively'],
    starterCode: [
      { language: 'javascript', functionName: 'invertTree', code: 'function invertTree(root) {\n  // Write your code here\n}\n\nmodule.exports = invertTree;' },
      { language: 'typescript', functionName: 'invertTree', code: 'function invertTree(root) {\n  // Write your code here\n}\n\nmodule.exports = invertTree;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { root: null }, output: null }
    ],
    solution: 'Recursion: if !root return null. Swap left and right. Recursively invert both subtrees.'
  },
  {
    id: 'symmetric-tree',
    slug: 'symmetric-tree',
    title: 'Symmetric Tree',
    difficulty: 'easy',
    topics: ['Tree', 'Depth-First Search'],
    prompt: 'Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).',
    constraints: ['The number of nodes in the tree is in the range [1, 1000]'],
    examples: [
      { input: 'root = [1,2,2,3,4,4,3]', output: 'true' }
    ],
    hints: ['Compare left subtree with right subtree mirror'],
    starterCode: [
      { language: 'javascript', functionName: 'isSymmetric', code: 'function isSymmetric(root) {\n  // Write your code here\n}\n\nmodule.exports = isSymmetric;' },
      { language: 'typescript', functionName: 'isSymmetric', code: 'function isSymmetric(root) {\n  // Write your code here\n}\n\nmodule.exports = isSymmetric;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { root: { val: 1, left: { val: 2, left: null, right: null }, right: { val: 2, left: null, right: null } } }, output: true }
    ],
    solution: 'Helper function to check if two trees are mirrors: compare values and recursively check.'
  },
  // Dynamic Programming
  {
    id: 'climbing-stairs',
    slug: 'climbing-stairs',
    title: 'Climbing Stairs',
    difficulty: 'easy',
    topics: ['Dynamic Programming'],
    prompt: 'You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps. In how many distinct ways can you climb to the top?',
    constraints: ['1 <= n <= 45'],
    examples: [
      { input: 'n = 2', output: '2' },
      { input: 'n = 3', output: '3' }
    ],
    hints: ['Fibonacci pattern: ways[i] = ways[i-1] + ways[i-2]'],
    starterCode: [
      { language: 'javascript', functionName: 'climbStairs', code: 'function climbStairs(n) {\n  // Write your code here\n}\n\nmodule.exports = climbStairs;' },
      { language: 'typescript', functionName: 'climbStairs', code: 'function climbStairs(n) {\n  // Write your code here\n}\n\nmodule.exports = climbStairs;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { n: 2 }, output: 2 },
      { id: 's2', type: 'sample', input: { n: 3 }, output: 3 }
    ],
    solution: 'DP: dp[i] = dp[i-1] + dp[i-2]. Base: dp[1]=1, dp[2]=2. Optimize to O(1) space.'
  },
  {
    id: 'house-robber',
    slug: 'house-robber',
    title: 'House Robber',
    difficulty: 'medium',
    topics: ['Array', 'Dynamic Programming'],
    prompt: 'You are a robber planning to rob houses along a street. Each house has a certain amount of money. Adjacent houses have security systems connected. Determine the maximum amount of money you can rob.',
    constraints: ['1 <= nums.length <= 100'],
    examples: [
      { input: 'nums = [1,2,3,1]', output: '4' }
    ],
    hints: ['dp[i] = max(dp[i-1], dp[i-2] + nums[i])'],
    starterCode: [
      { language: 'javascript', functionName: 'rob', code: 'function rob(nums) {\n  // Write your code here\n}\n\nmodule.exports = rob;' },
      { language: 'typescript', functionName: 'rob', code: 'function rob(nums) {\n  // Write your code here\n}\n\nmodule.exports = rob;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { nums: [1, 2, 3, 1] }, output: 4 }
    ],
    solution: 'DP: max(rob this + rob[i-2], skip this = rob[i-1]). Optimize to two variables.'
  },
  {
    id: 'coin-change',
    slug: 'coin-change',
    title: 'Coin Change',
    difficulty: 'medium',
    topics: ['Array', 'Dynamic Programming'],
    prompt: 'You are given an integer array coins representing coins of different denominations and an integer amount. Return the fewest number of coins needed to make up that amount.',
    constraints: ['1 <= coins.length <= 12', '1 <= amount <= 10^4'],
    examples: [
      { input: 'coins = [1,2,5], amount = 11', output: '3' }
    ],
    hints: ['DP: dp[i] = min coins to make amount i'],
    starterCode: [
      { language: 'javascript', functionName: 'coinChange', code: 'function coinChange(coins, amount) {\n  // Write your code here\n}\n\nmodule.exports = coinChange;' },
      { language: 'typescript', functionName: 'coinChange', code: 'function coinChange(coins, amount) {\n  // Write your code here\n}\n\nmodule.exports = coinChange;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { coins: [1, 2, 5], amount: 11 }, output: 3 }
    ],
    solution: 'DP: dp[i] = min(dp[i], dp[i-coin] + 1) for each coin. Initialize dp with Infinity.'
  },
  {
    id: 'longest-palindromic-substring',
    slug: 'longest-palindromic-substring',
    title: 'Longest Palindromic Substring',
    difficulty: 'medium',
    topics: ['String', 'Dynamic Programming'],
    prompt: 'Given a string s, return the longest palindromic substring in s.',
    constraints: ['1 <= s.length <= 1000'],
    examples: [
      { input: 's = "babad"', output: '"bab"' }
    ],
    hints: ['Expand around center for each position'],
    starterCode: [
      { language: 'javascript', functionName: 'longestPalindrome', code: 'function longestPalindrome(s) {\n  // Write your code here\n}\n\nmodule.exports = longestPalindrome;' },
      { language: 'typescript', functionName: 'longestPalindrome', code: 'function longestPalindrome(s) {\n  // Write your code here\n}\n\nmodule.exports = longestPalindrome;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { s: 'babad' }, output: 'bab' }
    ],
    solution: 'Expand around center: try each char as center, also between chars. Track max length.'
  },
  // Math
  {
    id: 'palindrome-number',
    slug: 'palindrome-number',
    title: 'Palindrome Number',
    difficulty: 'easy',
    topics: ['Math'],
    prompt: 'Given an integer x, return true if x is a palindrome, and false otherwise.',
    constraints: ['-2^31 <= x <= 2^31 - 1'],
    examples: [
      { input: 'x = 121', output: 'true' },
      { input: 'x = -121', output: 'false' }
    ],
    hints: ['Negative numbers are not palindromes', 'Reverse the number and compare'],
    starterCode: [
      { language: 'javascript', functionName: 'isPalindrome', code: 'function isPalindrome(x) {\n  // Write your code here\n}\n\nmodule.exports = isPalindrome;' },
      { language: 'typescript', functionName: 'isPalindrome', code: 'function isPalindrome(x) {\n  // Write your code here\n}\n\nmodule.exports = isPalindrome;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { x: 121 }, output: true },
      { id: 's2', type: 'sample', input: { x: -121 }, output: false }
    ],
    solution: 'Reverse half of number: while x > reversed, pop digit from x and push to reversed.'
  },
  {
    id: 'plus-one',
    slug: 'plus-one',
    title: 'Plus One',
    difficulty: 'easy',
    topics: ['Array', 'Math'],
    prompt: 'You are given a large integer represented as an integer array digits. Increment the integer by one and return the resulting array.',
    constraints: ['1 <= digits.length <= 100'],
    examples: [
      { input: 'digits = [1,2,3]', output: '[1,2,4]' }
    ],
    hints: ['Handle carry from right to left'],
    starterCode: [
      { language: 'javascript', functionName: 'plusOne', code: 'function plusOne(digits) {\n  // Write your code here\n}\n\nmodule.exports = plusOne;' },
      { language: 'typescript', functionName: 'plusOne', code: 'function plusOne(digits) {\n  // Write your code here\n}\n\nmodule.exports = plusOne;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { digits: [1, 2, 3] }, output: [1, 2, 4] }
    ],
    solution: 'Iterate from end. If digit < 9, increment and return. Else set to 0. If all 9s, prepend 1.'
  },
  // Graph
  {
    id: 'number-of-islands',
    slug: 'number-of-islands',
    title: 'Number of Islands',
    difficulty: 'medium',
    topics: ['Graph', 'Depth-First Search', 'Breadth-First Search'],
    prompt: 'Given an m x n 2D binary grid which represents a map of "1"s (land) and "0"s (water), return the number of islands.',
    constraints: [
      'm == grid.length',
      'n == grid[i].length',
      '1 <= m, n <= 300'
    ],
    examples: [
      { input: 'grid = [["1","1","0"],["1","1","0"],["0","0","1"]]', output: '2' }
    ],
    hints: ['Use DFS/BFS to mark connected components', 'Mark visited cells to avoid counting twice'],
    starterCode: [
      { language: 'javascript', functionName: 'numIslands', code: 'function numIslands(grid) {\n  // Write your code here\n}\n\nmodule.exports = numIslands;' },
      { language: 'typescript', functionName: 'numIslands', code: 'function numIslands(grid) {\n  // Write your code here\n}\n\nmodule.exports = numIslands;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { grid: [['1', '1', '0'], ['1', '1', '0'], ['0', '0', '1']] }, output: 2 }
    ],
    solution: 'DFS/BFS from each unvisited land cell, marking all connected land. Count number of DFS calls.'
  },
  {
    id: 'course-schedule',
    slug: 'course-schedule',
    title: 'Course Schedule',
    difficulty: 'medium',
    topics: ['Graph', 'Depth-First Search', 'Topological Sort'],
    prompt: 'There are numCourses courses labeled from 0 to numCourses-1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates you must take course bi first if you want to take course ai. Return true if you can finish all courses.',
    constraints: ['1 <= numCourses <= 2000', '0 <= prerequisites.length <= 5000'],
    examples: [
      { input: 'numCourses = 2, prerequisites = [[1,0]]', output: 'true' }
    ],
    hints: ['Detect cycle in directed graph', 'Use DFS with visiting states'],
    starterCode: [
      { language: 'javascript', functionName: 'canFinish', code: 'function canFinish(numCourses, prerequisites) {\n  // Write your code here\n}\n\nmodule.exports = canFinish;' },
      { language: 'typescript', functionName: 'canFinish', code: 'function canFinish(numCourses, prerequisites) {\n  // Write your code here\n}\n\nmodule.exports = canFinish;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { numCourses: 2, prerequisites: [[1, 0]] }, output: true }
    ],
    solution: 'Build adjacency list. DFS with three states: unvisited, visiting, visited. Cycle if visiting node encountered.'
  },
  {
    id: 'clone-graph',
    slug: 'clone-graph',
    title: 'Clone Graph',
    difficulty: 'medium',
    topics: ['Graph', 'Depth-First Search', 'Hash Table'],
    prompt: 'Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.',
    constraints: ['The number of nodes in the graph is in the range [0, 100]'],
    examples: [
      { input: 'adjList = [[2,4],[1,3],[2,4],[1,3]]', output: '[[2,4],[1,3],[2,4],[1,3]]' }
    ],
    hints: ['Use hash map to track old node -> new node', 'DFS to visit and clone neighbors'],
    starterCode: [
      { language: 'javascript', functionName: 'cloneGraph', code: 'function cloneGraph(node) {\n  // Write your code here\n}\n\nmodule.exports = cloneGraph;' },
      { language: 'typescript', functionName: 'cloneGraph', code: 'function cloneGraph(node) {\n  // Write your code here\n}\n\nmodule.exports = cloneGraph;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { node: null }, output: null }
    ],
    solution: 'DFS with map. For each node, create clone if not exists, recursively clone neighbors.'
  },
  // Backtracking
  {
    id: 'permutations',
    slug: 'permutations',
    title: 'Permutations',
    difficulty: 'medium',
    topics: ['Array', 'Backtracking'],
    prompt: 'Given an array nums of distinct integers, return all the possible permutations.',
    constraints: ['1 <= nums.length <= 6', '-10 <= nums[i] <= 10'],
    examples: [
      { input: 'nums = [1,2,3]', output: '[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]' }
    ],
    hints: ['Backtrack by swapping elements', 'Base case: current permutation length equals nums length'],
    starterCode: [
      { language: 'javascript', functionName: 'permute', code: 'function permute(nums) {\n  // Write your code here\n}\n\nmodule.exports = permute;' },
      { language: 'typescript', functionName: 'permute', code: 'function permute(nums) {\n  // Write your code here\n}\n\nmodule.exports = permute;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { nums: [1, 2, 3] }, output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]] }
    ],
    solution: 'Backtrack: for each position, try each unused number. Add to result when path complete.'
  },
  {
    id: 'subsets',
    slug: 'subsets',
    title: 'Subsets',
    difficulty: 'medium',
    topics: ['Array', 'Backtracking', 'Bit Manipulation'],
    prompt: 'Given an integer array nums of unique elements, return all possible subsets (the power set).',
    constraints: ['1 <= nums.length <= 10', '-10 <= nums[i] <= 10'],
    examples: [
      { input: 'nums = [1,2,3]', output: '[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]' }
    ],
    hints: ['For each element, choose to include or exclude', 'Backtrack from each starting index'],
    starterCode: [
      { language: 'javascript', functionName: 'subsets', code: 'function subsets(nums) {\n  // Write your code here\n}\n\nmodule.exports = subsets;' },
      { language: 'typescript', functionName: 'subsets', code: 'function subsets(nums) {\n  // Write your code here\n}\n\nmodule.exports = subsets;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { nums: [1, 2, 3] }, output: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]] }
    ],
    solution: 'Backtrack: at each index, add current subset, then recurse with/without next element.'
  },
  {
    id: 'combination-sum',
    slug: 'combination-sum',
    title: 'Combination Sum',
    difficulty: 'medium',
    topics: ['Array', 'Backtracking'],
    prompt: 'Given an array of distinct integers candidates and a target integer target, return all unique combinations of candidates where the chosen numbers sum to target. You may use the same number unlimited times.',
    constraints: ['1 <= candidates.length <= 30', '2 <= candidates[i] <= 40'],
    examples: [
      { input: 'candidates = [2,3,6,7], target = 7', output: '[[2,2,3],[7]]' }
    ],
    hints: ['Backtrack with remaining sum', 'Pass starting index to avoid duplicates'],
    starterCode: [
      { language: 'javascript', functionName: 'combinationSum', code: 'function combinationSum(candidates, target) {\n  // Write your code here\n}\n\nmodule.exports = combinationSum;' },
      { language: 'typescript', functionName: 'combinationSum', code: 'function combinationSum(candidates, target) {\n  // Write your code here\n}\n\nmodule.exports = combinationSum;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { candidates: [2, 3, 6, 7], target: 7 }, output: [[2, 2, 3], [7]] }
    ],
    solution: 'Backtrack: try each candidate from start index. Recurse with reduced target. Allow reuse.'
  },
  {
    id: 'generate-parentheses',
    slug: 'generate-parentheses',
    title: 'Generate Parentheses',
    difficulty: 'medium',
    topics: ['String', 'Backtracking'],
    prompt: 'Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.',
    constraints: ['1 <= n <= 8'],
    examples: [
      { input: 'n = 3', output: '["((()))","(()())","(())()","()(())","()()()"]' }
    ],
    hints: ['Track open and close counts', 'Add open if < n, add close if < open'],
    starterCode: [
      { language: 'javascript', functionName: 'generateParenthesis', code: 'function generateParenthesis(n) {\n  // Write your code here\n}\n\nmodule.exports = generateParenthesis;' },
      { language: 'typescript', functionName: 'generateParenthesis', code: 'function generateParenthesis(n) {\n  // Write your code here\n}\n\nmodule.exports = generateParenthesis;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { n: 3 }, output: ['((()))', '(()())', '(())()', '()(())', '()()()'] }
    ],
    solution: 'Backtrack: add "(" if open < n, add ")" if close < open. Base case: string length = 2n.'
  },
  // Bit Manipulation
  {
    id: 'single-number',
    slug: 'single-number',
    title: 'Single Number',
    difficulty: 'easy',
    topics: ['Array', 'Bit Manipulation'],
    prompt: 'Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.',
    constraints: ['1 <= nums.length <= 3 * 10^4', 'Each element appears twice except one'],
    examples: [
      { input: 'nums = [2,2,1]', output: '1' },
      { input: 'nums = [4,1,2,1,2]', output: '4' }
    ],
    hints: ['XOR operation: a ^ a = 0, a ^ 0 = a', 'XOR all numbers together'],
    starterCode: [
      { language: 'javascript', functionName: 'singleNumber', code: 'function singleNumber(nums) {\n  // Write your code here\n}\n\nmodule.exports = singleNumber;' },
      { language: 'typescript', functionName: 'singleNumber', code: 'function singleNumber(nums) {\n  // Write your code here\n}\n\nmodule.exports = singleNumber;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { nums: [2, 2, 1] }, output: 1 },
      { id: 's2', type: 'sample', input: { nums: [4, 1, 2, 1, 2] }, output: 4 }
    ],
    solution: 'XOR all elements. Duplicates cancel out, leaving only the single number. O(n) time, O(1) space.'
  },
  {
    id: 'number-of-1-bits',
    slug: 'number-of-1-bits',
    title: 'Number of 1 Bits',
    difficulty: 'easy',
    topics: ['Bit Manipulation'],
    prompt: 'Write a function that takes an unsigned integer and returns the number of "1" bits it has.',
    constraints: ['The input must be a binary string of length 32'],
    examples: [
      { input: 'n = 00000000000000000000000000001011', output: '3' }
    ],
    hints: ['Use n & (n-1) to remove rightmost 1 bit', 'Count iterations until n becomes 0'],
    starterCode: [
      { language: 'javascript', functionName: 'hammingWeight', code: 'function hammingWeight(n) {\n  // Write your code here\n}\n\nmodule.exports = hammingWeight;' },
      { language: 'typescript', functionName: 'hammingWeight', code: 'function hammingWeight(n) {\n  // Write your code here\n}\n\nmodule.exports = hammingWeight;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { n: 11 }, output: 3 }
    ],
    solution: 'Loop: n = n & (n-1) removes rightmost 1. Count iterations. Or check each bit with n & 1, then n >>= 1.'
  },
  {
    id: 'counting-bits',
    slug: 'counting-bits',
    title: 'Counting Bits',
    difficulty: 'easy',
    topics: ['Dynamic Programming', 'Bit Manipulation'],
    prompt: 'Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1s in the binary representation of i.',
    constraints: ['0 <= n <= 10^5'],
    examples: [
      { input: 'n = 2', output: '[0,1,1]' },
      { input: 'n = 5', output: '[0,1,1,2,1,2]' }
    ],
    hints: ['dp[i] = dp[i >> 1] + (i & 1)', 'Use previously computed results'],
    starterCode: [
      { language: 'javascript', functionName: 'countBits', code: 'function countBits(n) {\n  // Write your code here\n}\n\nmodule.exports = countBits;' },
      { language: 'typescript', functionName: 'countBits', code: 'function countBits(n) {\n  // Write your code here\n}\n\nmodule.exports = countBits;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { n: 2 }, output: [0, 1, 1] },
      { id: 's2', type: 'sample', input: { n: 5 }, output: [0, 1, 1, 2, 1, 2] }
    ],
    solution: 'DP: ans[i] = ans[i >> 1] + (i & 1). Right shift removes last bit, check if it was 1.'
  },
  // Heap
  {
    id: 'kth-largest-element',
    slug: 'kth-largest-element',
    title: 'Kth Largest Element in an Array',
    difficulty: 'medium',
    topics: ['Array', 'Heap', 'Quickselect'],
    prompt: 'Given an integer array nums and an integer k, return the kth largest element in the array.',
    constraints: ['1 <= k <= nums.length <= 10^5'],
    examples: [
      { input: 'nums = [3,2,1,5,6,4], k = 2', output: '5' }
    ],
    hints: ['Use min heap of size k', 'Or use quickselect algorithm'],
    starterCode: [
      { language: 'javascript', functionName: 'findKthLargest', code: 'function findKthLargest(nums, k) {\n  // Write your code here\n}\n\nmodule.exports = findKthLargest;' },
      { language: 'typescript', functionName: 'findKthLargest', code: 'function findKthLargest(nums, k) {\n  // Write your code here\n}\n\nmodule.exports = findKthLargest;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { nums: [3, 2, 1, 5, 6, 4], k: 2 }, output: 5 }
    ],
    solution: 'Min heap of size k: add elements, remove min if size > k. Or quickselect: partition and recurse.'
  },
  {
    id: 'top-k-frequent-elements',
    slug: 'top-k-frequent-elements',
    title: 'Top K Frequent Elements',
    difficulty: 'medium',
    topics: ['Array', 'Hash Table', 'Heap'],
    prompt: 'Given an integer array nums and an integer k, return the k most frequent elements.',
    constraints: ['1 <= nums.length <= 10^5', '1 <= k <= number of distinct elements'],
    examples: [
      { input: 'nums = [1,1,1,2,2,3], k = 2', output: '[1,2]' }
    ],
    hints: ['Count frequencies with hash map', 'Use heap or bucket sort'],
    starterCode: [
      { language: 'javascript', functionName: 'topKFrequent', code: 'function topKFrequent(nums, k) {\n  // Write your code here\n}\n\nmodule.exports = topKFrequent;' },
      { language: 'typescript', functionName: 'topKFrequent', code: 'function topKFrequent(nums, k) {\n  // Write your code here\n}\n\nmodule.exports = topKFrequent;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { nums: [1, 1, 1, 2, 2, 3], k: 2 }, output: [1, 2] }
    ],
    solution: 'Count frequencies. Heap of size k with frequencies, or bucket sort by frequency.'
  },
  // Trie
  {
    id: 'implement-trie',
    slug: 'implement-trie',
    title: 'Implement Trie (Prefix Tree)',
    difficulty: 'medium',
    topics: ['Design', 'Trie', 'String'],
    prompt: 'Implement a trie with insert, search, and startsWith methods.',
    constraints: ['1 <= word.length, prefix.length <= 2000'],
    examples: [
      { input: 'insert("apple"), search("apple")', output: 'true' }
    ],
    hints: ['Each node has 26 children (a-z)', 'Mark end of word with flag'],
    starterCode: [
      { language: 'javascript', functionName: 'Trie', code: 'class Trie {\n  constructor() {\n    // Initialize\n  }\n  insert(word) {}\n  search(word) {}\n  startsWith(prefix) {}\n}\n\nmodule.exports = Trie;' },
      { language: 'typescript', functionName: 'Trie', code: 'class Trie {\n  constructor() {\n    // Initialize\n  }\n  insert(word) {}\n  search(word) {}\n  startsWith(prefix) {}\n}\n\nmodule.exports = Trie;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { operations: ['insert', 'search'], args: [['apple'], ['apple']] }, output: [null, true] }
    ],
    solution: 'Node has children map and isEnd flag. Insert: traverse/create nodes. Search: check isEnd. StartsWith: check path exists.'
  },
  // More DP
  {
    id: 'unique-paths',
    slug: 'unique-paths',
    title: 'Unique Paths',
    difficulty: 'medium',
    topics: ['Dynamic Programming', 'Math'],
    prompt: 'A robot is on an m x n grid at top-left. It can only move right or down. How many possible unique paths are there to bottom-right?',
    constraints: ['1 <= m, n <= 100'],
    examples: [
      { input: 'm = 3, n = 7', output: '28' }
    ],
    hints: ['dp[i][j] = dp[i-1][j] + dp[i][j-1]', 'Can optimize to 1D array'],
    starterCode: [
      { language: 'javascript', functionName: 'uniquePaths', code: 'function uniquePaths(m, n) {\n  // Write your code here\n}\n\nmodule.exports = uniquePaths;' },
      { language: 'typescript', functionName: 'uniquePaths', code: 'function uniquePaths(m, n) {\n  // Write your code here\n}\n\nmodule.exports = uniquePaths;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { m: 3, n: 7 }, output: 28 }
    ],
    solution: 'DP: paths[i][j] = paths[i-1][j] + paths[i][j-1]. Base: first row/col = 1. Optimize to 1D.'
  },
  {
    id: 'word-break',
    slug: 'word-break',
    title: 'Word Break',
    difficulty: 'medium',
    topics: ['String', 'Dynamic Programming', 'Trie'],
    prompt: 'Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.',
    constraints: ['1 <= s.length <= 300', '1 <= wordDict.length <= 1000'],
    examples: [
      { input: 's = "leetcode", wordDict = ["leet","code"]', output: 'true' }
    ],
    hints: ['dp[i] = true if s[0:i] can be segmented', 'Check all possible last words'],
    starterCode: [
      { language: 'javascript', functionName: 'wordBreak', code: 'function wordBreak(s, wordDict) {\n  // Write your code here\n}\n\nmodule.exports = wordBreak;' },
      { language: 'typescript', functionName: 'wordBreak', code: 'function wordBreak(s, wordDict) {\n  // Write your code here\n}\n\nmodule.exports = wordBreak;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { s: 'leetcode', wordDict: ['leet', 'code'] }, output: true }
    ],
    solution: 'DP: dp[i] = any(dp[j] && s[j:i] in dict) for j < i. Base: dp[0] = true.'
  },
  {
    id: 'longest-increasing-subsequence',
    slug: 'longest-increasing-subsequence',
    title: 'Longest Increasing Subsequence',
    difficulty: 'medium',
    topics: ['Array', 'Dynamic Programming', 'Binary Search'],
    prompt: 'Given an integer array nums, return the length of the longest strictly increasing subsequence.',
    constraints: ['1 <= nums.length <= 2500'],
    examples: [
      { input: 'nums = [10,9,2,5,3,7,101,18]', output: '4' }
    ],
    hints: ['dp[i] = max length ending at i', 'Or use binary search on tails array'],
    starterCode: [
      { language: 'javascript', functionName: 'lengthOfLIS', code: 'function lengthOfLIS(nums) {\n  // Write your code here\n}\n\nmodule.exports = lengthOfLIS;' },
      { language: 'typescript', functionName: 'lengthOfLIS', code: 'function lengthOfLIS(nums) {\n  // Write your code here\n}\n\nmodule.exports = lengthOfLIS;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { nums: [10, 9, 2, 5, 3, 7, 101, 18] }, output: 4 }
    ],
    solution: 'DP O(n²): dp[i] = max(dp[j]+1) where j<i and nums[j]<nums[i]. Or O(n log n) with binary search.'
  },
  // Design
  {
    id: 'min-stack',
    slug: 'min-stack',
    title: 'Min Stack',
    difficulty: 'medium',
    topics: ['Stack', 'Design'],
    prompt: 'Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.',
    constraints: ['-2^31 <= val <= 2^31 - 1'],
    examples: [
      { input: 'push(-2), push(0), push(-3), getMin()', output: '-3' }
    ],
    hints: ['Use two stacks: one for values, one for minimums', 'Or store (val, min) pairs'],
    starterCode: [
      { language: 'javascript', functionName: 'MinStack', code: 'class MinStack {\n  constructor() {}\n  push(val) {}\n  pop() {}\n  top() {}\n  getMin() {}\n}\n\nmodule.exports = MinStack;' },
      { language: 'typescript', functionName: 'MinStack', code: 'class MinStack {\n  constructor() {}\n  push(val) {}\n  pop() {}\n  top() {}\n  getMin() {}\n}\n\nmodule.exports = MinStack;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { operations: ['push', 'push', 'push', 'getMin'], args: [[-2], [0], [-3], []] }, output: [null, null, null, -3] }
    ],
    solution: 'Two stacks: main stack and min stack. Push: add to both (min = min of val and current min). Pop: remove from both.'
  },
  {
    id: 'lru-cache',
    slug: 'lru-cache',
    title: 'LRU Cache',
    difficulty: 'medium',
    topics: ['Design', 'Hash Table', 'Linked List'],
    prompt: 'Design a data structure that follows Least Recently Used (LRU) cache with get and put operations in O(1) time.',
    constraints: ['1 <= capacity <= 3000', '0 <= key <= 10^4'],
    examples: [
      { input: 'LRUCache(2), put(1,1), put(2,2), get(1)', output: '1' }
    ],
    hints: ['Use hash map + doubly linked list', 'Map stores key -> node, list tracks recency'],
    starterCode: [
      { language: 'javascript', functionName: 'LRUCache', code: 'class LRUCache {\n  constructor(capacity) {}\n  get(key) {}\n  put(key, value) {}\n}\n\nmodule.exports = LRUCache;' },
      { language: 'typescript', functionName: 'LRUCache', code: 'class LRUCache {\n  constructor(capacity) {}\n  get(key) {}\n  put(key, value) {}\n}\n\nmodule.exports = LRUCache;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { operations: ['LRUCache', 'put', 'put', 'get'], args: [[2], [1, 1], [2, 2], [1]] }, output: [null, null, null, 1] }
    ],
    solution: 'Hash map + doubly linked list. Get: move to head. Put: add to head, remove tail if over capacity.'
  },
  // Additional Array/String
  {
    id: 'rotate-array',
    slug: 'rotate-array',
    title: 'Rotate Array',
    difficulty: 'medium',
    topics: ['Array', 'Two Pointers'],
    prompt: 'Given an array, rotate the array to the right by k steps, where k is non-negative.',
    constraints: ['1 <= nums.length <= 10^5', '0 <= k <= 10^5'],
    examples: [
      { input: 'nums = [1,2,3,4,5,6,7], k = 3', output: '[5,6,7,1,2,3,4]' }
    ],
    hints: ['Reverse entire array, then reverse first k and last n-k', 'k = k % n to handle k > n'],
    starterCode: [
      { language: 'javascript', functionName: 'rotate', code: 'function rotate(nums, k) {\n  // Write your code here\n}\n\nmodule.exports = rotate;' },
      { language: 'typescript', functionName: 'rotate', code: 'function rotate(nums, k) {\n  // Write your code here\n}\n\nmodule.exports = rotate;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { nums: [1, 2, 3, 4, 5, 6, 7], k: 3 }, output: [5, 6, 7, 1, 2, 3, 4] }
    ],
    solution: 'Three reversals: reverse all, reverse [0:k], reverse [k:n]. O(n) time, O(1) space.'
  },
  {
    id: 'product-of-array-except-self',
    slug: 'product-of-array-except-self',
    title: 'Product of Array Except Self',
    difficulty: 'medium',
    topics: ['Array', 'Prefix Sum'],
    prompt: 'Given an integer array nums, return an array answer such that answer[i] is equal to the product of all elements of nums except nums[i]. Do not use division.',
    constraints: ['2 <= nums.length <= 10^5'],
    examples: [
      { input: 'nums = [1,2,3,4]', output: '[24,12,8,6]' }
    ],
    hints: ['Use prefix and suffix products', 'Can do in one pass with output array'],
    starterCode: [
      { language: 'javascript', functionName: 'productExceptSelf', code: 'function productExceptSelf(nums) {\n  // Write your code here\n}\n\nmodule.exports = productExceptSelf;' },
      { language: 'typescript', functionName: 'productExceptSelf', code: 'function productExceptSelf(nums) {\n  // Write your code here\n}\n\nmodule.exports = productExceptSelf;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { nums: [1, 2, 3, 4] }, output: [24, 12, 8, 6] }
    ],
    solution: 'Two passes: build prefix products in result, then multiply by suffix products. O(n) time, O(1) extra space.'
  },
  {
    id: 'find-minimum-in-rotated-sorted-array',
    slug: 'find-minimum-in-rotated-sorted-array',
    title: 'Find Minimum in Rotated Sorted Array',
    difficulty: 'medium',
    topics: ['Array', 'Binary Search'],
    prompt: 'Suppose an array of length n sorted in ascending order is rotated. Given the rotated array, return the minimum element.',
    constraints: ['n == nums.length', '1 <= n <= 5000'],
    examples: [
      { input: 'nums = [3,4,5,1,2]', output: '1' }
    ],
    hints: ['Binary search: compare mid with right', 'If mid > right, min is in right half'],
    starterCode: [
      { language: 'javascript', functionName: 'findMin', code: 'function findMin(nums) {\n  // Write your code here\n}\n\nmodule.exports = findMin;' },
      { language: 'typescript', functionName: 'findMin', code: 'function findMin(nums) {\n  // Write your code here\n}\n\nmodule.exports = findMin;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { nums: [3, 4, 5, 1, 2] }, output: 1 }
    ],
    solution: 'Binary search: if nums[mid] > nums[right], search right half, else search left half.'
  },
  {
    id: 'search-in-rotated-sorted-array',
    slug: 'search-in-rotated-sorted-array',
    title: 'Search in Rotated Sorted Array',
    difficulty: 'medium',
    topics: ['Array', 'Binary Search'],
    prompt: 'Given a rotated sorted array and a target value, search for the target. If found return its index, otherwise return -1.',
    constraints: ['1 <= nums.length <= 5000', 'All values are unique'],
    examples: [
      { input: 'nums = [4,5,6,7,0,1,2], target = 0', output: '4' }
    ],
    hints: ['Binary search with rotation check', 'Determine which half is sorted'],
    starterCode: [
      { language: 'javascript', functionName: 'search', code: 'function search(nums, target) {\n  // Write your code here\n}\n\nmodule.exports = search;' },
      { language: 'typescript', functionName: 'search', code: 'function search(nums, target) {\n  // Write your code here\n}\n\nmodule.exports = search;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { nums: [4, 5, 6, 7, 0, 1, 2], target: 0 }, output: 4 }
    ],
    solution: 'Binary search: check which half is sorted, then check if target is in sorted half.'
  },
  // --- Top Interview Problems (Batch 1) ---
  {
    id: '3sum',
    slug: '3sum',
    title: '3Sum',
    difficulty: 'medium',
    topics: ['Array', 'Two Pointers', 'Sorting'],
    prompt: 'Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.',
    constraints: [
      '3 <= nums.length <= 3000',
      '-10^5 <= nums[i] <= 10^5'
    ],
    examples: [
      { input: 'nums = [-1,0,1,2,-1,-4]', output: '[[-1,-1,2],[-1,0,1]]' }
    ],
    hints: [
      'Sort the array and use two pointers for each element.'
    ],
    starterCode: [
      { language: 'javascript', functionName: 'threeSum', code: 'function threeSum(nums) {\n  // Write your code here\n  return [];\n}\n\nmodule.exports = threeSum;' },
      { language: 'typescript', functionName: 'threeSum', code: 'function threeSum(nums: number[]): number[][] {\n  // Write your code here\n  return [];\n}\n\nexport default threeSum;' },
      { language: 'python', functionName: 'threeSum', code: 'def threeSum(nums):\n    # Write your code here\n    return []' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { nums: [-1, 0, 1, 2, -1, -4] }, output: [[-1, -1, 2], [-1, 0, 1]] }
    ],
    solution: 'Sort nums. For each i, use two pointers j and k to find pairs such that nums[i] + nums[j] + nums[k] == 0. Skip duplicates.'
  },
  {
    id: 'group-anagrams',
    slug: 'group-anagrams',
    title: 'Group Anagrams',
    difficulty: 'medium',
    topics: ['Array', 'Hash Table', 'String'],
    prompt: 'Given an array of strings strs, group the anagrams together. You can return the answer in any order.',
    constraints: [
      '1 <= strs.length <= 10^4',
      '0 <= strs[i].length <= 100'
    ],
    examples: [
      { input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[ ["eat","tea","ate"], ["tan","nat"], ["bat"] ]' }
    ],
    hints: [
      'Use a hash map with sorted string as key.'
    ],
    starterCode: [
      { language: 'javascript', functionName: 'groupAnagrams', code: 'function groupAnagrams(strs) {\n  // Write your code here\n  return [];\n}\n\nmodule.exports = groupAnagrams;' },
      { language: 'typescript', functionName: 'groupAnagrams', code: 'function groupAnagrams(strs: string[]): string[][] {\n  // Write your code here\n  return [];\n}\n\nexport default groupAnagrams;' },
      { language: 'python', functionName: 'groupAnagrams', code: 'def groupAnagrams(strs):\n    # Write your code here\n    return []' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { strs: ["eat", "tea", "tan", "ate", "nat", "bat"] }, output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]] }
    ],
    solution: 'For each string, sort it and use as a key in a hash map to group anagrams.'
  },
  {
    id: 'valid-sudoku',
    slug: 'valid-sudoku',
    title: 'Valid Sudoku',
    difficulty: 'medium',
    topics: ['Array', 'Hash Table', 'Matrix'],
    prompt: 'Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the rules.',
    constraints: [
      'board.length == 9',
      'board[i].length == 9'
    ],
    examples: [
      { input: 'board = [["5","3",".",".","7",".",".",".","."]...]', output: 'true' }
    ],
    hints: [
      'Use sets to track seen numbers in rows, columns, and boxes.'
    ],
    starterCode: [
      { language: 'javascript', functionName: 'isValidSudoku', code: 'function isValidSudoku(board) {\n  // Write your code here\n  return false;\n}\n\nmodule.exports = isValidSudoku;' },
      { language: 'typescript', functionName: 'isValidSudoku', code: 'function isValidSudoku(board: string[][]): boolean {\n  // Write your code here\n  return false;\n}\n\nexport default isValidSudoku;' },
      { language: 'python', functionName: 'isValidSudoku', code: 'def isValidSudoku(board):\n    # Write your code here\n    return False' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { board: [["5", "3", ".", ".", "7", ".", ".", ".", "."] /* ... */] }, output: true }
    ],
    solution: 'Check each row, column, and 3x3 box for duplicates using sets.'
  },
  {
    id: 'rotate-image',
    slug: 'rotate-image',
    title: 'Rotate Image',
    difficulty: 'medium',
    topics: ['Array', 'Matrix'],
    prompt: 'You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise) in-place.',
    constraints: [
      'matrix.length == n',
      'matrix[i].length == n',
      '1 <= n <= 20'
    ],
    examples: [
      { input: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]', output: '[[7,4,1],[8,5,2],[9,6,3]]' }
    ],
    hints: [
      'Transpose the matrix, then reverse each row.'
    ],
    starterCode: [
      { language: 'javascript', functionName: 'rotate', code: 'function rotate(matrix) {\n  // Write your code here\n}\n\nmodule.exports = rotate;' },
      { language: 'typescript', functionName: 'rotate', code: 'function rotate(matrix: number[][]): void {\n  // Write your code here\n}\n\nexport default rotate;' },
      { language: 'python', functionName: 'rotate', code: 'def rotate(matrix):\n    # Write your code here\n    pass' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] }, output: [[7, 4, 1], [8, 5, 2], [9, 6, 3]] }
    ],
    solution: 'First transpose the matrix, then reverse each row.'
  },
  {
    id: 'spiral-matrix',
    slug: 'spiral-matrix',
    title: 'Spiral Matrix',
    difficulty: 'medium',
    topics: ['Array', 'Matrix'],
    prompt: 'Given an m x n matrix, return all elements of the matrix in spiral order.',
    constraints: [
      '1 <= m, n <= 10'
    ],
    examples: [
      { input: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]', output: '[1,2,3,6,9,8,7,4,5]' }
    ],
    hints: [
      'Simulate the process by keeping track of boundaries.'
    ],
    starterCode: [
      { language: 'javascript', functionName: 'spiralOrder', code: 'function spiralOrder(matrix) {\n  // Write your code here\n  return [];\n}\n\nmodule.exports = spiralOrder;' },
      { language: 'typescript', functionName: 'spiralOrder', code: 'function spiralOrder(matrix: number[][]): number[] {\n  // Write your code here\n  return [];\n}\n\nexport default spiralOrder;' },
      { language: 'python', functionName: 'spiralOrder', code: 'def spiralOrder(matrix):\n    # Write your code here\n    return []' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] }, output: [1, 2, 3, 6, 9, 8, 7, 4, 5] }
    ],
    solution: 'Use four pointers to track the boundaries and iterate inwards.'
  },
  {
    id: 'set-matrix-zeroes',
    slug: 'set-matrix-zeroes',
    title: 'Set Matrix Zeroes',
    difficulty: 'medium',
    topics: ['Array', 'Matrix'],
    prompt: 'Given an m x n integer matrix, if an element is 0, set its entire row and column to 0. Do it in-place.',
    constraints: [
      'm == matrix.length',
      'n == matrix[0].length',
      '1 <= m, n <= 200'
    ],
    examples: [
      { input: 'matrix = [[1,1,1],[1,0,1],[1,1,1]]', output: '[[1,0,1],[0,0,0],[1,0,1]]' }
    ],
    hints: [
      'Use first row and column as markers.'
    ],
    starterCode: [
      { language: 'javascript', functionName: 'setZeroes', code: 'function setZeroes(matrix) {\n  // Write your code here\n}\n\nmodule.exports = setZeroes;' },
      { language: 'typescript', functionName: 'setZeroes', code: 'function setZeroes(matrix: number[][]): void {\n  // Write your code here\n}\n\nexport default setZeroes;' },
      { language: 'python', functionName: 'setZeroes', code: 'def setZeroes(matrix):\n    # Write your code here\n    pass' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { matrix: [[1, 1, 1], [1, 0, 1], [1, 1, 1]] }, output: [[1, 0, 1], [0, 0, 0], [1, 0, 1]] }
    ],
    solution: 'Use first row and column as markers to record which rows/columns should be zero.'
  },
  {
    id: 'search-a-2d-matrix',
    slug: 'search-a-2d-matrix',
    title: 'Search a 2D Matrix',
    difficulty: 'medium',
    topics: ['Array', 'Binary Search', 'Matrix'],
    prompt: 'Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties: Integers in each row are sorted from left to right. The first integer of each row is greater than the last integer of the previous row.',
    constraints: [
      'm == matrix.length',
      'n == matrix[0].length',
      '1 <= m, n <= 100'
    ],
    examples: [
      { input: 'matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3', output: 'true' }
    ],
    hints: [
      'Treat the matrix as a 1D array and use binary search.'
    ],
    starterCode: [
      { language: 'javascript', functionName: 'searchMatrix', code: 'function searchMatrix(matrix, target) {\n  // Write your code here\n  return false;\n}\n\nmodule.exports = searchMatrix;' },
      { language: 'typescript', functionName: 'searchMatrix', code: 'function searchMatrix(matrix: number[][], target: number): boolean {\n  // Write your code here\n  return false;\n}\n\nexport default searchMatrix;' },
      { language: 'python', functionName: 'searchMatrix', code: 'def searchMatrix(matrix, target):\n    # Write your code here\n    return False' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { matrix: [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target: 3 }, output: true }
    ],
    solution: 'Use binary search on the virtual 1D array representation of the matrix.'
  },
  {
    id: 'word-search',
    slug: 'word-search',
    title: 'Word Search',
    difficulty: 'medium',
    topics: ['Array', 'Backtracking', 'Matrix'],
    prompt: 'Given an m x n grid of characters board and a string word, return true if word exists in the grid.',
    constraints: [
      'm == board.length',
      'n == board[i].length',
      '1 <= m, n <= 6',
      '1 <= word.length <= 15'
    ],
    examples: [
      { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', output: 'true' }
    ],
    hints: [
      'Use backtracking to search for the word.'
    ],
    starterCode: [
      { language: 'javascript', functionName: 'exist', code: 'function exist(board, word) {\n  // Write your code here\n  return false;\n}\n\nmodule.exports = exist;' },
      { language: 'typescript', functionName: 'exist', code: 'function exist(board: string[][], word: string): boolean {\n  // Write your code here\n  return false;\n}\n\nexport default exist;' },
      { language: 'python', functionName: 'exist', code: 'def exist(board, word):\n    # Write your code here\n    return False' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { board: [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word: "ABCCED" }, output: true }
    ],
    solution: 'Use DFS with backtracking to search for the word in the grid.'
  },
  {
    id: 'combination-sum-ii',
    slug: 'combination-sum-ii',
    title: 'Combination Sum II',
    difficulty: 'medium',
    topics: ['Array', 'Backtracking'],
    prompt: 'Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target. Each number in candidates may only be used once in the combination.',
    constraints: [
      '1 <= candidates.length <= 100',
      '1 <= candidates[i] <= 50',
      '1 <= target <= 30'
    ],
    examples: [
      { input: 'candidates = [10,1,2,7,6,1,5], target = 8', output: '[[1,1,6],[1,2,5],[1,7],[2,6]]' }
    ],
    hints: [
      'Sort the array and use backtracking, skipping duplicates.'
    ],
    starterCode: [
      { language: 'javascript', functionName: 'combinationSum2', code: 'function combinationSum2(candidates, target) {\n  // Write your code here\n  return [];\n}\n\nmodule.exports = combinationSum2;' },
      { language: 'typescript', functionName: 'combinationSum2', code: 'function combinationSum2(candidates: number[], target: number): number[][] {\n  // Write your code here\n  return [];\n}\n\nexport default combinationSum2;' },
      { language: 'python', functionName: 'combinationSum2', code: 'def combinationSum2(candidates, target):\n    # Write your code here\n    return []' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { candidates: [10, 1, 2, 7, 6, 1, 5], target: 8 }, output: [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]] }
    ],
    solution: 'Sort candidates, use backtracking, and skip duplicates to find all unique combinations.'
  },
  {
    id: 'minimum-path-sum',
    slug: 'minimum-path-sum',
    title: 'Minimum Path Sum',
    difficulty: 'medium',
    topics: ['Array', 'Dynamic Programming', 'Matrix'],
    prompt: 'Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path. You can only move either down or right at any point in time.',
    constraints: [
      'm == grid.length',
      'n == grid[0].length',
      '1 <= m, n <= 200'
    ],
    examples: [
      { input: 'grid = [[1,3,1],[1,5,1],[4,2,1]]', output: '7' }
    ],
    hints: [
      'Use dynamic programming to build up the minimum path sum.'
    ],
    starterCode: [
      { language: 'javascript', functionName: 'minPathSum', code: 'function minPathSum(grid) {\n  // Write your code here\n  return 0;\n}\n\nmodule.exports = minPathSum;' },
      { language: 'typescript', functionName: 'minPathSum', code: 'function minPathSum(grid: number[][]): number {\n  // Write your code here\n  return 0;\n}\n\nexport default minPathSum;' },
      { language: 'python', functionName: 'minPathSum', code: 'def minPathSum(grid):\n    # Write your code here\n    return 0' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { grid: [[1, 3, 1], [1, 5, 1], [4, 2, 1]] }, output: 7 }
    ],
    solution: 'Use a DP table where dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1]).'
  },
  {
    id: 'unique-paths-ii',
    slug: 'unique-paths-ii',
    title: 'Unique Paths II',
    difficulty: 'medium',
    topics: ['Array', 'Dynamic Programming', 'Matrix'],
    prompt: 'A robot is located at the top-left corner of a m x n grid. The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid. Now consider if some obstacles are added to the grids. How many unique paths would there be?',
    constraints: [
      'm == obstacleGrid.length',
      'n == obstacleGrid[0].length',
      '1 <= m, n <= 100'
    ],
    examples: [
      { input: 'obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]', output: '2' }
    ],
    hints: [
      'Use dynamic programming, set dp[i][j] = 0 if obstacle.'
    ],
    starterCode: [
      { language: 'javascript', functionName: 'uniquePathsWithObstacles', code: 'function uniquePathsWithObstacles(obstacleGrid) {\n  // Write your code here\n  return 0;\n}\n\nmodule.exports = uniquePathsWithObstacles;' },
      { language: 'typescript', functionName: 'uniquePathsWithObstacles', code: 'function uniquePathsWithObstacles(obstacleGrid: number[][]): number {\n  // Write your code here\n  return 0;\n}\n\nexport default uniquePathsWithObstacles;' },
      { language: 'python', functionName: 'uniquePathsWithObstacles', code: 'def uniquePathsWithObstacles(obstacleGrid):\n    # Write your code here\n    return 0' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { obstacleGrid: [[0, 0, 0], [0, 1, 0], [0, 0, 0]] }, output: 2 }
    ],
    solution: 'Use a DP table, set dp[i][j] = 0 if obstacleGrid[i][j] == 1, else dp[i][j] = dp[i-1][j] + dp[i][j-1].'
  },
  {
    id: 'climbing-stairs',
    slug: 'climbing-stairs',
    title: 'Climbing Stairs',
    difficulty: 'easy',
    topics: ['Dynamic Programming'],
    prompt: 'You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?',
    constraints: [
      '1 <= n <= 45'
    ],
    examples: [
      { input: 'n = 2', output: '2' },
      { input: 'n = 3', output: '3' }
    ],
    hints: [
      'Use dynamic programming or Fibonacci sequence.'
    ],
    starterCode: [
      { language: 'javascript', functionName: 'climbStairs', code: 'function climbStairs(n) {\n  // Write your code here\n  return 0;\n}\n\nmodule.exports = climbStairs;' },
      { language: 'typescript', functionName: 'climbStairs', code: 'function climbStairs(n: number): number {\n  // Write your code here\n  return 0;\n}\n\nexport default climbStairs;' },
      { language: 'python', functionName: 'climbStairs', code: 'def climbStairs(n):\n    # Write your code here\n    return 0' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { n: 2 }, output: 2 },
      { id: 's2', type: 'sample', input: { n: 3 }, output: 3 }
    ],
    solution: 'The answer is the nth Fibonacci number.'
  },
  {
    id: 'edit-distance',
    slug: 'edit-distance',
    title: 'Edit Distance',
    difficulty: 'hard',
    topics: ['String', 'Dynamic Programming'],
    prompt: 'Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2. You may perform insert, delete, or replace operations.',
    constraints: [
      '0 <= word1.length, word2.length <= 500'
    ],
    examples: [
      { input: 'word1 = "horse", word2 = "ros"', output: '3' }
    ],
    hints: [
      'Use dynamic programming to build a table of subproblem solutions.'
    ],
    starterCode: [
      { language: 'javascript', functionName: 'minDistance', code: 'function minDistance(word1, word2) {\n  // Write your code here\n  return 0;\n}\n\nmodule.exports = minDistance;' },
      { language: 'typescript', functionName: 'minDistance', code: 'function minDistance(word1: string, word2: string): number {\n  // Write your code here\n  return 0;\n}\n\nexport default minDistance;' },
      { language: 'python', functionName: 'minDistance', code: 'def minDistance(word1, word2):\n    # Write your code here\n    return 0' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { word1: 'horse', word2: 'ros' }, output: 3 }
    ],
    solution: 'Use a DP table where dp[i][j] = min(dp[i-1][j] + 1, dp[i][j-1] + 1, dp[i-1][j-1] + (word1[i-1] != word2[j-1])).'
  },
  {
    id: 'maximum-product-subarray',
    slug: 'maximum-product-subarray',
    title: 'Maximum Product Subarray',
    difficulty: 'medium',
    topics: ['Array', 'Dynamic Programming'],
    prompt: 'Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.',
    constraints: [
      '1 <= nums.length <= 2 * 10^4',
      '-10 <= nums[i] <= 10'
    ],
    examples: [
      { input: 'nums = [2,3,-2,4]', output: '6' }
    ],
    hints: [
      'Track both max and min products at each position.'
    ],
    starterCode: [
      { language: 'javascript', functionName: 'maxProduct', code: 'function maxProduct(nums) {\n  // Write your code here\n  return 0;\n}\n\nmodule.exports = maxProduct;' },
      { language: 'typescript', functionName: 'maxProduct', code: 'function maxProduct(nums: number[]): number {\n  // Write your code here\n  return 0;\n}\n\nexport default maxProduct;' },
      { language: 'python', functionName: 'maxProduct', code: 'def maxProduct(nums):\n    # Write your code here\n    return 0' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { nums: [2, 3, -2, 4] }, output: 6 }
    ],
    solution: 'Track both max and min products at each position, swap when encountering a negative.'
  },
  // NEW PROBLEMS - Adding 68 more to reach 150 total
  {
    id: 'decode-ways',
    slug: 'decode-ways',
    title: 'Decode Ways',
    difficulty: 'medium',
    topics: ['String', 'Dynamic Programming'],
    prompt: 'A message containing letters from A-Z can be encoded into numbers using the following mapping: "A" -> "1", "B" -> "2", ..., "Z" -> "26". Given a string s containing only digits, return the number of ways to decode it.',
    constraints: ['1 <= s.length <= 100', 's contains only digits'],
    examples: [
      { input: 's = "12"', output: '2' },
      { input: 's = "226"', output: '3' }
    ],
    hints: ['Use DP: dp[i] = ways to decode s[0:i]', 'Check if s[i-1] forms valid 1-digit and if s[i-2:i] forms valid 2-digit'],
    starterCode: [
      { language: 'javascript', functionName: 'numDecodings', code: 'function numDecodings(s) {\n  // Write your code here\n  return 0;\n}\n\nmodule.exports = numDecodings;' },
      { language: 'typescript', functionName: 'numDecodings', code: 'function numDecodings(s: string): number {\n  // Write your code here\n  return 0;\n}\n\nexport default numDecodings;' },
      { language: 'python', functionName: 'numDecodings', code: 'def numDecodings(s):\n    # Write your code here\n    return 0' },
      { language: 'java', functionName: 'numDecodings', code: 'class Solution {\n    public int numDecodings(String s) {\n        // Write your code here\n        return 0;\n    }\n}' },
      { language: 'cpp', functionName: 'numDecodings', code: '#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    int numDecodings(string s) {\n        // Write your code here\n        return 0;\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { s: '12' }, output: 2 },
      { id: 's2', type: 'sample', input: { s: '226' }, output: 3 }
    ],
    solution: 'DP: dp[i] = dp[i-1] (if s[i-1] is 1-9) + dp[i-2] (if s[i-2:i] is 10-26). Handle leading zeros.'
  },
  {
    id: 'unique-paths',
    slug: 'unique-paths',
    title: 'Unique Paths',
    difficulty: 'medium',
    topics: ['Math', 'Dynamic Programming'],
    prompt: 'A robot is located at the top-left corner of a m x n grid. The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid. How many possible unique paths are there?',
    constraints: ['1 <= m, n <= 100'],
    examples: [
      { input: 'm = 3, n = 7', output: '28' }
    ],
    hints: ['Use DP: dp[i][j] = dp[i-1][j] + dp[i][j-1]', 'Or use combinatorics: C(m+n-2, m-1)'],
    starterCode: [
      { language: 'javascript', functionName: 'uniquePaths', code: 'function uniquePaths(m, n) {\n  // Write your code here\n  return 0;\n}\n\nmodule.exports = uniquePaths;' },
      { language: 'typescript', functionName: 'uniquePaths', code: 'function uniquePaths(m: number, n: number): number {\n  // Write your code here\n  return 0;\n}\n\nexport default uniquePaths;' },
      { language: 'python', functionName: 'uniquePaths', code: 'def uniquePaths(m, n):\n    # Write your code here\n    return 0' },
      { language: 'java', functionName: 'uniquePaths', code: 'class Solution {\n    public int uniquePaths(int m, int n) {\n        // Write your code here\n        return 0;\n    }\n}' },
      { language: 'cpp', functionName: 'uniquePaths', code: 'class Solution {\npublic:\n    int uniquePaths(int m, int n) {\n        // Write your code here\n        return 0;\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { m: 3, n: 7 }, output: 28 },
      { id: 's2', type: 'sample', input: { m: 3, n: 2 }, output: 3 }
    ],
    solution: 'DP table where dp[i][j] = dp[i-1][j] + dp[i][j-1]. Or use math: C(m+n-2, m-1).'
  },
  {
    id: 'jump-game-iii',
    slug: 'jump-game-iii',
    title: 'Jump Game III',
    difficulty: 'medium',
    topics: ['Array', 'BFS', 'DFS'],
    prompt: 'Given an array of non-negative integers arr, you are initially positioned at start index of the array. When you are at index i, you can jump to i + arr[i] or i - arr[i], check if you can reach to any index with value 0.',
    constraints: ['1 <= arr.length <= 5 * 10^4', '0 <= arr[i] < arr.length'],
    examples: [
      { input: 'arr = [4,2,3,0,3,1,2], start = 5', output: 'true' }
    ],
    hints: ['Use BFS or DFS', 'Mark visited indices to avoid cycles'],
    starterCode: [
      { language: 'javascript', functionName: 'canReach', code: 'function canReach(arr, start) {\n  // Write your code here\n  return false;\n}\n\nmodule.exports = canReach;' },
      { language: 'typescript', functionName: 'canReach', code: 'function canReach(arr: number[], start: number): boolean {\n  // Write your code here\n  return false;\n}\n\nexport default canReach;' },
      { language: 'python', functionName: 'canReach', code: 'def canReach(arr, start):\n    # Write your code here\n    return False' },
      { language: 'java', functionName: 'canReach', code: 'class Solution {\n    public boolean canReach(int[] arr, int start) {\n        // Write your code here\n        return false;\n    }\n}' },
      { language: 'cpp', functionName: 'canReach', code: '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool canReach(vector<int>& arr, int start) {\n        // Write your code here\n        return false;\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { arr: [4, 2, 3, 0, 3, 1, 2], start: 5 }, output: true }
    ],
    solution: 'BFS/DFS from start. For each index i, try i+arr[i] and i-arr[i]. Mark visited. Return true if arr[i]==0.'
  },
  {
    id: 'partition-equal-subset-sum',
    slug: 'partition-equal-subset-sum',
    title: 'Partition Equal Subset Sum',
    difficulty: 'medium',
    topics: ['Array', 'Dynamic Programming'],
    prompt: 'Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.',
    constraints: ['1 <= nums.length <= 200', '1 <= nums[i] <= 100'],
    examples: [
      { input: 'nums = [1,5,11,5]', output: 'true' }
    ],
    hints: ['If sum is odd, return false', 'Use subset sum DP with target = sum/2'],
    starterCode: [
      { language: 'javascript', functionName: 'canPartition', code: 'function canPartition(nums) {\n  // Write your code here\n  return false;\n}\n\nmodule.exports = canPartition;' },
      { language: 'typescript', functionName: 'canPartition', code: 'function canPartition(nums: number[]): boolean {\n  // Write your code here\n  return false;\n}\n\nexport default canPartition;' },
      { language: 'python', functionName: 'canPartition', code: 'def canPartition(nums):\n    # Write your code here\n    return False' },
      { language: 'java', functionName: 'canPartition', code: 'class Solution {\n    public boolean canPartition(int[] nums) {\n        // Write your code here\n        return false;\n    }\n}' },
      { language: 'cpp', functionName: 'canPartition', code: '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool canPartition(vector<int>& nums) {\n        // Write your code here\n        return false;\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { nums: [1, 5, 11, 5] }, output: true }
    ],
    solution: 'Subset sum problem. DP: dp[i][j] = can we make sum j using first i elements. Target = total_sum/2.'
  },
  {
    id: 'palindrome-partitioning',
    slug: 'palindrome-partitioning',
    title: 'Palindrome Partitioning',
    difficulty: 'medium',
    topics: ['String', 'Backtracking'],
    prompt: 'Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.',
    constraints: ['1 <= s.length <= 16'],
    examples: [
      { input: 's = "aab"', output: '[["a","a","b"],["aa","b"]]' }
    ],
    hints: ['Backtrack: try all possible partitions', 'Check if substring is palindrome before adding'],
    starterCode: [
      { language: 'javascript', functionName: 'partition', code: 'function partition(s) {\n  // Write your code here\n  return [];\n}\n\nmodule.exports = partition;' },
      { language: 'typescript', functionName: 'partition', code: 'function partition(s: string): string[][] {\n  // Write your code here\n  return [];\n}\n\nexport default partition;' },
      { language: 'python', functionName: 'partition', code: 'def partition(s):\n    # Write your code here\n    return []' },
      { language: 'java', functionName: 'partition', code: 'import java.util.*;\n\nclass Solution {\n    public List<List<String>> partition(String s) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n}' },
      { language: 'cpp', functionName: 'partition', code: '#include <vector>\n#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<vector<string>> partition(string s) {\n        // Write your code here\n        return {};\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { s: 'aab' }, output: [['a', 'a', 'b'], ['aa', 'b']] }
    ],
    solution: 'Backtrack: for each position, try all possible palindrome prefixes, recurse on remaining string.'
  },
  {
    id: 'gas-station',
    slug: 'gas-station',
    title: 'Gas Station',
    difficulty: 'medium',
    topics: ['Array', 'Greedy'],
    prompt: 'There are n gas stations along a circular route. You have a car with an unlimited gas tank. Given two arrays gas and cost, return the starting gas station index if you can travel around the circuit once, otherwise return -1.',
    constraints: ['gas.length == n', 'cost.length == n', '1 <= n <= 10^5'],
    examples: [
      { input: 'gas = [1,2,3,4,5], cost = [3,4,5,1,2]', output: '3' }
    ],
    hints: ['If total gas < total cost, impossible', 'Greedy: if tank becomes negative, start from next station'],
    starterCode: [
      { language: 'javascript', functionName: 'canCompleteCircuit', code: 'function canCompleteCircuit(gas, cost) {\n  // Write your code here\n  return -1;\n}\n\nmodule.exports = canCompleteCircuit;' },
      { language: 'typescript', functionName: 'canCompleteCircuit', code: 'function canCompleteCircuit(gas: number[], cost: number[]): number {\n  // Write your code here\n  return -1;\n}\n\nexport default canCompleteCircuit;' },
      { language: 'python', functionName: 'canCompleteCircuit', code: 'def canCompleteCircuit(gas, cost):\n    # Write your code here\n    return -1' },
      { language: 'java', functionName: 'canCompleteCircuit', code: 'class Solution {\n    public int canCompleteCircuit(int[] gas, int[] cost) {\n        // Write your code here\n        return -1;\n    }\n}' },
      { language: 'cpp', functionName: 'canCompleteCircuit', code: '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {\n        // Write your code here\n        return -1;\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { gas: [1, 2, 3, 4, 5], cost: [3, 4, 5, 1, 2] }, output: 3 }
    ],
    solution: 'Greedy: track total and current tank. If current < 0, reset start to next station.'
  },
  {
    id: 'candy',
    slug: 'candy',
    title: 'Candy',
    difficulty: 'hard',
    topics: ['Array', 'Greedy'],
    prompt: 'There are n children standing in a line. Each child is assigned a rating value. You are giving candies to these children subjected to the following requirements: Each child must have at least one candy. Children with a higher rating get more candies than their neighbors. Return the minimum number of candies you need to have.',
    constraints: ['n == ratings.length', '1 <= n <= 2 * 10^4'],
    examples: [
      { input: 'ratings = [1,0,2]', output: '5' }
    ],
    hints: ['Two passes: left-to-right and right-to-left', 'Ensure higher rating has more candies than both neighbors'],
    starterCode: [
      { language: 'javascript', functionName: 'candy', code: 'function candy(ratings) {\n  // Write your code here\n  return 0;\n}\n\nmodule.exports = candy;' },
      { language: 'typescript', functionName: 'candy', code: 'function candy(ratings: number[]): number {\n  // Write your code here\n  return 0;\n}\n\nexport default candy;' },
      { language: 'python', functionName: 'candy', code: 'def candy(ratings):\n    # Write your code here\n    return 0' },
      { language: 'java', functionName: 'candy', code: 'class Solution {\n    public int candy(int[] ratings) {\n        // Write your code here\n        return 0;\n    }\n}' },
      { language: 'cpp', functionName: 'candy', code: '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int candy(vector<int>& ratings) {\n        // Write your code here\n        return 0;\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { ratings: [1, 0, 2] }, output: 5 }
    ],
    solution: 'Two passes: L-R (if ratings[i]>ratings[i-1], candies[i]=candies[i-1]+1), R-L (similar). Sum candies.'
  },
  {
    id: 'trapping-rain-water',
    slug: 'trapping-rain-water',
    title: 'Trapping Rain Water',
    difficulty: 'hard',
    topics: ['Array', 'Two Pointers', 'Stack'],
    prompt: 'Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.',
    constraints: ['n == height.length', '1 <= n <= 2 * 10^4'],
    examples: [
      { input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]', output: '6' }
    ],
    hints: ['Two pointers: track left_max and right_max', 'Water at i = min(left_max, right_max) - height[i]'],
    starterCode: [
      { language: 'javascript', functionName: 'trap', code: 'function trap(height) {\n  // Write your code here\n  return 0;\n}\n\nmodule.exports = trap;' },
      { language: 'typescript', functionName: 'trap', code: 'function trap(height: number[]): number {\n  // Write your code here\n  return 0;\n}\n\nexport default trap;' },
      { language: 'python', functionName: 'trap', code: 'def trap(height):\n    # Write your code here\n    return 0' },
      { language: 'java', functionName: 'trap', code: 'class Solution {\n    public int trap(int[] height) {\n        // Write your code here\n        return 0;\n    }\n}' },
      { language: 'cpp', functionName: 'trap', code: '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int trap(vector<int>& height) {\n        // Write your code here\n        return 0;\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { height: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1] }, output: 6 }
    ],
    solution: 'Two pointers: move pointer with smaller max. Water += max - height[i].'
  },
  {
    id: 'remove-nth-node-from-end',
    slug: 'remove-nth-node-from-end',
    title: 'Remove Nth Node From End of List',
    difficulty: 'medium',
    topics: ['Linked List', 'Two Pointers'],
    prompt: 'Given the head of a linked list, remove the nth node from the end of the list and return its head.',
    constraints: ['The number of nodes in the list is sz', '1 <= sz <= 30', '1 <= n <= sz'],
    examples: [
      { input: 'head = [1,2,3,4,5], n = 2', output: '[1,2,3,5]' }
    ],
    hints: ['Use two pointers with n gap', 'Move both until fast reaches end'],
    starterCode: [
      { language: 'javascript', functionName: 'removeNthFromEnd', code: 'function removeNthFromEnd(head, n) {\n  // Write your code here\n  return head;\n}\n\nmodule.exports = removeNthFromEnd;' },
      { language: 'typescript', functionName: 'removeNthFromEnd', code: 'class ListNode {\n  val: number;\n  next: ListNode | null;\n}\n\nfunction removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {\n  // Write your code here\n  return head;\n}\n\nexport default removeNthFromEnd;' },
      { language: 'python', functionName: 'removeNthFromEnd', code: 'def removeNthFromEnd(head, n):\n    # Write your code here\n    return head' },
      { language: 'java', functionName: 'removeNthFromEnd', code: 'class Solution {\n    public ListNode removeNthFromEnd(ListNode head, int n) {\n        // Write your code here\n        return head;\n    }\n}' },
      { language: 'cpp', functionName: 'removeNthFromEnd', code: 'struct ListNode {\n    int val;\n    ListNode *next;\n};\n\nclass Solution {\npublic:\n    ListNode* removeNthFromEnd(ListNode* head, int n) {\n        // Write your code here\n        return head;\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { head: [1, 2, 3, 4, 5], n: 2 }, output: [1, 2, 3, 5] }
    ],
    solution: 'Two pointers: fast moves n steps ahead, then both move until fast.next is null. Remove slow.next.'
  },
  {
    id: 'swap-nodes-in-pairs',
    slug: 'swap-nodes-in-pairs',
    title: 'Swap Nodes in Pairs',
    difficulty: 'medium',
    topics: ['Linked List', 'Recursion'],
    prompt: 'Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list nodes.',
    constraints: ['The number of nodes in the list is in the range [0, 100]'],
    examples: [
      { input: 'head = [1,2,3,4]', output: '[2,1,4,3]' }
    ],
    hints: ['Use dummy node', 'Swap pairs iteratively or recursively'],
    starterCode: [
      { language: 'javascript', functionName: 'swapPairs', code: 'function swapPairs(head) {\n  // Write your code here\n  return head;\n}\n\nmodule.exports = swapPairs;' },
      { language: 'typescript', functionName: 'swapPairs', code: 'class ListNode {\n  val: number;\n  next: ListNode | null;\n}\n\nfunction swapPairs(head: ListNode | null): ListNode | null {\n  // Write your code here\n  return head;\n}\n\nexport default swapPairs;' },
      { language: 'python', functionName: 'swapPairs', code: 'def swapPairs(head):\n    # Write your code here\n    return head' },
      { language: 'java', functionName: 'swapPairs', code: 'class Solution {\n    public ListNode swapPairs(ListNode head) {\n        // Write your code here\n        return head;\n    }\n}' },
      { language: 'cpp', functionName: 'swapPairs', code: 'struct ListNode {\n    int val;\n    ListNode *next;\n};\n\nclass Solution {\npublic:\n    ListNode* swapPairs(ListNode* head) {\n        // Write your code here\n        return head;\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { head: [1, 2, 3, 4] }, output: [2, 1, 4, 3] }
    ],
    solution: 'Iterative: dummy->1->2->3. Swap 1 and 2: dummy->2->1->3. Move to next pair.'
  },
  {
    id: 'reverse-linked-list-ii',
    slug: 'reverse-linked-list-ii',
    title: 'Reverse Linked List II',
    difficulty: 'medium',
    topics: ['Linked List'],
    prompt: 'Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.',
    constraints: ['The number of nodes in the list is n', '1 <= n <= 500', '1 <= left <= right <= n'],
    examples: [
      { input: 'head = [1,2,3,4,5], left = 2, right = 4', output: '[1,4,3,2,5]' }
    ],
    hints: ['Find the node before left position', 'Reverse the sublist from left to right', 'Reconnect the reversed part'],
    starterCode: [
      { language: 'javascript', functionName: 'reverseBetween', code: 'function reverseBetween(head, left, right) {\n  // Write your code here\n  return head;\n}\n\nmodule.exports = reverseBetween;' },
      { language: 'typescript', functionName: 'reverseBetween', code: 'class ListNode {\n  val: number;\n  next: ListNode | null;\n}\n\nfunction reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {\n  // Write your code here\n  return head;\n}\n\nexport default reverseBetween;' },
      { language: 'python', functionName: 'reverseBetween', code: 'def reverseBetween(head, left, right):\n    # Write your code here\n    return head' },
      { language: 'java', functionName: 'reverseBetween', code: 'class Solution {\n    public ListNode reverseBetween(ListNode head, int left, int right) {\n        // Write your code here\n        return head;\n    }\n}' },
      { language: 'cpp', functionName: 'reverseBetween', code: 'struct ListNode {\n    int val;\n    ListNode *next;\n};\n\nclass Solution {\npublic:\n    ListNode* reverseBetween(ListNode* head, int left, int right) {\n        // Write your code here\n        return head;\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { head: [1, 2, 3, 4, 5], left: 2, right: 4 }, output: [1, 4, 3, 2, 5] }
    ],
    solution: 'Use dummy node. Find node before left. Reverse sublist. Reconnect.'
  },
  {
    id: 'rotate-list',
    slug: 'rotate-list',
    title: 'Rotate List',
    difficulty: 'medium',
    topics: ['Linked List', 'Two Pointers'],
    prompt: 'Given the head of a linked list, rotate the list to the right by k places.',
    constraints: ['The number of nodes in the list is in the range [0, 500]', '0 <= k <= 2 * 10^9'],
    examples: [
      { input: 'head = [1,2,3,4,5], k = 2', output: '[4,5,1,2,3]' }
    ],
    hints: ['Connect tail to head to make circular', 'Find new tail at (n - k % n - 1)', 'Break the circle'],
    starterCode: [
      { language: 'javascript', functionName: 'rotateRight', code: 'function rotateRight(head, k) {\n  // Write your code here\n  return head;\n}\n\nmodule.exports = rotateRight;' },
      { language: 'typescript', functionName: 'rotateRight', code: 'class ListNode {\n  val: number;\n  next: ListNode | null;\n}\n\nfunction rotateRight(head: ListNode | null, k: number): ListNode | null {\n  // Write your code here\n  return head;\n}\n\nexport default rotateRight;' },
      { language: 'python', functionName: 'rotateRight', code: 'def rotateRight(head, k):\n    # Write your code here\n    return head' },
      { language: 'java', functionName: 'rotateRight', code: 'class Solution {\n    public ListNode rotateRight(ListNode head, int k) {\n        // Write your code here\n        return head;\n    }\n}' },
      { language: 'cpp', functionName: 'rotateRight', code: 'struct ListNode {\n    int val;\n    ListNode *next;\n};\n\nclass Solution {\npublic:\n    ListNode* rotateRight(ListNode* head, int k) {\n        // Write your code here\n        return head;\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { head: [1, 2, 3, 4, 5], k: 2 }, output: [4, 5, 1, 2, 3] }
    ],
    solution: 'Make circular, find new tail at (n - k%n - 1), break circle.'
  },
  {
    id: 'partition-list',
    slug: 'partition-list',
    title: 'Partition List',
    difficulty: 'medium',
    topics: ['Linked List', 'Two Pointers'],
    prompt: 'Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x. Preserve the original relative order of the nodes in each partition.',
    constraints: ['The number of nodes in the list is in the range [0, 200]'],
    examples: [
      { input: 'head = [1,4,3,2,5,2], x = 3', output: '[1,2,2,4,3,5]' }
    ],
    hints: ['Use two dummy nodes for two partitions', 'Connect them at the end'],
    starterCode: [
      { language: 'javascript', functionName: 'partition', code: 'function partition(head, x) {\n  // Write your code here\n  return head;\n}\n\nmodule.exports = partition;' },
      { language: 'typescript', functionName: 'partition', code: 'class ListNode {\n  val: number;\n  next: ListNode | null;\n}\n\nfunction partition(head: ListNode | null, x: number): ListNode | null {\n  // Write your code here\n  return head;\n}\n\nexport default partition;' },
      { language: 'python', functionName: 'partition', code: 'def partition(head, x):\n    # Write your code here\n    return head' },
      { language: 'java', functionName: 'partition', code: 'class Solution {\n    public ListNode partition(ListNode head, int x) {\n        // Write your code here\n        return head;\n    }\n}' },
      { language: 'cpp', functionName: 'partition', code: 'struct ListNode {\n    int val;\n    ListNode *next;\n};\n\nclass Solution {\npublic:\n    ListNode* partition(ListNode* head, int x) {\n        // Write your code here\n        return head;\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { head: [1, 4, 3, 2, 5, 2], x: 3 }, output: [1, 2, 2, 4, 3, 5] }
    ],
    solution: 'Two dummy nodes: before and after. Iterate and append to respective lists. Connect them.'
  },
  {
    id: 'sort-list',
    slug: 'sort-list',
    title: 'Sort List',
    difficulty: 'medium',
    topics: ['Linked List', 'Divide and Conquer', 'Sorting', 'Merge Sort'],
    prompt: 'Given the head of a linked list, return the list after sorting it in ascending order.',
    constraints: ['The number of nodes in the list is in the range [0, 5 * 10^4]'],
    examples: [
      { input: 'head = [4,2,1,3]', output: '[1,2,3,4]' }
    ],
    hints: ['Use merge sort', 'Find middle using slow/fast pointers', 'Merge two sorted lists'],
    starterCode: [
      { language: 'javascript', functionName: 'sortList', code: 'function sortList(head) {\n  // Write your code here\n  return head;\n}\n\nmodule.exports = sortList;' },
      { language: 'typescript', functionName: 'sortList', code: 'class ListNode {\n  val: number;\n  next: ListNode | null;\n}\n\nfunction sortList(head: ListNode | null): ListNode | null {\n  // Write your code here\n  return head;\n}\n\nexport default sortList;' },
      { language: 'python', functionName: 'sortList', code: 'def sortList(head):\n    # Write your code here\n    return head' },
      { language: 'java', functionName: 'sortList', code: 'class Solution {\n    public ListNode sortList(ListNode head) {\n        // Write your code here\n        return head;\n    }\n}' },
      { language: 'cpp', functionName: 'sortList', code: 'struct ListNode {\n    int val;\n    ListNode *next;\n};\n\nclass Solution {\npublic:\n    ListNode* sortList(ListNode* head) {\n        // Write your code here\n        return head;\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { head: [4, 2, 1, 3] }, output: [1, 2, 3, 4] }
    ],
    solution: 'Merge sort: find middle, recursively sort halves, merge sorted halves.'
  },
  {
    id: 'reorder-list',
    slug: 'reorder-list',
    title: 'Reorder List',
    difficulty: 'medium',
    topics: ['Linked List', 'Two Pointers', 'Stack'],
    prompt: 'You are given the head of a singly linked-list. Reorder the list to be: L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → ...',
    constraints: ['The number of nodes in the list is in the range [1, 5 * 10^4]'],
    examples: [
      { input: 'head = [1,2,3,4]', output: '[1,4,2,3]' }
    ],
    hints: ['Find middle', 'Reverse second half', 'Merge two halves alternately'],
    starterCode: [
      { language: 'javascript', functionName: 'reorderList', code: 'function reorderList(head) {\n  // Write your code here\n}\n\nmodule.exports = reorderList;' },
      { language: 'typescript', functionName: 'reorderList', code: 'class ListNode {\n  val: number;\n  next: ListNode | null;\n}\n\nfunction reorderList(head: ListNode | null): void {\n  // Write your code here\n}\n\nexport default reorderList;' },
      { language: 'python', functionName: 'reorderList', code: 'def reorderList(head):\n    # Write your code here\n    pass' },
      { language: 'java', functionName: 'reorderList', code: 'class Solution {\n    public void reorderList(ListNode head) {\n        // Write your code here\n    }\n}' },
      { language: 'cpp', functionName: 'reorderList', code: 'struct ListNode {\n    int val;\n    ListNode *next;\n};\n\nclass Solution {\npublic:\n    void reorderList(ListNode* head) {\n        // Write your code here\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { head: [1, 2, 3, 4] }, output: [1, 4, 2, 3] }
    ],
    solution: 'Find middle, reverse second half, merge alternately.'
  },
  {
    id: 'linked-list-cycle-ii',
    slug: 'linked-list-cycle-ii',
    title: 'Linked List Cycle II',
    difficulty: 'medium',
    topics: ['Linked List', 'Two Pointers'],
    prompt: 'Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.',
    constraints: ['The number of the nodes in the list is in the range [0, 10^4]'],
    examples: [
      { input: 'head = [3,2,0,-4], pos = 1', output: 'tail connects to node index 1' }
    ],
    hints: ['Use Floyd\'s cycle detection', 'After detecting cycle, reset one pointer to head', 'Move both one step until they meet'],
    starterCode: [
      { language: 'javascript', functionName: 'detectCycle', code: 'function detectCycle(head) {\n  // Write your code here\n  return null;\n}\n\nmodule.exports = detectCycle;' },
      { language: 'typescript', functionName: 'detectCycle', code: 'class ListNode {\n  val: number;\n  next: ListNode | null;\n}\n\nfunction detectCycle(head: ListNode | null): ListNode | null {\n  // Write your code here\n  return null;\n}\n\nexport default detectCycle;' },
      { language: 'python', functionName: 'detectCycle', code: 'def detectCycle(head):\n    # Write your code here\n    return None' },
      { language: 'java', functionName: 'detectCycle', code: 'class Solution {\n    public ListNode detectCycle(ListNode head) {\n        // Write your code here\n        return null;\n    }\n}' },
      { language: 'cpp', functionName: 'detectCycle', code: 'struct ListNode {\n    int val;\n    ListNode *next;\n};\n\nclass Solution {\npublic:\n    ListNode *detectCycle(ListNode *head) {\n        // Write your code here\n        return nullptr;\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { head: [3, 2, 0, -4], pos: 1 }, output: 1 }
    ],
    solution: 'Floyd\'s algorithm: detect cycle, reset slow to head, move both one step until meet.'
  },
  {
    id: 'intersection-of-two-linked-lists',
    slug: 'intersection-of-two-linked-lists',
    title: 'Intersection of Two Linked Lists',
    difficulty: 'easy',
    topics: ['Linked List', 'Two Pointers'],
    prompt: 'Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.',
    constraints: ['The number of nodes in listA is m', 'The number of nodes in listB is n'],
    examples: [
      { input: 'intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5]', output: 'Intersected at 8' }
    ],
    hints: ['Two pointers: when one reaches end, redirect to other head', 'They will meet at intersection or null'],
    starterCode: [
      { language: 'javascript', functionName: 'getIntersectionNode', code: 'function getIntersectionNode(headA, headB) {\n  // Write your code here\n  return null;\n}\n\nmodule.exports = getIntersectionNode;' },
      { language: 'typescript', functionName: 'getIntersectionNode', code: 'class ListNode {\n  val: number;\n  next: ListNode | null;\n}\n\nfunction getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {\n  // Write your code here\n  return null;\n}\n\nexport default getIntersectionNode;' },
      { language: 'python', functionName: 'getIntersectionNode', code: 'def getIntersectionNode(headA, headB):\n    # Write your code here\n    return None' },
      { language: 'java', functionName: 'getIntersectionNode', code: 'class Solution {\n    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {\n        // Write your code here\n        return null;\n    }\n}' },
      { language: 'cpp', functionName: 'getIntersectionNode', code: 'struct ListNode {\n    int val;\n    ListNode *next;\n};\n\nclass Solution {\npublic:\n    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {\n        // Write your code here\n        return nullptr;\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { headA: [4, 1, 8, 4, 5], headB: [5, 6, 1, 8, 4, 5], skipA: 2, skipB: 3 }, output: 8 }
    ],
    solution: 'Two pointers: redirect to other head when reaching end. Meet at intersection.'
  },
  {
    id: 'flatten-binary-tree-to-linked-list',
    slug: 'flatten-binary-tree-to-linked-list',
    title: 'Flatten Binary Tree to Linked List',
    difficulty: 'medium',
    topics: ['Tree', 'DFS'],
    prompt: 'Given the root of a binary tree, flatten the tree into a "linked list" using the right pointers. The "linked list" should use the same TreeNode class where the right child pointer points to the next node and the left child pointer is always null.',
    constraints: ['The number of nodes in the tree is in the range [0, 2000]'],
    examples: [
      { input: 'root = [1,2,5,3,4,null,6]', output: '[1,null,2,null,3,null,4,null,5,null,6]' }
    ],
    hints: ['Use preorder traversal', 'Or recursively flatten right, then left, then connect'],
    starterCode: [
      { language: 'javascript', functionName: 'flatten', code: 'function flatten(root) {\n  // Write your code here\n}\n\nmodule.exports = flatten;' },
      { language: 'typescript', functionName: 'flatten', code: 'class TreeNode {\n  val: number;\n  left: TreeNode | null;\n  right: TreeNode | null;\n}\n\nfunction flatten(root: TreeNode | null): void {\n  // Write your code here\n}\n\nexport default flatten;' },
      { language: 'python', functionName: 'flatten', code: 'def flatten(root):\n    # Write your code here\n    pass' },
      { language: 'java', functionName: 'flatten', code: 'class Solution {\n    public void flatten(TreeNode root) {\n        // Write your code here\n    }\n}' },
      { language: 'cpp', functionName: 'flatten', code: 'struct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n};\n\nclass Solution {\npublic:\n    void flatten(TreeNode* root) {\n        // Write your code here\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { root: [1, 2, 5, 3, 4, null, 6] }, output: [1, null, 2, null, 3, null, 4, null, 5, null, 6] }
    ],
    solution: 'Recursively flatten right and left. Connect root->right to left, find tail, connect to old right.'
  },
  {
    id: 'construct-binary-tree-from-preorder-and-inorder',
    slug: 'construct-binary-tree-from-preorder-and-inorder',
    title: 'Construct Binary Tree from Preorder and Inorder Traversal',
    difficulty: 'medium',
    topics: ['Tree', 'Array', 'Divide and Conquer'],
    prompt: 'Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.',
    constraints: ['1 <= preorder.length <= 3000', 'inorder.length == preorder.length'],
    examples: [
      { input: 'preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]', output: '[3,9,20,null,null,15,7]' }
    ],
    hints: ['First element of preorder is root', 'Find root in inorder to split left/right subtrees', 'Recursively build left and right'],
    starterCode: [
      { language: 'javascript', functionName: 'buildTree', code: 'function buildTree(preorder, inorder) {\n  // Write your code here\n  return null;\n}\n\nmodule.exports = buildTree;' },
      { language: 'typescript', functionName: 'buildTree', code: 'class TreeNode {\n  val: number;\n  left: TreeNode | null;\n  right: TreeNode | null;\n}\n\nfunction buildTree(preorder: number[], inorder: number[]): TreeNode | null {\n  // Write your code here\n  return null;\n}\n\nexport default buildTree;' },
      { language: 'python', functionName: 'buildTree', code: 'def buildTree(preorder, inorder):\n    # Write your code here\n    return None' },
      { language: 'java', functionName: 'buildTree', code: 'class Solution {\n    public TreeNode buildTree(int[] preorder, int[] inorder) {\n        // Write your code here\n        return null;\n    }\n}' },
      { language: 'cpp', functionName: 'buildTree', code: '#include <vector>\nusing namespace std;\n\nstruct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n};\n\nclass Solution {\npublic:\n    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {\n        // Write your code here\n        return nullptr;\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { preorder: [3, 9, 20, 15, 7], inorder: [9, 3, 15, 20, 7] }, output: [3, 9, 20, null, null, 15, 7] }
    ],
    solution: 'Use preorder[0] as root. Find in inorder to split. Recursively build left and right subtrees.'
  },
  {
    id: 'populating-next-right-pointers',
    slug: 'populating-next-right-pointers',
    title: 'Populating Next Right Pointers in Each Node',
    difficulty: 'medium',
    topics: ['Tree', 'BFS', 'DFS'],
    prompt: 'You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.',
    constraints: ['The number of nodes in the tree is in the range [0, 2^12 - 1]'],
    examples: [
      { input: 'root = [1,2,3,4,5,6,7]', output: '[1,#,2,3,#,4,5,6,7,#]' }
    ],
    hints: ['Use level order traversal', 'Or use existing next pointers to traverse'],
    starterCode: [
      { language: 'javascript', functionName: 'connect', code: 'function connect(root) {\n  // Write your code here\n  return root;\n}\n\nmodule.exports = connect;' },
      { language: 'typescript', functionName: 'connect', code: 'class Node {\n  val: number;\n  left: Node | null;\n  right: Node | null;\n  next: Node | null;\n}\n\nfunction connect(root: Node | null): Node | null {\n  // Write your code here\n  return root;\n}\n\nexport default connect;' },
      { language: 'python', functionName: 'connect', code: 'def connect(root):\n    # Write your code here\n    return root' },
      { language: 'java', functionName: 'connect', code: 'class Solution {\n    public Node connect(Node root) {\n        // Write your code here\n        return root;\n    }\n}' },
      { language: 'cpp', functionName: 'connect', code: 'class Node {\npublic:\n    int val;\n    Node* left;\n    Node* right;\n    Node* next;\n};\n\nclass Solution {\npublic:\n    Node* connect(Node* root) {\n        // Write your code here\n        return root;\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { root: [1, 2, 3, 4, 5, 6, 7] }, output: [1, null, 2, 3, null, 4, 5, 6, 7, null] }
    ],
    solution: 'Level order: connect nodes in same level. Or use existing next pointers to traverse.'
  },
  {
    id: 'binary-tree-level-order-traversal',
    slug: 'binary-tree-level-order-traversal',
    title: 'Binary Tree Level Order Traversal',
    difficulty: 'medium',
    topics: ['Tree', 'BFS'],
    prompt: 'Given the root of a binary tree, return the level order traversal of its nodes values. (i.e., from left to right, level by level).',
    constraints: ['The number of nodes in the tree is in the range [0, 2000]'],
    examples: [
      { input: 'root = [3,9,20,null,null,15,7]', output: '[[3],[9,20],[15,7]]' }
    ],
    hints: ['Use BFS with queue', 'Track level size to separate levels'],
    starterCode: [
      { language: 'javascript', functionName: 'levelOrder', code: 'function levelOrder(root) {\n  // Write your code here\n  return [];\n}\n\nmodule.exports = levelOrder;' },
      { language: 'typescript', functionName: 'levelOrder', code: 'class TreeNode {\n  val: number;\n  left: TreeNode | null;\n  right: TreeNode | null;\n}\n\nfunction levelOrder(root: TreeNode | null): number[][] {\n  // Write your code here\n  return [];\n}\n\nexport default levelOrder;' },
      { language: 'python', functionName: 'levelOrder', code: 'def levelOrder(root):\n    # Write your code here\n    return []' },
      { language: 'java', functionName: 'levelOrder', code: 'import java.util.*;\n\nclass Solution {\n    public List<List<Integer>> levelOrder(TreeNode root) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n}' },
      { language: 'cpp', functionName: 'levelOrder', code: '#include <vector>\n#include <queue>\nusing namespace std;\n\nstruct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n};\n\nclass Solution {\npublic:\n    vector<vector<int>> levelOrder(TreeNode* root) {\n        // Write your code here\n        return {};\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { root: [3, 9, 20, null, null, 15, 7] }, output: [[3], [9, 20], [15, 7]] }
    ],
    solution: 'BFS: use queue, process level by level. Track level size before processing.'
  },
  {
    id: 'binary-tree-zigzag-level-order',
    slug: 'binary-tree-zigzag-level-order',
    title: 'Binary Tree Zigzag Level Order Traversal',
    difficulty: 'medium',
    topics: ['Tree', 'BFS'],
    prompt: 'Given the root of a binary tree, return the zigzag level order traversal of its nodes values. (i.e., from left to right, then right to left for the next level and alternate between).',
    constraints: ['The number of nodes in the tree is in the range [0, 2000]'],
    examples: [
      { input: 'root = [3,9,20,null,null,15,7]', output: '[[3],[20,9],[15,7]]' }
    ],
    hints: ['Use BFS', 'Reverse alternate levels'],
    starterCode: [
      { language: 'javascript', functionName: 'zigzagLevelOrder', code: 'function zigzagLevelOrder(root) {\n  // Write your code here\n  return [];\n}\n\nmodule.exports = zigzagLevelOrder;' },
      { language: 'typescript', functionName: 'zigzagLevelOrder', code: 'class TreeNode {\n  val: number;\n  left: TreeNode | null;\n  right: TreeNode | null;\n}\n\nfunction zigzagLevelOrder(root: TreeNode | null): number[][] {\n  // Write your code here\n  return [];\n}\n\nexport default zigzagLevelOrder;' },
      { language: 'python', functionName: 'zigzagLevelOrder', code: 'def zigzagLevelOrder(root):\n    # Write your code here\n    return []' },
      { language: 'java', functionName: 'zigzagLevelOrder', code: 'import java.util.*;\n\nclass Solution {\n    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n}' },
      { language: 'cpp', functionName: 'zigzagLevelOrder', code: '#include <vector>\nusing namespace std;\n\nstruct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n};\n\nclass Solution {\npublic:\n    vector<vector<int>> zigzagLevelOrder(TreeNode* root) {\n        // Write your code here\n        return {};\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { root: [3, 9, 20, null, null, 15, 7] }, output: [[3], [20, 9], [15, 7]] }
    ],
    solution: 'BFS with level tracking. Reverse alternate levels or use deque.'
  },
  {
    id: 'binary-tree-right-side-view',
    slug: 'binary-tree-right-side-view',
    title: 'Binary Tree Right Side View',
    difficulty: 'medium',
    topics: ['Tree', 'BFS', 'DFS'],
    prompt: 'Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.',
    constraints: ['The number of nodes in the tree is in the range [0, 100]'],
    examples: [
      { input: 'root = [1,2,3,null,5,null,4]', output: '[1,3,4]' }
    ],
    hints: ['BFS: take last node of each level', 'Or DFS: visit right first, track depth'],
    starterCode: [
      { language: 'javascript', functionName: 'rightSideView', code: 'function rightSideView(root) {\n  // Write your code here\n  return [];\n}\n\nmodule.exports = rightSideView;' },
      { language: 'typescript', functionName: 'rightSideView', code: 'class TreeNode {\n  val: number;\n  left: TreeNode | null;\n  right: TreeNode | null;\n}\n\nfunction rightSideView(root: TreeNode | null): number[] {\n  // Write your code here\n  return [];\n}\n\nexport default rightSideView;' },
      { language: 'python', functionName: 'rightSideView', code: 'def rightSideView(root):\n    # Write your code here\n    return []' },
      { language: 'java', functionName: 'rightSideView', code: 'import java.util.*;\n\nclass Solution {\n    public List<Integer> rightSideView(TreeNode root) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n}' },
      { language: 'cpp', functionName: 'rightSideView', code: '#include <vector>\nusing namespace std;\n\nstruct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n};\n\nclass Solution {\npublic:\n    vector<int> rightSideView(TreeNode* root) {\n        // Write your code here\n        return {};\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { root: [1, 2, 3, null, 5, null, 4] }, output: [1, 3, 4] }
    ],
    solution: 'BFS: add last node of each level. Or DFS right-first with depth tracking.'
  },
  {
    id: 'count-complete-tree-nodes',
    slug: 'count-complete-tree-nodes',
    title: 'Count Complete Tree Nodes',
    difficulty: 'medium',
    topics: ['Tree', 'Binary Search'],
    prompt: 'Given the root of a complete binary tree, return the number of the nodes in the tree. Design an algorithm that runs in less than O(n) time complexity.',
    constraints: ['The number of nodes in the tree is in the range [0, 5 * 10^4]'],
    examples: [
      { input: 'root = [1,2,3,4,5,6]', output: '6' }
    ],
    hints: ['Check if tree is perfect by comparing left and right heights', 'If perfect, use formula 2^h - 1', 'Otherwise recurse on subtrees'],
    starterCode: [
      { language: 'javascript', functionName: 'countNodes', code: 'function countNodes(root) {\n  // Write your code here\n  return 0;\n}\n\nmodule.exports = countNodes;' },
      { language: 'typescript', functionName: 'countNodes', code: 'class TreeNode {\n  val: number;\n  left: TreeNode | null;\n  right: TreeNode | null;\n}\n\nfunction countNodes(root: TreeNode | null): number {\n  // Write your code here\n  return 0;\n}\n\nexport default countNodes;' },
      { language: 'python', functionName: 'countNodes', code: 'def countNodes(root):\n    # Write your code here\n    return 0' },
      { language: 'java', functionName: 'countNodes', code: 'class Solution {\n    public int countNodes(TreeNode root) {\n        // Write your code here\n        return 0;\n    }\n}' },
      { language: 'cpp', functionName: 'countNodes', code: 'struct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n};\n\nclass Solution {\npublic:\n    int countNodes(TreeNode* root) {\n        // Write your code here\n        return 0;\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { root: [1, 2, 3, 4, 5, 6] }, output: 6 }
    ],
    solution: 'Compare left and right heights. If equal, tree is perfect: return 2^h-1. Else recurse.'
  },
  {
    id: 'lowest-common-ancestor-of-binary-tree',
    slug: 'lowest-common-ancestor-of-binary-tree',
    title: 'Lowest Common Ancestor of a Binary Tree',
    difficulty: 'medium',
    topics: ['Tree', 'DFS'],
    prompt: 'Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.',
    constraints: ['The number of nodes in the tree is in the range [2, 10^5]'],
    examples: [
      { input: 'root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1', output: '3' }
    ],
    hints: ['Recursively search for p and q', 'If both found in different subtrees, current node is LCA'],
    starterCode: [
      { language: 'javascript', functionName: 'lowestCommonAncestor', code: 'function lowestCommonAncestor(root, p, q) {\n  // Write your code here\n  return null;\n}\n\nmodule.exports = lowestCommonAncestor;' },
      { language: 'typescript', functionName: 'lowestCommonAncestor', code: 'class TreeNode {\n  val: number;\n  left: TreeNode | null;\n  right: TreeNode | null;\n}\n\nfunction lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {\n  // Write your code here\n  return null;\n}\n\nexport default lowestCommonAncestor;' },
      { language: 'python', functionName: 'lowestCommonAncestor', code: 'def lowestCommonAncestor(root, p, q):\n    # Write your code here\n    return None' },
      { language: 'java', functionName: 'lowestCommonAncestor', code: 'class Solution {\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n        // Write your code here\n        return null;\n    }\n}' },
      { language: 'cpp', functionName: 'lowestCommonAncestor', code: 'struct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n};\n\nclass Solution {\npublic:\n    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {\n        // Write your code here\n        return nullptr;\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { root: [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p: 5, q: 1 }, output: 3 }
    ],
    solution: 'Recursive: if root is p or q, return root. If both subtrees return non-null, root is LCA.'
  },
  {
    id: 'path-sum-ii',
    slug: 'path-sum-ii',
    title: 'Path Sum II',
    difficulty: 'medium',
    topics: ['Tree', 'Backtracking', 'DFS'],
    prompt: 'Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum.',
    constraints: ['The number of nodes in the tree is in the range [0, 5000]'],
    examples: [
      { input: 'root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22', output: '[[5,4,11,2],[5,8,4,5]]' }
    ],
    hints: ['DFS with path tracking', 'Backtrack when returning from leaf'],
    starterCode: [
      { language: 'javascript', functionName: 'pathSum', code: 'function pathSum(root, targetSum) {\n  // Write your code here\n  return [];\n}\n\nmodule.exports = pathSum;' },
      { language: 'typescript', functionName: 'pathSum', code: 'class TreeNode {\n  val: number;\n  left: TreeNode | null;\n  right: TreeNode | null;\n}\n\nfunction pathSum(root: TreeNode | null, targetSum: number): number[][] {\n  // Write your code here\n  return [];\n}\n\nexport default pathSum;' },
      { language: 'python', functionName: 'pathSum', code: 'def pathSum(root, targetSum):\n    # Write your code here\n    return []' },
      { language: 'java', functionName: 'pathSum', code: 'import java.util.*;\n\nclass Solution {\n    public List<List<Integer>> pathSum(TreeNode root, int targetSum) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n}' },
      { language: 'cpp', functionName: 'pathSum', code: '#include <vector>\nusing namespace std;\n\nstruct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n};\n\nclass Solution {\npublic:\n    vector<vector<int>> pathSum(TreeNode* root, int targetSum) {\n        // Write your code here\n        return {};\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { root: [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], targetSum: 22 }, output: [[5, 4, 11, 2], [5, 8, 4, 5]] }
    ],
    solution: 'DFS with path array. Add to result if leaf and sum equals target. Backtrack.'
  },
  {
    id: 'sum-root-to-leaf-numbers',
    slug: 'sum-root-to-leaf-numbers',
    title: 'Sum Root to Leaf Numbers',
    difficulty: 'medium',
    topics: ['Tree', 'DFS'],
    prompt: 'You are given the root of a binary tree containing digits from 0 to 9 only. Each root-to-leaf path in the tree represents a number. Return the total sum of all root-to-leaf numbers.',
    constraints: ['The number of nodes in the tree is in the range [1, 1000]'],
    examples: [
      { input: 'root = [1,2,3]', output: '25' }
    ],
    hints: ['DFS: pass current number down', 'At leaf, add to total sum'],
    starterCode: [
      { language: 'javascript', functionName: 'sumNumbers', code: 'function sumNumbers(root) {\n  // Write your code here\n  return 0;\n}\n\nmodule.exports = sumNumbers;' },
      { language: 'typescript', functionName: 'sumNumbers', code: 'class TreeNode {\n  val: number;\n  left: TreeNode | null;\n  right: TreeNode | null;\n}\n\nfunction sumNumbers(root: TreeNode | null): number {\n  // Write your code here\n  return 0;\n}\n\nexport default sumNumbers;' },
      { language: 'python', functionName: 'sumNumbers', code: 'def sumNumbers(root):\n    # Write your code here\n    return 0' },
      { language: 'java', functionName: 'sumNumbers', code: 'class Solution {\n    public int sumNumbers(TreeNode root) {\n        // Write your code here\n        return 0;\n    }\n}' },
      { language: 'cpp', functionName: 'sumNumbers', code: 'struct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n};\n\nclass Solution {\npublic:\n    int sumNumbers(TreeNode* root) {\n        // Write your code here\n        return 0;\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { root: [1, 2, 3] }, output: 25 }
    ],
    solution: 'DFS: pass currentNum = currentNum * 10 + node.val. At leaf, add to sum.'
  },
  {
    id: 'binary-tree-maximum-path-sum',
    slug: 'binary-tree-maximum-path-sum',
    title: 'Binary Tree Maximum Path Sum',
    difficulty: 'hard',
    topics: ['Tree', 'DFS'],
    prompt: 'A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. The path sum of a path is the sum of the node values in the path. Given the root of a binary tree, return the maximum path sum of any non-empty path.',
    constraints: ['The number of nodes in the tree is in the range [1, 3 * 10^4]'],
    examples: [
      { input: 'root = [1,2,3]', output: '6' }
    ],
    hints: ['For each node, calculate max path through it', 'Track global max', 'Return max single path to parent'],
    starterCode: [
      { language: 'javascript', functionName: 'maxPathSum', code: 'function maxPathSum(root) {\n  // Write your code here\n  return 0;\n}\n\nmodule.exports = maxPathSum;' },
      { language: 'typescript', functionName: 'maxPathSum', code: 'class TreeNode {\n  val: number;\n  left: TreeNode | null;\n  right: TreeNode | null;\n}\n\nfunction maxPathSum(root: TreeNode | null): number {\n  // Write your code here\n  return 0;\n}\n\nexport default maxPathSum;' },
      { language: 'python', functionName: 'maxPathSum', code: 'def maxPathSum(root):\n    # Write your code here\n    return 0' },
      { language: 'java', functionName: 'maxPathSum', code: 'class Solution {\n    public int maxPathSum(TreeNode root) {\n        // Write your code here\n        return 0;\n    }\n}' },
      { language: 'cpp', functionName: 'maxPathSum', code: 'struct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n};\n\nclass Solution {\npublic:\n    int maxPathSum(TreeNode* root) {\n        // Write your code here\n        return 0;\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { root: [1, 2, 3] }, output: 6 }
    ],
    solution: 'DFS: for each node, maxPath = node.val + max(0, left) + max(0, right). Return node.val + max(0, max(left, right)).'
  },
  {
    id: 'serialize-and-deserialize-binary-tree',
    slug: 'serialize-and-deserialize-binary-tree',
    title: 'Serialize and Deserialize Binary Tree',
    difficulty: 'hard',
    topics: ['Tree', 'DFS', 'BFS', 'Design'],
    prompt: 'Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer. Design an algorithm to serialize and deserialize a binary tree.',
    constraints: ['The number of nodes in the tree is in the range [0, 10^4]'],
    examples: [
      { input: 'root = [1,2,3,null,null,4,5]', output: '[1,2,3,null,null,4,5]' }
    ],
    hints: ['Use preorder traversal for serialize', 'Use queue/recursion for deserialize'],
    starterCode: [
      { language: 'javascript', functionName: 'Codec', code: 'class Codec {\n  serialize(root) {\n    // Write your code here\n    return "";\n  }\n  deserialize(data) {\n    // Write your code here\n    return null;\n  }\n}\n\nmodule.exports = Codec;' },
      { language: 'typescript', functionName: 'Codec', code: 'class TreeNode {\n  val: number;\n  left: TreeNode | null;\n  right: TreeNode | null;\n}\n\nclass Codec {\n  serialize(root: TreeNode | null): string {\n    // Write your code here\n    return "";\n  }\n  deserialize(data: string): TreeNode | null {\n    // Write your code here\n    return null;\n  }\n}\n\nexport default Codec;' },
      { language: 'python', functionName: 'Codec', code: 'class Codec:\n    def serialize(self, root):\n        # Write your code here\n        return ""\n    def deserialize(self, data):\n        # Write your code here\n        return None' },
      { language: 'java', functionName: 'Codec', code: 'class Codec {\n    public String serialize(TreeNode root) {\n        // Write your code here\n        return "";\n    }\n    public TreeNode deserialize(String data) {\n        // Write your code here\n        return null;\n    }\n}' },
      { language: 'cpp', functionName: 'Codec', code: '#include <string>\nusing namespace std;\n\nstruct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n};\n\nclass Codec {\npublic:\n    string serialize(TreeNode* root) {\n        // Write your code here\n        return "";\n    }\n    TreeNode* deserialize(string data) {\n        // Write your code here\n        return nullptr;\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { root: [1, 2, 3, null, null, 4, 5] }, output: [1, 2, 3, null, null, 4, 5] }
    ],
    solution: 'Serialize: preorder with null markers. Deserialize: build tree from queue of values.'
  },
  {
    id: 'kth-smallest-element-in-bst',
    slug: 'kth-smallest-element-in-bst',
    title: 'Kth Smallest Element in a BST',
    difficulty: 'medium',
    topics: ['Tree', 'BST', 'DFS'],
    prompt: 'Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.',
    constraints: ['The number of nodes in the tree is n', '1 <= k <= n <= 10^4'],
    examples: [
      { input: 'root = [3,1,4,null,2], k = 1', output: '1' }
    ],
    hints: ['Inorder traversal of BST gives sorted order', 'Return kth element during traversal'],
    starterCode: [
      { language: 'javascript', functionName: 'kthSmallest', code: 'function kthSmallest(root, k) {\n  // Write your code here\n  return 0;\n}\n\nmodule.exports = kthSmallest;' },
      { language: 'typescript', functionName: 'kthSmallest', code: 'class TreeNode {\n  val: number;\n  left: TreeNode | null;\n  right: TreeNode | null;\n}\n\nfunction kthSmallest(root: TreeNode | null, k: number): number {\n  // Write your code here\n  return 0;\n}\n\nexport default kthSmallest;' },
      { language: 'python', functionName: 'kthSmallest', code: 'def kthSmallest(root, k):\n    # Write your code here\n    return 0' },
      { language: 'java', functionName: 'kthSmallest', code: 'class Solution {\n    public int kthSmallest(TreeNode root, int k) {\n        // Write your code here\n        return 0;\n    }\n}' },
      { language: 'cpp', functionName: 'kthSmallest', code: 'struct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n};\n\nclass Solution {\npublic:\n    int kthSmallest(TreeNode* root, int k) {\n        // Write your code here\n        return 0;\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { root: [3, 1, 4, null, 2], k: 1 }, output: 1 }
    ],
    solution: 'Inorder traversal (left, root, right). Decrement k, return when k==0.'
  },
  {
    id: 'validate-binary-search-tree',
    slug: 'validate-binary-search-tree',
    title: 'Validate Binary Search Tree',
    difficulty: 'medium',
    topics: ['Tree', 'BST', 'DFS'],
    prompt: 'Given the root of a binary tree, determine if it is a valid binary search tree (BST).',
    constraints: ['The number of nodes in the tree is in the range [1, 10^4]'],
    examples: [
      { input: 'root = [2,1,3]', output: 'true' },
      { input: 'root = [5,1,4,null,null,3,6]', output: 'false' }
    ],
    hints: ['Pass min and max bounds down recursively', 'Or use inorder traversal and check if sorted'],
    starterCode: [
      { language: 'javascript', functionName: 'isValidBST', code: 'function isValidBST(root) {\n  // Write your code here\n  return false;\n}\n\nmodule.exports = isValidBST;' },
      { language: 'typescript', functionName: 'isValidBST', code: 'class TreeNode {\n  val: number;\n  left: TreeNode | null;\n  right: TreeNode | null;\n}\n\nfunction isValidBST(root: TreeNode | null): boolean {\n  // Write your code here\n  return false;\n}\n\nexport default isValidBST;' },
      { language: 'python', functionName: 'isValidBST', code: 'def isValidBST(root):\n    # Write your code here\n    return False' },
      { language: 'java', functionName: 'isValidBST', code: 'class Solution {\n    public boolean isValidBST(TreeNode root) {\n        // Write your code here\n        return false;\n    }\n}' },
      { language: 'cpp', functionName: 'isValidBST', code: 'struct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n};\n\nclass Solution {\npublic:\n    bool isValidBST(TreeNode* root) {\n        // Write your code here\n        return false;\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { root: [2, 1, 3] }, output: true },
      { id: 's2', type: 'sample', input: { root: [5, 1, 4, null, null, 3, 6] }, output: false }
    ],
    solution: 'Recursive with min/max bounds: left must be in (min, root.val), right in (root.val, max).'
  },
  {
    id: 'recover-binary-search-tree',
    slug: 'recover-binary-search-tree',
    title: 'Recover Binary Search Tree',
    difficulty: 'medium',
    topics: ['Tree', 'BST', 'DFS'],
    prompt: 'You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.',
    constraints: ['The number of nodes in the tree is in the range [2, 1000]'],
    examples: [
      { input: 'root = [1,3,null,null,2]', output: '[3,1,null,null,2]' }
    ],
    hints: ['Inorder traversal should be sorted', 'Find two nodes that break the sorted order', 'Swap their values'],
    starterCode: [
      { language: 'javascript', functionName: 'recoverTree', code: 'function recoverTree(root) {\n  // Write your code here\n}\n\nmodule.exports = recoverTree;' },
      { language: 'typescript', functionName: 'recoverTree', code: 'class TreeNode {\n  val: number;\n  left: TreeNode | null;\n  right: TreeNode | null;\n}\n\nfunction recoverTree(root: TreeNode | null): void {\n  // Write your code here\n}\n\nexport default recoverTree;' },
      { language: 'python', functionName: 'recoverTree', code: 'def recoverTree(root):\n    # Write your code here\n    pass' },
      { language: 'java', functionName: 'recoverTree', code: 'class Solution {\n    public void recoverTree(TreeNode root) {\n        // Write your code here\n    }\n}' },
      { language: 'cpp', functionName: 'recoverTree', code: 'struct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n};\n\nclass Solution {\npublic:\n    void recoverTree(TreeNode* root) {\n        // Write your code here\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { root: [1, 3, null, null, 2] }, output: [3, 1, null, null, 2] }
    ],
    solution: 'Inorder traversal: track prev node. Find two violations where prev.val > curr.val. Swap them.'
  },
  {
    id: 'same-tree',
    slug: 'same-tree',
    title: 'Same Tree',
    difficulty: 'easy',
    topics: ['Tree', 'DFS'],
    prompt: 'Given the roots of two binary trees p and q, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.',
    constraints: ['The number of nodes in both trees is in the range [0, 100]'],
    examples: [
      { input: 'p = [1,2,3], q = [1,2,3]', output: 'true' }
    ],
    hints: ['Recursively check if both nodes are equal', 'Check left and right subtrees'],
    starterCode: [
      { language: 'javascript', functionName: 'isSameTree', code: 'function isSameTree(p, q) {\n  // Write your code here\n  return false;\n}\n\nmodule.exports = isSameTree;' },
      { language: 'typescript', functionName: 'isSameTree', code: 'class TreeNode {\n  val: number;\n  left: TreeNode | null;\n  right: TreeNode | null;\n}\n\nfunction isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {\n  // Write your code here\n  return false;\n}\n\nexport default isSameTree;' },
      { language: 'python', functionName: 'isSameTree', code: 'def isSameTree(p, q):\n    # Write your code here\n    return False' },
      { language: 'java', functionName: 'isSameTree', code: 'class Solution {\n    public boolean isSameTree(TreeNode p, TreeNode q) {\n        // Write your code here\n        return false;\n    }\n}' },
      { language: 'cpp', functionName: 'isSameTree', code: 'struct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n};\n\nclass Solution {\npublic:\n    bool isSameTree(TreeNode* p, TreeNode* q) {\n        // Write your code here\n        return false;\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { p: [1, 2, 3], q: [1, 2, 3] }, output: true }
    ],
    solution: 'If both null, true. If one null, false. If values differ, false. Recurse on left and right.'
  },
  {
    id: 'symmetric-tree',
    slug: 'symmetric-tree',
    title: 'Symmetric Tree',
    difficulty: 'easy',
    topics: ['Tree', 'DFS', 'BFS'],
    prompt: 'Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).',
    constraints: ['The number of nodes in the tree is in the range [1, 1000]'],
    examples: [
      { input: 'root = [1,2,2,3,4,4,3]', output: 'true' }
    ],
    hints: ['Check if left subtree is mirror of right subtree', 'Recursively compare left.left with right.right and left.right with right.left'],
    starterCode: [
      { language: 'javascript', functionName: 'isSymmetric', code: 'function isSymmetric(root) {\n  // Write your code here\n  return false;\n}\n\nmodule.exports = isSymmetric;' },
      { language: 'typescript', functionName: 'isSymmetric', code: 'class TreeNode {\n  val: number;\n  left: TreeNode | null;\n  right: TreeNode | null;\n}\n\nfunction isSymmetric(root: TreeNode | null): boolean {\n  // Write your code here\n  return false;\n}\n\nexport default isSymmetric;' },
      { language: 'python', functionName: 'isSymmetric', code: 'def isSymmetric(root):\n    # Write your code here\n    return False' },
      { language: 'java', functionName: 'isSymmetric', code: 'class Solution {\n    public boolean isSymmetric(TreeNode root) {\n        // Write your code here\n        return false;\n    }\n}' },
      { language: 'cpp', functionName: 'isSymmetric', code: 'struct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n};\n\nclass Solution {\npublic:\n    bool isSymmetric(TreeNode* root) {\n        // Write your code here\n        return false;\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { root: [1, 2, 2, 3, 4, 4, 3] }, output: true }
    ],
    solution: 'Helper function isMirror(left, right): check if left.val == right.val && isMirror(left.left, right.right) && isMirror(left.right, right.left).'
  },
  {
    id: 'invert-binary-tree',
    slug: 'invert-binary-tree',
    title: 'Invert Binary Tree',
    difficulty: 'easy',
    topics: ['Tree', 'DFS'],
    prompt: 'Given the root of a binary tree, invert the tree, and return its root.',
    constraints: ['The number of nodes in the tree is in the range [0, 100]'],
    examples: [
      { input: 'root = [4,2,7,1,3,6,9]', output: '[4,7,2,9,6,3,1]' }
    ],
    hints: ['Swap left and right children', 'Recursively invert subtrees'],
    starterCode: [
      { language: 'javascript', functionName: 'invertTree', code: 'function invertTree(root) {\n  // Write your code here\n  return root;\n}\n\nmodule.exports = invertTree;' },
      { language: 'typescript', functionName: 'invertTree', code: 'class TreeNode {\n  val: number;\n  left: TreeNode | null;\n  right: TreeNode | null;\n}\n\nfunction invertTree(root: TreeNode | null): TreeNode | null {\n  // Write your code here\n  return root;\n}\n\nexport default invertTree;' },
      { language: 'python', functionName: 'invertTree', code: 'def invertTree(root):\n    # Write your code here\n    return root' },
      { language: 'java', functionName: 'invertTree', code: 'class Solution {\n    public TreeNode invertTree(TreeNode root) {\n        // Write your code here\n        return root;\n    }\n}' },
      { language: 'cpp', functionName: 'invertTree', code: 'struct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n};\n\nclass Solution {\npublic:\n    TreeNode* invertTree(TreeNode* root) {\n        // Write your code here\n        return root;\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { root: [4, 2, 7, 1, 3, 6, 9] }, output: [4, 7, 2, 9, 6, 3, 1] }
    ],
    solution: 'Swap root.left and root.right. Recursively invert left and right subtrees.'
  },
  {
    id: 'diameter-of-binary-tree',
    slug: 'diameter-of-binary-tree',
    title: 'Diameter of Binary Tree',
    difficulty: 'easy',
    topics: ['Tree', 'DFS'],
    prompt: 'Given the root of a binary tree, return the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.',
    constraints: ['The number of nodes in the tree is in the range [1, 10^4]'],
    examples: [
      { input: 'root = [1,2,3,4,5]', output: '3' }
    ],
    hints: ['For each node, diameter through it = leftHeight + rightHeight', 'Track global max'],
    starterCode: [
      { language: 'javascript', functionName: 'diameterOfBinaryTree', code: 'function diameterOfBinaryTree(root) {\n  // Write your code here\n  return 0;\n}\n\nmodule.exports = diameterOfBinaryTree;' },
      { language: 'typescript', functionName: 'diameterOfBinaryTree', code: 'class TreeNode {\n  val: number;\n  left: TreeNode | null;\n  right: TreeNode | null;\n}\n\nfunction diameterOfBinaryTree(root: TreeNode | null): number {\n  // Write your code here\n  return 0;\n}\n\nexport default diameterOfBinaryTree;' },
      { language: 'python', functionName: 'diameterOfBinaryTree', code: 'def diameterOfBinaryTree(root):\n    # Write your code here\n    return 0' },
      { language: 'java', functionName: 'diameterOfBinaryTree', code: 'class Solution {\n    public int diameterOfBinaryTree(TreeNode root) {\n        // Write your code here\n        return 0;\n    }\n}' },
      { language: 'cpp', functionName: 'diameterOfBinaryTree', code: 'struct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n};\n\nclass Solution {\npublic:\n    int diameterOfBinaryTree(TreeNode* root) {\n        // Write your code here\n        return 0;\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { root: [1, 2, 3, 4, 5] }, output: 3 }
    ],
    solution: 'DFS: for each node, update max = max(max, leftHeight + rightHeight). Return 1 + max(leftHeight, rightHeight).'
  },
  {
    id: 'balanced-binary-tree',
    slug: 'balanced-binary-tree',
    title: 'Balanced Binary Tree',
    difficulty: 'easy',
    topics: ['Tree', 'DFS'],
    prompt: 'Given a binary tree, determine if it is height-balanced. A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.',
    constraints: ['The number of nodes in the tree is in the range [0, 5000]'],
    examples: [
      { input: 'root = [3,9,20,null,null,15,7]', output: 'true' }
    ],
    hints: ['Calculate height of each subtree', 'Check if abs(leftHeight - rightHeight) <= 1'],
    starterCode: [
      { language: 'javascript', functionName: 'isBalanced', code: 'function isBalanced(root) {\n  // Write your code here\n  return false;\n}\n\nmodule.exports = isBalanced;' },
      { language: 'typescript', functionName: 'isBalanced', code: 'class TreeNode {\n  val: number;\n  left: TreeNode | null;\n  right: TreeNode | null;\n}\n\nfunction isBalanced(root: TreeNode | null): boolean {\n  // Write your code here\n  return false;\n}\n\nexport default isBalanced;' },
      { language: 'python', functionName: 'isBalanced', code: 'def isBalanced(root):\n    # Write your code here\n    return False' },
      { language: 'java', functionName: 'isBalanced', code: 'class Solution {\n    public boolean isBalanced(TreeNode root) {\n        // Write your code here\n        return false;\n    }\n}' },
      { language: 'cpp', functionName: 'isBalanced', code: 'struct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n};\n\nclass Solution {\npublic:\n    bool isBalanced(TreeNode* root) {\n        // Write your code here\n        return false;\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { root: [3, 9, 20, null, null, 15, 7] }, output: true }
    ],
    solution: 'DFS: return -1 if unbalanced. Otherwise return 1 + max(leftHeight, rightHeight).'
  },
  {
    id: 'minimum-depth-of-binary-tree',
    slug: 'minimum-depth-of-binary-tree',
    title: 'Minimum Depth of Binary Tree',
    difficulty: 'easy',
    topics: ['Tree', 'BFS', 'DFS'],
    prompt: 'Given a binary tree, find its minimum depth. The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.',
    constraints: ['The number of nodes in the tree is in the range [0, 10^5]'],
    examples: [
      { input: 'root = [3,9,20,null,null,15,7]', output: '2' }
    ],
    hints: ['BFS: return depth when first leaf is found', 'Or DFS: min depth = 1 + min(left, right), handle one-child case'],
    starterCode: [
      { language: 'javascript', functionName: 'minDepth', code: 'function minDepth(root) {\n  // Write your code here\n  return 0;\n}\n\nmodule.exports = minDepth;' },
      { language: 'typescript', functionName: 'minDepth', code: 'class TreeNode {\n  val: number;\n  left: TreeNode | null;\n  right: TreeNode | null;\n}\n\nfunction minDepth(root: TreeNode | null): number {\n  // Write your code here\n  return 0;\n}\n\nexport default minDepth;' },
      { language: 'python', functionName: 'minDepth', code: 'def minDepth(root):\n    # Write your code here\n    return 0' },
      { language: 'java', functionName: 'minDepth', code: 'class Solution {\n    public int minDepth(TreeNode root) {\n        // Write your code here\n        return 0;\n    }\n}' },
      { language: 'cpp', functionName: 'minDepth', code: 'struct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n};\n\nclass Solution {\npublic:\n    int minDepth(TreeNode* root) {\n        // Write your code here\n        return 0;\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { root: [3, 9, 20, null, null, 15, 7] }, output: 2 }
    ],
    solution: 'BFS: return level when first leaf found. Or DFS: if only one child, recurse on that child.'
  },
  {
    id: 'maximum-depth-of-binary-tree',
    slug: 'maximum-depth-of-binary-tree',
    title: 'Maximum Depth of Binary Tree',
    difficulty: 'easy',
    topics: ['Tree', 'DFS'],
    prompt: 'Given the root of a binary tree, return its maximum depth. A binary tree maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.',
    constraints: ['The number of nodes in the tree is in the range [0, 10^4]'],
    examples: [
      { input: 'root = [3,9,20,null,null,15,7]', output: '3' }
    ],
    hints: ['Recursively calculate max depth of left and right subtrees', 'Return 1 + max(left, right)'],
    starterCode: [
      { language: 'javascript', functionName: 'maxDepth', code: 'function maxDepth(root) {\n  // Write your code here\n  return 0;\n}\n\nmodule.exports = maxDepth;' },
      { language: 'typescript', functionName: 'maxDepth', code: 'class TreeNode {\n  val: number;\n  left: TreeNode | null;\n  right: TreeNode | null;\n}\n\nfunction maxDepth(root: TreeNode | null): number {\n  // Write your code here\n  return 0;\n}\n\nexport default maxDepth;' },
      { language: 'python', functionName: 'maxDepth', code: 'def maxDepth(root):\n    # Write your code here\n    return 0' },
      { language: 'java', functionName: 'maxDepth', code: 'class Solution {\n    public int maxDepth(TreeNode root) {\n        // Write your code here\n        return 0;\n    }\n}' },
      { language: 'cpp', functionName: 'maxDepth', code: 'struct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n};\n\nclass Solution {\npublic:\n    int maxDepth(TreeNode* root) {\n        // Write your code here\n        return 0;\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { root: [3, 9, 20, null, null, 15, 7] }, output: 3 }
    ],
    solution: 'If null, return 0. Return 1 + max(maxDepth(left), maxDepth(right)).'
  },
  {
    id: 'merge-two-binary-trees',
    slug: 'merge-two-binary-trees',
    title: 'Merge Two Binary Trees',
    difficulty: 'easy',
    topics: ['Tree', 'DFS'],
    prompt: 'You are given two binary trees root1 and root2. Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.',
    constraints: ['The number of nodes in both trees is in the range [0, 2000]'],
    examples: [
      { input: 'root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]', output: '[3,4,5,5,4,null,7]' }
    ],
    hints: ['If both nodes exist, create new node with sum', 'If only one exists, use that node', 'Recursively merge left and right'],
    starterCode: [
      { language: 'javascript', functionName: 'mergeTrees', code: 'function mergeTrees(root1, root2) {\n  // Write your code here\n  return null;\n}\n\nmodule.exports = mergeTrees;' },
      { language: 'typescript', functionName: 'mergeTrees', code: 'class TreeNode {\n  val: number;\n  left: TreeNode | null;\n  right: TreeNode | null;\n}\n\nfunction mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {\n  // Write your code here\n  return null;\n}\n\nexport default mergeTrees;' },
      { language: 'python', functionName: 'mergeTrees', code: 'def mergeTrees(root1, root2):\n    # Write your code here\n    return None' },
      { language: 'java', functionName: 'mergeTrees', code: 'class Solution {\n    public TreeNode mergeTrees(TreeNode root1, TreeNode root2) {\n        // Write your code here\n        return null;\n    }\n}' },
      { language: 'cpp', functionName: 'mergeTrees', code: 'struct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n};\n\nclass Solution {\npublic:\n    TreeNode* mergeTrees(TreeNode* root1, TreeNode* root2) {\n        // Write your code here\n        return nullptr;\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { root1: [1, 3, 2, 5], root2: [2, 1, 3, null, 4, null, 7] }, output: [3, 4, 5, 5, 4, null, 7] }
    ],
    solution: 'If both null, return null. If one null, return other. Create new node with sum, recursively merge children.'
  },
  { id: 'number-of-islands', slug: 'number-of-islands', title: 'Number of Islands', difficulty: 'medium', topics: ['Graph', 'DFS', 'BFS'], prompt: 'Given an m x n 2D binary grid which represents a map of 1s (land) and 0s (water), return the number of islands.', constraints: ['m == grid.length', 'n == grid[i].length'], examples: [{ input: 'grid = [["1","1","0"],["1","1","0"],["0","0","1"]]', output: '2' }], hints: ['DFS/BFS from each unvisited land cell', 'Mark visited cells'], starterCode: [{ language: 'javascript', functionName: 'numIslands', code: 'function numIslands(grid) {\n  return 0;\n}\n\nmodule.exports = numIslands;' }, { language: 'typescript', functionName: 'numIslands', code: 'function numIslands(grid: string[][]): number {\n  return 0;\n}\n\nexport default numIslands;' }, { language: 'python', functionName: 'numIslands', code: 'def numIslands(grid):\n    return 0' }], tests: [{ id: 's1', type: 'sample', input: { grid: [['1', '1', '0'], ['1', '1', '0'], ['0', '0', '1']] }, output: 2 }], solution: 'DFS/BFS from each 1, mark as visited, count islands.' },
  { id: 'clone-graph', slug: 'clone-graph', title: 'Clone Graph', difficulty: 'medium', topics: ['Graph', 'DFS', 'BFS'], prompt: 'Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.', constraints: ['The number of nodes in the graph is in the range [0, 100]'], examples: [{ input: 'adjList = [[2,4],[1,3],[2,4],[1,3]]', output: '[[2,4],[1,3],[2,4],[1,3]]' }], hints: ['Use HashMap to track cloned nodes', 'DFS/BFS to traverse'], starterCode: [{ language: 'javascript', functionName: 'cloneGraph', code: 'function cloneGraph(node) {\n  return null;\n}\n\nmodule.exports = cloneGraph;' }, { language: 'typescript', functionName: 'cloneGraph', code: 'function cloneGraph(node: Node | null): Node | null {\n  return null;\n}\n\nexport default cloneGraph;' }, { language: 'python', functionName: 'cloneGraph', code: 'def cloneGraph(node):\n    return None' }], tests: [{ id: 's1', type: 'sample', input: { adjList: [[2, 4], [1, 3], [2, 4], [1, 3]] }, output: [[2, 4], [1, 3], [2, 4], [1, 3]] }], solution: 'HashMap + DFS: clone nodes, connect neighbors.' },
  { id: 'course-schedule', slug: 'course-schedule', title: 'Course Schedule', difficulty: 'medium', topics: ['Graph', 'Topological Sort'], prompt: 'There are numCourses courses labeled from 0 to numCourses - 1. Given prerequisites array, return true if you can finish all courses.', constraints: ['1 <= numCourses <= 2000'], examples: [{ input: 'numCourses = 2, prerequisites = [[1,0]]', output: 'true' }], hints: ['Detect cycle in directed graph', 'Use DFS with 3 states or Kahn algorithm'], starterCode: [{ language: 'javascript', functionName: 'canFinish', code: 'function canFinish(numCourses, prerequisites) {\n  return false;\n}\n\nmodule.exports = canFinish;' }, { language: 'typescript', functionName: 'canFinish', code: 'function canFinish(numCourses: number, prerequisites: number[][]): boolean {\n  return false;\n}\n\nexport default canFinish;' }, { language: 'python', functionName: 'canFinish', code: 'def canFinish(numCourses, prerequisites):\n    return False' }], tests: [{ id: 's1', type: 'sample', input: { numCourses: 2, prerequisites: [[1, 0]] }, output: true }], solution: 'Topological sort: if cycle exists, return false.' },
  { id: 'longest-increasing-subsequence', slug: 'longest-increasing-subsequence', title: 'Longest Increasing Subsequence', difficulty: 'medium', topics: ['Array', 'DP', 'Binary Search'], prompt: 'Given an integer array nums, return the length of the longest strictly increasing subsequence.', constraints: ['1 <= nums.length <= 2500'], examples: [{ input: 'nums = [10,9,2,5,3,7,101,18]', output: '4' }], hints: ['DP: dp[i] = max LIS ending at i', 'Or binary search with patience sorting'], starterCode: [{ language: 'javascript', functionName: 'lengthOfLIS', code: 'function lengthOfLIS(nums) {\n  return 0;\n}\n\nmodule.exports = lengthOfLIS;' }, { language: 'typescript', functionName: 'lengthOfLIS', code: 'function lengthOfLIS(nums: number[]): number {\n  return 0;\n}\n\nexport default lengthOfLIS;' }, { language: 'python', functionName: 'lengthOfLIS', code: 'def lengthOfLIS(nums):\n    return 0' }], tests: [{ id: 's1', type: 'sample', input: { nums: [10, 9, 2, 5, 3, 7, 101, 18] }, output: 4 }], solution: 'DP O(n²) or Binary Search O(n log n).' },
  { id: 'edit-distance', slug: 'edit-distance', title: 'Edit Distance', difficulty: 'hard', topics: ['String', 'DP'], prompt: 'Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2. Operations: insert, delete, replace.', constraints: ['0 <= word1.length, word2.length <= 500'], examples: [{ input: 'word1 = "horse", word2 = "ros"', output: '3' }], hints: ['DP: dp[i][j] = min ops to convert word1[0:i] to word2[0:j]'], starterCode: [{ language: 'javascript', functionName: 'minDistance', code: 'function minDistance(word1, word2) {\n  return 0;\n}\n\nmodule.exports = minDistance;' }, { language: 'typescript', functionName: 'minDistance', code: 'function minDistance(word1: string, word2: string): number {\n  return 0;\n}\n\nexport default minDistance;' }, { language: 'python', functionName: 'minDistance', code: 'def minDistance(word1, word2):\n    return 0' }], tests: [{ id: 's1', type: 'sample', input: { word1: 'horse', word2: 'ros' }, output: 3 }], solution: 'DP: if chars match, dp[i][j]=dp[i-1][j-1], else 1+min(insert,delete,replace).' },
  { id: 'word-ladder', slug: 'word-ladder', title: 'Word Ladder', difficulty: 'hard', topics: ['String', 'BFS', 'Graph'], prompt: 'Given two words beginWord and endWord, and a dictionary wordList, return the length of shortest transformation sequence from beginWord to endWord.', constraints: ['1 <= beginWord.length <= 10'], examples: [{ input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]', output: '5' }], hints: ['BFS from beginWord', 'Try all 1-char transformations'], starterCode: [{ language: 'javascript', functionName: 'ladderLength', code: 'function ladderLength(beginWord, endWord, wordList) {\n  return 0;\n}\n\nmodule.exports = ladderLength;' }, { language: 'typescript', functionName: 'ladderLength', code: 'function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {\n  return 0;\n}\n\nexport default ladderLength;' }, { language: 'python', functionName: 'ladderLength', code: 'def ladderLength(beginWord, endWord, wordList):\n    return 0' }], tests: [{ id: 's1', type: 'sample', input: { beginWord: 'hit', endWord: 'cog', wordList: ['hot', 'dot', 'dog', 'lot', 'log', 'cog'] }, output: 5 }], solution: 'BFS: try all 1-char changes, track visited.' },
  { id: 'word-search', slug: 'word-search', title: 'Word Search', difficulty: 'medium', topics: ['Array', 'Backtracking'], prompt: 'Given an m x n grid of characters board and a string word, return true if word exists in the grid.', constraints: ['m == board.length', 'n = board[i].length'], examples: [{ input: 'board = [["A","B","C"],["S","F","C"],["A","D","E"]], word = "ABCCED"', output: 'true' }], hints: ['Backtrack from each cell', 'Mark visited, unmark on backtrack'], starterCode: [{ language: 'javascript', functionName: 'exist', code: 'function exist(board, word) {\n  return false;\n}\n\nmodule.exports = exist;' }, { language: 'typescript', functionName: 'exist', code: 'function exist(board: string[][], word: string): boolean {\n  return false;\n}\n\nexport default exist;' }, { language: 'python', functionName: 'exist', code: 'def exist(board, word):\n    return False' }], tests: [{ id: 's1', type: 'sample', input: { board: [['A', 'B', 'C'], ['S', 'F', 'C'], ['A', 'D', 'E']], word: 'ABCCED' }, output: true }], solution: 'DFS backtracking from each cell.' },
  { id: 'find-minimum-in-rotated-sorted-array', slug: 'find-minimum-in-rotated-sorted-array', title: 'Find Minimum in Rotated Sorted Array', difficulty: 'medium', topics: ['Array', 'Binary Search'], prompt: 'Suppose an array of length n sorted in ascending order is rotated. Find the minimum element.', constraints: ['n == nums.length', '1 <= n <= 5000'], examples: [{ input: 'nums = [3,4,5,1,2]', output: '1' }], hints: ['Binary search', 'Compare mid with right'], starterCode: [{ language: 'javascript', functionName: 'findMin', code: 'function findMin(nums) {\n  return 0;\n}\n\nmodule.exports = findMin;' }, { language: 'typescript', functionName: 'findMin', code: 'function findMin(nums: number[]): number {\n  return 0;\n}\n\nexport default findMin;' }, { language: 'python', functionName: 'findMin', code: 'def findMin(nums):\n    return 0' }], tests: [{ id: 's1', type: 'sample', input: { nums: [3, 4, 5, 1, 2] }, output: 1 }], solution: 'Binary search: if nums[mid] > nums[right], min in right half.' },
  { id: 'median-of-two-sorted-arrays', slug: 'median-of-two-sorted-arrays', title: 'Median of Two Sorted Arrays', difficulty: 'hard', topics: ['Array', 'Binary Search'], prompt: 'Given two sorted arrays nums1 and nums2, return the median of the two sorted arrays.', constraints: ['nums1.length == m', 'nums2.length == n'], examples: [{ input: 'nums1 = [1,3], nums2 = [2]', output: '2.0' }], hints: ['Binary search on smaller array', 'Partition both arrays'], starterCode: [{ language: 'javascript', functionName: 'findMedianSortedArrays', code: 'function findMedianSortedArrays(nums1, nums2) {\n  return 0.0;\n}\n\nmodule.exports = findMedianSortedArrays;' }, { language: 'typescript', functionName: 'findMedianSortedArrays', code: 'function findMedianSortedArrays(nums1: number[], nums2: number[]): number {\n  return 0.0;\n}\n\nexport default findMedianSortedArrays;' }, { language: 'python', functionName: 'findMedianSortedArrays', code: 'def findMedianSortedArrays(nums1, nums2):\n    return 0.0' }], tests: [{ id: 's1', type: 'sample', input: { nums1: [1, 3], nums2: [2] }, output: 2.0 }], solution: 'Binary search to partition arrays equally.' },
  { id: 'longest-substring-without-repeating', slug: 'longest-substring-without-repeating', title: 'Longest Substring Without Repeating Characters', difficulty: 'medium', topics: ['String', 'Sliding Window'], prompt: 'Given a string s, find the length of the longest substring without repeating characters.', constraints: ['0 <= s.length <= 5 * 10^4'], examples: [{ input: 's = "abcabcbb"', output: '3' }], hints: ['Sliding window with HashSet', 'Track char positions'], starterCode: [{ language: 'javascript', functionName: 'lengthOfLongestSubstring', code: 'function lengthOfLongestSubstring(s) {\n  return 0;\n}\n\nmodule.exports = lengthOfLongestSubstring;' }, { language: 'typescript', functionName: 'lengthOfLongestSubstring', code: 'function lengthOfLongestSubstring(s: string): number {\n  return 0;\n}\n\nexport default lengthOfLongestSubstring;' }, { language: 'python', functionName: 'lengthOfLongestSubstring', code: 'def lengthOfLongestSubstring(s):\n    return 0' }], tests: [{ id: 's1', type: 'sample', input: { s: 'abcabcbb' }, output: 3 }], solution: 'Sliding window: move left when duplicate found.' },
  { id: 'minimum-window-substring', slug: 'minimum-window-substring', title: 'Minimum Window Substring', difficulty: 'hard', topics: ['String', 'Sliding Window'], prompt: 'Given two strings s and t, return the minimum window substring of s such that every character in t is included in the window.', constraints: ['m == s.length', 'n == t.length'], examples: [{ input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"' }], hints: ['Sliding window with two pointers', 'Track char frequencies'], starterCode: [{ language: 'javascript', functionName: 'minWindow', code: 'function minWindow(s, t) {\n  return "";\n}\n\nmodule.exports = minWindow;' }, { language: 'typescript', functionName: 'minWindow', code: 'function minWindow(s: string, t: string): string {\n  return "";\n}\n\nexport default minWindow;' }, { language: 'python', functionName: 'minWindow', code: 'def minWindow(s, t):\n    return ""' }], tests: [{ id: 's1', type: 'sample', input: { s: 'ADOBECODEBANC', t: 'ABC' }, output: 'BANC' }], solution: 'Sliding window: expand right, contract left when valid.' },
  { id: 'sliding-window-maximum', slug: 'sliding-window-maximum', title: 'Sliding Window Maximum', difficulty: 'hard', topics: ['Array', 'Sliding Window', 'Heap'], prompt: 'Given an array nums and sliding window of size k, return the max sliding window.', constraints: ['1 <= nums.length <= 10^5'], examples: [{ input: 'nums = [1,3,-1,-3,5,3,6,7], k = 3', output: '[3,3,5,5,6,7]' }], hints: ['Use deque to track indices', 'Keep deque decreasing'], starterCode: [{ language: 'javascript', functionName: 'maxSlidingWindow', code: 'function maxSlidingWindow(nums, k) {\n  return [];\n}\n\nmodule.exports = maxSlidingWindow;' }, { language: 'typescript', functionName: 'maxSlidingWindow', code: 'function maxSlidingWindow(nums: number[], k: number): number[] {\n  return [];\n}\n\nexport default maxSlidingWindow;' }, { language: 'python', functionName: 'maxSlidingWindow', code: 'def maxSlidingWindow(nums, k):\n    return []' }], tests: [{ id: 's1', type: 'sample', input: { nums: [1, 3, -1, -3, 5, 3, 6, 7], k: 3 }, output: [3, 3, 5, 5, 6, 7] }], solution: 'Deque: maintain decreasing order, front is max.' },
  { id: 'longest-palindromic-substring', slug: 'longest-palindromic-substring', title: 'Longest Palindromic Substring', difficulty: 'medium', topics: ['String', 'DP'], prompt: 'Given a string s, return the longest palindromic substring in s.', constraints: ['1 <= s.length <= 1000'], examples: [{ input: 's = "babad"', output: '"bab"' }], hints: ['Expand around center', 'Or DP: dp[i][j] = is s[i:j+1] palindrome'], starterCode: [{ language: 'javascript', functionName: 'longestPalindrome', code: 'function longestPalindrome(s) {\n  return "";\n}\n\nmodule.exports = longestPalindrome;' }, { language: 'typescript', functionName: 'longestPalindrome', code: 'function longestPalindrome(s: string): string {\n  return "";\n}\n\nexport default longestPalindrome;' }, { language: 'python', functionName: 'longestPalindrome', code: 'def longestPalindrome(s):\n    return ""' }], tests: [{ id: 's1', type: 'sample', input: { s: 'babad' }, output: 'bab' }], solution: 'Expand around each center (odd/even length).' },
  { id: 'group-anagrams', slug: 'group-anagrams', title: 'Group Anagrams', difficulty: 'medium', topics: ['String', 'Hash Table'], prompt: 'Given an array of strings strs, group the anagrams together.', constraints: ['1 <= strs.length <= 10^4'], examples: [{ input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["bat"],["nat","tan"],["ate","eat","tea"]]' }], hints: ['Use sorted string as key', 'Or char count as key'], starterCode: [{ language: 'javascript', functionName: 'groupAnagrams', code: 'function groupAnagrams(strs) {\n  return [];\n}\n\nmodule.exports = groupAnagrams;' }, { language: 'typescript', functionName: 'groupAnagrams', code: 'function groupAnagrams(strs: string[]): string[][] {\n  return [];\n}\n\nexport default groupAnagrams;' }, { language: 'python', functionName: 'groupAnagrams', code: 'def groupAnagrams(strs):\n    return []' }], tests: [{ id: 's1', type: 'sample', input: { strs: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'] }, output: [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']] }], solution: 'HashMap with sorted string as key.' },
  { id: 'valid-parentheses', slug: 'valid-parentheses', title: 'Valid Parentheses', difficulty: 'easy', topics: ['String', 'Stack'], prompt: 'Given a string s containing just the characters (),{},[], determine if the input string is valid.', constraints: ['1 <= s.length <= 10^4'], examples: [{ input: 's = "()"', output: 'true' }], hints: ['Use stack', 'Push opening, pop on closing'], starterCode: [{ language: 'javascript', functionName: 'isValid', code: 'function isValid(s) {\n  return false;\n}\n\nmodule.exports = isValid;' }, { language: 'typescript', functionName: 'isValid', code: 'function isValid(s: string): boolean {\n  return false;\n}\n\nexport default isValid;' }, { language: 'python', functionName: 'isValid', code: 'def isValid(s):\n    return False' }], tests: [{ id: 's1', type: 'sample', input: { s: '()' }, output: true }], solution: 'Stack: push opening brackets, pop and match closing.' },
  { id: 'regular-expression-matching', slug: 'regular-expression-matching', title: 'Regular Expression Matching', difficulty: 'hard', topics: ['String', 'DP'], prompt: 'Given an input string s and a pattern p, implement regular expression matching with support for . and *.', constraints: ['1 <= s.length <= 20'], examples: [{ input: 's = "aa", p = "a*"', output: 'true' }], hints: ['DP: dp[i][j] = does s[0:i] match p[0:j]'], starterCode: [{ language: 'javascript', functionName: 'isMatch', code: 'function isMatch(s, p) {\n  return false;\n}\n\nmodule.exports = isMatch;' }, { language: 'typescript', functionName: 'isMatch', code: 'function isMatch(s: string, p: string): boolean {\n  return false;\n}\n\nexport default isMatch;' }, { language: 'python', functionName: 'isMatch', code: 'def isMatch(s, p):\n    return False' }], tests: [{ id: 's1', type: 'sample', input: { s: 'aa', p: 'a*' }, output: true }], solution: 'DP: handle . and * cases.' },
  { id: 'wildcard-matching', slug: 'wildcard-matching', title: 'Wildcard Matching', difficulty: 'hard', topics: ['String', 'DP'], prompt: 'Given an input string s and a pattern p, implement wildcard pattern matching with support for ? and *.', constraints: ['0 <= s.length, p.length <= 2000'], examples: [{ input: 's = "aa", p = "*"', output: 'true' }], hints: ['DP or greedy with backtracking'], starterCode: [{ language: 'javascript', functionName: 'isMatch', code: 'function isMatch(s, p) {\n  return false;\n}\n\nmodule.exports = isMatch;' }, { language: 'typescript', functionName: 'isMatch', code: 'function isMatch(s: string, p: string): boolean {\n  return false;\n}\n\nexport default isMatch;' }, { language: 'python', functionName: 'isMatch', code: 'def isMatch(s, p):\n    return False' }], tests: [{ id: 's1', type: 'sample', input: { s: 'aa', p: '*' }, output: true }], solution: 'DP or greedy matching with * backtracking.' },
  { id: 'longest-common-subsequence', slug: 'longest-common-subsequence', title: 'Longest Common Subsequence', difficulty: 'medium', topics: ['String', 'DP'], prompt: 'Given two strings text1 and text2, return the length of their longest common subsequence.', constraints: ['1 <= text1.length, text2.length <= 1000'], examples: [{ input: 'text1 = "abcde", text2 = "ace"', output: '3' }], hints: ['DP: dp[i][j] = LCS of text1[0:i] and text2[0:j]'], starterCode: [{ language: 'javascript', functionName: 'longestCommonSubsequence', code: 'function longestCommonSubsequence(text1, text2) {\n  return 0;\n}\n\nmodule.exports = longestCommonSubsequence;' }, { language: 'typescript', functionName: 'longestCommonSubsequence', code: 'function longestCommonSubsequence(text1: string, text2: string): number {\n  return 0;\n}\n\nexport default longestCommonSubsequence;' }, { language: 'python', functionName: 'longestCommonSubsequence', code: 'def longestCommonSubsequence(text1, text2):\n    return 0' }], tests: [{ id: 's1', type: 'sample', input: { text1: 'abcde', text2: 'ace' }, output: 3 }], solution: 'DP: if chars match, dp[i][j]=1+dp[i-1][j-1], else max(dp[i-1][j], dp[i][j-1]).' },
  { id: 'distinct-subsequences', slug: 'distinct-subsequences', title: 'Distinct Subsequences', difficulty: 'hard', topics: ['String', 'DP'], prompt: 'Given two strings s and t, return the number of distinct subsequences of s which equals t.', constraints: ['1 <= s.length, t.length <= 1000'], examples: [{ input: 's = "rabbbit", t = "rabbit"', output: '3' }], hints: ['DP: dp[i][j] = count of t[0:j] in s[0:i]'], starterCode: [{ language: 'javascript', functionName: 'numDistinct', code: 'function numDistinct(s, t) {\n  return 0;\n}\n\nmodule.exports = numDistinct;' }, { language: 'typescript', functionName: 'numDistinct', code: 'function numDistinct(s: string, t: string): number {\n  return 0;\n}\n\nexport default numDistinct;' }, { language: 'python', functionName: 'numDistinct', code: 'def numDistinct(s, t):\n    return 0' }], tests: [{ id: 's1', type: 'sample', input: { s: 'rabbbit', t: 'rabbit' }, output: 3 }], solution: 'DP: if s[i]==t[j], dp[i][j]=dp[i-1][j-1]+dp[i-1][j], else dp[i-1][j].' },
  { id: 'interleaving-string', slug: 'interleaving-string', title: 'Interleaving String', difficulty: 'medium', topics: ['String', 'DP'], prompt: 'Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.', constraints: ['0 <= s1.length, s2.length <= 100'], examples: [{ input: 's1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"', output: 'true' }], hints: ['DP: dp[i][j] = can s3[0:i+j] be formed from s1[0:i] and s2[0:j]'], starterCode: [{ language: 'javascript', functionName: 'isInterleave', code: 'function isInterleave(s1, s2, s3) {\n  return false;\n}\n\nmodule.exports = isInterleave;' }, { language: 'typescript', functionName: 'isInterleave', code: 'function isInterleave(s1: string, s2: string, s3: string): boolean {\n  return false;\n}\n\nexport default isInterleave;' }, { language: 'python', functionName: 'isInterleave', code: 'def isInterleave(s1, s2, s3):\n    return False' }], tests: [{ id: 's1', type: 'sample', input: { s1: 'aabcc', s2: 'dbbca', s3: 'aadbbcbcac' }, output: true }], solution: 'DP: check if s3[i+j-1] matches s1[i-1] or s2[j-1].' },
  { id: 'scramble-string', slug: 'scramble-string', title: 'Scramble String', difficulty: 'hard', topics: ['String', 'DP'], prompt: 'Given two strings s1 and s2 of the same length, return true if s2 is a scrambled string of s1.', constraints: ['s1.length == s2.length'], examples: [{ input: 's1 = "great", s2 = "rgeat"', output: 'true' }], hints: ['Recursion with memoization', 'Try all split points'], starterCode: [{ language: 'javascript', functionName: 'isScramble', code: 'function isScramble(s1, s2) {\n  return false;\n}\n\nmodule.exports = isScramble;' }, { language: 'typescript', functionName: 'isScramble', code: 'function isScramble(s1: string, s2: string): boolean {\n  return false;\n}\n\nexport default isScramble;' }, { language: 'python', functionName: 'isScramble', code: 'def isScramble(s1, s2):\n    return False' }], tests: [{ id: 's1', type: 'sample', input: { s1: 'great', s2: 'rgeat' }, output: true }], solution: 'Recursion: try all split points, check if scrambled.' },
  { id: 'course-schedule-ii', slug: 'course-schedule-ii', title: 'Course Schedule II', difficulty: 'medium', topics: ['Graph', 'Topological Sort'], prompt: 'Return the ordering of courses you should take to finish all courses.', constraints: ['1 <= numCourses <= 2000'], examples: [{ input: 'numCourses = 2, prerequisites = [[1,0]]', output: '[0,1]' }], hints: ['Topological sort with DFS or Kahn'], starterCode: [{ language: 'javascript', functionName: 'findOrder', code: 'function findOrder(numCourses, prerequisites) {\n  return [];\n}\n\nmodule.exports = findOrder;' }, { language: 'typescript', functionName: 'findOrder', code: 'function findOrder(numCourses: number, prerequisites: number[][]): number[] {\n  return [];\n}\n\nexport default findOrder;' }, { language: 'python', functionName: 'findOrder', code: 'def findOrder(numCourses, prerequisites):\n    return []' }], tests: [{ id: 's1', type: 'sample', input: { numCourses: 2, prerequisites: [[1, 0]] }, output: [0, 1] }], solution: 'Topological sort: return order if no cycle.' },
  { id: 'word-search-ii', slug: 'word-search-ii', title: 'Word Search II', difficulty: 'hard', topics: ['Array', 'Backtracking', 'Trie'], prompt: 'Given an m x n board and a list of words, return all words on the board.', constraints: ['m == board.length'], examples: [{ input: 'board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]', output: '["eat","oath"]' }], hints: ['Build Trie from words', 'DFS with Trie'], starterCode: [{ language: 'javascript', functionName: 'findWords', code: 'function findWords(board, words) {\n  return [];\n}\n\nmodule.exports = findWords;' }, { language: 'typescript', functionName: 'findWords', code: 'function findWords(board: string[][], words: string[]): string[] {\n  return [];\n}\n\nexport default findWords;' }, { language: 'python', functionName: 'findWords', code: 'def findWords(board, words):\n    return []' }], tests: [{ id: 's1', type: 'sample', input: { board: [['o', 'a', 'a', 'n'], ['e', 't', 'a', 'e'], ['i', 'h', 'k', 'r'], ['i', 'f', 'l', 'v']], words: ['oath', 'pea', 'eat', 'rain'] }, output: ['eat', 'oath'] }], solution: 'Trie + DFS backtracking.' },
  { id: 'surrounded-regions', slug: 'surrounded-regions', title: 'Surrounded Regions', difficulty: 'medium', topics: ['Array', 'DFS', 'BFS'], prompt: 'Given an m x n matrix board containing X and O, capture all regions that are 4-directionally surrounded by X.', constraints: ['m == board.length'], examples: [{ input: 'board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]', output: '[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]' }], hints: ['DFS from border Os', 'Mark them as safe'], starterCode: [{ language: 'javascript', functionName: 'solve', code: 'function solve(board) {\n  // Modify board in-place\n}\n\nmodule.exports = solve;' }, { language: 'typescript', functionName: 'solve', code: 'function solve(board: string[][]): void {\n  // Modify board in-place\n}\n\nexport default solve;' }, { language: 'python', functionName: 'solve', code: 'def solve(board):\n    pass' }], tests: [{ id: 's1', type: 'sample', input: { board: [['X', 'X', 'X', 'X'], ['X', 'O', 'O', 'X'], ['X', 'X', 'O', 'X'], ['X', 'O', 'X', 'X']] }, output: [['X', 'X', 'X', 'X'], ['X', 'X', 'X', 'X'], ['X', 'X', 'X', 'X'], ['X', 'O', 'X', 'X']] }], solution: 'DFS from border Os, mark as safe, flip others.' },
  { id: 'pacific-atlantic-water-flow', slug: 'pacific-atlantic-water-flow', title: 'Pacific Atlantic Water Flow', difficulty: 'medium', topics: ['Array', 'DFS', 'BFS'], prompt: 'Given an m x n matrix of heights, return coordinates that can flow to both Pacific and Atlantic oceans.', constraints: ['m == heights.length'], examples: [{ input: 'heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]', output: '[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]' }], hints: ['DFS from Pacific border', 'DFS from Atlantic border', 'Find intersection'], starterCode: [{ language: 'javascript', functionName: 'pacificAtlantic', code: 'function pacificAtlantic(heights) {\n  return [];\n}\n\nmodule.exports = pacificAtlantic;' }, { language: 'typescript', functionName: 'pacificAtlantic', code: 'function pacificAtlantic(heights: number[][]): number[][] {\n  return [];\n}\n\nexport default pacificAtlantic;' }, { language: 'python', functionName: 'pacificAtlantic', code: 'def pacificAtlantic(heights):\n    return []' }], tests: [{ id: 's1', type: 'sample', input: { heights: [[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]] }, output: [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] }], solution: 'DFS from both oceans, find cells reachable from both.' },
  { id: 'graph-valid-tree', slug: 'graph-valid-tree', title: 'Graph Valid Tree', difficulty: 'medium', topics: ['Graph', 'DFS', 'BFS'], prompt: 'Given n nodes labeled from 0 to n-1 and a list of undirected edges, check if these edges make up a valid tree.', constraints: ['1 <= n <= 2000'], examples: [{ input: 'n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]', output: 'true' }], hints: ['Tree has n-1 edges', 'No cycles', 'All nodes connected'], starterCode: [{ language: 'javascript', functionName: 'validTree', code: 'function validTree(n, edges) {\n  return false;\n}\n\nmodule.exports = validTree;' }, { language: 'typescript', functionName: 'validTree', code: 'function validTree(n: number, edges: number[][]): boolean {\n  return false;\n}\n\nexport default validTree;' }, { language: 'python', functionName: 'validTree', code: 'def validTree(n, edges):\n    return False' }], tests: [{ id: 's1', type: 'sample', input: { n: 5, edges: [[0, 1], [0, 2], [0, 3], [1, 4]] }, output: true }], solution: 'Check: edges.length == n-1, no cycles (DFS), all connected.' },
  { id: 'find-peak-element', slug: 'find-peak-element', title: 'Find Peak Element', difficulty: 'medium', topics: ['Array', 'Binary Search'], prompt: 'A peak element is an element that is strictly greater than its neighbors. Find a peak element and return its index.', constraints: ['1 <= nums.length <= 1000'], examples: [{ input: 'nums = [1,2,3,1]', output: '2' }], hints: ['Binary search', 'Move towards higher neighbor'], starterCode: [{ language: 'javascript', functionName: 'findPeakElement', code: 'function findPeakElement(nums) {\n  return 0;\n}\n\nmodule.exports = findPeakElement;' }, { language: 'typescript', functionName: 'findPeakElement', code: 'function findPeakElement(nums: number[]): number {\n  return 0;\n}\n\nexport default findPeakElement;' }, { language: 'python', functionName: 'findPeakElement', code: 'def findPeakElement(nums):\n    return 0' }], tests: [{ id: 's1', type: 'sample', input: { nums: [1, 2, 3, 1] }, output: 2 }], solution: 'Binary search: if nums[mid] < nums[mid+1], search right, else left.' },
  { id: 'search-in-rotated-sorted-array-ii', slug: 'search-in-rotated-sorted-array-ii', title: 'Search in Rotated Sorted Array II', difficulty: 'medium', topics: ['Array', 'Binary Search'], prompt: 'Given the array nums after rotation and an integer target, return true if target is in nums, or false otherwise. Array may contain duplicates.', constraints: ['1 <= nums.length <= 5000'], examples: [{ input: 'nums = [2,5,6,0,0,1,2], target = 0', output: 'true' }], hints: ['Binary search with duplicate handling', 'Skip duplicates at boundaries'], starterCode: [{ language: 'javascript', functionName: 'search', code: 'function search(nums, target) {\n  return false;\n}\n\nmodule.exports = search;' }, { language: 'typescript', functionName: 'search', code: 'function search(nums: number[], target: number): boolean {\n  return false;\n}\n\nexport default search;' }, { language: 'python', functionName: 'search', code: 'def search(nums, target):\n    return False' }], tests: [{ id: 's1', type: 'sample', input: { nums: [2, 5, 6, 0, 0, 1, 2], target: 0 }, output: true }], solution: 'Binary search: handle duplicates by incrementing left when nums[left]==nums[mid].' }
];

export const practiceProblems = [...baseProblems, ...mysqlCodingProblems];
