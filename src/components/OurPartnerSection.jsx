import lionclub_logo from "../assets/lionclub_logo.jpg";
import IWAlogo from "../assets/IWAlogo.png";
import "../styles/Partner.css";
const partners = [
  {
    name: "Lions Club",
    logo: lionclub_logo,
    website: "https://lionsclubs.org.sg/",
  },
  {
    name: "Indian Women's Association Singapore",
    logo: IWAlogo,
    website: "https://www.iwasingapore.org/",
  },
];

const OurPartners = () => (
  <section className="our-partners">
    <h2>Our Partners</h2>
    <div className="partners-list">
      {partners.map((partner) => (
        <a
          key={partner.name}
          href={partner.website}
          target="_blank"
          rel="noopener noreferrer"
          className="partner-item"
        >
          <img src={partner.logo} alt={partner.name} />

        </a>
      ))}
    </div>
  </section>
);

export default OurPartners;
