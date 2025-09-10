import { Container } from "react-bootstrap";

const DaycareService = () => (
  <>
    <Container className="services-container mb-3  ">
      <div className="services-text-box">Home Care Services</div>
    </Container>
    <div className="box mb-3">
      <div className="row" id="home-medical">
        <h2>Home Medical & Home Nursing Services</h2>
        <p>
          Home Medical & Home Nursing continue to provide service to the client
          who are homebound.
        </p>
        <h5>Service Boundaries</h5>
        <p>
          <ul>
            <li>Sembawang</li>
            <li>Admiralty</li>
            <li>Marsiling</li>
            <li>Woodlands</li>
            <li>Chong Pang</li>
            <li>Yishun</li>
            <li>Ang Mo Kio</li>
            <li>Khatib</li>
            <li>Yio Chu Kang</li>
            <li>Kranji</li>
            <li>Yew Tee</li>
          </ul>
        </p>
        <h5>Service Targets</h5>
        <p>Homebound clients who require nursing care</p>

        <h5>Service Model(Home Medical)</h5>
        <p>
          <ul>
            <li>Regular Medical Review &amp; Prescription of medication</li>
            <li>Maximum 2 visits per month</li>
            <li>Management of Uncomplicated Medical Problems</li>
            <li>Referrals to other Health Care professionals when necessary</li>
          </ul>
        </p>
        <h5>Service Model (Home Nursing)</h5>
        <p>
          <ul>
            <li>Wound management</li>
            <li>Change of nasogastric tube &amp; urine catheter</li>
            <li>Blood pressures and glucose monitoring</li>
            <li>Care giving teaching</li>
            <li>Injection</li>
            <li>Supervision of medication</li>
          </ul>
        </p>
        <hr />
      </div>
      <div className="row" id="Home-Help-Services">
        <h2>Home Help Services</h2>
        <p>
          Home Help Services provide the five services to frail seniors and
          those who suffer from chronic diseases. We are here to support working
          family members in the care of the frail seniors. We extend our
          services to those who do not meet the criteria but are disabled and
          require care.
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

        <h5>Service Model</h5>
        <p>
          <ul>
            <li>Meals-on-Wheels Assistance</li>
            <li>Medical Escort Assistance</li>
            <li>House Keeping Assistance</li>
            <li>Personal Grooming Assistance</li>
            <li>Laundry</li>
          </ul>
        </p>
        <p></p>
      </div>
    </div>
  </>
);

export default DaycareService;
