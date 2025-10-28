import { useState, useEffect } from "react";
import { Modal, Carousel } from "react-bootstrap";
import { X } from "react-bootstrap-icons";
import deepavaliPoster from "../assets/SWAMIBCCSDEEPAVALI.jpg";
import volunteerPoster from "../assets/CommunityPalliativeCareWorkshopFinal.jpg";
import "../styles/LandingModal.css";

function EventModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // ✅ Show only once per session
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
      backdrop={false} // ❌ No dark overlay background
      keyboard
      size="xl"
      contentClassName="border-0 bg-transparent shadow-none p-0"
      dialogClassName="poster-only-modal"
    >
      {/* 🖼 Entire area clickable to close */}
      <div
        className="w-100 d-flex justify-content-center align-items-center position-relative"
        onClick={handleClose}
        style={{
          cursor: "pointer",
          background: "transparent",
          minHeight: "100vh",
        }}
      >
        {/* ❌ Close Button */}
        <button
          onClick={handleClose}
          className="close-btn position-absolute"
          aria-label="Close"
        >
          <X size={30} />
        </button>

        {/* 🎠 Poster Carousel */}
        <Carousel
          controls={false}
          indicators={false}
          interval={4000}
          slide
          fade={false}
          className="w-100 d-flex justify-content-center align-items-center"
        >
          {[deepavaliPoster, volunteerPoster].map((src, i) => (
            <Carousel.Item key={i}>
              <div
                className="poster-frame d-flex justify-content-center align-items-center"
                style={{
                  width: "95vw",
                  height: "85vh",
                }}
              >
                <img
                  src={src}
                  alt={`Poster ${i + 1}`}
                  className="poster-img img-fluid rounded shadow-lg"
                  style={{
                    maxHeight: "85vh",
                    maxWidth: "95vw",
                    objectFit: "contain",
                    borderRadius: "8px",
                    userSelect: "none",
                    pointerEvents: "none", // ✅ allows click to pass through
                  }}
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Modal>
  );
}

export default EventModal;
