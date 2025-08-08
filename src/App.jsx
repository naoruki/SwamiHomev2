// src/App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import DonationPage from "./pages/DonationPage.jsx"; // make sure this exists
import VolunteerPage from "./pages/VolunteerPage.jsx"
import ScrollToTop from "./components/ScrollToTop.jsx";
function App() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="donate" element={<DonationPage />} />
          <Route path="Volunteer" element={<VolunteerPage />} />
          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
