import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtoCart } from "../../rtk/slices/cart-slice";
import { fetchProducts } from "../../rtk/slices/products-slice";
import Nophoto from "../Photo/Nophoto.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Info() {
  const [productid, setproductid] = useState([]);

  useEffect(() => {
    fetch(`https://e-commerce-project-data.glitch.me/e-commerce/${productId}`)
      .then((res) => res.json())
      .then((data) => setproductid(data));
  }, []);
  let { productId } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const showToastMessage = () => {
    toast.success(`${productid.title} Add To Cart `, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <section className="product-info">
      <div className="container">
        <div className="productinfo-title">
          <h1>Product-Number: {productId}</h1>
          <Link to={"/productaction"}>
            <FaArrowRight />
          </Link>
        </div>
        {productid.length === 0 ? (
          <div className="product-action-overlay">
            <button type="button" disabled>
              <span
                className="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Loading...
            </button>
          </div>
        ) : (
          <div className="card-info">
            <div>
              {productid.image ? (
                <img src={productid.image} alt={productid.brand} />
              ) : (
                <img src={Nophoto} alt={productid.brand} />
              )}
            </div>
            <div>
              {productid.description ? (
                <p>{productid.description}</p>
              ) : (
                <p>Sorry No Description Found</p>
              )}

              <span>USD:{Number(productid.price).toFixed(0)}</span>
              <p>
                FREE Returns
                <br />
                All prices include VAT.
                <br />
                Buy with installments and pay EGP 112.03 for 60 months with
                select banks
              </p>
            </div>
            <div>
              <span className="price">
                USD:{Number(productid.price).toFixed(0)}
              </span>
              <p>
                FREE Returns <br />
                FREE delivery
                <br />
                Deliver to Egypt
                <br />
                Only 3 left in stock - order soon.
              </p>
              <button
                onClick={() => {
                  dispatch(addtoCart(productid));
                  showToastMessage();
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Info;
