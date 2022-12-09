import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import CommentIcon from "@mui/icons-material/Comment";
import LinkIcon from "@mui/icons-material/Link";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import SaveIcon from "@mui/icons-material/Save";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
//import { Routes, Route, useNavigate } from "react-router-dom";
//import TaskHeading1 from "./TaskHeading1";
//import TaskHeading3 from "./TaskHeading3";
//import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Taskheading2.css";
export default function () {
  return (
    <div>
      <div>
        <h1 className="title">Task Heading 2</h1>
        <figure data-title="" className="TaskHeading2">
          <div className="Task2">
            <h1 className="thread">
              <KeyboardArrowUpIcon /> Thread A
            </h1>
            <div className="in">
              <figure data-title="Thread A" className="Task Heading 2_1">
                <figcaption>
                  <figure
                    data-title="Butter Cookies!"
                    className="Task Heading 2_2"
                  >
                    <figcaption>
                      <form action="/action_page.php" className="form1">
                        <label for="fname" className="f1">
                          Sub Thread 1{" "}
                        </label>
                        <br />
                        <input type="text" id="fname" className="fname" />
                      </form>
                    </figcaption>
                  </figure>
                  <figure
                    data-title="Butter Cookies!"
                    className="Task Heading 2_3"
                  >
                    <figcaption>
                      <form action="/action_page.php" className="form2">
                        <label for="fname" className="f1">
                          Sub Interpratation 1{" "}
                        </label>
                        <br />
                        <input type="text" id="fname" className="fname" />
                      </form>
                    </figcaption>
                  </figure>
                </figcaption>
              </figure>
            </div>
            <br />
            <ul class="nav">
              <li>
                <a href="#home">
                  <LightbulbIcon />
                </a>
              </li>
              <li>
                <a href="#about">
                  <CommentIcon />
                </a>
              </li>
              <li>
                <a href="#clients">
                  {" "}
                  <select name="select2_1" id="cars">
                    <option value="volvo">Select Category</option>
                  </select>
                </a>
              </li>
              <li>
                <a href="#about">
                  <select name="select2_2" id="cars">
                    <option value="volvo">Select Process</option>
                  </select>
                </a>
              </li>
            </ul>

            <br />
            <p className="sub">+ Sub thread</p>
            <br />
            <figure data-title="Butter Cookies!" className="align">
              <figcaption>
                <form action="/action_page.php">
                  <label for="fname" className="sum">
                    Summary for Thread A
                  </label>
                  <br />
                  <input type="text" id="fname" className="fname" />
                </form>
              </figcaption>
            </figure>
            <div className="al">
              <LinkIcon /> Thread Credit
              <DriveFileRenameOutlineIcon />
            </div>
            <div className="al2">
              <select name="select2_3" id="cars">
                <option value="volvo">Select Emotion</option>
              </select>
            </div>

            <br />
            <div className="sub11">
              <p className="sub1">+ New thread</p>
            </div>

            <br />
            <div className="save">
              <SaveIcon />
            </div>
            <br />
          </div>
        </figure>
        <figure align="right">
          <KeyboardArrowDownIcon />
        </figure>
      </div>
      <div></div>
    </div>
  );
}
