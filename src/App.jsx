

// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import DonationPage from "./pages/DonationPage.jsx"; // make sure this exists

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="donate" element={<DonationPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
