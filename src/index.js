import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";

const container = document.querySelector(".main");

const root = ReactDOM.createRoot(container);

root.render(<App />);
