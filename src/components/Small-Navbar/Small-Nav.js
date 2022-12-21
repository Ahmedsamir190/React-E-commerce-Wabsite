import './Small-nav.css'
import image6 from '../Photo/image6.jpg'
import CategoriesType from './All-Categories_type';
import { FaAlignJustify } from "react-icons/fa";
import Menu from './menu-Mobile ';
import {Link} from 'react-router-dom';


function SmallNavBar() {
    return (
        <div className="bar pt-3">
            <div className="container">
                <div className="categories">
                    <div className='All-categories'>
                            <p>All categories</p>
                        <div className="categories-type">
                            <CategoriesType/>
                            <img src={image6} alt='.' />
                        </div>
                    </div>
                    <div className='categories-list'>
                        <ul>
                            <li>
                                <Link to='/mobile'>Mobile phone</Link>
                            </li>
                            <li>
                                <Link to='/productaction'>ProductAction</Link>
                            </li>
                            <li>
                                <Link to='/home-kitchen'>Home & kitchen</Link>
                            </li>
                        
                        </ul>
                        <div className='listdown'><FaAlignJustify /> 
                            <Menu/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default SmallNavBar;