import React, { useState } from 'react';

const BrochureForm = ({ selectedCourse, showSection, generatedOTP, setGeneratedOTP,brochureUrl}) => {
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

  const sendOTP = async() => {
    const { name, email, phone, age } = formData;
    if (!name || !email || !phone || !age) {
      alert('Please fill all required fields');
      return;
    }

    try {
      const res=await fetch(import.meta.env.VITE_BACKEND_GET_OTP,{
      method:"POST",
      headers:{ "Content-Type": "application/json"},
      body:JSON.stringify(formData)
    });
    const data=await res.json();
  
    
    if(data.success){
      setShowOTPSection(true);
    }
    else{
      
    }
    } catch (error) {
     console.log(error);
      
    }
    
    
   
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

const brochureDownloadDetails=async()=>{
  try {
    const courseName=selectedCourse.name;
    const brochureDownload=await fetch(import.meta.env.VITE_BACKEND_BROCHURE_DOWNLOAD,{
      method:"POST",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({...formData,course:courseName})
    })
    const data=await brochureDownload.json()
   
    
  } catch (error) {
    console.log(error);
    
  }
}
  const verifyOTP = async() => {
    const enteredOTP = otpValues.join('');
    
    
    if (enteredOTP.length !== 4) {
      alert('Please enter complete OTP');
      return;
    }
    
    const res=await fetch(import.meta.env.VITE_BACKEND_VERIFY_OTP,{
      method:"POST",
      headers:{ "Content-Type": "application/json"},
      body:JSON.stringify({...formData,enteredOtp:enteredOTP})
    });
    const data=await res.json();
   console.log(data.message);

    if(data.success){
      await brochureDownloadDetails();
      window.open(selectedCourse.brochureUrl,'_blank');
      showSection('courses');
      
    }else{
      console.log('Cannot download');
      
    }
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