import React from 'react';

const Home = ({ showSection }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Infinova Global</h1>
          <p>Innovation Beyond Limits</p>
          <button className="cta-button" onClick={() => showSection('about')}>
            Explore Our Services
          </button>
        </div>
      </section>

      {/* Home Divisions Section */}
      <section className="home-divisions">
        <div className="container">
          <h2 className="section-title">Explore Our Divisions</h2>
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">🎓</div>
              <h3>Infinova Eduventures</h3>
              <p>Professional courses, internships, and educational programs designed to advance your career in technology and business.</p>
            </div>
            <div className="card">
              <div className="card-icon">💼</div>
              <h3>Infinova Consultants</h3>
              <p>Corporate training, outbound programs, and hiring solutions to transform your organization's capabilities.</p>
            </div>
            <div className="card">
              <div className="card-icon">🔬</div>
              <h3>Infinova Technologies</h3>
              <p>Cutting-edge technology solutions including 3D printing and innovative development services.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;