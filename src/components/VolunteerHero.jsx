import "../styles/Volunteer.css";
const VolunteerHero = () => (
  <section className="volunteer-hero">
    <div className="volunteer-hero__content">
      Support Our Projects
      <h1>Become a <span className="caveat-font">Volunteer</span></h1>
      <p>
        Join our mission to make a difference! As a volunteer, you’ll help
        create a positive impact in our community.
      </p>
      <a href="/contact-us" className="volunteer-hero__cta">
        Sign Up Now
      </a>
    </div>
  </section>
);

export default VolunteerHero;
