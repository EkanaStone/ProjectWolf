import React, { useState, useRef, useEffect } from 'react';
import './ChatWindow.css';

function ChatWindow() {
  const [messages, setMessages] = useState([
    { text: 'Welcome! I am Chat Bot!', sender: 'bot', timestamp: new Date() }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const chatWindowRef = useRef(null);

  function handleSend() {
    const newMessage = { text: currentMessage, sender: 'user', timestamp: new Date() };
    setMessages([...messages, newMessage]);
  
    // Generate bot response based on the current user message
    const botResponse = generateBotResponse(currentMessage);
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, botResponse]);
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }, 1000);
  
    setCurrentMessage('');
  }
  
  useEffect(() => {
    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
  }, [messages]);
  

  function generateBotResponse(userMessage) {
    const greetings = ['hi', 'hello', 'hey'];
    const goodbye = ['bye', 'goodbye', 'see you later'];
    const thanks = ['thank you', 'thanks', 'appreciate it'];
    const help = ['i need help', 'help me', 'help', 'assistance'];
    const fine = ['im fine', 'no im fine', 'im good', 'i dont need help', 'im okay', 'nevermind', 'nevermind i dont need help', 'no worries'];
  
    const cleanedUserMessage = userMessage.trim().toLowerCase();
    const matchingGreetings = greetings.filter((greeting) => cleanedUserMessage.includes(greeting));
    const matchingGoodbye = goodbye.filter((goodbye) => cleanedUserMessage.includes(goodbye));
    const matchingThanks = thanks.filter((thank) => cleanedUserMessage.includes(thank));
    const matchingHelp = help.filter((help) => cleanedUserMessage.includes(help));
    const matchingFine = fine.filter((fine) => cleanedUserMessage.includes(fine));
  
    if (matchingGreetings.length > 0) {
      return {
        text: `Hello! Nice to meet you! How can I help you?`,
        sender: 'bot',
        timestamp: new Date()
      };
    } else if (matchingGoodbye.length > 0) {
      return {
        text: `Goodbye! Take care.`,
        sender: 'bot',
        timestamp: new Date()
      };
    } else if (matchingThanks.length > 0) {
      return {
        text: `You're welcome!`,
        sender: 'bot',
        timestamp: new Date()
      };
    } else if (matchingHelp.length > 0) {
        return {
          text: `No worries! What can i help you with today?`,
          sender: 'bot',
          timestamp: new Date()
        };
    } else if (matchingFine.length > 0) {
        return {
          text: `I'm glad you're doing fine! Let me know if you need help with anything!`,
          sender: 'bot',
          timestamp: new Date()
        };
    } else {
      return {
        text: `I'm sorry, I didn't understand that.`,
        sender: 'bot',
        timestamp: new Date()
      };
    }
  }
  
  function renderChatBubbles() {
    return messages.map((message) => (
      <ChatBubble
        key={`${message.sender}-${message.timestamp}`}
        text={message.text}
        sender={message.sender}
        timestamp={message.timestamp}
      />
    ));
  }

  return (
    <div className="chat-window" style={{ backgroundColor: '#fff2f2' }} ref={chatWindowRef}>
      {renderChatBubbles()}
      <div className="message-input">
        <input type="text" placeholder="Type a message..." value={currentMessage} onChange={(e) => setCurrentMessage(e.target.value)} />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

function ChatBubble({ text, sender, timestamp }) {
  const isUser = sender === 'user';

  return (
    <div className={`chat-bubble ${isUser ? 'user' : 'other'}`}>
      <p>{text}</p>
      <span className="timestamp">{timestamp.toLocaleTimeString()}</span>
    </div>
  );
}

export default ChatWindow;
