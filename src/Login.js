import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLoginButtonClick, onBackButtonClick, onForgetPasswordClick }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLoginButtonClick = () => {
    // Basic form validation
    if (!username) {
      setUsernameError('Invalid Username');
    } else {
      setUsernameError('');
    }

    if (!password) {
      setPasswordError('Invalid Password');
    } else {
      setPasswordError('');
    }

    // Your login logic...

    // After successful login, trigger navigation to product catalog page
    onLoginButtonClick();
  };

  return (
      <div className="login-container">
        <img src="/images/crafts_logo.jpg" alt="Wood Crafts" />
        <h1>Welcome to the Login</h1>
        <h2>Sign in to Continue</h2>
        <div className="input-container">
          <div className="input-group">
            <img src="/images/user-icon.png" alt="User Icon" />
            <input type="text" placeholder="Username"  value={username}
            onChange={(e) => setUsername(e.target.value)} />
          </div>
          {usernameError && <p className="error-message" style={{ color: 'red' }}>{usernameError}</p>}
          <div className="input-group">
            <img src="/images/password-icon.png" alt="Password Icon" />
            <input type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)} />
          </div>
          {passwordError && <p className="error-message" style={{ color: 'red' }}>{passwordError}</p>}
        </div>
        <button className="login-button" onClick={handleLoginButtonClick}>
          Login
        </button>
        <p>
          Not registered yet?{'  '}
          <span className="signup-link" onClick={onBackButtonClick}>
            Sign Up{'   '}
          </span>
          <span onClick={onForgetPasswordClick} style={{ cursor: 'pointer', color: 'white' ,fontWeight: 'bold'   }}>
            Forget Your Password ?
        </span>
        </p>
        <img
          className="backup-logo"
          src="/images/backup-logo.jpeg"
          alt="Backup Logo"
          onClick={onBackButtonClick}
        />
      </div>
  );
};

export default Login;
