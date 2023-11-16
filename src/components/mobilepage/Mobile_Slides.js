import mobileslide1 from "../Photo/Slides/mobileslide1.png";
import mobileslide2 from "../Photo/Slides/mobileslide2.png";

function MobileSlides() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner vh-75">
        <div className="carousel-item active">
          <img src={mobileslide1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={mobileslide2} className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  );
}

export default MobileSlides;
