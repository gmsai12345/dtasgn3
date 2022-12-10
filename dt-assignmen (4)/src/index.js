import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import { BrowserRouter } from "react-router-dom";
import App from "./App";
//import App1 from "./App1";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div>
    <StrictMode>
      <App />
    </StrictMode>
  </div>
);
