import { NextRequest, NextResponse } from 'next/server';
import { Script, createContext } from 'node:vm';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';
import { writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

const execAsync = promisify(exec);

export const runtime = 'nodejs';

interface RunPayload {
  language: 'javascript' | 'typescript' | 'python' | 'java' | 'cpp' | 'c' | 'csharp';
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
    await execAsync(`rm -rf "${tempDir}"`).catch(() => {});
  }
}

async function runJavaCode(code: string, functionName: string, test: RunPayload['tests'][number]) {
  const tempDir = join(tmpdir(), `java-${Date.now()}-${Math.random().toString(36).slice(2)}`);
  await mkdir(tempDir, { recursive: true });
  
  try {
    const args = getArgs(test.input);
    const argsJson = JSON.stringify(args);
    
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
    
    // For now, return a simplified response
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
    await execAsync(`rm -rf "${tempDir}"`).catch(() => {});
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

  if (!['javascript', 'typescript', 'python', 'java', 'cpp', 'c', 'csharp'].includes(language)) {
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
