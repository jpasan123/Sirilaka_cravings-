import React, { useState } from 'react';
import Product from './Product';
import './ProductCatalogPage.css';


const ProductCatalogPage = ({ onLoginButtonClick }) => {
  const [products] = useState([
    { id: 1, name: 'Traditional Mask Of Devil', price: 19.99, description: 'Sri Lankan Handmade Wood Wall Hang Vintage Beautiful Fire Mask Sculpture 10"Great Home Decor, Stunning Gift Piece' },
    { id: 2, name: 'Product 2', price: 29.99, description: 'From Suresh and Devender Garg, this striking kadam wood sculpture captures the elephants inherent majesty. Its lordly stride, intelligent expression, strength and power radiate from the hand-carved piece.' },
    { id: 3, name: 'Product 3', price: 39.00, description: ' This is a woodern fishermen cravings status.' },
    { id: 4, name: 'Product 4', price: 45.99, description: 'House On The Hill cookie molds are made of a resin and wood composite. Each mold is individually hand cast and carefully hand finished. Most of the molds are replicas of antique carvings that are now in museums and private collections.' },
    { id: 5, name: 'Product 5', price: 60.99, description: 'From Suresh and Devender Garg, this striking kadam wood sculpture captures the elephants inherent majesty. Its lordly stride, intelligent expression, strength and power radiate from the hand-carved piece.' },
    { id: 6, name: 'Product 6', price: 75.99, description: 'From Suresh and Devender Garg, this striking kadam wood sculpture captures the elephants inherent majesty. Its lordly stride, intelligent expression, strength and power radiate from the hand-carved piece.' },
    { id: 7, name: 'Product 7', price: 85.99, description: 'From Suresh and Devender Garg, this striking kadam wood sculpture captures the elephants inherent majesty. Its lordly stride, intelligent expression, strength and power radiate from the hand-carved piece.' },
    { id: 8, name: 'Product 8', price: 95.99, description: 'From Suresh and Devender Garg, this striking kadam wood sculpture captures the elephants inherent majesty. Its lordly stride, intelligent expression, strength and power radiate from the hand-carved piece.' },
    { id: 9, name: 'Product 9', price: 110.99, description: 'From Suresh and Devender Garg, this striking kadam wood sculpture captures the elephants inherent majesty. Its lordly stride, intelligent expression, strength and power radiate from the hand-carved piece.' },
    { id: 10, name: 'Product 10', price: 150.99, description: 'Find many great new & used options and get the best deals for A Finely Carved Anglo Indian Box from Mysore at the best online prices at eBay! Free delivery for many products!' },
    // Add more products as needed
  ]);

  const handleBackButtonClick = () => {
    // Handle navigation back to the login page
    // You can use state or other mechanisms for page navigation
    onLoginButtonClick();
  };

  return (
    <div style={{ backgroundColor: 'purple', color: 'white', padding: '20px' }}>
      <h1>Product Catalog</h1>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '200px', height: '200px', margin: '10px' }}
          />
          <Product product={product} />
        </div>
      ))}
      <button onClick={handleBackButtonClick}>Back to Login</button>
    </div>
  );
};

export default ProductCatalogPage;
