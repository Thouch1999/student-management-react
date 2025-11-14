// components/Sidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import "./Sidebar.css";

const Sidebar = ({ isOpen, onClose, collapsed, onToggle }) => {
  const location = useLocation();
  const { isDark } = useTheme();

const menuItems = [
  { path: '/', icon: '📊', label: 'Dashboard', badge: null },
  { path: '/students', icon: '🎓', label: 'Students', badge: '12' }, // Changed this line
  { path: '/courses', icon: '📚', label: 'Courses', badge: null },
  { path: '/attendance', icon: '✅', label: 'Attendance', badge: null },
  { path: '/grades', icon: '📝', label: 'Grades', badge: null },
  { path: '/reports', icon: '📈', label: 'Reports', badge: null },
  { path: '/settings', icon: '⚙️', label: 'Settings', badge: null },
];

  const handleLinkClick = () => {
    // Close mobile sidebar when a link is clicked
    if (window.innerWidth <= 1024) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      <aside className={`sidebar ${collapsed ? 'sidebar-collapsed' : 'sidebar-expanded'} ${isOpen ? 'sidebar-open' : ''} ${isDark ? 'sidebar-dark' : 'sidebar-light'}`}>
        
        {/* Sidebar Header */}
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <div className="logo-icon">⚡</div>
            {!collapsed && (
              <div className="logo-text">
                <span className="logo-primary">Admin</span>
                <span className="logo-secondary">Pro</span>
              </div>
            )}
          </div>
          
          <div className="sidebar-header-actions">
            {/* Hide toggle button on mobile since we have the hamburger menu */}
            <button 
              className="sidebar-toggle-btn desktop-only" 
              onClick={onToggle}
              title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                {collapsed ? (
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                ) : (
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                )}
              </svg>
            </button>
            
            <button className="sidebar-close mobile-only" onClick={onClose}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          <div className="nav-section">
            {!collapsed && <div className="nav-section-label">MAIN</div>}
            <ul>
              {menuItems.slice(0, 4).map(item => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`sidebar-link ${location.pathname === item.path ? 'active' : ''} ${collapsed ? 'collapsed' : ''}`}
                    onClick={handleLinkClick}
                    title={collapsed ? item.label : ''}
                  >
                    <div className="sidebar-link-content">
                      <span className="sidebar-icon">{item.icon}</span>
                      {!collapsed && <span className="sidebar-label">{item.label}</span>}
                    </div>
                    {!collapsed && item.badge && (
                      <span className="sidebar-badge">{item.badge}</span>
                    )}
                    {collapsed && item.badge && (
                      <span className="sidebar-badge-collapsed">{item.badge}</span>
                    )}
                    {location.pathname === item.path && !collapsed && <div className="active-indicator"></div>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav-section">
            {!collapsed && <div className="nav-section-label">TOOLS</div>}
            <ul>
              {menuItems.slice(4).map(item => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`sidebar-link ${location.pathname === item.path ? 'active' : ''} ${collapsed ? 'collapsed' : ''}`}
                    onClick={handleLinkClick}
                    title={collapsed ? item.label : ''}
                  >
                    <div className="sidebar-link-content">
                      <span className="sidebar-icon">{item.icon}</span>
                      {!collapsed && <span className="sidebar-label">{item.label}</span>}
                    </div>
                    {!collapsed && item.badge && (
                      <span className="sidebar-badge">{item.badge}</span>
                    )}
                    {collapsed && item.badge && (
                      <span className="sidebar-badge-collapsed">{item.badge}</span>
                    )}
                    {location.pathname === item.path && !collapsed && <div className="active-indicator"></div>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Sidebar Footer */}
        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="user-avatar">
              <div className="avatar-placeholder">
                {!collapsed ? 'AD' : 'A'}
              </div>
              <div className="online-indicator"></div>
            </div>
            {!collapsed && (
              <div className="user-info">
                <div className="user-name">Admin User</div>
                <div className="user-role">Administrator</div>
              </div>
            )}
          </div>
          
          {/* Desktop collapse toggle */}
          <button 
            className="sidebar-collapse-bottom desktop-only" 
            onClick={onToggle}
            title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              {collapsed ? (
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              ) : (
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              )}
            </svg>
            {!collapsed && <span>Collapse Sidebar</span>}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
