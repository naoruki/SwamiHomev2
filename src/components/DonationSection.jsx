import { Link } from "react-router-dom";
import {
  HeartIcon,
  HandHeartIcon,
} from "@phosphor-icons/react";
import "../styles/DonationSection.css";
import graceopen from "../assets/hearthand.png";
const DonationSection = () => {
  return (
    <section className="donation-section">
      <div className="container-fluid px-2 px-lg-5">

        <div className="donation-card">

          <div className="row align-items-center">

            {/* Left */}
            <div className="col-lg-3 text-center">

              {/* <div className="heart-circle">
                <HandHeartIcon
                  size={90}
                  weight="duotone"
                />
              </div> */}
              <img src={graceopen} alt="Grace Open" className="img-fluid" />
            </div>

            {/* Middle */}
            <div className="col-lg-6">

              <h2 className="donation-title">
                Together, We Can Make a Difference
              </h2>

              <p className="donation-description">
                Every contribution helps us provide compassionate care,
                meaningful activities, and a loving home for our seniors.
                Your generosity enables us to continue serving our community
                with dignity, respect, and compassion.
              </p>

            </div>

            {/* Right */}
            <div className="col-lg-3">

              <div className="donation-actions">

                <Link
                  to="/donate"
                  className="donation-btn donate-btn"
                >
                  Support Our Mission
                </Link>

                <Link
                  to="/volunteer"
                  className="donation-btn volunteer-btn"
                >
                  Get Involved
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default DonationSection;