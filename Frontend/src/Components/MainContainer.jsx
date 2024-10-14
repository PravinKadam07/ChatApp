import React, { useState } from "react";
import "./myStyle.css";
import SideBar from "./SideBar";
import ChatArea from "./ChatArea";
function MainContainer() {
  const [Conversation, setConversation] = useState({
    name: "Alice",
    latMessage: "Hello, how are you?",
    timestamp: "today",
  });
  return (
    <div className="main-container">
      <SideBar />
      <ChatArea props={Conversation} key={Conversation.name} />
    </div>
  );
}

export default MainContainer;
