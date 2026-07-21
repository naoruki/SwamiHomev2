import "../styles/ContactHero.css";

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div
        className="contact-decoration contact-heart-one"
        aria-hidden="true"
      >
        ♥
      </div>

      <div
        className="contact-decoration contact-heart-two"
        aria-hidden="true"
      >
        ♥
      </div>

      <div
        className="contact-decoration contact-heart-three"
        aria-hidden="true"
      >
        ♥
      </div>

      <div
        className="contact-decoration contact-heart-four"
        aria-hidden="true"
      >
        ♥
      </div>

      <div
        className="heart-trail heart-trail-left"
        aria-hidden="true"
      />

      <div
        className="heart-trail heart-trail-right"
        aria-hidden="true"
      />



      <div className="contact-hero-content">
        {/* <p className="contact-eyebrow">We’re here to help</p> */}

        <h1>Contact Us</h1>

        <p className="contact-intro">
          We’d love to hear from you. Reach out with your questions, feedback,
          or partnership enquiries and our team will get back to you as soon as
          possible.
        </p>
      </div>

      <div className="contact-wave" aria-hidden="true">
        <svg
          viewBox="0 0 1440 130"
          preserveAspectRatio="none"
          role="presentation"
        >
          <path
            d="M0,58 C220,8 390,125 620,78 C850,32 1030,118 1440,52 L1440,130 L0,130 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}