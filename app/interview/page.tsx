'use client';

import { useState } from 'react';
import { FiUpload, FiMessageSquare, FiCode, FiFileText, FiSend } from 'react-icons/fi';
import Link from 'next/link';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

export default function InterviewPage() {
  const [resume, setResume] = useState<File | null>(null);
  const [resumeText, setResumeText] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [interviewType, setInterviewType] = useState<'technical' | 'behavioral' | 'coding'>('technical');

  const handleResumeUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setResume(file);
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('resume', file);

      const response = await fetch('/api/interview/extract-resume', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setResumeText(data.text);
      
      setMessages([{
        role: 'system',
        content: `Resume uploaded successfully! I've analyzed your resume. Ready to start the interview?`,
        timestamp: new Date()
      }]);
    } catch (error) {
      console.error('Error uploading resume:', error);
      alert('Error processing resume. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const startInterview = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/interview/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resumeText, interviewType }),
      });

      const data = await response.json();
      
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.firstQuestion,
        timestamp: new Date()
      }]);
      
      setInterviewStarted(true);
    } catch (error) {
      console.error('Error starting interview:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/interview/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          resumeText,
          interviewType,
          currentQuestion
        }),
      });

      const data = await response.json();
      
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.response,
        timestamp: new Date()
      }]);
      
      setCurrentQuestion(prev => prev + 1);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-green-600 dark:text-green-400 hover:underline mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            AI Interview Assistant
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Upload your resume and get personalized interview questions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar - Resume Upload */}
          <div className="lg:col-span-1 space-y-6">
            {/* Resume Upload */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <FiFileText className="text-green-600" />
                Upload Resume
              </h2>
              
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,.txt"
                    onChange={handleResumeUpload}
                    className="hidden"
                    id="resume-upload"
                  />
                  <label
                    htmlFor="resume-upload"
                    className="cursor-pointer flex flex-col items-center gap-2"
                  >
                    <FiUpload className="w-12 h-12 text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {resume ? resume.name : 'Click to upload or drag and drop'}
                    </span>
                    <span className="text-xs text-gray-500">PDF, DOC, DOCX, TXT</span>
                  </label>
                </div>

                {resumeText && (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
                    <p className="text-sm text-green-700 dark:text-green-400 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Resume processed successfully
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Interview Type Selection */}
            {resumeText && !interviewStarted && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Interview Type
                </h2>
                
                <div className="space-y-3">
                  <button
                    onClick={() => setInterviewType('technical')}
                    className={`w-full p-4 rounded-lg border-2 transition-all ${
                      interviewType === 'technical'
                        ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                        : 'border-gray-200 dark:border-gray-600 hover:border-green-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <FiCode className="w-6 h-6 text-green-600" />
                      <div className="text-left">
                        <h3 className="font-semibold text-gray-900 dark:text-white">Technical</h3>
                        <p className="text-sm text-gray-500">Programming & technical skills</p>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => setInterviewType('behavioral')}
                    className={`w-full p-4 rounded-lg border-2 transition-all ${
                      interviewType === 'behavioral'
                        ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                        : 'border-gray-200 dark:border-gray-600 hover:border-green-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <FiMessageSquare className="w-6 h-6 text-blue-600" />
                      <div className="text-left">
                        <h3 className="font-semibold text-gray-900 dark:text-white">Behavioral</h3>
                        <p className="text-sm text-gray-500">Soft skills & experience</p>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => setInterviewType('coding')}
                    className={`w-full p-4 rounded-lg border-2 transition-all ${
                      interviewType === 'coding'
                        ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                        : 'border-gray-200 dark:border-gray-600 hover:border-green-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <FiCode className="w-6 h-6 text-purple-600" />
                      <div className="text-left">
                        <h3 className="font-semibold text-gray-900 dark:text-white">Coding</h3>
                        <p className="text-sm text-gray-500">Live coding challenges</p>
                      </div>
                    </div>
                  </button>
                </div>

                <button
                  onClick={startInterview}
                  disabled={isLoading}
                  className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50"
                >
                  {isLoading ? 'Starting...' : 'Start Interview'}
                </button>
              </div>
            )}
          </div>

          {/* Right Side - Chat Interface */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex flex-col h-[calc(100vh-200px)]">
              {/* Chat Header */}
              <div className="border-b border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <FiMessageSquare className="text-green-600" />
                  Interview Chat
                </h2>
                {interviewStarted && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Question {currentQuestion + 1} • {interviewType.charAt(0).toUpperCase() + interviewType.slice(1)} Interview
                  </p>
                )}
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <FiMessageSquare className="w-16 h-16 text-gray-300 dark:text-gray-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">
                      No messages yet
                    </h3>
                    <p className="text-gray-500 dark:text-gray-500">
                      Upload your resume to start the interview
                    </p>
                  </div>
                ) : (
                  messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                          message.role === 'user'
                            ? 'bg-green-600 text-white'
                            : message.role === 'system'
                            ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                        <span className="text-xs opacity-70 mt-1 block">
                          {message.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                    </div>
                  ))
                )}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl px-4 py-3">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              {interviewStarted && (
                <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      placeholder="Type your answer..."
                      disabled={isLoading}
                      className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:opacity-50"
                    />
                    <button
                      onClick={sendMessage}
                      disabled={isLoading || !input.trim()}
                      className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 flex items-center gap-2"
                    >
                      <FiSend />
                      Send
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
