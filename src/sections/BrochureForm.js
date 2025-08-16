import React, { useState } from 'react';

const BrochureForm = ({ selectedCourse, showSection, generatedOTP, setGeneratedOTP }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: ''
  });
  const [showOTPSection, setShowOTPSection] = useState(false);
  const [otpValues, setOtpValues] = useState(['', '', '', '']);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendOTP = () => {
    const { name, email, phone, age } = formData;

    if (!name || !email || !phone || !age) {
      alert('Please fill all required fields');
      return;
    }

    // Generate random 4-digit OTP
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOTP(otp);
    
    // Simulate sending OTP
    alert(`OTP sent to ${phone}: ${otp}`);
    
    // Show OTP section
    setShowOTPSection(true);
  };

  const handleOTPChange = (index, value) => {
    if (value.length <= 1) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);

      // Move to next input if value is entered
      if (value && index < 3) {
        const nextInput = document.querySelectorAll('.otp-input')[index + 1];
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  const verifyOTP = () => {
    const enteredOTP = otpValues.join('');
    
    if (enteredOTP.length !== 4) {
      alert('Please enter complete OTP');
      return;
    }
    
    if (enteredOTP === generatedOTP) {
      alert('OTP verified successfully! Downloading brochure...');
      downloadBrochure();
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  const downloadBrochure = () => {
    // Simulate brochure download
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,JVBERi0xLjMKJcTl8uXrp/Og0MTGCjQgMCBvYmoKPDwKL1R5cGUgL0NhdGFsb2cKL091dGxpbmVzIDIgMCBSCi9QYWdlcyAzIDAgUgo+PgplbmRvYmoKMiAwIG9iago8PAovVHlwZSAvT3V0bGluZXMKL0NvdW50';
    link.download = `${selectedCourse}-brochure.pdf`;
    link.click();
    
    // Reset form and go back to courses
    showSection('courses');
  };

  return (
    <section className="section active">
      <div className="container">
        <h2 className="section-title">Get Course Brochure</h2>
        <div className="form-container">
          <form id="brochureForm">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Mobile Number *</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age *</label>
              <input 
                type="number" 
                id="age" 
                name="age" 
                min="16" 
                max="80" 
                value={formData.age}
                onChange={handleInputChange}
                required 
              />
            </div>
            <button type="button" className="submit-button" onClick={sendOTP}>
              Send OTP
            </button>
          </form>
          
          {showOTPSection && (
            <div id="otp-section">
              <h3 className="text-center mb-20 mt-20">Enter OTP</h3>
              <div className="otp-container">
                {otpValues.map((value, index) => (
                  <input
                    key={index}
                    type="text"
                    className="otp-input"
                    maxLength="1"
                    value={value}
                    onChange={(e) => handleOTPChange(index, e.target.value)}
                  />
                ))}
              </div>
              <button type="button" className="submit-button" onClick={verifyOTP}>
                Verify & Download Brochure
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BrochureForm;