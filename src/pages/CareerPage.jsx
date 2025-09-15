import { Container } from "react-bootstrap";
import CareerHero from "../components/CareerHero";
import CareerSection from "../components/CareerSection";
import ListOfJob from "../components/ListOfJob";
const Career = () => {
  return (
    <Container>
      <CareerHero />
      <CareerSection/>
      {/* <ListOfJob/> */}
    </Container>
  );
};

export default Career;
