'use client';

import { useState, useEffect, useRef } from 'react';
import { FiMic, FiMicOff, FiX, FiCheck } from 'react-icons/fi';
import { voiceRecorder } from '@/lib/voiceService';
import { transcribeWithRetry } from '@/lib/whisperService';
import { formatDurationMs } from '@/lib/audioUtils';

interface VoiceRecorderProps {
    onTranscript: (text: string) => void;
    onError?: (error: Error) => void;
    disabled?: boolean;
    autoSend?: boolean;
}

export default function VoiceRecorder({
    onTranscript,
    onError,
    disabled = false,
    autoSend = true,
}: VoiceRecorderProps) {
    const [isRecording, setIsRecording] = useState(false);
    const [isTranscribing, setIsTranscribing] = useState(false);
    const [duration, setDuration] = useState(0);
    const [audioLevel, setAudioLevel] = useState(0);
    const [error, setError] = useState<string | null>(null);
    const durationIntervalRef = useRef<NodeJS.Timeout | null>(null);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (durationIntervalRef.current) {
                clearInterval(durationIntervalRef.current);
            }
            if (isRecording) {
                voiceRecorder.cancelRecording();
            }
        };
    }, [isRecording]);

    const startRecording = async () => {
        try {
            setError(null);
            setDuration(0);
            setIsRecording(true);

            await voiceRecorder.startRecording(
                (state) => {
                    setDuration(state.duration);
                },
                (level) => {
                    setAudioLevel(level);
                }
            );

            // Start duration timer
            durationIntervalRef.current = setInterval(() => {
                setDuration(prev => prev + 100);
            }, 100);

        } catch (err) {
            const error = err as Error;
            console.error('[VoiceRecorder] Failed to start recording:', error);
            setError(error.message);
            setIsRecording(false);
            onError?.(error);
        }
    };

    const stopRecording = async () => {
        try {
            if (durationIntervalRef.current) {
                clearInterval(durationIntervalRef.current);
                durationIntervalRef.current = null;
            }

            setIsRecording(false);
            setIsTranscribing(true);

            const audioBlob = await voiceRecorder.stopRecording();
            console.log('[VoiceRecorder] Recording stopped, blob size:', audioBlob.size);

            // Transcribe audio
            const result = await transcribeWithRetry(audioBlob);
            console.log('[VoiceRecorder] Transcription:', result.transcript);

            setIsTranscribing(false);
            setDuration(0);
            setAudioLevel(0);

            if (result.transcript.trim()) {
                onTranscript(result.transcript);
            } else {
                setError('No speech detected. Please try again.');
            }

        } catch (err) {
            const error = err as Error;
            console.error('[VoiceRecorder] Failed to transcribe:', error);
            setError(error.message);
            setIsTranscribing(false);
            setDuration(0);
            setAudioLevel(0);
            onError?.(error);
        }
    };

    const cancelRecording = () => {
        if (durationIntervalRef.current) {
            clearInterval(durationIntervalRef.current);
            durationIntervalRef.current = null;
        }

        voiceRecorder.cancelRecording();
        setIsRecording(false);
        setDuration(0);
        setAudioLevel(0);
        setError(null);
    };

    const toggleRecording = () => {
        if (isRecording) {
            stopRecording();
        } else {
            startRecording();
        }
    };

    return (
        <div className="flex items-center gap-2">
            {/* Recording Button */}
            <button
                onClick={toggleRecording}
                disabled={disabled || isTranscribing}
                className={`relative p-3 rounded-xl transition-all duration-300 ${isRecording
                        ? 'bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/50 animate-pulse'
                        : 'bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/20'
                    } ${disabled || isTranscribing
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:scale-105'
                    }`}
                title={isRecording ? 'Stop recording' : 'Start recording'}
            >
                {isRecording ? (
                    <FiMicOff className="w-5 h-5 text-white" />
                ) : (
                    <FiMic className="w-5 h-5 text-white" />
                )}

                {/* Recording indicator */}
                {isRecording && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping" />
                )}
            </button>

            {/* Status Display */}
            {isRecording && (
                <div className="flex items-center gap-3 px-4 py-2 bg-gray-800 rounded-xl border border-gray-700">
                    {/* Waveform visualization */}
                    <div className="flex items-center gap-1 h-6">
                        {[...Array(8)].map((_, i) => (
                            <div
                                key={i}
                                className="w-1 bg-red-500 rounded-full transition-all duration-100"
                                style={{
                                    height: `${Math.max(4, audioLevel * 24 * (1 + Math.sin(Date.now() / 100 + i)))}px`,
                                }}
                            />
                        ))}
                    </div>

                    {/* Duration */}
                    <span className="text-sm font-mono text-white">
                        {formatDurationMs(duration)}
                    </span>

                    {/* Cancel button */}
                    <button
                        onClick={cancelRecording}
                        className="p-1 hover:bg-gray-700 rounded transition-colors"
                        title="Cancel recording"
                    >
                        <FiX className="w-4 h-4 text-gray-400" />
                    </button>
                </div>
            )}

            {/* Transcribing indicator */}
            {isTranscribing && (
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-xl border border-blue-500/30">
                    <div className="flex gap-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                    <span className="text-sm text-blue-300">Transcribing...</span>
                </div>
            )}

            {/* Error display */}
            {error && !isRecording && !isTranscribing && (
                <div className="flex items-center gap-2 px-3 py-2 bg-red-500/10 rounded-xl border border-red-500/30">
                    <span className="text-xs text-red-300">{error}</span>
                    <button
                        onClick={() => setError(null)}
                        className="p-1 hover:bg-red-500/20 rounded transition-colors"
                    >
                        <FiX className="w-3 h-3 text-red-400" />
                    </button>
                </div>
            )}
        </div>
    );
}
