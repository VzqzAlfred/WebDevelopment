import React from "react";
import ReactDOM from "react-dom";
import style from "./style.css";
import logo from "./assets/batmanIcon.png";
import data from "./data.json";
import { FileReact } from "./components/file_react.jsx";

ReactDOM.render(
    <FileReact name="React" logo={logo} menu={data.links} />, document.getElementById("app")
);