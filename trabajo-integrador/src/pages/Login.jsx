import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');


    if (!formData.email || !formData.password) {
      setError('Por favor complete todos los campos');
      setIsSubmitting(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Por favor ingrese un email válido');
      setIsSubmitting(false);
      return;
    }

    try {
      const success = await login(formData.email, formData.password);
      
      if (success) {
        navigate('/');
      } else {
        setError('Credenciales inválidas. Por favor intente nuevamente.');
      }
    } catch (err) {
      setError('Ocurrió un error. Por favor intente más tarde.');
      console.error('Login error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Iniciar Sesión</h2>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="ejemplo@dominio.com"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              autoComplete="email"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
              autoComplete="current-password"
              required
              minLength="6"
            />
          </div>
          
          {error && (
            <div className="error-message">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              <span>{error}</span>
            </div>
          )}
          
          <button 
            type="submit" 
            className="login-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                Procesando...
              </>
            ) : 'Entrar'}
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default Login;

