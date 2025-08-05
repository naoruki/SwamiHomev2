// pages/LandingPage.js
import VisionSection from "../components/VisionSection.jsx";
import HeroPage from "../components/HeroPage1.jsx";
import Services from "../components/Services.jsx";
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
