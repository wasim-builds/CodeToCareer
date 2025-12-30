'use client';

import { useState, useEffect, useRef } from 'react';
import { FiVideo, FiMic, FiCheck, FiX, FiAlertCircle } from 'react-icons/fi';

interface VideoSetupProps {
    onSetupComplete: (stream: MediaStream) => void;
}

export default function VideoSetup({ onSetupComplete }: VideoSetupProps) {
    const [stream, setStream] = useState<MediaStream | null>(null);
    const [cameraStatus, setCameraStatus] = useState<'checking' | 'granted' | 'denied'>('checking');
    const [micStatus, setMicStatus] = useState<'checking' | 'granted' | 'denied'>('checking');
    const [error, setError] = useState<string | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        requestPermissions();
        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    const requestPermissions = async () => {
        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({
                video: {
                    width: { ideal: 1280 },
                    height: { ideal: 720 },
                    facingMode: 'user'
                },
                audio: {
                    echoCancellation: true,
                    noiseSuppression: true,
                    sampleRate: 44100
                }
            });

            setStream(mediaStream);
            setCameraStatus('granted');
            setMicStatus('granted');

            // Show preview
            if (videoRef.current) {
                videoRef.current.srcObject = mediaStream;
            }
        } catch (err: any) {
            console.error('Permission error:', err);

            if (err.name === 'NotAllowedError') {
                setError('Camera and microphone access denied. Please allow permissions to continue.');
                setCameraStatus('denied');
                setMicStatus('denied');
            } else if (err.name === 'NotFoundError') {
                setError('No camera or microphone found. Please connect a device.');
            } else {
                setError('Failed to access camera/microphone. Please try again.');
            }
        }
    };

    const handleStartInterview = () => {
        if (stream) {
            onSetupComplete(stream);
        }
    };

    const handleRetry = () => {
        setError(null);
        setCameraStatus('checking');
        setMicStatus('checking');
        requestPermissions();
    };

    return (
        <div className="space-y-6">
            {/* Video Preview */}
            <div className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video">
                {stream ? (
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <FiVideo className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                            <p className="text-gray-400">Camera preview will appear here</p>
                        </div>
                    </div>
                )}

                {/* Status Overlay */}
                {cameraStatus === 'checking' && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
                            <p className="text-white">Requesting permissions...</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Permission Status */}
            <div className="grid grid-cols-2 gap-4">
                {/* Camera Status */}
                <div className={`p-4 rounded-lg border ${cameraStatus === 'granted'
                        ? 'bg-green-900/20 border-green-800'
                        : cameraStatus === 'denied'
                            ? 'bg-red-900/20 border-red-800'
                            : 'bg-gray-800 border-gray-700'
                    }`}>
                    <div className="flex items-center gap-3">
                        {cameraStatus === 'granted' ? (
                            <FiCheck className="w-5 h-5 text-green-400" />
                        ) : cameraStatus === 'denied' ? (
                            <FiX className="w-5 h-5 text-red-400" />
                        ) : (
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-400"></div>
                        )}
                        <div>
                            <p className="font-medium text-white">Camera</p>
                            <p className="text-sm text-gray-400">
                                {cameraStatus === 'granted' ? 'Working' : cameraStatus === 'denied' ? 'Denied' : 'Checking...'}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Microphone Status */}
                <div className={`p-4 rounded-lg border ${micStatus === 'granted'
                        ? 'bg-green-900/20 border-green-800'
                        : micStatus === 'denied'
                            ? 'bg-red-900/20 border-red-800'
                            : 'bg-gray-800 border-gray-700'
                    }`}>
                    <div className="flex items-center gap-3">
                        {micStatus === 'granted' ? (
                            <FiCheck className="w-5 h-5 text-green-400" />
                        ) : micStatus === 'denied' ? (
                            <FiX className="w-5 h-5 text-red-400" />
                        ) : (
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-400"></div>
                        )}
                        <div>
                            <p className="font-medium text-white">Microphone</p>
                            <p className="text-sm text-gray-400">
                                {micStatus === 'granted' ? 'Working' : micStatus === 'denied' ? 'Denied' : 'Checking...'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Error Message */}
            {error && (
                <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                        <FiAlertCircle className="w-5 h-5 text-red-400 mt-0.5" />
                        <div className="flex-1">
                            <p className="text-red-400 font-medium mb-1">Setup Error</p>
                            <p className="text-red-300 text-sm">{error}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Tips */}
            <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4">
                <h4 className="font-semibold text-blue-300 mb-2">💡 Tips for Best Experience</h4>
                <ul className="space-y-1 text-sm text-blue-200">
                    <li>• Ensure good lighting on your face</li>
                    <li>• Use a quiet environment</li>
                    <li>• Look at the camera when speaking</li>
                    <li>• Sit in a comfortable position</li>
                </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
                {cameraStatus === 'granted' && micStatus === 'granted' ? (
                    <button
                        onClick={handleStartInterview}
                        className="flex-1 px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                        <FiVideo className="w-5 h-5" />
                        Start Interview
                    </button>
                ) : (
                    <button
                        onClick={handleRetry}
                        className="flex-1 px-6 py-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
                    >
                        Retry Setup
                    </button>
                )}
            </div>
        </div>
    );
}
