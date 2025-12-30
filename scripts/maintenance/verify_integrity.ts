
import { practiceProblems } from './data/practice/problems';

console.log(`Total Problems: ${practiceProblems.length}`);

// Check a specific new problem from Batch 5
const problemId = 'lfu-cache';
const problem = practiceProblems.find(p => p.id === problemId);

if (problem) {
    console.log(`\nProblem Found: ${problem.title}`);
    console.log(`ID: ${problem.id}`);
    console.log(`Has Solution? ${problem.solution ? 'Yes' : 'No'}`);
    console.log(`Solution Text: ${problem.solution}`);
    console.log(`Has Tests? ${problem.tests && problem.tests.length > 0 ? 'Yes' : 'No'}`);
    console.log(`Has Starter Code? ${problem.starterCode && problem.starterCode.length > 0 ? 'Yes' : 'No'}`);
} else {
    console.log(`\nProblem ${problemId} NOT FOUND.`);
}
