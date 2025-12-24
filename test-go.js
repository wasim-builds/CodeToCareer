// Test Go execution via Piston API
const axios = require('axios');

async function testGoExecution() {
    console.log('🐹 Testing Piston API with Go code...\n');

    const goCode = `
package main

import "fmt"

func add(a int, b int) int {
    return a + b
}

func main() {
    result := add(5, 3)
    fmt.Println(result)
}
`;

    try {
        const response = await axios.post('https://emkc.org/api/v2/piston/execute', {
            language: 'go',
            version: '*',
            files: [{
                content: goCode
            }],
            compile_timeout: 10000,
            run_timeout: 3000
        }, {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 20000
        });

        console.log('✅ Go Execution Successful!\n');
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
            console.log('\n✨ Test PASSED! Go code executed successfully.');
        } else {
            console.log('\n❌ Test FAILED! Exit code:', response.data.run.code);
        }

    } catch (error) {
        console.error('❌ Error testing Go execution:');
        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
        } else {
            console.error(error.message);
        }
    }
}

testGoExecution();
