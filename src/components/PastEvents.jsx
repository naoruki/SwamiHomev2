import { useState, useEffect } from "react";
import { Card, Row, Col, Container, Modal, Button } from "react-bootstrap";
import midautumn from "../assets/midautumn.jpg";
import deepavaliPoster from "../assets/SWAMIBCCSDEEPAVALI.jpg";

const PastEvents = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const pastEvents = [
      {
        id: 1,
        title: "Mid Autumn Celebration 2025",
        date: "3 October 2025",
        image: midautumn,
        description: `
          Mid Autumn Celebration 2025 at SWAMI Home was a joyous gathering filled with cultural performances, 
          traditional lanterns, and mooncakes. Residents, staff, and volunteers came together to celebrate 
          unity, gratitude, and togetherness under the beautiful full moon.
        `,
      },
      {
        id: 2,
        title: "Deepavali Celebration 2025",
        date: "16 October 2025",
        image: deepavaliPoster,
        description: `
          SWAMI Home celebrated Deepavali 2025 with Bhajans, Blessing Ceremony, Aarati, and Vegetarian lunch.
        `,
      },
    ];
    setEvents(pastEvents);
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
    <div className="box mb-5">
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
          backdrop={true}
          keyboard={true}
          contentClassName="border-0 bg-transparent"
        >
          {selectedEvent && (
            <div
              className="text-center position-relative px-2"
              onClick={handleClose} // click anywhere closes modal
            >
              <div
                onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                className="d-flex flex-column align-items-center"
              >
                {/* ❌ Close Button */}
                <Button
                  variant="light"
                  onClick={handleClose}
                  className="position-absolute top-0 end-0 m-2 m-md-3 rounded-circle shadow-sm"
                  style={{ zIndex: 10 }}
                >
                  ✕
                </Button>

                {/* 🖼 Poster */}
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

                {/* 🧾 Text box (same width as poster) */}
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
                  {selectedEvent.description && (
                    <p
                      className="lead"
                      dangerouslySetInnerHTML={{
                        __html: selectedEvent.description,
                      }}
                    ></p>
                  )}
                </div>
              </div>
            </div>
          )}
        </Modal>
      </Container>
    </div>
  );
};

export default PastEvents;
