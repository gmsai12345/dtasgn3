import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
//import { useNavigate } from "react-router-dom";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Taskheading8.css";
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
      <div>
        <p className="TaskHeading9">Task Heading 9</p>
        <div className="Task9">
          <iframe
            src="https://www.youtube.com/embed/s8H0Sx7jy7c"
            width="400px"
            height="400px"
          />
          <br />
          <figure align="right">
            <KeyboardArrowDownIcon />
          </figure>
        </div>
      </div>

      <CustomLink to="/TaskHeading9">
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

      <CustomLink to="/TaskHeading7">
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
