import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/PPM.PNG'; // Replace with the actual path to your logo image
import { FaHome, FaUsers, FaPlus, FaSignOutAlt } from 'react-icons/fa'; // Import icons from react-icons library

function Navbar() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#371F76', color: 'white' }}>
      <div>
        <img src={logo} alt="Logo" style={{ width: '50px', height: '50px' }} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <NavItem to="/" text="Home" icon={<FaHome />} />
        <NavItem to="/employees" text="Employees" icon={<FaUsers />} />
        <NavItem to="/add-employee" text="Add New Employee" icon={<FaPlus />} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <NavItem to="/" text="Log out" icon={<FaSignOutAlt />} />
      </div>
    </div>
  );
}

// Helper component for each navigation item
const NavItem = ({ to, text, icon }) => (
  <Link to={to} style={{ marginLeft: '20px', display: 'flex', alignItems: 'center', cursor: 'pointer', textDecoration: 'none', color: 'white' }}>
    {icon}
    <span style={{ marginLeft: '5px' }}>{text}</span>
  </Link>
);

export default Navbar;