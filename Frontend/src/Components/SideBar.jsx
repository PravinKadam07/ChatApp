import React, { useState } from "react";
import "./myStyle.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import ConversationItems from "./ConversationItems";
import { useNavigate } from "react-router-dom";
import { toggleTheme } from "../Redux/themeSlice";
import { useSelector, useDispatch } from "react-redux";
function SideBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => {
    return state.themkey;
  });
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
      <div className={`sb-header ${lightTheme ? "" : "dark"}`}>
        <div>
          <IconButton>
            <AccountCircleIcon className={`${lightTheme ? "" : "dark"}`} />
          </IconButton>
        </div>
        <div>
          <IconButton
            onClick={() => {
              navigate("users");
            }}
          >
            <PersonAddAltIcon className={`${lightTheme ? "" : "dark"}`} />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("groups");
            }}
          >
            <GroupAddIcon className={`${lightTheme ? "" : "dark"}`} />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("create-groups");
            }}
          >
            <AddCircleIcon className={`${lightTheme ? "" : "dark"}`} />
          </IconButton>
          <IconButton
            onClick={() => {
              dispatch(toggleTheme());
            }}
          >
            {!lightTheme ? (
              <LightModeIcon className={`${lightTheme ? "" : "dark"}`} />
            ) : (
              <NightlightIcon className={`${lightTheme ? "" : "dark"}`} />
            )}
          </IconButton>
        </div>
      </div>
      <div className={`sb-search ${lightTheme ? "" : "dark"}`}>
        <IconButton>
          {" "}
          <SearchIcon className={`${lightTheme ? "" : "dark"}`} />
        </IconButton>

        <input
          placeholder="search"
          className={`search-box ${lightTheme ? "" : "dark"}`}
        />
      </div>
      <div className={`sb-conversations ${lightTheme ? "" : "dark"}`}>
        {Conversations.map((conversation) => (
          <ConversationItems props={conversation} key={conversation.name} />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
