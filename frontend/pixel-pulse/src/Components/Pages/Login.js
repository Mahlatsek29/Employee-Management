// Login.js

import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate and Link
import Logo from '../Images/PPM.PNG';
import './Login.css';

const loginStyle = {
  backgroundImage: `url(${require("../Images/Main-Background.jpg")})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
};

function Login() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic if needed
    // Navigate to the Dashboard after successful login
    navigate('/dashboard');
  };

  return (
    <div style={loginStyle}>
      <Card className="login-card">
        <Card.Img variant="top" src={Logo} alt="Company Logo" className="logo-img" />
        <Card.Body>
          <Card.Title className="card-title">Login</Card.Title>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control type="text" placeholder="Enter your username" />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>

            <Button variant="primary" type="submit" className="login-button">
              Login
            </Button>
          </Form>
          <p className="register-link">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Login;