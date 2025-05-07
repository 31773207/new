import React from 'react';
import './Footer.css'; // Import the CSS styles for Footer

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Eat & Love & Repeat Eatery. All rights reserved.</p>
      <p>
        Contact us:{' '}
        <a href="Eat & Love & Repeat@eatery.com" className="footer-link">Eatloverepeat@eatery.com</a>
      </p>
      <p>Follow us on social media: FB | IG | TW</p>
    </footer>
  );
};

export default Footer;