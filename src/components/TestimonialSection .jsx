
import "../styles/Testimonial.css";
const testimonials = [
  {
    name: "Jane Doe",
    text: "SwamiHome made my move so easy and stress-free!",
  },
  {
    name: "John Smith",
    text: "Excellent service and friendly staff. Highly recommended!",
  },
];

const Testimonial = () => (
  <section className="testimonials-section mb-3">
    <h2>From the Heart of Our Community</h2>
    <div className="testimonials-container">
      {testimonials.map((t, idx) => (
        <div key={idx} className="testimonial-card">
          <p className="testimonial-text">{t.text}</p>
          <strong>{t.name}</strong>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonial;
