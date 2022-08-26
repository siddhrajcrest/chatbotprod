import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.css";
import App from "./App";
const widget = document.createElement("div");
widget.id = "chatbot-widget";
widget.style.position = "relative";
widget.style.right = "0px";
widget.style.bottom = "0px";
document.body.appendChild(widget);


const getId=document.getElementById("business_id");

const root = ReactDOM.createRoot(document.getElementById('chatbot-widget'));
root.render(
  <React.StrictMode>
    <App name={getId.textContent} />
  </React.StrictMode>
);