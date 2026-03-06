import { useState } from "react";
import "../styles/VisionMission.css"; // Use a separate CSS file for uniqueness

const OurMissionCards = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="custom-card-container">
      <div className="custom-card-grid">
        {slides.map((slide, index) => (
          <div
            className={`custom-card ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => setActiveIndex(index)}
          >
            <div className="custom-card-content">
              <h2 className="d-flex align-items-center gap-2">
                <span>{slide.icon}</span>
                <span>{slide.heading}</span>
              </h2>
              <p className="slide-text">{slide.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurMissionCards;
