import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Icon from '../../components/Icon/Icon';
import './Home.css';

/**
 * Home Page Component
 * Landing page with hero, services, features, and CTA sections
 */
const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-subtitle">Enterprise Software Solutions</p>
            <h1 className="hero-title">
              Transform Your Business with Cutting-Edge Technology
            </h1>
            <p className="hero-description">
              We deliver world-class software development, mobile apps, SaaS solutions, 
              and IT consulting services to help your business thrive in the digital age.
              We assure quality, security, and performance in every application.
            </p>
            <div className="hero-buttons">
              <Link to="/contact">
                <Button variant="secondary" size="large">
                  Get Started
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="large">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-header">
          <p className="section-subtitle">What We Do</p>
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-description">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>
        
        <div className="services-grid">
          <Card
            icon={<Icon name="code" size="2xlarge" />}
            title="Web Development"
            description="Custom web applications built with modern frameworks and best practices. Scalable, secure, and performant solutions."
            link={{ text: "Learn More", href: "/services#web-development" }}
          />
          <Card
            icon={<Icon name="mobile" size="2xlarge" />}
            title="Mobile App Development"
            description="Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences."
            link={{ text: "Learn More", href: "/services#mobile-development" }}
          />
          <Card
            icon={<Icon name="cloud" size="2xlarge" />}
            title="Cloud Solutions"
            description="Scalable cloud infrastructure and migration services using AWS, Azure, and Google Cloud Platform."
            link={{ text: "Learn More", href: "/services#cloud-solutions" }}
          />
          <Card
            icon={<Icon name="target" size="2xlarge" />}
            title="SaaS Development"
            description="End-to-end SaaS product development from concept to launch with ongoing support and optimization."
            link={{ text: "Learn More", href: "/services#saas-development" }}
          />
          <Card
            icon={<Icon name="settings" size="2xlarge" />}
            title="IT Consulting"
            description="Strategic technology consulting to help you make informed decisions and optimize your IT infrastructure."
            link={{ text: "Learn More", href: "/services#it-consulting" }}
          />
          <Card
            icon={<Icon name="rocket" size="2xlarge" />}
            title="Digital Transformation"
            description="Guide your organization through digital transformation with innovative solutions and proven methodologies."
            link={{ text: "Learn More", href: "/services" }}
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="section-header">
          <p className="section-subtitle">Why Choose Us</p>
          <h2 className="section-title">Excellence in Every Project</h2>
          <p className="section-description">
            Trusted by startups, SMEs, and enterprises across the US and UK
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <Icon name="zap" size="xlarge" />
            </div>
            <h3 className="feature-title">Rapid Delivery</h3>
            <p className="feature-description">
              Agile methodologies ensure fast turnaround without compromising quality
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <Icon name="award" size="xlarge" />
            </div>
            <h3 className="feature-title">Expert Team</h3>
            <p className="feature-description">
              Senior developers and consultants with proven track records in enterprise projects
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <Icon name="shield" size="xlarge" />
            </div>
            <h3 className="feature-title">Security First</h3>
            <p className="feature-description">
              Enterprise-grade security practices and compliance with industry standards
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <Icon name="globe" size="xlarge" />
            </div>
            <h3 className="feature-title">Global Reach</h3>
            <p className="feature-description">
              Serving clients across US and UK with 24/7 support and communication
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Start Your Project?</h2>
          <p className="cta-description">
            Let's discuss how we can help transform your business with innovative technology solutions.
            Our team is ready to bring your vision to life.
          </p>
          <div className="cta-buttons">
            <Link to="/contact">
              <Button variant="primary" size="large">
                Contact Us Today
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="large">
                Learn About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
