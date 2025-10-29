import PropTypes from "prop-types";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/Activities.css";

const ActivitiesSection = ({ sectionTitle, items }) => {
  return (
    <section className="activities-section py-5">
      <Container>
        {sectionTitle && (
          <h2 className="text-center fw-bold mb-5">{sectionTitle}</h2>
        )}
        <Row className="g-4 justify-content-center">
          {items.slice(0, 3).map((item, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <Card className="activity-card h-100 shadow-sm border-0">
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
