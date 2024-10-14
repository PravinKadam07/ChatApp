import React from "react";
import "./myStyle.css";
function MessageSelf() {
  let props2 = { name: "otherUser", message: "this is sample message" };
  return (
    <div className="self-message-container">
      <div className="messageBox">
        <p>{props2.message}</p>
        <p className="self-timeStamp">12:00am</p>
      </div>
    </div>
  );
}

export default MessageSelf;
