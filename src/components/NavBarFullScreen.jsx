import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Logo from "../assets/logo.svg";
import HoverNavDropdown from "./HoverNavDropdown"; // adjust path if needed
import { useEffect } from "react";
import "../styles/DropdownHover.css";

import { Link } from "react-router-dom";

function NavBar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("fullscreen-navbar");
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
    <Navbar
      expand="lg"
      className="d-none d-lg-flex sticky-navbar fullscreen-navbar"
      id="fullscreen-navbar"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <div className="d-flex align-items-center">
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "70px", marginRight: "10px" }}
            />
            <span className="brand-text-small d-none d-xl-inline">
              SUNSHINE WELFARE ACTION MISSION
            </span>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav ">
          <Nav className="ms-auto">
            {/* <Nav.Link as={Link} to="/" active>
              Home
            </Nav.Link> */}

            <HoverNavDropdown
              title="About Us"
              id="about-dropdown"
              className="NavDropItem"
            >
              <NavDropdown.Item href="/about-us" className="">
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item href="/about-us/#our-journey" className="">
                Our Journey
              </NavDropdown.Item>
              <NavDropdown.Item href="/founder" className="">
                Our Founder
              </NavDropdown.Item>
              <NavDropdown.Item href="/organization" className="">
                Organization Structure
              </NavDropdown.Item>
              <NavDropdown.Item href="/management-committee" className="">
                Management Committee
              </NavDropdown.Item>
              <NavDropdown.Item href="/annual-report" className="">
                Annual Report
              </NavDropdown.Item>
              <NavDropdown.Item href="/pdpa" className="">
                PDPA
              </NavDropdown.Item>
            </HoverNavDropdown>
            <HoverNavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item
                href="/residential-services"
                className="dropdown-hover"
              >
                Residential Services
                <div className="dropdown-submenu">
                  <a
                    className="dropdown-item"
                    href="/residential-services/#residential-care"
                  >
                    Residential Care
                  </a>
                  <a
                    className="dropdown-item"
                    href="/residential-services/#dementia-care"
                  >
                    Dementia Care
                  </a>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item href="/daycare-services" className="dropdown-hover">
                Day Care Services
                <div className="dropdown-submenu">
                  <a
                    className="dropdown-item"
                    href="/daycare-services/#Dementia-Day-Centre"
                  >
                    Dementia Day Care Centre
                  </a>
                  <a
                    className="dropdown-item"
                    href="/daycare-services/#Day-Rehabilitation-Centre"
                  >
                    Day Rehabilitation Centre
                  </a>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item href="/home-based-services" className="dropdown-hover">
                Home-Care Services
                <div className="dropdown-submenu">
                  <a
                    className="dropdown-item"
                    href="/home-based-services/#home-medical"
                  >
                    Home Medical & Home Nursing Services
                  </a>
                  <a
                    className="dropdown-item"
                    href="/home-based-services/#Home-Help-Services"
                  >
                    Home Help Services
                  </a>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="dropdown-hover">
                Therapy Services
                <div className="dropdown-submenu">
                  <a
                    className="dropdown-item"
                    href="/residential-services/#residential-care"
                  >
                    Occupational Therapy
                  </a>
                  <a
                    className="dropdown-item"
                    href="/residential-services/#dementia-care"
                  >
                    Physiotherapy
                  </a>
                </div>
              </NavDropdown.Item>
            </HoverNavDropdown>
            <HoverNavDropdown title="Community Life" id="community-dropdown">
              <NavDropdown.Item href="#" className="">
                Activities & Programs
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="">
                Facilties
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="">
                Visual Tour
              </NavDropdown.Item>
            </HoverNavDropdown>
            <HoverNavDropdown title="Media" id="media-dropdown">
              <NavDropdown.Item href="#" className="">
                What's happening
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="">
                Past Event Highlights
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="">
                Photo Gallery
              </NavDropdown.Item>
            </HoverNavDropdown>
            <HoverNavDropdown title="Get Involved" id="careers-dropdown">
              <NavDropdown.Item href="/career" className="">
                Careers
              </NavDropdown.Item>
              <NavDropdown.Item href="/donate" className="">
                Donate
              </NavDropdown.Item>
              <NavDropdown.Item href="/volunteer" className="">
                Volunteer
              </NavDropdown.Item>
              <NavDropdown.Item href="/tender" className="">
                Tender
              </NavDropdown.Item>
            </HoverNavDropdown>
            <Nav className="ms-auto">
              <Nav.Link href="/contact-us" active>
                Contact Us
              </Nav.Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
