import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Offcanvas,
} from "react-bootstrap";
import { useEffect } from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
function NavBarMobile() {
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
        className=" d-lg-none fixed-top mobile-navbar"
        id="mobile-navbar"
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "50px", marginRight: "10px" }} // Adjust size as needed
            />
            <span className="brand-text-small fw-bold text-nowrap d-none d-sm-inline">
              SUNSHINE WELFARE ACTION MISSION
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <img
                  src={Logo}
                  alt="Logo"
                  style={{ width: "70px", marginRight: "10px" }} // Adjust size and spacing
                />
              </Offcanvas.Title>
              <span className="brand-text-small fw-bold text-wrap">
                SUNSHINE WELFARE ACTION MISSION
              </span>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/" active>
                  Home
                </Nav.Link>

                <NavDropdown title="About Us" id="offcanvasNavbarDropdown">
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
                    Vision & Mission
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#" className="">
                    Annual Report
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Services" id="offcanvasNavbarDropdown">
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
                </NavDropdown>
                <NavDropdown
                  title="Community Life"
                  id="offcanvasNavbarDropdown"
                >
                  <NavDropdown.Item href="#">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Media" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Get Involved" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/contact-us">Contact Us</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarMobile;
