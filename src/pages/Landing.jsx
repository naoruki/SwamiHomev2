// pages/LandingPage.js
import VisionSection from "../components/VisionSection.jsx";
import HeroPage from "../components/HeroPage.jsx";
import Services from "../components/Services.jsx";
import Testimonial from "../components/TestimonialSection .jsx";

const LandingPage = () => {
  return (
    <div>
      <HeroPage />

      <div className="container">
        <Services />
        <VisionSection />

        <Testimonial />
      </div>
    </div>
  );
};

export default LandingPage;
