// LoginPage.jsx
import React, { useState } from 'react';
import './LoginPage.css';
import shipImg from '../assets/ship.jpg';
import bgPattern from '../assets/pattern.jpg';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const handleLogin = (credentials) => {
    console.log('Login attempted with:', credentials);
    // Add your authentication logic here
  };

  return (
    <div className="login-wrapper" style={{ backgroundImage: `url(${bgPattern})` }}>
      <div className="login-container" role="region" aria-label="Login form section">
        {/* Left: Form */}
        <div className="login-box" >
          <div className="welcome-message">
            <h1>Welcome Back!</h1>
            <p className="subtitle">Monitor vessel movements in real-time with our advanced tracking system</p>
          </div>
          <LoginForm onLogin={handleLogin} />
        </div>

        {/* Right: Image */}
        <div className="image-box">
          <img src={shipImg} alt="Cargo ship sailing on ocean waters" 
           aria-hidden="false"/>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;