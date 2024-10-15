import React from "react";
import "./myStyle.css";
import { Button, TextField } from "@mui/material";
function Login() {
  return (
    <div className="login-container">
      <div className="image-container">
        <img src="./chat1.png" className="welocome-logo" alt="" />
      </div>
      <div className="login-box">
        <p>Login to your Account</p>
        <TextField
          id="standard-basic"
          label="Enter User Name"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
          autoComplete="current-password"
        />
        <Button variant="outlined">Login</Button>
      </div>
    </div>
  );
}

export default Login;
