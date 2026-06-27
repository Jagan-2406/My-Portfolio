import React, { useState, useRef, useEffect } from 'react';
import { sendChatMessage } from '../services/chatbot';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Jade, Jagan's AI assistant. Ask me anything about his skills, projects, or experience!"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messageCount, setMessageCount] = useState(0);

  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    if (messageCount >= 10) {
      return;
    }

    const userMessage = { role: 'user', content: inputValue.trim() };
    const newMessages = [...messages, userMessage];
    
    setMessages(newMessages);
    setInputValue('');
    setIsLoading(true);
    setMessageCount(prev => prev + 1);

    try {
      // Map message history to send to backend (excluding greeting if desired, or send all)
      const chatHistory = newMessages.map(msg => ({
        role: msg.role === 'assistant' ? 'assistant' : 'user',
        content: msg.content
      }));

      const data = await sendChatMessage(chatHistory);
      
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: data.response }
      ]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: "I'm having trouble connecting to my brain right now. I'll let Jagan know you asked!" }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="chat-toggle"
        aria-label="Toggle chat assistant"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>

      {/* Slide-Up Chat Window */}
      <div className={`chat-window ${isOpen ? 'open' : ''}`}>
        {/* Chat Header */}
        <div className="chat-header">
          <div className="chat-header-avatar">J</div>
          <div>
            <h4 className="chat-header-title">Jade — Jagan's Assistant</h4>
            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)' }}>Ask me about Jagan</span>
          </div>
          <div className="chat-online" />
        </div>

        {/* Chat Message List */}
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`msg-bubble ${msg.role === 'user' ? 'msg-user' : 'msg-ai'}`}
            >
              {msg.content}
            </div>
          ))}

          {/* Typing Indicator */}
          {isLoading && (
            <div className="typing-indicator">
              <div className="typing-dot" />
              <div className="typing-dot" />
              <div className="typing-dot" />
            </div>
          )}

          {/* Limit warning */}
          {messageCount >= 10 && (
            <div style={{
              alignSelf: 'center',
              backgroundColor: 'rgba(220, 38, 38, 0.1)',
              color: 'var(--color-error)',
              border: '1px solid rgba(220, 38, 38, 0.2)',
              borderRadius: 'var(--radius-sm)',
              padding: '8px 12px',
              fontSize: '12px',
              textAlign: 'center',
              width: '100%',
              marginTop: '8px',
              fontWeight: 500
            }}>
              Session limit of 10 messages reached. Thanks for chatting!
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input Row */}
        <form onSubmit={handleSendMessage} className="chat-input-row">
          <input
            type="text"
            className="chat-input"
            placeholder={messageCount >= 10 ? 'Limit reached' : 'Ask about Jagan...'}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={messageCount >= 10 || isLoading}
          />
          <button
            type="submit"
            className="chat-send"
            disabled={messageCount >= 10 || isLoading || !inputValue.trim()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}
