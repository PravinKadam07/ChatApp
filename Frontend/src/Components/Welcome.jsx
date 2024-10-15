import React from "react";
import "./myStyle.css";
function Welcome() {
  return (
    <div className="welcome-container">
      <img src="./chat1.png" className="welocome-logo" alt="logo" />
      <p>"Welcome to Whispr! Start a conversation and stay connected."</p>
    </div>
  );
}

export default Welcome;
