
import { Container } from "react-bootstrap";
import DonateSection from "../components/DonateSection";
import DonationHero from "../components/DonationHero";
const DonateHero = () => {
  return (
    <Container>
      <DonationHero />
      <DonateSection />
    </Container>
  );
};

export default DonateHero;
