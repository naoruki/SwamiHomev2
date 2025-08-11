import { Container } from "react-bootstrap";
import journey1 from "../assets/aboutus3.png";
import journey2 from "../assets/aboutus2.png";
const JourneySection = () => (
  <Container>
    {" "}
    <div className="container">
      <h1>Milestone</h1>
      <h2>1981</h2>
      <div className="row">
        <div className="col-12 col-md-6">
          <img
            src={journey1}
            className="img-fluid"
            alt="Landing Image"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-12 col-md-6">
          Visit to the Ashram Sometime in July 1981, a group of friends visited
          Sri Sathya Sai Baba’s Ashram (monastery) called Prasanthi Nilayam
          (Abode of the Highest Peace), located at Puttaparthi, a very remote
          village in the state of Andhra Pradesh, India.
        </div>
      </div>
      <div className="row mt-5 my-4">
        <div className="col-12 col-md-6">
          <p>
            The group of 29 people was thrilled to be called in for an interview
            by Sri Sathya Sai Baba.
          </p>
          <p>
            they were considered very fortunate by other devotees as there was
            no way one could fix an “appointment” to see Swami, as Sri Sathya
            Sai Baba was known.. Baba lovingly taught them that the highest
            spiritual practice was, “Love All, Serve All”; and that “Love had to
            be expressed as selfless service with no expectations…”His key
            advice was to expand one’s heart and to do service without any
            expectation or recognition for any reward or personal gain.
          </p>
          <p>Baba encouraged the volunteer group to engage in regular social</p>
          work.
        </div>
        <div className="col-12 col-md-6">
          <img
            src={journey2}
            className="img-fluid"
            alt="Landing Image"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </Container>
);

export default JourneySection;
