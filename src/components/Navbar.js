import React, { useState, useEffect } from 'react';

const Navbar = ({ currentSection, showSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    showSection(section);
    setIsMenuOpen(false); // This will close the menu
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
      } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo" onClick={() => handleNavClick('home')}>
          <img src="./assets/image/global_Logo.png" width={250}/>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}` }>
          <li><a onClick={() => handleNavClick('home')}>Home</a></li>
          <li><a onClick={() => handleNavClick('eduventures')}>Eduventures</a></li>
          <li><a onClick={() => handleNavClick('consultants')}>Consultants</a></li>
          <li><a onClick={() => handleNavClick('technologies')}>Technologies</a></li>
          <li><a onClick={() => handleNavClick('contact')}>Contact</a></li>
          <li><a onClick={() => handleNavClick('aboutUs')}>About Us</a></li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;