import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
  <link rel="stylesheet" href="../../vendors/iconic-fonts/flat-icons/flaticon.css"/>
  <link href="../vendors/iconic-fonts/font-awesome/css/all.min.css" rel="stylesheet"/>
  <link href="../assets/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="../assets/css/jquery-ui.min.css" rel="stylesheet"/>
  <link href="../assets/css/style.css" rel="stylesheet"/>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
