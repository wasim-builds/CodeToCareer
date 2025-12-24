import { NextRequest, NextResponse } from 'next/server';
import { Script, createContext } from 'node:vm';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';
import { writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { executePistonCode, isExecutionSuccessful, getExecutionError } from '@/lib/piston';

const execAsync = promisify(exec);

export const runtime = 'nodejs';

interface RunPayload {
  language: 'javascript' | 'typescript' | 'python' | 'java' | 'cpp' | 'c' | 'csharp' | 'rust' | 'go';
  code: string;
  functionName: string;
  tests: {
    id: string;
    type: 'sample' | 'hidden';
    input: unknown;
    output: unknown;
  }[];
}

const EXECUTION_TIMEOUT_MS = 5000;

function buildFunction(code: string) {
  const context = createContext({ module: { exports: {} }, exports: {} });
  const script = new Script(code);
  script.runInContext(context, { timeout: EXECUTION_TIMEOUT_MS });
  const exported = (context.module as { exports: unknown }).exports;
  if (typeof exported !== 'function') {
    throw new Error('Submitted code must export a function via module.exports');
  }
  return exported as (...args: unknown[]) => unknown | Promise<unknown>;
}

function getArgs(input: unknown) {
  if (Array.isArray(input)) return input;
  if (input && typeof input === 'object') return Object.values(input as Record<string, unknown>);
  return [input];
}

function deepEqual(a: unknown, b: unknown): boolean {
  if (Object.is(a, b)) return true;
  if (typeof a !== typeof b) return false;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false;
    }
    return true;
  }
  if (a && b && typeof a === 'object' && typeof b === 'object') {
    const aKeys = Object.keys(a as Record<string, unknown>);
    const bKeys = Object.keys(b as Record<string, unknown>);
    if (aKeys.length !== bKeys.length) return false;
    return aKeys.every((key) => deepEqual((a as Record<string, unknown>)[key], (b as Record<string, unknown>)[key]));
  }
  return false;
}

async function runPythonCode(code: string, functionName: string, test: RunPayload['tests'][number]) {
  const tempDir = join(tmpdir(), `py-${Date.now()}-${Math.random().toString(36).slice(2)}`);
  await mkdir(tempDir, { recursive: true });

  try {
    const args = getArgs(test.input);
    const sourceFile = join(tempDir, 'solution.py');

    const pythonCode = `
import json
import sys

${code}

if __name__ == '__main__':
    try:
        args = ${JSON.stringify(args)}
        result = ${functionName}(*args)
        print(json.dumps(result, default=str))
    except Exception as e:
        print(json.dumps({"error": str(e)}), file=sys.stderr)
        sys.exit(1)
`;

    await writeFile(sourceFile, pythonCode);
    const { stdout, stderr } = await execAsync(`python3 "${sourceFile}"`, {
      timeout: EXECUTION_TIMEOUT_MS,
      cwd: tempDir
    });

    if (stderr && stderr.includes('"error"')) {
      const errorData = JSON.parse(stderr);
      throw new Error(errorData.error);
    }

    const actual = JSON.parse(stdout.trim());
    const pass = deepEqual(actual, test.output);

    return { id: test.id, pass, expected: test.output, actual, type: test.type };
  } catch (error: any) {
    return {
      id: test.id,
      pass: false,
      expected: test.output,
      actual: null,
      type: test.type,
      error: error.message || 'Execution error',
    };
  } finally {
    await execAsync(`rm -rf "${tempDir}"`).catch(() => { });
  }
}

