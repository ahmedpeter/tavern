import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/css/bootstrap.min.css";
// import "../vendors/iconic-fonts/font-awesome/css/all.min.css";
import "./assets/css/jquery-ui.min.css";
import "./assets/css/style.css";
// import "https://fonts.googleapis.com/icon?family=Material+Icons";
// import "../vendors/iconic-fonts/flat-icons/flaticon.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
