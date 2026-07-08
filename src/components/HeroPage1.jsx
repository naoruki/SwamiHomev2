import desktopBanner from "../assets/swamibanner1.jpg";
import mobileBanner from "../assets/swamibannermobile.jpg";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-banner">
      <picture>
        <source media="(max-width: 768px)" srcSet={mobileBanner} />
        <img
          src={desktopBanner}
          alt="SWAMI Home Banner"
          className="hero-banner-img"
        />
      </picture>
    </section>
  );
};

export default HeroSection;