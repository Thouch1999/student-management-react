import { useEffect, useState } from "react";
import Table from "../../components/table/Table";
import { getStudent } from "../../Services/student";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import './Home.css'
import ThemeToggle from "../../components/themeToggle/ThemeToggle";

const Home = () => {
  // const [student, setSudent] = useState([]);
  // const [error, setError] = useState(null);
  // const fectStudent = async() => {
  //   setError(null);
  //   try {
  //     const dataStudent=await getStudent();
  //       console.log(dataStudent );
  //       // setSudent(dataStudent.data);
  //       // UI

  //   } catch (err) {
  //     console.error(err);
  //     setSudent([]);
  //     setError(true);
  //   }
  // };
  // useEffect(() => {
  //   fectStudent();
  // }, []);

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const handleGoToDashboard = () => {
    setIsLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };
  return (
    // <Layout>

    // </Layout>

    <>
      <div className="landing-page">
        {/* Header */}
        <header className="landing-header">
          <div className="header-content">
            <div className="logo">
              <div className="logo-icon">🎓</div>
              <span className="logo-text">EduManage</span>
            </div>
            <nav className="nav-links">
              <a href="#features">Features</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
            <div className="header-actions">
              <ThemeToggle/>
              <button className="btn btn-outline" onClick={() => navigate('/login')}>
                Sign In
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <div className="badge">
                <span>✨</span>
                Modern Student Management System
              </div>
              <h1 className="hero-title">
                Manage Your Students
                <span className="gradient-text"> Efficiently</span>
              </h1>
              <p className="hero-description">
                A comprehensive platform for educational institutions to manage
                student data, track academic progress, and streamline
                administrative tasks with ease.
              </p>
              <div className="hero-actions">
                <button
                  className="btn btn-primary btn-large"
                  onClick={handleGoToDashboard}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="loading-spinner-small"></div>
                      Entering Dashboard...
                    </>
                  ) : (
                    <>🚀 Get Started</>
                  )}
                </button>
                <button className="btn btn-secondary btn-large">
                  📚 Learn More
                </button>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Schools</div>
                </div>
                <div className="stat">
                  <div className="stat-number">50K+</div>
                  <div className="stat-label">Students</div>
                </div>
                <div className="stat">
                  <div className="stat-number">99%</div>
                  <div className="stat-label">Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="dashboard-preview">
                <div className="preview-header">
                  <div className="preview-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="preview-content">
                  <div className="preview-sidebar">
                    <div className="sidebar-item active">📊 Dashboard</div>
                    <div className="sidebar-item">🎓 Students</div>
                    <div className="sidebar-item">📚 Courses</div>
                    <div className="sidebar-item">📅 Schedule</div>
                  </div>
                  <div className="preview-main">
                    <div className="preview-stats">
                      <div className="preview-stat"></div>
                      <div className="preview-stat"></div>
                      <div className="preview-stat"></div>
                    </div>
                    <div className="preview-table">
                      <div className="table-row"></div>
                      <div className="table-row"></div>
                      <div className="table-row"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features-section">
          <div className="container">
            <div className="section-header">
              <h2>Powerful Features</h2>
              <p>Everything you need to manage your educational institution</p>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">👥</div>
                <h3>Student Management</h3>
                <p>
                  Comprehensive student profiles with academic records,
                  attendance, and performance tracking.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Analytics & Reports</h3>
                <p>
                  Detailed insights and customizable reports to monitor
                  institutional performance.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔒</div>
                <h3>Secure & Reliable</h3>
                <p>
                  Enterprise-grade security with data encryption and regular
                  backups.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📱</div>
                <h3>Mobile Friendly</h3>
                <p>
                  Responsive design that works perfectly on all devices and
                  screen sizes.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>Fast Performance</h3>
                <p>
                  Lightning-fast interface with optimized database queries and
                  caching.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔄</div>
                <h3>Auto Updates</h3>
                <p>
                  Automatic system updates with new features and security
                  patches.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Transform Your Institution?</h2>
              <p>
                Join thousands of educational institutions using EduManage to
                streamline their operations.
              </p>
              <button
                className="btn btn-primary btn-large"
                onClick={handleGoToDashboard}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="loading-spinner-small"></div>
                    Redirecting...
                  </>
                ) : (
                  "Start Managing Today →"
                )}
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="landing-footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <div className="logo">
                  <div className="logo-icon">🎓</div>
                  <span className="logo-text">EduManage</span>
                </div>
                <p>
                  Modern student management system for educational institutions.
                </p>
              </div>
              <div className="footer-section">
                <h4>Product</h4>
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#demo">Demo</a>
              </div>
              <div className="footer-section">
                <h4>Company</h4>
                <a href="#about">About</a>
                <a href="#blog">Blog</a>
                <a href="#careers">Careers</a>
              </div>
              <div className="footer-section">
                <h4>Support</h4>
                <a href="#help">Help Center</a>
                <a href="#contact">Contact</a>
                <a href="#docs">Documentation</a>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2024 EduManage. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
