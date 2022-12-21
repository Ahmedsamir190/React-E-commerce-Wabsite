
import { FaSistrix } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Image2 from '../Photo/Image2.PNG';
import Image1 from '../Photo/Image1.PNG';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";


function Navbar() {
    const cart = useSelector(state => state.cart);
    return (
            <header>
                <div className="Nav-bar">
                    <div className="container con-navbar">
                        <div className="logo">
                            <Link to={'/'}> <img src={Image1} alt="Loading" className="mb-2 mb-lg-0"/></Link>
                        </div>
                        <div className="deliverd">
                            <img src={Image2} alt="Loading" />
                            <p>Deliverd to <span>cairo</span> </p>
                        </div>
                        <div className="search">
                            <input type="text" placeholder="What are you Looking for"/>
                            <div className="search-icon"> <FaSistrix/></div>
                        </div>
                        <div className="signin-and-cart d-flex">
                            <div className="sign d-flex">
                                <h6 className="me-2" >Sign in</h6> <FaUserAlt/>
                            </div>
                            <div className="cart d-flex position-relative">
                                <Link to={'/cart-app'} className='d-flex sign text-dark'> <h6 className="me-2">Cart</h6> <FaShoppingCart /><span className="position-absolute  cart-logo">{cart.length}</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    )
}

export default Navbar;