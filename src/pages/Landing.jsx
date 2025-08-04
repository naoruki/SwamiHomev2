// pages/LandingPage.js
import VisionSection from "../components/VisionSection.jsx";
import HeroPage from "../components/HeroPage.jsx";
import Services from "../components/Services.jsx";

const LandingPage = () => {
  return (
    <div>
      <HeroPage />

      <div className="container">
        <VisionSection />
        <Services/>
      </div>
      
    </div>
    
  );
};

export default LandingPage;
