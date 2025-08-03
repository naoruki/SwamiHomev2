import { useState } from "react";
import { NavDropdown } from "react-bootstrap";

function HoverNavDropdown({ title, id, children }) {
  const [show, setShow] = useState(false);

  const showDropdown = () => setShow(true);
  const hideDropdown = () => setShow(false);

  return (
    <NavDropdown
      title={title}
      id={id}
      show={show}
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
    >
      {children}
    </NavDropdown>
  );
}

export default HoverNavDropdown;
