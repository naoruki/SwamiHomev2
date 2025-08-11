import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import Logo from "../assets/logo.svg";
import HoverNavDropdown from "./HoverNavDropdown"; // adjust path if needed
import { useEffect } from "react";

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
                Our Story
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="">
                Our Team
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="">
                Vision & Mission
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="">
                Annual Report
              </NavDropdown.Item>
            </HoverNavDropdown>
            <HoverNavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item href="#" className="">
                Residential Services
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="">
                Day Care Services
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="">
                Community Services
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="">
                Integrated Services
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
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="">
                Something else here
              </NavDropdown.Item>
            </HoverNavDropdown>
            <HoverNavDropdown title="Get Involved" id="careers-dropdown">
              <NavDropdown.Item href="#" className="">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="">
                Something else here
              </NavDropdown.Item>
            </HoverNavDropdown>
            <Nav className="ms-auto">
              <Nav.Link href="#" active>
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
