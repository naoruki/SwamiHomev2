import { Button } from "react-bootstrap";

const FloatingButton = ({ icon, label }) => {
  return (
    <Button className="custom-button floating-button d-flex align-items-center gap-2">
      <span className="icon">{icon}</span>
      <span className="label">{label}</span>
    </Button>
  );
};

export default FloatingButton;
