// Test Rust execution via Piston API
const axios = require('axios');

async function testRustExecution() {
    console.log('🦀 Testing Piston API with Rust code...\n');

    const rustCode = `
fn add(a: i32, b: i32) -> i32 {
    a + b
}

fn main() {
    let result = add(5, 3);
    println!("{}", result);
}
`;

    try {
        const response = await axios.post('https://emkc.org/api/v2/piston/execute', {
            language: 'rust',
            version: '*',
            files: [{
                content: rustCode
            }],
            compile_timeout: 10000,
            run_timeout: 3000
        }, {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 20000
        });

        console.log('✅ Rust Execution Successful!\n');
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
            console.log('\n✨ Test PASSED! Rust code executed successfully.');
        } else {
            console.log('\n❌ Test FAILED! Exit code:', response.data.run.code);
        }

    } catch (error) {
        console.error('❌ Error testing Rust execution:');
        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
        } else {
            console.error(error.message);
        }
    }
}

testRustExecution();
