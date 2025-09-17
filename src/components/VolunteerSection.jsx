import projectimg from "../assets/projectvol.jpg";
const VolunteerSection = () => {
  return (
    <section>
      <div className="container">
        <h2>Support Our Project</h2>
        <div className="row">
          <div className="col-12 col-md-6">
            <img
              src={projectimg}
              className="img-fluid"
              alt="Landing Image"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-12 col-md-6">
            <h5>
              As a responsible business and individual looking to create a
              sustainable future and a viable environment, you are one of the
              key custodians. Together, we can make a constructive influence in
              SWAMI Home that the staff work, residents live, and improve their
              lives in.
            </h5>
            <ul>
              <li>
                SWAMI Home works closely with you to identify suitable
                partnership projects that match your organization's Corporate
                Social Responsibility principles and ideals, or are in line with
                your donation requests.
              </li>
              <li>
                You can play a part to realize SWAMI Home’s vision by supporting
                projects in our voluntary programmes.
              </li>
              <li>
                Opportunities abound in areas of value-added developments,
                outreach and education. 100% of your donation to SWAMI Home will
                go into the supported programmes. Your donation is not used to
                cover operating costs and will qualify for 2.5 times tax
                deduction.
              </li>
              <li>
                In addition to relevant sponsors' acknowledgement benefits,
                there are also volunteer opportunities for some of the projects.
              </li>
              <li>Support our projects and be our volunteers now.</li>
            </ul>
           
          </div>
        </div>
        <h5>Ready to make a difference? Click <a href="/contact-us">here</a> to apply</h5>
      </div>

    </section>
  );
};

export default VolunteerSection;
