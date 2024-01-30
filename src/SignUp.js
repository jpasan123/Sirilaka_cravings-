import React, { useState } from 'react';
import './SignUp.css';

const SignUp = ({ onSignUpButtonClick, onBackButtonClick }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    // Basic form validation
    if (!username || !email || !password) {
      setError('Unable to Sign Up. Please fill in all fields.');
      return;
    }

    // Your sign-up logic...

    // After successful sign-up, trigger navigation to login page
    onSignUpButtonClick();
  };

  return (
    <div className="signup-container">
     <img src="/images/crafts_logo.jpg" alt="Wood Crafts" />
      <h1>Create New Account</h1>
      <img
        src="/images/backup-logo.jpeg"
        alt="Back Icon"
        className="back-logo"
        onClick={onBackButtonClick}
      />
      <h2>Already registered? Enter <span className="login-link" onClick={onBackButtonClick}>Login</span></h2>
      {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
      <div className="input-container">
        <div className="input-group">
          <img src="/images/user-icon.png" alt="User Icon" />
          <input type="text" placeholder="Username" value={username}
            onChange={(e) => setUsername(e.target.value)}  />
        </div>
        <div className="input-group">
          <img src="/images/email-icon.png" alt="Email Icon" />
          <input type="email" placeholder="Email"  value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-group">
          <img src="/images/password-icon.png" alt="Password Icon" />
          <input type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <button className="signup-button"onClick={handleSignUp}>
      Sign Up
      </button>
    </div>
  );
};

export default SignUp;
