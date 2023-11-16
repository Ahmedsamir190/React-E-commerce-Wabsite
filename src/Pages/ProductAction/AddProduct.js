import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductAction.css";
import axios from "axios";

function AddProduct() {
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
  let navigator = useNavigate();
  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://e-commerce-project-data.glitch.me/e-commerce`, {
        title,
        price,
      })
      .then((data) => console.log(data));
    navigator("/productaction");
  };
  const [validation, setValidation] = useState(false);

  let validationcondition = validation ? "was-validated" : "novalidate";
  return (
    <section className="add-product">
      <div className="container ">
        <div className="add-product-content">
          <div className="addproduct-title">
            <h1>Add-Product page</h1>
          </div>
          <form
            onSubmit={formSubmit}
            className={`addproduct-form  ${validationcondition}`}
          >
            <div>
              <label htmlFor="exampleInputEmail1" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="product title"
                onChange={(e) => settitle(e.target.value)}
                required
              />
              <div className="invalid-feedback fs-4"> Title is required.</div>
              <div className="valid-feedback fs-4"> good!</div>
            </div>
            <div>
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                onChange={(e) => setprice(e.target.value)}
                required
              />
              <div className="invalid-feedback fs-4"> Price is required.</div>
              <div className="valid-feedback fs-4"> good!</div>
            </div>
            <button
              onClick={() => {
                setValidation(true);
              }}
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddProduct;
