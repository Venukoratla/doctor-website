import React from "react";
import "./Services.css";
import { services } from "../Static/static";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="service-page-container" id="services">
      <div className="service-page-content">
        <p className="service-page-subtitle">Our Services</p>
      </div>
      <div className="service-page-cards">
        <ServiceCard data={services[0]} />
        <ServiceCard data={services[1]} />
      </div>
    </div>
  );
};

export default Services;
