// src/App.jsx
import React from 'react';
import './App.css';

function App() {
  const sendMessage = () => {
    const phoneNumber = '+91 9600938685';
    const message = 'hi';
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url);
  };

  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-content">
          <a href="#" className="navbar-logo">Sathya Fish Fry</a>
          <button type="button" className="navbar-toggle">
            <span className="navbar-toggle-text">Toggle navigation</span>
          </button>
          <div className="navbar-links">
            <ul className="navbar-list">
              <li className="navbar-item"><a href="#home" className="navbar-link">Home</a></li>
              <li className="navbar-item"><a href="#about" className="navbar-link">About</a></li>
              <li className="navbar-item"><a href="#contact" className="navbar-link">Contact</a></li>
              <li className="navbar-item"><a href="#contact" className="navbar-link">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">Welcome to Our Fish Fry Shop</h1>
          <p className="header-subtitle">Perfectly Cooked, Always!</p>
          <div className="header-button">
            <a href="#about" className="header-link">About Shop</a>
          </div>
        </div>
      </header>

      {/* Carousel (Images Section) */}
      <div className="carousel">
        <div className="carousel-content">
          <div className="carousel-item">
            <img src="src\assets\delicious-lobster-gourmet-seafood.jpg" alt="..." className="carousel-image" />
          </div>
          <div className="carousel-item">
            <img src="src\assets\front-close-view-delicious-fried-fishes-lemon-slices-brown-plate-pepper-mix-colors-table-with-free-space.jpg" alt="..." className="carousel-image" />
          </div>
          <div className="carousel-item">
            <img src="src\assets\grilled-fillet-steak-vegetable-salad-plate-generated-by-ai.jpg" alt="..." className="carousel-image" />
          </div>
         
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="about">
        <h2 className="about-title">About Shop</h2>
        <div className="about-content">
          <div className="about-item">
            <h6 className="about-item-title">Fresh Fish:</h6>
            <p className="about-item-description">Fish is fresh, properly cleaned, and free of any unpleasant odors.</p>
          </div>
          <div className="about-item">
            <h6 className="about-item-title">Oil Quality:</h6>
            <p className="about-item-description">Clean and high-quality oil with a high smoke point, such as peanut oil, and regularly filtered.</p>
          </div>
          <div className="about-item">
            <h6 className="about-item-title">Cleanliness:</h6>
            <p className="about-item-description">Maintain high standards of cleanliness in cooking and serving areas for a safe and pleasant environment.</p>
          </div>
          <div className="about-item">
            <h6 className="about-item-title">OPENING HOURS</h6>
            <p className="about-item-description">Monday - Sunday: Evening 5 pm to 10 pm</p>
            <h6 className="about-item-title">ADDRESS</h6>
            <p className="about-item-description">Meacheri Velmani Workshop Opposite Side [Salem]</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-number">8675781280</p>
        <p className="contact-number">9600938685</p>
        <p className="contact-description">Easy and Fast – Place your order now!</p>
        <button onClick={sendMessage} className="contact-button">Just Click And Text on WhatsApp</button>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p className="footer-text">&copy; 2024 Sathya Fish Fry. All rights reserved. Designed by Dharun007</p>
      </footer>
    </div>
  );
}

export default App;
