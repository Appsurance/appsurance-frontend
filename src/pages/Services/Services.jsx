import React, { useEffect } from 'react';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import './Services.css';

/**
 * Services Page Component
 * Detailed information about all services offered
 */
const Services = () => {
  // Preload images when component mounts
  useEffect(() => {
    const images = [
      '/Web_Development.jpg',
      '/Mobile_App_Development.jpg',
      '/Cloud_Solutions.jpg',
      '/SaaS_Development.jpg',
      '/IT_Consulting.jpg'
    ];
    
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="services">
      {/* Header */}
      <section className="services-header">
        <div className="services-header-content">
          <h1>Our Services</h1>
          <p>
            Comprehensive technology solutions designed to transform your business 
            and drive sustainable growth
          </p>
        </div>
      </section>

      {/* Web Development */}
      <section className="service-detail-section" id="web-development">
        <div className="service-detail">
          <div className="service-detail-content">
            <div className="service-icon-large">💻</div>
            <h2>Web Development</h2>
            <p>
              We build modern, scalable web applications using cutting-edge technologies 
              and frameworks. Our solutions are designed for performance, security, and 
              exceptional user experiences.
            </p>
            <div className="service-features">
              <h3>Key Features</h3>
              <ul>
                <li>Custom web application development</li>
                <li>Progressive Web Apps (PWA)</li>
                <li>Enterprise portals and dashboards</li>
                <li>E-commerce platforms</li>
                <li>API development and integration</li>
                <li>Performance optimization</li>
              </ul>
            </div>
          </div>
          <div className="service-detail-visual">
            <img src="/Web_Development.jpg" alt="Web Development" loading="eager" />
          </div>
        </div>
      </section>

      {/* Mobile App Development */}
      <section className="service-detail-section" id="mobile-development">
        <div className="service-detail">
          <div className="service-detail-content">
            <div className="service-icon-large">📱</div>
            <h2>Mobile App Development</h2>
            <p>
              Native and cross-platform mobile applications that deliver seamless 
              experiences across iOS and Android devices. We combine functionality 
              with beautiful design.
            </p>
            <div className="service-features">
              <h3>Key Features</h3>
              <ul>
                <li>iOS and Android native apps</li>
                <li>Cross-platform development (React Native, Flutter)</li>
                <li>Mobile app UI/UX design</li>
                <li>App store deployment and optimization</li>
                <li>Offline functionality and sync</li>
                <li>Push notifications and real-time features</li>
              </ul>
            </div>
          </div>
          <div className="service-detail-visual">
            <img src="/Mobile_App_Development.jpg" alt="Mobile App Development" loading="eager" />
          </div>
        </div>
      </section>

      {/* Cloud Solutions */}
      <section className="service-detail-section" id="cloud-solutions">
        <div className="service-detail">
          <div className="service-detail-content">
            <div className="service-icon-large">☁️</div>
            <h2>Cloud Solutions</h2>
            <p>
              Leverage the power of cloud computing with our comprehensive cloud 
              services. We help you migrate, optimize, and scale your infrastructure 
              on leading cloud platforms.
            </p>
            <div className="service-features">
              <h3>Key Features</h3>
              <ul>
                <li>Cloud migration strategy and execution</li>
                <li>AWS, Azure, and Google Cloud expertise</li>
                <li>Infrastructure as Code (IaC)</li>
                <li>Serverless architecture</li>
                <li>Cloud security and compliance</li>
                <li>Cost optimization and monitoring</li>
              </ul>
            </div>
          </div>
          <div className="service-detail-visual">
            <img src="/Cloud_Solutions.jpg" alt="Cloud Solutions" loading="eager" />
          </div>
        </div>
      </section>

      {/* SaaS Development */}
      <section className="service-detail-section" id="saas-development">
        <div className="service-detail">
          <div className="service-detail-content">
            <div className="service-icon-large">🎯</div>
            <h2>SaaS Development</h2>
            <p>
              End-to-end SaaS product development from concept to launch. We build 
              scalable, multi-tenant applications with robust subscription management 
              and analytics.
            </p>
            <div className="service-features">
              <h3>Key Features</h3>
              <ul>
                <li>Multi-tenant architecture</li>
                <li>Subscription and billing systems</li>
                <li>User management and authentication</li>
                <li>Analytics and reporting dashboards</li>
                <li>API and integration capabilities</li>
                <li>Continuous deployment and updates</li>
              </ul>
            </div>
          </div>
          <div className="service-detail-visual">
            <img src="/SaaS_Development.jpg" alt="SaaS Development" loading="eager" />
          </div>
        </div>
      </section>

      {/* IT Consulting */}
      <section className="service-detail-section" id="it-consulting">
        <div className="service-detail">
          <div className="service-detail-content">
            <div className="service-icon-large">🔧</div>
            <h2>IT Consulting</h2>
            <p>
              Strategic technology consulting to help you make informed decisions 
              about your IT infrastructure, architecture, and digital transformation 
              initiatives.
            </p>
            <div className="service-features">
              <h3>Key Features</h3>
              <ul>
                <li>Technology strategy and roadmap</li>
                <li>Architecture assessment and design</li>
                <li>Digital transformation consulting</li>
                <li>Process optimization</li>
                <li>Technology stack selection</li>
                <li>Security audits and recommendations</li>
              </ul>
            </div>
          </div>
          <div className="service-detail-visual">
            <img src="/IT_Consulting.jpg" alt="IT Consulting" loading="eager" />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="section-header">
          <p className="section-subtitle">How We Work</p>
          <h2 className="section-title">Our Development Process</h2>
          <p className="section-description">
            A proven methodology that ensures success
          </p>
        </div>

        <div className="process-steps">
          <div className="process-step">
            <div className="process-number">1</div>
            <h3>Discovery</h3>
            <p>
              We analyze your requirements, goals, and challenges to create 
              a comprehensive project roadmap
            </p>
          </div>

          <div className="process-step">
            <div className="process-number">2</div>
            <h3>Design</h3>
            <p>
              Our team creates intuitive user experiences and scalable 
              system architectures
            </p>
          </div>

          <div className="process-step">
            <div className="process-number">3</div>
            <h3>Development</h3>
            <p>
              We build your solution using agile methodologies with 
              regular sprints and updates
            </p>
          </div>

          <div className="process-step">
            <div className="process-number">4</div>
            <h3>Testing</h3>
            <p>
              Rigorous quality assurance ensures your product works 
              flawlessly across all scenarios
            </p>
          </div>

          <div className="process-step">
            <div className="process-number">5</div>
            <h3>Deployment</h3>
            <p>
              We handle the complete deployment process with minimal 
              disruption to your operations
            </p>
          </div>

          <div className="process-step">
            <div className="process-number">6</div>
            <h3>Support</h3>
            <p>
              Ongoing maintenance and support to keep your solution 
              running smoothly
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Build Something Amazing?</h2>
          <p className="cta-description">
            Let's discuss your project and create a solution that exceeds your expectations
          </p>
          <div className="cta-buttons">
            <Link to="/contact">
              <Button variant="primary" size="large">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
