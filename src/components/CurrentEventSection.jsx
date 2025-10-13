import { useState, useEffect } from "react";
import { Row, Col, Container, Modal, Button } from "react-bootstrap";
import { X } from "react-bootstrap-icons";
import deepavaliPoster from "../assets/SWAMIBCCSDEEPAVALI.jpg";
import otherPoster from "../assets/SWAMI_Community_Palliative_Care_Workshop_Final_NoVenueLabel.jpg";
import "../styles/CurrentEvent.css";

const CurrentEvent = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const currentEvents = [
      {
        id: 1,
        image: deepavaliPoster,
      },
      {
        id: 2,
        image: otherPoster,
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
    <section className="upcoming-events-section py-5">
      <Container>
        {/* Section Title */}
        <div className="text-center mb-4">
          <h2 className="fw-bold text-pink">Upcoming Events</h2>
          <div className="divider mx-auto"></div>
        </div>

        {/* Posters Grid */}
        <Row className="justify-content-center g-4">
          {events.map((event) => (
            <Col key={event.id} xs={12} md={6} lg={5}>
              <div
                className="poster-card shadow-sm"
                onClick={() => handleShow(event)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={event.image}
                  alt={`Event ${event.id}`}
                  className="poster-img img-fluid rounded"
                />
              </div>
            </Col>
          ))}
        </Row>

        {/* 🪩 Modal */}
        <Modal
          show={showModal}
          onHide={handleClose}
          centered
          backdrop
          keyboard
          size="xl"
          contentClassName="border-0 bg-transparent shadow-none p-0"
        >
          {selectedEvent && (
            <div
              className="position-relative d-flex justify-content-center align-items-center w-100"
              onClick={handleClose}
              style={{
                cursor: "pointer",
                height: "100%",
                minHeight: "85vh",
              }}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="close-btn position-absolute"
                aria-label="Close"
              >
                <X size={32} />
              </button>

              {/* Poster */}
              <img
                src={selectedEvent.image}
                alt="Event Poster"
                className="img-fluid rounded shadow-lg"
                style={{
                  maxHeight: "85vh",
                  maxWidth: "95vw",
                  objectFit: "contain",
                  borderRadius: "10px",
                }}
              />
            </div>
          )}
        </Modal>
      </Container>
    </section>
  );
};

export default CurrentEvent;
