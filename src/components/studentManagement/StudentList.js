// components/StudentList.jsx
import React, { useState, useEffect } from 'react';
import './StudentList.css';
import { getStudent } from '../../Services/student';

const StudentList = () => {
  const [students, setStudents] = useState([{}
  ]);

  

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  // const [error, setError] = useState(null);
   const fectStudent = async() => {
    // setError(null);
      const dataStudent=await getStudent();
        console.log(dataStudent );
        setStudents(dataStudent.data);
        // UI
  };
  useEffect(() => {
    fectStudent();
  }, []);

  // Check system preference and localStorage for dark mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setDarkMode(true);
    }
  }, []);

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleViewDetails = (student) => {
    setSelectedStudent(student);
    setShowDetailModal(true);
  };

  const handleEdit = (student) => {
    console.log('Edit student:', student);
    // Add your edit logic here
  };

  const handleDelete = (student) => {
    if (window.confirm(`Are you sure you want to delete ${student.name}?`)) {
      setStudents(prev => prev.filter(s => s.id !== student.id));
    }
  };

  const getStatusBadge = (status) => {
    return (
      <span className={`status-badge ${status === 'active' ? 'status-active' : 'status-inactive'}`}>
        {status === 'active' ? 'Active' : 'Inactive'}
      </span>
    );
  };

  return (
    <div className="student-management">
      {/* Header Section */}
      <div className="page-header">
        <div className="header-content">
          <div className="title-section">
            <h1 className="page-title">Student Management</h1>
            <p className="page-subtitle">Manage and view all student information</p>
          </div>
          <div className="header-actions">
            <button className="btn btn-primary">
              <span className="btn-icon">+</span>
              Add New Student
            </button>
            <button className="btn btn-secondary">
              <span className="btn-icon">📊</span>
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon total">🎓</div>
          <div className="stat-info">
            <div className="stat-number">{students.length}</div>
            <div className="stat-label">Total Students</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon active">✅</div>
          <div className="stat-info">
            <div className="stat-number">
              {students.filter(s => s.status === 'active').length}
            </div>
            <div className="stat-label">Active Students</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon inactive">⏸️</div>
          <div className="stat-info">
            <div className="stat-number">
              {students.filter(s => s.status === 'inactive').length}
            </div>
            <div className="stat-label">Inactive Students</div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="filters-section">
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Search students by name, phone, or address..."
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
        <div className="filter-actions">
          <select className="filter-select">
            <option value="">All Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <select className="filter-select">
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Student Table */}
      <div className="content-card">
        <div className="table-header">
          <h3>Student List</h3>
          <div className="table-actions">
            <span className="table-info">
              Showing {students.length} students
            </span>
          </div>
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th className="text-center">No.</th>
                <th>Student Name</th>
                <th>Gender</th>
                <th>Date of Birth</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                // <tr key={student.id} className="student-row">
                //   <td className="text-center">{student.id}</td>
                //   <td>
                //     <div className="student-info">
                //       <div className="student-avatar">
                //         {student.name.split(' ').map(n => n[0]).join('')}
                //       </div>
                //       <div className="student-details">
                //         <div className="student-name">{student.name}</div>
                //         <div className="student-id">ID: STU{student.no.padStart(3, '0')}</div>
                //       </div>
                //     </div>
                //   </td>
                //   <td>
                //     <div className="gender-cell">
                //       <span className={`gender-badge ${student.gender.toLowerCase()}`}>
                //         {student.gender}
                //       </span>
                //     </div>
                //   </td>
                //   <td>{student.dob}</td>
                //   <td>
                //     <div className="phone-cell">
                //       <span className="phone-number">{student.phone}</span>
                //     </div>
                //   </td>
                //   <td>
                //     <div className="address-cell">
                //       <span className="address-text" title={student.address}>
                //         {student.address}
                //       </span>
                //     </div>
                //   </td>
                //   <td>{getStatusBadge(student.status)}</td>
                //   <td>
                //     <div className="action-buttons">
                //       <button 
                //         className="btn-action btn-view"
                //         onClick={() => handleViewDetails(student)}
                //         title="View Details"
                //       >
                //         👁️
                //       </button>
                //       <button 
                //         className="btn-action btn-edit"
                //         onClick={() => handleEdit(student)}
                //         title="Edit Student"
                //       >
                //         ✏️
                //       </button>
                //       <button 
                //         className="btn-action btn-delete"
                //         onClick={() => handleDelete(student)}
                //         title="Delete Student"
                //       >
                //         🗑️
                //       </button>
                //     </div>
                //   </td>
                // </tr>
                <tr>
                  <td>{student.id}</td>
                  <td>{student.student_name}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {students.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">🎓</div>
            <h3>No Students Found</h3>
            <p>There are no students matching your criteria.</p>
            <button className="btn btn-primary">Add First Student</button>
          </div>
        )}
      </div>

      {/* Student Detail Modal */}
      {showDetailModal && selectedStudent && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Student Details</h3>
              <button 
                className="modal-close"
                onClick={() => setShowDetailModal(false)}
              >
                ×
              </button>
            </div>
            <div className="modal-content">
              <div className="student-profile">
                <div className="profile-avatar">
                  {selectedStudent.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="profile-info">
                  <h4>{selectedStudent.name}</h4>
                  <p>Student ID: STU{selectedStudent.no.padStart(3, '0')}</p>
                </div>
              </div>
              
              <div className="details-grid">
                <div className="detail-item">
                  <label>Gender</label>
                  <span>{selectedStudent.gender}</span>
                </div>
                <div className="detail-item">
                  <label>Date of Birth</label>
                  <span>{selectedStudent.dob}</span>
                </div>
                <div className="detail-item">
                  <label>Phone Number</label>
                  <span>{selectedStudent.phone}</span>
                </div>
                <div className="detail-item full-width">
                  <label>Address</label>
                  <span>{selectedStudent.address}</span>
                </div>
                <div className="detail-item">
                  <label>Status</label>
                  <span>{getStatusBadge(selectedStudent.status)}</span>
                </div>
              </div>
            </div>
            <div className="modal-actions">
              <button 
                className="btn btn-secondary"
                onClick={() => setShowDetailModal(false)}
              >
                Close
              </button>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  handleEdit(selectedStudent);
                  setShowDetailModal(false);
                }}
              >
                Edit Student
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentList;