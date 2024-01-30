// NavBar.js
import React from 'react';
import './NavBar.css';

const NavBar = ({ onSelect }) => {
  return (
    <div className="navbar-container">
      <div onClick={() => onSelect('Home')}>Home</div>
      <div onClick={() => onSelect('Product')}>Product</div>
      <div onClick={() => onSelect('Payment_method')}>Payment_method</div>
      <div onClick={() => onSelect('About')}>About</div>
    </div>
  );
};

export default NavBar;
