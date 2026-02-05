import React from 'react';
import './About.css';

/**
 * About Page Component
 * Company information, mission, values, and team
 */
const About = () => {
  return (
    <div className="about">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-content">
          <h1>About Appsurance Technologies</h1>
          <p>
            Building the future of enterprise technology through innovation, 
            expertise, and unwavering commitment to excellence
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="story-content">
          <div className="story-text">
            <h2>Our Story</h2>
            <p>
              Founded with a vision to bridge the gap between business needs and 
              technological innovation, Appsurance Technologies has grown into a 
              trusted partner for organizations seeking digital transformation.
            </p>
            <p>
              We specialize in delivering enterprise-grade software solutions that 
              drive real business value. From startups building their first product 
              to established enterprises modernizing their technology stack, we bring 
              the same level of dedication and expertise to every project.
            </p>
            <p>
              Our global team of expert developers, designers, and consultants work 
              collaboratively to turn your vision into reality, ensuring every solution 
              is scalable, secure, and built to last.
            </p>
          </div>
          <div className="story-image">
            🏢
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-values">
        <div className="mission-content">
          <div className="section-header">
            <p className="section-subtitle">Our Purpose</p>
            <h2 className="section-title">Mission & Vision</h2>
          </div>
          
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-card-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To empower businesses with cutting-edge technology solutions that 
                drive growth, efficiency, and innovation. We are committed to 
                delivering exceptional value through expertise, quality, and 
                customer-centric approach.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-card-icon">🔮</div>
              <h3>Our Vision</h3>
              <p>
                To be the global leader in enterprise software development and IT 
                consulting, recognized for our innovation, technical excellence, and 
                transformative impact on businesses worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <div className="section-header">
          <p className="section-subtitle">What Drives Us</p>
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-description">
            The principles that guide everything we do
          </p>
        </div>

        <div className="values-grid">
          <div className="value-item">
            <div className="value-icon">💡</div>
            <h4>Innovation</h4>
            <p>Continuously pushing boundaries with cutting-edge technology</p>
          </div>
          <div className="value-item">
            <div className="value-icon">🤝</div>
            <h4>Integrity</h4>
            <p>Building trust through transparency and ethical practices</p>
          </div>
          <div className="value-item">
            <div className="value-icon">⭐</div>
            <h4>Excellence</h4>
            <p>Delivering exceptional quality in every project</p>
          </div>
          <div className="value-item">
            <div className="value-icon">👥</div>
            <h4>Collaboration</h4>
            <p>Working together to achieve extraordinary results</p>
          </div>
          <div className="value-item">
            <div className="value-icon">🚀</div>
            <h4>Agility</h4>
            <p>Adapting quickly to changing business needs</p>
          </div>
          <div className="value-item">
            <div className="value-icon">💙</div>
            <h4>Customer Focus</h4>
            <p>Your success is our success</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">150+</div>
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Enterprise Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
