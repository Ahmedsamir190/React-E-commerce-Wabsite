import {Link} from 'react-router-dom';

function Menu() {
    return (
            <ol>
                <li>
                    <Link to='/mobile'>Mobile phone</Link>
                </li>
                <li>
                    <Link to='/productaction'>ProductAction</Link>
                </li>
                <li>
                    <Link to='/home'>Home & kitchen</Link>
                </li>
            </ol>
    )
}
export default Menu;