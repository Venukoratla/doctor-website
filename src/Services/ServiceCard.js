import React from "react";

const ServiceCard = () => {
  return (
    <div className="service-page-card">
      <img
        src="/pediatrics.jpg"
        alt="Pediatrics"
        className="service-page-card-image"
      />
      <div className="service-page-card-content">
        <h2 className="service-page-card-title">Pediatrics</h2>
        <p className="service-page-card-description">
          Comprehensive care for children, from infancy through adolescence,
          ensuring their health and development.
        </p>
        <a href="/pediatrics" className="service-page-card-link">
          View Service →
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
