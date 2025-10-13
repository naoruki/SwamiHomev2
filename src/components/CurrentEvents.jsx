import { useState, useEffect } from "react";
import { Card, Row, Col, Container, Modal, Button } from "react-bootstrap";
import deepavaliPoster from "../assets/SWAMIBCCSDEEPAVALI.jpg";
import otherPoster from "../assets/SWAMI_Community_Palliative_Care_Workshop_Final_NoVenueLabel.jpg";

const CurrentEvent = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const currentEvents = [
      {
        id: 1,
        title: "Deepavali Celebration 2025",
        date: "16 October 2025",
        image: deepavaliPoster,
        description:
          "Join us for our annual Deepavali Celebration filled with lights and Joy!",
      },
      {
        id: 2,
        title: "Community Palliative Care Workshop",
        date: "24 October 2025 6.00PM - 9.15PM",
        image: otherPoster,
        description:
          "Community Palliative Care Workshop",
      },
    ];
    setEvents(currentEvents);
  }, []);

  const handleShow = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  return (
    <div className="box mb-3">
      <Container className="py-5">
        <Row className="g-4 justify-content-center">
          {events.map((event) => (
            <Col key={event.id} xs={12} md={6} lg={5}>
              <Card
                className="shadow-lg border-0 h-100 hover-zoom"
                onClick={() => handleShow(event)}
                style={{ cursor: "pointer" }}
              >
                <Card.Img
                  variant="top"
                  src={event.image}
                  alt={event.title}
                  style={{
                    borderRadius: "12px 12px 0 0",
                    height: "350px",
                    objectFit: "cover",
                  }}
                />
                <Card.Body className="text-center bg-light">
                  <Card.Title className="fw-semibold text-dark">
                    {event.title}
                  </Card.Title>
                  <Card.Text className="text-muted mb-0">
                    {event.date}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* 🪄 Modal */}
        <Modal
          show={showModal}
          onHide={handleClose}
          centered
          size="xl"
          backdrop="true"
          keyboard={true}
          contentClassName="border-0 bg-transparent"
        >
          {selectedEvent && (
            <div className="text-center position-relative" onClick={handleClose}>
              {/* Close Button */}
              <Button
                variant="light"
                onClick={handleClose}
                className="position-absolute top-0 end-0 m-3 rounded-circle"
              >
                ✕
              </Button>

              {/* Centered Image */}
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  minHeight: "80vh",
                  padding: "20px",
                }}
              >
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="img-fluid rounded shadow-lg modal-event-image"
                  style={{
                    maxWidth: "70%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* Text Section */}
              <div className="bg-white mt-3 p-3 rounded shadow-sm text-start mx-auto" style={{ maxWidth: "70%" }}>
                <h4 className="fw-bold">{selectedEvent.title}</h4>
                <p className="text-muted mb-1">{selectedEvent.date}</p>
                <p>{selectedEvent.description}</p>
              </div>
            </div>
          )}
        </Modal>
      </Container>
    </div>
  );
};

export default CurrentEvent;
