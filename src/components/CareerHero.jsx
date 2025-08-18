import { Container } from "react-bootstrap";

const CareerHero = () => {
  return (
    <Container className="career-hero pb-5 ">
      <div className="career-hero-content">
        <h1>Join Us at Swami Home</h1>
        <p>
          By joining SWAMI Home, you will enter a working environment that will
          challenge your professionalism and interpersonal skills. Our services
          are built on quality, integrity and dedication. We invite you to come
          and build your career in an organization that sets the standard for
          excellence in clinical healthcare.
        </p>
        <div className="career-hero-buttons">
          <a href="/careers" className="btn btn-primary">
            Explore Careers
          </a>
          <a href="/volunteer" className="btn btn-outline-light">
            Become a Volunteer
          </a>
        </div>
      </div>
    </Container>
  );
};

export default CareerHero;
