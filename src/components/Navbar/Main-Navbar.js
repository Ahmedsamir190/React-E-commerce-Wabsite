import {
  FaSistrix,
  FaCartPlus,
  FaUserAlt,
  FaShoppingCart,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ecommerce from "../Photo/logo/ecommerce.png";
import egyptflag from "../Photo/logo/egyptflag.PNG";
import UseAuth from "../useAuth/UseAuth";
import { auth } from "../../Firebase";
import { signOut } from "firebase/auth";
import Swal from "sweetalert2";

function MainNavbar() {
  const cart = useSelector((state) => state.cart);
  const [headerbackground, setHeaderbackground] = useState(false);
  const condation = headerbackground && "background";
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 150) {
        setHeaderbackground(true);
      } else {
        setHeaderbackground(false);
      }
    });
  }, [headerbackground]);

  const { currentUser } = UseAuth();
  const cartnumber = useSelector((state) => state.cart.cartProduct);

  const logout = () => {
    signOut(auth)
      .then(() => {
        Swal.fire("You LogOut", "We Hope See You Again", "success");
      })
      .catch((error) => {
        Swal.fire(error.message, "error");
      });
  };
  return (
    <header className={`${condation}`}>
      {/* <div className="Nav-bar">
        <div className="container ">
          <div className="navbar-content">
            <div className="logo">
              <Link to={"/"}>
                {" "}
                <img src={Image1} alt="Loading" className="mb-2 mb-lg-0" />
              </Link>
            </div>
            <div className="deliverd">
              <img src={Image2} alt="Loading" />
              <p>
                Deliverd <br />
                to <span>cairo</span>{" "}
              </p>
            </div>
            <form className="search" role="search">
              <input
                type="text"
                placeholder="What are you Looking for"
                aria-label="Search"
                className="form-control "
              />
              <div className="search-icon">
                {" "}
                <FaSistrix />
              </div>
            </form>
            <div className="signin-and-cart ">
              <div className="sign">
                <h6>Sign in</h6> <FaUserAlt />
              </div>
              <div className="cart">
                <Link to={"/cart-app"}>
                  Cart <FaShoppingCart />
                  <span>{cart.length}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* aa*********************************** */}
      <div className="navbar navbar-expand-lg bg-body-tertiary Nav-bar">
        <div className="container">
          <div className="navbar-content">
            <div className="logo">
              <Link to={"/"}>
                {" "}
                <img src={ecommerce} alt="Loading" />
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="collapse-content">
                <div className="deliverd nav-item">
                  <img src={egyptflag} alt="Loading" />
                  <p>
                    Deliverd <br />
                    to <span>cairo</span>{" "}
                  </p>
                </div>
                <form className="search nav-item" role="search">
                  <input
                    type="text"
                    placeholder="What are you Looking for"
                    aria-label="Search"
                    className="form-control "
                  />
                  <div className="search-icon">
                    {" "}
                    <FaSistrix />
                  </div>
                </form>
                <div className="signin-and-cart nav-item ">
                  <div className="sign">
                    {currentUser ? (
                      <div>
                        <span>
                          {currentUser.email && currentUser.email.slice(0, 2)}
                        </span>
                        <div>
                          {" "}
                          <FaSignOutAlt />
                          <span onClick={logout}>logout</span>
                        </div>
                      </div>
                    ) : (
                      <Link to={"/SignIn"}>
                        {" "}
                        <FaSignInAlt /> Sign In
                      </Link>
                    )}
                  </div>
                  <div className="cart">
                    {cartnumber.length >= 1 ? (
                      <Link to={"/cart-app"} className="text-danger">
                        <FaShoppingCart />
                        <span>{cartnumber.length}</span>
                      </Link>
                    ) : (
                      <Link to={"/cart-app"} className="text-dark">
                        <FaShoppingCart />
                        <span>{cartnumber.length}</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default MainNavbar;
