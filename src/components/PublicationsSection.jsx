import swamibookcover from "../assets/swamibookcover.png";
const PublicationsSection = () => (
  <>
    <div className="header-hero">
      <h1>Publications</h1>
    </div>

  <div className="box mb-3 d-flex justify-content-center">
  <div className="card" style={{ width: "18rem" }}>
    <img
      src={swamibookcover}
      className="card-img-top"
      alt="Publication Cover"
      style={{ height: "350px", objectFit: "cover" }}
    />

    <div className="card-body">
      <h5 className="card-title">
        Sri Sathya Sai Uvacha Volume Thirteen
      </h5>

      <p className="card-text">
        Mr B.P. Yap, President of Swami Home, shares his personal
        experiences, reflections, and spiritual journey as a long-time
        devotee of Sri Sathya Sai Baba in this publication.
      </p>

      <a
        href="https://drive.google.com/file/d/17pg6TL6DAL4Cn63KitVIz6orKSxVbG3P/view?usp=sharing"
        className="btn btn-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        View
      </a>
    </div>
  </div>
</div>
  </>
);

export default PublicationsSection;
