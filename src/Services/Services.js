import React from "react";
import "./Services.css";
import { services } from "../Static/static";

const Services = () => {
  return (
    <div id="services" className="service-page-main-container">
      <div className="service-page-container">
        <div className="service-page-content">
          <p className="service-page-subtitle">Our Services</p>
          <h1 className="service-page-title">
            Expert Medical Services Tailored To You
          </h1>
          <p className="service-page-description">
            At NextMD, we offer a wide range of healthcare services designed to
            meet the unique needs of each patient. From preventive care to
            specialized treatments, our team of medical experts is here to
            provide the highest quality care in a compassionate and professional
            environment.
          </p>
          <button className="service-page-btn">View All Services</button>
        </div>
        <div className="service-page-cards">
          {services.map((el) => (
            <div key={el.id} className="service-page-card">
              <img
                src={el.image}
                alt="Neurology"
                className="service-page-card-image"
              />
              <div className="service-page-card-content">
                <h2 className="service-page-card-title">{el.title}</h2>
                <p className="service-page-card-description">
                  {el.description}
                </p>
                <a href="/neurology" className="service-page-card-link">
                  View Service →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
