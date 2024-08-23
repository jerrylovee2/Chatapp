import React, { useState, useEffect } from 'react';

const Message = ({ message }) => {
  const [parsedMessage, setParsedMessage] = useState(null);

  useEffect(() => {
    try {
      const parsed = JSON.parse(message);
      setParsedMessage(parsed);
    } catch (error) {
      console.error("Failed to parse message:", error);
      setParsedMessage(message); 
    }
  }, [message]);

  return (
    <div>
      {parsedMessage ? (
        <pre>{JSON.stringify(parsedMessage, null, 2)}</pre>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
};

export default Message;

