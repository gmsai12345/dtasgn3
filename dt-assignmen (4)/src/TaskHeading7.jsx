import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
//import { useNavigate } from "react-router-dom";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Taskheading7.css";

export default function () {
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

      <CustomLink to="/TaskHeading8">
        <img
          src="https://img.icons8.com/ios/50/000000/forward--v1.png"
          alt=""
          className="right"
        />
        <br />
        <br />
        <br />
        <p className="task1">Next page -&gt;</p>
      </CustomLink>
      <CustomLink to="/TaskHeading6">
        <img
          src="https://img.icons8.com/ios-filled/50/000000/back.png"
          alt=""
          className="left"
        />
        <br />
        <br />
        <br />
        <p className="task2"> &#60;-Previous Page</p>
      </CustomLink>
    </div>
  );
}
