import landingImg from "../assets/landing3.jpg";

const HeroSection2 = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-5 py-5">
        {/* Image on top for mobile, right for desktop */}
        <div className="col-12 col-lg-6 order-1 order-lg-2">
          <div className="d-flex justify-content-center justify-content-lg-end">
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

        {/* Text below image on mobile, left on desktop */}
        <div className="col-lg-6 order-2 order-lg-1">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Our Core Values
          </h1>
          <p className="lead">
             TRUTH, RIGHT CONDUCT, PEACE, LOVE and NON-VIOLENCE
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
