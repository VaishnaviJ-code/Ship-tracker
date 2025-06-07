import './RegisterPage.css';
import RegisterForm from '../components/RegisterForm';
import shipImg from '../assets/ship.jpg';

const RegisterPage = () => {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        {/* Left: Form */}
        <div className="login-box">
          <div className="welcome-message">
            <h1>Welcome to Ship Tracker!</h1>
            <p className="subtitle">Create your account to start tracking vessels</p>
          </div>
          <RegisterForm />
        </div>

        {/* Right: Image */}
        <div className="auth-image-container">
          <img src={shipImg} alt="Cargo ship sailing on ocean waters" />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;