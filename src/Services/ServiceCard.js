import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ data }) => {
  return (
    <div key={data.id} className="service-page-card">
      <img
        src={data.image}
        alt={data.title}
        className="service-page-card-image"
      />
      <div className="service-page-card-content">
        <h2 className="service-page-card-title">{data.title}</h2>
        <p className="service-page-card-description">{data.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
