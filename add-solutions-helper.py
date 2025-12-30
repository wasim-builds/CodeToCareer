#!/usr/bin/env python3
"""
Script to add detailed solution arrays to practice problems.
This adds comprehensive solutions with brute force and optimal approaches.
"""

# Solutions data for problems 3-10
solutions_data = {
    'longest-substring-without-repeat': {
        'line_to_find': "solution: 'Sliding window: track last seen index per char. Maintain left pointer; when a repeat appears, move left to max(left, lastIndex+1). Update answer with window length. O(n) time.'",
        'solutions': '''solutions: [
      {
        methodName: 'bruteForce',
        title: 'Brute Force - Check All Substrings',
        intuition: 'Check every possible substring to find the longest one without repeating characters.',
        explanation: 'For each starting position, expand the substring as far as possible until we encounter a duplicate character. Track the maximum length found.',
        algorithm: [
          'Iterate through each index i as the starting point',
          'For each i, expand with index j from i onwards',
          'Use a set to track characters in current substring',
          'If char at j is already in set, break inner loop',
          'Update maximum length if current substring is longer',
          'Clear the set for next starting position'
        ],
        code: [
          {
            language: 'javascript',
            code: `function lengthOfLongestSubstring(s) {
  let maxLen = 0;
  
  for (let i = 0; i < s.length; i++) {
    const seen = new Set();
    for (let j = i; j < s.length; j++) {
      if (seen.has(s[j])) break;
      seen.add(s[j]);
      maxLen = Math.max(maxLen, j - i + 1);
    }
  }
  
  return maxLen;
}`
          },
          {
            language: 'typescript',
            code: `function lengthOfLongestSubstring(s: string): number {
  let maxLen = 0;
  
  for (let i = 0; i < s.length; i++) {
    const seen = new Set<string>();
    for (let j = i; j < s.length; j++) {
      if (seen.has(s[j])) break;
      seen.add(s[j]);
      maxLen = Math.max(maxLen, j - i + 1);
    }
  }
  
  return maxLen;
}`
          },
          {
            language: 'python',
            code: `def lengthOfLongestSubstring(s):
    max_len = 0
    
    for i in range(len(s)):
        seen = set()
        for j in range(i, len(s)):
            if s[j] in seen:
                break
            seen.add(s[j])
            max_len = max(max_len, j - i + 1)
    
    return max_len`
          }
        ],
        complexity: {
          time: 'O(n²)',
          space: 'O(min(n, m))',
          explanation: 'We check all possible substrings with nested loops (O(n²)). The set stores at most min(n, alphabet_size) characters.'
        },
        pros: ['Simple to understand', 'No complex pointer manipulation'],
        cons: ['Very slow for large strings', 'Redundant checks of substrings']
      },
      {
        methodName: 'slidingWindow',
        title: 'Optimal - Sliding Window with Hash Map',
        intuition: 'Use a sliding window that expands right and contracts from left when duplicates are found. Track last seen positions of characters.',
        explanation: 'Maintain a window [left, right] and a map of character last seen indices. When we find a duplicate, move left pointer past the previous occurrence of that character.',
        algorithm: [
          'Initialize left pointer at 0, maxLen at 0',
          'Create a map to store character -> last seen index',
          'Iterate right pointer through the string',
          'If current char is in map and its index >= left, move left to map[char] + 1',
          'Update map with current char and index',
          'Update maxLen with current window size',
          'Return maxLen'
        ],
        code: [
          {
            language: 'javascript',
            code: `function lengthOfLongestSubstring(s) {
  const map = new Map();
  let left = 0;
  let maxLen = 0;
  
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    
    if (map.has(char) && map.get(char) >= left) {
      left = map.get(char) + 1;
    }
    
    map.set(char, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  
  return maxLen;
}`
          },
          {
            language: 'typescript',
            code: `function lengthOfLongestSubstring(s: string): number {
  const map = new Map<string, number>();
  let left = 0;
  let maxLen = 0;
  
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    
    if (map.has(char) && map.get(char)! >= left) {
      left = map.get(char)! + 1;
    }
    
    map.set(char, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  
  return maxLen;
}`
          },
          {
            language: 'python',
            code: `def lengthOfLongestSubstring(s):
    char_map = {}
    left = 0
    max_len = 0
    
    for right, char in enumerate(s):
        if char in char_map and char_map[char] >= left:
            left = char_map[char] + 1
        
        char_map[char] = right
        max_len = max(max_len, right - left + 1)
    
    return max_len`
          }
        ],
        complexity: {
          time: 'O(n)',
          space: 'O(min(n, m))',
          explanation: 'Single pass through the string (O(n)). Hash map stores at most min(n, alphabet_size) characters.'
        },
        pros: ['Optimal time complexity', 'Single pass solution', 'Efficient for large strings'],
        cons: ['Requires extra space for hash map', 'Slightly more complex logic']
      }
    ],'''
    }
}

# Print the solution for problem 3
print("Solution for longest-substring-without-repeat:")
print(solutions_data['longest-substring-without-repeat']['solutions'])
