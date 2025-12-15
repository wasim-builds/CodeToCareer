import { PracticeProblem } from '@/types/practice';

export const practiceProblems: PracticeProblem[] = [
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
        code: 'function twoSum(nums, target) {\n  // TODO: return indices of the two numbers that sum to target\n}\n\nmodule.exports = twoSum;'
      },
      {
        language: 'typescript',
        functionName: 'twoSum',
        code: 'function twoSum(nums, target) {\n  // TODO: return indices of the two numbers that sum to target\n}\n\nmodule.exports = twoSum;'
      }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { nums: [2, 7, 11, 15], target: 9 }, output: [0, 1] },
      { id: 's2', type: 'sample', input: { nums: [3, 2, 4], target: 6 }, output: [1, 2] },
      { id: 'h1', type: 'hidden', input: { nums: [3, 3], target: 6 }, output: [0, 1] }
    ],
    solution: 'Use a map from value to index. Iterate nums, for each num check if target - num is in map, return the pair; otherwise store num with its index. O(n) time, O(n) space.'
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
        code: 'function isAnagram(s, t) {\n  // TODO: return true if t is an anagram of s\n}\n\nmodule.exports = isAnagram;'
      },
      {
        language: 'typescript',
        functionName: 'isAnagram',
        code: 'function isAnagram(s, t) {\n  // TODO: return true if t is an anagram of s\n}\n\nmodule.exports = isAnagram;'
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
        code: 'function lengthOfLongestSubstring(s) {\n  // TODO: return the length of the longest substring without repeating characters\n}\n\nmodule.exports = lengthOfLongestSubstring;'
      },
      {
        language: 'typescript',
        functionName: 'lengthOfLongestSubstring',
        code: 'function lengthOfLongestSubstring(s) {\n  // TODO: return the length of the longest substring without repeating characters\n}\n\nmodule.exports = lengthOfLongestSubstring;'
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
        code: 'function maxSubArray(nums) {\n  // TODO: return the maximum subarray sum\n}\n\nmodule.exports = maxSubArray;'
      },
      {
        language: 'typescript',
        functionName: 'maxSubArray',
        code: 'function maxSubArray(nums) {\n  // TODO: return the maximum subarray sum\n}\n\nmodule.exports = maxSubArray;'
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
        code: 'function merge(intervals) {\n  // TODO: merge overlapping intervals\n}\n\nmodule.exports = merge;'
      },
      {
        language: 'typescript',
        functionName: 'merge',
        code: 'function merge(intervals) {\n  // TODO: merge overlapping intervals\n}\n\nmodule.exports = merge;'
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
        code: 'function search(nums, target) {\n  // TODO: binary search returning index or -1\n}\n\nmodule.exports = search;'
      },
      {
        language: 'typescript',
        functionName: 'search',
        code: 'function search(nums, target) {\n  // TODO: binary search returning index or -1\n}\n\nmodule.exports = search;'
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
        code: 'function levelOrder(root) {\n  // root is a binary tree node: { val, left, right }\n  // TODO: return level order traversal as array of arrays\n}\n\nmodule.exports = levelOrder;'
      },
      {
        language: 'typescript',
        functionName: 'levelOrder',
        code: 'function levelOrder(root) {\n  // root is a binary tree node: { val, left, right }\n  // TODO: return level order traversal as array of arrays\n}\n\nmodule.exports = levelOrder;'
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
        code: 'function maxSlidingWindow(nums, k) {\n  // TODO: return array of window maximums\n}\n\nmodule.exports = maxSlidingWindow;'
      },
      {
        language: 'typescript',
        functionName: 'maxSlidingWindow',
        code: 'function maxSlidingWindow(nums, k) {\n  // TODO: return array of window maximums\n}\n\nmodule.exports = maxSlidingWindow;'
      }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { nums: [1, 3, -1, -3, 5, 3, 6, 7], k: 3 }, output: [3, 3, 5, 5, 6, 7] },
      { id: 'h1', type: 'hidden', input: { nums: [1], k: 1 }, output: [1] }
    ],
    solution: 'Maintain deque of indices with decreasing values. Remove out-of-window indices from front; before pushing new index, pop smaller values from back. Front holds max. O(n) time, O(k) space.'
  }
];
