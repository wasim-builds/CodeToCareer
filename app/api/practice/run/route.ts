import { NextRequest, NextResponse } from 'next/server';
import { Script, createContext } from 'node:vm';

export const runtime = 'nodejs';

interface RunPayload {
  language: 'javascript' | 'typescript';
  code: string;
  functionName: string;
  tests: {
    id: string;
    type: 'sample' | 'hidden';
    input: unknown;
    output: unknown;
  }[];
}

const EXECUTION_TIMEOUT_MS = 800;

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

  if (!['javascript', 'typescript'].includes(language)) {
    return NextResponse.json({ error: 'Unsupported language' }, { status: 400 });
  }

  if (!code || typeof code !== 'string' || !functionName) {
    return NextResponse.json({ error: 'Missing code or function name' }, { status: 400 });
  }

  if (!Array.isArray(tests) || tests.length === 0) {
    return NextResponse.json({ error: 'No tests provided' }, { status: 400 });
  }

  try {
    const fn = buildFunction(code);
    if (fn.name && functionName && fn.name !== functionName) {
      // Non-blocking, but helpful to catch wrong export
    }

    const results = [] as Awaited<ReturnType<typeof runSingleTest>>[];
    for (const test of tests) {
      const res = await runSingleTest(fn, test);
      results.push(res);
    }

    return NextResponse.json({ results });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to execute code';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
