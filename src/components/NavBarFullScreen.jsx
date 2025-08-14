import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
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
            <Nav.Link as={Link} to="/" active>
              Home
            </Nav.Link>

            <HoverNavDropdown title="About Us" id="about-dropdown">
              <NavDropdown.Item href="/about-us" className="">
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item href="/about-us/#our-journey" className="">
                Our Journey
              </NavDropdown.Item>
              <NavDropdown.Item href="/founder" className="">
                Our Founder
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="">
                Organization
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="">
                Annual Report
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="">
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
                  <a className="dropdown-item" href="/residential-care">
                    Residential Care
                  </a>
                  <a className="dropdown-item" href="/dementia-care">
                    Dementia Care
                  </a>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="">
                Day Care Services
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="">
                Home-Based Services
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="">
                Therapy Services
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
              <NavDropdown.Item href="#" className="">
                Careers
              </NavDropdown.Item>
              <NavDropdown.Item href="/donate" className="">
                Donate
              </NavDropdown.Item>
              <NavDropdown.Item href="/volunteer" className="">
                Volunteer
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
