import Card from './carousel-card';
import Slides from './Slides';

import './slides.css';




function HomePage() {
    return (
        <div className='home-page'>
            <div className="slids-image">
                <Slides/>
            </div>
        
            <div className='page'>
                <div className='container'>
                    <div className='row pt-5 row-gap  '>
                        <Card/>
                    </div>
                </div>
            </div>
        </div>
        

    )
}

export default HomePage;