async function runRustCode(code: string, functionName: string, test: RunPayload['tests'][number]) {
  try {
    const inputObj = test.input as Record<string, any>;

    // Attempt to extract argument types from function signature match
    const sigRegex = new RegExp(`fn\\s+${functionName}\\s*\\((.*?)\\)`);
    const match = code.match(sigRegex);
    const argTypes: Record<string, string> = {};
    if (match && match[1]) {
      match[1].split(',').forEach(arg => {
        const parts = arg.trim().split(':');
        if (parts.length === 2) {
          argTypes[parts[0].trim()] = parts[1].trim();
        }
      });
    }

    // Helper parsers within Rust to avoid serde_json dependency (which is missing in Piston default env)
    const helperParsers = `
fn parse_i32(s: &str) -> i32 { s.trim().parse().expect("Invalid i32") }
fn parse_vec_i32(s: &str) -> Vec<i32> {
    s.trim().trim_matches(|c| c == '[' || c == ']').split(',')
     .filter(|x| !x.trim().is_empty())
     .map(|x| x.trim().parse().expect("Invalid int in vec"))
     .collect()
}
fn parse_string(s: &str) -> String {
    s.trim_matches('"').to_string()
}
`;

    const decls = Object.entries(inputObj).map(([key, val]) => {
      const type = argTypes[key] || '';
      let parser = 'parse_string'; // default fallback

      if (type.includes('Vec<i32>')) parser = 'parse_vec_i32';
      else if (type.includes('i32')) parser = 'parse_i32';
      // Add more type mappings as needed

      // Pass JSON string representation
      return `let ${key} = ${parser}(r#"${JSON.stringify(val)}"#);`;
    }).join('\n');

    const argsList = Object.keys(inputObj).join(', ');

    const fullCode = `
${code}

${helperParsers}

fn main() {
    ${decls}
    let result = ${functionName}(${argsList});
    // Use Debug formatter which usually produces valid JSON for basic types (Vec, numbers, strings)
    println!("{:?}", result);
}
`;

    const response = await executePistonCode('rust', fullCode);

    if (isExecutionSuccessful(response)) {
      const output = response.run.stdout.trim();
      let actual;
      // Loose JSON parsing since Debug fmt might not be strict JSON (e.g. no quotes on keys? Rust debug is mostly JSON-compliant for arrays/nums)
      try {
        // Replace simple quirks if any? Rust Debug for Vec<i32> is [1, 2], which is valid JSON.
        actual = JSON.parse(output);
      } catch {
        actual = output;
      }
      return { id: test.id, pass: deepEqual(actual, test.output), expected: test.output, actual, type: test.type };
    } else {
      return { id: test.id, pass: false, expected: test.output, actual: null, type: test.type, error: getExecutionError(response) };
    }
  } catch (error: any) {
    return { id: test.id, pass: false, expected: test.output, actual: null, type: test.type, error: error.message };
  }
}

async function runGoCode(code: string, functionName: string, test: RunPayload['tests'][number]) {
  try {
    const inputObj = test.input as Record<string, any>;

    // Attempt to extract argument types from Go function signature regex
    const sigRegex = new RegExp(`func\\s+${functionName}\\s*\\((.*?)\\)`);
    const match = code.match(sigRegex);
    const argTypes: Record<string, string> = {};

    if (match && match[1]) {
      // Go args: "nums []int, target int"
      const argsStr = match[1];
      argsStr.split(',').forEach(arg => {
        const parts = arg.trim().split(/\s+/);
        if (parts.length >= 2) {
          const name = parts[0];
          const type = parts.slice(1).join(' ');
          argTypes[name] = type;
        }
      });
    }

    const getType = (v: any): string => {
      if (Array.isArray(v)) {
        if (v.length > 0 && typeof v[0] === 'number') return '[]int';
        return '[]interface{}';
      }
      if (typeof v === 'number') return 'int';
      if (typeof v === 'string') return 'string';
      return 'interface{}';
    };

    const declarations = Object.entries(inputObj).map(([key, val], idx) => {
      const type = argTypes[key] || getType(val);
      const varName = `arg${idx}`;
      return `
        var ${varName} ${type}
        if err := json.Unmarshal([]byte(\`${JSON.stringify(val)}\`), &${varName}); err != nil { panic(err) }`;
    }).join('\n');

    const callArgs = Object.keys(inputObj).map((_, idx) => `arg${idx}`).join(', ');

    const fullCode = `
package main
import (
    "encoding/json"
    "fmt"
)

${code}

func main() {
    ${declarations}
    
    result := ${functionName}(${callArgs})
    
    bytes, _ := json.Marshal(result)
    fmt.Println(string(bytes))
}
`;
    const response = await executePistonCode('go', fullCode);
    if (isExecutionSuccessful(response)) {
      const output = response.run.stdout.trim();
      let actual;
      try { actual = JSON.parse(output); } catch { actual = output; }
      return { id: test.id, pass: deepEqual(actual, test.output), expected: test.output, actual, type: test.type };
    } else {
      return { id: test.id, pass: false, expected: test.output, actual: null, type: test.type, error: getExecutionError(response) };
    }
  } catch (error: any) {
    return { id: test.id, pass: false, expected: test.output, actual: null, type: test.type, error: error.message };
  }
}

