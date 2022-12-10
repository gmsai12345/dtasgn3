import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SaveIcon from "@mui/icons-material/Save";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Taskheading6.css";
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
      <figure data-title="" className="TaskHeading6">
        <h1 className="title">Task Heading 6</h1>
        <div className="Task6">
          <h1 className="subtitle">
            <KeyboardArrowUpIcon /> Introduction
          </h1>
          <br />
          <form action="/action_page.php">
            <input type="text" id="fname" className="fname2" />
          </form>
          <br />
          <figure align="right">
            <KeyboardArrowDownIcon />
          </figure>
          <br />
          <figure data-title="Thread A" className="Task Heading 6_1">
            <p className="subtitle">
              <KeyboardArrowUpIcon /> Thread A
            </p>
            <figcaption>
              <figure data-title="Butter Cookies!" className="Task Heading 6_2">
                <figcaption>
                  <form action="/action_page.php">
                    <br />
                    <label className="fname">Example 1</label>
                    <br />
                    <br />
                    <input type="text" id="fname" className="fname2" />
                  </form>
                </figcaption>
              </figure>
              <br />
              <p className="box">+ Example</p>
              <br />
              <figure data-title="Butter Cookies!" className="TaskHeading6_3">
                <figcaption>
                  <form action="/action_page.php" className="TaskHeading6form1">
                    <label for="fname" className="fname">
                      Argument for Thread A
                    </label>
                    <br />
                    <br />
                    <input type="text" id="fname" className="fname2" />
                  </form>
                  <br />
                </figcaption>
                <p className="box">+ New Thread </p>
              </figure>
            </figcaption>
          </figure>
          <figure align="right">
            <KeyboardArrowDownIcon />

            <p className="subtitle">
              <KeyboardArrowUpIcon /> Conclusion
            </p>
            <br />
          </figure>
          <form action="/action_page.php" className="TaskHeading6form2">
            <input type="text" id="fname" className="fname2" />
          </form>

          <br />
          <figure align="right">
            <SaveIcon />
          </figure>
          <br />
          <figure align="right">
            <KeyboardArrowDownIcon />
          </figure>
        </div>
      </figure>

      <CustomLink to="/TaskHeading7">
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
      <CustomLink to="/TaskHeading5">
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
