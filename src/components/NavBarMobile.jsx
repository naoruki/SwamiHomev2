import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Offcanvas,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

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
                    as={Link}
                    to="/about-us"
                    onClick={handleNavClick}
                  >
                    About Us
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/about-us/#our-journey"
                    onClick={handleNavClick}
                  >
                    Our Journey
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/founder"
                    onClick={handleNavClick}
                  >
                    Our Founder
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/organization"
                    onClick={handleNavClick}
                  >
                    Organization
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/vision-mission"
                    onClick={handleNavClick}
                  >
                    Vision & Mission
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/annual-report"
                    onClick={handleNavClick}
                  >
                    Annual Report
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Services" id="services-dropdown">
                  <NavDropdown.Item
                    as={Link}
                    to="/residential-services"
                    onClick={handleNavClick}
                  >
                    Residential Services
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/day-care"
                    onClick={handleNavClick}
                  >
                    Day Care Services
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/home-based"
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
                    to="/careers"
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
