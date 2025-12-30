#!/usr/bin/env python3
import re

with open('data/practice/problems.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all problem IDs
id_pattern = r"id:\s*['\"]([^'\"]+)['\"]"
all_ids = re.findall(id_pattern, content)

# Find problems with solutions (those that have "solutions:" followed by array with methodName)
# Split content into problem blocks
problem_blocks = []
current_block = []
in_problem = False

lines = content.split('\n')
for i, line in enumerate(lines):
    # Start of a problem
    if re.match(r'^\s+\{\s*$', line) or re.match(r'^\s+\{$', line):
        if current_block:
            problem_blocks.append('\n'.join(current_block))
        current_block = [line]
        in_problem = True
    elif in_problem:
        current_block.append(line)
        # End of a problem (closing brace followed by comma or end)
        if re.match(r'^\s+\},?\s*$', line):
            problem_blocks.append('\n'.join(current_block))
            current_block = []
            in_problem = False

# Analyze each block
problems_with_solutions = []
problems_without_solutions = []

for block in problem_blocks:
    id_match = re.search(r"id:\s*['\"]([^'\"]+)['\"]", block)
    if id_match:
        problem_id = id_match.group(1)
        # Check if this block has solutions with methodName
        has_solution = 'solutions:' in block and 'methodName:' in block
        
        if has_solution:
            problems_with_solutions.append(problem_id)
        else:
            problems_without_solutions.append(problem_id)

total = len(all_ids)
with_sol = len(problems_with_solutions)
without_sol = len(problems_without_solutions)

print('╔════════════════════════════════════════════════════╗')
print('║   Practice Problems Analysis (Target: 170)        ║')
print('╚════════════════════════════════════════════════════╝')
print()
print(f'📊 Total Problems Found:         {total}')
print(f'✅ Problems WITH Solutions:      {with_sol}')
print(f'❌ Problems WITHOUT Solutions:   {without_sol}')
print()
print(f'📈 Completion Rate:              {(with_sol / total * 100):.1f}%')
print()
print(f'🎯 Remaining Work:               {without_sol} problems need solutions')
print()

if problems_without_solutions:
    print('❌ Problems missing solutions (first 40):')
    print('─' * 54)
    for idx, pid in enumerate(problems_without_solutions[:40], 1):
        print(f'{idx:2}. {pid}')
    
    if len(problems_without_solutions) > 40:
        print(f'\n... and {len(problems_without_solutions) - 40} more')
