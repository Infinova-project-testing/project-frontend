import React from 'react';
import { Users, Target, Award, Globe, Lightbulb, Heart } from 'lucide-react';


const AboutUs = ({ showSection }) => {
  const stats = [
    { number: '500+', label: 'Clients Served' },
    { number: '50+', label: 'Expert Consultants' },
    { number: '1000+', label: 'Training Programs' },
    { number: '15+', label: 'Years Experience' }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge solutions that drive transformation.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnership to achieve extraordinary results.'
    },
    {
      icon: <Award className="w-8 h-8 text-blue-500" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, ensuring quality and reliability.'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: 'Global Impact',
      description: 'We aim to create positive change that extends beyond borders and transforms communities.'
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-500" />,
      title: 'Learning',
      description: 'We foster continuous learning and development for sustainable growth and advancement.'
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-500" />,
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical practices in all our interactions.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      image: 'https://www.linkedin.com/in/syed-mustakim-01086024b/overlay/photo/view?profileId=ACoAAADeYxABGmMZ0d8Dgk3k7hO5nX6pYk9l0I&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B2wH6XG8eQ9W1%2F6R4Kz1m9w%3D%3D',
      description: 'Visionary leader with 20+ years in technology and business transformation.'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      description: 'Technology expert specializing in emerging technologies and digital innovation.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Consultancy',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      description: 'Strategic consultant with expertise in organizational development and change management.'
    }
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Infinova Global</h1>
          <p>
            Empowering individuals and organizations through transformative education, 
            innovative technology, and impactful consulting solutions that drive sustainable growth.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision-section">
        <div className="mission-vision-container">
          <div className="mission-vision-grid">
            <div className="mission-vision-card">
              <h2>Our Mission</h2>
              <p>
                To empower individuals and organizations by delivering transformative education, 
                innovative technology solutions, and impactful consulting services that drive 
                sustainable growth and positive change.
              </p>
              <p>
                We are committed to bridging the gap between potential and achievement through 
                our comprehensive approach to learning, development, and strategic guidance.
              </p>
            </div>
            
            <div className="mission-vision-card">
              <h2>Our Vision</h2>
              <p>
                To be the global leader in integrated learning and technology solutions, 
                creating a world where every individual and organization can unlock their 
                full potential and contribute to meaningful progress.
              </p>
              <p>
                We envision a future where innovation, education, and strategic thinking 
                combine to solve complex challenges and create lasting value for society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-container">
          <h2 className="values-title">Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-item">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="leadership-section">
        <div className="leadership-container">
          <h2 className="leadership-title">Leadership Team</h2>
          <div className="leadership-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="team-image"
                />
                <div className="team-content">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="story-section">
        <div className="story-container">
          <div className="story-content">
            <h2 className="story-title">Our Story</h2>
            <p className="story-text">
              Founded with a vision to transform how individuals and organizations learn, grow, and adapt 
              in an ever-changing world, InfinovaGlobal began as a small team of passionate educators and 
              technologists who believed that the right combination of knowledge, innovation, and strategic 
              thinking could unlock unlimited potential.
            </p>
            <p className="story-text">
              Over the years, we have evolved into a comprehensive platform offering three distinct yet 
              interconnected divisions: Infinova Eduventures for transformative learning experiences, 
              Infinova Technologies for cutting-edge digital solutions, and Infinova Consultants for 
              strategic guidance and organizational development.
            </p>
            <p className="story-text">
              Today, we continue to push boundaries, challenge conventional thinking, and create solutions 
              that make a real difference in the lives of our clients and the communities they serve. 
              Our journey is far from over – it's just the beginning of something extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Grow With Us?</h2>
          <p className="cta-text">
            Join thousands of individuals and organizations who have transformed their potential into success with InfinovaGlobal.
          </p>
          <div className="cta-buttons">
            <button 
              onClick={() => showSection('contact')}
              className="btn-primary"
            >
              Get Started Today
            </button>
            <button 
              onClick={() => showSection('contact')}
              className="btn-secondary"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;