import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Confirmar contraseña"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;