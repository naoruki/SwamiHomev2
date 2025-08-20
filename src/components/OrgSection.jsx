import swamihome3 from "../assets/organizationchart.svg";
import { Container } from "react-bootstrap";
const OrgSection = () => (
  <div className="container">
    <div className="header-hero">
      <h1>Organization Structure</h1>
    </div>
    <div className="organization-chart mb-4">
      <img
        src={swamihome3}
        className="img-fluid"
        alt="Landing Image"
        width="700"
        height="500"
        loading="lazy"
      />
    </div>
    <div><h1></h1></div>
  </div>
);

export default OrgSection;
