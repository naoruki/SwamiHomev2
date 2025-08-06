import landingImg from "../assets/landingimage4.svg";

const HeroSection3 = () => {
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
            Our Philosophical Values
          </h1>
          <p className="lead">
            Our strongest belief is that every individual’s needs are unique and
            we strive to deliver care and support to meet our residents’
            requirements at every stage of their time with us. dignity, and
            respect. At SWAMI Home, every resident is embraced like family,
            supported by dedicated staff in a safe and nurturing environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection3;
