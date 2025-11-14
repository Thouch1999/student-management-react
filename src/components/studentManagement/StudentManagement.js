import { useState } from "react";
import "./StudentManagement.css";
import Layout from "../layout/Layout";
import StudentList from "./StudentList";

const StudentManagement = () => {
  // const [students, setStudents] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState('');
  // const [showForm, setShowForm] = useState(false);
  // const [editingStudent, setEditingStudent] = useState(null);
  // const [stats, setStats] = useState(null);
  // const [filters, setFilters] = useState({
  //   page: 1,
  //   limit: 10,
  //   course: '',
  //   status: '',
  //   search: ''
  // });

  // const loadStudents = async () => {
  //   setLoading(true);
  //   setError('');
  //   try {
  //     const response = await apiService.getStudents(filters);
  //     setStudents(response.data);
  //   } catch (err) {
  //     setError(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const loadStats = async () => {
  //   try {
  //     const response = await apiService.getStudentStats();
  //     setStats(response.data);
  //   } catch (err) {
  //     console.error('Failed to load stats:', err);
  //   }
  // };

  // useEffect(() => {
  //   loadStudents();
  //   loadStats();
  // }, [filters]);

  // const handleCreate = () => {
  //   setEditingStudent(null);
  //   setShowForm(true);
  // };

  // const handleEdit = (student) => {
  //   setEditingStudent(student);
  //   setShowForm(true);
  // };

  // const handleDelete = async (id) => {
  //   if (window.confirm('Are you sure you want to delete this student?')) {
  //     try {
  //       await apiService.deleteStudent(id);
  //       loadStudents();
  //       loadStats();
  //     } catch (err) {
  //       setError(err.message);
  //     }
  //   }
  // };

  // const handleFormSubmit = async (studentData) => {
  //   try {
  //     if (editingStudent) {
  //       await apiService.updateStudent(editingStudent.id, studentData);
  //     } else {
  //       await apiService.createStudent(studentData);
  //     }
  //     setShowForm(false);
  //     setEditingStudent(null);
  //     loadStudents();
  //     loadStats();
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  // const handleFormCancel = () => {
  //   setShowForm(false);
  //   setEditingStudent(null);
  // };

  return (
    <Layout>
      <StudentList/>
      {/* <div className="student-management">
        <div className="page-header">
          <div className="page-title">
            <h2>Student Management</h2>
            <p>Manage student records and information</p>
          </div>
          <button className="btn btn-primary">
            <span>+ Add Student</span>
          </button>
        </div>

        <div className="content-card">
          <StudentList
          students={students}
          loading={loading}
          onEdit={handleEdit}
          onDelete={handleDelete}
          />
        </div>
      </div> */}
    </Layout>
  );
};

export default StudentManagement;
