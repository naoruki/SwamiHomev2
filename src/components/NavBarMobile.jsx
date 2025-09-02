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
import { HashLink } from 'react-router-hash-link';
import { useLocation } from "react-router-dom";
function NavBarMobile() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);
  const handleNavClick = () => handleClose();

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("mobile-navbar");
      if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [showResidentialSubmenu, setShowResidentialSubmenu] = useState(false);
  const [showDaycareSubmenu, setShowDaycareSubmenu] = useState(false);

  const toggleResidentialSubmenu = (e) => {
    e.preventDefault(); // Prevent navigation
    setShowResidentialSubmenu((prev) => !prev);
  };
  const toggleDaycareSubmenu = (e) => {
    e.preventDefault();
    setShowDaycareSubmenu((prev) => !prev);
  };
const location = useLocation();
  return (
    <>
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
                {/* <Nav.Link as={Link} to="/" onClick={handleNavClick}>
                  Home
                </Nav.Link> */}

                <NavDropdown title="About Us" id="about-dropdown">
                  <NavDropdown.Item
                    as={NavLink}
                    to="/about-us"
                    onClick={handleNavClick}
                  >
                    About Us
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={HashLink}
                    to="/about-us/#our-journey"
                    onClick={handleNavClick}
                  >
                    Our Journey
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={NavLink}
                    to="/founder"
                    onClick={handleNavClick}
                  >
                    Our Founder
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={NavLink}
                    to="/organization"
                    onClick={handleNavClick}
                  >
                    Organization Structure
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/management-committee" className="">
                    Management Committee
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/annual-report"
                    onClick={handleNavClick}
                  >
                    Annual Report
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/pdpa" className="">
                    PDPA
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Services" id="services-dropdown">
                  {/* Submenu trigger */}
                  <div
                    className="dropdown-item d-flex justify-content-between align-items-center"
                    onClick={toggleResidentialSubmenu}
                    style={{ cursor: "pointer" }}
                  >
                    Residential Services
                    <span>{showResidentialSubmenu ? "▾" : "▸"}</span>
                  </div>

                  {/* Submenu with animation */}
                  <div
                    className={`submenu ps-3 transition-submenu ${
                      showResidentialSubmenu ? "open" : ""
                    }`}
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="/residential-services/#residential-care"
                      onClick={handleNavClick}
                    >
                      Residential Care
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/residential-services/#dementia-care"
                      onClick={handleNavClick}
                    >
                      Dementia Care
                    </NavDropdown.Item>
                  </div>

                  {/* Other services */}
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
                    >
                      Dementia Day Centre
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/daycare-services/#Day-Rehabilitation-Centre"
                      onClick={handleNavClick}
                    >
                      Day Rehabilitation Centre
                    </NavDropdown.Item>
                  </div>
                  <NavDropdown.Item
                    as={Link}
                    to="/home-based-services"
                    onClick={handleNavClick}
                  >
                    Home-Based Services
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/therapy"
                    onClick={handleNavClick}
                  >
                    Therapy Services
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Community Life" id="community-dropdown">
                  <NavDropdown.Item
                    as={Link}
                    to="/activities"
                    onClick={handleNavClick}
                  >
                    Activities & Programs
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/facilities"
                    onClick={handleNavClick}
                  >
                    Facilities
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/visual-tour"
                    onClick={handleNavClick}
                  >
                    Visual Tour
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Media" id="media-dropdown">
                  <NavDropdown.Item
                    as={Link}
                    to="/news"
                    onClick={handleNavClick}
                  >
                    What's Happening
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/events"
                    onClick={handleNavClick}
                  >
                    Past Event Highlights
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/gallery"
                    onClick={handleNavClick}
                  >
                    Photo Gallery
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Get Involved" id="get-involved-dropdown">
                  <NavDropdown.Item
                    as={Link}
                    to="/career"
                    onClick={handleNavClick}
                  >
                    Careers
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/donate"
                    onClick={handleNavClick}
                  >
                    Donate
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/volunteer"
                    onClick={handleNavClick}
                  >
                    Volunteer
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/tender"
                    onClick={handleNavClick}
                  >
                    Volunteer
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link as={Link} to="/contact-us" onClick={handleNavClick}>
                  Contact Us
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarMobile;
