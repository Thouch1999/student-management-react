import { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./Layout.css";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    const saved = localStorage.getItem('sidebarCollapsed');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', JSON.stringify(sidebarCollapsed));
  }, [sidebarCollapsed]);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const closeMobileSidebar = () => {
    setSidebarOpen(false);
  };

  const openMobileSidebar = () => {
    setSidebarOpen(true);
  };

  return (
    <div className="layout">
      <Header 
        onMenuToggle={openMobileSidebar}
        onSidebarToggle={toggleSidebar}
        sidebarCollapsed={sidebarCollapsed}
      />
      <div className="layout-body">
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={closeMobileSidebar}
          collapsed={sidebarCollapsed}
          onToggle={toggleSidebar}
        />
        <main className={`layout-main ${sidebarCollapsed ? 'layout-main-expanded' : ''}`}>
          <div className="layout-content">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};


export default Layout;
