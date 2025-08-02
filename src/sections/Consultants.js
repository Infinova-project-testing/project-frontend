import React from 'react';

const Consultants = ({ showSection, showBrochureForm }) => {
  return (
    <section className="section active">
      <div className="container">
        <h2 className="section-title">Infinova Consultants</h2>
        <div className="cards-grid">
          <div className="card">
            <div className="card-icon">🏢</div>
            <h3>Corporate Training</h3>
            <p>Customized training programs for organizations to upskill their workforce in latest technologies.</p>
            <a 
              href="#" 
              className="card-button" 
              onClick={(e) => {e.preventDefault(); showBrochureForm('corporate');}}
            >
              Get Brochure
            </a>
          </div>
          <div className="card">
            <div className="card-icon">🏕️</div>
            <h3>Outbound Training</h3>
            <p>Team building activities, leadership development, and outdoor training programs.</p>
            <a 
              href="#" 
              className="card-button" 
              onClick={(e) => {e.preventDefault(); showBrochureForm('outbound');}}
            >
              Get Brochure
            </a>
          </div>
          <div className="card">
            <div className="card-icon">👥</div>
            <h3>Hiring Solutions</h3>
            <p>End-to-end recruitment services to help organizations find the right talent efficiently.</p>
            <a 
              href="#" 
              className="card-button" 
              onClick={(e) => {e.preventDefault(); showSection('hiring-solutions');}}
            >
              Explore Solutions
            </a>
          </div>
        </div>

        <h3 className="text-center mb-40" style={{ marginTop: '60px' }}>Our Corporate Training Courses</h3>
        <div className="cards-grid">
          <div className="card">
            <h3>Leadership Development</h3>
            <p>Transform managers into effective leaders with our comprehensive leadership training program.</p>
            <a 
              href="#" 
              className="card-button" 
              onClick={(e) => {e.preventDefault(); showBrochureForm('leadership');}}
            >
              Get Details
            </a>
          </div>
          <div className="card">
            <h3>Digital Transformation</h3>
            <p>Help your organization adapt to digital age with our technology adoption training.</p>
            <a 
              href="#" 
              className="card-button" 
              onClick={(e) => {e.preventDefault(); showBrochureForm('digital-transform');}}
            >
              Get Details
            </a>
          </div>
          <div className="card">
            <h3>Communication Skills</h3>
            <p>Enhance team communication and collaboration with our professional communication training.</p>
            <a 
              href="#" 
              className="card-button" 
              onClick={(e) => {e.preventDefault(); showBrochureForm('communication');}}
            >
              Get Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultants;