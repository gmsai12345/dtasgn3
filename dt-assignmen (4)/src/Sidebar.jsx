import React, { useState } from "react";
import Filter9Icon from "@mui/icons-material/Filter9";
import Filter1Icon from "@mui/icons-material/Filter1";
import Filter2Icon from "@mui/icons-material/Filter2";
import Filter3Icon from "@mui/icons-material/Filter3";
import Filter4Icon from "@mui/icons-material/Filter4";
import Filter5Icon from "@mui/icons-material/Filter5";
import Filter6Icon from "@mui/icons-material/Filter6";
import Filter7Icon from "@mui/icons-material/Filter7";
import Filter8Icon from "@mui/icons-material/Filter8";

import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import "./App.css";
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuitems = [
    {
      path: "/Home",
      name: "Home",
      icon: <HomeIcon />
    },
    {
      name: "1.Demo Task"
    },

    {
      path: "/TaskHeading1",
      name: "Task Heading 1",
      icon: <Filter1Icon />
    },
    {
      path: "/TaskHeading2",
      name: "Task Heading 2",
      icon: <Filter2Icon />
    },
    {
      path: "/TaskHeading3",
      name: "Task Heading 3",
      icon: <Filter3Icon />
    },
    {
      path: "/TaskHeading4",
      name: "Task Heading 4",
      icon: <Filter4Icon />
    },
    {
      path: "/TaskHeading5",
      name: "Task Heading 5",
      icon: <Filter5Icon />
    },
    {
      path: "/TaskHeading6",
      name: "Task Heading 6",
      icon: <Filter6Icon />
    },
    {
      path: "/TaskHeading7",
      name: "Task Heading 7",
      icon: <Filter7Icon />
    },
    {
      path: "/TaskHeading8",
      name: "Task Heading 8",
      icon: <Filter8Icon />
    },
    {
      path: "/TaskHeading9",
      name: "Task Heading 9",
      icon: <Filter9Icon />
    }
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Tasks
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <MenuIcon onClick={toggle} />
          </div>
        </div>
        {menuitems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
