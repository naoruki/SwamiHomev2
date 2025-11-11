import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";

const API_URL = import.meta.env.VITE_API_URL;

const CurrentEvent = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActiveEvents = async () => {
      try {
        const res = await fetch(`${API_URL}/events/active`);
        const data = await res.json();
        if (Array.isArray(data)) setEvents(data);
      } catch (err) {
        console.error("❌ Failed to fetch active events:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchActiveEvents();
  }, []);

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" variant="secondary" />
      </Container>
    );
  }

  if (events.length === 0) {
    return (
      <div className="box mb-3">
        <Container className="py-5 text-center">
          <p className="lead text-muted mb-0">No current events at the moment.</p>
        </Container>
      </div>
    );
  }

  return (
    <div className="box mb-3">
      <Container className="py-5 text-center">


        <Row className="justify-content-center g-4">
          {events.map((event) => (
            <Col key={event._id} xs={12} sm={6} md={4} lg={3}>
              <Card className="shadow-sm border-0 h-100">
                {event.image && (
                  <Card.Img
                    variant="top"
                    src={`${API_URL}${event.image}`}
                    alt={event.title}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      borderTopLeftRadius: "0.5rem",
                      borderTopRightRadius: "0.5rem",
                    }}
                  />
                )}
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold text-dark">
                    {event.title}
                  </Card.Title>
                  <Card.Text className="text-muted small mb-2">
                    📅 {new Date(event.date).toLocaleDateString()}{" "}
                    {event.time && (
                      <span className="text-secondary">• 🕒 {event.time}</span>
                    )}
                  </Card.Text>
                  <Card.Text className="flex-grow-1 text-muted">
                    {event.description?.length > 100
                      ? event.description.slice(0, 100) + "..."
                      : event.description || "No description"}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CurrentEvent;
