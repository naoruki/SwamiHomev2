import { Container } from "react-bootstrap";

const CurrentEvent = () => {
  return (
    <div className="box mb-3">
      <Container className="py-5 text-center">
        {/* <h2 className="fw-bold text-center mb-4 text-pink">Upcoming Events</h2> */}
        {/* <div className="divider mx-auto mb-4"></div> */}
        <p className="lead text-muted mb-0">No current events at the moment.</p>
      </Container>
    </div>
  );
};

export default CurrentEvent;
