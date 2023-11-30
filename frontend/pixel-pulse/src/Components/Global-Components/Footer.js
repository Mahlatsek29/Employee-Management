import React from 'react';

const footerStyle = {
  backgroundColor: '#AC94F4', // Portage color
  padding: '-10px', // Adjust the padding for increased height
  color: 'white',
  textAlign: 'center', // Center text
};

function Footer() {
  return (
    <div style={footerStyle}>
      <h3>Contact Information</h3>
      <p>Phone: +27 (0) 964-4567</p>
      <p>Address: 456 Oak Street, Sandton, Johannesburg, Gauteng, 2000, South Africa</p>
      <p>&copy; 2023 Pixel Pulse Marketing. All rights reserved.</p>
    </div>
  );
}

export default Footer;