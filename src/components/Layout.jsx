import NavBar from "./NavBarFullScreen.jsx";
import NavBarMobile from "./NavBarMobile.jsx";
import Footer from "./Footer.jsx";
import FloatingButton from "./FloatingButton.jsx";
import AlertBar from "./AlertBar.jsx";
import { HandHeartIcon } from "@phosphor-icons/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* 🔔 Alert Bar (always visible above nav) */}
      {/* <AlertBar
        message="🎉 Upcoming Event: Deepavali Celebration on 10 November 2025!"
        link="/events"
      /> */}

      <NavBar />
      <NavBarMobile />
      <Outlet />

      <FloatingButton
        icon={<HandHeartIcon size={30} />}
        label="Support Us"
        to="/donate"
      />

      <div className="footer-background">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
