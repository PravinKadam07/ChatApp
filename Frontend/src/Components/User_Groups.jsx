import React from "react";
import "./myStyle.css";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
function User_Groups() {
  return (
    <div className="list-container">
      <div className="ug-header">
        <img
          src="./chat1.png"
          style={{ height: "2rem", width: "2rem" }}
          alt=""
        />
        <p className="ug-title">Online Users</p>
      </div>

      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>

        <input placeholder="search" className="search-box" />
      </div>
      <div className="ug-list">
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
      </div>
    </div>
  );
}

export default User_Groups;
