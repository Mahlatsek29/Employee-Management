import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Global-Components/Header';
import Logo from '../Images/PPM.PNG';

const homeStyle = {
  backgroundImage: `url(${require("../Images/Main-Background.jpg")})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
};

const exploreButtonStyle = {
  backgroundColor: '#643B9F', // RoyalPurple color
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
};

function Home() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    // Navigate to the login page
    navigate('/login');
  };

  return (
    <div>
      <Header />
      <div style={homeStyle}>
        <img src={Logo} alt="Company Logo" height="30" className="d-inline-block align-top" />
        <h1>Welcome to Pixel Pulse Marketing</h1>
        <button style={exploreButtonStyle} onClick={handleExploreClick}>
          Explore
        </button>
      </div>
    </div>
  );
}

export default Home;