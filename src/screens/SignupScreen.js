import React from "react";
import "../styles/SignUpScreen.css"; // Import the CSS file
import logo from "../assets/logo.png"; // Update the path to your logo
import googleIcon from "../assets/google.png";
import facebookIcon from "../assets/facebook.png";
import linkedinIcon from "../assets/linkedin.png";
import coverImage from "../assets/signinbg.jpg";

const SignupScreen = () => {
  return (
    <div className="signup-container">
      <div className="signup-header" style={{ backgroundImage: `url(${coverImage})` }}>
        <img src={logo} alt="Vaavix Digital" className="logo" />
        <h2 className="com-name">Vaavix Digital</h2>
      </div>

      <div className="signup-form">
        <label>Full Name</label>
        <input type="text" placeholder="Enter Your Full Name" />

        <label>Email</label>
        <input type="email" placeholder="Enter Your Email Address" />

        <label>Password</label>
        <input type="password" placeholder="Enter Your Password" />

        <label>Confirm Password</label>
        <input type="password" placeholder="Confirm Your Password" />

        <button className="signup-button">Sign Up →</button>

        <div className="divider">
          <span>Or Sign Up With</span>
        </div>

        <div className="social-icons">
          <img src={googleIcon} alt="Google" />
          <img src={facebookIcon} alt="Facebook" />
          <img src={linkedinIcon} alt="LinkedIn" />
        </div>

        <p className="signin-text">
          Already Have An Account? <a href="/signin">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignupScreen;
