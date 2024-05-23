import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResetPassword from "./components/auth/resetpassword";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}
