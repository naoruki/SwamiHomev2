import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutUsHero from "../components/AboutUsHero";
import AboutUsSection from "../components/AboutUsSection";
import FiveCoreValueSection from "../components/FiveCoreValueSection";
import OurJourney from "../components/JourneySection";

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
      <FiveCoreValueSection />
      <OurJourney />
    </div>
  );
};

export default AboutUsPage;
