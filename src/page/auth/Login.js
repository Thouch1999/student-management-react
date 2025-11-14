// components/Login.jsx
import React, { useState } from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Form, 
  Button, 
  Alert,
  InputGroup,
  Spinner
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
import ThemeToggle from '../../components/themeToggle/ThemeToggle';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock successful login
      console.log('Login successful:', formData);
      
      // Store authentication token (in real app)
      localStorage.setItem('authToken', 'mock-jwt-token');
      localStorage.setItem('user', JSON.stringify({
        name: 'Admin User',
        email: formData.email,
        role: 'administrator'
      }));

      // Redirect to dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      setErrors({ submit: 'Invalid email or password' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = (role) => {
    const demoAccounts = {
      admin: { email: 'admin@school.edu', password: 'admin123' },
      teacher: { email: 'teacher@school.edu', password: 'teacher123' },
      student: { email: 'student@school.edu', password: 'student123' }
    };

    setFormData(demoAccounts[role]);
  };

  return (
    <div className="login-page">
      <Container className="h-100">
        <Row className="h-100">
          {/*Login Form */}
          <Col lg={12} className="login">
            <div className="login-form-container">
             
              <Card className="login-card">
                <Card.Body className="p-5">
                  {/* Header */}
                  <div className="text-center mb-4">
                    <div className="login-mobile-logo d-lg-none mb-3">
                      <span className="logo-icon">🎓</span>
                    </div>
                    <h2 className="login-title">Welcome Back</h2>
                    <p className="login-subtitle">
                      Sign in to your account to continue
                    </p>
                    <ThemeToggle/>
                  </div>
                   

                  {/* Demo Accounts */}
                  <div className="demo-accounts mb-4 align-center">
                    <p className="text-muted text-center small mb-2">
                      Try demo accounts:
                    </p>
                    <div className="demo-buttons">
                      <Button
                        variant="outline-primary"
                        size="sm"
                        className="me-2 mb-2"
                        onClick={() => handleDemoLogin('admin')}
                        disabled={isLoading}
                      >
                        Admin
                      </Button>
                      <Button
                        variant="outline-success"
                        size="sm"
                        className="me-2 mb-2"
                        onClick={() => handleDemoLogin('teacher')}
                        disabled={isLoading}
                      >
                        Teacher
                      </Button>
                      <Button
                        variant="outline-info"
                        size="sm"
                        className="mb-2"
                        onClick={() => handleDemoLogin('student')}
                        disabled={isLoading}
                      >
                        Student
                      </Button>
                    </div>
                  </div>

                  {/* Error Alert */}
                  {errors.submit && (
                    <Alert variant="danger" className="mb-3">
                      {errors.submit}
                    </Alert>
                  )}

                  {/* Login Form */}
                  <Form onSubmit={handleSubmit}>
                    {/* Email Field */}
                    <Form.Group className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                        disabled={isLoading}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>

                    {/* Password Field */}
                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <InputGroup>
                        <Form.Control
                          type={showPassword ? "text" : "password"}
                          name="password"
                          placeholder="Enter your password"
                          value={formData.password}
                          onChange={handleChange}
                          isInvalid={!!errors.password}
                          disabled={isLoading}
                        />
                        <Button
                          variant="outline-secondary"
                          onClick={() => setShowPassword(!showPassword)}
                          disabled={isLoading}
                        >
                          {showPassword ? '🙈' : '👁️'}
                        </Button>
                        <Form.Control.Feedback type="invalid">
                          {errors.password}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>

                    {/* Remember Me & Forgot Password */}
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <Form.Check
                        type="checkbox"
                        name="rememberMe"
                        label="Remember me"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                        disabled={isLoading}
                      />
                      <a href="#forgot-password" className="text-decoration-none">
                        Forgot password?
                      </a>
                    </div>

                    {/* Submit Button */}
                    <Button
                      variant="primary"
                      type="submit"
                      className="w-100 login-btn"
                      disabled={isLoading}
                      size="lg"
                    >
                      {isLoading ? (
                        <>
                          <Spinner
                            animation="border"
                            size="sm"
                            className="me-2"
                          />
                          Signing In...
                        </>
                      ) : (
                        'Sign In'
                      )}
                    </Button>
                  </Form>

                  {/* Divider */}
                  <div className="divider my-4">
                    <span className="divider-text">or</span>
                  </div>

                  {/* Social Login */}
                  <div className="social-login">
                    <Button
                      variant="outline-dark"
                      className="w-100 mb-2"
                      disabled={isLoading}
                    >
                      <span className="social-icon">🔑</span>
                      Sign in with SSO
                    </Button>
                  </div>

                  {/* Footer Links */}
                  <div className="text-center mt-4">
                    <p className="text-muted">
                      Don't have an account?{' '}
                      <a href="#signup" className="text-decoration-none">
                        Contact administrator
                      </a>
                    </p>
                  </div>
                </Card.Body>
              </Card>

              {/* Copyright */}
              <div className="text-center mt-3">
                <p className="text-muted small">
                  &copy; 2024 EduManage. All rights reserved.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;