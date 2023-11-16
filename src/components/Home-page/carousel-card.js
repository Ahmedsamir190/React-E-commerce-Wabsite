import home1 from "../Photo/home/home1.jpg";
import home2 from "../Photo/home/home2.jpg";
import home3 from "../Photo/home/home3.jpg";
import home4 from "../Photo/home/home4.jpg";
import home5 from "../Photo/home/home5.jpg";
import home6 from "../Photo/home/home6.jpg";
import home7 from "../Photo/home/home7.jpg";
import home8 from "../Photo/home/home8.jpg";
import home9 from "../Photo/home/home9.jpg";

import "../../Pages/main-home/slides.css";

function Card() {
  return (
    <>
      <div className=" col-sm-6 col-md-6 col-lg-4">
        <div className="card pt-4">
          <h5 className=" text-center"> For your Fitness Needs</h5>
          <img src={home1} className="card-img-top " alt="title" />
          <div className="card-body"></div>
        </div>
      </div>

      <div className="col-sm-6 col-md-6 col-lg-4">
        <div className="card pt-4">
          <h5 className=" text-center"> Create with strip lights</h5>
          <img src={home2} className="card-img-top " alt="title" />
          <div className="card-body"></div>
        </div>
      </div>

      <div className="col-sm-6 col-md-6 col-lg-4">
        <div className="card pt-4">
          <h5 className=" text-center">Kindle E readers</h5>
          <img src={home3} className="card-img-top " alt="title" />
          <div className="card-body"></div>
        </div>
      </div>

      <div className="col-sm-6 col-md-6 col-lg-4">
        <div className="card pt-4">
          <h5 className=" text-center">Dresses</h5>
          <img src={home4} className="card-img-top " alt="title" />
          <div className="card-body"></div>
        </div>
      </div>

      <div className="col-sm-6 col-md-6 col-lg-4">
        <div className="card pt-4">
          <h5 className=" text-center">Easy returns</h5>
          <img src={home5} className="card-img-top " alt="title" />
          <div className="card-body"></div>
        </div>
      </div>

      <div className="col-sm-6 col-md-6 col-lg-4">
        <div className="card pt-4">
          <h5 className=" text-center">Health & Personal Care</h5>
          <img src={home6} className="card-img-top " alt="title" />
          <div className="card-body"></div>
        </div>
      </div>

      <div className="col-sm-6 col-md-6 col-lg-4">
        <div className="card pt-4">
          <h5 className=" text-center">Electronics</h5>
          <img src={home7} className="card-img-top " alt="title" />
          <div className="card-body"></div>
        </div>
      </div>

      <div className="col-sm-6 col-md-6 col-lg-4">
        <div className="card pt-4">
          <h5 className=" text-center">Shop activity trackers </h5>
          <img src={home8} className="card-img-top " alt="title" />
          <div className="card-body"></div>
        </div>
      </div>

      <div className="col-sm-6 col-md-6 col-lg-4">
        <div className="card pt-4">
          <h5 className=" text-center">New arrivals in Toys</h5>
          <img src={home9} className="card-img-top " alt="title" />
          <div className="card-body"></div>
        </div>
      </div>
    </>
  );
}

export default Card;
