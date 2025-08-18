const CareerSection = () => {
  return (
    <section className="career-section">
      <div className="career-section-content">
        <h2>Grow With Us</h2>
        {/* <p>
          At Swami Home, we believe in building a team that shares our heart for
          care, compassion, and community. Whether you're a healthcare
          professional, support staff, or a passionate volunteer, your journey
          with us will be meaningful and impactful.
        </p> */}

        <div className="career-highlights">
          <div className="highlight">
            <h3>Drop us your resume </h3>
            <p>Email: hr@swami.org.sg </p>
            Human Resources
            <br />
            Sunshine Action Welfare Mission (SWAMI Home)
            <p />5 Sembawang Walk
            <br />
            Singapore 757717
            <br />
            Tel : 6257 6117
            <br />
            Fax : 6754 8443
          </div>

          <div className="highlight">
            <h3>Or fill up this form</h3>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Contact Number"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Interested Position"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="mb-3">
              <button type="button" class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
