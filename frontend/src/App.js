import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import ChatHistory from "./components/ChatHistory/ChatHistory";
import Message from "./components/Message/Message";
import ChatInput from "./components/ChatInput/ChatInput";
import { connect, sendMsg } from './api';

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    const handleNewMessage = (msg) => {
      console.log("new message");
      setChatHistory(prevChatHistory => [...prevChatHistory, msg]);
    };

    const unsubscribe = connect(handleNewMessage);

     return () => {
      if (unsubscribe) {
        unsubscribe(); 
      }
    };
  }, []);

  const handleSendMessage = (msg) => {
    sendMsg(msg);
  };

  return (
    <div>
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <Message />
      <ChatInput sendMsg={handleSendMessage} />
    </div>
  );
};

export default App;
