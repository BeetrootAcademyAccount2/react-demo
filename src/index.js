import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./custom.scss";

import AppClass from "./pages/classes/AppClass";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <AppClass />
  // </React.StrictMode>
);
