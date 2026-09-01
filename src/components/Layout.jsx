import { useEffect, useState } from "react";
import NavBar from "./NavBarFullScreen.jsx";
import NavBarMobile from "./NavBarMobile.jsx";
import Footer from "./Footer.jsx";
import FloatingButton from "./FloatingButton.jsx";
import AlertBar from "./AlertBar.jsx";
import { HandHeartIcon } from "@phosphor-icons/react";
import { Outlet } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

const Layout = () => {
  const [latestEvent, setLatestEvent] = useState(null);

  useEffect(() => {
    const fetchLatestEvent = async () => {
      try {
        const res = await fetch(`${API_URL}/events/latest`);
        const data = await res.json();
        if (data && data.title && data.date) {
          setLatestEvent(data);
        }
      } catch (err) {
        console.error("❌ Failed to fetch latest event:", err);
      }
    };
    fetchLatestEvent();
  }, []);

  const message = latestEvent
    ? `🎉 Upcoming Event: ${latestEvent.title} on ${new Date(
        latestEvent.date
      ).toLocaleDateString()}!`
    : null;

  return (
    <>
      {/* 🔔 Dynamic Alert Bar */}
      {message && <AlertBar message={message} link="/events-notices" />}

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
