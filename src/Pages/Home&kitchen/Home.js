
import image10 from '../Photo/Kitchen/image10.jpg';
import Picks from './Home-picks';
import './Home.css';
import Tools from './Kitchen-photo';
import ProductPhoto from './Prodcut-photo';
import SlidesHome from './Slides';




function Home() {
    return (
            
        <div className="slides-one">
            <div className="item ">
                <SlidesHome/>
            </div>
            <div className="promotion ">
                <div className='container'>
                    <img src={image10} alt="..." className='photo-promotion' />
                    <div className='kitchen-tools'>
                        <Tools/>
                    </div>
                    <hr />
                    <h2>Top home picks</h2>
                    <div className='some-product'>
                        <Picks />
                        <Picks />
                        <Picks />
                        <div className='product-title'>
                            <h1>Your Home, <span>Your Taste</span></h1>
                            <ProductPhoto/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    


    )

}
export default Home;



