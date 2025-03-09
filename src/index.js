import React from "react";
import ReactDOM from "react-dom/client"; // Importing from "react-dom/client"
import "./style.css"; // Import global styles like dark/light mode
import App from "./App";

// Creating the root and rendering the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
