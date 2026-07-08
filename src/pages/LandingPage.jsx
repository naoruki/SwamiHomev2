import VisionSection from "../components/VisionSection.jsx";
import Services from "../components/ServicesSection.jsx";
import HeroCarousel from "../components/HeroPageCarousel.jsx";
import EventModal from "../components/EventModal.jsx";
import CurrentEvents from "../components/CurrentEventSection.jsx";
import DonationSection from "../components/DonationSection.jsx";
import FacebookFeed from "../components/FacebookFeed";
import FacebookUpdates from "../components/FacebookUpdates";


const LandingPage = () => {
  return (
    <div>
      <HeroCarousel />
      <div id="current-events">
        {/* <CurrentEvents /> */}
      </div>
      <div className="">
        {/* <VisionSection /> */}
        <Services />
        {/* <FacebookFeed /> */}
        <FacebookUpdates />

        {/* <Testimonial /> */}
        <DonationSection />
      </div>
    </div>
  );
};

export default LandingPage;
