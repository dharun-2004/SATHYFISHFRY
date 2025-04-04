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
     
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo-name">
            <img className="logo" src="/360_F_199858387_FymKsmjdD0Ss2el9eIstS7Y4UaBg5F6B.webp" alt="Sathya Fish Fry" width="40" height="40" />
            <a href="/" className="navbar-logo">Sathya Fish Fry</a>
          </div>

        
          <button className="navbar-toggler" onClick={toggleMenu}>
            ☰
          </button>

         
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
          <img src="/2301.i105.026.S.m005.c13.isometric sea food market.jpg" alt="Seafood Market Illustration" />
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
            <h3 className="carousel-1">Jilabi Fish </h3>
          </div>
          <div className="carousel-item">
            <img src="/grilled-fillet-steak-vegetable-salad-plate-generated-by-ai_3_11zon.jpg" alt="Fish Fry" className="carousel-image" />
            <h3 className="carousel-1"> Jilabi Chilli Fish</h3>
          </div>
          <div className="carousel-item">
            <img src="/Gemini_Generated_Image_l545nl545nl545nl.jpeg" alt="Fish Fry" className="carousel-image" />
            <h3 className="carousel-1">Pepper Fish Masala</h3>
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
            <div>
            <img className='all-img-4' src="/eat-healthy-restaurant-logo-papercraft-cut-out-style_13_11zon.jpg" alt="" />
            </div>
            <h6 className="about-item-title">Fresh Fish:</h6>
            <p className="about-item-description">Fish is fresh, properly cleaned, and free of any unpleasant odors.</p>
            <p className="about-item-description">Cut pieces are neat, without extra blood or waste.</p>
            <p className="about-item-description">No extra water or chemicals, just natural freshness.</p>
          </div>
          <div className="about-item">
          <div>
            <img className='all-img-4' src="/6349995.jpg" alt="" />
            </div>
            <h6 className="about-item-title">Oil Quality:</h6>
            <p className="about-item-description">Clean and high-quality oil with a high smoke point, such as peanut oil, and regularly filtered.</p>
            <p className="about-item-description">Clean and good-quality oil, like peanut oil, with a high heat limit.</p>
          </div>
          <div className="about-item">
          <div>
            <img  className='all-img-4'  src="https://img.freepik.com/free-vector/hand-drawn-zero-waste-eco-friendly-landing-page_1188-488.jpg?ga=GA1.1.1525430827.1743337888&semt=ais_hybrid" alt="" />
            </div>
            <h6 className="about-item-title">Cleanliness:</h6>
            <p className="about-item-description">Maintain high standards of cleanliness in cooking and serving areas for a safe and pleasant environment.</p>
            <p className="about-item-description">Regularly clean cooking and serving spaces for a better experience.</p>
          </div>
          <div className="about-item">
          <div>
            <img  className='all-img-4'  src="/3906326.jpg" alt="" />
            </div>
            <h6 className="about-item-title">OPENING HOURS</h6>
            <p className="about-item-description">Monday - Sunday: Evening 5 pm to 10 pm</p>
            <h6 className="about-item-title">ADDRESS</h6>
            <p className="about-item-description">Meacheri Velmani Workshop Opposite Side [Salem]</p>
          </div>
        </div>
      </section>

   {/* Contact Section */}
   <div className='img-con' >
  
<section id="contact" className="contact">
  <h2 className="contact-title">Contact Us</h2>
  
  <div className="contact-info">
    <p className="contact-number"> 8675781280</p>
    <p className="contact-number"> 9600938685</p>
  </div>

  <p className="contact-description">Easy and Fast – Place your order now!</p>

  <a 
    href="https://wa.me/919600938685" 
    target="_blank" 
    rel="noopener noreferrer"
    className="contact-button"
  >
    Just Click And Text on WhatsApp
  </a>
</section>

<div >
    <img className='img-1' src="/5124105.jpg" alt="" />
   </div>
</div>

{/* Footer Section */}
<footer className="footer">
  <p className="footer-text">
    &copy; {new Date().getFullYear()} Sathya Fish Fry. All rights reserved. <br />
    Designed by <strong>Dharun</strong>
  </p>
</footer>
    </div>
  );
}

export default App;
