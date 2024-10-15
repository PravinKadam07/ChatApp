import React, { useState } from "react";
import "./myStyle.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import ConversationItems from "./ConversationItems";
import { useNavigate } from "react-router-dom";
function SideBar() {
  const navigate = useNavigate();
  const [Conversations, setConversations] = useState([
    {
      name: "Alice",
      latMessage: "Hello, how are you?",
      timestamp: "today",
    },
    {
      name: "Bob",
      latMessage: "I'm good, thanks!",
      timestamp: "tomorrow",
    },
    {
      name: "Charlie",
      latMessage: "See you at 5?",
      timestamp: "tomorrow",
    },
  ]);

  return (
    <div className="sidebar-container">
      <div className="sb-header">
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton
            onClick={() => {
              navigate("users");
            }}
          >
            <PersonAddAltIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("groups");
            }}
          >
            <GroupAddIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("create-groups");
            }}
          >
            <AddCircleIcon />
          </IconButton>
          <IconButton>
            <NightlightIcon />
          </IconButton>
        </div>
      </div>
      <div className="sb-search">
        <IconButton>
          {" "}
          <SearchIcon />
        </IconButton>

        <input placeholder="search" className="search-box" />
      </div>
      <div className="sb-conversations">
        {Conversations.map((conversation) => (
          <ConversationItems props={conversation} key={conversation.name} />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
