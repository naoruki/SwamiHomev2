import Gallery from "../components/Gallery.jsx";
import { Container } from "react-bootstrap";

// 🐴 Import all 16 horse images
import horse1 from "../assets/horse/1.jpg";
import horse2 from "../assets/horse/2.jpg";
import horse3 from "../assets/horse/3.jpg";
import horse4 from "../assets/horse/4.jpg";
import horse5 from "../assets/horse/5.jpg";
import horse6 from "../assets/horse/6.jpg";
import horse7 from "../assets/horse/7.jpg";
import horse8 from "../assets/horse/8.jpg";
import horse9 from "../assets/horse/9.jpg";
import horse10 from "../assets/horse/10.jpg";
import horse11 from "../assets/horse/11.jpg";
import horse12 from "../assets/horse/12.jpg";
import horse13 from "../assets/horse/13.jpg";
import horse14 from "../assets/horse/14.jpg";
import horse15 from "../assets/horse/15.jpg";
import horse16 from "../assets/horse/16.jpg";

function GalleryPage() {
  const images = [
    { src: horse1, alt: "Horse Visitation 1" },
    { src: horse2, alt: "Horse Visitation 2" },
    { src: horse3, alt: "Horse Visitation 3" },
    { src: horse4, alt: "Horse Visitation 4" },
    { src: horse5, alt: "Horse Visitation 5" },
    { src: horse6, alt: "Horse Visitation 6" },
    { src: horse7, alt: "Horse Visitation 7" },
    { src: horse8, alt: "Horse Visitation 8" },
    { src: horse9, alt: "Horse Visitation 9" },
    { src: horse10, alt: "Horse Visitation 10" },
    { src: horse11, alt: "Horse Visitation 11" },
    { src: horse12, alt: "Horse Visitation 12" },
    { src: horse13, alt: "Horse Visitation 13" },
    { src: horse14, alt: "Horse Visitation 14" },
    { src: horse15, alt: "Horse Visitation 15" },
    { src: horse16, alt: "Horse Visitation 16" },
  ];

  return (
    <div className="event-gallery-page">
      {/* “Our Gallery” banner */}
      <Container>
        <div className="header-hero">
          <h1>Our Gallery</h1>
        
        </div>
      </Container>

      {/* Event title below */}
      <div className="event-header">
        <h2 className="event-title">Horse Visitation</h2>
          
        <hr className="event-divider" />
        <p>September 2025</p>
      </div>

      {/* Gallery */}
      <Gallery images={images} />
    </div>
  );
}

export default GalleryPage;
