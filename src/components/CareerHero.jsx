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

        <div className="career-hero-buttons mt-3">
          <a href="#job-listing" className="btn btn-light">
            Please click here for our openings
          </a>
        </div>
      </div>
    </Container>
  );
};

export default CareerHero;
