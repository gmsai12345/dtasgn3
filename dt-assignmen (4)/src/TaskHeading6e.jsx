import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SaveIcon from "@mui/icons-material/Save";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Taskheading6.css";
//import { useNavigate } from "react-router-dom";
//import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function () {
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

          <figure align="right">
            <KeyboardArrowDownIcon />
          </figure>
          <figure data-title="Thread A" className="Task Heading 6_1">
            <figcaption>
              <figure data-title="Butter Cookies!" className="Task Heading 6_2">
                <figcaption>
                  <form action="/action_page.php">
                    <label for="fname">Example 1</label>
                    <br />
                    <input type="text" id="fname" name="fname" />
                  </form>
                </figcaption>
              </figure>
              <p>+ Example</p>
              <figure data-title="Butter Cookies!" className="TaskHeading6_3">
                <figcaption>
                  <form action="/action_page.php" className="TaskHeading6form1">
                    <label for="fname">Argument for Thread A</label>
                    <br />
                    <input type="text" id="fname" name="fname" />
                  </form>
                </figcaption>
                <p>+ New Thread</p>
              </figure>
            </figcaption>
          </figure>
          <figure align="right">
            <KeyboardArrowDownIcon />
          </figure>
          <form action="/action_page.php" className="TaskHeading6form2">
            <input type="text" id="fname" name="fname" />
          </form>

          <br />
          <SaveIcon />
          <br />
          <figure align="right">
            <KeyboardArrowDownIcon />
          </figure>
        </div>
      </figure>
    </div>
  );
}
