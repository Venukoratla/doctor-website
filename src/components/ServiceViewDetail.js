import React from "react";

import "./index.css";
import { useParams } from "react-router-dom";
import { servicesDetails } from "../Static/static";

const ServiceViewDetail = () => {
  const { id } = useParams();
  console.log(id);

  const dietInfo = servicesDetails.find((el) => el.id === Number(id));

  return (
    <div className="service-view-detail-page-container">
      <div className="service-header">
        <div className="service-title">{dietInfo?.title}</div>
      </div>
      <div className="service-image">
        <img
          src={dietInfo?.image}
          alt={dietInfo?.title}
          className="service-img"
        />
      </div>

      <div className="service-description">
        <p>{dietInfo?.description}</p>
      </div>

      <div className="service-subtitles">
        {dietInfo?.subtitles.map((section, index) => (
          <div
            key={index}
            className={`service-subtitle-section ${
              index % 2 === 0 ? "right" : "left"
            }`}
          >
            <div className="service-subtitle-content">
              <h2>{section.title}</h2>
              <p>
                A diet refers to the types and amounts of food consumed by an
                individual or group, playing a crucial role in maintaining
                health, managing weight, and preventing diseases. Diets can vary
                significantly based on cultural, regional, and personal
                preferences. A balanced diet typically includes a variety of
                nutrients such as carbohydrates, proteins, fats, vitamins, and
                minerals to ensure proper body function. Adopting the right diet
                can lead to improved energy levels, better mental clarity, and
                enhanced overall well-being. Specialized diets may also target
                specific goals, such as weight loss, muscle gain, or managing
                health conditions like diabetes or heart disease.
              </p>
            </div>
            <div className="subtitle-image-container">
              <img
                className="subtitle-image"
                src={dietInfo?.image}
                alt={dietInfo?.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceViewDetail;
