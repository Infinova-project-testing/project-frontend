import React, { useState } from 'react';

const Jobs = ({ showSection }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const jobs = [
    {
      id: 'senior-fullstack',
      title: 'Senior Full Stack Developer',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹8-12 LPA',
      location: 'Bangalore',
      description: 'Lead development of web applications using MERN stack. Mentor junior developers and drive technical decisions.'
    },
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹10-15 LPA',
      location: 'Hyderabad',
      description: 'Build machine learning models and analyze complex datasets to drive business insights and decisions.'
    },
    {
      id: 'marketing-manager',
      title: 'Digital Marketing Manager',
      type: 'Full-time',
      experience: '4-6 years',
      salary: '₹6-10 LPA',
      location: 'Delhi',
      description: 'Lead digital marketing strategies, manage campaigns, and drive brand growth across multiple channels.'
    }
  ];

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    // Search is handled by the filter above
  };

  const handleApply = (jobId) => {
    showSection('job-form');
  };

  return (
    <section className="section active">
      <div className="container">
        <h2 className="section-title">Job Opportunities</h2>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>🔍</button>
        </div>
        
        <div id="job-listings">
          {filteredJobs.map((job) => (
            <div key={job.id} className="opportunity-card">
              <div className="opportunity-header">
                <div className="opportunity-title">{job.title}</div>
                <div className="opportunity-type">{job.type}</div>
              </div>
              <div className="opportunity-details">
                <span><strong>Experience:</strong> {job.experience}</span>
                <span><strong>Salary:</strong> {job.salary}</span>
                <span><strong>Location:</strong> {job.location}</span>
              </div>
              <p>{job.description}</p>
              <button 
                className="apply-button" 
                onClick={() => handleApply(job.id)}
              >
                Apply Now
              </button>
            </div>
          ))}
          
          {filteredJobs.length === 0 && (
            <div className="opportunity-card">
              <p>No jobs found matching your search criteria.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Jobs;