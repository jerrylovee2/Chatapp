
import React from 'react';
import Message from '../Message/Message';

const ChatHistory = ({ chatHistory }) => {
  console.log(chatHistory)
  return (
    <div className="chat-history">
      {chatHistory.length > 0 ? (
        chatHistory.map((message, index) => (
          <div key={index} className="chat-message">
            <Message message={message} />
          </div>
        ))
      ) : (
        <p>No messages yet</p>
      )}
    </div>
  );
};

export default ChatHistory;
