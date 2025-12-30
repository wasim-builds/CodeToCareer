/**
 * Interview Timer - Handles auto-skip logic
 * Skips question after 10 seconds of silence
 */

export class InterviewTimer {
    private timeout: NodeJS.Timeout | null = null;
    private interval: NodeJS.Timeout | null = null;
    private silenceDuration = 10000; // 10 seconds
    private remainingTime = 10;
    private onSkipCallback: (() => void) | null = null;
    private onTickCallback: ((seconds: number) => void) | null = null;

    /**
     * Start the countdown timer
     */
    startTimer(onSkip: () => void, onTick?: (seconds: number) => void) {
        this.onSkipCallback = onSkip;
        this.onTickCallback = onTick || null;
        this.remainingTime = 10;

        // Update UI every second
        this.interval = setInterval(() => {
            this.remainingTime--;
            if (this.onTickCallback) {
                this.onTickCallback(this.remainingTime);
            }
        }, 1000);

        // Auto-skip after 10 seconds
        this.timeout = setTimeout(() => {
            this.clearTimers();
            if (this.onSkipCallback) {
                this.onSkipCallback();
            }
        }, this.silenceDuration);
    }

    /**
     * Reset timer when user starts speaking
     */
    resetTimer() {
        this.clearTimers();
        if (this.onSkipCallback && this.onTickCallback) {
            this.startTimer(this.onSkipCallback, this.onTickCallback);
        }
    }

    /**
     * Stop all timers
     */
    stopTimer() {
        this.clearTimers();
    }

    /**
     * Get remaining time
     */
    getRemainingTime(): number {
        return this.remainingTime;
    }

    private clearTimers() {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
}
