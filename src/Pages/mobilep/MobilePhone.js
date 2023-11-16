import "./mobile.css";
import PhotoBar from "../../components/mobilepage/Photo-Bar";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../../rtk/slices/cart-slice";
import MobileSlides from "../../components/mobilepage/Mobile_Slides";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import emptygray from "../Photo/emptygray.jpg";
import { toast } from "react-toastify";
import Nophoto from "../Photo/Nophoto.png";
import Aside from "../../components/Aside/Aside";

function Mobile() {
  const api = "https://e-commerce-project-data.glitch.me/e-commerce";
  const [products, setproducts] = useState([]);
  const [data, Setdata] = useState();
  const [placeholder, setPlaceholer] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setproducts(data);
      });
  }, []);

  // const FilterResult = (filtbrand) => {
  //   const result = products.filter((resproduct) => {
  //     return resproduct.brand === filtbrand;
  //   });
  //   Setdata(result);
  // };

  // const FilterByColor = (filtcolor) => {
  //   const result = products.filter((resproduct) => {
  //     return resproduct.color === filtcolor;
  //   });
  //   Setdata(result);
  // };

  // const FilterByNetwork = (filtnetwork) => {
  //   const result = products.filter((resproduct) => {
  //     return resproduct.network === filtnetwork;
  //   });
  //   Setdata(result);
  // };
  setTimeout(() => {
    setPlaceholer(false);
  }, 3000);

  return (
    <section className="mobile-page">
      <div className="slide">
        <MobileSlides />
      </div>
      <div className="container">
        <div className="photo-bar">
          <PhotoBar />
        </div>
        <hr />

        <div className="filterandproduct">
          <Aside />
          <div className="product">
            {products.map((product) => {
              const showToastMessage = () => {
                toast.success(`${product.title} Add To Cart `, {
                  position: toast.POSITION.TOP_RIGHT,
                });
              };
              return (
                <Card style={{ width: "18rem" }} key={product.id}>
                  {placeholder || products.length === 0 ? (
                    <div className="card" aria-hidden="true">
                      <img src={emptygray} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                          <span className="placeholder col-6"></span>
                        </h5>
                        <p className="card-text placeholder-glow">
                          <span className="placeholder col-7"></span>
                          <span className="placeholder col-4"></span>
                          <span className="placeholder col-4"></span>
                          <span className="placeholder col-6"></span>
                          <span className="placeholder col-8"></span>
                        </p>
                        <a
                          className="mobile-button disabled w-100  col-12"
                          aria-disabled="true"
                        ></a>
                      </div>
                    </div>
                  ) : (
                    <>
                      {product.image ? (
                        <Card.Img variant="top" src={product.image} />
                      ) : (
                        <Card.Img variant="top" src={Nophoto} />
                      )}
                      <Card.Body>
                        {product.title && (
                          <Card.Title>{product.title.slice(0, 12)}</Card.Title>
                        )}
                        {product.description && (
                          <Card.Text>
                            {product.description.slice(0, 35)}
                          </Card.Text>
                        )}

                        <Card.Text>$ {product.price}</Card.Text>
                        <button
                          className="mobile-button"
                          onClick={() => {
                            dispatch(addtoCart(product));
                            showToastMessage();
                          }}
                        >
                          Add To Cart
                        </button>
                      </Card.Body>
                    </>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Mobile;
