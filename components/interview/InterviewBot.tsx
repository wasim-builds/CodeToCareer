'use client';

import { useState, useEffect, useRef } from 'react';
import { FiSend, FiRefreshCw, FiClock, FiCode, FiMessageSquare, FiMic, FiVolume2 } from 'react-icons/fi';
import VoiceRecorder from './VoiceRecorder';
import { textToSpeech, VoiceSettings, defaultVoiceSettings } from '@/lib/voiceService';

type InterviewMode = 'dsa' | 'hr' | 'system';

interface Message {
    from: 'user' | 'bot';
    text: string;
    timestamp: Date;
    isFollowUp?: boolean;
    evaluation?: {
        overallScore: number;
        grade: string;
        criteriaScores: Record<string, number>;
        strengths: string[];
        improvements: string[];
        detailedFeedback: string;
    };
}

interface SessionStats {
    questionsAsked: number;
    startTime: Date;
    mode: InterviewMode;
}

const MODES: Record<InterviewMode, { label: string; description: string; icon: string }> = {
    dsa: {
        label: 'DSA',
        description: 'Data Structures & Algorithms interview practice',
        icon: '🧮',
    },
    hr: {
        label: 'HR / Behavioral',
        description: 'Behavioral questions using STAR method',
        icon: '💼',
    },
    system: {
        label: 'System Design',
        description: 'Architecture and scalability discussions',
        icon: '🏗️',
    },
};

