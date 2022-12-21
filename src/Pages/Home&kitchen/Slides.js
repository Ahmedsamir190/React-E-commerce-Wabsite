import image8 from '../Photo/image8.png';

function SlidesHome() {
    return (

    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner vh-75">
            <div className="carousel-item active">
                <img src={image8}className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src={image8} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src={image8} className="d-block w-100" alt="..."/>
            </div>
        </div>
    </div>

);
}

export default SlidesHome;


