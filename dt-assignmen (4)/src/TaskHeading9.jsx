import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
//import { useNavigate } from "react-router-dom";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
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
      <p className="TaskHeading9">Task Heading 9</p>
      <h1>Analytics page</h1>
      <figure align="right">
        <KeyboardArrowDownIcon />
      </figure>
      <CustomLink to="/TaskHeading8">
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
