import React, { useState, useEffect } from 'react';

const Message = ({ message }) => {
  const [parsedMessage, setParsedMessage] = useState(null);
  console.log(message)
  useEffect(() => {
    try {
     
      const parsed = JSON.parse(message);
      console.log(parsed)
      setParsedMessage(parsed);
    } catch (error) {
      console.error("Failed to parse message:", error);
    }
  }, [message]); 

  return (
    <div>
    
      {parsedMessage ? (
        <pre>{JSON.stringify(parsedMessage, null, 2)}</pre>
      ) : (
        <p>No message available</p>
      )}
    </div>
  );
};

export default Message;
