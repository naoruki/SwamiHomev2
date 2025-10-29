import { Container } from "react-bootstrap";
import CurrentEvents from "../components/CurrentEvents.jsx";

const CurrentEventsPage = () => {
  return (
    <Container>
      <div className="header-hero">
        <h1>Upcoming Events</h1>
      </div>
      <CurrentEvents />
    </Container>
  );
};

export default CurrentEventsPage;
