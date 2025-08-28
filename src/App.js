import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Technologies from './sections/Technologies';
import Eduventures from './sections/Eduventures';
import Courses from './sections/Courses';
import BrochureForm from './sections/BrochureForm';
import Internships from './sections/Internships';
import InternshipForm from './sections/InternshipForm';
import Jobs from './sections/Jobs';
import JobForm from './sections/JobForm';
import Consultants from './sections/Consultants';
import HiringSolutions from './sections/HiringSolutions';
import Contact from './sections/Contact';
import AboutUs from './sections/AboutUs';
import './styles/global.css';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [generatedOTP, setGeneratedOTP] = useState('');

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.section) {
        setCurrentSection(event.state.section);
      } else {
        setCurrentSection('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    // Initialize page
    const hash = window.location.hash.substring(1);
    if (hash) {
      setCurrentSection(hash);
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Update URL when section changes
  useEffect(() => {
    if (currentSection !== 'home') {
      window.history.pushState({section: currentSection}, '', `#${currentSection}`);
    } else {
      window.history.pushState({section: 'home'}, '', '/');
    }
  }, [currentSection]);

  const showSection = (sectionId) => {
    setCurrentSection(sectionId);
  };

  const showBrochureForm = (courseType) => {
    setSelectedCourse(courseType);
    setCurrentSection('brochure-form');
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Home showSection={showSection} />;
      case 'about':
        return <About showSection={showSection} />;
      case 'technologies':
        return <Technologies />;
      case 'eduventures':
        return <Eduventures showSection={showSection} showBrochureForm={showBrochureForm} />;
      case 'courses':
        return <Courses showBrochureForm={showBrochureForm} />;
      case 'brochure-form':
        return <BrochureForm 
          selectedCourse={selectedCourse} 
          showSection={showSection}
          generatedOTP={generatedOTP}
          setGeneratedOTP={setGeneratedOTP}
        />;
      case 'internships':
        return <Internships showSection={showSection} />;
      case 'internship-form':
        return <InternshipForm showSection={showSection} />;
      case 'jobs':
        return <Jobs showSection={showSection} />;
      case 'job-form':
        return <JobForm showSection={showSection} />;
      case 'consultants':
        return <Consultants showSection={showSection} showBrochureForm={showBrochureForm} />;
      case 'hiring-solutions':
        return <HiringSolutions />;
      case 'contact':
        return <Contact />;
      case 'aboutUs':
        return <AboutUs showSection={showSection} />;
      default:
        return <Home showSection={showSection} />;
    }
  };

  return (
    <div className="App">
      <Navbar showSection={showSection} currentSection={currentSection} />
      {renderSection()}
      <Footer showSection={showSection} />
    </div>
  );
}

export default App;