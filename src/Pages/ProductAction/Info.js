import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../rtk/slices/cart-slice';
import { fetchProducts } from '../../rtk/slices/products-slice';
import Nophoto from '../Photo/Nophoto.png';
import {FaSmile} from 'react-icons/fa';

function Info() {

    const [productid,setproductid]= useState([])

    useEffect(() => {
        fetch(`http://localhost:9000/products/${productId}`)
            .then((res) => res.json())
            .then(data => setproductid(data))
    },[])
    let { productId } = useParams();


    

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    return (
        
        <div className="product-id">
            <div className="container">
                <h1>Product-Number: {productId}</h1>
                <div className="product-id-info" >
                    {productid.images ? <img src={productid.images} alt={productid.brand} /> : <img src={Nophoto} alt={productid.brand} />} 
                    
                    <div className="words position-relative">
                        {productid.description ? <p className="words-p" >{productid.description}</p> : <p className="text-warning">Sorry We Will Provide Description Very soon <FaSmile className="text-info fs-1 position-absolute end-0 " /> </p>}

                        <span className="click">{productid.brand} </span>
                        <span className="price">EGP {productid.price}.00</span>
                        <p >FREE Returns<br/>
                            All prices include VAT.<br/>
                            Buy with installments and pay EGP 112.03 for 60 months with select banks</p>
                    </div>
                    <div className="card-pay">
                        <span className="price">EGP {productid.price}.00</span>
                        <p>
                            FREE Returns <br/>
                            FREE delivery<br/>
                            Deliver to Egypt<br/>
                            Only 3 left in stock - order soon.
                        </p>
                        <button onClick={()=>dispatch(addToCart(productid))}>Add to Cart</button>
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
        
            
    )
}

export default Info;
