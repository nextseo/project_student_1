// import React from 'react';
// import Header from './Header';
// import Sidebar from './Sidebar';

// const Layout = ({ children }) => {



//   return (
//     <div className="flex min-h-screen">
//       <Sidebar />
//       <div className="flex flex-col w-full">
//         <Header />
//         <div className="p-4 bg-gray-100  h-full">{children}</div>
//       </div>
//     </div>
//   );
// };

// export default Layout;

import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import { AuthContext } from '../contexts/AuthContext';

const Layout = ({ children }) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Main Content */}
      <div className="flex flex-col w-full">
        {/* Header */}
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
    
        <div className="p-4 h-full bg-gray-200">{children}</div>
      </div>
    </div>
  );
};

export default Layout;