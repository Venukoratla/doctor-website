import React from "react";
import "./Home.css";
import doctor from "../images/doctor-1.png";
import Services from "../Services/Services";
import About from "../AboutUs/About";
import Blogs from "../Blogs/Blogs";
import Contactus from "../Contactus/Contactus";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="home-page-main-container" id="home">
        <div className="home-page-container">
          <div className="home-page-content">
            <h1 className="home-page-title">
              Compassionate Healthcare, <br /> Advanced Solutions
            </h1>
            <p className="home-page-description">
              At NextMD we believe in offering patient-centric care that
              combines advanced medical technologies with the
            </p>
            <button className="home-page-appointment-btn">
              Make Appointment
            </button>
            <div className="home-page-stats">
              <div className="home-page-stat-item">
                <h2 className="home-page-stat-value">90%</h2>
                <p className="home-page-stat-label">Patient satisfaction</p>
              </div>
              <div className="home-page-stat-item">
                <h2 className="home-page-stat-value">100k+</h2>
                <p className="home-page-stat-label">Patient on platform</p>
              </div>
              <div className="home-page-stat-item">
                <h2 className="home-page-stat-value">1,5k+</h2>
                <p className="home-page-stat-label">Hospital cooperate</p>
              </div>
            </div>
          </div>
          <div className="home-page-doctor-image">
            <img src={doctor} alt="Doctor" className="home-page-image" />
          </div>
        </div>
      </div>
      <Services />
      <About />
      <Blogs />
      <Contactus />
      <Footer />
    </>
  );
};

export default Home;
