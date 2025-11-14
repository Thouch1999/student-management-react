import  "./Header.css"
import ThemeToggle from "../themeToggle/ThemeToggle";
import { useTheme } from '../../contexts/ThemeContext';
// const Header = ({ onMenuToggle,onSidebarToggle }) => {
//    const { theme, toggleTheme, isDark } = useTheme();

// return (
//     <header className="header">
//       <div className="header-left">
//         <button className="menu-toggle" onClick={onMenuToggle}>
//           <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//             <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" />
//           </svg>
//         </button>
        
//         <button className="sidebar-toggle" onClick={onSidebarToggle} title="Toggle sidebar">
//           <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//             <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2"/>
//           </svg>
//         </button>
        
//         <div className="logo">
//           <h1>Admin Dashboard</h1>
//         </div>
//       </div>
      
//       <div className="header-right">
//         {/* <button className="theme-toggle" onClick={toggleTheme} title={`Switch to ${isDark ? 'light' : 'dark'} mode`}>
//           {isDark ? (
//             // Sun icon for light mode
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <circle cx="12" cy="12" r="5"/>
//               <line x1="12" y1="1" x2="12" y2="3"/>
//               <line x1="12" y1="21" x2="12" y2="23"/>
//               <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
//               <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
//               <line x1="1" y1="12" x2="3" y2="12"/>
//               <line x1="21" y1="12" x2="23" y2="12"/>
//               <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
//               <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
//             </svg>
//           ) : (
//             // Moon icon for dark mode
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
//             </svg>
//           )}
//         </button> */}
//         <ThemeToggle/>
        
//         <div className="user-menu">
//           <div className="user-avatar">
//             <span>AD</span>
//           </div>
//           <span className="user-name">Admin User</span>
//         </div>
//       </div>
//     </header>
//   );
// };
const Header = ({ onMenuToggle, onSidebarToggle, sidebarCollapsed }) => {

  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-toggle mobile-only" onClick={onMenuToggle}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
        
        <button 
          className="sidebar-toggle desktop-only" 
          onClick={onSidebarToggle}
          title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
        
        <div className="logo">
          <h1>Admin Dashboard</h1>
        </div>
      </div>
      
      <div className="header-right">
       <ThemeToggle/>
        
        <div className="user-menu">
          <div className="user-avatar">
            <span>AD</span>
          </div>
          <span className="user-name">Admin User</span>
        </div>
      </div>
    </header>
  );
};


export default Header;