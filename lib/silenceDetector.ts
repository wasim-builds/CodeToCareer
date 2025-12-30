/**
 * Silence Detector Service
 * Monitors audio levels and triggers callbacks when silence is detected
 */

export interface SilenceDetectorConfig {
    silenceThreshold: number; // 0-1, audio level below this is considered silence
    silenceDuration: number; // milliseconds of silence before triggering
    checkInterval: number; // how often to check audio levels (ms)
}

export interface SilenceDetectorCallbacks {
    onSilenceStart?: () => void;
    onSilenceEnd?: () => void;
    onSilenceTimeout?: () => void;
    onCountdown?: (remainingMs: number) => void;
}

const DEFAULT_CONFIG: SilenceDetectorConfig = {
    silenceThreshold: 0.02, // Very low audio level
    silenceDuration: 10000, // 10 seconds
    checkInterval: 100, // Check every 100ms
};

export class SilenceDetector {
    private config: SilenceDetectorConfig;
    private callbacks: SilenceDetectorCallbacks;
    private isMonitoring: boolean = false;
    private isSilent: boolean = false;
    private silenceStartTime: number | null = null;
    private checkIntervalId: NodeJS.Timeout | null = null;
    private countdownIntervalId: NodeJS.Timeout | null = null;
    private currentAudioLevel: number = 0;

    constructor(
        config: Partial<SilenceDetectorConfig> = {},
        callbacks: SilenceDetectorCallbacks = {}
    ) {
        this.config = { ...DEFAULT_CONFIG, ...config };
        this.callbacks = callbacks;
    }

    /**
     * Start monitoring for silence
     */
    start(): void {
        if (this.isMonitoring) {
            console.warn('[SilenceDetector] Already monitoring');
            return;
        }

        this.isMonitoring = true;
        this.isSilent = false;
        this.silenceStartTime = null;

        console.log('[SilenceDetector] Started monitoring', this.config);
    }

    /**
     * Stop monitoring
     */
    stop(): void {
        this.isMonitoring = false;
        this.isSilent = false;
        this.silenceStartTime = null;

        if (this.checkIntervalId) {
            clearInterval(this.checkIntervalId);
            this.checkIntervalId = null;
        }

        if (this.countdownIntervalId) {
            clearInterval(this.countdownIntervalId);
            this.countdownIntervalId = null;
        }

        console.log('[SilenceDetector] Stopped monitoring');
    }

    /**
     * Update audio level (call this from your audio analyzer)
     */
    updateAudioLevel(level: number): void {
        if (!this.isMonitoring) return;

        this.currentAudioLevel = level;
        const isSilentNow = level < this.config.silenceThreshold;

        // Silence started
        if (isSilentNow && !this.isSilent) {
            this.isSilent = true;
            this.silenceStartTime = Date.now();
            this.callbacks.onSilenceStart?.();
            this.startCountdown();
            console.log('[SilenceDetector] Silence started');
        }
        // Silence ended
        else if (!isSilentNow && this.isSilent) {
            this.isSilent = false;
            this.silenceStartTime = null;
            this.stopCountdown();
            this.callbacks.onSilenceEnd?.();
            console.log('[SilenceDetector] Silence ended');
        }
        // Check if silence timeout reached
        else if (isSilentNow && this.isSilent && this.silenceStartTime) {
            const silenceDuration = Date.now() - this.silenceStartTime;
            if (silenceDuration >= this.config.silenceDuration) {
                console.log('[SilenceDetector] Silence timeout reached');
                this.handleSilenceTimeout();
            }
        }
    }

    /**
     * Start countdown timer
     */
    private startCountdown(): void {
        if (this.countdownIntervalId) {
            clearInterval(this.countdownIntervalId);
        }

        this.countdownIntervalId = setInterval(() => {
            if (!this.silenceStartTime) return;

            const elapsed = Date.now() - this.silenceStartTime;
            const remaining = Math.max(0, this.config.silenceDuration - elapsed);

            this.callbacks.onCountdown?.(remaining);

            if (remaining === 0) {
                this.stopCountdown();
            }
        }, 100); // Update every 100ms for smooth countdown
    }

    /**
     * Stop countdown timer
     */
    private stopCountdown(): void {
        if (this.countdownIntervalId) {
            clearInterval(this.countdownIntervalId);
            this.countdownIntervalId = null;
        }
    }

    /**
     * Handle silence timeout
     */
    private handleSilenceTimeout(): void {
        this.stopCountdown();
        this.callbacks.onSilenceTimeout?.();
        // Reset state but keep monitoring
        this.isSilent = false;
        this.silenceStartTime = null;
    }

    /**
     * Reset the silence timer
     */
    reset(): void {
        this.isSilent = false;
        this.silenceStartTime = null;
        this.stopCountdown();
    }

    /**
     * Update configuration
     */
    updateConfig(config: Partial<SilenceDetectorConfig>): void {
        this.config = { ...this.config, ...config };
        console.log('[SilenceDetector] Config updated', this.config);
    }

    /**
     * Get current state
     */
    getState(): {
        isMonitoring: boolean;
        isSilent: boolean;
        currentAudioLevel: number;
        silenceDuration: number;
    } {
        const silenceDuration = this.silenceStartTime
            ? Date.now() - this.silenceStartTime
            : 0;

        return {
            isMonitoring: this.isMonitoring,
            isSilent: this.isSilent,
            currentAudioLevel: this.currentAudioLevel,
            silenceDuration,
        };
    }
}

// Export default config for reference
export { DEFAULT_CONFIG };
