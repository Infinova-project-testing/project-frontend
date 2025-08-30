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
              <a href="#" title="Facebook"><img src="/assets/image/facebook.png" alt="" width={40} /></a>
              <a href="#" title="Twitter"><img src="/assets/image/twitter.png" alt="" width={40} /></a>
              <a href="#" title="LinkedIn"><img src="/assets/image/linkedin.png" alt="" width={40} /></a>
              <a href="#" title="Instagram"><img src="/assets/image/instagram.png" alt="" width={40} /></a>
              <a href="#" title="YouTube"><img src="/assets/image/youtube.png" alt="" width={40} /></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h1>Our Divisions</h1>
            <ul>
              <li><a onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                 showSection('technologies');
              }}>Infinova Technologies</a></li>
              <li><a onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                 showSection('eduventures');
              }}>Infinova Eduventures</a></li>
              <li><a onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                 showSection('consultants');
              }}>Infinova Consultants</a></li>
              <li><a onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                 showSection('aboutUs');
              }}>About Us</a></li>
              <li><a onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                 showSection('contact');
              }}>Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h1>Quick Links</h1>
            <ul>
              <li><a onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                 showSection('courses');
              }}>Courses</a></li>
              <li><a onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                 showSection('internships');
              }}>Internships</a></li>
              <li><a onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                 showSection('jobs');
              }}>Job Opportunities</a></li>
              <li><a href='#' style={{ pointerEvents: "none", color: "gray", cursor: "not-allowed" }}
              tabIndex={-1}
              aria-disabled="true">Hiring Solutions</a></li>
              <li><a href="#" style={{ pointerEvents: "none", color: "gray", cursor: "not-allowed" }}
              tabIndex={-1}
              aria-disabled="true">Privacy Policy</a></li>
              <li><a href="#" style={{ pointerEvents: "none", color: "gray", cursor: "not-allowed" }}
              tabIndex={-1}
              aria-disabled="true">Terms of Service</a></li>
            </ul>
          </div>
          
          <div className="footer-section right-align">
            <h1>Contact Info</h1>
            <p><img src="/assets/image/map_12690830.png" alt="" width={20} /> 123 Innovation Street<br />Tech Park, Mumbai - 400001</p>
            <p><img src="/assets/image/telephone_1321655.png" alt="" width={20} /> +91 98765 43210</p>
            <p><img src="/assets/image/messages_1683541.png" alt="" width={20} /> info@infinova.org</p>
            <p><img src="/assets/image/internet_364089.png" alt="" width={20} /> www.infinova.org</p>
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