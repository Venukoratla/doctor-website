import React from "react";
import "./Footer.css";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-logo-section">
        <h1 className="footer-logo">NEXTMD</h1>
        <p className="footer-description">
          Heart health is crucial for overall well-being. Learn how to keep your
          heart healthy with these simple lifestyle changes, expert tips, and
          the latest medical advancements.
        </p>
      </div>

      <div className="footer-info-section">
        <div className="footer-contact">
          <p className="footer-address">
            121, King Street Melbound, 3000, Australia
          </p>
          <p className="footer-email">hello@example.com</p>
          <p className="footer-phone">+1 234 567 8900</p>
        </div>

        <div className="footer-links">
          <ul>
            <li>About Us</li>
            <li>Services</li>

            <li>Blogs</li>
          </ul>
          <ul>
            <li>Contact Us</li>

            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
          <div className="footer-social-media">
            <h3 className="footer-social-title">Follow Us</h3>
            <div className="footer-social-ul">
              <a className="footer-facebook" href="https://facebook.com">
                <FaFacebook size={27} />
              </a>

              <a href="https://twitter.com">
                <FaInstagram size={27} />
              </a>

              <a href="https://instagram.com">
                <FaTwitter size={27} />
              </a>

              <a href="https://linkedin.com">
                <FaLinkedin size={27} />
              </a>

              <a href="https://linkedin.com">
                <FaYoutube size={27} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
