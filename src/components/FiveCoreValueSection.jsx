import { Container } from "react-bootstrap";

const coreValues = [
  {
    title: "Love",
    description:
      "Expressing compassion, kindness, and selflessness towards all beings.",
  },
  {
    title: "Peace",
    description:
      "Cultivating inner calm, harmony, and tranquility in thoughts and actions.",
  },
  {
    title: "Truth",
    description:
      "Upholding honesty, integrity, and authenticity in every aspect of life.",
  },
  {
    title: "Right Conduct",
    description:
      "Practicing ethical behavior, responsibility, and moral values.",
  },
  {
    title: "Non Violence",
    description:
      "Promoting respect, understanding, and non-harm towards all living things.",
  },
];

const FiveCoreValueSection = () => (
  <section className="core-values-section">
    <Container>
      <h2>Our Five Core Values</h2>
      <div className="core-values-grid">
        {coreValues.map((value) => (
          <div key={value.title} className="core-value-card">
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default FiveCoreValueSection;
