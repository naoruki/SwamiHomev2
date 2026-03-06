import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutUsHero from "../components/AboutUsHero";
import AboutUsSection from "../components/AboutUsSection";
import FiveCoreValueSection from "../components/FiveCoreValueSection";
import OurJourney from "../components/JourneySection";
import VisionSection from "../components/VisionSection.jsx";
import OurMissionCards from "../components/OurMissionForAboutUs.jsx";
import VisionAboutUsSection from "../components/VisionAboutusSection.jsx";
const AboutUsPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait for DOM to render
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  }, [hash]);

  return (
    <div>
      <AboutUsHero />
      
      <AboutUsSection />
      <VisionAboutUsSection />
      {/* <VisionSection/> */}
      
      <FiveCoreValueSection />

      <OurJourney />
    </div>
  );
};

export default AboutUsPage;
