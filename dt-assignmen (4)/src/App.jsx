import React from "react";
import Sidebar from "./Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
import TaskHeading1 from "./TaskHeading1";
import TaskHeading2 from "./TaskHeading2";
import TaskHeading4 from "./TaskHeading4";
import TaskHeading3 from "./TaskHeading3";
import TaskHeading5 from "./TaskHeading5";
import TaskHeading6 from "./TaskHeading6";
import TaskHeading7 from "./TaskHeading7";
import TaskHeading8 from "./TaskHeading8";
import TaskHeading9 from "./TaskHeading9";
import Navbar from "./Navbar/Navbar";
import Home from "./Pages_Navbar/Home";
import Setting from "./Pages_Navbar/Setting";
import Notification from "./Pages_Navbar/Notification";
import Home1 from "./Home1/Home1";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar>
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Home1" element={<Home1 />} />
            </Routes>
          </Navbar>

          <Sidebar>
            <Routes>
              <Route path="/TaskHeading1" element={<TaskHeading1 />} />
              <Route path="/TaskHeading2" element={<TaskHeading2 />} />
              <Route path="/TaskHeading3" element={<TaskHeading3 />} />
              <Route path="/TaskHeading4" element={<TaskHeading4 />} />
              <Route path="/TaskHeading5" element={<TaskHeading5 />} />
              <Route path="/TaskHeading6" element={<TaskHeading6 />} />
              <Route path="/TaskHeading7" element={<TaskHeading7 />} />
              <Route path="/TaskHeading8" element={<TaskHeading8 />} />
              <Route path="/TaskHeading9" element={<TaskHeading9 />} />
            </Routes>
          </Sidebar>
          <div className="container">
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Setting" element={<Setting />} />
              <Route path="/Notification" element={<Notification />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
