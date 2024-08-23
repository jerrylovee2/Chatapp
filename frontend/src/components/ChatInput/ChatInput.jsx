import React from "react";
import "./ChatInput.scss";

const ChatInput = ({ sendMsg }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && event.target.value.trim()) {
      sendMsg(event.target.value); 
      event.target.value = ''; 
    }
  };

  return (
    <div className="ChatInput">
      <input
        type="text"
        placeholder="Type a Message"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default ChatInput;
