import { useState, useEffect } from "react";
import { Row, Col, Container, Modal, Button } from "react-bootstrap";
import { X } from "react-bootstrap-icons";
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
        title: "Community Palliative Care Workshop",
        date: "24 October 2025 • 6.00PM – 9.15PM",
        description: `
    Join us for an eye-opening workshop exclusively for SWAMI Home staff, volunteers, next-of-kin, beneficiaries, and grassroots leaders. 
    Discover the core purpose and transformative potential of community palliative care. 
    Explore how to provide compassionate psychosocial care and gain practical skills for holding difficult conversations to support patients and families confronting serious illness. 
    Palliative care is about quality of life—at every stage and transition.<br /><br />
    Led by WHO-endorsed global experts, this session will guide SWAMI Home’s community on why palliative care matters, how psychosocial support can be integrated, and how to nurture open, empathetic conversations during difficult times. 
    Build confidence, reduce stigma, and help make every moment count for those in your care.<br /><br />
    <strong>Please click <a href="https://events.humanitix.com/registration-for-swami-home-community-palliative-care-workshop" target="_blank" rel="noopener noreferrer" style="color:#0d6efd; text-decoration:underline;">here</a> to register.</strong>
  `,
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

        {/* Poster */}
        <Row className="justify-content-center g-4">
          {events.map((event) => (
            <Col key={event.id} xs={12} md={8} lg={6}>
              <div
                className="poster-card shadow-sm"
                onClick={() => handleShow(event)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="poster-img img-fluid rounded"
                />
              </div>
            </Col>
          ))}
        </Row>

        {/* Modal */}
        <Modal
          show={showModal}
          onHide={handleClose}
          centered
          backdrop={true} // enables click outside to close
          keyboard
          size="xl"
          contentClassName="border-0 bg-transparent shadow-none p-0"
        >
          {selectedEvent && (
            <div
              className="position-relative d-flex justify-content-center align-items-center w-100"
              style={{
                minHeight: "85vh",
                padding: "20px",
              }}
              onClick={handleClose} // click anywhere outside content closes modal
            >
              {/* Stop propagation when clicking inside the content */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded shadow-lg p-4 text-left"
                style={{ maxWidth: "800px" }}
              >
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="close-btn position-absolute"
                  aria-label="Close"
                  style={{
                    top: "20px",
                    right: "30px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <X size={32} />
                </button>

                {/* Event Details */}
                <h3 className="fw-bold text-pink mb-3">
                  {selectedEvent.title}
                </h3>
                <p className="text-muted mb-2">{selectedEvent.date}</p>
                <p
                  className="lead"
                  dangerouslySetInnerHTML={{
                    __html: selectedEvent.description,
                  }}
                ></p>

                <Button
                  variant="primary"
                  className="mt-3 px-4 py-2 rounded-pill fw-semibold"
                  onClick={handleClose}
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </Modal>
      </Container>
    </section>
  );
};

export default CurrentEvent;
