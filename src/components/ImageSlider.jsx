import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SimpleSlider = ({ slides }) => {
  const CustomPrevArrow = ({ onClick }) => (
    <div
      style={{
        position: "absolute",
        left: "10px",
        top: "45%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: 2,
        background: "rgba(0,0,0,0.5)",
        color: "#fff",
        padding: "8px",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <FaArrowLeft size={20} />
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div
      style={{
        position: "absolute",
        right: "10px",
        top: "45%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: 2,
        background: "rgba(0,0,0,0.5)",
        color: "#fff",
        padding: "8px",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
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
