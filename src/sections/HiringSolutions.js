import React from 'react';

const HiringSolutions = () => {
  return (
    <section className="section active">
      <div className="container">
        <h2 className="section-title">Hiring Solutions</h2>
        <div className="cards-grid">
          <div className="card">
            <div className="card-icon">🎯</div>
            <h3>Executive Search</h3>
            <p>Find top-tier executives and senior management professionals for your organization's critical roles.</p>
            <ul style={{ textAlign: 'left', marginTop: '20px' }}>
              <li>C-level executive placement</li>
              <li>Senior management roles</li>
              <li>Specialized industry expertise</li>
              <li>Confidential search processes</li>
            </ul>
          </div>
          <div className="card">
            <div className="card-icon">⚡</div>
            <h3>Volume Recruitment</h3>
            <p>Efficiently hire large numbers of qualified candidates for your expansion or seasonal needs.</p>
            <ul style={{ textAlign: 'left', marginTop: '20px' }}>
              <li>Campus recruitment drives</li>
              <li>Mass hiring solutions</li>
              <li>Quick turnaround time</li>
              <li>Quality assessment processes</li>
            </ul>
          </div>
          <div className="card">
            <div className="card-icon">🔍</div>
            <h3>Specialized Hiring</h3>
            <p>Source niche talent for technical and specialized roles across various industries.</p>
            <ul style={{ textAlign: 'left', marginTop: '20px' }}>
              <li>Technical expertise matching</li>
              <li>Industry-specific knowledge</li>
              <li>Skill-based assessments</li>
              <li>Cultural fit evaluation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringSolutions;