import React, { useState } from 'react';

const JobForm = ({ showSection }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    experience: '',
    cv: null,
    message: ''
  });

  const handleInputChange = (e) => {
    if (e.target.type === 'file') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0]
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.age || !formData.experience || !formData.cv) {
      alert('Please fill all required fields');
      return;
    }

    alert('Thank you for your application! We will review it and get back to you soon.');
    showSection('jobs');
  };

  return (
    <section className="section active">
      <div className="container">
        <h2 className="section-title">Apply for Position</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="job-name">Full Name *</label>
              <input
                type="text"
                id="job-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="job-email">Email Address *</label>
              <input
                type="email"
                id="job-email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="job-phone">Mobile Number *</label>
              <input
                type="tel"
                id="job-phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="job-age">Age *</label>
              <input
                type="number"
                id="job-age"
                name="age"
                min="18"
                max="65"
                value={formData.age}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="job-experience">Work Experience *</label>
              <textarea
                id="job-experience"
                name="experience"
                rows="4"
                placeholder="Describe your relevant work experience..."
                value={formData.experience}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="job-cv">Upload CV/Resume *</label>
              <input
                type="file"
                id="job-cv"
                name="cv"
                accept=".pdf,.doc,.docx"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="job-message">Cover Letter</label>
              <textarea
                id="job-message"
                name="message"
                rows="5"
                placeholder="Why are you the perfect fit for this role?"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Submit Application</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JobForm;