// SimpleSlider.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="text-center">
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="img-fluid"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
          <p className="mt-2">{slide.caption}</p>
        </div>
      ))}
    </Slider>
  );
};

export default SimpleSlider;
