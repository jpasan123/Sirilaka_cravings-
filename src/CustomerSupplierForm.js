import React from 'react';
import './CustomerSupplierForm.css';

const CustomerSupplierForm = ({ setUserType }) => {
  return (
    <div className="form-container">
      <button onClick={() => setUserType('Customer')}>I am a Customer</button>
      <button onClick={() => setUserType('Supplier')}>I am a Supplier</button>
    </div>
  );
};

export default CustomerSupplierForm;
