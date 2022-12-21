
import image12 from '../Photo/Kitchen/image 12.jpg';
import image13 from '../Photo/Kitchen/image 13.jpg';
import image14 from '../Photo/Kitchen/image 14.jpg';


function Picks() {

    return (
        <>
            <div className='info'>  
                <img src={image12} alt='.' />
                <h4>BOSCH Gbl 620 Blower 620<br />watt Blue-Black</h4>
                <div className='price'>
                    <h5>EGP 720.00</h5>
                    <span className='span-one'>799</span>
                    <span className='span-two'>9% off</span>
                </div>
                <div className='button'>
                    <button>Add to Cart</button>
                </div>
            </div>

            <div className='info'> 
                <img src={image13} alt='.' />
                <h4>BOSCH Gbl 620 Blower 620<br/>watt Blue-Black</h4>
                <div className='price'>
                    <h5>EGP 720.00</h5>
                    <span className='span-one'>799</span>
                    <span className='span-two'>9% off</span>
                </div>
                <div className='button'>
                    <button >Add to Cart</button>
                </div>
            </div>

            <div className='info'> 
                <img src={image14} alt='.' />
                <h4>BOSCH Gbl 620 Blower 620<br/>watt Blue-Black</h4>
                <div className='price'>
                    <h5>EGP 720.00</h5>
                    <span className='span-one'>799</span>
                    <span className='span-two'>9% off</span>
                </div>
                <div className='button'>
                    <button>Add to Cart</button>
                </div>
            </div>
        </>
    )
}
export default Picks;