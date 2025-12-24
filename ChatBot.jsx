import { useState, useEffect, useRef } from 'react';

const MODES = {
  dsa: {
    label: 'DSA',
    context:
      'You are an interviewer for SDE roles. Ask one DSA question at a time, based on arrays, strings, trees, graphs or DP.',
  },
  hr: {
    label: 'HR / Behavioral',
    context:
      'You are an HR interviewer. Ask one behavioral question at a time, using STAR-style prompts.',
  },
  system: {
    label: 'System Design',
    context:
      'You are a system design interviewer for backend roles. Ask one system design question at a time.',
  },
};

export default function ChatBot() {
  const [mode, setMode] = useState('dsa');
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! Choose a mode and I will start asking you questions.' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const newMessages = [...messages, { from: 'user', text: trimmed }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: trimmed,
          context: MODES[mode].context,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to get response');
      }

      const data = await res.json();
      const reply = data.reply;
      const followUp = data.followUp;

      // Add main reply
      const updatedMessages = [...newMessages, { from: 'bot', text: reply }];

      // Add follow-up if exists
      if (followUp) {
        updatedMessages.push({ from: 'bot', text: followUp });
      }

      setMessages(updatedMessages);
    } catch (err) {
      console.error(err);
      setMessages([
        ...newMessages,
        { from: 'bot', text: 'Error contacting server. Please try again later.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleModeChange = (newMode) => {
    if (newMode === mode) return;
    setMode(newMode);
    setMessages([
      {
        from: 'bot',
        text: `Switched to ${MODES[newMode].label} mode. I will now ask you ${MODES[newMode].label} questions.`,
      },
    ]);
  };

  return (
    <div className="chat-wrapper">
      <div className="mode-bar">
        {Object.entries(MODES).map(([key, cfg]) => (
          <button
            key={key}
            className={key === mode ? 'mode-btn active' : 'mode-btn'}
            onClick={() => handleModeChange(key)}
          >
            {cfg.label}
          </button>
        ))}
      </div>

      <div className="chat-container">
        <div className="chat-window">
          {messages.map((m, i) => (
            <div key={i} className={`msg ${m.from === 'user' ? 'user' : 'bot'}`}>
              {m.text}
            </div>
          ))}
          {loading && <div className="msg bot">Thinking...</div>}
          <div ref={chatEndRef} />
        </div>

        <form onSubmit={sendMessage} className="chat-input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your answer or ask for a new question..."
          />
          <button type="submit" disabled={loading}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
