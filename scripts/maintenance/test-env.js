// Quick test to verify GOOGLE_API_KEY is loaded
const apiKey = process.env.GOOGLE_API_KEY;

console.log('=== Environment Variable Check ===');
console.log('API Key exists:', apiKey ? 'YES' : 'NO');
console.log('API Key length:', apiKey ? apiKey.length : 0);
console.log('API Key starts with:', apiKey ? apiKey.substring(0, 10) + '...' : 'N/A');

if (!apiKey) {
    console.error('\n❌ GOOGLE_API_KEY is NOT set!');
    console.log('\nMake sure .env.local contains:');
    console.log('GOOGLE_API_KEY=your_key_here');
    console.log('\nThen restart the server with: npm run dev');
    process.exit(1);
} else {
    console.log('\n✅ GOOGLE_API_KEY is configured correctly!');
}
