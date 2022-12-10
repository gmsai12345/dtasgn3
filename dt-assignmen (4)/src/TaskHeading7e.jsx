import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
//import { useNavigate } from "react-router-dom";
//import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Taskheading7.css";

export default function () {
  return (
    <div>
      <div className="TaskHeading7">
        <p className="title">Text Heading 7</p>
        <br />
        <div className="Task7">
          <audio controls src="/media/cc0-audio/t-rex-roar.mp3">
            <a href="/media/cc0-audio/t-rex-roar.mp3">Download audio</a>
          </audio>
          <br />
          <figure align="right">
            <KeyboardArrowDownIcon />
          </figure>
        </div>
      </div>
    </div>
  );
}
