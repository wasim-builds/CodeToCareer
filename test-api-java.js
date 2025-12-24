// Test the /api/execute endpoint with Java code
const axios = require('axios');

async function testAPIEndpoint() {
    console.log('🧪 Testing /api/execute endpoint with Java code...\n');

    const testData = {
        code: `
public class Solution {
    public int twoSum(int a, int b) {
        return a + b;
    }
}`,
        language: 'java',
        functionName: 'twoSum',
        testCases: [
            {
                input: { a: 5, b: 3 },
                expectedOutput: 8
            },
            {
                input: { a: 10, b: 20 },
                expectedOutput: 30
            },
            {
                input: { a: -5, b: 5 },
                expectedOutput: 0
            }
        ]
    };

    try {
        console.log('📤 Sending request to http://localhost:3001/api/execute\n');

        const response = await axios.post('http://localhost:3001/api/execute', testData, {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 30000
        });

        console.log('✅ API Response Received!\n');
        console.log('📊 Results:');
        console.log(JSON.stringify(response.data, null, 2));

        if (response.data.success) {
            console.log('\n✨ Test PASSED! API endpoint is working correctly.');

            const allPassed = response.data.results.every(r => r.passed);
            if (allPassed) {
                console.log('🎯 All test cases passed!');
            } else {
                console.log('⚠️  Some test cases failed.');
            }
        } else {
            console.log('\n❌ Test FAILED!');
            console.log('Error:', response.data.error);
        }

    } catch (error) {
        console.error('❌ Error testing API endpoint:');
        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', JSON.stringify(error.response.data, null, 2));
        } else {
            console.error(error.message);
        }
    }
}

// Run the test
testAPIEndpoint();
