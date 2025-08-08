import { Container, Row, Col, Button } from "react-bootstrap";
import heroImage from "../assets/donateimg.png"; // Update path as needed

const DonationHero = () => {
  return (
    <Container className="py-5">
      <Row className="align-items-center g-5">
        {/* Left Column: Image */}
        <Col xs={12} sm={12} lg={6} className="pt-5 pt-sm-0 text-center ">
          <img
            src={heroImage}
            className="d-block mx-auto img-fluid"
            alt="Bootstrap Themes"
            width={700}
            height={500}
            loading="lazy"
          />
        </Col>

        {/* Right Column: Text */}
        <Col lg={6}>
          <h1 className="fw-bold lh-1 mb-3">
            Give <span className="caveat-font">Hope</span>. Share{" "}
            <span className="caveat-font">Love</span>.
          </h1>
          <p className="lead p-2">
            Make a difference in the lives of those in need. Your generous
            donations help us provide essential services and support to our
            community. Every contribution counts, no matter how small.
          </p>
          <div className="row g-2">
            <div className="col-12 col-md-4">
              <Button size="lg" className="volunteer-button w-100">
                Donate
              </Button>
            </div>
            <div className="col-12 col-md-4">
              <Button size="lg" className="volunteer-button w-100">
                Volunteer
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DonationHero;
