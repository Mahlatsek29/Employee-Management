import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Logo from '../Images/PPM.PNG';
import './Register.css';

function Register() {
  return (
    <div className="register-container">
      <Card className="register-card">
        <Card.Img variant="top" src={Logo} alt="Company Logo" className="register-logo" />
        <Card.Body>
          <Card.Title className="register-title">Register</Card.Title>
          <Form className="register-form">
            <Form.Group controlId="formSurname">
              <Form.Label>Surname:</Form.Label>
              <Form.Control type="text" placeholder="surname" />
            </Form.Group>

            <Form.Group controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" placeholder="name" />
            </Form.Group>

            <Form.Group controlId="formGender">
              <Form.Label>Gender:</Form.Label>
              <Form.Select aria-label="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" placeholder="email" />
            </Form.Group>

            <Form.Group controlId="formConfirmEmail">
              <Form.Label>Confirm Email:</Form.Label>
              <Form.Control type="email" placeholder="Confirm email" />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" placeholder="password" />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirm Password:</Form.Label>
              <Form.Control type="password" placeholder="Confirm password" />
            </Form.Group>

            <Button variant="primary" type="submit" className="register-button">
              <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Register</Link>
            </Button>

            <p className="login-link">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Register;