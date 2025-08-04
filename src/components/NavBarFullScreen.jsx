import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import Logo from "../assets/logo.svg";
import HoverNavDropdown from "./HoverNavDropdown"; // adjust path if needed
import { useEffect } from "react";
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
      className="d-none d-lg-flex sticky-navbar fullscreen-navbar fs-5"
      id="fullscreen-navbar"
    >
      <Container>
        <Navbar.Brand href="#">
          <div className="d-flex align-items-center">
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "70px", marginRight: "10px" }} // Adjust size and spacing
            />
            <span className="brand-text-small">
              SUNSHINE WELFARE ACTION MISSION
            </span>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav ">
          <Nav className="ms-auto">
            <Nav.Link href="#" active>
              Home
            </Nav.Link>

            <HoverNavDropdown title="About Us" id="about-dropdown">
              <NavDropdown.Item href="#" className="fs-5">Our Story</NavDropdown.Item>
              <NavDropdown.Item href="#" className="fs-5">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#" className="fs-5">Vision & Mission</NavDropdown.Item>
            </HoverNavDropdown>
            <HoverNavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item href="#" className="fs-5">Action</NavDropdown.Item>
              <NavDropdown.Item href="#" className="fs-5">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#" className="fs-5">Something else here</NavDropdown.Item>
            </HoverNavDropdown>
            <HoverNavDropdown title="Community Life" id="community-dropdown">
              <NavDropdown.Item href="#" className="fs-5">Action</NavDropdown.Item>
              <NavDropdown.Item href="#" className="fs-5">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#" className="fs-5">Something else here</NavDropdown.Item>
            </HoverNavDropdown>
            <HoverNavDropdown title="Media" id="media-dropdown">
              <NavDropdown.Item href="#" className="fs-5">Action</NavDropdown.Item>
              <NavDropdown.Item href="#" className="fs-5">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#" className="fs-5">Something else here</NavDropdown.Item>
            </HoverNavDropdown>
            <HoverNavDropdown title="Get Involved" id="careers-dropdown">
              <NavDropdown.Item href="#" className="fs-5">Action</NavDropdown.Item>
              <NavDropdown.Item href="#" className="fs-5">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#" className="fs-5">Something else here</NavDropdown.Item>
            </HoverNavDropdown>
            <HoverNavDropdown title="Contact" id="contact-dropdown">
              <NavDropdown.Item href="#" className="fs-5">Action</NavDropdown.Item>
              <NavDropdown.Item href="#" className="fs-5">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#" className="fs-5">Something else here</NavDropdown.Item>
            </HoverNavDropdown>
          </Nav>
        </Navbar.Collapse>
          
      </Container>
      
    
    </Navbar>
  );
}

export default NavBar;
