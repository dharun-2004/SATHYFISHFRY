// src/App.jsx
import React from 'react';
import './App.css';
import CircularGallery from './CircularGallery'; 

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
          <a href="/" className="navbar-logo">Sathya Fish Fry</a>
          <ul className="navbar-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Header Section */}
      <header className="header">
        <h1>Welcome to Sathya Fish Fry</h1>
        <p>Perfectly Cooked, Always!</p>
        <a href="#about" className="header-button">About Shop</a>
      </header>

      {/* Circular Gallery Section */}
      <section className="gallery-section">
        <CircularGallery />
      </section>

      {/* Menu Section (Carousel) */}
      <h1 className="menu">MENU</h1>
      <div className="carousel">
        <div className="carousel-content">
          <div className="carousel-item">
            <img src="src/assets/istockphoto-1149821046-612x612.jpg" alt="Fish Fry" className="carousel-image" />
            <h3 className="carousel-1">FISH FRY</h3>
          </div>
          <div className="carousel-item">
            <img src="src/assets/grilled-fillet-steak-vegetable-salad-plate-generated-by-ai_3_11zon.jpg" alt="Fish Fry" className="carousel-image" />
            <h3 className="carousel-1">FISH FRY</h3>
          </div>
          <div className="carousel-item">
            <img src="src/assets/Gemini_Generated_Image_l545nl545nl545nl.jpeg" alt="Fish Fry" className="carousel-image" />
            <h3 className="carousel-1">FISH FRY</h3>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="about">
        <h2 className="menu">About Shop</h2>
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
        <p className="contact-number">Ph : 8675781280</p>
        <p className="contact-number">Ph : 9600938685</p>
        <p className="contact-description">Easy and Fast – Place your order now!</p>
        <button onClick={sendMessage} className="header-link">Just Click And Text on WhatsApp</button>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p className="footer-text">&copy; 2024 Sathya Fish Fry. All rights reserved. Designed by Dharun</p>
      </footer>
    </div>
  );
}

export default App;
