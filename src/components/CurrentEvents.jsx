import { useState, useEffect } from "react";
import { Card, Row, Col, Container, Modal, Button } from "react-bootstrap";
import otherPoster from "../assets/SWAMI_Community_Palliative_Care_Workshop_Final_NoVenueLabel.jpg";

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
    <div className="box mb-3">
      <Container className="py-5">
        <Row className="g-4 justify-content-center">
          {events.map((event) => (
            <Col key={event.id} xs={12} md={8} lg={6}>
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
          backdrop={true} // enables closing when clicking outside
          keyboard={true}
          contentClassName="border-0 bg-transparent"
        >
          {selectedEvent && (
            <div
              className="text-center position-relative px-2"
              onClick={handleClose} // click anywhere closes modal
            >
              <div
                onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside the box
                className="d-flex flex-column align-items-center"
              >
                {/* Close Button */}
                <Button
                  variant="light"
                  onClick={handleClose}
                  className="position-absolute top-0 end-0 m-2 m-md-3 rounded-circle shadow-sm"
                  style={{ zIndex: 10 }}
                >
                  ✕
                </Button>

                {/* Poster */}
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    minHeight: "60vh",
                    padding: "10px 0",
                  }}
                >
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="img-fluid rounded-top shadow-lg"
                    style={{
                      width: "95%",
                      maxWidth: "700px",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>

                {/* Text box same width as image */}
                <div
                  className="bg-white p-3 p-md-4 rounded-bottom shadow-lg text-start mx-auto mb-4"
                  style={{
                    width: "95%",
                    maxWidth: "700px",
                    marginTop: "-8px",
                  }}
                >
                  <h5 className="fw-bold mb-1">{selectedEvent.title}</h5>
                  <p className="text-muted mb-2">{selectedEvent.date}</p>
                  <p
                    className="lead"
                    dangerouslySetInnerHTML={{
                      __html: selectedEvent.description,
                    }}
                  ></p>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </Container>
    </div>
  );
};

export default CurrentEvent;
