import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirm) {
      setError('Todos los campos son obligatorios');
      return;
    }

    if (!email.includes('@')) {
      setError('Correo no válido');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    if (password !== confirm) {
      setError('Las contraseñas no coinciden');
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem('users')) || [];

    if (usuarios.find(u => u.email === email)) {
      setError('El correo ya está registrado');
      return;
    }

    usuarios.push({ email, password });
    localStorage.setItem('users', JSON.stringify(usuarios));
    alert('Registro exitoso');
    navigate('/login');
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Registro</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Correo electrónico</label>
            <input
              className="form-input"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Contraseña</label>
            <input
              className="form-input"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Confirmar contraseña</label>
            <input
              className="form-input"
              type="password"
              placeholder="••••••••"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <button type="submit" className="register-button">
            Registrarse
          </button>
        </form>
        
        <div className="register-footer">
          <p>¿Ya tienes una cuenta? <a href="/login" className="link">Inicia sesión</a></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
