import React from 'react';
import Header from '../Global-Components/Header';
import Navbar from '../Global-Components/Navbar';
import Footer from '../Global-Components/Footer';
import Logo from '../Images/PPM.PNG';

const dashboardStyle = {
  backgroundImage: `url(${require("../Images/Main-Background.jpg")})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  flexDirection: 'row',  // Adjusted to a row layout
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  position: 'relative', // Added relative positioning
};

const logoStyle = {
  position: 'absolute',
  top: '50%', // Center vertically
  left: '50%', // Center horizontally
  transform: 'translate(-50%, -50%)', // Center the logo precisely
};

const contentContainer = {
  marginLeft: '1700px',
  // height: '500px',
};

function Dashboard() {
  return (
    <div>
     <Header />
     <Navbar />
      <div style={dashboardStyle}>
        <div style={contentContainer}>
        <img src={Logo} alt="Company Logo" height="400" style={logoStyle} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;