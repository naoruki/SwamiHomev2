const Footer = () => {
  return (
    <div className="container">
      <footer className="row py-4 my-4 border-top">
        {/* Left Side: Contact Us */}
        <div className="col-md-4 mb-3">
          <h5 className="text-start">Contact Us</h5>
          <address className="text-start text-body-secondary">
            SUNSHINE WELFARE ACTION MISSION (SWAMI Home)
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
            Email: <a href="mailto:enquiry@swami.org.sg">enquiry@swami.org.sg</a>
          </address>
        </div>

        {/* Middle: Hours */}
        <div className="col-md-4 mb-3 text-start">
          <h5>Hours</h5>
          <ul className="list-unstyled text-body-secondary">
            <li>
              <strong>Opening Hours:</strong><br /> Mon–Fri, 8.30am–5.30pm
            </li>
            <li>
              <strong>Visiting Hours:</strong><br /> Mon-Sat, 9.00am–7.00pm
            </li>
          </ul>
        </div>

        {/* Right Side: Quick Links */}
        <div className="col-md-4 mb-3">
          <h5 className="text-start">Quick Links</h5>
          <ul className="nav flex-column align-items-md-start">
            {["About Us","Donation", "Services",  "Careers", "PDPA"].map(
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
      </footer>
    </div>
  );
};

export default Footer;
