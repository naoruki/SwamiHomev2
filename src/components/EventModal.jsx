import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import deepavaliPoster from "../assets/SWAMIBCCSDEEPAVALI.jpg";

const EventModal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // ✅ Only show modal once per session
    const hasSeenModal = sessionStorage.getItem("eventModalShown");
    if (!hasSeenModal) {
      setShow(true);
      sessionStorage.setItem("eventModalShown", "true");
    }
  }, []);

  const handleClose = () => setShow(false);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="xl"
      backdrop={true}
      keyboard={true}
      dialogClassName="modal-fullscreen-sm-down"
      contentClassName="border-0 bg-transparent d-flex justify-content-center align-items-center"
    >
      <div
        onClick={handleClose}
        className="position-relative d-flex justify-content-center align-items-center w-100"
        style={{
          cursor: "pointer",
          height: "100%",
          minHeight: "80vh",
        }}
      >
        {/* ❌ Close button */}
        <button
          onClick={handleClose}
          className="btn position-absolute text-white d-flex align-items-center justify-content-center"
          style={{
            top: "10px",
            right: "10px",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            fontSize: "22px",
            fontWeight: "bold",
            lineHeight: "1",
            zIndex: 10,
          }}
        >
          ×
        </button>

        {/* 🖼️ Poster */}
        <img
          src={deepavaliPoster}
          alt="Deepavali Event Poster"
          className="img-fluid"
          style={{
            maxHeight: "85vh",
            maxWidth: "95vw",
            objectFit: "contain",
            borderRadius: "8px",
          }}
        />
      </div>
    </Modal>
  );
};

export default EventModal;
