import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TaskHeading2 from "./TaskHeading2";
import "./Taskheading1.css";
//import { useNavigate } from "react-router-dom";
//import {  BrowserRouter as Router, Route, Redirect,Routes} from "react-router-dom";
export default function () {
  return (
    <div>
      <div>
        <figure
          className="TaskHeading1"
          data-title="Task Heading 1"
          width="461"
          height="320"
        >
          <div className="Task1">
            <p className="title">Task Heading 1</p>

            <p className="para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop p
              <br />
              <div align="right">
                <KeyboardArrowDownIcon />
              </div>
            </p>
          </div>
        </figure>
      </div>

      <CustomLink to="/TaskHeading2">
        <figure>
          <img
            src="https://img.icons8.com/ios/50/000000/forward--v1.png"
            alt=""
            align="right"
          />
          <br />
          <br />
          <br />
          <figcaption>
            <p className="next"> Next Task-&gt; </p>
          </figcaption>
        </figure>
      </CustomLink>
    </div>
  );
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