export default function InterviewBot() {
    const [mode, setMode] = useState<InterviewMode>('dsa');
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [sessionStats, setSessionStats] = useState<SessionStats>({
        questionsAsked: 0,
        startTime: new Date(),
        mode: 'dsa',
    });
    const [showCodeInput, setShowCodeInput] = useState(false);
    const [sessionId, setSessionId] = useState<string>('');
    const [currentDifficulty, setCurrentDifficulty] = useState<number>(2);
    const [difficultyLabel, setDifficultyLabel] = useState<string>('Intermediate');
    const [difficultyColor, setDifficultyColor] = useState<string>('#3b82f6');
    const [sessionScore, setSessionScore] = useState<number | undefined>(undefined);

    // Voice mode state
    const [voiceMode, setVoiceMode] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [voiceSettings, setVoiceSettings] = useState<VoiceSettings>(defaultVoiceSettings);

    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, loading]);

    // Load voice settings from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('voice_settings');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                setVoiceSettings({ ...defaultVoiceSettings, ...parsed, voice: null }); // Reset voice, will be loaded
            } catch (error) {
                console.error('Failed to load voice settings:', error);
            }
        }
    }, []);

    // Save voice settings to localStorage
    useEffect(() => {
        localStorage.setItem('voice_settings', JSON.stringify({
            rate: voiceSettings.rate,
            pitch: voiceSettings.pitch,
            volume: voiceSettings.volume,
            autoPlay: voiceSettings.autoPlay,
            autoListen: voiceSettings.autoListen,
        }));
    }, [voiceSettings]);

    // Initialize with welcome message
    useEffect(() => {
        if (messages.length === 0) {
            setMessages([
                {
                    from: 'bot',
                    text: `👋 Welcome to AI Interview Practice! I'm powered by advanced AI to give you realistic interview experience.\n\nChoose a mode above and I'll start asking you questions. I can:\n• Ask follow-up questions based on your answers\n• Provide feedback on your responses\n• Help you practice with code snippets\n• Adapt difficulty based on your performance\n\nReady to begin?`,
                    timestamp: new Date(),
                },
            ]);
        }
    }, [messages.length]);

    const sendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        const trimmed = input.trim();
        if (!trimmed || loading) return;

        const newMessages: Message[] = [
            ...messages,
            { from: 'user', text: trimmed, timestamp: new Date() },
        ];
        setMessages(newMessages);
        setInput('');
        setLoading(true);

        try {
            const res = await fetch('/api/interview-chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: trimmed,
                    mode,
                    conversationHistory: messages.slice(-6), // Last 3 exchanges for context
                    sessionStats,
                    sessionId,
                }),
            });

            if (!res.ok) {
                throw new Error('Failed to get response');
            }

            const data = await res.json();
            const updatedMessages: Message[] = [...newMessages];

            // Update session tracking
            if (data.sessionId && !sessionId) {
                setSessionId(data.sessionId);
            }
            if (data.currentDifficulty) {
                setCurrentDifficulty(data.currentDifficulty);
            }
            if (data.difficultyLabel) {
                setDifficultyLabel(data.difficultyLabel);
            }
            if (data.difficultyColor) {
                setDifficultyColor(data.difficultyColor);
            }
            if (data.sessionScore !== undefined) {
                setSessionScore(data.sessionScore);
            }

            // Add main reply with evaluation if present
            updatedMessages.push({
                from: 'bot',
                text: data.reply,
                timestamp: new Date(),
                evaluation: data.evaluation,
            });

            // Add follow-up if exists
            if (data.followUp) {
                updatedMessages.push({
                    from: 'bot',
                    text: data.followUp,
                    timestamp: new Date(),
                    isFollowUp: true,
                });
            }

            setMessages(updatedMessages);

            // Auto-play AI response in voice mode
            if (voiceMode && voiceSettings.autoPlay && data.reply) {
                speakText(data.reply);
            }

            // Update stats
            if (data.isNewQuestion) {
                setSessionStats((prev) => ({
                    ...prev,
                    questionsAsked: prev.questionsAsked + 1,
                }));
            }
        } catch (err) {
            console.error(err);
            setMessages([
                ...newMessages,
                {
                    from: 'bot',
                    text: '❌ Error contacting AI server. Please try again later.',
                    timestamp: new Date(),
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleModeChange = (newMode: InterviewMode) => {
        if (newMode === mode) return;
        setMode(newMode);
        setMessages([
            {
                from: 'bot',
                text: `${MODES[newMode].icon} Switched to **${MODES[newMode].label}** mode.\n\n${MODES[newMode].description}\n\nI'll now ask you ${MODES[newMode].label} interview questions. Ready?`,
                timestamp: new Date(),
            },
        ]);
        setSessionStats({
            questionsAsked: 0,
            startTime: new Date(),
            mode: newMode,
        });
    };

    const resetSession = () => {
        setMessages([
            {
                from: 'bot',
                text: `🔄 Session reset! Let's start fresh with ${MODES[mode].label} questions.`,
                timestamp: new Date(),
            },
        ]);
        setSessionStats({
            questionsAsked: 0,
            startTime: new Date(),
            mode,
        });
    };

    const getSessionDuration = () => {
        const duration = Math.floor((Date.now() - sessionStats.startTime.getTime()) / 1000 / 60);
        return duration;
    };

    // Voice mode functions
    const speakText = (text: string) => {
        setIsSpeaking(true);
        textToSpeech.speak(
            text,
            voiceSettings,
            {
                onStart: () => setIsSpeaking(true),
                onEnd: () => setIsSpeaking(false),
                onError: (error) => {
                    console.error('TTS error:', error);
                    setIsSpeaking(false);
                },
            }
        );
    };

    const stopSpeaking = () => {
        textToSpeech.stop();
        setIsSpeaking(false);
    };

    const handleVoiceTranscript = (transcript: string) => {
        console.log('[InterviewBot] Voice transcript:', transcript);
        setInput(transcript);
        // Auto-send if enabled
        if (voiceSettings.autoListen) {
            // Simulate form submission
            const fakeEvent = { preventDefault: () => { } } as React.FormEvent;
            sendMessage(fakeEvent);
        }
    };

    const toggleVoiceMode = () => {
        const newVoiceMode = !voiceMode;
        setVoiceMode(newVoiceMode);

        if (!newVoiceMode) {
            // Stop any ongoing speech when disabling voice mode
            stopSpeaking();
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2">
                        🤖 AI Interview Practice
                    </h1>
                    <p className="text-gray-400">
                        Practice with AI-powered realistic interview questions
                    </p>
                </div>

                {/* Mode Selection */}
                <div className="bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-700">
                    <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
                        <FiMessageSquare className="text-green-400" />
                        Select Interview Mode
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {(Object.entries(MODES) as [InterviewMode, typeof MODES[InterviewMode]][]).map(
                            ([key, cfg]) => (
                                <button
                                    key={key}
                                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${key === mode
                                        ? 'border-green-500 bg-green-500/10 shadow-lg shadow-green-500/20'
                                        : 'border-gray-700 bg-gray-700/30 hover:border-gray-600'
                                        }`}
                                    onClick={() => handleModeChange(key)}
                                >
                                    <div className="text-2xl mb-2">{cfg.icon}</div>
                                    <div className="font-bold text-white mb-1">{cfg.label}</div>
                                    <div className="text-sm text-gray-400">{cfg.description}</div>
                                </button>
                            )
                        )}
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="bg-gray-800 rounded-xl p-4 mb-6 border border-gray-700">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <FiMessageSquare className="text-blue-400" />
                                <span className="text-gray-300 text-sm">
                                    Questions: <span className="font-bold text-white">{sessionStats.questionsAsked}</span>
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FiClock className="text-purple-400" />
                                <span className="text-gray-300 text-sm">
                                    Duration: <span className="font-bold text-white">{getSessionDuration()}m</span>
                                </span>
                            </div>
                            {/* Difficulty Badge */}
                            <div className="flex items-center gap-2">
                                <span className="text-gray-300 text-sm">Difficulty:</span>
                                <span
                                    className="px-3 py-1 rounded-full text-xs font-bold text-white"
                                    style={{ backgroundColor: difficultyColor }}
                                >
                                    {difficultyLabel} ({currentDifficulty}/5)
                                </span>
                            </div>
                            {/* Session Score */}
                            {sessionScore !== undefined && sessionScore > 0 && (
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-300 text-sm">Avg Score:</span>
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${sessionScore >= 85 ? 'bg-green-500 text-white' :
                                        sessionScore >= 70 ? 'bg-blue-500 text-white' :
                                            sessionScore >= 50 ? 'bg-yellow-500 text-white' :
                                                'bg-red-500 text-white'
                                        }`}>
                                        {sessionScore}%
                                    </span>
                                </div>
                            )}
                        </div>
                        <button
                            onClick={resetSession}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm text-white"
                        >
                            <FiRefreshCw className="w-4 h-4" />
                            Reset Session
                        </button>
                    </div>
                </div>

                {/* Chat Container */}
                <div className="bg-gray-800 rounded-2xl border border-gray-700 shadow-2xl overflow-hidden">
                    {/* Messages */}
                    <div className="h-[500px] overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-gray-800 to-gray-900">
                        {messages.map((m, i) => (
                            <div
                                key={i}
                                className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] rounded-2xl px-5 py-3 ${m.from === 'user'
                                        ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg shadow-green-500/20'
                                        : m.isFollowUp
                                            ? 'bg-blue-500/10 border border-blue-500/30 text-blue-200'
                                            : 'bg-gray-700 text-gray-100 border border-gray-600'
                                        }`}
                                >
                                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.text}</p>

                                    {/* Evaluation Display */}
                                    {m.evaluation && (
                                        <div className="mt-4 pt-4 border-t border-gray-600">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="text-xs font-bold text-gray-300">📊 Answer Evaluation</span>
                                                <span className={`px-2 py-1 rounded text-xs font-bold ${m.evaluation.grade === 'Excellent' ? 'bg-green-500 text-white' :
                                                    m.evaluation.grade === 'Good' ? 'bg-blue-500 text-white' :
                                                        m.evaluation.grade === 'Fair' ? 'bg-yellow-500 text-white' :
                                                            'bg-red-500 text-white'
                                                    }`}>
                                                    {m.evaluation.overallScore}% - {m.evaluation.grade}
                                                </span>
                                            </div>

                                            {m.evaluation.strengths.length > 0 && (
                                                <div className="mb-2">
                                                    <p className="text-xs font-semibold text-green-400 mb-1">✓ Strengths:</p>
                                                    <ul className="text-xs text-gray-300 space-y-1">
                                                        {m.evaluation.strengths.map((s, idx) => (
                                                            <li key={idx}>• {s}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {m.evaluation.improvements.length > 0 && (
                                                <div>
                                                    <p className="text-xs font-semibold text-yellow-400 mb-1">💡 Improvements:</p>
                                                    <ul className="text-xs text-gray-300 space-y-1">
                                                        {m.evaluation.improvements.map((imp, idx) => (
                                                            <li key={idx}>• {imp}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    <p className="text-xs opacity-60 mt-2">
                                        {m.timestamp.toLocaleTimeString([], {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })}
                                    </p>
                                </div>
                            </div>
                        ))}
                        {loading && (
                            <div className="flex justify-start">
                                <div className="bg-gray-700 border border-gray-600 rounded-2xl px-5 py-3">
                                    <div className="flex gap-2">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                                        <div
                                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                            style={{ animationDelay: '0.1s' }}
                                        />
                                        <div
                                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                            style={{ animationDelay: '0.2s' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={chatEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-gray-900 border-t border-gray-700">
                        {/* Voice/Text Mode Toggle */}
                        <div className="flex items-center justify-between mb-3">
                            <button
                                type="button"
                                onClick={toggleVoiceMode}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${voiceMode
                                        ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                    }`}
                            >
                                {voiceMode ? (
                                    <>
                                        <FiMic className="w-4 h-4" />
                                        <span className="text-sm font-medium">Voice Mode</span>
                                    </>
                                ) : (
                                    <>
                                        <FiMessageSquare className="w-4 h-4" />
                                        <span className="text-sm font-medium">Text Mode</span>
                                    </>
                                )}
                            </button>

                            {/* Speaking indicator */}
                            {isSpeaking && (
                                <div className="flex items-center gap-2 px-3 py-2 bg-purple-500/10 rounded-lg border border-purple-500/30">
                                    <FiVolume2 className="w-4 h-4 text-purple-400 animate-pulse" />
                                    <span className="text-sm text-purple-300">Speaking...</span>
                                    <button
                                        onClick={stopSpeaking}
                                        className="ml-2 px-2 py-1 bg-purple-500/20 hover:bg-purple-500/30 rounded text-xs text-purple-200 transition-colors"
                                    >
                                        Stop
                                    </button>
                                </div>
                            )}
                        </div>

                        {voiceMode ? (
                            /* Voice Input Mode */
                            <div className="flex items-center gap-3">
                                <VoiceRecorder
                                    onTranscript={handleVoiceTranscript}
                                    disabled={loading || isSpeaking}
                                    autoSend={voiceSettings.autoListen}
                                />
                                {input && (
                                    <div className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-gray-300 text-sm">
                                        {input}
                                    </div>
                                )}
                            </div>
                        ) : (
                            /* Text Input Mode */
                            <form onSubmit={sendMessage} className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => setShowCodeInput(!showCodeInput)}
                                    className="px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl transition-colors flex items-center gap-2 text-white"
                                    title="Toggle code input"
                                >
                                    <FiCode className="w-5 h-5" />
                                </button>
                                <input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder={
                                        showCodeInput
                                            ? 'Paste your code here...'
                                            : 'Type your answer or ask for a new question...'
                                    }
                                    className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                                    disabled={loading}
                                />
                                <button
                                    type="submit"
                                    disabled={loading || !input.trim()}
                                    className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 disabled:from-gray-700 disabled:to-gray-700 disabled:cursor-not-allowed rounded-xl transition-all duration-300 flex items-center gap-2 text-white font-medium shadow-lg shadow-green-500/20 hover:shadow-green-500/40"
                                >
                                    <FiSend className="w-5 h-5" />
                                    Send
                                </button>
                            </form>
                        )}
                        <p className="text-xs text-gray-500 mt-3 text-center">
                            💡 Tip: Be detailed in your answers. The AI will provide better feedback!
                        </p>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { text: 'Ask me a question', emoji: '❓' },
                        { text: 'Give me a hint', emoji: '💡' },
                        { text: 'Next question', emoji: '⏭️' },
                        { text: 'Explain this concept', emoji: '📚' },
                    ].map((action, i) => (
                        <button
                            key={i}
                            onClick={() => setInput(action.text)}
                            className="p-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl transition-colors text-sm text-gray-300 hover:text-white"
                        >
                            <span className="mr-2">{action.emoji}</span>
                            {action.text}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
