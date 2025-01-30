import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";

const EmployeeLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const location = useLocation();

  const links = [
    { path: "/employee", label: "Dashboard" },
    { path: "/employee/employee/data", label: "ข้อมูลพนักงาน" },    
    { path: "/employee/member/data", label: "ข้อมูลสมาชิก" },
  ];

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex w-full h-screen">
      {/* Sidebar */}
      <Sidebar links={links} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Content Area */}
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "lg:ml-64" : "lg:ml-0"}`}>
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default EmployeeLayout;