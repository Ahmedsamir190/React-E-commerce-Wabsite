import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./Cart.css";
import Nophoto from "../Photo/Nophoto.png";
import cartempty from "../Photo/cartempty.gif";
import {
  deleteFromCart,
  GetTotalPrice,
  GetTotalQuantity,
  Decrement,
  Increment,
} from "../../rtk/slices/cart-slice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function AppCart() {
  const productincart = useSelector((state) => state.cart.cartProduct);
  const price = useSelector((state) => state.cart.cartTotalAmount);
  const quantity = useSelector((state) => state.cart.cartTotalQuantity);

  // const totalPrice = cart.reduce((acc, product) => {
  //   acc += product.price * product.quantity;
  //   return acc;
  // }, 0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetTotalPrice());
    dispatch(GetTotalQuantity());
  }, [productincart, dispatch]);
  return (
    <section className="Cart-page">
      <div className="container">
        <div className="cart-title">
          <h1>Cart-Page</h1>
        </div>
        {productincart.length === 0 ? (
          <div className="emptycart-image">
            <img src={cartempty} alt="" />
          </div>
        ) : (
          <div className="cart-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {productincart.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    {product.price && (
                      <td>$ {Number(product.price).toFixed(0)}</td>
                    )}
                    <td>
                      {product.image ? (
                        <img src={product.image} alt={product.title} />
                      ) : (
                        <img src={Nophoto} alt={product.title} />
                      )}
                    </td>
                    <td className="numberandicon">
                      <button onClick={() => dispatch(Decrement(product))}>
                        -
                      </button>
                      {product.quantity}
                      <button onClick={() => dispatch(Increment(product))}>
                        +
                      </button>
                    </td>
                    <td>
                      <button
                        className="cart-button"
                        onClick={() => dispatch(deleteFromCart(product))}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  {price && (
                    <th colSpan={5} className="total-price">
                      Total Price : $ {Number(price.toFixed(0))}
                    </th>
                  )}

                  <td>
                    <Link to={"/CheckOut"}>CheckOut</Link>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

export default AppCart;
