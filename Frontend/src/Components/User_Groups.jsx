import React from "react";
import "./myStyle.css";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
function User_Groups() {
  const lightTheme = useSelector((state) => {
    return state.themkey;
  });
  return (
    <div className="list-container">
      <div className={`ug-header ${lightTheme ? "" : "dark"}`}>
        <img
          src="/chat1.png"
          style={{ height: "2rem", width: "2rem" }}
          alt=""
        />
        <p className="ug-title">Available Groups</p>
      </div>

      <div className={`sb-search ${lightTheme ? "" : "dark"}`}>
        <IconButton>
          <SearchIcon className={` ${lightTheme ? "" : "dark"}`} />
        </IconButton>

        <input
          placeholder="search"
          className={`search-box ${lightTheme ? "" : "dark"}`}
        />
      </div>
      <div className="ug-list">
        <div className={`list-item ${lightTheme ? "" : "dark"}`}>
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
        <div className={`list-item ${lightTheme ? "" : "dark"}`}>
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
        <div className={`list-item ${lightTheme ? "" : "dark"}`}>
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
        <div className={`list-item ${lightTheme ? "" : "dark"}`}>
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
        <div className={`list-item ${lightTheme ? "" : "dark"}`}>
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
        <div className={`list-item ${lightTheme ? "" : "dark"}`}>
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
        <div className={`list-item ${lightTheme ? "" : "dark"}`}>
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
      </div>
    </div>
  );
}

export default User_Groups;
