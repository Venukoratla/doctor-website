// Import necessary libraries
import React from "react";
import "./Footer.css"; // Import a separate CSS file for styling

const Footer = () => {
  return (
    <div className="footer-container">
      {" "}
      {/* Main footer container */}
      <div className="footer-content">
        {" "}
        {/* Content container */}
        <div className="footer-section footer-about">
          <img
            src="/logo.png" // Replace with your logo path
            alt="Shelter Logo"
            className="footer-logo"
          />
          <p>
            Homeless animal shelter
            <br />
            The budgetary unit of the Capital City of Warsaw
          </p>
          <div className="footer-socials">
            <span className="social-icon">F</span>
            <span className="social-icon">I</span>
            <span className="social-icon">Y</span>
          </div>
        </div>
        <div className="footer-section footer-links">
          <h4>ANIMALS</h4>
          <ul>
            <li>When your pet is missing</li>
            <li>Recently found</li>
            <li>How to adopt?</li>
            <li>Pets for adoption</li>
            <li>Material gifts</li>
            <li>Help with walks</li>
            <li>Volunteer activities</li>
          </ul>
        </div>
        <div className="footer-section footer-info">
          <h4>ANIMALS</h4>
          <ul>
            <li>General information</li>
            <li>About the shelter</li>
            <li>Statistic data</li>
            <li>Job</li>
            <li>Tenders</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-section footer-contact">
          <h4>CONTACT</h4>
          <p>Warsaw, 57 Street, Poland</p>
          <p>+01 234 567 89</p>
          <p>contact@example.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2020 Copyright: MDBootstrap.com</p>
      </div>
    </div>
  );
};

export default Footer;
