import React, { useState } from 'react';

const Product = ({ product }) => {
  const [isAddingToCart, setAddingToCart] = useState(false);

  const handleAddToCart = () => {
    // Add your logic for adding to cart
    setAddingToCart(true);
    if (!product) {
        return null; // or handle appropriately
      }
  };

  return (
    <div style={{ border: '8px solid white', padding: '10px', margin: '50px' }}>
      <img src={`product-image-${1}.jpg`} alt={`Product ${2}`} width="200" height="200" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      {!isAddingToCart && <button onClick={handleAddToCart}>Add to Cart</button>}
      {isAddingToCart && <p>Added to Cart!</p>}
    </div>
  );
};

export default Product;
