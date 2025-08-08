import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Offcanvas,
  Form,
  FormControl,
  Button,
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
                <Nav.Link href="#" active>
                  Home
                </Nav.Link>
                <Nav.Link href="#">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex mt-3">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarMobile;
