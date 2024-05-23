import React from "react";
import { Route, Routes } from "react-router-dom";
import RedirectedRoute from "./routes/RedirectedRoute";
// import ForgotPassword from "./pages/ForgotPassword";
import Login from "./components/auth/login";
// import SignUp from "./pages/SignUp";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route
        element={
          <RedirectedRoute>
            <Login />
          </RedirectedRoute>
        }
        path="/"
      />
      {/* <Route element={<SignUp />} path="/signup" />
      <Route element={<ForgotPassword />} path="/forgot" /> */}
    </Routes>
  );
}
