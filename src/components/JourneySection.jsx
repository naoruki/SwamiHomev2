import { Container } from "react-bootstrap";
import journey1 from "../assets/aboutus3.png";
import journey2 from "../assets/aboutus2.png";
import firsthome from "../assets/firsthome.png";
import firsthome2 from "../assets/firsthome2.png";
import secondhome from "../assets/secondhome.png";
import before from "../assets/Picture3.png";
import emptyLand from "../assets/swami3home.png";
import swamihome3 from "../assets/swami3homeafter.png";
import sunshine from "../assets/sunshine.png";
import graceopen from "../assets/graceopen.png";
import grace from "../assets/grace.png";
import ImageSlider from "./ImageSlider.jsx";

const JourneySection = () => {
  const slides = [
    { image: before, caption: "Before renovation, 1992" },
    { image: secondhome, caption: "Completed in 1993" },
  ];
  const slides2 = [
    { image: emptyLand, caption: "Year 1995" },
    {
      image: swamihome3,
      caption: "Year 1997, Swami Home at 5 Sembawang Walk is completed ",
    },
  ];
  const sunshineSlides = [
    {
      image: graceopen,
      caption: "Open on 16th November 2019 by Mr Ong Ye Kung",
    },
    {
      image: grace,
    },
  ];
  return (
    <Container>
      <div id="our-journey" className="container">
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
            Visit to the Ashram Sometime in July 1981, a group of friends
            visited Sri Sathya Sai Baba’s Ashram (monastery) called Prasanthi
            Nilayam (Abode of the Highest Peace), located at Puttaparthi, a very
            remote village in the state of Andhra Pradesh, India.
          </div>
        </div>
        <div className="row  my-4">
          <div className="col-12 col-md-6 order-2 order-md-1">
            <h3>First Interview with Sri Sathya Sai Baba</h3>
            <p>
              The group of 29 people was thrilled to be called in for an
              interview by Sri Sathya Sai Baba.
            </p>
            <p>
              they were considered very fortunate by other devotees as there was
              no way one could fix an “appointment” to see Swami, as Sri Sathya
              Sai Baba was known.. Baba lovingly taught them that the highest
              spiritual practice was, “Love All, Serve All”; and that “Love had
              to be expressed as selfless service with no expectations…”His key
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
              sale through a local newspaper. They Paid S$25,000 which from its
              23 members by selflessly pooling together their savings.
            </p>
            <h3>The First Home at 19 Kee Ann Road</h3>
            <p>
              It housed 20 elderly residents in 3 separate rooms. Subsequently
              in October 1988, the Volunteer Management Group decided to
              register the nursing home with the Registry of Societies. The home
              was renamed as Sunshine Welfare Action Mission Home which it is
              now known by its acronym “SWAMI HOME”
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
            <h2>1988 ~ 1992 @ 19 Kee Ann Road </h2>
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
            <ImageSlider slides={slides} />
          </div>
          <div className="col-12 col-md-6">
            <h3>Second Home – 52 Bah Tan Road</h3>
            <p>
              When Swami Home received a quit notice from HDB due to the
              development of Sembawang MRT Station, the team faced a major
              turning point. Several vacant schools in the area were offered for
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
              renovation works began, marking the start of a new chapter in
              their mission to serve the elderly with love and dignity.
            </p>

            <h3>MRT Letter to Vacate</h3>
            <p>
              Before the team could raise further funds to begin with the
              renovation of the 4 storey building, a letter was received from
              MRT notifying them to vacate the premises by end of 1995. The site
              was earmarked for the proposed construction of the Sembawang MRT
              station! whole exercise of sourcing for funds, finding a place and
              planning to run a home had to start all over again from scratch.
            </p>
          </div>
        </div>
        <div className="row  my-4">
          <h2>1995-1997</h2>
          <div className="col-12 col-md-6 order-2 order-md-1">
            <p>
              Finally the third Home with constructed and completed in September
              1997 at 5, Sembawang Walk is where SWAMI HOME now stands. The
              building design had to incorporate an “open concept” In addition,
              SWAMI HOME had to be nature based; with air, water, the earth and
              plants creating a space of beauty and peace, where elderly
              residents could spend their sunset years. The team was committed
              to enabling the elderly live comfortable and dignified lives
              during their remaining twilight years.
            </p>
          </div>
          <div className="col-12 col-md-6 order-1 order-md-2">
            <ImageSlider slides={slides2} />
          </div>
        </div>
      </div>
      <div className="row my-4">
        <h2>2000</h2>
        <div className="col-12 col-md-6">
          <img
            src={sunshine}
            className="img-fluid"
            alt="Landing Image"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-12 col-md-6">
          <h3>Opening Of Sunshine Building</h3>
          <p>
            ELDERLINK Dementia BUILDING now known as SUNSHINE In 2000, hardly 3
            years since SWAMI HOME was built, the team successfully applied for
            an extension of an adjacent forested land to MOH through the help of
            the Minister from the constituency to build a Home for the elderly
            suffering from dementia. The 4 storey building was completed in
            2004. Under this project, day-care elderly are provided daily care
            services including over weekends.
          </p>
        </div>
      </div>
      <div className="row  my-4">
        <h2>2018</h2>
        <div className="col-12 col-md-6 order-2 order-md-1">
          <p>
            The extension of Grace building was completed in early 2018 to cater
            for 50 bedded dementia residents with roof top Garden.
          </p>
        </div>
        <div className="col-12 col-md-6 order-1 order-md-2">
          <ImageSlider slides={sunshineSlides} />
        </div>
      </div>
    </Container>
  );
};

export default JourneySection;
