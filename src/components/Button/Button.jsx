import React from 'react';
import './Button.css';

/**
 * Button Component
 * Reusable button with multiple variants
 */
const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'normal',
  fullWidth = false,
  onClick, 
  type = 'button',
  href,
  ...props 
}) => {
  const buttonClass = `btn btn-${variant} ${size === 'large' ? 'btn-large' : ''} ${fullWidth ? 'btn-full' : ''}`;

  // Render as link if href is provided
  if (href) {
    return (
      <a href={href} className={buttonClass} {...props}>
        {children}
      </a>
    );
  }

  // Render as button
  return (
    <button 
      className={buttonClass} 
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
