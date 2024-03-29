import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.css";
import App from "./App";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
