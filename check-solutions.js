const fs = require('fs');

try {
    const content = fs.readFileSync('./data/practice/problems.ts', 'utf-8');

    // Count total problems by counting "id:" occurrences
    const idMatches = content.match(/\bid:\s*\d+/g);
    const totalProblems = idMatches ? idMatches.length : 0;

    // Count problems with actual solution content (has methodName in solutions array)
    const solutionPattern = /solutions:\s*\[\s*\{[\s\S]*?methodName:/g;
    const withSolutionsMatches = content.match(solutionPattern);
    const withSolutions = withSolutionsMatches ? withSolutionsMatches.length : 0;

    // Count empty solutions arrays
    const emptySolutionsPattern = /solutions:\s*\[\s*\]/g;
    const emptySolutions = (content.match(emptySolutionsPattern) || []).length;

    const withoutSolutions = totalProblems - withSolutions;

    console.log('╔════════════════════════════════════════════════════╗');
    console.log('║   Practice Problems Analysis (Target: 170)        ║');
    console.log('╚════════════════════════════════════════════════════╝');
    console.log('');
    console.log('📊 Total Problems Found:        ', totalProblems);
    console.log('✅ Problems WITH Solutions:     ', withSolutions);
    console.log('❌ Problems WITHOUT Solutions:  ', withoutSolutions);
    console.log('📝 Empty Solutions Arrays:      ', emptySolutions);
    console.log('');
    console.log('📈 Completion Rate:             ', ((withSolutions / totalProblems) * 100).toFixed(1) + '%');
    console.log('');
    console.log('🎯 Remaining Work:              ', withoutSolutions, 'problems need solutions');
    console.log('');

    // Find which problem IDs are missing solutions
    console.log('Finding problems without solutions...');
    const problemBlocks = content.split(/(?=\s+\{\s*\n\s+id:)/);
    const missingIds = [];

    for (const block of problemBlocks) {
        const idMatch = block.match(/id:\s*(\d+)/);
        if (idMatch) {
            const id = parseInt(idMatch[1]);
            const hasSolution = /solutions:\s*\[\s*\{[\s\S]*?methodName:/.test(block);
            if (!hasSolution) {
                missingIds.push(id);
            }
        }
    }

    console.log('\n❌ Problem IDs missing solutions:');
    console.log(missingIds.join(', '));
    console.log(`\nTotal missing: ${missingIds.length}`);

} catch (error) {
    console.error('Error:', error.message);
}
