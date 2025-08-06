import VisionSection from "../components/VisionSection.jsx";

import Services from "../components/ServicesSection.jsx";
import Testimonial from "../components/TestimonialSection .jsx";
import HeroCarousel from "../components/HeroPageCarousel.jsx";
import OurPartners from "../components/OurPartnerSection.jsx";

const LandingPage = () => {
  return (
    <div>
      {/* <HeroPage /> */}
      <HeroCarousel />
      <div className="container">
        <Services />
        <VisionSection />

        <OurPartners />
        <Testimonial />
      </div>
    </div>
  );
};

export default LandingPage;
