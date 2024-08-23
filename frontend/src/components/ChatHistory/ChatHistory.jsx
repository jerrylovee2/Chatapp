import React from 'react';
// import './ChatHistory.scss';

const ChatHistory = ({ chatHistory }) => {
  return (
    <div className="chat-history">
      {chatHistory.length > 0 ? (
        chatHistory.map((message, index) => (
          <div key={index} className="chat-message">
            {message}
          </div>
        ))
      ) : (
        <p>No messages yet</p>
      )}
    </div>
  );
};

export default ChatHistory;
