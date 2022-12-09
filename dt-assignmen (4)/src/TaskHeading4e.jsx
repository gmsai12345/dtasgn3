import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
//import TaskHeading3 from "./TaskHeading3";
//import { useNavigate } from "react-router-dom";
//import TaskHeading5 from "./TaskHeading5";
import "./Taskheading4.css";
//import { Link, useMatch, useResolvedPath } from "react-router-dom";
export default function () {
  return (
    <div>
      <div className="TaskHeading4">
        <h1 className="title">Task Heading 4</h1>
        <div className="Task4">
          <div className="embed1">
            <embed
              className="embed1"
              src="https://webhome.phy.duke.edu/~rgb/Class/intro_physics_1/intro_physics_1.pdf"
            />
          </div>
          <br />
          <a href="https://webhome.phy.duke.edu/~rgb/Class/intro_physics_1/intro_physics_1.pdf">
            https://webhome.phy.duke.edu/~rgb/Class/intro_physics_1/intro_physics_1.pdf
          </a>
          <br />
        </div>
        <figure align="right">
          <KeyboardArrowDownIcon />
        </figure>
      </div>

    </div>
  );
}

