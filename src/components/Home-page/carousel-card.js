import imagepage1 from '../Photo/imagepage1.jpg';
import imagepage2 from '../Photo/imagepage2.jpg';
import imagepage3 from '../Photo/imagepage3.jpg';
import imagepage4 from '../Photo/imagepage4.jpg';
import imagepage5 from '../Photo/imagepage5.jpg';
import imagepage6 from '../Photo/imagepage6.jpg';
import imagepage7 from '../Photo/imagepage7.jpg';
import imagepage8 from '../Photo/imagepage8.jpg';
import imagepage9 from '../Photo/imagepage9.jpg';
import './slides.css';

function Card() {
    return (
        <>
            <div className=' col-sm-6 col-md-6 col-lg-4'>
                <div className="card pt-4">
                    <h5 className=' text-center'> For your Fitness Needs</h5>
                    <img src={imagepage1} className="card-img-top " alt="title"/>
                    <div className="card-body"></div>
                </div>
            </div>

            <div className='col-sm-6 col-md-6 col-lg-4'>
                <div className="card pt-4">
                    <h5 className=' text-center'> Create with strip lights</h5>
                    <img src={imagepage2} className="card-img-top " alt="title"/>
                    <div className="card-body"></div>
                </div>
            </div>
            
            <div className='col-sm-6 col-md-6 col-lg-4'>
                <div className="card pt-4">
                    <h5 className=' text-center'>Kindle E readers</h5>
                    <img src={imagepage3} className="card-img-top " alt="title"/>
                    <div className="card-body"></div>
                </div>
            </div>

            <div className='col-sm-6 col-md-6 col-lg-4'>
                <div className="card pt-4">
                    <h5 className=' text-center'>Dresses</h5>
                    <img src={imagepage4} className="card-img-top " alt="title"/>
                    <div className="card-body"></div>
                </div>
            </div>
            
            <div className='col-sm-6 col-md-6 col-lg-4'>
                <div className="card pt-4">
                    <h5 className=' text-center'>Easy returns</h5>
                    <img src={imagepage5} className="card-img-top " alt="title"/>
                    <div className="card-body"></div>
                </div>
            </div>

                    <div className='col-sm-6 col-md-6 col-lg-4'>
                <div className="card pt-4">
                    <h5 className=' text-center'>Health & Personal Care</h5>
                    <img src={imagepage6} className="card-img-top " alt="title"/>
                    <div className="card-body"></div>
                </div>
            </div>

            
            <div className='col-sm-6 col-md-6 col-lg-4'>
                <div className="card pt-4">
                    <h5 className=' text-center'>Electronics</h5>
                    <img src={imagepage7} className="card-img-top " alt="title"/>
                    <div className="card-body"></div>
                </div>
            </div>

            
            <div className='col-sm-6 col-md-6 col-lg-4'>
                <div className="card pt-4">
                    <h5 className=' text-center'>Shop activity trackers </h5>
                    <img src={imagepage8} className="card-img-top " alt="title"/>
                    <div className="card-body"></div>
                </div>
            </div>

            
            <div className='col-sm-6 col-md-6 col-lg-4'>
                <div className="card pt-4">
                    <h5 className=' text-center'>New arrivals in Toys</h5>
                    <img src={imagepage9} className="card-img-top " alt="title"/>
                    <div className="card-body"></div>
                </div>
            </div>
            
        </>
    )
}

export default Card;