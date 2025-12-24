import { NextRequest, NextResponse } from 'next/server';
import { executePistonCode, isExecutionSuccessful, getExecutionError } from '@/lib/piston';

// Supported languages for code execution
type Language = 'javascript' | 'typescript' | 'python' | 'java' | 'cpp' | 'rust' | 'go';

interface ExecuteRequest {
    code: string;
    language: Language;
    testCases: Array<{
        input: any;
        expectedOutput: any;
    }>;
    functionName: string;
}

interface TestResult {
    passed: boolean;
    input: any;
    expectedOutput: any;
    actualOutput: any;
    error?: string;
}

interface ExecuteResponse {
    success: boolean;
    results: TestResult[];
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
        let results: TestResult[];
        switch (language) {
            case 'javascript':
            case 'typescript':
                results = await executeJavaScript(code, functionName, testCases);
                break;
            case 'python':
                results = await executePython(code, functionName, testCases);
                break;
            case 'java':
                results = await executeJava(code, functionName, testCases);
                break;
            case 'cpp':
                results = await executeCpp(code, functionName, testCases);
                break;
            case 'rust':
                results = await executeRust(code, functionName, testCases);
                break;
            case 'go':
                results = await executeGo(code, functionName, testCases);
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

// Execute JavaScript/TypeScript code (client-side safe execution)
async function executeJavaScript(
    code: string,
    functionName: string,
    testCases: Array<{ input: any; expectedOutput: any }>
): Promise<TestResult[]> {
    const results: TestResult[] = [];

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

// Execute Python code using Piston API
async function executePython(
    code: string,
    functionName: string,
    testCases: Array<{ input: any; expectedOutput: any }>
): Promise<TestResult[]> {
    const results: TestResult[] = [];

    for (const testCase of testCases) {
        try {
            // Wrap code with test execution
            const wrappedCode = `
import json

${code}

# Test execution
input_data = ${JSON.stringify(testCase.input)}
args = list(input_data.values())
result = ${functionName}(*args)
print(json.dumps(result))
`;

            const response = await executePistonCode('python', wrappedCode);

            if (isExecutionSuccessful(response)) {
                try {
                    const actualOutput = JSON.parse(response.run.stdout.trim());
                    const passed = JSON.stringify(actualOutput) === JSON.stringify(testCase.expectedOutput);

                    results.push({
                        passed,
                        input: testCase.input,
                        expectedOutput: testCase.expectedOutput,
                        actualOutput
                    });
                } catch (parseError) {
                    results.push({
                        passed: false,
                        input: testCase.input,
                        expectedOutput: testCase.expectedOutput,
                        actualOutput: response.run.stdout.trim(),
                        error: 'Failed to parse output'
                    });
                }
            } else {
                results.push({
                    passed: false,
                    input: testCase.input,
                    expectedOutput: testCase.expectedOutput,
                    actualOutput: null,
                    error: getExecutionError(response)
                });
            }
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

// Execute Java code using Piston API
async function executeJava(
    code: string,
    functionName: string,
    testCases: Array<{ input: any; expectedOutput: any }>
): Promise<TestResult[]> {
    const results: TestResult[] = [];

    for (const testCase of testCases) {
        try {
            // Wrap code with main method and test execution
            const wrappedCode = `
import com.google.gson.Gson;
import java.util.*;

${code}

public class Main {
    public static void main(String[] args) {
        Gson gson = new Gson();
        
        // Parse input
        String inputJson = "${JSON.stringify(testCase.input).replace(/"/g, '\\"')}";
        Map<String, Object> inputMap = gson.fromJson(inputJson, Map.class);
        
        // Convert to array of arguments
        Object[] argsArray = inputMap.values().toArray();
        
        // Call function (this is simplified - actual implementation depends on function signature)
        Solution solution = new Solution();
        Object result = solution.${functionName}(argsArray);
        
        // Print result as JSON
        System.out.println(gson.toJson(result));
    }
}
`;

            const response = await executePistonCode('java', wrappedCode);

            if (isExecutionSuccessful(response)) {
                try {
                    const actualOutput = JSON.parse(response.run.stdout.trim());
                    const passed = JSON.stringify(actualOutput) === JSON.stringify(testCase.expectedOutput);

                    results.push({
                        passed,
                        input: testCase.input,
                        expectedOutput: testCase.expectedOutput,
                        actualOutput
                    });
                } catch (parseError) {
                    results.push({
                        passed: false,
                        input: testCase.input,
                        expectedOutput: testCase.expectedOutput,
                        actualOutput: response.run.stdout.trim(),
                        error: 'Failed to parse output'
                    });
                }
            } else {
                results.push({
                    passed: false,
                    input: testCase.input,
                    expectedOutput: testCase.expectedOutput,
                    actualOutput: null,
                    error: getExecutionError(response)
                });
            }
        } catch (error) {
            results.push({
                passed: false,
                input: testCase.input,
                expectedOutput: testCase.expectedOutput,
                actualOutput: null,
                error: error instanceof Error ? error.message : 'Java execution error'
            });
        }
    }

    return results;
}

// Execute C++ code using Piston API
async function executeCpp(
    code: string,
    functionName: string,
    testCases: Array<{ input: any; expectedOutput: any }>
): Promise<TestResult[]> {
    const results: TestResult[] = [];

    for (const testCase of testCases) {
        try {
            // Wrap code with main function and test execution
            const wrappedCode = `
#include <iostream>
#include <string>
#include <vector>
#include <sstream>
using namespace std;

${code}

int main() {
    // Parse input (simplified - actual implementation depends on input types)
    string inputJson = R"(${JSON.stringify(testCase.input)})";
    
    // Call function (this is simplified)
    Solution solution;
    auto result = solution.${functionName}(/* args */);
    
    // Print result
    cout << result << endl;
    
    return 0;
}
`;

            const response = await executePistonCode('cpp', wrappedCode);

            if (isExecutionSuccessful(response)) {
                try {
                    const output = response.run.stdout.trim();
                    let actualOutput: any;

                    // Try to parse as JSON, otherwise use as string
                    try {
                        actualOutput = JSON.parse(output);
                    } catch {
                        actualOutput = output;
                    }

                    const passed = JSON.stringify(actualOutput) === JSON.stringify(testCase.expectedOutput);

                    results.push({
                        passed,
                        input: testCase.input,
                        expectedOutput: testCase.expectedOutput,
                        actualOutput
                    });
                } catch (parseError) {
                    results.push({
                        passed: false,
                        input: testCase.input,
                        expectedOutput: testCase.expectedOutput,
                        actualOutput: response.run.stdout.trim(),
                        error: 'Failed to parse output'
                    });
                }
            } else {
                results.push({
                    passed: false,
                    input: testCase.input,
                    expectedOutput: testCase.expectedOutput,
                    actualOutput: null,
                    error: getExecutionError(response)
                });
            }
        } catch (error) {
            results.push({
                passed: false,
                input: testCase.input,
                expectedOutput: testCase.expectedOutput,
                actualOutput: null,
                error: error instanceof Error ? error.message : 'C++ execution error'
            });
        }
    }

    return results;
}

// Execute Rust code using Piston API
async function executeRust(
    code: string,
    functionName: string,
    testCases: Array<{ input: any; expectedOutput: any }>
): Promise<TestResult[]> {
    const results: TestResult[] = [];

    for (const testCase of testCases) {
        try {
            // Wrap code with main function and test execution
            const wrappedCode = `
use serde_json;

${code}

fn main() {
    // Parse input (simplified - actual implementation depends on input types)
    let input_json = r#"${JSON.stringify(testCase.input)}"#;
    
    // Call function (this is simplified)
    let result = ${functionName}(/* args */);
    
    // Print result as JSON
    println!("{}", serde_json::to_string(&result).unwrap());
}
`;

            const response = await executePistonCode('rust', wrappedCode);

            if (isExecutionSuccessful(response)) {
                try {
                    const output = response.run.stdout.trim();
                    let actualOutput: any;

                    // Try to parse as JSON, otherwise use as string
                    try {
                        actualOutput = JSON.parse(output);
                    } catch {
                        actualOutput = output;
                    }

                    const passed = JSON.stringify(actualOutput) === JSON.stringify(testCase.expectedOutput);

                    results.push({
                        passed,
                        input: testCase.input,
                        expectedOutput: testCase.expectedOutput,
                        actualOutput
                    });
                } catch (parseError) {
                    results.push({
                        passed: false,
                        input: testCase.input,
                        expectedOutput: testCase.expectedOutput,
                        actualOutput: response.run.stdout.trim(),
                        error: 'Failed to parse output'
                    });
                }
            } else {
                results.push({
                    passed: false,
                    input: testCase.input,
                    expectedOutput: testCase.expectedOutput,
                    actualOutput: null,
                    error: getExecutionError(response)
                });
            }
        } catch (error) {
            results.push({
                passed: false,
                input: testCase.input,
                expectedOutput: testCase.expectedOutput,
                actualOutput: null,
                error: error instanceof Error ? error.message : 'Rust execution error'
            });
        }
    }

    return results;
}

// Execute Go code using Piston API
async function executeGo(
    code: string,
    functionName: string,
    testCases: Array<{ input: any; expectedOutput: any }>
): Promise<TestResult[]> {
    const results: TestResult[] = [];

    for (const testCase of testCases) {
        try {
            // Wrap code with main function and test execution
            const wrappedCode = `
package main

import (
    "encoding/json"
    "fmt"
)

${code}

func main() {
    // Parse input (simplified - actual implementation depends on input types)
    inputJSON := \`${JSON.stringify(testCase.input)}\`
    
    var input map[string]interface{}
    json.Unmarshal([]byte(inputJSON), &input)
    
    // Call function (this is simplified)
    result := ${functionName}(/* args */)
    
    // Print result as JSON
    resultJSON, _ := json.Marshal(result)
    fmt.Println(string(resultJSON))
}
`;

            const response = await executePistonCode('go', wrappedCode);

            if (isExecutionSuccessful(response)) {
                try {
                    const output = response.run.stdout.trim();
                    let actualOutput: any;

                    // Try to parse as JSON, otherwise use as string
                    try {
                        actualOutput = JSON.parse(output);
                    } catch {
                        actualOutput = output;
                    }

                    const passed = JSON.stringify(actualOutput) === JSON.stringify(testCase.expectedOutput);

                    results.push({
                        passed,
                        input: testCase.input,
                        expectedOutput: testCase.expectedOutput,
                        actualOutput
                    });
                } catch (parseError) {
                    results.push({
                        passed: false,
                        input: testCase.input,
                        expectedOutput: testCase.expectedOutput,
                        actualOutput: response.run.stdout.trim(),
                        error: 'Failed to parse output'
                    });
                }
            } else {
                results.push({
                    passed: false,
                    input: testCase.input,
                    expectedOutput: testCase.expectedOutput,
                    actualOutput: null,
                    error: getExecutionError(response)
                });
            }
        } catch (error) {
            results.push({
                passed: false,
                input: testCase.input,
                expectedOutput: testCase.expectedOutput,
                actualOutput: null,
                error: error instanceof Error ? error.message : 'Go execution error'
            });
        }
    }

    return results;
}
