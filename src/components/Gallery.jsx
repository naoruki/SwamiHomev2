import { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import "../styles/gallery.css";

const Gallery = ({ images = [] }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClose = () => setSelectedIndex(null);
  const handleNext = (e) => {
    e.stopPropagation(); // prevent closing modal
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };
  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Container className="py-2">


      <Row className="justify-content-center">
        {images.map((img, index) => (
          <Col
            key={index}
            xs={6}
            sm={4}
            md={3}
            className="gallery-item"
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={img.src}
              alt={img.alt || `Image ${index + 1}`}
              className="img-fluid rounded shadow-sm gallery-image"
            />
          </Col>
        ))}
      </Row>

      {/* Modal (Lightbox) */}
      <Modal
        show={selectedIndex !== null}
        onHide={handleClose}
        centered
        dialogClassName="gallery-modal"
        contentClassName="gallery-modal-content"
        backdropClassName="gallery-modal-backdrop-transparent"
        backdrop
        onClick={handleClose} // click anywhere to close
      >
        <Modal.Body
          className="p-0 text-center position-relative"
          style={{ cursor: "pointer" }}
        >
          {selectedIndex !== null && (
            <>
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="img-fluid"
                loading="lazy"
                style={{
                  width: "100vw",
                  height: "100vh",
                  objectFit: "contain",
                  backgroundColor: "transparent",
                  pointerEvents: "none", // click-through
                }}
              />

              {/* ⬅️ Prev button */}
              <Button
                variant="light"
                className="nav-btn prev-btn"
                onClick={handlePrev}
              >
                ❮
              </Button>

              {/* ➡️ Next button */}
              <Button
                variant="light"
                className="nav-btn next-btn"
                onClick={handleNext}
              >
                ❯
              </Button>
            </>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Gallery;
