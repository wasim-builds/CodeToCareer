import re

def check_languages():
    with open('data/practice/problems.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    # Split into problem blocks roughly
    # simple split by "id: '" might work but standard regex for blocks is safer if structure is consistent
    # Relying on "id: '...'" as start of new problem
    
    problems = []
    
    # regex to capture content between id: '...' and the next id: '...'
    # This is a bit fragile for nested structures but might work for this file if formatted consistently
    
    # Better approach: Iterate line by line like the existing analysis script
    
    problem_blocks = []
    current_block = []
    in_problem = False
    
    lines = content.split('\n')
    for line in lines:
        if re.match(r'^\s+\{\s*$', line): # Potential start of object
             # We need to be careful. The file structure is:
             # const baseProblems: PracticeProblem[] = [
             #   {
             #     id: ...
             #   },
             #   ...
             # ]
             pass

    # improving the existing regex approach from analyze-problems.py
    # "id:\s*['\"]([^'\"]+)['\"]"
    
    # Let's use the same block extraction logic as analyze-problems.py
    
    blocks = []
    current = []
    in_p = False
    for line in lines:
        if re.match(r'^\s+\{\s*$', line) or re.match(r'^\s+\{$', line):
            if not in_p:
                in_p = True
                current = [line]
            else:
                current.append(line) # Nested brace
        elif in_p:
            current.append(line)
            if re.match(r'^\s+\},?\s*$', line):
                # Check if this closes the main problem object. 
                # This simple logic fails for nested objects.
                # However, the top level objects are indentation level 2 (if in list).
                if line.startswith('  },') or line.startswith('  }'): 
                     blocks.append('\n'.join(current))
                     current = []
                     in_p = False
    
    # This is still risky.
    # Let's try matching "id: '...'" to "id: '...'"
    
    # Actually, simpler approach using simple string search within the block for languages
    # Extract solutions array content.
    
    missing_langs_report = []
    
    # Re-reading analyze-problems.py logic... it counts braces? No, it just checks for start/end lines.
    # It assumes indentation.
    
    # Let's write a robust parser for this specific file format
    
    
    
    # Split by slug which is unique to problems
    # slugs look like "slug: 'two-sum'"
    slug_pattern = r"slug:\s*['\"]([^'\"]+)['\"]"
    slugs_iter = list(re.finditer(slug_pattern, content))
    print(f"DEBUG: Found {len(slugs_iter)} Slugs")
    
    slug_matches = list(re.finditer(slug_pattern, content))
    starts = [m.start() for m in slug_matches]
    
    # We need to find the START of the object containing the slug.
    # Usually the slug is near the top of the object.
    # But a simple split from slug to slug will capture the solutions which are usually at the end.
    # The first slug's chunk will start at the slug line. This misses the ID/opening brace.
    # But for checking solutions (which are at the END), this is FINE.
    # The solutions for problem A are between slug A and slug B.
    
    for i in range(len(starts)):
        start = starts[i]
        end = starts[i+1] if i + 1 < len(starts) else len(content)
        chunk = content[start:end]
        
        pid = slug_matches[i].group(1)
            
        # Check solutions block
        if 'solutions: [' not in chunk:
             # Might be valid if problem truly has no solutions
             # But here we are looking for missing languages in EXISTING solutions
             continue
            
        # Extract solutions text
        sol_start = chunk.find('solutions: [')
        sol_chunk = chunk[sol_start:]
        
        # Calculate line number (approx)
        line_num = content[:start].count('\n') + 1
        
        # Check languages present in this chunk
        methods = sol_chunk.count('methodName:')
        
        langs = {
            'javascript': sol_chunk.count("language: 'javascript'") + sol_chunk.count('language: "javascript"'),
            'typescript': sol_chunk.count("language: 'typescript'") + sol_chunk.count('language: "typescript"'),
            'python': sol_chunk.count("language: 'python'") + sol_chunk.count('language: "python"'),
            'java': sol_chunk.count("language: 'java'") + sol_chunk.count('language: "java"'),
            'cpp': sol_chunk.count("language: 'cpp'") + sol_chunk.count('language: "cpp"')
        }
        
        missing = []
        for l, count in langs.items():
            if count < methods:
                missing.append(f"{l} ({count}/{methods})")
        
        if missing:
            missing_langs_report.append(f"{pid} (Line {line_num}): Missing {', '.join(missing)}")

    if missing_langs_report:
        print(f"Found {len(missing_langs_report)} problems with missing languages:")
        for line in missing_langs_report:
            print(line)
    else:
        print("All solutions seem to cover all languages!")

if __name__ == '__main__':
    check_languages()