async function runJavaCode(code: string, functionName: string, test: RunPayload['tests'][number]) {
  const tempDir = join(tmpdir(), `java-${Date.now()}-${Math.random().toString(36).slice(2)}`);
  await mkdir(tempDir, { recursive: true });

  try {
    const args = getArgs(test.input);

    // Extract class name from code
    const classMatch = code.match(/class\s+(\w+)/);
    const className = classMatch ? classMatch[1] : 'Solution';

    const sourceFile = join(tempDir, `${className}.java`);
    const mainFile = join(tempDir, 'Main.java');

    await writeFile(sourceFile, code);

    const mainCode = `
import com.google.gson.*;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        try {
            Gson gson = new Gson();
            String result = gson.toJson(new int[]{0, 1}); // Placeholder
            System.out.println(result);
        } catch (Exception e) {
            System.err.println("{\\"error\\": \\"" + e.getMessage() + "\\"}");
            System.exit(1);
        }
    }
}
`;
    await writeFile(mainFile, mainCode);

    return {
      id: test.id,
      pass: false,
      expected: test.output,
      actual: null,
      type: test.type,
      error: 'Java execution requires additional setup (Gson library). Use JavaScript/TypeScript/Python for now.',
    };
  } catch (error: any) {
    return {
      id: test.id,
      pass: false,
      expected: test.output,
      actual: null,
      type: test.type,
      error: error.message,
    };
  } finally {
    await execAsync(`rm -rf "${tempDir}"`).catch(() => { });
  }
}

async function runCppCode(code: string, functionName: string, test: RunPayload['tests'][number]) {
  return {
    id: test.id,
    pass: false,
    expected: test.output,
    actual: null,
    type: test.type,
    error: 'C++ execution requires additional setup. Use JavaScript/TypeScript/Python for now.',
  };
}

async function runCCode(code: string, functionName: string, test: RunPayload['tests'][number]) {
  return {
    id: test.id,
    pass: false,
    expected: test.output,
    actual: null,
    type: test.type,
    error: 'C execution requires additional setup. Use JavaScript/TypeScript/Python for now.',
  };
}

async function runCSharpCode(code: string, functionName: string, test: RunPayload['tests'][number]) {
  return {
    id: test.id,
    pass: false,
    expected: test.output,
    actual: null,
    type: test.type,
    error: 'C# execution requires additional setup. Use JavaScript/TypeScript/Python for now.',
  };
}

async function runSingleTest(fn: (...args: unknown[]) => unknown | Promise<unknown>, test: RunPayload['tests'][number]) {
  const args = getArgs(test.input);
  const timeoutPromise = new Promise<never>((_, reject) => {
    setTimeout(() => reject(new Error('Execution timed out')), EXECUTION_TIMEOUT_MS);
  });

  try {
    const actual = await Promise.race([Promise.resolve(fn(...args)), timeoutPromise]);
    const pass = deepEqual(actual, test.output);
    return {
      id: test.id,
      pass,
      expected: test.output,
      actual,
      type: test.type,
    };
  } catch (error) {
    return {
      id: test.id,
      pass: false,
      expected: test.output,
      actual: null,
      type: test.type,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

export async function POST(req: NextRequest) {
  let payload: RunPayload;

  try {
    payload = await req.json();
  } catch (error) {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { language, code, functionName, tests } = payload;

  if (!['javascript', 'typescript', 'python', 'java', 'cpp', 'c', 'csharp', 'rust', 'go'].includes(language)) {
    return NextResponse.json({ error: 'Unsupported language' }, { status: 400 });
  }

  if (!code || typeof code !== 'string' || !functionName) {
    return NextResponse.json({ error: 'Missing code or function name' }, { status: 400 });
  }

  if (!Array.isArray(tests) || tests.length === 0) {
    return NextResponse.json({ error: 'No tests provided' }, { status: 400 });
  }

  try {
    const results = [] as any[];

    if (language === 'python') {
      for (const test of tests) {
        const res = await runPythonCode(code, functionName, test);
        results.push(res);
      }
    } else if (language === 'java') {
      for (const test of tests) {
        const res = await runJavaCode(code, functionName, test);
        results.push(res);
      }
    } else if (language === 'cpp') {
      for (const test of tests) {
        const res = await runCppCode(code, functionName, test);
        results.push(res);
      }
    } else if (language === 'c') {
      for (const test of tests) {
        const res = await runCCode(code, functionName, test);
        results.push(res);
      }
    } else if (language === 'csharp') {
      for (const test of tests) {
        const res = await runCSharpCode(code, functionName, test);
        results.push(res);
      }
    } else if (language === 'rust') {
      for (const test of tests) {
        const res = await runRustCode(code, functionName, test);
        results.push(res);
      }
    } else if (language === 'go') {
      for (const test of tests) {
        const res = await runGoCode(code, functionName, test);
        results.push(res);
      }
    } else {
      // JavaScript/TypeScript - use VM
      const fn = buildFunction(code);
      for (const test of tests) {
        const res = await runSingleTest(fn, test);
        results.push(res);
      }
    }

    return NextResponse.json({ results });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to execute code';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
