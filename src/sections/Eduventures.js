import React from 'react';

const Eduventures = ({ showSection, showBrochureForm }) => {
  return (
    <section className="section active">
      <div className="container">
        <h2 className="section-title">Infinova Eduventures</h2>
        <div className="text-center mb-40">
          <a 
            href="#" 
            className="cta-button" 
            onClick={(e) => {e.preventDefault(); showSection('courses');}}
          >
            View All Courses
          </a>
          <a 
            href="#" 
            className="cta-button" 
            style={{ marginLeft: '20px' }}
            onClick={(e) => {e.preventDefault(); showSection('internships');}}
          >
            Find Internships
          </a>
          <a 
            href="#" 
            className="cta-button" 
            style={{ marginLeft: '20px' }}
            onClick={(e) => {e.preventDefault(); showSection('jobs');}}
          >
            Explore Jobs
          </a>
        </div>
        <div className="cards-grid">
          <div className="card">
            <div className="card-icon">💻</div>
            <h3>Technical Courses</h3>
            <p>Comprehensive programming, web development, and software engineering courses.</p>
            <a 
              href="#" 
              className="card-button" 
              onClick={(e) => {e.preventDefault(); showBrochureForm('technical');}}
            >
              Get Brochure
            </a>
          </div>
          <div className="card">
            <div className="card-icon">📈</div>
            <h3>Business Skills</h3>
            <p>Management, marketing, and entrepreneurship courses for career advancement.</p>
            <a 
              href="#" 
              className="card-button" 
              onClick={(e) => {e.preventDefault(); showBrochureForm('business');}}
            >
              Get Brochure
            </a>
          </div>
          <div className="card">
            <div className="card-icon">🎨</div>
            <h3>Creative Design</h3>
            <p>Graphic design, UI/UX, and digital marketing courses for creative professionals.</p>
            <a 
              href="#" 
              className="card-button" 
              onClick={(e) => {e.preventDefault(); showBrochureForm('design');}}
            >
              Get Brochure
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eduventures;