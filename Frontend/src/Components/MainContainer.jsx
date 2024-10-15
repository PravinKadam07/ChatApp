import React, { useState } from "react";
import "./myStyle.css";
import SideBar from "./SideBar";
import ChatArea from "./ChatArea";
import Welcome from "./Welcome";
import CreateGroups from "./CreateGroups";
import User_Groups from "./User_Groups";
function MainContainer() {
  const [Conversation, setConversation] = useState({
    name: "Alice",
    latMessage: "Hello, how are you?",
    timestamp: "today",
  });
  return (
    <div className="main-container">
      <SideBar />
      {/* <ChatArea props={Conversation} key={Conversation.name} /> */}
      {/* <Welcome/> */}
      {/* <CreateGroups/> */}
      <User_Groups />
    </div>
  );
}

export default MainContainer;
