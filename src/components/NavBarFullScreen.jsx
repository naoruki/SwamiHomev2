import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Logo from "../assets/logo.png";
import HoverNavDropdown from "./HoverNavDropdown";
import { useEffect } from "react";
import { InstagramLogoIcon, FacebookLogoIcon } from "@phosphor-icons/react";
import "../styles/DropdownHover.css";
import { Link } from "react-router-dom";

function NavBar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("fullscreen-navbar");

      if (!navbar) return;

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
      <Container fluid className="px-4">
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

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            <HoverNavDropdown title="About Us" id="about-dropdown">
              <NavDropdown.Item href="/about-us">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/about-us/#our-journey">
                Our Journey
              </NavDropdown.Item>
              <NavDropdown.Item href="/founder">Our Founder</NavDropdown.Item>
              <NavDropdown.Item href="/organization">
                Organization Structure
              </NavDropdown.Item>
              <NavDropdown.Item href="/management-committee">
                Management Committee
              </NavDropdown.Item>
              <NavDropdown.Item href="/annual-report">
                Annual Report
              </NavDropdown.Item>
              <NavDropdown.Item href="/Privacy-Policy">
                Privacy Policy
              </NavDropdown.Item>
            </HoverNavDropdown>

            <HoverNavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item href="/residential-services">
                Residential Services
              </NavDropdown.Item>
              <NavDropdown.Item href="/daycare-services">
                Day Care Services
              </NavDropdown.Item>
              <NavDropdown.Item href="/home-based-services">
                Home-Care Services
              </NavDropdown.Item>
              <NavDropdown.Item href="/therapy">
                Therapy Services
              </NavDropdown.Item>
            </HoverNavDropdown>

            <HoverNavDropdown title="Community Life" id="community-dropdown">
              <NavDropdown.Item href="/Activities">
                Activities & Programs
              </NavDropdown.Item>
              <NavDropdown.Item href="/Facilities">
                Facilities
              </NavDropdown.Item>
              <NavDropdown.Item href="/Virtual-Tour">
                Virtual Tour
              </NavDropdown.Item>
            </HoverNavDropdown>

            <HoverNavDropdown title="Media" id="media-dropdown">
              <NavDropdown.Item href="/events">
                What's happening
              </NavDropdown.Item>
              <NavDropdown.Item href="/past-events">
                Past Event Highlights
              </NavDropdown.Item>
              <NavDropdown.Item href="/gallery">
                Photo Gallery
              </NavDropdown.Item>
              <NavDropdown.Item href="/publications">
                Publications
              </NavDropdown.Item>
            </HoverNavDropdown>

            <HoverNavDropdown title="Get Involved" id="careers-dropdown">
              <NavDropdown.Item href="/career">Careers</NavDropdown.Item>
              <NavDropdown.Item href="/donate">Donate</NavDropdown.Item>
              <NavDropdown.Item href="/volunteer">Volunteer</NavDropdown.Item>
              <NavDropdown.Item href="/meal-delivery-volunteers">
                Meal on Wheels Volunteer
              </NavDropdown.Item>
              <NavDropdown.Item href="/tender">Tender</NavDropdown.Item>
            </HoverNavDropdown>

            <Nav.Link as={Link} to="/contact-us">
              Contact Us
            </Nav.Link>

            <Nav.Link
              href="https://www.facebook.com/profile.php?id=61552785959134"
              target="_blank"
              rel="noopener noreferrer"
              className="p-0 ms-3"
            >
              <FacebookLogoIcon size={30} weight="fill" />
            </Nav.Link>

            <Nav.Link
              href="https://www.instagram.com/savvysilverstars/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-0 ms-3"
            >
              <InstagramLogoIcon size={30} weight="fill" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;