import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import Dashboard from './Components/Pages/Dashboard';
import Database from './Components/Pages/Database';
import Add from './Components/Pages/Add';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<Database />} />
        <Route path="/add-employee" element={<Add />} />
      </Routes>
    </Router>
  );
}

export default App;