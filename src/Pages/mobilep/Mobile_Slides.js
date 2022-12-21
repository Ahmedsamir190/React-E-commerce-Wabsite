import image1 from '../Photo/Mobileb/image1.png';
import image2 from '../Photo/Mobileb/image2.png';





function MobileSlides() {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner vh-75">
                <div className="carousel-item active">
                    <img src={image1}className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={image2} className="d-block w-100" alt="..."/>
                </div>
            </div>
        </div>
);
}

export default MobileSlides;


