const fs = require('fs');
const path = require('path');

// Read the problems.ts file
const problemsPath = path.join(__dirname, 'data/practice/problems.ts');
const mysqlPath = path.join(__dirname, 'data/practice/mysqlCodingProblems.ts');

const problemsContent = fs.readFileSync(problemsPath, 'utf8');
const mysqlContent = fs.readFileSync(mysqlPath, 'utf8');

// Count occurrences of "slug:" which indicates a problem definition
const problemsCount = (problemsContent.match(/slug:\s*'/g) || []).length;
const mysqlCount = (mysqlContent.match(/slug:\s*'/g) || []).length;

console.log(`Problems in problems.ts: ${problemsCount}`);
console.log(`Problems in mysqlCodingProblems.ts: ${mysqlCount}`);
console.log(`Total: ${problemsCount + mysqlCount}`);
