import React from "react";
import "./myStyle.css";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { IconButton } from "@mui/material";
function CreateGroups() {
  return (
    <div className="createGroup-container">
      <input placeholder="Enter Group Name" className="search-box"></input>
      <IconButton>
        <DoneOutlineIcon />
      </IconButton>
    </div>
  );
}

export default CreateGroups;
