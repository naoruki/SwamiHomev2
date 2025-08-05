import { useState, useEffect } from "react";
import "../styles/VisionMission.css";
// import { CaretRightIcon,CaretLeftIcon} from "@phosphor-icons/react";

const CustomCarousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel-container ">
      <center><h1>Our Heart & Soul</h1></center>
      <div className="container mission-header"></div>
      {slides.map((slide, index) => (
        <div
          className={`carousel-slide ${index === current ? "active" : ""}`}
          key={index}
        >
          <div className="carousel-content">
            <div className="carousel-text">
              <h2 className="d-flex align-items-center gap-2">
                <span>{slide.icon}</span>
                <span>{slide.heading}</span>
              </h2>
              <p>{slide.text}</p>
            </div>
          </div>
        </div>
      ))}

      {/* <div className="carousel-controls">
        <button
          className="carousel-button"
          onClick={() =>
            setCurrent((current - 1 + slides.length) % slides.length)
          }
        >
          <CaretLeftIcon size={32} weight="bold" color="#E25D9C" />
        </button>
        <button
          className="carousel-button"
          onClick={() => setCurrent((current + 1) % slides.length)}
        >
          <CaretRightIcon size={32} weight="bold" color="#E25D9C" />
        </button>
      </div> */}
      {/* Dots directly below slides */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
