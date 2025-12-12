import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import "../styles/Activities.css";

const ActivitiesSection = ({ sectionTitle, items }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleShow = (item) => {
    setSelectedItem(item);
    setCurrentIndex(0); // start from first image
  };

  const handleClose = () => {
    setSelectedItem(null);
    setCurrentIndex(0);
  };

  // Reset index when item changes
  useEffect(() => {
    if (selectedItem) {
      setCurrentIndex(0);
    }
  }, [selectedItem]);

  const handlePrev = () => {
    if (!selectedItem) return;
    const images = selectedItem.images || [selectedItem.image];
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    if (!selectedItem) return;
    const images = selectedItem.images || [selectedItem.image];
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="activities-section">
      <Container>
        {sectionTitle && (
          <div className="header-hero">
            <h1>{sectionTitle}</h1>
          </div>
        )}

        <Row className="g-4 justify-content-center mb-5">
          {items.slice(0, 3).map((item, index) => {
            const mainImage = item.images ? item.images[0] : item.image;

            return (
              <Col key={index} xs={12} sm={6} md={4}>
                <Card
                  className="activity-card h-100 shadow-sm border-0"
                  onClick={() => handleShow(item)}
                  style={{ cursor: "pointer" }}
                >
                  <Card.Img
                    variant="top"
                    src={mainImage}
                    alt={item.title}
                    className="activity-img"
                  />
                  <Card.Body>
                    <Card.Title className="fw-semibold text-center">
                      {item.title}
                    </Card.Title>
                    <Card.Text className="text-muted small text-center">
                      {item.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>

        {/* Modal */}
        <Modal show={!!selectedItem} onHide={handleClose} centered size="lg">
          {selectedItem && (
            <>
              {/* Title Bar */}
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "15px 20px",
                  textAlign: "center",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                }}
              >
                <h4 style={{ margin: 0, fontWeight: "600", color: "#333" }}>
                  {selectedItem.title}
                </h4>
              </div>

              {/* Body with Slider */}
              <Modal.Body
                style={{
                  backgroundColor: "white",
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                  textAlign: "center",
                  padding: "25px",
                }}
              >
                <div className="activity-slider-container">
                  {(() => {
                    const images =
                      selectedItem.images || [selectedItem.image];
                    const currentImage = images[currentIndex];

                    return (
                      <>
                        <div className="activity-slider-image-wrapper">
                          <img
                            src={currentImage}
                            alt={selectedItem.title}
                            className="img-fluid mb-3 activity-slider-image"
                            style={{
                              maxHeight: "450px",
                              objectFit: "contain",
                              display: "block",
                              margin: "0 auto",
                              backgroundColor: "white",
                              borderRadius: "8px",
                            }}
                          />

                          {images.length > 1 && (
                            <>
                              <button
                                className="activity-slider-btn left"
                                type="button"
                                onClick={handlePrev}
                              >
                                ❮
                              </button>

                              <button
                                className="activity-slider-btn right"
                                type="button"
                                onClick={handleNext}
                              >
                                ❯
                              </button>
                            </>
                          )}
                        </div>

                        {/* Page Counter BELOW the image */}
                        {images.length > 1 && (
                          <div className="activity-slider-indicator">
                            {currentIndex + 1} / {images.length}
                          </div>
                        )}
                      </>
                    );
                  })()}
                </div>

                <p className="text-muted mt-3">{selectedItem.description}</p>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Body>
            </>
          )}
        </Modal>
      </Container>
    </section>
  );
};

ActivitiesSection.propTypes = {
  sectionTitle: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string, // single image
      images: PropTypes.arrayOf(PropTypes.string), // multiple images
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ActivitiesSection;
