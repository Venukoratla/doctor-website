// Import necessary libraries
import React from "react";
import "./Footer.css"; // Import a separate CSS file for styling
import logo from "../images/temp_logo.png";

import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

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
            src={logo} // Replace with your logo path
            alt="Company Logo"
            className="footer-logo"
          />
          <p>
            Homeless animal shelter
            <br />
            The budgetary unit of the Capital City of Warsaw
          </p>
        </div>
        <div className="footer-section footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#services" className="nav-link-item">
                Services
              </a>
            </li>
            <li>
              <a href="#blogs" className="nav-link-item">
                Blogs
              </a>
            </li>
            <li>
              <a href="#contactus" className="nav-link-item">
                Contact us
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section footer-info">
          <h4 style={{ textAlign: "center" }}>Follow Us</h4>
          <ul className="footer-socials">
            <FaFacebook size={32} className="footer-facebook" />
            <FaInstagram size={32} className="footer-instagram" />
            <FaWhatsapp size={32} className="footer-whatsapp" />
            <FaYoutube size={32} className="footer-youtube" />
            {/* <FaLinkedin size={32} className="footer-linkedin" /> */}
          </ul>
        </div>
        <div className="footer-section footer-contact">
          <h4>Address</h4>
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
