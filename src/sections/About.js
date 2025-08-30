import React from 'react';

const About = ({ showSection }) => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Our Divisions</h2>
        <div className="cards-grid" style={{display:"flex",justifyContent:"cenetr"}}>

          <div className="card" style={{maxWidth:"20rem"}}>
            <div className="card-icon"><img src="./assets/image/edu.png" alt="" width={90} /></div>
            <h3>Infinova Eduventures</h3>
            <p>Comprehensive educational programs, courses, internships, and career opportunities.</p>
            <button className="card-button" onClick={() => showSection('eduventures')}>
              Discover Courses
            </button>
          </div>

          <div className="card" style={{maxWidth:"20rem"}}>
            <div className="card-icon"><img src="./assets/image/const.png" alt="" width={90} /></div>
            <h3>Infinova Consultants</h3>
            <p>Professional consulting services, corporate training, and comprehensive hiring solutions.</p>
            <button className="card-button" onClick={() => showSection('consultants')}>
              View Services
            </button>
          </div>

          <div className="card" style={{maxWidth:"20rem"}}>
            <div className="card-icon"><img src="./assets/image/tech.png" alt="" width={90} /></div>
            <h3>Infinova Technologies</h3>
            <p>Cutting-edge technology solutions including 3D printing and emerging technologies for the future.</p>
            <button disabled className="card-button" onClick={() => showSection('technologies')}>
             Coming Soon!!
            </button>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default About;