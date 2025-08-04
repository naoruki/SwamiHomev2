import  { useState, useEffect} from "react";
import "../styles/VisionMission.css";

const CustomCarousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel-container d-none d-lg-flex">
      <div className="container mission-header">
      </div>
      {slides.map((slide, index) => (
        <div
          className={`carousel-slide ${index === current ? "active" : ""}`}
          key={index}
        >
          <div className="carousel-content">
            <div className="carousel-icon">{slide.icon}</div>

            <div className="carousel-text">
              <h2>{slide.heading}</h2>
              <p>{slide.text}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="carousel-controls">
        <button
          onClick={() =>
            setCurrent((current - 1 + slides.length) % slides.length)
          }
        >
          ‹
        </button>
        <button onClick={() => setCurrent((current + 1) % slides.length)}>
          ›
        </button>
      </div>
    </div>
  );
};

export default CustomCarousel;
