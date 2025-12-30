// Test script to verify Piston API Java execution
const axios = require('axios');

async function testJavaExecution() {
    console.log('🧪 Testing Piston API with Java code...\n');

    const javaCode = `
public class Solution {
    public int add(int a, int b) {
        return a + b;
    }
    
    public static void main(String[] args) {
        Solution solution = new Solution();
        int result = solution.add(5, 3);
        System.out.println(result);
    }
}
`;

    try {
        const response = await axios.post('https://emkc.org/api/v2/piston/execute', {
            language: 'java',
            version: '*',
            files: [{
                content: javaCode
            }],
            compile_timeout: 10000,
            run_timeout: 3000
        }, {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 15000
        });

        console.log('✅ Java Execution Successful!\n');
        console.log('📊 Results:');
        console.log('Language:', response.data.language);
        console.log('Version:', response.data.version);
        console.log('\n📝 Output:');
        console.log(response.data.run.stdout);

        if (response.data.run.stderr) {
            console.log('\n⚠️  Stderr:');
            console.log(response.data.run.stderr);
        }

        console.log('\n🎯 Exit Code:', response.data.run.code);

        if (response.data.run.code === 0) {
            console.log('\n✨ Test PASSED! Java code executed successfully.');
        } else {
            console.log('\n❌ Test FAILED! Exit code:', response.data.run.code);
        }

    } catch (error) {
        console.error('❌ Error testing Java execution:');
        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
        } else {
            console.error(error.message);
        }
    }
}

// Run the test
testJavaExecution();
