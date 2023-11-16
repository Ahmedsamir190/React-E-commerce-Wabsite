import { useState, useEffect } from "react";
import { FaRegCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Clear, GetTotalPrice } from "../../rtk/slices/cart-slice";
import "./checkout.css";
function CheckOut() {
  const countriess = [
    "United States",
    "Canada",
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and/or Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Colombia",
    "Comoros",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Croatia (Hrvatska)",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands (Malvinas)",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "France, Metropolitan",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard and Mc Donald Islands",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "palestine",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, Democratic People's Republic of",
    "Korea, Republic of",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libyan Arab Jamahiriya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia, Federated States of",
    "Moldova, Republic of",
    "Monaco",
    "Mongolia",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia South Sandwich Islands",
    "Spain",
    "Sri Lanka",
    "St. Helena",
    "St. Pierre and Miquelon",
    "Sudan",
    "Suriname",
    "Svalbard and Jan Mayen Islands",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States minor outlying islands",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City State",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna Islands",
    "Western Sahara",
    "Yemen",
    "Yugoslavia",
    "Zaire",
    "Zambia",
    "Zimbabwe",
  ];

  const [loading, setloading] = useState(true);

  setTimeout(() => {
    setloading(false);
  }, 5000);

  const [validation, setValidation] = useState(false);

  let validationcondition = validation ? "was-validated" : "novalidate";

  const productincart = useSelector((state) => state.cart.cartProduct);
  const price = useSelector((state) => state.cart.cartTotalAmount);
  const quantity = useSelector((state) => state.cart.cartTotalQuantity);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetTotalPrice());
  }, [productincart, dispatch]);

  return (
    <section className="checkout-section">
      {loading ? (
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
        <div className="container">
          <h1>Billing details</h1>
          <div className="checkout-content needs-validation">
            <form
              className={`form  ${validationcondition}`}
              action="success"
              // onSubmit={() => dispatch(Clear())}
            >
              <div>
                <label htmlFor="validationCustom01" className="form-label my-3">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  required
                />
                <div className="invalid-feedback"> First name is required.</div>
                <div className="valid-feedback"> good!</div>
              </div>
              <div>
                <label htmlFor="validationCustom02" className="form-label my-3">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom02"
                  required
                />
                <div className="invalid-feedback"> Last name is required.</div>
                <div className="valid-feedback"> good!</div>
              </div>
              <div>
                <label
                  htmlFor="validationCustomUsername "
                  className="form-label my-3"
                >
                  Phone
                </label>
                <div className="input-group has-validation">
                  <input
                    type="nubmer"
                    className="form-control"
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <div className="invalid-feedback"> Phone is required.</div>
                </div>
              </div>
              <div>
                <label htmlFor="validationCustom03" className="form-label my-3">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="validationCustom03"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid email.
                </div>
              </div>
              <div>
                <label
                  htmlFor="validationCustom05"
                  className="htmlForm-label my-3"
                >
                  Choose country
                </label>
                <input
                  list="countries"
                  className="form-control"
                  id="validationCustom05"
                  placeholder="Type to search..."
                  required
                />
                <datalist id="countries">
                  {countriess.map((country) => {
                    return <option value={country} />;
                  })}
                </datalist>
                <div className="invalid-feedback">
                  Please provide a valid Country.
                </div>
              </div>
              <div>
                <label htmlFor="validationCustom03" className="form-label my-3">
                  address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom03"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid address.
                </div>
              </div>
              <div>
                <label
                  htmlFor="validationCustom03"
                  className="htmlForm-label my-3"
                >
                  city
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom03"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid City.
                </div>
              </div>
              <div>
                <label htmlFor="validationCustom03" className="form-label my-3">
                  ZIPCODE
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="validationCustom03"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid ZIPCODE.
                </div>
              </div>
              <div>
                <label className="my-3" htmlFor="message">
                  Delivery instructions (optional)
                </label>
                <textarea
                  name="subject"
                  cols="30"
                  rows="10"
                  placeholder="Write Message Here"
                  id="message"
                  className="p-2 w-100 border"
                ></textarea>
              </div>
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  />
                  <label className="form-check-label" htmlFor="invalidCheck">
                    Agree to terms and conditions
                  </label>
                  <div className="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
              <div className="buttons">
                <Link to="/Cart" type="button">
                  Cancel
                </Link>
                <button
                  type="submit"
                  onClick={() => {
                    setValidation(true);
                  }}
                >
                  Submit form
                </button>
              </div>
            </form>
            {productincart.length >= 3 ? (
              <div className="length">
                <h4>Order Summary</h4>
                <div className="order-summary-content">
                  <div>
                    <span>Total price:</span>
                    {price && <span>${Number(price.toFixed(0))}</span>}
                  </div>
                  <div>
                    <span>Discount:</span>
                    <span>-</span>
                  </div>
                  <div>
                    <span>Shipping cost:</span>
                    <span>+ $55</span>
                  </div>

                  <div>
                    <span>Order total </span>
                    {price && <span>${Number(price.toFixed(0) + 55)}</span>}
                  </div>
                  <h3>Items in cart</h3>
                  {productincart.map((item) => {
                    return (
                      <div key={item.id} className="order-product">
                        {<img src={item.image} alt={item.title} />}
                        <div className="speacial">
                          <h6>{item.title.slice(0, 15)}</h6>
                          {item.price && (
                            <span>price: ${Number(item.price).toFixed(0)}</span>
                          )}

                          <span>Quantity: {item.quantity}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="order-summary">
                <h4>Order Summary</h4>
                <div className="order-summary-content">
                  <div>
                    <span>Total price:</span>
                    {price && <span>${Number(price.toFixed(0))}</span>}
                  </div>
                  <div>
                    <span>Discount:</span>
                    <span>-</span>
                  </div>
                  <div>
                    <span>Shipping cost:</span>
                    <span>+ $55</span>
                  </div>

                  <div>
                    <span>Order total </span>
                    {price && <span>${Number(price.toFixed(0) + 55)}</span>}
                  </div>
                  <h3>Items in cart</h3>
                  {productincart.map((item) => {
                    return (
                      <div key={item.id} className="order-product">
                        {<img src={item.image} alt={item.title} />}
                        <div className="speacial">
                          <h6>{item.title.slice(0, 15)}</h6>
                          {item.price && (
                            <span>price: ${Number(item.price).toFixed(0)}</span>
                          )}{" "}
                          <span>Quantity: {item.quantity}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default CheckOut;
