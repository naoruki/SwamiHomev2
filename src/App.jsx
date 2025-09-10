import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
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
import ScrollToTop from "./components/ScrollToTop.jsx";
import LoadingOverlay from "./components/LoadingOverlay.jsx";

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  // Start loading on route change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 700); // simulate loading
    return () => clearTimeout(timer);
  }, [location]);

  // Scroll to top after loading ends
  // useEffect(() => {
  //   if (!loading) {
  //     window.scrollTo(0, 0);
  //   }
  // }, [loading]);

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
          <Route
            path="residential-services"
            element={<ResidentialServicesPage />}
          />
          <Route path="daycare-services" element={<DayCareServicePage />} />
          <Route path="home-based-services" element={<HomeBasePage />} />
          <Route path="PDPA" element={<PDPA />} />
          <Route path="founder" element={<Founder />} />
          <Route path="therapy" element={<TherapyPage />} />
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
