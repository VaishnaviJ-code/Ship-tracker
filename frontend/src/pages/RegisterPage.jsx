import RegisterForm from '../components/RegisterForm';
import shipImg from '../assets/ship.jpg';
import bgPattern from '../assets/pattern.jpg';
import './RegisterPage.css'; 

const RegisterPage = () => {
  return (
    <div className="auth-page" style={{ backgroundImage: `url(${bgPattern})` }}>
      <div className="auth-container">
        <div className="welcome-message">
            <h1>Welcome to Ship Tracker!</h1>
            <p className="subtitle">Monitor vessel movements in real-time with our advanced tracking system</p>
        </div>
        <RegisterForm />
      </div>

        <div className="image-box">
            <img src={shipImg} alt="Cargo ship sailing on ocean waters" 
            aria-hidden="false"/>
        </div>
    </div>
  );
};

export default RegisterPage;