import { useEffect, useState } from "react";
import { Card, Row, Col, Container, Modal, Button, Spinner } from "react-bootstrap";

const API_URL = import.meta.env.VITE_API_URL;

const CurrentEvent = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchActiveEvents = async () => {
    try {
      const res = await fetch(`${API_URL}/events/active`);
      const data = await res.json();
      setEvents(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("❌ Failed to fetch active events:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActiveEvents();
  }, []);

  const handleShow = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleClose = () => {
    setSelectedEvent(null);
    setShowModal(false);
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-SG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // ---------------- LOADING ----------------
  if (loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" variant="secondary" />
      </Container>
    );
  }

  // -------------- NO EVENTS ----------------
  if (events.length === 0) {
    return (
      <div className="box mb-3">
        <Container className="py-5 text-center">
          <p className="lead text-muted mb-0">No current events available.</p>
        </Container>
      </div>
    );
  }

  // ---------------- MAIN UI ----------------
  return (
    <div className="box mb-3">
      <Container className="py-5 text-center">
       
        <Row className="g-4 justify-content-center">
          {events.map((event) => (
            <Col key={event._id} xs={12} md={6} lg={5}>
              <Card
                className="shadow-lg border-0 h-100 hover-zoom"
                onClick={() => handleShow(event)}
                style={{ cursor: "pointer" }}
              >
                <Card.Img
                  variant="top"
                  src={
                    event.image
                      ? `${API_URL}${event.image}`
                      : "https://via.placeholder.com/700x350?text=No+Image"
                  }
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
                    {formatDate(event.date)}
                    {event.time ? ` • ${event.time}` : ""}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* ---------------- MODAL (same as PastEvents) ---------------- */}
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
              className="d-flex justify-content-center align-items-center w-100 h-100 position-relative"
              style={{
                minHeight: "100vh",
                backgroundColor: "transparent",
                backdropFilter: "none",
              }}
              onClick={handleClose}
            >
              {/* inner area (does not close on click) */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="d-flex flex-column align-items-center bg-transparent"
              >
                {/* Close Button */}
                <Button
                  variant="light"
                  onClick={handleClose}
                  className="position-absolute top-0 end-0 m-3 rounded-circle shadow-sm"
                >
                  ✕
                </Button>

                {/* Poster */}
                <img
                  src={
                    selectedEvent.image
                      ? `${API_URL}${selectedEvent.image}`
                      : "https://via.placeholder.com/700x350?text=No+Image"
                  }
                  alt={selectedEvent.title}
                  className="img-fluid rounded-top shadow-lg"
                  style={{
                    width: "95%",
                    maxWidth: "700px",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />

                {/* Text Box */}
                <div
                  className="bg-white p-3 p-md-4 rounded-bottom shadow-lg text-start mx-auto mb-4"
                  style={{
                    width: "95%",
                    maxWidth: "700px",
                    marginTop: "-8px",
                  }}
                >
                  <h5 className="fw-bold mb-1">{selectedEvent.title}</h5>
                  <p className="text-muted mb-2">
                    {formatDate(selectedEvent.date)}
                    {selectedEvent.time ? ` • ${selectedEvent.time}` : ""}
                  </p>

                  {selectedEvent.description && (
                    <p className="lead" style={{ whiteSpace: "pre-line" }}>
                      {selectedEvent.description}
                    </p>
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

export default CurrentEvent;
