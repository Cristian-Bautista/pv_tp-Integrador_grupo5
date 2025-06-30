import { Link,useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import './navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f2f2f2', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <Link to="/">Inicio</Link> |{' '}
        <Link to="/favoritos">Favoritos</Link> |{' '}
        <Link to="/crear">Crear Producto</Link>
      </div>
      <div>
        {user ? (
          <>
            <span style={{ marginRight: '1rem' }}>Bienvenido, {user.email}</span>
            <button onClick={handleLogout}>Cerrar sesión</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link> | <Link to="/register">Registrarse</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
