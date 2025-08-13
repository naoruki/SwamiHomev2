import paynow from "../assets/paynow.png";
import sgdonate from "../assets/sgdonate.svg";

const DonateSection = () => {
  return (
    <>
      <hr />

<div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start donation-section" id="donation-section">
  {/* First Card */}
  <div
    className="card"
    style={{
      width: "18rem",
      borderRadius: "1rem",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      height: "28rem",
    }}
  >
    <div
      style={{
        height: "10rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={paynow}
        alt="PayNow QR"
        style={{
          maxHeight: "100%",
          maxWidth: "80%",
          objectFit: "contain",
        }}
      />
    </div>
    <div
      className="card-body"
      style={{
        height: "18rem",
        overflow: "auto",
      }}
    >
      <h5 className="card-title">Pay Now</h5>
      <p className="card-text">
        Name: S W A MI (GENERAL DONATIONS) <br />
        UEN: S88SS0104KGDT
        <br />
        Reference: <i>Your full name</i>
      </p>
      <p>
        Please <a href="mailto:enquiry@swami.org.sg">email</a> us for tax deduction
      </p>
    </div>
  </div>

  {/* Second Card */}
  <div
    className="card"
    style={{
      width: "18rem",
      borderRadius: "1rem",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      height: "28rem",
    }}
  >
    <div
      style={{
        height: "10rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={sgdonate}
        alt="Other QR"
        style={{
          maxHeight: "100%",
          maxWidth: "80%",
          objectFit: "contain",
        }}
      />
    </div>
    <div
      className="card-body"
      style={{
        height: "18rem",
        overflow: "auto",
      }}
    >
      <h5 className="card-title">Donate Online</h5>
      <p className="card-text">
        <a href="https://www.giving.sg/organisation/profile/391a0ed5-0d05-4dad-ac37-2499db3de6fe">
          Donate via Giving.sg
        </a>
      </p>
    </div>
  </div>
</div>

    </>
  );
};

export default DonateSection;
