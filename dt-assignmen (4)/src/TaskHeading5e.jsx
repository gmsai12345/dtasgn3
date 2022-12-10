import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
//import { useNavigate } from "react-router-dom";
//import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Taskheading5.css";
export default function () {
  return (
    <div>
      <div className="TaskHeading5">
        <h1 className="title">Task Heading 5</h1>
        <br />
        <div className="Task5">
          <embed
            src="https://giphy.com/gifs/cbc-retro-throwback-old-school-IzjhI7ggjDlEnMxZMu"
            width="612"
            height="458"
          />

          <br />
        </div>
        <figure align="right">
          <KeyboardArrowDownIcon />
        </figure>
      </div>
    </div>
  );
}
