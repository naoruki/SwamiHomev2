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
import TenderPage from "./pages/TenderPage.jsx";
import ResidentialServicesPage from "./pages/ResidentialServicePage.jsx";
import DayCareServicePage from "./pages/DaycareServicePage.jsx";
import HomeBasePage from "./pages/HomebasedServicePage.jsx";
import TherapyPage from "./pages/TherapyPage.jsx";
import AnnualReportPage from "./pages/AnnualReportPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import LoadingOverlay from "./components/LoadingOverlay.jsx";
import NameCard from "./pages/NameCard.jsx"; // ✅ import NameCard
import CurrentEvents from "./pages/CurrentEventsPage.jsx";
import PastEventsPage from "./pages/PastEvents.jsx";
import Gallery from "./pages/GalleryPage.jsx";
import ActivtiesPage from "./pages/ActivitiesPage.jsx";
import PublicationPage from "./pages/PublicationPage.jsx";
import DeliveryVolunteerPage from "./pages/MealDeliveryVolunteerPage.jsx";
import ComReportPage from "./pages/ComResourceNewsletterPage.jsx";
import "./config/appInsights";
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
        <Route path="/vcard/:id" element={<NameCard />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="donate" element={<DonationPage />} />
          <Route path="volunteer" element={<VolunteerPage />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="contact-us" element={<ContactUsPage />} />
          <Route path="career" element={<CareerPage />} />
          <Route path="meal-delivery-volunteers" element={<DeliveryVolunteerPage />} />
          <Route path="organization" element={<Organization />} />
          <Route path="management-committee" element={<ManageCom />} />
          <Route
            path="residential-services"
            element={<ResidentialServicesPage />}
          />
          <Route path="daycare-services" element={<DayCareServicePage />} />
          <Route path="home-based-services" element={<HomeBasePage />} />
          <Route path="Privacy-Policy" element={<PDPA />} />
          <Route path="founder" element={<Founder />} />
          <Route path="therapy" element={<TherapyPage />} />
          <Route path="annual-report" element={<AnnualReportPage />} />
          <Route path="tender" element={<TenderPage />} />
          <Route path="events" element={<CurrentEvents />} />
          <Route path="past-events" element={<PastEventsPage />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path ="activities" element={<ActivtiesPage />} />
          <Route path ="publications" element={<PublicationPage />} />
          <Route path="community-resources" element={<ComReportPage />} />
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

    // // Block inspect element shortcuts
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
