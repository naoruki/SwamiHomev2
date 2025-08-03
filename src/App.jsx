import "./styles/App.css";
import "./styles/index.css";
import "./styles/NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import NavBar from "./components/NavBarFullScreen.jsx";
import NavBarMobile from "./components/NavBarMobile.jsx";
import Footer from "./components/Footer.jsx";
import LandingPage from "./pages/Landing.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <NavBarMobile />
      <LandingPage />

      <div className="footer-background">
        <Footer />
      </div>
    </div>
  );
}

export default App;
