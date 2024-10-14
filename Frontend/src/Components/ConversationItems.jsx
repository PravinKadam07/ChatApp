import React from "react";
import "./myStyle.css";
function ConversationItems({ props }) {
  return (
    <div className="conversation-container" key={props.id}>
      <div className="con-icon">{props.name[0]}</div>
      <div className="con-title">{props.name}</div>
      <div className="con-lastMessage">{props.latMessage}</div>
      <div className="con-timeStamp">{props.timestamp}</div>
    </div>
  );
}

export default ConversationItems;
