import VisionSection from "../components/VisionSection.jsx";
import Services from "../components/ServicesSection.jsx";
import HeroCarousel from "../components/HeroPageCarousel.jsx";
import EventModal from "../components/EventModal.jsx";
import CurrentEvents from "../components/CurrentEventSection.jsx";

const LandingPage = () => {
  return (
    <div>
      <HeroCarousel />
      <div id="current-events">
        <CurrentEvents />
      </div>
      <div className="container">
        <VisionSection />
        <Services />

        {/* <Testimonial /> */}
      </div>
    </div>
  );
};

export default LandingPage;
