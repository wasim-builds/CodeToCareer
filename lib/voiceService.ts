/**
 * Voice Service
 * Handles audio recording and text-to-speech using browser APIs
 */

export interface VoiceSettings {
    voice: SpeechSynthesisVoice | null;
    rate: number; // 0.5 to 2.0
    pitch: number; // 0 to 2
    volume: number; // 0 to 1
    autoPlay: boolean;
    autoListen: boolean;
}

export interface RecordingState {
    isRecording: boolean;
    isPaused: boolean;
    duration: number;
    audioLevel: number;
}

class VoiceService {
    private mediaRecorder: MediaRecorder | null = null;
    private mediaStream: MediaStream | null = null;
    private audioChunks: Blob[] = [];
    private recordingStartTime: number = 0;
    private audioContext: AudioContext | null = null;
    private analyser: AnalyserNode | null = null;
    private animationFrameId: number | null = null;

    // Callbacks
    private onRecordingStateChange?: (state: RecordingState) => void;
    private onAudioLevel?: (level: number) => void;

    /**
     * Initialize audio recording
     */
    async startRecording(
        onStateChange?: (state: RecordingState) => void,
        onAudioLevel?: (level: number) => void
    ): Promise<void> {
        try {
            // Request microphone permission
            this.mediaStream = await navigator.mediaDevices.getUserMedia({
                audio: {
                    echoCancellation: true,
                    noiseSuppression: true,
                    autoGainControl: true,
                }
            });

            // Set up audio context for visualization
            this.audioContext = new AudioContext();
            const source = this.audioContext.createMediaStreamSource(this.mediaStream);
            this.analyser = this.audioContext.createAnalyser();
            this.analyser.fftSize = 256;
            source.connect(this.analyser);

            // Set up MediaRecorder
            const mimeType = this.getSupportedMimeType();
            this.mediaRecorder = new MediaRecorder(this.mediaStream, {
                mimeType,
            });

            this.audioChunks = [];
            this.onRecordingStateChange = onStateChange;
            this.onAudioLevel = onAudioLevel;

            this.mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    this.audioChunks.push(event.data);
                }
            };

            this.mediaRecorder.onstart = () => {
                this.recordingStartTime = Date.now();
                this.startAudioLevelMonitoring();
                this.notifyStateChange();
            };

            this.mediaRecorder.onstop = () => {
                this.stopAudioLevelMonitoring();
                this.notifyStateChange();
            };

            this.mediaRecorder.start(100); // Collect data every 100ms
            console.log('[VoiceService] Recording started with', mimeType);

        } catch (error) {
            console.error('[VoiceService] Failed to start recording:', error);
            throw new Error('Failed to access microphone. Please grant permission.');
        }
    }

    /**
     * Stop recording and return audio blob
     */
    async stopRecording(): Promise<Blob> {
        return new Promise((resolve, reject) => {
            if (!this.mediaRecorder) {
                reject(new Error('No active recording'));
                return;
            }

            if (this.mediaRecorder.state === 'inactive') {
                reject(new Error('Recording is not active'));
                return;
            }

            // Set up the stop handler before stopping
            const handleStop = () => {
                const mimeType = this.mediaRecorder?.mimeType || 'audio/webm';
                const audioBlob = new Blob(this.audioChunks, { type: mimeType });

                console.log('[VoiceService] Recording stopped, chunks:', this.audioChunks.length, 'blob size:', audioBlob.size);

                // Cleanup
                this.cleanup();

                if (audioBlob.size < 100) {
                    reject(new Error('Recording too short or no audio captured. Please speak louder and longer.'));
                    return;
                }

                resolve(audioBlob);
            };

            // Override the onstop handler
            this.mediaRecorder.onstop = handleStop;

            // Request final data before stopping
            this.mediaRecorder.requestData();

            // Stop the recorder
            this.mediaRecorder.stop();
        });
    }

    /**
     * Cancel recording without returning audio
     */
    cancelRecording(): void {
        if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
            this.mediaRecorder.stop();
        }
        this.cleanup();
    }

    /**
     * Get supported MIME type for recording
     */
    private getSupportedMimeType(): string {
        const types = [
            'audio/webm;codecs=opus',
            'audio/webm',
            'audio/ogg;codecs=opus',
            'audio/mp4',
        ];

        for (const type of types) {
            if (MediaRecorder.isTypeSupported(type)) {
                return type;
            }
        }

        return 'audio/webm'; // Fallback
    }

    /**
     * Monitor audio levels for visualization
     */
    private startAudioLevelMonitoring(): void {
        if (!this.analyser) return;

        const bufferLength = this.analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const checkLevel = () => {
            if (!this.analyser) return;

            this.analyser.getByteFrequencyData(dataArray);

            // Calculate average volume
            const average = dataArray.reduce((a, b) => a + b) / bufferLength;
            const normalized = average / 255; // Normalize to 0-1

            if (this.onAudioLevel) {
                this.onAudioLevel(normalized);
            }

            this.animationFrameId = requestAnimationFrame(checkLevel);
        };

        checkLevel();
    }

    /**
     * Stop audio level monitoring
     */
    private stopAudioLevelMonitoring(): void {
        if (this.animationFrameId !== null) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
    }

    /**
     * Cleanup resources
     */
    private cleanup(): void {
        this.stopAudioLevelMonitoring();

        if (this.mediaStream) {
            this.mediaStream.getTracks().forEach(track => track.stop());
            this.mediaStream = null;
        }

        if (this.audioContext) {
            this.audioContext.close();
            this.audioContext = null;
        }

        this.mediaRecorder = null;
        this.analyser = null;
        this.audioChunks = [];
    }

    /**
     * Notify state change
     */
    private notifyStateChange(): void {
        if (!this.onRecordingStateChange) return;

        const state: RecordingState = {
            isRecording: this.mediaRecorder?.state === 'recording',
            isPaused: this.mediaRecorder?.state === 'paused',
            duration: this.recordingStartTime ? Date.now() - this.recordingStartTime : 0,
            audioLevel: 0,
        };

        this.onRecordingStateChange(state);
    }

    /**
     * Get current recording state
     */
    getRecordingState(): RecordingState {
        return {
            isRecording: this.mediaRecorder?.state === 'recording',
            isPaused: this.mediaRecorder?.state === 'paused',
            duration: this.recordingStartTime ? Date.now() - this.recordingStartTime : 0,
            audioLevel: 0,
        };
    }
}

