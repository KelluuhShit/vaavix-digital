import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css"; // Import the CSS file
import logo from "../assets/Vav_Logo.png";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* Logo */}
        <div className="logo">
          <Link to="/home">
            <img src={logo} alt="Vaavix Digital" className="logo-image" />
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="menu-icon" onClick={toggleMenu}>
          <i className="fa-solid fa-bars-staggered"></i>
        </div>

      {/* Navigation */}
      <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
        <Link to="/home" className="nav-link">HOME</Link>
        

        {/* Services Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="dropdown-btn">SERVICE ▼</button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <ul>
                <li><Link to="/services/software-development">Software Development</Link></li>
                <li><Link to="/services/cloud-it-solutions">Cloud & IT Solutions</Link></li>
                <li><Link to="/services/digital-marketing">Digital Marketing</Link></li>
                <li><Link to="/services/hosting-domains">Hosting And Domains</Link></li>
                <li><Link to="/services/branding-design">Branding & Design</Link></li>
                <li><Link to="/services/content-creation">Content Creation</Link></li>
                <li><Link to="/services/automation-services">Automation Services</Link></li>
                <li><Link to="/services/online-courses">Online Courses</Link></li>
                <li><Link to="/services/social-media-influencer">Social Media Influencer</Link></li>
                <li><Link to="/services/social-media-manager">Social Media Manager</Link></li>
              </ul>
            </div>
          )}
        </div>

        
        <Link to="/about" className="nav-link">ABOUT</Link>
        <Link to="/contact" className="nav-link">CONTACT US</Link>
      </nav>

      {/* Profile Section */}
      <div className="lets-talk">
        <Link to="/home" className="talk-btn">Lets Talk</Link>
      </div>
    </header>
  );
};

export default Header;