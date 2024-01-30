// ForgetPassword.js
import React, { useState } from 'react';
import './ForgetPassword.css'; // Create a separate CSS file for styling if needed

const ForgetPassword = ({ onBackButtonClick }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEnterClick = () => {
    // Add logic to handle password change (you can set up API calls or state changes as needed)
    // For simplicity, this example just logs the new password to the console
    console.log('New Password:', newPassword);
    console.log('Confirm Password:', confirmPassword);
    
    // Navigate back to the Login page
    onBackButtonClick();
  };

  return (
    <div className="forget-password-container">
      <img src="/images/crafts_logo.jpg" alt="Wood Crafts" />
      <h1>Forget Your Password</h1>
      <div className="password-container">
        <img src="/images/password-icon.png" alt="Password Icon" />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div className="password-container">
        <img src="/images/password-icon.png" alt="Password Icon" />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button className="enter-button" onClick={handleEnterClick}>
        Enter
      </button>
    </div>
  );
};

export default ForgetPassword;
