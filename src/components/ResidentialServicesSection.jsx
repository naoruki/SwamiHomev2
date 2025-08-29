import { Container } from "react-bootstrap";


const OurJourney = () => {
  return (
    <Container>
      <div id="our-journey" className="our-journey">
        <hr />

        <div className="row">
          <div className="col-12 col-md-12 residential-care" id="residential-care">
            <h2>Geriatric Residential Care</h2>
            <p>
              SWAMI Home’s Residential Care is a nursing support residence for
              elderly people who want to live in a home care environment with
              holistic activities. It comprises 190-bedded Geriatric
            </p>
            <p>-Service Targets</p>
            <ul>
              <li>
                Frail with medical needs, physically disabled mentally
                challenged who require a high level of long term care.
              </li>

              <li>Elderly whose caregivers need a respite</li>
            </ul>
            <p>-Service Model</p>
            <ul>
              <li>Nursing and medical care</li>
              <li>
                Rehabilitation through physiotherapy and occupational therapy
              </li>

              <li>
                Specialized care through visits by geriatrician, psycho
                geriatrician, resident medical officer, rehab specialist,
                pharmacist, podiatrist, speech therapist and dietetic services
                from a dietician
              </li>

              <li>
                Holistic care that involves community outings and and activities
              </li>
            </ul>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-12 col-md-12 dementia-care" id="dementia-care">
            <h2>Dementia Residence</h2>
            <p>-Service Targets</p>
            <ul>
              <li>Elderly with Dementia</li>
            </ul>
            <br/>
            <p>-Service Model</p>
            <ul>
              <li>Nursing and medical care</li>
              <li>
                Rehabilitation through physiotherapy and occupational therapy
              </li>

              <li>
                Specialized care through visits by geriatrician, psycho
                geriatrician, resident medical officer, rehab specialist,
                pharmacist, podiatrist, speech therapist and dietetic services
                from a dietician
              </li>

              <li>
                Holistic care that involves community outings and and activities
              </li>
              <li>
                Reminiscence therapy, reality orientation, sensory stimulation
              </li>
              <li>Pet Therapy</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OurJourney;
