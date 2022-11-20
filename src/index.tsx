import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";

const container = document.querySelector(".dom-container");

if (!container) {
  throw new Error("DOM container is undefined");
}

const root = ReactDOM.createRoot(container);

root.render(<App />);
