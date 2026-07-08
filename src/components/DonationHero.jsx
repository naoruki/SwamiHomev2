import { Heart, Users } from "@phosphor-icons/react";
import donationHeart from "../assets/donation-heart.png";
import "../styles/DonateHeader.css";

export default function DonateHeader() {
  return (
    <section className="donate-hero">
      <div className="floating-heart heart-one">♥</div>
      <div className="floating-heart heart-two">♥</div>
      <div className="floating-heart heart-three">♥</div>

      <div className="donate-hero-container">
        <div className="donate-hero-text">
          <div className="support-pill">💗 Support SWAMI Home</div>

          <h1>
            Give <span>Hope.</span>
            <br />
            Share <span>Love.</span>
          </h1>

          <p>
            Your generosity helps us provide quality care, meaningful programmes,
            and a safe home for persons living with dementia.
          </p>

          <div className="donate-hero-buttons">
            <a
              href="https://securecheckout.hit-pay.com/payment-request/@sunshine-welfare-action-mission-swami"
              target="_blank"
              rel="noopener noreferrer"
              className="donate-main-btn"
            >
              <Heart size={24} weight="fill" />
              Donate Now
            </a>

            <a href="/volunteer" className="donate-outline-btn">
              <Users size={24} weight="bold" />
              Volunteer
            </a>
          </div>
        </div>

        <div className="donate-hero-image">
          <div className="image-glow"></div>
          <img src={donationHeart} alt="Support SWAMI Home" />
        </div>
      </div>

      <div className="hero-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,64 C240,130 480,10 720,70 C960,130 1200,40 1440,90 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}