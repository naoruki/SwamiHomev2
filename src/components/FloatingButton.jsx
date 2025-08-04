import { Button } from "react-bootstrap";
// Make sure this path is correct

const FloatingButton = ({ icon, label }) => {
  return (
    <Button className="custom-button floating-button">
      {icon} {label}
    </Button>
  );
};

export default FloatingButton;
