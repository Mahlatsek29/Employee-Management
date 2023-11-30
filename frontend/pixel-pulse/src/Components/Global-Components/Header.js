import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import COLOR from '../Global-Components/Color'; // Import COLOR for the background color

const headerStyle = {
  backgroundColor: COLOR.Portage, // Set the background color using COLOR.Portage
  padding: '-20%',
};

const companyNameStyle = {
  fontFamily: 'cursive', // Choose an elegant font or adjust as needed
  color: 'white', // Set the text color
  fontSize: '24px', // Adjust the font size
};

const centerLinksStyle = {
  margin: 'auto', // Set the margin to 'auto' to center the links horizontally
};

function Header() {
  return (
    <Navbar style={headerStyle} variant="dark" expand="lg">
      <Navbar.Brand href="#">
        <span style={companyNameStyle}>Pixel Pulse Marketing</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={centerLinksStyle}>
          <Nav.Link href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /> Facebook</Nav.Link>
          <Nav.Link href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /> Instagram</Nav.Link>
          <Nav.Link href="https://www.tiktok.com/"><FontAwesomeIcon icon={faTiktok} /> TikTok</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</Nav.Link>
          <Nav.Link href="https://www.twitter.com/"><FontAwesomeIcon icon={faTwitter} /> Twitter</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;