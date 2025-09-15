import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./components/Layout.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import DonationPage from "./pages/DonationPage.jsx";
import VolunteerPage from "./pages/VolunteerPage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import ContactUsPage from "./pages/ContactUs.jsx";
import CareerPage from "./pages/CareerPage.jsx";
import Organization from "./pages/OrganizationPage.jsx";
import Founder from "./pages/FounderPage.jsx";
import ManageCom from "./pages/ManagementCommittee.jsx";
import PDPA from "./pages/PDPApage.jsx";
import NotFound from "./pages/404.jsx";
import ResidentialServicesPage from "./pages/ResidentialServicePage.jsx";
import DayCareServicePage from "./pages/DaycareServicePage.jsx";
import HomeBasePage from "./pages/HomebasedServicePage.jsx";
import TherapyPage from "./pages/TherapyPage.jsx";
import AnnualReportPage from "./pages/AnnualReportPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import LoadingOverlay from "./components/LoadingOverlay.jsx";

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <LoadingOverlay />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="donate" element={<DonationPage />} />
          <Route path="volunteer" element={<VolunteerPage />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="contact-us" element={<ContactUsPage />} />
          <Route path="career" element={<CareerPage />} />
          <Route path="organization" element={<Organization />} />
          <Route path="management-committee" element={<ManageCom />} />
          <Route path="residential-services" element={<ResidentialServicesPage />} />
          <Route path="daycare-services" element={<DayCareServicePage />} />
          <Route path="home-based-services" element={<HomeBasePage />} />
          <Route path="PDPA" element={<PDPA />} />
          <Route path="founder" element={<Founder />} />
          <Route path="therapy" element={<TherapyPage />} />
          <Route path="annual-report" element={<AnnualReportPage />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

function App() {
  useEffect(() => {
    // Block right-click
    document.addEventListener("contextmenu", (e) => e.preventDefault());

    // Block inspect element shortcuts
    const handleKeyDown = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", (e) => e.preventDefault());
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
