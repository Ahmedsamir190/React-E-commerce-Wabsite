import { useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom';
import './ProductAction.css';
import axios from 'axios';

function AddProduct() {
    const [title, settitle] = useState("");
    const [price, setprice] = useState(0);
    let navigator = useNavigate()
    const formSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:9000/products`, {
            title,
            price
        })
            .then((data) => console.log(data));
            navigator('/productaction')
    }
    return (
            <div className='add-page'>
                <div className='container add-page-container'>
                    <h1>Add-Product page</h1>
                    <form onSubmit={formSubmit} >
                        <div className="add-form">
                            <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="product title" onChange={(e) => settitle(e.target.value)}  />
                            <div className="add-form">
                                <label htmlFor="price" className="form-label">Price</label>
                                    <input type="number" className="form-control" id="price" onChange={(e) => setprice(e.target.value)} />
                                    <button type="submit" className="btn btn-primary  add-btn-blue">Add</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    
    )
}

export default AddProduct;