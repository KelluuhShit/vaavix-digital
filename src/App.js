import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignupScreen";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/" element={<SignInScreen />} />
      </Routes>
    </Router>
  );
}

export default App;