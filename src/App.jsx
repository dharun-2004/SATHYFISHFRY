import React, { useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sendMessage = () => {
    const phoneNumber = '+91 9600938685';
    const message = 'hi';
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo-name">
            <img className="logo" src="/360_F_199858387_FymKsmjdD0Ss2el9eIstS7Y4UaBg5F6B.webp" alt="Sathya Fish Fry" width="40" height="40" />
            <a href="/" className="navbar-logo">Sathya Fish Fry</a>
          </div>

          {/* Toggle Button for Small Screens */}
          <button className="navbar-toggler" onClick={toggleMenu}>
            ☰
          </button>

          {/* Navbar Links */}
          <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Header Section */}
      <div className='head-img'>
        <header className="header">
          <h1>Welcome to Sathya <span style={{ color: '#eab308', fontFamily: 'Carter One' }}>Fish Fry</span></h1>
          <p className="p-head">Perfectly Cooked, Always!</p>
          <p className="p-par">
            Sathya Fish Fry is your go-to destination for delicious, crispy, and flavorful fish fries. <br />
            Our specialty lies in sourcing the freshest fish, marinating it with handpicked spices. <br />
            <span style={{ color: '#e53e3e' }}>Crispy to perfection</span> <br />
            Come and enjoy the taste of authentic, home-style fish fry <br />
            that keeps you coming back for more!
          </p><br />
          <a href="#about" className="header-button">About Shop</a>
        </header>

        <div className="head2">
          <img src="public\2301.i105.026.S.m005.c13.isometric sea food market.jpg" alt="Seafood Market Illustration" />
        </div>
      </div>

      {/* Menu Section (Carousel) */}
      
      <div className="carousel">
      <div className="menu-all">
        <h1 className="menu">MENU <img className="arro" src="/arrow_downward_38dp_000000_FILL0_wght700_GRAD200_opsz40.svg" alt="arrow" /></h1>
      </div>
      <br />
        <div className="carousel-content">
          <div className="carousel-item">
            <img src="/istockphoto-1149821046-612x612.jpg" alt="Fish Fry" className="carousel-image" />
            <h3 className="carousel-1">FISH FRY</h3>
          </div>
          <div className="carousel-item">
            <img src="/grilled-fillet-steak-vegetable-salad-plate-generated-by-ai_3_11zon.jpg" alt="Fish Fry" className="carousel-image" />
            <h3 className="carousel-1">FISH FRY</h3>
          </div>
          <div className="carousel-item">
            <img src="/Gemini_Generated_Image_l545nl545nl545nl.jpeg" alt="Fish Fry" className="carousel-image" />
            <h3 className="carousel-1">FISH FRY</h3>
          </div>
        </div>
<br />
        <div className="carousel-content">
          <div className="carousel-item">
            <img src="/istockphoto-1149821046-612x612.jpg" alt="Fish Fry" className="carousel-image" />
            <h3 className="carousel-1">FISH FRY</h3>
          </div>
          <div className="carousel-item">
            <img src="/grilled-fillet-steak-vegetable-salad-plate-generated-by-ai_3_11zon.jpg" alt="Fish Fry" className="carousel-image" />
            <h3 className="carousel-1">FISH FRY</h3>
          </div>
          <div className="carousel-item">
            <img src="/Gemini_Generated_Image_l545nl545nl545nl.jpeg" alt="Fish Fry" className="carousel-image" />
            <h3 className="carousel-1">FISH FRY</h3>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="about">
        <div className="menu-all">
          <h1 className="menu1">ABOUT <img className="arro" src="/arrow_downward_38dp_000000_FILL0_wght700_GRAD200_opsz40.svg" alt="arrow" /></h1>
        </div>
        <div className="about-content">
          <div className="about-item">
            <img src="public\eat-healthy-restaurant-logo-papercraft-cut-out-style_13_11zon.jpg" alt="" />
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
