// pages/LandingPage.js
import VisionSection from "../components/VisionSection.jsx";
import HeroPage from "../components/HeroPage.jsx";

const LandingPage = () => {
  return (
    <div>
      <HeroPage />

      <div className="container">
        <VisionSection />
      </div>
      
    </div>
    
  );
};

export default LandingPage;
