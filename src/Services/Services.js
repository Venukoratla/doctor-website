import React from "react";
import "./Services.css";
import { services } from "../Static/static";
import ServiceCard from "./ServiceCard";

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
            <ServiceCard data={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
