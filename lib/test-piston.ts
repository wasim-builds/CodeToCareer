/**
 * Test file for Piston API integration
 * Run with: npx ts-node lib/test-piston.ts
 */

import { executePistonCode, getPistonRuntimes, isExecutionSuccessful } from './piston';

async function testPythonExecution() {
    console.log('\n=== Testing Python Execution ===');

    const pythonCode = `
def add(a, b):
    return a + b

result = add(2, 3)
print(result)
`;

    try {
        const response = await executePistonCode('python', pythonCode);
        console.log('✅ Python execution successful');
        console.log('Output:', response.run.stdout);
        console.log('Exit code:', response.run.code);
    } catch (error) {
        console.error('❌ Python execution failed:', error);
    }
}

async function testJavaExecution() {
    console.log('\n=== Testing Java Execution ===');

    const javaCode = `
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello from Java!");
        System.out.println(add(5, 7));
    }
    
    public static int add(int a, int b) {
        return a + b;
    }
}
`;

    try {
        const response = await executePistonCode('java', javaCode);
        console.log('✅ Java execution successful');
        console.log('Output:', response.run.stdout);
        console.log('Exit code:', response.run.code);
    } catch (error) {
        console.error('❌ Java execution failed:', error);
    }
}

async function testCppExecution() {
    console.log('\n=== Testing C++ Execution ===');

    const cppCode = `
#include <iostream>
using namespace std;

int add(int a, int b) {
    return a + b;
}

int main() {
    cout << "Hello from C++!" << endl;
    cout << add(10, 20) << endl;
    return 0;
}
`;

    try {
        const response = await executePistonCode('cpp', cppCode);
        console.log('✅ C++ execution successful');
        console.log('Output:', response.run.stdout);
        console.log('Exit code:', response.run.code);
    } catch (error) {
        console.error('❌ C++ execution failed:', error);
    }
}

async function testErrorHandling() {
    console.log('\n=== Testing Error Handling ===');

    const badPythonCode = `
def broken():
    return 1/0

broken()
`;

    try {
        const response = await executePistonCode('python', badPythonCode);
        if (isExecutionSuccessful(response)) {
            console.log('❌ Should have failed but succeeded');
        } else {
            console.log('✅ Error handling works');
            console.log('Error:', response.run.stderr);
        }
    } catch (error) {
        console.error('❌ Unexpected error:', error);
    }
}

async function listAvailableRuntimes() {
    console.log('\n=== Available Runtimes ===');

    try {
        const runtimes = await getPistonRuntimes();
        const relevantRuntimes = runtimes.filter(r =>
            ['python', 'java', 'cpp', 'c', 'javascript', 'typescript'].includes(r.language)
        );

        console.log('Relevant runtimes:');
        relevantRuntimes.forEach(runtime => {
            console.log(`  - ${runtime.language} ${runtime.version}`);
        });
    } catch (error) {
        console.error('❌ Failed to fetch runtimes:', error);
    }
}

async function runAllTests() {
    console.log('🚀 Starting Piston API Integration Tests\n');

    await listAvailableRuntimes();
    await testPythonExecution();
    await testJavaExecution();
    await testCppExecution();
    await testErrorHandling();

    console.log('\n✨ All tests completed!\n');
}

// Run tests if this file is executed directly
if (require.main === module) {
    runAllTests().catch(console.error);
}

export { runAllTests };
