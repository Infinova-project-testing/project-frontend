import React from 'react';

const Courses = ({ showBrochureForm }) => {
  return (
    <section className="section active">
      <div className="container">
        <h2 className="section-title">Our Courses</h2>
        <div className="cards-grid">
          <div className="card">
            <h3>Full Stack Web Development</h3>
            <p>Duration: 6 months | Mode: Online/Offline</p>
            <p>Learn HTML, CSS, JavaScript, React, Node.js, and database management.</p>
            <a 
              href="#" 
              className="card-button" 
              onClick={(e) => {e.preventDefault(); showBrochureForm('fullstack');}}
            >
              Get Brochure
            </a>
          </div>
          <div className="card">
            <h3>Data Science & Analytics</h3>
            <p>Duration: 4 months | Mode: Online</p>
            <p>Master Python, machine learning, data visualization, and statistical analysis.</p>
            <a 
              href="#" 
              className="card-button" 
              onClick={(e) => {e.preventDefault(); showBrochureForm('datascience');}}
            >
              Get Brochure
            </a>
          </div>
          <div className="card">
            <h3>Digital Marketing</h3>
            <p>Duration: 3 months | Mode: Hybrid</p>
            <p>SEO, social media marketing, PPC, and content marketing strategies.</p>
            <a 
              href="#" 
              className="card-button" 
              onClick={(e) => {e.preventDefault(); showBrochureForm('digitalmarketing');}}
            >
              Get Brochure
            </a>
          </div>
        </div>
        
        <h3 className="text-center mb-40" style={{ marginTop: '60px' }}>Our Expert Trainers</h3>
        <div className="cards-grid">
          <div className="card">
            <div style={{ 
              width: '100px', 
              height: '100px', 
              background: 'var(--gradient)', 
              borderRadius: '50%', 
              margin: '0 auto 20px' 
            }}></div>
            <h4>Dr. Rajesh Kumar</h4>
            <p>Full Stack Development Expert</p>
            <p>15+ years experience in software development and training.</p>
          </div>
          <div className="card">
            <div style={{ 
              width: '100px', 
              height: '100px', 
              background: 'var(--gradient)', 
              borderRadius: '50%', 
              margin: '0 auto 20px' 
            }}></div>
            <h4>Priya Sharma</h4>
            <p>Data Science Specialist</p>
            <p>PhD in Statistics with expertise in machine learning and AI.</p>
          </div>
          <div className="card">
            <div style={{ 
              width: '100px', 
              height: '100px', 
              background: 'var(--gradient)', 
              borderRadius: '50%', 
              margin: '0 auto 20px' 
            }}></div>
            <h4>Amit Patel</h4>
            <p>Digital Marketing Guru</p>
            <p>Certified Google and Facebook marketing expert with 10+ years experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;