import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <h2>navbar</h2>
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
            <Link to="/posts">posts</Link>
            <Link to="/contact">contact US</Link>
            <Link to="/users">Users</Link>
           
        </nav>
    );
};

export default Header;