import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import '../AIWebsite.css'; // Will use shared styles

export default function KavachChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Jai Hind! I am K.A.V.A.C.H., your AI assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulate AI thinking and responding
    setTimeout(() => {
      let botResponse = 'I am processing your query regarding UP Police tech initiatives. Please consult your commanding officer for classified details.';
      
      const lowerInput = userMsg.text.toLowerCase();
      if (lowerInput.includes('ai kya hai') || lowerInput.includes('what is ai')) {
        botResponse = 'AI (Artificial Intelligence) refers to systems that can learn and solve problems like humans. We use it for predictive policing, facial recognition, and fast FIR drafting.';
      } else if (lowerInput.includes('fir')) {
        botResponse = 'You can use Voice-to-Text AI to draft FIRs in 5 minutes by speaking into the system.';
      } else if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('jai hind')) {
        botResponse = 'Jai Hind! Please specify the module or topic you need help with.';
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button 
          className="ai-chatbot-toggle"
          onClick={() => setIsOpen(true)}
        >
          <MessageSquare size={24} />
          <span className="ai-chatbot-badge">1</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="ai-chatbot-window">
          <div className="ai-chatbot-header">
            <div className="ai-chatbot-title">
              <Bot size={20} /> K.A.V.A.C.H. Guide
            </div>
            <button onClick={() => setIsOpen(false)} className="ai-chatbot-close">
              <X size={20} />
            </button>
          </div>
          
          <div className="ai-chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`ai-chat-bubble ${msg.sender === 'user' ? 'user-bubble' : 'bot-bubble'}`}>
                {msg.sender === 'bot' && <Bot size={16} className="chat-icon" />}
                {msg.sender === 'user' && <User size={16} className="chat-icon" />}
                <span>{msg.text}</span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="ai-chatbot-input-area">
            <input 
              type="text" 
              placeholder="Ask a question..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={handleSend}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
