import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link from react-router-dom
import "../styles/SignInScreen.css";
import logo from "../assets/logo.png";
import googleIcon from "../assets/google.png";
import facebookIcon from "../assets/facebook.png";
import linkedinIcon from "../assets/linkedin.png";
import coverImage from "../assets/signinbg.jpeg";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    if (email && password) {
      navigate("/home"); // Navigate to the home screen
    } else {
      alert("Please enter both email and password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-header" style={{ backgroundImage: `url(${coverImage})` }}>
        <img src={logo} alt="Vaavix Digital" className="logo" />
        <h2 className="com-name">Vaavix Digital</h2>
      </div>

      <form className="login-form" onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="login-button">Log In →</button>

        <a href="#" className="forgot-password">Forgot Password?</a>

      <div className="divider">
        <span>Continue With</span>
      </div>

      <div className="social-icons">
        <img src={googleIcon} alt="Google" />
        <img src={facebookIcon} alt="Facebook" />
        <img src={linkedinIcon} alt="LinkedIn" />
      </div>

      <p className="signup-text">
        Don’t Have An Account? <Link to="/signup">Sign Up</Link>
      </p>
      </form>

      
    </div>
  );
};

export default SignInScreen;