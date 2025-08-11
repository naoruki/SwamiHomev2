import HeroPage1 from "./HeroPage1.jsx";
import HeroPage2 from "./HeroPage2.jsx"; // Ensure this is the correct import path
import HeroPage3 from "./HeroPage3.jsx"; // Ensure this is the correct import path
const HeroCarousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="8000">
          {/* <img src={slide1} className="d-block w-100" alt="Slide 1" /> */}
          <HeroPage1 />
        </div>
        <div className="carousel-item" data-bs-interval="8000">
          {/* <img src={slide1} className="d-block w-100" alt="Slide 2" /> */}
          <HeroPage2 />
        </div>
        <div className="carousel-item" data-bs-interval="8000">
          {/* <img src={slide1} className="d-block w-100" alt="Slide 3" /> */}
          <HeroPage3 />
        </div>

      </div>

    </div>
  );
};

export default HeroCarousel;
