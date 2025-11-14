import "./Header.css";
import ThemeToggle from "../themeToggle/ThemeToggle";

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
    <header className={`header ${sidebarCollapsed ? "collapsed" : ""}`}>
      <div className="header-left">
        <button className="menu-toggle mobile-only" onClick={onMenuToggle}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </button>

        <button
          className="sidebar-toggle desktop-only"
          onClick={onSidebarToggle}
          title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </button>

        <div className="logo">
          <h1>Admin Dashboard</h1>
        </div>
      </div>

      {/* <div className="header-right">
        <div className="header-search">
          <input type="text" placeholder="Search..." />
        </div>

        <button className="fullscreen-btn">
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path
              d="M8 3H3V8M16 3h5v5M3 16v5h5M21 16v5h-5"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </button>

        <div className="notification-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 22a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2Zm6-6V11a6 6 0 0 0-12 0v5L4 18v1h16v-1l-2-2Z"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>

        <ThemeToggle />

        <div className="user-menu dropdown">
          <div className="user-avatar">
            <span>AD</span>
          </div>
          <div className="user-name">Admin User</div>

          <div className="dropdown-menu">
            <button>Profile</button>
            <button>Settings</button>
            <button>Logout</button>
          </div>
        </div>

        <select className="language-switcher">
          <option value="en">EN</option>
          <option value="kh">KH</option>
          <option value="fr">FR</option>
        </select>
      </div> */}
      <div className="header-right ">
        {/* Search bar */}
        <div className="header-search animated-search">
          <input type="text" placeholder="Search..." />
          <svg width="18" height="18" viewBox="0 0 24 24">
            <circle
              cx="11"
              cy="11"
              r="8"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="21"
              y1="21"
              x2="16.65"
              y2="16.65"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Fullscreen button */}
        <button className="icon-btn fullscreen-btn">
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path
              d="M8 3H3V8M16 3h5v5M3 16v5h5M21 16v5h-5"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </button>

        {/* Notification (with badge) */}
        <div className="notification-wrapper">
          <button className="icon-btn notification-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 22a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2Zm6-6V11a6 6 0 0 0-12 0v5L4 18v1h16v-1l-2-2Z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            <span className="notif-badge">4</span>
          </button>

          {/* Notification dropdown */}
          <div className="notif-dropdown">
            <h4>Notifications</h4>

            <div className="notif-item">
              <span className="dot dot-danger"></span>
              New user registered
            </div>

            <div className="notif-item">
              <span className="dot dot-warning"></span>
              System running high usage
            </div>

            <div className="notif-item">
              <span className="dot dot-info"></span>
              Backup completed successfully
            </div>

            <button className="view-all">View All</button>
          </div>
        </div>

        {/* Theme switch */}
        <ThemeToggle />

        {/* User dropdown */}
        <div className="user-menu">
          <div className="user-avatar">
            <span>AD</span>
          </div>

          <div className="dropdown-panel">
            <button>Profile</button>
            <button>Settings</button>
            <button className="logout-btn">Logout</button>
          </div>
        </div>

        {/* Language switch */}
        <select className="language-switcher">
          <option value="en">EN</option>
          <option value="kh">KH</option>
          <option value="fr">FR</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
