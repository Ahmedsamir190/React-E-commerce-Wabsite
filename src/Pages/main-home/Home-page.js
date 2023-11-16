import Card from "../../components/Home-page/carousel-card";
import Slides from "../../components/Home-page/Slides";
import "./slides.css";

function HomePage() {
  return (
    <section className="home-page">
      <div className="slids-image">
        <Slides />
      </div>

      <div className="page">
        <div className="container">
          <div className="row all-card">
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
