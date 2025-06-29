import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav style={{
            backgroundColor: '#333',
            color: '#fff',
            padding: '1rem',
            display: 'flex',
           gap: '1rem',
        }}>
           <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link>  
           <Link to="/favoritos" style={{ color: '#fff', textDecoration: 'none' }}>Favoritos</Link>
           <Link to="/crear" style={{ color: '#fff', textDecoration: 'none' }}>Agregar</Link>
        </nav>
    );
};
export default Navbar;