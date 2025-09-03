import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Offcanvas,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function NavBarMobile() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);
  const handleNavClick = () => handleClose();

  const location = useLocation();
  const navigate = useNavigate();

  const [activeLink, setActiveLink] = useState("");

  const [showResidentialSubmenu, setShowResidentialSubmenu] = useState(false);
  const [showDaycareSubmenu, setShowDaycareSubmenu] = useState(false);
  const [showHomeBasedSubmenu, setShowHomeBasedSubmenu] = useState(false);
  const [showTherapySubmenu, setShowTherapySubmenu] = useState(false);
  const toggleResidentialSubmenu = (e) => {
    e.preventDefault();
    setShowResidentialSubmenu((prev) => !prev);
  };
  const toggleDaycareSubmenu = (e) => {
    e.preventDefault();
    setShowDaycareSubmenu((prev) => !prev);
  };
  const toggleHomeBasedSubmenu = (e) => {
    e.preventDefault();
    setShowHomeBasedSubmenu((prev) => !prev);
  };
  const toggleTherapySubmenu = (e) => {
    e.preventDefault();
    setShowTherapySubmenu((prev) => !prev);
  };

  useEffect(() => {
    // Set active link
    if (location.pathname + location.hash === "/about-us#our-journey") {
      setActiveLink("/about-us#our-journey");
    } else if (location.pathname === "/about-us") {
      setActiveLink("/about-us");
    } else {
      setActiveLink(location.pathname);
    }

    // Auto-close submenus if location is not part of them
    if (!location.pathname.startsWith("/residential-services")) {
      setShowResidentialSubmenu(false);
    } else {
      setShowResidentialSubmenu(true); // open if inside
    }

    if (!location.pathname.startsWith("/daycare-services")) {
      setShowDaycareSubmenu(false);
    } else {
      setShowDaycareSubmenu(true); // open if inside
    }

    if (!location.pathname.startsWith("/daycare-services")) {
      setShowDaycareSubmenu(false);
    } else {
      setShowDaycareSubmenu(true); // open if inside
    }

    if (!location.pathname.startsWith("/home-based-services")) {
      setShowHomeBasedSubmenu(false);
    } else {
      setShowHomeBasedSubmenu(true); // open if inside
    }

    if (!location.pathname.startsWith("/therapy-services")) {
      setShowTherapySubmenu(false);
    } else {
      setShowTherapySubmenu(true); // open if inside
    }
    // Auto-open if already inside
    setShowResidentialSubmenu(
      location.pathname.startsWith("/residential-services")
    );
    setShowDaycareSubmenu(location.pathname.startsWith("/daycare-services"));
    setShowHomeBasedSubmenu(
      location.pathname.startsWith("/home-based-services")
    );
    setShowTherapySubmenu(location.pathname.startsWith("/therapy"));
    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.getElementById("mobile-navbar");
      if (window.scrollY > 0) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname, location.hash]);

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
              <NavDropdown
                title="About Us"
                id="about-dropdown"
                className={activeLink.startsWith("/about-us") ? "active" : ""}
              >
                <NavDropdown.Item
                  as="button"
                  onClick={() => {
                    handleNavClick();
                    navigate("/about-us");
                    setActiveLink("/about-us");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={activeLink === "/about-us" ? "active" : ""}
                >
                  About Us
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={HashLink}
                  smooth
                  to="/about-us#our-journey"
                  onClick={() => {
                    handleNavClick();
                    setActiveLink("/about-us#our-journey");
                  }}
                  className={
                    activeLink === "/about-us#our-journey" ? "active" : ""
                  }
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
                    showResidentialSubmenu ? "open" : ""
                  }`}
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/residential-services/#residential-care"
                    onClick={handleNavClick}
                    className={
                      location.hash === "#residential-care" ? "active" : ""
                    }
                  >
                    Residential Care
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/residential-services/#dementia-care"
                    onClick={handleNavClick}
                    className={
                      location.hash === "#dementia-care" ? "active" : ""
                    }
                  >
                    Dementia Care
                  </NavDropdown.Item>
                </div>

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
                    showDaycareSubmenu ? "open" : ""
                  }`}
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/daycare-services/#Dementia-Day-Centre"
                    onClick={handleNavClick}
                    className={
                      location.hash === "#Dementia-Day-Centre" ? "active" : ""
                    }
                  >
                    Dementia Day Centre
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/daycare-services/#Day-Rehabilitation-Centre"
                    onClick={handleNavClick}
                    className={
                      location.hash === "#Day-Rehabilitation-Centre"
                        ? "active"
                        : ""
                    }
                  >
                    Day Rehabilitation Centre
                  </NavDropdown.Item>
                </div>

                {/* Home-Based Services */}
                <div
                  className="dropdown-item d-flex justify-content-between align-items-center"
                  onClick={toggleHomeBasedSubmenu}
                  style={{ cursor: "pointer" }}
                >
                  Home-Based Services{" "}
                  <span>{showHomeBasedSubmenu ? "▾" : "▸"}</span>
                </div>
                <div
                  className={`submenu ps-3 transition-submenu ${
                    showHomeBasedSubmenu ? "open" : ""
                  }`}
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/home-based-services/#nursing"
                    onClick={handleNavClick}
                    className={location.hash === "#nursing" ? "active" : ""}
                  >
                    Home Medical & Home Nursing Services
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/home-based-services/#Home-Help-Services"
                    onClick={handleNavClick}
                    className={location.hash === "#Home-Help-Services" ? "active" : ""}
                  >
                    Home Help Services
                  </NavDropdown.Item>
                </div>
                {/* Therapy Services */}
                <div
                  className="dropdown-item d-flex justify-content-between align-items-center"
                  onClick={toggleTherapySubmenu}
                  style={{ cursor: "pointer" }}
                >
                  Therapy Services <span>{showTherapySubmenu ? "▾" : "▸"}</span>
                </div>
                <div
                  className={`submenu ps-3 transition-submenu ${
                    showTherapySubmenu ? "open" : ""
                  }`}
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/therapy/#Occupational-Therapy"
                    onClick={handleNavClick}
                    className={
                      location.hash === "#Occupational-Therapy" ? "active" : ""
                    }
                  >
                    Occupational Therapy
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/therapy/#Physiotherapy"
                    onClick={handleNavClick}
                    className={
                      location.hash === "#Physiotherapy" ? "active" : ""
                    }
                  >
                    Physiotherapy
                  </NavDropdown.Item>
                </div>
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
                as={Link}
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
