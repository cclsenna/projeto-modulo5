import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Routes from "./Routes/Routes.jsx";
import App from "./NAO_USARApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
