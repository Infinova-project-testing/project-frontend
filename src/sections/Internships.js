import React, { useState } from 'react';

const Internships = ({ showSection }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const internships = [
    {
      id: 'web-dev',
      title: 'Web Development Intern',
      type: 'Remote',
      duration: '3 months',
      stipend: '₹15,000/month',
      location: 'Remote/Hybrid',
      description: 'Work on real-world web development projects using React, Node.js, and modern technologies.'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics Intern',
      type: 'On-site',
      duration: '4 months',
      stipend: '₹18,000/month',
      location: 'Mumbai',
      description: 'Analyze large datasets and create insights using Python, SQL, and visualization tools.'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing Intern',
      type: 'Hybrid',
      duration: '2 months',
      stipend: '₹12,000/month',
      location: 'Pune',
      description: 'Support marketing campaigns, content creation, and social media management.'
    }
  ];

  const filteredInternships = internships.filter(internship =>
    internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    internship.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    internship.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    // Search is handled by the filter above
  };

  const handleApply = (internshipId) => {
    showSection('internship-form');
  };

  return (
    <section className="section active">
      <div className="container">
        <h2 className="section-title">Internship Opportunities</h2>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search internships..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>🔍</button>
        </div>
        
        <div id="internship-listings">
          {filteredInternships.map((internship) => (
            <div key={internship.id} className="opportunity-card">
              <div className="opportunity-header">
                <div className="opportunity-title">{internship.title}</div>
                <div className="opportunity-type">{internship.type}</div>
              </div>
              <div className="opportunity-details">
                <span><strong>Duration:</strong> {internship.duration}</span>
                <span><strong>Stipend:</strong> {internship.stipend}</span>
                <span><strong>Location:</strong> {internship.location}</span>
              </div>
              <p>{internship.description}</p>
              <button 
                className="apply-button" 
                onClick={() => handleApply(internship.id)}
              >
                Apply Now
              </button>
            </div>
          ))}
          
          {filteredInternships.length === 0 && (
            <div className="opportunity-card">
              <p>No internships found matching your search criteria.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Internships;