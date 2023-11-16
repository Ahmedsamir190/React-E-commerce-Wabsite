import Slides1 from "../Photo/Slides/Slides1.png";
import Slides2 from "../Photo/Slides/Slides2.png";
import Slides3 from "../Photo/Slides/Slides3.png";

function SlidesHome() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner vh-75">
        <div className="carousel-item active">
          <img src={Slides1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Slides2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Slides3} className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  );
}

export default SlidesHome;
