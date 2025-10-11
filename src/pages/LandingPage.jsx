import VisionSection from "../components/VisionSection.jsx";
import Services from "../components/ServicesSection.jsx";
import HeroCarousel from "../components/HeroPageCarousel.jsx";
import EventModal from "../components/EventModal.jsx";

const LandingPage = () => {
  return (
    <div>
      <HeroCarousel />
      <EventModal /> {/* ✅ Modal appears on page load */}
      <div className="container">
        <Services />
        <VisionSection />
        {/* <Testimonial /> */}
      </div>
    </div>
  );
};

export default LandingPage;
