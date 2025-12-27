'use client';

import { useState, useEffect, useRef } from 'react';
import { FiSend, FiRefreshCw, FiClock, FiCode, FiMessageSquare } from 'react-icons/fi';

type InterviewMode = 'dsa' | 'hr' | 'system';

interface Message {
    from: 'user' | 'bot';
    text: string;
    timestamp: Date;
    isFollowUp?: boolean;
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
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, loading]);

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
                }),
            });

            if (!res.ok) {
                throw new Error('Failed to get response');
            }

            const data = await res.json();
            const updatedMessages: Message[] = [...newMessages];

            // Add main reply
            updatedMessages.push({
                from: 'bot',
                text: data.reply,
                timestamp: new Date(),
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
                <div className="bg-gray-800 rounded-xl p-4 mb-6 border border-gray-700 flex items-center justify-between">
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
                    </div>
                    <button
                        onClick={resetSession}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm text-white"
                    >
                        <FiRefreshCw className="w-4 h-4" />
                        Reset Session
                    </button>
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
