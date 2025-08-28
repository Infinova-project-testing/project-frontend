import React from 'react';

const Technologies = () => {
  return (
    <section className="section active">
      <div className="container">
        <h2 className="section-title">Infinova Technologies</h2>
        <div className="cards-grid">
          <div className="card">
            <div className="card-icon"><img src="./src/assets/image/3d.png" alt="" width={90} /></div>
            <h3>3D Printing Solutions</h3>
            <p>Advanced 3D printing services for prototyping, manufacturing, and custom solutions across industries.</p>
            <a href="#" style={{cursor:"not-allowed"}} className="card-button">Coming Soon!!</a>
          </div>
          <div className="card">
            <div className="card-icon"><img src="./src/assets/image/emerging.png" alt="" width={90} /></div>
            <h3>Emerging Technologies</h3>
            <p>Stay tuned for our upcoming innovative technology solutions that will revolutionize industries.</p>
            <a href="#" style={{cursor:"not-allowed"}} className="card-button">Coming Soon!!</a>
          </div>
          <div className="card">
            <div className="card-icon"><img src="./src/assets/image/innovation.png" alt="" width={90} /></div>
            <h3>Innovation Lab</h3>
            <p>Research and development facility focusing on breakthrough technologies and future innovations.</p>
            <a href="#" style={{cursor:"not-allowed"}} className="card-button">Coming Soon!!</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;