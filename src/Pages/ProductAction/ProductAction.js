import "./ProductAction.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function ProductAction() {
  const api = "https://e-commerce-project-data.glitch.me/e-commerce";
  const [product, setproduct] = useState([]);

  let getallproduct = () => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setproduct(data));
  };

  let Deleteproduct = (product) => {
    Swal.fire({
      title: `Are You Sure You Went Delete ${product.title} ?`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(
          `https://e-commerce-project-data.glitch.me/e-commerce/${product.id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => getallproduct());
      }
    });
  };
  useEffect(() => {
    getallproduct();
  }, []);

  return (
    <section className="product-action">
      <div className="container">
        <div className="title-page">
          <h3>Product page</h3>
          <Link to={"/addproduct"}>Add New-Product</Link>
        </div>
        {product.length === 0 ? (
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
          <table className="table  mt-5">
            <thead>
              <tr>
                <th>ID</th>
                <th>TitLe</th>
                <th>Price</th>
                <th>Opreration</th>
              </tr>
            </thead>
            <tbody>
              {product.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>{product.id}</td>

                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td className="button-deleteandinfo">
                      <button
                        className="button-delete"
                        onClick={() => Deleteproduct(product)}
                      >
                        Deleted
                      </button>
                      <Link to={`/info/${product.id}`} className="button-info">
                        Info
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}

export default ProductAction;
