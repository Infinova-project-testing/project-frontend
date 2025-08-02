import React, { useState } from 'react';

const InternshipForm = ({ showSection }) => {
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
    if (!formData.name || !formData.email || !formData.phone || !formData.age || !formData.cv) {
      alert('Please fill all required fields');
      return;
    }

    alert('Thank you for your application! We will review it and get back to you soon.');
    showSection('internships');
  };

  return (
    <section className="section active">
      <div className="container">
        <h2 className="section-title">Apply for Internship</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="intern-name">Full Name *</label>
              <input
                type="text"
                id="intern-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="intern-email">Email Address *</label>
              <input
                type="email"
                id="intern-email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="intern-phone">Mobile Number *</label>
              <input
                type="tel"
                id="intern-phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="intern-age">Age *</label>
              <input
                type="number"
                id="intern-age"
                name="age"
                min="16"
                max="35"
                value={formData.age}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="intern-experience">Previous Experience</label>
              <textarea
                id="intern-experience"
                name="experience"
                rows="3"
                placeholder="Describe any relevant experience..."
                value={formData.experience}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="intern-cv">Upload CV/Resume *</label>
              <input
                type="file"
                id="intern-cv"
                name="cv"
                accept=".pdf,.doc,.docx"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="intern-message">Why do you want this internship?</label>
              <textarea
                id="intern-message"
                name="message"
                rows="4"
                placeholder="Tell us about your motivation and goals..."
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

export default InternshipForm;