import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(

const rootNode = document.getElementById("root");
ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
