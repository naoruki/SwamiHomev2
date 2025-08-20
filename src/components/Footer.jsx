import { InstagramLogoIcon, FacebookLogoIcon } from "@phosphor-icons/react";
import Partners from "./OurPartnerSection.jsx"
const Footer = () => {
  return (
    <div className="container">
      <footer className="row py-4 border-top">
        {/* Left Side: Contact Us */}
        <div className="col-md-5 mb-5">
          <h5 className="text-start">Contact Us</h5>
          <address className="text-start text-body-secondary">
            <b>SUNSHINE WELFARE ACTION MISSION (SWAMI Home)</b>
            <br />
            No.5 Sembawang Walk
            <br />
            Singapore 757717
            <br />
            <br />
            <b>Phone:</b> +65 6257 6117
            <br />
            <b>Fax:</b> +65 67548443
            <br />
            Email:{" "}
            <a href="mailto:enquiry@swami.org.sg">enquiry@swami.org.sg</a>
          </address>
        </div>

        {/* Middle: Hours */}
        <div className="col-md-3 mb-3 text-start">
          <h5>Hours</h5>
          <ul className="list-unstyled text-body-secondary">
            <li>
              <strong>Opening Hours:</strong>
              <br /> Mon–Fri, 8.30am–5.30pm
            </li>
            <li>
              <strong>Visiting Hours:</strong>
              <br /> Mon–Sun, 9.00am–7.00pm 
              (Including PH)
            </li>
          </ul>
        </div>

        {/* Right Side: Quick Links */}
        <div className="col-md-2 mb-2">
          <h5 className="text-start">Quick Links</h5>
          <ul className="nav flex-column align-items-start align-items-md-start">
            {["About Us", "Donation", "Services", "Careers", "PDPA"].map(
              (link, index) => (
                <li className="nav-item mb-2" key={index}>
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    {link}
                  </a>
                </li>
                
              )
            )}
            
          </ul>
        </div>
        <div className="col-md-2 mb-3">
          <h5 className="text-start">Partners</h5>
            <Partners/>
        </div>

        {/* Social Media Icons - New Row */}
        {/* Social Media Icons - Centered and Side by Side */}
        <div className="col-12 text-center mt-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="me-3 d-inline-block"
          >
            <InstagramLogoIcon size={32} color="#E25D9C" weight="duotone" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="d-inline-block"
          >
            <FacebookLogoIcon size={32} color="#E25D9C" weight="duotone" />
          </a>
        </div>
        {/* Copyright */}
        <div className="col-12 text-center mt-3 text-body-secondary small">
          &copy; {new Date().getFullYear()} SUNSHINE WELFARE ACTION MISSION. All
          rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
