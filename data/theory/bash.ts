import { TheoryTopic } from '@/types/theory';

export const bashTheory: TheoryTopic = {
  topicId: 'bash',
  topicName: 'Bash/Shell',
  category: 'Languages',
  description: 'Shell scripting and command-line operations',
  sections: [
    {
      id: 'basics',
      title: 'Bash Basics',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is Bash?', content: 'Bash (Bourne Again Shell) is Unix shell and command language. Default on Linux/macOS. Scripting language. Command interpreter. Automates tasks. Powerful tool. Essential for system administration.' },
        { id: 'q2', title: 'What is shell script?', content: 'Shell script is file with commands. Shebang: #!/bin/bash. Executable: chmod +x script.sh. Run: ./script.sh or bash script.sh. Automates tasks. Reusable commands. Common use case.' },
        { id: 'q3', title: 'What are variables?', content: 'Variables store values. Syntax: VAR=value (no spaces). Access: $VAR or ${VAR}. No spaces around =. Quotes for spaces. Local to script unless exported. Foundation of scripting.' },
        { id: 'q4', title: 'What are special variables?', content: 'Special variables: $0 (script name), $1-$9 (arguments), $# (argument count), $@ (all arguments), $? (exit status), $$ (process ID), $! (last background PID). Built-in variables. Useful for scripts.' },
        { id: 'q5', title: 'What is command substitution?', content: 'Command substitution captures command output. Syntax: $(command) or `command`. Use output as value. Assign to variable. Use in commands. Powerful feature.' },
        { id: 'q6', title: 'What is quoting?', content: 'Quoting: single quotes (literal), double quotes (variable expansion), backticks (command substitution). Prevents word splitting. Protects special characters. Important for strings with spaces.' },
        { id: 'q7', title: 'What is redirection?', content: 'Redirection: > (stdout to file), >> (append), < (stdin from file), 2> (stderr), &> (both). Pipes: | (stdout to next command). I/O control. Essential for scripting.' },
        { id: 'q8', title: 'What is pipe?', content: 'Pipe (|) connects commands. Output of first becomes input of second. Chain commands. Powerful composition. Common pattern. Example: ls | grep file.' },
        { id: 'q9', title: 'What is exit status?', content: 'Exit status: 0 (success), non-zero (error). Check with $?. Use in conditionals. && (run if success), || (run if failure). Error handling. Important for scripts.' },
        { id: 'q10', title: 'What are file permissions?', content: 'File permissions: read (r), write (w), execute (x). Users: owner, group, others. chmod changes permissions. chown changes owner. Security important. Control access.' }
      ]
    },
    {
      id: 'control-flow',
      title: 'Control Flow',
      content: '',
      subsections: [
        { id: 'q11', title: 'What is if statement?', content: 'if statement: if [ condition ]; then commands; fi. Conditions: -f (file exists), -d (directory), -r (readable), -z (empty string), == (equal), != (not equal). Conditional execution. Foundation of logic.' },
        { id: 'q12', title: 'What is for loop?', content: 'for loop: for var in list; do commands; done. Iterates over list. List: words, files, range. Process each item. Common pattern. Automation tool.' },
        { id: 'q13', title: 'What is while loop?', content: 'while loop: while [ condition ]; do commands; done. Repeats while condition true. Check condition each iteration. Use for: unknown iterations, reading files. Conditional repetition.' },
        { id: 'q14', title: 'What is case statement?', content: 'case statement: case $var in pattern1) commands;; pattern2) commands;; esac. Multiple conditions. Pattern matching. Cleaner than multiple if. Switch-like structure.' },
        { id: 'q15', title: 'What are test operators?', content: 'Test operators: [ ] or [[ ]]. File: -f, -d, -e, -s. String: -z, -n, ==, !=. Numeric: -eq, -ne, -lt, -gt. Logical: &&, ||, !. Condition evaluation.' },
        { id: 'q16', title: 'What is function?', content: 'Function: function_name() { commands; } or function function_name { commands; }. Reusable code. Local variables. Return values via exit status. Organize scripts. Modular code.' },
        { id: 'q17', title: 'What is array?', content: 'Array stores multiple values. Syntax: arr=(value1 value2). Access: ${arr[0]}. All: ${arr[@]}. Length: ${#arr[@]}. Useful for: lists, iterations. Data structure.' },
        { id: 'q18', title: 'What is here document?', content: 'Here document (heredoc) provides input. Syntax: command << EOF ... EOF. Multi-line input. Useful for: scripts, templates. Input redirection.' },
        { id: 'q19', title: 'What is trap?', content: 'trap handles signals. Syntax: trap "commands" SIGNAL. Cleanup on exit. Handle interrupts. Graceful shutdown. Important for scripts. Signal handling.' },
        { id: 'q20', title: 'What is set options?', content: 'set options: set -e (exit on error), set -u (error on undefined), set -x (debug mode), set -o pipefail (fail on pipe error). Safer scripts. Debugging. Best practices.' }
      ]
    },
    {
      id: 'commands',
      title: 'Common Commands',
      content: '',
      subsections: [
        { id: 'q21', title: 'What is ls command?', content: 'ls lists directory contents. Options: -l (long format), -a (all including hidden), -h (human readable), -R (recursive). Basic navigation. Essential command.' },
        { id: 'q22', title: 'What is cd command?', content: 'cd changes directory. cd .. (parent), cd ~ (home), cd - (previous). Navigation. Change working directory. Essential command.' },
        { id: 'q23', title: 'What is grep command?', content: 'grep searches text. Syntax: grep pattern file. Options: -i (ignore case), -r (recursive), -v (invert), -n (line numbers). Pattern matching. Powerful search.' },
        { id: 'q24', title: 'What is find command?', content: 'find searches files. Syntax: find path -name pattern. Options: -type (file type), -size (size), -mtime (modification time). Powerful search. File operations.' },
        { id: 'q25', title: 'What is sed command?', content: 'sed edits text stream. Syntax: sed \'s/old/new/g\' file. Stream editor. In-place: -i. Powerful text manipulation. Common in scripts.' },
        { id: 'q26', title: 'What is awk command?', content: 'awk processes text. Pattern-action language. Fields, records. Powerful text processing. Data extraction. Reporting. Complex operations.' },
        { id: 'q27', title: 'What is cut command?', content: 'cut extracts columns. Options: -d (delimiter), -f (fields). Extract specific columns. Text processing. Simple extraction.' },
        { id: 'q28', title: 'What is sort command?', content: 'sort sorts lines. Options: -n (numeric), -r (reverse), -u (unique), -k (key field). Order data. Text processing. Common operation.' },
        { id: 'q29', title: 'What is uniq command?', content: 'uniq removes duplicates. Options: -c (count), -d (show duplicates only). Requires sorted input. Often used with sort. Deduplication.' },
        { id: 'q30', title: 'What is wc command?', content: 'wc counts: lines, words, characters. Options: -l (lines), -w (words), -c (characters). Text statistics. Useful for: file analysis, counting.' }
      ]
    },
    {
      id: 'file-operations',
      title: 'File Operations',
      content: '',
      subsections: [
        { id: 'q31', title: 'What is cp command?', content: 'cp copies files/directories. Syntax: cp source dest. Options: -r (recursive), -p (preserve attributes), -i (interactive). File copying. Essential operation.' },
        { id: 'q32', title: 'What is mv command?', content: 'mv moves/renames files. Syntax: mv source dest. Move or rename. Same command. File operations. Essential command.' },
        { id: 'q33', title: 'What is rm command?', content: 'rm removes files. Options: -r (recursive), -f (force), -i (interactive). Dangerous command. Use carefully. Permanent deletion. No undo.' },
        { id: 'q34', title: 'What is mkdir command?', content: 'mkdir creates directories. Options: -p (create parents), -m (mode). Directory creation. Essential operation. Organize files.' },
        { id: 'q35', title: 'What is rmdir command?', content: 'rmdir removes empty directories. Only removes if empty. Use rm -r for non-empty. Directory removal. Cleanup operation.' },
        { id: 'q36', title: 'What is touch command?', content: 'touch creates/updates file timestamps. Creates file if not exists. Updates modification time. File creation. Timestamp manipulation.' },
        { id: 'q37', title: 'What is cat command?', content: 'cat displays file contents. Concatenate files. Display to stdout. Options: -n (line numbers), -b (number non-blank). File viewing. Simple operation.' },
        { id: 'q38', title: 'What is head/tail command?', content: 'head shows first lines, tail shows last lines. Options: -n (number of lines), -f (follow for tail). View file portions. Log monitoring. Useful commands.' },
        { id: 'q39', title: 'What is tar command?', content: 'tar archives files. Create: tar -czf archive.tar.gz files. Extract: tar -xzf archive.tar.gz. Options: -c (create), -x (extract), -z (gzip), -f (file). Compression. Backup tool.' },
        { id: 'q40', title: 'What is chmod/chown?', content: 'chmod changes permissions: chmod 755 file or chmod u+x file. chown changes owner: chown user:group file. Security control. Access management. Essential operations.' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced Bash',
      content: '',
      subsections: [
        { id: 'q41', title: 'What is process management?', content: 'Process management: & (background), jobs (list jobs), fg (foreground), bg (background), kill (terminate), ps (process list). Control processes. Background execution. Essential skills.' },
        { id: 'q42', title: 'What is job control?', content: 'Job control manages background processes. & runs in background. jobs lists jobs. fg brings to foreground. bg resumes background. Ctrl+Z suspends. Process management.' },
        { id: 'q43', title: 'What is environment variables?', content: 'Environment variables: PATH, HOME, USER, etc. export makes available to children. Persistent across sessions if in profile. System configuration. Important for scripts.' },
        { id: 'q44', title: 'What is alias?', content: 'alias creates command shortcuts. Syntax: alias name="command". Temporary (session) or permanent (.bashrc). Simplify commands. Productivity tool. Custom commands.' },
        { id: 'q45', title: 'What is history?', content: 'history shows command history. !n (execute nth command), !! (last command), !string (last starting with string). Command reuse. Productivity. Time saving.' },
        { id: 'q46', title: 'What is globbing?', content: 'Globbing matches file patterns. * (any characters), ? (single character), [abc] (character class), {a,b} (alternatives). Pattern matching. File selection. Powerful feature.' },
        { id: 'q47', title: 'What is brace expansion?', content: 'Brace expansion generates strings. Syntax: {a,b,c} or {1..10}. Generates combinations. Useful for: file operations, loops. Pattern generation.' },
        { id: 'q48', title: 'What is parameter expansion?', content: 'Parameter expansion manipulates variables. ${var:-default}, ${var:=default}, ${var:?error}, ${#var} (length), ${var%pattern} (suffix removal). Advanced variable manipulation. Powerful feature.' },
        { id: 'q49', title: 'What is debugging?', content: 'Debugging: set -x (trace), bash -x script.sh, echo for output, check exit status, validate input. Find errors. Fix issues. Important skill.' },
        { id: 'q50', title: 'What are Bash best practices?', content: 'Best practices: use set -euo pipefail, quote variables, check exit status, validate input, use functions, error handling, comments, shebang, proper permissions, test scripts, avoid eval, use modern syntax, follow conventions, secure scripts.' }
      ]
    }
  ]
};
