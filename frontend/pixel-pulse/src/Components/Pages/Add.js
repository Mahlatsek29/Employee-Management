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
    name: '',
    surname: '',
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

    // Check if updateEmployeeData is a function before calling it
    if (typeof updateEmployeeData === 'function') {
      // Save data to localStorage
      const storedData = JSON.parse(localStorage.getItem('employeesData')) || [];
      const updatedData = [...storedData, employeeData];
      localStorage.setItem('employeesData', JSON.stringify(updatedData));

      // Update the parent component with the new data
      updateEmployeeData(updatedData);

      // Reset form fields
      setEmployeeData({
        name: '',
        surname: '',
        position: '',
        department: '',
        phone: '',
        email: '',
        image: null,
      });
    } else {
      console.error('updateEmployeeData is not a function');
    }
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
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  value={employeeData.name}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formSurname">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter surname"
                  name="surname"
                  value={employeeData.surname}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formPosition">
                <Form.Label>Position</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter position"
                  name="position"
                  value={employeeData.position}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formDepartment">
                <Form.Label>Department</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter department"
                  name="department"
                  value={employeeData.department}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter phone number"
                  name="phone"
                  value={employeeData.phone}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={employeeData.email}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formImage">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" onChange={handleImageUpload} />
              </Form.Group>

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
