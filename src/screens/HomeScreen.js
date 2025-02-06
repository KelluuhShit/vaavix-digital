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
          <h1> Innovate, Engage, 
          Succeed</h1>
          <p>We deliver cutting-edge software solutions tailored to your 
          business needs.</p>
          <button className="explore-services">
            Explore Our Services
          </button>
        </div>
      </div>
      

      
    </div>

    
  );
};

export default Home;