// Text-to-Speech Service
class TextToSpeechService {
    private currentUtterance: SpeechSynthesisUtterance | null = null;
    private voices: SpeechSynthesisVoice[] = [];

    constructor() {
        // Load voices
        this.loadVoices();

        // Voices may load asynchronously
        if (speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = () => this.loadVoices();
        }
    }

    /**
     * Load available voices
     */
    private loadVoices(): void {
        this.voices = speechSynthesis.getVoices();
        console.log('[TTS] Loaded', this.voices.length, 'voices');
    }

    /**
     * Get available voices
     */
    getVoices(): SpeechSynthesisVoice[] {
        return this.voices;
    }

    /**
     * Get default voice (prefer English)
     */
    getDefaultVoice(): SpeechSynthesisVoice | null {
        const englishVoices = this.voices.filter(v => v.lang.startsWith('en'));
        return englishVoices[0] || this.voices[0] || null;
    }

    /**
     * Speak text with settings
     */
    speak(
        text: string,
        settings: Partial<VoiceSettings> = {},
        callbacks?: {
            onStart?: () => void;
            onEnd?: () => void;
            onError?: (error: Error) => void;
        }
    ): void {
        // Stop any ongoing speech
        this.stop();

        const utterance = new SpeechSynthesisUtterance(text);

        // Apply settings
        if (settings.voice) {
            utterance.voice = settings.voice;
        } else {
            utterance.voice = this.getDefaultVoice();
        }

        utterance.rate = settings.rate ?? 1.0;
        utterance.pitch = settings.pitch ?? 1.0;
        utterance.volume = settings.volume ?? 1.0;

        // Set up callbacks
        utterance.onstart = () => {
            console.log('[TTS] Started speaking');
            callbacks?.onStart?.();
        };

        utterance.onend = () => {
            console.log('[TTS] Finished speaking');
            this.currentUtterance = null;
            callbacks?.onEnd?.();
        };

        utterance.onerror = (event) => {
            console.error('[TTS] Error:', event.error);
            this.currentUtterance = null;
            callbacks?.onError?.(new Error(event.error));
        };

        this.currentUtterance = utterance;
        speechSynthesis.speak(utterance);
    }

    /**
     * Stop speaking
     */
    stop(): void {
        if (speechSynthesis.speaking) {
            speechSynthesis.cancel();
        }
        this.currentUtterance = null;
    }

    /**
     * Pause speaking
     */
    pause(): void {
        if (speechSynthesis.speaking && !speechSynthesis.paused) {
            speechSynthesis.pause();
        }
    }

    /**
     * Resume speaking
     */
    resume(): void {
        if (speechSynthesis.paused) {
            speechSynthesis.resume();
        }
    }

    /**
     * Check if currently speaking
     */
    isSpeaking(): boolean {
        return speechSynthesis.speaking;
    }
}

// Export singleton instances
export const voiceRecorder = new VoiceService();
export const textToSpeech = new TextToSpeechService();

// Export default settings
export const defaultVoiceSettings: VoiceSettings = {
    voice: null,
    rate: 1.0,
    pitch: 1.0,
    volume: 1.0,
    autoPlay: true,
    autoListen: false,
};
