import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import Header from '../Global-Components/Header';
import Navbar from '../Global-Components/Navbar';
import Footer from '../Global-Components/Footer';
import Logo from '../Images/PPM.PNG';

const addStyle = {
  backgroundImage: `url(${require("../Images/Main-Background.jpg")})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  position: 'relative',
};

const logoStyle = {
  position: 'absolute',
  top: '-150px',
  left: '100px',
  width: '170px',
  borderRadius: '50%',
};

const buttonStyle = {
  backgroundColor: '#643B9F',
  color: 'white',
  padding: '10px',
  borderRadius: '5px',
  cursor: 'pointer',
};

function Add({ updateEmployeeData }) {
  const [employeeData, setEmployeeData] = useState({
    surname: '',
    name: '',
    position: '',
    department: '',
    phone: '',
    email: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setEmployeeData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Add logic to save the employee data

    // Save data to localStorage
    const storedData = JSON.parse(localStorage.getItem('employeesData')) || [];
    const updatedData = [...storedData, employeeData];
    localStorage.setItem('employeesData', JSON.stringify(updatedData));

    // Update the parent component with the new data
    updateEmployeeData(updatedData);

    // Perform any other necessary actions
  };

  return (
    <div>
      <Header />
      <Navbar />
      <div style={addStyle}>
        <Card className="add-card">
          <Card.Img variant="top" src={Logo} alt="Company Logo" style={logoStyle} />
          <Card.Body>
            <Card.Title className="card-title">Add New Employee</Card.Title>
            <Form onSubmit={handleSave}>
              {/* Form fields here */}
              <Button variant="primary" type="submit" style={buttonStyle}>
                Save
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default Add;