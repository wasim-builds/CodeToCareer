#!/usr/bin/env node

/**
 * Helper script to add Java and C++ solutions to practice problems
 * Usage: node scripts/add-solutions-helper.js <problem-name>
 */

const fs = require('fs');
const path = require('path');

// Common code templates
const templates = {
    java: {
        twoPointers: `import java.util.*;

class Solution {
    public TYPE FUNCTION_NAME(PARAMS) {
        // Two pointers approach
        int left = 0, right = ARRAY.length - 1;
        
        while (left < right) {
            // Your logic here
        }
        
        return RETURN_VALUE;
    }
}`,
        hashMap: `import java.util.HashMap;
import java.util.Map;

class Solution {
    public TYPE FUNCTION_NAME(PARAMS) {
        Map<KEY_TYPE, VALUE_TYPE> map = new HashMap<>();
        
        for (TYPE item : ARRAY) {
            // Your logic here
        }
        
        return RETURN_VALUE;
    }
}`,
        dynamicProgramming: `class Solution {
    public TYPE FUNCTION_NAME(PARAMS) {
        int n = ARRAY.length;
        int[] dp = new int[n];
        
        // Base case
        dp[0] = BASE_VALUE;
        
        // Fill DP table
        for (int i = 1; i < n; i++) {
            dp[i] = // Your logic here
        }
        
        return dp[n - 1];
    }
}`,
    },
    cpp: {
        twoPointers: `#include <vector>
using namespace std;

class Solution {
public:
    TYPE FUNCTION_NAME(PARAMS) {
        // Two pointers approach
        int left = 0, right = ARRAY.size() - 1;
        
        while (left < right) {
            // Your logic here
        }
        
        return RETURN_VALUE;
    }
};`,
        hashMap: `#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    TYPE FUNCTION_NAME(PARAMS) {
        unordered_map<KEY_TYPE, VALUE_TYPE> map;
        
        for (const auto& item : ARRAY) {
            // Your logic here
        }
        
        return RETURN_VALUE;
    }
};`,
        dynamicProgramming: `#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    TYPE FUNCTION_NAME(PARAMS) {
        int n = ARRAY.size();
        vector<int> dp(n);
        
        // Base case
        dp[0] = BASE_VALUE;
        
        // Fill DP table
        for (int i = 1; i < n; i++) {
            dp[i] = // Your logic here
        }
        
        return dp[n - 1];
    }
};`,
    }
};

// Type conversions
const typeConversions = {
    'number[]': {
        java: 'int[]',
        cpp: 'vector<int>&'
    },
    'string': {
        java: 'String',
        cpp: 'string'
    },
    'number': {
        java: 'int',
        cpp: 'int'
    },
    'boolean': {
        java: 'boolean',
        cpp: 'bool'
    },
    'number[][]': {
        java: 'int[][]',
        cpp: 'vector<vector<int>>&'
    }
};

console.log('╔════════════════════════════════════════════════════════════╗');
console.log('║   Multi-Language Solution Helper                          ║');
console.log('╚════════════════════════════════════════════════════════════╝');
console.log('');
console.log('📚 Available Templates:');
console.log('');
console.log('  Java:');
console.log('    - twoPointers');
console.log('    - hashMap');
console.log('    - dynamicProgramming');
console.log('');
console.log('  C++:');
console.log('    - twoPointers');
console.log('    - hashMap');
console.log('    - dynamicProgramming');
console.log('');
console.log('💡 Common Type Conversions:');
console.log('');
console.log('  JavaScript/TS  →  Java           →  C++');
console.log('  ─────────────────────────────────────────────────');
console.log('  number[]       →  int[]          →  vector<int>&');
console.log('  string         →  String         →  string');
console.log('  number         →  int            →  int');
console.log('  boolean        →  boolean        →  bool');
console.log('  Map            →  HashMap        →  unordered_map');
console.log('  Set            →  HashSet        →  unordered_set');
console.log('');
console.log('🔧 Quick Reference:');
console.log('');
console.log('  Array Length:');
console.log('    JS: arr.length  |  Java: arr.length  |  C++: arr.size()');
console.log('');
console.log('  Add to Array:');
console.log('    JS: arr.push()  |  Java: list.add()  |  C++: vec.push_back()');
console.log('');
console.log('  Max/Min:');
console.log('    JS: Math.max()  |  Java: Math.max()  |  C++: max()');
console.log('');
console.log('  Infinity:');
console.log('    JS: Infinity    |  Java: Integer.MAX_VALUE  |  C++: INT_MAX');
console.log('');
console.log('📝 Next Steps:');
console.log('');
console.log('  1. Open data/practice/problems.ts');
console.log('  2. Find your problem\'s solutions array');
console.log('  3. Add Java solution after Python');
console.log('  4. Add C++ solution after Java');
console.log('  5. Test with sample inputs');
console.log('');
console.log('✨ You\'ve completed 4 problems so far! Keep going! 🚀');
console.log('');

module.exports = { templates, typeConversions };
