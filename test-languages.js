// Test script to verify all language executors work correctly
const axios = require('axios');

const testCases = [
    {
        id: 'test1',
        type: 'sample',
        input: { nums: [2, 7, 11, 15], target: 9 },
        output: [0, 1]
    },
    {
        id: 'test2',
        type: 'sample',
        input: { nums: [3, 2, 4], target: 6 },
        output: [1, 2]
    }
];

const solutions = {
    javascript: `
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}
module.exports = twoSum;
`,

    typescript: `
function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement)!, i];
        }
        map.set(nums[i], i);
    }
    return [];
}
module.exports = twoSum;
`,

    python: `
def twoSum(nums, target):
    num_map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i
    return []
`,

    java: `
import java.util.*;

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
}
`,

    cpp: `
#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> map;
        for (int i = 0; i < nums.size(); i++) {
            int complement = target - nums[i];
            if (map.find(complement) != map.end()) {
                return {map[complement], i};
            }
            map[nums[i]] = i;
        }
        return {};
    }
};
`,

    go: `
func twoSum(nums []int, target int) []int {
    numMap := make(map[int]int)
    for i, num := range nums {
        complement := target - num
        if j, found := numMap[complement]; found {
            return []int{j, i}
        }
        numMap[num] = i
    }
    return []int{}
}
`,

    rust: `
use std::collections::HashMap;

pub fn twoSum(nums: Vec<i32>, target: i32) -> Vec<i32> {
    let mut map = HashMap::new();
    for (i, &num) in nums.iter().enumerate() {
        let complement = target - num;
        if let Some(&j) = map.get(&complement) {
            return vec![j as i32, i as i32];
        }
        map.insert(num, i);
    }
    vec![]
}
`,

    csharp: `
using System;
using System.Collections.Generic;

public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        Dictionary<int, int> map = new Dictionary<int, int>();
        for (int i = 0; i < nums.Length; i++) {
            int complement = target - nums[i];
            if (map.ContainsKey(complement)) {
                return new int[] { map[complement], i };
            }
            map[nums[i]] = i;
        }
        return new int[] { };
    }
}
`
};

async function testLanguage(language, code) {
    try {
        const response = await axios.post('http://localhost:3000/api/practice/run', {
            language,
            code,
            functionName: language === 'csharp' ? 'TwoSum' : 'twoSum',
            tests: testCases
        });

        const data = response.data;

        if (data.error) {
            console.log(`❌ ${language.toUpperCase()}: FAILED`);
            console.log(`   Error: ${data.error}\n`);
            return false;
        }

        const allPassed = data.results.every(r => r.pass);
        if (allPassed) {
            console.log(`✅ ${language.toUpperCase()}: PASSED`);
            console.log(`   All ${data.results.length} test cases passed\n`);
            return true;
        } else {
            console.log(`❌ ${language.toUpperCase()}: FAILED`);
            data.results.forEach(r => {
                if (!r.pass) {
                    console.log(`   Test ${r.id}: Expected ${JSON.stringify(r.expected)}, Got ${JSON.stringify(r.actual)}`);
                    if (r.error) console.log(`   Error: ${r.error}`);
                }
            });
            console.log('');
            return false;
        }
    } catch (error) {
        console.log(`❌ ${language.toUpperCase()}: ERROR`);
        if (error.response) {
            console.log(`   Status: ${error.response.status}`);
            console.log(`   Error: ${JSON.stringify(error.response.data)}`);
        } else {
            console.log(`   ${error.message}`);
            console.log(`   Stack: ${error.stack}`);
        }
        console.log('');
        return false;
    }
}

async function runAllTests() {
    console.log('='.repeat(60));
    console.log('Testing Code Execution Across All Languages');
    console.log('='.repeat(60));
    console.log('');

    const results = {};

    for (const [language, code] of Object.entries(solutions)) {
        results[language] = await testLanguage(language, code);
        // Add small delay between tests
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    console.log('='.repeat(60));
    console.log('Summary');
    console.log('='.repeat(60));

    const passed = Object.values(results).filter(r => r).length;
    const total = Object.keys(results).length;

    console.log(`\nTotal: ${passed}/${total} languages working correctly\n`);

    if (passed === total) {
        console.log('🎉 All languages are working perfectly!');
    } else {
        console.log('⚠️  Some languages need attention:');
        Object.entries(results).forEach(([lang, success]) => {
            if (!success) {
                console.log(`   - ${lang}`);
            }
        });
    }

    console.log('');
}

runAllTests().catch(console.error);
