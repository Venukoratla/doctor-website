import React from "react";
import "./Home.css";
import doctor from "../images/doctor-1.png";
import Services from "../Services/Services";
import About from "../AboutUs/About";
import Contactus from "../Contactus/Contactus";
import Footer from "../Footer/Footer";
import Blogs from "../Blogs/Blogs";

const Home = () => {
  return (
    <>
      <div className="home-page-container" id="home">
        <div className="home-page-content">
          <h1 className="home-page-title">
            Hi, There! <br /> I’m Ashwitha Manikyarao.
          </h1>
          <p className="home-page-description">
            "Change begins at home Change spurts in the heart Change the way you
            think Be the change, you want to bring.""
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

      <Services />
      {/* <About /> */}
      <Blogs />
      <Contactus />
      <Footer />
    </>
  );
};

export default Home;
