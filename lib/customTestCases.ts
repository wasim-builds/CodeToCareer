// Utility functions for managing custom test cases in localStorage

export interface CustomTestCase {
    id: string;
    input: Record<string, unknown>;
    expected: unknown;
    description?: string;
    createdAt: string;
}

const STORAGE_KEY_PREFIX = 'custom-test-cases-';

/**
 * Get all custom test cases for a specific problem
 */
export function getCustomTestCases(problemId: string): CustomTestCase[] {
    try {
        const key = STORAGE_KEY_PREFIX + problemId;
        const stored = localStorage.getItem(key);
        if (!stored) return [];
        return JSON.parse(stored);
    } catch (error) {
        console.error('Error loading custom test cases:', error);
        return [];
    }
}

/**
 * Save a new custom test case
 */
export function saveCustomTestCase(
    problemId: string,
    testCase: Omit<CustomTestCase, 'id' | 'createdAt'>
): CustomTestCase {
    const testCases = getCustomTestCases(problemId);
    const newTestCase: CustomTestCase = {
        ...testCase,
        id: `custom-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        createdAt: new Date().toISOString(),
    };
    testCases.push(newTestCase);
    saveAllTestCases(problemId, testCases);
    return newTestCase;
}

/**
 * Update an existing custom test case
 */
export function updateCustomTestCase(problemId: string, testCase: CustomTestCase): void {
    const testCases = getCustomTestCases(problemId);
    const index = testCases.findIndex(tc => tc.id === testCase.id);
    if (index !== -1) {
        testCases[index] = testCase;
        saveAllTestCases(problemId, testCases);
    }
}

/**
 * Delete a custom test case
 */
export function deleteCustomTestCase(problemId: string, testCaseId: string): void {
    const testCases = getCustomTestCases(problemId);
    const filtered = testCases.filter(tc => tc.id !== testCaseId);
    saveAllTestCases(problemId, filtered);
}

/**
 * Export test cases as JSON string
 */
export function exportTestCases(problemId: string): string {
    const testCases = getCustomTestCases(problemId);
    return JSON.stringify(testCases, null, 2);
}

/**
 * Import test cases from JSON string
 */
export function importTestCases(problemId: string, json: string): void {
    try {
        const testCases = JSON.parse(json) as CustomTestCase[];
        if (!Array.isArray(testCases)) {
            throw new Error('Invalid format: expected array of test cases');
        }
        saveAllTestCases(problemId, testCases);
    } catch (error) {
        throw new Error('Failed to import test cases: ' + (error instanceof Error ? error.message : 'Unknown error'));
    }
}

/**
 * Clear all custom test cases for a problem
 */
export function clearCustomTestCases(problemId: string): void {
    const key = STORAGE_KEY_PREFIX + problemId;
    localStorage.removeItem(key);
}

/**
 * Helper function to save all test cases
 */
function saveAllTestCases(problemId: string, testCases: CustomTestCase[]): void {
    try {
        const key = STORAGE_KEY_PREFIX + problemId;
        localStorage.setItem(key, JSON.stringify(testCases));
    } catch (error) {
        console.error('Error saving custom test cases:', error);
        throw new Error('Failed to save test cases');
    }
}
