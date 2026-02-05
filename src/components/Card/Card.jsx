import React from 'react';
import './Card.css';

/**
 * Card Component
 * Reusable card for displaying content
 */
const Card = ({ icon, title, description, link, bordered = false }) => {
  return (
    <div className={`card ${bordered ? 'card-bordered' : ''}`}>
      {icon && <div className="card-icon">{icon}</div>}
      {title && <h3 className="card-title">{title}</h3>}
      {description && <p className="card-description">{description}</p>}
      {link && (
        <a href={link.href} className="card-link">
          {link.text} →
        </a>
      )}
    </div>
  );
};

export default Card;
