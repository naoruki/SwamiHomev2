import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/alertbar.css";

const AlertBar = ({ message, link }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="alert-bar">
      <div className="alert-content">
        <span>{message}</span>
        {link && (
          <Link to={link} className="alert-link">
            &nbsp;Learn more →
          </Link>
        )}
      </div>

      {/* Solid plain X button */}
      <button className="close-btn" onClick={() => setVisible(false)}>
        ×
      </button>
    </div>
  );
};

export default AlertBar;
