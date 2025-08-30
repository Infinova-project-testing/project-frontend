import React, { useState, useEffect } from 'react';

const BrochureForm = ({ selectedCourse, showSection }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: ''
  });
  const [showOTPSection, setShowOTPSection] = useState(false);
  const [otpValues, setOtpValues] = useState(['', '', '', '']);
  const [message, setMessage] = useState(''); // For success/failure message
  const [timer, setTimer] = useState(0); // Countdown timer in seconds

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const startTimer = () => {
    setTimer(60); // Start 1 minute timer
  };

  // Countdown effect
  useEffect(() => {
    let countdown;
    if (timer > 0) {
      countdown = setTimeout(() => setTimer(timer - 1), 1000);
    }
    return () => clearTimeout(countdown);
  }, [timer]);

  const sendOTP = async () => {
    const { name, email, phone, age } = formData;
    if (!name || !email || !phone || !age) {
      alert('Please fill all required fields');
      return;
    }

    try {
      const res = await fetch(import.meta.env.VITE_BACKEND_GET_OTP, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      console.log(data.message);

      if (data.success) {
        setMessage(data.message);
        setShowOTPSection(true);
        startTimer(); // Start timer
      } else {
        setMessage(data.message);
      }

      // Hide message after 3 seconds
      setTimeout(() => setMessage(''), 3000);

    } catch (error) {
      console.log(error);
      setMessage('Something went wrong. Try again.');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleOTPChange = (index, value) => {
    if (value.length <= 1) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);

      // Auto-focus next input
      if (value && index < 3) {
        const nextInput = document.querySelectorAll('.otp-input')[index + 1];
        if (nextInput) nextInput.focus();
      }
    }
  };

  const verifyOTP = async () => {
    const enteredOTP = otpValues.join('');
    if (enteredOTP.length !== 4) {
      alert('Please enter complete OTP');
      return;
    }

    const res = await fetch(import.meta.env.VITE_BACKEND_VERIFY_OTP, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, enteredOtp: enteredOTP })
    });
    const data = await res.json();

    if (data.success) {
      window.open(selectedCourse.brochureUrl, '_blank');
      showSection('courses');
    } else {
      alert('Invalid OTP. Try again.');
    }
  };

  return (
    <section className="section active">
      <div className="container">
        <h2 className="section-title">Get Course Brochure</h2>

        {/* Message Display */}
        {message && (
          <p style={{
            backgroundColor:"transparent",
            borderColor: message.includes('success') ? 'green' : 'red',
            borderWidth:"2px",
            borderStyle:"solid",
            color: 'black',
            padding: '10px',
            textAlign: 'center',
            borderRadius: '5px',
            marginBottom: '10px',
            position:"absolute",
            right:'2vw',
            top:'12vh',
            zIndex:"10"
          }}>
            {message}
          </p>
        )}

        <div className="form-container">
          <form id="brochureForm">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input type="text" id="name" name="name"
                value={formData.name} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" name="email"
                value={formData.email} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Mobile Number *</label>
              <input type="tel" id="phone" name="phone"
                value={formData.phone} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age *</label>
              <input type="number" id="age" name="age" min="16" max="80"
                value={formData.age} onChange={handleInputChange} required />
            </div>

            <button
              type="button"
              className="submit-button"
              onClick={sendOTP}
              disabled={timer > 0} // Disable while timer runs
            >
              {timer > 0 ? `Resend in ${timer}s` : 'Send OTP'}
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
