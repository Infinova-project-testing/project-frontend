import React from 'react';

const Footer = ({ showSection }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h1>Infinova Global</h1>
            <p> <h2>Your Growth, Our Mission</h2></p>
            <p>Our mission is to empower individuals and organizations by delivering transformative education, innovative technology, and impactful consulting solutions that drive sustainable growth and real-world success.</p>
            <div className="social-links">
              <a href="#" title="Facebook"><img src="./src/assets/image/facebook.png" alt="" width={40} /></a>
              <a href="#" title="Twitter"><img src="./src/assets/image/twitter.png" alt="" width={40} /></a>
              <a href="#" title="LinkedIn"><img src="./src/assets/image/linkedin.png" alt="" width={40} /></a>
              <a href="#" title="Instagram"><img src="./src/assets/image/instagram.png" alt="" width={40} /></a>
              <a href="#" title="YouTube"><img src="./src/assets/image/youtube.png" alt="" width={40} /></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h1>Our Divisions</h1>
            <ul>
              <li><a onClick={() => showSection('technologies')}>Infinova Technologies</a></li>
              <li><a onClick={() => showSection('eduventures')}>Infinova Eduventures</a></li>
              <li><a onClick={() => showSection('consultants')}>Infinova Consultants</a></li>
              <li><a onClick={() => showSection('about')}>About Us</a></li>
              <li><a onClick={() => showSection('contact')}>Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h1>Quick Links</h1>
            <ul>
              <li><a onClick={() => showSection('courses')}>Courses</a></li>
              <li><a onClick={() => showSection('internships')}>Internships</a></li>
              <li><a onClick={() => showSection('jobs')}>Job Opportunities</a></li>
              <li><a onClick={() => showSection('hiring-solutions')}>Hiring Solutions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          
          <div className="footer-section right-align">
            <h1>Contact Info</h1>
            <p><img src="./src/assets/image/map_12690830.png" alt="" width={20} /> 123 Innovation Street<br />Tech Park, Mumbai - 400001</p>
            <p><img src="./src/assets/image/telephone_1321655.png" alt="" width={20} /> +91 98765 43210</p>
            <p><img src="./src/assets/image/messages_1683541.png" alt="" width={20} /> info@infinova.org</p>
            <p><img src="./src/assets/image/internet_364089.png" alt="" width={20} /> www.infinova.org</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Infinova. All rights reserved. </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;