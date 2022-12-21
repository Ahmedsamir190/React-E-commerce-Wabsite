import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './Footer.css'

function Footer() {
    return (

<footer>
  <div className="footer position-relative mt-3">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card border border-0 bg-transparent mt-2 mt-sm-5 lh-lg text-center text-sm-start cardfooter">
            <h4 className="text-white fw-bold">ELECTRONICS</h4>
                                        
            <ul className="list-unstyled">
              <li>
                <a className="text-decoration-none " href="/">Mobiles</a>
              </li>
              <li>
                <a  className="text-decoration-none    "  href="/">Awards</a>
              </li>
              <li>
                <a  className="text-decoration-none    "  href="/">Tablets</a>
              </li>
              <li>
                <a  className="text-decoration-none    "  href="/">Laptops</a>
              </li>
              <li>
                <a  className="text-decoration-none    "  href="/">Home Appliances</a>
              </li>
              <li>
                <a  className="text-decoration-none    "  href="/">Televisions</a>
              </li>
              <li>
                <a  className="text-decoration-none    "  href="/">Headphones </a>
              </li>
            </ul>
          </div> 
        </div>
                                      
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card border border-0 bg-transparent mt-2 mt-sm-5  lh-lg text-center text-sm-start cardfooter">
            <h5 className="text-white fw-bold">FASHION</h5>
            <ul className="list-unstyled ">
              <li>
                <a className="text-decoration-none    " href="/">Women's Fashion</a>
              </li>
              <li>
                <a  className="text-decoration-none    "  href="/">Men's Fashion</a>
              </li>
              <li>
                <a  className="text-decoration-none    "  href="/">Girls' Fashion</a>
              </li>
              <li>
                <a  className="text-decoration-none    "  href="/">Boys' Fashion</a>
              </li>
              <li>
                <a  className="text-decoration-none    "  href="/">Men's Watches</a>
              </li>
              <li>
                <a  className="text-decoration-none    "  href="/">Women's Watches</a>
              </li>
              <li>
                <a  className="text-decoration-none    "  href="/">Eyewear </a>
              </li>
            </ul>
          </div> 
        </div>
                                              
      <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="card border border-0 bg-transparent mt-2 mt-sm-5  lh-lg text-center text-sm-start cardfooter">
            <h4 className="text-white fw-bold">ELECTRONICS</h4>
                                        
            <ul className="list-unstyled">
              <li>
                <a className="text-decoration-none " href="/">Mobiles</a>
              </li>
              <li>
                <a  className="text-decoration-none    "  href="/">Awards</a>
              </li>
              <li>
                <a  className="text-decoration-none    "  href="/">Tablets</a>
              </li>
              <li>
                <a  className="text-decoration-none    "  href="/">Laptops</a>
              </li>
              <li>
                <a  className="text-decoration-none    "  href="/">Home Appliances</a>
              </li>
              <li>
                <a  className="text-decoration-none    "  href="/">Televisions</a>
              </li>
              <li>
                <a  className="text-decoration-none    "  href="/">Headphones </a>
              </li>
            </ul>
        </div> 
      </div>
                                        
      <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="card border border-0 bg-transparent mt-2 mt-sm-5  lh-lg text-center text-sm-start cardfooter ">
        <h5 className="text-white fw-bold">FASHION</h5>
            <ul className="list-unstyled ">
              <li>
                <a className="text-decoration-none    " href="/">Women's Fashion</a>
              </li>
              <li>
                <a  className="text-decoration-none    "  href="/">Men's Fashion</a>
              </li>
              <li>
                <a  className="text-decoration-none    "  href="/">Girls' Fashion</a>
              </li>
              <li>
                <a  className="text-decoration-none    "  href="/">Boys' Fashion</a>
              </li>
              <li>
                <a  className="text-decoration-none    "  href="/">Men's Watches</a>
              </li>
              <li>
                <a  className="text-decoration-none    "  href="/">Women's Watches</a>
              </li>
              <li>
                <a  className="text-decoration-none    "  href="/">Eyewear </a>
              </li>
            </ul>
        </div> 
      </div>
      <div className="text-center text-white fw-bold mb-5 w-100 rounded-3 social-icons ">
        <p>Lets stay connected</p>
        <FaFacebook className="facebook"/>
        <FaTwitter  className="twitter"/>
        <FaLinkedin  className="linkedin"/>
        <FaYoutube  className="youtube"/>
        <FaInstagram  className="instagram"/>
      </div>
      <hr/>
      <div className="d-flex flex-wrap gap-1  justify-content-between mb-0 mb-md-3 ">
        <ul className="d-flex flex-wrap gap-2 gap-sm-5 justify-content-between list-unstyled m-auto m-sm-0">
          <li>
          <a className="text-decoration-none text-dark" href="/">cookie policy</a>
        </li>
        <li>
          <a className="text-decoration-none text-dark " href="/">Legal</a>
        </li>
        <li>
          <a className="text-decoration-none  text-dark " href="/">Privacy</a>
        </li>
        <li>
          <a className="text-decoration-none text-dark " href="/">Accessibility</a>
        </li>
        <li>
          <a className="text-decoration-none text-dark  " href="/">cookie </a>
        </li>
        </ul>
        <p className="text-capitalize m-auto m-sm-0">all rights reserved</p>
      </div>
    </div>
                </div>
                </div>
</footer>





    )
}

export default Footer;