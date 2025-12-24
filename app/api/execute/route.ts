import { NextRequest, NextResponse } from 'next/server';

// Supported languages for code execution
type Language = 'javascript' | 'typescript' | 'python';

interface ExecuteRequest {
    code: string;
    language: Language;
    testCases: Array<{
        input: any;
        expectedOutput: any;
    }>;
    functionName: string;
}

interface ExecuteResponse {
    success: boolean;
    results: Array<{
        passed: boolean;
        input: any;
        expectedOutput: any;
        actualOutput: any;
        error?: string;
    }>;
    error?: string;
}

export async function POST(request: NextRequest) {
    try {
        const body: ExecuteRequest = await request.json();
        const { code, language, testCases, functionName } = body;

        // Validate input
        if (!code || !language || !testCases || !functionName) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Execute code based on language
        let results;
        switch (language) {
            case 'javascript':
            case 'typescript':
                results = await executeJavaScript(code, functionName, testCases);
                break;
            case 'python':
                results = await executePython(code, functionName, testCases);
                break;
            default:
                return NextResponse.json(
                    { success: false, error: `Unsupported language: ${language}` },
                    { status: 400 }
                );
        }

        return NextResponse.json({
            success: true,
            results
        });
    } catch (error) {
        console.error('Code execution error:', error);
        return NextResponse.json(
            {
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}

// Execute JavaScript/TypeScript code
async function executeJavaScript(
    code: string,
    functionName: string,
    testCases: Array<{ input: any; expectedOutput: any }>
) {
    const results = [];

    for (const testCase of testCases) {
        try {
            // Create a safe execution context
            const wrappedCode = `
        ${code}
        return ${functionName};
      `;

            // Execute in isolated context
            const fn = new Function(wrappedCode)();

            // Convert input object to function arguments
            const args = Object.values(testCase.input);
            const actualOutput = fn(...args);

            // Compare outputs
            const passed = JSON.stringify(actualOutput) === JSON.stringify(testCase.expectedOutput);

            results.push({
                passed,
                input: testCase.input,
                expectedOutput: testCase.expectedOutput,
                actualOutput
            });
        } catch (error) {
            results.push({
                passed: false,
                input: testCase.input,
                expectedOutput: testCase.expectedOutput,
                actualOutput: null,
                error: error instanceof Error ? error.message : 'Execution error'
            });
        }
    }

    return results;
}

// Execute Python code (mock implementation - requires backend service)
async function executePython(
    code: string,
    functionName: string,
    testCases: Array<{ input: any; expectedOutput: any }>
) {
    // NOTE: This is a mock implementation
    // In production, you would need a backend service to execute Python code safely
    // Options: AWS Lambda, Docker containers, or services like Judge0, Piston API

    const results = testCases.map(testCase => ({
        passed: false,
        input: testCase.input,
        expectedOutput: testCase.expectedOutput,
        actualOutput: null,
        error: 'Python execution requires backend service. Please use JavaScript/TypeScript for now.'
    }));

    return results;
}
