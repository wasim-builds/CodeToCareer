import axios from 'axios';

const PISTON_API = 'https://emkc.org/api/v2/piston';

interface PistonFile {
    name?: string;
    content: string;
}

interface PistonExecuteRequest {
    language: string;
    version: string;
    files: PistonFile[];
    stdin?: string;
    args?: string[];
    compile_timeout?: number;
    run_timeout?: number;
    compile_memory_limit?: number;
    run_memory_limit?: number;
}

interface PistonRunResult {
    stdout: string;
    stderr: string;
    code: number;
    signal: string | null;
    output: string;
}

interface PistonExecuteResponse {
    language: string;
    version: string;
    run: PistonRunResult;
    compile?: PistonRunResult;
}

interface PistonRuntime {
    language: string;
    version: string;
    aliases: string[];
    runtime?: string;
}

/**
 * Execute code using Piston API
 * @param language Programming language (python, java, cpp, etc.)
 * @param code Source code to execute
 * @param stdin Optional standard input
 * @param version Language version (default: '*' for latest)
 * @returns Execution results
 */
export async function executePistonCode(
    language: string,
    code: string,
    stdin?: string,
    version: string = '*',
    filename?: string
): Promise<PistonExecuteResponse> {
    try {
        const request: PistonExecuteRequest = {
            language,
            version,
            files: [{ name: filename, content: code }],
            stdin,
            compile_timeout: 10000, // 10 seconds
            run_timeout: 3000, // 3 seconds
            compile_memory_limit: -1, // No limit
            run_memory_limit: -1 // No limit
        };

        const response = await axios.post<PistonExecuteResponse>(
            `${PISTON_API}/execute`,
            request,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                timeout: 15000 // 15 second total timeout
            }
        );

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(
                `Piston API error: ${error.response?.data?.message || error.message}`
            );
        }
        throw error;
    }
}

/**
 * Get list of available runtimes from Piston
 * @returns Array of available language runtimes
 */
export async function getPistonRuntimes(): Promise<PistonRuntime[]> {
    try {
        const response = await axios.get<PistonRuntime[]>(`${PISTON_API}/runtimes`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(
                `Failed to fetch runtimes: ${error.response?.data?.message || error.message}`
            );
        }
        throw error;
    }
}

/**
 * Get language configuration for Piston
 */
export const LANGUAGE_CONFIG = {
    python: {
        pistonName: 'python',
        version: '3.10.0',
        extension: '.py'
    },
    java: {
        pistonName: 'java',
        version: '15.0.2',
        extension: '.java',
        className: 'Main'
    },
    cpp: {
        pistonName: 'cpp',
        version: '10.2.0',
        extension: '.cpp'
    },
    c: {
        pistonName: 'c',
        version: '10.2.0',
        extension: '.c'
    },
    rust: {
        pistonName: 'rust',
        version: '1.68.2',
        extension: '.rs'
    },
    go: {
        pistonName: 'go',
        version: '1.16.2',
        extension: '.go'
    }
} as const;

/**
 * Helper to check if execution was successful
 */
export function isExecutionSuccessful(response: PistonExecuteResponse): boolean {
    // Check compilation (if applicable)
    if (response.compile && response.compile.code !== 0) {
        return false;
    }

    // Check runtime
    return response.run.code === 0;
}

/**
 * Get error message from execution response
 */
export function getExecutionError(response: PistonExecuteResponse): string {
    if (response.compile && response.compile.code !== 0) {
        return `Compilation Error:\n${response.compile.stderr || response.compile.output}`;
    }

    if (response.run.code !== 0) {
        return `Runtime Error:\n${response.run.stderr || response.run.output}`;
    }

    return 'Unknown error';
}
