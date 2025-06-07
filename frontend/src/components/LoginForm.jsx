// LoginForm.jsx
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginForm = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    const data = await response.json();
    localStorage.setItem('token', data.token); // Store token
  } catch (err) {
    console.error(err);
  }
};

  return (
    <form className="login-form" aria-label="Login Form" onSubmit={handleSubmit}>
      <label htmlFor="username" id="username-label">Username / Email</label>
      <input 
        type="text" 
        id="username" 
        value={credentials.username}
        onChange={(e) => setCredentials({...credentials, username: e.target.value})}
        placeholder="Enter your username or email" 
        aria-labelledby="username-label"
        aria-required="true"
      />

      <label htmlFor="password" id="password-label">Password</label>
      <div className="password-input-container">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Enter your password"
          value={credentials.password}
          onChange={(e) => setCredentials({...credentials, password: e.target.value})}
          aria-labelledby="password-label"
          aria-required="true"
          aria-describedby="password-toggle-instructions"
        />
        <span className="password-toggle" onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>

        <span id="password-toggle-instructions" className="visually-hidden">
          Toggle to show or hide password
        </span>
      </div>
      
      <button type="submit">Login</button>

      <div className="forgot-password">
        <a href="/forgot-password" aria-label="Forgot password? Reset password here">
          Forgot Password?
        </a>
        <p className="auth-switch">
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;