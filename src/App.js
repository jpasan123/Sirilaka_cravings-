import React, { useState } from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Product from './Product';
import Features from './Features';
import About from './About';
import Welcome from './Welcome';
import SignUp from './SignUp';
import Login from './Login';
import ForgetPassword from './ForgetPassword';
import ProductCatalogPage from './ProductCatalogPage';

const productsData = [
  {
    id: 1,
    name: 'Traditional Mask Of Devil',
    description: 'Sri Lankan Handmade Wood Wall Hang Vintage Beautiful Fire Mask Sculpture 10"Great Home Decor, Stunning Gift Piece',
    price: 19.99,
    image: '/images/product1.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'From Suresh and Devender Garg, this striking kadam wood sculpture captures the elephants inherent majesty. Its lordly stride, intelligent expression, strength and power radiate from the hand-carved piece.',
    price: 29.99,
    image: '/images/product2.jpg',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'This is a woodern fishermen cravings status.',
    price: 39.00,
    image: '/images/product3.jpg',
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'House On The Hill cookie molds are made of a resin and wood composite. Each mold is individually hand cast and carefully hand finished. Most of the molds are replicas of antique carvings that are now in museums and private collections.Description for Product 2',
    price: 45.99,
    image: '/images/product4.jpg',
  },
  {
    id: 5,
    name: 'Product 5',
    description: 'From Suresh and Devender Garg, this striking kadam wood sculpture captures the elephants inherent majesty. Its lordly stride, intelligent expression, strength and power radiate from the hand-carved piece.',
    price: 60.99,
    image: '/images/product5.jpg',
  },
  {
    id: 6,
    name: 'Product 6',
    description: 'From Suresh and Devender Garg, this striking kadam wood sculpture captures the elephants inherent majesty. Its lordly stride, intelligent expression, strength and power radiate from the hand-carved piece.',
    price: 75.99,
    image: '/images/product6.jpg',
  },
  {
    id: 7,
    name: 'Product 7',
    description: 'From Suresh and Devender Garg, this striking kadam wood sculpture captures the elephants inherent majesty. Its lordly stride, intelligent expression, strength and power radiate from the hand-carved piece.Description for Product 2',
    price: 85.99,
    image: '/images/product7.jpg',
  },
  {
    id: 8,
    name: 'Product 8',
    description: 'From Suresh and Devender Garg, this striking kadam wood sculpture captures the elephants inherent majesty. Its lordly stride, intelligent expression, strength and power radiate from the hand-carved piece.',
    price: 95.99,
    image: '/images/product8.jpg',
  },
  {
    id: 9,
    name: 'Product 9',
    description: 'From Suresh and Devender Garg, this striking kadam wood sculpture captures the elephants inherent majesty. Its lordly stride, intelligent expression, strength and power radiate from the hand-carved piece.',
    price: 110.99,
    image: '/images/product9.jpg',
  },
  {
    id: 10,
    name: 'Product 10',
    description: 'Find many great new & used options and get the best deals for A Finely Carved Anglo Indian Box from Mysore at the best online prices at eBay! Free delivery for many products.',
    price: 150.99,
    image: '/images/product10.jpg',
  },
];

const App = () => {
  const [userType, setUserType] = useState('');
  const [showWelcome, setShowWelcome] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [currentPage, setCurrentPage] = useState('Welcome');
  const [showForgetPassword, setShowForgetPassword] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleLoginButtonClick = () => {
    setCurrentPage('catalog');
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBackClick = () => {
    setSelectedProduct(null);
  };

  const handlePageSelect = (page) => {
    setCurrentPage(page);
  };

  const handleButtonClick = (type) => {
    setUserType(type);
    setShowWelcome(false);
    setShowSignUp(true);
  };

  const handleSignUpButtonClick = () => {
    setShowSignUp(false);
    setShowLogin(true);
  };

  const handleBackButtonClick = () => {
    if (showLogin) {
      setShowLogin(false);
      setShowSignUp(true);
    } else if (showSignUp) {
      setShowSignUp(false);
      setShowWelcome(true);
    }
  };

  const handleForgetPasswordClick = () => {
    setShowForgetPassword(true);
  };

  return (
    <div className="app">
      <NavBar onSelect={handlePageSelect} />
      {currentPage === 'Home' && <Home />}
      {currentPage === 'Product' && selectedProduct && <Product product={selectedProduct} />}
      {currentPage === 'Features' && <Features />}
      {currentPage === 'About' && <About />}
      {currentPage === 'ProductCatalog' && !showLogin && (
        <ProductCatalogPage products={productsData} onProductClick={handleProductClick} />
      )}
      {selectedProduct && (
        <div style={{ backgroundColor: 'purple', color: 'white', padding: '20px' }}>
          <h1>Product Catalog</h1>
          {/* Render product details... */}
          <img src={selectedProduct.image} alt={selectedProduct.name} />
          <h2>{selectedProduct.name}</h2>
          <p>{selectedProduct.description}</p>
          <p>${selectedProduct.price}</p>
          <button>Add to Cart</button>
          <button onClick={handleBackClick}>Back</button>
        </div>
      )}
      <div>
        {productsData.map((product) => (
          <img
            key={product.id}
            src={product.image}
            alt={product.name}
            style={{ width: '100px', margin: '10px', cursor: 'pointer' }}
            onClick={() => handleProductClick(product)}
          />
        ))}
      </div>

      {showWelcome && <Welcome userType={userType} onButtonClick={handleButtonClick} />}
      {showSignUp && (
        <SignUp onBackButtonClick={handleBackButtonClick} onSignUpButtonClick={handleSignUpButtonClick} />
      )}
      {showLogin && (
        <Login
          onBackButtonClick={handleBackButtonClick}
          onLoginButtonClick={handleLoginButtonClick}
          onForgetPasswordClick={handleForgetPasswordClick}
        />
      )}
      {showForgetPassword && (
        <ForgetPassword onBackButtonClick={() => setShowForgetPassword(false)} />
      )}
    </div>
  );
};

export default App;
