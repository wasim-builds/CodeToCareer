/**
 * Whisper Service
 * Groq Whisper API integration for speech-to-text transcription
 */

export interface TranscriptionResult {
    transcript: string;
    duration?: number;
    language?: string;
}

export interface TranscriptionOptions {
    language?: string;
    prompt?: string;
}

/**
 * Transcribe audio using Groq Whisper API
 */
export async function transcribeAudio(
    audioBlob: Blob,
    options: TranscriptionOptions = {}
): Promise<TranscriptionResult> {
    try {
        console.log('[WhisperService] Starting transcription, blob size:', audioBlob.size);

        // Validate file size (Groq limit is 25MB)
        const sizeMB = audioBlob.size / (1024 * 1024);
        if (sizeMB > 25) {
            throw new Error(`Audio file too large (${sizeMB.toFixed(2)}MB). Maximum is 25MB.`);
        }

        // Create form data
        const formData = new FormData();
        formData.append('file', audioBlob, 'recording.webm');

        if (options.language) {
            formData.append('language', options.language);
        }

        if (options.prompt) {
            formData.append('prompt', options.prompt);
        }

        // Send to API
        const response = await fetch('/api/transcribe', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            const error = await response.json().catch(() => ({ error: 'Unknown error' }));
            throw new Error(error.error || `Transcription failed: ${response.statusText}`);
        }

        const result = await response.json();
        console.log('[WhisperService] Transcription successful:', result.transcript.substring(0, 50) + '...');

        return result;

    } catch (error) {
        console.error('[WhisperService] Transcription error:', error);
        throw error;
    }
}

/**
 * Transcribe with retry logic
 */
export async function transcribeWithRetry(
    audioBlob: Blob,
    options: TranscriptionOptions = {},
    maxRetries: number = 2
): Promise<TranscriptionResult> {
    let lastError: Error | null = null;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
            if (attempt > 0) {
                console.log(`[WhisperService] Retry attempt ${attempt}/${maxRetries}`);
                // Wait before retry (exponential backoff)
                await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, attempt - 1)));
            }

            return await transcribeAudio(audioBlob, options);

        } catch (error) {
            lastError = error as Error;

            // Don't retry on certain errors
            if (error instanceof Error) {
                const message = error.message.toLowerCase();
                if (message.includes('too large') ||
                    message.includes('invalid') ||
                    message.includes('not configured')) {
                    throw error;
                }
            }
        }
    }

    throw lastError || new Error('Transcription failed after retries');
}

/**
 * Check if Whisper API is available
 */
export async function isWhisperAvailable(): Promise<boolean> {
    try {
        const response = await fetch('/api/transcribe', {
            method: 'OPTIONS',
        });
        return response.ok;
    } catch {
        return false;
    }
}
