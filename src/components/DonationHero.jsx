import { Heart, Users } from "@phosphor-icons/react";
import donationHeart from "../assets/donation-heart.png";
import "../styles/DonateHeader.css";

export default function DonateHeader() {
  return (
    <section className="donate-hero">
      <div className="floating-heart heart-one">♥</div>
      <div className="floating-heart heart-two">♥</div>

      <div className="donate-hero-container">
        <div className="donate-hero-image">
          <div className="image-glow"></div>
          <img src={donationHeart} alt="Support SWAMI Home" />
        </div>

        <div className="donate-hero-text">
          <h1>
            <span className="title-line">
              Give <em>Hope.</em>
            </span>
            <span className="title-line">
              Share <em>Love.</em>
            </span>
          </h1>

          <p>
            Your generosity helps us provide quality care, meaningful programmes,
            and a safe home for persons living with dementia.
          </p>

          <div className="donate-hero-buttons">
            <a href="#donation-options" className="donate-main-btn">
              <Heart size={24} weight="fill" />
              Donate Now
            </a>

            <a href="/volunteer" className="donate-outline-btn">
              <Users size={24} weight="bold" />
              Volunteer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}