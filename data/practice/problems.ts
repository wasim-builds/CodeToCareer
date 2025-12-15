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
      { language: 'javascript', functionName: 'merge', code: 'function merge(nums1, m, nums2, n) {\n  // Write your code here\n}\n\nmodule.exports = merge;' },
      { language: 'typescript', functionName: 'merge', code: 'function merge(nums1, m, nums2, n) {\n  // Write your code here\n}\n\nmodule.exports = merge;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { nums1: [1,2,3,0,0,0], m: 3, nums2: [2,5,6], n: 3 }, output: [1,2,2,3,5,6] }
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
      { language: 'javascript', functionName: 'removeElement', code: 'function removeElement(nums, val) {\n  // Write your code here\n}\n\nmodule.exports = removeElement;' },
      { language: 'typescript', functionName: 'removeElement', code: 'function removeElement(nums, val) {\n  // Write your code here\n}\n\nmodule.exports = removeElement;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { nums: [3,2,2,3], val: 3 }, output: 2 }
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
      { id: 's1', type: 'sample', input: { nums: [1,1,2] }, output: 2 }
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
      { language: 'javascript', functionName: 'majorityElement', code: 'function majorityElement(nums) {\n  // Write your code here\n}\n\nmodule.exports = majorityElement;' },
      { language: 'typescript', functionName: 'majorityElement', code: 'function majorityElement(nums) {\n  // Write your code here\n}\n\nmodule.exports = majorityElement;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { nums: [3,2,3] }, output: 3 }
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
      { id: 's1', type: 'sample', input: { prices: [7,1,5,3,6,4] }, output: 5 }
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
      { language: 'javascript', functionName: 'romanToInt', code: 'function romanToInt(s) {\n  // Write your code here\n}\n\nmodule.exports = romanToInt;' },
      { language: 'typescript', functionName: 'romanToInt', code: 'function romanToInt(s) {\n  // Write your code here\n}\n\nmodule.exports = romanToInt;' }
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
      { language: 'javascript', functionName: 'lengthOfLastWord', code: 'function lengthOfLastWord(s) {\n  // Write your code here\n}\n\nmodule.exports = lengthOfLastWord;' },
      { language: 'typescript', functionName: 'lengthOfLastWord', code: 'function lengthOfLastWord(s) {\n  // Write your code here\n}\n\nmodule.exports = lengthOfLastWord;' }
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
      { language: 'javascript', functionName: 'longestCommonPrefix', code: 'function longestCommonPrefix(strs) {\n  // Write your code here\n}\n\nmodule.exports = longestCommonPrefix;' },
      { language: 'typescript', functionName: 'longestCommonPrefix', code: 'function longestCommonPrefix(strs) {\n  // Write your code here\n}\n\nmodule.exports = longestCommonPrefix;' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { strs: ['flower','flow','flight'] }, output: 'fl' }
    ],
    solution: 'Use first string as prefix. Compare with each string, trim prefix until match.'
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
      { id: 's1', type: 'sample', input: { height: [1,8,6,2,5,4,8,3,7] }, output: 49 }
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
      { id: 's1', type: 'sample', input: { nums: [1,2,3,1] }, output: 4 }
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
      { id: 's1', type: 'sample', input: { coins: [1,2,5], amount: 11 }, output: 3 }
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
      { id: 's1', type: 'sample', input: { digits: [1,2,3] }, output: [1,2,4] }
    ],
    solution: 'Iterate from end. If digit < 9, increment and return. Else set to 0. If all 9s, prepend 1.'
  }
];
