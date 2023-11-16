import kitchen4 from "../Photo/Kitchen/kitchen4.jpg";
import Picks from "../../components/Home&Kitchen/Home-picks";
import "./Home.css";
import Tools from "../../components/Home&Kitchen/Kitchen-photo";
import ProductPhoto from "../../components/Home&Kitchen/Prodcut-photo";
import SlidesHome from "../../components/Home&Kitchen/Slides";

function Home() {
  return (
    <section className="slides-one">
      <div className="item ">
        <SlidesHome />
      </div>
      <div className="promotion ">
        <div className="container">
          <img src={kitchen4} alt="..." className="photo-promotion" />
          <div className="kitchen-tools">
            <Tools />
          </div>
          <hr />
          <h2>Top home picks</h2>
          <div className="some-product">
            <Picks />
            <Picks />
            <Picks />
            <div className="product-title">
              <h1>
                Your Home, <span>Your Taste</span>
              </h1>
              <ProductPhoto />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
