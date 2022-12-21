import Slides_1 from '../Photo/Slides/Slides_1.png';
import Slides_2 from '../Photo/Slides/Slides_2.png';
import Slides_3 from '../Photo/Slides/Slides_3.png';




function Slides() {
    return (
    <>
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner vh-75">
            <div className="carousel-item active">
                <img src={Slides_1}className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src={Slides_2} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src={Slides_3} className="d-block w-100" alt="..."/>
            </div>
        </div>
    </div>
</>
);
}

export default Slides;


