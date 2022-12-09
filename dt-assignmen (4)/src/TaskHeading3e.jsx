import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
//import { useNavigate } from "react-router-dom";
//import TaskHeading4 from "./TaskHeading4";
//import TaskHeading2 from "./TaskHeading2";
import "./Taskheading3.css";
//import { Link, useMatch, useResolvedPath } from "react-router-dom";
export default function () {
  return (
    <div>
      <div className="TaskHeading3">
        <h1 className="title">Task Heading 3</h1>

        <div className="Task3">
          <div>
            <input type="text" id="ip1" className="bo" />
          </div>
          <br />
        </div>
        <figure align="right">
          <KeyboardArrowDownIcon />
        </figure>
      </div>
    </div>
  );
}
