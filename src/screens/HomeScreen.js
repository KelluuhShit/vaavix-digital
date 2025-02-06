import React from "react";
import Header from "../components/Header";
import coverImage from "../assets/signinbg.jpeg"; // Import the cover image
import "../styles/HomeScreen.css";
const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="cover-image-container">
        <img src={coverImage} alt="Cover" className="cover-image" />
        <div className="cover-content">
          <h1>Welcome to Vaavix Digital</h1>
          <p>Your one-stop solution for digital excellence.</p>
        </div>

        <img src={coverImage} alt="Cover" className="cover-image" />
        <div className="cover-content">
          <h1>Welcome to Vaavix Digital</h1>
          <p>Your one-stop solution for digital excellence.</p>
        </div>
      </div>
      

      
    </div>

    
  );
};

export default Home;