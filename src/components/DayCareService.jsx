import { Container } from "react-bootstrap";
const DaycareService = () => (
  <>
    <Container className="services-container mb-3  ">
      <div className="services-text-box">DayCare Services</div>
    </Container>
    <div className="box mb-3">
      <div className="row" id="Dementia-Day-Centre">
        <h2>Dementia Day Centre</h2>
        <p>
          Dementia Day Centre is part of the community-based Healthcare services
          available in Singapore for client requiring intermediate and long-term
          healthcare services. At SWAMI DDC, is one of the 5 Dementia Day Centre
          Programs under the purview of NCSS.
        </p>
        <h5>Service Boundaries</h5>
        <p>
          <ul>
            <li>Ang Mo Kio</li>
            <li>Upper Thomson</li>
            <li>Bishan</li>
            <li>Shunfu</li>
            <li>Yishun</li>
            <li>Sembawang</li>
            <li>Admiralty</li>
            <li>Woodlands</li>
            <li>Marsiling</li>
          </ul>
        </p>
        <h5>Service Targets</h5>
        <p>
          Mild to moderate Dementia patients who need assistance to optimize a
          sense of control, usefulness and social ability.
        </p>

        <h5>Service Model</h5>
        <p>
          Social Interaction through games and activities, Reminiscence Therapy,
          Reality Orientation, Rehabilitative Care through physiotherapy and
          occupational therapy
        </p>
        <hr />
      </div>
      <div className="row" id="Day-Rehabilitation-Centre">
        <h2>Day Rehabilitation Centre</h2>
        <p>
          The Day Rehabilitation Centre aims to provide quality rehabilitative
          therapy for clients suffering from aftermath of a stroke,
          de-conditioning due to genetic diseases such as Parkinson disease and
          those who require rehabilitation for regaining their functional
          abilities
        </p>

        <h4>Service Boundaries</h4>
        <p>
          <ul>
            <li>Ang Mo Kio</li>
            <li>Upper Thomson</li>
            <li>Bishan</li>
            <li>Shunfu</li>
            <li>Yishun</li>
            <li>Sembawang</li>
            <li>Admiralty</li>
            <li>Woodlands</li>
            <li>Marsiling</li>
          </ul>
        </p>

        <h4>Service Targets</h4>
        <p>
          Elderly with conditions such as stroke, Parkinson disease, post
          fracture, total hip replacement, knee amputation, de-conditioning due
          to medical issues. etc. requiring rehabilitation.
        </p>

        <h5>Service Model</h5>
        <p>
          Rehabilitation through physiotherapy and occupational therapy
          <br />
          Social interaction through recreational activities
        </p>
        <p></p>
      </div>
    </div>
  </>
);

export default DaycareService;
