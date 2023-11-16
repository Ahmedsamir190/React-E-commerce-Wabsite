import { FaCheckCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { FaRegCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { GetTotalPrice, Clear } from "../../rtk/slices/cart-slice";
import { Link } from "react-router-dom";
import "./success.css";

function Success() {
  const productincart = useSelector((state) => state.cart.cartProduct);

  const price = useSelector((state) => state.cart.cartTotalAmount);
  const date = new Date();
  const displaydate = date.toDateString();
  const displaytime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetTotalPrice());
  }, [productincart, dispatch]);

  return (
    <section className="successpage">
      <div className="container">
        <div className="success-content">
          <div className="success-content-title">
            <FaCheckCircle />
            <h4>Congratulation! You’ve completed payment.</h4>
            <p>
              {" "}
              We have recieved your order and it will be delivered very soon
            </p>
          </div>
          <div className="order-description">
            <div>
              <h5>Order serial</h5>
              <span>70505</span>
            </div>
            <div>
              <h5>Date</h5>
              <span>{displaydate}</span>
              <span>{displaytime}</span>
            </div>
            <div>
              <h5>Total</h5>
              <span>${price.toFixed(0) + 50}</span>
            </div>
            <div>
              <h5>Payment methods</h5>
              <span>Check payment</span>
            </div>
          </div>
          <div className="success-button">
            <Link
              to={"/mobile"}
              type="button"
              onClick={() => dispatch(Clear())}
            >
              Back To Store
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Success;
