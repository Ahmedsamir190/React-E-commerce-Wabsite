
import './mobile.css';
import PhotoBar from './Photo-Bar';
import Aside from './aside';
import Product from './Product';
import AsideMobile from './Aside_Mobile';
import { useState } from 'react';
import { fetchProducts } from '../../rtk/slices/products-slice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../rtk/slices/cart-slice';
import MobileSlides from './Mobile_Slides';



function Mobile() { 

    const api = 'http://localhost:9000/products';
    const [products, setproducts] = useState([]);
    
    useEffect(() => {
        fetch(api)
        .then((res) =>res.json())
            .then((data) => { setproducts(data) })
    }, [])

    
    
    
    const [data, Setdata] = useState(products);
    const FilterResult  = (filtbrand) => {
        const result = products.filter((resproduct) => {
            return resproduct.brand === filtbrand
        })
        Setdata(result);
    }
    


    const FilterByColor  = (filtcolor) => {
        const result = products.filter((resproduct) => {
            return resproduct.color === filtcolor
        })
        Setdata(result);
    }


    const FilterByNetwork  = (filtnetwork) => {
        const result = products.filter((resproduct) => {
            return resproduct.network === filtnetwork
        })
        Setdata(result);
    }

    const productts = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    
    
    return (
        
            <div className='mobile-page'>
                <div className="slide">
                    <MobileSlides/>
                </div>
                <div className="container">
                    <div className='photo-bar pt-4'>
                        <PhotoBar  />
                    </div>
                    <hr />
                    <div className='filter-mobile'>
                        <AsideMobile />
                    </div> 
                    <div className='filterandproduct'>
                        <aside >
                            <div className='aside '>
                                <button className='btn btn-outline-primary mb-4' onClick={() => Setdata(products)}>All-Product</button> 
                                                            <h3>brand</h3> 
                                <form>
                                    <div className='check '>
                                        <div className='input-check  '>
                                            <input id="apple" type={"checkbox"} name={"os"} onClick={() => FilterResult("APPle")} />
                                            <label htmlFor='apple'>Apple</label>
                                        </div>
                                        <div className='input-check '>
                                            <input id="samsung" type={"checkbox"} name={"os"} onClick={() => FilterResult("Samsung")} />
                                            <label htmlFor='samsung'>Samsung</label>
                                        </div>
                                        <div className='input-check '>
                                            <input  id="OPPO" type={"checkbox"} name={"os"} onClick={() => FilterResult("OPPO")} />
                                            <label htmlFor='OPPO'>OPPO</label>
                                        </div>
                                        <div className='input-check '>
                                            <input  id="Huawei" type={"checkbox"} name={"os"} onClick={() => FilterResult("Huawei")} />
                                            <label htmlFor='Huawei'>Huawei</label>
                                        </div>
                                        <div className='input-check '>
                                            <input  id="OPPO" type={"checkbox"} name={"os"} onClick={() => FilterResult("Microsoft Surface")} />
                                            <label htmlFor='OPPO'>Microsoft</label>
                                        </div>
                                    </div>
                                        
                                                                <h3> color</h3>
                                    <div className='check '>
                                        <div className='input-check '>
                                            <input id='blue' type={"checkbox"} name={"os"} onClick={() => FilterByColor('blue')}  />
                                            <label htmlFor='blue'>blue</label>
                                        </div>
                                        <div className='input-check '>
                                            <input id="red" type={"checkbox"}  name={"os"} onClick={() => FilterByColor('red')} />
                                            <label htmlFor='red'>red</label>
                                        </div>
                                        <div className='input-check '>
                                            <input  id="black" type={"checkbox"}  name={"os"} onClick={() => FilterByColor("black")} />
                                            <label htmlFor='black'>black</label>
                                        </div>
                                    </div>
                                                    <h3> Network Type</h3>
                                    <div className='check '>
                                        <div className='input-check '>
                                            <input id="5G" type={"checkbox"} name={"os"}  onClick={() => FilterByNetwork("5G")} />
                                            <label htmlFor='5G'>5G</label>
                                        </div>
                                        <div className='input-check '>
                                            <input id="4G" type={"checkbox"}  name={"os"}  onClick={() => FilterByNetwork("4G")}/>
                                            <label htmlFor='4G'>4G</label>
                                        </div>
                                        <div className='input-check '>
                                            <input  id="3G" type={"checkbox"}  name={"os"}  onClick={() => FilterByNetwork("3G")}/>
                                            <label htmlFor='3G'>3G</label>
                                        </div>
                                    </div>
                                </form>
                            </div>                   
                        </aside>
                        <div className='product' >
                            {data.map((pro) =>  {
                                return (
                                    <div className='product-info' key={pro.id}>
                                        <Product Product={pro} Aside={pro} />
                                        <button className='btn btn-primary'  onClick={()=>dispatch(addToCart(pro))}>Add To Cart</button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    
}
export default Mobile;


