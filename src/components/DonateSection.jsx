import { useEffect, useState } from "react";

import {
  QrCode,
  Gift,
  HandHeart,
  CreditCard,
  ArrowRight,
  X,
  FileText,
} from "@phosphor-icons/react";

import payNowQR from "../assets/paynow.png";
import "../styles/DonationOptions.css";

export default function DonationOptions() {
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    if (showQR) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showQR]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setShowQR(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

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

        {/* Donation receipt information */}
        <div className="receipt-info-box">
          <div className="receipt-icon">
            <FileText size={42} weight="duotone" />
          </div>

          <div className="receipt-content">
            <h3>For Donation Receipt and Tax Deduction</h3>

            <p>
              After making your donation, please email us the following details
              so that we can process your donation receipt and tax deduction,
              where applicable:
            </p>

            <div className="receipt-details-grid">
              <ul>
                <li>Full name *</li>
                <li>Phone number *</li>
                <li>Mailing address *</li>
              </ul>

              <ul>
                <li>Donation amount *</li>
                <li>Transfer reference number *</li>
              </ul>
            </div>

            <div className="receipt-email">
              <span>Email us at</span>

              <a href="mailto:enquiry@swami.org.sg">
                enquiry@swami.org.sg
              </a>
            </div>
          </div>
        </div>
        <div className="donation-options-grid">
          {/* PayNow */}
          <div className="donation-option-card">
            <div className="option-icon blue">
              <QrCode size={34} weight="duotone" />
            </div>

            <h3>PayNow</h3>

            <p className="paynow-details">
              <strong>Name:</strong> S W A M I (GENERAL DONATIONS)
              <br />
              <strong>PayNow ID:</strong> S88SS0104KGDT
              <br />
              <strong>Reference:</strong> Your NRIC/FIN number and Full name for tax deduction
              purposes.

            </p>

            <button
              type="button"
              className="paynow-qr-button"
              onClick={() => setShowQR(true)}
              aria-label="Enlarge SWAMI Home PayNow QR code"
            >
              <img
                src={payNowQR}
                alt="SWAMI Home PayNow QR Code"
                className="paynow-qr-image"
              />

              <span>Click QR code to enlarge</span>
            </button>
          </div>

          {/* Giving.sg */}
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
              Donate via Giving.sg
              <ArrowRight size={18} />
            </a>
          </div>

          {/* HitPay */}
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
              Donate Now
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Donation in Kind */}
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
              Contact Us
              <ArrowRight size={18} />
            </a>
          </div>
        </div>


        <div className="tax-note">
          <strong>Note:</strong> SWAMI Home is an approved Institution of a
          Public Character (IPC). Qualifying donations are eligible for a 250%
          tax deduction, subject to IRAS guidelines. Please email us your
          donation details to facilitate your tax deduction.
        </div>
      </div>

      {/* PayNow QR Popup */}
      {showQR && (
        <div
          className="qr-modal-overlay"
          onClick={() => setShowQR(false)}
          role="presentation"
        >
          <div
            className="qr-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="qr-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="qr-modal-close"
              onClick={() => setShowQR(false)}
              aria-label="Close QR code popup"
            >
              <X size={24} weight="bold" />
            </button>

            <div className="qr-modal-header">
              <h3 id="qr-modal-title">Scan to Donate via PayNow</h3>

              <p>Use your banking application to scan the QR code.</p>
            </div>

            <img
              src={payNowQR}
              alt="Enlarged SWAMI Home PayNow QR Code"
              className="qr-modal-image"
            />

            <div className="qr-modal-details">
              <p>
                <strong>PayNow ID:</strong> S88SS0104KGDT
              </p>

              <p>
                <strong>Reference:</strong> Your NRIC/FIN number and Full name for tax deduction
                purposes.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}