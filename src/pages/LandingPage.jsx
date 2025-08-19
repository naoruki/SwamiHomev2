import VisionSection from "../components/VisionSection.jsx";

import Services from "../components/ServicesSection.jsx";
import Testimonial from "../components/TestimonialSection .jsx";
import HeroCarousel from "../components/HeroPageCarousel.jsx";

const LandingPage = () => {
  return (
    <div>
      {/* <HeroPage /> */}
      <HeroCarousel />
      <div className="container">
        <Services />
        <VisionSection />
        <Testimonial />
      </div>
    </div>
  );
};

export default LandingPage;
