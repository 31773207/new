import React, { useState } from 'react';
import './LoginPopup.css';

const LoginPopup = ({ setShowLogin, onLoginSuccess }) => {
  const [currState, setCurrState] = useState('Login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Simple validation/example logic here
    if (currState === 'Login') {
      if (formData.email === 'user@example.com' && formData.password === 'password') {
        onLoginSuccess({ name: 'User' });
        setShowLogin(false);
      } else {
        setError('Invalid email or password');
      }
    } else {
      if (!formData.name || !formData.email || !formData.password) {
        setError('All fields are required');
      } else {
        onLoginSuccess({ name: formData.name });
        setShowLogin(false);
      }
    }
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          {/* Close button */}
          <button
            type="button"
            className="close-button"
            onClick={() => setShowLogin(false)}
            aria-label="Close login popup"
          >
            &#x2715; {/* Unicode multiplication sign (×) */}
          </button>
        </div>

        <div className="login-popup-inputs">
          {currState === 'Sign Up' && (
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="submit-button">
          {currState === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>

        {currState === 'Login' ? (
          <p>
            Create a new account?{' '}
            <span className="link" onClick={() => { setCurrState('Sign Up'); setError(''); }}>
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <span className="link" onClick={() => { setCurrState('Login'); setError(''); }}>
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;

