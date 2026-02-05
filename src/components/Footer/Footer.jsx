import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

/**
 * Footer Component
 * Site footer with company info and links
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            APPSURANCE <span>TECHNOLOGIES</span>
          </div>
          <p>
            Delivering enterprise-grade software solutions and IT consulting services 
            to startups, SMEs, and enterprises across the US and UK.
          </p>
          <div className="footer-social">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              in
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              𝕏
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              ⚡
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <div className="footer-links">
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <div className="footer-links">
            <Link to="/services">Web Development</Link>
            <Link to="/services">Mobile Apps</Link>
            <Link to="/services">Cloud Solutions</Link>
            <Link to="/services">IT Consulting</Link>
          </div>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@appsurance.in</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Coimbatore, Tamil Nadu, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Appsurance Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
