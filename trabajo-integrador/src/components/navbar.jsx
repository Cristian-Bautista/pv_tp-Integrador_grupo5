import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
           <Link to="/">Inicio</Link>  
           <Link to="/favoritos">Favoritos</Link>
           <Link to="/crear">Agregar</Link>
        </nav>
    );
};

export default Navbar;
