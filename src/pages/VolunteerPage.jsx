import { Container } from "react-bootstrap";
import VolunteerSection from "../components/VolunteerSection";
import VolunteerHero from "../components/VolunteerHero";
const VolunteerPage = () => {
  return (
    <Container>
      <VolunteerHero />

      <VolunteerSection/>
    </Container>
  );
};

export default VolunteerPage;
