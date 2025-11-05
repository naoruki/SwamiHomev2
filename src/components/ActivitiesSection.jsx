import { useState } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import "../styles/Activities.css";

const ActivitiesSection = ({ sectionTitle, items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleShow = (item) => setSelectedItem(item);
  const handleClose = () => setSelectedItem(null);

  return (
    <section className="activities-section">
      <Container>
        {sectionTitle && (
          <div className="header-hero">
            <h1>{sectionTitle}</h1>
          </div>
        )}

        <Row className="g-4 justify-content-center mb-5">
          {items.slice(0, 3).map((item, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <Card
                className="activity-card h-100 shadow-sm border-0"
                onClick={() => handleShow(item)}
                style={{ cursor: "pointer" }}
              >
                <Card.Img
                  variant="top"
                  src={item.image}
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
          ))}
        </Row>

        {/* Modal */}
        <Modal show={!!selectedItem} onHide={handleClose} centered size="lg">
          {selectedItem && (
            <>
              {/* Title Bar with Background */}
              <div
                style={{
                  backgroundColor: "#fff", // light gray (change to pink, blue, etc. if you want)
                  padding: "15px 20px",
                  textAlign: "center",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                }}
              >
                <h4
                  style={{
                    margin: 0,
                    fontWeight: "600",
                    color: "#333",
                  }}
                >
                  {selectedItem.title}
                </h4>
              </div>

              {/* White body with centered image */}
              <Modal.Body
                style={{
                  backgroundColor: "white",
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                  textAlign: "center",
                  padding: "25px",
                }}
              >
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="img-fluid mb-3"
                  style={{
                    maxHeight: "450px",
                    objectFit: "contain",
                    display: "block",
                    margin: "0 auto",
                    backgroundColor: "white",
                    borderRadius: "8px",
                  }}
                />
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
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ActivitiesSection;
