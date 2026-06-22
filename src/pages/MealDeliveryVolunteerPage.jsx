import { Container, Row, Col, Card } from "react-bootstrap";
import MealDeliverHero from "../components/MealDeliverHero";
import { WhatsappLogoIcon } from "@phosphor-icons/react";
import meal1 from "../assets/leshan/mealonwheels1.jpg";
import meal2 from "../assets/leshan/mealonwheels2.jpg";
import meal3 from "../assets/leshan/mealonwheels3.jpg";
const MealDeliveryVolunteerPage = () => {
  return (
    <Container>
      <MealDeliverHero />
      <Row className="mt-5 align-items-start">
        {/* Video */}
        <Col lg={4} md={12} className="mb-4">
          <iframe
            width="100%"
            height="560"
            src="https://www.youtube.com/embed/HizhrMkLS_E"
            title="Meals on Wheels Volunteer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              borderRadius: "12px",
              border: "none",
            }}
          />
        </Col>

        {/* Story */}
        <Col lg={5} md={12} className="mb-4">
          <h2 className="mb-4">A simple act that means the world.</h2>

          <p>
            Through a partnership between <strong>SWAMI Home</strong> and
            <strong> Le Shan</strong>, Meals on Wheels ensures that nutritious
            meals are delivered to seniors and individuals with mobility
            challenges in the community.
          </p>

          <p>
            Our volunteers do more than deliver meals. They bring warmth,
            companionship, and reassurance to those who may otherwise spend much
            of their day alone.
          </p>

          <p>
            Every visit is an opportunity to brighten someone's day with a
            friendly smile, a caring conversation, and a reminder that they are
            not forgotten. Together, SWAMI Home, Le Shan, and our dedicated
            volunteers help build a more caring and connected community.
          </p>
        </Col>

        {/* Benefits */}
        <Col lg={3} md={12}>
          <Card className="mb-3 border-0 shadow-sm">
            <Card.Body>
              <h5>💖 Make an Impact</h5>
              <p className="mb-0">
                Bring joy and comfort to seniors in our community.
              </p>
            </Card.Body>
          </Card>

          <Card className="mb-3 border-0 shadow-sm">
            <Card.Body>
              <h5>⏰ Flexible & Meaningful</h5>
              <p className="mb-0">
                Choose a schedule that fits your availability.
              </p>
            </Card.Body>
          </Card>

          <Card className="border-0 shadow-sm">
            <Card.Body>
              <h5>🤝 Caring Community</h5>
              <p className="mb-0">
                Join a team that spreads kindness every day.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Volunteer Showcase */}
      <Row className="mt-5">
        <Col md={12}>
          <h3 className="mb-4">Our Volunteers in Action</h3>
        </Col>

        <Col lg={4} md={6} className="mb-4">
          <Card className="border-0 shadow-sm h-100">
            <Card.Img
              variant="top"
              src={meal1}
              style={{ height: "220px", objectFit: "cover" }}
            />
          </Card>
        </Col>

        <Col lg={4} md={6} className="mb-4">
          <Card className="border-0 shadow-sm h-100">
            <Card.Img
              variant="top"
              src={meal2}
              style={{ height: "220px", objectFit: "cover" }}
            />
          </Card>
        </Col>

        <Col lg={4} md={6} className="mb-4">
          <Card className="border-0 shadow-sm h-100">
            <Card.Img
              variant="top"
              src={meal3}
              style={{ height: "220px", objectFit: "cover" }}
            />
          </Card>
        </Col>
      </Row>
      {/* CTA */}
      <Card
        className="mt-5 border-0"
        style={{
          backgroundColor: "#FFF0F5",
          borderRadius: "16px",
        }}
      >
        <Card.Body className="d-flex justify-content-between align-items-center flex-wrap">
          <div>
            <h3>Be the reason someone smiles today.</h3>
            <p className="mb-0">
              Contact us on WhatsApp to know more details about our Meals on
              Wheels <b>Volunteer</b> program.
            </p>
          </div>

          <div>
            <a
              href="https://wa.me/6590816541"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <WhatsappLogoIcon size={60} color="#25D366" />
            </a>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MealDeliveryVolunteerPage;
