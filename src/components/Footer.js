import React from 'react';

const Footer = ({ showSection }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Infinova</h3>
            <p>Innovation Beyond Limits</p>
            <p>Empowering individuals and organizations through cutting-edge technology, comprehensive education, and professional consulting services.</p>
            <div className="social-links">
              <a href="#" title="Facebook">📘</a>
              <a href="#" title="Twitter">🐦</a>
              <a href="#" title="LinkedIn">💼</a>
              <a href="#" title="Instagram">📷</a>
              <a href="#" title="YouTube">📺</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Our Divisions</h3>
            <ul>
              <li><a onClick={() => showSection('technologies')}>Infinova Technologies</a></li>
              <li><a onClick={() => showSection('eduventures')}>Infinova Eduventures</a></li>
              <li><a onClick={() => showSection('consultants')}>Infinova Consultants</a></li>
              <li><a onClick={() => showSection('about')}>About Us</a></li>
              <li><a onClick={() => showSection('contact')}>Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a onClick={() => showSection('courses')}>Courses</a></li>
              <li><a onClick={() => showSection('internships')}>Internships</a></li>
              <li><a onClick={() => showSection('jobs')}>Job Opportunities</a></li>
              <li><a onClick={() => showSection('hiring-solutions')}>Hiring Solutions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>📍 123 Innovation Street<br />Tech Park, Mumbai - 400001</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ info@infinova.org</p>
            <p>🌐 www.infinova.org</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Infinova. All rights reserved. | Designed with ❤️ for Innovation</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;