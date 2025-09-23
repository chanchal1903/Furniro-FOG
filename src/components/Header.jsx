// Header.js
import React from 'react';
const Header = ({ setView }) => (
  <header className="header">
    <div className="container">
      <div className="logo">
        <img src="https://placehold.co/40x40/000/fff?text=F" alt="Furniro Logo" className="logo-img" />
        <h1>Furniro</h1>
      </div>
      <nav className="nav-menu">
        <a href="#" onClick={() => setView('home')}>Home</a>
        <a href="#" onClick={() => setView('shop')}>Shop</a>
        <a href="#" onClick={() => setView('about')}>About</a>
        <a href="#" onClick={() => setView('contact')}>Contact</a>
      </nav>
      <div className="nav-icons">
        <span onClick={() => setView('profile')}>&#128100;</span>
        <span onClick={() => setView('search')}>&#128269;</span>
        <span onClick={() => setView('wishlist')}>&#9825;</span>
        <span onClick={() => setView('cart')}>&#128722;</span>
      </div>
    </div>
  </header>
);
export default Header;
