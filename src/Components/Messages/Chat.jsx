// components/Chat.js

import React, { useState } from 'react';

const Chat = ({ tabName }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage('');
      // You can add logic here to handle responses from a bot or another user
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={message.sender === 'user' ? 'user-message' : 'bot-message'}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder={`Type your message in ${tabName}...`}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>

      <style jsx>{`
        .chat-container {
          border: 1px solid #ccc;
          border-radius: 8px;
          overflow: hidden;
        }

        .chat-messages {
          height: 200px; /* Set a fixed height or adjust as needed */
          overflow-y: auto;
          padding: 10px;
        }

        .user-message {
          background-color: #e1f7c4;
          padding: 8px;
          margin-bottom: 8px;
          border-radius: 4px;
        }

        .bot-message {
          background-color: #c4c4c4;
          padding: 8px;
          margin-bottom: 8px;
          border-radius: 4px;
        }

        .chat-input {
          display: flex;
          align-items: center;
          padding: 10px;
          background-color: #f2f2f2;
        }

        input {
          flex: 1;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
          margin-right: 8px;
        }

        button {
          background-color: #4caf50;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
        }

        button:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>
  );
};

export default Chat;
