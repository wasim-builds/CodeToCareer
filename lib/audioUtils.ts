/**
 * Audio Utilities
 * Helper functions for audio processing and conversion
 */

/**
 * Convert audio blob to different format
 */
export async function convertAudioFormat(
    blob: Blob,
    targetMimeType: string
): Promise<Blob> {
    // For now, return as-is since browser recording already provides webm
    // In future, could use FFmpeg.wasm for conversion
    return blob;
}

/**
 * Get audio duration from blob
 */
export async function getAudioDuration(blob: Blob): Promise<number> {
    return new Promise((resolve, reject) => {
        const audio = new Audio();
        const url = URL.createObjectURL(blob);

        audio.onloadedmetadata = () => {
            URL.revokeObjectURL(url);
            resolve(audio.duration);
        };

        audio.onerror = () => {
            URL.revokeObjectURL(url);
            reject(new Error('Failed to load audio'));
        };

        audio.src = url;
    });
}

/**
 * Validate audio file size
 */
export function validateAudioSize(blob: Blob, maxSizeMB: number = 25): boolean {
    const sizeMB = blob.size / (1024 * 1024);
    return sizeMB <= maxSizeMB;
}

/**
 * Format duration in seconds to MM:SS
 */
export function formatDuration(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Format duration in milliseconds to MM:SS
 */
export function formatDurationMs(ms: number): string {
    return formatDuration(ms / 1000);
}

/**
 * Create audio URL from blob
 */
export function createAudioURL(blob: Blob): string {
    return URL.createObjectURL(blob);
}

/**
 * Revoke audio URL
 */
export function revokeAudioURL(url: string): void {
    URL.revokeObjectURL(url);
}

/**
 * Download audio blob as file
 */
export function downloadAudio(blob: Blob, filename: string = 'recording.webm'): void {
    const url = createAudioURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    revokeAudioURL(url);
}

/**
 * Check if browser supports audio recording
 */
export function isAudioRecordingSupported(): boolean {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

/**
 * Check if browser supports text-to-speech
 */
export function isTextToSpeechSupported(): boolean {
    return 'speechSynthesis' in window;
}

/**
 * Get supported audio MIME types for recording
 */
export function getSupportedAudioTypes(): string[] {
    const types = [
        'audio/webm;codecs=opus',
        'audio/webm',
        'audio/ogg;codecs=opus',
        'audio/mp4',
        'audio/wav',
    ];

    return types.filter(type => {
        try {
            return MediaRecorder.isTypeSupported(type);
        } catch {
            return false;
        }
    });
}

/**
 * Compress audio blob (basic compression by reducing quality)
 */
export async function compressAudio(blob: Blob): Promise<Blob> {
    // For now, return as-is
    // Future: Implement actual compression using Web Audio API
    return blob;
}

/**
 * Convert blob to base64
 */
export async function blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64 = reader.result as string;
            resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

/**
 * Convert base64 to blob
 */
export function base64ToBlob(base64: string, mimeType: string = 'audio/webm'): Blob {
    const byteString = atob(base64.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeType });
}
