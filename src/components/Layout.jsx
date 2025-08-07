// src/components/Layout.jsx
import NavBar from "./NavBarFullScreen.jsx";
import NavBarMobile from "./NavBarMobile.jsx";
import Footer from "./Footer.jsx";
import FloatingButton from "./FloatingButton.jsx";
import { HandHeartIcon } from "@phosphor-icons/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />
      <NavBarMobile />
      <Outlet /> {/* This renders the current route's page */}
      <FloatingButton icon={<HandHeartIcon size={32} />} label="Support Us" to="/donate" />
      <div className="footer-background">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
