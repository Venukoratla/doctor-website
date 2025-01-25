import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { IoCloseSharp } from "react-icons/io5";

import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  //   const [scrolling, setScrolling] = useState(false);

  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       setScrolling(true);
  //     } else {
  //       setScrolling(false);
  //     }
  //   };

  //   useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <div className={`navbar-container`}>
      <nav className={isActive ? "active nav-container" : "nav-container"}>
        <div className="navbar-logo-container">
          <a href="#home" className="logo">
            Doctor
          </a>
        </div>
        <div className="menu-icons" onClick={toggleMenu}>
          {isActive ? <IoCloseSharp /> : <GiHamburgerMenu />}
        </div>
        <div className="navbar-menu-container">
          <ul className="nav-list">
            <li className="nav-list-item">
              <a href="#home" className="nav-link-item">
                Home
              </a>
            </li>
            <li className="nav-list-item">
              <a href="#services" className="nav-link-item">
                Services
              </a>
            </li>

            {/* <li className="nav-list-item">
              <a href="#services" className="nav-link-item">
                Services
              </a>
            </li> */}
            <li className="nav-list-item">
              <a href="#blogs" className="nav-link-item">
                Blog
              </a>
            </li>
            <li className="nav-list-item">
              <a href="#contactus" className="nav-link-item">
                Contact Us{" "}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
