import React from 'react';
import './Welcome.css';

const Welcome = ({ userType, onButtonClick }) => {
  return (
    <div className="welcome-container">
     
        <img src="/images/crafts_logo.jpg" alt="Wood Crafts Logo" />
     
      <div className="text-container">
        <h1>Welcome to Sirilaka Wood Cravings</h1>
        <p>{userType ? `You are a ${userType}` : 'Are you a Customer or Supplier?'}</p>
      </div>
      <div className="buttons-container">
        <button onClick={() => onButtonClick('Customer')}>I am a Customer</button>
        <button onClick={() => onButtonClick('Supplier')}>I am a Supplier</button>
      </div>
    </div>
  );
};

export default Welcome;
