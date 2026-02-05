import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import ApiService from '../../services/api';
import './Contact.css';

/**
 * Contact Page Component
 * Contact form and company information
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    projectType: '',
    websiteUrl: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const data = await ApiService.submitContactForm(formData);

      if (data.success) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Thank you for your message! We will get back to you soon.' 
        });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          projectType: '',
          websiteUrl: '',
          message: ''
        });
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: data.message || 'Failed to send message. Please try again.' 
        });
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: error.message || 'Failed to send message. Please check your connection and try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Check if service requires additional questions
  const showProjectTypeQuestion = formData.service === 'web' || formData.service === 'mobile';

  return (
    <div className="contact">
      {/* Header */}
      <section className="contact-header">
        <div className="contact-header-content">
          <h1>Get in Touch</h1>
          <p>
            Ready to transform your business? Let's discuss your project and 
            create something extraordinary together
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="contact-container">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Interested In *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="cloud">Cloud Solutions</option>
                  <option value="saas">SaaS Development</option>
                  <option value="consulting">IT Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Conditional field for Web/Mobile Development */}
              {showProjectTypeQuestion && (
                <div className="form-group">
                  <label htmlFor="projectType">Project Type *</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select project type</option>
                    <option value="new">New Project</option>
                    <option value="existing">Already Have a Website/App</option>
                  </select>
                </div>
              )}

              {/* Conditional field for existing website URL */}
              {showProjectTypeQuestion && formData.projectType === 'existing' && (
                <div className="form-group">
                  <label htmlFor="websiteUrl">Website/App URL *</label>
                  <input
                    type="url"
                    id="websiteUrl"
                    name="websiteUrl"
                    value={formData.websiteUrl}
                    onChange={handleChange}
                    placeholder="https://example.com"
                    required
                  />
                </div>
              )}

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Status Messages */}
              {submitStatus.message && (
                <div className={`form-status ${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}

              <Button 
                type="submit" 
                variant="primary" 
                size="large" 
                fullWidth
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info-section">
            <div className="contact-info-card">
              <h3>
                <span className="contact-info-icon">📍</span>
                Office Locations
              </h3>
              <div className="contact-info-item">
                <span className="contact-info-label">India</span>
                <span className="contact-info-value">
                  Coimbatore, Tamil Nadu<br />
                  India
                </span>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-label">Serving Clients</span>
                <span className="contact-info-value">
                  US & UK Offices
                </span>
              </div>
            </div>

            <div className="contact-info-card">
              <h3>
                <span className="contact-info-icon">📧</span>
                Contact Details
              </h3>
              <div className="contact-info-item">
                <span className="contact-info-label">Email</span>
                <span className="contact-info-value">
                  <a href="mailto:info@appsurance.in">info@appsurance.in</a>
                </span>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-label">Phone</span>
                <span className="contact-info-value">
                  <a href="tel:+15551234567">+1 (555) 123-4567</a>
                </span>
              </div>
            </div>

            <div className="contact-info-card">
              <h3>
                <span className="contact-info-icon">⏰</span>
                Business Hours
              </h3>
              <div className="contact-info-item">
                <span className="contact-info-label">Monday - Saturday</span>
                <span className="contact-info-value">9:00 AM - 6:00 PM</span>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-label">Sunday</span>
                <span className="contact-info-value">Closed</span>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-label">Time Zone</span>
                <span className="contact-info-value">IST</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <div className="section-header">
            <p className="section-subtitle">Find Us</p>
            <h2 className="section-title">Our Location</h2>
          </div>
          <div className="map-placeholder">
            🗺️
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
