import { Container } from "react-bootstrap";
import PastEvents from "../components/PastEvents.jsx";

const PastEventsPage = () => {
  return (
    <Container>
        <div className="header-hero">
      <h1>Past Events</h1>
    </div>
      <PastEvents />


    </Container>
  );
};

export default PastEventsPage;
