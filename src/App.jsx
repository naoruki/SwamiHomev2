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
  useEffect(() => {
    if (!loading) {
      window.scrollTo(0, 0);
    }
  }, [loading]);

  return (
    <>
      {loading && <LoadingOverlay />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="donate" element={<DonationPage />} />
          <Route path="Volunteer" element={<VolunteerPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
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
