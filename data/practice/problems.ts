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
    solution: 'Use a map from value to index. Iterate nums, for each num check if target - num is in map, return the pair; otherwise store num with its index. O(n) time, O(n) space.',
    solutions: [
      {
        methodName: 'bruteForce',
        title: 'Brute Force - Nested Loops',
        intuition: 'Check every possible pair of numbers to find two that sum to the target.',
        explanation: 'The simplest approach is to use two nested loops to check all possible pairs. For each element at index i, check all elements after it (index j where j > i) to see if nums[i] + nums[j] equals the target.',
        algorithm: [
          'Iterate through the array with index i from 0 to n-2',
          'For each i, iterate with index j from i+1 to n-1',
          'Check if nums[i] + nums[j] equals target',
          'If found, return [i, j]',
          'If no pair found after all iterations, return empty array'
        ],
        code: [
          {
            language: 'javascript',
            code: `function twoSum(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}`
          },
          {
            language: 'typescript',
            code: `function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}`
          },
          {
            language: 'python',
            code: `def twoSum(nums, target):
    for i in range(len(nums) - 1):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []`
          },
          {
            language: 'java',
            code: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        for (int i = 0; i < nums.length - 1; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return new int[]{i, j};
                }
            }
        }
        return new int[]{};
    }
}`
          },
          {
            language: 'cpp',
            code: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        for (int i = 0; i < nums.size() - 1; i++) {
            for (int j = i + 1; j < nums.size(); j++) {
                if (nums[i] + nums[j] == target) {
                    return {i, j};
                }
            }
        }
        return {};
    }
};`
          }
        ],
        complexity: {
          time: 'O(n²)',
          space: 'O(1)',
          explanation: 'We use two nested loops, each potentially iterating through n elements. No extra space is used besides the output.'
        },
        pros: ['Simple and easy to understand', 'No extra space required', 'Works for unsorted arrays'],
        cons: ['Very slow for large arrays', 'Not efficient - checks many unnecessary pairs']
      },
      {
        methodName: 'hashMap',
        title: 'Optimal - Hash Map (One Pass)',
        intuition: 'Instead of checking every pair, use a hash map to instantly look up if the complement (target - current number) has been seen before.',
        explanation: 'As we iterate through the array, for each number we calculate its complement (target - num). We check if this complement exists in our hash map. If it does, we found our pair. If not, we store the current number and its index in the map for future lookups.',
        algorithm: [
          'Create an empty hash map to store number -> index mappings',
          'Iterate through the array with index i',
          'For each nums[i], calculate complement = target - nums[i]',
          'Check if complement exists in the hash map',
          'If yes, return [map[complement], i]',
          'If no, store nums[i] -> i in the hash map',
          'Continue to next element'
        ],
        code: [
          {
            language: 'javascript',
            code: `function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return [];
}`
          },
          {
            language: 'typescript',
            code: `function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    
    map.set(nums[i], i);
  }
  
  return [];
}`
          },
          {
            language: 'python',
            code: `def twoSum(nums, target):
    seen = {}
    
    for i, num in enumerate(nums):
        complement = target - num
        
        if complement in seen:
            return [seen[complement], i]
        
        seen[num] = i
    
    return []`
          },
          {
            language: 'java',
            code: `import java.util.HashMap;
import java.util.Map;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            
            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }
            
            map.put(nums[i], i);
        }
        
        return new int[]{};
    }
}`
          },
          {
            language: 'cpp',
            code: `#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> seen;
        
        for (int i = 0; i < nums.size(); i++) {
            int complement = target - nums[i];
            
            if (seen.find(complement) != seen.end()) {
                return {seen[complement], i};
            }
            
            seen[nums[i]] = i;
        }
        
        return {};
    }
};`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(n)',
          explanation: 'We iterate through the array once (O(n)). Hash map operations (get/set) are O(1) on average. We store at most n elements in the map, requiring O(n) space.'
        },
        pros: ['Very fast - linear time complexity', 'Single pass through the array', 'Optimal solution for this problem'],
        cons: ['Uses extra space for hash map', 'Slightly more complex than brute force']
      }
    ],
    solved: false
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
    solution: 'Use a frequency map of characters; increment for s, decrement for t. If lengths differ or any count is nonzero, return false. O(n) time, O(1) space for lowercase letters.',
    solutions: [
      {
        methodName: 'sorting',
        title: 'Sorting Approach',
        intuition: 'If two strings are anagrams, they will be identical when sorted.',
        explanation: 'Sort both strings and compare them character by character. If the sorted strings are equal, the original strings are anagrams.',
        algorithm: [
          'Check if lengths are different - if so, return false',
          'Convert both strings to character arrays',
          'Sort both character arrays',
          'Compare sorted arrays character by character',
          'Return true if all characters match, false otherwise'
        ],
        code: [
          {
            language: 'javascript',
            code: `function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  
  const sortedS = s.split('').sort().join('');
  const sortedT = t.split('').sort().join('');
  
  return sortedS === sortedT;
}`
          },
          {
            language: 'typescript',
            code: `function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  
  const sortedS = s.split('').sort().join('');
  const sortedT = t.split('').sort().join('');
  
  return sortedS === sortedT;
}`
          },
          {
            language: 'python',
            code: `def isAnagram(s, t):
    if len(s) != len(t):
        return False
    
    return sorted(s) == sorted(t)`
          },
          {
            language: 'java',
            code: `import java.util.Arrays;

class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;
        
        char[] sChars = s.toCharArray();
        char[] tChars = t.toCharArray();
        
        Arrays.sort(sChars);
        Arrays.sort(tChars);
        
        return Arrays.equals(sChars, tChars);
    }
}`
          },
          {
            language: 'cpp',
            code: `#include <string>
#include <algorithm>
using namespace std;

class Solution {
public:
    bool isAnagram(string s, string t) {
        if (s.length() != t.length()) return false;
        
        sort(s.begin(), s.end());
        sort(t.begin(), t.end());
        
        return s == t;
    }
};`
          }
        ],
        complexity: {
          time: 'O(n log n)',
          space: 'O(n)',
          explanation: 'Sorting both strings takes O(n log n) time. We need O(n) space to store the sorted character arrays.'
        },
        pros: ['Simple and concise', 'Easy to understand and implement'],
        cons: ['Not optimal - sorting is slower than necessary', 'Uses extra space for sorted strings']
      },
      {
        methodName: 'frequencyCount',
        title: 'Optimal - Frequency Counter',
        intuition: 'Anagrams have the exact same character frequencies. Count characters in one string and verify against the other.',
        explanation: 'Use a hash map to count character frequencies. Increment counts for characters in string s, then decrement for characters in string t. If all counts end at zero, the strings are anagrams.',
        algorithm: [
          'Check if lengths differ - if so, return false',
          'Create a frequency map (hash map or array for lowercase letters)',
          'Iterate through string s, incrementing count for each character',
          'Iterate through string t, decrementing count for each character',
          'Check if all counts are zero',
          'Return true if all zero, false otherwise'
        ],
        code: [
          {
            language: 'javascript',
            code: `function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  
  const count = {};
  
  for (const char of s) {
    count[char] = (count[char] || 0) + 1;
  }
  
  for (const char of t) {
    if (!count[char]) return false;
    count[char]--;
  }
  
  return true;
}`
          },
          {
            language: 'typescript',
            code: `function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  
  const count: Record<string, number> = {};
  
  for (const char of s) {
    count[char] = (count[char] || 0) + 1;
  }
  
  for (const char of t) {
    if (!count[char]) return false;
    count[char]--;
  }
  
  return true;
}`
          },
          {
            language: 'python',
            code: `def isAnagram(s, t):
    if len(s) != len(t):
        return False
    
    count = {}
    
    for char in s:
        count[char] = count.get(char, 0) + 1
    
    for char in t:
        if char not in count or count[char] == 0:
            return False
        count[char] -= 1
    
    return True`
          },
          {
            language: 'java',
            code: `import java.util.HashMap;
import java.util.Map;

class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;
        
        Map<Character, Integer> count = new HashMap<>();
        
        for (char c : s.toCharArray()) {
            count.put(c, count.getOrDefault(c, 0) + 1);
        }
        
        for (char c : t.toCharArray()) {
            if (!count.containsKey(c) || count.get(c) == 0) {
                return false;
            }
            count.put(c, count.get(c) - 1);
        }
        
        return true;
    }
}`
          },
          {
            language: 'cpp',
            code: `#include <string>
#include <unordered_map>
using namespace std;

class Solution {
public:
    bool isAnagram(string s, string t) {
        if (s.length() != t.length()) return false;
        
        unordered_map<char, int> count;
        
        for (char c : s) {
            count[c]++;
        }
        
        for (char c : t) {
            if (count[c] == 0) return false;
            count[c]--;
        }
        
        return true;
    }
};`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(1)',
          explanation: 'We iterate through both strings once, giving O(n) time. For lowercase English letters, the hash map has at most 26 entries, which is constant space O(1).'
        },
        pros: ['Optimal time complexity', 'Single pass through each string', 'Constant space for fixed alphabet'],
        cons: ['Slightly more code than sorting approach', 'Space becomes O(n) for arbitrary character sets']
      }
    ]
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
    solution: 'Sliding window: track last seen index per char. Maintain left pointer; when a repeat appears, move left to max(left, lastIndex+1). Update answer with window length. O(n) time.',
    solutions: [
      {
        methodName: 'slidingWindow',
        title: 'Optimal - Sliding Window with Hash Map',
        intuition: 'Use a sliding window that expands right and contracts from left when duplicates are found.',
        explanation: 'Maintain a window [left, right] and a map of character last seen indices. When we find a duplicate, move left pointer past the previous occurrence.',
        algorithm: [
          'Initialize left pointer at 0, maxLen at 0',
          'Create a map to store character -> last seen index',
          'Iterate right pointer through the string',
          'If current char is in map and its index >= left, move left to map[char] + 1',
          'Update map with current char and index',
          'Update maxLen with current window size'
        ],
        code: [
          {
            language: 'javascript',
            code: `function lengthOfLongestSubstring(s) {
  const map = new Map();
  let left = 0, maxLen = 0;
  
  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right]) && map.get(s[right]) >= left) {
      left = map.get(s[right]) + 1;
    }
    map.set(s[right], right);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}`
          },
          {
            language: 'typescript',
            code: `function lengthOfLongestSubstring(s: string): number {
  const map = new Map<string, number>();
  let left = 0, maxLen = 0;
  
  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right]) && map.get(s[right])! >= left) {
      left = map.get(s[right])! + 1;
    }
    map.set(s[right], right);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}`
          },
          {
            language: 'python',
            code: `def lengthOfLongestSubstring(s):
    char_map = {}
    left = max_len = 0
    
    for right, char in enumerate(s):
        if char in char_map and char_map[char] >= left:
            left = char_map[char] + 1
        char_map[char] = right
        max_len = max(max_len, right - left + 1)
    return max_len`
          },
          {
            language: 'java',
            code: `import java.util.HashMap;
import java.util.Map;

class Solution {
    public int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> map = new HashMap<>();
        int left = 0, maxLen = 0;
        
        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            if (map.containsKey(c) && map.get(c) >= left) {
                left = map.get(c) + 1;
            }
            map.put(c, right);
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }
}`
          },
          {
            language: 'cpp',
            code: `#include <string>
#include <unordered_map>
#include <algorithm>
using namespace std;

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_map<char, int> charMap;
        int left = 0, maxLen = 0;
        
        for (int right = 0; right < s.length(); right++) {
            if (charMap.find(s[right]) != charMap.end() && charMap[s[right]] >= left) {
                left = charMap[s[right]] + 1;
            }
            charMap[s[right]] = right;
            maxLen = max(maxLen, right - left + 1);
        }
        return maxLen;
    }
};`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(min(n, m))',
          explanation: 'Single pass through string. Hash map stores at most min(n, alphabet_size) characters.'
        },
        pros: ['Optimal time complexity', 'Single pass solution'],
        cons: ['Requires extra space for hash map']
      }
    ]
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
    solution: 'Kadane: iterate nums, keep current = max(num, current + num), best = max(best, current). O(n) time, O(1) space.',
    solutions: [
      {
        methodName: 'bruteForce',
        title: 'Brute Force - Check All Subarrays',
        intuition: 'Calculate the sum of every possible subarray and track the maximum.',
        explanation: 'For each starting position, calculate sums of all subarrays beginning at that position. Keep track of the maximum sum found.',
        algorithm: [
          'Initialize maxSum to negative infinity',
          'For each starting index i',
          'For each ending index j >= i',
          'Calculate sum of subarray from i to j',
          'Update maxSum if current sum is larger',
          'Return maxSum'
        ],
        code: [
          {
            language: 'javascript',
            code: `function maxSubArray(nums) {
  let maxSum = -Infinity;
  
  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j];
      maxSum = Math.max(maxSum, currentSum);
    }
  }
  
  return maxSum;
}`
          },
          {
            language: 'typescript',
            code: `function maxSubArray(nums: number[]): number {
  let maxSum = -Infinity;
  
  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j];
      maxSum = Math.max(maxSum, currentSum);
    }
  }
  
  return maxSum;
}`
          },
          {
            language: 'python',
            code: `def maxSubArray(nums):
    max_sum = float('-inf')
    
    for i in range(len(nums)):
        current_sum = 0
        for j in range(i, len(nums)):
            current_sum += nums[j]
            max_sum = max(max_sum, current_sum)
    
    return max_sum`
          },
          {
            language: 'java',
            code: `class Solution {
    public int maxSubArray(int[] nums) {
        int maxSum = Integer.MIN_VALUE;
        
        for (int i = 0; i < nums.length; i++) {
            int currentSum = 0;
            for (int j = i; j < nums.length; j++) {
                currentSum += nums[j];
                maxSum = Math.max(maxSum, currentSum);
            }
        }
        
        return maxSum;
    }
}`
          },
          {
            language: 'cpp',
            code: `#include <vector>
#include <algorithm>
#include <climits>
using namespace std;

class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int maxSum = INT_MIN;
        
        for (int i = 0; i < nums.size(); i++) {
            int currentSum = 0;
            for (int j = i; j < nums.size(); j++) {
                currentSum += nums[j];
                maxSum = max(maxSum, currentSum);
            }
        }
        
        return maxSum;
    }
};`
          }
        ],
        complexity: {
          time: 'O(n²)',
          space: 'O(1)',
          explanation: 'Nested loops check all possible subarrays. No extra space needed.'
        },
        pros: ['Simple and intuitive', 'Easy to understand'],
        cons: ['Very slow for large arrays', 'Not optimal']
      },
      {
        methodName: 'kadane',
        title: 'Optimal - Kadane\'s Algorithm',
        intuition: 'At each position, decide whether to extend the current subarray or start a new one.',
        explanation: 'Track the maximum sum ending at current position. If adding current element to previous sum is worse than starting fresh, start a new subarray.',
        algorithm: [
          'Initialize maxSum to first element, currentSum to first element',
          'For each element from index 1 onwards',
          'Decide: extend current subarray or start new (currentSum = max(num, currentSum + num))',
          'Update global maximum (maxSum = max(maxSum, currentSum))',
          'Return maxSum'
        ],
        code: [
          {
            language: 'javascript',
            code: `function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  
  return maxSum;
}`
          },
          {
            language: 'typescript',
            code: `function maxSubArray(nums: number[]): number {
  let maxSum = nums[0];
  let currentSum = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  
  return maxSum;
}`
          },
          {
            language: 'python',
            code: `def maxSubArray(nums):
    max_sum = current_sum = nums[0]
    
    for num in nums[1:]:
        current_sum = max(num, current_sum + num)
        max_sum = max(max_sum, current_sum)
    
    return max_sum`
          },
          {
            language: 'java',
            code: `class Solution {
    public int maxSubArray(int[] nums) {
        int maxSum = nums[0];
        int currentSum = nums[0];
        
        for (int i = 1; i < nums.length; i++) {
            currentSum = Math.max(nums[i], currentSum + nums[i]);
            maxSum = Math.max(maxSum, currentSum);
        }
        
        return maxSum;
    }
}`
          },
          {
            language: 'cpp',
            code: `#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int maxSum = nums[0];
        int currentSum = nums[0];
        
        for (int i = 1; i < nums.size(); i++) {
            currentSum = max(nums[i], currentSum + nums[i]);
            maxSum = max(maxSum, currentSum);
        }
        
        return maxSum;
    }
};`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(1)',
          explanation: 'Single pass through array. Only two variables needed for tracking sums.'
        },
        pros: ['Optimal time complexity', 'Very efficient', 'Constant space'],
        cons: ['Slightly less intuitive than brute force']
      }
    ]
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
    solution: 'Sort by start. Initialize merged with first interval; for each next interval, if it overlaps (start <= last end) merge; else push new interval. O(n log n) time.',
    solutions: [
      {
        methodName: 'sortAndMerge',
        title: 'Optimal - Sort and Merge',
        intuition: 'Sort intervals by start time, then merge overlapping ones in a single pass.',
        explanation: 'After sorting, overlapping intervals will be adjacent. We can merge them by comparing each interval with the last merged interval.',
        algorithm: [
          'Sort intervals by start time',
          'Initialize result with first interval',
          'For each remaining interval, if it overlaps with last merged interval, merge them',
          'Otherwise, add it as a new interval to result'
        ],
        code: [
          {
            language: 'javascript',
            code: `function merge(intervals) {
  if (intervals.length <= 1) return intervals;
  
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [intervals[0]];
  
  for (let i = 1; i < intervals.length; i++) {
    const last = merged[merged.length - 1];
    const current = intervals[i];
    
    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
      merged.push(current);
    }
  }
  
  return merged;
}`
          },
          {
            language: 'typescript',
            code: `function merge(intervals: number[][]): number[][] {
  if (intervals.length <= 1) return intervals;
  
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [intervals[0]];
  
  for (let i = 1; i < intervals.length; i++) {
    const last = merged[merged.length - 1];
    const current = intervals[i];
    
    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
      merged.push(current);
    }
  }
  
  return merged;
}`
          },
          {
            language: 'python',
            code: `def merge(intervals):
    if len(intervals) <= 1:
        return intervals
    
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]
    
    for current in intervals[1:]:
        last = merged[-1]
        
        if current[0] <= last[1]:
            last[1] = max(last[1], current[1])
        else:
            merged.append(current)
    
    return merged`
          },
          {
            language: 'java',
            code: `import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {
    public int[][] merge(int[][] intervals) {
        if (intervals.length <= 1) return intervals;
        
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
        List<int[]> merged = new ArrayList<>();
        merged.add(intervals[0]);
        
        for (int i = 1; i < intervals.length; i++) {
            int[] last = merged.get(merged.size() - 1);
            int[] current = intervals[i];
            
            if (current[0] <= last[1]) {
                last[1] = Math.max(last[1], current[1]);
            } else {
                merged.add(current);
            }
        }
        
        return merged.toArray(new int[merged.size()][]);
    }
}`
          },
          {
            language: 'cpp',
            code: `#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        if (intervals.size() <= 1) return intervals;
        
        sort(intervals.begin(), intervals.end());
        vector<vector<int>> merged;
        merged.push_back(intervals[0]);
        
        for (int i = 1; i < intervals.size(); i++) {
            vector<int>& last = merged.back();
            vector<int>& current = intervals[i];
            
            if (current[0] <= last[1]) {
                last[1] = max(last[1], current[1]);
            } else {
                merged.push_back(current);
            }
        }
        
        return merged;
    }
};`
          }
        ],
        complexity: {
          time: 'O(n log n)',
          space: 'O(n)',
          explanation: 'Sorting takes O(n log n). Merging is O(n). Result array takes O(n) space.'
        },
        pros: ['Optimal solution', 'Clean and efficient'],
        cons: ['Requires sorting']
      }
    ]
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
    solution: 'Iterative binary search: while (lo <= hi) compute mid, compare nums[mid] with target, move bounds accordingly. O(log n) time.',
    solutions: [
      {
        methodName: 'binarySearch',
        title: 'Optimal - Binary Search',
        intuition: 'Since array is sorted, repeatedly divide search space in half by comparing middle element with target.',
        explanation: 'Start with left and right pointers at array bounds. Calculate middle index and compare with target. Adjust search bounds based on comparison.',
        algorithm: [
          'Initialize left = 0, right = nums.length - 1',
          'While left <= right',
          'Calculate mid = left + Math.floor((right - left) / 2)',
          'If nums[mid] == target, return mid',
          'If nums[mid] < target, search right half (left = mid + 1)',
          'Otherwise search left half (right = mid - 1)'
        ],
        code: [
          {
            language: 'javascript',
            code: `function search(nums, target) {
  let left = 0, right = nums.length - 1;
  
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return -1;
}`
          },
          {
            language: 'typescript',
            code: `function search(nums: number[], target: number): number {
  let left = 0, right = nums.length - 1;
  
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return -1;
}`
          },
          {
            language: 'python',
            code: `def search(nums, target):
    left, right = 0, len(nums) - 1
    
    while left <= right:
        mid = left + (right - left) // 2
        
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1`
          },
          {
            language: 'java',
            code: `class Solution {
    public int search(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return -1;
    }
}`
          },
          {
            language: 'cpp',
            code: `#include <vector>
using namespace std;

class Solution {
public:
    int search(vector<int>& nums, int target) {
        int left = 0, right = nums.size() - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return -1;
    }
};`
          }
        ],
        complexity: {
          time: 'O(log n)',
          space: 'O(1)',
          explanation: 'Search space halves each iteration. Only constant extra space needed.'
        },
        pros: ['Optimal for sorted arrays', 'Very fast', 'Constant space'],
        cons: ['Only works on sorted arrays']
      }
    ]
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
    solution: 'Use a queue initialized with root. While queue not empty, iterate current size to collect a level, enqueue children. O(n) time, O(n) space.',
    solutions: [
      {
        methodName: 'bfs',
        title: 'Optimal - BFS with Queue',
        intuition: 'Use breadth-first search to visit nodes level by level.',
        explanation: 'Initialize queue with root. For each level, process all nodes currently in queue, collecting their values and adding their children for the next level.',
        algorithm: [
          'If root is null, return empty array',
          'Initialize result array and queue with root',
          'While queue is not empty, get current level size',
          'Process all nodes in current level, collect values and enqueue children',
          'Add level array to result'
        ],
        code: [
          {
            language: 'javascript',
            code: `function levelOrder(root) {
  if (!root) return [];
  
  const result = [];
  const queue = [root];
  
  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];
    
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.val);
      
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    
    result.push(currentLevel);
  }
  
  return result;
}`
          },
          {
            language: 'typescript',
            code: `function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  
  const result: number[][] = [];
  const queue: TreeNode[] = [root];
  
  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel: number[] = [];
    
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;
      currentLevel.push(node.val);
      
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    
    result.push(currentLevel);
  }
  
  return result;
}`
          },
          {
            language: 'python',
            code: `def levelOrder(root):
    if not root:
        return []
    
    result = []
    queue = [root]
    
    while queue:
        level_size = len(queue)
        current_level = []
        
        for _ in range(level_size):
            node = queue.pop(0)
            current_level.append(node.val)
            
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        result.append(current_level)
    
    return result`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(n)',
          explanation: 'Visit each node once. Queue can hold up to n/2 nodes at the last level.'
        },
        pros: ['Optimal solution', 'Natural level-by-level processing'],
        cons: ['Requires queue data structure']
      }
    ]
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
    solution: 'Maintain deque of indices with decreasing values. Remove out-of-window indices from front; before pushing new index, pop smaller values from back. Front holds max. O(n) time, O(k) space.',
    solutions: [
      {
        methodName: 'deque',
        title: 'Optimal - Monotonic Deque',
        intuition: 'Use a deque to maintain indices of potential maximums in decreasing order.',
        explanation: 'Store indices in deque such that values are in decreasing order. Remove indices outside current window from front. Remove smaller values from back before adding new index.',
        algorithm: [
          'Initialize deque and result array',
          'For each element, remove out-of-window indices from deque front',
          'Remove indices with smaller values from deque back',
          'Add current index to deque back',
          'If window is full, add front element value to result'
        ],
        code: [
          {
            language: 'javascript',
            code: `function maxSlidingWindow(nums, k) {
  const result = [];
  const deque = [];
  
  for (let i = 0; i < nums.length; i++) {
    // Remove out-of-window indices
    while (deque.length && deque[0] < i - k + 1) {
      deque.shift();
    }
    
    // Remove smaller values
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }
    
    deque.push(i);
    
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }
  
  return result;
}`
          },
          {
            language: 'typescript',
            code: `function maxSlidingWindow(nums: number[], k: number): number[] {
  const result: number[] = [];
  const deque: number[] = [];
  
  for (let i = 0; i < nums.length; i++) {
    // Remove out-of-window indices
    while (deque.length && deque[0] < i - k + 1) {
      deque.shift();
    }
    
    // Remove smaller values
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }
    
    deque.push(i);
    
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }
  
  return result;
}`
          },
          {
            language: 'python',
            code: `def maxSlidingWindow(nums, k):
    from collections import deque
    result = []
    dq = deque()
    
    for i in range(len(nums)):
        # Remove out-of-window indices
        while dq and dq[0] < i - k + 1:
            dq.popleft()
        
        # Remove smaller values
        while dq and nums[dq[-1]] < nums[i]:
            dq.pop()
        
        dq.append(i)
        
        if i >= k - 1:
            result.append(nums[dq[0]])
    
    return result`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(k)',
          explanation: 'Each element added and removed from deque at most once. Deque holds at most k elements.'
        },
        pros: ['Optimal time complexity', 'Efficient for large arrays'],
        cons: ['More complex than naive approach']
      }
    ]
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
    solution: 'Merge from the end using three pointers. Compare elements and place larger one at the end of nums1.',
    solutions: [
      {
        methodName: 'twoPointers',
        title: 'Optimal - Merge from End',
        intuition: 'Merge from the end to avoid overwriting elements in nums1.',
        explanation: 'Use three pointers: one for last element of nums1, one for last of nums2, and one for last position in merged array. Place larger element at end and move pointers.',
        algorithm: [
          'Initialize pointers: p1 = m-1, p2 = n-1, p = m+n-1',
          'While both arrays have elements, compare and place larger at p',
          'Copy remaining elements from nums2 if any',
          'nums1 already has its remaining elements in place'
        ],
        code: [
          {
            language: 'javascript',
            code: `function merge(nums1, m, nums2, n) {
  let p1 = m - 1, p2 = n - 1, p = m + n - 1;
  
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p--] = nums1[p1--];
    } else {
      nums1[p--] = nums2[p2--];
    }
  }
  
  while (p2 >= 0) {
    nums1[p--] = nums2[p2--];
  }
}`
          },
          {
            language: 'typescript',
            code: `function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1, p2 = n - 1, p = m + n - 1;
  
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p--] = nums1[p1--];
    } else {
      nums1[p--] = nums2[p2--];
    }
  }
  
  while (p2 >= 0) {
    nums1[p--] = nums2[p2--];
  }
}`
          },
          {
            language: 'python',
            code: `def merge(nums1, m, nums2, n):
    p1, p2, p = m - 1, n - 1, m + n - 1
    
    while p1 >= 0 and p2 >= 0:
        if nums1[p1] > nums2[p2]:
            nums1[p] = nums1[p1]
            p1 -= 1
        else:
            nums1[p] = nums2[p2]
            p2 -= 1
        p -= 1
    
    while p2 >= 0:
        nums1[p] = nums2[p2]
        p2 -= 1
        p -= 1`
          }
        ],
        complexity: {
          time: 'O(m + n)',
          space: 'O(1)',
          explanation: 'Single pass through both arrays. In-place merge with no extra space.'
        },
        pros: ['Optimal solution', 'In-place merge', 'No extra space needed'],
        cons: ['Modifies nums1 in place']
      }
    ]
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
    solution: 'Use two pointers. When nums[i] != val, copy to nums[k++]. Return k.',
    solutions: [
      {
        methodName: 'twoPointers',
        title: 'Optimal - Two Pointers',
        intuition: 'Use one pointer to read and another to write non-target elements.',
        explanation: 'Iterate through array with read pointer. When element is not equal to val, write it at write pointer position and increment write pointer.',
        algorithm: [
          'Initialize write pointer k = 0',
          'For each element at index i',
          'If nums[i] != val, copy it to nums[k] and increment k',
          'Return k (number of elements not equal to val)'
        ],
        code: [
          {
            language: 'javascript',
            code: `function removeElement(nums, val) {
  let k = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k++] = nums[i];
    }
  }
  
  return k;
}`
          },
          {
            language: 'typescript',
            code: `function removeElement(nums: number[], val: number): number {
  let k = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k++] = nums[i];
    }
  }
  
  return k;
}`
          },
          {
            language: 'python',
            code: `def removeElement(nums, val):
    k = 0
    
    for i in range(len(nums)):
        if nums[i] != val:
            nums[k] = nums[i]
            k += 1
    
    return k`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(1)',
          explanation: 'Single pass through array. In-place modification with no extra space.'
        },
        pros: ['Optimal solution', 'Simple and efficient', 'In-place modification'],
        cons: ['Modifies input array']
      }
    ]
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
    solution: 'Keep pointer k for unique position. If nums[i] != nums[k-1], nums[k++] = nums[i].',
    solutions: [
      {
        methodName: 'twoPointers',
        title: 'Optimal - Two Pointers',
        intuition: 'Since array is sorted, duplicates are adjacent. Use write pointer to track position for next unique element.',
        explanation: 'Maintain a write pointer k. For each element, if it differs from the last unique element (nums[k-1]), write it at position k.',
        algorithm: [
          'Initialize write pointer k = 1 (first element is always unique)',
          'For each element from index 1 onwards',
          'If nums[i] != nums[k-1], write nums[i] at nums[k] and increment k',
          'Return k (count of unique elements)'
        ],
        code: [
          {
            language: 'javascript',
            code: `function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k++] = nums[i];
    }
  }
  
  return k;
}`
          },
          {
            language: 'typescript',
            code: `function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;
  
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k++] = nums[i];
    }
  }
  
  return k;
}`
          },
          {
            language: 'python',
            code: `def removeDuplicates(nums):
    if not nums:
        return 0
    
    k = 1
    for i in range(1, len(nums)):
        if nums[i] != nums[k - 1]:
            nums[k] = nums[i]
            k += 1
    
    return k`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(1)',
          explanation: 'Single pass through array. In-place modification with no extra space.'
        },
        pros: ['Optimal solution', 'In-place', 'Simple logic'],
        cons: ['Modifies input array']
      }
    ]
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
    solution: 'Use Boyer-Moore voting: track candidate and count. When count=0, pick new candidate.',
    solutions: [
      {
        methodName: 'boyerMoore',
        title: 'Optimal - Boyer-Moore Voting',
        intuition: 'The majority element appears more than n/2 times, so it will survive a voting process where different elements cancel each other out.',
        explanation: 'Track a candidate and count. When count reaches 0, pick new candidate. The majority element will be the final candidate.',
        algorithm: [
          'Initialize candidate and count = 0',
          'For each element, if count is 0, set element as candidate',
          'If element equals candidate, increment count, else decrement',
          'Return candidate'
        ],
        code: [
          {
            language: 'javascript',
            code: `function majorityElement(nums) {
  let candidate = null, count = 0;
  
  for (const num of nums) {
    if (count === 0) candidate = num;
    count += (num === candidate) ? 1 : -1;
  }
  
  return candidate;
}`
          },
          {
            language: 'typescript',
            code: `function majorityElement(nums: number[]): number {
  let candidate = 0, count = 0;
  
  for (const num of nums) {
    if (count === 0) candidate = num;
    count += (num === candidate) ? 1 : -1;
  }
  
  return candidate;
}`
          },
          {
            language: 'python',
            code: `def majorityElement(nums):
    candidate, count = None, 0
    
    for num in nums:
        if count == 0:
            candidate = num
        count += 1 if num == candidate else -1
    
    return candidate`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(1)',
          explanation: 'Single pass through array. Only two variables needed.'
        },
        pros: ['Optimal solution', 'Constant space', 'Elegant algorithm'],
        cons: ['Assumes majority element exists']
      }
    ]
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
    solution: 'Track minPrice and maxProfit. For each price, update maxProfit = max(maxProfit, price - minPrice).',
    solutions: [
      {
        methodName: 'onePass',
        title: 'Optimal - Track Minimum Price',
        intuition: 'Track the minimum price seen so far and calculate profit if selling at current price.',
        explanation: 'Keep track of minimum price and maximum profit. For each price, calculate potential profit and update maximum.',
        algorithm: [
          'Initialize minPrice to infinity, maxProfit to 0',
          'For each price, update minPrice if current price is lower',
          'Calculate profit = price - minPrice',
          'Update maxProfit if profit is higher'
        ],
        code: [
          {
            language: 'javascript',
            code: `function maxProfit(prices) {
  let minPrice = Infinity, maxProfit = 0;
  
  for (const price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }
  
  return maxProfit;
}`
          },
          {
            language: 'typescript',
            code: `function maxProfit(prices: number[]): number {
  let minPrice = Infinity, maxProfit = 0;
  
  for (const price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }
  
  return maxProfit;
}`
          },
          {
            language: 'python',
            code: `def maxProfit(prices):
    min_price = float('inf')
    max_profit = 0
    
    for price in prices:
        min_price = min(min_price, price)
        max_profit = max(max_profit, price - min_price)
    
    return max_profit`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(1)',
          explanation: 'Single pass. Only two variables needed.'
        },
        pros: ['Optimal', 'Simple', 'Constant space'],
        cons: ['None']
      }
    ]
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
    solution: 'Map roman chars to values. Iterate string, if val[i] < val[i+1], subtract else add.',
    solutions: [
      {
        methodName: 'hashMap',
        title: 'Optimal - Hash Map',
        intuition: 'Use a map for roman values. If current value is less than next, subtract it (e.g., IV = 4).',
        explanation: 'Create a map of roman characters to values. Iterate through string, comparing each character with the next.',
        algorithm: [
          'Create map: I=1, V=5, X=10, L=50, C=100, D=500, M=1000',
          'Initialize result = 0',
          'For each character, if its value < next value, subtract it',
          'Otherwise add it to result'
        ],
        code: [
          {
            language: 'javascript',
            code: `function romanToInt(s) {
  const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;
  
  for (let i = 0; i < s.length; i++) {
    const current = map[s[i]];
    const next = map[s[i + 1]];
    
    if (next && current < next) {
      result -= current;
    } else {
      result += current;
    }
  }
  
  return result;
}`
          },
          {
            language: 'typescript',
            code: `function romanToInt(s: string): number {
  const map: Record<string, number> = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;
  
  for (let i = 0; i < s.length; i++) {
    const current = map[s[i]];
    const next = map[s[i + 1]];
    
    if (next && current < next) {
      result -= current;
    } else {
      result += current;
    }
  }
  
  return result;
}`
          },
          {
            language: 'python',
            code: `def romanToInt(s):
    roman_map = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
    result = 0
    
    for i in range(len(s)):
        current = roman_map[s[i]]
        next_val = roman_map[s[i + 1]] if i + 1 < len(s) else 0
        
        if current < next_val:
            result -= current
        else:
            result += current
    
    return result`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(1)',
          explanation: 'Single pass. Fixed-size map (7 entries).'
        },
        pros: ['Optimal', 'Simple logic'],
        cons: ['None']
      }
    ]
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
    solution: 'Trim string, split by space, return length of last element.',
    solutions: [
      {
        methodName: 'reverseIteration',
        title: 'Optimal - Reverse Iteration',
        intuition: 'Iterate from end, skip trailing spaces, count characters until next space.',
        explanation: 'Start from end of string, skip spaces, then count characters until we hit another space or start of string.',
        algorithm: [
          'Start from end of string',
          'Skip trailing spaces',
          'Count characters until we hit a space or reach start',
          'Return count'
        ],
        code: [
          {
            language: 'javascript',
            code: `function lengthOfLastWord(s) {
  let length = 0, i = s.length - 1;
  
  while (i >= 0 && s[i] === ' ') i--;
  while (i >= 0 && s[i] !== ' ') {
    length++;
    i--;
  }
  
  return length;
}`
          },
          {
            language: 'typescript',
            code: `function lengthOfLastWord(s: string): number {
  let length = 0, i = s.length - 1;
  
  while (i >= 0 && s[i] === ' ') i--;
  while (i >= 0 && s[i] !== ' ') {
    length++;
    i--;
  }
  
  return length;
}`
          },
          {
            language: 'python',
            code: `def lengthOfLastWord(s):
    length = 0
    i = len(s) - 1
    
    while i >= 0 and s[i] == ' ':
        i -= 1
    while i >= 0 and s[i] != ' ':
        length += 1
        i -= 1
    
    return length`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(1)',
          explanation: 'Single pass from end. No extra space.'
        },
        pros: ['Optimal', 'No string operations needed'],
        cons: ['None']
      }
    ]
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
    solution: 'Use first string as prefix. Compare with each string, trim prefix until match.',
    solutions: [
      {
        methodName: 'verticalScanning',
        title: 'Optimal - Vertical Scanning',
        intuition: 'Compare characters at same position across all strings.',
        explanation: 'For each character position, check if all strings have the same character at that position.',
        algorithm: [
          'If array is empty, return empty string',
          'For each character position i in first string',
          'Check if all strings have same character at position i',
          'If not, return substring up to i',
          'If all match, continue to next position'
        ],
        code: [
          {
            language: 'javascript',
            code: `function longestCommonPrefix(strs) {
  if (!strs.length) return '';
  
  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== char) {
        return strs[0].substring(0, i);
      }
    }
  }
  
  return strs[0];
}`
          },
          {
            language: 'typescript',
            code: `function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) return '';
  
  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== char) {
        return strs[0].substring(0, i);
      }
    }
  }
  
  return strs[0];
}`
          },
          {
            language: 'python',
            code: `def longestCommonPrefix(strs):
    if not strs:
        return ''
    
    for i in range(len(strs[0])):
        char = strs[0][i]
        for j in range(1, len(strs)):
            if i >= len(strs[j]) or strs[j][i] != char:
                return strs[0][:i]
    
    return strs[0]`
          }
        ],
        complexity: {
          time: 'O(S)',
          space: 'O(1)',
          explanation: 'S is sum of all characters. Constant extra space.'
        },
        pros: ['Optimal', 'Early termination'],
        cons: ['None']
      }
    ]
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
    solution: 'Maintain write index k. For each nums[i], keep it if k < 2 or nums[i] != nums[k-2]. O(n) time, O(1) space.',
    solutions: [
      {
        methodName: 'twoPointers',
        title: 'Optimal - Two Pointers',
        intuition: 'We need to allow at most 2 occurrences of each number. We can check against the element 2 positions back.',
        explanation: 'Use a write pointer k. For each element at index i, if it is different from the element at k-2 (or if k < 2), it means we haven\'t used this number twice yet, so we keep it.',
        algorithm: [
          'Initialize write pointer k = 0',
          'Iterate through each element num in nums',
          'If k < 2 OR num > nums[k-2]',
          '  Set nums[k] = num',
          '  Increment k',
          'Return k'
        ],
        code: [
          {
            language: 'javascript',
            code: `function removeDuplicates(nums) {
  let k = 0;
  
  for (const num of nums) {
    if (k < 2 || num > nums[k - 2]) {
      nums[k++] = num;
    }
  }
  
  return k;
}`
          },
          {
            language: 'typescript',
            code: `function removeDuplicates(nums: number[]): number {
  let k = 0;
  
  for (const num of nums) {
    if (k < 2 || num > nums[k - 2]) {
      nums[k++] = num;
    }
  }
  
  return k;
}`
          },
          {
            language: 'python',
            code: `def removeDuplicates(nums):
    k = 0
    
    for num in nums:
        if k < 2 or num > nums[k - 2]:
            nums[k] = num
            k += 1
            
    return k`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(1)',
          explanation: 'Single pass through array. In-place modification.'
        },
        pros: ['Optimal', 'In-place', 'Works for general "at most K duplicates" case'],
        cons: ['Modifies input array']
      }
    ]
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
    solution: 'Greedy: add prices[i+1] - prices[i] whenever positive. O(n) time, O(1) space.',
    solutions: [
      {
        methodName: 'greedy',
        title: 'Optimal - Greedy Approach',
        intuition: 'We can capture every upward price movement. The sum of daily profits is equal to the profit of buying at the start of an ascent and selling at the peak.',
        explanation: 'Iterate through the array and add every positive difference between consecutive days to the total profit.',
        algorithm: [
          'Initialize maxProfit = 0',
          'Iterate through prices starting from index 1',
          'If current price is greater than previous price, add the difference to maxProfit',
          'Return maxProfit'
        ],
        code: [
          {
            language: 'javascript',
            code: `function maxProfit(prices) {
  let maxProfit = 0;
  
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }
  
  return maxProfit;
}`
          },
          {
            language: 'typescript',
            code: `function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }
  
  return maxProfit;
}`
          },
          {
            language: 'python',
            code: `def maxProfit(prices):
    max_profit = 0
    
    for i in range(1, len(prices)):
        if prices[i] > prices[i - 1]:
            max_profit += prices[i] - prices[i - 1]
            
    return max_profit`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(1)',
          explanation: 'Single pass through array. No extra space.'
        },
        pros: ['Optimal', 'Simple logic', 'Matches intuition of capturing all gains'],
        cons: ['None']
      }
    ]
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
    solution: 'Maintain maxReach; if i > maxReach return false; update maxReach = max(maxReach, i + nums[i]). True if loop ends.',
    solutions: [
      {
        methodName: 'greedy',
        title: 'Optimal - Greedy Approach',
        intuition: 'Track the furthest reachable index. As long as we are at a reachable index, we can update our maximum reach.',
        explanation: 'Iterate through the array. For each index, check if it is reachable (i <= maxReach). If so, update maxReach with i + nums[i]. If at any point maxReach covers the last index, return true.',
        algorithm: [
          'Initialize maxReach = 0',
          'Iterate through array indices i',
          'If i > maxReach, return false (unreachable)',
          'Update maxReach = max(maxReach, i + nums[i])',
          'If maxReach >= last index, return true',
          'Return true after loop (if constraints guarantee start is reachable)'
        ],
        code: [
          {
            language: 'javascript',
            code: `function canJump(nums) {
  let maxReach = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, i + nums[i]);
    if (maxReach >= nums.length - 1) return true;
  }
  
  return true;
}`
          },
          {
            language: 'typescript',
            code: `function canJump(nums: number[]): boolean {
  let maxReach = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, i + nums[i]);
    if (maxReach >= nums.length - 1) return true;
  }
  
  return true;
}`
          },
          {
            language: 'python',
            code: `def canJump(nums):
    max_reach = 0
    
    for i in range(len(nums)):
        if i > max_reach:
            return False
        max_reach = max(max_reach, i + nums[i])
        if max_reach >= len(nums) - 1:
            return True
            
    return True`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(1)',
          explanation: 'Single pass through array. No extra space.'
        },
        pros: ['Optimal', 'Simple logic', 'Early termination'],
        cons: ['None']
      }
    ]
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
    solution: 'Greedy BFS over indices: maintain currentEnd and farthest; when i reaches currentEnd, increment jumps and set currentEnd = farthest.',
    solutions: [
      {
        methodName: 'greedyBFS',
        title: 'Optimal - Greedy BFS',
        intuition: 'We can think of this as a Breadth-First Search where each "level" represents the range of indices reachable with a certain number of jumps.',
        explanation: 'Iterate through the array while maintaining the current range of indices we can reach (currentEnd) and the furthest we can reach from the current range (farthest). When we reach the end of the current range, we must make a jump, so we increment jumps and update currentEnd to farthest.',
        algorithm: [
          'Initialize jumps = 0, currentEnd = 0, farthest = 0',
          'Iterate from i = 0 to n - 2 (we don\'t need to jump from the last element)',
          'Update farthest = max(farthest, i + nums[i])',
          'If i reaches currentEnd:',
          '  Increment jumps',
          '  Update currentEnd = farthest',
          'Return jumps'
        ],
        code: [
          {
            language: 'javascript',
            code: `function jump(nums) {
  let jumps = 0, currentEnd = 0, farthest = 0;
  
  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;
    }
  }
  
  return jumps;
}`
          },
          {
            language: 'typescript',
            code: `function jump(nums: number[]): number {
  let jumps = 0, currentEnd = 0, farthest = 0;
  
  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;
    }
  }
  
  return jumps;
}`
          },
          {
            language: 'python',
            code: `def jump(nums):
    jumps = 0
    current_end = 0
    farthest = 0
    
    for i in range(len(nums) - 1):
        farthest = max(farthest, i + nums[i])
        if i == current_end:
            jumps += 1
            current_end = farthest
            
    return jumps`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(1)',
          explanation: 'Single pass through array. No extra space.'
        },
        pros: ['Optimal', 'Implicit BFS is very efficient'],
        cons: ['None']
      }
    ]
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
    solution: 'Either sort descending and find first index where citations[i] < i+1, or use counting buckets to run in O(n).',
    solutions: [
      {
        methodName: 'sorting',
        title: 'Optimal - Sorting',
        intuition: 'Sort citations to easily find how many papers have at least h citations.',
        explanation: 'Sort citations in descending order. The H-index is the largest h such that the first h papers have at least h citations. Iterate through sorted array: if citations[i] > i, it contributes to H-index.',
        algorithm: [
          'Sort citations in descending order',
          'Initialize h = 0',
          'Iterate through sorted citations',
          'If citations[i] > i, increment h',
          'Else break',
          'Return h'
        ],
        code: [
          {
            language: 'javascript',
            code: `function hIndex(citations) {
  citations.sort((a, b) => b - a);
  let h = 0;
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] > i) {
      h++;
    } else {
      break;
    }
  }
  return h;
}`
          },
          {
            language: 'typescript',
            code: `function hIndex(citations: number[]): number {
  citations.sort((a, b) => b - a);
  let h = 0;
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] > i) {
      h++;
    } else {
      break;
    }
  }
  return h;
}`
          },
          {
            language: 'python',
            code: `def hIndex(citations):
    citations.sort(reverse=True)
    h = 0
    for i, c in enumerate(citations):
        if c > i:
            h += 1
        else:
            break
    return h`
          }
        ],
        complexity: {
          time: 'O(n log n)',
          space: 'O(1)',
          explanation: 'Sorting takes O(n log n). Space depends on sort implementation.'
        },
        pros: ['Simple to understand', 'Standard approach'],
        cons: ['O(n log n) time due to sorting']
      }
    ]
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
    solution: 'Store values in array and map value->index. Remove by swapping with last element then pop. getRandom picks random index.',
    solutions: [
      {
        methodName: 'mapAndArray',
        title: 'Optimal - HashMap + Array',
        intuition: 'We need O(1) for insert, remove, and getRandom. Array gives O(1) getRandom and insert (at end). Map gives O(1) lookup. To remove in O(1) from array, swap with last element.',
        explanation: 'Maintain an array of values and a hash map mapping each value to its index in the array. \n1. Insert: Add to end of array, update map. \n2. Remove: Find index from map, swap with last element in array, pop last element, update map for the swapped element. \n3. GetRandom: Pick random index from array.',
        algorithm: [
          'Initialize: list for values, map for value->index',
          'Insert(val): if in map, return false. Else append to list, map val to index.',
          'Remove(val): if not in map, return false. \n   - Get index of val\n   - Swap val with last element in list\n   - Update index of swapped element in map\n   - Pop last element from list and map\n   - Return true',
          'GetRandom(): Return list[random_index]'
        ],
        code: [
          {
            language: 'javascript',
            code: `class RandomizedSet {
  constructor() {
    this.map = new Map();
    this.list = [];
  }
  
  insert(val) {
    if (this.map.has(val)) return false;
    this.map.set(val, this.list.length);
    this.list.push(val);
    return true;
  }
  
  remove(val) {
    if (!this.map.has(val)) return false;
    const index = this.map.get(val);
    const lastElement = this.list[this.list.length - 1];
    
    this.list[index] = lastElement;
    this.map.set(lastElement, index);
    
    this.list.pop();
    this.map.delete(val);
    
    return true;
  }
  
  getRandom() {
    const randomIndex = Math.floor(Math.random() * this.list.length);
    return this.list[randomIndex];
  }
}`
          },
          {
            language: 'typescript',
            code: `class RandomizedSet {
  private map: Map<number, number>;
  private list: number[];

  constructor() {
    this.map = new Map();
    this.list = [];
  }
  
  insert(val: number): boolean {
    if (this.map.has(val)) return false;
    this.map.set(val, this.list.length);
    this.list.push(val);
    return true;
  }
  
  remove(val: number): boolean {
    if (!this.map.has(val)) return false;
    const index = this.map.get(val)!;
    const lastElement = this.list[this.list.length - 1];
    
    this.list[index] = lastElement;
    this.map.set(lastElement, index);
    
    this.list.pop();
    this.map.delete(val);
    
    return true;
  }
  
  getRandom(): number {
    const randomIndex = Math.floor(Math.random() * this.list.length);
    return this.list[randomIndex];
  }
}`
          },
          {
            language: 'python',
            code: `import random

class RandomizedSet:
    def __init__(self):
        self.map = {}
        self.list = []

    def insert(self, val: int) -> bool:
        if val in self.map:
            return False
        self.map[val] = len(self.list)
        self.list.append(val)
        return True

    def remove(self, val: int) -> bool:
        if val not in self.map:
            return False
        index = self.map[val]
        last_element = self.list[-1]
        
        self.list[index] = last_element
        self.map[last_element] = index
        
        self.list.pop()
        del self.map[val]
        return True

    def getRandom(self) -> int:
        return random.choice(self.list)`
          }
        ],
        complexity: {
          time: 'O(1)',
          space: 'O(n)',
          explanation: 'All operations allow average O(1) time. Space is O(n) to store elements.'
        },
        pros: ['Average O(1) time for all steps', 'Can choose random element uniformly'],
        cons: ['O(n) space']
      }
    ]
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
    solution: 'If total gas < total cost return -1. Track tank and start; when tank < 0 reset start = i+1 and tank = 0.',
    solutions: [
      {
        methodName: 'greedy',
        title: 'Optimal - Greedy Approach',
        intuition: 'If total gas is less than total cost, it\'s impossible. Otherwise, a solution exists. We can greedily find the starting point.',
        explanation: '1. Check if total gas < total cost. If so, return -1. \n2. Iterate through stations. Maintain `totalTank` (start assumed to be 0 for now) and `currTank`. \n3. If `currTank` drops below 0, it means we can\'t reach current station from standard `start`. So resetting appropriate starting candidate to `i + 1` and `currTank` to 0. \n4. The valid start index will be the one that survives.',
        algorithm: [
          'Initialize totalGas, totalCost, currTank, startStation = 0',
          'Iterate through stations from i = 0 to n-1',
          'Add gas[i] to totals, subtract cost[i] from totals',
          'Add gas[i] - cost[i] to currTank',
          'If currTank < 0: reset startStation = i + 1, currTank = 0',
          'If totalGas < totalCost return -1, else return startStation'
        ],
        code: [
          {
            language: 'javascript',
            code: `function canCompleteCircuit(gas, cost) {
  let totalGas = 0, totalCost = 0;
  let currTank = 0, startStation = 0;
  
  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i];
    totalCost += cost[i];
    currTank += gas[i] - cost[i];
    
    if (currTank < 0) {
      startStation = i + 1;
      currTank = 0;
    }
  }
  
  return totalGas < totalCost ? -1 : startStation;
}`
          },
          {
            language: 'typescript',
            code: `function canCompleteCircuit(gas: number[], cost: number[]): number {
  let totalGas = 0, totalCost = 0;
  let currTank = 0, startStation = 0;
  
  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i];
    totalCost += cost[i];
    currTank += gas[i] - cost[i];
    
    if (currTank < 0) {
      startStation = i + 1;
      currTank = 0;
    }
  }
  
  return totalGas < totalCost ? -1 : startStation;
}`
          },
          {
            language: 'python',
            code: `def canCompleteCircuit(gas, cost):
    if sum(gas) < sum(cost):
        return -1
    
    curr_tank = 0
    start_station = 0
    
    for i in range(len(gas)):
        curr_tank += gas[i] - cost[i]
        if curr_tank < 0:
            start_station = i + 1
            curr_tank = 0
            
    return start_station`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(1)',
          explanation: 'Single pass through arrays. Constant space.'
        },
        pros: ['Optimal', 'One pass'],
        cons: ['None']
      }
    ]
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
    solution: 'Left pass ensure higher than left; right pass ensure higher than right; take max of both directions per child and sum.',
    solutions: [
      {
        methodName: 'twoPassGreedy',
        title: 'Optimal - Two-Pass Greedy',
        intuition: 'We can satisfy the condition "children with higher rating get more candies than neighbors" by handling left and right neighbors separately, then combining.',
        explanation: '1. Initialize all candies to 1.\n2. Left-to-Right pass: If rating[i] > rating[i-1], ensure candies[i] > candies[i-1] (set to candies[i-1] + 1).\n3. Right-to-Left pass: If rating[i] > rating[i+1], ensure candies[i] > candies[i+1] (set to max(candies[i], candies[i+1] + 1)).\n4. Sum up all candies.',
        algorithm: [
          'Initialize candies array of size n with all 1s',
          'Left pass: iterate from 1 to n-1. If ratings[i] > ratings[i-1], candies[i] = candies[i-1] + 1',
          'Right pass: iterate from n-2 to 0. If ratings[i] > ratings[i+1], candies[i] = max(candies[i], candies[i+1] + 1)',
          'Return sum of candies array'
        ],
        code: [
          {
            language: 'javascript',
            code: `function candy(ratings) {
  const n = ratings.length;
  const candies = new Array(n).fill(1);
  
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }
  
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }
  
  return candies.reduce((a, b) => a + b, 0);
}`
          },
          {
            language: 'typescript',
            code: `function candy(ratings: number[]): number {
  const n = ratings.length;
  const candies = new Array(n).fill(1);
  
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }
  
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }
  
  return candies.reduce((a, b) => a + b, 0);
}`
          },
          {
            language: 'python',
            code: `def candy(ratings):
    n = len(ratings)
    candies = [1] * n
    
    for i in range(1, n):
        if ratings[i] > ratings[i - 1]:
            candies[i] = candies[i - 1] + 1
            
    for i in range(n - 2, -1, -1):
        if ratings[i] > ratings[i + 1]:
            candies[i] = max(candies[i], candies[i + 1] + 1)
            
    return sum(candies)`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(n)',
          explanation: 'Two passes through the array. O(n) space for candies array.'
        },
        pros: ['Optimal time complexity', 'Easy to understand two-pass logic'],
        cons: ['O(n) space']
      }
    ]
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
    solution: 'Two pointers with leftMax/rightMax; move side with smaller max and accumulate trapped water. O(n) time, O(1) space.',
    solutions: [
      {
        methodName: 'twoPointers',
        title: 'Optimal - Two Pointers',
        intuition: 'Water trapped at any position is determined by the minimum of the maximum heights to its left and right.',
        explanation: 'Use two pointers (left and right). Maintain leftMax and rightMax. Move the pointer with the smaller height. If left height is smaller, water trapped is leftMax - height[left] (if positive). Otherwise same logic for right.',
        algorithm: [
          'Initialize left=0, right=n-1, leftMax=0, rightMax=0, result=0',
          'While left < right:',
          '  If height[left] < height[right]:',
          '    If height[left] >= leftMax: update leftMax',
          '    Else: result += leftMax - height[left]',
          '    left++',
          '  Else:',
          '    If height[right] >= rightMax: update rightMax',
          '    Else: result += rightMax - height[right]',
          '    right--',
          'Return result'
        ],
        code: [
          {
            language: 'javascript',
            code: `function trap(height) {
  let left = 0, right = height.length - 1;
  let leftMax = 0, rightMax = 0;
  let result = 0;
  
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        result += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        result += rightMax - height[right];
      }
      right--;
    }
  }
  
  return result;
}`
          },
          {
            language: 'typescript',
            code: `function trap(height: number[]): number {
  let left = 0, right = height.length - 1;
  let leftMax = 0, rightMax = 0;
  let result = 0;
  
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        result += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        result += rightMax - height[right];
      }
      right--;
    }
  }
  
  return result;
}`
          },
          {
            language: 'python',
            code: `def trap(height):
    left, right = 0, len(height) - 1
    left_max, right_max = 0, 0
    result = 0
    
    while left < right:
        if height[left] < height[right]:
            if height[left] >= left_max:
                left_max = height[left]
            else:
                result += left_max - height[left]
            left += 1
        else:
            if height[right] >= right_max:
                right_max = height[right]
            else:
                result += right_max - height[right]
            right -= 1
            
    return result`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(1)',
          explanation: 'Single pass with two pointers. No extra space.'
        },
        pros: ['Optimal time and space', 'Efficient'],
        cons: ['Logic slightly subtle']
      }
    ]
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
    solution: 'Iterate ordered value-symbol pairs subtracting as many as possible, append symbols. Covers subtractive cases.',
    solutions: [
      {
        methodName: 'greedy',
        title: 'Optimal - Greedy',
        intuition: 'Roman numerals represent values by adding symbols from largest to smallest. Subtractive notation (like IV) can be treated as distinct symbols.',
        explanation: 'Create a list of value-symbol pairs in descending order, including subtractive combinations (like 900 for CM). Iterate through the list: while the number is greater than or equal to the current value, append the symbol and subtract the value.',
        algorithm: [
          'Define values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]',
          'Define symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]',
          'Iterate through pairs',
          'While num >= value, append symbol to result and num -= value',
          'Return result'
        ],
        code: [
          {
            language: 'javascript',
            code: `function intToRoman(num) {
  const map = [
    { val: 1000, sym: 'M' }, { val: 900, sym: 'CM' },
    { val: 500, sym: 'D' }, { val: 400, sym: 'CD' },
    { val: 100, sym: 'C' }, { val: 90, sym: 'XC' },
    { val: 50, sym: 'L' }, { val: 40, sym: 'XL' },
    { val: 10, sym: 'X' }, { val: 9, sym: 'IX' },
    { val: 5, sym: 'V' }, { val: 4, sym: 'IV' },
    { val: 1, sym: 'I' }
  ];
  
  let result = '';
  for (const { val, sym } of map) {
    while (num >= val) {
      result += sym;
      num -= val;
    }
  }
  return result;
}`
          },
          {
            language: 'typescript',
            code: `function intToRoman(num: number): string {
  const map: { val: number; sym: string }[] = [
    { val: 1000, sym: 'M' }, { val: 900, sym: 'CM' },
    { val: 500, sym: 'D' }, { val: 400, sym: 'CD' },
    { val: 100, sym: 'C' }, { val: 90, sym: 'XC' },
    { val: 50, sym: 'L' }, { val: 40, sym: 'XL' },
    { val: 10, sym: 'X' }, { val: 9, sym: 'IX' },
    { val: 5, sym: 'V' }, { val: 4, sym: 'IV' },
    { val: 1, sym: 'I' }
  ];
  
  let result = '';
  for (const { val, sym } of map) {
    while (num >= val) {
      result += sym;
      num -= val;
    }
  }
  return result;
}`
          },
          {
            language: 'python',
            code: `def intToRoman(num):
    values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    
    result = []
    for val, sym in zip(values, symbols):
        while num >= val:
            result.append(sym)
            num -= val
            
    return "".join(result)`
          }
        ],
        complexity: {
          time: 'O(1)',
          space: 'O(1)',
          explanation: 'The number of iterations is limited because the input is capped at 3999.'
        },
        pros: ['Simple greedy logic', 'Easy to implement'],
        cons: ['Hardcoded values']
      }
    ]
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
    solution: 'Trim, split by spaces filtering empties, reverse array, join with single space. O(n) time, O(n) space.',
    solutions: [
      {
        methodName: 'builtInSplit',
        title: 'Optimal - Built-in Split and Join',
        intuition: 'The problem is straightforward using modern string manipulation methods: split by whitespace, reverse the list of words, and join them back with a single space.',
        explanation: '1. Trim leading/trailing spaces. \n2. Split the string by one or more spaces to get words. \n3. Reverse the array of words. \n4. Join the words with a single space.',
        algorithm: [
          'Trim string',
          'Split by regex /\\s+/ to handle multiple spaces',
          'Reverse the resulting array',
          'Join with " "',
          'Return result'
        ],
        code: [
          {
            language: 'javascript',
            code: `function reverseWords(s) {
  return s.trim().split(/\\s+/).reverse().join(' ');
}`
          },
          {
            language: 'typescript',
            code: `function reverseWords(s: string): string {
  return s.trim().split(/\\s+/).reverse().join(' ');
}`
          },
          {
            language: 'python',
            code: `def reverseWords(s):
    return " ".join(reversed(s.split()))`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(n)',
          explanation: 'Strings are immutable in most languages, requiring O(n) space for the result. Splitting and joining takes O(n).'
        },
        pros: ['One-liner', 'Readable', 'Efficient enough'],
        cons: ['O(n) space']
      }
    ]
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
    solution: 'Use string builders per row and move a pointer down/up toggling at bounds; concatenate rows at end.',
    solutions: [
      {
        methodName: 'rowSimulation',
        title: 'Optimal - Row Simulation',
        intuition: 'Simulate the zigzag movement by moving up and down across rows.',
        explanation: 'Create an array of strings (or string builders), one for each row. Iterate through the input string, appending each character to the current row. Change direction when hitting the top or bottom row.',
        algorithm: [
          'If numRows is 1, return s',
          'Initialize array of numRows empty strings',
          'Initialize currentRow = 0, goingDown = false',
          'For each character c in s:',
          '  Append c to rows[currentRow]',
          '  If currentRow is 0 or numRows-1, toggle goingDown',
          '  currentRow += 1 if goingDown else -1',
          'Join all rows and return'
        ],
        code: [
          {
            language: 'javascript',
            code: `function convert(s, numRows) {
  if (numRows === 1) return s;
  
  const rows = new Array(Math.min(numRows, s.length)).fill('');
  let curRow = 0;
  let goingDown = false;
  
  for (const c of s) {
    rows[curRow] += c;
    if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
    curRow += goingDown ? 1 : -1;
  }
  
  return rows.join('');
}`
          },
          {
            language: 'typescript',
            code: `function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;
  
  const rows: string[] = new Array(Math.min(numRows, s.length)).fill('');
  let curRow = 0;
  let goingDown = false;
  
  for (const c of s) {
    rows[curRow] += c;
    if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
    curRow += goingDown ? 1 : -1;
  }
  
  return rows.join('');
}`
          },
          {
            language: 'python',
            code: `def convert(s, numRows):
    if numRows == 1:
        return s
        
    rows = [''] * min(numRows, len(s))
    cur_row = 0
    going_down = False
    
    for c in s:
        rows[cur_row] += c
        if cur_row == 0 or cur_row == numRows - 1:
            going_down = not going_down
        cur_row += 1 if going_down else -1
        
    return "".join(rows)`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(n)',
          explanation: 'Pass through the string once. Space for storing rows.'
        },
        pros: ['Intuitive', 'Easy to implement'],
        cons: ['O(n) space']
      }
    ]
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
    solution: 'Scan haystack and compare slices; stop at n-m. Advanced: build prefix function (KMP) for O(n+m).',
    solutions: [
      {
        methodName: 'builtIn',
        title: 'Optimal - Built-in Function',
        intuition: 'Language standard libraries already implement optimized string search algorithms (often naive or boyer-moore variations that are highly optimized).',
        explanation: 'Use the built-in string search method provided by the language.',
        algorithm: [
          'Return haystack.indexOf(needle) for JS/TS',
          'Return haystack.find(needle) for Python'
        ],
        code: [
          {
            language: 'javascript',
            code: `function strStr(haystack, needle) {
  return haystack.indexOf(needle);
}`
          },
          {
            language: 'typescript',
            code: `function strStr(haystack: string, needle: string): number {
  return haystack.indexOf(needle);
}`
          },
          {
            language: 'python',
            code: `def strStr(haystack, needle):
    return haystack.find(needle)`
          }
        ],
        complexity: {
          time: 'O(n * m)',
          space: 'O(1)',
          explanation: 'Worst case for naive implementation is O(n*m), though many internal implementations are faster on average.'
        },
        pros: ['Simplest solution', 'Standard practice for production code'],
        cons: ['Does not demonstrate algorithm knowledge if asked to implement from scratch']
      }
    ]
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
    solution: 'Pack words greedily per line; distribute extra spaces between gaps; for single-word or last line, left-justify and pad right.',
    solutions: [
      {
        methodName: 'greedyLinePacking',
        title: 'Optimal - Greedy Line Packing',
        intuition: 'Pack as many words as possible into each line. Then distribute spaces evenly between words. Handle edge cases: last line and lines with one word are left-justified.',
        explanation: 'Iterate through words, adding them to a current line buffer until adding another would exceed maxWidth. \nWhen a line is full (or for the last line), build the string: \n- Calculate total spaces needed. \n- If it\'s the last line or only one word, spaces go at the end. \n- Otherwise, distribute spaces as evenly as possible (padding from left).',
        algorithm: [
          'Initialize result array',
          'Loop while there are words remaining:',
          '  Determine how many words fit in current line (length + 1 space per word <= maxWidth)',
          '  Create line from these words',
          '  If last line or one word: left justify (words separated by 1 space, pad right with remaining spaces)',
          '  Else: fully justify (distribute spaces evenly between words, add extra spaces from left)',
          '  Add line to result',
          'Return result'
        ],
        code: [
          {
            language: 'javascript',
            code: `function fullJustify(words, maxWidth) {
  const result = [];
  let i = 0;
  
  while (i < words.length) {
    let j = i + 1;
    let lineLength = words[i].length;
    
    // Find how many words fit
    while (j < words.length && lineLength + words[j].length + (j - i) <= maxWidth) {
      lineLength += words[j].length;
      j++;
    }
    
    // Build line
    const numWords = j - i;
    const numSpaces = maxWidth - lineLength;
    let line = "";
    
    if (numWords === 1 || j === words.length) {
      // Left justify: last line or single word
      line = words[i];
      for (let k = i + 1; k < j; k++) {
        line += " " + words[k];
      }
      line += " ".repeat(maxWidth - line.length);
    } else {
      // Middle fully justified
      const gaps = numWords - 1;
      const spacesPerGap = Math.floor(numSpaces / gaps);
      const extraSpaces = numSpaces % gaps;
      
      line = words[i];
      for (let k = 0; k < gaps; k++) {
        line += " ".repeat(spacesPerGap + (k < extraSpaces ? 1 : 0)) + words[i + 1 + k];
      }
    }
    
    result.push(line);
    i = j;
  }
  
  return result;
}`
          },
          {
            language: 'typescript',
            code: `function fullJustify(words: string[], maxWidth: number): string[] {
  const result: string[] = [];
  let i = 0;
  
  while (i < words.length) {
    let j = i + 1;
    let lineLength = words[i].length;
    
    while (j < words.length && lineLength + words[j].length + (j - i) <= maxWidth) {
      lineLength += words[j].length;
      j++;
    }
    
    const numWords = j - i;
    const numSpaces = maxWidth - lineLength;
    let line = "";
    
    if (numWords === 1 || j === words.length) {
      line = words[i];
      for (let k = i + 1; k < j; k++) {
        line += " " + words[k];
      }
      line += " ".repeat(maxWidth - line.length);
    } else {
      const gaps = numWords - 1;
      const spacesPerGap = Math.floor(numSpaces / gaps);
      const extraSpaces = numSpaces % gaps;
      
      line = words[i];
      for (let k = 0; k < gaps; k++) {
        line += " ".repeat(spacesPerGap + (k < extraSpaces ? 1 : 0)) + words[i + 1 + k];
      }
    }
    
    result.push(line);
    i = j;
  }
  
  return result;
}`
          },
          {
            language: 'python',
            code: `def fullJustify(words, maxWidth):
    res, cur, num_of_letters = [], [], 0
    
    for w in words:
        if num_of_letters + len(w) + len(cur) > maxWidth:
            for i in range(maxWidth - num_of_letters):
                cur[i % (len(cur) - 1 or 1)] += ' '
            res.append("".join(cur))
            cur, num_of_letters = [], 0
        cur.append(w)
        num_of_letters += len(w)
        
    return res + [" ".join(cur).ljust(maxWidth)]`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(n)',
          explanation: 'Single pass through words. Constructing result takes linear space relative to total characters.'
        },
        pros: ['Optimal', 'Handles all justification rules correctly'],
        cons: ['Complex logic for spaces distribution']
      }
    ]
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
    solution: 'Two pointers: skip non-alphanumeric, compare lowercase chars from both ends.',
    solutions: [
      {
        methodName: 'twoPointers',
        title: 'Optimal - Two Pointers',
        intuition: 'We can check for palindrome property by comparing characters from both ends, skipping non-alphanumeric ones.',
        explanation: 'Use two pointers, left starting at 0 and right starting at n-1. Move them towards each other. At each step, skip non-alphanumeric characters. If valid characters don\'t match (case-insensitive), it\'s not a palindrome.',
        algorithm: [
          'Initialize left = 0, right = length - 1',
          'While left < right:',
          '  While left < right and s[left] is not alphanumeric, increment left',
          '  While left < right and s[right] is not alphanumeric, decrement right',
          '  If lower(s[left]) != lower(s[right]), return false',
          '  Increment left, decrement right',
          'Return true'
        ],
        code: [
          {
            language: 'javascript',
            code: `function isPalindrome(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0, right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}`
          },
          {
            language: 'typescript',
            code: `function isPalindrome(s: string): boolean {
  // Alternative without regex for O(1) space if regex creates new string
  let left = 0, right = s.length - 1;
  
  while (left < right) {
    while (left < right && !/[a-zA-Z0-9]/.test(s[left])) left++;
    while (left < right && !/[a-zA-Z0-9]/.test(s[right])) right--;
    
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    
    left++;
    right--;
  }
  return true;
}`
          },
          {
            language: 'python',
            code: `def isPalindrome(s):
    cleaned = [c.lower() for c in s if c.isalnum()]
    return cleaned == cleaned[::-1]`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(1)',
          explanation: 'Pass through the string once. In-place for pointer approach (O(1) space), though regex/list comprehension might use O(n) space.'
        },
        pros: ['Simple', 'Efficient'],
        cons: ['None']
      }
    ]
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
    solution: 'Use pointer i for s, j for t. When s[i]==t[j], i++. Always j++. Return i==s.length.',
    solutions: [
      {
        methodName: 'twoPointers',
        title: 'Optimal - Two Pointers',
        intuition: 'We just need to check if characters of s appear in t in the same order.',
        explanation: 'Use two pointers. Pointer i for s, pointer j for t. Iterate through t with j. If s[i] matches t[j], increment i. If i reaches the length of s, it means all characters were found in order.',
        algorithm: [
          'Initialize i = 0',
          'Iterate through each character char of t:',
          '  If i < s.length and s[i] == char:',
          '    i++',
          'Return i == s.length'
        ],
        code: [
          {
            language: 'javascript',
            code: `function isSubsequence(s, t) {
  let i = 0;
  for (let j = 0; j < t.length; j++) {
    if (i < s.length && s[i] === t[j]) {
      i++;
    }
  }
  return i === s.length;
}`
          },
          {
            language: 'typescript',
            code: `function isSubsequence(s: string, t: string): boolean {
  let i = 0;
  for (let j = 0; j < t.length; j++) {
    if (i < s.length && s[i] === t[j]) {
      i++;
    }
  }
  return i === s.length;
}`
          },
          {
            language: 'python',
            code: `def isSubsequence(s, t):
    i = 0
    for char in t:
        if i < len(s) and s[i] == char:
            i += 1
    return i == len(s)`
          }
        ],
        complexity: {
          time: 'O(T)',
          space: 'O(1)',
          explanation: 'Iterate through target string `t` once. O(1) space.'
        },
        pros: ['Optimal time', 'Simple logic'],
        cons: ['None']
      }
    ]
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
    solution: 'Two pointers: l=0, r=n-1. Calculate area, move pointer with smaller height inward.',
    solutions: [
      {
        methodName: 'twoPointers',
        title: 'Optimal - Two Pointers',
        intuition: 'The area is limited by the shorter line. Moving the shorter line inward might find a taller line to increase area. Moving the taller line inward will never increase area because width decreases and height is still limited by the existing shorter line.',
        explanation: 'Start with pointers at both ends. Calculate max area using (right - left) * min(height[left], height[right]). Move the pointer pointing to the shorter line inward. Repeat until pointers meet.',
        algorithm: [
          'Initialize left = 0, right = n - 1, maxArea = 0',
          'While left < right:',
          '  currentArea = (right - left) * min(height[left], height[right])',
          '  maxArea = max(maxArea, currentArea)',
          '  If height[left] < height[right]:',
          '    left++',
          '  Else:',
          '    right--',
          'Return maxArea'
        ],
        code: [
          {
            language: 'javascript',
            code: `function maxArea(height) {
  let left = 0, right = height.length - 1;
  let maxArea = 0;
  
  while (left < right) {
    const minHeight = Math.min(height[left], height[right]);
    maxArea = Math.max(maxArea, (right - left) * minHeight);
    
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  
  return maxArea;
}`
          },
          {
            language: 'typescript',
            code: `function maxArea(height: number[]): number {
  let left = 0, right = height.length - 1;
  let maxArea = 0;
  
  while (left < right) {
    const minHeight = Math.min(height[left], height[right]);
    maxArea = Math.max(maxArea, (right - left) * minHeight);
    
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  
  return maxArea;
}`
          },
          {
            language: 'python',
            code: `def maxArea(height):
    left, right = 0, len(height) - 1
    max_area = 0
    
    while left < right:
        min_height = min(height[left], height[right])
        max_area = max(max_area, (right - left) * min_height)
        
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
            
    return max_area`
          },
          {
            language: 'java',
            code: `class Solution {
    public int maxArea(int[] height) {
        int left = 0, right = height.length - 1;
        int maxArea = 0;
        
        while (left < right) {
            int minHeight = Math.min(height[left], height[right]);
            maxArea = Math.max(maxArea, (right - left) * minHeight);
            
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        
        return maxArea;
    }
}`
          },
          {
            language: 'cpp',
            code: `#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int maxArea(vector<int>& height) {
        int left = 0, right = height.size() - 1;
        int maxArea = 0;
        
        while (left < right) {
            int minHeight = min(height[left], height[right]);
            maxArea = max(maxArea, (right - left) * minHeight);
            
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        
        return maxArea;
    }
};`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(1)',
          explanation: 'Single pass with two pointers. No extra space.'
        },
        pros: ['Optimal time', 'Greedy logic works perfectly'],
        cons: ['None']
      }
    ]
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
    solution: 'Iterate with prev=null, curr=head. Save next, point curr.next to prev, move pointers.',
    solutions: [
      {
        methodName: 'iterative',
        title: 'Optimal - Iterative',
        intuition: 'We can reverse the list by changing the `next` pointer of each node to point to the previous node.',
        explanation: 'Initialize `prev` to null and `curr` to head. Iterate while `curr` is not null: save `next` node, set `curr.next` to `prev`, move `prev` to `curr`, move `curr` to `next`. Return `prev` as the new head.',
        algorithm: [
          'Initialize prev = null',
          'Initialize curr = head',
          'While curr is not null:',
          '  next = curr.next',
          '  curr.next = prev',
          '  prev = curr',
          '  curr = next',
          'Return prev'
        ],
        code: [
          {
            language: 'javascript',
            code: `function reverseList(head) {
  let prev = null;
  let curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}`
          },
          {
            language: 'typescript',
            code: `/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}`
          },
          {
            language: 'python',
            code: `class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = None
        curr = head
        while curr:
            next_node = curr.next
            curr.next = prev
            prev = curr
            curr = next_node
        return prev`
          },
          {
            language: 'java',
            code: `class ListNode {
    int val;
    ListNode next;
}

class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        
        while (curr != null) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        
        return prev;
    }
}`
          },
          {
            language: 'cpp',
            code: `struct ListNode {
    int val;
    ListNode *next;
};

class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode* prev = nullptr;
        ListNode* curr = head;
        
        while (curr != nullptr) {
            ListNode* next = curr->next;
            curr->next = prev;
            prev = curr;
            curr = next;
        }
        
        return prev;
    }
};`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(1)',
          explanation: 'Iterate through the list once. Constant extra space.'
        },
        pros: ['Optimal time', 'In-place'],
        cons: ['Destructive (modifies original list)']
      }
    ]
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
    solution: 'Use slow/fast pointers. If they meet, there\'s a cycle. If fast reaches null, no cycle.',
    solutions: [
      {
        methodName: 'floydsCycleFinding',
        title: 'Optimal - Floyd\'s Cycle Finding',
        intuition: 'If there is a cycle, a fast pointer moving 2 steps will eventually catch up to a slow pointer moving 1 step.',
        explanation: 'Initialize `slow` and `fast` pointers to `head`. Move `slow` by 1 step and `fast` by 2 steps in a loop. If `fast` or `fast.next` becomes null, there is no cycle. If `slow` and `fast` meet (point to the same node), there is a cycle.',
        algorithm: [
          'If head is null, return false',
          'Initialize slow = head, fast = head',
          'While fast is not null and fast.next is not null:',
          '  slow = slow.next',
          '  fast = fast.next.next',
          '  If slow == fast, return true',
          'Return false'
        ],
        code: [
          {
            language: 'javascript',
            code: `function hasCycle(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}`
          },
          {
            language: 'typescript',
            code: `/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function hasCycle(head: ListNode | null): boolean {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}`
          },
          {
            language: 'python',
            code: `class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        slow = head
        fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                return True
        return False`
          },
          {
            language: 'java',
            code: `class ListNode {
    int val;
    ListNode next;
}

class Solution {
    public boolean hasCycle(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;
        
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            
            if (slow == fast) {
                return true;
            }
        }
        
        return false;
    }
}`
          },
          {
            language: 'cpp',
            code: `struct ListNode {
    int val;
    ListNode *next;
};

class Solution {
public:
    bool hasCycle(ListNode *head) {
        ListNode* slow = head;
        ListNode* fast = head;
        
        while (fast != nullptr && fast->next != nullptr) {
            slow = slow->next;
            fast = fast->next->next;
            
            if (slow == fast) {
                return true;
            }
        }
        
        return false;
    }
};`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(1)',
          explanation: 'Fast pointer moves 2x speed, will catch slow pointer within O(n) steps if cycle exists. No extra space.'
        },
        pros: ['Optimal time', 'O(1) space'],
        cons: ['None']
      }
    ]
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
    solution: 'Create dummy node. Compare values, link smaller node, advance pointer. Return dummy.next.',
    solutions: [
      {
        methodName: 'iterative',
        title: 'Optimal - Iterative',
        intuition: 'We can build the new sorted list by iterating through both lists and picking the smaller node at each step.',
        explanation: 'Use a dummy node to simplify the head handling. Maintain a `current` pointer. Compare `list1.val` and `list2.val`. Attach the smaller node to `current.next` and advance the pointer in that list. Finally, attach the non-empty remaining list.',
        algorithm: [
          'Initialize dummy value = -1, current = dummy',
          'While list1 and list2 are not null:',
          '  If list1.val <= list2.val:',
          '    current.next = list1',
          '    list1 = list1.next',
          '  Else:',
          '    current.next = list2',
          '    list2 = list2.next',
          '  current = current.next',
          'If list1 is not null, current.next = list1',
          'If list2 is not null, current.next = list2',
          'Return dummy.next'
        ],
        code: [
          {
            language: 'javascript',
            code: `function mergeTwoLists(list1, list2) {
  const dummy = { val: -1, next: null };
  let current = dummy;
  
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  
  current.next = list1 || list2;
  return dummy.next;
}`
          },
          {
            language: 'typescript',
            code: `/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const dummy = new ListNode(-1);
  let current = dummy;
  
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next!;
  }
  
  current.next = list1 || list2;
  return dummy.next;
}`
          },
          {
            language: 'python',
            code: `class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(-1)
        current = dummy
        
        while list1 and list2:
            if list1.val <= list2.val:
                current.next = list1
                list1 = list1.next
            else:
                current.next = list2
                list2 = list2.next
            current = current.next
            
        current.next = list1 or list2
        return dummy.next`
          },
          {
            language: 'java',
            code: `class ListNode {
    int val;
    ListNode next;
}

class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode dummy = new ListNode(-1);
        ListNode current = dummy;
        
        while (list1 != null && list2 != null) {
            if (list1.val <= list2.val) {
                current.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next;
        }
        
        current.next = (list1 != null) ? list1 : list2;
        return dummy.next;
    }
}`
          },
          {
            language: 'cpp',
            code: `struct ListNode {
    int val;
    ListNode *next;
};

class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        ListNode* dummy = new ListNode(-1);
        ListNode* current = dummy;
        
        while (list1 != nullptr && list2 != nullptr) {
            if (list1->val <= list2->val) {
                current->next = list1;
                list1 = list1->next;
            } else {
                current->next = list2;
                list2 = list2->next;
            }
            current = current->next;
        }
        
        current->next = (list1 != nullptr) ? list1 : list2;
        return dummy->next;
    }
};`
          }
        ],
        complexity: {
          time: 'O(n + m)',
          space: 'O(1)',
          explanation: 'Iterate through both lists once. Constant space for dummy node.'
        },
        pros: ['Optimal time', 'Simple logic'],
        cons: ['None']
      }
    ]
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
    solution: 'Use stack. Push opening brackets, pop and match closing brackets. Stack empty at end.',
    solutions: [
      {
        methodName: 'stack',
        title: 'Optimal - Stack',
        intuition: 'Valid parentheses must be closed in the reverse order they were opened (LIFO), which is exactly what a stack supports.',
        explanation: 'Iterate through the string. Push opening brackets onto the stack. When a closing bracket is encountered, check if it matches the top of the stack. If so, pop from the stack. If not, or if stack is empty, return false. Finally, return true if stack is empty.',
        algorithm: [
          'Initialize stack = []',
          'Create map for matching pairs: { ")": "(", "}": "{", "]": "[" }',
          'Iterate through character c in s:',
          '  If c is opening bracket, push to stack',
          '  Else (c is closing bracket):',
          '    If stack is empty or pop() != map[c], return false',
          'Return stack.length == 0'
        ],
        code: [
          {
            language: 'javascript',
            code: `function isValid(s) {
  const stack = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  
  for (const char of s) {
    if (!map[char]) {
      stack.push(char);
    } else {
      if (stack.length === 0 || stack.pop() !== map[char]) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}`
          },
          {
            language: 'typescript',
            code: `function isValid(s: string): boolean {
  const stack: string[] = [];
  const map: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  
  for (const char of s) {
    if (!map[char]) {
      stack.push(char); // opening bracket
    } else {
      // closing bracket
      if (stack.length === 0 || stack.pop() !== map[char]) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}`
          },
          {
            language: 'python',
            code: `def isValid(s):
    stack = []
    mapping = {")": "(", "}": "{", "]": "["}
    
    for char in s:
        if char in mapping:
            top_element = stack.pop() if stack else '#'
            if mapping[char] != top_element:
                return False
        else:
            stack.append(char)
            
    return not stack`
          },
          {
            language: 'java',
            code: `import java.util.HashMap;
import java.util.Map;
import java.util.Stack;

class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        Map<Character, Character> map = new HashMap<>();
        map.put(')', '(');
        map.put('}', '{');
        map.put(']', '[');
        
        for (char c : s.toCharArray()) {
            if (map.containsKey(c)) {
                char top = stack.isEmpty() ? '#' : stack.pop();
                if (top != map.get(c)) {
                    return false;
                }
            } else {
                stack.push(c);
            }
        }
        
        return stack.isEmpty();
    }
}`
          },
          {
            language: 'cpp',
            code: `#include <string>
#include <stack>
#include <unordered_map>
using namespace std;

class Solution {
public:
    bool isValid(string s) {
        stack<char> stk;
        unordered_map<char, char> mapping = {
            {')', '('},
            {'}', '{'},
            {']', '['}
        };
        
        for (char c : s) {
            if (mapping.find(c) != mapping.end()) {
                char top = stk.empty() ? '#' : stk.top();
                stk.pop();
                if (top != mapping[c]) {
                    return false;
                }
            } else {
                stk.push(c);
            }
        }
        
        return stk.empty();
    }
};`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(n)',
          explanation: 'Pass through the string once. Stack can grow up to O(n) size.'
        },
        pros: ['Correct', 'Standard solution'],
        cons: ['O(n) space']
      }
    ]
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
    solution: 'Recursion: if !root return 0. Return 1 + max(maxDepth(left), maxDepth(right)).',
    solutions: [
      {
        methodName: 'recursion',
        title: 'Optimal - Recursive DFS',
        intuition: 'The maximum depth of a tree is 1 (for the root) plus the maximum depth of its subtrees.',
        explanation: 'If the root is null, depth is 0. Otherwise, recursively find the max depth of the left and right subtrees. The depth of the current node is 1 + max(leftDepth, rightDepth).',
        algorithm: [
          'If root is null, return 0',
          'leftDepth = maxDepth(root.left)',
          'rightDepth = maxDepth(root.right)',
          'Return 1 + max(leftDepth, rightDepth)'
        ],
        code: [
          {
            language: 'javascript',
            code: `function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}`
          },
          {
            language: 'typescript',
            code: `/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}`
          },
          {
            language: 'python',
            code: `class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(h)',
          explanation: 'Visit every node once. Space is proportional to height of tree (recursion stack).'
        },
        pros: ['Simple', 'Elegant recursion'],
        cons: ['Stack overflow for very deep trees (though max depth is usually limited)']
      }
    ]
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
    solution: 'Recursion: if !root return null. Swap left and right. Recursively invert both subtrees.',
    solutions: [
      {
        methodName: 'recursion',
        title: 'Optimal - Recursive DFS',
        intuition: 'A binary tree is inverted if for every node, its left and right children are swapped, and the children themselves are also inverted.',
        explanation: 'Recursive approach: 1. Base case: if root is null, return null. 2. Swap the left and right children of the current node. 3. Recursively call invertTree on the left and right children. 4. Return the root.',
        algorithm: [
          'If root is null, return null',
          'Swap root.left and root.right',
          'invertTree(root.left)',
          'invertTree(root.right)',
          'Return root'
        ],
        code: [
          {
            language: 'javascript',
            code: `function invertTree(root) {
  if (!root) return null;
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  
  invertTree(root.left);
  invertTree(root.right);
  return root;
}`
          },
          {
            language: 'typescript',
            code: `/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  
  invertTree(root.left);
  invertTree(root.right);
  return root;
}`
          },
          {
            language: 'python',
            code: `class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root:
            return None
        root.left, root.right = root.right, root.left
        self.invertTree(root.left)
        self.invertTree(root.right)
        return root`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(h)',
          explanation: 'Visit every node once. Space proportional to height.'
        },
        pros: ['Simple', 'Classic interview problem'],
        cons: ['None']
      }
    ]
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
    solution: 'Helper function to check if two trees are mirrors: compare values and recursively check.',
    solutions: [
      {
        methodName: 'recursion',
        title: 'Optimal - Recursive DFS',
        intuition: 'A tree is symmetric if its left subtree is a mirror reflection of its right subtree.',
        explanation: 'We need a helper function that takes two nodes (left and right) and checks if they are mirrors. They are mirrors if: 1. Both are null (true). 2. One is null (false). 3. Their values are equal AND left\'s left is mirror of right\'s right AND left\'s right is mirror of right\'s left.',
        algorithm: [
          'If root is null, return true',
          'Call helper(root.left, root.right)',
          'Helper(p, q):',
          '  If p and q are null, return true',
          '  If p or q is null or p.val != q.val, return false',
          '  Return helper(p.left, q.right) AND helper(p.right, q.left)'
        ],
        code: [
          {
            language: 'javascript',
            code: `function isSymmetric(root) {
  if (!root) return true;
  
  function isMirror(n1, n2) {
    if (!n1 && !n2) return true;
    if (!n1 || !n2 || n1.val !== n2.val) return false;
    return isMirror(n1.left, n2.right) && isMirror(n1.right, n2.left);
  }
  
  return isMirror(root.left, root.right);
}`
          },
          {
            language: 'typescript',
            code: `/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;
  
  function isMirror(n1: TreeNode | null, n2: TreeNode | null): boolean {
    if (!n1 && !n2) return true;
    if (!n1 || !n2 || n1.val !== n2.val) return false;
    return isMirror(n1.left, n2.right) && isMirror(n1.right, n2.left);
  }
  
  return isMirror(root.left, root.right);
}`
          },
          {
            language: 'python',
            code: `class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        if not root:
            return True
            
        def isMirror(n1, n2):
            if not n1 and not n2:
                return True
            if not n1 or not n2 or n1.val != n2.val:
                return False
            return isMirror(n1.left, n2.right) and isMirror(n1.right, n2.left)
            
        return isMirror(root.left, root.right)`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(h)',
          explanation: 'Visit every node once. Space proportional to height.'
        },
        pros: ['Optimal', 'Clear mirroring logic'],
        cons: ['None']
      }
    ]
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
    solutions: [
      {
        methodName: 'recursion',
        title: 'Brute Force - Recursion',
        intuition: 'The problem breaks down into smaller subproblems: to reach step n, we could have come from step n-1 or n-2.',
        explanation: 'We can express the number of ways to reach step n as the sum of ways to reach step n-1 and step n-2. This is exactly the Fibonacci sequence definition.',
        algorithm: [
          'Base case: if n is 1, return 1',
          'Base case: if n is 2, return 2',
          'Recursive step: return climbStairs(n-1) + climbStairs(n-2)'
        ],
        code: [
          {
            language: 'javascript',
            code: `function climbStairs(n) {
  if (n <= 2) return n;
  return climbStairs(n - 1) + climbStairs(n - 2);
}`
          },
          {
            language: 'typescript',
            code: `function climbStairs(n: number): number {
  if (n <= 2) return n;
  return climbStairs(n - 1) + climbStairs(n - 2);
}`
          },
          {
            language: 'python',
            code: `def climbStairs(n):
    if n <= 2:
        return n
    return climbStairs(n - 1) + climbStairs(n - 2)`
          },
          {
            language: 'java',
            code: `class Solution {
    public int climbStairs(int n) {
        if (n <= 2) return n;
        return climbStairs(n - 1) + climbStairs(n - 2);
    }
}`
          },
          {
            language: 'cpp',
            code: `class Solution {
public:
    int climbStairs(int n) {
        if (n <= 2) return n;
        return climbStairs(n - 1) + climbStairs(n - 2);
    }
};`
          }
        ],
        complexity: {
          time: 'O(2^n)',
          space: 'O(n)',
          explanation: 'The recursion tree grows exponentially. The depth of the recursion tree is n, utilizing O(n) stack space.'
        },
        pros: ['Direct translation of the mathematical relation'],
        cons: ['Exponential time complexity', 'Extremely slow for large n']
      },
      {
        methodName: 'dpSpaceOptimized',
        title: 'Optimal - Space Optimized DP',
        intuition: 'We only need the last two values to calculate the next one, so we do not need to store the entire history.',
        explanation: 'Instead of an array, we can maintain two variables representing the number of ways to reach the previous two steps. At each step, we update these variables to move the window forward.',
        algorithm: [
          'If n <= 2, return n',
          'Initialize prev2 = 1 (ways to reaching step 1)',
          'Initialize prev1 = 2 (ways to reaching step 2)',
          'Iterate from 3 to n',
          'Calculate current = prev1 + prev2',
          'Update prev2 = prev1',
          'Update prev1 = current',
          'Return prev1'
        ],
        code: [
          {
            language: 'javascript',
            code: `function climbStairs(n) {
  if (n <= 2) return n;
  
  let prev2 = 1;
  let prev1 = 2;
  
  for (let i = 3; i <= n; i++) {
    const current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }
  
  return prev1;
}`
          },
          {
            language: 'typescript',
            code: `function climbStairs(n: number): number {
  if (n <= 2) return n;
  
  let prev2 = 1;
  let prev1 = 2;
  
  for (let i = 3; i <= n; i++) {
    const current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }
  
  return prev1;
}`
          },
          {
            language: 'python',
            code: `def climbStairs(n):
    if n <= 2:
        return n
    
    prev2, prev1 = 1, 2
    
    for _ in range(3, n + 1):
        prev2, prev1 = prev1, prev2 + prev1
        
    return prev1`
          },
          {
            language: 'java',
            code: `class Solution {
    public int climbStairs(int n) {
        if (n <= 2) return n;
        
        int prev2 = 1;
        int prev1 = 2;
        
        for (int i = 3; i <= n; i++) {
            int current = prev1 + prev2;
            prev2 = prev1;
            prev1 = current;
        }
        
        return prev1;
    }
}`
          },
          {
            language: 'cpp',
            code: `class Solution {
public:
    int climbStairs(int n) {
        if (n <= 2) return n;
        
        int prev2 = 1;
        int prev1 = 2;
        
        for (int i = 3; i <= n; i++) {
            int current = prev1 + prev2;
            prev2 = prev1;
            prev1 = current;
        }
        
        return prev1;
    }
};`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(1)',
          explanation: 'We iterate from 3 to n once. We only use constant extra space for variables.'
        },
        pros: ['Linear time complexity', 'Constant space complexity', 'Very efficient'],
        cons: ['None specific']
      }
    ]
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
    solutions: [
      {
        methodName: 'recursion',
        title: 'Brute Force - Recursion',
        intuition: 'At each house, we have two choices: rob it and skip the next one, or skip it and consider the next ones.',
        explanation: 'We calculate the max money starting from each index recursively. For index i, max money is max(nums[i] + rob(i+2), rob(i+1)).',
        algorithm: [
          'Define a recursive function solve(i)',
          'Base case: if i >= length, return 0',
          'Option 1: Rob current house + solve(i+2)',
          'Option 2: Skip current house + solve(i+1)',
          'Return max(Option 1, Option 2)'
        ],
        code: [
          {
            language: 'javascript',
            code: `function rob(nums) {
  function solve(i) {
    if (i >= nums.length) return 0;
    return Math.max(nums[i] + solve(i + 2), solve(i + 1));
  }
  return solve(0);
}`
          },
          {
            language: 'typescript',
            code: `function rob(nums: number[]): number {
  function solve(i: number): number {
    if (i >= nums.length) return 0;
    return Math.max(nums[i] + solve(i + 2), solve(i + 1));
  }
  return solve(0);
}`
          },
          {
            language: 'python',
            code: `def rob(nums):
    def solve(i):
        if i >= len(nums):
            return 0
        return max(nums[i] + solve(i + 2), solve(i + 1))
    return solve(0)`
          },
          {
            language: 'java',
            code: `class Solution {
    public int rob(int[] nums) {
        return solve(nums, 0);
    }
    
    private int solve(int[] nums, int i) {
        if (i >= nums.length) return 0;
        return Math.max(nums[i] + solve(nums, i + 2), solve(nums, i + 1));
    }
}`
          },
          {
            language: 'cpp',
            code: `#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int rob(vector<int>& nums) {
        return solve(nums, 0);
    }
    
private:
    int solve(vector<int>& nums, int i) {
        if (i >= nums.size()) return 0;
        return max(nums[i] + solve(nums, i + 2), solve(nums, i + 1));
    }
};`
          }
        ],
        complexity: {
          time: 'O(2^n)',
          space: 'O(n)',
          explanation: 'Each step branches into two recursive calls. Stack depth is O(n).'
        },
        pros: ['Simple logical structure'],
        cons: ['Exponential time complexity', 'Time Limit Exceeded for large inputs']
      },
      {
        methodName: 'dpIterative',
        title: 'Optimal - Iterative DP',
        intuition: 'We can build the solution from the ground up using previous optimal results.',
        explanation: 'Maintain two variables: `rob1` representing max loot excluding current, and `rob2` representing max loot including current possibilities. Iterate and update.',
        algorithm: [
          'Initialize rob1 = 0, rob2 = 0',
          'Iterate through each house money value n',
          'New rob2 = max(n + rob1, rob2)',
          'Update rob1 = old rob2',
          'Update rob2 = New rob2',
          'Return rob2'
        ],
        code: [
          {
            language: 'javascript',
            code: `function rob(nums) {
  let rob1 = 0;
  let rob2 = 0;
  
  for (const n of nums) {
    const temp = Math.max(n + rob1, rob2);
    rob1 = rob2;
    rob2 = temp;
  }
  
  return rob2;
}`
          },
          {
            language: 'typescript',
            code: `function rob(nums: number[]): number {
  let rob1 = 0;
  let rob2 = 0;
  
  for (const n of nums) {
    const temp = Math.max(n + rob1, rob2);
    rob1 = rob2;
    rob2 = temp;
  }
  
  return rob2;
}`
          },
          {
            language: 'python',
            code: `def rob(nums):
    rob1, rob2 = 0, 0
    
    for n in nums:
        temp = max(n + rob1, rob2)
        rob1 = rob2
        rob2 = temp
        
    return rob2`
          },
          {
            language: 'java',
            code: `class Solution {
    public int rob(int[] nums) {
        int rob1 = 0;
        int rob2 = 0;
        
        for (int n : nums) {
            int temp = Math.max(n + rob1, rob2);
            rob1 = rob2;
            rob2 = temp;
        }
        
        return rob2;
    }
}`
          },
          {
            language: 'cpp',
            code: `#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int rob(vector<int>& nums) {
        int rob1 = 0;
        int rob2 = 0;
        
        for (int n : nums) {
            int temp = max(n + rob1, rob2);
            rob1 = rob2;
            rob2 = temp;
        }
        
        return rob2;
    }
};`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(1)',
          explanation: 'One pass through the array. Constant extra space.'
        },
        pros: ['Optimal time complexity', 'Constant space complexity', 'Clean implementation'],
        cons: ['None specific']
      }
    ]
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
    solutions: [
      {
        methodName: 'recursion',
        title: 'Brute Force - Recursion',
        intuition: 'Try every possible combination of coins to sum up to the amount.',
        explanation: 'For the target amount, try subtracting each coin denomination and recursively solving for the remainder. Take the minimum of all valid results.',
        algorithm: [
          'Base case: amount == 0, return 0',
          'Base case: amount < 0, return infinity',
          'Initialize minCoins = infinity',
          'For each coin:',
          '  res = solve(amount - coin)',
          '  if res != -1: minCoins = min(minCoins, res + 1)',
          'Return minCoins if not infinity else -1'
        ],
        code: [
          {
            language: 'javascript',
            code: `function coinChange(coins, amount) {
  if (amount === 0) return 0;
  
  let result = Infinity;
  
  for (const coin of coins) {
    if (amount - coin >= 0) {
      const subResult = coinChange(coins, amount - coin);
      if (subResult !== -1) {
        result = Math.min(result, subResult + 1);
      }
    }
  }
  
  return result === Infinity ? -1 : result;
}`
          },
          {
            language: 'typescript',
            code: `function coinChange(coins: number[], amount: number): number {
  if (amount === 0) return 0;
  
  let result = Infinity;
  
  for (const coin of coins) {
    if (amount - coin >= 0) {
      const subResult = coinChange(coins, amount - coin);
      if (subResult !== -1) {
        result = Math.min(result, subResult + 1);
      }
    }
  }
  
  return result === Infinity ? -1 : result;
}`
          },
          {
            language: 'python',
            code: `def coinChange(coins, amount):
    if amount == 0: return 0
    if amount < 0: return -1
    
    result = float('inf')
    
    for coin in coins:
        sub_result = coinChange(coins, amount - coin)
        if sub_result != -1:
            result = min(result, sub_result + 1)
            
    return result if result != float('inf') else -1`
          },
          {
            language: 'java',
            code: `class Solution {
    public int coinChange(int[] coins, int amount) {
        if (amount == 0) return 0;
        
        int result = Integer.MAX_VALUE;
        
        for (int coin : coins) {
            if (amount - coin >= 0) {
                int subResult = coinChange(coins, amount - coin);
                if (subResult != -1) {
                    result = Math.min(result, subResult + 1);
                }
            }
        }
        
        return result == Integer.MAX_VALUE ? -1 : result;
    }
}`
          },
          {
            language: 'cpp',
            code: `#include <vector>
#include <algorithm>
#include <climits>
using namespace std;

class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        if (amount == 0) return 0;
        
        int result = INT_MAX;
        
        for (int coin : coins) {
            if (amount - coin >= 0) {
                int subResult = coinChange(coins, amount - coin);
                if (subResult != -1) {
                    result = min(result, subResult + 1);
                }
            }
        }
        
        return result == INT_MAX ? -1 : result;
    }
};`
          }
        ],
        complexity: {
          time: 'O(S^n)',
          space: 'O(n)',
          explanation: 'Exponential time complexity where S is amount/min_coin. Recursion depth up to amount.'
        },
        pros: ['Direct translation of problem'],
        cons: ['Extremely inefficient', 'Repeats calculations massive number of times']
      },
      {
        methodName: 'dpBottomUp',
        title: 'Optimal - Bottom Up DP',
        intuition: 'Build the solution for amounts from 1 up to the target amount.',
        explanation: 'Create an array dp where dp[i] is the min coins for amount i. Initialize dp[0]=0, others infinity. For each amount, check all coins.',
        algorithm: [
          'Initialize dp array of size amount + 1 with value amount + 1 (infinity)',
          'Set dp[0] = 0',
          'Iterate a from 1 to amount',
          '  Iterate through each coin c',
          '    If a - c >= 0',
          '      dp[a] = min(dp[a], 1 + dp[a - c])',
          'Return dp[amount] if dp[amount] <= amount else -1'
        ],
        code: [
          {
            language: 'javascript',
            code: `function coinChange(coins, amount) {
  const dp = Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  
  for (let a = 1; a <= amount; a++) {
    for (const c of coins) {
      if (a - c >= 0) {
        dp[a] = Math.min(dp[a], 1 + dp[a - c]);
      }
    }
  }
  
  return dp[amount] > amount ? -1 : dp[amount];
}`
          },
          {
            language: 'typescript',
            code: `function coinChange(coins: number[], amount: number): number {
  const dp = Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  
  for (let a = 1; a <= amount; a++) {
    for (const c of coins) {
      if (a - c >= 0) {
        dp[a] = Math.min(dp[a], 1 + dp[a - c]);
      }
    }
  }
  
  return dp[amount] > amount ? -1 : dp[amount];
}`
          },
          {
            language: 'python',
            code: `def coinChange(coins, amount):
    dp = [amount + 1] * (amount + 1)
    dp[0] = 0
    
    for a in range(1, amount + 1):
        for c in coins:
            if a - c >= 0:
                dp[a] = min(dp[a], 1 + dp[a - c])
                
    return dp[amount] if dp[amount] <= amount else -1`
          },
          {
            language: 'java',
            code: `import java.util.Arrays;

class Solution {
    public int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, amount + 1);
        dp[0] = 0;
        
        for (int a = 1; a <= amount; a++) {
            for (int c : coins) {
                if (a - c >= 0) {
                    dp[a] = Math.min(dp[a], 1 + dp[a - c]);
                }
            }
        }
        
        return dp[amount] > amount ? -1 : dp[amount];
    }
}`
          },
          {
            language: 'cpp',
            code: `#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        vector<int> dp(amount + 1, amount + 1);
        dp[0] = 0;
        
        for (int a = 1; a <= amount; a++) {
            for (int c : coins) {
                if (a - c >= 0) {
                    dp[a] = min(dp[a], 1 + dp[a - c]);
                }
            }
        }
        
        return dp[amount] > amount ? -1 : dp[amount];
    }
};`
          }
        ],
        complexity: {
          time: 'O(amount * len(coins))',
          space: 'O(amount)',
          explanation: 'Nested loop: for each amount (1 to amount), iterate over all coins. Space for DP array.'
        },
        pros: ['Pseudo-polynomial time complexity', 'Efficient for reasonable amounts'],
        cons: ['Space proportional to amount']
      }
    ]
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
    solutions: [
      {
        methodName: 'bruteForce',
        title: 'Brute Force - Check All Substrings',
        intuition: 'A simple way is to check every possible substring to see if it is a palindrome and keep the longest one.',
        explanation: 'We generate all possible substrings. For each substring, we check if it reads the same forwards and backwards. If it does and is longer than our current best, we update our answer.',
        algorithm: [
          'Initialize maxLen = 0 and result = ""',
          'Iterate with i from 0 to length',
          'Iterate with j from i to length',
          'Extract substring s[i...j]',
          'Check if substring is a palindrome',
          'If palindrome and length > maxLen, update result',
          'Return result'
        ],
        code: [
          {
            language: 'javascript',
            code: `function longestPalindrome(s) {
  let longest = '';
  
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const sub = s.substring(i, j + 1);
      if (isPalindrome(sub) && sub.length > longest.length) {
        longest = sub;
      }
    }
  }
  return longest;
}

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}`
          },
          {
            language: 'typescript',
            code: `function longestPalindrome(s: string): string {
  let longest = '';
  
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const sub = s.substring(i, j + 1);
      if (isPalindrome(sub) && sub.length > longest.length) {
        longest = sub;
      }
    }
  }
  return longest;
}

function isPalindrome(str: string): boolean {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}`
          },
          {
            language: 'python',
            code: `def longestPalindrome(s):
    longest = ""
    
    for i in range(len(s)):
        for j in range(i, len(s)):
            sub = s[i:j+1]
            if sub == sub[::-1] and len(sub) > len(longest):
                longest = sub
                
    return longest`
          },
          {
            language: 'java',
            code: `class Solution {
    public String longestPalindrome(String s) {
        String longest = "";
        
        for (int i = 0; i < s.length(); i++) {
            for (int j = i; j < s.length(); j++) {
                String sub = s.substring(i, j + 1);
                if (isPalindrome(sub) && sub.length() > longest.length()) {
                    longest = sub;
                }
            }
        }
        return longest;
    }
    
    private boolean isPalindrome(String str) {
        int left = 0, right = str.length() - 1;
        while (left < right) {
            if (str.charAt(left) != str.charAt(right)) return false;
            left++;
            right--;
        }
        return true;
    }
}`
          },
          {
            language: 'cpp',
            code: `#include <string>
using namespace std;

class Solution {
public:
    string longestPalindrome(string s) {
        string longest = "";
        
        for (int i = 0; i < s.length(); i++) {
            for (int j = i; j < s.length(); j++) {
                string sub = s.substr(i, j - i + 1);
                if (isPalindrome(sub) && sub.length() > longest.length()) {
                    longest = sub;
                }
            }
        }
        return longest;
    }
    
private:
    bool isPalindrome(const string& str) {
        int left = 0, right = str.length() - 1;
        while (left < right) {
            if (str[left] != str[right]) return false;
            left++;
            right--;
        }
        return true;
    }
};`
          }
        ],
        complexity: {
          time: 'O(n^3)',
          space: 'O(1)',
          explanation: 'Generating all substrings takes O(n^2). Checking each for palindrome takes O(n). Total O(n^3).'
        },
        pros: ['Simple logic', 'No complex algorithms needed'],
        cons: ['Very slow', 'Time Limit Exceeded for longer strings']
      },
      {
        methodName: 'expandAroundCenter',
        title: 'Optimal - Expand Around Center',
        intuition: 'A palindrome is symmetric around its center. We can expand from every possible center.',
        explanation: 'For each character (and the gap between characters), treat it as the center of a palindrome and expand outwards as long as the left and right characters match. Keep track of the longest one found.',
        algorithm: [
          'Initialize longest = ""',
          'Iterate i from 0 to length',
          'Method 1: Expand with center i (odd length)',
          'Method 2: Expand with center i, i+1 (even length)',
          'Update longest if a longer palindrome is found',
          'Return longest'
        ],
        code: [
          {
            language: 'javascript',
            code: `function longestPalindrome(s) {
  if (!s || s.length < 1) return "";
  
  let start = 0, end = 0;
  
  for (let i = 0; i < s.length; i++) {
    const len1 = expand(s, i, i);
    const len2 = expand(s, i, i + 1);
    const len = Math.max(len1, len2);
    
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  
  return s.substring(start, end + 1);
}

function expand(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}`
          },
          {
            language: 'typescript',
            code: `function longestPalindrome(s: string): string {
  if (!s || s.length < 1) return "";
  
  let start = 0, end = 0;
  
  for (let i = 0; i < s.length; i++) {
    const len1 = expand(s, i, i);
    const len2 = expand(s, i, i + 1);
    const len = Math.max(len1, len2);
    
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  
  return s.substring(start, end + 1);
}

function expand(s: string, left: number, right: number): number {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}`
          },
          {
            language: 'python',
            code: `def longestPalindrome(s):
    res = ""
    
    for i in range(len(s)):
        # Odd length
        l, r = i, i
        while l >= 0 and r < len(s) and s[l] == s[r]:
            if (r - l + 1) > len(res):
                res = s[l:r+1]
            l -= 1
            r += 1
            
        # Even length
        l, r = i, i + 1
        while l >= 0 and r < len(s) and s[l] == s[r]:
            if (r - l + 1) > len(res):
                res = s[l:r+1]
            l -= 1
            r += 1
            
    return res`
          },
          {
            language: 'java',
            code: `class Solution {
    public String longestPalindrome(String s) {
        if (s == null || s.length() < 1) return "";
        
        int start = 0, end = 0;
        
        for (int i = 0; i < s.length(); i++) {
            int len1 = expandAroundCenter(s, i, i);
            int len2 = expandAroundCenter(s, i, i + 1);
            int len = Math.max(len1, len2);
            
            if (len > end - start) {
                start = i - (len - 1) / 2;
                end = i + len / 2;
            }
        }
        
        return s.substring(start, end + 1);
    }
    
    private int expandAroundCenter(String s, int left, int right) {
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
        }
        return right - left - 1;
    }
}`
          },
          {
            language: 'cpp',
            code: `#include <string>
#include <algorithm>
using namespace std;

class Solution {
public:
    string longestPalindrome(string s) {
        if (s.empty()) return "";
        
        int start = 0, end = 0;
        
        for (int i = 0; i < s.length(); i++) {
            int len1 = expandAroundCenter(s, i, i);
            int len2 = expandAroundCenter(s, i, i + 1);
            int len = max(len1, len2);
            
            if (len > end - start) {
                start = i - (len - 1) / 2;
                end = i + len / 2;
            }
        }
        
        return s.substr(start, end - start + 1);
    }
    
private:
    int expandAroundCenter(const string& s, int left, int right) {
        while (left >= 0 && right < s.length() && s[left] == s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }
};`
          }
        ],
        complexity: {
          time: 'O(n^2)',
          space: 'O(1)',
          explanation: 'We have 2n-1 centers. Expanding takes O(n). Total O(n^2). Space is O(1) if we store indices.'
        },
        pros: ['Efficient O(n^2) solution', 'Constant space (indices)'],
        cons: ['Slower than Manachers Algorithm O(n), but much simpler to implement']
      }
    ]
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
    solutions: [
      {
        methodName: 'stringConversion',
        title: 'Brute Force - String Conversion',
        intuition: 'Convert the integer to a string and check if it reads the same forwards and backwards.',
        explanation: 'The simplest way is to turn the number into a string, reverse that string, and check if the reversed string equals the original.',
        algorithm: [
          'If x < 0, return false (negatives are not palindromes)',
          'Convert x to string s',
          'Reverse s to get reversedS',
          'Return s === reversedS'
        ],
        code: [
          {
            language: 'javascript',
            code: `function isPalindrome(x) {
  if (x < 0) return false;
  const s = x.toString();
  return s === s.split('').reverse().join('');
}`
          },
          {
            language: 'typescript',
            code: `function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  const s = x.toString();
  return s === s.split('').reverse().join('');
}`
          },
          {
            language: 'python',
            code: `def isPalindrome(x):
    if x < 0:
        return False
    return str(x) == str(x)[::-1]`
          }
        ],
        complexity: {
          time: 'O(log n)',
          space: 'O(log n)',
          explanation: 'Converting to string takes space proportional to number of digits (log n). String reversal is also linear in number of digits.'
        },
        pros: ['Very concise one-liner', 'Easy to understand'],
        cons: ['Requires extra space for string conversion', 'Not allowed in some strict interview constraints']
      },
      {
        methodName: 'revertHalf',
        title: 'Optimal - Revert Half of Number',
        intuition: 'We can reverse the second half of the number and compare it with the first half.',
        explanation: 'To avoid converting to string, we can mathematically extract digits. We build the reverse of the number. To avoid overflow, we only reverse half of the number.',
        algorithm: [
          'If x < 0 or (x % 10 == 0 and x != 0), return false',
          'Initialize reversed = 0',
          'While x > reversed:',
          '  Pop last digit from x',
          '  Push digit to reversed (reversed = reversed * 10 + digit)',
          '  x = x / 10 (integer division)',
          'Return x == reversed or x == reversed / 10 (for odd length)'
        ],
        code: [
          {
            language: 'javascript',
            code: `function isPalindrome(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  
  let reversed = 0;
  while (x > reversed) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  
  return x === reversed || x === Math.floor(reversed / 10);
}`
          },
          {
            language: 'typescript',
            code: `function isPalindrome(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  
  let reversed = 0;
  while (x > reversed) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  
  return x === reversed || x === Math.floor(reversed / 10);
}`
          },
          {
            language: 'python',
            code: `def isPalindrome(x):
    if x < 0 or (x % 10 == 0 and x != 0):
        return False
        
    reversed_half = 0
    while x > reversed_half:
        reversed_half = reversed_half * 10 + x % 10
        x //= 10
        
    return x == reversed_half or x == reversed_half // 10`
          }
        ],
        complexity: {
          time: 'O(log n)',
          space: 'O(1)',
          explanation: 'we process the digits of n. There are log10(n) digits. We use constant extra space.'
        },
        pros: ['No string conversion needed', 'Optimal space complexity O(1)'],
        cons: ['Slightly more complex mathematical logic']
      }
    ]
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
    solutions: [
      {
        methodName: 'bigIntConversion',
        title: 'Brute Force - BigInt Conversion',
        intuition: 'Treat the array as a single large number, add one, and convert back.',
        explanation: 'We can join the digits to form a string, parse it as a number (using BigInt to avoid overflow), add one, and split it back into an array.',
        algorithm: [
          'Join digits array into a string',
          'Convert string to BigInt',
          'Add 1n to the BigInt',
          'Convert result to string',
          'Split string into characters and map back to numbers'
        ],
        code: [
          {
            language: 'javascript',
            code: `function plusOne(digits) {
  const num = BigInt(digits.join(''));
  const sum = num + 1n;
  return sum.toString().split('').map(Number);
}`
          },
          {
            language: 'typescript',
            code: `function plusOne(digits: number[]): number[] {
  const num = BigInt(digits.join(''));
  const sum = num + 1n;
  return sum.toString().split('').map(Number);
}`
          },
          {
            language: 'python',
            code: `def plusOne(digits):
    num = int("".join(map(str, digits)))
    num += 1
    return [int(d) for d in str(num)]`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(n)',
          explanation: 'String conversion and splitting takes linear time and space.'
        },
        pros: ['Extremely simple logic', 'Leverages built-in large number support'],
        cons: ['Uses extra space for string manipulation', 'Requires BigInt support (modern JS environments)']
      },
      {
        methodName: 'schoolbookAddition',
        title: 'Optimal - Schoolbook Addition',
        intuition: 'Perform addition manually from right to left, handling the carry.',
        explanation: 'Iterate from the last digit backwards. If the digit is less than 9, increment it and we are done. If it is 9, set it to 0 and continue to the next digit. If we finish the loop (meaning all were 9s), prepend 1.',
        algorithm: [
          'Iterate i from n-1 down to 0',
          'If digits[i] < 9:',
          '  digits[i]++',
          '  return digits',
          'Else (digits[i] is 9):',
          '  digits[i] = 0',
          'If loop finishes, it means we had all 9s (e.g., 999 -> 000)',
          'Insert 1 at the beginning (result 1000)',
          'Return digits'
        ],
        code: [
          {
            language: 'javascript',
            code: `function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  
  digits.unshift(1);
  return digits;
}`
          },
          {
            language: 'typescript',
            code: `function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  
  digits.unshift(1);
  return digits;
}`
          },
          {
            language: 'python',
            code: `def plusOne(digits):
    for i in range(len(digits) - 1, -1, -1):
        if digits[i] < 9:
            digits[i] += 1
            return digits
        digits[i] = 0
        
    return [1] + digits`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(1)',
          explanation: 'Single pass. We modify the array in place. Prepending 1 worst case might take O(n) depending on array implementation, but typically efficient.'
        },
        pros: ['Modify in-place', 'Efficient', 'No type overflow issues'],
        cons: ['Modifies input array (can be considered a con in functional paradigms)']
      }
    ]
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
    solutions: [
      {
        methodName: 'dfs',
        title: 'Approach 1 - Depth-First Search (DFS)',
        intuition: 'Treat the grid as a graph. Each land cell is a node. We want to find the number of connected components.',
        explanation: 'Iterate through every cell. If we encounter a "1" (land), it is part of an island. Increment our island count and then flood-fill (DFS) to explore and mark all adjacent land cells as visited (e.g., turn them to "0" or "visited").',
        algorithm: [
          'Iterate through each cell (r, c) in the grid',
          'If grid[r][c] is "1":',
          '  Increment islands count',
          '  Call DFS(r, c) to visit all reachable land',
          'DFS(r, c):',
          '  If out of bounds or grid[r][c] == "0", return',
          '  Mark grid[r][c] as "0" (visited)',
          '  Recursively call DFS for up, down, left, right neighbors',
          'Return islands count'
        ],
        code: [
          {
            language: 'javascript',
            code: `function numIslands(grid) {
  if (!grid || grid.length === 0) return 0;
  
  const m = grid.length;
  const n = grid[0].length;
  let count = 0;
  
  function dfs(r, c) {
    if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] === '0') {
      return;
    }
    
    grid[r][c] = '0'; // Mark as visited
    
    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  }
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        count++;
        dfs(i, j);
      }
    }
  }
  
  return count;
}`
          },
          {
            language: 'typescript',
            code: `function numIslands(grid: string[][]): number {
  if (!grid || grid.length === 0) return 0;
  
  const m = grid.length;
  const n = grid[0].length;
  let count = 0;
  
  function dfs(r: number, c: number) {
    if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] === '0') {
      return;
    }
    
    grid[r][c] = '0'; // Mark as visited
    
    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  }
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        count++;
        dfs(i, j);
      }
    }
  }
  
  return count;
}`
          },
          {
            language: 'python',
            code: `def numIslands(grid):
    if not grid:
        return 0
        
    m, n = len(grid), len(grid[0])
    count = 0
    
    def dfs(r, c):
        if r < 0 or r >= m or c < 0 or c >= n or grid[r][c] == '0':
            return
            
        grid[r][c] = '0' # Mark as visited
        
        dfs(r - 1, c)
        dfs(r + 1, c)
        dfs(r, c - 1)
        dfs(r, c + 1)
        
    for i in range(m):
        for j in range(n):
            if grid[i][j] == '1':
                count += 1
                dfs(i, j)
                
    return count`
          }
        ],
        complexity: {
          time: 'O(M * N)',
          space: 'O(M * N)',
          explanation: 'We visit each cell once. In worst case (recursion depth), space complexity is O(M*N) if the grid is all land.'
        },
        pros: ['Simple to implement', 'Intuitive approach'],
        cons: ['Recursion stack might overflow for very large grids (though constraints usually allow)']
      },
      {
        methodName: 'bfs',
        title: 'Approach 2 - Breadth-First Search (BFS)',
        intuition: 'Similar to DFS, but explore connected land layer by layer using a queue.',
        explanation: 'When a land cell is found, increment count and start BFS. Use a queue to store neighbors to visit. This avoids recursion depth issues.',
        algorithm: [
          'Iterate through each cell (r, c)',
          'If grid[r][c] is "1":',
          '  Increment count',
          '  Mark grid[r][c] as "0"',
          '  Add (r, c) to queue',
          '  While queue is not empty:',
          '    Pop (currR, currC)',
          '    For each neighbor:',
          '      If valid and is "1":',
          '        Mark as "0"',
          '        Add to queue',
          'Return count'
        ],
        code: [
          {
            language: 'javascript',
            code: `function numIslands(grid) {
  if (!grid || grid.length === 0) return 0;
  
  const m = grid.length;
  const n = grid[0].length;
  let count = 0;
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        count++;
        grid[i][j] = '0';
        const queue = [[i, j]];
        
        while (queue.length > 0) {
          const [r, c] = queue.shift();
          const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
          
          for (const [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;
            
            if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] === '1') {
              grid[nr][nc] = '0';
              queue.push([nr, nc]);
            }
          }
        }
      }
    }
  }
  return count;
}`
          },
          {
            language: 'typescript',
            code: `function numIslands(grid: string[][]): number {
  if (!grid || grid.length === 0) return 0;
  
  const m = grid.length;
  const n = grid[0].length;
  let count = 0;
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        count++;
        grid[i][j] = '0';
        const queue: [number, number][] = [[i, j]];
        
        while (queue.length > 0) {
          const [r, c] = queue.shift()!;
          const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
          
          for (const [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;
            
            if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] === '1') {
              grid[nr][nc] = '0';
              queue.push([nr, nc]);
            }
          }
        }
      }
    }
  }
  return count;
}`
          },
          {
            language: 'python',
            code: `def numIslands(grid):
    if not grid:
        return 0
        
    m, n = len(grid), len(grid[0])
    count = 0
    
    for i in range(m):
        for j in range(n):
            if grid[i][j] == '1':
                count += 1
                grid[i][j] = '0'
                queue = [(i, j)]
                
                while queue:
                    r, c = queue.pop(0)
                    for dr, dc in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                        nr, nc = r + dr, c + dc
                        if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == '1':
                            grid[nr][nc] = '0'
                            queue.append((nr, nc))
                            
    return count`
          }
        ],
        complexity: {
          time: 'O(M * N)',
          space: 'O(min(M, N))',
          explanation: 'Visits each cell. Queue size is at most proportional to min(M, N) in a BFS traversal.'
        },
        pros: ['Avoids deep recursion stack usage'],
        cons: ['Slightly more verbose than DFS']
      }
    ]
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
    solutions: [
      {
        methodName: 'dfsCycleDetection',
        title: 'Approach 1 - DFS with State 3-Colors',
        intuition: 'We need to detect if there is a cycle in the directed graph based on prerequisites.',
        explanation: 'Each course is a node, prerequisites are edges. A valid schedule is possible if the graph is a DAG (Directed Acyclic Graph). Use DFS with 3 states: 0=unvisited, 1=visiting, 2=visited. If we see a "visiting" node, a cycle exists.',
        algorithm: [
          'Build adjacency list from prerequisites',
          'Initialize status array for all nodes to 0 (unvisited)',
          'Iterate through each course:',
          '  If unvisited, call hasCycle(course)',
          '  If hasCycle returns true, return false (cannot finish)',
          'hasCycle(u):',
          '  Mark u as 1 (visiting)',
          '  For each neighbor v:',
          '    If status[v] is 1, return true (cycle found)',
          '    If status[v] is 0 and hasCycle(v), return true',
          '  Mark u as 2 (visited)',
          '  Return false'
        ],
        code: [
          {
            language: 'javascript',
            code: `function canFinish(numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  for (const [course, pre] of prerequisites) {
    graph[course].push(pre);
  }
  
  // 0: unvisited, 1: visiting, 2: visited
  const status = new Array(numCourses).fill(0);
  
  function hasCycle(u) {
    if (status[u] === 1) return true;
    if (status[u] === 2) return false;
    
    status[u] = 1;
    for (const v of graph[u]) {
      if (hasCycle(v)) return true;
    }
    status[u] = 2;
    return false;
  }
  
  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) return false;
  }
  
  return true;
}`
          },
          {
            language: 'typescript',
            code: `function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph: number[][] = Array.from({ length: numCourses }, () => []);
  for (const [course, pre] of prerequisites) {
    graph[course].push(pre);
  }
  
  // 0: unvisited, 1: visiting, 2: visited
  const status = new Array(numCourses).fill(0);
  
  function hasCycle(u: number): boolean {
    if (status[u] === 1) return true;
    if (status[u] === 2) return false;
    
    status[u] = 1;
    for (const v of graph[u]) {
      if (hasCycle(v)) return true;
    }
    status[u] = 2;
    return false;
  }
  
  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) return false;
  }
  
  return true;
}`
          },
          {
            language: 'python',
            code: `def canFinish(numCourses, prerequisites):
    graph = [[] for _ in range(numCourses)]
    for course, pre in prerequisites:
        graph[course].append(pre)
        
    # 0: unvisited, 1: visiting, 2: visited
    status = [0] * numCourses
    
    def has_cycle(u):
        if status[u] == 1:
            return True
        if status[u] == 2:
            return False
            
        status[u] = 1
        for v in graph[u]:
            if has_cycle(v):
                return True
        status[u] = 2
        return False
        
    for i in range(numCourses):
        if has_cycle(i):
            return False
            
    return True`
          },
          {
            language: 'java',
            code: `import java.util.ArrayList;
import java.util.List;

class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        List<List<Integer>> graph = new ArrayList<>();
        for (int i = 0; i < numCourses; i++) {
            graph.add(new ArrayList<>());
        }
        
        for (int[] prereq : prerequisites) {
            graph.get(prereq[0]).add(prereq[1]);
        }
        
        int[] status = new int[numCourses];
        
        for (int i = 0; i < numCourses; i++) {
            if (hasCycle(i, graph, status)) {
                return false;
            }
        }
        
        return true;
    }
    
    private boolean hasCycle(int u, List<List<Integer>> graph, int[] status) {
        if (status[u] == 1) return true;
        if (status[u] == 2) return false;
        
        status[u] = 1;
        for (int v : graph.get(u)) {
            if (hasCycle(v, graph, status)) return true;
        }
        status[u] = 2;
        return false;
    }
}`
          },
          {
            language: 'cpp',
            code: `#include <vector>
using namespace std;

class Solution {
public:
    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
        vector<vector<int>> graph(numCourses);
        
        for (const auto& prereq : prerequisites) {
            graph[prereq[0]].push_back(prereq[1]);
        }
        
        vector<int> status(numCourses, 0);
        
        for (int i = 0; i < numCourses; i++) {
            if (hasCycle(i, graph, status)) {
                return false;
            }
        }
        
        return true;
    }
    
private:
    bool hasCycle(int u, vector<vector<int>>& graph, vector<int>& status) {
        if (status[u] == 1) return true;
        if (status[u] == 2) return false;
        
        status[u] = 1;
        for (int v : graph[u]) {
            if (hasCycle(v, graph, status)) return true;
        }
        status[u] = 2;
        return false;
    }
};`
          }
        ],
        complexity: {
          time: 'O(V + E)',
          space: 'O(V + E)',
          explanation: 'Building graph takes O(V+E). DFS visits each node and edge once. Recursion stack can go up to O(V).'
        },
        pros: ['Classic cycle detection algorithm', 'Efficient'],
        cons: ['Recursion stack depth constraint']
      },
      {
        methodName: 'topologicalSort',
        title: 'Approach 2 - Topological Sort (BFS)',
        intuition: 'Use Kahn’s algorithm. If we can process all nodes by removing those with 0 in-degree, then no cycle exists.',
        explanation: 'Calculate in-degrees for all courses. Add courses with 0 in-degree to queue. While queue not empty, "take" course, then decrement in-degree of its neighbors. If neighbor becomes 0, add to queue. Count finished courses.',
        algorithm: [
          'Build adjacency list and in-degree array',
          'Add all nodes with in-degree 0 to queue',
          'While queue is not empty:',
          '  Pop node u',
          '  Increment processed count',
          '  For each neighbor v of u:',
          '    Decrement in-degree[v]',
          '    If in-degree[v] == 0, push v to queue',
          'Return processed count == numCourses'
        ],
        code: [
          {
            language: 'javascript',
            code: `function canFinish(numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  const inDegree = new Array(numCourses).fill(0);
  
  for (const [course, pre] of prerequisites) {
    graph[pre].push(course);
    inDegree[course]++;
  }
  
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }
  
  let processed = 0;
  while (queue.length > 0) {
    const u = queue.shift();
    processed++;
    
    for (const v of graph[u]) {
      inDegree[v]--;
      if (inDegree[v] === 0) queue.push(v);
    }
  }
  
  return processed === numCourses;
}`
          },
          {
            language: 'typescript',
            code: `function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph: number[][] = Array.from({ length: numCourses }, () => []);
  const inDegree = new Array(numCourses).fill(0);
  
  for (const [course, pre] of prerequisites) {
    graph[pre].push(course); // pre -> course
    inDegree[course]++;
  }
  
  const queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }
  
  let processed = 0;
  while (queue.length > 0) {
    const u = queue.shift()!;
    processed++;
    
    for (const v of graph[u]) {
      inDegree[v]--;
      if (inDegree[v] === 0) queue.push(v);
    }
  }
  
  return processed === numCourses;
}`
          },
          {
            language: 'python',
            code: `def canFinish(numCourses, prerequisites):
    from collections import deque
    
    graph = [[] for _ in range(numCourses)]
    in_degree = [0] * numCourses
    
    for course, pre in prerequisites:
        graph[pre].append(course)
        in_degree[course] += 1
        
    queue = deque([i for i in range(numCourses) if in_degree[i] == 0])
    processed = 0
    
    while queue:
        u = queue.popleft()
        processed += 1
        for v in graph[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)
                
    return processed == numCourses`
          },
          {
            language: 'java',
            code: `import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        List<List<Integer>> graph = new ArrayList<>();
        int[] inDegree = new int[numCourses];
        
        for (int i = 0; i < numCourses; i++) {
            graph.add(new ArrayList<>());
        }
        
        for (int[] prereq : prerequisites) {
            graph.get(prereq[1]).add(prereq[0]);
            inDegree[prereq[0]]++;
        }
        
        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < numCourses; i++) {
            if (inDegree[i] == 0) queue.offer(i);
        }
        
        int processed = 0;
        while (!queue.isEmpty()) {
            int u = queue.poll();
            processed++;
            
            for (int v : graph.get(u)) {
                inDegree[v]--;
                if (inDegree[v] == 0) queue.offer(v);
            }
        }
        
        return processed == numCourses;
    }
}`
          },
          {
            language: 'cpp',
            code: `#include <vector>
#include <queue>
using namespace std;

class Solution {
public:
    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
        vector<vector<int>> graph(numCourses);
        vector<int> inDegree(numCourses, 0);
        
        for (const auto& prereq : prerequisites) {
            graph[prereq[1]].push_back(prereq[0]);
            inDegree[prereq[0]]++;
        }
        
        queue<int> q;
        for (int i = 0; i < numCourses; i++) {
            if (inDegree[i] == 0) q.push(i);
        }
        
        int processed = 0;
        while (!q.empty()) {
            int u = q.front();
            q.pop();
            processed++;
            
            for (int v : graph[u]) {
                inDegree[v]--;
                if (inDegree[v] == 0) q.push(v);
            }
        }
        
        return processed == numCourses;
    }
};`
          }
        ],
        complexity: {
          time: 'O(V + E)',
          space: 'O(V + E)',
          explanation: 'Building graph O(V+E). Processing queue O(V+E).'
        },
        pros: ['Non-recursive', 'Easy to visualize dependency resolution'],
        cons: ['Slightly more setup code']
      }
    ]
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
    solutions: [
      {
        methodName: 'dfs',
        title: 'Approach 1 - Recursion (DFS)',
        intuition: 'Traverse the graph and clone each node. Use a hash map to avoid infinite loops and re-cloning.',
        explanation: 'We use a map `visited` to store `originalNode -> clonedNode`. When visiting a node, if it is in the map, return the clone. Otherwise, create a clone, add to map, and then recursively clone neighbors.',
        algorithm: [
          'Create a map to store visited nodes: old -> new',
          'Define DFS function(node):',
          '  If node is null, return null',
          '  If node in map, return map[node]',
          '  Create clone = new Node(node.val)',
          '  Add node -> clone to map',
          '  For each neighbor of node:',
          '    clone.neighbors.add(DFS(neighbor))',
          '  Return clone',
          'Return DFS(initialNode)'
        ],
        code: [
          {
            language: 'javascript',
            code: `function cloneGraph(node) {
  if (!node) return null;
  const visited = new Map();
  
  function dfs(curr) {
    if (visited.has(curr)) return visited.get(curr);
    
    const clone = new Node(curr.val);
    visited.set(curr, clone);
    
    for (const neighbor of curr.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }
    
    return clone;
  }
  
  return dfs(node);
}`
          },
          {
            language: 'typescript',
            code: `function cloneGraph(node: Node | null): Node | null {
  if (!node) return null;
  const visited = new Map<Node, Node>();
  
  function dfs(curr: Node): Node {
    if (visited.has(curr)) return visited.get(curr)!;
    
    const clone = new Node(curr.val);
    visited.set(curr, clone);
    
    for (const neighbor of curr.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }
    
    return clone;
  }
  
  return dfs(node);
}`
          },
          {
            language: 'python',
            code: `def cloneGraph(node):
    if not node: return None
    visited = {}
    
    def dfs(curr):
        if curr in visited:
            return visited[curr]
            
        clone = Node(curr.val)
        visited[curr] = clone
        
        for neighbor in curr.neighbors:
            clone.neighbors.append(dfs(neighbor))
            
        return clone
        
    return dfs(node)`
          }
        ],
        complexity: {
          time: 'O(V + E)',
          space: 'O(V)',
          explanation: 'We visit every node and edge once. Map stores all V nodes. Stack depth O(V).'
        },
        pros: ['Solution directly maps to graph definition', 'Concise'],
        cons: ['Recursive stack depth']
      },
      {
        methodName: 'bfs',
        title: 'Approach 2 - Iterative (BFS)',
        intuition: 'Use a queue to process nodes layer by layer, cloning neighbors as we discover them.',
        explanation: 'Start with the initial node. Create its clone and put it in a map. Add the node to a queue. While queue not empty, process node: for each neighbor, if not visited, clone it and add to queue. Always add cloned neighbor to current node\'s clone neighbors list.',
        algorithm: [
          'If node is null, return null',
          'Create map visited: old -> new',
          'Create clone of start node, add to map',
          'Add start node to queue',
          'While queue not empty:',
          '  Pop curr',
          '  For each neighbor:',
          '    If neighbor not in visited:',
          '      Create neighborClone',
          '      Add neighbor -> neighborClone to map',
          '      Add neighbor to queue',
          '    map[curr].neighbors.push(map[neighbor])',
          'Return map[node]'
        ],
        code: [
          {
            language: 'javascript',
            code: `function cloneGraph(node) {
  if (!node) return null;
  const visited = new Map();
  const queue = [node];
  
  visited.set(node, new Node(node.val));
  
  while (queue.length > 0) {
    const curr = queue.shift();
    
    for (const neighbor of curr.neighbors) {
      if (!visited.has(neighbor)) {
        visited.set(neighbor, new Node(neighbor.val));
        queue.push(neighbor);
      }
      visited.get(curr).neighbors.push(visited.get(neighbor));
    }
  }
  
  return visited.get(node);
}`
          },
          {
            language: 'typescript',
            code: `function cloneGraph(node: Node | null): Node | null {
  if (!node) return null;
  const visited = new Map<Node, Node>();
  const queue: Node[] = [node];
  
  visited.set(node, new Node(node.val));
  
  while (queue.length > 0) {
    const curr = queue.shift()!;
    
    for (const neighbor of curr.neighbors) {
      if (!visited.has(neighbor)) {
        visited.set(neighbor, new Node(neighbor.val));
        queue.push(neighbor);
      }
      visited.get(curr)!.neighbors.push(visited.get(neighbor)!);
    }
  }
  
  return visited.get(node);
}`
          },
          {
            language: 'python',
            code: `def cloneGraph(node):
    if not node: return None
    visited = {}
    queue = collections.deque([node])
    
    visited[node] = Node(node.val)
    
    while queue:
        curr = queue.popleft()
        for neighbor in curr.neighbors:
            if neighbor not in visited:
                visited[neighbor] = Node(neighbor.val)
                queue.append(neighbor)
            visited[curr].neighbors.append(visited[neighbor])
            
    return visited[node]`
          }
        ],
        complexity: {
          time: 'O(V + E)',
          space: 'O(V)',
          explanation: 'BFS traversal visits all nodes and edges. Map takes O(V) space.'
        },
        pros: ['Iterative, avoids stack overflow'],
        cons: ['Slightly more code than DFS']
      }
    ]
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
    solutions: [
      {
        methodName: 'backtracking',
        title: 'Approach 1 - Backtracking',
        intuition: 'Build permutations by picking one number at a time. If we pick a number, we track that it is used.',
        explanation: 'We explore decision tree. At each step, valid choices are numbers not yet in current permutation. When current permutation length equals input array length, we have a valid permutation.',
        algorithm: [
          'Init result list',
          'Define backtrack(currentPerm):',
          '  If len(currentPerm) == len(nums): add copy of currentPerm to result, return',
          '  For each num in nums:',
          '    If num not in currentPerm:',
          '      Add num to currentPerm',
          '      backtrack(currentPerm)',
          '      Remove num from currentPerm (backtrack)',
          'Call backtrack([])'
        ],
        code: [
          {
            language: 'javascript',
            code: `function permute(nums) {
  const result = [];
  
  function backtrack(current) {
    if (current.length === nums.length) {
      result.push([...current]);
      return;
    }
    
    for (const num of nums) {
      if (!current.includes(num)) {
        current.push(num);
        backtrack(current);
        current.pop();
      }
    }
  }
  
  backtrack([]);
  return result;
}`
          },
          {
            language: 'typescript',
            code: `function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  
  function backtrack(current: number[]) {
    if (current.length === nums.length) {
      result.push([...current]);
      return;
    }
    
    for (const num of nums) {
      if (!current.includes(num)) {
        current.push(num);
        backtrack(current);
        current.pop();
      }
    }
  }
  
  backtrack([]);
  return result;
}`
          },
          {
            language: 'python',
            code: `def permute(nums):
    result = []
    
    def backtrack(current):
        if len(current) == len(nums):
            result.append(current[:])
            return
            
        for num in nums:
            if num not in current:
                current.append(num)
                backtrack(current)
                current.pop()
                
    backtrack([])
    return result`
          }
        ],
        complexity: {
          time: 'O(N * N!)',
          space: 'O(N)',
          explanation: 'There are N! permutations. Copying each takes O(N). Recursion depth O(N). Checking "includes" takes O(N) but can be O(1) with a set/boolean array.'
        },
        pros: ['Standard backtracking template', 'Easy to understand'],
        cons: ['Expensive includes check (O(N)) makes it slower than needed']
      },
      {
        methodName: 'swapping',
        title: 'Approach 2 - Backtracking with Swapping',
        intuition: 'Instead of using extra space for tracking used numbers, swap elements in place to fix the current position.',
        explanation: 'We divide the array into [fixed | available]. At index i, we specific try swapping every element from i to end into position i, then recurse for i+1, then swap back.',
        algorithm: [
          'Define backtrack(start_index):',
          '  If start_index == len(nums): add copy of nums to result, return',
          '  For i from start_index to len(nums):',
          '    Swap nums[start_index] and nums[i]',
          '    backtrack(start_index + 1)',
          '    Swap nums[start_index] and nums[i] (restore state)'
        ],
        code: [
          {
            language: 'javascript',
            code: `function permute(nums) {
  const result = [];
  
  function backtrack(start) {
    if (start === nums.length) {
      result.push([...nums]);
      return;
    }
    
    for (let i = start; i < nums.length; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]]; // Swap
      backtrack(start + 1);
      [nums[start], nums[i]] = [nums[i], nums[start]]; // Swap back
    }
  }
  
  backtrack(0);
  return result;
}`
          },
          {
            language: 'typescript',
            code: `function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  
  function backtrack(start: number) {
    if (start === nums.length) {
      result.push([...nums]);
      return;
    }
    
    for (let i = start; i < nums.length; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]]; // Swap
      backtrack(start + 1);
      [nums[start], nums[i]] = [nums[i], nums[start]]; // Swap back
    }
  }
  
  backtrack(0);
  return result;
}`
          },
          {
            language: 'python',
            code: `def permute(nums):
    result = []
    
    def backtrack(start):
        if start == len(nums):
            result.append(nums[:])
            return
            
        for i in range(start, len(nums)):
            nums[start], nums[i] = nums[i], nums[start]
            backtrack(start + 1)
            nums[start], nums[i] = nums[i], nums[start]
            
    backtrack(0)
    return result`
          }
        ],
        complexity: {
          time: 'O(N * N!)',
          space: 'O(N)',
          explanation: 'Generates N! permutations. Space is O(N) for recursion. More efficient than Approach 1 due to O(1) swap vs O(N) includes.'
        },
        pros: ['Space optimized (in-place swaps)', 'More efficient'],
        cons: ['Modifies input array during processing (reverts it back though)']
      }
    ]
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
    solutions: [
      {
        methodName: 'backtracking',
        title: 'Backtracking Approach',
        intuition: 'Generate all subsets by making a binary choice at each element: include it or exclude it. This naturally forms a decision tree that we can explore using backtracking.',
        explanation: 'For each element in the array, we have two choices: include it in the current subset or skip it. We recursively explore both choices, building up subsets as we go. When we reach the end of the array, we have a complete subset. The key insight is that this generates all 2^n possible subsets.',
        algorithm: [
          'Initialize an empty result array to store all subsets',
          'Start with an empty current subset',
          'For each index from 0 to n-1:',
          '  - Add current subset to result',
          '  - Try including each remaining element:',
          '    * Add element to current subset',
          '    * Recursively explore with next index',
          '    * Remove element (backtrack)',
          'Return the result array'
        ],
        code: [
          {
            language: 'javascript',
            code: `function subsets(nums) {
  const result = [];
  
  function backtrack(start, current) {
    result.push([...current]);
    
    for (let i = start; i < nums.length; i++) {
      current.push(nums[i]);
      backtrack(i + 1, current);
      current.pop();
    }
  }
  
  backtrack(0, []);
  return result;
}

module.exports = subsets;`
          },
          {
            language: 'typescript',
            code: `function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  
  function backtrack(start: number, current: number[]): void {
    result.push([...current]);
    
    for (let i = start; i < nums.length; i++) {
      current.push(nums[i]);
      backtrack(i + 1, current);
      current.pop();
    }
  }
  
  backtrack(0, []);
  return result;
}

export default subsets;`
          },
          {
            language: 'python',
            code: `def subsets(nums):
    result = []
    
    def backtrack(start, current):
        result.append(current[:])
        
        for i in range(start, len(nums)):
            current.append(nums[i])
            backtrack(i + 1, current)
            current.pop()
    
    backtrack(0, [])
    return result`
          }
        ],
        complexity: {
          time: 'O(N * 2^N)',
          space: 'O(N)',
          explanation: 'We generate 2^N subsets, and each subset takes O(N) time to copy. Space is O(N) for recursion depth.'
        },
        pros: ['Intuitive and easy to understand', 'Natural recursive structure', 'Easy to modify for variations'],
        cons: ['Requires recursion stack space', 'Slightly slower due to function call overhead']
      },
      {
        methodName: 'bit-manipulation',
        title: 'Bit Manipulation Approach',
        intuition: 'Each subset can be represented as a binary number where bit i indicates whether nums[i] is included. For n elements, we need to generate all numbers from 0 to 2^n - 1.',
        explanation: 'We can map each subset to a binary number. For example, with [1,2,3], the number 5 (binary 101) represents the subset [1,3] because bits 0 and 2 are set. We iterate through all numbers from 0 to 2^n - 1, and for each number, we check which bits are set to determine which elements to include.',
        algorithm: [
          'Calculate total number of subsets: 2^n',
          'For each number from 0 to 2^n - 1:',
          '  - Create empty subset',
          '  - For each bit position j from 0 to n-1:',
          '    * If bit j is set in current number:',
          '      - Add nums[j] to subset',
          '  - Add subset to result',
          'Return result'
        ],
        code: [
          {
            language: 'javascript',
            code: `function subsets(nums) {
  const n = nums.length;
  const totalSubsets = 1 << n; // 2^n
  const result = [];
  
  for (let i = 0; i < totalSubsets; i++) {
    const subset = [];
    for (let j = 0; j < n; j++) {
      // Check if jth bit is set
      if (i & (1 << j)) {
        subset.push(nums[j]);
      }
    }
    result.push(subset);
  }
  
  return result;
}

module.exports = subsets;`
          },
          {
            language: 'typescript',
            code: `function subsets(nums: number[]): number[][] {
  const n = nums.length;
  const totalSubsets = 1 << n; // 2^n
  const result: number[][] = [];
  
  for (let i = 0; i < totalSubsets; i++) {
    const subset: number[] = [];
    for (let j = 0; j < n; j++) {
      // Check if jth bit is set
      if (i & (1 << j)) {
        subset.push(nums[j]);
      }
    }
    result.push(subset);
  }
  
  return result;
}

export default subsets;`
          },
          {
            language: 'python',
            code: `def subsets(nums):
    n = len(nums)
    total_subsets = 1 << n  # 2^n
    result = []
    
    for i in range(total_subsets):
        subset = []
        for j in range(n):
            # Check if jth bit is set
            if i & (1 << j):
                subset.append(nums[j])
        result.append(subset)
    
    return result`
          }
        ],
        complexity: {
          time: 'O(N * 2^N)',
          space: 'O(1)',
          explanation: 'We iterate through 2^N numbers, and for each we check N bits. Space is O(1) excluding output.'
        },
        pros: ['No recursion needed', 'Constant space complexity', 'Elegant mathematical approach'],
        cons: ['Less intuitive for beginners', 'Limited to problems where bit manipulation applies']
      }
    ]
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
    solutions: [
      {
        methodName: 'backtracking',
        title: 'Backtracking with Reuse',
        intuition: 'Since we can reuse numbers, at each step we try adding the current candidate and recursively solve for the reduced target. We backtrack when the target becomes negative or we find a valid combination.',
        explanation: 'We explore all possible combinations by trying each candidate number. For each candidate, we can either include it (and try again with the same candidate since reuse is allowed) or skip it and move to the next candidate. We track the current combination and add it to results when the target becomes zero.',
        algorithm: [
          'Sort candidates array (optional, for optimization)',
          'Create result array and current combination array',
          'Define backtrack function with parameters: start index, current combination, remaining target',
          'Base case: if remaining target is 0, add current combination to result',
          'Base case: if remaining target < 0, return (invalid path)',
          'For each candidate from start index to end:',
          '  - Add candidate to current combination',
          '  - Recursively call backtrack with same index (allow reuse), updated combination, reduced target',
          '  - Remove candidate from combination (backtrack)',
          'Return result'
        ],
        code: [
          {
            language: 'javascript',
            code: `function combinationSum(candidates, target) {
  const result = [];
  
  function backtrack(start, current, remaining) {
    if (remaining === 0) {
      result.push([...current]);
      return;
    }
    if (remaining < 0) return;
    
    for (let i = start; i < candidates.length; i++) {
      current.push(candidates[i]);
      backtrack(i, current, remaining - candidates[i]); // i not i+1 to allow reuse
      current.pop();
    }
  }
  
  backtrack(0, [], target);
  return result;
}

module.exports = combinationSum;`
          },
          {
            language: 'typescript',
            code: `function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  
  function backtrack(start: number, current: number[], remaining: number): void {
    if (remaining === 0) {
      result.push([...current]);
      return;
    }
    if (remaining < 0) return;
    
    for (let i = start; i < candidates.length; i++) {
      current.push(candidates[i]);
      backtrack(i, current, remaining - candidates[i]); // i not i+1 to allow reuse
      current.pop();
    }
  }
  
  backtrack(0, [], target);
  return result;
}

export default combinationSum;`
          },
          {
            language: 'python',
            code: `def combinationSum(candidates, target):
    result = []
    
    def backtrack(start, current, remaining):
        if remaining == 0:
            result.append(current[:])
            return
        if remaining < 0:
            return
        
        for i in range(start, len(candidates)):
            current.append(candidates[i])
            backtrack(i, current, remaining - candidates[i])  # i not i+1 to allow reuse
            current.pop()
    
    backtrack(0, [], target)
    return result`
          }
        ],
        complexity: {
          time: 'O(N^(T/M))',
          space: 'O(T/M)',
          explanation: 'Where N is number of candidates, T is target, M is minimal value. In worst case, we explore all combinations. Space is for recursion depth.'
        },
        pros: ['Handles unlimited reuse naturally', 'Pruning with early termination', 'Clear and intuitive logic'],
        cons: ['Can be slow for large targets', 'Exponential time complexity']
      }
    ]
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
    solutions: [
      {
        methodName: 'backtracking',
        title: 'Backtracking with Counting',
        intuition: 'We build valid parentheses strings by maintaining counts of open and close parentheses. We can add an open parenthesis if we have not used all n, and we can add a close parenthesis only if it would not exceed the number of open parentheses.',
        explanation: 'At each step, we have two choices: add "(" or add ")". However, these choices are constrained: we can only add "(" if we have not used all n open parentheses, and we can only add ")" if the number of close parentheses is less than the number of open parentheses (to maintain validity). When the string length reaches 2n, we have a complete valid combination.',
        algorithm: [
          'Initialize result array',
          'Define backtrack function with: current string, open count, close count',
          'Base case: if string length is 2n, add to result',
          'If open count < n:',
          '  - Add "(" to current string',
          '  - Recursively call with open count + 1',
          'If close count < open count:',
          '  - Add ")" to current string',
          '  - Recursively call with close count + 1',
          'Start backtracking with empty string, 0 open, 0 close',
          'Return result'
        ],
        code: [
          {
            language: 'javascript',
            code: `function generateParenthesis(n) {
  const result = [];
  
  function backtrack(current, open, close) {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }
    
    if (open < n) {
      backtrack(current + '(', open + 1, close);
    }
    if (close < open) {
      backtrack(current + ')', open, close + 1);
    }
  }
  
  backtrack('', 0, 0);
  return result;
}

module.exports = generateParenthesis;`
          },
          {
            language: 'typescript',
            code: `function generateParenthesis(n: number): string[] {
  const result: string[] = [];
  
  function backtrack(current: string, open: number, close: number): void {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }
    
    if (open < n) {
      backtrack(current + '(', open + 1, close);
    }
    if (close < open) {
      backtrack(current + ')', open, close + 1);
    }
  }
  
  backtrack('', 0, 0);
  return result;
}

export default generateParenthesis;`
          },
          {
            language: 'python',
            code: `def generateParenthesis(n):
    result = []
    
    def backtrack(current, open_count, close_count):
        if len(current) == 2 * n:
            result.append(current)
            return
        
        if open_count < n:
            backtrack(current + '(', open_count + 1, close_count)
        if close_count < open_count:
            backtrack(current + ')', open_count, close_count + 1)
    
    backtrack('', 0, 0)
    return result`
          }
        ],
        complexity: {
          time: 'O(4^N / sqrt(N))',
          space: 'O(N)',
          explanation: 'This is the Nth Catalan number. Space is O(N) for recursion depth and string building.'
        },
        pros: ['Generates only valid combinations', 'Efficient pruning with constraints', 'Elegant and concise'],
        cons: ['Still exponential growth', 'Recursion depth can be deep for large n']
      }
    ]
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
    solutions: [
      {
        methodName: 'hash-set',
        title: 'Hash Set Approach',
        intuition: 'Use a hash set to track numbers we have seen. If we see a number again, remove it from the set. The remaining number is the single one.',
        explanation: 'We iterate through the array and for each number, check if it exists in our set. If it does, we remove it (since it is a duplicate). If it does not, we add it. At the end, the set will contain only the single number that appears once.',
        algorithm: [
          'Create an empty set',
          'For each number in the array:',
          '  - If number is in set, remove it',
          '  - Otherwise, add it to set',
          'Return the only element in the set'
        ],
        code: [
          {
            language: 'javascript',
            code: `function singleNumber(nums) {
  const set = new Set();
  
  for (const num of nums) {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  }
  
  return [...set][0];
}

module.exports = singleNumber;`
          },
          {
            language: 'typescript',
            code: `function singleNumber(nums: number[]): number {
  const set = new Set<number>();
  
  for (const num of nums) {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  }
  
  return [...set][0];
}

export default singleNumber;`
          },
          {
            language: 'python',
            code: `def singleNumber(nums):
    seen = set()
    
    for num in nums:
        if num in seen:
            seen.remove(num)
        else:
            seen.add(num)
    
    return list(seen)[0]`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(N)',
          explanation: 'We iterate through the array once. Set operations are O(1). Space is O(N) for the set.'
        },
        pros: ['Easy to understand', 'Straightforward implementation'],
        cons: ['Uses O(N) extra space', 'Not optimal for this specific problem']
      },
      {
        methodName: 'xor',
        title: 'XOR Bit Manipulation',
        intuition: 'XOR has special properties: a ^ a = 0 and a ^ 0 = a. If we XOR all numbers together, duplicates cancel out (become 0), leaving only the single number.',
        explanation: 'The XOR operation is both commutative and associative. When we XOR a number with itself, we get 0. When we XOR any number with 0, we get the number itself. So if we XOR all numbers in the array, all the duplicates will cancel out to 0, and we will be left with the single number.',
        algorithm: [
          'Initialize result to 0',
          'For each number in the array:',
          '  - XOR result with the number',
          'Return result'
        ],
        code: [
          {
            language: 'javascript',
            code: `function singleNumber(nums) {
  let result = 0;
  
  for (const num of nums) {
    result ^= num;
  }
  
  return result;
}

module.exports = singleNumber;`
          },
          {
            language: 'typescript',
            code: `function singleNumber(nums: number[]): number {
  let result = 0;
  
  for (const num of nums) {
    result ^= num;
  }
  
  return result;
}

export default singleNumber;`
          },
          {
            language: 'python',
            code: `def singleNumber(nums):
    result = 0
    
    for num in nums:
        result ^= num
    
    return result`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(1)',
          explanation: 'Single pass through array with constant space. XOR operation is O(1).'
        },
        pros: ['Optimal space complexity O(1)', 'Very efficient', 'Elegant mathematical solution'],
        cons: ['Requires understanding of XOR properties', 'Not generalizable to other variations']
      }
    ]
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
    solutions: [
      {
        methodName: 'bit-shift',
        title: 'Bit Shift and Check',
        intuition: 'Check each bit position by shifting and using bitwise AND with 1. Count how many positions have a 1 bit.',
        explanation: 'We iterate through all 32 bit positions. For each position, we shift the number right and check if the least significant bit is 1 using n & 1. We count all the 1 bits we find.',
        algorithm: [
          'Initialize count to 0',
          'While n is not 0:',
          '  - If n & 1 equals 1, increment count',
          '  - Right shift n by 1 (n >>= 1)',
          'Return count'
        ],
        code: [
          {
            language: 'javascript',
            code: `function hammingWeight(n) {
  let count = 0;
  
  while (n !== 0) {
    count += n & 1;
    n >>>= 1; // Unsigned right shift
  }
  
  return count;
}

module.exports = hammingWeight;`
          },
          {
            language: 'typescript',
            code: `function hammingWeight(n: number): number {
  let count = 0;
  
  while (n !== 0) {
    count += n & 1;
    n >>>= 1; // Unsigned right shift
  }
  
  return count;
}

export default hammingWeight;`
          },
          {
            language: 'python',
            code: `def hammingWeight(n):
    count = 0
    
    while n:
        count += n & 1
        n >>= 1
    
    return count`
          }
        ],
        complexity: {
          time: 'O(log N)',
          space: 'O(1)',
          explanation: 'We iterate through all bits in the number. For a 32-bit integer, this is O(32) = O(1), but generally O(log N).'
        },
        pros: ['Simple and straightforward', 'Easy to understand'],
        cons: ['Checks all bits even if most are 0']
      },
      {
        methodName: 'brian-kernighan',
        title: 'Brian Kernighan\'s Algorithm',
        intuition: 'The operation n & (n-1) removes the rightmost 1 bit. We repeat this until n becomes 0, counting iterations.',
        explanation: 'When we subtract 1 from n, all bits after the rightmost 1 (including the rightmost 1) get flipped. When we AND this with n, the rightmost 1 becomes 0. This is more efficient because we only iterate as many times as there are 1 bits.',
        algorithm: [
          'Initialize count to 0',
          'While n is not 0:',
          '  - Set n = n & (n - 1) to remove rightmost 1',
          '  - Increment count',
          'Return count'
        ],
        code: [
          {
            language: 'javascript',
            code: `function hammingWeight(n) {
  let count = 0;
  
  while (n !== 0) {
    n &= (n - 1); // Remove rightmost 1
    count++;
  }
  
  return count;
}

module.exports = hammingWeight;`
          },
          {
            language: 'typescript',
            code: `function hammingWeight(n: number): number {
  let count = 0;
  
  while (n !== 0) {
    n &= (n - 1); // Remove rightmost 1
    count++;
  }
  
  return count;
}

export default hammingWeight;`
          },
          {
            language: 'python',
            code: `def hammingWeight(n):
    count = 0
    
    while n:
        n &= (n - 1)  # Remove rightmost 1
        count += 1
    
    return count`
          }
        ],
        complexity: {
          time: 'O(k)',
          space: 'O(1)',
          explanation: 'Where k is the number of 1 bits. Only iterates for each 1 bit, not all bits.'
        },
        pros: ['More efficient than bit shifting', 'Only iterates for 1 bits', 'Clever bit manipulation'],
        cons: ['Less intuitive for beginners']
      }
    ]
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
    solutions: [
      {
        methodName: 'dynamic-programming',
        title: 'Dynamic Programming',
        intuition: 'The number of 1 bits in i is related to the number of 1 bits in i/2. If i is even, it has the same number of 1s as i/2. If i is odd, it has one more 1 than i/2.',
        explanation: 'We can use the relationship: dp[i] = dp[i >> 1] + (i & 1). Right shifting i by 1 is equivalent to dividing by 2. The (i & 1) part checks if i is odd (has a 1 in the least significant bit). This allows us to build up the answer using previously computed results.',
        algorithm: [
          'Create array ans of size n + 1',
          'Set ans[0] = 0',
          'For i from 1 to n:',
          '  - ans[i] = ans[i >> 1] + (i & 1)',
          'Return ans'
        ],
        code: [
          {
            language: 'javascript',
            code: `function countBits(n) {
  const ans = new Array(n + 1).fill(0);
  
  for (let i = 1; i <= n; i++) {
    ans[i] = ans[i >> 1] + (i & 1);
  }
  
  return ans;
}

module.exports = countBits;`
          },
          {
            language: 'typescript',
            code: `function countBits(n: number): number[] {
  const ans: number[] = new Array(n + 1).fill(0);
  
  for (let i = 1; i <= n; i++) {
    ans[i] = ans[i >> 1] + (i & 1);
  }
  
  return ans;
}

export default countBits;`
          },
          {
            language: 'python',
            code: `def countBits(n):
    ans = [0] * (n + 1)
    
    for i in range(1, n + 1):
        ans[i] = ans[i >> 1] + (i & 1)
    
    return ans`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(1)',
          explanation: 'Single pass through numbers 0 to n. Space is O(1) excluding output array.'
        },
        pros: ['Optimal time complexity', 'Elegant DP solution', 'Constant time per number'],
        cons: ['Requires understanding of bit manipulation', 'Not immediately obvious']
      }
    ]
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
    solutions: [
      {
        methodName: 'sorting',
        title: 'Sorting Approach',
        intuition: 'Sort the array in descending order and return the kth element (at index k-1).',
        explanation: 'The simplest approach is to sort the entire array in descending order. Once sorted, the kth largest element will be at index k-1. This works but is not the most efficient solution.',
        algorithm: [
          'Sort nums in descending order',
          'Return nums[k - 1]'
        ],
        code: [
          {
            language: 'javascript',
            code: `function findKthLargest(nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
}

module.exports = findKthLargest;`
          },
          {
            language: 'typescript',
            code: `function findKthLargest(nums: number[], k: number): number {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
}

export default findKthLargest;`
          },
          {
            language: 'python',
            code: `def findKthLargest(nums, k):
    nums.sort(reverse=True)
    return nums[k - 1]`
          }
        ],
        complexity: {
          time: 'O(N log N)',
          space: 'O(1)',
          explanation: 'Sorting takes O(N log N). Space is O(1) if we sort in place.'
        },
        pros: ['Simple to implement', 'Works for any k'],
        cons: ['Not optimal time complexity', 'Sorts entire array unnecessarily']
      },
      {
        methodName: 'min-heap',
        title: 'Min Heap of Size K',
        intuition: 'Maintain a min heap of size k containing the k largest elements. The root of this heap is the kth largest element.',
        explanation: 'We iterate through the array and maintain a min heap of size k. For each element, if the heap size is less than k, we add it. If the heap is full and the current element is larger than the minimum (heap root), we remove the minimum and add the current element. At the end, the heap root is the kth largest.',
        algorithm: [
          'Create a min heap',
          'For each number in nums:',
          '  - If heap size < k, add number',
          '  - Else if number > heap minimum:',
          '    * Remove heap minimum',
          '    * Add number',
          'Return heap minimum'
        ],
        code: [
          {
            language: 'javascript',
            code: `function findKthLargest(nums, k) {
  // Min heap implementation using array
  const heap = [];
  
  function heapify(arr, i) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let smallest = i;
    
    if (left < arr.length && arr[left] < arr[smallest]) smallest = left;
    if (right < arr.length && arr[right] < arr[smallest]) smallest = right;
    
    if (smallest !== i) {
      [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
      heapify(arr, smallest);
    }
  }
  
  for (const num of nums) {
    if (heap.length < k) {
      heap.push(num);
      // Heapify from bottom up
      for (let i = Math.floor(heap.length / 2) - 1; i >= 0; i--) {
        heapify(heap, i);
      }
    } else if (num > heap[0]) {
      heap[0] = num;
      heapify(heap, 0);
    }
  }
  
  return heap[0];
}

module.exports = findKthLargest;`
          },
          {
            language: 'typescript',
            code: `function findKthLargest(nums: number[], k: number): number {
  // Min heap implementation using array
  const heap: number[] = [];
  
  function heapify(arr: number[], i: number): void {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let smallest = i;
    
    if (left < arr.length && arr[left] < arr[smallest]) smallest = left;
    if (right < arr.length && arr[right] < arr[smallest]) smallest = right;
    
    if (smallest !== i) {
      [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
      heapify(arr, smallest);
    }
  }
  
  for (const num of nums) {
    if (heap.length < k) {
      heap.push(num);
      // Heapify from bottom up
      for (let i = Math.floor(heap.length / 2) - 1; i >= 0; i--) {
        heapify(heap, i);
      }
    } else if (num > heap[0]) {
      heap[0] = num;
      heapify(heap, 0);
    }
  }
  
  return heap[0];
}

export default findKthLargest;`
          },
          {
            language: 'python',
            code: `import heapq

def findKthLargest(nums, k):
    heap = []
    
    for num in nums:
        if len(heap) < k:
            heapq.heappush(heap, num)
        elif num > heap[0]:
            heapq.heapreplace(heap, num)
    
    return heap[0]`
          }
        ],
        complexity: {
          time: 'O(N log k)',
          space: 'O(k)',
          explanation: 'We process N elements, each heap operation is O(log k). Space is O(k) for the heap.'
        },
        pros: ['Better than sorting for small k', 'Space efficient', 'Good for streaming data'],
        cons: ['More complex implementation', 'Heap operations have overhead']
      }
    ]
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
    solutions: [
      {
        methodName: 'hash-map-sorting',
        title: 'Hash Map with Sorting',
        intuition: 'Count frequencies using a hash map, then sort by frequency and return top k elements.',
        explanation: 'First, we build a frequency map counting how many times each number appears. Then we convert this map to an array of [number, frequency] pairs, sort by frequency in descending order, and take the first k elements.',
        algorithm: [
          'Create frequency map',
          'For each number in nums, increment its count in map',
          'Convert map to array of [num, freq] pairs',
          'Sort pairs by frequency in descending order',
          'Return first k numbers from sorted array'
        ],
        code: [
          {
            language: 'javascript',
            code: `function topKFrequent(nums, k) {
  const freqMap = new Map();
  
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }
  
  return [...freqMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([num]) => num);
}

module.exports = topKFrequent;`
          },
          {
            language: 'typescript',
            code: `function topKFrequent(nums: number[], k: number): number[] {
  const freqMap = new Map<number, number>();
  
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }
  
  return [...freqMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([num]) => num);
}

export default topKFrequent;`
          },
          {
            language: 'python',
            code: `def topKFrequent(nums, k):
    from collections import Counter
    
    freq_map = Counter(nums)
    return [num for num, _ in freq_map.most_common(k)]`
          }
        ],
        complexity: {
          time: 'O(N log N)',
          space: 'O(N)',
          explanation: 'Counting is O(N), sorting is O(N log N). Space is O(N) for the frequency map.'
        },
        pros: ['Simple and straightforward', 'Easy to implement'],
        cons: ['Not optimal due to sorting', 'Overkill for this problem']
      },
      {
        methodName: 'bucket-sort',
        title: 'Bucket Sort by Frequency',
        intuition: 'Use bucket sort where bucket index represents frequency. Since max frequency is n, we can use an array of size n+1 as buckets.',
        explanation: 'After counting frequencies, we create buckets where bucket[i] contains all numbers with frequency i. Then we iterate from the highest frequency bucket down, collecting numbers until we have k elements. This avoids the O(N log N) sorting.',
        algorithm: [
          'Count frequencies with hash map',
          'Create buckets array of size n + 1',
          'For each [num, freq] in frequency map:',
          '  - Add num to buckets[freq]',
          'Iterate buckets from high to low frequency:',
          '  - Add numbers to result until we have k elements',
          'Return result'
        ],
        code: [
          {
            language: 'javascript',
            code: `function topKFrequent(nums, k) {
  const freqMap = new Map();
  
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }
  
  const buckets = Array(nums.length + 1).fill(null).map(() => []);
  
  for (const [num, freq] of freqMap) {
    buckets[freq].push(num);
  }
  
  const result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    if (buckets[i].length > 0) {
      result.push(...buckets[i]);
    }
  }
  
  return result.slice(0, k);
}

module.exports = topKFrequent;`
          },
          {
            language: 'typescript',
            code: `function topKFrequent(nums: number[], k: number): number[] {
  const freqMap = new Map<number, number>();
  
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }
  
  const buckets: number[][] = Array(nums.length + 1).fill(null).map(() => []);
  
  for (const [num, freq] of freqMap) {
    buckets[freq].push(num);
  }
  
  const result: number[] = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    if (buckets[i].length > 0) {
      result.push(...buckets[i]);
    }
  }
  
  return result.slice(0, k);
}

export default topKFrequent;`
          },
          {
            language: 'python',
            code: `def topKFrequent(nums, k):
    from collections import Counter
    
    freq_map = Counter(nums)
    buckets = [[] for _ in range(len(nums) + 1)]
    
    for num, freq in freq_map.items():
        buckets[freq].append(num)
    
    result = []
    for i in range(len(buckets) - 1, -1, -1):
        if buckets[i]:
            result.extend(buckets[i])
            if len(result) >= k:
                break
    
    return result[:k]`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(N)',
          explanation: 'Counting is O(N), bucketing is O(N), collecting results is O(N). All linear time.'
        },
        pros: ['Optimal O(N) time complexity', 'No sorting needed', 'Clever use of bucket sort'],
        cons: ['More complex than sorting approach', 'Uses extra space for buckets']
      }
    ]
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
    solutions: [
      {
        methodName: 'trie-with-map',
        title: 'Trie Using Hash Map',
        intuition: 'A trie is a tree where each node represents a character. We use a hash map at each node to store children, and a boolean flag to mark word endings.',
        explanation: 'Each TrieNode contains a map of children (character -> TrieNode) and an isEnd flag. For insert, we traverse/create nodes for each character. For search, we traverse and check isEnd. For startsWith, we just check if the path exists.',
        algorithm: [
          'TrieNode structure: children map, isEnd flag',
          'Insert:',
          '  - Start at root',
          '  - For each character in word:',
          '    * If character not in children, create new node',
          '    * Move to child node',
          '  - Mark last node as end of word',
          'Search:',
          '  - Traverse path for word',
          '  - Return true if path exists and ends at a word',
          'StartsWith:',
          '  - Traverse path for prefix',
          '  - Return true if path exists'
        ],
        code: [
          {
            language: 'javascript',
            code: `class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  
  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }
    node.isEnd = true;
  }
  
  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }
    return node.isEnd;
  }
  
  startsWith(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }
    return true;
  }
}

module.exports = Trie;`
          },
          {
            language: 'typescript',
            code: `class TrieNode {
  children: Map<string, TrieNode>;
  isEnd: boolean;
  
  constructor() {
    this.children = new Map();
    this.isEnd = false;
  }
}

class Trie {
  private root: TrieNode;
  
  constructor() {
    this.root = new TrieNode();
  }
  
  insert(word: string): void {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
    }
    node.isEnd = true;
  }
  
  search(word: string): boolean {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char)!;
    }
    return node.isEnd;
  }
  
  startsWith(prefix: string): boolean {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char)!;
    }
    return true;
  }
}

export default Trie;`
          },
          {
            language: 'python',
            code: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()
    
    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end = True
    
    def search(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_end
    
    def startsWith(self, prefix):
        node = self.root
        for char in prefix:
            if char not in node.children:
                return False
            node = node.children[char]
        return True`
          }
        ],
        complexity: {
          time: 'O(M)',
          space: 'O(M * N)',
          explanation: 'Where M is word/prefix length. Each operation is O(M). Space is O(M * N) for N words of average length M.'
        },
        pros: ['Efficient prefix operations', 'Fast lookups', 'Natural for autocomplete'],
        cons: ['Space intensive', 'More complex than hash set']
      }
    ]
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
    solutions: [
      {
        methodName: 'dynamic-programming-2d',
        title: '2D Dynamic Programming',
        intuition: 'The number of paths to cell (i, j) is the sum of paths from the cell above and the cell to the left, since we can only move right or down.',
        explanation: 'We create a 2D DP table where dp[i][j] represents the number of unique paths to reach cell (i, j). The base case is that there is only 1 way to reach any cell in the first row or first column (moving straight right or straight down). For any other cell, we add the paths from above and from the left.',
        algorithm: [
          'Create m x n DP table',
          'Initialize first row to 1 (only one way to reach)',
          'Initialize first column to 1',
          'For each cell (i, j) from (1, 1) to (m-1, n-1):',
          '  - dp[i][j] = dp[i-1][j] + dp[i][j-1]',
          'Return dp[m-1][n-1]'
        ],
        code: [
          {
            language: 'javascript',
            code: `function uniquePaths(m, n) {
  const dp = Array(m).fill(0).map(() => Array(n).fill(0));
  
  // Initialize first row and column
  for (let i = 0; i < m; i++) dp[i][0] = 1;
  for (let j = 0; j < n; j++) dp[0][j] = 1;
  
  // Fill the DP table
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i-1][j] + dp[i][j-1];
    }
  }
  
  return dp[m-1][n-1];
}

module.exports = uniquePaths;`
          },
          {
            language: 'typescript',
            code: `function uniquePaths(m: number, n: number): number {
  const dp: number[][] = Array(m).fill(0).map(() => Array(n).fill(0));
  
  // Initialize first row and column
  for (let i = 0; i < m; i++) dp[i][0] = 1;
  for (let j = 0; j < n; j++) dp[0][j] = 1;
  
  // Fill the DP table
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i-1][j] + dp[i][j-1];
    }
  }
  
  return dp[m-1][n-1];
}

export default uniquePaths;`
          },
          {
            language: 'python',
            code: `def uniquePaths(m, n):
    dp = [[0] * n for _ in range(m)]
    
    # Initialize first row and column
    for i in range(m):
        dp[i][0] = 1
    for j in range(n):
        dp[0][j] = 1
    
    # Fill the DP table
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
    
    return dp[m-1][n-1]`
          }
        ],
        complexity: {
          time: 'O(M * N)',
          space: 'O(M * N)',
          explanation: 'We fill an M x N table. Each cell is computed in O(1) time.'
        },
        pros: ['Clear and intuitive', 'Easy to understand DP transition'],
        cons: ['Uses O(M * N) space', 'Can be optimized']
      },
      {
        methodName: 'dynamic-programming-1d',
        title: 'Space-Optimized 1D DP',
        intuition: 'We only need the previous row to compute the current row. We can use a single array and update it in place.',
        explanation: 'Instead of maintaining a full 2D table, we use a 1D array representing the current row. As we process each row, we update the array in place. The value at dp[j] represents paths to current position, which is the sum of dp[j] (from above) and dp[j-1] (from left).',
        algorithm: [
          'Create 1D array dp of size n, initialized to 1',
          'For each row i from 1 to m-1:',
          '  - For each column j from 1 to n-1:',
          '    * dp[j] = dp[j] + dp[j-1]',
          'Return dp[n-1]'
        ],
        code: [
          {
            language: 'javascript',
            code: `function uniquePaths(m, n) {
  const dp = Array(n).fill(1);
  
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[j] += dp[j-1];
    }
  }
  
  return dp[n-1];
}

module.exports = uniquePaths;`
          },
          {
            language: 'typescript',
            code: `function uniquePaths(m: number, n: number): number {
  const dp: number[] = Array(n).fill(1);
  
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[j] += dp[j-1];
    }
  }
  
  return dp[n-1];
}

export default uniquePaths;`
          },
          {
            language: 'python',
            code: `def uniquePaths(m, n):
    dp = [1] * n
    
    for i in range(1, m):
        for j in range(1, n):
            dp[j] += dp[j-1]
    
    return dp[n-1]`
          }
        ],
        complexity: {
          time: 'O(M * N)',
          space: 'O(N)',
          explanation: 'Same time complexity but space reduced to O(N) by using only one row.'
        },
        pros: ['Optimal space complexity O(N)', 'Still easy to understand', 'Efficient'],
        cons: ['Slightly less intuitive than 2D approach']
      }
    ]
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
    solutions: [
      {
        methodName: 'dynamic-programming',
        title: 'Dynamic Programming',
        intuition: 'Build up the solution by checking if each prefix of the string can be segmented. For each position, check all possible last words.',
        explanation: 'We use a DP array where dp[i] represents whether the substring s[0:i] can be segmented into dictionary words. For each position i, we check all positions j < i to see if s[0:j] can be segmented (dp[j] is true) and s[j:i] is in the dictionary. If both conditions are met, dp[i] is true.',
        algorithm: [
          'Create DP array of size n + 1, initialize dp[0] = true',
          'Convert wordDict to Set for O(1) lookup',
          'For each position i from 1 to n:',
          '  - For each position j from 0 to i-1:',
          '    * If dp[j] is true and s[j:i] is in dictionary:',
          '      - Set dp[i] = true and break',
          'Return dp[n]'
        ],
        code: [
          {
            language: 'javascript',
            code: `function wordBreak(s, wordDict) {
  const n = s.length;
  const wordSet = new Set(wordDict);
  const dp = Array(n + 1).fill(false);
  dp[0] = true;
  
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  
  return dp[n];
}

module.exports = wordBreak;`
          },
          {
            language: 'typescript',
            code: `function wordBreak(s: string, wordDict: string[]): boolean {
  const n = s.length;
  const wordSet = new Set(wordDict);
  const dp: boolean[] = Array(n + 1).fill(false);
  dp[0] = true;
  
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  
  return dp[n];
}

export default wordBreak;`
          },
          {
            language: 'python',
            code: `def wordBreak(s, wordDict):
    n = len(s)
    word_set = set(wordDict)
    dp = [False] * (n + 1)
    dp[0] = True
    
    for i in range(1, n + 1):
        for j in range(i):
            if dp[j] and s[j:i] in word_set:
                dp[i] = True
                break
    
    return dp[n]`
          }
        ],
        complexity: {
          time: 'O(N^2 * M)',
          space: 'O(N)',
          explanation: 'Where N is string length and M is average word length. We check all substrings. Space is O(N) for DP array.'
        },
        pros: ['Clear DP solution', 'Handles all edge cases', 'Easy to understand'],
        cons: ['Can be slow for long strings', 'Substring operations add overhead']
      }
    ]
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
    solutions: [
      {
        methodName: 'dynamic-programming-n2',
        title: 'Dynamic Programming O(N²)',
        intuition: 'For each position i, track the length of the longest increasing subsequence ending at that position by checking all previous positions.',
        explanation: 'We maintain a DP array where dp[i] represents the length of the longest increasing subsequence ending at index i. For each position i, we check all previous positions j < i. If nums[j] < nums[i], we can extend the subsequence ending at j by including nums[i], so dp[i] = max(dp[i], dp[j] + 1).',
        algorithm: [
          'Create DP array of size n, initialize all to 1',
          'For each position i from 1 to n-1:',
          '  - For each position j from 0 to i-1:',
          '    * If nums[j] < nums[i]:',
          '      - dp[i] = max(dp[i], dp[j] + 1)',
          'Return max value in dp array'
        ],
        code: [
          {
            language: 'javascript',
            code: `function lengthOfLIS(nums) {
  const n = nums.length;
  const dp = Array(n).fill(1);
  
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  
  return Math.max(...dp);
}

module.exports = lengthOfLIS;`
          },
          {
            language: 'typescript',
            code: `function lengthOfLIS(nums: number[]): number {
  const n = nums.length;
  const dp: number[] = Array(n).fill(1);
  
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  
  return Math.max(...dp);
}

export default lengthOfLIS;`
          },
          {
            language: 'python',
            code: `def lengthOfLIS(nums):
    n = len(nums)
    dp = [1] * n
    
    for i in range(1, n):
        for j in range(i):
            if nums[j] < nums[i]:
                dp[i] = max(dp[i], dp[j] + 1)
    
    return max(dp)`
          }
        ],
        complexity: {
          time: 'O(N²)',
          space: 'O(N)',
          explanation: 'Nested loops over array. Space is O(N) for DP array.'
        },
        pros: ['Straightforward DP approach', 'Easy to understand and implement'],
        cons: ['Quadratic time complexity', 'Not optimal for large inputs']
      },
      {
        methodName: 'binary-search',
        title: 'Binary Search with Patience Sorting',
        intuition: 'Maintain an array of smallest tail elements for all increasing subsequences of each length. Use binary search to efficiently update this array.',
        explanation: 'We maintain a tails array where tails[i] is the smallest ending element of all increasing subsequences of length i+1. For each number, we binary search to find where it should be placed in tails. If it extends the longest subsequence, we append it. Otherwise, we replace an existing element to keep tails optimal.',
        algorithm: [
          'Create empty tails array',
          'For each number in nums:',
          '  - Binary search for position in tails where number should go',
          '  - If position equals tails length, append number',
          '  - Otherwise, replace tails[position] with number',
          'Return length of tails array'
        ],
        code: [
          {
            language: 'javascript',
            code: `function lengthOfLIS(nums) {
  const tails = [];
  
  for (const num of nums) {
    let left = 0, right = tails.length;
    
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (tails[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    
    if (left === tails.length) {
      tails.push(num);
    } else {
      tails[left] = num;
    }
  }
  
  return tails.length;
}

module.exports = lengthOfLIS;`
          },
          {
            language: 'typescript',
            code: `function lengthOfLIS(nums: number[]): number {
  const tails: number[] = [];
  
  for (const num of nums) {
    let left = 0, right = tails.length;
    
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (tails[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    
    if (left === tails.length) {
      tails.push(num);
    } else {
      tails[left] = num;
    }
  }
  
  return tails.length;
}

export default lengthOfLIS;`
          },
          {
            language: 'python',
            code: `def lengthOfLIS(nums):
    from bisect import bisect_left
    
    tails = []
    
    for num in nums:
        pos = bisect_left(tails, num)
        if pos == len(tails):
            tails.append(num)
        else:
            tails[pos] = num
    
    return len(tails)`
          }
        ],
        complexity: {
          time: 'O(N log N)',
          space: 'O(N)',
          explanation: 'Binary search for each element. Space is O(N) for tails array.'
        },
        pros: ['Optimal time complexity', 'Efficient for large inputs', 'Elegant algorithm'],
        cons: ['More complex to understand', 'Requires binary search knowledge']
      }
    ]
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
    solutions: [
      {
        methodName: 'two-stacks',
        title: 'Two Stacks Approach',
        intuition: 'Use two parallel stacks: one for values and one for tracking the minimum at each level.',
        explanation: 'We maintain two stacks. The main stack stores all values. The min stack stores the minimum value at each level. When pushing, we add to both stacks (min stack gets the minimum of new value and current min). When popping, we remove from both. This ensures getMin is always O(1).',
        algorithm: [
          'Initialize two stacks: stack and minStack',
          'Push: add val to stack, add min(val, minStack.top()) to minStack',
          'Pop: remove from both stacks',
          'Top: return stack.top()',
          'GetMin: return minStack.top()'
        ],
        code: [
          {
            language: 'javascript',
            code: `class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  
  push(val) {
    this.stack.push(val);
    const min = this.minStack.length === 0 
      ? val 
      : Math.min(val, this.minStack[this.minStack.length - 1]);
    this.minStack.push(min);
  }
  
  pop() {
    this.stack.pop();
    this.minStack.pop();
  }
  
  top() {
    return this.stack[this.stack.length - 1];
  }
  
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

module.exports = MinStack;`
          },
          {
            language: 'typescript',
            code: `class MinStack {
  private stack: number[];
  private minStack: number[];
  
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  
  push(val: number): void {
    this.stack.push(val);
    const min = this.minStack.length === 0 
      ? val 
      : Math.min(val, this.minStack[this.minStack.length - 1]);
    this.minStack.push(min);
  }
  
  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }
  
  top(): number {
    return this.stack[this.stack.length - 1];
  }
  
  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

export default MinStack;`
          },
          {
            language: 'python',
            code: `class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []
    
    def push(self, val):
        self.stack.append(val)
        min_val = val if not self.min_stack else min(val, self.min_stack[-1])
        self.min_stack.append(min_val)
    
    def pop(self):
        self.stack.pop()
        self.min_stack.pop()
    
    def top(self):
        return self.stack[-1]
    
    def getMin(self):
        return self.min_stack[-1]`
          }
        ],
        complexity: {
          time: 'O(1)',
          space: 'O(N)',
          explanation: 'All operations are O(1). Space is O(N) for both stacks.'
        },
        pros: ['All operations O(1)', 'Simple and clean', 'Easy to implement'],
        cons: ['Uses 2x space', 'Redundant storage of mins']
      }
    ]
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
    solutions: [
      {
        methodName: 'hashmap-doubly-linked-list',
        title: 'HashMap + Doubly Linked List',
        intuition: 'Use a hash map for O(1) access and a doubly linked list to track recency. Most recent items are at the head, least recent at the tail.',
        explanation: 'We combine a hash map (for O(1) key lookup) with a doubly linked list (for O(1) insertion/deletion and recency tracking). The map stores key -> node mappings. When accessing a key, we move its node to the head. When adding a new key at capacity, we remove the tail node and its map entry.',
        algorithm: [
          'Create hash map and doubly linked list with dummy head/tail',
          'Get(key):',
          '  - If key not in map, return -1',
          '  - Move node to head (most recent)',
          '  - Return node value',
          'Put(key, value):',
          '  - If key exists, update value and move to head',
          '  - Otherwise, create new node and add to head',
          '  - If over capacity, remove tail node and its map entry'
        ],
        code: [
          {
            language: 'javascript',
            code: `class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  
  get(key) {
    if (!this.map.has(key)) return -1;
    const node = this.map.get(key);
    this.remove(node);
    this.addToHead(node);
    return node.value;
  }
  
  put(key, value) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.value = value;
      this.remove(node);
      this.addToHead(node);
    } else {
      const node = new Node(key, value);
      this.map.set(key, node);
      this.addToHead(node);
      
      if (this.map.size > this.capacity) {
        const lru = this.tail.prev;
        this.remove(lru);
        this.map.delete(lru.key);
      }
    }
  }
  
  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
  
  addToHead(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }
}

module.exports = LRUCache;`
          },
          {
            language: 'typescript',
            code: `class Node {
  key: number;
  value: number;
  prev: Node | null;
  next: Node | null;
  
  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  private capacity: number;
  private map: Map<number, Node>;
  private head: Node;
  private tail: Node;
  
  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  
  get(key: number): number {
    if (!this.map.has(key)) return -1;
    const node = this.map.get(key)!;
    this.remove(node);
    this.addToHead(node);
    return node.value;
  }
  
  put(key: number, value: number): void {
    if (this.map.has(key)) {
      const node = this.map.get(key)!;
      node.value = value;
      this.remove(node);
      this.addToHead(node);
    } else {
      const node = new Node(key, value);
      this.map.set(key, node);
      this.addToHead(node);
      
      if (this.map.size > this.capacity) {
        const lru = this.tail.prev!;
        this.remove(lru);
        this.map.delete(lru.key);
      }
    }
  }
  
  private remove(node: Node): void {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
  }
  
  private addToHead(node: Node): void {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next!.prev = node;
    this.head.next = node;
  }
}

export default LRUCache;`
          },
          {
            language: 'python',
            code: `class Node:
    def __init__(self, key=0, value=0):
        self.key = key
        self.value = value
        self.prev = None
        self.next = None

class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = {}
        self.head = Node()
        self.tail = Node()
        self.head.next = self.tail
        self.tail.prev = self.head
    
    def get(self, key):
        if key not in self.cache:
            return -1
        node = self.cache[key]
        self._remove(node)
        self._add_to_head(node)
        return node.value
    
    def put(self, key, value):
        if key in self.cache:
            node = self.cache[key]
            node.value = value
            self._remove(node)
            self._add_to_head(node)
        else:
            node = Node(key, value)
            self.cache[key] = node
            self._add_to_head(node)
            
            if len(self.cache) > self.capacity:
                lru = self.tail.prev
                self._remove(lru)
                del self.cache[lru.key]
    
    def _remove(self, node):
        node.prev.next = node.next
        node.next.prev = node.prev
    
    def _add_to_head(self, node):
        node.next = self.head.next
        node.prev = self.head
        self.head.next.prev = node
        self.head.next = node`
          }
        ],
        complexity: {
          time: 'O(1)',
          space: 'O(capacity)',
          explanation: 'Both get and put are O(1). Space is O(capacity) for map and list.'
        },
        pros: ['Optimal O(1) operations', 'Efficient LRU tracking', 'Industry standard solution'],
        cons: ['Complex implementation', 'Requires understanding of linked lists']
      }
    ]
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
    solutions: [
      {
        methodName: 'three-reversals',
        title: 'Three Reversals Approach',
        intuition: 'Rotating right by k is equivalent to reversing the entire array, then reversing the first k elements, then reversing the remaining n-k elements.',
        explanation: 'This elegant solution uses three array reversals. First, reverse the entire array. Then reverse the first k elements to put them in correct order. Finally, reverse the last n-k elements. This achieves the rotation in-place with O(1) extra space.',
        algorithm: [
          'Normalize k: k = k % n (handle k > n)',
          'Reverse entire array',
          'Reverse first k elements',
          'Reverse last n-k elements'
        ],
        code: [
          {
            language: 'javascript',
            code: `function rotate(nums, k) {
  const n = nums.length;
  k = k % n;
  
  function reverse(start, end) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }
  
  reverse(0, n - 1);
  reverse(0, k - 1);
  reverse(k, n - 1);
}

module.exports = rotate;`
          },
          {
            language: 'typescript',
            code: `function rotate(nums: number[], k: number): void {
  const n = nums.length;
  k = k % n;
  
  function reverse(start: number, end: number): void {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }
  
  reverse(0, n - 1);
  reverse(0, k - 1);
  reverse(k, n - 1);
}

export default rotate;`
          },
          {
            language: 'python',
            code: `def rotate(nums, k):
    n = len(nums)
    k = k % n
    
    def reverse(start, end):
        while start < end:
            nums[start], nums[end] = nums[end], nums[start]
            start += 1
            end -= 1
    
    reverse(0, n - 1)
    reverse(0, k - 1)
    reverse(k, n - 1)`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(1)',
          explanation: 'Three passes through the array, each O(N). Space is O(1) as we modify in-place.'
        },
        pros: ['Optimal space O(1)', 'In-place modification', 'Elegant solution'],
        cons: ['Less intuitive than using extra array', 'Requires understanding of reversal trick']
      }
    ]
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
    solutions: [
      {
        methodName: 'prefix-suffix-products',
        title: 'Prefix and Suffix Products',
        intuition: 'For each position i, the result is the product of all elements to the left times all elements to the right. We can compute these using prefix and suffix products.',
        explanation: 'We make two passes. First pass builds prefix products (product of all elements before i) in the result array. Second pass multiplies by suffix products (product of all elements after i) using a running variable. This avoids division and uses O(1) extra space.',
        algorithm: [
          'Create result array of size n',
          'First pass (left to right):',
          '  - result[i] = product of all elements before i',
          '  - Use running prefix variable',
          'Second pass (right to left):',
          '  - Multiply result[i] by product of all elements after i',
          '  - Use running suffix variable',
          'Return result'
        ],
        code: [
          {
            language: 'javascript',
            code: `function productExceptSelf(nums) {
  const n = nums.length;
  const result = Array(n).fill(1);
  
  // Build prefix products
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  
  // Multiply by suffix products
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }
  
  return result;
}

module.exports = productExceptSelf;`
          },
          {
            language: 'typescript',
            code: `function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const result: number[] = Array(n).fill(1);
  
  // Build prefix products
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  
  // Multiply by suffix products
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }
  
  return result;
}

export default productExceptSelf;`
          },
          {
            language: 'python',
            code: `def productExceptSelf(nums):
    n = len(nums)
    result = [1] * n
    
    # Build prefix products
    prefix = 1
    for i in range(n):
        result[i] = prefix
        prefix *= nums[i]
    
    # Multiply by suffix products
    suffix = 1
    for i in range(n - 1, -1, -1):
        result[i] *= suffix
        suffix *= nums[i]
    
    return result`
          },
          {
            language: 'java',
            code: `class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];
        
        // Build prefix products
        int prefix = 1;
        for (int i = 0; i < n; i++) {
            result[i] = prefix;
            prefix *= nums[i];
        }
        
        // Multiply by suffix products
        int suffix = 1;
        for (int i = n - 1; i >= 0; i--) {
            result[i] *= suffix;
            suffix *= nums[i];
        }
        
        return result;
    }
}`
          },
          {
            language: 'cpp',
            code: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int n = nums.size();
        vector<int> result(n, 1);
        
        // Build prefix products
        int prefix = 1;
        for (int i = 0; i < n; i++) {
            result[i] = prefix;
            prefix *= nums[i];
        }
        
        // Multiply by suffix products
        int suffix = 1;
        for (int i = n - 1; i >= 0; i--) {
            result[i] *= suffix;
            suffix *= nums[i];
        }
        
        return result;
    }
};`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(1)',
          explanation: 'Two passes through array. Space is O(1) excluding output array.'
        },
        pros: ['Optimal time and space', 'No division needed', 'Clean two-pass solution'],
        cons: ['Requires two passes', 'Less intuitive than division approach']
      }
    ]
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
    solutions: [
      {
        methodName: 'binary-search',
        title: 'Binary Search',
        intuition: 'Use binary search to find the rotation point. The minimum element is where the sorted order breaks.',
        explanation: 'In a rotated sorted array, one half is always sorted. We compare the middle element with the rightmost element. If mid > right, the minimum is in the right half (rotation point is there). Otherwise, it is in the left half including mid.',
        algorithm: [
          'Initialize left = 0, right = n - 1',
          'While left < right:',
          '  - mid = (left + right) / 2',
          '  - If nums[mid] > nums[right]:',
          '    * Minimum is in right half: left = mid + 1',
          '  - Else:',
          '    * Minimum is in left half: right = mid',
          'Return nums[left]'
        ],
        code: [
          {
            language: 'javascript',
            code: `function findMin(nums) {
  let left = 0, right = nums.length - 1;
  
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  
  return nums[left];
}

module.exports = findMin;`
          },
          {
            language: 'typescript',
            code: `function findMin(nums: number[]): number {
  let left = 0, right = nums.length - 1;
  
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  
  return nums[left];
}

export default findMin;`
          },
          {
            language: 'python',
            code: `def findMin(nums):
    left, right = 0, len(nums) - 1
    
    while left < right:
        mid = (left + right) // 2
        
        if nums[mid] > nums[right]:
            left = mid + 1
        else:
            right = mid
    
    return nums[left]`
          }
        ],
        complexity: {
          time: 'O(log N)',
          space: 'O(1)',
          explanation: 'Binary search halves the search space each iteration. Constant space.'
        },
        pros: ['Optimal O(log N) time', 'Simple binary search', 'Constant space'],
        cons: ['Requires understanding of rotation properties']
      }
    ]
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
    solutions: [
      {
        methodName: 'modified-binary-search',
        title: 'Modified Binary Search',
        intuition: 'Use binary search but account for rotation. Determine which half is sorted, then check if target is in that sorted half.',
        explanation: 'At each step, one half of the array is guaranteed to be sorted. We check which half is sorted by comparing nums[left] with nums[mid]. Then we check if the target falls within the sorted half. If yes, search that half; otherwise, search the other half.',
        algorithm: [
          'Initialize left = 0, right = n - 1',
          'While left <= right:',
          '  - mid = (left + right) / 2',
          '  - If nums[mid] == target, return mid',
          '  - If left half is sorted (nums[left] <= nums[mid]):',
          '    * If target in [nums[left], nums[mid]], search left',
          '    * Else search right',
          '  - Else right half is sorted:',
          '    * If target in [nums[mid], nums[right]], search right',
          '    * Else search left',
          'Return -1'
        ],
        code: [
          {
            language: 'javascript',
            code: `function search(nums, target) {
  let left = 0, right = nums.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (nums[mid] === target) return mid;
    
    // Check if left half is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // Right half is sorted
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  
  return -1;
}

module.exports = search;`
          },
          {
            language: 'typescript',
            code: `function search(nums: number[], target: number): number {
  let left = 0, right = nums.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (nums[mid] === target) return mid;
    
    // Check if left half is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // Right half is sorted
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  
  return -1;
}

export default search;`
          },
          {
            language: 'python',
            code: `def search(nums, target):
    left, right = 0, len(nums) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if nums[mid] == target:
            return mid
        
        # Check if left half is sorted
        if nums[left] <= nums[mid]:
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:
            # Right half is sorted
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
    
    return -1`
          }
        ],
        complexity: {
          time: 'O(log N)',
          space: 'O(1)',
          explanation: 'Binary search with O(log N) time. Constant space.'
        },
        pros: ['Optimal O(log N) time', 'Handles rotation elegantly', 'Constant space'],
        cons: ['More complex than standard binary search', 'Requires careful boundary checks']
      }
    ]
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
    solutions: [
      {
        methodName: 'sort-two-pointers',
        title: 'Sort + Two Pointers',
        intuition: 'Sort the array first. For each element, use two pointers to find pairs that sum to the negative of that element.',
        explanation: 'After sorting, we fix the first element and use two pointers (left and right) to find pairs in the remaining array that sum to -nums[i]. We skip duplicates to avoid duplicate triplets. This reduces the 3Sum problem to multiple 2Sum problems.',
        algorithm: [
          'Sort nums array',
          'For each index i from 0 to n-3:',
          '  - Skip duplicates for i',
          '  - Set left = i + 1, right = n - 1',
          '  - While left < right:',
          '    * sum = nums[i] + nums[left] + nums[right]',
          '    * If sum == 0: add triplet, skip duplicates, move both pointers',
          '    * If sum < 0: move left pointer right',
          '    * If sum > 0: move right pointer left',
          'Return result'
        ],
        code: [
          {
            language: 'javascript',
            code: `function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    
    let left = i + 1, right = nums.length - 1;
    
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  
  return result;
}

module.exports = threeSum;`
          },
          {
            language: 'typescript',
            code: `function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];
  
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    
    let left = i + 1, right = nums.length - 1;
    
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  
  return result;
}

export default threeSum;`
          },
          {
            language: 'python',
            code: `def threeSum(nums):
    nums.sort()
    result = []
    
    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        
        left, right = i + 1, len(nums) - 1
        
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            
            if total == 0:
                result.append([nums[i], nums[left], nums[right]])
                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1
                left += 1
                right -= 1
            elif total < 0:
                left += 1
            else:
                right -= 1
    
    return result`
          },
          {
            language: 'java',
            code: `import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> result = new ArrayList<>();
        
        for (int i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            
            int left = i + 1, right = nums.length - 1;
            
            while (left < right) {
                int sum = nums[i] + nums[left] + nums[right];
                
                if (sum == 0) {
                    result.add(Arrays.asList(nums[i], nums[left], nums[right]));
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    while (left < right && nums[right] == nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        
        return result;
    }
}`
          },
          {
            language: 'cpp',
            code: `#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        vector<vector<int>> result;
        
        for (int i = 0; i < nums.size() - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            
            int left = i + 1, right = nums.size() - 1;
            
            while (left < right) {
                int sum = nums[i] + nums[left] + nums[right];
                
                if (sum == 0) {
                    result.push_back({nums[i], nums[left], nums[right]});
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    while (left < right && nums[right] == nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        
        return result;
    }
};`
          }
        ],
        complexity: {
          time: 'O(N²)',
          space: 'O(1)',
          explanation: 'Sorting is O(N log N), nested loops are O(N²). Space is O(1) excluding output.'
        },
        pros: ['Optimal time complexity', 'Handles duplicates elegantly', 'Clear two-pointer logic'],
        cons: ['Requires sorting', 'Modifies input order']
      }
    ]
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
    solutions: [
      {
        methodName: 'hash-map-sorted-key',
        title: 'Hash Map with Sorted String Key',
        intuition: 'Anagrams have the same characters, so when sorted they produce the same string. Use sorted string as hash map key.',
        explanation: 'For each string, sort its characters to create a canonical form. Use this sorted string as a key in a hash map. All anagrams will map to the same key, so they will be grouped together in the map values.',
        algorithm: [
          'Create hash map',
          'For each string in strs:',
          '  - Sort the string to get key',
          '  - Add string to map[key] array',
          'Return all values from map'
        ],
        code: [
          {
            language: 'javascript',
            code: `function groupAnagrams(strs) {
  const map = new Map();
  
  for (const str of strs) {
    const key = str.split('').sort().join('');
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }
  
  return Array.from(map.values());
}

module.exports = groupAnagrams;`
          },
          {
            language: 'typescript',
            code: `function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  
  for (const str of strs) {
    const key = str.split('').sort().join('');
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key)!.push(str);
  }
  
  return Array.from(map.values());
}

export default groupAnagrams;`
          },
          {
            language: 'python',
            code: `def groupAnagrams(strs):
    from collections import defaultdict
    
    anagram_map = defaultdict(list)
    
    for s in strs:
        key = ''.join(sorted(s))
        anagram_map[key].append(s)
    
    return list(anagram_map.values())`
          },
          {
            language: 'java',
            code: `import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map = new HashMap<>();
        
        for (String str : strs) {
            char[] chars = str.toCharArray();
            Arrays.sort(chars);
            String key = new String(chars);
            
            if (!map.containsKey(key)) {
                map.put(key, new ArrayList<>());
            }
            map.get(key).add(str);
        }
        
        return new ArrayList<>(map.values());
    }
}`
          },
          {
            language: 'cpp',
            code: `#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map<string, vector<string>> map;
        
        for (const string& str : strs) {
            string key = str;
            sort(key.begin(), key.end());
            map[key].push_back(str);
        }
        
        vector<vector<string>> result;
        for (auto& pair : map) {
            result.push_back(pair.second);
        }
        
        return result;
    }
};`
          }
        ],
        complexity: {
          time: 'O(N * K log K)',
          space: 'O(N * K)',
          explanation: 'Where N is number of strings and K is max string length. Sorting each string is O(K log K). Space is O(N * K) for the map.'
        },
        pros: ['Simple and intuitive', 'Easy to implement', 'Works for all character sets'],
        cons: ['Sorting overhead', 'Not optimal for very long strings']
      }
    ]
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
    solutions: [
      {
        methodName: 'hash-set-validation',
        title: 'Hash Set Validation',
        intuition: 'Use hash sets to track seen numbers in each row, column, and 3x3 box. If we encounter a duplicate, the board is invalid.',
        explanation: 'We iterate through the board once. For each non-empty cell, we check if the number has been seen in its row, column, or 3x3 box. We use sets to track seen numbers. The box index is calculated as (row / 3) * 3 + (col / 3).',
        algorithm: [
          'Create sets for rows, columns, and boxes',
          'For each cell (i, j) in board:',
          '  - If cell is empty, skip',
          '  - Calculate box index: (i / 3) * 3 + (j / 3)',
          '  - Check if number exists in row[i], col[j], or box[boxIdx]',
          '  - If yes, return false',
          '  - Add number to row[i], col[j], and box[boxIdx] sets',
          'Return true'
        ],
        code: [
          {
            language: 'javascript',
            code: `function isValidSudoku(board) {
  const rows = Array(9).fill(0).map(() => new Set());
  const cols = Array(9).fill(0).map(() => new Set());
  const boxes = Array(9).fill(0).map(() => new Set());
  
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];
      if (num === '.') continue;
      
      const boxIdx = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      
      if (rows[i].has(num) || cols[j].has(num) || boxes[boxIdx].has(num)) {
        return false;
      }
      
      rows[i].add(num);
      cols[j].add(num);
      boxes[boxIdx].add(num);
    }
  }
  
  return true;
}

module.exports = isValidSudoku;`
          },
          {
            language: 'typescript',
            code: `function isValidSudoku(board: string[][]): boolean {
  const rows: Set<string>[] = Array(9).fill(0).map(() => new Set());
  const cols: Set<string>[] = Array(9).fill(0).map(() => new Set());
  const boxes: Set<string>[] = Array(9).fill(0).map(() => new Set());
  
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];
      if (num === '.') continue;
      
      const boxIdx = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      
      if (rows[i].has(num) || cols[j].has(num) || boxes[boxIdx].has(num)) {
        return false;
      }
      
      rows[i].add(num);
      cols[j].add(num);
      boxes[boxIdx].add(num);
    }
  }
  
  return true;
}

export default isValidSudoku;`
          },
          {
            language: 'python',
            code: `def isValidSudoku(board):
    rows = [set() for _ in range(9)]
    cols = [set() for _ in range(9)]
    boxes = [set() for _ in range(9)]
    
    for i in range(9):
        for j in range(9):
            num = board[i][j]
            if num == '.':
                continue
            
            box_idx = (i // 3) * 3 + (j // 3)
            
            if num in rows[i] or num in cols[j] or num in boxes[box_idx]:
                return False
            
            rows[i].add(num)
            cols[j].add(num)
            boxes[box_idx].add(num)
    
    return True`
          }
        ],
        complexity: {
          time: 'O(1)',
          space: 'O(1)',
          explanation: 'We iterate through the fixed 9x9 board once. Space is constant for the sets.'
        },
        pros: ['Single pass solution', 'Clear and efficient', 'Easy to understand'],
        cons: ['Uses extra space for sets']
      }
    ]
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
    solutions: [
      {
        methodName: 'transpose-and-reverse',
        title: 'Transpose and Reverse',
        intuition: 'Rotating 90 degrees clockwise is equivalent to transposing the matrix and then reversing each row.',
        explanation: 'First, we transpose the matrix by swapping elements across the diagonal (matrix[i][j] becomes matrix[j][i]). Then we reverse each row to complete the 90-degree clockwise rotation.',
        algorithm: [
          'Transpose the matrix:',
          '  - For i from 0 to n-1:',
          '    * For j from i+1 to n-1:',
          '      - Swap matrix[i][j] with matrix[j][i]',
          'Reverse each row:',
          '  - For each row:',
          '    * Reverse the row in-place'
        ],
        code: [
          {
            language: 'javascript',
            code: `function rotate(matrix) {
  const n = matrix.length;
  
  // Transpose
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  
  // Reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
}

module.exports = rotate;`
          },
          {
            language: 'typescript',
            code: `function rotate(matrix: number[][]): void {
  const n = matrix.length;
  
  // Transpose
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  
  // Reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
}

export default rotate;`
          },
          {
            language: 'python',
            code: `def rotate(matrix):
    n = len(matrix)
    
    # Transpose
    for i in range(n):
        for j in range(i + 1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    
    # Reverse each row
    for i in range(n):
        matrix[i].reverse()`
          }
        ],
        complexity: {
          time: 'O(N²)',
          space: 'O(1)',
          explanation: 'We visit each element once for transpose and once for reverse. In-place modification.'
        },
        pros: ['In-place O(1) space', 'Simple two-step process', 'Easy to understand'],
        cons: ['Requires understanding of transpose operation']
      }
    ]
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
    solutions: [
      {
        methodName: 'layer-by-layer',
        title: 'Layer-by-Layer Traversal',
        intuition: 'Process the matrix in concentric layers from outside to inside, collecting elements in spiral order.',
        explanation: 'We maintain four boundaries: top, bottom, left, right. We traverse the current layer by going right along top, down along right, left along bottom, and up along left. After each direction, we shrink the corresponding boundary.',
        algorithm: [
          'Initialize boundaries: top=0, bottom=m-1, left=0, right=n-1',
          'While top <= bottom and left <= right:',
          '  - Traverse right: from left to right along top row',
          '  - Increment top',
          '  - Traverse down: from top to bottom along right column',
          '  - Decrement right',
          '  - If top <= bottom: traverse left along bottom row',
          '  - Decrement bottom',
          '  - If left <= right: traverse up along left column',
          '  - Increment left',
          'Return result'
        ],
        code: [
          {
            language: 'javascript',
            code: `function spiralOrder(matrix) {
  const result = [];
  if (!matrix.length) return result;
  
  let top = 0, bottom = matrix.length - 1;
  let left = 0, right = matrix[0].length - 1;
  
  while (top <= bottom && left <= right) {
    // Traverse right
    for (let j = left; j <= right; j++) {
      result.push(matrix[top][j]);
    }
    top++;
    
    // Traverse down
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;
    
    // Traverse left
    if (top <= bottom) {
      for (let j = right; j >= left; j--) {
        result.push(matrix[bottom][j]);
      }
      bottom--;
    }
    
    // Traverse up
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }
  
  return result;
}

module.exports = spiralOrder;`
          },
          {
            language: 'typescript',
            code: `function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = [];
  if (!matrix.length) return result;
  
  let top = 0, bottom = matrix.length - 1;
  let left = 0, right = matrix[0].length - 1;
  
  while (top <= bottom && left <= right) {
    // Traverse right
    for (let j = left; j <= right; j++) {
      result.push(matrix[top][j]);
    }
    top++;
    
    // Traverse down
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;
    
    // Traverse left
    if (top <= bottom) {
      for (let j = right; j >= left; j--) {
        result.push(matrix[bottom][j]);
      }
      bottom--;
    }
    
    // Traverse up
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }
  
  return result;
}

export default spiralOrder;`
          },
          {
            language: 'python',
            code: `def spiralOrder(matrix):
    result = []
    if not matrix:
        return result
    
    top, bottom = 0, len(matrix) - 1
    left, right = 0, len(matrix[0]) - 1
    
    while top <= bottom and left <= right:
        # Traverse right
        for j in range(left, right + 1):
            result.append(matrix[top][j])
        top += 1
        
        # Traverse down
        for i in range(top, bottom + 1):
            result.append(matrix[i][right])
        right -= 1
        
        # Traverse left
        if top <= bottom:
            for j in range(right, left - 1, -1):
                result.append(matrix[bottom][j])
            bottom -= 1
        
        # Traverse up
        if left <= right:
            for i in range(bottom, top - 1, -1):
                result.append(matrix[i][left])
            left += 1
    
    return result`
          }
        ],
        complexity: {
          time: 'O(M * N)',
          space: 'O(1)',
          explanation: 'We visit each element exactly once. Space is O(1) excluding output array.'
        },
        pros: ['Optimal time complexity', 'Clear boundary management', 'Handles all matrix shapes'],
        cons: ['Requires careful boundary checks', 'Multiple edge cases']
      }
    ]
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
    solutions: [
      {
        methodName: 'first-row-column-markers',
        title: 'First Row and Column as Markers',
        intuition: 'Use the first row and column of the matrix itself to mark which rows and columns should be zeroed, avoiding extra space.',
        explanation: 'We use the first row and column as markers. First, we check if the first row or column originally contains zeros. Then we scan the rest of the matrix, marking zeros in the first row/column. Finally, we use these markers to set zeros, and handle the first row/column separately.',
        algorithm: [
          'Check if first row has zero, store in firstRowZero',
          'Check if first column has zero, store in firstColZero',
          'Scan matrix[1:][1:], if matrix[i][j] == 0:',
          '  - Set matrix[i][0] = 0 and matrix[0][j] = 0',
          'Use markers to set zeros:',
          '  - For i from 1 to m-1:',
          '    * For j from 1 to n-1:',
          '      - If matrix[i][0] == 0 or matrix[0][j] == 0:',
          '        * Set matrix[i][j] = 0',
          'Handle first row and column based on flags'
        ],
        code: [
          {
            language: 'javascript',
            code: `function setZeroes(matrix) {
  const m = matrix.length, n = matrix[0].length;
  let firstRowZero = false, firstColZero = false;
  
  // Check if first row has zero
  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) firstRowZero = true;
  }
  
  // Check if first column has zero
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) firstColZero = true;
  }
  
  // Use first row and column as markers
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  
  // Set zeros based on markers
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  
  // Handle first row
  if (firstRowZero) {
    for (let j = 0; j < n; j++) matrix[0][j] = 0;
  }
  
  // Handle first column
  if (firstColZero) {
    for (let i = 0; i < m; i++) matrix[i][0] = 0;
  }
}

module.exports = setZeroes;`
          },
          {
            language: 'typescript',
            code: `function setZeroes(matrix: number[][]): void {
  const m = matrix.length, n = matrix[0].length;
  let firstRowZero = false, firstColZero = false;
  
  // Check if first row has zero
  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) firstRowZero = true;
  }
  
  // Check if first column has zero
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) firstColZero = true;
  }
  
  // Use first row and column as markers
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  
  // Set zeros based on markers
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  
  // Handle first row
  if (firstRowZero) {
    for (let j = 0; j < n; j++) matrix[0][j] = 0;
  }
  
  // Handle first column
  if (firstColZero) {
    for (let i = 0; i < m; i++) matrix[i][0] = 0;
  }
}

export default setZeroes;`
          },
          {
            language: 'python',
            code: `def setZeroes(matrix):
    m, n = len(matrix), len(matrix[0])
    first_row_zero = any(matrix[0][j] == 0 for j in range(n))
    first_col_zero = any(matrix[i][0] == 0 for i in range(m))
    
    # Use first row and column as markers
    for i in range(1, m):
        for j in range(1, n):
            if matrix[i][j] == 0:
                matrix[i][0] = 0
                matrix[0][j] = 0
    
    # Set zeros based on markers
    for i in range(1, m):
        for j in range(1, n):
            if matrix[i][0] == 0 or matrix[0][j] == 0:
                matrix[i][j] = 0
    
    # Handle first row
    if first_row_zero:
        for j in range(n):
            matrix[0][j] = 0
    
    # Handle first column
    if first_col_zero:
        for i in range(m):
            matrix[i][0] = 0`
          }
        ],
        complexity: {
          time: 'O(M * N)',
          space: 'O(1)',
          explanation: 'We scan the matrix multiple times but each is O(M * N). Space is O(1) using matrix itself.'
        },
        pros: ['Optimal O(1) space', 'In-place solution', 'No extra data structures'],
        cons: ['Complex logic', 'Multiple passes needed', 'Requires careful handling of first row/column']
      }
    ]
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
    solutions: [
      {
        methodName: 'binary-search-2d',
        title: 'Binary Search on 2D Matrix',
        intuition: 'Treat the sorted 2D matrix as a virtual 1D sorted array and apply binary search.',
        explanation: 'Since rows are sorted and the first element of each row is greater than the last of the previous row, we can treat the matrix as a flattened sorted array. We use binary search with index mapping: for index mid, row = mid / n and col = mid % n.',
        algorithm: [
          'Get dimensions m, n',
          'Initialize left = 0, right = m * n - 1',
          'While left <= right:',
          '  - mid = (left + right) / 2',
          '  - Convert to 2D: row = mid / n, col = mid % n',
          '  - If matrix[row][col] == target, return true',
          '  - If matrix[row][col] < target, left = mid + 1',
          '  - Else right = mid - 1',
          'Return false'
        ],
        code: [
          {
            language: 'javascript',
            code: `function searchMatrix(matrix, target) {
  const m = matrix.length, n = matrix[0].length;
  let left = 0, right = m * n - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const row = Math.floor(mid / n);
    const col = mid % n;
    const val = matrix[row][col];
    
    if (val === target) return true;
    if (val < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return false;
}

module.exports = searchMatrix;`
          },
          {
            language: 'typescript',
            code: `function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length, n = matrix[0].length;
  let left = 0, right = m * n - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const row = Math.floor(mid / n);
    const col = mid % n;
    const val = matrix[row][col];
    
    if (val === target) return true;
    if (val < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return false;
}

export default searchMatrix;`
          },
          {
            language: 'python',
            code: `def searchMatrix(matrix, target):
    m, n = len(matrix), len(matrix[0])
    left, right = 0, m * n - 1
    
    while left <= right:
        mid = (left + right) // 2
        row, col = mid // n, mid % n
        val = matrix[row][col]
        
        if val == target:
            return True
        elif val < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return False`
          }
        ],
        complexity: {
          time: 'O(log(M * N))',
          space: 'O(1)',
          explanation: 'Binary search on M * N elements. Constant space.'
        },
        pros: ['Optimal O(log(M*N)) time', 'Elegant virtual 1D array approach', 'Simple implementation'],
        cons: ['Requires specific matrix properties (fully sorted)']
      }
    ]
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
    solutions: [
      {
        methodName: 'dfs-backtracking',
        title: 'DFS with Backtracking',
        intuition: 'Use depth-first search with backtracking to explore all possible paths in the grid, marking visited cells to avoid reuse.',
        explanation: 'For each cell, we try to match the first character of the word. If it matches, we recursively search in all four directions for the next character. We mark cells as visited during the search and unmark them when backtracking to allow other paths to use them.',
        algorithm: [
          'For each cell in board:',
          '  - If cell matches first character, start DFS',
          'DFS(i, j, index):',
          '  - If index == word.length, return true',
          '  - If out of bounds or visited or mismatch, return false',
          '  - Mark cell as visited',
          '  - Try all 4 directions recursively',
          '  - Unmark cell (backtrack)',
          '  - Return result'
        ],
        code: [
          {
            language: 'javascript',
            code: `function exist(board, word) {
  const m = board.length, n = board[0].length;
  
  function dfs(i, j, index) {
    if (index === word.length) return true;
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[index]) {
      return false;
    }
    
    const temp = board[i][j];
    board[i][j] = '#'; // Mark as visited
    
    const found = dfs(i + 1, j, index + 1) ||
                  dfs(i - 1, j, index + 1) ||
                  dfs(i, j + 1, index + 1) ||
                  dfs(i, j - 1, index + 1);
    
    board[i][j] = temp; // Backtrack
    return found;
  }
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }
  
  return false;
}

module.exports = exist;`
          },
          {
            language: 'typescript',
            code: `function exist(board: string[][], word: string): boolean {
  const m = board.length, n = board[0].length;
  
  function dfs(i: number, j: number, index: number): boolean {
    if (index === word.length) return true;
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[index]) {
      return false;
    }
    
    const temp = board[i][j];
    board[i][j] = '#'; // Mark as visited
    
    const found = dfs(i + 1, j, index + 1) ||
                  dfs(i - 1, j, index + 1) ||
                  dfs(i, j + 1, index + 1) ||
                  dfs(i, j - 1, index + 1);
    
    board[i][j] = temp; // Backtrack
    return found;
  }
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }
  
  return false;
}

export default exist;`
          },
          {
            language: 'python',
            code: `def exist(board, word):
    m, n = len(board), len(board[0])
    
    def dfs(i, j, index):
        if index == len(word):
            return True
        if i < 0 or i >= m or j < 0 or j >= n or board[i][j] != word[index]:
            return False
        
        temp = board[i][j]
        board[i][j] = '#'  # Mark as visited
        
        found = (dfs(i + 1, j, index + 1) or
                 dfs(i - 1, j, index + 1) or
                 dfs(i, j + 1, index + 1) or
                 dfs(i, j - 1, index + 1))
        
        board[i][j] = temp  # Backtrack
        return found
    
    for i in range(m):
        for j in range(n):
            if dfs(i, j, 0):
                return True
    
    return False`
          }
        ],
        complexity: {
          time: 'O(M * N * 4^L)',
          space: 'O(L)',
          explanation: 'Where L is word length. We try all cells and explore 4 directions for each character. Space is O(L) for recursion depth.'
        },
        pros: ['Classic backtracking solution', 'In-place marking', 'Explores all possibilities'],
        cons: ['Can be slow for long words', 'Modifies input temporarily']
      }
    ]
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
    solutions: [
      {
        methodName: 'backtracking-skip-duplicates',
        title: 'Backtracking with Duplicate Skipping',
        intuition: 'Sort the array and use backtracking to find combinations. Skip duplicates at the same recursion level to avoid duplicate combinations.',
        explanation: 'After sorting, we use backtracking to build combinations. At each level, we skip duplicate elements to ensure unique combinations. Unlike Combination Sum I, each element can only be used once, so we move to the next index after including an element.',
        algorithm: [
          'Sort candidates array',
          'Backtrack(start, target, current):',
          '  - If target == 0, add current to result',
          '  - If target < 0, return',
          '  - For i from start to end:',
          '    * Skip duplicates: if i > start and candidates[i] == candidates[i-1], continue',
          '    * Add candidates[i] to current',
          '    * Backtrack(i + 1, target - candidates[i], current)',
          '    * Remove last element from current'
        ],
        code: [
          {
            language: 'javascript',
            code: `function combinationSum2(candidates, target) {
  candidates.sort((a, b) => a - b);
  const result = [];
  
  function backtrack(start, target, current) {
    if (target === 0) {
      result.push([...current]);
      return;
    }
    if (target < 0) return;
    
    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      
      current.push(candidates[i]);
      backtrack(i + 1, target - candidates[i], current);
      current.pop();
    }
  }
  
  backtrack(0, target, []);
  return result;
}

module.exports = combinationSum2;`
          },
          {
            language: 'typescript',
            code: `function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  const result: number[][] = [];
  
  function backtrack(start: number, target: number, current: number[]): void {
    if (target === 0) {
      result.push([...current]);
      return;
    }
    if (target < 0) return;
    
    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      
      current.push(candidates[i]);
      backtrack(i + 1, target - candidates[i], current);
      current.pop();
    }
  }
  
  backtrack(0, target, []);
  return result;
}

export default combinationSum2;`
          },
          {
            language: 'python',
            code: `def combinationSum2(candidates, target):
    candidates.sort()
    result = []
    
    def backtrack(start, target, current):
        if target == 0:
            result.append(current[:])
            return
        if target < 0:
            return
        
        for i in range(start, len(candidates)):
            if i > start and candidates[i] == candidates[i - 1]:
                continue
            
            current.append(candidates[i])
            backtrack(i + 1, target - candidates[i], current)
            current.pop()
    
    backtrack(0, target, [])
    return result`
          }
        ],
        complexity: {
          time: 'O(2^N)',
          space: 'O(N)',
          explanation: 'In worst case we explore all subsets. Space is O(N) for recursion and current combination.'
        },
        pros: ['Handles duplicates elegantly', 'Clear backtracking structure', 'Finds all unique combinations'],
        cons: ['Exponential time complexity', 'Requires sorting']
      }
    ]
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
    solutions: [
      {
        methodName: 'dynamic-programming-2d',
        title: '2D Dynamic Programming',
        intuition: 'The minimum path sum to reach cell (i, j) is the cell value plus the minimum of the path sums from the cell above or to the left.',
        explanation: 'We build a DP table where dp[i][j] represents the minimum path sum to reach cell (i, j). For each cell, we add its value to the minimum of dp[i-1][j] (from above) and dp[i][j-1] (from left). The first row and column are special cases.',
        algorithm: [
          'Create DP table same size as grid',
          'Initialize dp[0][0] = grid[0][0]',
          'Fill first row: dp[0][j] = dp[0][j-1] + grid[0][j]',
          'Fill first column: dp[i][0] = dp[i-1][0] + grid[i][0]',
          'For each cell (i, j):',
          '  - dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])',
          'Return dp[m-1][n-1]'
        ],
        code: [
          {
            language: 'javascript',
            code: `function minPathSum(grid) {
  const m = grid.length, n = grid[0].length;
  const dp = Array(m).fill(0).map(() => Array(n).fill(0));
  
  dp[0][0] = grid[0][0];
  
  // Fill first row
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  
  // Fill first column
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  
  // Fill rest of table
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  
  return dp[m - 1][n - 1];
}

module.exports = minPathSum;`
          },
          {
            language: 'typescript',
            code: `function minPathSum(grid: number[][]): number {
  const m = grid.length, n = grid[0].length;
  const dp: number[][] = Array(m).fill(0).map(() => Array(n).fill(0));
  
  dp[0][0] = grid[0][0];
  
  // Fill first row
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  
  // Fill first column
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  
  // Fill rest of table
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  
  return dp[m - 1][n - 1];
}

export default minPathSum;`
          },
          {
            language: 'python',
            code: `def minPathSum(grid):
    m, n = len(grid), len(grid[0])
    dp = [[0] * n for _ in range(m)]
    
    dp[0][0] = grid[0][0]
    
    # Fill first row
    for j in range(1, n):
        dp[0][j] = dp[0][j - 1] + grid[0][j]
    
    # Fill first column
    for i in range(1, m):
        dp[i][0] = dp[i - 1][0] + grid[i][0]
    
    # Fill rest of table
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = grid[i][j] + min(dp[i - 1][j], dp[i][j - 1])
    
    return dp[m - 1][n - 1]`
          }
        ],
        complexity: {
          time: 'O(M * N)',
          space: 'O(M * N)',
          explanation: 'We fill an M x N table. Each cell is computed in O(1) time.'
        },
        pros: ['Clear DP solution', 'Easy to understand', 'Straightforward implementation'],
        cons: ['Uses O(M * N) space', 'Can be optimized to O(N)']
      }
    ]
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
    solutions: [
      {
        methodName: 'dynamic-programming-obstacles',
        title: 'Dynamic Programming with Obstacles',
        intuition: 'Similar to Unique Paths, but set dp[i][j] = 0 if there is an obstacle at that position.',
        explanation: 'We use DP where dp[i][j] represents the number of paths to reach cell (i, j). If obstacleGrid[i][j] == 1, dp[i][j] = 0. Otherwise, dp[i][j] = dp[i-1][j] + dp[i][j-1]. We must handle the first row and column carefully.',
        algorithm: [
          'If start or end has obstacle, return 0',
          'Create DP table',
          'Initialize dp[0][0] = 1',
          'Fill first row: dp[0][j] = dp[0][j-1] if no obstacle, else 0',
          'Fill first column: dp[i][0] = dp[i-1][0] if no obstacle, else 0',
          'For each cell (i, j):',
          '  - If obstacle, dp[i][j] = 0',
          '  - Else dp[i][j] = dp[i-1][j] + dp[i][j-1]',
          'Return dp[m-1][n-1]'
        ],
        code: [
          {
            language: 'javascript',
            code: `function uniquePathsWithObstacles(obstacleGrid) {
  const m = obstacleGrid.length, n = obstacleGrid[0].length;
  if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) return 0;
  
  const dp = Array(m).fill(0).map(() => Array(n).fill(0));
  dp[0][0] = 1;
  
  // Fill first row
  for (let j = 1; j < n; j++) {
    dp[0][j] = obstacleGrid[0][j] === 1 ? 0 : dp[0][j - 1];
  }
  
  // Fill first column
  for (let i = 1; i < m; i++) {
    dp[i][0] = obstacleGrid[i][0] === 1 ? 0 : dp[i - 1][0];
  }
  
  // Fill rest of table
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  
  return dp[m - 1][n - 1];
}

module.exports = uniquePathsWithObstacles;`
          },
          {
            language: 'typescript',
            code: `function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length, n = obstacleGrid[0].length;
  if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) return 0;
  
  const dp: number[][] = Array(m).fill(0).map(() => Array(n).fill(0));
  dp[0][0] = 1;
  
  // Fill first row
  for (let j = 1; j < n; j++) {
    dp[0][j] = obstacleGrid[0][j] === 1 ? 0 : dp[0][j - 1];
  }
  
  // Fill first column
  for (let i = 1; i < m; i++) {
    dp[i][0] = obstacleGrid[i][0] === 1 ? 0 : dp[i - 1][0];
  }
  
  // Fill rest of table
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  
  return dp[m - 1][n - 1];
}

export default uniquePathsWithObstacles;`
          },
          {
            language: 'python',
            code: `def uniquePathsWithObstacles(obstacleGrid):
    m, n = len(obstacleGrid), len(obstacleGrid[0])
    if obstacleGrid[0][0] == 1 or obstacleGrid[m - 1][n - 1] == 1:
        return 0
    
    dp = [[0] * n for _ in range(m)]
    dp[0][0] = 1
    
    # Fill first row
    for j in range(1, n):
        dp[0][j] = 0 if obstacleGrid[0][j] == 1 else dp[0][j - 1]
    
    # Fill first column
    for i in range(1, m):
        dp[i][0] = 0 if obstacleGrid[i][0] == 1 else dp[i - 1][0]
    
    # Fill rest of table
    for i in range(1, m):
        for j in range(1, n):
            if obstacleGrid[i][j] == 1:
                dp[i][j] = 0
            else:
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    
    return dp[m - 1][n - 1]`
          }
        ],
        complexity: {
          time: 'O(M * N)',
          space: 'O(M * N)',
          explanation: 'We fill an M x N table. Each cell is computed in O(1) time.'
        },
        pros: ['Clear extension of Unique Paths', 'Handles obstacles naturally', 'Easy to understand'],
        cons: ['Uses O(M * N) space']
      }
    ]
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
    solutions: [
      {
        methodName: 'fibonacci-dp',
        title: 'Fibonacci Dynamic Programming',
        intuition: 'The number of ways to reach step n is the sum of ways to reach step n-1 and n-2, which is the Fibonacci sequence.',
        explanation: 'This is a classic Fibonacci problem. To reach step n, we can either come from step n-1 (taking 1 step) or from step n-2 (taking 2 steps). So dp[n] = dp[n-1] + dp[n-2]. We can optimize space to O(1) by only keeping the last two values.',
        algorithm: [
          'If n <= 2, return n',
          'Initialize prev1 = 1, prev2 = 2',
          'For i from 3 to n:',
          '  - current = prev1 + prev2',
          '  - prev1 = prev2',
          '  - prev2 = current',
          'Return prev2'
        ],
        code: [
          {
            language: 'javascript',
            code: `function climbStairs(n) {
  if (n <= 2) return n;
  
  let prev1 = 1, prev2 = 2;
  
  for (let i = 3; i <= n; i++) {
    const current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }
  
  return prev2;
}

module.exports = climbStairs;`
          },
          {
            language: 'typescript',
            code: `function climbStairs(n: number): number {
  if (n <= 2) return n;
  
  let prev1 = 1, prev2 = 2;
  
  for (let i = 3; i <= n; i++) {
    const current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }
  
  return prev2;
}

export default climbStairs;`
          },
          {
            language: 'python',
            code: `def climbStairs(n):
    if n <= 2:
        return n
    
    prev1, prev2 = 1, 2
    
    for i in range(3, n + 1):
        current = prev1 + prev2
        prev1 = prev2
        prev2 = current
    
    return prev2`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(1)',
          explanation: 'Single loop from 3 to n. Constant space using only two variables.'
        },
        pros: ['Optimal O(1) space', 'Simple and efficient', 'Classic DP problem'],
        cons: ['None - this is the optimal solution']
      }
    ]
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
    solutions: [
      {
        methodName: 'dynamic-programming-2d',
        title: '2D Dynamic Programming',
        intuition: 'Build a DP table where dp[i][j] represents the minimum edit distance to convert word1[0..i-1] to word2[0..j-1].',
        explanation: 'We use a 2D DP table. If characters match, dp[i][j] = dp[i-1][j-1]. If they do not match, we take the minimum of three operations: insert (dp[i][j-1] + 1), delete (dp[i-1][j] + 1), or replace (dp[i-1][j-1] + 1).',
        algorithm: [
          'Create DP table of size (m+1) x (n+1)',
          'Initialize first row: dp[0][j] = j (insert j characters)',
          'Initialize first column: dp[i][0] = i (delete i characters)',
          'For each cell (i, j):',
          '  - If word1[i-1] == word2[j-1]: dp[i][j] = dp[i-1][j-1]',
          '  - Else: dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])',
          'Return dp[m][n]'
        ],
        code: [
          {
            language: 'javascript',
            code: `function minDistance(word1, word2) {
  const m = word1.length, n = word2.length;
  const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));
  
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }
  
  return dp[m][n];
}

module.exports = minDistance;`
          },
          {
            language: 'typescript',
            code: `function minDistance(word1: string, word2: string): number {
  const m = word1.length, n = word2.length;
  const dp: number[][] = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));
  
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }
  
  return dp[m][n];
}

export default minDistance;`
          },
          {
            language: 'python',
            code: `def minDistance(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i - 1] == word2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = 1 + min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
    
    return dp[m][n]`
          }
        ],
        complexity: {
          time: 'O(M * N)',
          space: 'O(M * N)',
          explanation: 'We fill an (M+1) x (N+1) table. Each cell is computed in O(1) time.'
        },
        pros: ['Classic DP solution', 'Easy to understand', 'Handles all three operations'],
        cons: ['Uses O(M * N) space', 'Can be optimized to O(min(M, N))']
      }
    ]
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
    solutions: [
      {
        methodName: 'track-max-min',
        title: 'Track Max and Min Products',
        intuition: 'Since negative numbers can flip max to min and vice versa, we need to track both the maximum and minimum products at each position.',
        explanation: 'At each position, we track both maxProduct and minProduct. When we encounter a negative number, we swap max and min before multiplying. The result is the maximum of all maxProduct values seen.',
        algorithm: [
          'Initialize maxProduct = minProduct = result = nums[0]',
          'For each num from index 1:',
          '  - If num < 0, swap maxProduct and minProduct',
          '  - maxProduct = max(num, maxProduct * num)',
          '  - minProduct = min(num, minProduct * num)',
          '  - result = max(result, maxProduct)',
          'Return result'
        ],
        code: [
          {
            language: 'javascript',
            code: `function maxProduct(nums) {
  let maxProd = nums[0];
  let minProd = nums[0];
  let result = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      [maxProd, minProd] = [minProd, maxProd];
    }
    
    maxProd = Math.max(nums[i], maxProd * nums[i]);
    minProd = Math.min(nums[i], minProd * nums[i]);
    result = Math.max(result, maxProd);
  }
  
  return result;
}

module.exports = maxProduct;`
          },
          {
            language: 'typescript',
            code: `function maxProduct(nums: number[]): number {
  let maxProd = nums[0];
  let minProd = nums[0];
  let result = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      [maxProd, minProd] = [minProd, maxProd];
    }
    
    maxProd = Math.max(nums[i], maxProd * nums[i]);
    minProd = Math.min(nums[i], minProd * nums[i]);
    result = Math.max(result, maxProd);
  }
  
  return result;
}

export default maxProduct;`
          },
          {
            language: 'python',
            code: `def maxProduct(nums):
    max_prod = nums[0]
    min_prod = nums[0]
    result = nums[0]
    
    for i in range(1, len(nums)):
        if nums[i] < 0:
            max_prod, min_prod = min_prod, max_prod
        
        max_prod = max(nums[i], max_prod * nums[i])
        min_prod = min(nums[i], min_prod * nums[i])
        result = max(result, max_prod)
    
    return result`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(1)',
          explanation: 'Single pass through array. Constant space using only a few variables.'
        },
        pros: ['Optimal O(N) time', 'O(1) space', 'Handles negative numbers elegantly'],
        cons: ['Requires understanding of max/min swap trick']
      }
    ]
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
    solutions: [
      {
        methodName: 'dynamic-programming-1d',
        title: 'Dynamic Programming',
        intuition: 'The number of ways to decode up to position i depends on whether we can form valid 1-digit or 2-digit numbers ending at i.',
        explanation: 'We use DP where dp[i] represents the number of ways to decode s[0..i-1]. If s[i-1] forms a valid 1-digit (1-9), add dp[i-1]. If s[i-2..i-1] forms a valid 2-digit (10-26), add dp[i-2]. Handle edge cases like leading zeros.',
        algorithm: [
          'If s starts with 0, return 0',
          'Create dp array of size n+1, dp[0] = 1',
          'For i from 1 to n:',
          '  - If s[i-1] is 1-9: dp[i] += dp[i-1]',
          '  - If s[i-2..i-1] is 10-26: dp[i] += dp[i-2]',
          'Return dp[n]'
        ],
        code: [
          {
            language: 'javascript',
            code: `function numDecodings(s) {
  if (s[0] === '0') return 0;
  
  const n = s.length;
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  
  for (let i = 2; i <= n; i++) {
    const oneDigit = parseInt(s[i - 1]);
    const twoDigits = parseInt(s.substring(i - 2, i));
    
    if (oneDigit >= 1 && oneDigit <= 9) {
      dp[i] += dp[i - 1];
    }
    
    if (twoDigits >= 10 && twoDigits <= 26) {
      dp[i] += dp[i - 2];
    }
  }
  
  return dp[n];
}

module.exports = numDecodings;`
          },
          {
            language: 'typescript',
            code: `function numDecodings(s: string): number {
  if (s[0] === '0') return 0;
  
  const n = s.length;
  const dp: number[] = Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  
  for (let i = 2; i <= n; i++) {
    const oneDigit = parseInt(s[i - 1]);
    const twoDigits = parseInt(s.substring(i - 2, i));
    
    if (oneDigit >= 1 && oneDigit <= 9) {
      dp[i] += dp[i - 1];
    }
    
    if (twoDigits >= 10 && twoDigits <= 26) {
      dp[i] += dp[i - 2];
    }
  }
  
  return dp[n];
}

export default numDecodings;`
          },
          {
            language: 'python',
            code: `def numDecodings(s):
    if s[0] == '0':
        return 0
    
    n = len(s)
    dp = [0] * (n + 1)
    dp[0] = 1
    dp[1] = 1
    
    for i in range(2, n + 1):
        one_digit = int(s[i - 1])
        two_digits = int(s[i - 2:i])
        
        if 1 <= one_digit <= 9:
            dp[i] += dp[i - 1]
        
        if 10 <= two_digits <= 26:
            dp[i] += dp[i - 2]
    
    return dp[n]`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(N)',
          explanation: 'Single pass through string. DP array of size N+1.'
        },
        pros: ['Clear DP solution', 'Handles all edge cases', 'Easy to understand'],
        cons: ['Uses O(N) space', 'Can be optimized to O(1) space']
      }
    ]
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
    solutions: [
      {
        methodName: 'dynamic-programming-2d',
        title: '2D Dynamic Programming',
        intuition: 'The number of paths to reach cell (i, j) is the sum of paths from the cell above and the cell to the left.',
        explanation: 'Use a 2D DP table where dp[i][j] represents the number of unique paths to reach cell (i, j). Since we can only move right or down, dp[i][j] = dp[i-1][j] + dp[i][j-1].',
        algorithm: [
          'Create DP table of size m x n',
          'Initialize first row and column to 1 (only one way to reach them)',
          'For each cell (i, j), dp[i][j] = dp[i-1][j] + dp[i][j-1]',
          'Return dp[m-1][n-1]'
        ],
        code: [
          {
            language: 'javascript',
            code: `function uniquePaths(m, n) {
  const dp = Array(m).fill(0).map(() => Array(n).fill(0));
  
  for (let i = 0; i < m; i++) dp[i][0] = 1;
  for (let j = 0; j < n; j++) dp[0][j] = 1;
  
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  
  return dp[m - 1][n - 1];
}

module.exports = uniquePaths;`
          },
          {
            language: 'typescript',
            code: `function uniquePaths(m: number, n: number): number {
  const dp: number[][] = Array(m).fill(0).map(() => Array(n).fill(0));
  
  for (let i = 0; i < m; i++) dp[i][0] = 1;
  for (let j = 0; j < n; j++) dp[0][j] = 1;
  
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  
  return dp[m - 1][n - 1];
}

export default uniquePaths;`
          },
          {
            language: 'python',
            code: `def uniquePaths(m, n):
    dp = [[0] * n for _ in range(m)]
    
    for i in range(m):
        dp[i][0] = 1
    for j in range(n):
        dp[0][j] = 1
    
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    
    return dp[m - 1][n - 1]`
          }
        ],
        complexity: {
          time: 'O(M * N)',
          space: 'O(M * N)',
          explanation: 'We fill an M x N table. Each cell is computed in O(1) time.'
        },
        pros: ['Clear DP solution', 'Easy to understand'],
        cons: ['Uses O(M * N) space', 'Can be optimized to O(N)']
      }
    ]
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
    solutions: [
      {
        methodName: 'bfs',
        title: 'BFS with Visited Set',
        intuition: 'Use BFS to explore all reachable indices, marking visited ones to avoid cycles.',
        explanation: 'Start from the given index and use BFS to explore all possible jumps. For each index i, we can jump to i + arr[i] or i - arr[i]. Mark visited indices and return true if we reach an index with value 0.',
        algorithm: [
          'Initialize queue with start index and visited set',
          'While queue is not empty:',
          '  - Dequeue current index',
          '  - If arr[current] == 0, return true',
          '  - Calculate next indices: current + arr[current] and current - arr[current]',
          '  - For each valid unvisited next index, mark as visited and enqueue',
          'Return false if queue empties'
        ],
        code: [
          {
            language: 'javascript',
            code: `function canReach(arr, start) {
  const queue = [start];
  const visited = new Set([start]);
  
  while (queue.length > 0) {
    const curr = queue.shift();
    
    if (arr[curr] === 0) return true;
    
    const next1 = curr + arr[curr];
    const next2 = curr - arr[curr];
    
    if (next1 < arr.length && !visited.has(next1)) {
      visited.add(next1);
      queue.push(next1);
    }
    
    if (next2 >= 0 && !visited.has(next2)) {
      visited.add(next2);
      queue.push(next2);
    }
  }
  
  return false;
}

module.exports = canReach;`
          },
          {
            language: 'typescript',
            code: `function canReach(arr: number[], start: number): boolean {
  const queue: number[] = [start];
  const visited = new Set<number>([start]);
  
  while (queue.length > 0) {
    const curr = queue.shift()!;
    
    if (arr[curr] === 0) return true;
    
    const next1 = curr + arr[curr];
    const next2 = curr - arr[curr];
    
    if (next1 < arr.length && !visited.has(next1)) {
      visited.add(next1);
      queue.push(next1);
    }
    
    if (next2 >= 0 && !visited.has(next2)) {
      visited.add(next2);
      queue.push(next2);
    }
  }
  
  return false;
}

export default canReach;`
          },
          {
            language: 'python',
            code: `def canReach(arr, start):
    from collections import deque
    queue = deque([start])
    visited = {start}
    
    while queue:
        curr = queue.popleft()
        
        if arr[curr] == 0:
            return True
        
        next1 = curr + arr[curr]
        next2 = curr - arr[curr]
        
        if next1 < len(arr) and next1 not in visited:
            visited.add(next1)
            queue.append(next1)
        
        if next2 >= 0 and next2 not in visited:
            visited.add(next2)
            queue.append(next2)
    
    return False`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(N)',
          explanation: 'Visit each index at most once. Visited set stores up to N indices.'
        },
        pros: ['Optimal solution', 'Clear BFS approach'],
        cons: ['Uses extra space for queue and visited set']
      }
    ]
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
    solutions: [
      {
        methodName: 'subset-sum-dp',
        title: 'Subset Sum Dynamic Programming',
        intuition: 'This is a subset sum problem. If we can find a subset that sums to half of the total, we can partition the array.',
        explanation: 'Calculate total sum. If odd, return false. Use DP to check if we can make sum equal to total/2. dp[i] represents whether we can make sum i using available numbers.',
        algorithm: [
          'Calculate total sum of array',
          'If sum is odd, return false',
          'target = sum / 2',
          'Create DP array where dp[i] = can we make sum i',
          'Initialize dp[0] = true',
          'For each number, update dp array backwards',
          'Return dp[target]'
        ],
        code: [
          {
            language: 'javascript',
            code: `function canPartition(nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) return false;
  
  const target = sum / 2;
  const dp = Array(target + 1).fill(false);
  dp[0] = true;
  
  for (const num of nums) {
    for (let i = target; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num];
    }
  }
  
  return dp[target];
}

module.exports = canPartition;`
          },
          {
            language: 'typescript',
            code: `function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) return false;
  
  const target = sum / 2;
  const dp: boolean[] = Array(target + 1).fill(false);
  dp[0] = true;
  
  for (const num of nums) {
    for (let i = target; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num];
    }
  }
  
  return dp[target];
}

export default canPartition;`
          },
          {
            language: 'python',
            code: `def canPartition(nums):
    total = sum(nums)
    if total % 2 != 0:
        return False
    
    target = total // 2
    dp = [False] * (target + 1)
    dp[0] = True
    
    for num in nums:
        for i in range(target, num - 1, -1):
            dp[i] = dp[i] or dp[i - num]
    
    return dp[target]`
          }
        ],
        complexity: {
          time: 'O(N * sum)',
          space: 'O(sum)',
          explanation: 'DP array of size sum/2. For each number, we update the DP array.'
        },
        pros: ['Optimal DP solution', 'Space-optimized'],
        cons: ['Pseudo-polynomial time complexity']
      }
    ]
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
    solutions: [
      {
        methodName: 'backtracking',
        title: 'Backtracking with Palindrome Check',
        intuition: 'Try all possible ways to partition the string, checking if each substring is a palindrome.',
        explanation: 'Use backtracking to explore all partitions. At each position, try all possible palindrome prefixes and recursively partition the remaining string.',
        algorithm: [
          'Create helper function to check if string is palindrome',
          'Backtrack(start, current):',
          '  - If start == s.length, add current to result',
          '  - For each end from start to s.length:',
          '    * If s[start..end] is palindrome, add to current and backtrack(end+1)',
          'Return result'
        ],
        code: [
          {
            language: 'javascript',
            code: `function partition(s) {
  const result = [];
  
  function isPalindrome(str, left, right) {
    while (left < right) {
      if (str[left++] !== str[right--]) return false;
    }
    return true;
  }
  
  function backtrack(start, current) {
    if (start === s.length) {
      result.push([...current]);
      return;
    }
    
    for (let end = start; end < s.length; end++) {
      if (isPalindrome(s, start, end)) {
        current.push(s.substring(start, end + 1));
        backtrack(end + 1, current);
        current.pop();
      }
    }
  }
  
  backtrack(0, []);
  return result;
}

module.exports = partition;`
          },
          {
            language: 'typescript',
            code: `function partition(s: string): string[][] {
  const result: string[][] = [];
  
  function isPalindrome(str: string, left: number, right: number): boolean {
    while (left < right) {
      if (str[left++] !== str[right--]) return false;
    }
    return true;
  }
  
  function backtrack(start: number, current: string[]): void {
    if (start === s.length) {
      result.push([...current]);
      return;
    }
    
    for (let end = start; end < s.length; end++) {
      if (isPalindrome(s, start, end)) {
        current.push(s.substring(start, end + 1));
        backtrack(end + 1, current);
        current.pop();
      }
    }
  }
  
  backtrack(0, []);
  return result;
}

export default partition;`
          },
          {
            language: 'python',
            code: `def partition(s):
    result = []
    
    def is_palindrome(sub):
        return sub == sub[::-1]
    
    def backtrack(start, current):
        if start == len(s):
            result.append(current[:])
            return
        
        for end in range(start, len(s)):
            substring = s[start:end + 1]
            if is_palindrome(substring):
                current.append(substring)
                backtrack(end + 1, current)
                current.pop()
    
    backtrack(0, [])
    return result`
          }
        ],
        complexity: {
          time: 'O(N * 2^N)',
          space: 'O(N)',
          explanation: 'In worst case, we explore all possible partitions (2^N). Palindrome check takes O(N).'
        },
        pros: ['Finds all valid partitions', 'Clear backtracking structure'],
        cons: ['Exponential time complexity']
      }
    ]
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
    solutions: [
      {
        methodName: 'greedy',
        title: 'Greedy Approach',
        intuition: 'If total gas is less than total cost, it is impossible. Otherwise, find the starting point where tank never goes negative.',
        explanation: 'Track total gas and current tank. If current tank goes negative, reset start to next station. If total gas >= total cost, the final start index is the answer.',
        algorithm: [
          'Initialize totalGas = 0, currentTank = 0, start = 0',
          'For each station i:',
          '  - totalGas += gas[i] - cost[i]',
          '  - currentTank += gas[i] - cost[i]',
          '  - If currentTank < 0, set start = i + 1 and reset currentTank = 0',
          'Return totalGas >= 0 ? start : -1'
        ],
        code: [
          {
            language: 'javascript',
            code: `function canCompleteCircuit(gas, cost) {
  let totalGas = 0, currentTank = 0, start = 0;
  
  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i] - cost[i];
    currentTank += gas[i] - cost[i];
    
    if (currentTank < 0) {
      start = i + 1;
      currentTank = 0;
    }
  }
  
  return totalGas >= 0 ? start : -1;
}

module.exports = canCompleteCircuit;`
          },
          {
            language: 'typescript',
            code: `function canCompleteCircuit(gas: number[], cost: number[]): number {
  let totalGas = 0, currentTank = 0, start = 0;
  
  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i] - cost[i];
    currentTank += gas[i] - cost[i];
    
    if (currentTank < 0) {
      start = i + 1;
      currentTank = 0;
    }
  }
  
  return totalGas >= 0 ? start : -1;
}

export default canCompleteCircuit;`
          },
          {
            language: 'python',
            code: `def canCompleteCircuit(gas, cost):
    total_gas = 0
    current_tank = 0
    start = 0
    
    for i in range(len(gas)):
        total_gas += gas[i] - cost[i]
        current_tank += gas[i] - cost[i]
        
        if current_tank < 0:
            start = i + 1
            current_tank = 0
    
    return start if total_gas >= 0 else -1`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(1)',
          explanation: 'Single pass through arrays. Only a few variables needed.'
        },
        pros: ['Optimal solution', 'Single pass', 'Constant space'],
        cons: ['Requires understanding of greedy approach']
      }
    ]
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
    solutions: [
      {
        methodName: 'two-pass',
        title: 'Two Pass Greedy',
        intuition: 'Ensure each child has more candies than neighbors with lower ratings. Use two passes: left-to-right and right-to-left.',
        explanation: 'First pass ensures children have more candies than left neighbor if rating is higher. Second pass ensures more than right neighbor. Take maximum of both passes.',
        algorithm: [
          'Initialize candies array with all 1s',
          'Left-to-right: if ratings[i] > ratings[i-1], candies[i] = candies[i-1] + 1',
          'Right-to-left: if ratings[i] > ratings[i+1], candies[i] = max(candies[i], candies[i+1] + 1)',
          'Return sum of candies'
        ],
        code: [
          {
            language: 'javascript',
            code: `function candy(ratings) {
  const n = ratings.length;
  const candies = Array(n).fill(1);
  
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }
  
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }
  
  return candies.reduce((a, b) => a + b, 0);
}

module.exports = candy;`
          },
          {
            language: 'typescript',
            code: `function candy(ratings: number[]): number {
  const n = ratings.length;
  const candies: number[] = Array(n).fill(1);
  
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }
  
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }
  
  return candies.reduce((a, b) => a + b, 0);
}

export default candy;`
          },
          {
            language: 'python',
            code: `def candy(ratings):
    n = len(ratings)
    candies = [1] * n
    
    for i in range(1, n):
        if ratings[i] > ratings[i - 1]:
            candies[i] = candies[i - 1] + 1
    
    for i in range(n - 2, -1, -1):
        if ratings[i] > ratings[i + 1]:
            candies[i] = max(candies[i], candies[i + 1] + 1)
    
    return sum(candies)`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(N)',
          explanation: 'Two passes through array. Candies array of size N.'
        },
        pros: ['Optimal solution', 'Clear logic'],
        cons: ['Uses O(N) space']
      }
    ]
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
    solutions: [
      {
        methodName: 'two-pointers',
        title: 'Two Pointers',
        intuition: 'Use two pointers to track left and right max heights. Water trapped at position depends on the minimum of max heights on both sides.',
        explanation: 'Maintain left and right pointers with leftMax and rightMax. Move pointer with smaller max. Water at current position is max - height[current].',
        algorithm: [
          'Initialize left = 0, right = n-1, leftMax = 0, rightMax = 0, water = 0',
          'While left < right:',
          '  - If height[left] < height[right]:',
          '    * Update leftMax, add leftMax - height[left] to water, move left++',
          '  - Else:',
          '    * Update rightMax, add rightMax - height[right] to water, move right--',
          'Return water'
        ],
        code: [
          {
            language: 'javascript',
            code: `function trap(height) {
  let left = 0, right = height.length - 1;
  let leftMax = 0, rightMax = 0, water = 0;
  
  while (left < right) {
    if (height[left] < height[right]) {
      leftMax = Math.max(leftMax, height[left]);
      water += leftMax - height[left];
      left++;
    } else {
      rightMax = Math.max(rightMax, height[right]);
      water += rightMax - height[right];
      right--;
    }
  }
  
  return water;
}

module.exports = trap;`
          },
          {
            language: 'typescript',
            code: `function trap(height: number[]): number {
  let left = 0, right = height.length - 1;
  let leftMax = 0, rightMax = 0, water = 0;
  
  while (left < right) {
    if (height[left] < height[right]) {
      leftMax = Math.max(leftMax, height[left]);
      water += leftMax - height[left];
      left++;
    } else {
      rightMax = Math.max(rightMax, height[right]);
      water += rightMax - height[right];
      right--;
    }
  }
  
  return water;
}

export default trap;`
          },
          {
            language: 'python',
            code: `def trap(height):
    left, right = 0, len(height) - 1
    left_max, right_max, water = 0, 0, 0
    
    while left < right:
        if height[left] < height[right]:
            left_max = max(left_max, height[left])
            water += left_max - height[left]
            left += 1
        else:
            right_max = max(right_max, height[right])
            water += right_max - height[right]
            right -= 1
    
    return water`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(1)',
          explanation: 'Single pass with two pointers. Only a few variables needed.'
        },
        pros: ['Optimal solution', 'Constant space', 'Single pass'],
        cons: ['Requires understanding of two-pointer technique']
      }
    ]
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
    solutions: [
      {
        methodName: 'two-pointers',
        title: 'Two Pointers with Gap',
        intuition: 'Use two pointers with n gap. When fast reaches end, slow points to node before target.',
        explanation: 'Create dummy node. Move fast pointer n steps ahead. Then move both pointers until fast reaches end. Remove slow.next.',
        algorithm: [
          'Create dummy node pointing to head',
          'Initialize fast and slow pointers at dummy',
          'Move fast n+1 steps ahead',
          'Move both pointers until fast reaches null',
          'Remove slow.next by setting slow.next = slow.next.next',
          'Return dummy.next'
        ],
        code: [
          {
            language: 'javascript',
            code: `function removeNthFromEnd(head, n) {
  const dummy = { val: 0, next: head };
  let fast = dummy, slow = dummy;
  
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }
  
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  
  slow.next = slow.next.next;
  return dummy.next;
}

module.exports = removeNthFromEnd;`
          },
          {
            language: 'typescript',
            code: `function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy: ListNode = { val: 0, next: head };
  let fast: ListNode | null = dummy;
  let slow: ListNode | null = dummy;
  
  for (let i = 0; i <= n; i++) {
    fast = fast!.next;
  }
  
  while (fast) {
    fast = fast.next;
    slow = slow!.next;
  }
  
  slow!.next = slow!.next!.next;
  return dummy.next;
}

export default removeNthFromEnd;`
          },
          {
            language: 'python',
            code: `def removeNthFromEnd(head, n):
    dummy = ListNode(0)
    dummy.next = head
    fast = slow = dummy
    
    for _ in range(n + 1):
        fast = fast.next
    
    while fast:
        fast = fast.next
        slow = slow.next
    
    slow.next = slow.next.next
    return dummy.next`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(1)',
          explanation: 'Single pass through list. Only a few pointers needed.'
        },
        pros: ['Optimal solution', 'Single pass', 'Elegant use of dummy node'],
        cons: ['Requires understanding of two-pointer technique']
      }
    ]
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
    solutions: [
      {
        methodName: 'iterative',
        title: 'Iterative Swap',
        intuition: 'Use dummy node and swap pairs iteratively by adjusting pointers.',
        explanation: 'Create dummy node. For each pair, adjust pointers to swap the two nodes. Move to next pair.',
        algorithm: [
          'Create dummy node pointing to head',
          'Initialize prev = dummy',
          'While prev.next and prev.next.next exist:',
          '  - Get first and second nodes of pair',
          '  - Swap them by adjusting pointers',
          '  - Move prev to next pair',
          'Return dummy.next'
        ],
        code: [
          {
            language: 'javascript',
            code: `function swapPairs(head) {
  const dummy = { val: 0, next: head };
  let prev = dummy;
  
  while (prev.next && prev.next.next) {
    const first = prev.next;
    const second = prev.next.next;
    
    first.next = second.next;
    second.next = first;
    prev.next = second;
    
    prev = first;
  }
  
  return dummy.next;
}

module.exports = swapPairs;`
          },
          {
            language: 'typescript',
            code: `function swapPairs(head: ListNode | null): ListNode | null {
  const dummy: ListNode = { val: 0, next: head };
  let prev: ListNode = dummy;
  
  while (prev.next && prev.next.next) {
    const first = prev.next;
    const second = prev.next.next;
    
    first.next = second.next;
    second.next = first;
    prev.next = second;
    
    prev = first;
  }
  
  return dummy.next;
}

export default swapPairs;`
          },
          {
            language: 'python',
            code: `def swapPairs(head):
    dummy = ListNode(0)
    dummy.next = head
    prev = dummy
    
    while prev.next and prev.next.next:
        first = prev.next
        second = prev.next.next
        
        first.next = second.next
        second.next = first
        prev.next = second
        
        prev = first
    
    return dummy.next`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(1)',
          explanation: 'Single pass through list. Only a few pointers needed.'
        },
        pros: ['Optimal solution', 'Clear pointer manipulation'],
        cons: ['Requires careful pointer management']
      }
    ]
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
    solutions: [
      {
        methodName: 'iterative',
        title: 'Iterative Reversal',
        intuition: 'Find the node before left position, reverse the sublist from left to right, then reconnect.',
        explanation: 'Use dummy node. Navigate to node before left. Reverse the sublist by repeatedly moving the next node to the front. Reconnect the reversed part.',
        algorithm: [
          'Create dummy node',
          'Navigate to node before left position',
          'For right - left times, move next node to front of sublist',
          'Return dummy.next'
        ],
        code: [
          {
            language: 'javascript',
            code: `function reverseBetween(head, left, right) {
  const dummy = { val: 0, next: head };
  let prev = dummy;
  
  for (let i = 1; i < left; i++) {
    prev = prev.next;
  }
  
  const curr = prev.next;
  for (let i = 0; i < right - left; i++) {
    const temp = curr.next;
    curr.next = temp.next;
    temp.next = prev.next;
    prev.next = temp;
  }
  
  return dummy.next;
}

module.exports = reverseBetween;`
          },
          {
            language: 'typescript',
            code: `function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  const dummy: ListNode = { val: 0, next: head };
  let prev: ListNode = dummy;
  
  for (let i = 1; i < left; i++) {
    prev = prev.next!;
  }
  
  const curr = prev.next!;
  for (let i = 0; i < right - left; i++) {
    const temp = curr.next!;
    curr.next = temp.next;
    temp.next = prev.next;
    prev.next = temp;
  }
  
  return dummy.next;
}

export default reverseBetween;`
          },
          {
            language: 'python',
            code: `def reverseBetween(head, left, right):
    dummy = ListNode(0)
    dummy.next = head
    prev = dummy
    
    for _ in range(left - 1):
        prev = prev.next
    
    curr = prev.next
    for _ in range(right - left):
        temp = curr.next
        curr.next = temp.next
        temp.next = prev.next
        prev.next = temp
    
    return dummy.next`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(1)',
          explanation: 'Single pass through list. Only a few pointers needed.'
        },
        pros: ['Optimal solution', 'Elegant pointer manipulation'],
        cons: ['Requires careful understanding of pointer movements']
      }
    ]
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
    solutions: [
      {
        methodName: 'circular-rotation',
        title: 'Make Circular and Rotate',
        intuition: 'Connect tail to head to make circular, find new tail, break the circle.',
        explanation: 'First find the length and connect tail to head. Then find the new tail at position (n - k % n - 1) and break the circle there.',
        algorithm: [
          'If head is null or k is 0, return head',
          'Find length n and connect tail to head',
          'Calculate effective rotations: k = k % n',
          'Find new tail at position (n - k - 1)',
          'New head is new tail.next',
          'Break circle: new tail.next = null',
          'Return new head'
        ],
        code: [
          {
            language: 'javascript',
            code: `function rotateRight(head, k) {
  if (!head || !head.next || k === 0) return head;
  
  let length = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    length++;
  }
  
  tail.next = head;
  k = k % length;
  let stepsToNewTail = length - k - 1;
  
  let newTail = head;
  for (let i = 0; i < stepsToNewTail; i++) {
    newTail = newTail.next;
  }
  
  const newHead = newTail.next;
  newTail.next = null;
  return newHead;
}

module.exports = rotateRight;`
          },
          {
            language: 'typescript',
            code: `function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next || k === 0) return head;
  
  let length = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    length++;
  }
  
  tail.next = head;
  k = k % length;
  let stepsToNewTail = length - k - 1;
  
  let newTail = head;
  for (let i = 0; i < stepsToNewTail; i++) {
    newTail = newTail.next!;
  }
  
  const newHead = newTail.next;
  newTail.next = null;
  return newHead;
}

export default rotateRight;`
          },
          {
            language: 'python',
            code: `def rotateRight(head, k):
    if not head or not head.next or k == 0:
        return head
    
    length = 1
    tail = head
    while tail.next:
        tail = tail.next
        length += 1
    
    tail.next = head
    k = k % length
    steps_to_new_tail = length - k - 1
    
    new_tail = head
    for _ in range(steps_to_new_tail):
        new_tail = new_tail.next
    
    new_head = new_tail.next
    new_tail.next = None
    return new_head`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(1)',
          explanation: 'Two passes through list. Only a few pointers needed.'
        },
        pros: ['Optimal solution', 'Handles k > n efficiently'],
        cons: ['Modifies list structure temporarily']
      }
    ]
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
    solutions: [
      {
        methodName: 'two-lists',
        title: 'Two Separate Lists',
        intuition: 'Create two separate lists for nodes less than x and nodes greater/equal to x, then connect them.',
        explanation: 'Use two dummy nodes to build two separate lists. Iterate through original list, appending to appropriate list. Finally connect the two lists.',
        algorithm: [
          'Create two dummy nodes: beforeDummy and afterDummy',
          'Initialize before and after pointers',
          'Iterate through list:',
          '  - If node.val < x, append to before list',
          '  - Else append to after list',
          'Connect before list to after list',
          'Set after list tail.next = null',
          'Return beforeDummy.next'
        ],
        code: [
          {
            language: 'javascript',
            code: `function partition(head, x) {
  const beforeDummy = { val: 0, next: null };
  const afterDummy = { val: 0, next: null };
  let before = beforeDummy, after = afterDummy;
  
  let curr = head;
  while (curr) {
    if (curr.val < x) {
      before.next = curr;
      before = before.next;
    } else {
      after.next = curr;
      after = after.next;
    }
    curr = curr.next;
  }
  
  after.next = null;
  before.next = afterDummy.next;
  return beforeDummy.next;
}

module.exports = partition;`
          },
          {
            language: 'typescript',
            code: `function partition(head: ListNode | null, x: number): ListNode | null {
  const beforeDummy: ListNode = { val: 0, next: null };
  const afterDummy: ListNode = { val: 0, next: null };
  let before = beforeDummy, after = afterDummy;
  
  let curr = head;
  while (curr) {
    if (curr.val < x) {
      before.next = curr;
      before = before.next;
    } else {
      after.next = curr;
      after = after.next;
    }
    curr = curr.next;
  }
  
  after.next = null;
  before.next = afterDummy.next;
  return beforeDummy.next;
}

export default partition;`
          },
          {
            language: 'python',
            code: `def partition(head, x):
    before_dummy = ListNode(0)
    after_dummy = ListNode(0)
    before = before_dummy
    after = after_dummy
    
    curr = head
    while curr:
        if curr.val < x:
            before.next = curr
            before = before.next
        else:
            after.next = curr
            after = after.next
        curr = curr.next
    
    after.next = None
    before.next = after_dummy.next
    return before_dummy.next`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(1)',
          explanation: 'Single pass through list. Only a few pointers needed.'
        },
        pros: ['Optimal solution', 'Preserves relative order', 'Clean approach'],
        cons: ['None']
      }
    ]
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
    solutions: [
      {
        methodName: 'merge-sort',
        title: 'Merge Sort',
        intuition: 'Use merge sort algorithm adapted for linked lists. Find middle, recursively sort halves, merge sorted halves.',
        explanation: 'Find middle using slow/fast pointers. Recursively sort left and right halves. Merge the two sorted lists.',
        algorithm: [
          'Base case: if head is null or single node, return head',
          'Find middle using slow/fast pointers',
          'Split list into two halves',
          'Recursively sort left half',
          'Recursively sort right half',
          'Merge two sorted halves',
          'Return merged list'
        ],
        code: [
          {
            language: 'javascript',
            code: `function sortList(head) {
  if (!head || !head.next) return head;
  
  const getMid = (node) => {
    let slow = node, fast = node.next;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  };
  
  const merge = (l1, l2) => {
    const dummy = { val: 0, next: null };
    let curr = dummy;
    while (l1 && l2) {
      if (l1.val < l2.val) {
        curr.next = l1;
        l1 = l1.next;
      } else {
        curr.next = l2;
        l2 = l2.next;
      }
      curr = curr.next;
    }
    curr.next = l1 || l2;
    return dummy.next;
  };
  
  const mid = getMid(head);
  const right = mid.next;
  mid.next = null;
  
  return merge(sortList(head), sortList(right));
}

module.exports = sortList;`
          },
          {
            language: 'typescript',
            code: `function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  
  const getMid = (node: ListNode): ListNode => {
    let slow = node, fast = node.next;
    while (fast && fast.next) {
      slow = slow.next!;
      fast = fast.next.next;
    }
    return slow;
  };
  
  const merge = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
    const dummy: ListNode = { val: 0, next: null };
    let curr = dummy;
    while (l1 && l2) {
      if (l1.val < l2.val) {
        curr.next = l1;
        l1 = l1.next;
      } else {
        curr.next = l2;
        l2 = l2.next;
      }
      curr = curr.next;
    }
    curr.next = l1 || l2;
    return dummy.next;
  };
  
  const mid = getMid(head);
  const right = mid.next;
  mid.next = null;
  
  return merge(sortList(head), sortList(right));
}

export default sortList;`
          },
          {
            language: 'python',
            code: `def sortList(head):
    if not head or not head.next:
        return head
    
    def get_mid(node):
        slow, fast = node, node.next
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        return slow
    
    def merge(l1, l2):
        dummy = ListNode(0)
        curr = dummy
        while l1 and l2:
            if l1.val < l2.val:
                curr.next = l1
                l1 = l1.next
            else:
                curr.next = l2
                l2 = l2.next
            curr = curr.next
        curr.next = l1 or l2
        return dummy.next
    
    mid = get_mid(head)
    right = mid.next
    mid.next = None
    
    return merge(sortList(head), sortList(right))`
          }
        ],
        complexity: {
          time: 'O(N log N)',
          space: 'O(log N)',
          explanation: 'Merge sort time complexity. Recursion stack space.'
        },
        pros: ['Optimal for linked lists', 'Stable sort', 'No extra space for merging'],
        cons: ['Recursive approach uses stack space']
      }
    ]
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
    solutions: [
      {
        methodName: 'three-steps',
        title: 'Find Middle, Reverse, Merge',
        intuition: 'Find middle of list, reverse second half, then merge two halves alternately.',
        explanation: 'Use slow/fast pointers to find middle. Reverse the second half. Merge first and reversed second half by alternating nodes.',
        algorithm: [
          'Find middle using slow/fast pointers',
          'Reverse second half starting from middle',
          'Merge first half and reversed second half alternately',
          'Connect nodes: first->second->first.next->second.next...'
        ],
        code: [
          {
            language: 'javascript',
            code: `function reorderList(head) {
  if (!head || !head.next) return;
  
  let slow = head, fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  
  let prev = null, curr = slow.next;
  slow.next = null;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  
  let first = head, second = prev;
  while (second) {
    const tmp1 = first.next, tmp2 = second.next;
    first.next = second;
    second.next = tmp1;
    first = tmp1;
    second = tmp2;
  }
}

module.exports = reorderList;`
          },
          {
            language: 'typescript',
            code: `function reorderList(head: ListNode | null): void {
  if (!head || !head.next) return;
  
  let slow = head, fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next!;
    fast = fast.next.next;
  }
  
  let prev: ListNode | null = null;
  let curr: ListNode | null = slow.next;
  slow.next = null;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  
  let first: ListNode | null = head;
  let second: ListNode | null = prev;
  while (second) {
    const tmp1 = first!.next, tmp2 = second.next;
    first!.next = second;
    second.next = tmp1;
    first = tmp1;
    second = tmp2;
  }
}

export default reorderList;`
          },
          {
            language: 'python',
            code: `def reorderList(head):
    if not head or not head.next:
        return
    
    slow, fast = head, head
    while fast.next and fast.next.next:
        slow = slow.next
        fast = fast.next.next
    
    prev, curr = None, slow.next
    slow.next = None
    while curr:
        next_node = curr.next
        curr.next = prev
        prev = curr
        curr = next_node
    
    first, second = head, prev
    while second:
        tmp1, tmp2 = first.next, second.next
        first.next = second
        second.next = tmp1
        first = tmp1
        second = tmp2`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(1)',
          explanation: 'Three passes: find middle, reverse, merge. Constant extra space.'
        },
        pros: ['Optimal solution', 'In-place', 'No extra space'],
        cons: ['Modifies list structure', 'Multiple steps']
      }
    ]
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
    solutions: [
      {
        methodName: 'floyds-algorithm',
        title: 'Floyd\'s Cycle Detection',
        intuition: 'Use Floyd\'s algorithm to detect cycle, then find the start of the cycle.',
        explanation: 'First detect if cycle exists using slow/fast pointers. If they meet, reset slow to head. Move both one step at a time until they meet again - that\'s the cycle start.',
        algorithm: [
          'Use slow and fast pointers to detect cycle',
          'If no cycle (fast reaches null), return null',
          'If cycle detected (slow == fast), reset slow to head',
          'Move both slow and fast one step at a time',
          'When they meet, that\'s the cycle start',
          'Return the meeting node'
        ],
        code: [
          {
            language: 'javascript',
            code: `function detectCycle(head) {
  let slow = head, fast = head;
  
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    
    if (slow === fast) {
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  
  return null;
}

module.exports = detectCycle;`
          },
          {
            language: 'typescript',
            code: `function detectCycle(head: ListNode | null): ListNode | null {
  let slow = head, fast = head;
  
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
    
    if (slow === fast) {
      slow = head;
      while (slow !== fast) {
        slow = slow!.next;
        fast = fast!.next;
      }
      return slow;
    }
  }
  
  return null;
}

export default detectCycle;`
          },
          {
            language: 'python',
            code: `def detectCycle(head):
    slow, fast = head, head
    
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        
        if slow == fast:
            slow = head
            while slow != fast:
                slow = slow.next
                fast = fast.next
            return slow
    
    return None`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(1)',
          explanation: 'Two passes through list. Only a few pointers needed.'
        },
        pros: ['Optimal solution', 'Constant space', 'Elegant algorithm'],
        cons: ['Requires understanding of Floyd\'s algorithm']
      }
    ]
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
    solutions: [
      {
        methodName: 'two-pointers',
        title: 'Two Pointers with Redirect',
        intuition: 'When a pointer reaches the end, redirect it to the other list\'s head. They will meet at intersection or both reach null.',
        explanation: 'Use two pointers starting at each head. When one reaches end, redirect to other head. After at most 2 passes, they meet at intersection or both null.',
        algorithm: [
          'Initialize pointers pA and pB at headA and headB',
          'While pA != pB:',
          '  - Move pA to next, or headB if null',
          '  - Move pB to next, or headA if null',
          'Return pA (intersection node or null)'
        ],
        code: [
          {
            language: 'javascript',
            code: `function getIntersectionNode(headA, headB) {
  let pA = headA, pB = headB;
  
  while (pA !== pB) {
    pA = pA ? pA.next : headB;
    pB = pB ? pB.next : headA;
  }
  
  return pA;
}

module.exports = getIntersectionNode;`
          },
          {
            language: 'typescript',
            code: `function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let pA = headA, pB = headB;
  
  while (pA !== pB) {
    pA = pA ? pA.next : headB;
    pB = pB ? pB.next : headA;
  }
  
  return pA;
}

export default getIntersectionNode;`
          },
          {
            language: 'python',
            code: `def getIntersectionNode(headA, headB):
    pA, pB = headA, headB
    
    while pA != pB:
        pA = pA.next if pA else headB
        pB = pB.next if pB else headA
    
    return pA`
          }
        ],
        complexity: {
          time: 'O(M + N)',
          space: 'O(1)',
          explanation: 'At most 2 passes through both lists. Only two pointers needed.'
        },
        pros: ['Optimal solution', 'Elegant and concise', 'Constant space'],
        cons: ['Clever trick may not be immediately obvious']
      }
    ]
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
    solutions: [
      {
        methodName: 'recursive',
        title: 'Recursive Approach',
        intuition: 'Recursively flatten right subtree, then left subtree, then connect root to flattened left, and left tail to flattened right.',
        explanation: 'Process right subtree first, then left. Connect root.right to left subtree, find tail of left, connect to old right.',
        algorithm: [
          'Base case: if root is null, return',
          'Recursively flatten right subtree',
          'Recursively flatten left subtree',
          'Save right subtree',
          'Move left subtree to right',
          'Set left to null',
          'Find tail of new right',
          'Connect tail to saved right'
        ],
        code: [
          {
            language: 'javascript',
            code: `function flatten(root) {
  if (!root) return;
  
  flatten(root.left);
  flatten(root.right);
  
  const tempRight = root.right;
  root.right = root.left;
  root.left = null;
  
  let curr = root;
  while (curr.right) {
    curr = curr.right;
  }
  curr.right = tempRight;
}

module.exports = flatten;`
          },
          {
            language: 'typescript',
            code: `function flatten(root: TreeNode | null): void {
  if (!root) return;
  
  flatten(root.left);
  flatten(root.right);
  
  const tempRight = root.right;
  root.right = root.left;
  root.left = null;
  
  let curr = root;
  while (curr.right) {
    curr = curr.right;
  }
  curr.right = tempRight;
}

export default flatten;`
          },
          {
            language: 'python',
            code: `def flatten(root):
    if not root:
        return
    
    flatten(root.left)
    flatten(root.right)
    
    temp_right = root.right
    root.right = root.left
    root.left = None
    
    curr = root
    while curr.right:
        curr = curr.right
    curr.right = temp_right`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(N)',
          explanation: 'Visit each node once. Recursion stack uses O(N) space in worst case.'
        },
        pros: ['Clean recursive solution', 'Easy to understand'],
        cons: ['Uses recursion stack space']
      }
    ]
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
    solutions: [
      {
        methodName: 'recursive-divide-conquer',
        title: 'Recursive Divide and Conquer',
        intuition: 'First element of preorder is root. Find root in inorder to split left/right subtrees. Recursively build both.',
        explanation: 'Use preorder to identify root. Find root in inorder to determine left and right subtree elements. Recursively build left and right subtrees.',
        algorithm: [
          'Base case: if arrays are empty, return null',
          'Root is first element of preorder',
          'Find root index in inorder',
          'Left subtree: inorder[0..rootIndex-1], preorder[1..leftSize]',
          'Right subtree: inorder[rootIndex+1..end], preorder[leftSize+1..end]',
          'Recursively build left and right',
          'Return root'
        ],
        code: [
          {
            language: 'javascript',
            code: `function buildTree(preorder, inorder) {
  if (!preorder.length) return null;
  
  const rootVal = preorder[0];
  const root = { val: rootVal, left: null, right: null };
  const rootIndex = inorder.indexOf(rootVal);
  
  root.left = buildTree(
    preorder.slice(1, rootIndex + 1),
    inorder.slice(0, rootIndex)
  );
  root.right = buildTree(
    preorder.slice(rootIndex + 1),
    inorder.slice(rootIndex + 1)
  );
  
  return root;
}

module.exports = buildTree;`
          },
          {
            language: 'typescript',
            code: `function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!preorder.length) return null;
  
  const rootVal = preorder[0];
  const root: TreeNode = { val: rootVal, left: null, right: null };
  const rootIndex = inorder.indexOf(rootVal);
  
  root.left = buildTree(
    preorder.slice(1, rootIndex + 1),
    inorder.slice(0, rootIndex)
  );
  root.right = buildTree(
    preorder.slice(rootIndex + 1),
    inorder.slice(rootIndex + 1)
  );
  
  return root;
}

export default buildTree;`
          },
          {
            language: 'python',
            code: `def buildTree(preorder, inorder):
    if not preorder:
        return None
    
    root_val = preorder[0]
    root = TreeNode(root_val)
    root_index = inorder.index(root_val)
    
    root.left = buildTree(
        preorder[1:root_index + 1],
        inorder[:root_index]
    )
    root.right = buildTree(
        preorder[root_index + 1:],
        inorder[root_index + 1:]
    )
    
    return root`
          }
        ],
        complexity: {
          time: 'O(N²)',
          space: 'O(N)',
          explanation: 'Finding root in inorder takes O(N) for each node. Can be optimized to O(N) with hash map. Recursion stack uses O(N) space.'
        },
        pros: ['Clear divide and conquer approach', 'Easy to understand'],
        cons: ['Can be optimized with hash map for O(N) time']
      }
    ]
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
    solutions: [
      {
        methodName: 'level-order',
        title: 'Level Order with Next Pointers',
        intuition: 'Use level order traversal to connect nodes at same level.',
        explanation: 'Process level by level. For each level, connect nodes using next pointers.',
        algorithm: [
          'If root is null, return null',
          'Start with leftmost node of current level',
          'While leftmost exists:',
          '  - Traverse current level using next pointers',
          '  - Connect children of current level',
          '  - Move to next level',
          'Return root'
        ],
        code: [
          {
            language: 'javascript',
            code: `function connect(root) {
  if (!root) return null;
  
  let leftmost = root;
  while (leftmost.left) {
    let head = leftmost;
    while (head) {
      head.left.next = head.right;
      if (head.next) {
        head.right.next = head.next.left;
      }
      head = head.next;
    }
    leftmost = leftmost.left;
  }
  
  return root;
}

module.exports = connect;`
          },
          {
            language: 'typescript',
            code: `function connect(root: Node | null): Node | null {
  if (!root) return null;
  
  let leftmost: Node | null = root;
  while (leftmost && leftmost.left) {
    let head: Node | null = leftmost;
    while (head) {
      head.left!.next = head.right;
      if (head.next) {
        head.right!.next = head.next.left;
      }
      head = head.next;
    }
    leftmost = leftmost.left;
  }
  
  return root;
}

export default connect;`
          },
          {
            language: 'python',
            code: `def connect(root):
    if not root:
        return None
    
    leftmost = root
    while leftmost.left:
        head = leftmost
        while head:
            head.left.next = head.right
            if head.next:
                head.right.next = head.next.left
            head = head.next
        leftmost = leftmost.left
    
    return root`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(1)',
          explanation: 'Visit each node once. No extra space needed.'
        },
        pros: ['Optimal solution', 'Constant space', 'Uses existing next pointers'],
        cons: ['Only works for perfect binary trees']
      }
    ]
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
    solutions: [
      {
        methodName: 'bfs',
        title: 'BFS Level Order',
        intuition: 'Use BFS with queue to traverse level by level.',
        explanation: 'Use queue to track nodes. Process each level completely before moving to next.',
        algorithm: [
          'If root is null, return empty array',
          'Initialize queue with root and result array',
          'While queue is not empty:',
          '  - Get level size',
          '  - Process all nodes in current level',
          '  - Add children to queue',
          '  - Add level values to result',
          'Return result'
        ],
        code: [
          {
            language: 'javascript',
            code: `function levelOrder(root) {
  if (!root) return [];
  
  const result = [];
  const queue = [root];
  
  while (queue.length) {
    const levelSize = queue.length;
    const level = [];
    
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    
    result.push(level);
  }
  
  return result;
}

module.exports = levelOrder;`
          },
          {
            language: 'typescript',
            code: `function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  
  const result: number[][] = [];
  const queue: TreeNode[] = [root];
  
  while (queue.length) {
    const levelSize = queue.length;
    const level: number[] = [];
    
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    
    result.push(level);
  }
  
  return result;
}

export default levelOrder;`
          },
          {
            language: 'python',
            code: `def levelOrder(root):
    if not root:
        return []
    
    result = []
    queue = [root]
    
    while queue:
        level_size = len(queue)
        level = []
        
        for _ in range(level_size):
            node = queue.pop(0)
            level.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        result.append(level)
    
    return result`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(N)',
          explanation: 'Visit each node once. Queue stores up to one level of nodes.'
        },
        pros: ['Standard BFS approach', 'Clear and simple'],
        cons: ['Uses O(N) space for queue']
      }
    ]
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
    solutions: [
      {
        methodName: 'bfs-with-flag',
        title: 'BFS with Direction Flag',
        intuition: 'Use BFS and alternate direction for each level.',
        explanation: 'Standard BFS but reverse alternate levels based on a flag.',
        algorithm: [
          'If root is null, return empty array',
          'Initialize queue, result, and leftToRight flag',
          'While queue is not empty:',
          '  - Process current level',
          '  - If leftToRight, add normally; else reverse',
          '  - Toggle flag',
          'Return result'
        ],
        code: [
          {
            language: 'javascript',
            code: `function zigzagLevelOrder(root) {
  if (!root) return [];
  
  const result = [];
  const queue = [root];
  let leftToRight = true;
  
  while (queue.length) {
    const levelSize = queue.length;
    const level = [];
    
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    
    result.push(leftToRight ? level : level.reverse());
    leftToRight = !leftToRight;
  }
  
  return result;
}

module.exports = zigzagLevelOrder;`
          },
          {
            language: 'typescript',
            code: `function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  
  const result: number[][] = [];
  const queue: TreeNode[] = [root];
  let leftToRight = true;
  
  while (queue.length) {
    const levelSize = queue.length;
    const level: number[] = [];
    
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    
    result.push(leftToRight ? level : level.reverse());
    leftToRight = !leftToRight;
  }
  
  return result;
}

export default zigzagLevelOrder;`
          },
          {
            language: 'python',
            code: `def zigzagLevelOrder(root):
    if not root:
        return []
    
    result = []
    queue = [root]
    left_to_right = True
    
    while queue:
        level_size = len(queue)
        level = []
        
        for _ in range(level_size):
            node = queue.pop(0)
            level.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        result.append(level if left_to_right else level[::-1])
        left_to_right = not left_to_right
    
    return result`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(N)',
          explanation: 'Visit each node once. Queue and result store O(N) nodes.'
        },
        pros: ['Simple modification of level order', 'Easy to understand'],
        cons: ['Reversing levels adds overhead']
      }
    ]
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
    solutions: [
      {
        methodName: 'bfs',
        title: 'BFS - Last Node Per Level',
        intuition: 'Use BFS and take the last node of each level.',
        explanation: 'Standard BFS but only add the rightmost (last) node of each level to result.',
        algorithm: [
          'If root is null, return empty array',
          'Initialize queue and result',
          'While queue is not empty:',
          '  - Get level size',
          '  - Process level, track last node',
          '  - Add last node value to result',
          'Return result'
        ],
        code: [
          {
            language: 'javascript',
            code: `function rightSideView(root) {
  if (!root) return [];
  
  const result = [];
  const queue = [root];
  
  while (queue.length) {
    const levelSize = queue.length;
    
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (i === levelSize - 1) result.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  
  return result;
}

module.exports = rightSideView;`
          },
          {
            language: 'typescript',
            code: `function rightSideView(root: TreeNode | null): number[] {
  if (!root) return [];
  
  const result: number[] = [];
  const queue: TreeNode[] = [root];
  
  while (queue.length) {
    const levelSize = queue.length;
    
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;
      if (i === levelSize - 1) result.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  
  return result;
}

export default rightSideView;`
          },
          {
            language: 'python',
            code: `def rightSideView(root):
    if not root:
        return []
    
    result = []
    queue = [root]
    
    while queue:
        level_size = len(queue)
        
        for i in range(level_size):
            node = queue.pop(0)
            if i == level_size - 1:
                result.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
    
    return result`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(N)',
          explanation: 'Visit each node once. Queue stores up to one level.'
        },
        pros: ['Simple BFS modification', 'Clear logic'],
        cons: ['Uses O(N) space']
      }
    ]
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
    solutions: [
      {
        methodName: 'binary-search',
        title: 'Binary Search on Complete Tree',
        intuition: 'Check if tree is perfect. If yes, use formula. Otherwise recurse.',
        explanation: 'Compare left and right heights. If equal, tree is perfect and we can use 2^h - 1. Otherwise, recursively count left and right subtrees.',
        algorithm: [
          'If root is null, return 0',
          'Get left height (go all left)',
          'Get right height (go all right)',
          'If heights equal, tree is perfect: return 2^h - 1',
          'Otherwise: return 1 + countNodes(left) + countNodes(right)'
        ],
        code: [
          {
            language: 'javascript',
            code: `function countNodes(root) {
  if (!root) return 0;
  
  let leftHeight = 0, rightHeight = 0;
  let left = root, right = root;
  
  while (left) {
    leftHeight++;
    left = left.left;
  }
  
  while (right) {
    rightHeight++;
    right = right.right;
  }
  
  if (leftHeight === rightHeight) {
    return Math.pow(2, leftHeight) - 1;
  }
  
  return 1 + countNodes(root.left) + countNodes(root.right);
}

module.exports = countNodes;`
          },
          {
            language: 'typescript',
            code: `function countNodes(root: TreeNode | null): number {
  if (!root) return 0;
  
  let leftHeight = 0, rightHeight = 0;
  let left: TreeNode | null = root;
  let right: TreeNode | null = root;
  
  while (left) {
    leftHeight++;
    left = left.left;
  }
  
  while (right) {
    rightHeight++;
    right = right.right;
  }
  
  if (leftHeight === rightHeight) {
    return Math.pow(2, leftHeight) - 1;
  }
  
  return 1 + countNodes(root.left) + countNodes(root.right);
}

export default countNodes;`
          },
          {
            language: 'python',
            code: `def countNodes(root):
    if not root:
        return 0
    
    left_height, right_height = 0, 0
    left, right = root, root
    
    while left:
        left_height += 1
        left = left.left
    
    while right:
        right_height += 1
        right = right.right
    
    if left_height == right_height:
        return 2 ** left_height - 1
    
    return 1 + countNodes(root.left) + countNodes(root.right)`
          }
        ],
        complexity: {
          time: 'O(log²N)',
          space: 'O(logN)',
          explanation: 'Height checks take O(logN). Recurse O(logN) times. Total O(log²N).'
        },
        pros: ['Better than O(N)', 'Exploits complete tree property'],
        cons: ['More complex than simple traversal']
      }
    ]
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
    solutions: [
      {
        methodName: 'recursive-dfs',
        title: 'Recursive DFS',
        intuition: 'If current node is p or q, it could be LCA. If both subtrees return non-null, current node is LCA.',
        explanation: 'Recursively search for p and q. If both found in different subtrees, current node is their LCA. If only one found, return that node.',
        algorithm: [
          'If root is null or equals p or q, return root',
          'Recursively search left subtree',
          'Recursively search right subtree',
          'If both return non-null, root is LCA',
          'If only one returns non-null, return that one',
          'If both null, return null'
        ],
        code: [
          {
            language: 'javascript',
            code: `function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;
  
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  
  if (left && right) return root;
  return left || right;
}

module.exports = lowestCommonAncestor;`
          },
          {
            language: 'typescript',
            code: `function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (!root || root === p || root === q) return root;
  
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  
  if (left && right) return root;
  return left || right;
}

export default lowestCommonAncestor;`
          },
          {
            language: 'python',
            code: `def lowestCommonAncestor(root, p, q):
    if not root or root == p or root == q:
        return root
    
    left = lowestCommonAncestor(root.left, p, q)
    right = lowestCommonAncestor(root.right, p, q)
    
    if left and right:
        return root
    return left or right`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(H)',
          explanation: 'Visit each node once. Recursion stack uses O(H) space where H is height.'
        },
        pros: ['Elegant recursive solution', 'Optimal time complexity'],
        cons: ['Uses recursion stack space']
      }
    ]
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
    solutions: [
      {
        methodName: 'dfs-backtracking',
        title: 'DFS with Backtracking',
        intuition: 'Use DFS to explore all paths. Track current path and sum. Add to result when reaching leaf with target sum.',
        explanation: 'Recursively explore tree while tracking current path. At leaf, check if sum equals target. Backtrack by removing last node.',
        algorithm: [
          'Create helper function dfs(node, currentSum, path)',
          'If node is null, return',
          'Add node to path, update sum',
          'If leaf and sum equals target, add path copy to result',
          'Recurse on left and right',
          'Backtrack: remove node from path'
        ],
        code: [
          {
            language: 'javascript',
            code: `function pathSum(root, targetSum) {
  const result = [];
  
  function dfs(node, sum, path) {
    if (!node) return;
    
    path.push(node.val);
    sum += node.val;
    
    if (!node.left && !node.right && sum === targetSum) {
      result.push([...path]);
    }
    
    dfs(node.left, sum, path);
    dfs(node.right, sum, path);
    path.pop();
  }
  
  dfs(root, 0, []);
  return result;
}

module.exports = pathSum;`
          },
          {
            language: 'typescript',
            code: `function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const result: number[][] = [];
  
  function dfs(node: TreeNode | null, sum: number, path: number[]): void {
    if (!node) return;
    
    path.push(node.val);
    sum += node.val;
    
    if (!node.left && !node.right && sum === targetSum) {
      result.push([...path]);
    }
    
    dfs(node.left, sum, path);
    dfs(node.right, sum, path);
    path.pop();
  }
  
  dfs(root, 0, []);
  return result;
}

export default pathSum;`
          },
          {
            language: 'python',
            code: `def pathSum(root, targetSum):
    result = []
    
    def dfs(node, current_sum, path):
        if not node:
            return
        
        path.append(node.val)
        current_sum += node.val
        
        if not node.left and not node.right and current_sum == targetSum:
            result.append(path[:])
        
        dfs(node.left, current_sum, path)
        dfs(node.right, current_sum, path)
        path.pop()
    
    dfs(root, 0, [])
    return result`
          }
        ],
        complexity: {
          time: 'O(N²)',
          space: 'O(H)',
          explanation: 'Visit each node once, but copying paths takes O(H). Recursion stack O(H).'
        },
        pros: ['Clear backtracking approach', 'Finds all paths'],
        cons: ['Copying paths adds overhead']
      }
    ]
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
    solutions: [
      {
        methodName: 'dfs',
        title: 'DFS with Number Building',
        intuition: 'Build number as we traverse down. At leaf, add to total sum.',
        explanation: 'Pass current number down the tree. At each node, multiply by 10 and add node value. At leaf, add to total.',
        algorithm: [
          'Create helper function dfs(node, currentNum)',
          'If node is null, return 0',
          'Update currentNum = currentNum * 10 + node.val',
          'If leaf, return currentNum',
          'Return dfs(left) + dfs(right)'
        ],
        code: [
          {
            language: 'javascript',
            code: `function sumNumbers(root) {
  function dfs(node, num) {
    if (!node) return 0;
    
    num = num * 10 + node.val;
    
    if (!node.left && !node.right) return num;
    
    return dfs(node.left, num) + dfs(node.right, num);
  }
  
  return dfs(root, 0);
}

module.exports = sumNumbers;`
          },
          {
            language: 'typescript',
            code: `function sumNumbers(root: TreeNode | null): number {
  function dfs(node: TreeNode | null, num: number): number {
    if (!node) return 0;
    
    num = num * 10 + node.val;
    
    if (!node.left && !node.right) return num;
    
    return dfs(node.left, num) + dfs(node.right, num);
  }
  
  return dfs(root, 0);
}

export default sumNumbers;`
          },
          {
            language: 'python',
            code: `def sumNumbers(root):
    def dfs(node, num):
        if not node:
            return 0
        
        num = num * 10 + node.val
        
        if not node.left and not node.right:
            return num
        
        return dfs(node.left, num) + dfs(node.right, num)
    
    return dfs(root, 0)`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(H)',
          explanation: 'Visit each node once. Recursion stack uses O(H) space.'
        },
        pros: ['Simple and elegant', 'Optimal solution'],
        cons: ['None']
      }
    ]
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
    solutions: [
      {
        methodName: 'dfs-with-global-max',
        title: 'DFS with Global Maximum',
        intuition: 'For each node, calculate max path through it. Track global max. Return max single path to parent.',
        explanation: 'At each node, calculate max path including both children. Update global max. Return max single-sided path to parent.',
        algorithm: [
          'Initialize global maxSum',
          'Create helper dfs(node):',
          '  - If null, return 0',
          '  - Get left and right max paths (ignore negative)',
          '  - Update maxSum with node.val + left + right',
          '  - Return node.val + max(left, right) to parent',
          'Return maxSum'
        ],
        code: [
          {
            language: 'javascript',
            code: `function maxPathSum(root) {
  let maxSum = -Infinity;
  
  function dfs(node) {
    if (!node) return 0;
    
    const left = Math.max(0, dfs(node.left));
    const right = Math.max(0, dfs(node.right));
    
    maxSum = Math.max(maxSum, node.val + left + right);
    
    return node.val + Math.max(left, right);
  }
  
  dfs(root);
  return maxSum;
}

module.exports = maxPathSum;`
          },
          {
            language: 'typescript',
            code: `function maxPathSum(root: TreeNode | null): number {
  let maxSum = -Infinity;
  
  function dfs(node: TreeNode | null): number {
    if (!node) return 0;
    
    const left = Math.max(0, dfs(node.left));
    const right = Math.max(0, dfs(node.right));
    
    maxSum = Math.max(maxSum, node.val + left + right);
    
    return node.val + Math.max(left, right);
  }
  
  dfs(root);
  return maxSum;
}

export default maxPathSum;`
          },
          {
            language: 'python',
            code: `def maxPathSum(root):
    max_sum = float('-inf')
    
    def dfs(node):
        nonlocal max_sum
        if not node:
            return 0
        
        left = max(0, dfs(node.left))
        right = max(0, dfs(node.right))
        
        max_sum = max(max_sum, node.val + left + right)
        
        return node.val + max(left, right)
    
    dfs(root)
    return max_sum`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(H)',
          explanation: 'Visit each node once. Recursion stack uses O(H) space.'
        },
        pros: ['Optimal solution', 'Elegant approach'],
        cons: ['Requires understanding of path calculation']
      }
    ]
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
      { language: 'java', functionName: 'Codec', code: 'class Solution {\n    public String serialize(TreeNode root) {\n        // Write your code here\n        return "";\n    }\n    public TreeNode deserialize(String data) {\n        // Write your code here\n        return null;\n    }\n}' },
      { language: 'cpp', functionName: 'Codec', code: '#include <string>\nusing namespace std;\n\nstruct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n};\n\nclass Codec {\npublic:\n    string serialize(TreeNode* root) {\n        // Write your code here\n        return "";\n    }\n    TreeNode* deserialize(string data) {\n        // Write your code here\n        return nullptr;\n    }\n};' }
    ],
    tests: [
      { id: 's1', type: 'sample', input: { root: [1, 2, 3, null, null, 4, 5] }, output: [1, 2, 3, null, null, 4, 5] }
    ],
    solutions: [
      {
        methodName: 'preorder-serialize',
        title: 'Preorder Serialization',
        intuition: 'Use preorder traversal to serialize. Use markers for null nodes. Deserialize using same order.',
        explanation: 'Serialize with preorder DFS, using special marker for null. Deserialize by building tree in same preorder.',
        algorithm: [
          'Serialize: preorder DFS, join values with delimiter, use "null" for empty',
          'Deserialize: split string, use index/queue to build tree in preorder'
        ],
        code: [
          {
            language: 'javascript',
            code: `class Codec {
  serialize(root) {
    const result = [];
    function dfs(node) {
      if (!node) {
        result.push('null');
        return;
      }
      result.push(node.val);
      dfs(node.left);
      dfs(node.right);
    }
    dfs(root);
    return result.join(',');
  }
  
  deserialize(data) {
    const values = data.split(',');
    let index = 0;
    
    function dfs() {
      if (values[index] === 'null') {
        index++;
        return null;
      }
      const node = { val: parseInt(values[index]), left: null, right: null };
      index++;
      node.left = dfs();
      node.right = dfs();
      return node;
    }
    
    return dfs();
  }
}

module.exports = Codec;`
          },
          {
            language: 'typescript',
            code: `class Codec {
  serialize(root: TreeNode | null): string {
    const result: string[] = [];
    function dfs(node: TreeNode | null): void {
      if (!node) {
        result.push('null');
        return;
      }
      result.push(String(node.val));
      dfs(node.left);
      dfs(node.right);
    }
    dfs(root);
    return result.join(',');
  }
  
  deserialize(data: string): TreeNode | null {
    const values = data.split(',');
    let index = 0;
    
    function dfs(): TreeNode | null {
      if (values[index] === 'null') {
        index++;
        return null;
      }
      const node: TreeNode = { val: parseInt(values[index]), left: null, right: null };
      index++;
      node.left = dfs();
      node.right = dfs();
      return node;
    }
    
    return dfs();
  }
}

export default Codec;`
          },
          {
            language: 'python',
            code: `class Codec:
    def serialize(self, root):
        result = []
        def dfs(node):
            if not node:
                result.append('null')
                return
            result.append(str(node.val))
            dfs(node.left)
            dfs(node.right)
        dfs(root)
        return ','.join(result)
    
    def deserialize(self, data):
        values = data.split(',')
        self.index = 0
        
        def dfs():
            if values[self.index] == 'null':
                self.index += 1
                return None
            node = TreeNode(int(values[self.index]))
            self.index += 1
            node.left = dfs()
            node.right = dfs()
            return node
        
        return dfs()`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(N)',
          explanation: 'Visit each node once for both operations. Store all nodes in string.'
        },
        pros: ['Simple preorder approach', 'Works for any tree'],
        cons: ['Uses extra space for string']
      }
    ],
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
    solutions: [
      {
        methodName: 'inorder-traversal',
        title: 'Inorder Traversal',
        intuition: 'Inorder traversal of BST gives sorted order. Return kth element.',
        explanation: 'Perform inorder traversal (left, root, right). Decrement counter k. When k reaches 0, return current value.',
        algorithm: [
          'Create helper function with counter',
          'Inorder: traverse left, process root, traverse right',
          'Decrement k at each node',
          'When k == 0, store result',
          'Return result'
        ],
        code: [
          {
            language: 'javascript',
            code: `function kthSmallest(root, k) {
  let result = 0;
  let count = 0;
  
  function inorder(node) {
    if (!node || count >= k) return;
    
    inorder(node.left);
    count++;
    if (count === k) {
      result = node.val;
      return;
    }
    inorder(node.right);
  }
  
  inorder(root);
  return result;
}

module.exports = kthSmallest;`
          },
          {
            language: 'typescript',
            code: `function kthSmallest(root: TreeNode | null, k: number): number {
  let result = 0;
  let count = 0;
  
  function inorder(node: TreeNode | null): void {
    if (!node || count >= k) return;
    
    inorder(node.left);
    count++;
    if (count === k) {
      result = node.val;
      return;
    }
    inorder(node.right);
  }
  
  inorder(root);
  return result;
}

export default kthSmallest;`
          },
          {
            language: 'python',
            code: `def kthSmallest(root, k):
    result = [0]
    count = [0]
    
    def inorder(node):
        if not node or count[0] >= k:
            return
        
        inorder(node.left)
        count[0] += 1
        if count[0] == k:
            result[0] = node.val
            return
        inorder(node.right)
    
    inorder(root)
    return result[0]`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(H)',
          explanation: 'Visit up to N nodes. Recursion stack uses O(H) space.'
        },
        pros: ['Simple inorder traversal', 'Optimal for BST'],
        cons: ['Visits all nodes in worst case']
      }
    ]
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
    solutions: [
      {
        methodName: 'recursive-bounds',
        title: 'Recursive with Min/Max Bounds',
        intuition: 'Pass min and max bounds down recursively. Each node must be within bounds.',
        explanation: 'For each node, check if value is within (min, max). Left subtree must be in (min, node.val), right in (node.val, max).',
        algorithm: [
          'Create helper function validate(node, min, max)',
          'If node is null, return true',
          'If node.val <= min or node.val >= max, return false',
          'Recursively validate left with (min, node.val)',
          'Recursively validate right with (node.val, max)',
          'Return left && right'
        ],
        code: [
          {
            language: 'javascript',
            code: `function isValidBST(root) {
  function validate(node, min, max) {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;
    return validate(node.left, min, node.val) && validate(node.right, node.val, max);
  }
  
  return validate(root, -Infinity, Infinity);
}

module.exports = isValidBST;`
          },
          {
            language: 'typescript',
            code: `function isValidBST(root: TreeNode | null): boolean {
  function validate(node: TreeNode | null, min: number, max: number): boolean {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;
    return validate(node.left, min, node.val) && validate(node.right, node.val, max);
  }
  
  return validate(root, -Infinity, Infinity);
}

export default isValidBST;`
          },
          {
            language: 'python',
            code: `def isValidBST(root):
    def validate(node, min_val, max_val):
        if not node:
            return True
        if node.val <= min_val or node.val >= max_val:
            return False
        return validate(node.left, min_val, node.val) and validate(node.right, node.val, max_val)
    
    return validate(root, float('-inf'), float('inf'))`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(H)',
          explanation: 'Visit each node once. Recursion stack uses O(H) space.'
        },
        pros: ['Elegant recursive solution', 'Optimal'],
        cons: ['Requires understanding of bounds']
      }
    ]
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
    solutions: [
      {
        methodName: 'inorder-find-swap',
        title: 'Inorder Find and Swap',
        intuition: 'Inorder traversal should be sorted. Find two nodes that break order and swap them.',
        explanation: 'Track previous node during inorder. Find violations where prev > curr. Swap the two violating nodes.',
        algorithm: [
          'Perform inorder traversal',
          'Track previous node',
          'Find first violation: prev.val > curr.val (mark first)',
          'Find second violation (mark second)',
          'Swap values of first and second nodes'
        ],
        code: [
          {
            language: 'javascript',
            code: `function recoverTree(root) {
  let first = null, second = null, prev = null;
  
  function inorder(node) {
    if (!node) return;
    
    inorder(node.left);
    
    if (prev && prev.val > node.val) {
      if (!first) first = prev;
      second = node;
    }
    prev = node;
    
    inorder(node.right);
  }
  
  inorder(root);
  [first.val, second.val] = [second.val, first.val];
}

module.exports = recoverTree;`
          },
          {
            language: 'typescript',
            code: `function recoverTree(root: TreeNode | null): void {
  let first: TreeNode | null = null;
  let second: TreeNode | null = null;
  let prev: TreeNode | null = null;
  
  function inorder(node: TreeNode | null): void {
    if (!node) return;
    
    inorder(node.left);
    
    if (prev && prev.val > node.val) {
      if (!first) first = prev;
      second = node;
    }
    prev = node;
    
    inorder(node.right);
  }
  
  inorder(root);
  if (first && second) {
    [first.val, second.val] = [second.val, first.val];
  }
}

export default recoverTree;`
          },
          {
            language: 'python',
            code: `def recoverTree(root):
    first = second = prev = None
    
    def inorder(node):
        nonlocal first, second, prev
        if not node:
            return
        
        inorder(node.left)
        
        if prev and prev.val > node.val:
            if not first:
                first = prev
            second = node
        prev = node
        
        inorder(node.right)
    
    inorder(root)
    first.val, second.val = second.val, first.val`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(H)',
          explanation: 'Single inorder traversal. Recursion stack O(H).'
        },
        pros: ['Optimal solution', 'In-place swap'],
        cons: ['Requires careful tracking of violations']
      }
    ]
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
    solutions: [
      {
        methodName: 'recursive',
        title: 'Recursive Comparison',
        intuition: 'Recursively check if both nodes are equal and subtrees are same.',
        explanation: 'If both null, trees are same. If one null, different. If values differ, different. Recurse on left and right.',
        algorithm: [
          'If both p and q are null, return true',
          'If one is null, return false',
          'If p.val != q.val, return false',
          'Recursively check left subtrees',
          'Recursively check right subtrees',
          'Return left && right'
        ],
        code: [
          {
            language: 'javascript',
            code: `function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

module.exports = isSameTree;`
          },
          {
            language: 'typescript',
            code: `function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

export default isSameTree;`
          },
          {
            language: 'python',
            code: `def isSameTree(p, q):
    if not p and not q:
        return True
    if not p or not q:
        return False
    if p.val != q.val:
        return False
    return isSameTree(p.left, q.left) and isSameTree(p.right, q.right)`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(H)',
          explanation: 'Visit each node once. Recursion stack uses O(H) space.'
        },
        pros: ['Simple and elegant', 'Optimal solution'],
        cons: ['None']
      }
    ]
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
    solutions: [
      {
        methodName: 'recursive-mirror',
        title: 'Recursive Mirror Check',
        intuition: 'Check if left subtree is mirror of right subtree.',
        explanation: 'Create helper to check if two trees are mirrors. Compare left.left with right.right and left.right with right.left.',
        algorithm: [
          'Create helper isMirror(left, right)',
          'If both null, return true',
          'If one null, return false',
          'If values differ, return false',
          'Recursively check left.left with right.right',
          'Recursively check left.right with right.left',
          'Return both checks'
        ],
        code: [
          {
            language: 'javascript',
            code: `function isSymmetric(root) {
  function isMirror(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;
    return left.val === right.val && isMirror(left.left, right.right) && isMirror(left.right, right.left);
  }
  
  return !root || isMirror(root.left, root.right);
}

module.exports = isSymmetric;`
          },
          {
            language: 'typescript',
            code: `function isSymmetric(root: TreeNode | null): boolean {
  function isMirror(left: TreeNode | null, right: TreeNode | null): boolean {
    if (!left && !right) return true;
    if (!left || !right) return false;
    return left.val === right.val && isMirror(left.left, right.right) && isMirror(left.right, right.left);
  }
  
  return !root || isMirror(root.left, root.right);
}

export default isSymmetric;`
          },
          {
            language: 'python',
            code: `def isSymmetric(root):
    def is_mirror(left, right):
        if not left and not right:
            return True
        if not left or not right:
            return False
        return left.val == right.val and is_mirror(left.left, right.right) and is_mirror(left.right, right.left)
    
    return not root or is_mirror(root.left, root.right)`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(H)',
          explanation: 'Visit each node once. Recursion stack uses O(H) space.'
        },
        pros: ['Elegant recursive solution', 'Optimal'],
        cons: ['None']
      }
    ]
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
    solutions: [
      {
        methodName: 'recursive',
        title: 'Recursive Swap',
        intuition: 'Swap left and right children, then recursively invert subtrees.',
        explanation: 'For each node, swap its left and right children. Then recursively invert both subtrees.',
        algorithm: [
          'If root is null, return null',
          'Swap root.left and root.right',
          'Recursively invert left subtree',
          'Recursively invert right subtree',
          'Return root'
        ],
        code: [
          {
            language: 'javascript',
            code: `function invertTree(root) {
  if (!root) return null;
  
  [root.left, root.right] = [root.right, root.left];
  invertTree(root.left);
  invertTree(root.right);
  
  return root;
}

module.exports = invertTree;`
          },
          {
            language: 'typescript',
            code: `function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  
  [root.left, root.right] = [root.right, root.left];
  invertTree(root.left);
  invertTree(root.right);
  
  return root;
}

export default invertTree;`
          },
          {
            language: 'python',
            code: `def invertTree(root):
    if not root:
        return None
    
    root.left, root.right = root.right, root.left
    invertTree(root.left)
    invertTree(root.right)
    
    return root`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(H)',
          explanation: 'Visit each node once. Recursion stack uses O(H) space.'
        },
        pros: ['Simple and elegant', 'Optimal solution'],
        cons: ['None']
      }
    ]
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
    solutions: [
      {
        methodName: 'dfs-with-global-max',
        title: 'DFS with Global Maximum',
        intuition: 'For each node, diameter through it = leftHeight + rightHeight. Track global max.',
        explanation: 'Calculate height of each subtree. Diameter at node is sum of left and right heights. Update global max.',
        algorithm: [
          'Initialize global diameter = 0',
          'Create helper dfs(node):',
          '  - If null, return 0',
          '  - Get left and right heights',
          '  - Update diameter = max(diameter, left + right)',
          '  - Return 1 + max(left, right)',
          'Return diameter'
        ],
        code: [
          {
            language: 'javascript',
            code: `function diameterOfBinaryTree(root) {
  let diameter = 0;
  
  function dfs(node) {
    if (!node) return 0;
    
    const left = dfs(node.left);
    const right = dfs(node.right);
    
    diameter = Math.max(diameter, left + right);
    
    return 1 + Math.max(left, right);
  }
  
  dfs(root);
  return diameter;
}

module.exports = diameterOfBinaryTree;`
          },
          {
            language: 'typescript',
            code: `function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter = 0;
  
  function dfs(node: TreeNode | null): number {
    if (!node) return 0;
    
    const left = dfs(node.left);
    const right = dfs(node.right);
    
    diameter = Math.max(diameter, left + right);
    
    return 1 + Math.max(left, right);
  }
  
  dfs(root);
  return diameter;
}

export default diameterOfBinaryTree;`
          },
          {
            language: 'python',
            code: `def diameterOfBinaryTree(root):
    diameter = [0]
    
    def dfs(node):
        if not node:
            return 0
        
        left = dfs(node.left)
        right = dfs(node.right)
        
        diameter[0] = max(diameter[0], left + right)
        
        return 1 + max(left, right)
    
    dfs(root)
    return diameter[0]`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(H)',
          explanation: 'Visit each node once. Recursion stack uses O(H) space.'
        },
        pros: ['Optimal solution', 'Single pass'],
        cons: ['None']
      }
    ]
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
    solutions: [
      {
        methodName: 'dfs-height-check',
        title: 'DFS Height Check',
        intuition: 'Calculate height while checking balance. Return -1 if unbalanced.',
        explanation: 'For each node, check if left and right heights differ by more than 1. If so, return -1 (unbalanced). Otherwise return height.',
        algorithm: [
          'Create helper dfs(node):',
          '  - If null, return 0',
          '  - Get left and right heights',
          '  - If either is -1, return -1',
          '  - If abs(left - right) > 1, return -1',
          '  - Return 1 + max(left, right)',
          'Return dfs(root) != -1'
        ],
        code: [
          {
            language: 'javascript',
            code: `function isBalanced(root) {
  function dfs(node) {
    if (!node) return 0;
    
    const left = dfs(node.left);
    if (left === -1) return -1;
    
    const right = dfs(node.right);
    if (right === -1) return -1;
    
    if (Math.abs(left - right) > 1) return -1;
    
    return 1 + Math.max(left, right);
  }
  
  return dfs(root) !== -1;
}

module.exports = isBalanced;`
          },
          {
            language: 'typescript',
            code: `function isBalanced(root: TreeNode | null): boolean {
  function dfs(node: TreeNode | null): number {
    if (!node) return 0;
    
    const left = dfs(node.left);
    if (left === -1) return -1;
    
    const right = dfs(node.right);
    if (right === -1) return -1;
    
    if (Math.abs(left - right) > 1) return -1;
    
    return 1 + Math.max(left, right);
  }
  
  return dfs(root) !== -1;
}

export default isBalanced;`
          },
          {
            language: 'python',
            code: `def isBalanced(root):
    def dfs(node):
        if not node:
            return 0
        
        left = dfs(node.left)
        if left == -1:
            return -1
        
        right = dfs(node.right)
        if right == -1:
            return -1
        
        if abs(left - right) > 1:
            return -1
        
        return 1 + max(left, right)
    
    return dfs(root) != -1`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(H)',
          explanation: 'Visit each node once. Recursion stack uses O(H) space.'
        },
        pros: ['Optimal solution', 'Single pass', 'Early termination'],
        cons: ['None']
      }
    ]
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
    solutions: [
      {
        methodName: 'bfs',
        title: 'BFS Level Order',
        intuition: 'Use BFS. Return depth when first leaf is found.',
        explanation: 'Level order traversal. When we find the first leaf node, return current depth.',
        algorithm: [
          'If root is null, return 0',
          'Initialize queue with root and depth = 1',
          'While queue not empty:',
          '  - Process current level',
          '  - If node is leaf, return depth',
          '  - Add children to queue',
          '  - Increment depth'
        ],
        code: [
          {
            language: 'javascript',
            code: `function minDepth(root) {
  if (!root) return 0;
  
  const queue = [root];
  let depth = 1;
  
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (!node.left && !node.right) return depth;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    depth++;
  }
  
  return depth;
}

module.exports = minDepth;`
          },
          {
            language: 'typescript',
            code: `function minDepth(root: TreeNode | null): number {
  if (!root) return 0;
  
  const queue: TreeNode[] = [root];
  let depth = 1;
  
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift()!;
      if (!node.left && !node.right) return depth;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    depth++;
  }
  
  return depth;
}

export default minDepth;`
          },
          {
            language: 'python',
            code: `def minDepth(root):
    if not root:
        return 0
    
    queue = [root]
    depth = 1
    
    while queue:
        size = len(queue)
        for _ in range(size):
            node = queue.pop(0)
            if not node.left and not node.right:
                return depth
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        depth += 1
    
    return depth`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(N)',
          explanation: 'Visit nodes level by level. Queue stores up to one level.'
        },
        pros: ['Optimal for finding minimum', 'Early termination'],
        cons: ['Uses O(N) space for queue']
      }
    ]
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
    solutions: [
      {
        methodName: 'recursive',
        title: 'Recursive DFS',
        intuition: 'Recursively calculate max depth of left and right subtrees.',
        explanation: 'Max depth = 1 + max(left depth, right depth). Base case: null node has depth 0.',
        algorithm: [
          'If root is null, return 0',
          'Recursively get left depth',
          'Recursively get right depth',
          'Return 1 + max(left, right)'
        ],
        code: [
          {
            language: 'javascript',
            code: `function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

module.exports = maxDepth;`
          },
          {
            language: 'typescript',
            code: `function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

export default maxDepth;`
          },
          {
            language: 'python',
            code: `def maxDepth(root):\n    if not root:\n        return 0\n    return 1 + max(maxDepth(root.left), maxDepth(root.right))`
          }
        ],
        complexity: {
          time: 'O(N)',
          space: 'O(H)',
          explanation: 'Visit each node once. Recursion stack uses O(H) space.'
        },
        pros: ['Simple and elegant', 'Optimal solution'],
        cons: ['None']
      }
    ]
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