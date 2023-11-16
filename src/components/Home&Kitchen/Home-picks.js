import kitchen1 from "../Photo/Kitchen/kitchen1.jpg";
import kitchen2 from "../Photo/Kitchen/kitchen2.jpg";
import kitchen3 from "../Photo/Kitchen/kitchen3.jpg";

function Picks() {
  return (
    <>
      <div className="info">
        <img src={kitchen1} alt="." />
        <h4>
          BOSCH Gbl 620 Blower 620
          <br />
          watt Blue-Black
        </h4>
        <div className="price">
          <h5>EGP 720.00</h5>
          <span className="span-one">799</span>
          <span className="span-two">9% off</span>
        </div>
        <div className="button">
          <button>Add to Cart</button>
        </div>
      </div>

      <div className="info">
        <img src={kitchen2} alt="." />
        <h4>
          BOSCH Gbl 620 Blower 620
          <br />
          watt Blue-Black
        </h4>
        <div className="price">
          <h5>EGP 720.00</h5>
          <span className="span-one">799</span>
          <span className="span-two">9% off</span>
        </div>
        <div className="button">
          <button>Add to Cart</button>
        </div>
      </div>

      <div className="info">
        <img src={kitchen3} alt="." />
        <h4>
          BOSCH Gbl 620 Blower 620
          <br />
          watt Blue-Black
        </h4>
        <div className="price">
          <h5>EGP 720.00</h5>
          <span className="span-one">799</span>
          <span className="span-two">9% off</span>
        </div>
        <div className="button">
          <button>Add to Cart</button>
        </div>
      </div>
    </>
  );
}
export default Picks;
