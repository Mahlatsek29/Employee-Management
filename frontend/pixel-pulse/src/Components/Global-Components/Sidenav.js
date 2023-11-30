import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Logo from '../Images/PPM.PNG'; // Import your logo image

const sidenavStyle = {
  backgroundColor: '#371F76', // Meteorite color
  padding: '20px',
  color: 'white',
  listStyle: 'none', // Remove default list styling
  paddingLeft: '0', // Remove default left padding for lists
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
};

const logoutButtonStyle = {
  backgroundColor: '#643B9F', // RoyalPurple color
  color: 'white',
  border: 'none',
  borderRadius: '20px',
  padding: '10px',
  cursor: 'pointer',
  marginTop: '20px', // Add margin to the button
  width: '100%', // Make the button take full width on small screens
};

const linkStyle = {
  textDecoration: 'none', // Remove text decoration from links
  color: 'white',
  fontWeight: 'bold', // Make the text bold
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px', // Add margin to the links
  width: '100%', // Make the links take full width on small screens
};

const iconStyle = {
  marginRight: '10px', // Add space between the icon and text
};

const logoStyle = {
  width: '150px', // Adjust the width of the logo as needed
  height: '150px',
  borderRadius: 100,
};

function Sidenav() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout logic here
    // For example, clear authentication token or user session

    // Redirect the user to the home page
    navigate.push('/home');
  };

  return (
    <div style={sidenavStyle}>
      <img src={Logo} alt="Company Logo" style={logoStyle} />
      <ul style={{ flex: '1', padding: '30px', height: '100%' }}>
        <li>
          <Link to="/employee" style={linkStyle}>
            <FontAwesomeIcon icon={faUser} style={iconStyle} />
            Employee
          </Link>
        </li>
        <li>
          <Link to="/add-new-employee" style={linkStyle}>
            <FontAwesomeIcon icon={faPlus} style={iconStyle} />
            Add New Employee
          </Link>
        </li>
        <li>
          <button style={logoutButtonStyle} onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} style={iconStyle} />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidenav;