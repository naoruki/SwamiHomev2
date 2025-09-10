import { Container } from "react-bootstrap";
const TherapySection = () => (
  <>
    <Container className="services-container mb-3  ">
      <div className="services-text-box">Therapy Services</div>
    </Container>
    <div className="box mb-3">
      <div className="row" id="Occupational-Therapy">
        <p>
          There are a number of options when it comes to care at SWAMI Home. As
          we all know, no two person have the exact same requirements. Thus, we
          strive to ensure flexibility in our methodology and to provide care
          and support that puts our residents at the heart of everything we do.
        </p>
        <h2>Occupational Therapy</h2>
        <p>
          Our occupational therapists work with residents and clients who need
          specialized assistance to lead independent, productive and satisfying
          lives due to physical, developmental, social or emotional problems.
          Occupational therapists use the “occupations” of self-care, work, and
          play/leisure activities to increase independence, enhance development,
          and/or prevent disability.
        </p>
        <h5>Rehabilitation Therapy Services</h5>
        <p>
          <ul>
            <li>Activities of Daily Living (ADL) re-training</li>
            <li>
              Advice on the use of orthosis, prosthesis or assistive/adaptive
              devices
            </li>
            <li>Advice on occupational ergonomics</li>
            <li>Home assessments and recommendations on home modification</li>
            <li>Leisure and recreational therapy</li>
            <li>Caregiver training and patient education</li>
            <li>Wheelchair and seating assessment</li>
            <li>Community re-integration program</li>
          </ul>
        </p>
      </div>
      <hr />
      <div className="row" id="Physiotherapy">
        <h2>Physiotherapy</h2>
        <p>
          Physiotherapy is a therapeutic health profession concerned with
          mobility and improving functions, thus enhancing the quality of life.
          It adopts physical therapeutic means and exercises to ensure maximum
          recovery and early independence of our residents and clients.
        </p>

        <p>
          The main objective is to develop, maintain, restore and optimise
          health and function throughout the lifespan, which includes providing
          services to people compromised by ageing and injury. Encompassing
          physical, psychological, emotional, and social well-being,
          physiotherapy identifies and maximizes movement potential by using the
          principles of promotion, prevention, treatment/intervention,
          habilitation and rehabilitation.
        </p>

        <h5>Photo</h5>

      </div>
    </div>
  </>
);

export default TherapySection;
