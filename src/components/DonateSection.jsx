import {
  QrCode,
  Gift,
  HandHeart,
  CreditCard,
  ArrowRight,
} from "@phosphor-icons/react";
import "../styles/DonationOptions.css";

export default function DonationOptions() {
  return (
    <section id="donation-options" className="donation-options-section">
      <div className="donation-options-container">
        <div className="donation-section-title">
          <span>Ways to Give</span>
          <h2>Choose a Donation Method</h2>
          <p>
            Your support helps SWAMI Home continue providing care, comfort, and
            meaningful programmes for our residents.
          </p>
        </div>

        <div className="donation-options-grid">
          <div className="donation-option-card">
            <div className="option-icon blue">
              <CreditCard size={34} weight="duotone" />
            </div>

            <h3>Donate via HitPay</h3>
            <p>
              Make a secure online donation using available payment methods.
            </p>

            <a
              href="https://securecheckout.hit-pay.com/payment-request/@sunshine-welfare-action-mission-swami"
              target="_blank"
              rel="noopener noreferrer"
              className="option-link"
            >
              Donate Now <ArrowRight size={18} />
            </a>
          </div>

          <div className="donation-option-card">
            <div className="option-icon blue">
              <QrCode size={34} weight="duotone" />
            </div>

            <h3>PayNow</h3>
            <p>
              Name: S W A M I (GENERAL DONATIONS)
              <br />
              UEN: S88SS0104KGDT
              <br />
              Reference: Your full name
            </p>

            <a
              href="mailto:enquiry@swami.org.sg"
              className="option-link"
            >
              Email for Tax Deduction <ArrowRight size={18} />
            </a>
          </div>

          <div className="donation-option-card">
            <div className="option-icon green">
              <Gift size={34} weight="duotone" />
            </div>

            <h3>Giving.sg</h3>
            <p>
              Support us through Giving.sg and contribute towards our mission.
            </p>

            <a
              href="https://www.giving.sg/organisation/profile/391a0ed5-0d05-4dad-ac37-2499db3de6fe"
              target="_blank"
              rel="noopener noreferrer"
              className="option-link green-link"
            >
              Donate via Giving.sg <ArrowRight size={18} />
            </a>
          </div>

          <div className="donation-option-card">
            <div className="option-icon pink">
              <HandHeart size={34} weight="duotone" />
            </div>

            <h3>Donation in Kind</h3>
            <p>
              Contribute useful items or supplies to support our residents and
              programmes.
            </p>

            <a href="/contact-us" className="option-link pink-link">
              Contact Us <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="tax-note">
          <strong>Note:</strong> SWAMI Home is an approved Institution of a Public Character (IPC). Qualifying donations are eligible for a 250% tax deduction, subject to IRAS guidelines. Please email us your donation details to facilitate your tax deduction.
        </div>
      </div>
    </section>
  );
}