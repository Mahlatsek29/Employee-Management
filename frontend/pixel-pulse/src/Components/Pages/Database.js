import React, { useState } from 'react';
import Header from '../Global-Components/Header';
import Navbar from '../Global-Components/Navbar';
import Footer from '../Global-Components/Footer';
import EmployeesData from '../Global-Components/Employees';

const employeesStyle = {
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

const contentContainer = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '10px',
  borderRadius: '8px',
  maxHeight: '100vh',
  overflowY: 'auto',
};

const tableStyle = {
  width: '100%',
  color: '#333',
  borderCollapse: 'collapse',
};

const thStyle = {
  background: '#371F76',
  color: 'white',
  padding: '15px',
  textAlign: 'left',
  borderBottom: '2px solid white',
  whiteSpace: 'nowrap',
};

const tdStyle = {
  padding: '15px',
  borderBottom: '5px solid #ddd',
  whiteSpace: 'nowrap',
};

const cardStyle = {
  transition: 'background-color 0.3s',
  backgroundColor: '#C8A4D4',
};

const actionCellStyle = {
  display: 'flex',
  gap: '5px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  backgroundColor: '#C8A4D4',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const buttonStyle = {
  backgroundColor: '#643B9F',
  color: 'white',
  padding: '10px',
  borderRadius: '5px',
  cursor: 'pointer',
};

function Database() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedEmployee, setEditedEmployee] = useState(null);
  const [employeesData, setEmployeesData] = useState(EmployeesData);

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    setIsEditing(true);
    setEditedEmployee({ ...employee });
  };

  const handleSave = () => {
    // Add logic to save the edited employee data
    console.log('Saving employee data:', editedEmployee);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (selectedEmployee) {
      const index = employeesData.findIndex((employee) => employee.id === selectedEmployee.id);

      if (index !== -1) {
        const updatedEmployeesData = [...employeesData];
        updatedEmployeesData.splice(index, 1);

        setSelectedEmployee(null);
        setIsEditing(false);
        setEmployeesData(updatedEmployeesData);

        console.log('Deleted employee data:', selectedEmployee);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  return (
    <div>
      <Header />
      <Navbar />
      <div style={employeesStyle}>
        <div style={contentContainer}>
          {isEditing ? (
            <div>
              <h2>Edit Employee</h2>
              <form style={formStyle}>
                <label>
                  Name:
                  <input type="text" name="name" value={editedEmployee.name} onChange={handleInputChange} />
                </label>
                <label>
                  Surname:
                  <input type="text" name="surname" value={editedEmployee.surname} onChange={handleInputChange} />
                </label>
                <label>
                  Position:
                  <input type="text" name="position" value={editedEmployee.position} onChange={handleInputChange} />
                </label>
                <label>
                  Department:
                  <input type="text" name="department" value={editedEmployee.department} onChange={handleInputChange} />
                </label>
                <label>
                  Phone Number:
                  <input type="text" name="phone" value={editedEmployee.phone} onChange={handleInputChange} />
                </label>
                <label>
                  Email:
                  <input type="text" name="email" value={editedEmployee.email} onChange={handleInputChange} />
                </label>
                <div style={actionCellStyle}>
                  <button style={buttonStyle} type="button" onClick={handleSave}>
                    Save
                  </button>
                  <button style={buttonStyle} type="button" onClick={handleCancelEdit}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>ID</th>
                  <th style={thStyle}>Image</th>
                  <th style={thStyle}>Name</th>
                  <th style={thStyle}>Surname</th>
                  <th style={thStyle}>Position</th>
                  <th style={thStyle}>Department</th>
                  <th style={thStyle}>Phone Number</th>
                  <th style={thStyle}>Email</th>
                  <th style={thStyle}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {EmployeesData.map((employee) => (
                  <React.Fragment key={employee.id}>
                    <tr
                      style={{
                        ...cardStyle,
                        backgroundColor: selectedEmployee === employee ? '#f0f0f0' : 'white',
                      }}
                    >
                      <td style={tdStyle}>{employee.id}</td>
                      <td style={tdStyle}>
                        <img
                          src={employee.image}
                          alt={`${employee.name} ${employee.surname}`}
                          style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                        />
                      </td>
                      <td style={tdStyle}>{employee.name}</td>
                      <td style={tdStyle}>{employee.surname}</td>
                      <td style={tdStyle}>{employee.position}</td>
                      <td style={tdStyle}>{employee.department}</td>
                      <td style={tdStyle}>{employee.phone}</td>
                      <td style={tdStyle}>{employee.email}</td>
                      <td style={{ ...tdStyle, ...actionCellStyle }}>
                        <button style={buttonStyle} onClick={() => handleEdit(employee)}>
                          Edit
                        </button>
                        <button style={buttonStyle} onClick={() => handleDelete(employee)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Database;