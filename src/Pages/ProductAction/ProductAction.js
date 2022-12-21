import './ProductAction.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';


function ProductAction() {
    const api = 'http://localhost:9000/products';
    const [product, setproduct] = useState([]);

    let getallproduct = () => {
        fetch(api)
        .then((res) => res.json())
    .then(data => setproduct(data))
    }


    let Deleteproduct = (product) => {
        Swal.fire({
            title:`Are You Sure You Went Delete ${product.title} ?`,
            showCancelButton: true,
            
        })
            .then((data) => {
                if (data.isConfirmed) {
                    fetch(`http://localhost:9000/products/${product.id}`, {
                        method:"DELETE",
                    })
                        .then((res) => res.json())
                    .then ((data) =>getallproduct())
                }
            })
            
    
    }
    useEffect(() => {
        getallproduct()
    },[])

    return (
        <div className='product-action'>
            <div className='container'>
                <div className='title-page'>
                    <h3>Product page</h3>
                    <Link to={'/addproduct'} className="button">Add New-Product</Link>
                </div> 
                <table className="table table-striped mt-5" >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TitLe</th>
                            <th>Price</th>
                            <th className='action'>Opreration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((product) => {
                            return (
                                <tr key={product.id} >
                                    <td>{product.id}</td>
                                    <td>{product.title }</td>
                                    <td>{product.price }</td>
                                <td>
                                    <button className="btn btn-danger delete" onClick={() =>Deleteproduct(product)}>Deleted</button>
                                    <Link to={`/info/${product.id}`} className='btn btn-info'>Info</Link>
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    
    )
}

export default ProductAction;