const fs = require('fs');

const content = fs.readFileSync('./data/practice/problems.ts', 'utf-8');

// Split by problem objects - each starts with "{\n    id:"
const lines = content.split('\n');
let problems = [];
let currentProblem = null;
let inSolutionsArray = false;
let solutionDepth = 0;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Detect problem ID
    if (line.match(/^\s+id:\s*['"`]/)) {
        const match = line.match(/id:\s*['"`]([^'"`]+)['"`]/);
        if (match) {
            if (currentProblem) {
                problems.push(currentProblem);
            }
            currentProblem = {
                id: match[1],
                hasSolutions: false
            };
        }
    }

    // Detect solutions array start
    if (currentProblem && line.match(/solutions:\s*\[/)) {
        inSolutionsArray = true;
        solutionDepth = 0;
    }

    // Check for solution content (methodName indicates actual solution)
    if (inSolutionsArray && line.match(/methodName:/)) {
        currentProblem.hasSolutions = true;
    }

    // Track array depth
    if (inSolutionsArray) {
        if (line.includes('[')) solutionDepth++;
        if (line.includes(']')) {
            solutionDepth--;
            if (solutionDepth <= 0) {
                inSolutionsArray = false;
            }
        }
    }
}

// Add last problem
if (currentProblem) {
    problems.push(currentProblem);
}

const totalProblems = problems.length;
const withSolutions = problems.filter(p => p.hasSolutions).length;
const withoutSolutions = totalProblems - withSolutions;

console.log('╔════════════════════════════════════════════════════╗');
console.log('║   Practice Problems Analysis (Target: 170)        ║');
console.log('╚════════════════════════════════════════════════════╝');
console.log('');
console.log('📊 Total Problems Found:        ', totalProblems);
console.log('✅ Problems WITH Solutions:     ', withSolutions);
console.log('❌ Problems WITHOUT Solutions:  ', withoutSolutions);
console.log('');
console.log('📈 Completion Rate:             ', ((withSolutions / totalProblems) * 100).toFixed(1) + '%');
console.log('');
console.log('🎯 Remaining Work:              ', withoutSolutions, 'problems need solutions');
console.log('');

// Show first 20 problems without solutions
const missingProblems = problems.filter(p => !p.hasSolutions);
if (missingProblems.length > 0) {
    console.log('❌ Problems missing solutions (first 20):');
    console.log('─'.repeat(54));
    missingProblems.slice(0, 20).forEach((p, idx) => {
        console.log(`${(idx + 1).toString().padStart(2)}. ${p.id}`);
    });

    if (missingProblems.length > 20) {
        console.log(`\n... and ${missingProblems.length - 20} more`);
    }
}
