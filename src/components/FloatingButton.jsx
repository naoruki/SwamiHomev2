import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FloatingButton = ({ icon, label, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <Button
      className="custom-button floating-button d-flex align-items-center gap-2"
      onClick={handleClick}
    >
      <span className="icon">{icon}</span>
      <span className="label">{label}</span>
    </Button>
  );
};

export default FloatingButton;
