import landingImg from "../assets/landingimageHQ.svg"; // Adjust path if needed
const HeroSection = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-5 py-5">
        <div className="col-12 col-lg-6">
          <div className="d-flex justify-content-center justify-content-lg-start">
            <img
              src={landingImg}
              className="img-fluid"
              alt="Landing Image"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Welcome to SWAMI Home
          </h1>
          <h4>Where Care Meets Compassion</h4>
          <p className="lead">
            We’re more than a nursing home, we’re a community built on love,
            dignity, and respect. At SWAMI Home, every resident is embraced like
            family, supported by dedicated staff in a safe and nurturing
            environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
