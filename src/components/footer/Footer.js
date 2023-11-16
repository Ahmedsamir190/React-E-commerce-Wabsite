import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const data = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <h4>ELECTRONICS</h4>
            <ul>
              <li>
                <a className="moving " href="#" data-link="Mobiles">
                  <span>Mobiles</span>
                </a>
              </li>
              <li>
                <a className="moving " href="#" data-link="Awards">
                  <span>Awards</span>
                </a>
              </li>
              <li>
                <a className="moving " href="#" data-link="Tablets">
                  <span>Tablets</span>
                </a>
              </li>
              <li>
                <a className="  moving " href="#" data-link="Laptops">
                  <span>Laptops</span>
                </a>
              </li>
              <li>
                <a className="  moving " href="#" data-link="Home Appliances">
                  <span>Home Appliances</span>
                </a>
              </li>
              <li>
                <a className="  moving " href="#" data-link="Televisions">
                  <span>Televisions</span>
                </a>
              </li>
              <li>
                <a className="  moving " href="#" data-link="Headphones">
                  <span>Headphones</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4>FASHION</h4>
            <ul>
              <li>
                <a className="  moving " href="#" data-link="  Women's Fashion">
                  <span>Women's Fashion</span>
                </a>
              </li>
              <li>
                <a className="  moving" href="#" data-link="  Men's Fashion">
                  <span>Men's Fashion</span>
                </a>
              </li>
              <li>
                <a className="  moving" href="#" data-link="   Girls' Fashion">
                  <span> Girls' Fashion</span>
                </a>
              </li>
              <li>
                <a className="  moving" href="#" data-link="  Boys' Fashion">
                  <span>Boys' Fashion</span>
                </a>
              </li>
              <li>
                <a className="  moving" href="#" data-link="  Men's Watches">
                  <span> Men's Watches</span>
                </a>
              </li>
              <li>
                <a className="  moving" href="#" data-link="  Women's Watches">
                  <span>Women's Watches</span>
                </a>
              </li>
              <li>
                <a className="  moving" href="#" data-link="   Eyewear">
                  <span>Eyewear</span>{" "}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4>ELECTRONICS</h4>

            <ul>
              <li>
                <a className="moving " href="#" data-link="Mobiles">
                  <span>Mobiles</span>
                </a>
              </li>
              <li>
                <a className="moving " href="#" data-link="Awards">
                  <span>Awards</span>
                </a>
              </li>
              <li>
                <a className="moving " href="#" data-link="Tablets">
                  <span>Tablets</span>
                </a>
              </li>
              <li>
                <a className="  moving " href="#" data-link="Laptops">
                  <span>Laptops</span>
                </a>
              </li>
              <li>
                <a className="  moving " href="#" data-link="Home Appliances">
                  <span>Home Appliances</span>
                </a>
              </li>
              <li>
                <a className="  moving " href="#" data-link="Televisions">
                  <span>Televisions</span>
                </a>
              </li>
              <li>
                <a className="  moving " href="#" data-link="Headphones">
                  <span>Headphones</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4>FASHION</h4>
            <ul>
              <li>
                <a className="  moving " href="#" data-link="  Women's Fashion">
                  <span>Women's Fashion</span>
                </a>
              </li>
              <li>
                <a className="  moving" href="#" data-link="  Men's Fashion">
                  <span>Men's Fashion</span>
                </a>
              </li>
              <li>
                <a className="  moving" href="#" data-link="   Girls' Fashion">
                  <span> Girls' Fashion</span>
                </a>
              </li>
              <li>
                <a className="  moving" href="#" data-link="  Boys' Fashion">
                  <span>Boys' Fashion</span>
                </a>
              </li>
              <li>
                <a className="  moving" href="#" data-link="  Men's Watches">
                  <span> Men's Watches</span>
                </a>
              </li>
              <li>
                <a className="  moving" href="#" data-link="  Women's Watches">
                  <span>Women's Watches</span>
                </a>
              </li>
              <li>
                <a className="  moving" href="#" data-link="   Eyewear">
                  <span>Eyewear</span>{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="social-media-icon">
          <p>Lets stay connected</p>
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
          <FaYoutube />
          <FaInstagram />
        </div>
      </div>
      <div className="copy-right">
        <div>&copy; {data} </div>|
        <ul>
          <li>cookie policy</li>
          <li>Legal</li>
          <li>Privacy</li>
          <li>Accessibility</li>
          <li>cookie</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
