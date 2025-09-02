import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Offcanvas,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

function NavBarMobile() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);
  const handleNavClick = () => handleClose();

  const location = useLocation();

  // Track sub-item selection for About Us
  const [activeAboutLink, setActiveAboutLink] = useState("");

  useEffect(() => {
    // Set initial active link based on URL
    if (location.pathname === "/about-us" && location.hash === "#our-journey") {
      setActiveAboutLink("about-us/#our-journey");
    } else if (location.pathname === "/about-us") {
      setActiveAboutLink("about-us");
    } else {
      setActiveAboutLink("");
    }

    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.getElementById("mobile-navbar");
      if (window.scrollY > 0) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname, location.hash]);

  const [showResidentialSubmenu, setShowResidentialSubmenu] = useState(false);
  const [showDaycareSubmenu, setShowDaycareSubmenu] = useState(false);

  const toggleResidentialSubmenu = (e) => {
    e.preventDefault();
    setShowResidentialSubmenu((prev) => !prev);
  };
  const toggleDaycareSubmenu = (e) => {
    e.preventDefault();
    setShowDaycareSubmenu((prev) => !prev);
  };

  return (
    <Navbar
      expand={false}
      className="d-lg-none fixed-top mobile-navbar"
      id="mobile-navbar"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "50px", marginRight: "10px" }}
          />
          <span className="brand-text-small fw-bold text-nowrap d-none d-sm-inline">
            SUNSHINE WELFARE ACTION MISSION
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
        <Navbar.Offcanvas
          show={showOffcanvas}
          onHide={handleClose}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Link
              to="/"
              onClick={handleNavClick}
              className="d-flex align-items-center text-decoration-none"
            >
              <img
                src={Logo}
                alt="Logo"
                style={{ width: "70px", marginRight: "10px" }}
              />
              <span className="brand-text-small fw-bold text-wrap text-dark">
                SUNSHINE WELFARE ACTION MISSION
              </span>
            </Link>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="flex-column">
              {/* About Us Dropdown */}
              <NavDropdown title="About Us" id="about-dropdown">
                <NavDropdown.Item
                  as={NavLink}
                  to="/about-us"
                  onClick={() => {
                    handleNavClick();
                    setActiveAboutLink("about-us"); // highlight About Us
                  }}
                  className={activeAboutLink === "about-us" ? "active" : ""}
                >
                  About Us
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={HashLink}
                  to="/about-us/#our-journey"
                  onClick={() => {
                    handleNavClick();
                    setActiveAboutLink("our-journey"); // highlight Our Journey
                  }}
                  className={activeAboutLink === "our-journey" ? "active" : ""}
                >
                  Our Journey
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={NavLink}
                  to="/founder"
                  onClick={handleNavClick}
                  className={location.pathname === "/founder" ? "active" : ""}
                >
                  Our Founder
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={NavLink}
                  to="/organization"
                  onClick={handleNavClick}
                  className={
                    location.pathname === "/organization" ? "active" : ""
                  }
                >
                  Organization Structure
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={NavLink}
                  to="/management-committee"
                  onClick={handleNavClick}
                  className={
                    location.pathname === "/management-committee"
                      ? "active"
                      : ""
                  }
                >
                  Management Committee
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={NavLink}
                  to="/annual-report"
                  onClick={handleNavClick}
                  className={
                    location.pathname === "/annual-report" ? "active" : ""
                  }
                >
                  Annual Report
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={NavLink}
                  to="/pdpa"
                  onClick={handleNavClick}
                  className={location.pathname === "/pdpa" ? "active" : ""}
                >
                  PDPA
                </NavDropdown.Item>
              </NavDropdown>

              {/* Services Dropdown */}
              <NavDropdown title="Services" id="services-dropdown">
                {/* Residential Services submenu trigger */}
                <div
                  className="dropdown-item d-flex justify-content-between align-items-center"
                  onClick={toggleResidentialSubmenu}
                  style={{ cursor: "pointer" }}
                >
                  Residential Services
                  <span>{showResidentialSubmenu ? "▾" : "▸"}</span>
                </div>

                <div
                  className={`submenu ps-3 transition-submenu ${
                    showResidentialSubmenu ||
                    location.pathname.startsWith("/residential-services")
                      ? "open"
                      : ""
                  }`}
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/residential-services/#residential-care"
                    onClick={() => {
                      handleNavClick();
                      setShowResidentialSubmenu(false);
                    }}
                    className={
                      location.hash === "#residential-care" ? "active" : ""
                    }
                  >
                    Residential Care
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/residential-services/#dementia-care"
                    onClick={() => {
                      handleNavClick();
                      setShowResidentialSubmenu(false);
                    }}
                    className={
                      location.hash === "#dementia-care" ? "active" : ""
                    }
                  >
                    Dementia Care
                  </NavDropdown.Item>
                </div>

                {/* Daycare Services submenu trigger */}
                <div
                  className="dropdown-item d-flex justify-content-between align-items-center"
                  onClick={toggleDaycareSubmenu}
                  style={{ cursor: "pointer" }}
                >
                  Day Care Services
                  <span>{showDaycareSubmenu ? "▾" : "▸"}</span>
                </div>

                <div
                  className={`submenu ps-3 transition-submenu ${
                    showDaycareSubmenu ||
                    location.pathname.startsWith("/daycare-services")
                      ? "open"
                      : ""
                  }`}
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/daycare-services/#Dementia-Day-Centre"
                    onClick={() => {
                      handleNavClick();
                      setShowDaycareSubmenu(false);
                    }}
                    className={
                      location.hash === "#Dementia-Day-Centre" ? "active" : ""
                    }
                  >
                    Dementia Day Centre
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/daycare-services/#Day-Rehabilitation-Centre"
                    onClick={() => {
                      handleNavClick();
                      setShowDaycareSubmenu(false);
                    }}
                    className={
                      location.hash === "#Day-Rehabilitation-Centre"
                        ? "active"
                        : ""
                    }
                  >
                    Day Rehabilitation Centre
                  </NavDropdown.Item>
                </div>

                <NavDropdown.Item
                  as={Link}
                  to="/home-based-services"
                  onClick={handleNavClick}
                  className={
                    location.pathname === "/home-based-services" ? "active" : ""
                  }
                >
                  Home-Based Services
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/therapy"
                  onClick={handleNavClick}
                  className={location.pathname === "/therapy" ? "active" : ""}
                >
                  Therapy Services
                </NavDropdown.Item>
              </NavDropdown>

              {/* Community Life Dropdown */}
              <NavDropdown title="Community Life" id="community-dropdown">
                <NavDropdown.Item
                  as={Link}
                  to="/activities"
                  onClick={handleNavClick}
                  className={
                    location.pathname === "/activities" ? "active" : ""
                  }
                >
                  Activities & Programs
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/facilities"
                  onClick={handleNavClick}
                  className={
                    location.pathname === "/facilities" ? "active" : ""
                  }
                >
                  Facilities
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/visual-tour"
                  onClick={handleNavClick}
                  className={
                    location.pathname === "/visual-tour" ? "active" : ""
                  }
                >
                  Visual Tour
                </NavDropdown.Item>
              </NavDropdown>

              {/* Media Dropdown */}
              <NavDropdown title="Media" id="media-dropdown">
                <NavDropdown.Item
                  as={Link}
                  to="/news"
                  onClick={handleNavClick}
                  className={location.pathname === "/news" ? "active" : ""}
                >
                  What's Happening
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/events"
                  onClick={handleNavClick}
                  className={location.pathname === "/events" ? "active" : ""}
                >
                  Past Event Highlights
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/gallery"
                  onClick={handleNavClick}
                  className={location.pathname === "/gallery" ? "active" : ""}
                >
                  Photo Gallery
                </NavDropdown.Item>
              </NavDropdown>

              {/* Get Involved Dropdown */}
              <NavDropdown title="Get Involved" id="get-involved-dropdown">
                <NavDropdown.Item
                  as={Link}
                  to="/career"
                  onClick={handleNavClick}
                  className={location.pathname === "/career" ? "active" : ""}
                >
                  Careers
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/donate"
                  onClick={handleNavClick}
                  className={location.pathname === "/donate" ? "active" : ""}
                >
                  Donate
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/volunteer"
                  onClick={handleNavClick}
                  className={location.pathname === "/volunteer" ? "active" : ""}
                >
                  Volunteer
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/tender"
                  onClick={handleNavClick}
                  className={location.pathname === "/tender" ? "active" : ""}
                >
                  Tender
                </NavDropdown.Item>
              </NavDropdown>

              {/* Contact */}
              <Nav.Link
                as={NavLink}
                to="/contact-us"
                onClick={handleNavClick}
                className={location.pathname === "/contact-us" ? "active" : ""}
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBarMobile;
