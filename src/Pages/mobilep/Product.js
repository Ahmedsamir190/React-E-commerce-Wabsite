import Nophoto from '../Photo/Nophoto.png';



function Product(props) {
    return (
        <>
        {props.Product.images ?<img src={props.Product.images} alt={props.Product.title} /> :<img src={Nophoto} alt={props.Product.title} /> }
            <h3>{props.Product.title}</h3>
            
            {props.Product.description ? <p className="words-p" >{props.Product.description}</p> : <p className="text-warning">Sorry We Will Provide Description Very soon</p>}

        <span>EGP {props.Product.price}.00</span>
        
        </>
    )

    
}

export default Product;