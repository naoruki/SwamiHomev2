import { Container } from "react-bootstrap";
import journey1 from "../assets/aboutus3.png";
import journey2 from "../assets/aboutus2.png";
import firsthome from "../assets/firsthome.png";
import firsthome2 from "../assets/firsthome2.png";
import secondhome from "../assets/secondhome.png";
const JourneySection = () => (
  <Container>
    {" "}
    <div className="container">
      <h1>Our Journey</h1>
      <hr></hr>
      <h2>Year 1981</h2>
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
          <h3>Visit to the Ashram</h3>
          Visit to the Ashram Sometime in July 1981, a group of friends visited
          Sri Sathya Sai Baba’s Ashram (monastery) called Prasanthi Nilayam
          (Abode of the Highest Peace), located at Puttaparthi, a very remote
          village in the state of Andhra Pradesh, India.
        </div>
      </div>
      <div className="row  my-4">
        <div className="col-12 col-md-6 order-2 order-md-1">
          <h3>First Interview with Sri Sathya Sai Baba</h3>
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
          <p>
            Baba encouraged the volunteer group to engage in regular social
            work.
          </p>
        </div>
        <div className="col-12 col-md-6 order-1 order-md-2">
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
      <div className="row my-4">
        <h2>1986</h2>
        <div className="col-12 col-md-6">
          <img
            src={firsthome}
            className="img-fluid"
            alt="Landing Image"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-12 col-md-6 ">
          <h3>Purchase of a 20 Bed Commercial Home</h3>
          <p>
            In May 1986, a 20-bed commercial Old Age Home was advertised for
            sale through a local newspaper. They Paid S$25,000 which from its 23
            members by selflessly pooling together their savings.
          </p>
          <h3>The First Home at 19 Kee Ann Road</h3>
          <p>
            It housed 20 elderly residents in 3 separate rooms. Subsequently in
            October 1988, the Volunteer Management Group decided to register the
            nursing home with the Registry of Societies. The home was renamed as
            Sunshine Welfare Action Mission Home which it is now known by its
            acronym “SWAMI HOME”
          </p>
          <h3>HDB Letter to Vacate</h3>
          <p>
            Two years after the group began Home operations; they received a
            letter from HDB notifying that the site would be acquired for
            re-development and that they had to look for premises elsewhere.
          </p>
        </div>
      </div>
      <div className="row  my-4">
        <div className="col-12 col-md-6 order-2 order-md-1">
          <h3>1988 ~ 1992 @ 19 Kee Ann Road </h3>
          <p>
            From 50 to 100 bedded
            <br />
            30 - 40 Staff
            <br />
            Quit notice to give way to Sembawang MRT Station
          </p>
        </div>
        <div className="col-12 col-md-6 order-1 order-md-2">
          <img
            src={firsthome2}
            className="img-fluid"
            alt="Landing Image"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
      <div className="row my-4 ">
        <h2>1988 ~ 1992 </h2>
        <div className="col-12 col-md-6">
          <img
            src={secondhome}
            className="img-fluid"
            alt="Landing Image"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-12 col-md-6">
          <h3>Second Home – 52 Bah Tan Road</h3>
          <p>
            When Swami Home received a quit notice from HDB due to the
            development of Sembawang MRT Station, the team faced a major turning
            point. Several vacant schools in the area were offered for
            relocation, and eventually, the old Canberra Primary School at 52
            Bah Tan Road was chosen as the new home.
          </p>
          <p>
            Guided by the teachings of Sri Sathya Sai Baba, whom the team
            considers the spiritual founder, they moved forward with faith and
            unity. His message—“If you do good work, God will always bless
            you”—became their guiding light.
          </p>
          <p>
            Thanks to a generous donation of S$250,000 from a businessman,
            renovation works began, marking the start of a new chapter in their
            mission to serve the elderly with love and dignity.
          </p>

          <h3>MRT Letter to Vacate</h3>
          <p>
            Before the team could raise further funds to begin with the
            renovation of the 4 storey building, a letter was received from MRT
            notifying them to vacate the premises by end of 1995. The site was
            earmarked for the proposed construction of the Sembawang MRT
            station! whole exercise of sourcing for funds, finding a place and
            planning to run a home had to start all over again from scratch.
          </p>
        </div>
      </div>
    </div>
  </Container>
);

export default JourneySection;
