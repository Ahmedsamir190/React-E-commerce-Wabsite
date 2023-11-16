import "./Global.css";
import MainNavbar from "./components/Navbar/Main-Navbar";
import SmallNavBar from "./components/Small-Navbar/Small-Nav";
import Mobile from "./Pages/mobilep/MobilePhone";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home&kitchen/Home";
import ProductAction from "./Pages/ProductAction/ProductAction";
import Info from "./Pages/ProductAction/Info";
import AddProduct from "./Pages/ProductAction/AddProduct";
import AppCart from "./Pages/cart/Cart";
import Footer from "./components/footer/Footer";
import SignIn from "./Pages/signin&&signup/SignIn";
import SignUp from "./Pages/signin&&signup/SignUp";
import ProtectRoute from "./components/protectroute/ProtectRoute";
import CheckOut from "./Pages/checkout/CheckOut";
import Success from "./Pages/checkout/Success";
import HomePage from "./Pages/main-home/Home-page";

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/Success";
  return (
    <div className="App">
      {!isAuthPage && (
        <>
          {" "}
          <MainNavbar />
          <SmallNavBar />
        </>
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="mobile" element={<Mobile />} />
        <Route path="productaction" element={<ProductAction />} />
        <Route path="home-kitchen" element={<Home />} />
        <Route path="info/:productId" element={<Info />} />
        <Route path="addproduct" element={<AddProduct />} />
        <Route path="cart-app" element={<AppCart />} />
        <Route path="/*" element={<ProtectRoute />}>
          <Route path="CheckOut" element={<CheckOut />} />
          <Route path="Success" element={<Success />} />
        </Route>
        <Route path="SignIn" element={<SignIn />} />
        <Route path="SignUp" element={<SignUp />} />
      </Routes>

      {!isAuthPage && <Footer />}
    </div>
  );
}

export default App;
