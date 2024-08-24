import React, { useState, useEffect } from 'react';

const Message = ({ message }) => {
  const [parsedMessage, setParsedMessage] = useState(null);
  console.log(message)
  useEffect(() => {
    try {
      const parsed = JSON.parse(message);
      setParsedMessage(JSON.stringify(parsed.body, null, 2));
    } catch (error) {
      console.error("Failed to parse message:", error);
      setParsedMessage(message); 
    }
  }, [message]);

  console.log(JSON.stringify(parsedMessage))
  return (
    <div>
      {parsedMessage ? (
        <pre>{parsedMessage}</pre>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
};

export default Message;

