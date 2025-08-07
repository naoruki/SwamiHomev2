import "./styles/App.css";
import "./styles/index.css";
import "./styles/NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import NavBar from "./components/NavBarFullScreen.jsx";
import NavBarMobile from "./components/NavBarMobile.jsx";
import Footer from "./components/Footer.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import FloatingButton from "./components/FloatingButton.jsx";
import { HandHeartIcon} from "@phosphor-icons/react";

function App() {
  return (
    <div>
      <NavBar />
      <NavBarMobile />
      <LandingPage />
      <FloatingButton icon={<HandHeartIcon size={32}/>} label="Support Us" />

      <div className="footer-background">
        <Footer />
      </div>
    </div>
  );
}

export default App;
