import React, { useState } from "react";
import "./myStyle.css";
import SideBar from "./SideBar";
import ChatArea from "./ChatArea";
import Welcome from "./Welcome";
import CreateGroups from "./CreateGroups";
import User_Groups from "./User_Groups";
import { Outlet } from "react-router-dom";
function MainContainer() {
  return (
    <div className="main-container">
      <SideBar />
      <Outlet />
    </div>
  );
}

export default MainContainer;
