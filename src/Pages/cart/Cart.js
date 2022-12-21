import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteFromCart } from '../../rtk/slices/cart-slice';
import './Cart.css';
import Nophoto from '../Photo/Nophoto.png';


function AppCart() {

    const cart = useSelector(state => state.cart);

    const totalPrice = cart.reduce((acc, product) => {
        acc += product.price * product.quantity;
        return acc;
    },0)
    
    const dispatch = useDispatch()
    return (
        <div className='Cart-page'>
            <h1 className='py-5 ms-5 text-white m-0' >Cart-Page</h1> 
            <div className='Cart'>
                <div className='container'>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((product) => (
                                <tr>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <td>{product.price} EGP</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.images ? <img src={product.images} alt={product.title} /> : <img src={Nophoto} alt={product.title} />}</td>
                                    <td><button  className="btn btn-outline-danger" onClick={() =>dispatch(deleteFromCart(product))}>Delete</button></td>
                                </tr>  
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colSpan={5} className='total-price'>Total Price : {totalPrice} EGP</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AppCart;