import React from "react";
import "./myStyle.css";
function MessageOthers() {
  let props = {
    name: "NewUser",
    message:
      "this is sample message this is sample message this is sample messagethis is sample messagethis is sample messagethis is sample message",
  };

  return (
    <div className="message-other-container">
      <div className="conversation-container" key={props.id}>
        <p className="con-icon">{props.name[0]}</p>
        <div className="other-text-content">
          <p className="con-title">{props.name}</p>
          <p className="con-lastMessage">{props.message}</p>
          <p className="self-timeStamp">12:00am</p>
        </div>
      </div>
    </div>
  );
}

export default MessageOthers;
